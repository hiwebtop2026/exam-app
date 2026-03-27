// IndexedDB 数据库操作
class ExamPrepDB {
    constructor() {
        this.db = null;
        this.dbName = 'ExamPrepDB';
        this.dbVersion = 1;
    }

    // 初始化数据库
    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);

            request.onerror = () => {
                console.error('数据库打开失败');
                reject(request.error);
            };

            request.onsuccess = () => {
                this.db = request.result;
                console.log('数据库连接成功');
                resolve(this.db);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                
                // 学习计划存储
                if (!db.objectStoreNames.contains('study_plans')) {
                    db.createObjectStore('study_plans', { keyPath: 'id', autoIncrement: true });
                }

                // 学习进度存储
                if (!db.objectStoreNames.contains('user_progress')) {
                    db.createObjectStore('user_progress', { keyPath: 'id' });
                }

                // 学习笔记存储
                if (!db.objectStoreNames.contains('notes')) {
                    const notesStore = db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
                    notesStore.createIndex('chapter', 'chapter', { unique: false });
                    notesStore.createIndex('date', 'date', { unique: false });
                }

                // 练习记录存储
                if (!db.objectStoreNames.contains('practice_records')) {
                    const practiceStore = db.createObjectStore('practice_records', { keyPath: 'id', autoIncrement: true });
                    practiceStore.createIndex('questionId', 'questionId', { unique: false });
                    practiceStore.createIndex('date', 'date', { unique: false });
                }

                // 考试记录存储
                if (!db.objectStoreNames.contains('exam_records')) {
                    const examStore = db.createObjectStore('exam_records', { keyPath: 'id', autoIncrement: true });
                    examStore.createIndex('date', 'date', { unique: false });
                    examStore.createIndex('type', 'type', { unique: false });
                }

                // 错题本存储
                if (!db.objectStoreNames.contains('mistakes')) {
                    const mistakesStore = db.createObjectStore('mistakes', { keyPath: 'id', autoIncrement: true });
                    mistakesStore.createIndex('questionId', 'questionId', { unique: false });
                    mistakesStore.createIndex('chapter', 'chapter', { unique: false });
                }

                // 复习卡片状态存储
                if (!db.objectStoreNames.contains('flashcard_status')) {
                    db.createObjectStore('flashcard_status', { keyPath: 'id' });
                }

                // 学习记录存储
                if (!db.objectStoreNames.contains('learning_records')) {
                    const learningStore = db.createObjectStore('learning_records', { keyPath: 'id', autoIncrement: true });
                    learningStore.createIndex('chapterId', 'chapterId', { unique: false });
                    learningStore.createIndex('completedAt', 'completedAt', { unique: false });
                }

                console.log('数据库初始化完成');
            };
        });
    }

    // 通用增删改查方法
    async add(storeName, data) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.add(data);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async get(storeName, id) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            const request = store.get(id);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async getAll(storeName) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            const request = store.getAll();

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async update(storeName, data) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.put(data);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async delete(storeName, id) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.delete(id);

            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    async clear(storeName) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.clear();

            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    // 按索引查询
    async getByIndex(storeName, indexName, value) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            const index = store.index(indexName);
            const request = index.getAll(value);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    // 特定业务方法

    // 保存学习计划
    async saveStudyPlan(plan) {
        const data = {
            ...plan,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        return await this.add('study_plans', data);
    }

    // 获取学习计划
    async getStudyPlan() {
        const plans = await this.getAll('study_plans');
        return plans.length > 0 ? plans[plans.length - 1] : null;
    }

    // 保存学习进度
    async saveProgress(progress) {
        const data = {
            id: 'main',
            ...progress,
            updatedAt: new Date().toISOString()
        };
        return await this.update('user_progress', data);
    }

    // 获取学习进度
    async getProgress() {
        return await this.get('user_progress', 'main');
    }

    // 添加错题
    async addMistake(mistake) {
        const data = {
            ...mistake,
            date: new Date().toISOString()
        };
        return await this.add('mistakes', data);
    }

    // 获取错题列表
    async getMistakes() {
        return await this.getAll('mistakes');
    }

    // 删除错题
    async removeMistake(id) {
        return await this.delete('mistakes', id);
    }

    // 保存考试记录
    async saveExamRecord(record) {
        const data = {
            ...record,
            date: new Date().toISOString()
        };
        return await this.add('exam_records', data);
    }

    // 获取考试历史
    async getExamHistory() {
        return await this.getAll('exam_records');
    }

    // 保存笔记
    async saveNote(note) {
        const data = {
            ...note,
            updatedAt: new Date().toISOString()
        };
        if (note.id) {
            return await this.update('notes', data);
        } else {
            data.createdAt = new Date().toISOString();
            data.date = new Date().toLocaleDateString('zh-CN');
            return await this.add('notes', data);
        }
    }

    // 获取所有笔记
    async getNotes() {
        return await this.getAll('notes');
    }

    // 删除笔记
    async deleteNote(id) {
        return await this.delete('notes', id);
    }

    // 保存练习记录
    async savePracticeRecord(record) {
        const data = {
            ...record,
            date: new Date().toISOString()
        };
        return await this.add('practice_records', data);
    }

    // 获取练习统计
    async getPracticeStats() {
        const records = await this.getAll('practice_records');
        const total = records.length;
        const correct = records.filter(r => r.correct).length;
        const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
        
        return { total, correct, accuracy };
    }

    // 更新复习卡片状态
    async updateFlashcardStatus(cardId, status) {
        const data = {
            id: cardId,
            status: status,
            updatedAt: new Date().toISOString()
        };
        return await this.update('flashcard_status', data);
    }

    // 获取复习卡片状态
    async getFlashcardStatus(cardId) {
        return await this.get('flashcard_status', cardId);
    }

    // 保存学习记录
    async saveLearningRecord(record) {
        const data = {
            ...record,
            completedAt: new Date().toISOString()
        };
        return await this.add('learning_records', data);
    }

    // 获取学习记录
    async getLearningRecords() {
        return await this.getAll('learning_records');
    }

    // 获取章节学习记录
    async getChapterLearningRecords(chapterId) {
        return await this.getByIndex('learning_records', 'chapterId', chapterId);
    }

    // 重置数据库（清除所有数据）
    async resetDatabase() {
        const storeNames = ['study_plans', 'user_progress', 'notes', 'practice_records', 'exam_records', 'mistakes', 'flashcard_status'];
        for (const storeName of storeNames) {
            await this.clear(storeName);
        }
        console.log('数据库重置完成');
    }
}

// 创建全局数据库实例
const db = new ExamPrepDB();
