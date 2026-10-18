# 最终独立验证报告（verification_report）

- **验证对象**：软考中项备考应用 `I:\trae_projects\examapp`
- **验证范围**：①知识库修正（questions.js / handbook_data.js / dictation_data.js / formulas.js / case_templates.js / case_sprint_data.js）；②新增「考前必背」模块；③新增「机考模拟」模块（三套卷 mock_exam_a/b/c.js）
- **验证方式**：Node 脚本静态核查 + `node --check` 语法检查 + file:// 浏览器实测（Chrome Aha Browser Use）
- **验证日期**：2026-10-18
- **验证人**：最终独立验证子任务（只读，未修改任何项目文件；仅生成本报告）

---

## 一、总体结论

**核心验收项全部通过，可交付；但发现 2 个中等问题（1 个口诀漏改、1 个 id 撞车）和若干轻微/历史遗留问题，需组织者决策是否修复。**

| 验收项 | 结论 | 证据 |
|---|---|---|
| (1) 225 单选 + 12 案例跨卷零重复/零雷同 | ✅ 通过（仅 1 处轻微题干撞车，见问题4） | 脚本输出见 §2 |
| (2) 三套卷 morning 配比一致 / id 连续唯一 / answer 与 options 匹配 / 案例分值=75 | ✅ 全部通过 | 脚本输出见 §3 |
| (3) 全部 JS 文件 node --check | ⚠️ 实际加载文件 15/15 通过；2 个未被引用的死文件语法错误 | 见 §4 |
| (4) 浏览器 file:// 实测无回归 | ✅ 通过（控制台无 JS/Vue 报错，仅 favicon 无关报错） | 见 §5 |
| (5) 纠错核对 | ⚠️ 大部分生效，1 处口诀漏改（问题1）、1 处 id 撞车（问题2） | 见 §6 |

---

## 二、跨卷去重核查（核心验收项 1）

**脚本**：`verify/check_mock.js`（加载 window.mockExamPapers，题干去空白/标点后规范化，Levenshtein 编辑距离 + 案例 Jaccard 关键词重叠率）

### 2a. 225 道单选题 stem 两两比较
- **三套卷单选题总数 = 225（A75+B75+C75）✅**
- **精确重复题对：0** ✅
- **跨卷高相似题对（编辑距离率<0.35，较短题干≥15字）：仅 2 对**，均为通用句式「关于XX，下列说法正确/错误的是」，考点完全不同，**非雷同题**：
  - `A24`(项目与运营) vs `B29`(WBS词典)：距离率 0.33，话题不同
  - `A58`(项目团队资源获取) vs `B65`(项目变更请求处理)：距离率 0.32，话题不同

### 2b. 12 道案例 scenario 相似度（跨卷 Jaccard>0.25）
- **高相似案例对：0** ✅（12 个案例场景：政务软件挣值 / 政务平台变更 / 智慧药房风险 / 政务沟通干系人 / 集成项目关键路径压缩 / 质量管理 / 范围管理WBS / 采购合同CPIF / 智慧城市挣值储备EMV / 整合章程 / 资源RACI冲突 / 配置监理，场景均不撞）

### 2c. 案例小问题干跨卷重复
- **跨卷重复数：0** ✅

### 2d. 与既有题库（questionsData / sprintPapersData）morning 题雷同抽查
- 既有题库题干数 397（questionsData 170 + sprint 6×40=240）
- 全部 225 道模拟题与既有题库逐对比对后，**无「整句雷同 + 同选项 + 同答案」的整题重复**。所有命中对均为「同考点、不同选项、不同答案」（如 A27 项目章程 vs q2024001、B39 应急/管理储备 vs paper6_q14、C23 OPA vs paper4_q3），属正常考点覆盖。
- **唯一例外（轻度，见问题4）**：`A62`「关于"确认范围"与"控制质量"，下列说法正确的是」与冲刺卷 `paper4_q30` / `paper5_q30` / `paper6_q27` 题干几乎逐字相同（仅差引号），但 4 个选项与正确答案（A62=A，冲刺卷均=D）完全不同。

