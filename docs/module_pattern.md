# 功能模块接入模式文档（module_pattern）

以「高频默写 dictation」「案例冲刺 caseSprint」两个模块为范例，说明在本应用（静态 HTML + Vue 2.6 本地 vue.min.js，无构建步骤）中新增一个功能模块需要改动的全部位置。

---

## 0. 全局约定速览

- 应用根节点 `#app`，`el:'#app'`，单文件 `app.js` 包含全部 data/computed/methods/watch。
- 所有模块靠 **`currentTab`** 字符串切换：菜单项 id = 模板里 `v-if="currentTab === '<id>'"` 的字符串，三处必须一致。
- 数据文件一律挂 `window.xxxData` 全局，在 `index.html` 底部 `<script>` 顺序引入，`app.js` 的 data 里以 `window.xxxData || 默认值` 读取。
- 本地持久化用两类：**IndexedDB（db.js 封装，错题/笔记/考试记录）** 和 **localStorage（轻量标记，key 前缀 `examapp_`）**。

---

## 1. index.html 改动点

### 1.1 脚本引入顺序（文末，第 1676-1688 行）

```html
<script src="vue.min.js"></script>
<script src="db.js"></script>
<script src="questions.js?v=7"></script>
<script src="chapters.js"></script>
<script src="formulas.js"></script>
<script src="mindmap.js"></script>
<script src="case_templates.js"></script>
<script src="textbook_exercises_data.js"></script>
<script src="sprint_questions.js?v=2"></script>
<script src="handbook_data.js?v=2"></script>
<script src="dictation_data.js?v=1"></script>
<script src="case_sprint_data.js?v=1"></script>
<script src="app.js?v=13"></script>
```

- 新数据文件（如 `newmodule_data.js`）插在 **app.js 之前、与其相关模块数据之后**；改数据后记得改 `?v=` 版本号防缓存。
- app.js 永远最后引入。

### 1.2 菜单项无需在 HTML 里手写

侧边栏（第 79 行）、移动端抽屉菜单（第 60 行）、移动端底部导航（第 105 行 `menuItems.slice(0, 5)`）全部由 `v-for="item in menuItems"` 渲染——**菜单只需在 app.js 的 menuItems 数组注册**。注意：底部导航只取前 5 个，新模块若想上底部导航需调整 slice。

### 1.3 模块页面模板结构（以 dictation 为例，第 934-1018 行）

```html
<div v-if="currentTab === 'dictation'" class="module">
    <!-- ① Hero 横幅（渐变卡片） -->
    <div class="dictation-hero">
        <div class="dictation-hero-badge">2026.10 考前押题</div>
        <h2>📝 高频默写知识点</h2>
        <p>一句话模块说明</p>
    </div>

    <!-- ② 统计条 -->
    <div class="dictation-stats">
        <div class="dictation-stat"><b>{{ dictationData.length }}</b><span>知识分类</span></div>
        <div class="dictation-stat"><b>{{ dictationMarkedCount }}</b><span>⭐ 重点标记</span></div>
    </div>

    <!-- ③ 二级分类 Tab -->
    <div class="dictation-cat-tabs">
        <button v-for="cat in dictationData" :key="cat.id"
                :class="['dictation-cat-tab', {active: dictationCategoryId === cat.id}]"
                @click="switchDictationCategory(cat.id)">
            <span class="dictation-cat-icon">{{ cat.icon }}</span>
            <span class="dictation-cat-name">{{ cat.title }}</span>
        </button>
    </div>

    <!-- ④ 主体内容区（按当前分类渲染） -->
    <div v-if="currentDictationCategory" class="dictation-content">
        <div class="dictation-toolbar">
            <span class="dictation-count">{{ currentDictationCategory.points.length }} 个考点</span>
            <button class="btn-secondary" @click="toggleDictationAll">全部展开/收起</button>
        </div>
        <div class="dictation-point-grid">
            <div v-for="p in currentDictationCategory.points" :key="p.id"
                 :class="['dictation-point-card', {marked: isDictationMarked(p)}]">
                <div class="dictation-point-head" @click="toggleDictationPoint(p)">…标题…</div>
                <div v-show="isDictationPointExpanded(p)" class="dictation-point-body">…内容…</div>
            </div>
        </div>
    </div>
</div>
```

caseSprint 模块（第 1021 行起）是同一骨架：Hero → 视图切换 Tab（`caseSprintView`）→ 按视图渲染不同 section，内部还有二级 domain Tab。两种变体：

- **dictation 型**：分类 Tab 在数据数组上（`dictationData` 每类含 `points[]`），状态=当前分类 id。
- **caseSprint 型**：顶部固定 5 个视图 Tab（method/domains/calc/qa/confusables），视图内再嵌套子分类。

