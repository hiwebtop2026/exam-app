/*
 * 机考模拟卷 C（mock_exam_paper C）
 * 生成日期：2026-10-18
 * 依据文档：docs/mock_exam_spec.md（§1数据结构、§3配比与考点轮换表“卷C”列、§4案例蓝图C列）、
 *           docs/research_trends.md（命题趋势与高频考点，§3.x）
 * 出题说明：75道单选题（含4道英文术语题 PV/ETC/CPIF/Scrum）+ 4道案例大题（CC1-CC4，共75分）。
 *           严格按规格§3表“卷C考点”列出题，不串用A/B列考点。
 * 配比说明（按规格§3勘误统一口径）：信息系统架构=4题（应用架构2题+安全架构2题）、项目管理概论=4题
 * （OPA 1题+EEF 1题+PMO 1题+OPA/EEF综合辨析1题）；其余区严格按§3表“卷C考点”列执行。
 * 修订记录：2026-10-18 初版；同日按勘误将信息系统架构5→4、项目管理概论3→4并重排 C01-C75。
 */
window.mockExamPapers = window.mockExamPapers || {};
window.mockExamPapers['C'] = {
  id: 'C',
  name: '机考模拟卷三',
  badge: '2026下半年 · 第3版教程 · 冲刺模拟',
  morning: [
    {
      id: 'C01',
      area: '信息化发展',
      domain: '信息化发展历程/内涵',
      type: 'single',
      stem: '我国信息化发展强调“以信息化带动工业化、以工业化促进信息化”，走新型工业化道路。下列关于信息化内涵的理解，正确的是？',
      options: [
        {label: 'A', text: '信息化就是计算机设备在各行各业的普及'},
        {label: 'B', text: '信息化是充分利用信息技术、开发利用信息资源、促进信息交流和知识共享，推动经济社会转型的历史过程'},
        {label: 'C', text: '信息化的核心只是建设高速网络基础设施'},
        {label: 'D', text: '信息化只发生在经济领域，与社会治理无关'}
      ],
      answer: 'B',
      explanation: '信息化是以信息应用为龙头、信息资源为核心，开发利用信息资源、促进信息交流与知识共享，推动经济社会发展转型的过程。A、C只看到技术/设备的表层；D把信息化局限于经济领域，错误。',
      ref: '依据：趋势报告§3.10（国家信息化六要素）；教材第1章 信息化发展'
    },
    {
      id: 'C02',
      area: '信息化发展',
      domain: '两化融合',
      type: 'single',
      stem: '某装备制造企业把工业互联网平台嵌入生产线，实现研发设计、生产制造、经营管理的数字化协同。这种“信息化与工业化深度融合（两化融合）”的核心是？',
      options: [
        {label: 'A', text: '用信息技术替换全部一线生产设备'},
        {label: 'B', text: '以信息化带动工业化、以工业化促进信息化，走新型工业化道路'},
        {label: 'C', text: '在工厂内部单独建设一张办公局域网'},
        {label: 'D', text: '把产品说明书从纸质改成电子版'}
      ],
      answer: 'B',
      explanation: '两化融合的核心是以信息化带动工业化、以工业化促进信息化，走技术含量高、经济效益好的新型工业化道路；A、C、D均为局部表层做法，未触及融合本质。',
      ref: '依据：趋势报告§3.10；教材第1章 信息化发展（两化融合）'
    },
    {
      id: 'C03',
      area: '信息技术发展',
      domain: '人工智能/机器学习基本概念',
      type: 'single',
      stem: '关于人工智能（AI）与机器学习（ML），下列说法正确的是？',
      options: [
        {label: 'A', text: '机器学习是人工智能的一个子集，深度学习又是机器学习的一个子集'},
        {label: 'B', text: '人工智能就是机器学习的全部应用'},
        {label: 'C', text: '机器学习模型一旦训练完成就不再需要任何数据'},
        {label: 'D', text: '监督学习不需要任何标注数据'}
      ],
      answer: 'A',
      explanation: '三者是包含关系：人工智能⊇机器学习⊇深度学习。监督学习需要带标签的训练数据；训练后的模型仍需数据持续迭代优化。',
      ref: '依据：趋势报告§3.10（新一代信息技术）；教材第2章 信息技术发展'
    },
    {
      id: 'C04',
      area: '信息技术发展',
      domain: 'VR/元宇宙等新一代技术',
      type: 'single',
      stem: '某文博项目用VR技术复原古代宫殿，观众佩戴头显可沉浸式漫游。关于VR/元宇宙等新一代信息技术，下列说法错误的是？',
      options: [
        {label: 'A', text: 'VR利用计算机生成模拟环境，使用户获得沉浸式体验'},
        {label: 'B', text: 'AR（增强现实）把虚拟信息叠加到真实场景之上'},
        {label: 'C', text: '元宇宙是完全独立于现实世界、与现实世界无任何映射关系的虚拟空间'},
        {label: 'D', text: '数字孪生通过数字模型对物理实体进行仿真与映射'}
      ],
      answer: 'C',
      explanation: '元宇宙是与现实世界相互映射、交互的虚拟空间，并非与现实完全割裂；数字孪生正是物理实体的数字化映射。',
      ref: '依据：趋势报告§3.10（VR/区块链/新一代技术）；教材第2章'
    },
    {
      id: 'C05',
      area: '信息技术服务ITSS',
      domain: 'ITSS运维服务/服务分类',
      type: 'single',
      stem: '某IT服务企业按ITSS体系向客户交付服务。下列关于ITSS运维服务分类的说法，正确的是？',
      options: [
        {label: 'A', text: 'ITSS运维服务只包括桌面支持一种形式'},
        {label: 'B', text: 'ITSS运维服务可按提供方式分为现场运维、远程运维，也可按对象分为桌面、网络、主机等运维类别'},
        {label: 'C', text: '运维服务交付后即与客户无关，不需要持续改进'},
        {label: 'D', text: 'ITSS只规范软件研发过程，与运维服务无关'}
      ],
      answer: 'B',
      explanation: 'ITSS运维服务有多种分类与交付方式，且服务交付不是一锤子买卖，需持续改进；ITSS覆盖人员/过程/技术/资源四要素，贯穿服务全生命周期。',
      ref: '依据：趋势报告§3.10（ITSS四要素/服务生命周期）；教材第3章 信息技术服务'
    },
    {
      id: 'C06',
      area: '信息技术服务ITSS',
      domain: 'ITSS运维服务/服务分类',
      type: 'single',
      stem: 'ITSS运维服务的核心价值是？',
      options: [
        {label: 'A', text: '把信息系统尽快开发上线'},
        {label: 'B', text: '维持信息系统稳定运行，并在事件发生后尽快恢复服务、控制影响'},
        {label: 'C', text: '替代客户做所有业务决策'},
        {label: 'D', text: '只负责硬件设备的搬运与安装'}
      ],
      answer: 'B',
      explanation: '运维服务面向“已上线运行”的系统，以稳定运行、事件恢复、服务连续性为目标；A属开发过程，C、D对运维职责的理解片面。',
      ref: '依据：教材第3章 信息技术服务（ITSS运维服务）；趋势报告§3.10'
    },
    {
      id: 'C07',
      area: '信息技术服务ITSS',
      domain: 'IT服务持续改进（PDCA）',
      type: 'single',
      stem: '某服务团队用PDCA循环开展IT服务持续改进。PDCA四个阶段的正确顺序是？',
      options: [
        {label: 'A', text: '计划→执行→检查→处置（Act）'},
        {label: 'B', text: '执行→计划→检查→处置'},
        {label: 'C', text: '检查→计划→执行→处置'},
        {label: 'D', text: '计划→检查→执行→处置'}
      ],
      answer: 'A',
      explanation: 'PDCA=Plan（计划）→Do（执行）→Check（检查）→Act（处置/改进），循环往复、螺旋上升，是IT服务持续改进的基本方法。',
      ref: '依据：趋势报告§3.10；教材第3章 IT服务持续改进'
    },
    {
      id: 'C08',
      area: '信息技术服务ITSS',
      domain: 'IT服务持续改进（PDCA）',
      type: 'single',
      stem: '关于PDCA持续改进循环，下列说法错误的是？',
      options: [
        {label: 'A', text: 'PDCA每循环一次，服务质量就提升一步，呈螺旋上升'},
        {label: 'B', text: '处置（Act）阶段把成功经验标准化、固化为制度'},
        {label: 'C', text: 'PDCA循环完成一轮后即可停止，不需要再次循环'},
        {label: 'D', text: '检查阶段对照计划评估执行结果与目标的偏差'}
      ],
      answer: 'C',
      explanation: 'PDCA是永不停歇的循环，处置阶段既固化成功经验、也把未解决问题带入下一循环，并非一轮即止。',
      ref: '依据：教材第3章（PDCA持续改进）；趋势报告§3.10'
    },
    {
      id: 'C09',
      area: '信息系统架构',
      domain: '应用架构',
      type: 'single',
      stem: '某企业梳理架构时把业务系统划分为核心交易类、数据分析类、办公协同类等。应用架构主要描述的是？',
      options: [
        {label: 'A', text: '服务器、网络、存储等基础设施的物理部署'},
        {label: 'B', text: '业务系统的组成、布局及它们之间的交互关系，支撑业务能力落地'},
        {label: 'C', text: '机房电力与空调系统的布置'},
        {label: 'D', text: '企业战略与组织架构图'}
      ],
      answer: 'B',
      explanation: '企业架构自顶向下为业务架构→应用架构→技术架构→数据架构。应用架构描述应用系统的组成与交互；A属技术/基础设施层，C是机房物理环境，D是业务/组织范畴。',
      ref: '依据：趋势报告§3.10（信息系统架构五层）；教材第4章 信息系统架构'
    },
    {
      id: 'C10',
      area: '信息系统架构',
      domain: '应用架构',
      type: 'single',
      stem: '某银行把原本庞大的单体应用拆分为用户、账户、支付等多个可独立部署的服务单元。从应用架构角度看，这样做的主要目的不包括？',
      options: [
        {label: 'A', text: '提升各服务独立迭代、独立部署的灵活性'},
        {label: 'B', text: '降低系统间耦合，便于按需弹性扩展'},
        {label: 'C', text: '使任一服务出故障时必然导致整个系统立即不可用'},
        {label: 'D', text: '支撑业务快速试错与弹性伸缩'}
      ],
      answer: 'C',
      explanation: '微服务化降低耦合、独立扩展、故障隔离；C描述的是单体架构“一损俱损”的缺点，不属于拆分目的。',
      ref: '依据：趋势报告§3.10（云原生/微服务、非单体）；教材第4章'
    },
    {
      id: 'C11',
      area: '信息系统架构',
      domain: '安全架构',
      type: 'single',
      stem: '信息系统安全架构需要在系统各层统一落实安全防护。下列做法中，属于安全架构层面总体设计的是？',
      options: [
        {label: 'A', text: '给服务器机房配备灭火器'},
        {label: 'B', text: '从网络、主机、应用、数据各层统一规划身份认证、访问控制、加密与审计防护体系'},
        {label: 'C', text: '为办公室更换防盗门'},
        {label: 'D', text: '为员工购买意外伤害保险'}
      ],
      answer: 'B',
      explanation: '安全架构是分层、体系化的防护设计；A、C是物理环境措施，D与人身安全相关，均不属于信息安全架构范畴。',
      ref: '依据：趋势报告§3.10（信息安全CIA/PDRR）；教材第4章安全架构、第8章信息安全工程'
    },
    {
      id: 'C12',
      area: '信息系统架构',
      domain: '安全架构',
      type: 'single',
      stem: '安全架构强调纵深防御、多层设防。下列做法中，最能体现“分层纵深防御”安全架构思想的是？',
      options: [
        {label: 'A', text: '只在机房门口加一道门禁，边界外不再设防'},
        {label: 'B', text: '在外网边界防火墙、内网访问控制、主机加固、应用鉴权、数据加密多个层面分别设防，单层被突破仍有后续防护'},
        {label: 'C', text: '把所有系统放在同一网段不做任何隔离'},
        {label: 'D', text: '仅靠关闭所有端口来保证安全'}
      ],
      answer: 'B',
      explanation: '纵深防御=不依赖单一防线，分层设防、互为冗余；A是单点防护，C放弃隔离，D因噎废食并破坏业务可用性。',
      ref: '依据：趋势报告§3.10（信息安全PDRR/等保2.0）；教材第4章安全架构、第8章信息安全工程'
    },
    {
      id: 'C13',
      area: '软件工程',
      domain: '软件质量特性',
      type: 'single',
      stem: '按照软件质量模型，软件在指定条件下使用时满足明确和隐含需求的能力，包括功能性、可靠性、易用性、效率、维护性、可移植性等。其中“软件被理解、学习、使用和吸引用户的能力”属于？',
      options: [
        {label: 'A', text: '可靠性'},
        {label: 'B', text: '易用性'},
        {label: 'C', text: '可移植性'},
        {label: 'D', text: '效率'}
      ],
      answer: 'B',
      explanation: '易用性（易理解、易学习、易操作、吸引用户）；可靠性指在规定条件下维持性能水平；效率指资源利用；可移植性指环境迁移能力。',
      ref: '依据：教材第5章 软件工程（软件质量模型）；趋势报告§2.1'
    },
    {
      id: 'C14',
      area: '软件工程',
      domain: '开发模型（瀑布/迭代/螺旋）对比',
      type: 'single',
      stem: '某项目需求前期难以完全明确，且希望每个迭代结束都能向客户演示可运行版本。最适合选用的开发模型是？',
      options: [
        {label: 'A', text: '瀑布模型'},
        {label: 'B', text: '迭代/增量（敏捷）模型'},
        {label: 'C', text: 'V模型'},
        {label: 'D', text: '一次性把需求全部冻结后再开发'}
      ],
      answer: 'B',
      explanation: '瀑布模型需求一次定死、阶段线性推进；迭代模型分期交付、逐步澄清需求，每个迭代产出可演示增量；螺旋模型强调风险分析；V模型强调测试与开发阶段对应。需求不明+频繁演示→迭代/敏捷。',
      ref: '依据：教材第5章 软件工程（生存周期模型）；趋势报告§2.1'
    },
    {
      id: 'C15',
      area: '数据工程',
      domain: '数据生命周期',
      type: 'single',
      stem: '数据生命周期管理覆盖数据从产生到销毁的全过程。下列顺序正确的是？',
      options: [
        {label: 'A', text: '数据采集→数据存储→数据处理/分析→数据应用→数据归档与销毁'},
        {label: 'B', text: '数据销毁→数据采集→数据应用→数据存储'},
        {label: 'C', text: '数据存储→数据销毁→数据采集→数据应用'},
        {label: 'D', text: '数据应用→数据采集→数据归档→数据存储'}
      ],
      answer: 'A',
      explanation: '数据生命周期：采集→存储→加工/分析→应用→归档/销毁，形成闭环管理。',
      ref: '依据：教材第6章 数据工程（数据生命周期）；趋势报告§2.1'
    },
    {
      id: 'C16',
      area: '数据工程',
      domain: '数据生命周期',
      type: 'single',
      stem: '某企业对超过法定保存期限、且无业务与合规留存价值的数据进行彻底删除。这一举措属于数据生命周期的哪个阶段？',
      options: [
        {label: 'A', text: '数据采集'},
        {label: 'B', text: '数据加工'},
        {label: 'C', text: '数据归档与销毁'},
        {label: 'D', text: '数据可视化'}
      ],
      answer: 'C',
      explanation: '归档与销毁是数据生命周期末端：对长期不用的数据先归档，对无留存价值的数据按合规要求销毁。',
      ref: '依据：教材第6章 数据工程；趋势报告§3.10（数据分类分级同章）'
    },
    {
      id: 'C17',
      area: '数据工程',
      domain: '元数据管理',
      type: 'single',
      stem: '元数据是“描述数据的数据”。下列属于技术元数据的是？',
      options: [
        {label: 'A', text: '数据的业务含义与口径定义'},
        {label: 'B', text: '表名、字段类型与长度、索引、数据抽取时间等技术描述'},
        {label: 'C', text: '数据负责人对数据业务口径的解释'},
        {label: 'D', text: '客户对数据质量的投诉记录'}
      ],
      answer: 'B',
      explanation: '元数据分业务元数据（业务含义、口径、负责人）与技术元数据（结构、类型、存储位置、ETL日志）。A、C属业务元数据。',
      ref: '依据：教材第6章 数据工程（元数据管理）'
    },
    {
      id: 'C18',
      area: '数据工程',
      domain: '元数据管理',
      type: 'single',
      stem: '关于数据字典这一元数据载体，下列说法错误的是？',
      options: [
        {label: 'A', text: '数据字典定义了数据项的名称、类型、含义与约束'},
        {label: 'B', text: '数据字典有助于不同系统之间统一数据口径'},
        {label: 'C', text: '数据字典一旦发布就不需要再维护更新'},
        {label: 'D', text: '数据字典是元数据的一种典型表现形式'}
      ],
      answer: 'C',
      explanation: '数据字典随业务与系统演进持续维护，否则会与真实数据脱节、失去指导意义。',
      ref: '依据：教材第6章（元数据/数据字典）；趋势报告§3.10数据工程'
    },
    {
      id: 'C19',
      area: '软硬件系统集成',
      domain: '软硬件集成方式',
      type: 'single',
      stem: '把不同厂商的服务器、存储、网络设备与定制软件组合成协同工作的整体。下列关于软硬件集成方式的说法，正确的是？',
      options: [
        {label: 'A', text: '软硬件集成只需把设备用网线连起来即可，无需考虑接口与兼容性'},
        {label: 'B', text: '软硬件集成需通过接口适配、中间件、协议转换等方式实现异构软硬件协同工作'},
        {label: 'C', text: '集成项目中所有设备必须由同一厂商提供'},
        {label: 'D', text: '软硬件集成与信息安全无关'}
      ],
      answer: 'B',
      explanation: '系统集成的难点正是异构环境下的接口、协议与兼容性适配；多厂商、跨平台是常态，且必须同步考虑安全。',
      ref: '依据：教材第7章 软硬件系统集成；趋势报告§2.1'
    },
    {
      id: 'C20',
      area: '软硬件系统集成',
      domain: '集成项目特点',
      type: 'single',
      stem: '信息系统集成项目区别于一般产品制造项目的特点，不包括？',
      options: [
        {label: 'A', text: '以满足客户需求为根本宗旨，具有独特性与一次性'},
        {label: 'B', text: '涉及多厂商、多技术、多干系人，接口协调复杂'},
        {label: 'C', text: '交付物通常是定制化解决方案而非标准化产品'},
        {label: 'D', text: '项目范围在开工时即可100%冻结且永不变化'}
      ],
      answer: 'D',
      explanation: '集成项目具有临时性、独特性、渐进明细特征，范围需随需求澄清逐步细化，不可能开工即100%冻结。',
      ref: '依据：教材第7章；趋势报告§3.7（WBS/范围基准）'
    },
    {
      id: 'C21',
      area: '信息安全工程',
      domain: '对称/非对称加密',
      type: 'single',
      stem: '发送方用接收方的公钥加密报文，接收方用自己的私钥解密。这种加密方式属于？',
      options: [
        {label: 'A', text: '对称加密'},
        {label: 'B', text: '非对称加密（公钥密码体制）'},
        {label: 'C', text: '哈希校验'},
        {label: 'D', text: '物理隔离'}
      ],
      answer: 'B',
      explanation: '非对称加密使用公钥/私钥密钥对；对称加密加解密用同一密钥（如DES/AES）。公钥加密、私钥解密实现报文保密性。',
      ref: '依据：趋势报告§3.10（信息安全）；教材第8章 信息安全工程'
    },
    {
      id: 'C22',
      area: '信息安全工程',
      domain: '数字签名/防火墙IDS',
      type: 'single',
      stem: '关于数字签名与网络安全设备，下列说法正确的是？',
      options: [
        {label: 'A', text: '数字签名只用于实现信息保密性，与完整性、不可否认性无关'},
        {label: 'B', text: '防火墙对进出网络的流量做访问控制，但不能完全防范内部攻击'},
        {label: 'C', text: 'IDS（入侵检测系统）可以自动阻断所有实时攻击而无需人工介入'},
        {label: 'D', text: '数字签名由发送方用自己的公钥完成'}
      ],
      answer: 'B',
      explanation: '数字签名用发送方私钥签名，保证完整性与不可否认性；防火墙隔离内外网、但对内部威胁基本无效；IDS以检测告警为主，主动阻断是IPS。',
      ref: '依据：趋势报告§3.10（CIA/PDRR/多因子认证）；教材第8章'
    },
    {
      id: 'C23',
      area: '项目管理概论',
      domain: '组织过程资产（OPA）',
      type: 'single',
      stem: '下列各项中，属于组织过程资产（OPA）的是？',
      options: [
        {label: 'A', text: '国家颁布的信息技术安全法规'},
        {label: 'B', text: '项目所在企业以往项目的模板、经验教训知识库与历史数据库'},
        {label: 'C', text: '项目团队成员当前的市场薪资水平'},
        {label: 'D', text: '企业所在地的基础设施条件'}
      ],
      answer: 'B',
      explanation: 'OPA=组织内部积累的过程、政策、模板、知识库、历史数据；EEF=外部环境因素（法规、市场、基础设施、组织结构文化）。A、C、D均属事业环境因素。',
      ref: '依据：教材第9章 项目管理概论；趋势报告§2.1（概论4~7分）'
    },
    {
      id: 'C24',
      area: '项目管理概论',
      domain: '事业环境因素（EEF）',
      type: 'single',
      stem: '项目经理在规划项目时，必须考虑公司现行的组织结构、现有人员技能水平，以及市场上同类专业人员的稀缺程度。这些属于？',
      options: [
        {label: 'A', text: '组织过程资产'},
        {label: 'B', text: '事业环境因素'},
        {label: 'C', text: '项目章程'},
        {label: 'D', text: '工作绩效数据'}
      ],
      answer: 'B',
      explanation: '组织结构、人员能力、市场人力供给均来自项目团队之外、难以随意改变，属事业环境因素。',
      ref: '依据：教材第9章；趋势报告§2.1'
    },
    {
      id: 'C25',
      area: '项目管理概论',
      domain: 'PMO职能',
      type: 'single',
      stem: '关于项目管理办公室（PMO），下列说法错误的是？',
      options: [
        {label: 'A', text: 'PMO负责统一协调项目之间的资源、方法与标准'},
        {label: 'B', text: '支持型PMO主要起顾问作用，提供模板与培训，控制程度低'},
        {label: 'C', text: 'PMO可以管理集中的项目集与共享资源，但不能向项目经理下达考核要求'},
        {label: 'D', text: '指令型PMO直接管理和控制项目'}
      ],
      answer: 'C',
      explanation: 'PMO分支持型/控制型/指令型；控制型PMO会通过政策、审计、考核要求项目遵从其标准，故C“不能下达考核要求”错误。',
      ref: '依据：教材第9章 PMO；趋势报告§3.9（组织结构与PM权限）'
    },
    {
      id: 'C26',
      area: '项目管理概论',
      domain: '组织过程资产与事业环境因素综合辨析',
      type: 'single',
      stem: '下列关于组织过程资产（OPA）与事业环境因素（EEF）的说法，正确的是？',
      options: [
        {label: 'A', text: '组织过程资产是外部环境强加的、项目团队无法影响的条件'},
        {label: 'B', text: '组织过程资产包括组织的标准流程、模板、知识库与历史信息；事业环境因素包括组织文化、基础设施、人员技能与市场条件等影响项目的内外部环境'},
        {label: 'C', text: '事业环境因素只能来自企业外部'},
        {label: 'D', text: '项目团队必须在项目中主动修改事业环境因素以适应项目'}
      ],
      answer: 'B',
      explanation: 'OPA是组织内部积累、可复用的过程/政策/模板/历史信息；EEF是内外部环境因素（组织结构文化、基础设施、人员能力、市场法规），多为项目团队难以改变的条件，既含外部也含内部（如组织文化）。',
      ref: '依据：教材第9章 项目管理概论；趋势报告§2.1（项目管理概论4~7分）'
    },
    {
      id: 'C27',
      area: '启动过程组',
      domain: '项目章程输入（商业论证/协议/假设）',
      type: 'single',
      stem: '下列各项中，不属于“制定项目章程”过程输入的是？',
      options: [
        {label: 'A', text: '商业论证'},
        {label: 'B', text: '协议（合同）'},
        {label: 'C', text: '事业环境因素与组织过程资产'},
        {label: 'D', text: '详细的WBS与进度基准'}
      ],
      answer: 'D',
      explanation: '项目章程输入：商业论证、协议、事业环境因素、组织过程资产、效益管理计划。WBS与进度基准是规划过程组后期产物，章程阶段尚不存在。',
      ref: '依据：趋势报告§3.7（项目章程）；教材第10章 启动过程组'
    },
    {
      id: 'C28',
      area: '启动过程组',
      domain: '项目章程输入（商业论证/协议/假设）',
      type: 'single',
      stem: '某政府投资项目在立项前先做可行性研究，论证经济上是否合理、投资回报是否可接受。这一论证成果作为项目章程最重要的输入是？',
      options: [
        {label: 'A', text: '风险登记册'},
        {label: 'B', text: '商业论证（含经济可行性、投资回报、投资回收期分析）'},
        {label: 'C', text: '干系人登记册'},
        {label: 'D', text: '采购工作说明书'}
      ],
      answer: 'B',
      explanation: '商业论证回答“为什么要做这个项目”，含经济可行性（ROI、回收期、盈亏平衡），是章程立项依据；其余均为后续过程产物。',
      ref: '依据：趋势报告§3.7（经济可行性=ROI/回收期）；教材第10章'
    },
    {
      id: 'C29',
      area: '规划过程组-范围',
      domain: '范围定义工具（分解/专家判断）',
      type: 'single',
      stem: '把项目可交付成果逐层分解为更小、更易管理的工作包。这一范围定义工具是？',
      options: [
        {label: 'A', text: '分解'},
        {label: 'B', text: '德尔菲法'},
        {label: 'C', text: '帕累托分析'},
        {label: 'D', text: '蒙特卡洛模拟'}
      ],
      answer: 'A',
      explanation: '分解是创建WBS的核心技术：把可交付成果自上而下逐层分解到工作包，遵循100%原则。',
      ref: '依据：趋势报告§3.7（WBS 100%原则）；教材第11章 规划-范围'
    },
    {
      id: 'C30',
      area: '规划过程组-范围',
      domain: '范围定义工具（分解/专家判断）',
      type: 'single',
      stem: '定义范围时，团队邀请资深业务专家与客户一起，把高层产品需求逐层拆解为具体功能。这种借助专家与产品分解技术明确范围的做法属于？',
      options: [
        {label: 'A', text: '专家判断与产品分析'},
        {label: 'B', text: '关键路径法'},
        {label: 'C', text: '挣值分析'},
        {label: 'D', text: '控制图'}
      ],
      answer: 'A',
      explanation: '定义范围的工具包括专家判断、产品分析、引导式研讨会等；关键路径属进度、挣值属成本、控制图属质量。',
      ref: '依据：教材第11章 定义范围工具'
    },
    {
      id: 'C31',
      area: '规划过程组-范围',
      domain: '滚动式规划',
      type: 'single',
      stem: '某项目对近期工作做详细规划、对远期工作只做粗略框架，待近期工作完成后再细化远期计划。这种规划方式称为？',
      options: [
        {label: 'A', text: '滚动式规划'},
        {label: 'B', text: '一次性规划'},
        {label: 'C', text: '逆向工程'},
        {label: 'D', text: '基线永久冻结'}
      ],
      answer: 'A',
      explanation: '滚动式规划=渐进明细：近期详、远期粗，随项目推进逐层细化，特别适合迭代型/需求渐明的项目。',
      ref: '依据：教材第11章；趋势报告§3.7'
    },
    {
      id: 'C32',
      area: '规划过程组-进度',
      domain: '甘特图读图',
      type: 'single',
      stem: '关于甘特图（横道图）的读图与用途，下列说法正确的是？',
      options: [
        {label: 'A', text: '甘特图中横道长度表示活动持续时间，可直观对比活动进度与里程碑'},
        {label: 'B', text: '甘特图能精确显示活动之间的逻辑依赖关系与浮动时间'},
        {label: 'C', text: '甘特图只能用于人力资源排班，不能用于进度计划'},
        {label: 'D', text: '甘特图中的菱形标记表示普通活动'}
      ],
      answer: 'A',
      explanation: '甘特图以横道长度表示历时、直观易读，但不显式表达逻辑依赖（那是网络图）；里程碑用菱形/三角标记。',
      ref: '依据：趋势报告§3.2（甘特图读图）；教材第11章 进度管理'
    },
    {
      id: 'C33',
      area: '规划过程组-进度',
      domain: '里程碑图',
      type: 'single',
      stem: '向高层汇报时，项目经理只标注关键交付节点（如需求冻结、上线、验收）及其计划日期，不展开具体活动。这种进度表达方式是？',
      options: [
        {label: 'A', text: '里程碑图'},
        {label: 'B', text: '责任分配矩阵'},
        {label: 'C', text: '组织结构图'},
        {label: 'D', text: '直方图'}
      ],
      answer: 'A',
      explanation: '里程碑图只表示重大节点及其时间，不展示活动历时，适合向高层汇报摘要进度。',
      ref: '依据：趋势报告§3.2；教材第11章'
    },
    {
      id: 'C34',
      area: '规划过程组-进度',
      domain: '资源平衡与资源平滑',
      type: 'single',
      stem: '进度计划中某些时段资源过载、某些时段闲置。为使资源需求不超过资源供给上限而调整进度，且允许关键路径改变，这属于？',
      options: [
        {label: 'A', text: '资源平滑'},
        {label: 'B', text: '资源平衡'},
        {label: 'C', text: '赶工'},
        {label: 'D', text: '快速跟进'}
      ],
      answer: 'B',
      explanation: '资源平衡按资源供给约束调整进度，可能改变关键路径与完工日期；资源平滑只在总时差内调整，不改变关键路径与原定工期。',
      ref: '依据：教材第11章 资源优化技术；趋势报告§3.2'
    },
    {
      id: 'C35',
      area: '规划过程组-进度',
      domain: '活动历时估算（类比/参数/储备）',
      type: 'single',
      stem: '新项目工期与公司两年前完成的同类型项目高度相似，项目经理参照历史项目数据粗略估算工期。这种方法是？',
      options: [
        {label: 'A', text: '类比估算（自上而下）'},
        {label: 'B', text: '参数估算'},
        {label: 'C', text: '自下而上估算'},
        {label: 'D', text: '三点估算'}
      ],
      answer: 'A',
      explanation: '类比估算是以过去类似项目为参照，成本低、速度快但精度低；参数估算=历史数据×单位参数；自下而上=从工作包逐层汇总。',
      ref: '依据：教材第11章 活动历时估算；趋势报告§3.2'
    },
    {
      id: 'C36',
      area: '规划过程组-进度',
      domain: '活动历时估算（类比/参数/储备）',
      type: 'single',
      stem: '某布线项目按“每米综合布线300元、共5000米”估算总成本，并额外预留10%应急时间应对不确定性。其中“按单位工程量×单价”属于？',
      options: [
        {label: 'A', text: '参数估算；预留部分属储备分析'},
        {label: 'B', text: '类比估算'},
        {label: 'C', text: '德尔菲法'},
        {label: 'D', text: '专家判断'}
      ],
      answer: 'A',
      explanation: '参数估算利用历史数据与单位量之间的统计关系（单价×工程量）；预留时间/费用通过储备分析确定（应急储备应对已知未知风险）。',
      ref: '依据：教材第11章 活动资源与历时估算；趋势报告§3.2'
    },
    {
      id: 'C37',
      area: '规划过程组-成本',
      domain: '典型偏差EAC=BAC/CPI',
      type: 'single',
      stem: '某项目BAC=100万元，当前PV=50万元、EV=40万元、AC=50万元，且偏差属典型偏差（未来仍按当前绩效继续）。按典型偏差公式，EAC约为？',
      options: [
        {label: 'A', text: '100万元'},
        {label: 'B', text: '125万元'},
        {label: 'C', text: '120万元'},
        {label: 'D', text: '80万元'}
      ],
      answer: 'B',
      explanation: 'CPI=EV/AC=40/50=0.8；典型偏差下EAC=BAC/CPI=100/0.8=125万元。',
      ref: '依据：趋势报告§3.1（典型偏差EAC=BAC/CPI）'
    },
    {
      id: 'C38',
      area: '规划过程组-成本',
      domain: 'ETC=(BAC-EV)/CPI',
      type: 'single',
      stem: '承上题（BAC=100万、EV=40万、AC=50万、CPI=0.8），典型偏差下ETC（完工尚需估算）为？',
      options: [
        {label: 'A', text: '75万元'},
        {label: 'B', text: '50万元'},
        {label: 'C', text: '40万元'},
        {label: 'D', text: '100万元'}
      ],
      answer: 'A',
      explanation: 'ETC=(BAC-EV)/CPI=(100-40)/0.8=60/0.8=75万元；验证：EAC=AC+ETC=50+75=125万元，与上题一致。',
      ref: '依据：趋势报告§3.1（ETC=(BAC-EV)/CPI）'
    },
    {
      id: 'C39',
      area: '规划过程组-成本',
      domain: '非典型偏差EAC=AC+(BAC-EV)',
      type: 'single',
      stem: '某项目BAC=200万元，当前AC=110万元、EV=100万元，当前偏差被判定为特殊原因、后续工作将按计划绩效执行。则EAC为？',
      options: [
        {label: 'A', text: '210万元'},
        {label: 'B', text: '200万元'},
        {label: 'C', text: '220万元'},
        {label: 'D', text: '180万元'}
      ],
      answer: 'A',
      explanation: '非典型偏差（偏差不会重演）：EAC=AC+(BAC-EV)=110+(200-100)=210万元。',
      ref: '依据：趋势报告§3.1（非典型偏差EAC=AC+(BAC-EV)）'
    },
    {
      id: 'C40',
      area: '规划过程组-成本',
      domain: '完工估算概念',
      type: 'single',
      stem: '关于BAC、ETC、EAC的概念，下列说法正确的是？',
      options: [
        {label: 'A', text: 'BAC是完工预算，即项目按计划完工时的总预算'},
        {label: 'B', text: 'EAC是完工尚需估算，指当前时点之后预计还要花多少钱'},
        {label: 'C', text: 'ETC是完工估算，指项目完工时预计总成本'},
        {label: 'D', text: 'BAC等于项目总预算（含管理储备）'}
      ],
      answer: 'A',
      explanation: 'BAC=完工预算（成本基准，含应急储备、不含管理储备）；EAC=完工估算（预计总成本）；ETC=完工尚需（剩余工作预计成本），EAC=AC+ETC。B、C把二者说反；D成本基准不含管理储备。',
      ref: '依据：趋势报告§3.1（应急/管理储备/项目总预算）'
    },
    {
      id: 'C41',
      area: '规划过程组-质量',
      domain: '质量与等级的区别',
      type: 'single',
      stem: '关于“质量”与“等级”，下列说法正确的是？',
      options: [
        {label: 'A', text: '低等级（功能少）一定意味着质量不合格'},
        {label: 'B', text: '质量是满足要求的程度，等级是对功能用途相同但技术特性不同产品的分类；低等级未必是质量问题'},
        {label: 'C', text: '高等级产品一定高质量'},
        {label: 'D', text: '质量问题与等级高低无关，无需管理'}
      ],
      answer: 'B',
      explanation: '低等级产品（功能少）只要稳定可靠、满足需求就是高质量；高等级产品若缺陷多则是低质量。质量与等级是两个概念。',
      ref: '依据：教材第11章 质量管理；趋势报告§3.6'
    },
    {
      id: 'C42',
      area: '规划过程组-质量',
      domain: '质量政策与质量目标',
      type: 'single',
      stem: '某公司发布《质量管理总则》，明确“全员参与、持续改进、客户满意”的质量宗旨；项目组再据此制定本项目“测试缺陷密度≤0.5个/千行”的具体指标。前者与后者分别是？',
      options: [
        {label: 'A', text: '质量政策（质量方针）与质量目标'},
        {label: 'B', text: '质量目标与质量政策'},
        {label: 'C', text: '质量审计与质量基准'},
        {label: 'D', text: '质量成本与质量基准'}
      ],
      answer: 'A',
      explanation: '质量政策是组织层面的总体质量宗旨与方向；质量目标是可测量的具体指标，是政策在项目层面的落实。',
      ref: '依据：教材第11章 规划质量管理（质量政策/质量目标）'
    },
    {
      id: 'C43',
      area: '规划过程组-风险',
      domain: '消极风险应对四策略',
      type: 'single',
      stem: '某项目识别到“主供应商交付可能延误”的消极风险，项目经理决定提前另签一家备选供应商以降低延误影响。这属于哪种消极风险应对策略？',
      options: [
        {label: 'A', text: '规避'},
        {label: 'B', text: '转移'},
        {label: 'C', text: '减轻'},
        {label: 'D', text: '接受'}
      ],
      answer: 'C',
      explanation: '减轻=降低风险概率或影响（备选方案、冗余设计、缩短迭代）；规避=改变计划彻底消除威胁；转移=把后果转给第三方（保险、担保）；接受=不主动采取措施。',
      ref: '依据：趋势报告§3.3（消极风险四策略）'
    },
    {
      id: 'C44',
      area: '规划过程组-风险',
      domain: '消极风险应对四策略',
      type: 'single',
      stem: '项目团队为一台关键设备购买货运保险，把运输途中损坏的财务后果转嫁给保险公司。这属于？',
      options: [
        {label: 'A', text: '风险转移'},
        {label: 'B', text: '风险规避'},
        {label: 'C', text: '风险减轻'},
        {label: 'D', text: '风险开拓'}
      ],
      answer: 'A',
      explanation: '转移=把风险后果连同财务责任转给第三方（买保险、履约担保、固定总价合同转移给卖方）；开拓属于积极机会策略。',
      ref: '依据：趋势报告§3.3'
    },
    {
      id: 'C45',
      area: '规划过程组-风险',
      domain: '积极机会应对（开拓/分享/提高/接受）',
      type: 'single',
      stem: '项目团队发现“若提前两个月上线可抢占市场先机”这一机会，于是增派精锐资源确保提前交付。这属于积极风险（机会）应对策略中的？',
      options: [
        {label: 'A', text: '开拓'},
        {label: 'B', text: '分享'},
        {label: 'C', text: '提高'},
        {label: 'D', text: '接受'}
      ],
      answer: 'A',
      explanation: '开拓=确保机会一定发生（分配最优资源、直接保证机会实现）；分享=与第三方合作共同抓住机会；提高=增大概率或正向影响；接受=等待机会不主动追求。',
      ref: '依据：趋势报告§3.3（积极机会四策略）'
    },
    {
      id: 'C46',
      area: '规划过程组-沟通',
      domain: '沟通方式（互动/推式/拉式）',
      type: 'single',
      stem: '项目组每周召开面对面站会，双方实时交流并即时澄清疑问。这种沟通方式属于？',
      options: [
        {label: 'A', text: '互动式沟通'},
        {label: 'B', text: '推式沟通'},
        {label: 'C', text: '拉式沟通'},
        {label: 'D', text: '单向广播式沟通'}
      ],
      answer: 'A',
      explanation: '互动式=双方/多方实时双向交流（会议、电话、视频）；推式=发送给需要知晓者（邮件、公告）；拉式=接收方自行获取（知识库、共享盘）。',
      ref: '依据：教材第11章 沟通管理；趋势报告§3.5'
    },
    {
      id: 'C47',
      area: '规划过程组-沟通',
      domain: '沟通障碍',
      type: 'single',
      stem: '下列哪项最可能成为有效沟通的障碍？',
      options: [
        {label: 'A', text: '发送方表达清晰、编码准确'},
        {label: 'B', text: '信息经多层过滤、双方语言文化差异大、噪声干扰且未及时反馈确认'},
        {label: 'C', text: '接收方集中注意力倾听'},
        {label: 'D', text: '沟通渠道与信息内容相匹配'}
      ],
      answer: 'B',
      explanation: '沟通过程中噪声、过滤、文化语言差异、缺乏反馈都会造成信息失真；A、C、D均为促进有效沟通的做法。',
      ref: '依据：教材第11章 沟通模型与障碍；趋势报告§3.5'
    },
    {
      id: 'C48',
      area: '规划过程组-采购',
      domain: '采购SOW/采购管理计划内容',
      type: 'single',
      stem: '采购工作说明书（采购SOW）的内容一般不包括？',
      options: [
        {label: 'A', text: '采购物品/服务的规格、数量、质量与性能要求'},
        {label: 'B', text: '交付时间、地点与验收标准'},
        {label: 'C', text: '工作范围、主要工作内容与双方职责边界'},
        {label: 'D', text: '项目已完工产品的全部源代码与财务凭证'}
      ],
      answer: 'D',
      explanation: '采购SOW详细描述拟采购的产品/服务，便于卖方判断是否有能力承接；D与采购需求描述无关。',
      ref: '依据：趋势报告§3.8（采购SOW）；教材第11章 采购管理'
    },
    {
      id: 'C49',
      area: '规划过程组-采购',
      domain: '采购SOW/采购管理计划内容',
      type: 'single',
      stem: '采购管理计划通常不包含？',
      options: [
        {label: 'A', text: '拟采用的合同类型与风险管理事项'},
        {label: 'B', text: '如何协调采购进度与项目进度、关键里程碑'},
        {label: 'C', text: '约束与假设、采购文档管理与绩效指标'},
        {label: 'D', text: '项目最终交付物的用户操作手册正文'}
      ],
      answer: 'D',
      explanation: '采购管理计划规定采购方式、合同类型、进度协调、文档与绩效等安排；操作手册正文是交付物文档，不属于采购计划。',
      ref: '依据：趋势报告§3.8（采购管理计划/采购策略）；教材第11章'
    },
    {
      id: 'C50',
      area: '规划过程组-干系人',
      domain: '干系人登记册内容',
      type: 'single',
      stem: '干系人登记册通常记录的内容是？',
      options: [
        {label: 'A', text: '干系人姓名/所属组织、角色、利益、期望、影响力与参与评估'},
        {label: 'B', text: '项目的关键路径与总时差'},
        {label: 'C', text: '产品的测试用例'},
        {label: 'D', text: '服务器的配置清单'}
      ],
      answer: 'A',
      explanation: '干系人登记册记录已识别干系人的基本信息、评估信息（利益、期望、影响）与分类；其余选项分属进度、质量、资源范畴。',
      ref: '依据：趋势报告§3.5；教材第11章 干系人管理'
    },
    {
      id: 'C51',
      area: '规划过程组-资源',
      domain: '资源分解结构RBS',
      type: 'single',
      stem: '把项目所需人力、设备、材料等资源按类别和类型逐层分解，形成资源分解结构。这种结构简称？',
      options: [
        {label: 'A', text: 'RBS（Resource Breakdown Structure）'},
        {label: 'B', text: 'WBS'},
        {label: 'C', text: 'OBS'},
        {label: 'D', text: 'RAM'}
      ],
      answer: 'A',
      explanation: 'RBS=资源分解结构；WBS=工作分解结构；OBS=组织分解结构；RAM=责任分配矩阵（RACI是其一种）。',
      ref: '依据：教材第11章 资源管理；趋势报告§3.9'
    },
    {
      id: 'C52',
      area: '执行过程组',
      domain: '获取资源-虚拟团队',
      type: 'single',
      stem: '某公司项目成员分布在3个城市，主要通过协作平台在线协同、很少集中办公。关于这种“虚拟团队”，下列说法错误的是？',
      options: [
        {label: 'A', text: '可跨地域利用人才、降低差旅成本'},
        {label: 'B', text: '沟通成本上升，易产生孤立感与误解，需更多沟通管理'},
        {label: 'C', text: '虚拟团队意味着不需要任何沟通与协作规则'},
        {label: 'D', text: '视频会议、共享文档是虚拟团队常用协作手段'}
      ],
      answer: 'C',
      explanation: '虚拟团队恰恰更需要明确的沟通规则、会议机制与文档协作规范；沟通管理是虚拟团队成功的关键。',
      ref: '依据：教材第12章 执行-获取资源；趋势报告§3.9'
    },
    {
      id: 'C53',
      area: '执行过程组',
      domain: '质量审计',
      type: 'single',
      stem: '质量审计是一种独立的结构化审查，其主要目的是？',
      options: [
        {label: 'A', text: '找出项目中需要被开除的人'},
        {label: 'B', text: '对照质量标准核查过程是否合规、识别良好实践与差距，推动过程改进'},
        {label: 'C', text: '仅在项目结束后计算失败成本'},
        {label: 'D', text: '替代质量控制中的测试工作'}
      ],
      answer: 'B',
      explanation: '质量审计面向过程：检查是否遵循组织与项目质量政策、识别可借鉴实践与差距，是管理质量过程的工具。',
      ref: '依据：教材第12章 执行-管理质量；趋势报告§3.6'
    },
    {
      id: 'C54',
      area: '执行过程组',
      domain: '认可与奖励',
      type: 'single',
      stem: '关于项目团队的认可与奖励，下列做法最恰当的是？',
      options: [
        {label: 'A', text: '只在项目结束时一次性发奖金，过程中不做任何激励'},
        {label: 'B', text: '考虑个体差异、奖励与绩效挂钩、公开表彰，并避免只奖加班不奖结果'},
        {label: 'C', text: '奖励“轮流坐庄”，让每个人都轮一遍'},
        {label: 'D', text: '物质奖励一律等同，与贡献脱钩'}
      ],
      answer: 'B',
      explanation: '认可奖励应与高绩效挂钩、公开及时、区分贡献；轮流坐庄与平均主义反而打击积极性。',
      ref: '依据：教材第12章 建设团队（认可与奖励）；趋势报告§3.9'
    },
    {
      id: 'C55',
      area: '执行过程组',
      domain: '管理沟通-会议管理',
      type: 'single',
      stem: '项目经理主持周例会。下列做法中不符合良好会议管理的是？',
      options: [
        {label: 'A', text: '会前发议程、明确目标与时间分配'},
        {label: 'B', text: '会上放任跑题、不做决议、会后不发纪要与行动项'},
        {label: 'C', text: '指定记录人、控制时间、及时归纳结论与责任人'},
        {label: 'D', text: '会后24小时内发出纪要与待办事项'}
      ],
      answer: 'B',
      explanation: '有效会议=会前有议程、会中有控场、会后有纪要与行动项跟踪；放任跑题且无结论是会议管理大忌。',
      ref: '依据：教材第12章 执行-管理沟通'
    },
    {
      id: 'C56',
      area: '执行过程组',
      domain: '管理干系人参与活动',
      type: 'single',
      stem: '下列属于“管理干系人参与”过程活动的是？',
      options: [
        {label: 'A', text: '与干系人沟通协作、处理其关切与冲突、提升支持度并降低抵制'},
        {label: 'B', text: '编制权力利益方格'},
        {label: 'C', text: '识别全部干系人并列登记册'},
        {label: 'D', text: '制定沟通管理计划'}
      ],
      answer: 'A',
      explanation: 'B、C、D均属规划/识别过程；管理干系人参与是执行过程，强调实际与干系人互动、化解冲突、引导参与。',
      ref: '依据：教材第12章 执行；趋势报告§3.5'
    },
    {
      id: 'C57',
      area: '执行过程组',
      domain: '实施采购-索赔管理',
      type: 'single',
      stem: '承建方认为业主方变更导致其额外成本，提出费用补偿要求，双方就此协商。这种在实施采购过程中处理买卖双方争议的工作称为？',
      options: [
        {label: 'A', text: '索赔管理（索赔与争议解决）'},
        {label: 'B', text: '质量审计'},
        {label: 'C', text: '储备分析'},
        {label: 'D', text: '配置审计'}
      ],
      answer: 'A',
      explanation: '索赔是实施采购中常见事项，应按合同约定通过协商、调解、仲裁等方式处理；其余分属质量/风险/配置过程。',
      ref: '依据：教材第12章 实施采购；趋势报告§3.8'
    },
    {
      id: 'C58',
      area: '执行过程组',
      domain: '问题日志',
      type: 'single',
      stem: '关于问题日志（问题登记册），下列说法正确的是？',
      options: [
        {label: 'A', text: '问题日志只在项目收尾时登记一次'},
        {label: 'B', text: '问题日志记录已识别问题、责任人与解决期限，并随处理过程持续更新、闭环跟踪'},
        {label: 'C', text: '问题日志与干系人沟通无关'},
        {label: 'D', text: '问题一旦记录就无需跟踪闭环'}
      ],
      answer: 'B',
      explanation: '问题日志动态维护：记录问题、责任人、期限，跟踪至关闭；它也是与干系人沟通的重要依据。',
      ref: '依据：教材第12章 执行（管理团队/管理沟通）'
    },
    {
      id: 'C59',
      area: '监控过程组',
      domain: '控制图判失控规则',
      type: 'single',
      stem: '用控制图监控某批次缺陷率。根据判异规则，下列哪种情况可判定过程失控？',
      options: [
        {label: 'A', text: '数据点落在上下控制限之内且随机分布'},
        {label: 'B', text: '连续7个点位于均值同一侧，或一个点超出控制限'},
        {label: 'C', text: '所有点恰好在均值线上'},
        {label: 'D', text: '点围绕中心对称波动且无趋势'}
      ],
      answer: 'B',
      explanation: '控制图判失控：点超出控制限，或出现连续7点同侧、连续7点递增/递减等非随机模式；其余均为受控状态。',
      ref: '依据：趋势报告§3.6（控制图判失控）；教材第13章 监控-控制质量'
    },
    {
      id: 'C60',
      area: '监控过程组',
      domain: '挣值综合判断（进度成本双维度）',
      type: 'single',
      stem: '某项目当前CV<0、SV<0、CPI<1、SPI<1。项目状态为？',
      options: [
        {label: 'A', text: '成本节约、进度提前'},
        {label: 'B', text: '成本超支、进度滞后'},
        {label: 'C', text: '成本超支、进度提前'},
        {label: 'D', text: '成本节约、进度滞后'}
      ],
      answer: 'B',
      explanation: 'CV=EV-AC<0→超支；SV=EV-PV<0→滞后；CPI<1、SPI<1同向印证：成本超支且进度滞后。',
      ref: '依据：趋势报告§3.1（CV/SV/CPI/SPI判断）'
    },
    {
      id: 'C61',
      area: '监控过程组',
      domain: '核实的可交付成果',
      type: 'single',
      stem: '控制质量过程输出的“核实的可交付成果”，接下来应交付给哪个过程做验收？',
      options: [
        {label: 'A', text: '确认范围（由客户/发起人正式验收）'},
        {label: 'B', text: '制定项目章程'},
        {label: 'C', text: '排列活动顺序'},
        {label: 'D', text: '识别风险'}
      ],
      answer: 'A',
      explanation: '控制质量先做正确性检查→产出核实的可交付成果→确认范围由客户/发起人正式验收（关注接受与否）。',
      ref: '依据：趋势报告§3.6（确认范围vs控制质量）；教材第13章'
    },
    {
      id: 'C62',
      area: '监控过程组',
      domain: '技术绩效测量',
      type: 'single',
      stem: '把项目执行中实际实现的技术指标（如接口响应时间、并发用户数）与计划逐项比较、发现偏差。这一监控技术称为？',
      options: [
        {label: 'A', text: '技术绩效测量'},
        {label: 'B', text: '挣值分析'},
        {label: 'C', text: '帕累托分析'},
        {label: 'D', text: '德尔菲法'}
      ],
      answer: 'A',
      explanation: '技术绩效测量把计划与实际的技术参数（功能、性能指标）逐项对比，偏差过大即风险信号。',
      ref: '依据：教材第13章 监控项目工作/监督风险'
    },
    {
      id: 'C63',
      area: '监控过程组',
      domain: '控制采购-提前终止',
      type: 'single',
      stem: '合同尚未完成即因双方协商一致或一方违约而提前结束。关于合同提前终止，下列说法正确的是？',
      options: [
        {label: 'A', text: '提前终止无需任何结算与责任划分'},
        {label: 'B', text: '提前终止属于特殊的合同收尾，需明确已完成工作的费用、权利义务与违约责任'},
        {label: 'C', text: '只要项目经理想停就立即停，不需书面文件'},
        {label: 'D', text: '提前终止后卖方仍须无条件继续履约'}
      ],
      answer: 'B',
      explanation: '合同提前终止是收尾的特殊情形，须按合同约定结算已完工作、界定责任，而非口头随意中止。',
      ref: '依据：教材第13章 控制采购；趋势报告§3.8（合同收尾vs行政收尾）'
    },
    {
      id: 'C64',
      area: '监控过程组',
      domain: '工作绩效报告',
      type: 'single',
      stem: '把项目状态数据（进度、成本、风险等绩效信息）整理成正式报告供干系人决策，这一输出称为？',
      options: [
        {label: 'A', text: '工作绩效报告'},
        {label: 'B', text: '工作绩效数据'},
        {label: 'C', text: '工作绩效信息'},
        {label: 'D', text: '经验教训登记册'}
      ],
      answer: 'A',
      explanation: '数据（原始观察）→信息（对照计划加工）→报告（汇编成书面文档供决策行动）。工作绩效报告是监控项目工作的输出。',
      ref: '依据：教材第13章 监控项目工作'
    },
    {
      id: 'C65',
      area: '监控过程组',
      domain: '控制资源',
      type: 'single',
      stem: '控制资源过程主要关注？',
      options: [
        {label: 'A', text: '确保实物资源（设备、材料、设施）按计划到位与使用，跟踪实际与计划偏差'},
        {label: 'B', text: '制定项目章程'},
        {label: 'C', text: '识别全部干系人'},
        {label: 'D', text: '编写采购工作说明书'}
      ],
      answer: 'A',
      explanation: '控制资源面向执行阶段的实物资源：按计划供给、监控使用、纠偏；B、C、D分属启动/规划过程。',
      ref: '依据：教材第13章 控制资源；趋势报告§3.9'
    },
    {
      id: 'C66',
      area: '组织保障',
      domain: '配置审计（功能/物理）',
      type: 'single',
      stem: '产品交付前，项目组检查“配置项的实际功能性能是否与需求规格说明书一致、是否经过测试”。这类配置审计属于？',
      options: [
        {label: 'A', text: '功能配置审计（FCA）'},
        {label: 'B', text: '物理配置审计（PCA）'},
        {label: 'C', text: '财务审计'},
        {label: 'D', text: '质量审计'}
      ],
      answer: 'A',
      explanation: '功能配置审计验证配置项的功能/性能是否满足需求规格；物理配置审计验证配置项的物理状态（文档齐全、介质、版本一致性）。',
      ref: '依据：趋势报告§3.4（配置审计功能/物理）；教材第14章 组织保障'
    },
    {
      id: 'C67',
      area: '组织保障',
      domain: '版本管理',
      type: 'single',
      stem: '关于配置项版本管理，下列说法正确的是？',
      options: [
        {label: 'A', text: '配置项每次修改后版本号应按规则递增，并记录修改人、时间与内容'},
        {label: 'B', text: '同一配置项可由多个修改人同时随意覆盖而不留记录'},
        {label: 'C', text: '版本号只是装饰，与变更追溯无关'},
        {label: 'D', text: '旧版本可随时删除，不需要保留'}
      ],
      answer: 'A',
      explanation: '版本管理保证配置项可追溯：版本号递增、修改留痕、历史版本保留；随意覆盖/删除会破坏追溯性。',
      ref: '依据：教材第14章 配置管理（版本管理）；趋势报告§3.4'
    },
    {
      id: 'C68',
      area: '监理',
      domain: '监理工作方式',
      type: 'single',
      stem: '信息系统工程监理常用的工作方式不包括？',
      options: [
        {label: 'A', text: '旁站'},
        {label: 'B', text: '巡视'},
        {label: 'C', text: '平行检验'},
        {label: 'D', text: '代替承建方直接编写代码并签字验收'}
      ],
      answer: 'D',
      explanation: '监理工作方式包括旁站、巡视、平行检验、见证等；监理是独立监督方，不替代承建方实施。',
      ref: '依据：教材第15章 监理；趋势报告§3.10（三控两管一协调）'
    },
    {
      id: 'C69',
      area: '监理',
      domain: '监理与业主/承建方关系',
      type: 'single',
      stem: '关于监理单位与业主、承建方的关系，下列说法正确的是？',
      options: [
        {label: 'A', text: '监理单位受业主委托，依据监理合同独立公正地监督承建方，与承建方无行政隶属关系'},
        {label: 'B', text: '监理单位是承建方的上级领导机关'},
        {label: 'C', text: '监理单位与承建方属于同一利益共同体，应偏袒承建方'},
        {label: 'D', text: '业主可以直接指挥监理更换承建方团队成员'}
      ],
      answer: 'A',
      explanation: '监理受业主委托、独立公正执业，与承建方是监督与被监督关系而非上下级；通过信息传递与协调开展工作。',
      ref: '依据：教材第15章；趋势报告§3.10'
    },
    {
      id: 'C70',
      area: '法律法规',
      domain: '著作权法（软件著作权/保护期限）',
      type: 'single',
      stem: '关于软件著作权保护期限，下列说法正确的是？',
      options: [
        {label: 'A', text: '自然人开发的软件，其著作权保护期为开发者终生及其死亡后50年'},
        {label: 'B', text: '软件著作权保护期自首次公开演示之日起永久有效'},
        {label: 'C', text: '法人软件著作权保护期为20年'},
        {label: 'D', text: '软件著作权自获得专利证书之日起产生'}
      ],
      answer: 'A',
      explanation: '自然人软件著作权=终生及死亡后50年；法人/其他组织软件著作权=首次发表后50年（开发完成后50年内未发表不再保护）。著作权自作品完成之日起自动产生，登记非生效要件。',
      ref: '依据：教材第16章 法律法规；趋势报告§2.1（法规1分）'
    },
    {
      id: 'C71',
      area: '职业道德',
      domain: '知识产权与保密义务',
      type: 'single',
      stem: '项目经理离职后，对前雇主的未公开项目资料与商业秘密应当？',
      options: [
        {label: 'A', text: '可以随意带到新公司使用'},
        {label: 'B', text: '继续承担保密义务，不得擅自披露或使用'},
        {label: 'C', text: '公开发表以展示个人能力'},
        {label: 'D', text: '卖给竞争对手换取收益'}
      ],
      answer: 'B',
      explanation: '对在职期间接触的商业秘密、未公开资料负持续保密义务，披露、自用或售与他人均违反职业道德与法律。',
      ref: '依据：教材第17章 职业道德；趋势报告§2.1'
    },
    {
      id: 'C72',
      area: '英文术语',
      domain: 'PV 英文术语',
      type: 'single',
      stem: 'In project cost management, PV (Planned Value) refers to: ',
      options: [
        {label: 'A', text: 'The value of work actually completed, measured by authorized budget'},
        {label: 'B', text: 'The authorized budget assigned to the scheduled work to be accomplished'},
        {label: 'C', text: 'The actual cost incurred for the work performed'},
        {label: 'D', text: 'The total budget at completion'}
      ],
      answer: 'B',
      explanation: 'PV=计划值：到某一时点计划完成工作的预算价值。A为EV（挣值）；C为AC（实际成本）；D为BAC（完工预算）。',
      ref: '依据：趋势报告§3.1（PV/EV/AC）'
    },
    {
      id: 'C73',
      area: '英文术语',
      domain: 'ETC 英文术语',
      type: 'single',
      stem: 'In earned value management, ETC (Estimate To Complete) means: ',
      options: [
        {label: 'A', text: 'The expected total cost of completing all the work'},
        {label: 'B', text: 'The expected cost needed to finish all the remaining work'},
        {label: 'C', text: 'The difference between actual cost and planned value'},
        {label: 'D', text: 'The value of work planned so far'}
      ],
      answer: 'B',
      explanation: 'ETC=完工尚需估算：完成剩余工作预计还需的成本；A为EAC（完工估算），且EAC=AC+ETC。',
      ref: '依据：趋势报告§3.1（ETC/EAC）'
    },
    {
      id: 'C74',
      area: '英文术语',
      domain: 'CPIF 英文术语',
      type: 'single',
      stem: 'CPIF (Cost Plus Incentive Fee) contract means: ',
      options: [
        {label: 'A', text: 'A fixed-price contract with no fee adjustment'},
        {label: 'B', text: 'A cost-reimbursable contract where the seller is paid allowed costs plus an incentive fee based on performance against agreed targets'},
        {label: 'C', text: 'A pure time-and-materials contract only'},
        {label: 'D', text: 'A contract where the buyer bears no cost risk at all'}
      ],
      answer: 'B',
      explanation: 'CPIF=成本加激励费用合同：实报实销成本+按绩效目标达成情况浮动的激励费，节约或超支按约定比例分担/分享。',
      ref: '依据：趋势报告§3.8（CPIF合同计算）'
    },
    {
      id: 'C75',
      area: '英文术语',
      domain: 'Scrum 英文术语',
      type: 'single',
      stem: 'In Scrum, the main responsibility of the Scrum Master is: ',
      options: [
        {label: 'A', text: 'To prioritize the product backlog and decide what to build'},
        {label: 'B', text: 'To serve the team by removing impediments, facilitating events, and coaching self-management'},
        {label: 'C', text: 'To write all the code for the product'},
        {label: 'D', text: 'To approve the final product price'}
      ],
      answer: 'B',
      explanation: 'Scrum Master是服务型领导：清除障碍、主持敏捷事件、辅导团队自组织；A为产品负责人PO的职责；开发团队负责交付可工作增量。',
      ref: '依据：趋势报告§3.10（敏捷Scrum：SM/PO职责）'
    }
  ],
  afternoon: [
    {
      id: 'CC1',
      title: '试题一（20分）',
      area: '进度与成本管理',
      scenario: '【说明】某市“智慧交通综合管理平台”项目，合同额约1300万元，工期12个月，包含交通数据汇聚、信号优化、视频AI分析等子系统。立项时批准完工预算BAC=1200万元，其中含应急储备90万元；另设管理储备70万元，须经变更程序方可动用。项目执行到第8个月末：计划工作量预算PV=600万元，实际完成工作的预算价值EV=540万元，实际花费AC=660万元。管理层评估认为：当前偏差由前期一次供应商供货延误（特殊事件）造成，后续工作不会再发生同类偏差。此外，项目组就是否自建本地机房或租用公有云做决策分析：自建机房初期投资200万元，若业务需求旺盛（概率60%）可带来收益500万元，若需求低迷（概率40%）收益200万元；租用公有云初期投资100万元，旺盛（60%）收益280万元，低迷（40%）收益120万元。',
      questions: [
        {
          no: '问题1（6分）',
          type: 'calc',
          q: '请计算CV、SV、CPI、SPI，并判断项目当前的成本与进度状态。',
          options: null,
          answer: 'CV=EV-AC=540-660=-120万元（成本超支）；SV=EV-PV=540-600=-60万元（进度滞后）；CPI=EV/AC=540/660≈0.82（<1，成本超支）；SPI=EV/PV=540/600=0.9（<1，进度滞后）。结论：项目当前成本超支、进度滞后。（四个指标每个1分，状态判断2分）',
          points: 6
        },
        {
          no: '问题2（6分）',
          type: 'calc',
          q: '按题意偏差为非典型偏差，请计算ETC与EAC（写出公式与过程）。',
          options: null,
          answer: '非典型偏差（偏差为特殊原因、后续按计划绩效执行）：ETC=BAC-EV=1200-540=660万元；EAC=AC+ETC=660+660=1320万元（即EAC=AC+(BAC-EV)=660+660=1320万元）。（公式2分，ETC结果2分，EAC结果2分）',
          points: 6
        },
        {
          no: '问题3（4分）',
          type: 'judge',
          q: '（1）判断：成本基准（BAC）中包含了70万元管理储备。（√/×并说明理由）（2）填空：该项目的项目总预算（成本基准+管理储备）为____万元。',
          options: null,
          answer: '（1）×。管理储备不属于成本基准：成本基准=BAC=1200万元（其中含90万元应急储备）；管理储备70万元单独列项、须经变更程序动用。（2分）（2）项目总预算=1200+70=1270万元。（2分）',
          points: 4
        },
        {
          no: '问题4（4分）',
          type: 'calc',
          q: '用预期货币价值（EMV）法，分别计算“自建机房”与“租用云服务”两方案的净EMV，并据此给出方案选择。',
          options: null,
          answer: '自建机房：期望收益=0.6×500+0.4×200=300+80=380万元；净EMV=380-200=180万元。（1.5分）租用云服务：期望收益=0.6×280+0.4×120=168+48=216万元；净EMV=216-100=116万元。（1.5分）因180>116，应选择“自建机房”方案。（1分）',
          points: 4
        }
      ]
    },
    {
      id: 'CC2',
      title: '试题二（19分）',
      area: '项目整合管理',
      scenario: '【说明】某区“智慧政务一网通办”平台项目启动后，新任项目经理小李到岗时发现：项目在没有正式项目章程的情况下已开工半年，团队靠口头分工推进，边界不清；高层要求小李尽快补齐整合管理基础文件，并规范项目收尾工作。',
      questions: [
        {
          no: '问题1（5分）',
          type: 'short',
          q: '请默写“制定项目章程”过程的主要输入（至少写出4项）。',
          options: null,
          answer: '①商业论证（含可行性研究、投资回报分析）；②协议/合同；③事业环境因素；④组织过程资产；⑤效益管理计划。（每项1分，答出5项即满分5分）',
          points: 5
        },
        {
          no: '问题2（6分）',
          type: 'short',
          q: '项目管理计划通常包括哪些组成内容？（至少写出6项）',
          options: null,
          answer: '项目管理计划由各分项管理计划与基准组成，包括：范围管理计划、需求管理计划、进度管理计划、成本管理计划、质量管理计划、过程改进计划、资源（人力资源）管理计划、沟通管理计划、风险管理计划、采购管理计划、干系人管理计划，以及范围基准、进度基准、成本基准。（每项1分，答出6项得6分）',
          points: 6
        },
        {
          no: '问题3（4分）',
          type: 'short',
          q: '项目最终报告应包含哪些主要内容？（至少写出4项）',
          options: null,
          answer: '①项目概况与预定目标；②目标达成情况与交付成果总结；③范围、进度、成本、质量绩效回顾；④干系人满意度与正式验收结论；⑤经验教训总结；⑥资源释放与后续安排。（每项1分，答出4项得4分）',
          points: 4
        },
        {
          no: '问题4（4分）',
          type: 'judge',
          q: '判断下列说法是否正确（√/×），并说明理由：（1）项目章程应由项目经理本人签发发布。（2）项目管理计划（基准）一经批准，后续任何修改都必须经整体变更控制流程审批。',
          options: null,
          answer: '（1）×。项目章程由项目发起人/高层管理者签发，正式宣布项目成立并授权项目经理动用组织资源；项目经理是被授权对象而非签发人。（2分）（2）√。基准批准后成为受控文件，任何修改须走书面变更请求→影响分析→CCB审批→更新基准的整体变更控制流程。（2分）',
          points: 4
        }
      ]
    },
    {
      id: 'CC3',
      title: '试题三（18分）',
      area: '项目资源管理',
      scenario: '【说明】某市“12345政务热线智能化升级”项目团队成员来自开发部、测试部、业主方与监理方。项目经理小张用RACI矩阵分配责任，节选如下（R=执行、A=最终负责、C=咨询、I=知情）：\n表1 RACI责任分配表（节选）：\n- 活动“需求规格说明书编写”：王工(系统分析师)=A，李工(开发组长)=R，赵工(测试组长)=I，陈工(业主代表)=C；\n- 活动“概要设计评审”：王工=I，李工=A，赵工=A，陈工=I；\n- 活动“测试用例执行”：王工=I，李工=C，赵工=R，陈工=R；\n- 活动“用户培训”：王工=I，李工=R，赵工=C，陈工=I。\n团队组建半年来，还出现以下现象：项目刚组建时成员客气拘谨、相互试探；随后成员为分工与优先级争执不断、气氛紧张；再后来团队逐渐形成共识、协作趋顺；目前已配合默契、能自主解决问题。',
      questions: [
        {
          no: '问题1（6分）',
          type: 'find',
          q: '上表RACI矩阵中有3处违反RACI规则，请逐一指出错误并给出正确做法（每处2分）。',
          options: null,
          answer: '错误1：“概要设计评审”同时出现两个A（李工、赵工）。RACI中A（最终负责/批准）有且只能有一个。改正：明确其中一人为A（如赵工为A），另一人改为R或C。\n错误2：“测试用例执行”把业主代表陈工指派为R（执行）。业主方不应承担项目团队的执行工作。改正：陈工改为I（知情），R由赵工（或开发人员）担任。\n错误3：“用户培训”一行没有任何A（无人最终负责）。每项活动必须有且仅有一个A。改正：指定一人为A（如李工为A，对培训结果负责）。',
          points: 6
        },
        {
          no: '问题2（6分）',
          type: 'short',
          q: '团队中发生以下冲突，请匹配最合适的冲突解决策略（强制/妥协/合作/撤退）：（a）两名工程师为技术方案各执一词，项目经理强行拍板“就按A方案做”；（b）双方各让一步，工期与预算各承担一半；（c）坐下来把双方诉求摆开，共同找到一个满足双方核心利益的新方案；（d）两名组员因琐事争吵，项目经理说“先放一放，会后再说”。',
          options: null,
          answer: '（a）强制（命令/权威）；（b）妥协（调解/各让一步）；（c）合作（面对问题/解决问题，双赢）；（d）撤退（回避）。（每空1.5分）',
          points: 6
        },
        {
          no: '问题3（6分）',
          type: 'short',
          q: '根据塔克曼团队发展五阶段理论，判断下列现象各处于哪个阶段：（1）项目刚组建，成员客气拘谨、相互试探，对目标尚不清晰；（2）成员对分工、优先级争执不断，气氛紧张；（3）团队开始形成共识与规范，协作趋于顺畅；（4）团队配合默契、高效运转，能自主解决问题。',
          options: null,
          answer: '（1）形成阶段（Forming）；（2）震荡阶段（Storming）；（3）规范阶段（Norming）；（4）成熟阶段（Performing）。（每空1.5分）',
          points: 6
        }
      ]
    },
    {
      id: 'CC4',
      title: '试题四（18分）',
      area: '组织保障（配置管理）与监理',
      scenario: '【说明】某政务云平台迁移项目，承建方为系统集成商，业主委托了信息系统监理单位。项目组在配置库管理、基线控制、配置审计以及与监理配合中出现若干做法，需要逐项判断与完善。',
      questions: [
        {
          no: '问题1（6分）',
          type: 'judge',
          q: '判断下列说法是否正确（√/×），并说明理由：（1）开发库（动态库）供开发人员日常自由存取、频繁修改，不需严格审批。（2）基线一旦建立，就绝对不能修改。（3）受控库（主库）中保存经评审通过的配置项与基线。',
          options: null,
          answer: '（1）√。开发库是开发人员个人/小组日常工作区，修改频繁；纳入严格基线控制的是受控库/主库与产品库。（2分）（2）×。基线并非绝对不能修改，而是必须走正式变更控制流程：书面变更请求→影响分析→CCB审批→修改并升级版本，而非随意修改。（2分）（3）√。受控库（主库）存放经评审批准的配置项与基线，是配置管理的受控核心。（2分）',
          points: 6
        },
        {
          no: '问题2（5分）',
          type: 'fill',
          q: '配置审计分两类，请填空：（1）功能配置审计（FCA）：验证配置项的______是否达到需求规格说明书的要求；（2）物理配置审计（PCA）：验证配置项的______是否完整一致；（3）配置审计一般在______前进行，以确保交付物受控。',
          options: null,
          answer: '（1）功能/性能特性（是否满足需求规格）。（2分）（2）物理状态（文档齐全度、介质、版本一致性等）。（2分）（3）产品交付（或里程碑/验收节点）。（1分）',
          points: 5
        },
        {
          no: '问题3（7分）',
          type: 'judge',
          q: '关于信息系统监理“三控两管一协调”，判断下列说法是否正确（√/×），并说明理由：（1）“三控”指质量控制、进度控制、投资（成本）控制；（2）监理单位与承建单位是上下级行政隶属关系，监理可直接向承建方员工发号施令；（3）“两管”通常指合同管理与信息管理（部分口径并入安全管理，合称“三管”）；（4）监理发现承建方进度严重滞后，可直接修改承建方的进度计划并指令执行。',
          options: null,
          answer: '（1）√。三控=质量控制、进度控制、投资（成本）控制。（2分）（2）×。监理受业主委托独立执业，与承建方无行政隶属关系，不能直接指挥承建方员工。（2分）（3）√。两管=合同管理、信息管理；含安全管理时合称“三管”，再加一协调（组织协调）。（1分）（4）×。监理无权直接修改承建方进度计划，应通过监理通知单要求承建方整改并报业主协调。（2分）',
          points: 7
        }
      ]
    }
  ]
};