---

## 三、数据完整性核查（验收项 2）

**脚本**：`verify/check_mock.js` 输出摘要

| 检查项 | 卷A | 卷B | 卷C |
|---|---|---|---|
| morning 题数（期望75） | 75 ✅ | 75 ✅ | 75 ✅ |
| id 连续唯一（A01-A75 等） | 无缺失/多余/重复 ✅ | B01-B75 无异常 ✅ | C01-C75 无异常 ✅ |
| 每题 4 选项 | 0 异常 ✅ | 0 异常 ✅ | 0 异常 ✅ |
| answer 与 options label 匹配 | 0 不匹配 ✅ | 0 不匹配 ✅ | 0 不匹配 ✅ |
| explanation 非空 | 0 空 ✅ | 0 空 ✅ | 0 空 ✅ |
| ref 非空 | 0 空 ✅ | 0 空 ✅ | 0 空 ✅ |
| 英文题（id 72-75，含英文术语） | 4 道且均含英文 ✅ | 4 ✅ | 4 ✅ |
| afternoon 案例数（期望4） | 4（AC1-AC4）✅ | 4（BC1-BC4）✅ | 4（CC1-CC4）✅ |
| 案例小问分值合计 | AC1=20(6+4+6+4) / AC2=19(6+6+4+3) / AC3=18(6+6+6) / AC4=18(6+6+6) → **总75** ✅ | BC1=20(6+6+8) / BC2=19(8+6+5) / BC3=18(7+3+8) / BC4=18(7+5+6) → **总75** ✅ | CC1=20(6+6+4+4) / CC2=19(5+6+4+4) / CC3=18(6+6+6) / CC4=18(6+5+7) → **总75** ✅ |

**三套 morning 按 area 配比一致性（26 区）**：**全部 26 区三套题数完全相同，不一致区数 = 0** ✅
（信息化发展2 / 信息技术发展2 / ITSS4 / 信息系统架构4 / 软件工程2 / 数据工程4 / 软硬件集成2 / 信息安全2 / 项目管理概论4 / 启动2 / 范围3 / 进度5 / 成本4 / 质量2 / 风险3 / 沟通2 / 采购2 / 干系人1 / 资源1 / 执行7 / 监控7 / 组织保障2 / 监理2 / 法规1 / 职业道德1 / 英文术语4，合计均=75）

---

## 四、语法检查（验收项 3）

对项目根目录全部 `.js` 文件逐一 `node --check`（排除 vue.min.js 压缩库）：

- **实际被 index.html 加载的 15 个 JS 文件全部通过** ✅：
  db.js、questions.js、chapters.js、formulas.js、mindmap.js、case_templates.js、textbook_exercises_data.js、sprint_questions.js、handbook_data.js、dictation_data.js、case_sprint_data.js、must_memorize_data.js、mock_exam_a.js、mock_exam_b.js、mock_exam_c.js、app.js
- **2 个语法失败文件，但均为未被 index.html 引用的死文件/备份，不影响运行**（见问题5）：
  - `chapters_enhanced.js`：第4行 `id: " chapter1\` 无效 token（转义损坏，且编码乱码）
  - `questions_backup.js`：80 字节 UTF-16 截断文件（仅 `window.questionsData = ` 残句）

---

## 五、浏览器回归实测（验收项 4）

**方式**：`file:///I:/trae_projects/examapp/index.html` 实际操作

