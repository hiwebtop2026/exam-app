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
        var shuffled = array.slice();
        for (var i = shuffled.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
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
            { id: 'review', icon: '🚀', text: '冲刺复习', shortText: '复习' },
            { id: 'exam', icon: '📊', text: '模拟考试', shortText: '考试' },
            { id: 'mistakes', icon: '❌', text: '错题本', shortText: '错题' }
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

        years: [2024, 2023, 2022, 2021, 2020],
        
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
        
        // 学习状态
        isLearning: false,
        learningProgress: 0,
        currentLearningChapter: null,
        showLearningDialog: false,
        learningStartTime: null,
        learningTimer: null,
        isLearningPaused: false,
        
        // 笔记编辑状态
        noteTitle: '',
        noteContent: '',
        
        // 练习状态
        showPracticeDialog: false,
        currentPracticeQuestion: null,
        practiceAnswer: '',
        practiceResult: null,
        showExplanationDialog: false,
        
        // 错题本
        mistakeBook: [],
        
        // 加载状态
        isLoading: false,
        errorMessage: ''
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
        }
    },
    
    methods: {
        selectTab: function(tabId) {
            console.log('selectTab被调用, tabId:', tabId);
            if (!tabId) {
                console.error('tabId为空!');
                return;
            }
            this.currentTab = tabId;
            this.showMobileMenu = false;
            console.log('切换成功, currentTab现在是:', this.currentTab);
        },
        
        getChapterProgress: function(chapterId) {
            return 0;
        },
        
        formatLearningTime: function() {
            if (!this.learningStartTime) return '0分';
            var now = new Date();
            var elapsed = Math.floor((now - this.learningStartTime) / (1000 * 60));
            return elapsed + '分';
        },
        
        init: async function() {
            var self = this;
            console.log('Vue 实例初始化开始');
            this.isLoading = true;
            this.errorMessage = '';

            try {
                console.log('开始加载章节数据');
                await self.loadChapters();
                console.log('章节数据加载完成，共', self.chapters.length, '章');

                console.log('开始加载其他静态数据');
                await Promise.all([
                    self.loadQuestions(),
                    self.loadFormulas(),
                    self.loadFlashcards()
                ]);
                console.log('静态数据加载完成');

                console.log('应用初始化完成（简化版）');
            } catch (error) {
                console.error('初始化失败:', error);
                console.error('错误堆栈:', error.stack);
                self.errorMessage = '应用初始化失败，请刷新页面重试';
            } finally {
                self.isLoading = false;
                console.log('初始化结束，isLoading:', self.isLoading);
            }
        },
        
        loadChapters: function() {
            this.chapters = chaptersData;
            return Promise.resolve();
        },
        
        loadQuestions: function() {
            this.questions = questionsData;
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
        
        loadProgress: async function() {
            var progress = await db.getProgress();
            if (progress) {
                this.overallProgress = progress.overallProgress || 0;
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
                dailyTasks: this.dailyTasks
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
            this.currentPracticeQuestion = question;
            this.showPracticeDialog = true;
            this.practiceAnswer = '';
            this.practiceResult = null;
        },
        
        submitPracticeAnswer: function() {
            var self = this;
            var question = this.currentPracticeQuestion;
            
            if (!this.practiceAnswer) {
                alert('请选择或输入答案');
                return;
            }
            
            var isCorrect = false;
            if (question.type === 'morning') {
                isCorrect = this.practiceAnswer === question.answer;
            }
            
            this.practiceResult = {
                isCorrect: isCorrect,
                correctAnswer: question.answer,
                explanation: question.explanation
            };
            
            // 更新练习统计
            this.practiceStats.total++;
            if (isCorrect) {
                this.practiceStats.correct++;
            }
            this.practiceStats.accuracy = Math.round((this.practiceStats.correct / this.practiceStats.total) * 100);
            
            // 保存到数据库
            db.savePracticeStats(this.practiceStats);
            
            // 如果答错，添加到错题本
            if (!isCorrect) {
                var mistake = {
                    questionId: question.id,
                    question: question.question,
                    chapterName: question.chapterName,
                    userAnswer: this.practiceAnswer,
                    correctAnswer: question.answer,
                    explanation: question.explanation,
                    date: new Date().toLocaleDateString('zh-CN')
                };
                db.addMistake(mistake);
                this.mistakeBook.unshift(mistake);
            }
            
            // 显示答案解析弹窗
            this.showExplanationDialog = true;
        },
        
        nextQuestion: function() {
            this.showExplanationDialog = false;
            this.showPracticeDialog = false;
            this.practiceAnswer = '';
            this.practiceResult = null;
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
                        if (point.level === 'high' || point.level === 'medium') {
                            flashcards.push({
                                id: id++,
                                question: point.title,
                                answer: point.content || '请查看详细内容',
                                chapterId: chapter.id,
                                chapterName: chapter.name
                            });
                        }
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
            console.log('Flashcards loaded:', flashcards.length, 'Current:', this.currentFlashcard ? this.currentFlashcard.id : 'none');
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
            
            console.log('开始评分，考试类型：', this.examType);
            console.log('题目数量：', this.examQuestions.length);
            
            this.examQuestions.forEach(function(q, index) {
                console.log('题目' + (index + 1) + ':', q.id, '选择：', q.selected, '答案：', q.answer);
                
                if (self.examType === 'morning') {
                    // 上午考试：选择题自动评分
                    if (q.selected && q.selected === q.answer) {
                        correct++;
                        console.log('  ✓ 正确');
                    } else {
                        console.log('  ✗ 错误或未作答');
                    }
                }
                
                // 统计分析
                if (!analysis[q.chapterName]) {
                    analysis[q.chapterName] = { correct: 0, total: 0 };
                }
                analysis[q.chapterName].total++;
                
                if (self.examType === 'morning' && q.selected === q.answer) {
                    analysis[q.chapterName].correct++;
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
            
            console.log('正确题数：', correct);
            console.log('得分：', score);
            
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
            
            console.log('考试结果：', this.examResult);
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
            this.reviewMode = true;
        },
        
        exitReviewMode: function() {
            this.reviewMode = false;
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
                // 如果找不到原题，创建一个模拟题目
                var mockQuestion = {
                    id: mistake.questionId || 'mock-' + Date.now(),
                    year: new Date().getFullYear(),
                    type: 'morning',
                    chapter: 'unknown',
                    chapterName: mistake.chapterName || '未知章节',
                    title: '错题复习',
                    question: mistake.question,
                    options: [
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
        
        removeMistake: function(mistake) {
            var self = this;
            db.removeMistake(mistake.id).then(function() {
                var index = self.mistakeBook.findIndex(function(m) { 
                    return m.id === mistake.id; 
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
            this.learningProgress = 0;
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
            console.log('筛选条件已改变，自动刷新题目列表');
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
            
            // 生成思维导图
            if (this.currentLearningChapter) {
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
                    
                    // 保存学习记录
                    this.saveLearningRecord();
                }
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
                console.log('学习记录已保存');
            }).catch(function(error) {
                console.error('保存学习记录失败:', error);
            });
        },
        
        closeLearningDialog: function() {
            if (this.learningTimer) {
                clearInterval(this.learningTimer);
            }
            this.isLearning = false;
            this.showLearningDialog = false;
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
    }
});
