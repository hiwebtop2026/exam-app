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
            { id: 'textbook', icon: '📖', text: '教材习题', shortText: '教材' },
            { id: 'review', icon: '🚀', text: '冲刺复习', shortText: '复习' },
            { id: 'exam', icon: '📊', text: '模拟考试', shortText: '考试' },
            { id: 'mistakes', icon: '❌', text: '错题本', shortText: '错题' },
            { id: 'caseAnalysis', icon: '📋', text: '案例模板', shortText: '案例' }
        ],
        
        showMobileMenu: false,
        
        overallProgress: 35,
        
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

        years: [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017],
        
        flashcards: [],
        coreFormulas: [],
        
        // 冲刺复习状态
        reviewMode: 'flashcards',
        currentFlashcard: null,
        flashcardFlipped: false,
        
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
        
        // 加载状态
        isLoading: false,
        errorMessage: '',
        
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
        sprintStartTime: null      // 开考时间
    },
    
    computed: {
        isMobile: function() {
            return window.innerWidth <= 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
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
        
        formulas: function() {
            return this.coreFormulas;
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
        }
    },
    
    methods: {
        selectTab: function(tabId) {
            if (!tabId) {
                console.error('tabId为空!');
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

                await db.init();

                await self.loadChapters();

                await self.loadProgress();

                self.loadSprintMarks();

                await Promise.all([
                    self.loadQuestions(),
                    self.loadFormulas(),
                    self.loadFlashcards(),
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
        
        loadFormulas: function() {
            var allFormulas = [];
            for (var category in formulasData) {
                if (formulasData.hasOwnProperty(category)) {
                    var formulas = formulasData[category].map(function(f) {
                        return {
                            id: f.id,
                            name: f.name,
                            category: f.category,
                            formula: f.expression,
                            description: f.explanation,
                            example: f.variables ? f.variables.map(function(v) {
                                return v.name + ': ' + v.desc;
                            }).join('；') : '',
                            variables: f.variables
                        };
                    });
                    allFormulas = allFormulas.concat(formulas);
                }
            }
            this.coreFormulas = allFormulas.slice(0, 12);
            return Promise.resolve();
        },
        
        loadFlashcards: function() {
            this.flashcards = flashcardsData.map(function(card) {
                return Object.assign({}, card, { flipped: false });
            });
            return Promise.resolve();
        },
        
        loadStudyPlan: async function() {
            var savedPlan = await db.getStudyPlan();
            if (savedPlan) {
                this.studyPlan = savedPlan.plan;
            } else {
                this.generateDefaultPlan();
            }
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
        
        loadNotes: async function() {
            this.notes = await db.getNotes();
            if (this.notes.length > 0) {
                this.currentNote = this.notes[0].id;
            }
        },
        
        loadMistakes: async function() {
            this.mistakeBook = await db.getMistakes();
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
            var progress = await db.getProgress();
            if (progress) {
                this.overallProgress = progress.overallProgress || 0;
                this.chapterProgress = progress.chapterProgress || {};
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
        
        // 冲刺复习方法
        flipFlashcard: function() {
            this.flashcardFlipped = !this.flashcardFlipped;
        },
        
        markFlashcardKnown: function() {
            if (!this.currentFlashcard) return;
            
            // 从flashcards中移除
            var index = this.flashcards.findIndex(function(c) { 
                return c.id === this.currentFlashcard.id; 
            }.bind(this));
            
            if (index > -1) {
                this.flashcards.splice(index, 1);
            }
            
            // 更新数据库状态
            if (db.updateFlashcardStatus) {
                db.updateFlashcardStatus(this.currentFlashcard.id, 'known');
            }
            
            // 重置状态
            this.flashcardFlipped = false;
            this.currentFlashcard = this.flashcards.length > 0 ? this.flashcards[0] : null;
        },
        
        markFlashcardUnknown: function() {
            if (!this.currentFlashcard) return;
            
            // 将卡片放到队列末尾，稍后复习
            var card = this.currentFlashcard;
            this.flashcards.push(card);
            this.flashcards.shift();
            
            // 更新数据库状态
            if (db.updateFlashcardStatus) {
                db.updateFlashcardStatus(card.id, 'unknown');
            }
            
            // 重置状态
            this.flashcardFlipped = false;
            this.currentFlashcard = this.flashcards.length > 0 ? this.flashcards[0] : null;
        },
        
        resetFlashcards: function() {
            // 重新加载所有flashcards
            this.loadFlashcards();
            this.flashcardFlipped = false;
        },
        
        loadFlashcards: function() {
            var self = this;
            // 从关键知识点生成复习卡片
            var flashcards = [];
            var id = 1;

            // 如果 chapters 还没有加载，使用 flashcardsData 作为备用
            var chapters = this.chapters && this.chapters.length > 0 ? this.chapters : [];

            chapters.forEach(function(chapter) {
                if (chapter.keypoints) {
                    chapter.keypoints.forEach(function(point) {
                        // 加载全部卡片内容，不区分重要性级别
                        flashcards.push({
                            id: id++,
                            question: point.title,
                            answer: point.content || '请查看详细内容',
                            chapterId: chapter.id,
                            chapterName: chapter.name,
                            level: point.level
                        });
                    });
                }
            });

            // 如果 chapters 没有生成卡片，使用 flashcardsData 作为备用
            if (flashcards.length === 0 && typeof flashcardsData !== 'undefined') {
                flashcards = flashcardsData.map(function(card, index) {
                    return {
                        id: card.id || index + 1,
                        question: card.question,
                        answer: card.answer,
                        chapterId: card.chapter || 'general',
                        chapterName: card.chapter || '通用'
                    };
                });
            }

            // 随机打乱顺序
            flashcards.sort(function() { return Math.random() - 0.5; });

            this.flashcards = flashcards;
            this.currentFlashcard = flashcards.length > 0 ? flashcards[0] : null;
        },
        
        markCard: function(card, status) {
            card.flipped = false;
            
            if (status === 'know') {
                var index = this.flashcards.findIndex(function(c) { 
                    return c.id === card.id; 
                });
                if (index > -1) {
                    this.flashcards.splice(index, 1);
                }
            }
            
            db.updateFlashcardStatus(card.id, status);
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
                    await db.resetDatabase();
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
            // 保存设置到本地存储
            localStorage.setItem('examAppSettings', JSON.stringify(this.settings));
            // 实时更新页面字体大小
            document.querySelector('.main-container').className = 'main-container font-size-' + size;
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