---

## 2. app.js 改动点

### 2.1 menuItems 注册（第 44-58 行）

```js
menuItems: [
    { id: 'plan', icon: '📅', text: '学习计划', shortText: '计划' },
    …
    { id: 'dictation', icon: '📝', text: '高频默写', shortText: '默写' },
    { id: 'caseSprint', icon: '🧮', text: '案例冲刺', shortText: '案例' },
    // 新模块：{ id: 'newModule', icon: '🆕', text: '新模块', shortText: '新模块' }
],
```

`id` 必须与 index.html 模板里 `currentTab === 'xxx'` 完全一致；`shortText` 供移动端底部导航用。

### 2.2 data 字段（第 200-214 行范例）

```js
// 高频默写
dictationData: window.dictationData || [],
mnemonicTable: window.mnemonicTable || [],
dictationCategoryId: (window.dictationData && window.dictationData[0]) ? window.dictationData[0].id : '',
dictationExpanded: {},       // 展开状态 { pointId: true }
dictationAllExpanded: true,
dictationMarked: {},          // 重点标记 { pointId: true }

// 案例冲刺
caseSprintData: window.caseSprintData || null,
caseSprintView: 'method',
caseSprintDomainId: …, caseSprintCalcId: …,
caseSprintExpanded: {}, caseSprintCalcExpanded: {},
```

约定：**展开/标记类状态用空对象 `$set` 驱动**（Vue 2 响应式），分类选中 id 初始化取数据第一项。

### 2.3 computed 派生（第 217 行起范例）

```js
currentDictationCategory: function() {
    var self = this;
    return this.dictationData.find(function(c){ return c.id === self.dictationCategoryId; }) || null;
},
currentCaseDomain: function() { … this.caseSprintData.domains.find(…) },
```

### 2.4 methods 模式（第 2352-2424 行范例）

| 类型 | 模式 | 例子 |
|---|---|---|
| 展开/收起 | `toggleXxx(item)` 翻布尔 + `$set` | `toggleDictationPoint` |
| 展开判断 | `return this.xxxExpanded[item.id] !== false`（默认展开） | `isDictationPointExpanded` |
| 标记 | `toggleXxxMark` + 写 localStorage | `toggleDictationMark` |
| 标记加载 | `loadXxxMarks()` 从 localStorage 读 | `loadDictationMarks` |
| 视图切换 | 改 view id + `window.scrollTo(0,0)` | `switchCaseSprintView` |

localStorage key 约定前缀 `examapp_`：`examapp_dictation_marks`、`examapp_sprint_marks`。

### 2.5 init() 加载链（第 604-639 行）

```js
init: async function() {
    this.isLoading = true;
    this.errorMessage = '';
    try {
        await db.init();
        await self.loadChapters();
        await self.loadProgress();
        self.loadSprintMarks();      // ← 轻量标记类在此同步加载
        self.loadDictationMarks();   // ← 新模块若有 localStorage 标记，在此加一行
        await Promise.all([
            self.loadQuestions(), self.loadFormulas(), self.loadFlashcards(),
            self.loadMistakes(), self.loadTextbookExercises(), self.loadSprintPapers()
        ]);
    } catch (e) { … } finally { this.isLoading = false; }
}
```

- `mounted()` 直接调 `init()`（第 2443 行）。
- 新模块数据若只靠 `window.xxxData` 全局读取（dictation/caseSprint 都是），**无需写 load 方法**；若需异步加工（如 sprint 试卷），写 `loadXxx()` 加进 `Promise.all`。

---

## 3. styles.css 卡片式样式约定

### 3.1 设计变量（第 9-21 行 `:root`）

```css
--primary-color: #3b82f6;
--success-color: #10b981;  --warning-color: #f59e0b;  --danger-color: #ef4444;
--text-primary: #1f2937;  --text-secondary: #6b7280;
--bg-primary: #fff;  --bg-secondary: #f3f4f6;  --border-color: #e5e7eb;
```

### 3.2 卡片三件套（dictation-point-card 第 4529-4546 行，本项目标准范式）

```css
.xxx-card {
    background: #fff;
    border: 1px solid var(--border-color);
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: all 0.2s;
}
.xxx-card:hover {
    box-shadow: 0 4px 14px rgba(0,0,0,0.1);
    transform: translateY(-2px);   /* hover 上浮 */
}
.xxx-card.marked {                  /* 重点标记态：琥珀色描边 */
    border-color: #f59e0b;
    box-shadow: 0 2px 10px rgba(245,158,11,.18);
}
```

### 3.3 Hero 渐变横幅

