// 核心公式数据
const formulasData = {
    // 进度管理公式
    schedule: [
        {
            id: 'f-schedule-1',
            name: '最早完成时间',
            category: '进度管理',
            expression: 'EF = ES + DU',
            explanation: 'DU为活动持续时间，ES为最早开始时间',
            variables: [
                { name: 'EF', desc: '最早完成时间 (Early Finish)' },
                { name: 'ES', desc: '最早开始时间 (Early Start)' },
                { name: 'DU', desc: '活动持续时间 (Duration)' }
            ]
        },
        {
            id: 'f-schedule-2',
            name: '最晚开始时间',
            category: '进度管理',
            expression: 'LS = LF - DU',
            explanation: 'LF为最晚完成时间',
            variables: [
                { name: 'LS', desc: '最晚开始时间 (Late Start)' },
                { name: 'LF', desc: '最晚完成时间 (Late Finish)' },
                { name: 'DU', desc: '活动持续时间 (Duration)' }
            ]
        },
        {
            id: 'f-schedule-3',
            name: '总时差',
            category: '进度管理',
            expression: 'TF = LS - ES = LF - EF',
            explanation: '总时差为零的活动在关键路径上',
            variables: [
                { name: 'TF', desc: '总时差 (Total Float)' },
                { name: 'LS', desc: '最晚开始时间' },
                { name: 'ES', desc: '最早开始时间' }
            ]
        },
        {
            id: 'f-schedule-4',
            name: 'PERT期望时间',
            category: '进度管理',
            expression: 'TE = (O + 4M + P) / 6',
            explanation: '三点估算，最可能时间权重最高',
            variables: [
                { name: 'TE', desc: '期望时间' },
                { name: 'O', desc: '乐观时间 (Optimistic)' },
                { name: 'M', desc: '最可能时间 (Most Likely)' },
                { name: 'P', desc: '悲观时间 (Pessimistic)' }
            ]
        },
        {
            id: 'f-schedule-5',
            name: 'PERT标准差',
            category: '进度管理',
            expression: 'σ = (P - O) / 6',
            explanation: '衡量不确定性程度',
            variables: [
                { name: 'σ', desc: '标准差' },
                { name: 'P', desc: '悲观时间' },
                { name: 'O', desc: '乐观时间' }
            ]
        }
    ],

    // 成本管理公式
    cost: [
        {
            id: 'f-cost-1',
            name: '成本偏差',
            category: '成本管理',
            expression: 'CV = EV - AC',
            explanation: '正值表示节约，负值表示超支',
            variables: [
                { name: 'CV', desc: '成本偏差 (Cost Variance)' },
                { name: 'EV', desc: '挣值 (Earned Value)' },
                { name: 'AC', desc: '实际成本 (Actual Cost)' }
            ]
        },
        {
            id: 'f-cost-2',
            name: '进度偏差',
            category: '成本管理',
            expression: 'SV = EV - PV',
            explanation: '正值表示提前，负值表示落后',
            variables: [
                { name: 'SV', desc: '进度偏差 (Schedule Variance)' },
                { name: 'EV', desc: '挣值' },
                { name: 'PV', desc: '计划值 (Planned Value)' }
            ]
        },
        {
            id: 'f-cost-3',
            name: '成本绩效指数',
            category: '成本管理',
            expression: 'CPI = EV / AC',
            explanation: '大于1表示成本效率高，小于1表示超支',
            variables: [
                { name: 'CPI', desc: '成本绩效指数 (Cost Performance Index)' },
                { name: 'EV', desc: '挣值' },
                { name: 'AC', desc: '实际成本' }
            ]
        },
        {
            id: 'f-cost-4',
            name: '进度绩效指数',
            category: '成本管理',
            expression: 'SPI = EV / PV',
            explanation: '大于1表示进度效率高，小于1表示落后',
            variables: [
                { name: 'SPI', desc: '进度绩效指数 (Schedule Performance Index)' },
                { name: 'EV', desc: '挣值' },
                { name: 'PV', desc: '计划值' }
            ]
        },
        {
            id: 'f-cost-5',
            name: '完工估算（典型）',
            category: '成本管理',
            expression: 'EAC = BAC / CPI',
            explanation: '假设后续按当前成本绩效执行',
            variables: [
                { name: 'EAC', desc: '完工估算 (Estimate at Completion)' },
                { name: 'BAC', desc: '完工预算 (Budget at Completion)' },
                { name: 'CPI', desc: '成本绩效指数' }
            ]
        },
        {
            id: 'f-cost-6',
            name: '完工尚需估算',
            category: '成本管理',
            expression: 'ETC = (BAC - EV) / CPI',
            explanation: '还需多少成本完成剩余工作',
            variables: [
                { name: 'ETC', desc: '完工尚需估算 (Estimate to Complete)' },
                { name: 'BAC', desc: '完工预算' },
                { name: 'EV', desc: '挣值' },
                { name: 'CPI', desc: '成本绩效指数' }
            ]
        },
        {
            id: 'f-cost-7',
            name: '完工偏差',
            category: '成本管理',
            expression: 'VAC = BAC - EAC',
            explanation: '正值表示预算剩余，负值表示超支',
            variables: [
                { name: 'VAC', desc: '完工偏差 (Variance at Completion)' },
                { name: 'BAC', desc: '完工预算' },
                { name: 'EAC', desc: '完工估算' }
            ]
        },
        {
            id: 'f-cost-8',
            name: '完工尚需绩效指数',
            category: '成本管理',
            expression: 'TCPI = (BAC - EV) / (BAC - AC)',
            explanation: '大于1需提高效率，小于1可降低效率',
            variables: [
                { name: 'TCPI', desc: '完工尚需绩效指数 (To-Complete Performance Index)' },
                { name: 'BAC', desc: '完工预算' },
                { name: 'EV', desc: '挣值' },
                { name: 'AC', desc: '实际成本' }
            ]
        }
    ],

    // 风险管理公式
    risk: [
        {
            id: 'f-risk-1',
            name: '期望货币值',
            category: '风险管理',
            expression: 'EMV = 概率 × 影响',
            explanation: '用于定量风险分析',
            variables: [
                { name: 'EMV', desc: '期望货币值 (Expected Monetary Value)' },
                { name: '概率', desc: '风险发生概率' },
                { name: '影响', desc: '风险影响值' }
            ]
        }
    ],

    // 沟通管理公式
    communication: [
        {
            id: 'f-comm-1',
            name: '沟通渠道数',
            category: '沟通管理',
            expression: 'N = n × (n - 1) / 2',
            explanation: 'n为干系人数量',
            variables: [
                { name: 'N', desc: '沟通渠道数' },
                { name: 'n', desc: '干系人总数' }
            ]
        }
    ]
};

