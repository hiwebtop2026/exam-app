# -*- coding: utf-8 -*-
"""核对解析结果与原始手册的考点差异"""
import re, json, sys
sys.path.insert(0, r'I:\trae_projects\examapp')
from parse_handbook import parse_handbook

h17 = parse_handbook(r'G:\Documents\Trae-CN\default\ruankao-1-7-handbook\ruankao-1-7-handbook.html')
h915 = parse_handbook(r'G:\Documents\Trae-CN\default\ruankao-9-15-handbook\ruankao-9-15-handbook.html')

def all_kp_ids(sections):
    ids = []
    for s in sections:
        for sec in s['sections']:
            for p in sec['points']:
                ids.append(p['id'])
    return ids

ids17 = all_kp_ids(h17)
ids915 = all_kp_ids(h915)

# 原始手册中的 kpid
raw17 = re.findall(r'kpid">([^<]+)<', open(r'G:\Documents\Trae-CN\default\ruankao-1-7-handbook\ruankao-1-7-handbook.html', encoding='utf-8').read())
raw915 = re.findall(r'kpid">([^<]+)<', open(r'G:\Documents\Trae-CN\default\ruankao-9-15-handbook\ruankao-9-15-handbook.html', encoding='utf-8').read())

print('1-7 原始kpid: %d, 解析: %d' % (len(raw17), len(ids17)))
print('缺失:', [x for x in raw17 if x not in ids17])
print('多余:', [x for x in ids17 if x not in raw17])
print('9-15 原始kpid: %d, 解析: %d' % (len(raw915), len(ids915)))
print('缺失:', [x for x in raw915 if x not in ids915])
print('多余:', [x for x in ids915 if x not in raw915])

# 找缺失考点在原始HTML中的上下文
for miss in [x for x in raw17 if x not in ids17] + [x for x in raw915 if x not in ids915]:
    html = open(r'G:\Documents\Trae-CN\default\ruankao-1-7-handbook\ruankao-1-7-handbook.html', encoding='utf-8').read() if '考点' in miss else open(r'G:\Documents\Trae-CN\default\ruankao-9-15-handbook\ruankao-9-15-handbook.html', encoding='utf-8').read()
    idx = html.find(miss)
    print('\n=== %s ===' % miss)
    print(html[idx-300:idx+200])