- dictation：`linear-gradient(135deg, #1e3a8a 0%, #3b82f6 55%, #06b6d4 100%)`（深蓝→蓝→青，第 4402 行）
- caseSprint：`linear-gradient(135deg, #7c3aed 0%, #6366f1 50%, #06b6d4 100%)`（紫→靛→青，第 4748 行）
- 约定：新模块 hero 沿用 135deg 三段渐变 + 白字 + 右上角 badge 胶囊。

### 3.4 通用类

- 按钮：`.btn-primary`（主色实心、圆角 10px）、`.btn-secondary`（白底描边）、`:hover` 加深。
- 模块容器：`.module`（第 406 行）；`.module-header` + `.module-header h2` + 右上按钮。
- 章节/题目卡统一 hover：`border-color: var(--primary-color); box-shadow: 0 4px 12px rgba(59,130,246,.15)`。

---

## 4. 「模拟考试 exam」模块剖析（供新增「机考模拟」参考）

### 4.1 题目数据结构（window.questionsData，扁平对象数组）

```js
{
  id: 'q2024001',          // 唯一 id（注意：现库有重复 id，新增时必须唯一）
  year: 2024,
  type: 'morning',         // morning=上午选择题 / afternoon=下午案例分析
  chapter: 'project_integration',
  chapterName: '项目整体管理',
  title: '题干简述',
  question: '完整题干\nA. …\nB. …',
  options: [ {label:'A', text:'…'}, … ],
  answer: 'C',             // 选择题存选项字母；案例题 answer 为整段参考答案文本
  explanation: '解析文本',
  tags: ['项目章程'],
  difficulty: 'medium'
}
```

- 选择题（morning）：`options[]` + `answer` 字母，可自动判分。
- 案例题（afternoon）：`question` 为【说明】【问题1】大段文本，`answer` 为参考要点，不自动判分。
- 另有 textbookExercisesData 结构：按章节分组 `{id, name, questions:[{id, questionNumber, type:'single'|'short', options, answer, chapterName}]}`。

### 4.2 作答与判分交互（app.js 第 1777-1904 行）

- **开考** `startExam(type)`：按 `q.type===type` 过滤 → `Utils.shuffleArray` 洗牌 → 上午取前 75 题、下午取前 4 题 → 每题包一层 `{selected:null, answered:false, userAnswer:''}` → 启动 150 分钟倒计时。
- **作答** `selectAnswer(label)`：写入 `currentExamQuestion.selected`，交卷前不即时判对错。
- **交卷** `submitExam()`：仅对 morning 自动判分（`q.selected === q.answer`）；按 chapterName 统计各知识领域正确率；答错且已选的题写入错题本 `db.addMistake`，答对则从错题本移除；最后生成成绩页（45 分及格线，`examResult.score>=45`）。
- **解析模式**：交卷后 `examReviewMode=true`，选项对错高亮（模板第 622-643 行：对绿错红 + 显示 explanation）。

### 4.3 新「机考模拟」模块接入清单

1. 新数据文件 `mock_exam_data.js` 挂 `window.mockExamData`（建议按套卷分组，参照 sprint_questions.js 的 `{id, name, total, questions:[...]}` 结构，单题字段 `{id, type:'single'|'multiple', question, options:[{label,text}], answer, explanation, ref}`）。
2. index.html：`<script src="mock_exam_data.js?v=1"></script>` 放 app.js 前；模板块 `<div v-if="currentTab==='mockExam'" class="module">…</div>`；菜单加 `{id:'mockExam', icon:'💻', text:'机考模拟', shortText:'机考'}`。
3. app.js：data 加 `mockExamData、mockView、mockAnswers、mockCurrentIndex、mockSubmitted` 等；methods 复制 startExam/selectAnswer/submitExam 骨架；多选题判分逻辑改为 `selected.sort().join('') === answer`。
4. styles.css：复用 `.xxx-card` 三件套与 `.btn-primary/.btn-secondary`。
5. 若需记录成绩：localStorage（key `examapp_mock_xxx`）或 db.js 加表。

---

## 5. 新增模块 Checklist

- [ ] 数据文件挂 `window.XxxData`，脚本在 index.html 末尾、app.js 之前引入，带 `?v=N`。
- [ ] app.js menuItems 加一项（id/icon/text/shortText）。
- [ ] data 加模块状态（选中 id、展开 map、标记 map、数据引用）。
- [ ] computed 加「当前选中项」派生。
- [ ] methods 加切换/展开/标记/加载方法。
- [ ] init() 里加 `loadXxxMarks()`（如有 localStorage 标记）。
- [ ] index.html 加 `<div v-if="currentTab==='xxx'" class="module">` 模板。
- [ ] styles.css 按卡片三件套 + Hero 渐变约定加样式。
- [ ] 题目类数据保证 id 唯一；改数据后 bump `?v=`。