| 测试项 | 结果 | 实测证据 |
|---|---|---|
| 控制台 JS/Vue 报错 | ✅ 无 | 全程仅 favicon.ico CORS 报错（无关项）；「数据库连接成功」log 正常；交卷后 console_messages 为空 `[]` |
| 📌 考前必背模块 | ✅ 通过 | 渲染 50 条/12 分组；展开折叠正常；⭐标记计数由 1→2（点击生效）；「考前必背(50条/12组) ↔ 应掌握(35条/7组)」Tab 切换正常 |
| 💻 机考模拟模块 | ✅ 通过 | 三套卷卡片均可「开始作答」；卷A进入后 75 题导航/150分钟倒计时/A01题与4选项渲染正常；答1题(B，恰为A01正确答案)→交卷→成绩「1/75分、未达45分线」、知识领域正确率表（26区逐行）、下午案例「试题一20分」场景+小问+参考答案+评分要点全部正常显示 |
| 既有-📝高频默写 | ✅ 通过 | 13 知识分类 / 33 核心口诀 / 9 大领域 Tab 正常 |
| 既有-🧮案例冲刺 | ✅ 通过 | 方法论/找茬模板/计算题 Tab 正常 |
| 既有-📊模拟考试 | ✅ 通过 | 上午75题/下午案例卡片正常 |
| 既有-📖教材习题 | ✅ 通过 | 单选/简答 Tab、章节选择正常 |
| 修正数据加载-📋案例模板 | ✅ 通过 | 找错/改错/简答/计算题分类渲染正常 |
| 修正数据加载-🎯考点冲刺手册 | ✅ 通过 | handbook_data 渲染「171 核心考点 / 20 章节·附录」正常 |

---

## 六、纠错核对（验收项 5，抽查）

对照 `docs/knowledge_audit.md` 顶部修正记录逐条核对：

| 修正点 | 文件:位置 | 结论 |
|---|---|---|
| 团队五阶段「发挥」→「成熟」 | dictation_data.js:360 | ✅ items 已为「成熟阶段」 |
| 口诀「形震规发解」→「形震规熟解」 | dictation_data.js:832 | ✅ mnemonicTable 已改 |
| **同上，d6-2 条目自身 mnemonic** | **dictation_data.js:355** | ❌ **仍是旧版「形震规发解」（见问题1）** |
| 非典型偏差 ETC=BAC-EV、EAC=AC+(BAC-EV) | formulas.js:134 | ✅ 已补，与典型偏差并列 |
| 案例模板挣值自洽 EAC≈112.5/ETC=67.5/VAC=-12.5 | case_templates.js:362-368 | ✅ 已按精确 CPI=0.8889 重算并加注释 |
| 「项目整体管理」→「项目整合管理」 | questions.js 全库 | ✅ 「项目整体管理」残留 0 处 |
| **重复 id 修正（q2024013 第二处改 q2024014）** | **questions.js:2353 / 2372** | ❌ **q2024014 现重复（见问题2）** |
| PERT 解析「取整12」→「≈11.67天按选项取12」 | questions.js:57 | ✅ 已改 |
| handbook 13-7 EV「实际工作预算费用」→「已完工作预算费用」 | handbook_data.js:1682 | ✅ 已改 |
| fc-12「人力」→「资源」/ category「资源管理」 | formulas.js:249,275 | ✅ 已改，注明旧称 |
| 质量工具按第3版口径（管理质量6种/控制质量4种，弃老七种） | formulas.js:263 / case_sprint_data.js:322 | ✅ 已改，无「老七种/分层法」残留 |

---

## 七、发现的问题清单（不自行修复，逐条报告）

### 【问题1 · 中等】dictation_data.js 团队发展阶段口诀自相矛盾
- **文件+位置**：`dictation_data.js` 第 355 行（d6-2 条目）
- **现象**：同一条目 `d6-2` 的 `items[3]` 已改为「成熟阶段：…（旧版称"发挥阶段"）」（第360行），但其 `mnemonic` 仍是旧版 **「形震规发解」**；而第 832 行 mnemonicTable 已改为「形震规熟解」。
- **矛盾**：口诀第四字「发」与条目正文「成熟」不一致；与第832行也不一致。knowledge_audit.md 声称「d6-2 + mnemonicTable」均已修正，实际 d6-2 的 mnemonic 漏改。
- **复现**：`Select-String dictation_data.js -Pattern "形震规发解"` 命中第355行。
- **建议**：第355行 `mnemonic: '形震规发解'` 改为 `'形震规熟解'`。

