# -*- coding: utf-8 -*-
"""
解析两个软考冲刺手册 HTML（1-7章 / 9-15章），
提取章节、分区、考点卡片（含频度与内容 HTML），输出 handbook_data.js
"""
import re
import json
from html.parser import HTMLParser

# ---------------- DOM 构建 ----------------
VOID_TAGS = {'br', 'hr', 'img', 'input', 'meta', 'link', 'col', 'area',
             'base', 'embed', 'source', 'track', 'wbr'}


class DOMBuilder(HTMLParser):
    def __init__(self):
        # convert_charrefs=False 保留原始 &lt; 等文本，重建时原样输出
        super().__init__(convert_charrefs=False)
        self.root = {'tag': '#root', 'attrs': {}, 'children': []}
        self.cur = self.root

    def _append_text(self, data):
        if data == '':
            return
        children = self.cur['children']
        if children and children[-1].get('tag') == '#text':
            children[-1]['text'] += data
        else:
            children.append({'tag': '#text', 'text': data})

    def handle_data(self, data):
        self._append_text(data)

    def handle_entityref(self, name):
        self._append_text('&' + name + ';')

    def handle_charref(self, name):
        self._append_text('&#' + name + ';')

    def handle_starttag(self, tag, attrs):
        node = {'tag': tag, 'attrs': dict(attrs), 'children': [], 'parent': self.cur}
        self.cur['children'].append(node)
        if tag.lower() not in VOID_TAGS:
            self.cur = node

    def handle_startendtag(self, tag, attrs):
        node = {'tag': tag, 'attrs': dict(attrs), 'children': [], 'parent': self.cur}
        self.cur['children'].append(node)

    def handle_endtag(self, tag):
        tag = tag.lower()
        if tag in VOID_TAGS:
            return
        node = self.cur
        while node is not self.root and node['tag'] != tag:
            node = node['parent']
        if node is not self.root:
            self.cur = node['parent']


# ---------------- HTML 序列化 ----------------
def serialize(node):
    """把 DOM 节点(或节点列表)重建为 HTML 字符串，保留原始文本标记"""
    if isinstance(node, list):
        return ''.join(serialize(n) for n in node)
    if node['tag'] == '#text':
        return node.get('text', '')
    attrs = node['attrs']
    attr_str = ''
    for k, v in attrs.items():
        if v is None:
            attr_str += ' ' + k
        else:
            attr_str += ' %s="%s"' % (k, v.replace('&', '&amp;').replace('"', '&quot;'))
    tag = node['tag']
    children = node['children']
    if tag in VOID_TAGS and not children:
        return '<%s%s/>' % (tag, attr_str)
    return '<%s%s>%s</%s>' % (tag, attr_str, serialize(children), tag)


def text_of(node):
    """提取节点纯文本"""
    if node['tag'] == '#text':
        return node.get('text', '')
    return ''.join(text_of(c) for c in node.get('children', []))


def has_class(node, cls):
    return cls in node['attrs'].get('class', '').split()


# ---------------- 结构提取 ----------------
def find_all(root, tag, cls=None):
    """按标签(可选class)在树中查找所有元素"""
    out = []

    def walk(n):
        if n['tag'] == tag and (cls is None or has_class(n, cls)):
            out.append(n)
        for c in n.get('children', []):
            if c['tag'] != '#text':
                walk(c)
    walk(root)
    return out


def find_first(root, tag, cls=None):
    for n in find_all(root, tag, cls):
        return n
    return None


def direct_children(node, tag=None, cls=None):
    out = []
    for c in node.get('children', []):
        if c['tag'] == '#text':
            continue
        if tag is not None and c['tag'] != tag:
            continue
        if cls is not None and not has_class(c, cls):
            continue
        out.append(c)
    return out


def child_blocks(node):
    """返回节点的直接子元素（排除文本）"""
    return direct_children(node)


def strip_tags(html):
    return re.sub(r'<[^>]+>', '', html)


