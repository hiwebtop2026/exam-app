/*
 * ============================================================================
 * 机考模拟卷 B（系统集成项目管理工程师·中级）
 * ----------------------------------------------------------------------------
 * 生成日期：2026-10-18
 * 依据文档：
 *   - docs/mock_exam_spec.md（出题规格书 §1 数据结构 / §3 配比与考点轮换表 / §4 案例蓝图）
 *   - docs/research_trends.md（命题趋势与高频考点，explanation/ref 溯源依据）
 * 出题说明：
 *   - 严格按规格 §3「卷B考点」列逐行出题，不串用卷A/卷C考点；
 *   - 75 道单选（B01-B75），含最后 4 道英文术语题（SPI/EAC/PDM/ITSS）；
 *   - 4 道案例大题（BC1-BC4）共 75 分：BC1 关键路径+进度压缩 20 分、
 *     BC2 质量管理 19 分、BC3 范围管理 18 分、BC4 采购与合同 18 分；
 *   - 配比说明：规格 §3「题数」列逐行相加为 76，与表尾合计 75 差 1；
 *     本卷按任务硬性要求产出恰好 75 题，仅将「信息系统架构」区按 B 列
 *     2 个考点（云原生 / 技术架构）出 4 题（B09-B12），其余各区严格按表。
 * ============================================================================
 */

