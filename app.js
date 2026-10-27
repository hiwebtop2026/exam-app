var Utils = {
    debounce: function(func, wait) {
        var timeout;
        return function() {
            var context = this;
            var args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                func.apply(context, args);
            }, wait);
        };
    },
    
    formatTime: function(seconds) {
        var hours = Math.floor(seconds / 3600);
        var minutes = Math.floor((seconds % 3600) / 60);
        var secs = seconds % 60;
        return hours.toString().padStart(2, '0') + ':' + 
               minutes.toString().padStart(2, '0') + ':' + 
               secs.toString().padStart(2, '0');
    },
    
    shuffleArray: function(array) {
        // 使用 Fisher-Yates 洗牌算法，添加时间戳作为随机种子增强随机性
        var shuffled = array.slice();
        var seed = Date.now() % 10000;
        for (var i = shuffled.length - 1; i > 0; i--) {
            // 结合 Math.random() 和时间戳种子
            var random = (Math.random() * 10000 + seed) % 1;
            var j = Math.floor(random * (i + 1));
            var temp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = temp;
        }
        return shuffled;
    }
};

new Vue({
    el: '#app',
    data: {
        currentTab: 'plan',
        
        menuItems: [
            { id: 'plan', icon: '📅', text: '学习计划', shortText: '计划' },
            { id: 'keypoints', icon: '📚', text: '学习重点', shortText: '学习' },
            { id: 'notes', icon: '📝', text: '学习笔记', shortText: '笔记' },
            { id: 'practice', icon: '✍️', text: '真题练习', shortText: '练习' },
            { id: 'handbook', icon: '🎯', text: '考点冲刺', shortText: '考点' },
            { id: 'sprint', icon: '⚡', text: '选择冲刺', shortText: '冲刺' },
            { id: 'dictation', icon: '📝', text: '高频默写', shortText: '默写' },
            { id: 'mustMemorize', icon: '📌', text: '考前必背', shortText: '必背' },
            { id: 'caseSprint', icon: '🧮', text: '案例冲刺', shortText: '案例' },
            { id: 'textbook', icon: '📖', text: '教材习题', shortText: '教材' },
            { id: 'english', icon: '🔤', text: '专业英语', shortText: '英语' },
            { id: 'member', icon: '💎', text: '会员中心', shortText: '会员' },
            { id: 'exam', icon: '📊', text: '模拟考试', shortText: '考试' },
            { id: 'mockExam', icon: '💻', text: '机考模拟', shortText: '机考' },
            { id: 'mistakes', icon: '❌', text: '错题本', shortText: '错题' },
            { id: 'caseAnalysis', icon: '📋', text: '案例模板', shortText: '案例' }
        ],
        
        showMobileMenu: false,

        // 学习进度：由学习计划完成情况计算（loadProgress 会覆盖为本地已保存值）
        overallProgress: 0,
        
        dailyTasks: [
            { id: 1, text: '学习第5章 项目整体管理', completed: false },
            { id: 2, text: '练习挣值分析计算题', completed: true },
            { id: 3, text: '复习风险管理重点', completed: false }
        ],
        
        showPlanDialog: false,
        newPlan: {
            examDate: '',
            dailyHours: 2,
            mode: 'balanced'
        },
        studyPlan: [],
        
        currentChapter: 'chapter5',
        chapters: [],
        
        notes: [],
        currentNote: null,
        
        questions: [],
        practiceFilter: {
            year: '',
            type: '',
            chapter: ''
        },

        years: [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007],
        
        // 考试状态
        examRecords: [],
        inExam: false,
        examType: 'morning',
        examQuestions: [],
        currentQuestionIndex: 0,
        remainingTime: 150 * 60,
        examTimer: null,
        showExamResult: false,
        examResult: {
            score: 0,
            correct: 0,
            total: 0,
            accuracy: 0,
            duration: '',
            analysis: []
        },
        examReviewMode: false,

        // 机考模拟
        mockExamData: (window.mockExamPapers ? Object.keys(window.mockExamPapers).map(function(k){ return window.mockExamPapers[k]; }) : []),
        mockView: 'select',          // select | exam | result
        mockPaper: null,             // 当前试卷对象
        mockCurrentSection: 'morning', // morning | afternoon
        mockQIndex: 0,               // morning: 0-74；afternoon: 0-3（大题序号）
        mockAnswers: {},              // 上午单选答案 {qid: 'A'}
        mockCaseAnswers: {},         // 下午案例答案 {bigId: {subNo: 文本 或 ['B','D']}}
        mockRemaining: 150 * 60,     // 剩余秒数
        mockTimer: null,
        mockSubmitted: false,
        mockScore: 0,
        mockCorrectCount: 0,
        mockAreaStats: [],
        
        // 学习状态
        isLearning: false,
        learningProgress: 0,
        currentLearningChapter: null,
        showLearningDialog: false,
        learningStartTime: null,
        learningTimer: null,
        isLearningPaused: false,
        chapterProgress: {}, // 存储各章节的学习进度
        
        // 笔记编辑状态
        noteTitle: '',
        noteContent: '',
        
        // 练习状态
        showPracticeDialog: false,
        currentPracticeQuestion: null,
        practiceAnswer: '',
        practiceResult: null,
        showExplanationDialog: false,
        practiceAutoJumpCountdown: 0,  // 自动跳转倒计时
        practiceAutoJumpTimer: null,   // 自动跳转定时器
        autoNextTimer: null,      // 自动跳转定时器
        isSubmitting: false,      // 防止重复提交
        
        // 错题本
        mistakeBook: [],
        
        // 专业英语模块状态
        englishData: window.englishData || null,
        englishView: 'trends',              // trends | vocab | quiz
        englishVocabCatId: (window.englishData && window.englishData.vocabCategories && window.englishData.vocabCategories[0]) ? window.englishData.vocabCategories[0].id : '',
        englishHideZh: false,               // 默记模式（隐藏中文释义）
        englishRevealed: {},                // 默记模式下已点开的释义 { en: true }
        englishMarks: {},                   // 重点词汇标记 { en: true }
        englishQuizDomain: 'all',           // all | pm | it | sec
        englishQuizAnswers: {},             // 真题作答记录 { qid: label }

        // 会员授权状态（离线激活码，本地校验，不上传任何数据）
        license: { type: 'free', code: '', activatedAt: null, expiresAt: null, trialUsed: false },
        memberCodeInput: '',
        memberMessage: '',
        memberMessageType: 'info',          // info | success | error
        pendingTab: '',                     // 因未解锁而暂缓进入的模块
        trialDays: 7,
        // 会员专属模块（tab id）
        premiumTabIds: ['exam', 'mockExam', 'sprint', 'dictation', 'mustMemorize', 'caseSprint', 'textbook'],
        premiumFeatures: [
            { id: 'exam', name: '模拟考试', desc: '上午/下午全真计时' },
            { id: 'mockExam', name: '机考模拟', desc: '3 套机考卷 + 4 道案例' },
            { id: 'sprint', name: '选择冲刺', desc: '按章节刷选择题' },
            { id: 'dictation', name: '高频默写', desc: '关键词填空自测' },
            { id: 'mustMemorize', name: '考前必背', desc: '高频考点速记' },
            { id: 'caseSprint', name: '案例冲刺', desc: '案例答题框架' },
            { id: 'textbook', name: '教材习题', desc: '第三版课后习题' },
            { id: 'englishQuiz', name: '专业英语真题', desc: '62 道历年真题 + 解析' }
        ],
        // 年卡激活码哈希（SHA-256，有效期 365 天）
        licenseCodeHashes: [
            'c3552a7a970af1863e38e5ca03436b63ae9de53a84a5ed34e8e71a04a3e09239',
            'a9707d0d71d4dc316c06df91bc777192bf26b18768cb68c0da84c9b957a96c46',
            'de2a52228e1a81c90c36612863fd7c04e5d46863c4f3662026427eee72e2bdea',
            '9fc937b25ce0e64edb6707e4e6dd1fe4aa0c0c23bdaea6dfa299bf6e9dcab55e'
        ],
        // 永久激活码哈希（SHA-256，无到期时间）
        lifetimeCodeHashes: [
            '7e30a5f2f214d2f9ad83d28f458aa713175a2de1f7b0189316a9883cdfc3ada6',
            '8fc4a78c92041b96e4758206e3fa1bc6aabf238ba7340373ecb91b899397d925',
            '777842277133ca5f5fb96c4e67de367ba56627b60941dd77b8a739036c175007',
            '6935fb46027a5b37e51d7c7ea0105c1908055737232572fbfc1fad75a12ab8db',
            '73be02c0730c6e996d5d85244392be62d9bcc45f29ca059498e5c582f5febfd6'
        ],
        // 购买联系方式（部署前替换为你自己的）
        memberContact: {
            wechat: '请替换为你的微信号',
            email: '请替换为你的邮箱'
        },
        memberPlans: [
            {
                id: 'free', name: '免费版', price: '¥0', period: '永久', recommended: false,
                desc: '先体验核心学习功能',
                features: ['学习计划 / 重点 / 笔记', '真题练习 + 错题本', '考点冲刺手册', '专业英语趋势 + 275 高频词']
            },
            {
                id: 'year', name: '全站年卡', price: '¥99', period: '/年', recommended: true,
                desc: '适合一个考季集中冲刺',
                features: ['解锁全部会员功能', '模拟考试 + 机考模拟', '冲刺 / 默写 / 必背 / 案例', '专业英语 62 道真题', '有效期内持续更新']
            },
            {
                id: 'life', name: '永久买断', price: '¥199', period: '一次性', recommended: false,
                desc: '一次付费，长期使用',
                features: ['包含年卡全部权益', '永久有效，不限考季', '后续内容免费更新', '优先答疑支持']
            }
        ],
        
        // 加载状态
        isLoading: false,
        errorMessage: '',
        storageAvailable: true,   // IndexedDB 是否可用（无痕模式可能不可用）
        
        // 系统设置
        settings: {
            fontSize: 'large' // small, medium, large
        },
        showSettingsDialog: false,
        
        // 案例分析模板数据
        caseAnalysisData: window.caseAnalysisTemplates || {},
        currentTemplate: 'template_find_error',
        currentCalcTemplate: 'earned_value',
        expandedAreas: {},
        
        // 教材课后习题数据
        textbookChapters: [],
        expandedTextbookChapters: {},
        textbookTab: 'single',
        selectedTextbookChapter: 'chapter1',
        // 教材习题答题状态
        textbookAnswers: {}, // 存储用户答案 { questionId: answer }
        textbookSubmitted: false, // 是否已交卷
        textbookScore: 0, // 得分

        // 考点冲刺（选择题考点冲刺手册 1-7章 + 9-15章）
        handbookData: window.handbookData || null,
        hbView: 'overview',                 // overview 总览 / chapter 章节 / appendix 附录
        sprintPartId: 'part17',             // 当前浏览的部分
        currentSprintChapter: null,         // 当前章节
        currentSprintAppendix: null,        // 当前附录
        sprintSearch: '',                   // 考点搜索关键词
        sprintFreqFilter: 'all',            // all / 5高频 / 4中频 / 3基础
        sprintMarks: {},                    // 收藏/重点标记 { pointId: true }
        sprintExpanded: {},                 // 考点展开状态 { pointId: true }
        sprintAllExpanded: true,            // 是否全部展开

        // 选择题冲刺模块状态
        sprintPapers: [],          // 冲刺试卷列表
        sprintRecords: {},         // 各试卷最佳成绩记录（localStorage持久化）
        sprintView: 'list',        // list | quiz | result
        currentSprintPaper: null,  // 当前试卷
        sprintQuestions: [],       // 当前试卷题目（含isCorrect标记）
        sprintAnswers: {},         // 用户答案 { questionId: label }
        sprintCurrentIndex: 0,     // 当前题索引
        sprintSubmitted: false,    // 是否已交卷（交卷后才显示解析）
        sprintReviewMode: false,   // 解析模式
        sprintResult: { score: 0, correct: 0, total: 0, answered: 0, duration: '', perChapter: [], wrongIds: [] },
        showSprintSheet: false,    // 答题卡展开
        sprintStartTime: null,      // 开考时间

        // 高频默写知识点模块状态
        dictationData: window.dictationData || [],
        mnemonicTable: window.mnemonicTable || [],   // 核心口诀速查表（33条）
        dictationCategoryId: (window.dictationData && window.dictationData[0]) ? window.dictationData[0].id : '',
        dictationExpanded: {},      // 考点展开状态 { pointId: true }
        dictationAllExpanded: true, // 是否全部展开
        dictationMarked: {},        // 收藏/重点标记 { pointId: true }

        // 考前必背 / 应掌握模块状态
        mustMemorizeData: window.mustMemorizeData || { tiers: [] },
        mustMemorizeTierId: 'must',  // must | master
        mustMemorizeExpanded: {},    // 条目展开状态 { itemId: true }
        mustAllExpanded: true,       // 是否全部展开
        mustMemorizeMarked: {},      // 重点标记 { itemId: true }

        // 案例分析及计算冲刺模块状态
        caseSprintData: window.caseSprintData || null,
        caseSprintView: 'method',   // method | domains | calc | qa | confusables
        caseSprintDomainId: (window.caseSprintData && window.caseSprintData.domains && window.caseSprintData.domains[0]) ? window.caseSprintData.domains[0].id : '',
        caseSprintCalcId: (window.caseSprintData && window.caseSprintData.calc && window.caseSprintData.calc[0]) ? window.caseSprintData.calc[0].id : '',
        caseSprintExpanded: {},     // 模板展开状态 { templateId: true }
        caseSprintCalcExpanded: {}  // 计算题展开状态 { calcId: true }
    },
    
    computed: {
        isMobile: function() {
            return window.innerWidth <= 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        },

        mockCurrentQ: function() {
            if (!this.mockPaper || this.mockCurrentSection !== 'morning') return null;
            return this.mockPaper.morning[this.mockQIndex] || null;
        },

        mockCurrentBig: function() {
            if (!this.mockPaper || this.mockCurrentSection !== 'afternoon') return null;
            return this.mockPaper.afternoon[this.mockQIndex] || null;
        },

        currentChapterData: function() {
            return this.chapters.find(function(c) { 
                return c.id === this.currentChapter; 
            }.bind(this));
        },
        
        currentNoteData: function() {
            return this.notes.find(function(n) { 
                return n.id === this.currentNote; 
            }.bind(this));
        },
        
        filteredQuestions: function() {
            var self = this;
            // 如果没有题目，返回空数组
            if (!this.questions || this.questions.length === 0) {
                return [];
            }
            
            var result = this.questions.slice(); // 创建副本避免修改原数组
            
            if (this.practiceFilter.year && this.practiceFilter.year !== '') {
                var year = parseInt(this.practiceFilter.year);
                result = result.filter(function(q) { 
                    return q.year === year; 
                });
            }
            
            if (this.practiceFilter.type && this.practiceFilter.type !== '') {
                var type = this.practiceFilter.type;
                result = result.filter(function(q) { 
                    return q.type === type; 
                });
            }
            
            if (this.practiceFilter.chapter && this.practiceFilter.chapter !== '') {
                var chapter = this.practiceFilter.chapter;
                result = result.filter(function(q) { 
                    return q.chapter === chapter; 
                });
            }
            
            return result;
        },
        
        currentExamQuestion: function() {
            if (!this.examQuestions || this.examQuestions.length === 0 || this.currentQuestionIndex < 0 || this.currentQuestionIndex >= this.examQuestions.length) {
                return {
                    question: '加载中...',
                    options: [],
                    answer: '',
                    chapterName: '',
                    selected: null,
                    answered: false,
                    isCorrect: false,
                    explanation: ''
                };
            }
            return this.examQuestions[this.currentQuestionIndex];
        },
        
        answeredCount: function() {
            return this.examQuestions.filter(function(q) { 
                return q.answered; 
            }).length;
        },
        
        learningTime: function() {
            if (!this.learningStartTime) return 0;
            var now = new Date();
            var elapsed = Math.floor((now - this.learningStartTime) / (1000 * 60));
            return elapsed;
        },
        
        chaptersList: function() {
            return this.chapters;
        },
        
        practiceStats: function() {
            var total = this.filteredQuestions.length;
            var correct = this.filteredQuestions.filter(function(q) { 
                return q.answered && q.isCorrect; 
            }).length;
            var accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
            
            return {
                total: total,
                correct: correct,
                accuracy: accuracy
            };
        },
        
        // ===== 专业英语 computed =====
        englishTrends: function() {
            return this.englishData ? this.englishData.trends : [];
        },
        englishVocabCategories: function() {
            return this.englishData ? this.englishData.vocabCategories : [];
        },
        currentEnglishVocabCat: function() {
            var self = this;
            return this.englishVocabCategories.find(function(c) { return c.id === self.englishVocabCatId; }) || null;
        },
        englishVocabTotal: function() {
            var total = 0;
            this.englishVocabCategories.forEach(function(c) { total += c.words.length; });
            return total;
        },
        englishVocabMarkedCount: function() {
            var marks = this.englishMarks;
            return Object.keys(marks).filter(function(k) { return marks[k]; }).length;
        },
        englishQuestions: function() {
            return this.englishData ? this.englishData.questions : [];
        },
        englishDomains: function() {
            return [
                { id: 'all', name: '全部' },
                { id: 'pm', name: '🧭 项目管理' },
                { id: 'it', name: '💡 新技术' },
                { id: 'sec', name: '🔐 安全服务' }
            ];
        },
        englishFilteredQuestions: function() {
            var self = this;
            if (this.englishQuizDomain === 'all') return this.englishQuestions;
            return this.englishQuestions.filter(function(q) { return q.domain === self.englishQuizDomain; });
        },
        englishAnsweredCount: function() {
            var answers = this.englishQuizAnswers;
            return this.englishFilteredQuestions.filter(function(q) { return !!answers[q.id]; }).length;
        },
        englishCorrectCount: function() {
            var answers = this.englishQuizAnswers;
            return this.englishFilteredQuestions.filter(function(q) { return answers[q.id] === q.answer; }).length;
        },

        // ===== 会员授权 computed =====
        isTrialActive: function() {
            return this.license.type === 'trial' && !!this.license.expiresAt &&
                new Date(this.license.expiresAt).getTime() > Date.now();
        },
        canAccessPremium: function() {
            if (this.license.type === 'pro') {
                return !this.license.expiresAt || new Date(this.license.expiresAt).getTime() > Date.now();
            }
            return this.isTrialActive;
        },
        licenseStatusText: function() {
            if (this.license.type === 'pro') {
                if (this.license.expiresAt) {
                    if (new Date(this.license.expiresAt).getTime() <= Date.now()) {
                        return '会员已到期（原有效期至 ' + this.formatLicenseDate(this.license.expiresAt) + '）';
                    }
                    return '全站会员（至 ' + this.formatLicenseDate(this.license.expiresAt) + '）';
                }
                return '全站永久会员';
            }
            if (this.license.type === 'trial') {
                return this.isTrialActive ? '免费试用中' : '试用已到期';
            }
            return '免费版';
        },
        licenseRemainingDays: function() {
            if (!this.canAccessPremium || !this.license.expiresAt) return null;
            var diff = new Date(this.license.expiresAt).getTime() - Date.now();
            return Math.max(1, Math.ceil(diff / 86400000));
        },

        fontSizeClass: function() {
            return 'font-size-' + this.settings.fontSize;
        },


        // 案例分析模板计算属性
        currentTemplateData: function() {
            var templates = this.caseAnalysisData.generalTemplates || [];
            return templates.find(function(t) { return t.id === this.currentTemplate; }.bind(this));
        },
        
        currentCalcTemplateData: function() {
            var templates = this.caseAnalysisData.calculationTemplates || {};
            return templates[this.currentCalcTemplate];
        },
        
        // 过滤教材课后习题
        filteredTextbookQuestions: function() {
            var self = this;
            return function(questions) {
                if (!questions) return [];
                return questions.filter(function(question) {
                    return question.type === self.textbookTab;
                });
            };
        },

        // ===== 考点冲刺 computed =====
        sprintParts: function() {
            return this.handbookData ? this.handbookData.parts : [];
        },

        currentSprintPart: function() {
            var self = this;
            return this.sprintParts.find(function(p) { return p.id === self.sprintPartId; }) || null;
        },

        sprintTotalStats: function() {
            var chapters = 0, kps = 0, tables = 0, mnemonics = 0, traps = 0;
            this.sprintParts.forEach(function(p) {
                chapters += p.chapters.length + p.appendices.length;
                kps += p.stats.kps;
                tables += p.stats.tables;
                mnemonics += p.stats.mnemonics;
                traps += p.stats.traps;
            });
            return { chapters: chapters, kps: kps, tables: tables, mnemonics: mnemonics, traps: traps };
        },

        // 总览页每个部分的章节卡片（含考点数与分区数）
        sprintChapterCards: function() {
            var self = this;
            if (!this.currentSprintPart) return [];
            return this.currentSprintPart.chapters.map(function(c) {
                var kpCount = 0;
                c.sections.forEach(function(s) { kpCount += s.points.length; });
                var highCount = 0;
                c.sections.forEach(function(s) {
                    s.points.forEach(function(p) { if (p.freq === 5) highCount++; });
                });
                return {
                    id: c.id,
                    num: c.num,
                    title: c.title,
                    en: c.en,
                    kpCount: kpCount,
                    highCount: highCount,
                    sectionCount: c.sections.length
                };
            });
        },

        // 当前章节考点（按搜索词与频度过滤）
        filteredSprintSections: function() {
            if (!this.currentSprintChapter) return [];
            var self = this;
            var keyword = this.sprintSearch.trim().toLowerCase();
            return this.currentSprintChapter.sections.map(function(sec) {
                var points = sec.points.filter(function(p) {
                    if (self.sprintFreqFilter === 'marked') {
                        if (!self.sprintMarks[p.id]) return false;
                    } else if (self.sprintFreqFilter !== 'all' && p.freq !== parseInt(self.sprintFreqFilter)) {
                        return false;
                    }
                    if (!keyword) return true;
                    var title = (p.title || '').toLowerCase();
                    var body = self._sprintPointText(p);
                    var kpid = (p.id || '').toLowerCase();
                    return title.indexOf(keyword) > -1 || body.indexOf(keyword) > -1 || kpid.indexOf(keyword) > -1;
                });
                return { title: sec.title, html: sec.html, points: points };
            }).filter(function(sec) {
                // 无搜索时保留空分区；有搜索时只保留命中的分区（附录html块也算命中）
                if (!keyword) return true;
                if (sec.points.length > 0) return true;
                if (sec.html && sec.html.toLowerCase().indexOf(keyword) > -1) return true;
                return false;
            });
        },

        // 附录分区内容
        filteredSprintAppendixSections: function() {
            if (!this.currentSprintAppendix) return [];
            var self = this;
            var keyword = this.sprintSearch.trim().toLowerCase();
            return this.currentSprintAppendix.sections.map(function(sec) {
                var match = true;
                if (keyword) {
                    match = (sec.title || '').toLowerCase().indexOf(keyword) > -1 ||
                            (sec.html || '').toLowerCase().indexOf(keyword) > -1;
                }
                return { title: sec.title, html: sec.html, points: sec.points || [], match: match };
            }).filter(function(sec) { return sec.match; });
        },

        sprintMarkedCount: function() {
            var self = this;
            return Object.keys(this.sprintMarks).filter(function(k) { return self.sprintMarks[k]; }).length;
        },

        // 选择题冲刺：当前题目
        currentSprintQuestion: function() {
            if (!this.sprintQuestions || this.sprintQuestions.length === 0 ||
                this.sprintCurrentIndex < 0 || this.sprintCurrentIndex >= this.sprintQuestions.length) {
                return null;
            }
            return this.sprintQuestions[this.sprintCurrentIndex];
        },

        // 选择题冲刺：已答题数
        sprintAnsweredCount: function() {
            if (!this.sprintQuestions) return 0;
            var answers = this.sprintAnswers;
            return this.sprintQuestions.filter(function(q) { return !!answers[q.id]; }).length;
        },

        // 选择题冲刺：进度百分比
        sprintProgressPercent: function() {
            if (!this.sprintQuestions || this.sprintQuestions.length === 0) return 0;
            return Math.round(this.sprintAnsweredCount / this.sprintQuestions.length * 100);
        },

        // 高频默写：当前分类
        currentDictationCategory: function() {
            var self = this;
            if (!this.dictationData || !this.dictationData.length) return null;
            return this.dictationData.find(function(c) { return c.id === self.dictationCategoryId; }) || null;
        },

        // 高频默写：重点标记数量
        dictationMarkedCount: function() {
            var self = this;
            return Object.keys(this.dictationMarked).filter(function(k) { return self.dictationMarked[k]; }).length;
        },

        // 考前必背：当前层级
        currentMustTier: function() {
            var self = this;
            if (!this.mustMemorizeData || !this.mustMemorizeData.tiers) return null;
            return this.mustMemorizeData.tiers.find(function(t) { return t.id === self.mustMemorizeTierId; }) || null;
        },

        // 考前必背：当前层级条目总数
        currentMustTierItemCount: function() {
            var tier = this.currentMustTier;
            if (!tier || !tier.groups) return 0;
            return tier.groups.reduce(function(sum, g) { return sum + (g.items ? g.items.length : 0); }, 0);
        },

        // 考前必背：重点标记数量
        mustMemorizeMarkedCount: function() {
            var self = this;
            return Object.keys(this.mustMemorizeMarked).filter(function(k) { return self.mustMemorizeMarked[k]; }).length;
        },

        // 案例冲刺：当前领域
        currentCaseDomain: function() {
            var self = this;
            if (!this.caseSprintData || !this.caseSprintData.domains) return null;
            return this.caseSprintData.domains.find(function(d) { return d.id === self.caseSprintDomainId; }) || null;
        },

        // 案例冲刺：当前计算题
        currentCaseCalc: function() {
            var self = this;
            if (!this.caseSprintData || !this.caseSprintData.calc) return null;
            return this.caseSprintData.calc.find(function(c) { return c.id === self.caseSprintCalcId; }) || null;
        }
    },
    
    methods: {
        selectTab: function(tabId) {
            if (!tabId) {
                console.error('tabId为空!');
                return;
            }
            if (this.isModuleLocked(tabId)) {
                this.pendingTab = tabId;
                this.currentTab = 'member';
                this.memberMessage = '「' + this.tabName(tabId) + '」为会员专属功能，可免费试用 ' + this.trialDays + ' 天，或输入激活码解锁。';
                this.memberMessageType = 'info';
                this.showMobileMenu = false;
                window.scrollTo(0, 0);
                return;
            }
            this.currentTab = tabId;
            this.showMobileMenu = false;
        },

        // ===== 考点冲刺方法 =====
        _sprintPointText: function(p) {
            // 考点内容纯文本缓存（用于搜索）
            if (!p._text) {
                var div = document.createElement('div');
                div.innerHTML = p.html || '';
                p._text = (div.textContent || '').replace(/\s+/g, ' ').toLowerCase();
            }
            return p._text;
        },

        switchSprintPart: function(partId) {
            this.sprintPartId = partId;
            this.hbView = 'overview';
            this.currentSprintChapter = null;
            this.currentSprintAppendix = null;
        },

        openSprintChapter: function(chapter) {
            this.currentSprintChapter = chapter;
            this.hbView = 'chapter';
            this.currentSprintAppendix = null;
            // 初始化展开状态
            var self = this;
            chapter.sections.forEach(function(sec) {
                sec.points.forEach(function(p) {
                    if (self.sprintExpanded[p.id] === undefined) {
                        self.$set(self.sprintExpanded, p.id, self.sprintAllExpanded);
                    }
                });
            });
            window.scrollTo(0, 0);
        },

        openSprintAppendix: function(appendix) {
            this.currentSprintAppendix = appendix;
            this.hbView = 'appendix';
            this.currentSprintChapter = null;
            window.scrollTo(0, 0);
        },

        backSprintOverview: function() {
            this.hbView = 'overview';
            this.currentSprintChapter = null;
            this.currentSprintAppendix = null;
            this.sprintSearch = '';
            window.scrollTo(0, 0);
        },

        toggleSprintPoint: function(p) {
            var current = !!this.sprintExpanded[p.id];
            this.$set(this.sprintExpanded, p.id, !current);
        },

        isSprintPointExpanded: function(p) {
            return this.sprintExpanded[p.id] !== false;
        },

        toggleSprintAll: function() {
            var self = this;
            var allExpanded = !this.sprintAllExpanded;
            this.sprintAllExpanded = allExpanded;
            if (this.currentSprintChapter) {
                this.currentSprintChapter.sections.forEach(function(sec) {
                    sec.points.forEach(function(p) {
                        self.$set(self.sprintExpanded, p.id, allExpanded);
                    });
                });
            }
        },

        toggleSprintMark: function(p) {
            var key = p.id;
            var marked = !this.sprintMarks[key];
            this.$set(this.sprintMarks, key, marked);
            try {
                localStorage.setItem('examapp_sprint_marks', JSON.stringify(this.sprintMarks));
            } catch (e) {}
        },

        isSprintMarked: function(p) {
            return !!this.sprintMarks[p.id];
        },

        loadSprintMarks: function() {
            try {
                var raw = localStorage.getItem('examapp_sprint_marks');
                if (raw) {
                    this.sprintMarks = JSON.parse(raw) || {};
                }
            } catch (e) {
                this.sprintMarks = {};
            }
        },
        
        getChapterProgress: function(chapterId) {
            // 从chapterProgress对象获取章节进度
            return this.chapterProgress[chapterId] || 0;
        },
        
        formatLearningTime: function() {
            if (!this.learningStartTime) return '0分';
            var now = new Date();
            var elapsed = Math.floor((now - this.learningStartTime) / (1000 * 60));
            return elapsed + '分';
        },
        
        init: async function() {
            var self = this;
            this.isLoading = true;
            this.errorMessage = '';

            try {
                self.loadSettings();

                // 无痕模式/隐私设置下 IndexedDB 可能不可用，此时降级为“不保存”模式而不是整页报错
                try {
                    await db.init();
                    self.storageAvailable = true;
                } catch (dbError) {
                    self.storageAvailable = false;
                    console.warn('本地数据库不可用，学习记录将不会被保存：', dbError);
                }

                await self.loadChapters();

                await self.loadProgress();

                await self.loadStudyPlan();

                self.loadSprintMarks();

                self.loadDictationMarks();

                self.loadMustMemorizeMarks();

                self.loadEnglishMarks();

                self.loadEnglishQuiz();

                self.loadLicense();

                await Promise.all([
                    self.loadQuestions(),
                    self.loadMistakes(),
                    self.loadTextbookExercises(),
                    self.loadSprintPapers()
                ]);


            } catch (error) {
                console.error('初始化失败:', error);
                console.error('错误堆栈:', error.stack);
                self.errorMessage = '应用初始化失败，请刷新页面重试';
            } finally {
                self.isLoading = false;
            }
        },
        
        loadChapters: function() {
            this.chapters = window.chaptersData || [];
            return Promise.resolve();
        },
        
        loadQuestions: function() {
            this.questions = window.questionsData || [];
            return Promise.resolve();
        },
        
        loadStudyPlan: async function() {
            try {
                var savedPlan = this.storageAvailable ? await db.getStudyPlan() : null;
                if (savedPlan && savedPlan.plan && savedPlan.plan.length > 0) {
                    this.studyPlan = savedPlan.plan;
                    return;
                }
            } catch (e) {
                console.warn('读取学习计划失败，使用默认计划:', e);
            }
            this.generateDefaultPlan();
            this.normalizeDefaultPlan();
        },
        
        generateDefaultPlan: function() {
            this.studyPlan = [
                {
                    week: 1,
                    status: 'completed',
                    statusText: '已完成',
                    current: false,
                    tasks: [
                        { id: 'w1t1', title: '第1-3章学习', duration: 8, type: '理论学习', completed: true },
                        { id: 'w1t2', title: '项目管理基础概念', duration: 4, type: '重点记忆', completed: true }
                    ]
                },
                {
                    week: 2,
                    status: 'completed',
                    statusText: '已完成',
                    current: false,
                    tasks: [
                        { id: 'w2t1', title: '第4-6章学习', duration: 8, type: '理论学习', completed: true },
                        { id: 'w2t2', title: 'WBS分解练习', duration: 3, type: '实践练习', completed: true }
                    ]
                },
                {
                    week: 3,
                    status: 'in-progress',
                    statusText: '进行中',
                    current: true,
                    tasks: [
                        { id: 'w3t1', title: '第7-8章学习', duration: 8, type: '理论学习', completed: false },
                        { id: 'w3t2', title: '关键路径计算练习', duration: 4, type: '计算练习', completed: false },
                        { id: 'w3t3', title: '挣值分析计算练习', duration: 4, type: '计算练习', completed: false }
                    ]
                },
                {
                    week: 4,
                    status: 'pending',
                    statusText: '待开始',
                    current: false,
                    tasks: [
                        { id: 'w4t1', title: '第9-11章学习', duration: 6, type: '理论学习', completed: false },
                        { id: 'w4t2', title: '质量工具应用', duration: 3, type: '实践练习', completed: false }
                    ]
                },
                {
                    week: 5,
                    status: 'pending',
                    statusText: '待开始',
                    current: false,
                    tasks: [
                        { id: 'w5t1', title: '第12-13章学习', duration: 6, type: '理论学习', completed: false },
                        { id: 'w5t2', title: '风险分析练习', duration: 4, type: '实践练习', completed: false }
                    ]
                },
                {
                    week: 6,
                    status: 'pending',
                    statusText: '待开始',
                    current: false,
                    tasks: [
                        { id: 'w6t1', title: '第14-17章学习', duration: 6, type: '理论学习', completed: false },
                        { id: 'w6t2', title: '法律法规重点', duration: 4, type: '重点记忆', completed: false }
                    ]
                },
                {
                    week: 7,
                    status: 'pending',
                    statusText: '待开始',
                    current: false,
                    tasks: [
                        { id: 'w7t1', title: '历年真题练习', duration: 10, type: '真题练习', completed: false },
                        { id: 'w7t2', title: '错题整理', duration: 4, type: '复习巩固', completed: false }
                    ]
                },
                {
                    week: 8,
                    status: 'pending',
                    statusText: '待开始',
                    current: false,
                    tasks: [
                        { id: 'w8t1', title: '模拟考试', duration: 8, type: '模拟测试', completed: false },
                        { id: 'w8t2', title: '冲刺复习', duration: 6, type: '复习巩固', completed: false },
                        { id: 'w8t3', title: '重点背诵', duration: 4, type: '重点记忆', completed: false }
                    ]
                }
            ];
        },

        // 新用户整理默认计划：全部任务未完成，第 1 周为当前周（避免一开始就显示“已完成”的假进度）
        normalizeDefaultPlan: function() {
            this.studyPlan.forEach(function(week, index) {
                week.tasks.forEach(function(task) { task.completed = false; });
                week.status = index === 0 ? 'in-progress' : 'pending';
                week.statusText = index === 0 ? '进行中' : '待开始';
                week.current = index === 0;
            });
            this.overallProgress = 0;
        },
        
        loadNotes: async function() {
            this.notes = await db.getNotes();
            if (this.notes.length > 0) {
                this.currentNote = this.notes[0].id;
            }
        },
        
        loadMistakes: async function() {
            try {
                this.mistakeBook = await db.getMistakes();
            } catch (e) {
                // 本地数据库不可用（如无痕模式）时不影响其他功能
                this.mistakeBook = [];
            }
        },
        
        // 加载教材课后习题数据
        loadTextbookExercises: function() {
            if (window.textbookExercisesData) {
                this.textbookChapters = window.textbookExercisesData;
                // 默认展开第一个章节
                if (this.textbookChapters.length > 0) {
                    this.expandedTextbookChapters[this.textbookChapters[0].id] = true;
                }
            } else {
                console.error('window.textbookExercisesData 未找到!');
            }
            return Promise.resolve();
        },
        
        // 切换教材章节的展开/折叠状态
        toggleTextbookChapter: function(chapterId) {
            this.expandedTextbookChapters[chapterId] = !this.expandedTextbookChapters[chapterId];
        },
        
        // 开始教材习题练习
        startTextbookPractice: function(question) {
            this.currentPracticeQuestion = question;
            this.showPracticeDialog = true;
            this.practiceAnswer = '';
            this.practiceResult = null;
        },
        
        // 开始教材习题学习（随机生成题目）
        startTextbookLearning: function() {
            if (!this.selectedTextbookChapter) {
                alert('请选择一个章节');
                return;
            }
            
            // 找到选中的章节
            var selectedChapter = this.textbookChapters.find(function(chapter) {
                return chapter.id === this.selectedTextbookChapter;
            }.bind(this));
            
            if (!selectedChapter || !selectedChapter.questions || selectedChapter.questions.length === 0) {
                alert('所选章节没有题目');
                return;
            }
            
            // 随机选择一个题目
            var randomIndex = Math.floor(Math.random() * selectedChapter.questions.length);
            var randomQuestion = selectedChapter.questions[randomIndex];
            
            // 开始练习
            this.startTextbookPractice(randomQuestion);
        },
        
        // 开始教材习题测试模式（单选题）
        startTextbookTest: function() {
            if (!this.selectedTextbookChapter) {
                alert('请选择一个章节');
                return;
            }
            
            // 找到选中的章节
            var selectedChapter = this.textbookChapters.find(function(chapter) {
                return chapter.id === this.selectedTextbookChapter;
            }.bind(this));
            
            if (!selectedChapter || !selectedChapter.questions || selectedChapter.questions.length === 0) {
                alert('所选章节没有题目');
                return;
            }
            
            // 检查是否有单选题
            var singleChoiceQuestions = selectedChapter.questions.filter(function(q) {
                return q.type === 'single';
            });
            
            if (singleChoiceQuestions.length === 0) {
                alert('该章节没有单选题');
                return;
            }
            
            // 重置答题状态
            this.resetTextbookAnswers();
            
            // 展开章节
            this.expandedTextbookChapters[this.selectedTextbookChapter] = true;
            
            // 滚动到题目区域
            this.$nextTick(function() {
                var chapterElement = document.querySelector('.textbook-chapters');
                if (chapterElement) {
                    chapterElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        },
        
        // 提交教材习题答案
        submitTextbookAnswers: function() {
            var self = this;
            var selectedChapter = this.textbookChapters.find(function(chapter) {
                return chapter.id === this.selectedTextbookChapter;
            }.bind(this));
            
            if (!selectedChapter) {
                alert('请选择一个章节');
                return;
            }
            
            var singleChoiceQuestions = selectedChapter.questions.filter(function(q) {
                return q.type === 'single';
            });
            
            if (singleChoiceQuestions.length === 0) {
                alert('该章节没有单选题');
                return;
            }
            
            // 检查是否所有题目都已作答
            var unanswered = singleChoiceQuestions.filter(function(q) {
                return !this.textbookAnswers[q.id];
            }.bind(this));
            
            if (unanswered.length > 0) {
                if (!confirm('还有 ' + unanswered.length + ' 道题未作答，确定要交卷吗？')) {
                    return;
                }
            }
            
            // 计算得分并收集错题
            var correctCount = 0;
            var wrongQuestions = [];
            singleChoiceQuestions.forEach(function(q) {
                if (this.textbookAnswers[q.id] === q.answer) {
                    correctCount++;
                } else {
                    wrongQuestions.push(q);
                }
            }.bind(this));
            
            this.textbookScore = correctCount;
            this.textbookSubmitted = true;
            
            // 自动将答错的题目加入错题本
            if (wrongQuestions.length > 0) {
                wrongQuestions.forEach(function(q) {
                    // 检查是否已在错题本中
                    var existingMistakeIndex = self.mistakeBook.findIndex(function(m) {
                        return m.questionId === q.id;
                    });
                    
                    if (existingMistakeIndex === -1) {
                        // 不在错题本中，添加
                        var mistake = {
                            questionId: q.id,
                            question: q.question,
                            options: q.options,
                            correctAnswer: q.answer,
                            userAnswer: self.textbookAnswers[q.id] || '未作答',
                            explanation: q.explanation,
                            chapterName: q.chapterName,
                            type: 'textbook',
                            timestamp: new Date().toISOString()
                        };
                        db.addMistake(mistake).then(function(id) {
                            mistake.id = id;
                            self.mistakeBook.unshift(mistake);
                        }).catch(function(error) {
                            console.error('添加错题失败:', error);
                        });
                    }
                });
            }
            
            alert('交卷成功！您答对了 ' + correctCount + '/' + singleChoiceQuestions.length + ' 题' + 
                  (wrongQuestions.length > 0 ? '，答错的 ' + wrongQuestions.length + ' 道题已自动加入错题本' : ''));
        },
        
        // 重置教材习题答题
        resetTextbookAnswers: function() {
            this.textbookAnswers = {};
            this.textbookSubmitted = false;
            this.textbookScore = 0;
        },
        
        // ==================== 选择题冲刺模块 ====================
        
        // 加载冲刺试卷数据与历史成绩
        loadSprintPapers: function() {
            if (window.sprintPapersData) {
                this.sprintPapers = window.sprintPapersData;
            } else {
                console.error('window.sprintPapersData 未找到!');
                this.sprintPapers = [];
            }
            // 读取历史最佳成绩
            try {
                var saved = localStorage.getItem('sprintRecords');
                this.sprintRecords = saved ? JSON.parse(saved) : {};
            } catch (e) {
                this.sprintRecords = {};
            }
            return Promise.resolve();
        },
        
        // 开始一套冲刺卷
        startSprint: function(paper) {
            this.currentSprintPaper = paper;
            // 深拷贝题目，附加作答状态
            this.sprintQuestions = paper.questions.map(function(q) {
                return Object.assign({}, q, { isCorrect: false });
            });
            this.sprintAnswers = {};
            this.sprintCurrentIndex = 0;
            this.sprintSubmitted = false;
            this.sprintReviewMode = false;
            this.showSprintSheet = false;
            this.sprintStartTime = Date.now();
            this.sprintView = 'quiz';
            window.scrollTo(0, 0);
        },
        
        // 选择答案（交卷前可修改）
        selectSprintAnswer: function(label) {
            if (this.sprintSubmitted) return;
            var q = this.currentSprintQuestion;
            if (!q) return;
            this.$set(this.sprintAnswers, q.id, label);
        },
        
        // 跳转到指定题目
        goToSprintQuestion: function(index) {
            if (index < 0 || index >= this.sprintQuestions.length) return;
            this.sprintCurrentIndex = index;
        },
        
        // 交卷：判分、生成成绩单、错题自动入错题本
        submitSprint: function() {
            var self = this;
            if (this.sprintSubmitted) return;
            
            var unanswered = this.sprintQuestions.filter(function(q) {
                return !self.sprintAnswers[q.id];
            });
            if (unanswered.length > 0) {
                if (!confirm('还有 ' + unanswered.length + ' 道题未作答，确定要交卷吗？未答题将计为错误。')) {
                    return;
                }
            } else if (!confirm('确定要交卷吗？交卷后将显示答案与解析。')) {
                return;
            }
            
            // 判分
            var correct = 0;
            var wrongIds = [];
            var chapterMap = {};
            this.sprintQuestions.forEach(function(q, index) {
                var userAns = self.sprintAnswers[q.id];
                q.isCorrect = (userAns === q.answer);
                if (q.isCorrect) {
                    correct++;
                } else {
                    wrongIds.push(index);
                }
                var ch = q.chapterName || '其他';
                if (!chapterMap[ch]) chapterMap[ch] = { name: ch, shortName: ch.split(' ')[0], total: 0, correct: 0 };
                chapterMap[ch].total++;
                if (q.isCorrect) chapterMap[ch].correct++;
            });
            
            var perChapter = Object.keys(chapterMap).map(function(key) {
                var c = chapterMap[key];
                c.accuracy = c.total > 0 ? Math.round(c.correct / c.total * 100) : 0;
                return c;
            });
            
            // 用时
            var elapsed = Math.floor((Date.now() - this.sprintStartTime) / 1000);
            var duration = Math.floor(elapsed / 60) + '分' + (elapsed % 60) + '秒';
            
            this.sprintResult = {
                score: correct,
                correct: correct,
                total: this.sprintQuestions.length,
                answered: this.sprintQuestions.length - unanswered.length,
                duration: duration,
                perChapter: perChapter,
                wrongIds: wrongIds
            };
            
            this.sprintSubmitted = true;
            this.showSprintSheet = false;
            
            // 保存最佳成绩
            var paperId = this.currentSprintPaper.id;
            var prev = this.sprintRecords[paperId];
            if (!prev || correct > prev.score) {
                var record = {
                    score: correct,
                    total: this.sprintQuestions.length,
                    date: new Date().toLocaleDateString('zh-CN')
                };
                this.$set(this.sprintRecords, paperId, record);
                try {
                    localStorage.setItem('sprintRecords', JSON.stringify(this.sprintRecords));
                } catch (e) { /* 忽略存储失败 */ }
            }
            
            // 错题自动加入错题本
            wrongIds.forEach(function(index) {
                var q = self.sprintQuestions[index];
                var exists = self.mistakeBook.some(function(m) { return m.questionId === q.id; });
                if (!exists) {
                    var mistake = {
                        questionId: q.id,
                        question: q.question,
                        options: q.options,
                        correctAnswer: q.answer,
                        userAnswer: self.sprintAnswers[q.id] || '未作答',
                        explanation: q.explanation,
                        chapterName: q.chapterName,
                        type: 'sprint',
                        timestamp: new Date().toISOString()
                    };
                    db.addMistake(mistake).then(function(id) {
                        mistake.id = id;
                        self.mistakeBook.unshift(mistake);
                    }).catch(function(error) {
                        console.error('添加错题失败:', error);
                    });
                }
            });
            
            this.sprintView = 'result';
            window.scrollTo(0, 0);
        },
        
        // 进入解析模式（可定位到指定题）
        reviewSprintAt: function(index) {
            this.sprintReviewMode = true;
            this.sprintView = 'quiz';
            this.sprintCurrentIndex = index;
            this.showSprintSheet = false;
            window.scrollTo(0, 0);
        },
        
        // 退出解析模式，返回成绩单
        exitSprintReview: function() {
            this.sprintReviewMode = false;
            this.sprintView = 'result';
            window.scrollTo(0, 0);
        },
        
        // 重新作答当前试卷
        retrySprint: function() {
            if (this.currentSprintPaper) {
                this.startSprint(this.currentSprintPaper);
            }
        },
        
        // 退出冲刺，返回试卷列表
        exitSprint: function() {
            if (this.sprintView === 'quiz' && !this.sprintSubmitted) {
                if (!confirm('当前试卷尚未交卷，退出后作答记录将丢失，确定退出吗？')) {
                    return;
                }
            }
            this.sprintView = 'list';
            this.sprintReviewMode = false;
            this.sprintSubmitted = false;
            this.showSprintSheet = false;
            window.scrollTo(0, 0);
        },
        
        // 手动将错题加入错题本（解析模式）
        addSprintMistake: function(q) {
            var self = this;
            var exists = this.mistakeBook.some(function(m) { return m.questionId === q.id; });
            if (exists) {
                alert('该题已在错题本中');
                return;
            }
            var mistake = {
                questionId: q.id,
                question: q.question,
                options: q.options,
                correctAnswer: q.answer,
                userAnswer: this.sprintAnswers[q.id] || '未作答',
                explanation: q.explanation,
                chapterName: q.chapterName,
                type: 'sprint',
                timestamp: new Date().toISOString()
            };
            db.addMistake(mistake).then(function(id) {
                mistake.id = id;
                self.mistakeBook.unshift(mistake);
                alert('已加入错题本');
            }).catch(function(error) {
                console.error('添加错题失败:', error);
            });
        },
        
        loadProgress: async function() {
            if (!this.storageAvailable) return;
            try {
                var progress = await db.getProgress();
                if (progress) {
                    this.overallProgress = progress.overallProgress || 0;
                    this.chapterProgress = progress.chapterProgress || {};
                }
            } catch (e) {
                console.warn('读取学习进度失败:', e);
            }
        },
        
        loadPracticeStats: async function() {
            var stats = await db.getPracticeStats();
            this.practiceStats = stats;
        },
        
        toggleTask: function(task) {
            task.completed = !task.completed;
            this.saveDailyTasks();
            this.updateOverallProgress();
        },
        
        togglePlanTask: function(week, task) {
            task.completed = !task.completed;
            this.savePlan();
            this.updateOverallProgress();
        },
        
        updateOverallProgress: function() {
            var totalTasks = 0;
            var completedTasks = 0;
            
            this.studyPlan.forEach(function(week) {
                week.tasks.forEach(function(task) {
                    totalTasks++;
                    if (task.completed) completedTasks++;
                });
            });
            
            if (totalTasks > 0) {
                this.overallProgress = Math.round((completedTasks / totalTasks) * 100);
            }
        },
        
        getWeekProgress: function(week) {
            var total = week.tasks.length;
            var completed = week.tasks.filter(function(t) { 
                return t.completed; 
            }).length;
            return Math.round((completed / total) * 100);
        },
        
        savePlan: function() {
            return db.saveStudyPlan({ plan: this.studyPlan });
        },
        
        createPlan: function() {
            var self = this;
            
            if (!this.newPlan.examDate) {
                alert('请选择考试日期');
                return;
            }
            
            var examDate = new Date(this.newPlan.examDate);
            var today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (examDate <= today) {
                alert('考试日期必须大于今天');
                return;
            }
            
            var daysUntilExam = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24));
            var weeks = Math.ceil(daysUntilExam / 7);
            weeks = Math.max(4, Math.min(weeks, 12));
            
            var dailyHours = parseInt(this.newPlan.dailyHours) || 2;
            var mode = this.newPlan.mode;
            
            var plan = [];
            var chapters = [
                { name: '第1-3章 信息化基础', type: '理论学习' },
                { name: '第4-6章 项目整体/范围/进度管理', type: '理论学习' },
                { name: '第7-8章 项目成本/质量管理', type: '理论学习' },
                { name: '第9-11章 项目资源/沟通/风险管理', type: '理论学习' },
                { name: '第12-13章 项目采购/干系人管理', type: '理论学习' },
                { name: '第14-17章 法律法规/标准规范', type: '理论学习' },
                { name: '历年真题练习', type: '真题练习' },
                { name: '模拟考试与冲刺复习', type: '模拟测试' }
            ];
            
            var hoursPerWeek;
            switch(mode) {
                case 'intensive':
                    hoursPerWeek = dailyHours * 7;
                    break;
                case 'relaxed':
                    hoursPerWeek = dailyHours * 5;
                    break;
                default:
                    hoursPerWeek = dailyHours * 6;
            }
            
            for (var i = 0; i < weeks; i++) {
                var weekData = {
                    week: i + 1,
                    status: 'pending',
                    statusText: '待开始',
                    current: i === 0,
                    tasks: []
                };
                
                if (i < chapters.length) {
                    weekData.tasks.push({
                        id: 'w' + (i + 1) + 't1',
                        title: chapters[i].name,
                        duration: Math.round(hoursPerWeek * 0.7),
                        type: chapters[i].type,
                        completed: false
                    });
                }
                
                if (i < weeks - 1) {
                    weekData.tasks.push({
                        id: 'w' + (i + 1) + 't2',
                        title: '本周练习与复习',
                        duration: Math.round(hoursPerWeek * 0.3),
                        type: '复习巩固',
                        completed: false
                    });
                } else {
                    weekData.tasks.push({
                        id: 'w' + (i + 1) + 't2',
                        title: '重点知识背诵',
                        duration: Math.round(hoursPerWeek * 0.3),
                        type: '重点记忆',
                        completed: false
                    });
                }
                
                plan.push(weekData);
            }
            
            this.studyPlan = plan;
            this.showPlanDialog = false;
            
            db.saveStudyPlan({ plan: this.studyPlan }).then(function() {
                alert('学习计划创建成功！共 ' + weeks + ' 周的学习计划。');
            }).catch(function(error) {
                console.error('保存计划失败:', error);
                alert('保存计划失败，请重试');
            });
        },
        
        saveDailyTasks: async function() {
            await db.saveProgress({
                overallProgress: this.overallProgress,
                dailyTasks: this.dailyTasks,
                chapterProgress: this.chapterProgress
            });
        },
        
        createNote: function() {
            var self = this;
            var newNote = {
                title: '新建笔记',
                content: '',
                chapter: '',
                createdAt: new Date().toISOString()
            };
            
            db.saveNote(newNote).then(function(id) {
                newNote.id = id;
                newNote.date = new Date().toLocaleDateString('zh-CN');
                self.notes.unshift(newNote);
                self.currentNote = id;
            });
        },
        
        viewNote: function(note) {
            // 查看笔记详情
            this.currentNote = note.id;
            
            // 如果是思维导图笔记，显示可视化
            if (note.type === 'mindmap' && note.mindMapData) {
                this.showMindMapView(note.mindMapData);
            }
        },
        
        selectNote: function(note) {
            this.currentNote = note.id;
            this.noteTitle = note.title;
            this.noteContent = note.content;
        },
        
        createNewNote: function() {
            var self = this;
            var newNote = {
                title: '新建笔记',
                content: '',
                chapter: '',
                createdAt: new Date().toISOString()
            };
            
            db.saveNote(newNote).then(function(id) {
                newNote.id = id;
                newNote.date = new Date().toLocaleDateString('zh-CN');
                self.notes.unshift(newNote);
                self.currentNote = id;
                self.noteTitle = newNote.title;
                self.noteContent = newNote.content;
            });
        },
        
        closeNoteEditor: function() {
            this.currentNote = null;
            this.noteTitle = '';
            this.noteContent = '';
        },
        
        showMindMapView: function(mindMapData) {
            // 生成思维导图HTML
            var html = MindMapGenerator.toHTML(mindMapData);
            
            // 创建模态框显示思维导图
            var modal = document.createElement('div');
            modal.className = 'mindmap-modal';
            modal.innerHTML = `
                <div class="mindmap-modal-overlay" onclick="this.parentElement.remove()">
                    <div class="mindmap-modal-content" onclick="event.stopPropagation()">
                        <div class="mindmap-modal-header">
                            <h3>${mindMapData.root.text} - 思维导图</h3>
                            <button class="btn-close" onclick="this.closest('.mindmap-modal').remove()">×</button>
                        </div>
                        <div class="mindmap-modal-body">
                            ${html}
                        </div>
                        <div class="mindmap-modal-footer">
                            <button class="btn-secondary" onclick="this.closest('.mindmap-modal').remove()">关闭</button>
                            <button class="btn-primary" onclick="downloadMindMap()">下载图片</button>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            
            // 保存当前思维导图数据供下载使用
            window.currentMindMapData = mindMapData;
        },
        
        saveNote: Utils.debounce(function() {
            if (this.currentNoteData) {
                db.saveNote(this.currentNoteData);
            }
        }, 1000),
        
        startPractice: function(question) {
            var self = this;
            // 清除之前的自动跳转定时器
            if (this.practiceAutoJumpTimer) {
                clearInterval(this.practiceAutoJumpTimer);
                this.practiceAutoJumpTimer = null;
            }
            this.practiceAutoJumpCountdown = 0;
            this.currentPracticeQuestion = question;
            this.showPracticeDialog = true;
            this.practiceAnswer = '';
            this.practiceResult = null;
        },
        
        // 随机开始练习
        startRandomPractice: function() {
            var self = this;
            
            // 直接使用所有题目，不进行过滤
            var allQuestions = this.questions;
            
            if (allQuestions.length === 0) {
                alert('题库中没有题目');
                return;
            }
            
            // 随机选择题目
            var randomIndex = Math.floor(Math.random() * allQuestions.length);
            var randomQuestion = allQuestions[randomIndex];
            
            this.startPractice(randomQuestion);
        },
        
        submitPracticeAnswer: function() {
            // 防止重复提交
            if (this.isSubmitting) return;
            
            // 检查currentPracticeQuestion是否存在
            if (!this.currentPracticeQuestion) {
                console.error('currentPracticeQuestion is null or undefined');
                return;
            }
            
            // 验证答案是否为空（根据题型）
            if (!this.practiceAnswer && this.currentPracticeQuestion.type === 'morning') {
                alert('请选择一个选项');
                return;
            }
            if (!this.practiceAnswer && this.currentPracticeQuestion.type === 'afternoon') {
                alert('请输入你的答案');
                return;
            }
            
            this.isSubmitting = true;
            
            var self = this;
            var question = this.currentPracticeQuestion;
            var userAnswer = this.practiceAnswer;
            var isCorrect = false;
            
            if (question.type === 'morning') {
                isCorrect = (userAnswer === question.answer);
            } else {
                // 可根据实际需求调整匹配规则
                isCorrect = (userAnswer.trim().toLowerCase() === question.answer.trim().toLowerCase());
            }
            
            // 保存练习结果
            this.practiceResult = {
                isCorrect: isCorrect,
                correctAnswer: question.answer,
                explanation: question.explanation
            };
            
            // 处理错题本逻辑
            if (!isCorrect) {
                // 检查是否已在错题本中
                var existingMistakeIndex = this.mistakeBook.findIndex(function(m) {
                    return m.questionId === question.id;
                });
                
                if (existingMistakeIndex === -1) {
                    // 不在错题本中，添加新错题
                    var mistake = {
                        questionId: question.id,
                        question: question.question,
                        chapterName: question.chapterName,
                        userAnswer: userAnswer,
                        correctAnswer: question.answer,
                        explanation: question.explanation,
                        date: new Date().toLocaleDateString('zh-CN')
                    };
                    db.addMistake(mistake).then(function(id) {
                        mistake.id = id;
                        self.mistakeBook.unshift(mistake);
                        self.isSubmitting = false;
                    }).catch(function(error) {
                        console.error('添加错题失败:', error);
                        self.isSubmitting = false;
                    });
                } else {
                    self.isSubmitting = false;
                }
            } else {
                // 回答正确，从错题本中删除
                var mistakeIndex = this.mistakeBook.findIndex(function(m) {
                    return m.questionId === question.id;
                });
                
                if (mistakeIndex > -1) {
                    var mistakeId = self.mistakeBook[mistakeIndex].id;
                    db.removeMistake(mistakeId).then(function() {
                        self.mistakeBook.splice(mistakeIndex, 1);
                        // 回答正确时直接跳题，不需要显示解析
                        // 清除已有的定时器
                        if (self.autoNextTimer) {
                            clearTimeout(self.autoNextTimer);
                        }
                        // 延迟800ms后自动加载下一题
                        self.autoNextTimer = setTimeout(function() {
                            self.nextPracticeQuestion();
                            self.isSubmitting = false;
                        }, 800);
                    }).catch(function(error) {
                        console.error('删除错题失败:', error);
                        self.isSubmitting = false;
                    });
                } else {
                    // 回答正确时直接跳题，不需要显示解析
                    // 清除已有的定时器
                    if (self.autoNextTimer) {
                        clearTimeout(self.autoNextTimer);
                    }
                    // 延迟800ms后自动加载下一题
                    self.autoNextTimer = setTimeout(function() {
                        self.nextPracticeQuestion();
                        self.isSubmitting = false;
                    }, 800);
                }
            }
            
            // 回答错误时显示答案解析弹窗
            if (!isCorrect) {
                this.showExplanationDialog = true;
            }
        },
        
        nextQuestion: function() {
            // 清除自动跳转定时器
            if (this.practiceAutoJumpTimer) {
                clearInterval(this.practiceAutoJumpTimer);
                this.practiceAutoJumpTimer = null;
            }
            this.practiceAutoJumpCountdown = 0;
            this.showExplanationDialog = false;
            this.showPracticeDialog = false;
            this.practiceAnswer = '';
            this.practiceResult = null;
            // 跳转到随机题目
            this.startRandomPractice();
        },
        
        // 下一题（随机）
        nextPracticeQuestion: function() {
            // 清除定时器
            if (this.autoNextTimer) {
                clearTimeout(this.autoNextTimer);
                this.autoNextTimer = null;
            }
            
            // 随机抽取下一道题目
            if (this.currentPracticeQuestion) {
                // 检查是否是教材习题
                if (this.currentPracticeQuestion.id && this.currentPracticeQuestion.id.startsWith('textbook_')) {
                    // 对于教材习题，只在当前章节中选择题目
                    const currentChapter = this.currentPracticeQuestion.chapterName;
                    let currentChapterQuestions = [];
                    
                    // 从textbookChapters中找到当前章节的题目
                    this.textbookChapters.forEach(function(chapter) {
                        if (chapter.name === currentChapter) {
                            currentChapterQuestions = chapter.questions;
                        }
                    });
                    
                    if (currentChapterQuestions && currentChapterQuestions.length > 0) {
                        const randomIndex = Math.floor(Math.random() * currentChapterQuestions.length);
                        this.currentPracticeQuestion = JSON.parse(JSON.stringify(currentChapterQuestions[randomIndex]));
                        this.practiceAnswer = '';
                        this.practiceResult = null;
                    } else {
                    }
                } else {
                    // 对于真题练习，从所有题目中选择
                    if (this.questions && this.questions.length > 0) {
                        const randomIndex = Math.floor(Math.random() * this.questions.length);
                        this.currentPracticeQuestion = JSON.parse(JSON.stringify(this.questions[randomIndex]));
                        this.practiceAnswer = '';
                        this.practiceResult = null;
                    } else {
                    }
                }
            } else {
            }
        },
        
        // 关闭练习对话框
        closePracticeDialog: function() {
            this.showPracticeDialog = false;
            // 清除自动跳转定时器
            if (this.autoNextTimer) {
                clearTimeout(this.autoNextTimer);
                this.autoNextTimer = null;
            }
            if (this.practiceAutoJumpTimer) {
                clearInterval(this.practiceAutoJumpTimer);
                this.practiceAutoJumpTimer = null;
            }
            this.practiceAutoJumpCountdown = 0;
            this.practiceAnswer = '';
            this.practiceResult = null;
            this.isSubmitting = false;
        },
        
        // ==================== 专业英语模块 ====================
        switchEnglishView: function(view) {
            this.englishView = view;
            window.scrollTo(0, 0);
        },
        switchEnglishVocabCat: function(catId) {
            this.englishVocabCatId = catId;
        },
        toggleEnglishHideZh: function() {
            this.englishHideZh = !this.englishHideZh;
            if (!this.englishHideZh) this.englishRevealed = {};
        },
        toggleEnglishWord: function(w) {
            if (!this.englishHideZh) return;
            this.$set(this.englishRevealed, w.en, !this.englishRevealed[w.en]);
        },
        toggleEnglishMark: function(w) {
            this.$set(this.englishMarks, w.en, !this.englishMarks[w.en]);
            try {
                localStorage.setItem('examapp_english_marks', JSON.stringify(this.englishMarks));
            } catch (e) { /* 存储配额不足时忽略，不影响当前使用 */ }
        },
        loadEnglishMarks: function() {
            try {
                var raw = localStorage.getItem('examapp_english_marks');
                if (raw) this.englishMarks = JSON.parse(raw) || {};
            } catch (e) {
                this.englishMarks = {};
            }
        },
        setEnglishDomain: function(id) {
            this.englishQuizDomain = id;
        },
        englishDomainName: function(domain) {
            var map = { pm: '项目管理', it: '新技术', sec: '安全服务' };
            return map[domain] || domain;
        },
        selectEnglishOption: function(q, label) {
            if (this.englishQuizAnswers[q.id]) return; // 已作答不可改
            this.$set(this.englishQuizAnswers, q.id, label);
            try {
                localStorage.setItem('examapp_english_quiz', JSON.stringify(this.englishQuizAnswers));
            } catch (e) { /* 存储配额不足时忽略 */ }
        },
        resetEnglishQuiz: function() {
            this.englishQuizAnswers = {};
            try { localStorage.removeItem('examapp_english_quiz'); } catch (e) {}
            window.scrollTo(0, 0);
        },
        loadEnglishQuiz: function() {
            try {
                var raw = localStorage.getItem('examapp_english_quiz');
                if (raw) this.englishQuizAnswers = JSON.parse(raw) || {};
            } catch (e) {
                this.englishQuizAnswers = {};
            }
        },

        // ==================== 会员授权 ====================
        isModuleLocked: function(tabId) {
            return this.premiumTabIds.indexOf(tabId) !== -1 && !this.canAccessPremium;
        },
        tabName: function(tabId) {
            var item = this.menuItems.find(function(i) { return i.id === tabId; });
            return item ? item.text : tabId;
        },
        goMember: function() {
            this.currentTab = 'member';
            this.showMobileMenu = false;
            window.scrollTo(0, 0);
        },
        goPendingTab: function() {
            if (!this.pendingTab) return;
            // 再次校验权限，避免未激活状态下通过“前往待解锁模块”绕过门禁
            if (this.isModuleLocked(this.pendingTab)) {
                this.memberMessage = '「' + this.tabName(this.pendingTab) + '」尚未解锁，请先开启试用或输入激活码。';
                this.memberMessageType = 'error';
                return;
            }
            var tab = this.pendingTab;
            this.pendingTab = '';
            this.currentTab = tab;
            window.scrollTo(0, 0);
        },
        startTrial: function() {
            if (this.license.trialUsed) {
                this.memberMessage = '免费试用已使用过，请输入激活码解锁。';
                this.memberMessageType = 'error';
                return;
            }
            var now = new Date();
            this.license = {
                type: 'trial',
                code: '',
                activatedAt: now.toISOString(),
                expiresAt: new Date(now.getTime() + this.trialDays * 86400000).toISOString(),
                trialUsed: true
            };
            this.saveLicense();
            this.memberMessage = '已开启 ' + this.trialDays + ' 天免费试用，全部会员功能已解锁。';
            this.memberMessageType = 'success';
        },
        activateLicense: function() {
            var raw = (this.memberCodeInput || '').trim();
            if (!raw) {
                this.memberMessage = '请输入激活码。';
                this.memberMessageType = 'error';
                return;
            }
            var normalized = raw.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
            var hash = this.sha256Hex(normalized);
            var now = new Date();
            var expiresAt = null;
            var matched = false;
            if (this.lifetimeCodeHashes.indexOf(hash) !== -1) {
                matched = true;
                expiresAt = null;
            } else if (this.licenseCodeHashes.indexOf(hash) !== -1) {
                matched = true;
                expiresAt = new Date(now.getTime() + 365 * 86400000).toISOString();
            }
            if (!matched) {
                this.memberMessage = '激活码无效，请检查后重试，或联系作者获取。';
                this.memberMessageType = 'error';
                return;
            }
            this.license = {
                type: 'pro',
                code: normalized,
                activatedAt: now.toISOString(),
                expiresAt: expiresAt,
                trialUsed: true
            };
            this.saveLicense();
            this.memberCodeInput = '';
            this.memberMessage = expiresAt ? '激活成功，全站会员有效期 365 天。' : '激活成功，已解锁全站永久会员。';
            this.memberMessageType = 'success';
        },
        saveLicense: function() {
            try {
                localStorage.setItem('examapp_license', JSON.stringify(this.license));
            } catch (e) {}
        },
        loadLicense: function() {
            try {
                var raw = localStorage.getItem('examapp_license');
                if (!raw) return;
                var saved = JSON.parse(raw);
                if (!saved || ['free', 'trial', 'pro'].indexOf(saved.type) === -1) return;
                this.license = {
                    type: saved.type,
                    code: saved.code || '',
                    activatedAt: saved.activatedAt || null,
                    expiresAt: saved.expiresAt || null,
                    trialUsed: !!saved.trialUsed
                };
            } catch (e) {
                this.license = { type: 'free', code: '', activatedAt: null, expiresAt: null, trialUsed: false };
            }
        },
        formatLicenseDate: function(iso) {
            if (!iso) return '';
            var d = new Date(iso);
            if (isNaN(d.getTime())) return '';
            return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        },
        selectMemberPlan: function(planId) {
            if (planId === 'free') {
                this.memberMessage = '免费版已可使用学习计划、真题练习、考点冲刺、专业英语词汇等功能。';
                this.memberMessageType = 'info';
                return;
            }
            this.memberMessage = '请通过下方联系方式联系作者，付款后获取激活码。';
            this.memberMessageType = 'info';
            var el = document.getElementById('member-contact');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        },
        // 纯 JS SHA-256（UTF-8），确保 file:// 离线打开时也能校验激活码
        sha256Hex: function(input) {
            var K = [
                0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
                0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
                0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
                0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
                0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
                0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
                0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
                0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
            ];
            var H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
            var bytes = [];
            var str = String(input);
            for (var i = 0; i < str.length; i++) {
                var code = str.charCodeAt(i);
                if (code < 0x80) {
                    bytes.push(code);
                } else if (code < 0x800) {
                    bytes.push(0xc0 | (code >> 6), 0x80 | (code & 0x3f));
                } else if (code >= 0xd800 && code <= 0xdbff && i + 1 < str.length) {
                    var next = str.charCodeAt(i + 1);
                    if (next >= 0xdc00 && next <= 0xdfff) {
                        i++;
                        var cp = 0x10000 + ((code - 0xd800) << 10) + (next - 0xdc00);
                        bytes.push(0xf0 | (cp >> 18), 0x80 | ((cp >> 12) & 0x3f), 0x80 | ((cp >> 6) & 0x3f), 0x80 | (cp & 0x3f));
                    } else {
                        bytes.push(0xe0 | (code >> 12), 0x80 | ((code >> 6) & 0x3f), 0x80 | (code & 0x3f));
                    }
                } else {
                    bytes.push(0xe0 | (code >> 12), 0x80 | ((code >> 6) & 0x3f), 0x80 | (code & 0x3f));
                }
            }
            var bitLen = bytes.length * 8;
            bytes.push(0x80);
            while (bytes.length % 64 !== 56) bytes.push(0);
            var hi = Math.floor(bitLen / 0x100000000);
            var lo = bitLen >>> 0;
            bytes.push((hi >>> 24) & 0xff, (hi >>> 16) & 0xff, (hi >>> 8) & 0xff, hi & 0xff);
            bytes.push((lo >>> 24) & 0xff, (lo >>> 16) & 0xff, (lo >>> 8) & 0xff, lo & 0xff);

            function rotr(x, n) {
                return (x >>> n) | (x << (32 - n));
            }

            for (var off = 0; off < bytes.length; off += 64) {
                var w = new Array(64);
                for (var j = 0; j < 16; j++) {
                    w[j] = ((bytes[off + j * 4] << 24) | (bytes[off + j * 4 + 1] << 16) |
                            (bytes[off + j * 4 + 2] << 8) | bytes[off + j * 4 + 3]) >>> 0;
                }
                for (j = 16; j < 64; j++) {
                    var s0 = rotr(w[j - 15], 7) ^ rotr(w[j - 15], 18) ^ (w[j - 15] >>> 3);
                    var s1 = rotr(w[j - 2], 17) ^ rotr(w[j - 2], 19) ^ (w[j - 2] >>> 10);
                    w[j] = (w[j - 16] + s0 + w[j - 7] + s1) >>> 0;
                }
                var a = H[0], b = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], h = H[7];
                for (j = 0; j < 64; j++) {
                    var S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
                    var ch = (e & f) ^ ((~e) & g);
                    var t1 = (h + S1 + ch + K[j] + w[j]) >>> 0;
                    var S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
                    var maj = (a & b) ^ (a & c) ^ (b & c);
                    var t2 = (S0 + maj) >>> 0;
                    h = g; g = f; f = e; e = (d + t1) >>> 0;
                    d = c; c = b; b = a; a = (t1 + t2) >>> 0;
                }
                H[0] = (H[0] + a) >>> 0; H[1] = (H[1] + b) >>> 0; H[2] = (H[2] + c) >>> 0; H[3] = (H[3] + d) >>> 0;
                H[4] = (H[4] + e) >>> 0; H[5] = (H[5] + f) >>> 0; H[6] = (H[6] + g) >>> 0; H[7] = (H[7] + h) >>> 0;
            }
            var hex = '';
            for (i = 0; i < 8; i++) {
                hex += ('00000000' + (H[i] >>> 0).toString(16)).slice(-8);
            }
            return hex;
        },
        
        startExam: function(type) {
            var self = this;
            this.examType = type;
            this.inExam = true;
            this.showExamResult = false;
            this.examReviewMode = false;
            this.currentQuestionIndex = 0;
            this.remainingTime = 150 * 60;
            
            var examTypeQuestions = this.questions.filter(function(q) { 
                return q.type === type; 
            });
            
            var shuffledQuestions = Utils.shuffleArray(examTypeQuestions);
            var questionCount = type === 'morning' ? Math.min(75, shuffledQuestions.length) : Math.min(4, shuffledQuestions.length);
            
            this.examQuestions = shuffledQuestions.slice(0, questionCount).map(function(q) {
                return Object.assign({}, q, {
                    selected: null,
                    answered: false,
                    userAnswer: ''
                });
            });
            
            this.startTimer();
        },
        
        startTimer: function() {
            var self = this;
            if (this.examTimer) {
                clearInterval(this.examTimer);
            }
            
            this.examTimer = setInterval(function() {
                if (self.remainingTime > 0) {
                    self.remainingTime--;
                } else {
                    self.submitExam();
                }
            }, 1000);
        },
        
        formatTime: function(seconds) {
            return Utils.formatTime(seconds);
        },
        
        selectAnswer: function(label) {
            if (this.currentExamQuestion) {
                this.currentExamQuestion.selected = label;
                this.currentExamQuestion.answered = true;
            }
        },
        
        submitExam: function() {
            if (this.examTimer) {
                clearInterval(this.examTimer);
                this.examTimer = null;
            }
            
            var self = this;
            var correct = 0;
            var analysis = {};
            
            
            this.examQuestions.forEach(function(q, index) {
                
                var isCorrect = false;
                if (self.examType === 'morning') {
                    // 上午考试：选择题自动评分
                    isCorrect = q.selected && q.selected === q.answer;
                    if (isCorrect) {
                        correct++;
                    } else {
                    }
                }
                
                // 统计分析
                if (!analysis[q.chapterName]) {
                    analysis[q.chapterName] = { correct: 0, total: 0 };
                }
                analysis[q.chapterName].total++;
                
                if (isCorrect) {
                    analysis[q.chapterName].correct++;
                }
                
                // 处理错题本逻辑
                if (self.examType === 'morning') {
                    if (!isCorrect && q.selected) {
                        // 答错，添加到错题本
                        var existingMistakeIndex = self.mistakeBook.findIndex(function(m) {
                            return m.questionId === q.id;
                        });
                        
                        if (existingMistakeIndex === -1) {
                            var mistake = {
                                questionId: q.id,
                                question: q.question,
                                chapterName: q.chapterName,
                                userAnswer: q.selected,
                                correctAnswer: q.answer,
                                explanation: q.explanation,
                                date: new Date().toLocaleDateString('zh-CN')
                            };
                            db.addMistake(mistake).then(function(id) {
                                mistake.id = id;
                                self.mistakeBook.unshift(mistake);
                            }).catch(function(error) {
                                console.error('添加错题失败:', error);
                            });
                        }
                    } else if (isCorrect) {
                        // 答对，从错题本中删除
                        var mistakeIndex = self.mistakeBook.findIndex(function(m) {
                            return m.questionId === q.id;
                        });
                        
                        if (mistakeIndex > -1) {
                            var mistakeId = self.mistakeBook[mistakeIndex].id;
                            db.removeMistake(mistakeId).then(function() {
                                self.mistakeBook.splice(mistakeIndex, 1);
                            }).catch(function(error) {
                                console.error('删除错题失败:', error);
                            });
                        }
                    }
                }
            });
            
            // 计算分数
            var score;
            if (this.examType === 'morning') {
                // 上午考试：每题1分，满分75分
                score = correct;
            } else {
                // 下午考试：案例分析，需要人工评分，暂时显示0分
                score = 0;
            }
            
            
            var duration = Utils.formatTime(150 * 60 - this.remainingTime);
            var accuracy = this.examQuestions.length > 0 
                ? Math.round((correct / this.examQuestions.length) * 100) 
                : 0;
            
            var analysisList = [];
            for (var chapter in analysis) {
                if (analysis.hasOwnProperty(chapter)) {
                    var chapterAccuracy = analysis[chapter].total > 0 
                        ? Math.round((analysis[chapter].correct / analysis[chapter].total) * 100)
                        : 0;
                    analysisList.push({
                        chapter: chapter,
                        accuracy: chapterAccuracy
                    });
                }
            }
            
            this.examResult = {
                score: score,
                correct: correct,
                total: this.examQuestions.length,
                accuracy: accuracy,
                duration: duration,
                analysis: analysisList
            };
            
            db.saveExamRecord({
                type: this.examType,
                score: score,
                correct: correct,
                total: this.examQuestions.length,
                accuracy: accuracy,
                duration: duration
            });
            
            this.showExamResult = true;
            this.inExam = false;
            
        },
        
        reviewExam: function() {
            // 显示考试解析
            this.showExamResult = false;
            this.inExam = true;
            this.currentQuestionIndex = 0;
            
            // 标记每道题的正确性
            var self = this;
            this.examQuestions.forEach(function(q) {
                if (self.examType === 'morning') {
                    q.isCorrect = q.selected === q.answer;
                    q.answered = !!q.selected;
                }
            });
            
            // 显示解析模式
            this.examReviewMode = true;
        },
        
        exitReviewMode: function() {
            this.examReviewMode = false;
            this.inExam = false;
            this.showExamResult = true;
        },

        // ============ 机考模拟 ============
        startMockPaper: function(paper) {
            this.mockPaper = paper;
            this.mockView = 'exam';
            this.mockCurrentSection = 'morning';
            this.mockQIndex = 0;
            this.mockAnswers = {};
            this.mockCaseAnswers = {};
            this.mockRemaining = 150 * 60;
            this.mockSubmitted = false;
            this.mockScore = 0;
            this.mockCorrectCount = 0;
            this.mockAreaStats = [];
            var self = this;
            if (this.mockTimer) { clearInterval(this.mockTimer); }
            this.mockTimer = setInterval(function() {
                if (self.mockRemaining > 0) {
                    self.mockRemaining--;
                } else {
                    self.submitMock();
                }
            }, 1000);
            window.scrollTo(0, 0);
        },

        selectMockOption: function(label) {
            if (this.mockSubmitted || !this.mockCurrentQ) return;
            this.$set(this.mockAnswers, this.mockCurrentQ.id, label);
        },

        switchMockSection: function(sec) {
            this.mockCurrentSection = sec;
            this.mockQIndex = 0;
            window.scrollTo(0, 0);
        },

        jumpMockQ: function(i) {
            if (this.mockSubmitted) return;
            this.mockQIndex = i;
        },

        nextMockQ: function() {
            var len = this.mockCurrentSection === 'morning'
                ? (this.mockPaper ? this.mockPaper.morning.length : 0)
                : (this.mockPaper ? this.mockPaper.afternoon.length : 0);
            if (this.mockQIndex < len - 1) this.mockQIndex++;
        },

        prevMockQ: function() {
            if (this.mockQIndex > 0) this.mockQIndex--;
        },

        mockCaseAnswer: function(bigId, subNo) {
            var big = this.mockCaseAnswers[bigId];
            if (big && subNo in big) return big[subNo];
            return null;
        },

        setMockCaseAnswer: function(bigId, subNo, val) {
            if (this.mockSubmitted) return;
            if (!this.mockCaseAnswers[bigId]) {
                this.$set(this.mockCaseAnswers, bigId, {});
            }
            this.$set(this.mockCaseAnswers[bigId], subNo, val);
        },

        setMockJudge: function(bigId, subNo, val) {
            this.setMockCaseAnswer(bigId, subNo, val);
        },

        isMockMultiSelected: function(bigId, subNo, label) {
            var v = this.mockCaseAnswer(bigId, subNo);
            return Array.isArray(v) && v.indexOf(label) !== -1;
        },

        toggleMockMulti: function(bigId, subNo, label) {
            if (this.mockSubmitted) return;
            var cur = this.mockCaseAnswer(bigId, subNo);
            var arr = Array.isArray(cur) ? cur.slice() : [];
            var idx = arr.indexOf(label);
            if (idx === -1) arr.push(label); else arr.splice(idx, 1);
            this.setMockCaseAnswer(bigId, subNo, arr);
        },

        mockSubTypeName: function(t) {
            var map = { calc: '计算题', short: '简答题', judge: '判断题', fill: '填空题', multi: '多选式', find: '找错题' };
            return map[t] || t;
        },

        mockSubPlaceholder: function(t) {
            if (t === 'find') return '请逐条指出材料中的错误，并给出正确做法...';
            if (t === 'calc') return '请写出计算过程与结果...';
            return '请输入你的答案...';
        },

        formatMockTime: function(s) {
            return Utils.formatTime(s);
        },

        confirmMockSubmit: function() {
            var answered = Object.keys(this.mockAnswers).length;
            var total = this.mockPaper ? this.mockPaper.morning.length : 0;
            if (answered < total) {
                return confirm('上午单选还有 ' + (total - answered) + ' 道题未作答，确定交卷吗？（案例题不自动判分）');
            }
            return confirm('确定交卷吗？');
        },

        submitMock: function() {
            if (this.mockSubmitted) return;
            if (this.mockTimer) { clearInterval(this.mockTimer); this.mockTimer = null; }
            var self = this;
            var correct = 0;
            var areaMap = {};
            (this.mockPaper.morning || []).forEach(function(q) {
                var ok = self.mockAnswers[q.id] === q.answer;
                if (ok) correct++;
                if (!areaMap[q.area]) areaMap[q.area] = { area: q.area, correct: 0, total: 0 };
                areaMap[q.area].total++;
                if (ok) areaMap[q.area].correct++;
            });
            var stats = [];
            for (var k in areaMap) {
                if (areaMap.hasOwnProperty(k)) {
                    var row = areaMap[k];
                    row.accuracy = row.total > 0 ? Math.round(row.correct / row.total * 100) : 0;
                    stats.push(row);
                }
            }
            this.mockCorrectCount = correct;
            this.mockScore = correct;
            this.mockAreaStats = stats;
            this.mockSubmitted = true;
            this.mockView = 'result';
            window.scrollTo(0, 0);
        },

        isMockQCorrect: function(q) {
            return this.mockAnswers[q.id] === q.answer;
        },

        addMockMistake: function(q) {
            var self = this;
            var exists = this.mistakeBook.some(function(m) { return m.questionId === q.id; });
            if (exists) { alert('该题目已在错题本中'); return; }
            var mistake = {
                questionId: q.id,
                question: q.stem,
                chapterName: q.area,
                userAnswer: this.mockAnswers[q.id] || '未作答',
                correctAnswer: q.answer,
                explanation: q.explanation + (q.ref ? '\n' + q.ref : ''),
                options: q.options,
                date: new Date().toLocaleDateString('zh-CN')
            };
            db.addMistake(mistake).then(function(id) {
                mistake.id = id;
                self.mistakeBook.unshift(mistake);
                alert('已添加到错题本');
            }).catch(function(error) {
                console.error('添加错题失败:', error);
                alert('添加失败，请重试');
            });
        },

        exitMockExam: function() {
            if (this.mockTimer) { clearInterval(this.mockTimer); this.mockTimer = null; }
            this.mockView = 'select';
            this.mockPaper = null;
            this.mockSubmitted = false;
            window.scrollTo(0, 0);
        },

        formatExplanation: function(explanation) {
            if (!explanation) return '暂无解析';
            
            // 将换行符转换为HTML
            return explanation
                .replace(/\n/g, '<br>')
                .replace(/【(.+?)】/g, '<strong>【$1】</strong>')
                .replace(/(\d+\.\s)/g, '<br>$1')
                .replace(/(-\s)/g, '<br>$1');
        },
        
        addToMistakeBook: function(question) {
            var self = this;
            
            // 检查是否已在错题本中
            var exists = this.mistakeBook.some(function(m) {
                return m.questionId === question.id;
            });
            
            if (exists) {
                alert('该题目已在错题本中');
                return;
            }
            
            var mistake = {
                questionId: question.id,
                question: question.question,
                chapterName: question.chapterName,
                userAnswer: question.selected || '未作答',
                correctAnswer: question.answer,
                explanation: question.explanation,
                options: question.options, // 保存选项数据
                date: new Date().toLocaleDateString('zh-CN')
            };
            
            db.addMistake(mistake).then(function(id) {
                mistake.id = id;
                self.mistakeBook.unshift(mistake);
                alert('已添加到错题本');
            }).catch(function(error) {
                console.error('添加错题失败:', error);
                alert('添加失败，请重试');
            });
        },
        
        clearMistakes: function() {
            var self = this;
            if (confirm('确定要清空错题本吗？')) {
                db.clear('mistakes').then(function() {
                    self.mistakeBook = [];
                });
            }
        },
        
        reviewMistake: function(mistake) {
            // 找到对应的题目
            var question = this.questions.find(function(q) {
                return q.id === mistake.questionId;
            });
            
            if (question) {
                this.startPractice(question);
            } else {
                // 如果找不到原题，使用错题中保存的数据创建模拟题目
                var mockQuestion = {
                    id: mistake.questionId || 'mock-' + Date.now(),
                    year: new Date().getFullYear(),
                    type: 'morning',
                    chapter: 'unknown',
                    chapterName: mistake.chapterName || '未知章节',
                    title: '错题复习',
                    question: mistake.question,
                    options: mistake.options || [
                        { label: 'A', text: '选项A' },
                        { label: 'B', text: '选项B' },
                        { label: 'C', text: '选项C' },
                        { label: 'D', text: '选项D' }
                    ],
                    answer: mistake.correctAnswer,
                    explanation: mistake.explanation,
                    tags: ['错题复习'],
                    difficulty: 'medium'
                };
                this.startPractice(mockQuestion);
            }
        },
        
        removeMistake: function(mistakeId) {
            var self = this;
            db.removeMistake(mistakeId).then(function() {
                var index = self.mistakeBook.findIndex(function(m) { 
                    return m.id === mistakeId; 
                });
                if (index > -1) {
                    self.mistakeBook.splice(index, 1);
                }
            });
        },
        
        goToQuestion: function(index) {
            if (index >= 0 && index < this.examQuestions.length) {
                this.currentQuestionIndex = index;
            }
        },
        
        confirmSubmit: function() {
            var answeredCount = this.answeredCount;
            var totalCount = this.examQuestions.length;
            
            if (answeredCount < totalCount) {
                return confirm('您还有 ' + (totalCount - answeredCount) + ' 道题目未作答，确定要交卷吗？');
            }
            return true;
        },
        
        // 重置数据库
        resetDatabase: async function() {
            var self = this;
            if (confirm('确定要重置数据库吗？这将清除所有学习记录、笔记、错题本等数据。')) {
                self.isLoading = true;
                try {
                    if (self.storageAvailable) await db.resetDatabase();
                    // 同时清除 localStorage 中的学习痕迹（保留会员授权与字体设置）
                    ['examapp_sprint_marks', 'sprintRecords', 'examapp_english_marks',
                     'examapp_english_quiz', 'examapp_dictation_marks', 'examapp_mustmemorize_marks'
                    ].forEach(function(key) {
                        try { localStorage.removeItem(key); } catch (e) {}
                    });
                    // 重新初始化应用
                    await self.init();
                    alert('数据库重置成功！');
                } catch (error) {
                    console.error('重置数据库失败:', error);
                    alert('重置数据库失败，请重试');
                } finally {
                    self.isLoading = false;
                }
            }
        },
        
        // 系统设置
        changeFontSize: function(size) {
            this.settings.fontSize = size;
            // 保存设置到本地存储（隐私模式下可能不可用）
            try {
                localStorage.setItem('examAppSettings', JSON.stringify(this.settings));
            } catch (e) {}
            // 实时更新页面字体大小
            var container = document.querySelector('.main-container');
            if (container) container.className = 'main-container font-size-' + size;
        },
        
        showSettings: function() {
            this.showSettingsDialog = true;
        },
        
        closeSettings: function() {
            this.showSettingsDialog = false;
        },
        
        // 案例分析模板方法
        selectTemplate: function(templateId) {
            this.currentTemplate = templateId;
        },
        
        selectCalcTemplate: function(templateKey) {
            this.currentCalcTemplate = templateKey;
        },
        
        toggleArea: function(areaKey) {
            this.$set(this.expandedAreas, areaKey, !this.expandedAreas[areaKey]);
        },
        
        // 加载系统设置
        loadSettings: function() {
            var savedSettings = localStorage.getItem('examAppSettings');
            if (savedSettings) {
                try {
                    this.settings = JSON.parse(savedSettings);
                } catch (e) {
                    console.error('加载设置失败:', e);
                }
            }
        },
        
        // 组件销毁前清理
        beforeDestroy: function() {
            // 清除自动跳转定时器
            if (this.autoNextTimer) {
                clearTimeout(this.autoNextTimer);
            }
            // 清除练习自动跳转定时器
            if (this.practiceAutoJumpTimer) {
                clearInterval(this.practiceAutoJumpTimer);
            }
            // 清除学习定时器
            if (this.learningTimer) {
                clearInterval(this.learningTimer);
            }
            // 清除考试定时器
            if (this.examTimer) {
                clearInterval(this.examTimer);
            }
        },
        
        // 学习功能
        startLearning: function(chapter) {
            if (!chapter) {
                if (this.chapters && this.chapters.length > 0) {
                    chapter = this.chapters[0];
                } else {
                    alert('暂无可学习的章节');
                    return;
                }
            }
            this.isLearning = true;
            // 深拷贝章节数据，避免修改原始数据
            this.currentLearningChapter = JSON.parse(JSON.stringify(chapter));
            // 确保所有keypoints都有expanded属性，默认展开显示详细内容
            if (this.currentLearningChapter && this.currentLearningChapter.keypoints) {
                this.currentLearningChapter.keypoints.forEach(function(keypoint, index) {
                    keypoint.expanded = true; // 默认展开所有知识点
                });
            }
            // 从保存的进度开始学习
            this.learningProgress = this.chapterProgress[chapter.id] || 0;
            this.learningStartTime = new Date();
            // 开始学习计时
            this.startLearningTimer();
            this.showLearningDialog = true;
        },
        
        startLearningTimer: function() {
            var self = this;
            this.learningTimer = setInterval(function() {
                if (self.learningProgress < 100) {
                    self.learningProgress += 1;
                } else {
                    clearInterval(self.learningTimer);
                }
            }, 10000); // 每10秒增加1%进度
        },
        
        pauseLearning: function() {
            if (this.learningTimer) {
                clearInterval(this.learningTimer);
            }
            this.isLearning = false;
        },
        
        resumeLearning: function() {
            this.isLearning = true;
            this.startLearningTimer();
        },
        
        toggleLearningPause: function() {
            if (this.isLearningPaused) {
                this.resumeLearning();
                this.isLearningPaused = false;
            } else {
                this.pauseLearning();
                this.isLearningPaused = true;
            }
        },
        
        onFilterChange: function() {
            // 筛选器改变时自动刷新题目列表
            // 由于使用了计算属性 filteredQuestions，数据会自动更新
            // 这里可以添加额外的逻辑，如重置页码、显示提示等
        },

        // 题目来源标签：模拟预测题不伪装成某年真题
        questionYearLabel: function(question) {
            if (!question) return '';
            if (question.simulated) return '模拟预测';
            return (question.year || '') + '年';
        },
        
        finishLearning: function() {
            var self = this;
            if (this.learningTimer) {
                clearInterval(this.learningTimer);
            }
            this.isLearning = false;
            this.learningProgress = 100;
            this.showLearningDialog = false;
            
            // 保存章节进度
            if (this.currentLearningChapter) {
                this.chapterProgress[this.currentLearningChapter.id] = 100;
                this.saveDailyTasks();
            }
            
            // 生成思维导图（一个章节只生成一次）
            if (this.currentLearningChapter) {
                // 检查是否已经为该章节生成过思维导图
                var existingMindMapNote = this.notes.find(function(note) {
                    return note.type === 'mindmap' && note.chapter === self.currentLearningChapter.id;
                });
                
                if (!existingMindMapNote) {
                    var mindMapData = MindMapGenerator.generateChapterMindMap(this.currentLearningChapter);
                    if (mindMapData) {
                        // 转换为Markdown格式
                        var markdown = MindMapGenerator.toMarkdown(mindMapData);
                        
                        // 创建笔记
                        var note = {
                            title: this.currentLearningChapter.name + ' - 思维导图',
                            content: markdown,
                            chapter: this.currentLearningChapter.id,
                            chapterName: this.currentLearningChapter.name,
                            type: 'mindmap',
                            mindMapData: mindMapData,
                            createdAt: new Date().toISOString()
                        };
                        
                        // 保存笔记
                        db.saveNote(note).then(function(id) {
                            note.id = id;
                            note.date = new Date().toLocaleDateString('zh-CN');
                            self.notes.unshift(note);
                            
                            // 显示提示
                            alert('学习完成！已自动生成思维导图笔记，可在"学习笔记"中查看。');
                        }).catch(function(error) {
                            console.error('保存思维导图笔记失败:', error);
                        });
                    }
                } else {
                    // 显示提示
                    alert('学习完成！该章节的思维导图已经存在于学习笔记中。');
                }
                
                // 保存学习记录
                this.saveLearningRecord();
            }
        },
        
        // 保存学习记录
        saveLearningRecord: function() {
            var record = {
                chapterId: this.currentLearningChapter.id,
                chapterName: this.currentLearningChapter.name,
                duration: this.learningTime,
                completedAt: new Date().toISOString(),
                progress: 100
            };
            
            db.saveLearningRecord(record).then(function() {
            }).catch(function(error) {
                console.error('保存学习记录失败:', error);
            });
        },
        
        closeLearningDialog: function() {
            if (this.learningTimer) {
                clearInterval(this.learningTimer);
            }
            this.isLearning = false;
            
            // 如果学习进度达到100%，自动生成思维导图
            if (this.learningProgress >= 100 && this.currentLearningChapter) {
                this.finishLearning();
            } else if (this.currentLearningChapter && this.learningProgress > 0) {
                // 保存当前学习进度
                this.chapterProgress[this.currentLearningChapter.id] = this.learningProgress;
                this.saveDailyTasks();
                this.showLearningDialog = false;
            } else {
                this.showLearningDialog = false;
            }
        },

        // ===== 高频默写知识点方法 =====
        switchDictationCategory: function(categoryId) {
            this.dictationCategoryId = categoryId;
            this.dictationExpanded = {};
            window.scrollTo(0, 0);
        },

        isDictationPointExpanded: function(p) {
            return this.dictationExpanded[p.id] !== false;
        },

        toggleDictationPoint: function(p) {
            var current = !!this.dictationExpanded[p.id];
            this.$set(this.dictationExpanded, p.id, !current);
        },

        toggleDictationAll: function() {
            var self = this;
            var allExpanded = !this.dictationAllExpanded;
            this.dictationAllExpanded = allExpanded;
            if (this.currentDictationCategory) {
                this.currentDictationCategory.points.forEach(function(p) {
                    self.$set(self.dictationExpanded, p.id, allExpanded);
                });
            }
        },

        toggleDictationMark: function(p) {
            var key = p.id;
            var marked = !this.dictationMarked[key];
            this.$set(this.dictationMarked, key, marked);
            try {
                localStorage.setItem('examapp_dictation_marks', JSON.stringify(this.dictationMarked));
            } catch (e) {}
        },

        isDictationMarked: function(p) {
            return !!this.dictationMarked[p.id];
        },

        loadDictationMarks: function() {
            try {
                var raw = localStorage.getItem('examapp_dictation_marks');
                if (raw) {
                    this.dictationMarked = JSON.parse(raw) || {};
                }
            } catch (e) {
                this.dictationMarked = {};
            }
        },

        // ===== 考前必背 / 应掌握方法 =====
        switchMustTier: function(tierId) {
            this.mustMemorizeTierId = tierId;
            this.mustMemorizeExpanded = {};
            window.scrollTo(0, 0);
        },

        isMustItemExpanded: function(item) {
            return this.mustMemorizeExpanded[item.id] !== false;
        },

        toggleMustItem: function(item) {
            var current = !!this.mustMemorizeExpanded[item.id];
            this.$set(this.mustMemorizeExpanded, item.id, !current);
        },

        toggleMustAll: function() {
            var self = this;
            var allExpanded = !this.mustAllExpanded;
            this.mustAllExpanded = allExpanded;
            if (this.currentMustTier && this.currentMustTier.groups) {
                this.currentMustTier.groups.forEach(function(g) {
                    (g.items || []).forEach(function(item) {
                        self.$set(self.mustMemorizeExpanded, item.id, allExpanded);
                    });
                });
            }
        },

        toggleMustMark: function(item) {
            var key = item.id;
            var marked = !this.mustMemorizeMarked[key];
            this.$set(this.mustMemorizeMarked, key, marked);
            try {
                localStorage.setItem('examapp_mustmemorize_marks', JSON.stringify(this.mustMemorizeMarked));
            } catch (e) {}
        },

        isMustMarked: function(item) {
            return !!this.mustMemorizeMarked[item.id];
        },

        loadMustMemorizeMarks: function() {
            try {
                var raw = localStorage.getItem('examapp_mustmemorize_marks');
                if (raw) {
                    this.mustMemorizeMarked = JSON.parse(raw) || {};
                }
            } catch (e) {
                this.mustMemorizeMarked = {};
            }
        },

        // ===== 案例分析及计算冲刺方法 =====
        switchCaseSprintView: function(view) {
            this.caseSprintView = view;
            window.scrollTo(0, 0);
        },

        selectCaseDomain: function(domainId) {
            this.caseSprintDomainId = domainId;
            window.scrollTo(0, 0);
        },

        selectCaseCalc: function(calcId) {
            this.caseSprintCalcId = calcId;
            window.scrollTo(0, 0);
        },

        isCaseTemplateExpanded: function(t) {
            return this.caseSprintExpanded[t.id] !== false;
        },

        toggleCaseTemplate: function(t) {
            var current = !!this.caseSprintExpanded[t.id];
            this.$set(this.caseSprintExpanded, t.id, !current);
        },

        isCaseCalcExpanded: function(c) {
            return this.caseSprintCalcExpanded[c.id] !== false;
        },

        toggleCaseCalc: function(c) {
            var current = !!this.caseSprintCalcExpanded[c.id];
            this.$set(this.caseSprintCalcExpanded, c.id, !current);
        }
    },
    
    watch: {
        // 监听教材章节选择变化
        selectedTextbookChapter: function(newChapterId, oldChapterId) {
            // 自动展开新选中的章节
            this.expandedTextbookChapters = {};
            this.expandedTextbookChapters[newChapterId] = true;
            // 重置答题状态
            this.resetTextbookAnswers();
        },
        // 监听题型切换
        textbookTab: function() {
            // 重置答题状态
            this.resetTextbookAnswers();
        }
    },
    
    mounted: function() {
        this.init();
    },
    
    beforeDestroy: function() {
        if (this.examTimer) {
            clearInterval(this.examTimer);
        }
        if (this.mockTimer) {
            clearInterval(this.mockTimer);
        }
        if (this.learningTimer) {
            clearInterval(this.learningTimer);
        }
        if (this.autoNextTimer) {
            clearTimeout(this.autoNextTimer);
        }
        if (this.practiceAutoJumpTimer) {
            clearInterval(this.practiceAutoJumpTimer);
        }
    }
});