def parse_freq(kp_node):
    """提取频度: 返回 (level, text)"""
    freq_el = find_first(kp_node, 'span', 'freq')
    if freq_el is None:
        return 3, '基础'
    cls = freq_el['attrs'].get('class', '')
    m = re.search(r'f(\d)', cls)
    level = int(m.group(1)) if m else 3
    txt = text_of(freq_el).strip()
    label = {'5': '高频', '4': '中频', '3': '基础', '2': '低频', '1': '低频'}.get(str(level), txt)
    return level, (txt or label)


def parse_kp(kp_node):
    """解析一个考点卡片 -> dict"""
    kpid_el = find_first(kp_node, 'span', 'kpid')
    kpid = text_of(kpid_el).strip() if kpid_el else ''
    # 标题：1-7 手册 kp 内 div.tt，9-15 手册 div.kp-head
    head = find_first(kp_node, 'div', 'tt') or find_first(kp_node, 'div', 'kp-head')
    title = ''
    if head:
        # 标题 = 去掉 kpid 与 freq 后的文本
        for c in head['children']:
            if c['tag'] == '#text':
                title += c['text']
            elif has_class(c, 'kp-title'):
                title += text_of(c)
    title = title.strip()
    # 内容 = kp 中除头部(tt/kp-head)外的所有直接子元素
    content_children = []
    for c in kp_node['children']:
        if c['tag'] == '#text':
            continue
        if c['tag'] == 'div' and (has_class(c, 'tt') or has_class(c, 'kp-head')):
            continue
        content_children.append(c)
    html = serialize(content_children).strip()
    level, level_text = parse_freq(kp_node)
    return {
        'id': kpid,
        'title': title,
        'freq': level,
        'freqText': level_text,
        'html': html,
    }


def parse_section_block(sec_node):
    """解析章节/附录 section -> dict"""
    ch_head = find_first(sec_node, 'div', 'ch-head')
    num, h2_text, en = '', '', ''
    if ch_head:
        num_el = find_first(ch_head, 'div', 'num')
        if num_el:
            num = text_of(num_el).strip()
        h2_el = find_first(ch_head, 'h2')
        if h2_el:
            h2_text = text_of(h2_el).strip()
        en_el = find_first(ch_head, 'div', 'en')
        if en_el:
            en = text_of(en_el).strip()
    else:
        h2_el = find_first(sec_node, 'h2')
        if h2_el:
            h2_text = text_of(h2_el).strip()

    stat = []
    stat_el = find_first(sec_node, 'div', 'ch-stat')
    if stat_el:
        for span in direct_children(stat_el, 'span'):
            b = find_first(span, 'b')
            label = span['attrs'].get('data-label', '')
            stat.append({'label': label, 'html': serialize(span).strip()})

    desc = ''
    desc_el = find_first(sec_node, 'p', 'ch-desc')
    if desc_el:
        desc = text_of(desc_el).strip()

    # 分区：h3.sec 到下一个 h3.sec
    sections = []
    sec_headers = find_all(sec_node, 'h3', 'sec')
    children = [c for c in sec_node['children'] if c['tag'] != '#text']

    if sec_headers:
        for i, h in enumerate(sec_headers):
            s_title = text_of(h).strip()
            # 收集该分区下、下一个分区之前的子元素
            start_idx = children.index(h) + 1
            end_idx = children.index(sec_headers[i + 1]) if i + 1 < len(sec_headers) else len(children)
            body_nodes = children[start_idx:end_idx]
            # 提取考点卡片
            points = []
            rest = []
            for b in body_nodes:
                if b['tag'] == 'div' and has_class(b, 'kp'):
                    points.append(parse_kp(b))
                else:
                    rest.append(b)
            if points:
                sections.append({'title': s_title, 'points': points, 'html': ''})
            else:
                sections.append({'title': s_title, 'points': [], 'html': serialize(rest).strip()})
    else:
        # 无分区：整个 section 下的 kp 平铺
        points = []
        rest = []
        for b in children:
            if b['tag'] == 'div' and has_class(b, 'kp'):
                points.append(parse_kp(b))
            elif b['tag'] in ('div', 'p') and (has_class(b, 'ch-head') or has_class(b, 'ch-desc')):
                continue
            elif b['tag'] == 'h2':
                # 9-15手册：h2 是章节/附录标题，已单独提取，避免重复渲染
                continue
            else:
                rest.append(b)
        sections.append({'title': '', 'points': points, 'html': serialize(rest).strip()})

    is_appendix = 'appendix' in sec_node['attrs'].get('class', '') or \
                  sec_node['attrs'].get('id', '').startswith(('apx', 'app'))
    return {
        'id': sec_node['attrs'].get('id', ''),
        'isAppendix': is_appendix,
        'num': num,
        'title': h2_text,
        'en': en,
        'desc': desc,
        'stat': stat,
        'sections': sections,
    }