window.mockExamPapers = window.mockExamPapers || {};
window.mockExamPapers['B'] = {
  id: 'B',
  name: '机考模拟卷二',
  badge: '2026下半年 · 第3版教程 · 冲刺模拟',
  morning: [
    /* ============ 信息化发展（2题）B01-B02 ============ */
    {
      id: 'B01', area: '信息化发展', domain: '数字中国', type: 'single',
      stem: '《数字中国建设整体布局规划》提出数字中国建设的“252”框架。其中“两大基础”除数字基础设施外，另一项是？',
      options: [
        { label: 'A', text: '数据资源体系' },
        { label: 'B', text: '数字技术创新体系' },
        { label: 'C', text: '数字经济规模' },
        { label: 'D', text: '数字安全屏障' }
      ],
      answer: 'A',
      explanation: '“252”框架：夯实数字基础设施和数据资源体系“两大基础”，推进数字技术与经济、政治、文化、社会、生态文明“五位一体”深度融合，强化数字技术创新体系、数字安全屏障“两大能力”。数字安全屏障属于“两大能力”而非“两大基础”。',
      ref: '依据：趋势报告§3.10；教材第1章 数字中国'
    },
    {
      id: 'B02', area: '信息化发展', domain: '数字经济', type: 'single',
      stem: '某制造企业将新一代信息技术与生产流程深度融合，通过数据驱动实现产线智能化改造、产出提升。这属于数字经济中的？',
      options: [
        { label: 'A', text: '数字产业化' },
        { label: 'B', text: '产业数字化' },
        { label: 'C', text: '数据价值化' },
        { label: 'D', text: '数字化治理' }
      ],
      answer: 'B',
      explanation: '数字经济框架包括数字产业化（ICT产业本身）、产业数字化（传统产业应用数字技术带来的产出增加）、数据价值化、数字化治理。传统制造业用数字技术改造生产，属于产业数字化。',
      ref: '依据：趋势报告§3.10；教材第1章 数字经济'
    },

    /* ============ 信息技术发展（2题）B03-B04 ============ */
    {
      id: 'B03', area: '信息技术发展', domain: '物联网四层', type: 'single',
      stem: '物联网体系结构自下而上分为感知层、网络层、平台层和应用层。其中负责采集信息、识别物体的是？',
      options: [
        { label: 'A', text: '感知层' },
        { label: 'B', text: '网络层' },
        { label: 'C', text: '平台层' },
        { label: 'D', text: '应用层' }
      ],
      answer: 'A',
      explanation: '感知层由传感器、RFID、二维码等组成，负责信息采集与物体识别；网络层负责数据传输；平台层负责数据处理与存储；应用层面向具体业务场景。',
      ref: '依据：趋势报告§3.10（物联网四层）；教材第2章 物联网'
    },
    {
      id: 'B04', area: '信息技术发展', domain: '区块链', type: 'single',
      stem: '关于区块链技术，下列说法错误的是？',
      options: [
        { label: 'A', text: '链上记录一旦写入通常难以篡改' },
        { label: 'B', text: '采用去中心化的分布式账本' },
        { label: 'C', text: '公有链中各节点可参与读写与共识' },
        { label: 'D', text: '由中心节点统一记账并权威认证' }
      ],
      answer: 'D',
      explanation: '区块链的核心特征是去中心化、分布式账本、不可篡改和共识机制，不存在“中心节点统一记账”，这正是它区别于传统中心化系统之处。',
      ref: '依据：趋势报告§3.10；教材第2章 区块链'
    },

    /* ============ 信息技术服务ITSS（4题）B05-B08 ============ */
    {
      id: 'B05', area: '信息技术服务ITSS', domain: '服务质量评价五特性', type: 'single',
      stem: 'IT服务质量评价模型中，服务质量“五特性”不包括下列哪一项？',
      options: [
        { label: 'A', text: '有形性' },
        { label: 'B', text: '可靠性' },
        { label: 'C', text: '响应性' },
        { label: 'D', text: '盈利性' }
      ],
      answer: 'D',
      explanation: 'IT服务质量五特性为有形性、可靠性、响应性、保证性、移情性。“盈利性”属于企业经营目标，不是服务质量评价特性。',
      ref: '依据：趋势报告§3.10（2026上一批次考服务质量五特性）；教材第3章 ITSS'
    },
    {
      id: 'B06', area: '信息技术服务ITSS', domain: '服务质量评价五特性', type: 'single',
      stem: '在IT服务质量五特性中，“服务商准确、可靠地履行服务承诺的能力”指的是？',
      options: [
        { label: 'A', text: '有形性' },
        { label: 'B', text: '可靠性' },
        { label: 'C', text: '响应性' },
        { label: 'D', text: '移情性' }
      ],
      answer: 'B',
      explanation: '可靠性=可靠准确地履行服务承诺；响应性=及时帮助客户、快速服务；保证性=员工知识与可信；移情性=个性化关怀；有形性=设施与人员外表。',
      ref: '依据：趋势报告§3.10；教材第3章'
    },
    {
      id: 'B07', area: '信息技术服务ITSS', domain: 'IT服务设计四类风险', type: 'single',
      stem: 'IT服务设计过程需识别和管理风险。下列不属于IT服务设计四类典型风险的是？',
      options: [
        { label: 'A', text: '技术风险' },
        { label: 'B', text: '管理风险' },
        { label: 'C', text: '宏观经济周期风险' },
        { label: 'D', text: '进度风险' }
      ],
      answer: 'C',
      explanation: 'IT服务设计四类风险为技术风险、管理风险、进度风险、不可预测风险。“宏观经济周期风险”不在其列。',
      ref: '依据：趋势报告§3.10（2026上三批考IT服务设计风险）；教材第3章'
    },
    {
      id: 'B08', area: '信息技术服务ITSS', domain: 'IT服务设计四类风险', type: 'single',
      stem: '设计新运维服务时，项目组发现所选监控技术尚不成熟、可能无法达到约定可用性指标。这属于？',
      options: [
        { label: 'A', text: '技术风险' },
        { label: 'B', text: '管理风险' },
        { label: 'C', text: '进度风险' },
        { label: 'D', text: '不可预测风险' }
      ],
      answer: 'A',
      explanation: '因技术方案不成熟、技术能力不足导致服务达不到目标，属于技术风险；管理风险指流程/组织/人员管理不当；进度风险指交付延期；不可预测风险指偶发不可抗力。',
      ref: '依据：趋势报告§3.10；教材第3章'
    },

    /* ============ 信息系统架构（4题，配比说明见文件头）B09-B12 ============ */
    {
      id: 'B09', area: '信息系统架构', domain: '云原生', type: 'single',
      stem: '关于云原生架构，下列说法错误的是？',
      options: [
        { label: 'A', text: '强调微服务架构' },
        { label: 'B', text: '强调容器化与弹性伸缩' },
        { label: 'C', text: '将整个应用打包为单体统一部署' },
        { label: 'D', text: '强调持续交付与DevOps' }
      ],
      answer: 'C',
      explanation: '云原生典型特征是微服务、容器、弹性伸缩、持续交付、DevOps，它恰恰反对单体架构。“打包为单体统一部署”是传统单体做法。',
      ref: '依据：趋势报告§3.10（2026上三批云原生、非单体）；教材第4章 云原生架构'
    },
    {
      id: 'B10', area: '信息系统架构', domain: '云原生', type: 'single',
      stem: '某电商系统在大促期间自动增加应用实例数、大促结束后自动释放资源。这体现云原生的哪一特征？',
      options: [
        { label: 'A', text: '弹性伸缩' },
        { label: 'B', text: '单体部署' },
        { label: 'C', text: '集中式数据库' },
        { label: 'D', text: '物理机固定配置' }
      ],
      answer: 'A',
      explanation: '弹性伸缩根据负载自动增减资源实例，是云原生核心特征之一；其余均为传统固定/单体做法。',
      ref: '依据：趋势报告§3.10；教材第4章'
    },
    {
      id: 'B11', area: '信息系统架构', domain: '云原生/微服务', type: 'single',
      stem: '将大型单体系统拆分为多个松耦合、可独立部署和演进的小服务，服务间通过轻量级协议通信。这种架构风格是？',
      options: [
        { label: 'A', text: '单体架构' },
        { label: 'B', text: '微服务架构' },
        { label: 'C', text: '分层架构' },
        { label: 'D', text: '管道-过滤器架构' }
      ],
      answer: 'B',
      explanation: '微服务架构将应用拆分为一组小型、独立部署、松耦合、围绕业务能力的服务，用轻量级协议通信，与单体架构相对。',
      ref: '依据：趋势报告§3.10；教材第4章'
    },
    {
      id: 'B12', area: '信息系统架构', domain: '技术架构', type: 'single',
      stem: '信息系统技术架构需在多个质量属性间权衡。下列不属于架构权衡关注点的是？',
      options: [
        { label: 'A', text: '系统可用性' },
        { label: 'B', text: '系统性能' },
        { label: 'C', text: '开发团队员工的上下班时间安排' },
        { label: 'D', text: '系统安全性' }
      ],
      answer: 'C',
      explanation: '架构权衡关注方向、结构、关系与原则，以及可用性、性能、安全、可修改性等质量属性；员工上下班时间安排与架构设计无关。',
      ref: '依据：趋势报告§3.10（架构权衡四要素）；教材第4章 技术架构'
    },

    /* ============ 软件工程（2题）B13-B14 ============ */
    {
      id: 'B13', area: '软件工程', domain: '面向对象基本概念', type: 'single',
      stem: '在面向对象方法中，子类自动拥有父类的属性和方法，并可在此基础上扩展或重写。这一机制称为？',
      options: [
        { label: 'A', text: '封装' },
        { label: 'B', text: '继承' },
        { label: 'C', text: '多态' },
        { label: 'D', text: '聚合' }
      ],
      answer: 'B',
      explanation: '继承是子类共享父类属性/方法的机制；封装是隐藏内部实现；多态是同一接口不同实现；聚合是整体-部分关系。',
      ref: '依据：趋势报告§2.1软件工程；教材第5章 面向对象'
    },
    {
      id: 'B14', area: '软件工程', domain: '软件生命周期模型', type: 'single',
      stem: '需求明确且稳定、希望阶段清晰、文档驱动的项目，最适合采用的软件生命周期模型是？',
      options: [
        { label: 'A', text: '瀑布模型' },
        { label: 'B', text: '探索式原型模型' },
        { label: 'C', text: '敏捷迭代模型' },
        { label: 'D', text: '边做边改模型' }
      ],
      answer: 'A',
      explanation: '瀑布模型按需求→设计→编码→测试→维护顺序线性推进、阶段间文档驱动，适合需求明确稳定的项目；原型/敏捷适合需求不明确、需快速反馈的场景。',
      ref: '依据：趋势报告§2.1软件工程；教材第5章 软件生命周期模型'
    },

    /* ============ 数据工程（4题）B15-B18 ============ */
    {
      id: 'B15', area: '数据工程', domain: '数据治理', type: 'single',
      stem: '关于数据治理，下列说法错误的是？',
      options: [
        { label: 'A', text: '数据治理是对数据资产管理行使权力和控制的活动集合' },
        { label: 'B', text: '包括数据标准、数据质量、数据安全等管理' },
        { label: 'C', text: '数据治理等同于具体的数据清洗与建模操作' },
        { label: 'D', text: '通常需要明确组织、制度与责任' }
      ],
      answer: 'C',
      explanation: '数据治理是顶层的权责与制度安排（决策与控制）；数据清洗、建模属于具体数据管理/操作执行层面，二者不能等同。',
      ref: '依据：趋势报告§2.1数据工程；教材第6章 数据治理'
    },
    {
      id: 'B16', area: '数据工程', domain: '数据治理', type: 'single',
      stem: '某企业为数据定义统一业务术语、编码规则和质量考核口径，并明确谁对哪类数据负责。这些活动属于？',
      options: [
        { label: 'A', text: '数据备份' },
        { label: 'B', text: '数据治理' },
        { label: 'C', text: '数据压缩' },
        { label: 'D', text: '数据可视化' }
      ],
      answer: 'B',
      explanation: '制定数据标准、统一口径、明确数据责任人（数据所有者/数据管家）是数据治理的核心内容。',
      ref: '依据：趋势报告§2.1；教材第6章'
    },
    {
      id: 'B17', area: '数据工程', domain: '数据仓库/数据湖', type: 'single',
      stem: '关于数据仓库与数据湖，下列说法正确的是？',
      options: [
        { label: 'A', text: '数据仓库只存原始数据、不做结构化' },
        { label: 'B', text: '数据湖按预先定义的模式存储结构化数据' },
        { label: 'C', text: '数据仓库面向主题、集成、相对稳定，用于分析决策' },
        { label: 'D', text: '数据湖不能存储半结构化和非结构化数据' }
      ],
      answer: 'C',
      explanation: '数据仓库面向主题、集成、时变、相对稳定，服务于分析决策；数据湖以原始格式存储结构化/半结构化/非结构化数据，schema-on-read。',
      ref: '依据：趋势报告§2.1；教材第6章 数据仓库/数据湖'
    },
    {
      id: 'B18', area: '数据工程', domain: '数据仓库/数据湖', type: 'single',
      stem: '企业希望以原始格式集中存放日志、图片、文本、结构化表等各类数据，后续再按需处理。这种存储形态称为？',
      options: [
        { label: 'A', text: '数据湖' },
        { label: 'B', text: '数据仓库' },
        { label: 'C', text: '数据集市' },
        { label: 'D', text: '数据库索引' }
      ],
      answer: 'A',
      explanation: '数据湖以原始/接近原始格式存储各类结构与非结构化数据，schema在读取时定义；数据仓库是先定义模式再入库的结构化分析存储。',
      ref: '依据：趋势报告§2.1；教材第6章'
    },

    /* ============ 软硬件系统集成（2题）B19-B20 ============ */
    {
      id: 'B19', area: '软硬件系统集成', domain: '系统集成接口/总线', type: 'single',
      stem: '在系统集成中，采用一条公共主干连接各子系统，各子系统通过标准接口挂接到主干上通信。这种方式称为？',
      options: [
        { label: 'A', text: '点对点直接集成' },
        { label: 'B', text: '总线/企业服务总线（ESB）集成' },
        { label: 'C', text: '数据库复制集成' },
        { label: 'D', text: '文件交换集成' }
      ],
      answer: 'B',
      explanation: '总线（如ESB）通过标准协议和接口集中管理各系统间通信，降低点对点网状耦合；点对点集成随系统增多形成难以维护的网状结构。',
      ref: '依据：趋势报告§2.1软硬件集成；教材第7章 系统集成接口/总线'
    },
    {
      id: 'B20', area: '软硬件系统集成', domain: '中间件', type: 'single',
      stem: '在多个异构系统之间负责消息路由、协议转换、数据格式转换与应用解耦的基础软件，通常称为？',
      options: [
        { label: 'A', text: '操作系统内核' },
        { label: 'B', text: '中间件（如消息队列/应用服务器）' },
        { label: 'C', text: '编译器' },
        { label: 'D', text: '杀毒软件' }
      ],
      answer: 'B',
      explanation: '中间件位于操作系统与应用之间，提供通信、集成、数据转换等通用服务（消息队列、ESB、应用服务器），用于屏蔽异构、解耦系统。',
      ref: '依据：趋势报告§2.1；教材第7章 中间件'
    },

    /* ============ 信息安全工程（2题）B21-B22 ============ */
    {
      id: 'B21', area: '信息安全工程', domain: '等级保护2.0', type: 'single',
      stem: '网络安全等级保护2.0相比1.0在防护对象上明显扩展。下列属于等保2.0新增/重点覆盖防护对象的是？',
      options: [
        { label: 'A', text: '传统局域网办公系统' },
        { label: 'B', text: '云计算、移动互联、物联网、工业控制系统及大数据' },
        { label: 'C', text: '单机版办公软件' },
        { label: 'D', text: '传真与纸质文档' }
      ],
      answer: 'B',
      explanation: '等保2.0将云计算、移动互联、物联网、工业控制系统、大数据纳入统一防护要求，形成“安全通用要求+扩展要求”。',
      ref: '依据：趋势报告§3.10（等保2.0新增云/物联网/大数据）；教材第8章 等级保护2.0'
    },
    {
      id: 'B22', area: '信息安全工程', domain: '多因子认证', type: 'single',
      stem: '用户登录时除输入密码外，还需手机短信验证码才能登录。这种身份认证方式属于？',
      options: [
        { label: 'A', text: '单因子认证' },
        { label: 'B', text: '多因子认证' },
        { label: 'C', text: '生物特征认证' },
        { label: 'D', text: '匿名访问' }
      ],
      answer: 'B',
      explanation: '多因子认证组合两种及以上不同类别凭证（所知-密码、所持-短信令牌、所是-指纹），比单密码更安全。',
      ref: '依据：趋势报告§3.10（多因子认证）；教材第8章'
    },

    /* ============ 项目管理概论（4题）B23-B26 ============ */
    {
      id: 'B23', area: '项目管理概论', domain: '项目集/项目组合管理', type: 'single',
      stem: '关于项目集（Program）与项目组合（Portfolio），下列说法正确的是？',
      options: [
        { label: 'A', text: '项目组合中的项目一定彼此依赖、直接相关' },
        { label: 'B', text: '项目集是一组相互关联且被协调管理的项目，以获取单独管理无法得到的收益' },
        { label: 'C', text: '项目组合只包含项目，不包含项目集' },
        { label: 'D', text: '项目集管理只需各项目各自成功，不关注整体收益' }
      ],
      answer: 'B',
      explanation: '项目集=一组相互关联、协调管理的项目，旨在获取协同收益；项目组合=为实现战略而集中管理的项目/项目集，它们不一定彼此关联，关注战略对齐与整体收益。',
      ref: '依据：趋势报告§2.1项目管理概论；教材第9章 项目集/项目组合管理'
    },
    {
      id: 'B24', area: '项目管理概论', domain: '项目集/项目组合管理', type: 'single',
      stem: '某公司把“手机研发”“芯片”“操作系统”三个项目作为整体协调管理，以获得单独管理无法实现的市场协同收益。这属于？',
      options: [
        { label: 'A', text: '项目组合管理' },
        { label: 'B', text: '项目集管理' },
        { label: 'C', text: '日常运营管理' },
        { label: 'D', text: '单项目管理' }
      ],
      answer: 'B',
      explanation: '这些项目相互关联（手机+芯片+操作系统）、协调管理以获取协同收益，符合项目集定义；项目组合内项目不一定关联，只追求战略对齐和资源优先级。',
      ref: '依据：趋势报告§2.1；教材第9章'
    },
    {
      id: 'B25', area: '项目管理概论', domain: '项目生命周期', type: 'single',
      stem: '需求难以一次性明确、需通过多个迭代版本逐步交付并获取反馈的项目，通常采用哪种项目生命周期？',
      options: [
        { label: 'A', text: '预测型（完全计划驱动）' },
        { label: 'B', text: '迭代/敏捷型（适应型）' },
        { label: 'C', text: '纯瀑布型' },
        { label: 'D', text: '固定总价型' }
      ],
      answer: 'B',
      explanation: '迭代/适应型生命周期通过短迭代逐步细化范围、早期交付增量并吸收反馈，适合需求不确定的项目；预测型在前期一次性规划全部范围。',
      ref: '依据：趋势报告§2.1；教材第9章 项目生命周期（预测/迭代/敏捷）'
    },
    {
      id: 'B26', area: '项目管理概论', domain: '项目生命周期', type: 'single',
      stem: '关于预测型（瀑布）与适应型（敏捷）生命周期，下列说法错误的是？',
      options: [
        { label: 'A', text: '预测型前期一次性确定范围和计划' },
        { label: 'B', text: '适应型通过迭代逐步细化范围' },
        { label: 'C', text: '预测型在整个项目中范围基本固定、变更受控' },
        { label: 'D', text: '适应型不需要任何计划，完全随客户即兴变化' }
      ],
      answer: 'D',
      explanation: '适应型并非“无计划”，它仍有迭代计划、路线图和优先级（如MoSCoW），只是范围随反馈渐进明细；说“完全不需要计划”是错误的。',
      ref: '依据：趋势报告§6（敏捷新增）；教材第9章'
    },

    /* ============ 启动过程组（2题）B27-B28 ============ */
    {
      id: 'B27', area: '启动过程组', domain: '识别干系人', type: 'single',
      stem: '识别干系人过程中，下列哪项不属于其工具与技术？',
      options: [
        { label: 'A', text: '干系人分析' },
        { label: 'B', text: '权力利益方格' },
        { label: 'C', text: '干系人参与评估矩阵' },
        { label: 'D', text: '绘制网络图估算工期' }
      ],
      answer: 'D',
      explanation: '识别干系人工具包括干系人分析、权力利益方格、干系人参与评估矩阵、专家判断等；绘制网络图估算工期是进度管理工具，与识别干系人无关。',
      ref: '依据：趋势报告§3.5；教材第10章 识别干系人'
    },
    {
      id: 'B28', area: '启动过程组', domain: '识别干系人', type: 'single',
      stem: '项目经理完成干系人识别后，应将识别结果记录在（ ）中，并在项目中定期更新。',
      options: [
        { label: 'A', text: '风险登记册' },
        { label: 'B', text: '干系人登记册' },
        { label: 'C', text: '问题日志' },
        { label: 'D', text: '配置管理库' }
      ],
      answer: 'B',
      explanation: '识别干系人的输出是干系人登记册，记录干系人身份、评估信息、分类等，并随项目进展更新。',
      ref: '依据：趋势报告§3.5；教材第10章'
    },

    /* ============ 规划过程组-范围（3题）B29-B31 ============ */
    {
      id: 'B29', area: '规划过程组-范围', domain: 'WBS词典', type: 'single',
      stem: '关于WBS词典，下列说法正确的是？',
      options: [
        { label: 'A', text: '只是WBS图的另一种画法，内容与WBS完全相同' },
        { label: 'B', text: '对每个工作包的工作内容、责任人、进度、成本、质量要求等进行详细描述' },
        { label: 'C', text: '在项目收尾后才需要补写' },
        { label: 'D', text: '用于替代范围基准' }
      ],
      answer: 'B',
      explanation: 'WBS词典是对WBS各组成部分（工作包）的详细文字说明，包括工作描述、责任人、进度里程碑、成本估算、质量要求等；它与WBS、范围说明书共同构成范围基准。',
      ref: '依据：趋势报告§3.7（WBS+WBS词典+范围说明书=范围基准）；教材第11章 WBS词典'
    },
    {
      id: 'B30', area: '规划过程组-范围', domain: 'WBS词典', type: 'single',
      stem: '下列内容中，通常不属于WBS词典所包含信息的是？',
      options: [
        { label: 'A', text: '工作包的工作描述与交付物' },
        { label: 'B', text: '工作包责任人与进度里程碑' },
        { label: 'C', text: '该工作包的成本估算与质量要求' },
        { label: 'D', text: '竞争对手的内部定价策略' }
      ],
      answer: 'D',
      explanation: 'WBS词典围绕本项目工作包描述工作内容、责任人、进度、成本、质量、合同信息等；竞争对手内部定价与本项目工作包无关。',
      ref: '依据：趋势报告§3.7；教材第11章'
    },
    {
      id: 'B31', area: '规划过程组-范围', domain: '产品范围vs项目范围', type: 'single',
      stem: '关于“产品范围”与“项目范围”，下列说法正确的是？',
      options: [
        { label: 'A', text: '产品范围是为交付产品而必须完成的项目工作' },
        { label: 'B', text: '项目范围的完成以产品需求为衡量标准' },
        { label: 'C', text: '产品范围是产品/服务所具有的功能和特性，项目范围是为产出该产品而做的工作' },
        { label: 'D', text: '二者含义完全相同，可互换使用' }
      ],
      answer: 'C',
      explanation: '产品范围=产品/服务的功能与特性（以产品需求衡量）；项目范围=为交付该产品所需完成的工作（以项目管理计划/范围基准衡量）。',
      ref: '依据：趋势报告§3.7；教材第11章 产品范围vs项目范围'
    },

    /* ============ 规划过程组-进度（5题）B32-B36 ============ */
    {
      id: 'B32', area: '规划过程组-进度', domain: '三点估算贝塔公式', type: 'single',
      stem: '某活动最乐观工期O=6天，最可能工期M=9天，最悲观工期P=18天。按贝塔分布（PERT）公式，期望工期Te为？',
      options: [
        { label: 'A', text: '9天' },
        { label: 'B', text: '10天' },
        { label: 'C', text: '11天' },
        { label: 'D', text: '12天' }
      ],
      answer: 'B',
      explanation: 'Te=(O+4M+P)/6=(6+4×9+18)/6=(6+36+18)/6=60/6=10天。',
      ref: '依据：趋势报告§3.2（Te=(O+4M+P)/6；2026上三批15题Te=11天）；教材第11章 三点估算'
    },
    {
      id: 'B33', area: '规划过程组-进度', domain: '三点估算标准差', type: 'single',
      stem: '某活动最乐观O=4天、最悲观P=16天，按贝塔分布其标准差σ为？',
      options: [
        { label: 'A', text: '1天' },
        { label: 'B', text: '2天' },
        { label: 'C', text: '3天' },
        { label: 'D', text: '4天' }
      ],
      answer: 'B',
      explanation: 'σ=(P-O)/6=(16-4)/6=12/6=2天；方差=σ²=4。',
      ref: '依据：趋势报告§3.2（σ=(P-O)/6，2025下首次考方差）；教材第11章'
    },
    {
      id: 'B34', area: '规划过程组-进度', domain: '三角分布', type: 'single',
      stem: '某活动最乐观O=5天、最可能M=10天、最悲观P=15天。按三角分布，期望工期为？',
      options: [
        { label: 'A', text: '9天' },
        { label: 'B', text: '10天' },
        { label: 'C', text: '11天' },
        { label: 'D', text: '12天' }
      ],
      answer: 'B',
      explanation: '三角分布Te=(O+M+P)/3=(5+10+15)/3=30/3=10天。',
      ref: '依据：趋势报告§3.2（三角分布=(O+M+P)/3）；教材第11章'
    },
    {
      id: 'B35', area: '规划过程组-进度', domain: '赶工vs快速跟进', type: 'single',
      stem: '为缩短工期，项目经理把原本按顺序执行的两个阶段改为部分并行开展。这种进度压缩技术称为？',
      options: [
        { label: 'A', text: '赶工（Crashing）' },
        { label: 'B', text: '快速跟进（Fast Tracking）' },
        { label: 'C', text: '资源平衡' },
        { label: 'D', text: '蒙特卡洛分析' }
      ],
      answer: 'B',
      explanation: '快速跟进=把串行活动改为并行或部分并行，通常不增加成本但带来返工和风险；赶工=增加资源/加班以增加成本换工期。',
      ref: '依据：趋势报告§3.2（赶工vs快速跟进；2026上三批14题）；教材第11章'
    },
    {
      id: 'B36', area: '规划过程组-进度', domain: '赶工vs快速跟进', type: 'single',
      stem: '关于赶工与快速跟进的比较，下列说法错误的是？',
      options: [
        { label: 'A', text: '赶工通过增加资源投入压缩工期，通常增加成本' },
        { label: 'B', text: '快速跟进通过活动并行压缩工期，通常不直接增加成本' },
        { label: 'C', text: '赶工应优先对关键路径上成本斜率最低的活动进行' },
        { label: 'D', text: '快速跟进不会带来任何返工或风险，是毫无代价的压缩手段' }
      ],
      answer: 'D',
      explanation: '快速跟进使原本有依赖关系的活动并行，可能破坏逻辑关系、导致返工和风险，并非毫无代价。',
      ref: '依据：趋势报告§3.2；教材第11章'
    },

    /* ============ 规划过程组-成本（4题）B37-B40 ============ */
    {
      id: 'B37', area: '规划过程组-成本', domain: '成本预算与成本基准', type: 'single',
      stem: '关于成本基准（Cost Baseline），下列说法正确的是？',
      options: [
        { label: 'A', text: '成本基准包括管理储备' },
        { label: 'B', text: '成本基准是经批准、按时间段分配的项目预算，用于度量和监控成本绩效' },
        { label: 'C', text: '成本基准一旦确定就永远不能变更' },
        { label: 'D', text: '成本基准等同于项目总预算，二者完全相同' }
      ],
      answer: 'B',
      explanation: '成本基准=经批准、按时间分段的项目预算（不含管理储备），用于挣值度量；项目总预算=成本基准+管理储备。成本基准可通过整体变更控制流程变更。',
      ref: '依据：趋势报告§3.1（成本基准不含管理储备）；教材第11章 成本预算与成本基准'
    },
    {
      id: 'B38', area: '规划过程组-成本', domain: '成本预算与成本基准', type: 'single',
      stem: '某项目成本基准为500万元，另设管理储备30万元。该项目的总预算为？',
      options: [
        { label: 'A', text: '470万元' },
        { label: 'B', text: '500万元' },
        { label: 'C', text: '530万元' },
        { label: 'D', text: '30万元' }
      ],
      answer: 'C',
      explanation: '项目总预算=成本基准+管理储备=500+30=530万元；管理储备不纳入成本基准，但属于项目总预算，由管理层掌握。',
      ref: '依据：趋势报告§3.1（应急储备vs管理储备，2025下二批次新增）；教材第11章'
    },
    {
      id: 'B39', area: '规划过程组-成本', domain: '应急储备vs管理储备', type: 'single',
      stem: '关于应急储备与管理储备，下列说法错误的是？',
      options: [
        { label: 'A', text: '应急储备针对已识别风险（已知未知），包含在成本基准内' },
        { label: 'B', text: '管理储备针对未识别风险（未知未知），不包含在成本基准内' },
        { label: 'C', text: '项目经理可自主决定动用管理储备而无需走变更流程' },
        { label: 'D', text: '应急储备通常由项目经理直接掌控' }
      ],
      answer: 'C',
      explanation: '管理储备用于应对未知未知风险，动用时通常需经批准/变更流程并可能纳入成本基准；项目经理不能像使用应急储备那样自主随意动用。',
      ref: '依据：趋势报告§3.1；教材第11章 应急储备vs管理储备'
    },
    {
      id: 'B40', area: '规划过程组-成本', domain: '应急储备vs管理储备', type: 'single',
      stem: '项目组针对WBS中已识别但可能发生的不确定性（已知未知）预留一笔费用，并将其纳入成本基准。这笔费用是？',
      options: [
        { label: 'A', text: '管理储备' },
        { label: 'B', text: '应急储备' },
        { label: 'C', text: '利润' },
        { label: 'D', text: '税金' }
      ],
      answer: 'B',
      explanation: '应急储备针对已识别的已知未知风险，纳入成本基准、由PM掌控；管理储备针对未知未知，不纳入成本基准。',
      ref: '依据：趋势报告§3.1；教材第11章'
    },

    /* ============ 规划过程组-质量（2题）B41-B42 ============ */
    {
      id: 'B41', area: '规划过程组-质量', domain: '老七种质量工具', type: 'single',
      stem: '项目组想分层查找导致软件缺陷的根本原因，从“人、机、料、法、环、测”逐层追溯。最适合使用的质量工具是？',
      options: [
        { label: 'A', text: '因果图（鱼骨图）' },
        { label: 'B', text: '帕累托图' },
        { label: 'C', text: '控制图' },
        { label: 'D', text: '散点图' }
      ],
      answer: 'A',
      explanation: '因果图（鱼骨图/石川图）用于追溯质量问题的根本原因；帕累托图找关键少数；控制图判断过程是否稳定受控；散点图分析两变量关系。',
      ref: '依据：趋势报告§3.6（质量工具；2026上三批18/68题）；教材第11章 老七种质量工具'
    },
    {
      id: 'B42', area: '规划过程组-质量', domain: '老七种质量工具', type: 'single',
      stem: '某团队统计发现，全部缺陷中75%集中在两个模块上。为优先解决这“关键的少数”，应使用的质量工具是？',
      options: [
        { label: 'A', text: '帕累托图' },
        { label: 'B', text: '因果图' },
        { label: 'C', text: '流程图' },
        { label: 'D', text: '核查表' }
      ],
      answer: 'A',
      explanation: '帕累托图基于80/20原则（关键的少数与次要的多数），按频数排序帮助聚焦最主要问题。',
      ref: '依据：趋势报告§3.6；教材第11章'
    },

    /* ============ 规划过程组-风险（3题）B43-B45 ============ */
    {
      id: 'B43', area: '规划过程组-风险', domain: '定性分析vs定量分析', type: 'single',
      stem: '风险识别后，项目组用“概率-影响矩阵”对各风险按发生概率和影响程度进行分级排序。这属于？',
      options: [
        { label: 'A', text: '定性风险分析' },
        { label: 'B', text: '定量风险分析' },
        { label: 'C', text: '风险审计' },
        { label: 'D', text: '风险转移' }
      ],
      answer: 'A',
      explanation: '概率影响矩阵是定性风险分析工具，对风险做主观分级排序；定量分析则用EMV、蒙特卡洛、敏感性分析等计算数值影响。',
      ref: '依据：趋势报告§3.3（定性vs定量；2026上三批24题）；教材第11章 定性风险分析'
    },
    {
      id: 'B44', area: '规划过程组-风险', domain: '定量分析', type: 'single',
      stem: '下列工具中，属于定量风险分析方法的是？',
      options: [
        { label: 'A', text: '概率影响矩阵' },
        { label: 'B', text: '蒙特卡洛模拟与决策树（EMV）分析' },
        { label: 'C', text: '风险紧迫性排序' },
        { label: 'D', text: '风险数据质量评估' }
      ],
      answer: 'B',
      explanation: '蒙特卡洛模拟、决策树EMV、敏感性分析（龙卷风图）属于定量分析；概率影响矩阵、紧迫性排序、数据质量评估属于定性分析。',
      ref: '依据：趋势报告§3.3（EMV/蒙特卡洛/敏感性为定量）；教材第11章 定量风险分析'
    },
    {
      id: 'B45', area: '规划过程组-风险', domain: '定性分析vs定量分析', type: 'single',
      stem: '关于定性风险分析与定量风险分析，下列说法错误的是？',
      options: [
        { label: 'A', text: '定性分析评估风险概率和影响并排序，通常较快、较主观' },
        { label: 'B', text: '定量分析对整体项目风险的量化影响进行数值建模' },
        { label: 'C', text: '每个项目都必须对所有识别出的风险做完整的定量分析' },
        { label: 'D', text: '概率影响矩阵属于定性分析工具' }
      ],
      answer: 'C',
      explanation: '并非所有风险都需定量分析；通常只对定性分析中排序靠前、影响较大的关键风险做定量分析，按项目需要选择。',
      ref: '依据：趋势报告§3.3；教材第11章'
    },

    /* ============ 规划过程组-沟通（2题）B46-B47 ============ */
    {
      id: 'B46', area: '规划过程组-沟通', domain: '沟通模型要素', type: 'single',
      stem: '在基本沟通模型中，信息经编码由发送者传递，接收者解码后理解，再把反应传回发送者。这个传回反应的环节称为？',
      options: [
        { label: 'A', text: '噪声' },
        { label: 'B', text: '反馈' },
        { label: 'C', text: '编码' },
        { label: 'D', text: '媒介' }
      ],
      answer: 'B',
      explanation: '沟通模型包括发送者、编码、媒介（信息）、解码、接收者、反馈、噪声；反馈是接收者回传给发送者的反应，使沟通成为双向过程。',
      ref: '依据：趋势报告§3.5；教材第11章 沟通模型要素'
    },
    {
      id: 'B47', area: '规划过程组-沟通', domain: '沟通模型要素', type: 'single',
      stem: '在沟通过程中，导致信息被干扰、失真或误解的各种因素（语言障碍、环境噪音、语义差异）在沟通模型中称为？',
      options: [
        { label: 'A', text: '反馈' },
        { label: 'B', text: '噪声' },
        { label: 'C', text: '编码' },
        { label: 'D', text: '解码' }
      ],
      answer: 'B',
      explanation: '噪声是沟通中干扰信息传递和理解的因素，包括物理噪声、语义、文化、心理等；沟通管理需通过减少噪声、及时反馈提升有效性。',
      ref: '依据：趋势报告§3.5；教材第11章'
    },

    /* ============ 规划过程组-采购（2题）B48-B49 ============ */
    {
      id: 'B48', area: '规划过程组-采购', domain: '自制外购决策', type: 'single',
      stem: '某功能若自行开发，固定成本20万元、单位可变成本每件100元；若外购，每件150元（无固定成本）。就成本而言，自制与外购的盈亏平衡产量为？',
      options: [
        { label: 'A', text: '2000件' },
        { label: 'B', text: '4000件' },
        { label: 'C', text: '6000件' },
        { label: 'D', text: '10000件' }
      ],
      answer: 'B',
      explanation: '盈亏平衡点Q：自制成本=200000+100Q，外购成本=150Q。令200000+100Q=150Q → 50Q=200000 → Q=4000件。需求量大于4000件时自制更划算。',
      ref: '依据：趋势报告§3.8（自制外购=盈亏平衡分析；2026上三批28题）；教材第11章 自制外购决策'
    },
    {
      id: 'B49', area: '规划过程组-采购', domain: '自制外购决策', type: 'single',
      stem: '关于自制或外购分析，下列说法错误的是？',
      options: [
        { label: 'A', text: '自制外购分析是编制采购计划时常用的工具技术' },
        { label: 'B', text: '盈亏平衡分析可用于比较自制与外购的成本临界点' },
        { label: 'C', text: '只要外购价格低于自制，就一定应选择外购，无需考虑能力、保密、战略等因素' },
        { label: 'D', text: '核心技术或敏感数据出于保密考虑可能选择自制' }
      ],
      answer: 'C',
      explanation: '自制外购决策不仅比较价格，还要考虑组织能力、核心竞争力、数据保密、供应风险、长期战略；单纯价格低不等于一定外购。',
      ref: '依据：趋势报告§3.8；教材第11章'
    },

    /* ============ 规划过程组-干系人（1题）B50 ============ */
    {
      id: 'B50', area: '规划过程组-干系人', domain: '干系人参与评估矩阵', type: 'single',
      stem: '干系人参与评估矩阵将干系人参与水平分为五种状态。下列哪项不属于这五种状态？',
      options: [
        { label: 'A', text: '未知（Unaware）' },
        { label: 'B', text: '抵制（Resistant）' },
        { label: 'C', text: '中立（Neutral）' },
        { label: 'D', text: '盈利（Profitable）' }
      ],
      answer: 'D',
      explanation: '干系人参与五状态为未知、抵制（反对）、中立、支持、领导；“盈利”不是参与度状态。',
      ref: '依据：趋势报告§3.5（2026上三批30题；2026上一批次参与评估矩阵）；教材第11章 干系人参与评估矩阵'
    },

    /* ============ 规划过程组-资源（1题）B51 ============ */
    {
      id: 'B51', area: '规划过程组-资源', domain: '团队章程/资源日历', type: 'single',
      stem: '关于团队章程（Team Charter），下列说法正确的是？',
      options: [
        { label: 'A', text: '记录团队价值观、沟通指南、会议约定、决策标准等团队工作协议' },
        { label: 'B', text: '等同于项目合同' },
        { label: 'C', text: '在项目结束后才制定' },
        { label: 'D', text: '资源日历用于记录团队成员的绩效奖金' }
      ],
      answer: 'A',
      explanation: '团队章程记录团队价值观、沟通方式、会议指南、冲突处理、决策标准等运作协议；资源日历记录资源可用时段。',
      ref: '依据：趋势报告§3.9；教材第11章 团队章程/资源日历'
    },

    /* ============ 执行过程组（7题）B52-B58 ============ */
    {
      id: 'B52', area: '执行过程组', domain: '管理团队-冲突五策略', type: 'single',
      stem: '两名工程师因技术方案激烈争执，项目经理为尽快推进、暂时搁置分歧而各让一步。这种冲突解决策略是？',
      options: [
        { label: 'A', text: '合作/解决问题' },
        { label: 'B', text: '妥协/调解' },
        { label: 'C', text: '强制/命令' },
        { label: 'D', text: '撤退/回避' }
      ],
      answer: 'B',
      explanation: '妥协=双方各让一步、寻求都能接受但未必完美的方案；合作=面对面对找根因达成双赢；强制=用权力压服；撤退=回避分歧。',
      ref: '依据：趋势报告§3.9（冲突五策略；2026上三批21题）；教材第12章 管理团队'
    },
    {
      id: 'B53', area: '执行过程组', domain: '管理团队-冲突五策略', type: 'single',
      stem: '关于冲突解决策略，下列说法错误的是？',
      options: [
        { label: 'A', text: '合作/解决问题通常能带来双赢，是较理想的方式' },
        { label: 'B', text: '强制/命令短期见效快，但可能伤害团队关系' },
        { label: 'C', text: '撤退/回避能从根本上永久消除冲突' },
        { label: 'D', text: '妥协双方都有所让步，没有完全赢家' }
      ],
      answer: 'C',
      explanation: '撤退/回避只是暂时避开冲突，并未真正解决问题，冲突往往再次出现，不能从根本上消除。',
      ref: '依据：趋势报告§3.9；教材第12章'
    },
    {
      id: 'B54', area: '执行过程组', domain: '建设团队工具', type: 'single',
      stem: '项目经理组织团队集中培训、户外拓展和定期技术分享，以提升团队技能和凝聚力。这些属于建设团队的哪类工具？',
      options: [
        { label: 'A', text: '培训与团队建设活动' },
        { label: 'B', text: '风险审计' },
        { label: 'C', text: '采购审计' },
        { label: 'D', text: '挣值分析' }
      ],
      answer: 'A',
      explanation: '建设团队工具包括培训、团队建设活动（团建、拓展）、集中办公、认可与奖励等；风险/采购审计、挣值分析分别属于风险、采购、成本过程。',
      ref: '依据：趋势报告§3.9（建设团队）；教材第12章 建设团队'
    },
    {
      id: 'B55', area: '执行过程组', domain: '合同管理/供应商绩效评估', type: 'single',
      stem: '执行中，买方依据合同对卖方的交付质量、进度、配合度进行跟踪评价，并据此决定后续合作。这属于？',
      options: [
        { label: 'A', text: '实施采购/控制采购中的合同管理与供应商绩效评估' },
        { label: 'B', text: '识别风险' },
        { label: 'C', text: '制定项目章程' },
        { label: 'D', text: '排列活动顺序' }
      ],
      answer: 'A',
      explanation: '合同管理（控制采购）跟踪卖方履约、进行绩效测量与供应商绩效评估，处理变更与索赔，确保双方履行合同。',
      ref: '依据：趋势报告§3.8；教材第12章 实施采购/合同管理'
    },
    {
      id: 'B56', area: '执行过程组', domain: '管理干系人参与', type: 'single',
      stem: '关于管理干系人参与过程，下列说法错误的是？',
      options: [
        { label: 'A', text: '与干系人沟通协作、满足其需求并处理问题' },
        { label: 'B', text: '有助于提升干系人支持、降低反对' },
        { label: 'C', text: '只需在项目启动时做一次即可' },
        { label: 'D', text: '可能产出变更请求和问题日志更新' }
      ],
      answer: 'C',
      explanation: '管理干系人参与是贯穿项目始终的执行过程，需持续沟通、处理问题、引导参与，并非只在启动时做一次。',
      ref: '依据：趋势报告§3.5；教材第12章 管理干系人参与'
    },
    {
      id: 'B57', area: '执行过程组', domain: '实施风险应对-权变措施', type: 'single',
      stem: '项目中发生了一个此前未识别的风险，项目经理按预先准备的应急方案立即采取行动。这种对突发风险临时采取的应对称为？',
      options: [
        { label: 'A', text: '权变措施（Workaround）' },
        { label: 'B', text: '风险审计' },
        { label: 'C', text: '储备分析' },
        { label: 'D', text: '风险转移' }
      ],
      answer: 'A',
      explanation: '权变措施是针对事先未识别、未规划的突发风险临时采取的应对行动；已规划的应对叫应急/弹回计划。',
      ref: '依据：趋势报告§3.3；教材第12章 实施风险应对'
    },
    {
      id: 'B58', area: '执行过程组', domain: '指导与管理项目工作-工作绩效数据', type: 'single',
      stem: '执行过程中收集到的“已完成哪些可交付成果、实际花了多少成本、活动实际开始/结束时间”等原始观察和测量结果，称为？',
      options: [
        { label: 'A', text: '工作绩效数据' },
        { label: 'B', text: '工作绩效信息' },
        { label: 'C', text: '工作绩效报告' },
        { label: 'D', text: '项目章程' }
      ],
      answer: 'A',
      explanation: '工作绩效数据是执行中收集的原始数据；经与计划比较分析后形成工作绩效信息，再汇总成工作绩效报告。',
      ref: '依据：趋势报告§2.1执行过程组；教材第12章 指导与管理项目工作'
    },

    /* ============ 监控过程组（7题）B59-B65 ============ */
    {
      id: 'B59', area: '监控过程组', domain: '挣值预测（SPI/CPI趋势）', type: 'single',
      stem: '项目当前SPI=1.08、CPI=0.95。按典型偏差趋势外推，下列判断正确的是？',
      options: [
        { label: 'A', text: '进度提前、成本超支' },
        { label: 'B', text: '进度滞后、成本节约' },
        { label: 'C', text: '进度提前、成本节约' },
        { label: 'D', text: '进度滞后、成本超支' }
      ],
      answer: 'A',
      explanation: 'SPI=EV/PV，SPI>1表示进度提前；CPI=EV/AC，CPI<1表示成本超支。故进度提前但成本超支。',
      ref: '依据：趋势报告§3.1（SPI/CPI判断）；教材第13章 控制成本'
    },
    {
      id: 'B60', area: '监控过程组', domain: '绩效审查/偏差分析', type: 'single',
      stem: '项目组将实际进度、实际成本与基准比较，分析偏差大小、原因并预测完工绩效。这种监控技术称为？',
      options: [
        { label: 'A', text: '绩效审查/偏差分析' },
        { label: 'B', text: '德尔菲法' },
        { label: 'C', text: '头脑风暴' },
        { label: 'D', text: '关键路径法' }
      ],
      answer: 'A',
      explanation: '绩效审查（偏差分析、趋势分析、挣值分析）把实际绩效与基准比较，评估偏差并预测未来；德尔菲/头脑风暴是收集/专家判断技术。',
      ref: '依据：趋势报告§3.1；教材第13章 监控项目工作'
    },
    {
      id: 'B61', area: '监控过程组', domain: '控制质量-检查测试', type: 'single',
      stem: '控制质量过程中，通过对可交付成果进行检验、评审、测试，判断其是否符合需求和质量标准。这种工具技术是？',
      options: [
        { label: 'A', text: '检查（检验/测试）' },
        { label: 'B', text: '蒙特卡洛分析' },
        { label: 'C', text: '自制外购分析' },
        { label: 'D', text: '沟通渠道分析' }
      ],
      answer: 'A',
      explanation: '检查（Inspection，含测试、评审、走查）是控制质量的工具，通过测量/检验判断可交付成果是否符合要求。',
      ref: '依据：趋势报告§3.6；教材第13章 控制质量'
    },
    {
      id: 'B62', area: '监控过程组', domain: '范围确认与验收', type: 'single',
      stem: '关于确认范围（Validate Scope），下列说法正确的是？',
      options: [
        { label: 'A', text: '由内部质量团队检查产品正确性的过程' },
        { label: 'B', text: '客户/发起人正式验收已完成可交付成果的过程' },
        { label: 'C', text: '在项目收尾时只做一次' },
        { label: 'D', text: '等同于控制质量' }
      ],
      answer: 'B',
      explanation: '确认范围是客户/发起人对可交付成果正式验收的过程（关注验收、客户视角）；控制质量是内部检查正确性（关注质量）；确认范围通常在控制质量之后。',
      ref: '依据：趋势报告§3.6（确认范围vs控制质量；2024下真题）；教材第13章 确认范围'
    },
    {
      id: 'B63', area: '监控过程组', domain: '风险审计', type: 'single',
      stem: '定期审查风险应对措施是否有效、风险管理过程是否得当，并总结经验教训。这种风险监控工具是？',
      options: [
        { label: 'A', text: '风险审计' },
        { label: 'B', text: '挣值分析' },
        { label: 'C', text: '帕累托分析' },
        { label: 'D', text: '关键路径分析' }
      ],
      answer: 'A',
      explanation: '风险审计（Risk Audit）审查风险应对和风险管理过程的有效性，总结经验；挣值分析用于成本进度绩效。',
      ref: '依据：趋势报告§3.3；教材第13章 监督风险'
    },
    {
      id: 'B64', area: '监控过程组', domain: '控制采购-采购审计', type: 'single',
      stem: '采购收尾时，对从规划采购管理到控制采购的整个过程进行结构化审查，总结得失与经验教训。这称为？',
      options: [
        { label: 'A', text: '采购审计' },
        { label: 'B', text: '风险审计' },
        { label: 'C', text: '质量审计' },
        { label: 'D', text: '配置审计' }
      ],
      answer: 'A',
      explanation: '采购审计是对采购过程的系统结构化审查，识别成功与不足，供本项目及未来项目借鉴。',
      ref: '依据：趋势报告§3.8；教材第13章 控制采购'
    },
    {
      id: 'B65', area: '监控过程组', domain: '变更请求处理', type: 'single',
      stem: '关于项目变更请求的处理，下列说法错误的是？',
      options: [
        { label: 'A', text: '任何干系人都可以提出变更请求' },
        { label: 'B', text: '所有基准变更都应通过整体变更控制流程、经CCB审批' },
        { label: 'C', text: '紧急变更可以事后补办变更手续' },
        { label: 'D', text: '变更请求一经提出即可立即执行，无需评估影响和审批' }
      ],
      answer: 'D',
      explanation: '变更请求必须先评估影响、按整体变更控制流程提交CCB审批，批准后才能执行并更新基准；不能提出即执行。',
      ref: '依据：趋势报告§3.4（变更流程/CCB职权）；教材第13章 实施整体变更控制'
    },

    /* ============ 组织保障（2题）B66-B67 ============ */
    {
      id: 'B66', area: '组织保障', domain: '整体变更控制流程与CCB职权', type: 'single',
      stem: '关于变更控制委员会（CCB）的职权，下列说法正确的是？',
      options: [
        { label: 'A', text: 'CCB负责审批变更请求，但不直接执行变更' },
        { label: 'B', text: 'CCB既审批变更又负责亲自执行所有变更' },
        { label: 'C', text: 'CCB只能由公司高管组成，项目经理不能参与' },
        { label: 'D', text: 'CCB可随意修改项目基准而不记录' }
      ],
      answer: 'A',
      explanation: 'CCB是正式的变更审批机构，负责审批/否决变更，但不负责执行变更；变更批准后由项目团队执行并更新基准、归档。',
      ref: '依据：趋势报告§3.4（CCB只审批不执行）；教材第14章 整体变更控制'
    },
    {
      id: 'B67', area: '组织保障', domain: '整体变更控制流程与CCB职权', type: 'single',
      stem: '正确的整体变更控制流程通常是？',
      options: [
        { label: 'A', text: '提出变更→评估影响→CCB审批→更新基准→执行变更→跟踪归档' },
        { label: 'B', text: '执行变更→提出变更→审批→归档' },
        { label: 'C', text: 'CCB审批→提出变更→执行→评估影响' },
        { label: 'D', text: '提出变更→直接执行→事后补审批' }
      ],
      answer: 'A',
      explanation: '标准流程：书面变更请求→影响分析→CCB审批→更新项目管理计划/基准→执行变更→跟踪验证→记录归档。',
      ref: '依据：趋势报告§3.4（2026上二批次变更流程默写）；教材第14章'
    },

    /* ============ 监理（2题）B68-B69 ============ */
    {
      id: 'B68', area: '监理', domain: '监理单位职责与监理合同', type: 'single',
      stem: '关于信息系统工程监理单位的职责，下列说法错误的是？',
      options: [
        { label: 'A', text: '受建设单位委托，对工程质量、进度、投资等进行监督控制' },
        { label: 'B', text: '应公正、独立、自主地开展监理工作' },
        { label: 'C', text: '可直接替代承建单位进行系统开发' },
        { label: 'D', text: '需协调建设单位与承建单位之间的关系' }
      ],
      answer: 'C',
      explanation: '监理是第三方监督方，不直接从事承建开发，不能替代承建单位实施工程；它“三控两管一协调”，保持公正独立。',
      ref: '依据：趋势报告§3.10（监理三控两管一协调）；教材第15章 监理单位职责'
    },
    {
      id: 'B69', area: '监理', domain: '监理单位职责与监理合同', type: 'single',
      stem: '关于监理合同，下列说法正确的是？',
      options: [
        { label: 'A', text: '由建设单位与监理单位签订' },
        { label: 'B', text: '由承建单位与监理单位签订' },
        { label: 'C', text: '签订后监理单位可同时与承建单位存在利益关系而不回避' },
        { label: 'D', text: '监理服务范围与内容无需在合同中明确' }
      ],
      answer: 'A',
      explanation: '监理单位受建设单位（业主）委托并与其签订监理合同，依据合同开展监理；监理应保持独立性，不得与被监理的承建单位有利益关系。',
      ref: '依据：趋势报告§3.10；教材第15章 监理合同'
    },

    /* ============ 法律法规（1题）B70 ============ */
    {
      id: 'B70', area: '法律法规', domain: '招标投标法', type: 'single',
      stem: '关于招标投标，下列说法错误的是？',
      options: [
        { label: 'A', text: '招标分为公开招标和邀请招标' },
        { label: 'B', text: '依法必须招标的项目，其招标投标活动不受地区或部门限制' },
        { label: 'C', text: '自招标文件开始发出之日起至投标截止之日止，最短不得少于二十日' },
        { label: 'D', text: '开标可在招标人任意指定的、未事先通知的时间和地点进行' }
      ],
      answer: 'D',
      explanation: '开标应在招标文件确定的提交投标文件截止时间的同一时间、预先确定的地点公开进行；不能随意指定未通知的时间地点。',
      ref: '依据：趋势报告§2.1法律法规；教材第16章 招标投标法'
    },

    /* ============ 职业道德（1题）B71 ============ */
    {
      id: 'B71', area: '职业道德', domain: '对客户/公众的责任', type: 'single',
      stem: '关于系统集成项目管理工程师的职业道德，下列做法错误的是？',
      options: [
        { label: 'A', text: '对客户信息和商业秘密严格保密' },
        { label: 'B', text: '在专业胜任能力范围内承接任务，不夸大能力' },
        { label: 'C', text: '为拿到项目，向客户透露竞争对手的保密信息' },
        { label: 'D', text: '如实向客户报告项目风险和问题' }
      ],
      answer: 'C',
      explanation: '职业道德要求保密、诚实、胜任、避免利益冲突；向客户泄露任何第三方（含竞争对手）的保密信息违反保密义务与诚信原则。',
      ref: '依据：趋势报告§2.1职业道德；教材第17章 职业道德'
    },

    /* ============ 英文术语（4题）B72-B75 ============ */
    {
      id: 'B72', area: '英文术语', domain: 'SPI', type: 'single',
      stem: 'In project management, what does "SPI" (Schedule Performance Index) measure?',
      options: [
        { label: 'A', text: 'Cost efficiency of the project' },
        { label: 'B', text: 'Schedule efficiency, i.e. how efficiently the project is progressing vs plan' },
        { label: 'C', text: 'The number of critical activities' },
        { label: 'D', text: 'The total project budget' }
      ],
      answer: 'B',
      explanation: 'SPI=EV/PV measures schedule efficiency; SPI>1 means ahead of schedule. Cost efficiency is measured by CPI.',
      ref: '依据：趋势报告§3.1；PMBOK挣值术语'
    },
    {
      id: 'B73', area: '英文术语', domain: 'EAC', type: 'single',
      stem: '"EAC" in earned value management refers to:',
      options: [
        { label: 'A', text: 'The planned value at the end of the project' },
        { label: 'B', text: 'The estimated total cost at project completion, based on current performance' },
        { label: 'C', text: 'The actual cost incurred so far' },
        { label: 'D', text: 'The cost variance at completion' }
      ],
      answer: 'B',
      explanation: 'EAC (Estimate At Completion) is the expected total cost when the project is finished, e.g. typical EAC=BAC/CPI; ETC is the remaining cost to complete.',
      ref: '依据：趋势报告§3.1；PMBOK挣值术语'
    },
    {
      id: 'B74', area: '英文术语', domain: 'PDM', type: 'single',
      stem: '"PDM" (Precedence Diagramming Method) in schedule network analysis is:',
      options: [
        { label: 'A', text: 'A way to arrange activities as nodes with logical dependency arrows' },
        { label: 'B', text: 'A cost estimation technique' },
        { label: 'C', text: 'A quality control chart' },
        { label: 'D', text: 'A risk identification checklist' }
      ],
      answer: 'A',
      explanation: 'PDM represents activities as nodes (boxes) connected by dependency arrows (FS/FF/SS/SF) to build the schedule network diagram.',
      ref: '依据：趋势报告§3.2；PMBOK进度网络术语'
    },
    {
      id: 'B75', area: '英文术语', domain: 'ITSS', type: 'single',
      stem: '"ITSS" in information technology service refers to:',
      options: [
        { label: 'A', text: 'Information Technology Service Standards (a set of IT service standards)' },
        { label: 'B', text: 'Internet Transaction Security System' },
        { label: 'C', text: 'Integrated Testing and Support Service' },
        { label: 'D', text: 'International Team for Software Security' }
      ],
      answer: 'A',
      explanation: 'ITSS = Information Technology Service Standards (信息技术服务标准), covering people/process/technology/resources and the service lifecycle.',
      ref: '依据：趋势报告§3.10；第3章 ITSS'
    }
  ],

  /* ==================== 下午案例大题（4题，共75分） ==================== */
  afternoon: [
    /* ---------- BC1 关键路径+进度压缩（20分） ---------- */
    {
      id: 'BC1',
      title: '试题一（20分）',
      area: '进度与成本管理',
      scenario: '【说明】某市政务服务“一网通办”信息系统集成项目，建设单位要求在今年年底前上线。项目经理王工根据活动清单编制了进度计划，各活动及其紧前活动、正常历时如下表所示（单位：天）：\n' +
        '活动A（需求调研）：紧前无，历时3天；\n' +
        '活动B（环境搭建）：紧前无，历时4天；\n' +
        '活动C（概要设计）：紧前A，历时2天；\n' +
        '活动D（设备部署）：紧前B，历时5天；\n' +
        '活动E（联调准备）：紧前C、D，历时3天；\n' +
        '活动F（接口开发）：紧前C，历时6天；\n' +
        '活动G（上线准备）：紧前E、F，历时2天。\n' +
        '项目进行中，建设单位提出希望总工期比原计划再压缩2天。各关键活动可压缩的最短历时及赶工增加成本（斜率）如下表：活动B正常4天、最短可压到3天、赶工斜率2500元/天；活动D正常5天、最短可压到3天、斜率2000元/天；活动E正常3天、最短可压到2天、斜率3000元/天；活动G正常2天、最短可压到1天、斜率1500元/天。',
      questions: [
        {
          no: '问题1（6分）',
          type: 'calc',
          q: '列出该项目从开始到结束的所有路径，指出关键路径并计算原计划总工期。',
          options: null,
          answer: '各路径及长度：① A→C→E→G = 3+2+3+2 = 10天；② A→C→F→G = 3+2+6+2 = 13天；③ B→D→E→G = 4+5+3+2 = 14天。关键路径为最长路径 B→D→E→G，原计划总工期 = 14天。（路径3条各1分，关键路径2分，总工期1分）',
          points: 6
        },
        {
          no: '问题2（6分）',
          type: 'calc',
          q: '计算活动C和活动F的总时差与自由时差（写出ES/EF/LS/LF或计算过程）。',
          options: null,
          answer: '正推：A(ES0,EF3)、B(0,4)、C(3,5)、D(4,9)、E(max(5,9)=9,12)、F(5,11)、G(max(12,11)=12,14)。反推（项目结束14）：G(LF14,LS12)、E(LF12,LS9)、F(LF12,LS6)、D(LF9,LS4)、C(LF=min(LS_E=9,LS_F=6)=6,LS4)。\n活动C：总时差 TF=LS-ES=4-3=1天；自由时差 FF=min(紧后ES)-EF=min(ES_E=9,ES_F=5)-5=5-5=0天。\n活动F：总时差 TF=LS-ES=6-5=1天；自由时差 FF=min(紧后ES)-EF=ES_G=12-EF_F=11=1天。\n（C的TF、FF各1.5分；F的TF、FF各1.5分）',
          points: 6
        },
        {
          no: '问题3（8分）',
          type: 'calc',
          q: '建设单位要求将总工期压缩至12天。请按“优先压缩关键路径上赶工斜率最低活动”的原则，给出最优压缩方案、分步说明，并计算所需增加的赶工总成本。',
          options: null,
          answer: '需压缩14→12共2天。\n第1步：关键路径B→D→E→G上各活动斜率为B=2500、D=2000、E=3000、G=1500，最低为G（1500元/天）。压缩G 2天→1天，增加成本1500元，总工期变为13天。\n第2步：G已压到最短不能再压；剩余关键路径上最低斜率为D（2000元/天）。压缩D 5天→4天，增加成本2000元，总工期变为12天。\n最优方案：G压缩1天 + D压缩1天；赶工增加总成本 = 1500+2000 = 3500元。\n说明：压缩后关键路径变为两条——B→D→E→G = 4+4+3+1=12天，且A→C→F→G = 3+2+6+1=12天，二者同为关键路径。（方案选择4分，分步2分，总成本2分）',
          points: 8
        }
      ]
    },

    /* ---------- BC2 质量管理（19分） ---------- */
    {
      id: 'BC2',
      title: '试题二（19分）',
      area: '质量管理',
      scenario: '【说明】某企业资源管理信息系统集成项目在质量核算中统计到以下一年期质量相关支出：① 质量人员培训 3万元；② 质量流程与质量计划编制 2万元；③ 对供应商的质量审核 1.5万元；④ 测试工具与检测费用 4万元；⑤ 阶段评审与代码走查 1.8万元；⑥ 验收测试 2.2万元；⑦ 上线前返工 2.5万元；⑧ 内部缺陷排查 1.2万元；⑨ 因缺陷导致停工损失 0.8万元；⑩ 客户投诉处理 1.5万元；⑪ 现场维修 1万元；⑫ 保修期内免费保修 0.5万元。项目组在质量改进中还遇到四个场景：(a) 要找出导致系统响应缓慢的根本原因，拟从“人机料法环测”逐层分析；(b) 统计各模块缺陷数量占比，想先解决占比最高的少数关键模块；(c) 监控每周缺陷率，判断是否超出控制上下限、是否出现连续异常趋势；(d) 想分析“测试投入时长”与“发现缺陷数”之间是否存在相关关系。',
      questions: [
        {
          no: '问题1（8分）',
          type: 'calc',
          q: '将上述12项支出按预防成本、评估成本、内部失败成本、外部失败成本分类汇总，并计算一致性成本与非一致性成本各为多少。',
          options: null,
          answer: '预防成本 = ①+②+③ = 3+2+1.5 = 6.5万元；评估成本 = ④+⑤+⑥ = 4+1.8+2.2 = 8.0万元；内部失败成本 = ⑦+⑧+⑨ = 2.5+1.2+0.8 = 4.5万元；外部失败成本 = ⑩+⑪+⑫ = 1.5+1+0.5 = 3.0万元。一致性成本（预防+评估）= 6.5+8.0 = 14.5万元；非一致性成本（内部失败+外部失败）= 4.5+3.0 = 7.5万元。（四类各1.5分，一致性、非一致性各1分）',
          points: 8
        },
        {
          no: '问题2（6分）',
          type: 'short',
          q: '为场景(a)(b)(c)(d)分别选择最合适的质量管理老七种工具（从因果图/鱼骨图、帕累托图、控制图、散点图中选择）。',
          options: null,
          answer: '(a) 因果图（鱼骨图）——逐层追溯根本原因；(b) 帕累托图——按频数排序找关键少数；(c) 控制图——判断过程是否稳定受控、是否超出控制限；(d) 散点图——分析两个变量（测试时长与缺陷数）的相关关系。（每个1.5分）',
          points: 6
        },
        {
          no: '问题3（5分）',
          type: 'judge',
          q: '判断下列说法是否正确（√/×），并简要说明理由：(1) 返工和保修费用都属于内部失败成本。(2) 帕累托图基于“关键的少数和次要的多数”原则。(3) 只要数据点落在控制图控制限之内，就说明过程一定稳定受控。',
          options: null,
          answer: '(1) ×。返工属于内部失败成本，但保修期内免费保修是交付给客户后发生的，属于外部失败成本。(2) √。帕累托图正是基于80/20原则，聚焦少数关键问题。(3) ×。控制图判稳不仅看是否超出控制限，还要看是否出现七点连续上升/下降、连续居中/偏侧等异常趋势规则。（每小题判断1分、理由约0.7分）',
          points: 5
        }
      ]
    },

    /* ---------- BC3 范围管理（18分） ---------- */
    {
      id: 'BC3',
      title: '试题三（18分）',
      area: '范围管理',
      scenario: '【说明】某高校智慧校园信息系统集成项目进入范围规划阶段。项目经理李工带领团队编制WBS，其做法如下：为加快进度，李工直接把工作分解到“写代码”“开周会”“部署服务器”等具体活动；其中“统一身份认证”工作包同时分给两名开发人员，两人各按100%工作量认领；分解完成后，李工估算已分解部分约占项目总工作量的70%，其余30%先“心里有数”、暂不列入WBS；WBS词典由一名程序员随手记录，内容只写了各工作包的名字。在后续范围监控中，建设单位多次提出小变更，团队有时直接改了可交付成果再补手续。项目组还需明确“控制范围”过程的输入，并理清“确认范围”与“控制质量”的关系。',
      questions: [
        {
          no: '问题1（7分）',
          type: 'find',
          q: '请指出李工在WBS分解中的4处错误，并分别给出正确做法。',
          options: null,
          answer: '① 错误：把WBS分解到“写代码/开周会”等具体活动。正确：WBS应按可交付成果（产品/工作组件）分解，而不是按活动分解，活动应在进度管理中另行安排。\n② 错误：“统一身份认证”工作包分给两人各按100%认领，责任重叠。正确：每个工作包应有唯一明确的责任人，避免多头负责。\n③ 错误：只分解了约70%工作量，其余30%不列入WBS。正确：WBS应遵循100%原则，项目全部范围/工作都必须分解纳入，不能遗漏。\n④ 错误：WBS词典只记录工作包名字。正确：WBS词典应详细描述每个工作包的工作内容、交付物、责任人、进度里程碑、成本估算、质量要求等。（每处错误与正确做法各约0.9分）',
          points: 7
        },
        {
          no: '问题2（3分）',
          type: 'multi',
          q: '下列7项中，选出属于“控制范围”过程输入的3项（7选3）。A. 项目管理计划（含范围基准）；B. 工作绩效数据；C. 经验教训登记册；D. 已批准的变更请求；E. 质量核对单；F. 采购协议；G. 已归档的采购关闭文件。',
          options: [
            { label: 'A', text: '项目管理计划（含范围基准）' },
            { label: 'B', text: '工作绩效数据' },
            { label: 'C', text: '经验教训登记册' },
            { label: 'D', text: '已批准的变更请求' },
            { label: 'E', text: '质量核对单' },
            { label: 'F', text: '采购协议' },
            { label: 'G', text: '已归档的采购关闭文件' }
          ],
          answer: 'ABC',
          points: 3
        },
        {
          no: '问题3（8分）',
          type: 'short',
          q: '(1) 简答：确认范围与控制质量有何区别？通常先后关系如何？(2) 判断下列说法（√/×）并说明理由：① 确认范围一般在控制质量之后进行，由客户或发起人对可交付成果正式验收。② 只要可交付成果通过了内部控制质量检查，就一定能通过客户的确认范围验收。',
          options: null,
          answer: '(1) 区别：确认范围是客户/发起人对已完成可交付成果的正式验收，关注“是否接受/验收”，是外部、客户视角；控制质量是内部检查可交付成果是否正确、是否符合质量要求，关注“正确性/质量”。先后关系：通常先做控制质量（内部确认质量合格），再由客户做确认范围验收。（4分）\n(2) ① √。确认范围由客户/发起人验收，一般在控制质量之后。② ×。内部质量合格不代表客户一定验收；确认范围还要对照需求/范围基准看客户是否接受，质量合格但范围不符或客户不认可时仍可能被退回。（每小题2分）',
          points: 8
        }
      ]
    },

    /* ---------- BC4 采购与合同（18分） ---------- */
    {
      id: 'BC4',
      title: '试题四（18分）',
      area: '采购与合同',
      scenario: '【说明】某政务云平台建设项目，建设单位通过招标选定承建方甲公司，并签订了成本加激励费用（CPIF）合同。合同约定：目标成本100万元，目标费用（目标利润）10万元，成本节约/超支由建设单位与承建方按70:30分担。项目结束结算时，甲公司实际发生成本90万元。在采购过程中，建设单位还遇到若干合同类型选择问题：① 需求非常明确、范围固定，希望甲方成本风险最低；② 需求不完全明确，按实际成本结算并支付一笔固定费用；③ 希望通过约定分担比例激励承建方主动控制成本；④ 一次性临时、工作量难以事先确定，按工时和材料单价据实结算。项目收尾时，建设单位还需理清合同收尾与行政收尾的顺序与关系。',
      questions: [
        {
          no: '问题1（7分）',
          type: 'calc',
          q: '按CPIF合同约定，计算本次结算的成本节约额、承建方分享的激励费用、承建方最终应得费用，以及建设单位实际支付总额。',
          options: null,
          answer: '成本节约 = 目标成本 - 实际成本 = 100 - 90 = 10万元；承建方按30%分享节约 = 10 × 30% = 3万元；承建方最终费用 = 目标费用 + 分享节约 = 10 + 3 = 13万元；建设单位实际支付 = 实际成本 + 最终费用 = 90 + 13 = 103万元。（每项约1.75分）',
          points: 7
        },
        {
          no: '问题2（5分）',
          type: 'short',
          q: '为下列4种采购场景选择最合适的合同类型（从固定总价FFP、成本加固定费用CPFF、成本加激励费用CPIF、工料合同T&M中选择）。',
          options: null,
          answer: '① 需求明确、范围固定、甲方风险最低 → 固定总价合同（FFP）；② 需求不完全明确、按实际成本结算并付固定费用 → 成本加固定费用合同（CPFF）；③ 希望约定分担比例激励承建方控制成本 → 成本加激励费用合同（CPIF）；④ 临时、工作量难定、按工时材料单价结算 → 工料合同（T&M）。（每个约1.25分）',
          points: 5
        },
        {
          no: '问题3（6分）',
          type: 'judge',
          q: '(1) 简答：合同收尾一般应包括哪些主要工作？(2) 判断下列说法（√/×）并说明理由：① 合同收尾在每个合同结束时进行，行政收尾在项目或阶段结束时进行。② 合同收尾通常在行政收尾之前完成，先完成合同验收结算再释放项目资源。③ 一个项目无论签订了几份合同，都只进行一次合同收尾。',
          options: null,
          answer: '(1) 合同收尾主要工作：验证并验收卖方可交付成果→正式验收与签发验收文件→按合同结算付款→处理未决索赔→更新记录并归档→进行采购审计总结经验教训。（3分）\n(2) ① √。合同收尾针对每份合同，行政收尾针对整个项目/阶段。② √。通常先完成合同验收结算（合同收尾），再做项目层面的行政收尾、释放资源。③ ×。项目签几份合同就进行几次合同收尾，行政收尾通常整个项目只做一次。（每小题1分，共3分）',
          points: 6
        }
      ]
    }
  ]
};
