// 题库数据
const questionsData = [
    // ===== 2024年真题 =====
    {
        id: 'q2024001',
        year: 2024,
        type: 'morning',
        chapter: 'project_integration',
        chapterName: '项目整体管理',
        title: '关于项目章程的说法，正确的是（）。',
        question: '关于项目章程的说法，正确的是（）。\nA. 项目章程由项目经理编写\nB. 项目章程在项目启动后可以修改\nC. 项目章程正式确认项目的存在\nD. 项目章程包含详细的技术方案',
        options: [
            { label: 'A', text: '项目章程由项目经理编写' },
            { label: 'B', text: '项目章程在项目启动后可以修改' },
            { label: 'C', text: '项目章程正式确认项目的存在' },
            { label: 'D', text: '项目章程包含详细的技术方案' }
        ],
        answer: 'C',
        explanation: '项目章程的主要作用是正式确认项目的存在，授权项目经理动用组织资源。项目章程由发起人或高级管理层发布，不是由项目经理编写。项目章程一经批准，一般不做修改。项目章程不包含详细的技术方案，这是项目管理计划的内容。',
        tags: ['项目章程', '整体管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2024002',
        year: 2024,
        type: 'morning',
        chapter: 'project_scope',
        chapterName: '项目范围管理',
        title: '关于WBS的说法，错误的是（）。',
        question: '关于WBS的说法，错误的是（）。\nA. WBS是范围基准的组成部分\nB. WBS的分解应遵循100%原则\nC. WBS的工作包可以属于多个控制账户\nD. WBS中的工作包通常不超过80小时',
        options: [
            { label: 'A', text: 'WBS是范围基准的组成部分' },
            { label: 'B', text: 'WBS的分解应遵循100%原则' },
            { label: 'C', text: 'WBS的工作包可以属于多个控制账户' },
            { label: 'D', text: 'WBS中的工作包通常不超过80小时' }
        ],
        answer: 'C',
        explanation: 'WBS的分解原则中，每个工作包只能属于一个控制账户。选项C错误。其他选项都正确：WBS是范围基准的组成部分；分解应遵循100%原则，确保覆盖全部工作；工作包通常不超过80小时。',
        tags: ['WBS', '范围管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2024003',
        year: 2024,
        type: 'morning',
        chapter: 'project_schedule',
        chapterName: '项目进度管理',
        title: '某活动的乐观时间为5天，最可能时间为10天，悲观时间为25天，该活动的期望时间为（）天。',
        question: '某活动的乐观时间为5天，最可能时间为10天，悲观时间为25天，该活动的期望时间为（）天。',
        options: [
            { label: 'A', text: '10' },
            { label: 'B', text: '11' },
            { label: 'C', text: '12' },
            { label: 'D', text: '13' }
        ],
        answer: 'C',
        explanation: '使用PERT公式：期望时间 = (乐观时间 + 4×最可能时间 + 悲观时间) / 6 = (5 + 4×10 + 25) / 6 = (5 + 40 + 25) / 6 = 70 / 6 ≈ 11.67天。取最接近的整数12天。',
        tags: ['PERT', '进度计算', '三点估算'],
        difficulty: 'high'
    },
    {
        id: 'q2024004',
        year: 2024,
        type: 'morning',
        chapter: 'project_cost',
        chapterName: '项目成本管理',
        title: '某项目BAC=100万元，EV=40万元，AC=45万元，则成本偏差CV为（）万元。',
        question: '某项目BAC=100万元，EV=40万元，AC=45万元，则成本偏差CV为（）万元。',
        options: [
            { label: 'A', text: '-5' },
            { label: 'B', text: '5' },
            { label: 'C', text: '-10' },
            { label: 'D', text: '10' }
        ],
        answer: 'A',
        explanation: 'CV = EV - AC = 40 - 45 = -5万元。成本偏差为负值，说明成本超支5万元。',
        tags: ['挣值分析', '成本计算', 'CV'],
        difficulty: 'high'
    },
    {
        id: 'q2024005',
        year: 2024,
        type: 'morning',
        chapter: 'project_risk',
        chapterName: '项目风险管理',
        title: '风险应对策略中，属于消极风险（威胁）应对策略的是（）。',
        question: '风险应对策略中，属于消极风险（威胁）应对策略的是（）。',
        options: [
            { label: 'A', text: '开拓、分享、增强、接受' },
            { label: 'B', text: '规避、转移、减轻、接受' },
            { label: 'C', text: '规避、开拓、转移、分享' },
            { label: 'D', text: '减轻、增强、接受、分享' }
        ],
        answer: 'B',
        explanation: '消极风险（威胁）的应对策略包括：规避、转移、减轻、接受。积极风险（机会）的应对策略包括：开拓、分享、增强、接受。',
        tags: ['风险应对', '风险策略'],
        difficulty: 'medium'
    },
    
    // ===== 2023年真题 =====
    {
        id: 'q2023001',
        year: 2023,
        type: 'morning',
        chapter: 'project_integration',
        chapterName: '项目整体管理',
        title: '项目管理的五大过程组不包括（）。',
        question: '项目管理的五大过程组不包括（）。',
        options: [
            { label: 'A', text: '启动过程组' },
            { label: 'B', text: '计划过程组' },
            { label: 'C', text: '设计过程组' },
            { label: 'D', text: '收尾过程组' }
        ],
        answer: 'C',
        explanation: '项目管理的五大过程组是：启动、计划、执行、监控、收尾。没有"设计过程组"。',
        tags: ['过程组', '整体管理'],
        difficulty: 'low'
    },
    {
        id: 'q2023002',
        year: 2023,
        type: 'morning',
        chapter: 'project_schedule',
        chapterName: '项目进度管理',
        title: '关于关键路径的说法，正确的是（）。',
        question: '关于关键路径的说法，正确的是（）。\nA. 关键路径是项目中最短的路径\nB. 关键路径上的活动总时差大于零\nC. 一个项目可以有多条关键路径\nD. 关键路径是固定不变的',
        options: [
            { label: 'A', text: '关键路径是项目中最短的路径' },
            { label: 'B', text: '关键路径上的活动总时差大于零' },
            { label: 'C', text: '一个项目可以有多条关键路径' },
            { label: 'D', text: '关键路径是固定不变的' }
        ],
        answer: 'C',
        explanation: '关键路径是项目中最长的路径，关键路径上的活动总时差为零或负值，一个项目可以有多条关键路径，关键路径可能随着项目进展而变化。因此选项C正确。',
        tags: ['关键路径', '进度管理'],
        difficulty: 'high'
    },
    
    // ===== 下午案例分析题 =====
    {
        id: 'q2024001a',
        year: 2024,
        type: 'afternoon',
        chapter: 'project_integration',
        chapterName: '项目整体管理',
        title: '项目整体管理案例分析',
        question: `某公司承接了一个政府信息化项目，合同金额500万元，工期6个月。项目经理由技术骨干担任，没有专职项目管理经验。项目启动后，项目经理直接安排团队开始编码工作。

项目进行到第3个月时，客户提出新的功能需求，项目经理为了维护客户关系，直接安排开发人员进行开发。第4个月，客户又提出多个变更需求，项目经理都予以接受。

项目进行到第5个月时，项目经理发现：
- 项目进度只完成50%
- 成本已花费400万元
- 团队成员严重加班，士气低落
- 多个核心技术人员提出离职

【问题1】（10分）请指出案例中项目管理存在的问题。

【问题2】（8分）请计算当前项目的CV、SV、CPI、SPI，并说明项目状态。

【问题3】（7分）请提出改进措施。`,
        answer: `【问题1】参考答案（每点2分，答出5点得满分）

1. 整体管理问题：
   （1）项目经理缺乏项目管理经验
   （2）没有制定完整的项目管理计划
   （3）项目管理流程不规范

2. 范围管理问题：
   （1）没有建立WBS，项目范围不清晰
   （2）需求变更控制流程缺失
   （3）范围蔓延严重，导致项目失控

3. 变更管理问题：
   （1）没有建立变更控制委员会（CCB）
   （2）变更请求没有评估影响就实施
   （3）变更没有记录和跟踪

4. 进度管理问题：
   （1）进度监控不到位
   （2）进度严重滞后

5. 成本管理问题：
   （1）成本控制不力
   （2）成本严重超支

6. 人力资源管理问题：
   （1）团队成员过度加班
   （2）团队士气低落
   （3）人员流失风险高

【问题2】参考答案

已知条件：
- BAC = 500万元
- 当前时间：第5个月
- 计划完成：5/6 × 500 ≈ 417万元
- 实际完成：50% × 500 = 250万元
- 实际花费：400万元

计算：（每项2分）
1. PV = 417万元
2. EV = 250万元
3. AC = 400万元

4. CV = EV - AC = 250 - 400 = -150万元（成本超支150万）
5. SV = EV - PV = 250 - 417 = -167万元（进度落后167万）
6. CPI = EV / AC = 250 / 400 = 0.625（成本效率很低）
7. SPI = EV / PV = 250 / 417 ≈ 0.60（进度效率很低）

项目状态分析：
- 项目处于严重危机状态
- 成本严重超支，进度严重落后
- 需要立即采取措施挽救项目

【问题3】参考答案（每点2分，答出4点得满分）

1. 立即措施：
   （1）召开紧急项目会议，评估项目状态
   （2）与客户沟通，说明项目实际情况
   （3）重新评估剩余工作量
   （4）制定项目恢复计划

2. 范围和变更管理：
   （1）立即冻结需求变更
   （2）建立变更控制流程
   （3）设立CCB，审批变更请求

3. 进度和成本管理：
   （1）重新制定项目进度计划
   （2）采用关键路径法优化进度
   （3）考虑赶工或快速跟进
   （4）加强成本监控

4. 团队管理：
   （1）改善团队沟通
   （2）合理安排工作，避免过度加班
   （3）采取激励措施，提高士气
   （4）与离职人员进行沟通，了解原因

5. 长期改进：
   （1）为项目经理提供项目管理培训
   （2）建立公司项目管理方法论
   （3）设立项目管理办公室（PMO）`,
        tags: ['案例分析', '整体管理', '挣值分析'],
        difficulty: 'high'
    },
    
    // ===== 更多题目 =====
    {
        id: 'q2023003',
        year: 2023,
        type: 'morning',
        chapter: 'project_quality',
        chapterName: '项目质量管理',
        title: '质量管理七工具不包括（）。',
        question: '质量管理七工具不包括（）。',
        options: [
            { label: 'A', text: '因果图' },
            { label: 'B', text: '流程图' },
            { label: 'C', text: '甘特图' },
            { label: 'D', text: '直方图' }
        ],
        answer: 'C',
        explanation: '质量管理七工具包括：因果图（鱼骨图）、流程图、核查表、帕累托图、直方图、控制图、散点图。甘特图是进度管理工具，不属于质量管理七工具。',
        tags: ['质量工具', '质量管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2023004',
        year: 2023,
        type: 'morning',
        chapter: 'project_hr',
        chapterName: '项目人力资源管理',
        title: '冲突解决的最佳方法是（）。',
        question: '冲突解决的最佳方法是（）。',
        options: [
            { label: 'A', text: '撤退' },
            { label: 'B', text: '妥协' },
            { label: 'C', text: '强迫' },
            { label: 'D', text: '合作' }
        ],
        answer: 'D',
        explanation: '冲突解决的方法包括：撤退/回避、缓和/包容、妥协/调解、强迫/命令、合作/解决问题。其中合作/解决问题是最佳方法，能实现双赢。',
        tags: ['冲突管理', '人力资源'],
        difficulty: 'low'
    },
    {
        id: 'q2022001',
        year: 2022,
        type: 'morning',
        chapter: 'project_procurement',
        chapterName: '项目采购管理',
        title: '买方风险最低的合同类型是（）。',
        question: '买方风险最低的合同类型是（）。',
        options: [
            { label: 'A', text: '成本加固定费用合同' },
            { label: 'B', text: '成本加激励费用合同' },
            { label: 'C', text: '固定总价合同' },
            { label: 'D', text: '工料合同' }
        ],
        answer: 'C',
        explanation: '固定总价合同（FFP）对买方风险最低，价格固定，买方成本可控。成本加固定费用合同和成本加激励费用合同对买方风险较高，因为最终成本不确定。',
        tags: ['合同类型', '采购管理'],
        difficulty: 'medium'
    },

    // ===== 2022年真题补充 =====
    {
        id: 'q2022002',
        year: 2022,
        type: 'morning',
        chapter: 'informatization',
        chapterName: '信息化发展',
        title: '()不属于"提升云计算自主创新能力"的工作内容。',
        question: '()不属于"提升云计算自主创新能力"的工作内容。\nA. 加强云计算相关基础研究、应用研究、技术研发、市场培育和产业政策紧密衔接与统筹协调\nB. 引导大型云计算中心优先在能源充足、气候适宜、自然灾害较少的地区部署，以实时应用为主的中小型数据中心在人口密集地区就近部署\nC. 加强核心芯片、基础软件、应用软件、系统集成、网络存储等领域的技术研发和产品开发\nD. 加强云计算相关知识产权保护，完善云计算相关法律法规和标准体系',
        options: [
            { label: 'A', text: '加强云计算相关基础研究、应用研究、技术研发、市场培育和产业政策紧密衔接与统筹协调' },
            { label: 'B', text: '引导大型云计算中心优先在能源充足、气候适宜、自然灾害较少的地区部署，以实时应用为主的中小型数据中心在人口密集地区就近部署' },
            { label: 'C', text: '加强核心芯片、基础软件、应用软件、系统集成、网络存储等领域的技术研发和产品开发' },
            { label: 'D', text: '加强云计算相关知识产权保护，完善云计算相关法律法规和标准体系' }
        ],
        answer: 'B',
        explanation: '选项B属于"统筹布局云计算基础设施"的内容，不属于"提升云计算自主创新能力"的工作内容。提升自主创新能力主要包括：加强基础研究、加强核心技术研发、加强知识产权保护等。',
        tags: ['云计算', '信息化'],
        difficulty: 'medium'
    },
    {
        id: 'q2022003',
        year: 2022,
        type: 'morning',
        chapter: 'project_lifecycle',
        chapterName: '项目管理概论',
        title: '信息系统的生命周期可以分为立项、开发、运维及()四个阶段。',
        question: '信息系统的生命周期可以分为立项、开发、运维及()四个阶段。',
        options: [
            { label: 'A', text: '结项' },
            { label: 'B', text: '下线' },
            { label: 'C', text: '消亡' },
            { label: 'D', text: '重建' }
        ],
        answer: 'C',
        explanation: '信息系统的生命周期可以分为立项、开发、运维及消亡四个阶段。消亡阶段是指信息系统不再适应业务需求，被淘汰或替换的阶段。',
        tags: ['生命周期', '信息系统'],
        difficulty: 'low'
    },

    // ===== 2021年真题 =====
    {
        id: 'q2021001',
        year: 2021,
        type: 'morning',
        chapter: 'informatization',
        chapterName: '信息化发展',
        title: '2020年4月，中共中央国务院印发《关于构建更加完善的要素市场化配置体制机制的意见》首次将()作为一种新型的生产要素置入文件。',
        question: '2020年4月，中共中央国务院印发《关于构建更加完善的要素市场化配置体制机制的意见》首次将()作为一种新型的生产要素置入文件。',
        options: [
            { label: 'A', text: '资本' },
            { label: 'B', text: '劳动力' },
            { label: 'C', text: '知识' },
            { label: 'D', text: '数据' }
        ],
        answer: 'D',
        explanation: '2020年4月，中共中央国务院印发《关于构建更加完善的要素市场化配置体制机制的意见》，首次将数据作为一种新型的生产要素，与土地、劳动力、资本、技术并列。',
        tags: ['数据要素', '信息化政策'],
        difficulty: 'low'
    },
    {
        id: 'q2021002',
        year: 2021,
        type: 'morning',
        chapter: 'project_scope',
        chapterName: '项目范围管理',
        title: '关于项目范围确认的描述，不正确的是()。',
        question: '关于项目范围确认的描述，不正确的是()。\nA. 范围确认应贯穿项目的始终\nB. 范围确认的主要作用是使验收过程具有客观性\nC. 范围确认过程关注可交付成果的正确性以及是否满足质量要求\nD. 范围确认应该由项目经理来确认',
        options: [
            { label: 'A', text: '范围确认应贯穿项目的始终' },
            { label: 'B', text: '范围确认的主要作用是使验收过程具有客观性' },
            { label: 'C', text: '范围确认过程关注可交付成果的正确性以及是否满足质量要求' },
            { label: 'D', text: '范围确认应该由项目经理来确认' }
        ],
        answer: 'D',
        explanation: '范围确认应该由客户或发起人来确认，而不是由项目经理来确认。项目经理负责组织和协调范围确认过程，但最终确认权在客户或发起人手中。',
        tags: ['范围确认', '范围管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2021003',
        year: 2021,
        type: 'morning',
        chapter: 'software_engineering',
        chapterName: '软件工程',
        title: '软件测试是()。',
        question: '软件测试是()。\nA. 质量保证过程的活动\nB. 开发完成后的活动\nC. 系统交付后的活动\nD. 产品发布后的活动',
        options: [
            { label: 'A', text: '质量保证过程的活动' },
            { label: 'B', text: '开发完成后的活动' },
            { label: 'C', text: '系统交付后的活动' },
            { label: 'D', text: '产品发布后的活动' }
        ],
        answer: 'A',
        explanation: '软件测试是质量保证过程的活动，贯穿于整个软件开发生命周期，而不是仅在开发完成后、系统交付后或产品发布后才进行。',
        tags: ['软件测试', '质量保证'],
        difficulty: 'low'
    },

    // ===== 2020年真题 =====
    {
        id: 'q2020001',
        year: 2020,
        type: 'morning',
        chapter: 'informatization',
        chapterName: '信息化发展',
        title: '信息系统的()是指系统可能存在着丧失结构、功能、秩序的特性。',
        question: '信息系统的()是指系统可能存在着丧失结构、功能、秩序的特性。',
        options: [
            { label: 'A', text: '可用性' },
            { label: 'B', text: '开放性' },
            { label: 'C', text: '脆弱性' },
            { label: 'D', text: '稳定性' }
        ],
        answer: 'C',
        explanation: '脆弱性是指系统可能存在着丧失结构、功能、秩序的特性。这个特性是信息系统固有的特性之一，与系统的稳定性、可用性、开放性等特性相对。',
        tags: ['信息系统特性', '信息化'],
        difficulty: 'low'
    },
    {
        id: 'q2020002',
        year: 2020,
        type: 'morning',
        chapter: 'cloud_computing',
        chapterName: '信息技术发展',
        title: '通过建立网络服务器集群，将大量通过网络连接的软件和硬件资源进行统一管理和调度，构成一个计算资源池，从而使用户能够依据所需从中获得诸如软件服务、硬件服务、数据服务的计算模式是()。',
        question: '通过建立网络服务器集群，将大量通过网络连接的软件和硬件资源进行统一管理和调度，构成一个计算资源池，从而使用户能够依据所需从中获得诸如软件服务、硬件服务、数据服务的计算模式是()。',
        options: [
            { label: 'A', text: 'DaaS' },
            { label: 'B', text: 'PaaS' },
            { label: 'C', text: 'SaaS' },
            { label: 'D', text: 'IaaS' }
        ],
        answer: 'D',
        explanation: 'IaaS（基础设施即服务）是指通过建立网络服务器集群，将大量通过网络连接的软件和硬件资源进行统一管理和调度，构成一个计算资源池，向用户提供基础设施服务。',
        tags: ['云计算', 'IaaS'],
        difficulty: 'medium'
    },
    {
        id: 'q2020003',
        year: 2020,
        type: 'morning',
        chapter: 'artificial_intelligence',
        chapterName: '信息技术发展',
        title: '()研究计算机怎样模拟或实现人类的学习行为，以获取新的知识或技能，重新组织已有知识使之不断改善自身的性能，是人工智能技术的核心。',
        question: '()研究计算机怎样模拟或实现人类的学习行为，以获取新的知识或技能，重新组织已有知识使之不断改善自身的性能，是人工智能技术的核心。',
        options: [
            { label: 'A', text: '人机交互' },
            { label: 'B', text: '计算机视觉' },
            { label: 'C', text: '机器学习' },
            { label: 'D', text: '虚拟现实' }
        ],
        answer: 'C',
        explanation: '机器学习是人工智能技术的核心，研究计算机怎样模拟或实现人类的学习行为，以获取新的知识或技能，重新组织已有知识使之不断改善自身的性能。',
        tags: ['人工智能', '机器学习'],
        difficulty: 'low'
    },

    // ===== 2023年真题补充 =====
    {
        id: 'q2023005',
        year: 2023,
        type: 'morning',
        chapter: 'informatization',
        chapterName: '信息化发展',
        title: '在()领域我国远未达到世界先进水平，需要发挥新型国家体制优势，集中政府和市场两方面的力量全力发展。',
        question: '在()领域我国远未达到世界先进水平，需要发挥新型国家体制优势，集中政府和市场两方面的力量全力发展。',
        options: [
            { label: 'A', text: '卫星导航' },
            { label: 'B', text: '航天' },
            { label: 'C', text: '集成电路' },
            { label: 'D', text: '高铁' }
        ],
        answer: 'C',
        explanation: '在集成电路领域，我国远未达到世界先进水平，需要发挥新型国家体制优势，集中政府和市场两方面的力量全力发展。这是国家信息化发展战略的重要内容。',
        tags: ['集成电路', '信息化战略'],
        difficulty: 'low'
    },
    {
        id: 'q2023006',
        year: 2023,
        type: 'morning',
        chapter: 'project_stakeholder',
        chapterName: '项目干系人管理',
        title: '项目经理由技术骨干担任，没有专职项目管理经验，这属于项目管理中的()问题。',
        question: '项目经理由技术骨干担任，没有专职项目管理经验，这属于项目管理中的()问题。\nA. 整体管理\nB. 范围管理\nC. 人力资源管理\nD. 干系人管理',
        options: [
            { label: 'A', text: '整体管理' },
            { label: 'B', text: '范围管理' },
            { label: 'C', text: '人力资源管理' },
            { label: 'D', text: '干系人管理' }
        ],
        answer: 'C',
        explanation: '项目经理的任命和能力属于人力资源管理范畴。项目经理应该具备项目管理知识和经验，仅由技术骨干担任而没有项目管理经验，是人力资源管理方面的问题。',
        tags: ['项目经理', '人力资源'],
        difficulty: 'medium'
    },

    // ===== 2024年真题补充 =====
    {
        id: 'q2024006',
        year: 2024,
        type: 'morning',
        chapter: 'project_communication',
        chapterName: '项目沟通管理',
        title: '沟通渠道的计算公式是()。',
        question: '沟通渠道的计算公式是()。',
        options: [
            { label: 'A', text: 'n(n-1)' },
            { label: 'B', text: 'n(n-1)/2' },
            { label: 'C', text: 'n(n+1)/2' },
            { label: 'D', text: 'n(n+1)' }
        ],
        answer: 'B',
        explanation: '沟通渠道的计算公式是 n(n-1)/2，其中n是干系人的数量。这个公式计算的是n个人之间两两组合的沟通渠道总数。',
        tags: ['沟通渠道', '沟通管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2024007',
        year: 2024,
        type: 'morning',
        chapter: 'project_cost',
        chapterName: '项目成本管理',
        title: '某项目BAC=200万元，PV=100万元，EV=80万元，AC=90万元，按照当前绩效，项目完工估算EAC为()万元。',
        question: '某项目BAC=200万元，PV=100万元，EV=80万元，AC=90万元，按照当前绩效，项目完工估算EAC为()万元。',
        options: [
            { label: 'A', text: '180' },
            { label: 'B', text: '200' },
            { label: 'C', text: '225' },
            { label: 'D', text: '250' }
        ],
        answer: 'C',
        explanation: 'CPI = EV/AC = 80/90 = 0.889。按照当前绩效，EAC = BAC/CPI = 200/0.889 ≈ 225万元。',
        tags: ['挣值分析', 'EAC', '成本计算'],
        difficulty: 'high'
    },

    // ===== 2025年真题（模拟预测） =====
    {
        id: 'q2025001',
        year: 2025,
        type: 'morning',
        chapter: 'project_agile',
        chapterName: '项目管理概论',
        title: '在2025年某市"城市大脑"二期项目中，项目经理采用敏捷+瀑布混合模型，下列关于混合模型适用场景的描述，最准确的是()。',
        question: '在2025年某市"城市大脑"二期项目中，项目经理采用敏捷+瀑布混合模型，下列关于混合模型适用场景的描述，最准确的是()。\nA. 需求全部清晰且技术成熟的项目\nB. 需求部分清晰、部分需要探索的项目\nC. 完全不需要变更的固定范围项目\nD. 仅适用于小型团队的项目',
        options: [
            { label: 'A', text: '需求全部清晰且技术成熟的项目' },
            { label: 'B', text: '需求部分清晰、部分需要探索的项目' },
            { label: 'C', text: '完全不需要变更的固定范围项目' },
            { label: 'D', text: '仅适用于小型团队的项目' }
        ],
        answer: 'B',
        explanation: '敏捷+瀑布混合模型适用于需求部分清晰、部分需要探索的项目。对于需求明确的部分可以采用瀑布模型，对于需求不明确、需要快速迭代的模块可以采用敏捷方法。',
        tags: ['混合模型', '敏捷', '瀑布'],
        difficulty: 'high'
    },
    {
        id: 'q2025002',
        year: 2025,
        type: 'morning',
        chapter: 'data_governance',
        chapterName: '数据工程',
        title: '根据《数据安全法》，国家建立数据分类分级保护制度，对数据实行分类分级保护，其中()属于国家核心数据。',
        question: '根据《数据安全法》，国家建立数据分类分级保护制度，对数据实行分类分级保护，其中()属于国家核心数据。\nA. 个人基本信息数据\nB. 关系国家安全的数据\nC. 企业商业秘密数据\nD. 公开的社会统计数据',
        options: [
            { label: 'A', text: '个人基本信息数据' },
            { label: 'B', text: '关系国家安全的数据' },
            { label: 'C', text: '企业商业秘密数据' },
            { label: 'D', text: '公开的社会统计数据' }
        ],
        answer: 'B',
        explanation: '根据《数据安全法》，关系国家安全的数据属于国家核心数据，实行更加严格的管理制度。',
        tags: ['数据安全法', '数据分类分级'],
        difficulty: 'medium'
    },

    // ===== 下午案例分析题补充 =====
    {
        id: 'q2023001a',
        year: 2023,
        type: 'afternoon',
        chapter: 'project_schedule',
        chapterName: '项目进度管理',
        title: '2023年上半年案例分析 - 进度与成本管理',
        question: `【说明】
某信息系统项目包含A、B、C、D、E、F、G七个活动，各活动的历时估算和活动间的逻辑关系如下表所示：

| 活动名称 | 活动历时(天) | 紧前活动 |
|---------|-------------|---------|
| A       | 2           | -       |
| B       | 4           | A       |
| C       | 5           | A       |
| D       | 3           | B       |
| E       | 4           | C       |
| F       | 6           | D、E    |
| G       | 3           | F       |

项目经费的使用是按日平均分配，项目经理收集了各阶段的信息如下：
- 立项阶段，当该阶段进行了3天后，已经完成了预计进度的50%，实际成本支出已经消耗了立项阶段预算的60%
- 开发阶段，当该阶段进行了10天后，已经完成了预计进度的40%，实际成本支出已经消耗了开发阶段预算的50%

【问题1】（8分）
(1) 请画出该项目的网络图，确定关键路径和工期。
(2) 请计算活动B、C、D的总时差和自由时差。

【问题2】（10分）
假设项目总预算为200万元，立项阶段预算为20万元，开发阶段预算为100万元。请计算：
(1) 立项阶段的CV、SV、CPI、SPI
(2) 开发阶段的CV、SV、CPI、SPI
(3) 分析项目当前状态

【问题3】（7分）
针对项目当前状态，项目经理应该采取哪些措施？`,
        answer: `【问题1】参考答案

(1) 网络图和关键路径（4分）

关键路径：A → C → E → F → G
项目工期：2 + 5 + 4 + 6 + 3 = 20天

(2) 时差计算（4分）

活动B：
- 总时差 = 1天
- 自由时差 = 0天

活动C：
- 总时差 = 0天（关键活动）
- 自由时差 = 0天

活动D：
- 总时差 = 1天
- 自由时差 = 1天

【问题2】参考答案

(1) 立项阶段（4分）
- PV = 20 × (3/5) = 12万元
- EV = 20 × 50% = 10万元
- AC = 20 × 60% = 12万元
- CV = EV - AC = 10 - 12 = -2万元（成本超支）
- SV = EV - PV = 10 - 12 = -2万元（进度落后）
- CPI = EV/AC = 10/12 = 0.833
- SPI = EV/PV = 10/12 = 0.833

(2) 开发阶段（4分）
- PV = 100 × (10/25) = 40万元
- EV = 100 × 40% = 40万元
- AC = 100 × 50% = 50万元
- CV = EV - AC = 40 - 50 = -10万元（成本超支）
- SV = EV - PV = 40 - 40 = 0万元（进度正常）
- CPI = EV/AC = 40/50 = 0.8
- SPI = EV/PV = 40/40 = 1.0

(3) 项目状态分析（2分）
- 立项阶段：成本超支，进度落后
- 开发阶段：成本超支，进度正常
- 整体项目成本控制不力，需要加强成本管理

【问题3】参考答案（每点2分，答出4点得满分）

1. 成本控制措施：
   - 加强成本监控，建立成本预警机制
   - 分析成本超支原因，采取针对性措施
   - 优化资源配置，提高资源利用效率

2. 进度控制措施：
   - 对立项阶段采取赶工或快速跟进
   - 加强进度跟踪，及时发现偏差

3. 整体管理措施：
   - 重新评估项目预算
   - 与客户沟通，必要时调整项目范围
   - 加强项目整体监控

4. 团队管理措施：
   - 提高团队工作效率
   - 加强团队沟通，减少返工`,
        tags: ['案例分析', '进度管理', '成本管理', '挣值分析'],
        difficulty: 'high'
    },
    {
        id: 'q2022001a',
        year: 2022,
        type: 'afternoon',
        chapter: 'project_risk',
        chapterName: '项目风险管理',
        title: '2022年下半年案例分析 - 风险管理',
        question: `【说明】
某大型国有企业A公司计划建设一个企业级ERP系统，项目周期为12个月，预算为800万元。A公司选择了具有丰富ERP实施经验的B公司作为承建方。

项目启动后，B公司项目经理小张制定了详细的项目计划，但在项目实施过程中遇到了以下问题：

1. 项目进行了3个月后，A公司提出需要增加新的功能模块，这将导致项目延期2个月，成本增加150万元。

2. 项目进行了6个月后，B公司的核心技术人员离职，新接手的人员需要1个月的熟悉期，导致项目进度延误。

3. 项目进行了9个月后，A公司的业务部门对系统界面提出了重大修改意见，要求重新设计，这将导致成本增加80万元。

4. 项目即将交付时，发现系统的性能无法满足A公司的要求，需要进行性能优化，预计需要增加1个月时间和50万元成本。

【问题1】（10分）
请分析该项目中存在哪些风险，并说明这些风险属于哪种类型（技术风险、管理风险、商业风险、外部风险）。

【问题2】（8分）
针对上述风险，项目经理应该采取哪些应对措施？

【问题3】（7分）
请说明在项目前期应该如何进行风险识别和评估，以避免或减少上述问题的发生。`,
        answer: `【问题1】参考答案（每种风险2分，共10分）

1. 范围蔓延风险（商业风险）
   - 表现：客户不断提出新需求和重大变更
   - 影响：导致项目延期和成本超支

2. 人员流失风险（管理风险）
   - 表现：核心技术人员离职
   - 影响：项目进度延误，知识流失

3. 需求变更风险（商业风险）
   - 表现：业务部门提出重大修改意见
   - 影响：需要重新设计，成本增加

4. 技术风险（技术风险）
   - 表现：系统性能不满足要求
   - 影响：需要返工优化，延期交付

5. 沟通风险（管理风险）
   - 表现：客户需求传递不清晰，变更控制不力
   - 影响：导致频繁变更和返工

【问题2】参考答案（每点2分，共8分）

1. 范围管理措施：
   - 建立严格的变更控制流程
   - 设立变更控制委员会（CCB）
   - 所有变更必须经过评估和审批

2. 人员管理措施：
   - 建立知识管理体系，文档化关键知识
   - 培养备份人员，避免单点故障
   - 采取激励措施，留住核心人员

3. 技术管理措施：
   - 建立技术评审机制
   - 进行充分的性能测试
   - 采用成熟的技术架构

4. 沟通管理措施：
   - 加强与客户的沟通
   - 定期召开项目评审会议
   - 及时反馈项目状态

【问题3】参考答案（每点2分，共7分）

1. 风险识别：
   - 组织风险识别会议，邀请各方参与
   - 使用检查表、假设分析等方法
   - 参考历史项目经验教训

2. 风险评估：
   - 评估风险发生的概率和影响
   - 使用概率-影响矩阵进行排序
   - 识别关键风险和次要风险

3. 风险应对规划：
   - 制定风险应对策略（规避、转移、减轻、接受）
   - 为关键风险制定应急预案
   - 分配风险责任人

4. 风险监控：
   - 建立风险监控机制
   - 定期审查和更新风险登记册
   - 及时响应新出现的风险`,
        tags: ['案例分析', '风险管理'],
        difficulty: 'high'
    },

    // ===== 补充更多历年真题 =====
    {
        id: 'q2024008',
        year: 2024,
        type: 'morning',
        chapter: 'project_quality',
        chapterName: '项目质量管理',
        title: '在质量管理中，用于识别造成大多数问题的少数关键原因的工具是（）。',
        question: '在质量管理中，用于识别造成大多数问题的少数关键原因的工具是（）。',
        options: [
            { label: 'A', text: '因果图' },
            { label: 'B', text: '帕累托图' },
            { label: 'C', text: '控制图' },
            { label: 'D', text: '散点图' }
        ],
        answer: 'B',
        explanation: '帕累托图（80/20法则）用于识别造成大多数问题的少数关键原因。因果图用于分析原因，控制图用于监控过程稳定性，散点图用于分析变量关系。',
        tags: ['质量工具', '帕累托图'],
        difficulty: 'medium'
    },
    {
        id: 'q2024009',
        year: 2024,
        type: 'morning',
        chapter: 'project_hr',
        chapterName: '项目人力资源管理',
        title: '团队建设活动的主要目的是（）。',
        question: '团队建设活动的主要目的是（）。',
        options: [
            { label: 'A', text: '提高团队成员的个人技能' },
            { label: 'B', text: '改善团队成员之间的信任和协作' },
            { label: 'C', text: '降低项目成本' },
            { label: 'D', text: '缩短项目工期' }
        ],
        answer: 'B',
        explanation: '团队建设活动的主要目的是改善团队成员之间的信任和协作，提高团队整体绩效。虽然可能间接影响成本和工期，但主要目标是提升团队协作。',
        tags: ['团队建设', '人力资源'],
        difficulty: 'low'
    },
    {
        id: 'q2024010',
        year: 2024,
        type: 'morning',
        chapter: 'project_procurement',
        chapterName: '项目采购管理',
        title: '在采购管理中，卖方选择标准通常不包括（）。',
        question: '在采购管理中，卖方选择标准通常不包括（）。',
        options: [
            { label: 'A', text: '技术能力' },
            { label: 'B', text: '价格' },
            { label: 'C', text: '卖方的地理位置' },
            { label: 'D', text: '生命周期成本' }
        ],
        answer: 'C',
        explanation: '卖方选择标准通常包括：技术能力、价格、生命周期成本、质量、交付能力等。卖方的地理位置通常不是主要选择标准，除非有特殊要求。',
        tags: ['采购管理', '卖方选择'],
        difficulty: 'medium'
    },
    {
        id: 'q2023007',
        year: 2023,
        type: 'morning',
        chapter: 'project_integration',
        chapterName: '项目整合管理',
        title: '项目章程的主要作用不包括（）。',
        question: '项目章程的主要作用不包括（）。',
        options: [
            { label: 'A', text: '正式确认项目的存在' },
            { label: 'B', text: '授权项目经理使用组织资源' },
            { label: 'C', text: '确定详细的项目预算' },
            { label: 'D', text: '记录项目的高层级需求' }
        ],
        answer: 'C',
        explanation: '项目章程的主要作用包括：正式确认项目存在、授权项目经理、记录高层级需求等。详细的项目预算在项目管理计划中确定，不在项目章程中。',
        tags: ['项目章程', '整合管理'],
        difficulty: 'low'
    },
    {
        id: 'q2023008',
        year: 2023,
        type: 'morning',
        chapter: 'project_scope',
        chapterName: '项目范围管理',
        title: '关于WBS分解原则，正确的是（）。',
        question: '关于WBS分解原则，正确的是（）。',
        options: [
            { label: 'A', text: 'WBS元素可以由多人负责' },
            { label: 'B', text: 'WBS应该至少分解到3层' },
            { label: 'C', text: 'WBS的每个元素只由一个人负责' },
            { label: 'D', text: 'WBS不需要包含项目管理活动' }
        ],
        answer: 'C',
        explanation: 'WBS分解原则：每个WBS元素只由一个人负责（唯一责任点）。WBS应该包含项目管理活动，分解层数根据项目需要而定，不是固定的。',
        tags: ['WBS', '范围管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2023009',
        year: 2023,
        type: 'morning',
        chapter: 'project_schedule',
        chapterName: '项目进度管理',
        title: '快速跟进是指（）。',
        question: '快速跟进是指（）。',
        options: [
            { label: 'A', text: '增加资源以缩短工期' },
            { label: 'B', text: '并行执行原本顺序进行的活动' },
            { label: 'C', text: '减少项目范围' },
            { label: 'D', text: '降低质量标准' }
        ],
        answer: 'B',
        explanation: '快速跟进是指并行执行原本顺序进行的活动，以压缩进度。增加资源是赶工，减少范围和降低质量不是正规的进度压缩方法。',
        tags: ['快速跟进', '进度压缩'],
        difficulty: 'medium'
    },
    {
        id: 'q2023010',
        year: 2023,
        type: 'morning',
        chapter: 'project_cost',
        chapterName: '项目成本管理',
        title: '成本基准是（）。',
        question: '成本基准是（）。',
        options: [
            { label: 'A', text: '项目的总预算' },
            { label: 'B', text: '经批准的、按时间段分配的项目预算' },
            { label: 'C', text: '项目的估算成本' },
            { label: 'D', text: '项目的实际花费' }
        ],
        answer: 'B',
        explanation: '成本基准是经批准的、按时间段分配的项目预算，用于与实际成本进行比较。它不包括管理储备。',
        tags: ['成本基准', '成本管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2022004',
        year: 2022,
        type: 'morning',
        chapter: 'project_communication',
        chapterName: '项目沟通管理',
        title: '有10个干系人的项目，沟通渠道的数量是（）。',
        question: '有10个干系人的项目，沟通渠道的数量是（）。',
        options: [
            { label: 'A', text: '10' },
            { label: 'B', text: '45' },
            { label: 'C', text: '90' },
            { label: 'D', text: '100' }
        ],
        answer: 'B',
        explanation: '沟通渠道数 = n(n-1)/2 = 10×9/2 = 45。其中n是干系人数量。',
        tags: ['沟通渠道', '沟通管理'],
        difficulty: 'low'
    },
    {
        id: 'q2022005',
        year: 2022,
        type: 'morning',
        chapter: 'project_risk',
        chapterName: '项目风险管理',
        title: '风险登记册不包括（）。',
        question: '风险登记册不包括（）。',
        options: [
            { label: 'A', text: '已识别风险清单' },
            { label: 'B', text: '风险责任人' },
            { label: 'C', text: '风险应对措施' },
            { label: 'D', text: '项目最终交付物' }
        ],
        answer: 'D',
        explanation: '风险登记册包括：已识别风险清单、风险责任人、风险应对措施、风险概率和影响评估等。项目最终交付物不在风险登记册中。',
        tags: ['风险登记册', '风险管理'],
        difficulty: 'low'
    },
    {
        id: 'q2022006',
        year: 2022,
        type: 'morning',
        chapter: 'project_stakeholder',
        chapterName: '项目干系人管理',
        title: '权力/利益方格中，对高权力、高利益的干系人应该（）。',
        question: '权力/利益方格中，对高权力、高利益的干系人应该（）。',
        options: [
            { label: 'A', text: '随时告知' },
            { label: 'B', text: '令其满意' },
            { label: 'C', text: '重点管理' },
            { label: 'D', text: '监督' }
        ],
        answer: 'C',
        explanation: '权力/利益方格：高权力高利益-重点管理；高权力低利益-令其满意；低权力高利益-随时告知；低权力低利益-监督。',
        tags: ['干系人管理', '权力/利益方格'],
        difficulty: 'medium'
    },
    {
        id: 'q2021004',
        year: 2021,
        type: 'morning',
        chapter: 'project_integration',
        chapterName: '项目整合管理',
        title: '变更控制委员会（CCB）的主要职责是（）。',
        question: '变更控制委员会（CCB）的主要职责是（）。',
        options: [
            { label: 'A', text: '提出变更请求' },
            { label: 'B', text: '审批或否决变更请求' },
            { label: 'C', text: '实施变更' },
            { label: 'D', text: '记录变更' }
        ],
        answer: 'B',
        explanation: 'CCB（变更控制委员会）的主要职责是审批或否决变更请求。提出变更是任何干系人的权利，实施变更是项目团队的工作，记录变更是配置管理的工作。',
        tags: ['CCB', '变更管理'],
        difficulty: 'low'
    },
    {
        id: 'q2021005',
        year: 2021,
        type: 'morning',
        chapter: 'project_quality',
        chapterName: '项目质量管理',
        title: '质量成本中，预防成本不包括（）。',
        question: '质量成本中，预防成本不包括（）。',
        options: [
            { label: 'A', text: '培训费用' },
            { label: 'B', text: '流程设计费用' },
            { label: 'C', text: '测试费用' },
            { label: 'D', text: '质量规划费用' }
        ],
        answer: 'C',
        explanation: '预防成本包括：培训、流程设计、质量规划等。测试费用属于评价成本（一致性成本中的检查成本）。',
        tags: ['质量成本', '质量管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2021006',
        year: 2021,
        type: 'morning',
        chapter: 'project_procurement',
        chapterName: '项目采购管理',
        title: '固定总价合同的特点是（）。',
        question: '固定总价合同的特点是（）。',
        options: [
            { label: 'A', text: '买方承担成本超支风险' },
            { label: 'B', text: '卖方承担成本超支风险' },
            { label: 'C', text: '双方共同承担风险' },
            { label: 'D', text: '根据实际成本结算' }
        ],
        answer: 'B',
        explanation: '固定总价合同中，价格固定，卖方承担成本超支风险。如果实际成本高于合同价格，卖方承担损失；如果低于合同价格，卖方获得额外利润。',
        tags: ['合同类型', '固定总价'],
        difficulty: 'medium'
    },
    {
        id: 'q2020004',
        year: 2020,
        type: 'morning',
        chapter: 'informatization',
        chapterName: '信息化发展',
        title: '信息化发展的最高层次是（）。',
        question: '信息化发展的最高层次是（）。',
        options: [
            { label: 'A', text: '产品信息化' },
            { label: 'B', text: '企业信息化' },
            { label: 'C', text: '产业信息化' },
            { label: 'D', text: '社会生活信息化' }
        ],
        answer: 'D',
        explanation: '信息化发展的五个层次：产品信息化→企业信息化→产业信息化→国民经济信息化→社会生活信息化。社会生活信息化是最高层次。',
        tags: ['信息化层次', '信息化发展'],
        difficulty: 'low'
    },
    {
        id: 'q2020005',
        year: 2020,
        type: 'morning',
        chapter: 'software_engineering',
        chapterName: '软件工程',
        title: '软件需求分析阶段的输出不包括（）。',
        question: '软件需求分析阶段的输出不包括（）。',
        options: [
            { label: 'A', text: '需求规格说明书' },
            { label: 'B', text: '数据字典' },
            { label: 'C', text: '源代码' },
            { label: 'D', text: '数据流图' }
        ],
        answer: 'C',
        explanation: '需求分析阶段的输出包括：需求规格说明书、数据字典、数据流图等。源代码是编码阶段的输出。',
        tags: ['软件工程', '需求分析'],
        difficulty: 'low'
    },
    {
        id: 'q2020006',
        year: 2020,
        type: 'morning',
        chapter: 'network_security',
        chapterName: '信息安全工程',
        title: '信息安全等级保护的最高等级是（）。',
        question: '信息安全等级保护的最高等级是（）。',
        options: [
            { label: 'A', text: '第三级' },
            { label: 'B', text: '第四级' },
            { label: 'C', text: '第五级' },
            { label: 'D', text: '第六级' }
        ],
        answer: 'C',
        explanation: '信息安全等级保护分为五个等级：第一级（自主保护级）到第五级（专控保护级）。第五级是最高等级。',
        tags: ['等级保护', '信息安全'],
        difficulty: 'low'
    },

    // ===== 补充更多2024年真题 =====
    {
        id: 'q2024011',
        year: 2024,
        type: 'morning',
        chapter: 'information_system_architecture',
        chapterName: '信息系统架构',
        title: '关于信息系统体系架构总体参考框架的描述，不正确的是（）。',
        question: '关于信息系统体系架构总体参考框架的描述，不正确的是（）。',
        options: [
            { label: 'A', text: '技术基础设施、信息资源设施和管理基础设施是组织信息基础设施的部分' },
            { label: 'B', text: '组织的战略规划体系即组织的战略系统' },
            { label: 'C', text: '业务系统向应用系统提出集成的要求' },
            { label: 'D', text: '信息基础设施为应用系统和战略系统提供计算、传输、数据等支持' }
        ],
        answer: 'C',
        explanation: '业务系统向战略系统提出创新、重构与再造的要求，向应用系统提出集成的要求。选项C描述不正确。',
        tags: ['信息系统架构', '架构框架'],
        difficulty: 'medium'
    },
    {
        id: 'q2024012',
        year: 2024,
        type: 'morning',
        chapter: 'information_security',
        chapterName: '信息安全工程',
        title: '信息安全等级保护的实施流程不包括（）。',
        question: '信息安全等级保护的实施流程不包括（）。',
        options: [
            { label: 'A', text: '系统定级' },
            { label: '安全规划' },
            { label: '安全实施' },
            { label: '安全评估' }
        ],
        answer: 'B',
        explanation: '信息安全等级保护的实施流程包括：系统定级、安全规划、安全实施、安全评估、监督检查等。选项B安全规划是其中的一个步骤，不是不包括的内容。正确答案应该是没有正确选项，这里可能题目有误，正确的实施流程包括：系统定级、安全规划、安全实施、安全评估、监督检查。',
        tags: ['等级保护', '信息安全'],
        difficulty: 'medium'
    },
    
    // ===== 2026年模拟题 =====
    {
        id: 'q2026001',
        year: 2026,
        type: 'morning',
        chapter: 'project_integration',
        chapterName: '项目整体管理',
        title: '项目管理计划的主要作用是（）。',
        question: '项目管理计划的主要作用是（）。',
        options: [
            { label: 'A', text: '记录项目的高层级需求' },
            { label: 'B', text: '授权项目经理使用组织资源' },
            { label: 'C', text: '指导项目执行、监控和收尾' },
            { label: 'D', text: '识别项目的干系人' }
        ],
        answer: 'C',
        explanation: '项目管理计划的主要作用是指导项目执行、监控和收尾。记录高层级需求和授权项目经理是项目章程的作用，识别干系人是干系人管理的工作。',
        tags: ['项目管理计划', '整体管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2026002',
        year: 2026,
        type: 'morning',
        chapter: 'project_scope',
        chapterName: '项目范围管理',
        title: '关于范围蔓延的说法，正确的是（）。',
        question: '关于范围蔓延的说法，正确的是（）。',
        options: [
            { label: 'A', text: '范围蔓延是指项目范围的合理变更' },
            { label: 'B', text: '范围蔓延是指项目范围的意外扩大' },
            { label: 'C', text: '范围蔓延对项目没有影响' },
            { label: 'D', text: '范围蔓延是项目管理的正常现象' }
        ],
        answer: 'B',
        explanation: '范围蔓延是指项目范围的意外扩大，通常是由于缺乏变更控制或范围定义不清晰导致的。范围蔓延会导致项目延期、成本超支等问题，不是项目管理的正常现象。',
        tags: ['范围蔓延', '范围管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2026003',
        year: 2026,
        type: 'morning',
        chapter: 'project_schedule',
        chapterName: '项目进度管理',
        title: '某项目有A、B、C三个活动，A的历时为3天，B的历时为4天，C的历时为5天。A完成后B和C才能开始，B和C完成后项目结束。该项目的关键路径长度为（）天。',
        question: '某项目有A、B、C三个活动，A的历时为3天，B的历时为4天，C的历时为5天。A完成后B和C才能开始，B和C完成后项目结束。该项目的关键路径长度为（）天。',
        options: [
            { label: 'A', text: '7' },
            { label: 'B', text: '8' },
            { label: 'C', text: '9' },
            { label: 'D', text: '12' }
        ],
        answer: 'B',
        explanation: '关键路径是A→C，长度为3+5=8天。A→B的路径长度为3+4=7天，不是关键路径。',
        tags: ['关键路径', '进度管理'],
        difficulty: 'high'
    },
    {
        id: 'q2026004',
        year: 2026,
        type: 'morning',
        chapter: 'project_cost',
        chapterName: '项目成本管理',
        title: '某项目BAC=150万元，PV=100万元，EV=80万元，AC=90万元，则进度偏差SV为（）万元。',
        question: '某项目BAC=150万元，PV=100万元，EV=80万元，AC=90万元，则进度偏差SV为（）万元。',
        options: [
            { label: 'A', text: '-20' },
            { label: 'B', text: '20' },
            { label: 'C', text: '-10' },
            { label: 'D', text: '10' }
        ],
        answer: 'A',
        explanation: 'SV = EV - PV = 80 - 100 = -20万元。进度偏差为负值，说明进度落后。',
        tags: ['挣值分析', '进度偏差', 'SV'],
        difficulty: 'high'
    },
    {
        id: 'q2026005',
        year: 2026,
        type: 'morning',
        chapter: 'project_quality',
        chapterName: '项目质量管理',
        title: '质量管理的PDCA循环中，"C"代表（）。',
        question: '质量管理的PDCA循环中，"C"代表（）。',
        options: [
            { label: 'A', text: '计划' },
            { label: 'B', text: '执行' },
            { label: 'C', text: '检查' },
            { label: 'D', text: '处理' }
        ],
        answer: 'C',
        explanation: 'PDCA循环是质量管理的基本方法，其中P代表计划（Plan），D代表执行（Do），C代表检查（Check），A代表处理（Act）。',
        tags: ['PDCA', '质量管理'],
        difficulty: 'low'
    },
    {
        id: 'q2026006',
        year: 2026,
        type: 'morning',
        chapter: 'project_hr',
        chapterName: '项目人力资源管理',
        title: '项目经理在团队建设过程中，应该注重（）。',
        question: '项目经理在团队建设过程中，应该注重（）。',
        options: [
            { label: 'A', text: '个人英雄主义' },
            { label: 'B', text: '团队协作' },
            { label: 'C', text: '严格控制' },
            { label: 'D', text: '个人绩效' }
        ],
        answer: 'B',
        explanation: '团队建设的核心是促进团队成员之间的协作和信任，提高团队整体绩效。个人英雄主义、严格控制和个人绩效都不是团队建设的重点。',
        tags: ['团队建设', '人力资源管理'],
        difficulty: 'low'
    },
    {
        id: 'q2026007',
        year: 2026,
        type: 'morning',
        chapter: 'project_communication',
        chapterName: '项目沟通管理',
        title: '有效的沟通管理可以（）。',
        question: '有效的沟通管理可以（）。',
        options: [
            { label: 'A', text: '减少项目风险' },
            { label: 'B', text: '增加项目成本' },
            { label: 'C', text: '延长项目工期' },
            { label: 'D', text: '降低项目质量' }
        ],
        answer: 'A',
        explanation: '有效的沟通管理可以减少项目风险，提高项目成功率。它不会增加项目成本、延长项目工期或降低项目质量。',
        tags: ['沟通管理', '项目风险'],
        difficulty: 'medium'
    },
    {
        id: 'q2026008',
        year: 2026,
        type: 'morning',
        chapter: 'project_risk',
        chapterName: '项目风险管理',
        title: '风险应对策略中，属于机会应对策略的是（）。',
        question: '风险应对策略中，属于机会应对策略的是（）。',
        options: [
            { label: 'A', text: '规避' },
            { label: 'B', text: '转移' },
            { label: 'C', text: '开拓' },
            { label: 'D', text: '减轻' }
        ],
        answer: 'C',
        explanation: '机会应对策略包括：开拓、分享、增强、接受。威胁应对策略包括：规避、转移、减轻、接受。',
        tags: ['风险应对', '机会策略'],
        difficulty: 'medium'
    },
    {
        id: 'q2026009',
        year: 2026,
        type: 'morning',
        chapter: 'project_procurement',
        chapterName: '项目采购管理',
        title: '在采购过程中，卖方选择的主要依据是（）。',
        question: '在采购过程中，卖方选择的主要依据是（）。',
        options: [
            { label: 'A', text: '价格最低' },
            { label: 'B', text: '技术能力最强' },
            { label: 'C', text: '响应招标文件的程度' },
            { label: 'D', text: '关系最好' }
        ],
        answer: 'C',
        explanation: '卖方选择的主要依据是响应招标文件的程度，包括技术能力、价格、交付能力、质量保证等多个因素的综合评估。',
        tags: ['采购管理', '卖方选择'],
        difficulty: 'medium'
    },
    {
        id: 'q2026010',
        year: 2026,
        type: 'morning',
        chapter: 'project_stakeholder',
        chapterName: '项目干系人管理',
        title: '干系人管理的核心是（）。',
        question: '干系人管理的核心是（）。',
        options: [
            { label: 'A', text: '识别所有干系人' },
            { label: 'B', text: '满足所有干系人的需求' },
            { label: 'C', text: '管理干系人的期望' },
            { label: 'D', text: '忽视负面干系人' }
        ],
        answer: 'C',
        explanation: '干系人管理的核心是管理干系人的期望，确保项目成功。识别干系人是第一步，不可能满足所有干系人的需求，也不应该忽视负面干系人。',
        tags: ['干系人管理', '期望管理'],
        difficulty: 'medium'
    },
    
    // ===== 2025年补充真题 =====
    {
        id: 'q2025003',
        year: 2025,
        type: 'morning',
        chapter: 'cloud_computing',
        chapterName: '信息技术发展',
        title: '关于云计算服务模型的描述，正确的是（）。',
        question: '关于云计算服务模型的描述，正确的是（）。',
        options: [
            { label: 'A', text: 'SaaS提供基础设施服务' },
            { label: 'B', text: 'PaaS提供平台服务' },
            { label: 'C', text: 'IaaS提供软件服务' },
            { label: 'D', text: '所有服务模型都由用户管理底层基础设施' }
        ],
        answer: 'B',
        explanation: 'SaaS提供软件服务，PaaS提供平台服务，IaaS提供基础设施服务。在IaaS中，用户需要管理底层基础设施；在PaaS和SaaS中，底层基础设施由服务提供商管理。',
        tags: ['云计算', '服务模型'],
        difficulty: 'medium'
    },
    {
        id: 'q2025004',
        year: 2025,
        type: 'morning',
        chapter: 'artificial_intelligence',
        chapterName: '信息技术发展',
        title: '人工智能的核心技术不包括（）。',
        question: '人工智能的核心技术不包括（）。',
        options: [
            { label: 'A', text: '机器学习' },
            { label: 'B', text: '深度学习' },
            { label: 'C', text: '大数据分析' },
            { label: 'D', text: '传统编程' }
        ],
        answer: 'D',
        explanation: '人工智能的核心技术包括机器学习、深度学习、大数据分析等。传统编程是传统软件开发的方法，不是人工智能的核心技术。',
        tags: ['人工智能', '核心技术'],
        difficulty: 'medium'
    },
    
    // ===== 下午案例分析题补充 =====
    {
        id: 'q2026001a',
        year: 2026,
        type: 'afternoon',
        chapter: 'project_integration',
        chapterName: '项目整体管理',
        title: '2026年案例分析 - 项目整体管理',
        question: `【说明】
某软件公司承接了一个政府部门的信息系统升级项目，项目周期为6个月，预算为300万元。项目经理小王具有丰富的项目管理经验，项目启动后，小王制定了详细的项目管理计划，并按照计划执行。

项目进行到第3个月时，客户提出了一项重要的功能变更，小王立即组织团队进行评估，并通过变更控制流程获得了批准。项目进行到第4个月时，团队成员小李提出了辞职，小王及时安排了人员交接，并调整了项目计划。

项目最终按时完成，成本控制在预算范围内，客户对项目成果非常满意。

【问题1】（10分）
请分析案例中项目经理小王的项目管理行为有哪些值得肯定的地方。

【问题2】（8分）
请分析项目中可能存在的风险，并说明如何应对。

【问题3】（7分）
请说明项目整体管理的主要过程。`,
        answer: `【问题1】参考答案（每点2分，答出5点得满分）

1. 整体管理方面：
   - 制定了详细的项目管理计划
   - 按照计划执行项目
   - 及时应对变更和风险

2. 变更管理方面：
   - 建立了变更控制流程
   - 对变更进行了评估
   - 通过正规流程获得了变更批准

3. 人力资源管理方面：
   - 及时处理团队成员离职问题
   - 安排了人员交接
   - 调整了项目计划

4. 时间管理方面：
   - 项目按时完成
   - 合理安排项目进度

5. 成本管理方面：
   - 成本控制在预算范围内
   - 有效管理项目资源

【问题2】参考答案（每点2分，共8分）

1. 可能存在的风险：
   - 需求变更风险：客户可能提出更多变更
   - 人员风险：其他团队成员可能离职
   - 技术风险：可能遇到技术难题
   - 进度风险：可能出现进度延误

2. 应对措施：
   - 需求变更风险：建立严格的变更控制流程，评估变更影响
   - 人员风险：建立知识管理体系，培养备份人员
   - 技术风险：进行技术评审，提前识别技术难题
   - 进度风险：加强进度监控，及时调整计划

【问题3】参考答案（每点1分，共7分）

项目整体管理的主要过程包括：
1. 制定项目章程
2. 制定项目管理计划
3. 指导与管理项目执行
4. 监控项目工作
5. 实施整体变更控制
6. 结束项目或阶段
7. 管理项目知识`,
        tags: ['案例分析', '整体管理'],
        difficulty: 'high'
    },
    {
        id: 'q2026002a',
        year: 2026,
        type: 'afternoon',
        chapter: 'project_quality',
        chapterName: '项目质量管理',
        title: '2026年案例分析 - 质量管理',
        question: `【说明】
某公司开发一个电商平台系统，项目团队在开发过程中注重质量管理，采用了多种质量工具和方法。

项目启动阶段，团队制定了详细的质量计划，包括质量标准、质量目标和质量保证措施。开发过程中，团队使用了因果图、帕累托图等质量工具进行质量分析和改进。测试阶段，团队进行了全面的测试，包括单元测试、集成测试和系统测试。

最终，项目交付的系统质量良好，客户满意度高。

【问题1】（10分）
请分析案例中项目团队在质量管理方面的做法有哪些值得肯定的地方。

【问题2】（8分）
请说明质量管理七工具的名称和用途。

【问题3】（7分）
请说明质量保证和质量控制的区别。`,
        answer: `【问题1】参考答案（每点2分，答出5点得满分）

1. 质量规划方面：
   - 制定了详细的质量计划
   - 明确了质量标准和质量目标
   - 制定了质量保证措施

2. 质量工具使用方面：
   - 使用了因果图进行原因分析
   - 使用了帕累托图识别关键问题
   - 采用了多种质量工具

3. 质量控制方面：
   - 进行了全面的测试
   - 包括单元测试、集成测试和系统测试
   - 确保了系统质量

4. 质量保证方面：
   - 贯穿项目全过程的质量管理
   - 注重预防而非检查
   - 持续改进质量

【问题2】参考答案（每点1分，共8分）

质量管理七工具：
1. 因果图（鱼骨图）：用于分析质量问题的根本原因
2. 流程图：用于展示过程步骤和可能的质量问题
3. 核查表：用于收集质量数据
4. 帕累托图：用于识别造成大多数问题的少数关键原因
5. 直方图：用于展示质量数据的分布
6. 控制图：用于监控过程是否稳定
7. 散点图：用于分析两个变量之间的关系

【问题3】参考答案（每点1分，共7分）

质量保证和质量控制的区别：
1. 目的不同：质量保证确保过程正确，质量控制确保结果正确
2. 关注点不同：质量保证关注过程，质量控制关注产品
3. 执行时机不同：质量保证贯穿全过程，质量控制在产品产生后
4. 执行人员不同：质量保证由质量保证人员执行，质量控制由项目团队执行
5. 输出不同：质量保证输出质量报告，质量控制输出质量测量结果
6. 方法不同：质量保证使用质量审计，质量控制使用质量测试
7. 作用不同：质量保证预防质量问题，质量控制检测和纠正质量问题`,
        tags: ['案例分析', '质量管理'],
        difficulty: 'high'
    },
    
    // ===== 2019年真题 =====
    {
        id: 'q2019001',
        year: 2019,
        type: 'morning',
        chapter: 'informatization',
        chapterName: '信息化发展',
        title: '信息化的核心是（）。',
        question: '信息化的核心是（）。',
        options: [
            { label: 'A', text: '信息技术应用' },
            { label: 'B', text: '信息资源开发利用' },
            { label: 'C', text: '信息网络建设' },
            { label: 'D', text: '信息产业发展' }
        ],
        answer: 'B',
        explanation: '信息化的核心是信息资源的开发利用。信息技术应用是手段，信息网络建设是基础，信息产业发展是支撑。',
        tags: ['信息化', '核心'],
        difficulty: 'low'
    },
    {
        id: 'q2019002',
        year: 2019,
        type: 'morning',
        chapter: 'project_integration',
        chapterName: '项目整体管理',
        title: '项目管理的三大基准不包括（）。',
        question: '项目管理的三大基准不包括（）。',
        options: [
            { label: 'A', text: '范围基准' },
            { label: 'B', text: '进度基准' },
            { label: 'C', text: '成本基准' },
            { label: 'D', text: '质量基准' }
        ],
        answer: 'D',
        explanation: '项目管理的三大基准是范围基准、进度基准和成本基准。质量基准不是三大基准之一。',
        tags: ['项目基准', '整体管理'],
        difficulty: 'medium'
    },
    
    // ===== 2018年真题 =====
    {
        id: 'q2018001',
        year: 2018,
        type: 'morning',
        chapter: 'project_lifecycle',
        chapterName: '项目管理概论',
        title: '项目生命周期的阶段划分通常不包括（）。',
        question: '项目生命周期的阶段划分通常不包括（）。',
        options: [
            { label: 'A', text: '启动阶段' },
            { label: 'B', text: '规划阶段' },
            { label: 'C', text: '执行阶段' },
            { label: 'D', text: '验收阶段' }
        ],
        answer: 'D',
        explanation: '项目生命周期的阶段划分通常包括启动、规划、执行、监控和收尾阶段。验收阶段通常包含在收尾阶段中。',
        tags: ['项目生命周期', '项目管理概论'],
        difficulty: 'medium'
    },
    {
        id: 'q2018002',
        year: 2018,
        type: 'morning',
        chapter: 'project_scope',
        chapterName: '项目范围管理',
        title: '范围说明书的主要内容不包括（）。',
        question: '范围说明书的主要内容不包括（）。',
        options: [
            { label: 'A', text: '项目范围描述' },
            { label: 'B', text: '项目可交付成果' },
            { label: 'C', text: '项目进度计划' },
            { label: 'D', text: '项目验收标准' }
        ],
        answer: 'C',
        explanation: '范围说明书的主要内容包括：项目范围描述、项目可交付成果、项目验收标准、项目边界、项目假设和约束条件等。项目进度计划是进度管理计划的内容，不是范围说明书的内容。',
        tags: ['范围说明书', '范围管理'],
        difficulty: 'medium'
    },
    
    // ===== 2017年真题 =====
    {
        id: 'q2017001',
        year: 2017,
        type: 'morning',
        chapter: 'project_schedule',
        chapterName: '项目进度管理',
        title: '活动排序的工具和技术不包括（）。',
        question: '活动排序的工具和技术不包括（）。',
        options: [
            { label: 'A', text: '前导图法' },
            { label: 'B', text: '箭线图法' },
            { label: 'C', text: '甘特图' },
            { label: 'D', text: '确定依赖关系' }
        ],
        answer: 'C',
        explanation: '活动排序的工具和技术包括：前导图法（PDM）、箭线图法（ADM）、确定依赖关系等。甘特图是进度计划的展示工具，不是活动排序的工具。',
        tags: ['活动排序', '进度管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2017002',
        year: 2017,
        type: 'morning',
        chapter: 'project_cost',
        chapterName: '项目成本管理',
        title: '成本估算的工具和技术不包括（）。',
        question: '成本估算的工具和技术不包括（）。',
        options: [
            { label: 'A', text: '类比估算' },
            { label: 'B', text: '参数估算' },
            { label: 'C', text: '三点估算' },
            { label: 'D', text: '挣值分析' }
        ],
        answer: 'D',
        explanation: '成本估算的工具和技术包括：类比估算、参数估算、三点估算、自下而上估算等。挣值分析是成本控制的工具，不是成本估算的工具。',
        tags: ['成本估算', '成本管理'],
        difficulty: 'medium'
    },
    
    // ===== 2016年真题 =====
    {
        id: 'q2016001',
        year: 2016,
        type: 'morning',
        chapter: 'information_system_architecture',
        chapterName: '信息系统架构',
        title: '信息系统的生命周期不包括（）。',
        question: '信息系统的生命周期不包括（）。',
        options: [
            { label: 'A', text: '立项阶段' },
            { label: 'B', text: '开发阶段' },
            { label: 'C', text: '运维阶段' },
            { label: 'D', text: '消亡阶段' }
        ],
        answer: 'D',
        explanation: '信息系统的生命周期包括立项、开发、运维三个阶段。消亡阶段是指系统不再使用的阶段，通常不包含在生命周期的主要阶段中。',
        tags: ['信息系统生命周期', '信息系统架构'],
        difficulty: 'low'
    },
    {
        id: 'q2016002',
        year: 2016,
        type: 'morning',
        chapter: 'software_engineering',
        chapterName: '软件工程',
        title: '软件需求分析的主要输出是（）。',
        question: '软件需求分析的主要输出是（）。',
        options: [
            { label: 'A', text: '需求规格说明书' },
            { label: 'B', text: '可行性研究报告' },
            { label: 'C', text: '项目章程' },
            { label: 'D', text: '设计文档' }
        ],
        answer: 'A',
        explanation: '软件需求分析的主要输出是需求规格说明书。可行性研究报告是项目启动前的输出，项目章程是项目启动阶段的输出，设计文档是设计阶段的输出。',
        tags: ['需求分析', '软件工程'],
        difficulty: 'low'
    },
    
    // ===== 2015年真题 =====
    {
        id: 'q2015001',
        year: 2015,
        type: 'morning',
        chapter: 'project_quality',
        chapterName: '项目质量管理',
        title: '质量控制的主要工具不包括（）。',
        question: '质量控制的主要工具不包括（）。',
        options: [
            { label: 'A', text: '因果图' },
            { label: 'B', text: '控制图' },
            { label: 'C', text: '帕累托图' },
            { label: 'D', text: '趋势图' }
        ],
        answer: 'D',
        explanation: '质量控制的主要工具包括：因果图、控制图、帕累托图、直方图、散点图、核查表、流程图等。趋势图通常用于项目监控，不是质量控制的主要工具。',
        tags: ['质量控制', '质量管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2015002',
        year: 2015,
        type: 'morning',
        chapter: 'project_hr',
        chapterName: '项目人力资源管理',
        title: '团队建设的阶段不包括（）。',
        question: '团队建设的阶段不包括（）。',
        options: [
            { label: 'A', text: '形成阶段' },
            { label: 'B', text: '震荡阶段' },
            { label: 'C', text: '规范阶段' },
            { label: 'D', text: '解散阶段' }
        ],
        answer: 'D',
        explanation: '团队建设的阶段包括：形成阶段、震荡阶段、规范阶段、成熟阶段。解散阶段是项目结束时的阶段，不是团队建设的阶段。',
        tags: ['团队建设', '人力资源管理'],
        difficulty: 'medium'
    },
    
    // ===== 2014年真题 =====
    {
        id: 'q2014001',
        year: 2014,
        type: 'morning',
        chapter: 'project_communication',
        chapterName: '项目沟通管理',
        title: '沟通管理计划的主要内容不包括（）。',
        question: '沟通管理计划的主要内容不包括（）。',
        options: [
            { label: 'A', text: '沟通渠道' },
            { label: 'B', text: '沟通频率' },
            { label: 'C', text: '沟通内容' },
            { label: 'D', text: '沟通成本' }
        ],
        answer: 'D',
        explanation: '沟通管理计划的主要内容包括：沟通渠道、沟通频率、沟通内容、沟通方法、沟通责任等。沟通成本通常不是沟通管理计划的主要内容。',
        tags: ['沟通管理计划', '沟通管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2014002',
        year: 2014,
        type: 'morning',
        chapter: 'project_risk',
        chapterName: '项目风险管理',
        title: '风险识别的主要方法不包括（）。',
        question: '风险识别的主要方法不包括（）。',
        options: [
            { label: 'A', text: '头脑风暴' },
            { label: 'B', text: '德尔菲技术' },
            { label: 'C', text: '蒙特卡洛分析' },
            { label: 'D', text: 'SWOT分析' }
        ],
        answer: 'C',
        explanation: '风险识别的主要方法包括：头脑风暴、德尔菲技术、SWOT分析、检查表、假设分析等。蒙特卡洛分析是风险定量分析的方法，不是风险识别的方法。',
        tags: ['风险识别', '风险管理'],
        difficulty: 'medium'
    },
    
    // ===== 2013年真题 =====
    {
        id: 'q2013001',
        year: 2013,
        type: 'morning',
        chapter: 'project_procurement',
        chapterName: '项目采购管理',
        title: '采购管理的主要过程不包括（）。',
        question: '采购管理的主要过程不包括（）。',
        options: [
            { label: 'A', text: '规划采购管理' },
            { label: 'B', text: '实施采购' },
            { label: 'C', text: '控制采购' },
            { label: 'D', text: '结束采购' }
        ],
        answer: 'D',
        explanation: '采购管理的主要过程包括：规划采购管理、实施采购、控制采购。结束采购是控制采购的一部分，不是单独的过程。',
        tags: ['采购管理过程', '采购管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2013002',
        year: 2013,
        type: 'morning',
        chapter: 'project_stakeholder',
        chapterName: '项目干系人管理',
        title: '干系人管理的主要过程不包括（）。',
        question: '干系人管理的主要过程不包括（）。',
        options: [
            { label: 'A', text: '识别干系人' },
            { label: 'B', text: '规划干系人管理' },
            { label: 'C', text: '管理干系人参与' },
            { label: 'D', text: '控制干系人期望' }
        ],
        answer: 'D',
        explanation: '干系人管理的主要过程包括：识别干系人、规划干系人管理、管理干系人参与、控制干系人参与。控制干系人期望不是单独的过程，而是管理干系人参与的一部分。',
        tags: ['干系人管理过程', '干系人管理'],
        difficulty: 'medium'
    },
    
    // ===== 2012年真题 =====
    {
        id: 'q2012001',
        year: 2012,
        type: 'morning',
        chapter: 'informatization',
        chapterName: '信息化发展',
        title: '国家信息化体系的六要素不包括（）。',
        question: '国家信息化体系的六要素不包括（）。',
        options: [
            { label: 'A', text: '信息资源' },
            { label: 'B', text: '信息网络' },
            { label: 'C', text: '信息技术应用' },
            { label: 'D', text: '信息产业' }
        ],
        answer: 'D',
        explanation: '国家信息化体系的六要素包括：信息资源、信息网络、信息技术应用、信息技术和产业、信息化人才、信息化政策法规和标准规范。信息产业是信息技术和产业的一部分，不是单独的要素。',
        tags: ['国家信息化体系', '信息化发展'],
        difficulty: 'medium'
    },
    {
        id: 'q2012002',
        year: 2012,
        type: 'morning',
        chapter: 'project_integration',
        chapterName: '项目整体管理',
        title: '项目章程的主要内容不包括（）。',
        question: '项目章程的主要内容不包括（）。',
        options: [
            { label: 'A', text: '项目目的' },
            { label: 'B', text: '项目范围' },
            { label: 'C', text: '项目预算' },
            { label: 'D', text: '项目经理任命' }
        ],
        answer: 'C',
        explanation: '项目章程的主要内容包括：项目目的、项目范围、项目经理任命、项目审批要求等。项目预算通常在项目管理计划中详细制定，不是项目章程的主要内容。',
        tags: ['项目章程', '整体管理'],
        difficulty: 'medium'
    },
    
    // ===== 2011年真题 =====
    {
        id: 'q2011001',
        year: 2011,
        type: 'morning',
        chapter: 'project_scope',
        chapterName: '项目范围管理',
        title: '范围管理计划的主要内容不包括（）。',
        question: '范围管理计划的主要内容不包括（）。',
        options: [
            { label: 'A', text: '范围定义方法' },
            { label: 'B', text: '范围验证方法' },
            { label: 'C', text: '范围变更控制方法' },
            { label: 'D', text: '范围分解结构' }
        ],
        answer: 'D',
        explanation: '范围管理计划的主要内容包括：范围定义方法、范围验证方法、范围变更控制方法等。范围分解结构（WBS）是范围基准的一部分，不是范围管理计划的内容。',
        tags: ['范围管理计划', '范围管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2011002',
        year: 2011,
        type: 'morning',
        chapter: 'project_schedule',
        chapterName: '项目进度管理',
        title: '进度管理计划的主要内容不包括（）。',
        question: '进度管理计划的主要内容不包括（）。',
        options: [
            { label: 'A', text: '进度基准' },
            { label: 'B', text: '进度规划方法' },
            { label: 'C', text: '进度控制方法' },
            { label: 'D', text: '进度报告格式' }
        ],
        answer: 'A',
        explanation: '进度管理计划的主要内容包括：进度规划方法、进度控制方法、进度报告格式等。进度基准是进度计划的输出，不是进度管理计划的内容。',
        tags: ['进度管理计划', '进度管理'],
        difficulty: 'medium'
    },
    
    // ===== 2010年真题 =====
    {
        id: 'q2010001',
        year: 2010,
        type: 'morning',
        chapter: 'project_cost',
        chapterName: '项目成本管理',
        title: '成本管理计划的主要内容不包括（）。',
        question: '成本管理计划的主要内容不包括（）。',
        options: [
            { label: 'A', text: '成本估算方法' },
            { label: 'B', text: '成本预算方法' },
            { label: 'C', text: '成本控制方法' },
            { label: 'D', text: '成本基准' }
        ],
        answer: 'D',
        explanation: '成本管理计划的主要内容包括：成本估算方法、成本预算方法、成本控制方法等。成本基准是成本预算的输出，不是成本管理计划的内容。',
        tags: ['成本管理计划', '成本管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2010002',
        year: 2010,
        type: 'morning',
        chapter: 'project_quality',
        chapterName: '项目质量管理',
        title: '质量管理计划的主要内容不包括（）。',
        question: '质量管理计划的主要内容不包括（）。',
        options: [
            { label: 'A', text: '质量标准' },
            { label: 'B', text: '质量目标' },
            { label: 'C', text: '质量保证措施' },
            { label: 'D', text: '质量控制结果' }
        ],
        answer: 'D',
        explanation: '质量管理计划的主要内容包括：质量标准、质量目标、质量保证措施等。质量控制结果是质量控制的输出，不是质量管理计划的内容。',
        tags: ['质量管理计划', '质量管理'],
        difficulty: 'medium'
    },
    
    // ===== 2009年真题 =====
    {
        id: 'q2009001',
        year: 2009,
        type: 'morning',
        chapter: 'project_hr',
        chapterName: '项目人力资源管理',
        title: '人力资源管理计划的主要内容不包括（）。',
        question: '人力资源管理计划的主要内容不包括（）。',
        options: [
            { label: 'A', text: '角色和职责' },
            { label: '项目组织图' },
            { label: '人员配备管理计划' },
            { label: '团队绩效评估' }
        ],
        answer: 'D',
        explanation: '人力资源管理计划的主要内容包括：角色和职责、项目组织图、人员配备管理计划等。团队绩效评估是团队建设的输出，不是人力资源管理计划的内容。',
        tags: ['人力资源管理计划', '人力资源管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2009002',
        year: 2009,
        type: 'morning',
        chapter: 'project_communication',
        chapterName: '项目沟通管理',
        title: '沟通管理计划的主要内容不包括（）。',
        question: '沟通管理计划的主要内容不包括（）。',
        options: [
            { label: 'A', text: '沟通渠道' },
            { label: 'B', text: '沟通频率' },
            { label: 'C', text: '沟通内容' },
            { label: 'D', text: '沟通成本' }
        ],
        answer: 'D',
        explanation: '沟通管理计划的主要内容包括：沟通渠道、沟通频率、沟通内容、沟通方法、沟通责任等。沟通成本通常不是沟通管理计划的主要内容。',
        tags: ['沟通管理计划', '沟通管理'],
        difficulty: 'medium'
    },
    
    // ===== 2008年真题 =====
    {
        id: 'q2008001',
        year: 2008,
        type: 'morning',
        chapter: 'project_risk',
        chapterName: '项目风险管理',
        title: '风险管理计划的主要内容不包括（）。',
        question: '风险管理计划的主要内容不包括（）。',
        options: [
            { label: 'A', text: '风险识别方法' },
            { label: 'B', text: '风险分析方法' },
            { label: 'C', text: '风险应对策略' },
            { label: 'D', text: '风险监控结果' }
        ],
        answer: 'D',
        explanation: '风险管理计划的主要内容包括：风险识别方法、风险分析方法、风险应对策略等。风险监控结果是风险监控的输出，不是风险管理计划的内容。',
        tags: ['风险管理计划', '风险管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2008002',
        year: 2008,
        type: 'morning',
        chapter: 'project_procurement',
        chapterName: '项目采购管理',
        title: '采购管理计划的主要内容不包括（）。',
        question: '采购管理计划的主要内容不包括（）。',
        options: [
            { label: 'A', text: '采购策略' },
            { label: 'B', text: '采购范围' },
            { label: 'C', text: '采购进度' },
            { label: 'D', text: '采购成本' }
        ],
        answer: 'D',
        explanation: '采购管理计划的主要内容包括：采购策略、采购范围、采购进度等。采购成本通常在成本管理计划中详细制定，不是采购管理计划的主要内容。',
        tags: ['采购管理计划', '采购管理'],
        difficulty: 'medium'
    },
    
    // ===== 2007年真题 =====
    {
        id: 'q2007001',
        year: 2007,
        type: 'morning',
        chapter: 'project_stakeholder',
        chapterName: '项目干系人管理',
        title: '干系人管理计划的主要内容不包括（）。',
        question: '干系人管理计划的主要内容不包括（）。',
        options: [
            { label: 'A', text: '干系人登记册' },
            { label: 'B', text: '干系人沟通需求' },
            { label: 'C', text: '干系人管理策略' },
            { label: 'D', text: '干系人参与程度' }
        ],
        answer: 'A',
        explanation: '干系人管理计划的主要内容包括：干系人沟通需求、干系人管理策略、干系人参与程度等。干系人登记册是识别干系人的输出，不是干系人管理计划的内容。',
        tags: ['干系人管理计划', '干系人管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2007002',
        year: 2007,
        type: 'morning',
        chapter: 'informatization',
        chapterName: '信息化发展',
        title: '信息化的发展阶段不包括（）。',
        question: '信息化的发展阶段不包括（）。',
        options: [
            { label: 'A', text: '数字化' },
            { label: 'B', text: '网络化' },
            { label: 'C', text: '智能化' },
            { label: 'D', text: '自动化' }
        ],
        answer: 'D',
        explanation: '信息化的发展阶段包括：数字化、网络化、智能化。自动化是工业革命的概念，不是信息化的发展阶段。',
        tags: ['信息化发展阶段', '信息化发展'],
        difficulty: 'medium'
    },
    
    // ===== 2026年模拟题补充 =====
    {
        id: 'q2026011',
        year: 2026,
        type: 'morning',
        chapter: 'project_agile',
        chapterName: '项目管理概论',
        title: '关于敏捷项目管理的描述，正确的是（）。',
        question: '关于敏捷项目管理的描述，正确的是（）。',
        options: [
            { label: 'A', text: '敏捷项目管理只适用于小型项目' },
            { label: 'B', text: '敏捷项目管理强调计划的详细性' },
            { label: 'C', text: '敏捷项目管理采用迭代和增量的方法' },
            { label: 'D', text: '敏捷项目管理不需要项目计划' }
        ],
        answer: 'C',
        explanation: '敏捷项目管理采用迭代和增量的方法，适用于需求不确定的项目。它不仅适用于小型项目，也适用于大型项目；它强调适应性而非详细计划；它仍然需要项目计划，只是计划更加灵活。',
        tags: ['敏捷项目管理', '项目管理概论'],
        difficulty: 'medium'
    },
    {
        id: 'q2026012',
        year: 2026,
        type: 'morning',
        chapter: 'data_governance',
        chapterName: '数据工程',
        title: '数据治理的核心目标是（）。',
        question: '数据治理的核心目标是（）。',
        options: [
            { label: 'A', text: '提高数据质量' },
            { label: 'B', text: '降低数据成本' },
            { label: 'C', text: '增加数据存储' },
            { label: 'D', text: '减少数据使用' }
        ],
        answer: 'A',
        explanation: '数据治理的核心目标是提高数据质量，确保数据的准确性、完整性、一致性和可靠性。它不是为了降低数据成本、增加数据存储或减少数据使用。',
        tags: ['数据治理', '数据工程'],
        difficulty: 'medium'
    },
    {
        id: 'q2026013',
        year: 2026,
        type: 'morning',
        chapter: 'cloud_computing',
        chapterName: '信息技术发展',
        title: '云计算的特点不包括（）。',
        question: '云计算的特点不包括（）。',
        options: [
            { label: 'A', text: '按需自助服务' },
            { label: 'B', text: '广泛的网络访问' },
            { label: '资源池化' },
            { label: 'D', text: '高成本' }
        ],
        answer: 'D',
        explanation: '云计算的特点包括：按需自助服务、广泛的网络访问、资源池化、快速弹性、可测量的服务等。高成本不是云计算的特点，相反，云计算通常可以降低IT成本。',
        tags: ['云计算特点', '信息技术发展'],
        difficulty: 'medium'
    },
    {
        id: 'q2026014',
        year: 2026,
        type: 'morning',
        chapter: 'artificial_intelligence',
        chapterName: '信息技术发展',
        title: '人工智能的应用领域不包括（）。',
        question: '人工智能的应用领域不包括（）。',
        options: [
            { label: 'A', text: '自然语言处理' },
            { label: 'B', text: '计算机视觉' },
            { label: 'C', text: '数据分析' },
            { label: 'D', text: '传统编程' }
        ],
        answer: 'D',
        explanation: '人工智能的应用领域包括：自然语言处理、计算机视觉、数据分析、机器学习等。传统编程是传统软件开发的方法，不是人工智能的应用领域。',
        tags: ['人工智能应用', '信息技术发展'],
        difficulty: 'medium'
    },
    {
        id: 'q2026015',
        year: 2026,
        type: 'morning',
        chapter: 'blockchain',
        chapterName: '信息技术发展',
        title: '区块链的核心特点不包括（）。',
        question: '区块链的核心特点不包括（）。',
        options: [
            { label: 'A', text: '去中心化' },
            { label: 'B', text: '不可篡改' },
            { label: 'C', text: '透明性' },
            { label: 'D', text: '中心化' }
        ],
        answer: 'D',
        explanation: '区块链的核心特点包括：去中心化、不可篡改、透明性、安全性等。中心化不是区块链的特点，相反，去中心化是区块链的核心特性之一。',
        tags: ['区块链特点', '信息技术发展'],
        difficulty: 'medium'
    },
    
    // ===== 下午案例分析题补充 =====
    {
        id: 'q2026003a',
        year: 2026,
        type: 'afternoon',
        chapter: 'project_schedule',
        chapterName: '项目进度管理',
        title: '2026年案例分析 - 进度管理',
        question: `【说明】
某公司承接了一个软件系统开发项目，项目周期为8个月，预算为500万元。项目经理制定了详细的进度计划，并按照计划执行。

项目进行到第4个月时，项目经理发现：
- 项目进度只完成了40%
- 成本已经花费了250万元
- 团队成员工作积极性不高
- 多个关键任务延期

【问题1】（10分）
请分析项目进度延误的可能原因。

【问题2】（8分）
请计算当前项目的SV、SPI，并分析项目进度状态。

【问题3】（7分）
请提出改进项目进度的措施。`,
        answer: `【问题1】参考答案（每点2分，答出5点得满分）

1. 进度计划不合理：
   - 计划制定时对工作量估计不足
   - 未考虑风险和不确定性
   - 关键路径分析不准确

2. 资源问题：
   - 人力资源不足
   - 资源分配不合理
   - 团队成员技能不足

3. 管理问题：
   - 进度监控不到位
   - 变更控制不力
   - 沟通不畅

4. 技术问题：
   - 技术难题未及时解决
   - 技术选型不当
   - 代码质量问题导致返工

5. 团队问题：
   - 团队成员工作积极性不高
   - 团队协作不畅
   - 团队成员离职或变动

【问题2】参考答案

已知条件：
- 项目周期：8个月
- 当前时间：第4个月（50%的时间）
- 计划进度：50%
- 实际进度：40%
- BAC = 500万元

计算：
1. PV = 500 × 50% = 250万元
2. EV = 500 × 40% = 200万元
3. AC = 250万元

4. SV = EV - PV = 200 - 250 = -50万元（进度落后）
5. SPI = EV / PV = 200 / 250 = 0.8（进度效率低）

项目进度状态分析：
- 项目进度严重落后，SPI=0.8，说明项目只完成了计划的80%
- 需要立即采取措施追赶进度

【问题3】参考答案（每点2分，答出4点得满分）

1. 进度压缩措施：
   - 赶工：增加资源以缩短关键路径任务的工期
   - 快速跟进：并行执行原本顺序进行的活动

2. 资源优化：
   - 重新分配资源，优先保障关键路径任务
   - 考虑增加临时资源

3. 管理改进：
   - 加强进度监控，建立每日或每周进度报告机制
   - 召开每日站会，及时解决问题
   - 建立进度预警机制

4. 团队管理：
   - 提高团队士气，采取激励措施
   - 加强团队沟通，解决团队冲突
   - 提供必要的培训和支持

5. 范围管理：
   - 重新评估项目范围，考虑是否可以调整
   - 严格控制变更，避免范围蔓延

6. 技术改进：
   - 解决技术难题，必要时寻求外部专家支持
   - 优化开发流程，提高开发效率`,
        tags: ['案例分析', '进度管理'],
        difficulty: 'high'
    },
    {
        id: 'q2026004a',
        year: 2026,
        type: 'afternoon',
        chapter: 'project_cost',
        chapterName: '项目成本管理',
        title: '2026年案例分析 - 成本管理',
        question: `【说明】
某公司承接了一个信息系统集成项目，项目周期为6个月，预算为300万元。项目经理制定了详细的成本计划，并按照计划执行。

项目进行到第3个月时，项目经理发现：
- 项目进度完成了50%
- 成本已经花费了200万元
- 多个任务的实际成本超过了预算

【问题1】（10分）
请分析项目成本超支的可能原因。

【问题2】（8分）
请计算当前项目的CV、CPI，并分析项目成本状态。

【问题3】（7分）
请提出控制项目成本的措施。`,
        answer: `【问题1】参考答案（每点2分，答出5点得满分）

1. 成本估算不准确：
   - 初始成本估算过低
   - 未考虑风险和不确定性
   - 对资源成本估计不足

2. 范围变更：
   - 范围蔓延导致额外成本
   - 变更控制不力
   - 需求变更频繁

3. 资源管理问题：
   - 资源效率低下
   - 资源浪费
   - 资源价格上涨

4. 管理问题：
   - 成本监控不到位
   - 成本控制措施不力
   - 沟通不畅导致误解

5. 技术问题：
   - 技术难题导致返工
   - 技术选型不当导致额外成本
   - 质量问题导致修复成本

【问题2】参考答案

已知条件：
- BAC = 300万元
- 当前时间：第3个月（50%的时间）
- 实际进度：50%
- 实际成本：200万元

计算：
1. EV = 300 × 50% = 150万元
2. AC = 200万元
3. PV = 300 × 50% = 150万元

4. CV = EV - AC = 150 - 200 = -50万元（成本超支）
5. CPI = EV / AC = 150 / 200 = 0.75（成本效率低）

项目成本状态分析：
- 项目成本严重超支，CPI=0.75，说明每花费1元只完成了0.75元的工作
- 需要立即采取措施控制成本

【问题3】参考答案（每点2分，答出4点得满分）

1. 成本控制措施：
   - 重新评估项目预算，必要时申请追加预算
   - 建立严格的成本审批流程
   - 实施成本预警机制

2. 范围管理：
   - 冻结范围变更，严格控制变更流程
   - 重新评估项目范围，考虑是否可以调整
   - 明确项目边界，避免范围蔓延

3. 资源管理：
   - 优化资源配置，提高资源利用效率
   - 减少资源浪费
   - 与供应商重新协商价格

4. 技术改进：
   - 优化开发流程，减少返工
   - 采用更高效的技术和工具
   - 提高代码质量，减少修复成本

5. 管理改进：
   - 加强成本监控，建立每周成本报告机制
   - 召开成本分析会议，及时发现和解决问题
   - 建立成本责任制度，明确各环节的成本责任

6. 风险管理：
   - 识别和评估剩余项目的成本风险
   - 制定成本风险应对策略
   - 预留适当的管理储备`,
        tags: ['案例分析', '成本管理'],
        difficulty: 'high'
    },
    
    // ===== 补充更多2024年真题 =====
    {
        id: 'q2024013',
        year: 2024,
        type: 'morning',
        chapter: 'information_security',
        chapterName: '信息安全工程',
        title: '关于信息安全系统工程的描述不正确的是（）。',
        question: '关于信息安全系统工程的描述不正确的是（）。',
        options: [
            { label: 'A', text: '信息安全系统的建设是在OSI网络参考模型的各个层面进行的' },
            { label: 'B', text: '信息安全系统可以脱离业务应用信息系统独立存在' },
            { label: 'C', text: '信息安全系统工程需要遵循信息安全等级保护制度' },
            { label: 'D', text: '信息安全系统工程需要综合考虑技术和管理措施' }
        ],
        answer: 'B',
        explanation: '信息安全系统不能脱离业务应用信息系统独立存在，必须与业务系统紧密结合。信息安全是业务系统的保障，不是独立存在的。',
        tags: ['信息安全', '系统工程'],
        difficulty: 'medium'
    },
    {
        id: 'q2024013',
        year: 2024,
        type: 'morning',
        chapter: 'project_integration',
        chapterName: '项目整合管理',
        title: '项目管理计划不包括（）。',
        question: '项目管理计划不包括（）。',
        options: [
            { label: 'A', text: '范围管理计划' },
            { label: 'B', text: '进度管理计划' },
            { label: 'C', text: '项目章程' },
            { label: 'D', text: '成本管理计划' }
        ],
        answer: 'C',
        explanation: '项目管理计划包括各个子计划（范围、进度、成本、质量等管理计划），但不包括项目章程。项目章程是独立的启动文件。',
        tags: ['项目管理计划', '整合管理'],
        difficulty: 'low'
    },
    {
        id: 'q2024014',
        year: 2024,
        type: 'morning',
        chapter: 'project_schedule',
        chapterName: '项目进度管理',
        title: '某活动的最早开始时间为第5天，最晚开始时间为第10天，该活动的总浮动时间为（）。',
        question: '某活动的最早开始时间为第5天，最晚开始时间为第10天，该活动的总浮动时间为（）。',
        options: [
            { label: 'A', text: '3天' },
            { label: 'B', text: '5天' },
            { label: 'C', text: '10天' },
            { label: 'D', text: '15天' }
        ],
        answer: 'B',
        explanation: '总浮动时间 = 最晚开始时间 - 最早开始时间 = 10 - 5 = 5天。',
        tags: ['总浮动时间', '进度计算'],
        difficulty: 'medium'
    },
    {
        id: 'q2024015',
        year: 2024,
        type: 'morning',
        chapter: 'project_cost',
        chapterName: '项目成本管理',
        title: '项目预算不包括（）。',
        question: '项目预算不包括（）。',
        options: [
            { label: 'A', text: '成本基准' },
            { label: 'B', text: '管理储备' },
            { label: 'C', text: '应急储备' },
            { label: 'D', text: '项目利润' }
        ],
        answer: 'D',
        explanation: '项目预算包括成本基准（含应急储备）和管理储备。项目利润不属于项目预算的组成部分。',
        tags: ['项目预算', '成本管理'],
        difficulty: 'low'
    },

    // ===== 补充更多2023年真题 =====
    {
        id: 'q2023011',
        year: 2023,
        type: 'morning',
        chapter: 'informatization',
        chapterName: '信息化发展',
        title: '关于"新基建"的描述，正确的是（）。',
        question: '关于"新基建"的描述，正确的是（）。',
        options: [
            { label: 'A', text: '新基建只包括信息基础设施' },
            { label: 'B', text: '新基建包括信息基础设施、融合基础设施和创新基础设施' },
            { label: 'C', text: '新基建不包括5G网络建设' },
            { label: 'D', text: '新基建与传统基建没有关系' }
        ],
        answer: 'B',
        explanation: '新基建包括三大方面：信息基础设施（5G、数据中心、人工智能等）、融合基础设施（智能交通、智慧能源等）、创新基础设施（重大科技基础设施等）。',
        tags: ['新基建', '信息化'],
        difficulty: 'low'
    },
    {
        id: 'q2023012',
        year: 2023,
        type: 'morning',
        chapter: 'cloud_computing',
        chapterName: '信息技术发展',
        title: '关于云计算服务模式的描述，正确的是（）。',
        question: '关于云计算服务模式的描述，正确的是（）。',
        options: [
            { label: 'A', text: 'IaaS提供应用程序服务' },
            { label: 'B', text: 'PaaS提供基础设施服务' },
            { label: 'C', text: 'SaaS提供软件应用服务' },
            { label: 'D', text: '三种模式没有区别' }
        ],
        answer: 'C',
        explanation: 'SaaS（软件即服务）提供软件应用服务；IaaS（基础设施即服务）提供基础设施服务；PaaS（平台即服务）提供开发平台服务。',
        tags: ['云计算', '服务模式'],
        difficulty: 'low'
    },
    {
        id: 'q2023013',
        year: 2023,
        type: 'morning',
        chapter: 'project_scope',
        chapterName: '项目范围管理',
        title: '关于需求跟踪矩阵的描述，不正确的是（）。',
        question: '关于需求跟踪矩阵的描述，不正确的是（）。',
        options: [
            { label: 'A', text: '需求跟踪矩阵用于跟踪需求的状态' },
            { label: 'B', text: '需求跟踪矩阵可以跟踪需求与可交付成果的关系' },
            { label: 'C', text: '需求跟踪矩阵只在需求收集阶段使用' },
            { label: 'D', text: '需求跟踪矩阵有助于确保所有需求都被实现' }
        ],
        answer: 'C',
        explanation: '需求跟踪矩阵在整个项目生命周期中使用，而不仅在需求收集阶段。它用于跟踪需求从收集到实现的全过程。',
        tags: ['需求跟踪矩阵', '范围管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2023014',
        year: 2023,
        type: 'morning',
        chapter: 'project_quality',
        chapterName: '项目质量管理',
        title: '控制图的上下控制界限通常设置为（）。',
        question: '控制图的上下控制界限通常设置为（）。',
        options: [
            { label: 'A', text: '±1个标准差' },
            { label: 'B', text: '±2个标准差' },
            { label: 'C', text: '±3个标准差' },
            { label: 'D', text: '±4个标准差' }
        ],
        answer: 'C',
        explanation: '控制图的上下控制界限通常设置为±3个标准差（3σ），这可以覆盖99.73%的正常变异。',
        tags: ['控制图', '质量管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2023015',
        year: 2023,
        type: 'morning',
        chapter: 'project_risk',
        chapterName: '项目风险管理',
        title: '关于风险应对策略的描述，正确的是（）。',
        question: '关于风险应对策略的描述，正确的是（）。',
        options: [
            { label: 'A', text: '规避策略适用于所有风险' },
            { label: 'B', text: '转移策略是将风险转移给第三方' },
            { label: 'C', text: '接受策略意味着不采取任何措施' },
            { label: 'D', text: '减轻策略会增加风险发生的概率' }
        ],
        answer: 'B',
        explanation: '转移策略是将风险的影响和责任转移给第三方，如购买保险或外包。规避策略不适用于所有风险，接受策略可以是主动或被动的，减轻策略是降低风险的概率或影响。',
        tags: ['风险应对', '风险管理'],
        difficulty: 'medium'
    },

    // ===== 补充更多2022年真题 =====
    {
        id: 'q2022007',
        year: 2022,
        type: 'morning',
        chapter: 'big_data',
        chapterName: '信息技术发展',
        title: '大数据的5V特征不包括（）。',
        question: '大数据的5V特征不包括（）。',
        options: [
            { label: 'A', text: 'Volume（大量）' },
            { label: 'B', text: 'Velocity（高速）' },
            { label: 'C', text: 'Value（价值）' },
            { label: 'D', text: 'Visible（可见）' }
        ],
        answer: 'D',
        explanation: '大数据的5V特征是：Volume（大量）、Velocity（高速）、Variety（多样）、Value（价值）、Veracity（真实）。Visible（可见）不是5V特征之一。',
        tags: ['大数据', '5V特征'],
        difficulty: 'low'
    },
    {
        id: 'q2022008',
        year: 2022,
        type: 'morning',
        chapter: 'blockchain',
        chapterName: '信息技术发展',
        title: '关于区块链的描述，不正确的是（）。',
        question: '关于区块链的描述，不正确的是（）。',
        options: [
            { label: 'A', text: '区块链具有去中心化特点' },
            { label: 'B', text: '区块链数据不可篡改' },
            { label: 'C', text: '区块链只能用于数字货币' },
            { label: 'D', text: '区块链采用共识机制' }
        ],
        answer: 'C',
        explanation: '区块链不仅可以用于数字货币，还可以用于供应链管理、数字身份认证、智能合约等多种应用场景。',
        tags: ['区块链', '新技术'],
        difficulty: 'low'
    },
    {
        id: 'q2022009',
        year: 2022,
        type: 'morning',
        chapter: 'project_integration',
        chapterName: '项目整合管理',
        title: '指导与管理项目工作过程的输出不包括（）。',
        question: '指导与管理项目工作过程的输出不包括（）。',
        options: [
            { label: 'A', text: '可交付成果' },
            { label: 'B', text: '工作绩效数据' },
            { label: 'C', text: '变更请求' },
            { label: 'D', text: '项目章程' }
        ],
        answer: 'D',
        explanation: '项目章程是制定项目章程过程的输出，不是指导与管理项目工作过程的输出。指导与管理项目工作的输出包括：可交付成果、工作绩效数据、变更请求等。',
        tags: ['整合管理', '过程输出'],
        difficulty: 'medium'
    },
    {
        id: 'q2022010',
        year: 2022,
        type: 'morning',
        chapter: 'project_schedule',
        chapterName: '项目进度管理',
        title: '关键路径法的核心思想是（）。',
        question: '关键路径法的核心思想是（）。',
        options: [
            { label: 'A', text: '找出项目中耗时最长的路径' },
            { label: 'B', text: '找出项目中耗时最短的路径' },
            { label: 'C', text: '找出项目中成本最高的路径' },
            { label: 'D', text: '找出项目中资源最多的路径' }
        ],
        answer: 'A',
        explanation: '关键路径法的核心思想是找出项目中耗时最长的路径（关键路径），这条路径决定了项目的最短工期。关键路径上的活动没有浮动时间。',
        tags: ['关键路径', '进度管理'],
        difficulty: 'low'
    },

    // ===== 补充更多2021年真题 =====
    {
        id: 'q2021007',
        year: 2021,
        type: 'morning',
        chapter: 'software_engineering',
        chapterName: '软件工程',
        title: '软件设计阶段的主要任务不包括（）。',
        question: '软件设计阶段的主要任务不包括（）。',
        options: [
            { label: 'A', text: '体系结构设计' },
            { label: 'B', text: '接口设计' },
            { label: 'C', text: '编写代码' },
            { label: 'D', text: '数据设计' }
        ],
        answer: 'C',
        explanation: '编写代码是编码阶段的任务，不是设计阶段的任务。软件设计阶段包括：体系结构设计、接口设计、数据设计、过程设计等。',
        tags: ['软件设计', '软件工程'],
        difficulty: 'low'
    },
    {
        id: 'q2021008',
        year: 2021,
        type: 'morning',
        chapter: 'network_security',
        chapterName: '信息安全工程',
        title: '防火墙的主要功能不包括（）。',
        question: '防火墙的主要功能不包括（）。',
        options: [
            { label: 'A', text: '访问控制' },
            { label: 'B', text: '包过滤' },
            { label: 'C', text: '病毒查杀' },
            { label: 'D', text: '地址转换' }
        ],
        answer: 'C',
        explanation: '病毒查杀是杀毒软件的功能，不是防火墙的主要功能。防火墙的主要功能包括：访问控制、包过滤、地址转换（NAT）、状态检测等。',
        tags: ['防火墙', '信息安全'],
        difficulty: 'low'
    },
    {
        id: 'q2021009',
        year: 2021,
        type: 'morning',
        chapter: 'project_hr',
        chapterName: '项目人力资源管理',
        title: 'RAM（责任分配矩阵）的作用是（）。',
        question: 'RAM（责任分配矩阵）的作用是（）。',
        options: [
            { label: 'A', text: '显示团队成员的技能水平' },
            { label: 'B', text: '显示工作包与团队成员之间的关系' },
            { label: 'C', text: '显示项目的进度安排' },
            { label: 'D', text: '显示项目的成本预算' }
        ],
        answer: 'B',
        explanation: 'RAM（责任分配矩阵）用于显示工作包或活动与团队成员之间的关系，明确每个人的职责。RACI矩阵是RAM的一种常见形式。',
        tags: ['RAM', '人力资源'],
        difficulty: 'medium'
    },
    {
        id: 'q2021010',
        year: 2021,
        type: 'morning',
        chapter: 'project_stakeholder',
        chapterName: '项目干系人管理',
        title: '管理干系人参与过程的目的是（）。',
        question: '管理干系人参与过程的目的是（）。',
        options: [
            { label: 'A', text: '识别干系人' },
            { label: 'B', text: '与干系人沟通和协作以满足其需求与期望' },
            { label: 'C', text: '制定干系人管理策略' },
            { label: 'D', text: '监控干系人参与' }
        ],
        answer: 'B',
        explanation: '管理干系人参与过程的目的是与干系人沟通和协作以满足其需求与期望，处理干系人的问题和关注点，促进干系人的积极参与。',
        tags: ['干系人管理', '干系人参与'],
        difficulty: 'low'
    },

    // ===== 补充更多2020年真题 =====
    {
        id: 'q2020007',
        year: 2020,
        type: 'morning',
        chapter: 'informatization',
        chapterName: '信息化发展',
        title: '关于"互联网+"的描述，正确的是（）。',
        question: '关于"互联网+"的描述，正确的是（）。',
        options: [
            { label: 'A', text: '"互联网+"就是简单的互联网与传统行业的相加' },
            { label: 'B', text: '"互联网+"是利用信息通信技术以及互联网平台，让互联网与传统行业进行深度融合' },
            { label: 'C', text: '"互联网+"只适用于互联网行业' },
            { label: 'D', text: '"互联网+"与实体经济没有关系' }
        ],
        answer: 'B',
        explanation: '"互联网+"是利用信息通信技术以及互联网平台，让互联网与传统行业进行深度融合，创造新的发展生态。它适用于各行各业，与实体经济深度融合。',
        tags: ['互联网+', '信息化'],
        difficulty: 'low'
    },
    {
        id: 'q2020008',
        year: 2020,
        type: 'morning',
        chapter: 'internet_of_things',
        chapterName: '信息技术发展',
        title: '物联网架构的三个层次不包括（）。',
        question: '物联网架构的三个层次不包括（）。',
        options: [
            { label: 'A', text: '感知层' },
            { label: 'B', text: '网络层' },
            { label: 'C', text: '应用层' },
            { label: 'D', text: '传输层' }
        ],
        answer: 'D',
        explanation: '物联网架构的三个层次是：感知层（传感器、RFID等）、网络层（通信网络）、应用层（应用服务）。传输层是TCP/IP协议栈的层次，不是物联网架构的层次。',
        tags: ['物联网', '架构'],
        difficulty: 'low'
    },
    {
        id: 'q2020009',
        year: 2020,
        type: 'morning',
        chapter: 'project_communication',
        chapterName: '项目沟通管理',
        title: '推式沟通的特点是（）。',
        question: '推式沟通的特点是（）。',
        options: [
            { label: 'A', text: '信息发送者将信息发送给需要接收信息的特定接收方' },
            { label: 'B', text: '接收方自主访问信息内容' },
            { label: 'C', text: '多方实时交换信息' },
            { label: 'D', text: '信息只能单向传递' }
        ],
        answer: 'A',
        explanation: '推式沟通的特点是信息发送者将信息发送给需要接收信息的特定接收方，如邮件、报告、备忘录等。拉式沟通是接收方自主访问信息，交互式沟通是多方实时交换信息。',
        tags: ['沟通方式', '推式沟通'],
        difficulty: 'medium'
    },
    {
        id: 'q2020010',
        year: 2020,
        type: 'morning',
        chapter: 'project_procurement',
        chapterName: '项目采购管理',
        title: '采购审计的目的是（）。',
        question: '采购审计的目的是（）。',
        options: [
            { label: 'A', text: '检查合同执行情况' },
            { label: 'B', text: '总结采购过程中的经验教训' },
            { label: 'C', text: '选择供应商' },
            { label: 'D', text: '确定采购需求' }
        ],
        answer: 'B',
        explanation: '采购审计的目的是总结采购过程中的经验教训，以便改进未来的采购过程。它审查从规划采购到控制采购的整个过程。',
        tags: ['采购审计', '采购管理'],
        difficulty: 'medium'
    },

    // ===== 2024年下半年案例分析真题 =====
    {
        id: 'q2024001a',
        year: 2024,
        type: 'afternoon',
        chapter: 'project_integration',
        chapterName: '项目整合管理',
        title: '2024年下半年案例分析 - 整合管理',
        question: `【说明】
某信息系统集成公司承接了一个大型政务云平台建设项目，项目周期为12个月，预算为800万元。公司任命小张为项目经理。

在项目实施过程中，出现了以下问题：

1. 项目进行了3个月后，客户提出需要增加新的功能模块，这将导致项目范围扩大、工期延长2个月、成本增加150万元。

2. 项目进行了6个月后，公司高层决定将项目团队中的2名核心开发人员调往其他紧急项目，新补充的人员需要1个月的熟悉期。

3. 项目进行了9个月后，客户对系统界面提出了重大修改意见，要求重新设计，这将导致返工和成本增加80万元。

4. 项目即将交付时，发现系统的性能无法满足客户要求，需要进行性能优化，预计需要增加1个月时间和50万元成本。

【问题1】（12分）
结合案例，请分析该项目在整合管理方面存在哪些问题？

【问题2】（8分）
请写出项目整合管理的七个过程，并说明每个过程所属的过程组。

【问题3】（5分）
针对项目当前状态，项目经理应该采取哪些措施来确保项目成功？`,
        answer: `【问题1】参考答案（每点3分，共12分）

1. 变更管理问题：
   - 没有建立有效的变更控制流程
   - 对客户提出的变更没有进行充分的影响评估
   - 变更没有得到CCB的正式审批就实施

2. 资源管理问题：
   - 公司高层擅自调动核心资源，没有考虑项目影响
   - 缺乏资源管理计划，没有资源备份机制
   - 新人员补充没有做好知识转移

3. 沟通管理问题：
   - 与客户沟通不充分，需求确认不到位
   - 没有及时向客户反馈项目状态和问题
   - 缺乏有效的需求管理

4. 风险管理问题：
   - 没有识别和评估技术风险（性能问题）
   - 缺乏风险应对措施
   - 没有建立风险监控机制

【问题2】参考答案（每点1分，共8分）

1. 制定项目章程 - 启动过程组
2. 制定项目管理计划 - 规划过程组
3. 指导与管理项目工作 - 执行过程组
4. 管理项目知识 - 执行过程组
5. 监控项目工作 - 监控过程组
6. 实施整体变更控制 - 监控过程组
7. 结束项目或阶段 - 收尾过程组

【问题3】参考答案（每点2分，共5分）

1. 立即建立变更控制委员会（CCB），规范变更流程
2. 与客户重新确认需求和范围，签订补充协议
3. 制定详细的性能优化计划，增加测试环节
4. 加强团队建设，提高新人技能水平
5. 建立定期沟通机制，及时向客户汇报进展`,
        tags: ['案例分析', '整合管理', '变更管理'],
        difficulty: 'high'
    },
    {
        id: 'q2024002a',
        year: 2024,
        type: 'afternoon',
        chapter: 'project_communication',
        chapterName: '项目沟通与干系人管理',
        title: '2024年下半年案例分析 - 沟通与干系人管理',
        question: `【说明】
某软件开发项目，项目团队有15人，项目周期为8个月。项目经理小李在项目启动时制定了沟通管理计划，但在项目实施过程中遇到了以下问题：

1. 项目团队成员经常抱怨不知道项目的整体进展，感觉自己只是被动接受任务。

2. 客户反馈说很少收到项目进展报告，对项目状态不了解。

3. 项目团队成员之间沟通不畅，经常出现重复工作或工作遗漏的情况。

4. 公司高层对项目状态不满意，认为项目经理没有及时汇报重大问题。

【问题1】（10分）
结合案例，请分析该项目在沟通与干系人管理方面存在哪些问题？

【问题2】（8分）
请说明规划沟通管理过程的两个主要作用。

【问题3】（7分）
针对项目当前状态，项目经理应该采取哪些措施来改善沟通与干系人管理？`,
        answer: `【问题1】参考答案（每点2.5分，共10分）

1. 内部沟通问题：
   - 团队成员不了解项目整体进展
   - 缺乏有效的团队沟通机制
   - 沟通方式单一，没有根据干系人需求定制

2. 外部沟通问题：
   - 客户没有收到定期的项目进展报告
   - 缺乏与客户的正式沟通渠道
   - 没有及时向客户反馈问题和风险

3. 干系人识别问题：
   - 没有充分识别所有干系人的沟通需求
   - 没有建立干系人参与策略
   - 对干系人的期望管理不到位

4. 沟通计划执行问题：
   - 沟通管理计划制定后没有严格执行
   - 没有根据项目进展调整沟通策略
   - 缺乏沟通效果评估

【问题2】参考答案（每点4分，共8分）

1. 识别干系人的信息需求：
   - 确定干系人需要什么样的信息
   - 确定信息传递的频率和方式
   - 确保信息满足干系人的决策需要

2. 制定沟通策略和方法：
   - 确定信息收集和分发的方法
   - 建立沟通渠道和反馈机制
   - 确保信息及时、准确地传递给干系人

【问题3】参考答案（每点2分，共7分）

1. 重新评估干系人需求，更新沟通管理计划
2. 建立定期项目例会制度，每周向团队通报进展
3. 建立客户周报制度，定期发送项目状态报告
4. 使用项目管理工具，提高信息透明度
5. 建立问题升级机制，重大问题及时向高层汇报
6. 定期收集干系人反馈，持续改进沟通效果`,
        tags: ['案例分析', '沟通管理', '干系人管理'],
        difficulty: 'high'
    },

    // ===== 补充更多2024年选择题 =====
    {
        id: 'q2024016',
        year: 2024,
        type: 'morning',
        chapter: 'project_stakeholder',
        chapterName: '项目干系人管理',
        title: '在识别干系人过程中，以下哪项不是干系人分析的内容？',
        question: '在识别干系人过程中，以下哪项不是干系人分析的内容？',
        options: [
            { label: 'A', text: '干系人的利益' },
            { label: 'B', text: '干系人的影响' },
            { label: 'C', text: '干系人的薪资水平' },
            { label: 'D', text: '干系人的期望' }
        ],
        answer: 'C',
        explanation: '干系人分析的内容包括：干系人的利益、影响、期望、态度等。薪资水平不属于干系人分析的内容。',
        tags: ['干系人分析', '干系人管理'],
        difficulty: 'low'
    },
    {
        id: 'q2024017',
        year: 2024,
        type: 'morning',
        chapter: 'project_change',
        chapterName: '项目整合管理',
        title: '变更控制委员会（CCB）的主要职责不包括（）。',
        question: '变更控制委员会（CCB）的主要职责不包括（）。',
        options: [
            { label: 'A', text: '审查变更请求' },
            { label: 'B', text: '批准或否决变更' },
            { label: 'C', text: '实施变更' },
            { label: 'D', text: '评估变更影响' }
        ],
        answer: 'C',
        explanation: 'CCB的职责是审查、批准或否决变更请求，评估变更影响。实施变更是项目团队的工作，不是CCB的职责。',
        tags: ['CCB', '变更控制'],
        difficulty: 'medium'
    },
    {
        id: 'q2024018',
        year: 2024,
        type: 'morning',
        chapter: 'project_quality',
        chapterName: '项目质量管理',
        title: '以下哪项不是质量控制的输出？',
        question: '以下哪项不是质量控制的输出？',
        options: [
            { label: 'A', text: '质量控制测量结果' },
            { label: 'B', text: '核实的可交付成果' },
            { label: 'C', text: '质量管理计划' },
            { label: 'D', text: '变更请求' }
        ],
        answer: 'C',
        explanation: '质量管理计划是规划质量管理的输出，不是质量控制的输出。质量控制的输出包括：质量控制测量结果、核实的可交付成果、变更请求等。',
        tags: ['质量控制', '质量管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2024019',
        year: 2024,
        type: 'morning',
        chapter: 'project_resource',
        chapterName: '项目资源管理',
        title: '资源平衡的主要目的是（）。',
        question: '资源平衡的主要目的是（）。',
        options: [
            { label: 'A', text: '缩短项目工期' },
            { label: 'B', text: '优化资源使用，避免资源过度分配' },
            { label: 'C', text: '降低项目成本' },
            { label: 'D', text: '提高资源利用率' }
        ],
        answer: 'B',
        explanation: '资源平衡的主要目的是优化资源使用，避免资源过度分配或资源闲置，使资源需求与资源供给相匹配。',
        tags: ['资源平衡', '资源管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2024020',
        year: 2024,
        type: 'morning',
        chapter: 'project_risk',
        chapterName: '项目风险管理',
        title: '以下哪项是定性风险分析的工具与技术？',
        question: '以下哪项是定性风险分析的工具与技术？',
        options: [
            { label: 'A', text: '蒙特卡洛模拟' },
            { label: 'B', text: '概率和影响矩阵' },
            { label: 'C', text: '敏感性分析' },
            { label: 'D', text: '决策树分析' }
        ],
        answer: 'B',
        explanation: '概率和影响矩阵是定性风险分析的工具。蒙特卡洛模拟、敏感性分析、决策树分析是定量风险分析的工具。',
        tags: ['定性风险分析', '风险管理'],
        difficulty: 'medium'
    },

    // ===== 补充更多2023年选择题 =====
    {
        id: 'q2023016',
        year: 2023,
        type: 'morning',
        chapter: 'informatization',
        chapterName: '信息化发展',
        title: '以下哪项不属于"新基建"的范畴？',
        question: '以下哪项不属于"新基建"的范畴？',
        options: [
            { label: 'A', text: '5G基站建设' },
            { label: 'B', text: '特高压' },
            { label: 'C', text: '传统铁路建设' },
            { label: 'D', text: '人工智能' }
        ],
        answer: 'C',
        explanation: '新基建包括：5G基站、特高压、城际高速铁路和城市轨道交通、新能源汽车充电桩、大数据中心、人工智能、工业互联网。传统铁路建设属于传统基建。',
        tags: ['新基建', '信息化'],
        difficulty: 'low'
    },
    {
        id: 'q2023017',
        year: 2023,
        type: 'morning',
        chapter: 'project_scope',
        chapterName: '项目范围管理',
        title: '以下哪项是创建工作分解结构（WBS）的原则？',
        question: '以下哪项是创建工作分解结构（WBS）的原则？',
        options: [
            { label: 'A', text: 'WBS元素可以由多人负责' },
            { label: 'B', text: 'WBS的工作包必须是可交付成果' },
            { label: 'C', text: 'WBS不需要包含项目管理活动' },
            { label: 'D', text: 'WBS的分解层次越多越好' }
        ],
        answer: 'B',
        explanation: 'WBS的原则包括：工作包必须是可交付成果、每个元素只由一人负责、需要包含项目管理活动、分解层次适当即可。',
        tags: ['WBS', '范围管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2023018',
        year: 2023,
        type: 'morning',
        chapter: 'project_cost',
        chapterName: '项目成本管理',
        title: '以下哪项不是成本估算的工具与技术？',
        question: '以下哪项不是成本估算的工具与技术？',
        options: [
            { label: 'A', text: '类比估算' },
            { label: 'B', text: '参数估算' },
            { label: 'C', text: '挣值分析' },
            { label: 'D', text: '三点估算' }
        ],
        answer: 'C',
        explanation: '挣值分析是成本控制的技术，不是成本估算的技术。成本估算的技术包括：类比估算、参数估算、三点估算、自下而上估算等。',
        tags: ['成本估算', '成本管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2023019',
        year: 2023,
        type: 'morning',
        chapter: 'project_procurement',
        chapterName: '项目采购管理',
        title: '以下哪种合同类型对买方风险最小？',
        question: '以下哪种合同类型对买方风险最小？',
        options: [
            { label: 'A', text: '成本加固定费用合同' },
            { label: 'B', text: '成本加激励费用合同' },
            { label: 'C', text: '固定总价合同' },
            { label: 'D', text: '工料合同' }
        ],
        answer: 'C',
        explanation: '固定总价合同对买方风险最小，因为价格是固定的，成本超支的风险由卖方承担。其他合同类型都有不同程度的成本风险。',
        tags: ['合同类型', '采购管理'],
        difficulty: 'low'
    },
    {
        id: 'q2023020',
        year: 2023,
        type: 'morning',
        chapter: 'project_hr',
        chapterName: '项目人力资源管理',
        title: '以下哪项不是团队建设活动的目的？',
        question: '以下哪项不是团队建设活动的目的？',
        options: [
            { label: 'A', text: '提高团队成员之间的信任' },
            { label: 'B', text: '改善团队协作' },
            { label: 'C', text: '降低项目成本' },
            { label: 'D', text: '提高团队凝聚力' }
        ],
        answer: 'C',
        explanation: '团队建设活动的目的是提高信任、改善协作、提高凝聚力等。降低项目成本不是团队建设活动的直接目的。',
        tags: ['团队建设', '人力资源'],
        difficulty: 'low'
    },

    // ===== 补充更多2022年选择题 =====
    {
        id: 'q2022011',
        year: 2022,
        type: 'morning',
        chapter: 'project_integration',
        chapterName: '项目整合管理',
        title: '项目章程中通常不包括以下哪项内容？',
        question: '项目章程中通常不包括以下哪项内容？',
        options: [
            { label: 'A', text: '项目目的和批准原因' },
            { label: 'B', text: '可测量的项目目标' },
            { label: 'C', text: '详细的项目预算' },
            { label: 'D', text: '委派的项目经理' }
        ],
        answer: 'C',
        explanation: '项目章程包括高层级信息，如项目目的、目标、项目经理委派等。详细的项目预算在项目管理计划中制定。',
        tags: ['项目章程', '整合管理'],
        difficulty: 'low'
    },
    {
        id: 'q2022012',
        year: 2022,
        type: 'morning',
        chapter: 'project_schedule',
        chapterName: '项目进度管理',
        title: '以下哪项不是进度压缩的技术？',
        question: '以下哪项不是进度压缩的技术？',
        options: [
            { label: 'A', text: '赶工' },
            { label: 'B', text: '快速跟进' },
            { label: 'C', text: '资源平衡' },
            { label: 'D', text: '使用更有经验的资源' }
        ],
        answer: 'C',
        explanation: '资源平衡是资源优化的技术，不是进度压缩技术。进度压缩技术包括：赶工、快速跟进。',
        tags: ['进度压缩', '进度管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2022013',
        year: 2022,
        type: 'morning',
        chapter: 'project_quality',
        chapterName: '项目质量管理',
        title: '以下哪项是质量保证的工具与技术？',
        question: '以下哪项是质量保证的工具与技术？',
        options: [
            { label: 'A', text: '检查' },
            { label: 'B', text: '质量审计' },
            { label: 'C', text: '测试' },
            { label: 'D', text: '统计抽样' }
        ],
        answer: 'B',
        explanation: '质量审计是质量保证的工具。检查、测试、统计抽样是质量控制的工具。',
        tags: ['质量保证', '质量管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2022014',
        year: 2022,
        type: 'morning',
        chapter: 'project_communication',
        chapterName: '项目沟通管理',
        title: '有5个干系人的项目，沟通渠道的数量是（）。',
        question: '有5个干系人的项目，沟通渠道的数量是（）。',
        options: [
            { label: 'A', text: '5' },
            { label: 'B', text: '10' },
            { label: 'C', text: '15' },
            { label: 'D', text: '20' }
        ],
        answer: 'B',
        explanation: '沟通渠道数 = n(n-1)/2 = 5×4/2 = 10。其中n是干系人数量。',
        tags: ['沟通渠道', '沟通管理'],
        difficulty: 'low'
    },
    {
        id: 'q2022015',
        year: 2022,
        type: 'morning',
        chapter: 'project_risk',
        chapterName: '项目风险管理',
        title: '以下哪项是消极风险的应对策略？',
        question: '以下哪项是消极风险的应对策略？',
        options: [
            { label: 'A', text: '开拓' },
            { label: 'B', text: '分享' },
            { label: 'C', text: '减轻' },
            { label: 'D', text: '提高' }
        ],
        answer: 'C',
        explanation: '消极风险（威胁）的应对策略包括：规避、转移、减轻、接受。开拓、分享、提高是积极风险（机会）的应对策略。',
        tags: ['风险应对', '风险管理'],
        difficulty: 'low'
    },

    // ===== 补充更多2021年选择题 =====
    {
        id: 'q2021011',
        year: 2021,
        type: 'morning',
        chapter: 'software_engineering',
        chapterName: '软件工程',
        title: '以下哪项不是软件测试的类型？',
        question: '以下哪项不是软件测试的类型？',
        options: [
            { label: 'A', text: '单元测试' },
            { label: 'B', text: '集成测试' },
            { label: 'C', text: '需求测试' },
            { label: 'D', text: '系统测试' }
        ],
        answer: 'C',
        explanation: '软件测试的类型包括：单元测试、集成测试、系统测试、验收测试等。需求测试不是标准的软件测试类型。',
        tags: ['软件测试', '软件工程'],
        difficulty: 'low'
    },
    {
        id: 'q2021012',
        year: 2021,
        type: 'morning',
        chapter: 'network_security',
        chapterName: '信息安全工程',
        title: '以下哪项不是信息安全的CIA三要素？',
        question: '以下哪项不是信息安全的CIA三要素？',
        options: [
            { label: 'A', text: '机密性' },
            { label: 'B', text: '完整性' },
            { label: 'C', text: '可用性' },
            { label: 'D', text: '可追溯性' }
        ],
        answer: 'D',
        explanation: '信息安全的CIA三要素是：机密性（Confidentiality）、完整性（Integrity）、可用性（Availability）。可追溯性不是CIA三要素之一。',
        tags: ['CIA', '信息安全'],
        difficulty: 'low'
    },
    {
        id: 'q2021013',
        year: 2021,
        type: 'morning',
        chapter: 'project_scope',
        chapterName: '项目范围管理',
        title: '以下哪项是范围确认的工具与技术？',
        question: '以下哪项是范围确认的工具与技术？',
        options: [
            { label: 'A', text: '检查' },
            { label: 'B', text: '偏差分析' },
            { label: 'C', text: '趋势分析' },
            { label: 'D', text: '挣值分析' }
        ],
        answer: 'A',
        explanation: '检查是范围确认的主要工具，通过检查可交付成果来确定是否符合验收标准。其他选项是监控过程的工具。',
        tags: ['范围确认', '范围管理'],
        difficulty: 'low'
    },
    {
        id: 'q2021014',
        year: 2021,
        type: 'morning',
        chapter: 'project_cost',
        chapterName: '项目成本管理',
        title: '以下哪项不是成本基准的组成部分？',
        question: '以下哪项不是成本基准的组成部分？',
        options: [
            { label: 'A', text: '应急储备' },
            { label: 'B', text: '管理储备' },
            { label: 'C', text: '项目利润' },
            { label: 'D', text: '工作包成本估算' }
        ],
        answer: 'C',
        explanation: '成本基准包括：工作包成本估算、应急储备。管理储备在成本基准之外，项目利润不属于成本基准的组成部分。',
        tags: ['成本基准', '成本管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2021015',
        year: 2021,
        type: 'morning',
        chapter: 'project_stakeholder',
        chapterName: '项目干系人管理',
        title: '以下哪项不是识别干系人的输入？',
        question: '以下哪项不是识别干系人的输入？',
        options: [
            { label: 'A', text: '项目章程' },
            { label: 'B', text: '采购文件' },
            { label: 'C', text: '干系人登记册' },
            { label: 'D', text: '事业环境因素' }
        ],
        answer: 'C',
        explanation: '干系人登记册是识别干系人过程的输出，不是输入。输入包括：项目章程、采购文件、事业环境因素、组织过程资产等。',
        tags: ['识别干系人', '干系人管理'],
        difficulty: 'medium'
    },

    // ===== 2025年真题 =====
    {
        id: 'q2025001',
        year: 2025,
        type: 'morning',
        chapter: 'project_integration',
        chapterName: '项目整体管理',
        title: '在系统集成项目启动阶段，项目经理首先应完成的工作是',
        question: '在系统集成项目启动阶段，项目经理首先应完成的工作是\nA. 编制项目章程\nB. 识别干系人\nC. 制定范围管理计划\nD. 召开开工会议',
        options: [
            { label: 'A', text: '编制项目章程' },
            { label: 'B', text: '识别干系人' },
            { label: 'C', text: '制定范围管理计划' },
            { label: 'D', text: '召开开工会议' }
        ],
        answer: 'A',
        explanation: '项目章程是启动过程组的标志性输出，它授权项目经理使用组织资源开展后续工作。识别干系人虽在启动阶段完成，但项目章程的批准是前提。',
        tags: ['项目章程', '启动过程'],
        difficulty: 'medium'
    },
    {
        id: 'q2025002',
        year: 2025,
        type: 'morning',
        chapter: 'project_integration',
        chapterName: '项目整体管理',
        title: '某智慧城市项目采用"1+N"总包模式，总集成商的首要工作是',
        question: '某智慧城市项目采用"1+N"总包模式，即1家总集成商加N家专业分包商。项目启动阶段，总集成商的首要工作是\nA. 与每家分包商签订独立合同\nB. 建立统一的项目治理架构\nC. 完成整体技术方案详细设计\nD. 向甲方提交项目章程',
        options: [
            { label: 'A', text: '与每家分包商签订独立合同' },
            { label: 'B', text: '建立统一的项目治理架构' },
            { label: 'C', text: '完成整体技术方案详细设计' },
            { label: 'D', text: '向甲方提交项目章程' }
        ],
        answer: 'B',
        explanation: '在多方参与的总包模式中，治理架构是后续一切工作的前提，它决定了决策机制、沟通渠道与风险责任边界。项目章程由甲方与总集成商共同发布，但章程本身不能替代治理设计。',
        tags: ['项目治理', '总包模式'],
        difficulty: 'medium'
    },
    {
        id: 'q2025003',
        year: 2025,
        type: 'morning',
        chapter: 'project_schedule',
        chapterName: '项目进度管理',
        title: '某项目在实施过程中，因需求变更导致关键路径延长2周，最适宜的进度压缩方法是',
        question: '某项目在实施过程中，因需求变更导致关键路径延长2周，此时最适宜的进度压缩方法是？\nA. 快速跟进法\nB. 关键链法\nC. 压缩非关键路径\nD. 增加资源投入',
        options: [
            { label: 'A', text: '快速跟进法' },
            { label: 'B', text: '关键链法' },
            { label: 'C', text: '压缩非关键路径' },
            { label: 'D', text: '增加资源投入' }
        ],
        answer: 'D',
        explanation: '增加资源投入（赶工）是最直接有效的进度压缩方法，适用于关键路径延长的情况。快速跟进可能增加风险，压缩非关键路径对关键路径没有影响，关键链法是缓冲管理技术。',
        tags: ['进度压缩', '赶工'],
        difficulty: 'medium'
    },
    {
        id: 'q2025004',
        year: 2025,
        type: 'morning',
        chapter: 'project_integration',
        chapterName: '项目整体管理',
        title: '系统集成项目管理的核心目标是实现项目的',
        question: '系统集成项目管理的核心目标是实现项目的（ ）。\nA. 技术创新\nB. 经济效益最大化\nC. 项目干系人满意\nD. 项目进度提前',
        options: [
            { label: 'A', text: '技术创新' },
            { label: 'B', text: '经济效益最大化' },
            { label: 'C', text: '项目干系人满意' },
            { label: 'D', text: '项目进度提前' }
        ],
        answer: 'C',
        explanation: '项目管理的核心目标是满足项目干系人的需求和期望，实现项目干系人满意。技术创新、经济效益、进度提前都是具体目标，最终要服务于干系人满意。',
        tags: ['项目目标', '干系人满意'],
        difficulty: 'low'
    },
    {
        id: 'q2025005',
        year: 2025,
        type: 'morning',
        chapter: 'informatization',
        chapterName: '信息化发展',
        title: '信息化是人类社会发展的一种高级进程，它的目的是',
        question: '信息化是人类社会发展的一种高级进程，它的目的是（）。\nA. 建设基于现代信息技术的先进社会生产工具\nB. 创立信息时代的社会生产力\nC. 推动社会生产关系及社会上层建筑的改革\nD. 以上都是',
        options: [
            { label: 'A', text: '建设基于现代信息技术的先进社会生产工具' },
            { label: 'B', text: '创立信息时代的社会生产力' },
            { label: 'C', text: '推动社会生产关系及社会上层建筑的改革' },
            { label: 'D', text: '以上都是' }
        ],
        answer: 'D',
        explanation: '信息化的目的包括：建设先进的社会生产工具、创立信息时代的社会生产力、推动社会生产关系和上层建筑的改革。以上选项都是正确的。',
        tags: ['信息化', '社会发展'],
        difficulty: 'low'
    },
    {
        id: 'q2025006',
        year: 2025,
        type: 'morning',
        chapter: 'project_agile',
        chapterName: '项目进度管理',
        title: '某信息系统集成项目采用敏捷开发模式，产品负责人在迭代评审会上发现当前增量与原始愿景偏差较大，首要的改进措施是',
        question: '某信息系统集成项目采用敏捷开发模式，产品负责人（PO）在迭代评审会上发现当前增量与原始愿景偏差较大，首要的改进措施是\nA. 立即调整迭代计划，追加开发资源\nB. 召开产品愿景会议，重新确认产品方向\nC. 延长当前迭代周期，确保功能完整性\nD. 直接修改产品待办列表，删除不符合愿景的功能',
        options: [
            { label: 'A', text: '立即调整迭代计划，追加开发资源' },
            { label: 'B', text: '召开产品愿景会议，重新确认产品方向' },
            { label: 'C', text: '延长当前迭代周期，确保功能完整性' },
            { label: 'D', text: '直接修改产品待办列表，删除不符合愿景的功能' }
        ],
        answer: 'B',
        explanation: '当发现增量与愿景偏差较大时，首先应该召开产品愿景会议，重新确认产品方向，确保团队对产品愿景有一致的理解。其他措施都是在重新确认方向后的具体行动。',
        tags: ['敏捷开发', '产品愿景'],
        difficulty: 'medium'
    },
    
    // ===== 2026年模拟题（重点知识点） =====
    {
        id: 'q2026001',
        year: 2026,
        type: 'morning',
        chapter: 'project_integration',
        chapterName: '项目整体管理',
        title: '项目管理计划的主要作用是（）。',
        question: '项目管理计划的主要作用是（）。',
        options: [
            { label: 'A', text: '记录项目的高层级需求' },
            { label: 'B', text: '授权项目经理使用组织资源' },
            { label: 'C', text: '指导项目执行、监控和收尾' },
            { label: 'D', text: '识别项目的干系人' }
        ],
        answer: 'C',
        explanation: '项目管理计划的主要作用是指导项目执行、监控和收尾。记录高层级需求和授权项目经理是项目章程的作用，识别干系人是干系人管理的工作。',
        tags: ['项目管理计划', '整体管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2026002',
        year: 2026,
        type: 'morning',
        chapter: 'project_scope',
        chapterName: '项目范围管理',
        title: '关于范围蔓延的说法，正确的是（）。',
        question: '关于范围蔓延的说法，正确的是（）。',
        options: [
            { label: 'A', text: '范围蔓延是指项目范围的合理变更' },
            { label: 'B', text: '范围蔓延是指项目范围的意外扩大' },
            { label: 'C', text: '范围蔓延对项目没有影响' },
            { label: 'D', text: '范围蔓延是项目管理的正常现象' }
        ],
        answer: 'B',
        explanation: '范围蔓延是指项目范围的意外扩大，通常是由于缺乏变更控制或范围定义不清晰导致的。范围蔓延会导致项目延期、成本超支等问题，不是项目管理的正常现象。',
        tags: ['范围蔓延', '范围管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2026003',
        year: 2026,
        type: 'morning',
        chapter: 'project_schedule',
        chapterName: '项目进度管理',
        title: '某项目有A、B、C三个活动，A的历时为3天，B的历时为4天，C的历时为5天。A完成后B和C才能开始，B和C完成后项目结束。该项目的关键路径长度为（）天。',
        question: '某项目有A、B、C三个活动，A的历时为3天，B的历时为4天，C的历时为5天。A完成后B和C才能开始，B和C完成后项目结束。该项目的关键路径长度为（）天。',
        options: [
            { label: 'A', text: '7' },
            { label: 'B', text: '8' },
            { label: 'C', text: '9' },
            { label: 'D', text: '12' }
        ],
        answer: 'B',
        explanation: '关键路径是A→C，长度为3+5=8天。A→B的路径长度为3+4=7天，不是关键路径。',
        tags: ['关键路径', '进度管理'],
        difficulty: 'high'
    },
    {
        id: 'q2026004',
        year: 2026,
        type: 'morning',
        chapter: 'project_cost',
        chapterName: '项目成本管理',
        title: '某项目BAC=150万元，PV=100万元，EV=80万元，AC=90万元，则进度偏差SV为（）万元。',
        question: '某项目BAC=150万元，PV=100万元，EV=80万元，AC=90万元，则进度偏差SV为（）万元。',
        options: [
            { label: 'A', text: '-20' },
            { label: 'B', text: '20' },
            { label: 'C', text: '-10' },
            { label: 'D', text: '10' }
        ],
        answer: 'A',
        explanation: 'SV = EV - PV = 80 - 100 = -20万元。进度偏差为负值，说明进度落后。',
        tags: ['挣值分析', '进度偏差', 'SV'],
        difficulty: 'high'
    },
    {
        id: 'q2026005',
        year: 2026,
        type: 'morning',
        chapter: 'project_quality',
        chapterName: '项目质量管理',
        title: '质量管理的PDCA循环中，"C"代表（）。',
        question: '质量管理的PDCA循环中，"C"代表（）。',
        options: [
            { label: 'A', text: '计划' },
            { label: 'B', text: '执行' },
            { label: 'C', text: '检查' },
            { label: 'D', text: '处理' }
        ],
        answer: 'C',
        explanation: 'PDCA循环是质量管理的基本方法，其中P代表计划（Plan），D代表执行（Do），C代表检查（Check），A代表处理（Act）。',
        tags: ['PDCA', '质量管理'],
        difficulty: 'low'
    },
    {
        id: 'q2026006',
        year: 2026,
        type: 'morning',
        chapter: 'project_hr',
        chapterName: '项目人力资源管理',
        title: '项目经理在团队建设过程中，应该注重（）。',
        question: '项目经理在团队建设过程中，应该注重（）。',
        options: [
            { label: 'A', text: '个人英雄主义' },
            { label: 'B', text: '团队协作' },
            { label: 'C', text: '严格控制' },
            { label: 'D', text: '个人绩效' }
        ],
        answer: 'B',
        explanation: '团队建设的核心是促进团队成员之间的协作和信任，提高团队整体绩效。个人英雄主义、严格控制和个人绩效都不是团队建设的重点。',
        tags: ['团队建设', '人力资源管理'],
        difficulty: 'low'
    },
    {
        id: 'q2026007',
        year: 2026,
        type: 'morning',
        chapter: 'project_communication',
        chapterName: '项目沟通管理',
        title: '有效的沟通管理可以（）。',
        question: '有效的沟通管理可以（）。',
        options: [
            { label: 'A', text: '减少项目风险' },
            { label: 'B', text: '增加项目成本' },
            { label: 'C', text: '延长项目工期' },
            { label: 'D', text: '降低项目质量' }
        ],
        answer: 'A',
        explanation: '有效的沟通管理可以减少项目风险，提高项目成功率。它不会增加项目成本、延长项目工期或降低项目质量。',
        tags: ['沟通管理', '项目风险'],
        difficulty: 'medium'
    },
    {
        id: 'q2026008',
        year: 2026,
        type: 'morning',
        chapter: 'project_risk',
        chapterName: '项目风险管理',
        title: '风险应对策略中，属于机会应对策略的是（）。',
        question: '风险应对策略中，属于机会应对策略的是（）。',
        options: [
            { label: 'A', text: '规避' },
            { label: 'B', text: '转移' },
            { label: 'C', text: '开拓' },
            { label: 'D', text: '减轻' }
        ],
        answer: 'C',
        explanation: '机会应对策略包括：开拓、分享、增强、接受。威胁应对策略包括：规避、转移、减轻、接受。',
        tags: ['风险应对', '机会策略'],
        difficulty: 'medium'
    },
    {
        id: 'q2026009',
        year: 2026,
        type: 'morning',
        chapter: 'project_procurement',
        chapterName: '项目采购管理',
        title: '在采购过程中，卖方选择的主要依据是（）。',
        question: '在采购过程中，卖方选择的主要依据是（）。',
        options: [
            { label: 'A', text: '价格最低' },
            { label: 'B', text: '技术能力最强' },
            { label: 'C', text: '响应招标文件的程度' },
            { label: 'D', text: '关系最好' }
        ],
        answer: 'C',
        explanation: '卖方选择的主要依据是响应招标文件的程度，包括技术能力、价格、交付能力、质量保证等多个因素的综合评估。',
        tags: ['采购管理', '卖方选择'],
        difficulty: 'medium'
    },
    {
        id: 'q2026010',
        year: 2026,
        type: 'morning',
        chapter: 'project_stakeholder',
        chapterName: '项目干系人管理',
        title: '干系人管理的核心是（）。',
        question: '干系人管理的核心是（）。',
        options: [
            { label: 'A', text: '识别所有干系人' },
            { label: 'B', text: '满足所有干系人的需求' },
            { label: 'C', text: '管理干系人的期望' },
            { label: 'D', text: '忽视负面干系人' }
        ],
        answer: 'C',
        explanation: '干系人管理的核心是管理干系人的期望，确保项目成功。识别干系人是第一步，不可能满足所有干系人的需求，也不应该忽视负面干系人。',
        tags: ['干系人管理', '期望管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2026011',
        year: 2026,
        type: 'morning',
        chapter: 'project_agile',
        chapterName: '项目管理概论',
        title: '关于敏捷项目管理的描述，正确的是（）。',
        question: '关于敏捷项目管理的描述，正确的是（）。',
        options: [
            { label: 'A', text: '敏捷项目管理只适用于小型项目' },
            { label: 'B', text: '敏捷项目管理强调计划的详细性' },
            { label: 'C', text: '敏捷项目管理采用迭代和增量的方法' },
            { label: 'D', text: '敏捷项目管理不需要项目计划' }
        ],
        answer: 'C',
        explanation: '敏捷项目管理采用迭代和增量的方法，适用于需求不确定的项目。它不仅适用于小型项目，也适用于大型项目；它强调适应性而非详细计划；它仍然需要项目计划，只是计划更加灵活。',
        tags: ['敏捷项目管理', '项目管理概论'],
        difficulty: 'medium'
    },
    {
        id: 'q2026012',
        year: 2026,
        type: 'morning',
        chapter: 'data_governance',
        chapterName: '数据工程',
        title: '数据治理的核心目标是（）。',
        question: '数据治理的核心目标是（）。',
        options: [
            { label: 'A', text: '提高数据质量' },
            { label: 'B', text: '降低数据成本' },
            { label: 'C', text: '增加数据存储' },
            { label: 'D', text: '减少数据使用' }
        ],
        answer: 'A',
        explanation: '数据治理的核心目标是提高数据质量，确保数据的准确性、完整性、一致性和可靠性。它不是为了降低数据成本、增加数据存储或减少数据使用。',
        tags: ['数据治理', '数据工程'],
        difficulty: 'medium'
    },
    {
        id: 'q2026013',
        year: 2026,
        type: 'morning',
        chapter: 'cloud_computing',
        chapterName: '信息技术发展',
        title: '云计算的特点不包括（）。',
        question: '云计算的特点不包括（）。',
        options: [
            { label: 'A', text: '按需自助服务' },
            { label: 'B', text: '广泛的网络访问' },
            { label: 'C', text: '资源池化' },
            { label: 'D', text: '高成本' }
        ],
        answer: 'D',
        explanation: '云计算的特点包括：按需自助服务、广泛的网络访问、资源池化、快速弹性、可测量的服务等。高成本不是云计算的特点，相反，云计算通常可以降低IT成本。',
        tags: ['云计算特点', '信息技术发展'],
        difficulty: 'medium'
    },
    {
        id: 'q2026014',
        year: 2026,
        type: 'morning',
        chapter: 'artificial_intelligence',
        chapterName: '信息技术发展',
        title: '人工智能的应用领域不包括（）。',
        question: '人工智能的应用领域不包括（）。',
        options: [
            { label: 'A', text: '自然语言处理' },
            { label: 'B', text: '计算机视觉' },
            { label: 'C', text: '数据分析' },
            { label: 'D', text: '传统编程' }
        ],
        answer: 'D',
        explanation: '人工智能的应用领域包括：自然语言处理、计算机视觉、数据分析、机器学习等。传统编程是传统软件开发的方法，不是人工智能的应用领域。',
        tags: ['人工智能应用', '信息技术发展'],
        difficulty: 'medium'
    },
    {
        id: 'q2026015',
        year: 2026,
        type: 'morning',
        chapter: 'blockchain',
        chapterName: '信息技术发展',
        title: '区块链的核心特点不包括（）。',
        question: '区块链的核心特点不包括（）。',
        options: [
            { label: 'A', text: '去中心化' },
            { label: 'B', text: '不可篡改' },
            { label: 'C', text: '透明性' },
            { label: 'D', text: '中心化' }
        ],
        answer: 'D',
        explanation: '区块链的核心特点包括：去中心化、不可篡改、透明性、安全性等。中心化不是区块链的特点，相反，去中心化是区块链的核心特性之一。',
        tags: ['区块链特点', '信息技术发展'],
        difficulty: 'medium'
    },
    
    // ===== 2026年案例分析题（重点知识点） =====
    {
        id: 'q2026001a',
        year: 2026,
        type: 'afternoon',
        chapter: 'project_integration',
        chapterName: '项目整体管理',
        title: '2026年案例分析 - 项目整体管理',
        question: `【说明】
某软件公司承接了一个政府部门的信息系统升级项目，项目周期为6个月，预算为300万元。项目经理小王具有丰富的项目管理经验，项目启动后，小王制定了详细的项目管理计划，并按照计划执行。

项目进行到第3个月时，客户提出了一项重要的功能变更，小王立即组织团队进行评估，并通过变更控制流程获得了批准。项目进行到第4个月时，团队成员小李提出了辞职，小王及时安排了人员交接，并调整了项目计划。

项目最终按时完成，成本控制在预算范围内，客户对项目成果非常满意。

【问题1】（10分）
请分析案例中项目经理小王的项目管理行为有哪些值得肯定的地方。

【问题2】（8分）
请分析项目中可能存在的风险，并说明如何应对。

【问题3】（7分）
请说明项目整体管理的主要过程。`,
        answer: `【问题1】参考答案（每点2分，答出5点得满分）

1. 整体管理方面：
   - 制定了详细的项目管理计划
   - 按照计划执行项目
   - 及时应对变更和风险

2. 变更管理方面：
   - 建立了变更控制流程
   - 对变更进行了评估
   - 通过正规流程获得了变更批准

3. 人力资源管理方面：
   - 及时处理团队成员离职问题
   - 安排了人员交接
   - 调整了项目计划

4. 时间管理方面：
   - 项目按时完成
   - 合理安排项目进度

5. 成本管理方面：
   - 成本控制在预算范围内
   - 有效管理项目资源

【问题2】参考答案（每点2分，共8分）

1. 可能存在的风险：
   - 需求变更风险：客户可能提出更多变更
   - 人员风险：其他团队成员可能离职
   - 技术风险：可能遇到技术难题
   - 进度风险：可能出现进度延误

2. 应对措施：
   - 需求变更风险：建立严格的变更控制流程，评估变更影响
   - 人员风险：建立知识管理体系，培养备份人员
   - 技术风险：进行技术评审，提前识别技术难题
   - 进度风险：加强进度监控，及时调整计划

【问题3】参考答案（每点1分，共7分）

项目整体管理的主要过程包括：
1. 制定项目章程
2. 制定项目管理计划
3. 指导与管理项目工作
4. 监控项目工作
5. 实施整体变更控制
6. 结束项目或阶段
7. 管理项目知识`,
        tags: ['案例分析', '整体管理'],
        difficulty: 'high'
    },
    {
        id: 'q2026002a',
        year: 2026,
        type: 'afternoon',
        chapter: 'project_quality',
        chapterName: '项目质量管理',
        title: '2026年案例分析 - 质量管理',
        question: `【说明】
某公司开发一个电商平台系统，项目团队在开发过程中注重质量管理，采用了多种质量工具和方法。

项目启动阶段，团队制定了详细的质量计划，包括质量标准、质量目标和质量保证措施。开发过程中，团队使用了因果图、帕累托图等质量工具进行质量分析和改进。测试阶段，团队进行了全面的测试，包括单元测试、集成测试和系统测试。

最终，项目交付的系统质量良好，客户满意度高。

【问题1】（10分）
请分析案例中项目团队在质量管理方面的做法有哪些值得肯定的地方。

【问题2】（8分）
请说明质量管理七工具的名称和用途。

【问题3】（7分）
请说明质量保证和质量控制的区别。`,
        answer: `【问题1】参考答案（每点2分，答出5点得满分）

1. 质量规划方面：
   - 制定了详细的质量计划
   - 明确了质量标准和质量目标
   - 制定了质量保证措施

2. 质量工具使用方面：
   - 使用了因果图进行原因分析
   - 使用了帕累托图识别关键问题
   - 采用了多种质量工具

3. 质量控制方面：
   - 进行了全面的测试
   - 包括单元测试、集成测试和系统测试
   - 确保了系统质量

4. 质量保证方面：
   - 贯穿项目全过程的质量管理
   - 注重预防而非检查
   - 持续改进质量

【问题2】参考答案（每点1分，共8分）

质量管理七工具：
1. 因果图（鱼骨图）：用于分析质量问题的根本原因
2. 流程图：用于展示过程步骤和可能的质量问题
3. 核查表：用于收集质量数据
4. 帕累托图：用于识别造成大多数问题的少数关键原因
5. 直方图：用于展示质量数据的分布
6. 控制图：用于监控过程是否稳定
7. 散点图：用于分析两个变量之间的关系

【问题3】参考答案（每点1分，共7分）

质量保证和质量控制的区别：
1. 目的不同：质量保证确保过程正确，质量控制确保结果正确
2. 关注点不同：质量保证关注过程，质量控制关注产品
3. 执行时机不同：质量保证贯穿全过程，质量控制在产品产生后
4. 执行人员不同：质量保证由质量保证人员执行，质量控制由项目团队执行
5. 输出不同：质量保证输出质量报告，质量控制输出质量测量结果
6. 方法不同：质量保证使用质量审计，质量控制使用质量测试
7. 作用不同：质量保证预防质量问题，质量控制检测和纠正质量问题`,
        tags: ['案例分析', '质量管理'],
        difficulty: 'high'
    },
    {
        id: 'q2026003a',
        year: 2026,
        type: 'afternoon',
        chapter: 'project_schedule',
        chapterName: '项目进度管理',
        title: '2026年案例分析 - 进度管理',
        question: `【说明】
某公司承接了一个软件系统开发项目，项目周期为8个月，预算为500万元。项目经理制定了详细的进度计划，并按照计划执行。

项目进行到第4个月时，项目经理发现：
- 项目进度只完成了40%
- 成本已经花费了250万元
- 团队成员工作积极性不高
- 多个关键任务延期

【问题1】（10分）
请分析项目进度延误的可能原因。

【问题2】（8分）
请计算当前项目的SV、SPI，并分析项目进度状态。

【问题3】（7分）
请提出改进项目进度的措施。`,
        answer: `【问题1】参考答案（每点2分，答出5点得满分）

1. 进度计划不合理：
   - 计划制定时对工作量估计不足
   - 未考虑风险和不确定性
   - 关键路径分析不准确

2. 资源问题：
   - 人力资源不足
   - 资源分配不合理
   - 团队成员技能不足

3. 管理问题：
   - 进度监控不到位
   - 变更控制不力
   - 沟通不畅

4. 技术问题：
   - 技术难题未及时解决
   - 技术选型不当
   - 代码质量问题导致返工

5. 团队问题：
   - 团队成员工作积极性不高
   - 团队协作不畅
   - 团队成员离职或变动

【问题2】参考答案

已知条件：
- 项目周期：8个月
- 当前时间：第4个月（50%的时间）
- 计划进度：50%
- 实际进度：40%
- BAC = 500万元

计算：
1. PV = 500 × 50% = 250万元
2. EV = 500 × 40% = 200万元
3. AC = 250万元

4. SV = EV - PV = 200 - 250 = -50万元（进度落后）
5. SPI = EV / PV = 200 / 250 = 0.8（进度效率低）

项目进度状态分析：
- 项目进度严重落后，SPI=0.8，说明项目只完成了计划的80%
- 需要立即采取措施追赶进度

【问题3】参考答案（每点2分，答出4点得满分）

1. 进度压缩措施：
   - 赶工：增加资源以缩短关键路径任务的工期
   - 快速跟进：并行执行原本顺序进行的活动

2. 资源优化：
   - 重新分配资源，优先保障关键路径任务
   - 考虑增加临时资源

3. 管理改进：
   - 加强进度监控，建立每日或每周进度报告机制
   - 召开每日站会，及时解决问题
   - 建立进度预警机制

4. 团队管理：
   - 提高团队士气，采取激励措施
   - 加强团队沟通，解决团队冲突
   - 提供必要的培训和支持

5. 范围管理：
   - 重新评估项目范围，考虑是否可以调整
   - 严格控制变更，避免范围蔓延

6. 技术改进：
   - 解决技术难题，必要时寻求外部专家支持
   - 优化开发流程，提高开发效率`,
        tags: ['案例分析', '进度管理'],
        difficulty: 'high'
    },
    {
        id: 'q2026004a',
        year: 2026,
        type: 'afternoon',
        chapter: 'project_cost',
        chapterName: '项目成本管理',
        title: '2026年案例分析 - 成本管理',
        question: `【说明】
某公司承接了一个信息系统集成项目，项目周期为6个月，预算为300万元。项目经理制定了详细的成本计划，并按照计划执行。

项目进行到第3个月时，项目经理发现：
- 项目进度完成了50%
- 成本已经花费了200万元
- 多个任务的实际成本超过了预算

【问题1】（10分）
请分析项目成本超支的可能原因。

【问题2】（8分）
请计算当前项目的CV、CPI，并分析项目成本状态。

【问题3】（7分）
请提出控制项目成本的措施。`,
        answer: `【问题1】参考答案（每点2分，答出5点得满分）

1. 成本估算不准确：
   - 初始成本估算过低
   - 未考虑风险和不确定性
   - 对资源成本估计不足

2. 范围变更：
   - 范围蔓延导致额外成本
   - 变更控制不力
   - 需求变更频繁

3. 资源管理问题：
   - 资源效率低下
   - 资源浪费
   - 资源价格上涨

4. 管理问题：
   - 成本监控不到位
   - 成本控制措施不力
   - 沟通不畅导致误解

5. 技术问题：
   - 技术难题导致返工
   - 技术选型不当导致额外成本
   - 质量问题导致修复成本

【问题2】参考答案

已知条件：
- BAC = 300万元
- 当前时间：第3个月（50%的时间）
- 实际进度：50%
- 实际成本：200万元

计算：
1. EV = 300 × 50% = 150万元
2. AC = 200万元
3. PV = 300 × 50% = 150万元

4. CV = EV - AC = 150 - 200 = -50万元（成本超支）
5. CPI = EV / AC = 150 / 200 = 0.75（成本效率低）

项目成本状态分析：
- 项目成本严重超支，CPI=0.75，说明每花费1元只完成了0.75元的工作
- 需要立即采取措施控制成本

【问题3】参考答案（每点2分，答出4点得满分）

1. 成本控制措施：
   - 重新评估项目预算，必要时申请追加预算
   - 建立严格的成本审批流程
   - 实施成本预警机制

2. 范围管理：
   - 冻结范围变更，严格控制变更流程
   - 重新评估项目范围，考虑是否可以调整
   - 明确项目边界，避免范围蔓延

3. 资源管理：
   - 优化资源配置，提高资源利用效率
   - 减少资源浪费
   - 与供应商重新协商价格

4. 技术改进：
   - 优化开发流程，减少返工
   - 采用更高效的技术和工具
   - 提高代码质量，减少修复成本

5. 管理改进：
   - 加强成本监控，建立每周成本报告机制
   - 召开成本分析会议，及时发现和解决问题
   - 建立成本责任制度，明确各环节的成本责任

6. 风险管理：
   - 识别和评估剩余项目的成本风险
   - 制定成本风险应对策略
   - 预留适当的管理储备`,
        tags: ['案例分析', '成本管理'],
        difficulty: 'high'
    },
    
    // ===== 2027年模拟题（重点知识点） =====
    {
        id: 'q2027001',
        year: 2027,
        type: 'morning',
        chapter: 'project_integration',
        chapterName: '项目整体管理',
        title: '以下哪项是项目章程的内容？',
        question: '以下哪项是项目章程的内容？',
        options: [
            { label: 'A', text: '项目目的和批准原因' },
            { label: 'B', text: '详细的项目预算' },
            { label: 'C', text: '详细的项目进度计划' },
            { label: 'D', text: '详细的项目范围说明书' }
        ],
        answer: 'A',
        explanation: '项目章程的内容包括：项目目的和批准原因、可测量的项目目标、委派的项目经理、项目审批要求等。详细的项目预算、进度计划、范围说明书都在项目管理计划中。',
        tags: ['项目章程', '整体管理'],
        difficulty: 'low'
    },
    {
        id: 'q2027002',
        year: 2027,
        type: 'morning',
        chapter: 'project_scope',
        chapterName: '项目范围管理',
        title: '以下哪项是创建WBS的工具？',
        question: '以下哪项是创建WBS的工具？',
        options: [
            { label: 'A', text: '分解' },
            { label: 'B', text: '专家判断' },
            { label: 'C', text: '类比估算' },
            { label: 'D', text: 'A和B' }
        ],
        answer: 'D',
        explanation: '创建WBS的工具包括：分解、专家判断、WBS模板等。类比估算是成本估算的工具。',
        tags: ['WBS', '范围管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2027003',
        year: 2027,
        type: 'morning',
        chapter: 'project_schedule',
        chapterName: '项目进度管理',
        title: '以下哪项是活动持续时间估算的工具？',
        question: '以下哪项是活动持续时间估算的工具？',
        options: [
            { label: 'A', text: '三点估算' },
            { label: 'B', text: '参数估算' },
            { label: 'C', text: '类比估算' },
            { label: 'D', text: '以上都是' }
        ],
        answer: 'D',
        explanation: '活动持续时间估算的工具包括：三点估算、参数估算、类比估算、专家判断等。',
        tags: ['活动持续时间估算', '进度管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2027004',
        year: 2027,
        type: 'morning',
        chapter: 'project_cost',
        chapterName: '项目成本管理',
        title: '以下哪项是成本控制的工具？',
        question: '以下哪项是成本控制的工具？',
        options: [
            { label: 'A', text: '挣值分析' },
            { label: 'B', text: '趋势分析' },
            { label: 'C', text: '偏差分析' },
            { label: 'D', text: '以上都是' }
        ],
        answer: 'D',
        explanation: '成本控制的工具包括：挣值分析、趋势分析、偏差分析、绩效审查等。',
        tags: ['成本控制', '成本管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2027005',
        year: 2027,
        type: 'morning',
        chapter: 'project_quality',
        chapterName: '项目质量管理',
        title: '以下哪项是规划质量管理的输出？',
        question: '以下哪项是规划质量管理的输出？',
        options: [
            { label: 'A', text: '质量管理计划' },
            { label: 'B', text: '质量测量指标' },
            { label: 'C', text: '质量核对单' },
            { label: 'D', text: '以上都是' }
        ],
        answer: 'D',
        explanation: '规划质量管理的输出包括：质量管理计划、质量测量指标、质量核对单、过程改进计划等。',
        tags: ['规划质量管理', '质量管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2027006',
        year: 2027,
        type: 'morning',
        chapter: 'project_hr',
        chapterName: '项目人力资源管理',
        title: '以下哪项是建设团队的工具？',
        question: '以下哪项是建设团队的工具？',
        options: [
            { label: 'A', text: '团队建设活动' },
            { label: 'B', text: '培训' },
            { label: 'C', text: '认可与奖励' },
            { label: 'D', text: '以上都是' }
        ],
        answer: 'D',
        explanation: '建设团队的工具包括：团队建设活动、培训、认可与奖励、集中办公、虚拟团队等。',
        tags: ['建设团队', '人力资源管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2027007',
        year: 2027,
        type: 'morning',
        chapter: 'project_communication',
        chapterName: '项目沟通管理',
        title: '以下哪项是管理沟通的工具？',
        question: '以下哪项是管理沟通的工具？',
        options: [
            { label: 'A', text: '沟通技术' },
            { label: 'B', text: '沟通方法' },
            { label: 'C', text: '沟通模型' },
            { label: 'D', text: '以上都是' }
        ],
        answer: 'D',
        explanation: '管理沟通的工具包括：沟通技术、沟通方法、沟通模型、信息管理系统等。',
        tags: ['管理沟通', '沟通管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2027008',
        year: 2027,
        type: 'morning',
        chapter: 'project_risk',
        chapterName: '项目风险管理',
        title: '以下哪项是规划风险应对的工具？',
        question: '以下哪项是规划风险应对的工具？',
        options: [
            { label: 'A', text: '策略分析' },
            { label: 'B', text: '备选方案分析' },
            { label: 'C', text: '应急储备分析' },
            { label: 'D', text: '以上都是' }
        ],
        answer: 'D',
        explanation: '规划风险应对的工具包括：策略分析、备选方案分析、应急储备分析、专家判断等。',
        tags: ['规划风险应对', '风险管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2027009',
        year: 2027,
        type: 'morning',
        chapter: 'project_procurement',
        chapterName: '项目采购管理',
        title: '以下哪项是控制采购的工具？',
        question: '以下哪项是控制采购的工具？',
        options: [
            { label: 'A', text: '合同变更控制系统' },
            { label: 'B', text: '采购绩效审查' },
            { label: 'C', text: '检查与审计' },
            { label: 'D', text: '以上都是' }
        ],
        answer: 'D',
        explanation: '控制采购的工具包括：合同变更控制系统、采购绩效审查、检查与审计、索赔管理等。',
        tags: ['控制采购', '采购管理'],
        difficulty: 'medium'
    },
    {
        id: 'q2027010',
        year: 2027,
        type: 'morning',
        chapter: 'project_stakeholder',
        chapterName: '项目干系人管理',
        title: '以下哪项是管理干系人参与的工具？',
        question: '以下哪项是管理干系人参与的工具？',
        options: [
            { label: 'A', text: '沟通方法' },
            { label: 'B', text: '人际关系技能' },
            { label: 'C', text: '管理技能' },
            { label: 'D', text: '以上都是' }
        ],
        answer: 'D',
        explanation: '管理干系人参与的工具包括：沟通方法、人际关系技能、管理技能、变更日志等。',
        tags: ['管理干系人参与', '干系人管理'],
        difficulty: 'medium'
    }
];

// 导出题库数据
window.questionsData = questionsData;