### 【问题2 · 中等】questions.js 出现重复 id `q2024014`
- **文件+位置**：`questions.js` 第 2353 行 与 第 2372 行
- **现象**：两道完全不同的题共用 id `q2024014`：
  - 第2353行：「项目管理计划不包括（）」answer=C（项目整合管理）
  - 第2372行：「某活动最早开始第5天、最晚开始第10天，总浮动时间为」answer=B（项目进度管理）
- **根因**：knowledge_audit.md 条目7「重复 id q2024013 第二处改为 q2024014」时，未检查到库中已存在 q2024014，导致撞车。
- **复现**：`node -e "global.window=global;require('I:/trae_projects/examapp/questions.js');const m={};window.questionsData.forEach(q=>m[q.id]=(m[q.id]||0)+1);console.log(Object.entries(m).filter(([k,v])=>v>1))"`
- **建议**：第2372行（总浮动时间题）改为未占用的新 id（如 q2024015）。

### 【问题3 · 低 / 附带发现（历史遗留，非本次改动引入）】questionsData 存在大量整题重复与 id 撞车
- **现象**（脚本 `verify/check_dup_nature.js`）：questionsData 170 题中，以下 id 各出现 2 次——
  - **整题完全重复（题干+答案全同）**：`q2026001`、`q2026002`、`q2026011` 等 2026 年单选，及案例题 `q2026001a`（连参考答案都逐字相同）；
  - **两道不同题撞 id**：`q2025001`（混合模型题 vs 启动工作题）、`q2024014`（即问题2）。
- **说明**：这些均为既有题库历史问题，knowledge_audit.md 未声称修复；本次机考模拟模块未引入。但因 Vue `v-for` 用 id 作 key，重复 id 可能导致列表渲染 key 冲突，建议组织者后续清理。

### 【问题4 · 轻微】机考卷 A62 题干与冲刺卷三道题几乎逐字相同
- **文件+位置**：`mock_exam_a.js` `A62`「关于"确认范围"与"控制质量"，下列说法正确的是」
- **现象**：与 `sprint_questions.js` 的 `paper4_q30` / `paper5_q30` / `paper6_q27` 题干规范化后完全相同（仅差引号）。
- **影响**：选项内容与正确答案不同（A62=A，冲刺卷均=D），不算整题重复；但同一考点在同一 App 内题干文案撞车明显，对备考用户体感重复。
- **建议**：A62 可改写场景化或调整问法（如改为「关于确认范围与控制质量的先后/输出，正确的是」）。

### 【问题5 · 提示】2 个未被引用的死文件含语法错误
- **文件**：`chapters_enhanced.js`（转义损坏+编码乱码）、`questions_backup.js`（80字节截断残句）
- **影响**：均未被 index.html 的 `<script>` 引用，不影响应用运行（§4 实测证实）。
- **建议**：作为死文件删除或归档，避免误用。

---

## 八、复现方式（供组织者复核）

```powershell
cd I:\trae_projects\examapp
# 跨卷去重 + 数据完整性（输出同§2/§3）
node "C:\Users\lhp\AppData\Local\Doubao\User Data\Default\.doubao\agent_mode\workspace\.sessions\38447612471013378\agents\s_000EfnBrI1N\verify\check_mock.js"
# 与既有题库雷同
node "...\verify\check_existing.js"
# questions.js 重复 id
node "...\verify\check_qids.js"
# 语法检查
Get-ChildItem *.js -File | Where-Object Name -ne 'vue.min.js' | ForEach-Object { node --check $_.FullName }
# 浏览器
# 直接双击打开 I:\trae_projects\examapp\index.html
```

---

**验证结论：核心验收项（跨卷去重、数据完整性、语法、浏览器无回归）全部通过，机考模拟模块与考前必背模块功能正常、可交付。需组织者决策的遗留问题为 2 个中等问题（dictation d6-2 口诀漏改、questions.js q2024014 撞车）及 3 个轻微/历史问题。**