def parse_handbook(path):
    with open(path, encoding='utf-8') as f:
        html = f.read()
    builder = DOMBuilder()
    builder.feed(html)
    root = builder.root
    sections = []
    for sec in find_all(root, 'section'):
        if has_class(sec, 'chapter') or has_class(sec, 'appendix'):
            sections.append(parse_section_block(sec))
    return sections


# ---------------- 统计与输出 ----------------
def stats(sections):
    kp_total = 0
    tables = 0
    mn = 0
    trap = 0
    for s in sections:
        for sec in s['sections']:
            kp_total += len(sec['points'])
            body = sec['html'] + ''.join(p['html'] for p in sec['points'])
            tables += body.count('<table>')
            mn += body.count('box mn')
            trap += body.count('box trap')
    return kp_total, tables, mn, trap


def main():
    h17 = parse_handbook(r'G:\Documents\Trae-CN\default\ruankao-1-7-handbook\ruankao-1-7-handbook.html')
    h915 = parse_handbook(r'G:\Documents\Trae-CN\default\ruankao-9-15-handbook\ruankao-9-15-handbook.html')

    ch17 = [s for s in h17 if not s['isAppendix']]
    ap17 = [s for s in h17 if s['isAppendix']]
    ch915 = [s for s in h915 if not s['isAppendix']]
    ap915 = [s for s in h915 if s['isAppendix']]

    kp17, tb17, mn17, tr17 = stats(h17)
    kp915, tb915, mn915, tr915 = stats(h915)

    data = {
        'parts': [
            {
                'id': 'part17',
                'icon': '🖥️',
                'title': '第1-7章 · 综合知识（技术篇）',
                'subtitle': '信息与信息化 → 软硬件系统集成',
                'chapters': ch17,
                'appendices': ap17,
                'stats': {'chapters': len(ch17), 'kps': kp17, 'tables': tb17, 'mnemonics': mn17, 'traps': tr17},
            },
            {
                'id': 'part915',
                'icon': '📋',
                'title': '第9-15章 · 项目管理（管理篇）',
                'subtitle': '项目管理概论 → 组织保障',
                'chapters': ch915,
                'appendices': ap915,
                'stats': {'chapters': len(ch915), 'kps': kp915, 'tables': tb915, 'mnemonics': mn915, 'traps': tr915},
            },
        ],
    }

    json_str = json.dumps(data, ensure_ascii=False, indent=1)
    # 防止 </script> 提前终止
    json_str = json_str.replace('</script', '<\\/script')
    js = '// 选择题考点冲刺手册数据（由 parse_handbook.py 从两个手册 HTML 自动生成，勿手改）\n' \
         '// 来源: 第1-7章手册 + 第9-15章手册\n' \
         'window.handbookData = ' + json_str + ';\n'

    out_path = r'I:\trae_projects\examapp\handbook_data.js'
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(js)

    print('1-7章: 章节=%d 附录=%d 考点=%d 表格=%d 口诀=%d 易错=%d' % (len(ch17), len(ap17), kp17, tb17, mn17, tr17))
    print('9-15章: 章节=%d 附录=%d 考点=%d 表格=%d 口诀=%d 易错=%d' % (len(ch915), len(ap915), kp915, tb915, mn915, tr915))
    print('输出:', out_path)


if __name__ == '__main__':
    main()
