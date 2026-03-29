// 案例分析答题模板数据
window.caseAnalysisTemplates = {
    // 题型分类
    questionTypes: [
        { id: 'find_error', name: '找错题', desc: '找出案例中存在的问题' },
        { id: 'correct_error', name: '改错题', desc: '改正案例中的错误做法' },
        { id: 'short_answer', name: '简答题', desc: '理论阐述' },
        { id: 'calculation', name: '计算题', desc: '公式应用' },
        { id: 'comprehensive', name: '综合分析题', desc: '多知识领域综合分析' }
    ],

    // 通用答题模板
    generalTemplates: [
        {
            id: 'template_find_error',
            name: '找错题模板',
            type: 'find_error',
            format: '1. 【问题描述】+【理论依据】',
            example: `1. 项目经理没有制定项目管理计划，违反了整体管理中制定项目管理计划的要求。
2. 没有建立变更控制委员会（CCB），变更管理流程不规范。
3. 风险识别不充分，没有及时更新风险登记册。
4. 与干系人沟通不足，没有定期向干系人报告项目进展。
5. 范围蔓延严重，没有严格执行范围变更控制流程。`
        },
        {
            id: 'template_correct_error',
            name: '改错题模板',
            type: 'correct_error',
            format: '错误做法：×××\n正确做法：×××',
            example: `错误做法：项目经理直接批准了客户的需求变更。
正确做法：变更应由变更控制委员会（CCB）审批，项目经理不能单方面批准变更。

错误做法：项目组成员直接向客户汇报工作。
正确做法：项目组应统一由项目经理对外沟通，避免信息不一致。`
        },
        {
            id: 'template_short_answer',
            name: '简答题模板',
            type: 'short_answer',
            format: '1. 要点一：展开说明\n2. 要点二：展开说明\n3. 要点三：展开说明',
            example: `请简述风险识别的方法：

1. 文档审查：对项目文档进行结构化审查，识别潜在风险。
2. 信息收集技术：包括头脑风暴、德尔菲技术、访谈、根本原因识别等。
3. 核对单分析：根据历史经验和行业最佳实践，使用风险核对单。
4. 假设分析：检验假设条件在项目中的有效性，识别不确定性。
5. 图解技术：包括因果图、流程图、影响图等。
6. SWOT分析：分析项目的优势、劣势、机会、威胁。`
        }
    ],

    // 各知识领域常见问题
    knowledgeAreaProblems: {
        integration: {
            name: '整体管理',
            icon: '📋',
            problems: {
                charter: {
                    title: '项目章程问题',
                    items: [
                        '没有制定项目章程',
                        '项目章程内容不完整',
                        '项目章程未经发起人批准'
                    ]
                },
                plan: {
                    title: '项目管理计划问题',
                    items: [
                        '没有制定项目管理计划',
                        '项目管理计划不完整',
                        '项目管理计划未经审批',
                        '项目管理计划没有及时更新'
                    ]
                },
                change: {
                    title: '变更管理问题',
                    items: [
                        '没有建立变更控制流程',
                        '变更没有经过CCB审批',
                        '变更没有记录在变更日志中',
                        '变更实施后没有更新项目文件',
                        '变更影响分析不充分'
                    ]
                }
            }
        },
        scope: {
            name: '范围管理',
            icon: '🎯',
            problems: {
                requirement: {
                    title: '需求管理问题',
                    items: [
                        '需求收集不完整',
                        '需求没有经过确认',
                        '需求变更没有控制',
                        '需求跟踪不完善'
                    ]
                },
                wbs: {
                    title: 'WBS问题',
                    items: [
                        '没有创建WBS',
                        'WBS分解不完整',
                        'WBS分解层次不合理',
                        'WBS没有覆盖全部工作',
                        'WBS没有编号'
                    ]
                },
                validation: {
                    title: '范围确认问题',
                    items: [
                        '可交付成果未经验收',
                        '验收标准不明确',
                        '验收过程不规范',
                        '范围蔓延'
                    ]
                }
            }
        },
        schedule: {
            name: '进度管理',
            icon: '⏱️',
            problems: {
                planning: {
                    title: '进度计划问题',
                    items: [
                        '没有制定进度计划',
                        '进度计划不合理',
                        '进度计划未考虑资源限制',
                        '进度计划未考虑风险'
                    ]
                },
                control: {
                    title: '进度控制问题',
                    items: [
                        '进度监控不到位',
                        '进度偏差没有及时纠正',
                        '关键路径管理不当',
                        '资源分配不合理',
                        '进度压缩方法不当'
                    ]
                }
            }
        },
        cost: {
            name: '成本管理',
            icon: '💰',
            problems: {
                estimation: {
                    title: '成本估算问题',
                    items: [
                        '成本估算不准确',
                        '成本估算方法不当',
                        '未考虑应急储备',
                        '估算依据不充分'
                    ]
                },
                control: {
                    title: '成本控制问题',
                    items: [
                        '成本监控不到位',
                        '成本偏差没有及时纠正',
                        '挣值分析应用不当',
                        '成本超支未采取措施'
                    ]
                }
            }
        },
        quality: {
            name: '质量管理',
            icon: '✅',
            problems: {
                planning: {
                    title: '质量规划问题',
                    items: [
                        '没有制定质量标准',
                        '质量标准不合理',
                        '质量保证措施不足'
                    ]
                },
                control: {
                    title: '质量控制问题',
                    items: [
                        '质量检查不及时',
                        '质量问题未闭环',
                        '质量工具使用不当',
                        '缺乏质量改进措施'
                    ]
                }
            }
        },
        hr: {
            name: '人力资源管理',
            icon: '👥',
            problems: {
                team_building: {
                    title: '团队建设问题',
                    items: [
                        '团队组建不及时',
                        '团队角色职责不清',
                        '团队激励不足',
                        '团队培训不足'
                    ]
                },
                management: {
                    title: '团队管理问题',
                    items: [
                        '绩效评估不当',
                        '冲突解决不及时',
                        '沟通协调不足',
                        '人员流失'
                    ]
                }
            }
        },
        communication: {
            name: '沟通管理',
            icon: '📢',
            problems: {
                planning: {
                    title: '沟通规划问题',
                    items: [
                        '没有制定沟通计划',
                        '沟通计划不合理',
                        '干系人信息不完整'
                    ]
                },
                execution: {
                    title: '沟通执行问题',
                    items: [
                        '沟通渠道不畅通',
                        '信息传递不及时',
                        '沟通方式不当',
                        '信息反馈不足'
                    ]
                }
            }
        },
        risk: {
            name: '风险管理',
            icon: '⚠️',
            problems: {
                identification: {
                    title: '风险识别问题',
                    items: [
                        '风险识别不完整',
                        '风险识别方法单一',
                        '风险登记册未更新'
                    ]
                },
                analysis: {
                    title: '风险分析问题',
                    items: [
                        '风险分析不深入',
                        '风险优先级排列不当',
                        '风险量化分析不足'
                    ]
                },
                response: {
                    title: '风险应对问题',
                    items: [
                        '风险应对措施不当',
                        '风险应对责任人不明',
                        '应急计划缺失'
                    ]
                }
            }
        },
        procurement: {
            name: '采购管理',
            icon: '📦',
            problems: {
                planning: {
                    title: '采购规划问题',
                    items: [
                        '自制/外购决策不当',
                        '采购方式选择不当',
                        '采购文件不完整'
                    ]
                },
                execution: {
                    title: '采购执行问题',
                    items: [
                        '供应商选择不当',
                        '合同条款不明确',
                        '合同管理不规范',
                        '采购验收不规范'
                    ]
                }
            }
        },
        stakeholder: {
            name: '干系人管理',
            icon: '🤝',
            problems: {
                identification: {
                    title: '干系人识别问题',
                    items: [
                        '干系人识别不完整',
                        '干系人分析不深入',
                        '干系人登记册未更新'
                    ]
                },
                management: {
                    title: '干系人管理问题',
                    items: [
                        '干系人期望管理不当',
                        '干系人参与度不足',
                        '干系人冲突处理不当'
                    ]
                }
            }
        }
    },

    // 计算题模板
    calculationTemplates: {
        earned_value: {
            name: '挣值分析',
            icon: '📊',
            formulas: [
                { name: '成本偏差', formula: 'CV = EV - AC', desc: 'CV>0成本节约，CV<0成本超支' },
                { name: '进度偏差', formula: 'SV = EV - PV', desc: 'SV>0进度提前，SV<0进度落后' },
                { name: '成本绩效指数', formula: 'CPI = EV / AC', desc: 'CPI>1成本效率高，CPI<1成本效率低' },
                { name: '进度绩效指数', formula: 'SPI = EV / PV', desc: 'SPI>1进度效率高，SPI<1进度效率低' },
                { name: '完工估算', formula: 'EAC = BAC / CPI', desc: '按当前绩效预测总成本' },
                { name: '完工尚需估算', formula: 'ETC = (BAC - EV) / CPI', desc: '剩余工作所需成本' },
                { name: '完工偏差', formula: 'VAC = BAC - EAC', desc: '预测的成本偏差' }
            ],
            steps: [
                '列出已知条件（PV、EV、AC、BAC等）',
                '写出使用的公式',
                '代入数值计算',
                '给出结果分析'
            ],
            example: {
                title: '挣值分析示例',
                content: `【题目】某项目计划预算100万元，当前时间计划完成50万元，实际完成40万元，实际花费45万元。请进行挣值分析。

【答案】
已知条件：
- BAC = 100万元
- PV = 50万元
- EV = 40万元
- AC = 45万元

1. 计算偏差：
   CV = EV - AC = 40 - 45 = -5万元
   SV = EV - PV = 40 - 50 = -10万元
   
   分析：CV<0，成本超支5万元；SV<0，进度落后10万元。

2. 计算绩效指数：
   CPI = EV / AC = 40 / 45 = 0.89
   SPI = EV / PV = 40 / 50 = 0.80
   
   分析：CPI<1，成本效率低，每花1元只创造0.89元价值；
         SPI<1，进度效率低，只完成计划的80%。

3. 预测完工估算：
   EAC = BAC / CPI = 100 / 0.89 = 112.36万元
   ETC = (BAC - EV) / CPI = (100 - 40) / 0.89 = 67.42万元
   VAC = BAC - EAC = 100 - 112.36 = -12.36万元
   
   分析：按当前绩效，预计项目总成本112.36万元，超支12.36万元。

4. 建议：
   - 分析成本超支原因，采取纠正措施
   - 考虑赶工或快速跟进来追回进度
   - 加强成本监控，控制后续支出`
            }
        },
        critical_path: {
            name: '关键路径',
            icon: '🛤️',
            formulas: [
                { name: '最早开始时间', formula: 'ES = 紧前活动EF的最大值', desc: '从起点正向计算' },
                { name: '最早完成时间', formula: 'EF = ES + 活动历时', desc: '最早开始加历时' },
                { name: '最晚完成时间', formula: 'LF = 紧后活动LS的最小值', desc: '从终点反向计算' },
                { name: '最晚开始时间', formula: 'LS = LF - 活动历时', desc: '最晚完成减历时' },
                { name: '总时差', formula: 'TF = LS - ES = LF - EF', desc: '不影响总工期的机动时间' },
                { name: '自由时差', formula: 'FF = 紧后活动ES的最小值 - EF', desc: '不影响紧后活动的机动时间' }
            ],
            steps: [
                '画出网络图',
                '正推计算ES、EF',
                '逆推计算LS、LF',
                '计算总时差',
                '找出关键路径'
            ],
            example: {
                title: '关键路径示例',
                content: `【题目】某项目活动如下：
A(3天)→B(4天)→D(5天)
A(3天)→C(2天)→D(5天)
求关键路径和项目工期。

【答案】
1. 绘制网络图：
        B(4)    D(5)
    A(3)→→→→→→→→→→→
        ↘          ↗
         C(2)

2. 正推计算：
   A: ES=0, EF=0+3=3
   B: ES=3, EF=3+4=7
   C: ES=3, EF=3+2=5
   D: ES=max(7,5)=7, EF=7+5=12

3. 逆推计算：
   D: LF=12, LS=12-5=7
   B: LF=7, LS=7-4=3
   C: LF=7, LS=7-2=5
   A: LF=min(3,3)=3, LS=3-3=0

4. 计算总时差：
   TF(A) = LS-ES = 3-0 = 0
   TF(B) = LS-ES = 3-3 = 0
   TF(C) = LS-ES = 5-3 = 2
   TF(D) = LS-ES = 7-7 = 0

5. 关键路径：
   TF=0的活动：A、B、D
   关键路径：A→B→D
   项目工期：3+4+5=12天`
            }
        },
        communication_channels: {
            name: '沟通渠道',
            icon: '📡',
            formulas: [
                { name: '沟通渠道数', formula: 'n(n-1)/2', desc: 'n为干系人数量' }
            ],
            steps: [
                '确定干系人数量n',
                '代入公式计算',
                '给出结果'
            ],
            example: {
                title: '沟通渠道示例',
                content: `【题目】项目团队有5人，加上项目经理和客户代表共7人，沟通渠道有多少条？

【答案】
n = 7
沟通渠道数 = n(n-1)/2 = 7×6/2 = 21条`
            }
        }
    },

    // 综合分析框架
    comprehensiveFramework: {
        name: '综合分析框架',
        icon: '📚',
        steps: [
            {
                title: '问题识别',
                desc: '找出案例中存在的问题',
                points: [
                    '从项目管理角度分析',
                    '从技术角度分析',
                    '从人员角度分析',
                    '从流程角度分析'
                ]
            },
            {
                title: '问题分析',
                desc: '分析问题产生的原因',
                points: [
                    '直接原因',
                    '根本原因',
                    '影响范围'
                ]
            },
            {
                title: '解决方案',
                desc: '提出改进建议',
                points: [
                    '短期措施',
                    '长期措施',
                    '预防措施'
                ]
            },
            {
                title: '理论依据',
                desc: '结合项目管理知识',
                points: [
                    '引用相关理论',
                    '引用最佳实践',
                    '引用标准规范'
                ]
            }
        ]
    },

    // 案例类型快速识别表
    caseTypeRecognition: [
        { feature: '项目启动混乱、目标不清', areas: '整体管理、范围管理', keyPoints: '项目章程、范围说明书' },
        { feature: '需求频繁变更、范围蔓延', areas: '范围管理、变更管理', keyPoints: 'WBS、变更控制流程' },
        { feature: '项目延期、进度落后', areas: '进度管理、风险管理', keyPoints: '关键路径、进度压缩' },
        { feature: '成本超支、预算不足', areas: '成本管理、采购管理', keyPoints: '挣值分析、成本控制' },
        { feature: '质量问题、返工', areas: '质量管理', keyPoints: '质量保证、质量控制' },
        { feature: '团队冲突、人员流失', areas: '人力资源管理、沟通管理', keyPoints: '团队建设、冲突解决' },
        { feature: '沟通不畅、信息失真', areas: '沟通管理、干系人管理', keyPoints: '沟通计划、干系人分析' },
        { feature: '风险事件频发', areas: '风险管理', keyPoints: '风险识别、风险应对' },
        { feature: '供应商问题、合同纠纷', areas: '采购管理', keyPoints: '合同管理、采购控制' }
    ],

    // 答题技巧
    answeringTips: {
        mustDo: [
            { title: '认真审题', desc: '找出关键词，理解问题要求，注意分数分布' },
            { title: '条理清晰', desc: '分条作答，编号明确，逻辑清晰' },
            { title: '结合理论', desc: '引用项目管理知识，使用专业术语，理论联系实际' },
            { title: '完整全面', desc: '考虑多个角度，不要遗漏要点，适当展开说明' },
            { title: '时间控制', desc: '合理分配时间，不要在某题耗时过长，留出检查时间' }
        ],
        avoid: [
            '答题过于简单，只列要点不展开',
            '理论与实践脱节',
            '计算题过程不完整',
            '答非所问',
            '时间分配不当'
        ]
    }
};