// 复习卡片数据
const flashcardsData = [
    {
        id: 'fc-1',
        category: '整体管理',
        question: '项目章程的主要作用是什么？',
        answer: '1. 正式确认项目存在\n2. 授权项目经理动用组织资源\n3. 提供项目高层级要求'
    },
    {
        id: 'fc-2',
        category: '范围管理',
        question: 'WBS的分解原则有哪些？',
        answer: '1. 100%原则：覆盖全部工作\n2. 工作包不超过80小时\n3. 一个工作包只属于一个控制账户\n4. 逐步细化'
    },
    {
        id: 'fc-3',
        category: '进度管理',
        question: '关键路径的特点是什么？',
        answer: '1. 关键路径是最长路径\n2. 关键路径可以有多条\n3. 关键路径可能变化\n4. 关键路径上的活动总时差为零'
    },
    {
        id: 'fc-4',
        category: '成本管理',
        question: 'CV、SV、CPI、SPI的含义？',
        answer: 'CV（成本偏差）= EV - AC\nSV（进度偏差）= EV - PV\nCPI（成本绩效指数）= EV / AC\nSPI（进度绩效指数）= EV / PV'
    },
    {
        id: 'fc-5',
        category: '风险管理',
        question: '威胁的四种应对策略？',
        answer: '1. 规避：消除威胁\n2. 转移：转移责任\n3. 减轻：降低概率或影响\n4. 接受：接受后果'
    },
    {
        id: 'fc-6',
        category: '风险管理',
        question: '机会的四种应对策略？',
        answer: '1. 开拓：确保机会发生\n2. 分享：分享收益\n3. 增强：提高概率或影响\n4. 接受：愿意利用机会'
    },
    {
        id: 'fc-7',
        category: '采购管理',
        question: '哪种合同类型对买方风险最低？',
        answer: '固定总价合同（FFP）对买方风险最低，因为价格固定，买方成本可控。'
    },
    {
        id: 'fc-8',
        category: '人力资源管理',
        question: '冲突解决的最佳方法是什么？',
        answer: '合作/解决问题是最佳方法，能实现双赢。其他方法包括：撤退、缓和、妥协、强迫。'
    },
    {
        id: 'fc-9',
        category: '变更管理',
        question: '变更控制流程是什么？',
        answer: '1. 提出变更请求\n2. 变更影响分析\n3. CCB审批\n4. 更新项目文件\n5. 通知干系人\n6. 实施变更\n7. 验证变更'
    },
    {
        id: 'fc-10',
        category: '质量管理',
        question: '质量管理七工具是哪些？',
        answer: '1. 因果图（鱼骨图）\n2. 流程图\n3. 核查表\n4. 帕累托图\n5. 直方图\n6. 控制图\n7. 散点图'
    },
    {
        id: 'fc-11',
        category: '整体管理',
        question: '五大过程组是什么？',
        answer: '启动 → 计划 → 执行 → 监控 → 收尾'
    },
    {
        id: 'fc-12',
        category: '整体管理',
        question: '十大知识领域是什么？',
        answer: '整体、范围、进度、成本、质量、人力、沟通、风险、采购、干系人\n口诀：整范进成质，人沟风采干'
    }
];

// 全局变量已在文件顶部定义
