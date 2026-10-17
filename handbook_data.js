// 选择题考点冲刺手册数据（由 parse_handbook.py 从两个手册 HTML 自动生成，勿手改）
// 来源: 第1-7章手册 + 第9-15章手册
window.handbookData = {
 "parts": [
  {
   "id": "part17",
   "icon": "🖥️",
   "title": "第1-7章 · 综合知识（技术篇）",
   "subtitle": "信息与信息化 → 软硬件系统集成",
   "chapters": [
    {
     "id": "ch1",
     "isAppendix": false,
     "num": "01",
     "title": "信息与信息化",
     "en": "INFORMATION & INFORMATIZATION",
     "desc": "",
     "stat": [
      {
       "label": "",
       "html": "<span>速记卡片：<b>P1–P4</b></span>"
      },
      {
       "label": "",
       "html": "<span>命题热点：<b>质量属性、传输模型、生命周期、六要素、新基建、数据价值化</b></span>"
      },
      {
       "label": "",
       "html": "<span>建议用时：<b>40分钟</b></span>"
      }
     ],
     "sections": [
      {
       "title": "一、信息基础",
       "points": [
        {
         "id": "考点1-01",
         "title": "信息的概念",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n      <li>信息就是<span class=\"eye\">确定性的增加</span>；信息<span class=\"eye\">既不是物质，也不是能量</span>。</li>\n      <li><span class=\"kw\">熵</span>代表<span class=\"eye\">无序</span>；信息代表<span class=\"eye\">有序（负熵）</span>。</li>\n      <li><span class=\"kw\">香农</span>：“信息是用来<span class=\"eye\">消除随机不确定性</span>的东西。”</li>\n    </ul><span class=\"ask\"><b>命题方式：</b>“信息是一种能量/物质”判错；把“消除不确定性”偷换为“增加不确定性”。</span>"
        },
        {
         "id": "考点1-02",
         "title": "信息的七个质量属性",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>属性</th><th>含义（题眼）</th><th>属性</th><th>含义（题眼）</th></tr></thead>\n        <tbody>\n          <tr><td>精确性</td><td>精准程度</td><td>完整性</td><td>全面程度</td></tr>\n          <tr><td>可验证性</td><td>可被<span class=\"eye\">证实或证伪</span></td><td>可靠性</td><td>可信任，符合预期</td></tr>\n          <tr><td>及时性</td><td>时刻间隔长短（获得信息的<span class=\"eye\">时间</span>）</td><td>经济性</td><td>成本可接受</td></tr>\n          <tr><td>安全性</td><td colspan=\"3\"><span class=\"eye\">非授权访问的可能性越低，安全性越高</span></td></tr>\n        </tbody>\n      </table>\n    </div><span class=\"ask\"><b>命题方式：</b>场景选词——“信息内容是否全面”→完整性；“能否被证实”→可验证性；“获取代价”→经济性。</span>"
        },
        {
         "id": "考点1-03",
         "title": "信息传输模型（必考流程）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"flow\">\n      <div class=\"step\">信源<small>发出者（实体）</small></div>\n      <div class=\"step\">编码<small>发送端：量化器/压缩编码器/调制器</small></div>\n      <div class=\"step\">信道<small><b>TCP/IP网络</b>，受噪声干扰</small></div>\n      <div class=\"step\">解码<small>接收端：译码器/数模转换器/解调器</small></div>\n      <div class=\"step\">信宿<small>接收者</small></div>\n    </div><ul>\n      <li><span class=\"kw\">噪声</span>散布在通信过程中，核心是对<span class=\"eye\">信道</span>的干扰。</li>\n      <li>编码端=发送端，解码端=接收端，<span class=\"eye\">方向不可颠倒</span>。</li>\n    </ul><div class=\"box mn\"><span class=\"bt\">🔑 口诀</span>解码侧设备“<b>姐易换</b>”——译（译码器）、模（数模转换器）、换（解调器）。</div>"
        },
        {
         "id": "考点1-04",
         "title": "信息系统的特征",
         "freq": 4,
         "freqText": "中频",
         "html": "<div class=\"grid2\">\n      <div class=\"minicard\"><h4 class=\"eye\">脆弱性</h4><ul><li>系统面临<span class=\"eye\">丧失结构、功能、秩序</span>的特性</li></ul></div>\n      <div class=\"minicard\"><h4 class=\"kw\">开放性</h4><ul><li>系统的<span class=\"eye\">可访问性</span></li></ul></div>\n      <div class=\"minicard\" style=\"grid-column:1/-1\"><h4 class=\"gn\">健壮性（鲁棒性）</h4><ul><li>系统所处环境出现<span class=\"eye\">非预期状态</span>时，能够<span class=\"eye\">抵御</span>的能力</li></ul></div>\n    </div><span class=\"ask\"><b>易混：</b>“抵御非预期状态”是健壮性，不是开放性；脆弱性对应“结构/功能/秩序丧失”。</span>"
        }
       ],
       "html": ""
      },
      {
       "title": "二、信息系统生命周期（★★★）",
       "points": [
        {
         "id": "考点1-05",
         "title": "生命周期五阶段：阶段—工作—交付物",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>阶段</th><th>主要工作</th><th>交付物/题眼</th></tr></thead>\n        <tbody>\n          <tr><td>系统规划</td><td>根据组织发展战略确定系统发展战略→分析和预测需求→研究建设必要性→拟方案→<span class=\"eye\">可行性研究/项目开发计划</span></td><td>编设计任务书</td></tr>\n          <tr><td>系统分析</td><td><span class=\"eye\">需求分析</span>；提出<span class=\"eye\">逻辑模型</span></td><td>系统说明书——解决“<b>做什么</b>”</td></tr>\n          <tr><td>系统设计</td><td>概要设计、详细设计；实现逻辑模型，<span class=\"eye\">设计新系统物理模型</span></td><td>系统设计说明书——解决“<b>怎么做</b>”</td></tr>\n          <tr><td>系统实施</td><td><span class=\"eye\">编码、测试</span>；购置、安装、培训等</td><td>系统测试分析报告</td></tr>\n          <tr><td>系统运行和维护</td><td colspan=\"2\">维护与评价、记录、修改</td></tr>\n        </tbody>\n      </table>\n    </div><div class=\"box mn\"><span class=\"bt\">🔑 口诀</span>“<b>分析逻辑、设计物理</b>”；规划—分析—设计—实施—运维，顺序题年年轮换。</div><span class=\"ask\"><b>命题方式：</b>系统说明书出现在哪个阶段→系统分析；“做什么 vs 怎么做”二选一。</span>"
        }
       ],
       "html": ""
      },
      {
       "title": "三、信息化基本概念与体系",
       "points": [
        {
         "id": "考点1-06",
         "title": "信息化的内涵与概念",
         "freq": 3,
         "freqText": "基础",
         "html": "<ul>\n      <li><span class=\"kw\">内涵四方面</span>：<span class=\"eye\">网络体系</span>（信息资源/系统、公用通信网络平台）、<span class=\"eye\">产业基础</span>（技术研究与开发、信息装备制造/咨询服务）、<span class=\"eye\">社运环境</span>（体制、政策法律、制度、教育、道德）、<span class=\"eye\">效用积累</span>（劳动者素质、国家现代化水平和人民生活质量提高）。</li>\n      <li><span class=\"kw\">信息化概念</span>：主体＝<span class=\"eye\">全体社会</span>；空域＝<span class=\"eye\">一切领域</span>；时域＝<span class=\"eye\">长期过程</span>；途径＝改革；手段＝工具；目标＝提升。</li>\n    </ul>"
        },
        {
         "id": "考点1-07",
         "title": "国家信息化体系六要素（必考地位对应）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>要素</th><th>地位（题眼）</th></tr></thead>\n        <tbody>\n          <tr><td>信息技术应用</td><td><span class=\"eye\">龙头</span></td></tr>\n          <tr><td>信息资源</td><td><span class=\"eye\">核心任务</span></td></tr>\n          <tr><td>信息网络</td><td><span class=\"eye\">基础设施</span></td></tr>\n          <tr><td>信息技术和产业</td><td><span class=\"eye\">基础</span></td></tr>\n          <tr><td>信息化人才</td><td><span class=\"eye\">成功之本</span></td></tr>\n          <tr><td>政策法规和标准规范</td><td><span class=\"eye\">保障</span></td></tr>\n        </tbody>\n      </table>\n    </div><div class=\"box mn\"><span class=\"bt\">🔑 图示记忆</span>上“鹰”（信息技术应用·龙头）、下“鸡”（技术和产业·基础）、左“人”（人才·成功之本）、右“龟”（政策法规标准规范·保障）。</div>"
        },
        {
         "id": "考点1-08",
         "title": "信息化趋势与“三步走”",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li>组织层面：产品、产业、社会生活、国民经济信息化。</li>\n      <li>国家信息化“三步走”：<span class=\"eye\">2020年：先进</span>（网络大国）→<span class=\"eye\">2025年：领先</span>（大型跨国网信企业）→<span class=\"eye\">21世纪中叶：引领</span>（网络强国）。</li>\n    </ul><div class=\"box trap\"><span class=\"bt\">⚠ 易错</span>年份与目标词严格对应：先进—领先—引领，递进不可乱序。</div>"
        }
       ],
       "html": ""
      },
      {
       "title": "四、现代化与新型基础设施",
       "points": [
        {
         "id": "考点1-09",
         "title": "新型基础设施（新基建）",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n      <li>定位：以<span class=\"eye\">新发展理念为引领、以技术创新为驱动、以信息网络为基础</span>；具有<span class=\"eye\">战略性、基础性、先导性</span>。</li>\n      <li><span class=\"kw\">七大领域</span>：5G、人工智能、大数据中心、工业互联网、特高压、城际高铁和轨道交通、新能源充电桩。</li>\n      <li><span class=\"kw\">三类划分</span>：①信息基础设施（技术新）：通信、算力、新技术；②融合基础设施（应用新）：深度应用，能源、交通等；③创新基础设施（平台新）：产业技术创新、科技、科教。</li>\n    </ul><div class=\"box mn\"><span class=\"bt\">🔑 口诀</span>七大领域“<b>5人打工特高薪</b>”（5G/人工智能/大数据中心/工业互联网/特高压/高铁轨交/新能源充电桩）；三类“<b>通算术 · 能交 · 产科</b>”。</div>"
        },
        {
         "id": "考点1-10",
         "title": "工业互联网平台体系（四地位）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>组成</th><th>地位</th><th>要点</th></tr></thead>\n        <tbody>\n          <tr><td>安全</td><td><span class=\"eye\">保障</span></td><td>特点：范围广、影响大、防护弱；监测预警、应急响应、检测评估、功能测试</td></tr>\n          <tr><td>数据</td><td><span class=\"eye\">要素</span></td><td>重要、复杂、专业</td></tr>\n          <tr><td>网络</td><td><span class=\"eye\">基础</span></td><td>①标识解析 ②网络互联 ③数据互通</td></tr>\n          <tr><td>平台</td><td><span class=\"eye\">中枢</span></td><td>边缘层、IaaS、PaaS、SaaS；作用：数据汇聚、建模分析、知识复用、应用创新</td></tr>\n        </tbody>\n      </table>\n    </div><div class=\"box trap\"><span class=\"bt\">⚠ 易错</span>工业互联网<span class=\"eye\">不是简单应用</span>，而是更为丰富的内涵和外延；平台对应“操作系统”。</div>"
        },
        {
         "id": "考点1-11",
         "title": "农业农村现代化 · 两化融合 · 智能制造",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li>农业农村现代化：农业现代化、农业信息化、乡村振兴战略；重点建设<span class=\"eye\">基础设施、智慧农业、数字乡村</span>。</li>\n      <li><span class=\"kw\">两化融合</span>＝信息化和工业化；<span class=\"eye\">信息化带动工业化，核心是信息化支撑</span>。融合四内容：技术融合、产品融合、产业衍生、业务融合。</li>\n      <li><span class=\"kw\">智能制造</span>五自：自感知、自学习、自决策、自执行、自适应。</li>\n      <li>智能制造能力要素：人员（组织战略、人员技能）、技术（数据、集成、信息安全）、资源（装备、网络）、制造（设计、生产、物流、销售、服务）。</li>\n      <li>智能制造能力成熟度五级：一级规划级、二级规范级、三级集成级、四级优化级、五级引领级。</li>\n    </ul><div class=\"box mn\"><span class=\"bt\">🔑 口诀</span>成熟度“<b>一花二饭三成四友五菱</b>”。</div>"
        },
        {
         "id": "考点1-12",
         "title": "服务现代化与消费互联网",
         "freq": 3,
         "freqText": "基础",
         "html": "<ul>\n      <li>融合3形态：<span class=\"eye\">结合型、绑定型、延伸型</span>。</li>\n      <li><span class=\"kw\">消费互联网</span>（无身份社会）：本质是个人虚拟化、增强体验；属性＝媒体＋产业。</li>\n    </ul>"
        }
       ],
       "html": ""
      },
      {
       "title": "五、数字中国（重点新增内容）",
       "points": [
        {
         "id": "考点1-13",
         "title": "数字中国总体框架与数字经济",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n      <li>数字中国三大组成：<span class=\"eye\">数字经济</span>（生产方式变革）、<span class=\"eye\">数字政府</span>（治理方式变革）、<span class=\"eye\">数字社会</span>（生活方式变革）。</li>\n      <li><span class=\"kw\">数字产业化</span>产业构成：数字产业化（数字产品制造业、服务业、数字技术应用业、数字要素驱动业）＋产业数字化（数字化效率提升业）。</li>\n      <li>整体构成：数字产业化、产业数字化、<span class=\"eye\">数字化治理和数据价值化</span>。</li>\n      <li>发展重点：物联网、云计算、大数据、区块链、工业互联网、虚拟现实增强现实、人工智能。</li>\n    </ul>"
        },
        {
         "id": "考点1-14",
         "title": "产业数字化 · 数字化治理 · 数据价值化",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n      <li>产业数字化主线：<span class=\"eye\">数据为要素，赋能为主线，价值为核心</span>；实施“<span class=\"eye\">上云用数赋智</span>”。</li>\n      <li><span class=\"kw\">六链融合</span>：产业链、创新链、供应链、要素链、资金链、政策链。</li>\n      <li><span class=\"kw\">数字化治理</span>＝“数字技术+治理”：全社会，数据说话、数据决策、数据管理、数据创新。</li>\n    </ul><div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>数据价值化三化</th><th>定位</th><th>内容</th></tr></thead>\n        <tbody>\n          <tr><td>资源化</td><td><span class=\"eye\">起点</span></td><td>无序变有序、使用价值</td></tr>\n          <tr><td>资产化</td><td><span class=\"eye\">核心</span></td><td>流通交易、实现价值</td></tr>\n          <tr><td>资本化</td><td>实现社会化配置</td><td>信贷融资、证券化</td></tr>\n        </tbody>\n      </table>\n    </div><div class=\"box trap\"><span class=\"bt\">⚠ 易错</span>资源化是“起点”、资产化是“核心”，二者地位高频互换设错。</div>"
        },
        {
         "id": "考点1-15",
         "title": "数字政府",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li>治理模式：“用数据决策、数据服务、数据创新”；“互联网+政务”目的：<span class=\"eye\">以人为本</span>。</li>\n      <li>特征：协同化（跨层级、跨地域、跨部门）、云端化、智能化、数据化、动态化；关键词：<span class=\"eye\">共享、互通和便利</span>。</li>\n      <li><span class=\"kw\">主要内容</span>：①一网通办（<span class=\"eye\">个人自主填报</span>）对应一窗式办理（工作人员填报）；②跨省通办：全程网办、代收代办、多地联办；③一网统管：一屏（整合）、一网（政务云/政务网/大数据中心）、预警、创新、联动。</li>\n    </ul>"
        },
        {
         "id": "考点1-16",
         "title": "数字社会（智慧城市·数字乡村）",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li>数字民生：普惠、赋能、利民。</li>\n      <li><span class=\"kw\">智慧城市</span>：“人民城市为人民”；生命周期管理——规划设计、部署实施、运营管理、评估改进、创新发展；目标五位一体：城市治理、民生服务、生态宜居、产业经济、精神文明。</li>\n      <li>智慧城市核心能力要素：数字孪生、数据治理、多元融合、态势感知、边际决策。</li>\n      <li>智慧城市成熟度五级：规划级、管理级、协同级、优化级（持续提升）、引领级。</li>\n      <li><span class=\"kw\">数字乡村</span>：2035年城乡“数字鸿沟”大幅缩小；21世纪中叶全面实现农业强、农村美、农民富。</li>\n      <li>数字生活：工具、内容、方式数字化；数字生态：数据要素市场、数字营商环境、网络安全保护等。</li>\n    </ul>"
        }
       ],
       "html": ""
      },
      {
       "title": "六、数字化转型与元宇宙",
       "points": [
        {
         "id": "考点1-17",
         "title": "数字化转型：三元空间·驱动因素·S8D模型",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li><span class=\"kw\">三元空间</span>：信息空间、物理空间、社会空间。转型建立在数字化转换、数字化升级基础上，<span class=\"eye\">以业务模式为目标</span>。</li>\n      <li><span class=\"kw\">驱动因素</span>：生产力飞升（<span class=\"eye\">第四次科技革命</span>）、生产要素变化（<span class=\"eye\">数据要素诞生</span>）、信息传播效率突破（永生性、无限性、即时性及方向性）、“智慧主体”规模复制与“智能+”（智慧主体<span class=\"eye\">不单纯是自然人</span>）。</li>\n      <li><span class=\"kw\">DIKW模型</span>（单向）：数据→信息→知识→智慧。</li>\n      <li><span class=\"kw\">智慧转移S8D</span>：智慧结构化（业务体系层面）、知识模型化（逻辑关系）、过程信息化（各执行操作）、数据平台化（采集、存储共享）；对象数字化（数字化表达）、孪生虚拟化（物理到信息空间的映射）、架构可视化（知识经验复用创新）、计算智能化（调度和决策）。</li>\n    </ul>"
        },
        {
         "id": "考点1-18",
         "title": "持续迭代四活动与元宇宙",
         "freq": 3,
         "freqText": "基础",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>活动</th><th>对应应用</th></tr></thead>\n        <tbody>\n          <tr><td>信息物理世界 CPS</td><td>技术应用：数字孪生</td></tr>\n          <tr><td>决策能力边际化（Ptoe）</td><td>管理应用：智能自动化</td></tr>\n          <tr><td>科学社会物理赛博机制 CPSS</td><td>发展应用：加快服务创新</td></tr>\n          <tr><td>数字框架与信息调制 DFIM</td><td>安全应用：减少布朗运动</td></tr>\n        </tbody>\n      </table>\n    </div><ul>\n      <li><span class=\"kw\">元宇宙</span>：虚拟世界形态中持续迭代，形成“数字社会治理”；特征：虚拟身份、沉浸式体验、虚拟经济、虚拟社会治理。</li>\n    </ul>"
        }
       ],
       "html": ""
      }
     ]
    },
    {
     "id": "ch2",
     "isAppendix": false,
     "num": "02",
     "title": "信息技术发展",
     "en": "INFORMATION TECHNOLOGY",
     "desc": "",
     "stat": [
      {
       "label": "",
       "html": "<span>速记卡片：<b>P5–P9</b></span>"
      },
      {
       "label": "",
       "html": "<span>命题热点：<b>OSI七层、TCP/UDP协议归属、存储DAS/NAS/SAN、数据库、加密、云计算、区块链、大数据特征</b></span>"
      },
      {
       "label": "",
       "html": "<span>建议用时：<b>70分钟</b></span>"
      }
     ],
     "sections": [
      {
       "title": "一、计算机与网络基础",
       "points": [
        {
         "id": "考点2-01",
         "title": "IT概念 · 硬件五部件 · 软件",
         "freq": 3,
         "freqText": "基础",
         "html": "<ul>\n      <li>IT是研究如何<span class=\"eye\">获取/处理/传输/使用</span>信息的技术。</li>\n      <li><span class=\"kw\">硬件</span>：控制器（<span class=\"eye\">中枢神经</span>）、运算器（由控制器决定）、存储器（字节）、输入设备、输出设备。</li>\n      <li><span class=\"kw\">软件</span>：系统软件、应用软件、<span class=\"eye\">中间件</span>（处于操作系统和应用程序之间）。</li>\n      <li>通信系统＝源系统＋传输系统＋目的系统；关键技术：数字通信、信息传输、通信网络。</li>\n    </ul>"
        },
        {
         "id": "考点2-02",
         "title": "网络分类（作用范围距离是必背数字题）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>网络</th><th>英文</th><th>作用范围</th></tr></thead>\n        <tbody>\n          <tr><td>个人局域网</td><td>PAN</td><td><span class=\"eye\">10m</span></td></tr>\n          <tr><td>局域网</td><td>LAN</td><td><span class=\"eye\">1km</span></td></tr>\n          <tr><td>城域网</td><td>MAN</td><td><span class=\"eye\">5–50km</span></td></tr>\n          <tr><td>广域网</td><td>WAN</td><td><span class=\"eye\">几十～几千公里</span></td></tr>\n        </tbody>\n      </table>\n    </div><ul>\n      <li>按使用者：<span class=\"kw\">公用网</span>（大众用）｜<span class=\"kw\">专用网</span>（本单位人用）。</li>\n      <li>网络传输技术：以太网技术和网络交换技术。</li>\n    </ul>"
        },
        {
         "id": "考点2-03",
         "title": "网络设备交换层次（地址变更对应题）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>交换层次</th><th>设备/网络</th><th>地址变更</th></tr></thead>\n        <tbody>\n          <tr><td>物理层</td><td>电话网</td><td>—</td></tr>\n          <tr><td>链路层（二层）</td><td>二层交换机</td><td><span class=\"eye\">MAC地址</span>变更</td></tr>\n          <tr><td>网络层（三层）</td><td>三层交换机/路由器</td><td><span class=\"eye\">IP地址</span>变更</td></tr>\n          <tr><td>传输层（四层）</td><td>四层交换机</td><td><span class=\"eye\">端口</span>变更</td></tr>\n          <tr><td>应用层</td><td colspan=\"2\"><span class=\"eye\">网关</span></td></tr>\n        </tbody>\n      </table>\n    </div><div class=\"box mn\"><span class=\"bt\">🔑 口诀</span>“<b>无话连二、络三传四、应关</b>”。</div>"
        },
        {
         "id": "考点2-04",
         "title": "OSI七层协议（每年必考2分）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>层次</th><th>典型设备/单位</th><th>代表协议/标准</th></tr></thead>\n        <tbody>\n          <tr><td>物理层</td><td>电缆</td><td>FDDI、RS-232、V.35、RJ-45</td></tr>\n          <tr><td>数据链路层</td><td><span class=\"eye\">帧</span></td><td>IEEE802.3/2、HDLC、PPP、ATM</td></tr>\n          <tr><td>网络层</td><td><span class=\"eye\">路由器</span></td><td>IP、ICMP、IGMP、IPX、ARP</td></tr>\n          <tr><td>传输层</td><td>可靠无错、顺序</td><td><span class=\"eye\">TCP、UDP</span>、SPX</td></tr>\n          <tr><td>会话层</td><td>通信</td><td>RPC、SQL、NFS</td></tr>\n          <tr><td>表示层</td><td><span class=\"eye\">翻译官</span></td><td>GIF、JPEG、MPEG、ASCII、DES</td></tr>\n          <tr><td>应用层</td><td>提供接口</td><td>HTTP、Telnet、FTP、SMTP</td></tr>\n        </tbody>\n      </table>\n    </div><div class=\"box mn\"><span class=\"bt\">🔑 口诀</span>七层顺序“<b>武术忘传会彪鹰</b>”（物/数/网/传/会/表/应）；数据链路层“真的P颠P颠上路取钱，花802吃海底捞”；表示层“示意GGII”（GIF/JPEG/MPEG/ASCII/DES）。</div><span class=\"ask\"><b>命题方式：</b>RJ-45、PPP、ARP、SQL、JPEG、FTP分别在哪层——按表对号入座。</span>"
        },
        {
         "id": "考点2-05",
         "title": "IEEE 802标准系列",
         "freq": 3,
         "freqText": "基础",
         "html": "<ul>\n      <li>1协（802.1 概览）、2逻（802.2 逻辑链路控制）、3以（以太网）、4总、5环、6城、7宽、8光、9音（802.9 语音）、10全（802.10 安全）、11无限（802.11 无线）。</li>\n    </ul>"
        },
        {
         "id": "考点2-06",
         "title": "TCP/IP：应用层协议归属（高频判断）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>建立在 TCP 上</th><th>建立在 UDP 上</th></tr></thead>\n        <tbody>\n          <tr>\n            <td>FTP 文件传输<br/>HTTP 超文本传输<br/>SMTP 简单邮件传输<br/>Telnet 远程登录</td>\n            <td>DHCP 动态主机配置<br/>TFTP 简单文件传输<br/>DNS 域名系统<br/>SNMP 网络管理</td>\n          </tr>\n        </tbody>\n      </table>\n    </div><div class=\"box trap\"><span class=\"bt\">⚠ 易错铁律</span>协议名<b>带“T”字母的均建立在TCP上，唯独TFTP例外</b>（TFTP走UDP）。</div><div class=\"grid2\">\n      <div class=\"minicard\"><h4 class=\"kw\">TCP</h4><ul><li>面向连接、可靠性高</li><li>传输数据量<span class=\"eye\">少</span></li></ul></div>\n      <div class=\"minicard\"><h4 class=\"kw\">UDP</h4><ul><li>无连接、不可靠</li><li>传输量<span class=\"eye\">大</span></li></ul></div>\n    </div>"
        },
        {
         "id": "考点2-07",
         "title": "软件定义网络 SDN 与 5G",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li><span class=\"kw\">SDN</span>：新型网络创新架构，是<span class=\"eye\">网络虚拟化</span>；核心思想<span class=\"eye\">数据与控制相分离</span>，通过统一接口（<span class=\"eye\">OpenFlow</span>）交互；接口具有<span class=\"eye\">开放性</span>。</li>\n      <li>三平面（由上到下/由北到南）：①应用平面（无须关心底层细节）②控制平面（控制器，掌握全局网络、转发规则的控制）③数据平面（网络通用硬件，快速处理匹配的数据包）。</li>\n      <li><span class=\"kw\">5G特点</span>：<span class=\"eye\">高速率、大连接、低时延</span>。指标：20G峰速、1G体验，百万连接、3倍效，1ms时延、10M连接密度，500公里高移动。</li>\n      <li>5G三大场景：eMBB增强移动宽带、uRLLC超高可靠低时延通信、mMTC海量机器类通信。</li>\n    </ul>"
        }
       ],
       "html": ""
      },
      {
       "title": "二、存储与数据管理",
       "points": [
        {
         "id": "考点2-08",
         "title": "外挂存储：DAS / NAS / SAN 对比",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>类型</th><th>全称/方式</th><th>数据单位/协议</th><th>特点</th></tr></thead>\n        <tbody>\n          <tr><td>DAS</td><td>直连式存储</td><td>数据块，直接连服务器</td><td>硬件的堆叠</td></tr>\n          <tr><td>NAS</td><td>网络存储</td><td><span class=\"eye\">网络文件存储及文件备份；TCP/IP协议</span></td><td>基于文件共享</td></tr>\n          <tr><td>SAN</td><td>存储网络</td><td><span class=\"eye\">数据块、光纤</span></td><td>大型、成本高、速度快</td></tr>\n        </tbody>\n      </table>\n    </div><ul>\n      <li>存储按封闭性分类：封闭系统和开放系统（内置和外挂）。</li>\n      <li>存储虚拟化核心技术：<span class=\"eye\">“云存储”</span>；绿色存储追求<span class=\"eye\">存储容量、性能、能耗三者平衡</span>。</li>\n    </ul>"
        },
        {
         "id": "考点2-09",
         "title": "三种数据结构模型（格式化数据模型）",
         "freq": 4,
         "freqText": "中频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>模型</th><th>结构</th><th>优点</th><th>缺点</th></tr></thead>\n        <tbody>\n          <tr><td>层次模型</td><td><span class=\"eye\">树、一对多</span></td><td>结构简单、完整性、查询效率高</td><td>不适合多对多、限制多、程序化</td></tr>\n          <tr><td>网状模型</td><td><span class=\"eye\">有向图、多对多</span></td><td>表示复杂关系、性能良好</td><td>使用不易、数据独立性差</td></tr>\n          <tr><td>关系模型</td><td><span class=\"eye\">二维表格</span></td><td>结构和概念简单、关系规范化</td><td>查询效率低、增加难度</td></tr>\n        </tbody>\n      </table>\n    </div>"
        },
        {
         "id": "考点2-10",
         "title": "关系型数据库 SQL",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li><span class=\"kw\">ACID原则</span>：<span class=\"eye\">原子性、一致性、隔离性、持久性</span>。</li>\n      <li>特征：表中的<span class=\"eye\">行、列次序并不重要</span>；主键PK；领域（取值范围）。</li>\n      <li>优点：使用方便、易于维护、容易理解；缺点：性能欠佳、扩展困难。</li>\n    </ul>"
        },
        {
         "id": "考点2-11",
         "title": "非关系型数据库 NoSQL",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li><span class=\"eye\">不保证遵循ACID原则</span>；非结构化存储、多维关系模型、具有特定的使用场景。</li>\n      <li><span class=\"kw\">四类</span>：①键值（简单易部署、高并发）②列存储（<span class=\"eye\">海量存储</span>）③面向文档（嵌套、查询效率高）④图形（实体为顶点，关系为边）。</li>\n      <li>优点：简单、高并发、支持分布式（易于扩展）；缺点：事务支持较弱、通用性弱、无完整约束。</li>\n    </ul>"
        },
        {
         "id": "考点2-12",
         "title": "数据仓库 · OLAP · OLTP",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li>数据仓库是<span class=\"eye\">面向主题的、集成的、非易失的且随时间变化</span>的数据集合，用于<span class=\"eye\">支持管理决策</span>；存放数据一般不再修改。</li>\n      <li><span class=\"eye\">数据源是基础，数据的存储与管理是核心与关键</span>。</li>\n      <li><span class=\"kw\">OLAP</span>：联机分析处理（数据仓库侧）；<span class=\"kw\">OLTP</span>：联机事务处理（业务操作侧）。</li>\n      <li>前端工具：查询、分析、报表、数据挖掘。</li>\n    </ul><div class=\"box trap\"><span class=\"bt\">⚠ 易错</span>OLAP重“分析决策”、OLTP重“事务处理”，场景题高频反置。</div>"
        }
       ],
       "html": ""
      },
      {
       "title": "三、信息安全基础",
       "points": [
        {
         "id": "考点2-13",
         "title": "安全三要素与四个安全层次",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n      <li><span class=\"kw\">安全三要素</span>：可用性（可以使用）、完整性（保证正确和完整、防修改篡改）、保密性（不被泄露）。</li>\n    </ul><div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>层次</th><th>性质</th><th>内容</th></tr></thead>\n        <tbody>\n          <tr><td>设备安全</td><td>首要问题、物质基础</td><td>稳定性（一定时间不出故障）、可靠性（正常执行）、可用性（正常使用）</td></tr>\n          <tr><td>数据安全</td><td><span class=\"eye\">静态安全</span></td><td>秘密性、完整性、可用性</td></tr>\n          <tr><td>行为安全</td><td><span class=\"eye\">动态安全</span></td><td>秘密性、完整性、可控性</td></tr>\n          <tr><td>内容安全</td><td>政治、法律、道德层次</td><td>知识产权保护、信息隐藏和隐私保护</td></tr>\n        </tbody>\n      </table>\n    </div>"
        },
        {
         "id": "考点2-14",
         "title": "加密体系：对称/非对称/Hash/签名/认证",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>技术</th><th>算法/特点</th><th>密钥</th></tr></thead>\n        <tbody>\n          <tr><td>对称加密</td><td><span class=\"eye\">DES</span>；加密解密密钥相同</td><td>私人秘钥</td></tr>\n          <tr><td>非对称加密</td><td><span class=\"eye\">RSA</span>；加密公开、解密保密</td><td>公开秘钥</td></tr>\n          <tr><td>Hash函数</td><td colspan=\"2\">具有<span class=\"eye\">错误检测能力</span></td></tr>\n          <tr><td>数字签名</td><td colspan=\"2\">证明当事者身份和数据真实性，<span class=\"eye\">利用RSA密码</span>；双方和第三方都可验证公开，不能抵赖、不能伪造</td></tr>\n          <tr><td>认证</td><td colspan=\"2\">证实某事是否名副其实；<span class=\"eye\">保密、双方认证，不准第三者认证</span></td></tr>\n        </tbody>\n      </table>\n    </div><div class=\"box mn\"><span class=\"bt\">🔑 口诀</span>“<b>对私D、非公R</b>”——对称→私人秘钥→DES；非对称→公开秘钥→RSA。</div>"
        },
        {
         "id": "考点2-15",
         "title": "操作系统安全五大威胁（场景识别）",
         "freq": 4,
         "freqText": "中频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>威胁</th><th>题眼特征</th></tr></thead>\n        <tbody>\n          <tr><td>计算机病毒</td><td><span class=\"eye\">复制传染</span></td></tr>\n          <tr><td>逻辑炸弹</td><td><span class=\"eye\">满足条件才爆炸</span></td></tr>\n          <tr><td>特洛伊木马</td><td>软件中含有一个<span class=\"eye\">察觉不出的程序段</span></td></tr>\n          <tr><td>隐蔽通道</td><td>违反安全策略、<span class=\"eye\">非公开的信息泄露路径</span></td></tr>\n          <tr><td>后门</td><td>嵌在操作系统中的<span class=\"eye\">一段非法代码</span></td></tr>\n        </tbody>\n      </table>\n    </div><ul><li>计算机设备安全：完整性、机密性、可用性、抗否认性、可审计性、可靠性；数据库系统安全针对<span class=\"eye\">用于存储而非传输</span>的数据安全问题。</li></ul>"
        }
       ],
       "html": ""
      },
      {
       "title": "四、网络与Web安全防护",
       "points": [
        {
         "id": "考点2-16",
         "title": "网络安全防御技术（主被动辨析）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>技术</th><th>要点</th></tr></thead>\n        <tbody>\n          <tr><td>防火墙</td><td>过滤机制，<span class=\"eye\">信内网不信外网</span>；数据报过滤、应用网关和代理服务；下一代含IPS、分析<span class=\"eye\">第7层（应用层）</span>流量、智能防火墙</td></tr>\n          <tr><td>入侵检测系统 IDS</td><td><span class=\"eye\">被动、报警</span></td></tr>\n          <tr><td>入侵防护系统 IPS</td><td><span class=\"eye\">主动</span>；进行控制、拦截</td></tr>\n          <tr><td>虚拟专用网络 VPN</td><td>在<span class=\"eye\">公用网络建立专用、安全通道</span></td></tr>\n          <tr><td>安全扫描</td><td><span class=\"eye\">发现漏洞</span></td></tr>\n          <tr><td>蜜罐技术</td><td><span class=\"eye\">主动防御、诱捕</span></td></tr>\n        </tbody>\n      </table>\n    </div>"
        },
        {
         "id": "考点2-17",
         "title": "Web威胁防护 · UEBA · 态势感知",
         "freq": 3,
         "freqText": "基础",
         "html": "<ul>\n      <li>Web访问控制：不被非法访问者访问；<span class=\"kw\">单点登录</span>：统一身份认证，“一点登录，多点访问”。</li>\n      <li><span class=\"kw\">网页防篡改</span>：核心内嵌（密码水印）、时间轮询、事件触发、文件过滤驱动。</li>\n      <li><span class=\"kw\">Web内容安全</span>：反间谍软件、电子邮件过滤、网页过滤。</li>\n      <li><span class=\"kw\">UEBA</span>（用户和实体行为分析）：以用户和实体为对象，利用大数据；三层＝数据获取层、算法分析层、场景应用层。</li>\n      <li><span class=\"kw\">网络安全态势感知</span>：<span class=\"eye\">预测未来</span>，在安全大数据基础上；关键技术：异构数据汇聚融合、威胁评估、评估与决策支撑、可视化。</li>\n    </ul>"
        }
       ],
       "html": ""
      },
      {
       "title": "五、新一代信息技术（选择大户）",
       "points": [
        {
         "id": "考点2-18",
         "title": "物联网：三层架构与关键技术",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>层次</th><th>功能</th><th>代表技术</th></tr></thead>\n        <tbody>\n          <tr><td>感知层</td><td><span class=\"eye\">采集</span>；物物相连</td><td>传感器、RFID、摄像头、二维码、GPS</td></tr>\n          <tr><td>网络层</td><td><span class=\"eye\">中枢、传递信息</span></td><td>互联网、广电网、云计算平台</td></tr>\n          <tr><td>应用层</td><td colspan=\"2\"><span class=\"eye\">用户的接口</span></td></tr>\n        </tbody>\n      </table>\n    </div><ul>\n      <li>关键技术：传感器技术（自动检测和自动控制）、传感网（微机电系统<span class=\"eye\">MEMS</span>，新的“生命”）、应用系统框架（机器终端智能交互）。</li>\n    </ul><div class=\"box trap\"><span class=\"bt\">⚠ 易错</span>RFID、传感器属于<span class=\"eye\">感知层</span>；云计算平台属于<span class=\"eye\">网络层</span>，归属题必考。</div>"
        },
        {
         "id": "考点2-19",
         "title": "云计算：三个服务层次",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>服务</th><th>提供内容</th><th>对应</th></tr></thead>\n        <tbody>\n          <tr><td>IaaS 基础设施即服务</td><td>计算机能力、存储空间</td><td>硬件设施</td></tr>\n          <tr><td>PaaS 平台即服务</td><td>开发平台环境</td><td><span class=\"eye\">操作系统</span></td></tr>\n          <tr><td>SaaS 软件即服务</td><td>应用软件</td><td>应用</td></tr>\n        </tbody>\n      </table>\n    </div><ul>\n      <li><span class=\"kw\">虚拟化技术</span>辨析：多任务＝一个操作系统多个程序运行；虚拟化＝多个操作系统多个程序运行；超线程＝单CPU模拟双CPU只能协同；<span class=\"eye\">容器技术是虚拟化的一种</span>。</li>\n      <li>多租户和访问控制：基于<span class=\"eye\">ABE密码体制</span>（数据提供者、可信第三方授权中心、云存储服务器和用户）；云存储技术＝快速、高效对海量数据<span class=\"eye\">在线处理</span>。</li>\n    </ul>"
        },
        {
         "id": "考点2-20",
         "title": "大数据：4V特征与关键技术",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n      <li><span class=\"kw\">特征</span>：数据海量、类型多样、处理速度快、<span class=\"eye\">价值密度低</span>。</li>\n      <li><span class=\"kw\">过程</span>：准备、存储、管理、分析计算、治理、知识展现。</li>\n    </ul><div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>技术</th><th>内容</th><th>代表</th></tr></thead>\n        <tbody>\n          <tr><td>获取技术</td><td colspan=\"2\">采集、整合、清洗</td></tr>\n          <tr><td rowspan=\"3\">分布式数据处理</td><td>离线的、复杂的</td><td><span class=\"eye\">Hadoop</span></td></tr>\n          <tr><td>离线的、快速的</td><td><span class=\"eye\">Spark</span></td></tr>\n          <tr><td>在线的、实时的</td><td><span class=\"eye\">Storm</span></td></tr>\n          <tr><td>管理技术</td><td colspan=\"2\">安全隐私、大数据存储、大数据协同</td></tr>\n          <tr><td>应用和服务技术</td><td colspan=\"2\">分析应用技术、可视化技术</td></tr>\n        </tbody>\n      </table>\n    </div><div class=\"box mn\"><span class=\"bt\">🔑 口诀</span>“<b>咋离憨批，你快受骗，实在水桶</b>”——Hadoop离线复杂、Spark离线快速、Storm在线实时。</div>"
        },
        {
         "id": "考点2-21",
         "title": "区块链",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n      <li>以<span class=\"eye\">非对称加密算法为基础</span>，以改进的<span class=\"eye\">默克尔树</span>为数据结构。</li>\n      <li><span class=\"kw\">类别</span>：联盟链、混合链、公有链、私有链。</li>\n      <li><span class=\"kw\">特征</span>：时序数据、不可篡改、多中心化、多方维护、安全可信、开放共识、智能合约。</li>\n      <li><span class=\"kw\">关键技术</span>：①分布式账本（不同地方的多个节点共同完成）②加密算法（散列/哈希：MD5、SHA、SM3、SHA256；非对称RSA等）③共识机制（PoW、PoS、DPoS、Paxos、PBFT）。</li>\n    </ul>"
        },
        {
         "id": "考点2-22",
         "title": "人工智能与虚拟现实",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li><span class=\"kw\">自然语言处理NLP</span>：并不是一般地研究自然语言；应用——机器翻译、舆情监测、自动摘要、观点提取、文本分类、问题回答、文本语义对比、语音识别、中文OCR。</li>\n      <li><span class=\"kw\">机器学习</span>：神经网络是机器学习的一种形式；<span class=\"eye\">深度学习</span>预测结果，有能力应对成千上万特征；<span class=\"eye\">强化学习</span>：制定目标→迈向目标→得到奖励。</li>\n      <li><span class=\"kw\">专家系统</span>：处于人工智能发展的<span class=\"eye\">第四阶段</span>，模拟人类专家解决领域问题。</li>\n      <li><span class=\"kw\">虚拟现实VR特征</span>：构想性、多感知性、沉浸性、交互性、自主性；关键技术：传感器技术、人机交互技术、动态环境建模技术、系统集成技术。</li>\n    </ul>"
        }
       ],
       "html": ""
      }
     ]
    },
    {
     "id": "ch3",
     "isAppendix": false,
     "num": "03",
     "title": "信息技术服务",
     "en": "IT SERVICE",
     "desc": "",
     "stat": [
      {
       "label": "",
       "html": "<span>速记卡片：<b>P10–P12</b></span>"
      },
      {
       "label": "",
       "html": "<span>命题热点：<b>服务四特征、PPTR四要素、生命周期、ITSS 5.0、服务质量五特性</b></span>"
      },
      {
       "label": "",
       "html": "<span>建议用时：<b>35分钟</b></span>"
      }
     ],
     "sections": [
      {
       "title": "一、服务的内涵与外延",
       "points": [
        {
         "id": "考点3-01",
         "title": "服务的四个特征（场景辨析必考）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>特征</th><th>别称</th><th>题眼含义</th></tr></thead>\n        <tbody>\n          <tr><td>无形性</td><td>—</td><td>无法看到、感觉到或触摸到</td></tr>\n          <tr><td>不可分离性</td><td>同步性</td><td><span class=\"eye\">生产和消费是同时进行的</span></td></tr>\n          <tr><td>可变性</td><td>异质性</td><td>同一操作者，因时间、地点与心态变化，<span class=\"eye\">服务质量也会随之变化</span></td></tr>\n          <tr><td>不可储存性</td><td>易逝性、易消失性</td><td>服务无法被储藏起来以备将来使用、转售、延时体验或退货</td></tr>\n        </tbody>\n      </table>\n    </div>"
        },
        {
         "id": "考点3-02",
         "title": "服务特征类型与IT服务业特征",
         "freq": 3,
         "freqText": "基础",
         "html": "<ul>\n      <li>本质（<span class=\"eye\">PPRT</span>）、形态（咨询/设计开发/集成/运营）、过程（连续不断、可持续发展）、阶段（分层次、分阶段）、效益（多方面）、内部关联性（技术＋业务模式创新）、外部关联性（市场政策产业链）。</li>\n      <li><span class=\"kw\">IT服务外包</span>：基础、技术创新、数字化转型、业务融合等服务。</li>\n      <li><span class=\"kw\">IT服务业特征</span>：高知识和高技术含量、知识密集性、高集群性、服务过程的交互性、服务的非独立性、内部呈<span class=\"eye\">金字塔分布</span>、法律和契约的强依赖性、声誉机制。</li>\n    </ul>"
        }
       ],
       "html": ""
      },
      {
       "title": "二、服务原理与生命周期",
       "points": [
        {
         "id": "考点3-03",
         "title": "服务组成：PPTR能力四要素",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>要素</th><th>含义</th><th>内容</th></tr></thead>\n        <tbody>\n          <tr><td>P 人员</td><td><span class=\"eye\">正确选人</span></td><td>知识、技能；操作岗、技术岗、管理岗</td></tr>\n          <tr><td>P 过程</td><td><span class=\"eye\">正确做事</span></td><td>有明确的目标，建立KPI</td></tr>\n          <tr><td>R 资源</td><td><span class=\"eye\">保障做事</span></td><td>有形及无形资产</td></tr>\n          <tr><td>T 技术</td><td><span class=\"eye\">高效做事</span></td><td>满足质量要求，技术人员能力</td></tr>\n        </tbody>\n      </table>\n    </div><ul>\n      <li>另两类要素：<span class=\"kw\">生存周期要素</span>（战略规划、设计实现、运营提升、退役终止）＋<span class=\"kw\">管理要素</span>（监督管理）。</li>\n    </ul>"
        },
        {
         "id": "考点3-04",
         "title": "服务生命周期四阶段（含80%黄金数字）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>阶段</th><th>关键内容</th></tr></thead>\n        <tbody>\n          <tr><td>战略规划</td><td>需求为中心；需考虑<span class=\"eye\">目录、体系、机制</span>；<span class=\"eye\">规划报告是战略规划阶段的核心成果之一</span>；原则：质量/成本/风险管理、遵从政策法规、共同参与、优先级、体系化管理</td></tr>\n          <tr><td>设计实现</td><td><b>服务设计</b>：形成文档化信息；识别和控制风险（不可预测、管理、成本、技术）。<b>服务部署</b>：衔接服务设计与服务运营的中间；四阶段＝<span class=\"eye\">计划、启动、执行、交付</span></td></tr>\n          <tr><td>运营提升</td><td>内容包括业务运营和IT运营；<span class=\"eye\">占服务整体生命周期的比重80%左右</span>；改进缺陷</td></tr>\n          <tr><td>退役终止</td><td>停止使用；需考虑风险：信息安全、业务连续性、法律法规、数据等</td></tr>\n        </tbody>\n      </table>\n    </div><div class=\"box mn\"><span class=\"bt\">🔑 口诀</span>退役风险“<b>全连法数</b>”（安全/连续性/法规/数据）；部署四阶段“计启执交”。</div>"
        },
        {
         "id": "考点3-05",
         "title": "关键成功因素（三阶段对应）",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li><span class=\"kw\">战略规划</span>：全面考虑、确保支持、测量改进。</li>\n      <li><span class=\"kw\">部署实施</span>：交付标准、可用连续、统一期望、目标清晰。</li>\n      <li><span class=\"kw\">运营提升</span>：满足需求、价值提升、一致标准、跟踪需求、有效管理。</li>\n    </ul>"
        }
       ],
       "html": ""
      },
      {
       "title": "三、服务标准化与ITSS",
       "points": [
        {
         "id": "考点3-06",
         "title": "服务产业化三阶段与标准化原则",
         "freq": 4,
         "freqText": "中频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>阶段</th><th>定位</th><th>特点</th></tr></thead>\n        <tbody>\n          <tr><td>产品服务化</td><td><span class=\"eye\">前提</span></td><td>依附整合，没考核</td></tr>\n          <tr><td>服务标准</td><td><span class=\"eye\">保障</span></td><td>记录产物，标准考核</td></tr>\n          <tr><td>服务产品化</td><td><span class=\"eye\">趋势</span></td><td>目录级别，周期考核</td></tr>\n        </tbody>\n      </table>\n    </div><ul>\n      <li>价值收益：提升服务质量、优化服务成本、强化服务效能、降低服务风险。</li>\n      <li>标准体系：层次和并列；建立原则：<span class=\"eye\">目标性、整体性、有序性、开放性与动态性</span>（不是封闭的，也不是绝对静止的）。</li>\n    </ul>"
        },
        {
         "id": "考点3-07",
         "title": "ITSS 5.0 六大内容（地位对应）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>内容</th><th>范围</th><th>地位</th></tr></thead>\n        <tbody>\n          <tr><td>通用标准</td><td>业务分类和服务原理、质量评价方法、基本要求、从业人员能力要求、成本度量和安全等</td><td><span class=\"eye\">支柱</span></td></tr>\n          <tr><td>保障标准</td><td>服务管控和外包</td><td rowspan=\"2\"><span class=\"eye\">底座</span></td></tr>\n          <tr><td>基础服务标准</td><td>开发服务、数据中心、集成实施、运行维护、云服务、咨询设计</td></tr>\n          <tr><td>数字化转型服务标准</td><td>就绪度评估、效果评估、数字化转型成熟度模型、中小企业指南、数字化监测预警等</td><td><span class=\"eye\">引领</span></td></tr>\n          <tr><td>技术创新服务</td><td>智能化服务、数字服务、数字内容处理服务和区块链服务等</td><td>—</td></tr>\n          <tr><td>业务融合标准</td><td>面向政务、广电、教育、应急、财会等行业</td><td>—</td></tr>\n        </tbody>\n      </table>\n    </div>"
        },
        {
         "id": "考点3-08",
         "title": "服务发展与服务集成四要素",
         "freq": 3,
         "freqText": "基础",
         "html": "<ul>\n      <li><span class=\"kw\">实施服务</span>：基础软/硬件（基础设施搭建、数据整合与共应用重构）＋集成服务（上云部署，全栈式集成服务转变）。</li>\n      <li><span class=\"kw\">运行维护</span>：人员、流程、资源和技术；知识、数据、算法、算力。</li>\n      <li><span class=\"kw\">咨询设计服务</span>：信息化工程→业务数字化转型；<span class=\"kw\">开发服务</span>：传统瀑布开发→微服务开发模式。</li>\n      <li><span class=\"kw\">服务集成与实践核心四要素</span>：<span class=\"eye\">供方、需方、过程、环境</span>；服务需求的弹性往往来自需求；重点关注<span class=\"eye\">服务数据和知识资产的管理</span>。</li>\n    </ul>"
        }
       ],
       "html": ""
      },
      {
       "title": "四、服务质量评价（五特性）",
       "points": [
        {
         "id": "考点3-09",
         "title": "服务质量评价五大特性（每年必考）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>特性</th><th>定义</th><th>子特性</th></tr></thead>\n        <tbody>\n          <tr><td>安全性</td><td>保障需方的信息安全</td><td>可用性（正常使用）、完整性（不被非授权篡改）、保密性（不泄露）</td></tr>\n          <tr><td>可靠性</td><td>规定时间内<span class=\"eye\">履行服务协议</span></td><td>完备性（具备服务）、连续性（中断后业务恢复）、稳定性、有效性（解决程度）、可追溯性（有据可查/追查）</td></tr>\n          <tr><td>响应性</td><td>及时受理需方服务</td><td>及时性（响应快慢）、互动性（双方信息交换）</td></tr>\n          <tr><td>有形性</td><td><span class=\"eye\">实体证据</span>展现其服务程度</td><td>可视性（可见方式）、专业性（规范性、标准性、先进性）、合规性（遵循标准、约定或法规）</td></tr>\n          <tr><td>友好性</td><td>对需方特别关注</td><td>主动性（积极主动）、灵活性（灵活变通）、礼貌性（语言、行为和态度）</td></tr>\n        </tbody>\n      </table>\n    </div><div class=\"box mn\"><span class=\"bt\">🔑 口诀</span>特性总纲“<b>全靠好形象</b>”——安全（全用密丸）、可靠（靠有备连稳追）、响应（应激动）、有形（形式也贵）、友好（好灵动哩）。</div><span class=\"ask\"><b>命题方式：</b>“有据可查”→可追溯性→可靠性；“语言行为态度”→礼貌性→友好性；“实体证据/可见方式”→有形性。</span>"
        }
       ],
       "html": ""
      }
     ]
    },
    {
     "id": "ch4",
     "isAppendix": false,
     "num": "04",
     "title": "信息系统架构",
     "en": "INFORMATION SYSTEM ARCHITECTURE",
     "desc": "",
     "stat": [
      {
       "label": "",
       "html": "<span>速记卡片：<b>P13–P17</b></span>"
      },
      {
       "label": "",
       "html": "<span>命题热点：<b>架构模式（C/S、B/S、MVC、SOA）、TOGAF-ADM、WPDRRC、云原生、分布式事务</b></span>"
      },
      {
       "label": "",
       "html": "<span>建议用时：<b>55分钟</b></span>"
      }
     ],
     "sections": [
      {
       "title": "一、架构基础与定义",
       "points": [
        {
         "id": "考点4-01",
         "title": "架构本质与信息系统三层",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li>架构的本质是<span class=\"eye\">决策</span>：原则、方向、关系、结构。</li>\n    </ul><div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>层级</th><th>管理</th><th>对应系统</th></tr></thead>\n        <tbody>\n          <tr><td>一层</td><td>战略管理</td><td>战略系统</td></tr>\n          <tr><td>二层</td><td>战术管理</td><td>业务系统、应用系统</td></tr>\n          <tr><td>三层</td><td>运营管理</td><td><span class=\"eye\">信息基础设施</span></td></tr>\n        </tbody>\n      </table>\n    </div><ul>\n      <li>战略系统：短期规划根据情况而改变，<span class=\"eye\">长期规划比较稳定</span>。</li>\n      <li>业务系统ISA：以<span class=\"eye\">业务流程重组BPR为中心</span>。</li>\n      <li>应用系统架构角度：内部功能（数据变化较小，<span class=\"eye\">程序的算法和控制结构变化较多</span>）；外部界面（相对变化较多的部分）。</li>\n      <li>信息基础设施：管理、技术基础设施、信息资源设施。</li>\n    </ul>"
        },
        {
         "id": "考点4-02",
         "title": "架构的定义（六条判断）",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li>“<span class=\"eye\">外部可见</span>”，仅与内部具体实现有关的细节<span class=\"eye\">不属于架构</span>。</li>\n      <li>由<span class=\"eye\">多个结构组成</span>——个别结构不能代表大型信息系统架构。</li>\n      <li>架构<span class=\"eye\">不一定有具体表述文档</span>（如文档过时，则不能反映架构）。</li>\n      <li>是<span class=\"eye\">元素及其行为的集合</span>：静态关注总体结构；动态关注关键行为。</li>\n      <li>架构具有“<span class=\"eye\">基础</span>”性，更改的代价昂贵；架构隐含有“<span class=\"eye\">决策</span>”。</li>\n    </ul>"
        },
        {
         "id": "考点4-03",
         "title": "架构分类：物理/逻辑/融合",
         "freq": 4,
         "freqText": "中频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>物理架构</th><th>优点</th><th>缺点</th></tr></thead>\n        <tbody>\n          <tr><td>集中式</td><td>便于管理、资源利用率高</td><td><span class=\"eye\">脆弱，核心异常导致瘫痪</span>，不利于调动积极性</td></tr>\n          <tr><td>分布式</td><td>扩展方便、安全性好、适应环境</td><td>资源分散，不利规划和管理</td></tr>\n        </tbody>\n      </table>\n    </div><ul>\n      <li>物理架构<span class=\"eye\">不考虑实际工作与功能，只考虑空间分布</span>。</li>\n      <li><span class=\"kw\">逻辑架构</span>：功能子系统的综合体和概念性的框架，不尽相同。</li>\n      <li><span class=\"kw\">系统融合</span>：横向融合、纵向融合、纵横融合。</li>\n      <li><span class=\"kw\">价值驱动的体系结构</span>：价值模型核心特征（价值期望值、反作用力、变革催化剂——限制因素）；优先化体系结构：隔离、后果、重要性、程度等进行权衡。</li>\n    </ul>"
        }
       ],
       "html": ""
      },
      {
       "title": "二、常用架构模型（★★★）",
       "points": [
        {
         "id": "考点4-04",
         "title": "单机 · C/S · B/S · 多层C/S",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n      <li><span class=\"kw\">单机应用模式</span>：运行在一台物理机上，可多进程或多线程（Ps、Pr）。</li>\n      <li><span class=\"kw\">两层C/S</span>：客户端/服务器＝前台界面＋后台数据库服务器。</li>\n      <li><span class=\"kw\">三层B/S</span>：<span class=\"eye\">最经典的B/S（浏览器/服务器）模式</span>。通信协议：①Socket（接口）：直接用只能做小系统；封装后设计一套消息格式→大型分布式系统 ②HTTP（浏览器与Web服务器）③基于RPC编程、基于Java RMI等。</li>\n      <li><span class=\"kw\">多层C/S</span>：前台界面、Web服务器、<span class=\"eye\">中间件</span>、数据库服务器；中间件作用：提高可伸缩性、请求代理/应用服务器、增加安全性。</li>\n    </ul>"
        },
        {
         "id": "考点4-05",
         "title": "MVC模式 · SOA · 数据总线 · TOGAF",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n      <li><span class=\"kw\">MVC</span>：视图与模型的代码分开，由控制器连接。<span class=\"eye\">View表示层</span>（浏览器层，图形化展示请求结果）、<span class=\"eye\">Controller控制器</span>（Web服务器层）、<span class=\"eye\">Model模型层</span>（应用逻辑实现及数据持久化部分）。</li>\n      <li><span class=\"kw\">SOA 面向服务架构</span>：由<span class=\"eye\">中间件来实现</span>，协议主要有<span class=\"eye\">SOAP与WSDL</span>；本质是<span class=\"eye\">消息机制或远程过程调用（RPC）</span>。</li>\n      <li><span class=\"kw\">组织级数据交换总线</span>：实质是<span class=\"eye\">连接器的软件系统</span>；功能：实时交易（成熟企业）与大数据量传输。</li>\n      <li><span class=\"kw\">TOGAF</span>：架构开发方法<span class=\"eye\">ADM是核心，可循环迭代</span>；使用相同语言；不用于商业目的、免费；节省时间和金钱；实现可观的投资回报。</li>\n    </ul>"
        }
       ],
       "html": ""
      },
      {
       "title": "三、四大架构设计原则",
       "points": [
        {
         "id": "考点4-06",
         "title": "应用/数据/技术/网络架构原则",
         "freq": 4,
         "freqText": "中频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>架构</th><th>原则要点</th></tr></thead>\n        <tbody>\n          <tr><td>应用架构</td><td>风险最小化、业务适配性、应用聚合化、功能专业化、资产复用化；分层分组——<span class=\"eye\">业务与技术分离、故障隔离，系统内高内聚、系统间低耦合</span></td></tr>\n          <tr><td>数据架构</td><td>可扩展性、服务于业务、处理效率（追求效率和成本合理化）、数据一致性、数据分层</td></tr>\n          <tr><td>技术架构</td><td>是承载应用架构和数据架构的<span class=\"eye\">基础</span>；局部可替换（评估长期可用性）、技术一致性（相同版本）、成熟度控制（用成熟且在活跃期的）、创新驱动、人才技能覆盖</td></tr>\n          <tr><td>网络架构</td><td>可管理性、高性能、高安全性、高可靠性、平台化和架构化</td></tr>\n        </tbody>\n      </table>\n    </div>"
        }
       ],
       "html": ""
      },
      {
       "title": "四、网络架构",
       "points": [
        {
         "id": "考点4-07",
         "title": "局域网架构（分类与三层）",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li><span class=\"kw\">特点</span>：覆盖范围小、传输速率高、可靠性高、支持多种传输介质。</li>\n      <li><span class=\"kw\">单核心</span>：一台二层或三层交换设备（二层仅做二层数据链路转发；三层VLAN内二层转发、VLAN之间三层路由转发）；优：结构简单、节省投资；缺：单点故障、扩展能力有限。</li>\n      <li><span class=\"kw\">双核心</span>：两台三层及以上交换机；优：实现网关保护、负载均衡；缺：投资比单核心高。</li>\n      <li><span class=\"kw\">多台环形</span>：优：RPR环、双向可用、自愈保护、节约光纤资源；缺：只能通过业务接口互通，不能实现网络直接互通，容易环路。</li>\n      <li><span class=\"kw\">三层层次模型</span>：<span class=\"eye\">核心层（高速转发）、汇聚层（减轻转发压力）、接入层（设备接入）</span>；易于扩展，可分级排查。</li>\n    </ul>"
        },
        {
         "id": "考点4-08",
         "title": "广域网架构与移动通信SSC模式",
         "freq": 3,
         "freqText": "基础",
         "html": "<ul>\n      <li>构成：<span class=\"eye\">通信子网与资源子网</span>组成；多级网络：骨干网、分布网（小项目可省）、接入网。</li>\n      <li>分类：单核心、双核心、环形、半冗余（多台、至少两条以上连接）、对等子域（两个独立子域）、层次子域（多个独立子域；<span class=\"eye\">子域之间须高于子域内链路带宽</span>；高层子域完成与上层外网互连、低层子域完成与下层外网互连；良好扩展性）。</li>\n      <li><span class=\"kw\">移动通信</span>：5GS DN互联、5G网络边缘计算（业务就近分流服务）；透明模式和非透明模式。</li>\n    </ul><div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>SSC模式</th><th>连续性业务规则</th></tr></thead>\n        <tbody>\n          <tr><td>SSC模式1</td><td><span class=\"eye\">IP接入点始终保持不变</span></td></tr>\n          <tr><td>SSC模式2</td><td>触发用户现有会话释放，<span class=\"eye\">并立即</span>触发新会话</td></tr>\n          <tr><td>SSC模式3</td><td>释放用户现有会话<span class=\"eye\">之前</span>先建立新的会话</td></tr>\n        </tbody>\n      </table>\n    </div>"
        }
       ],
       "html": ""
      },
      {
       "title": "五、安全架构（重点章节）",
       "points": [
        {
         "id": "考点4-09",
         "title": "安全威胁与三道防线",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li>威胁：拒绝服务（合法访问被阻止）、业务流分析（长期监听、统计分析）、旁路控制（绕过防线）、特洛伊木马、重放（备份重新发送）；窃听（搭线监听）、假冒（冒充、黑客攻击）、授权侵犯（<span class=\"eye\">内部攻击</span>）、陷阱门、物理侵入。</li>\n      <li><span class=\"kw\">三道安全防线</span>：<span class=\"eye\">系统安全架构、安全技术体系架构、审计架构</span>。</li>\n      <li>信息安全保障体系框架：技术体系、组织机构体系、管理体系；架构设计三要素：<span class=\"eye\">技术手段、人、管理</span>。</li>\n    </ul>"
        },
        {
         "id": "考点4-10",
         "title": "WPDRRC模型（六环节+三要素，高频排序）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"flow\">\n      <div class=\"step\">W 预警<small>模拟攻击技术</small></div>\n      <div class=\"step\">P 防护<small>防火墙/加密/认证/访问控制/数字签名</small></div>\n      <div class=\"step\">D 检测<small>入侵检测、脆弱性检测</small></div>\n      <div class=\"step\">R 响应<small>应急策略/机制/手段</small></div>\n      <div class=\"step\">R 恢复<small>替换/修复/备份/冗余/容错</small></div>\n      <div class=\"step\">C 反击<small><b>证据</b></small></div>\n    </div><ul>\n      <li><span class=\"kw\">三大要素</span>：技术（保证）、人员（<span class=\"eye\">核心</span>）、策略（桥梁）。</li>\n    </ul><div class=\"box mn\"><span class=\"bt\">🔑 口诀</span>六环节“<b>预警护检测，响应恢复反击</b>”；三要素“<b>技/人/策</b>”（技术保证、人员核心、策略桥梁）。</div>"
        },
        {
         "id": "考点4-11",
         "title": "信息安全体系架构与OSI安全服务层",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>层面</th><th>地位</th><th>内容</th></tr></thead>\n        <tbody>\n          <tr><td>物理安全</td><td><span class=\"eye\">前提</span></td><td>环境安全、设备安全、媒体安全</td></tr>\n          <tr><td>系统安全</td><td><span class=\"eye\">基础</span></td><td>网络结构、操作系统和应用系统安全</td></tr>\n          <tr><td>网络安全</td><td><span class=\"eye\">关键</span></td><td>访问控制、通信保密、入侵检测、安全扫描和防病毒</td></tr>\n          <tr><td>应用安全</td><td>—</td><td>资源共享和信息存储</td></tr>\n          <tr><td>安全管理</td><td>—</td><td>安全管理体制、平台，人员的安全防范意识</td></tr>\n        </tbody>\n      </table>\n    </div><div class=\"box trap\"><span class=\"bt\">⚠ 必考细节</span>OSI七层每层均能提供相应安全服务，<span class=\"eye\">唯独第5层会话层不适合安全服务</span>；最适合配置安全服务的是：<b>1物理层、3网络层、4传输层、7应用层</b>。</div><ul>\n      <li><span class=\"kw\">深度防御安全技术体系架构</span>：多点技术防御（网络和基础设施、边界、计算环境）、分层技术防御（外部和内部边界同时使用嵌套的防火墙并配合入侵检测）、支撑性基础设施（公钥、检测和响应基础设施）。</li>\n    </ul>"
        },
        {
         "id": "考点4-12",
         "title": "网络安全服务与数据库安全设计",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li><span class=\"kw\">鉴别/认证</span>：防止其他实体占用和独立操作被鉴别实体的身份；方式：已知的、拥有的、不改变特性、第三方、环境；类型：交换、申请和验证鉴别信息。</li>\n      <li><span class=\"kw\">访问控制</span>：允许使用哪些资源、阻止未授权访问；<span class=\"eye\">ACI</span>访问控制信息、<span class=\"eye\">ADI</span>访问控制判决信息、<span class=\"eye\">ADF</span>访问控制判决功能、<span class=\"eye\">AEF</span>访问控制实施功能（D：判决、I：信息、E：实施）。</li>\n      <li><span class=\"kw\">数据机密性</span>：确保信息仅仅是对被授权者可用；通过禁止访问/隐藏数据语义/分散数据机制，通过加密实现。</li>\n      <li><span class=\"kw\">数据完整性</span>：数据不以未经授权方式进行改变或损毁。</li>\n      <li><span class=\"kw\">抗抵赖性</span>：证据的生成、传输、存储及恢复；验证和记录；解决纠纷。</li>\n      <li><span class=\"kw\">数据库安全设计</span>：静态约束（数据库模式）和动态约束（应用程序实现）；完整性约束、慎用触发器；完整性设计三步：需求分析、概念结构设计、逻辑结构设计。</li>\n    </ul>"
        }
       ],
       "html": ""
      },
      {
       "title": "六、云原生架构",
       "points": [
        {
         "id": "考点4-13",
         "title": "云原生定义、代码构成与原则",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li>架构定义：<span class=\"eye\">非业务代码部分进行最大化剥离</span>，具备轻量、敏捷、高度自动化特点。</li>\n      <li>两类特性：<span class=\"kw\">功能性</span>（真正带来价值）、<span class=\"kw\">非功能性</span>（没有带来直接业务价值，又必不可少）。</li>\n      <li>代码构成：业务代码（实现业务逻辑，<span class=\"eye\">核心</span>）＋三方软件/所有三方库（业务库、基础库）＋处理非功能特性代码（附属物）。</li>\n      <li><span class=\"kw\">原则</span>：弹性（随业务伸缩）、所有过程自动化、韧性（抵御能力）、可观测、架构持续演进、零信任、服务化（服务流量）。</li>\n    </ul>"
        },
        {
         "id": "考点4-14",
         "title": "云原生架构模式与分布式事务",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>模式</th><th>要点</th></tr></thead>\n        <tbody>\n          <tr><td>服务化架构</td><td><span class=\"eye\">微服务和小服务模式（适合大型软件系统）</span>；代码模块关系和部署关系进行分离</td></tr>\n          <tr><td>Mesh化架构</td><td>中间件框架<span class=\"eye\">从业务进程中分离</span></td></tr>\n          <tr><td>Serverless</td><td>适用：<span class=\"eye\">事件驱动、计算时间短的请求、不复杂的长周期任务</span>；不适用：有状态、长时间运行、频繁的外部I/O</td></tr>\n          <tr><td>存储计算分离</td><td>计算、数据分家；<span class=\"eye\">快照+时间日志</span>做故障恢复</td></tr>\n          <tr><td>可观测</td><td>Logging日志（开发者提供）、Tracing跟踪、Metrics量化</td></tr>\n          <tr><td>事件驱动</td><td>应用/组件间的<span class=\"eye\">集成架构模式，服务解耦</span></td></tr>\n        </tbody>\n      </table>\n    </div><div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>分布式事务</th><th>特点</th></tr></thead>\n        <tbody>\n          <tr><td>XA模式</td><td>一致性强，<span class=\"eye\">性能差</span></td></tr>\n          <tr><td>基于消息最终一致性</td><td>性能高，通用性差</td></tr>\n          <tr><td>TCC模式</td><td><span class=\"eye\">应用层来控制，高效，成本高</span></td></tr>\n          <tr><td>SAGA模式</td><td>与TCC模式类似但<span class=\"eye\">没Try</span>；AT模式性能高，自动执行回滚操作，使用场景限制</td></tr>\n        </tbody>\n      </table>\n    </div>"
        }
       ],
       "html": ""
      }
     ]
    },
    {
     "id": "ch5",
     "isAppendix": false,
     "num": "05",
     "title": "软件工程",
     "en": "SOFTWARE ENGINEERING",
     "desc": "",
     "stat": [
      {
       "label": "",
       "html": "<span>速记卡片：<b>P18–P21</b></span>"
      },
      {
       "label": "",
       "html": "<span>命题热点：<b>需求分类、QFD、耦合内聚、UML 14图、白盒黑盒、测试类型、CSMM五级</b></span>"
      },
      {
       "label": "",
       "html": "<span>建议用时：<b>60分钟</b></span>"
      }
     ],
     "sections": [
      {
       "title": "一、软件需求",
       "points": [
        {
         "id": "考点5-01",
         "title": "软件工程组成与需求层次",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n      <li>软件工程组成部分：<span class=\"eye\">方法、工具、过程</span>。</li>\n    </ul><div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>层次</th><th>内容</th></tr></thead>\n        <tbody>\n          <tr><td>业务需求</td><td><span class=\"eye\">高层次目标要求</span></td></tr>\n          <tr><td>用户需求</td><td>用户的具体目标</td></tr>\n          <tr><td>功能需求（系统需求）</td><td>通过系统特性的描述——<span class=\"eye\">必须实现的</span></td></tr>\n          <tr><td>非功能需求（系统需求）</td><td>系统展现给用户的行为——<span class=\"eye\">必须具备的</span></td></tr>\n          <tr><td>约束（系统需求）</td><td>限制——设计约束、过程约束</td></tr>\n        </tbody>\n      </table>\n    </div>"
        },
        {
         "id": "考点5-02",
         "title": "QFD质量功能部署（三类需求必考）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>需求</th><th>客户态度</th></tr></thead>\n        <tbody>\n          <tr><td>常规需求</td><td><span class=\"eye\">应做到的</span>，越多越满意</td></tr>\n          <tr><td>期望需求</td><td><span class=\"eye\">应具备的</span>，没有实现会不满意</td></tr>\n          <tr><td>意外需求（兴奋需求）</td><td><span class=\"eye\">不实现也不影响决策</span></td></tr>\n        </tbody>\n      </table>\n    </div><ul><li><span class=\"kw\">需求获取</span>方法：访谈、问卷调查、采样、会议讨论、界面原型法等。</li></ul>"
        },
        {
         "id": "考点5-03",
         "title": "结构化分析 SA：数据字典与三模型",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n      <li><span class=\"kw\">数据字典</span>：<span class=\"eye\">建立模型的核心，是数据和目录，分析阶段工具</span>；包括数据项、数据结构、数据流、数据存储、处理过程。</li>\n    </ul><div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>模型</th><th>对应图</th></tr></thead>\n        <tbody>\n          <tr><td>行为模型</td><td>状态转换图 <span class=\"eye\">STD</span></td></tr>\n          <tr><td>数据模型</td><td>实体联系图 <span class=\"eye\">E-R图</span></td></tr>\n          <tr><td>功能模型</td><td>数据流图 <span class=\"eye\">DFD</span></td></tr>\n        </tbody>\n      </table>\n    </div><div class=\"box mn\"><span class=\"bt\">🔑 口诀</span>“<b>形态S、属实R、能留F</b>”。</div><ul><li><span class=\"kw\">SA七步骤</span>：①反映当前物理模型 ②推导等价的逻辑模型 ③设计新的逻辑系统 ④提出目标系统物理模型 ⑤确定各种方案 ⑥选择一种方案 ⑦建立完整的需求规约。</li></ul>"
        },
        {
         "id": "考点5-04",
         "title": "面向对象分析 OOA 基本原则",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li><span class=\"kw\">抽象</span>：抽取共同的、本质性的特征；过程抽象（单一实体）；<span class=\"eye\">数据抽象是核心原则</span>——数据（属性）和操作（服务）结合，知做什么、不知如何做。</li>\n      <li><span class=\"kw\">封装</span>：尽可能<span class=\"eye\">隐蔽对象的内部细节</span>；<span class=\"kw\">继承</span>：特殊类中不再重复定义一般类中已定义的内容，简练、清晰。</li>\n      <li><span class=\"kw\">分类</span>：相同属性和服务的对象划为一类；<span class=\"kw\">聚合</span>：组装体；<span class=\"kw\">关联</span>：一个事物联想到另外的事物。</li>\n      <li><span class=\"kw\">消息通信</span>：只能通过消息通信，<span class=\"eye\">由封装原则引起，动态联系</span>。</li>\n      <li><span class=\"kw\">粒度控制</span>：考虑全局时不考虑具体细节，考虑部分细节时暂时撇开其余部分；<span class=\"kw\">行为分析</span>：行为是复杂的，相互依赖、交织。</li>\n      <li>OOA步骤：确定对象和类→确定结构→确定主题→确定属性→确定方法。</li>\n    </ul>"
        },
        {
         "id": "考点5-05",
         "title": "SRS需求规格说明书 · 变更 · 跟踪",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li><span class=\"kw\">SRS</span>是<span class=\"eye\">需求分析阶段需要完成的文档</span>；包括：范围、引用文件、需求、合格性规定、需求可追踪性、尚未解决的问题、注解和附录。</li>\n      <li><span class=\"kw\">需求变更过程</span>：识别问题→问题分析→变更分析→变更实现→修改后需求。</li>\n      <li><span class=\"kw\">需求跟踪</span>：<span class=\"eye\">正向跟踪＝需求→成果；逆向跟踪＝成果→需求</span>。</li>\n    </ul>"
        }
       ],
       "html": ""
      },
      {
       "title": "二、软件设计（SD与OOD）",
       "points": [
        {
         "id": "考点5-06",
         "title": "结构化设计 SD：模块独立性（耦合vs内聚）",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n      <li>SD特点：<span class=\"eye\">自顶向下、逐层分解、逐步求精和模块化</span>的过程。</li>\n      <li>信息隐藏与抽象：采用封装技术，设计成“<span class=\"eye\">黑盒</span>”。</li>\n      <li>模块化三要素：具有功能（做什么）、逻辑（怎么做）和状态（使用时的环境）。</li>\n    </ul><div class=\"grid2\">\n      <div class=\"minicard\"><h4 class=\"eye\">耦合：模块之间联系，从低到高</h4><ul><li>无直接耦合→数据耦合→标记耦合→控制耦合→外部耦合→公共耦合→内容耦合</li></ul></div>\n      <div class=\"minicard\"><h4 class=\"gn\">内聚：模块内部联系，从高到低</h4><ul><li>功能内聚→顺序内聚→通信内聚→过程内聚→时间内聚→逻辑内聚→偶然内聚</li></ul></div>\n    </div><div class=\"box ok\"><span class=\"bt\">✅ 黄金结论</span>一个好的设计＝<span class=\"eye\">高内聚、低耦合</span>。</div>"
        },
        {
         "id": "考点5-07",
         "title": "系统结构图SC与详细设计工具",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li><span class=\"kw\">SC</span>是<span class=\"eye\">概要设计阶段</span>的工具。</li>\n      <li><span class=\"kw\">图形工具</span>：业务流程图（业务关系）、程序流程图（清晰易修改，<span class=\"eye\">只能描述执行过程</span>）、问题分析图PAD（改进、更清晰、自顶向下）、NS流程图（功能域明确，嵌套关系）。</li>\n      <li><span class=\"kw\">表格工具</span>：一张表来描述过程的细节。</li>\n      <li><span class=\"kw\">语言工具</span>：伪码或PDL（<span class=\"eye\">外层语法确定，内层语法不确定</span>）。</li>\n    </ul>"
        },
        {
         "id": "考点5-08",
         "title": "面向对象设计 OOD 七大原则",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>原则</th><th>题眼</th></tr></thead>\n        <tbody>\n          <tr><td>单职原则</td><td>仅有一个引起它变化的原因，否则被拆分</td></tr>\n          <tr><td>开闭原则</td><td><span class=\"eye\">对扩展开放，对修改封闭</span></td></tr>\n          <tr><td>里氏替换原则</td><td>子类可替换父类；子类<span class=\"eye\">可扩展，不能改变父类</span></td></tr>\n          <tr><td>依赖倒置原则</td><td>依赖于抽象，而不是具体实现；<span class=\"eye\">针对接口编程，不要针对实现编程</span></td></tr>\n          <tr><td>接口隔离原则</td><td>使用多个专门的接口</td></tr>\n          <tr><td>组合重用原则</td><td>尽量使用组合，而不是继承关系达到重用</td></tr>\n          <tr><td>迪米特原则（最少知识法则）</td><td>对其他对象有尽可能少的了解；<span class=\"eye\">降低耦合度、提高独立性</span></td></tr>\n        </tbody>\n      </table>\n    </div><ul>\n      <li>基本思想：抽象、封装、可扩展性（继承/多态）；主要任务：<span class=\"eye\">类和对象</span>。</li>\n    </ul>"
        },
        {
         "id": "考点5-09",
         "title": "类的三种类型",
         "freq": 3,
         "freqText": "基础",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>类型</th><th>属性</th><th>操作/方法</th><th>例</th></tr></thead>\n        <tbody>\n          <tr><td>实体类</td><td><span class=\"eye\">一定有</span>（永久性）</td><td>不一定有</td><td>业务数据实体</td></tr>\n          <tr><td>控制类</td><td><span class=\"eye\">没有</span>（行为具有协调性）</td><td>一定有</td><td>调度协调</td></tr>\n          <tr><td>边界类</td><td>既有</td><td>也有</td><td>窗口、打印机等</td></tr>\n        </tbody>\n      </table>\n    </div>"
        },
        {
         "id": "考点5-10",
         "title": "UML 2.0 的14种图（静态/动态归属必考）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"grid2\">\n      <div class=\"minicard\"><h4 class=\"kw\">静态图（8种）</h4><ul>\n        <li>类图、对象图、构件图、组合结构图</li>\n        <li>用例图、部署图、制品图、包图</li>\n      </ul></div>\n      <div class=\"minicard\"><h4 class=\"eye\">动态图（6种）</h4><ul>\n        <li>状态图、活动图</li>\n        <li><b>交互图4种</b>：通信图（协作图，收发消息）、顺序图（序列图，时间次序）、定时图（计时图，实际时间）、交互概览图</li>\n      </ul></div>\n    </div><ul>\n      <li><span class=\"kw\">UML关系</span>：依赖（影响）、关联（连接）、泛化（替换）、实现（保证）。</li>\n      <li><span class=\"kw\">4+1视图</span>：逻辑视图（设计视图）、进程视图（执行）、用例视图（需求）、实现视图（构件建模）、部署视图（分布）。</li>\n    </ul><div class=\"box trap\"><span class=\"bt\">⚠ 易错</span>用例图是<b>静态图</b>；类＝静态关系、对象＝动态性；设计模式按目的分：创建型（创建对象）、结构型（处理类或对象的组合）、行为型（交互及职责分配）。</div>"
        }
       ],
       "html": ""
      },
      {
       "title": "三、软件配置管理与测试",
       "points": [
        {
         "id": "考点5-11",
         "title": "软件配置管理 SCM",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li>核心内容：<span class=\"eye\">版本控制和变更控制</span>。</li>\n      <li>活动六项：配置管理计划、配置标识（识别配置项，<span class=\"eye\">建立基线</span>）、配置控制（变更）、配置状态记录、配置审计（<span class=\"eye\">独立评价</span>）、发布管理与交付（交付版本、软件库）。</li>\n    </ul>"
        },
        {
         "id": "考点5-12",
         "title": "软件测试方法：白盒/黑盒（高频辨析）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>分类</th><th>方法</th><th>特点/用途</th></tr></thead>\n        <tbody>\n          <tr><td rowspan=\"2\">静态测试</td><td>文档测试</td><td>检查单</td></tr>\n          <tr><td>代码测试</td><td>桌前检查、代码走查和代码审查</td></tr>\n          <tr><td rowspan=\"2\">动态测试</td><td><span class=\"eye\">白盒测试（结构测试）</span></td><td>透明、完全了解程序；<span class=\"eye\">用于单元测试</span>；控制流测试、数据流测试、程序变异测试；静态测试的方法也可实现白盒测试</td></tr>\n          <tr><td><span class=\"eye\">黑盒测试（功能测试）</span></td><td>不透明、不了解结构；<span class=\"eye\">用于集成测试、确认测试和系统测试</span></td></tr>\n        </tbody>\n      </table>\n    </div><ul>\n      <li><span class=\"kw\">调试测试</span>：原因排除法、回溯法、蛮力法；<span class=\"kw\">面向对象测试</span>关注：多态性、继承性、封装性。</li>\n    </ul>"
        },
        {
         "id": "考点5-13",
         "title": "测试类型（阶段—对象—依据对应）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>测试</th><th>对象</th><th>依据/说明</th></tr></thead>\n        <tbody>\n          <tr><td>单元测试</td><td>模块测试</td><td><span class=\"eye\">详细设计说明书</span></td></tr>\n          <tr><td>集成测试</td><td>组装起来的模块同时测试</td><td><span class=\"eye\">概要设计文档</span></td></tr>\n          <tr><td>确认测试</td><td colspan=\"2\">是否与<span class=\"eye\">用户需求</span>一致</td></tr>\n          <tr><td>系统测试</td><td colspan=\"2\"><span class=\"eye\">最重要测试：功能/性能</span></td></tr>\n          <tr><td>配置项测试</td><td>对象是软件配置项</td><td>SRS需求规格说明书</td></tr>\n          <tr><td>回归测试</td><td colspan=\"2\">软件变更之后，验证软件原有的要求<span class=\"eye\">不被损害</span></td></tr>\n        </tbody>\n      </table>\n    </div>"
        }
       ],
       "html": ""
      },
      {
       "title": "四、部署交付、质量与过程成熟度",
       "points": [
        {
         "id": "考点5-14",
         "title": "部署模式与持续交付/部署策略",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li><span class=\"kw\">部署模式</span>：①面向单机软件（安装和卸载）②集中式服务器（访问量小，<span class=\"eye\">500人以下</span>、硬件环境要求不高）③微服务的分布式（访问量大、并发性要求高，容器和DevOps）。</li>\n      <li><span class=\"kw\">持续交付优势</span>：需求阶段抛弃传统需求；开发测试阶段尽早进入测试；运维阶段打通开发和运维的通道；自动地、快速地、整个生命周期内；简化；可靠的、可预期的、可视的。</li>\n      <li><span class=\"kw\">容器技术</span>：最流行的技术，上手简单、体积小、打包复制和发布。</li>\n      <li>部署原则：统一、相同、阶梯式晋级、运维人员执行、仅通过流水线、不可变服务器。</li>\n    </ul><div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>策略</th><th>要点</th></tr></thead>\n        <tbody>\n          <tr><td>镜像部署</td><td>Build搭建（包）→ Ship发送（安装）→ Run运行（启动）</td></tr>\n          <tr><td>蓝绿部署</td><td><span class=\"eye\">新/旧两个部署版本</span></td></tr>\n          <tr><td>金丝雀部署</td><td><span class=\"eye\">少量→所有</span>（灰度）</td></tr>\n        </tbody>\n      </table>\n    </div>"
        },
        {
         "id": "考点5-15",
         "title": "软件质量管理与SQA",
         "freq": 3,
         "freqText": "基础",
         "html": "<ul>\n      <li>影响软件质量三方面：产品修改、产品转移、产品运行。</li>\n      <li>主要目标：<span class=\"eye\">事前预防</span>；引入缺陷时即将其捕获；作用于过程；贯穿于所有的活动。</li>\n      <li><span class=\"kw\">SQA三项</span>：①SQA审计与评审（产品、工具、设备）②SQA报告（直接沟通；<span class=\"eye\">必给软件工作组，不必给项目管理人员</span>；由关心软件质量的人发布）③处理不合格问题。</li>\n    </ul>"
        },
        {
         "id": "考点5-16",
         "title": "软件过程能力成熟度 CSMM 五级",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>等级</th><th>名称</th><th>特征</th></tr></thead>\n        <tbody>\n          <tr><td>1级</td><td>初始级</td><td>具有不确定性</td></tr>\n          <tr><td>2级</td><td>项目规范级</td><td>可按计划实现预期的结果</td></tr>\n          <tr><td>3级</td><td>组织改进级</td><td>能够稳定地实现预期的项目目标</td></tr>\n          <tr><td>4级</td><td>量化提升级</td><td>量化地管理和实现项目目标（统计、数据、模型、效率）</td></tr>\n          <tr><td>5级</td><td>创新引领级</td><td>创新，引领行业发展（革新、提升、最佳）</td></tr>\n        </tbody>\n      </table>\n    </div><ul>\n      <li>成熟度模型四域：治理（战略与治理、目标管理）、开发与交付（开源应用、开发需求、设计、测试、部署、服务）、组织管理（组织资源、过程能力、过程、人员能力）、管理与支持（策划、监控、结项、质量保证、风险管理、配置管理、供应商管理）。</li>\n    </ul>"
        }
       ],
       "html": ""
      }
     ]
    },
    {
     "id": "ch6",
     "isAppendix": false,
     "num": "06",
     "title": "数据工程",
     "en": "DATA ENGINEERING",
     "desc": "",
     "stat": [
      {
       "label": "",
       "html": "<span>速记卡片：<b>P22–P24</b></span>"
      },
      {
       "label": "",
       "html": "<span>命题热点：<b>数据分类、备份策略、RPO/RTO、数据模型、数据挖掘任务、敏感数据五级、脱敏</b></span>"
      },
      {
       "label": "",
       "html": "<span>建议用时：<b>45分钟</b></span>"
      }
     ],
     "sections": [
      {
       "title": "一、数据采集与预处理",
       "points": [
        {
         "id": "考点6-01",
         "title": "数据类型与采集方法",
         "freq": 4,
         "freqText": "中频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>类型</th><th>典型形式</th></tr></thead>\n        <tbody>\n          <tr><td>结构化数据</td><td><span class=\"eye\">关系型数据库表、表格、CSV文件</span></td></tr>\n          <tr><td>半结构化数据</td><td>非关系型数据库、日志文件、<span class=\"eye\">XML文档</span>等</td></tr>\n          <tr><td>非结构化数据</td><td>没有固定模式，文档、文本、图片</td></tr>\n        </tbody>\n      </table>\n    </div><div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>采集方法</th><th>要点</th></tr></thead>\n        <tbody>\n          <tr><td>传感器采集</td><td>一定规律变换成<span class=\"eye\">电信号</span>输出</td></tr>\n          <tr><td>系统日志采集</td><td><span class=\"eye\">流式数据，数据量非常庞大</span></td></tr>\n          <tr><td>网络采集</td><td>公开采集接口或网络爬虫、应用程序接口（API）</td></tr>\n        </tbody>\n      </table>\n    </div>"
        },
        {
         "id": "考点6-02",
         "title": "数据预处理（五种问题数据处理）",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n      <li>采用<span class=\"eye\">数据清洗</span>的方法实现；步骤：数据分析、数据检测、数据修正。</li>\n    </ul><div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>问题数据</th><th>处理方法</th></tr></thead>\n        <tbody>\n          <tr><td>缺失数据</td><td><span class=\"eye\">删除缺失值（最简单有效）</span>、均值填补法、热卡填补法（相似对象）</td></tr>\n          <tr><td>异常数据</td><td><span class=\"eye\">分箱法</span>（宽度越大，预处理效果越好）、回归法（两个属性，一个预测另一个）</td></tr>\n          <tr><td>不一致数据</td><td>数据变换：数据迁移工具和<span class=\"eye\">ETL工具</span></td></tr>\n          <tr><td>重复数据</td><td>用 Excel、VBA、Python 等工具</td></tr>\n          <tr><td>格式不符数据</td><td>统一 Excel 文件</td></tr>\n        </tbody>\n      </table>\n    </div>"
        }
       ],
       "html": ""
      },
      {
       "title": "二、数据存储及管理",
       "points": [
        {
         "id": "考点6-03",
         "title": "存储介质、形式与管理归档",
         "freq": 3,
         "freqText": "基础",
         "html": "<ul>\n      <li>存储介质是数据存储的<span class=\"eye\">载体和基础</span>，并不是越贵越好、越先进越好；类型：磁带、光盘、磁盘、内存、闪存、云存储等。</li>\n      <li><span class=\"kw\">存储形式</span>：文件存储（分层存储方法）、块存储（快速、高效和可靠地数据传输，<span class=\"eye\">开发人员倾向使用</span>）、对象存储（处理<span class=\"eye\">非结构化数据</span>）。</li>\n      <li><span class=\"kw\">存储管理</span>：资源调度管理、存储资源管理、负载均衡管理、安全管理。</li>\n      <li><span class=\"kw\">归档</span>：<span class=\"eye\">只在业务低峰期执行</span>、数据填充；如影响线上业务要及时止损。</li>\n    </ul>"
        },
        {
         "id": "考点6-04",
         "title": "数据备份四种结构（LAN辨析高频）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>结构</th><th>特点</th></tr></thead>\n        <tbody>\n          <tr><td>DAS</td><td><span class=\"eye\">直接连接</span>；数据量不大、操作系统单一、服务器数量有限</td></tr>\n          <tr><td>基于LAN</td><td>小型网络，通过LAN共享、集中管理；<span class=\"eye\">业务和数据流混合在一起</span></td></tr>\n          <tr><td>LAN-FREE</td><td><span class=\"eye\">业务和数据流分开</span>，通过SAN进行传输备份；备份数据流经过应用服务器</td></tr>\n          <tr><td>Server-FREE</td><td><span class=\"eye\">不依赖应用服务器</span>，第三方备份代理</td></tr>\n        </tbody>\n      </table>\n    </div>"
        },
        {
         "id": "考点6-05",
         "title": "三种备份策略与容灾指标",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>策略</th><th>备份内容</th><th>特点</th></tr></thead>\n        <tbody>\n          <tr><td>完全备份</td><td>全备份</td><td>占用资源</td></tr>\n          <tr><td>差分备份</td><td>上一次<span class=\"eye\">完全备份之后</span>发生变化（累计增加）的数据</td><td>节省空间、恢复方便，只需两份备份数据</td></tr>\n          <tr><td>增量备份</td><td>上一次<span class=\"eye\">备份后</span>改变的数据</td><td>节省空间；恢复比较复杂，可靠性差</td></tr>\n        </tbody>\n      </table>\n    </div><div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>容灾指标/技术</th><th>含义</th></tr></thead>\n        <tbody>\n          <tr><td><span class=\"eye\">RPO</span> 恢复点目标</td><td>灾难发生时<span class=\"eye\">允许丢失的数据量</span></td></tr>\n          <tr><td><span class=\"eye\">RTO</span> 恢复时间目标</td><td>系统<span class=\"eye\">恢复的时间</span></td></tr>\n          <tr><td>远程镜像技术</td><td>存储在异地数据不受到影响</td></tr>\n          <tr><td>快照技术</td><td>某个时间点的映像</td></tr>\n        </tbody>\n      </table>\n    </div><div class=\"box trap\"><span class=\"bt\">⚠ 易错</span>RPO是“丢多少数据”（点），RTO是“多久恢复”（时间）；差分基准是“上次完全备份”，增量基准是“上次任意备份”。</div>"
        }
       ],
       "html": ""
      },
      {
       "title": "三、数据治理与建模",
       "points": [
        {
         "id": "考点6-06",
         "title": "元数据 · 标准化 · 数据质量",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li><span class=\"kw\">元数据</span>：<span class=\"eye\">关于数据的数据</span>。标准化内容：元数据、数据元、数据模式、数据分类与编码。</li>\n      <li>标准化四阶段：确定数据需求（产生数据需求）→制定数据标准（产生成套建议）→批准数据标准（封存建议进行审查）→实施数据标准（实施和改进已批准的数据标准）。</li>\n      <li><span class=\"kw\">数据质量六指标</span>：完整性、规范性、一致性、准确性、唯一性、及时性。</li>\n      <li>评价过程：确定质量范围→确定度量方法→选择评价方法→确定质量结果→决定一致性。</li>\n      <li>评价方法：直接（对比）、间接（推断）；质量控制：前期控制（录入前、实时）、后期控制（录入完成后）。</li>\n    </ul>"
        },
        {
         "id": "考点6-07",
         "title": "数据模型三层与建模过程",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>模型</th><th>说明</th></tr></thead>\n        <tbody>\n          <tr><td>概念模型（信息模型）</td><td>按<span class=\"eye\">用户的观点</span>对数据和信息建模；基本元素：实体、属性、域、键、关联</td></tr>\n          <tr><td>逻辑模型</td><td>在概念模型基础上确定模型的数据结构；类型：层次模型、网状模型、<span class=\"eye\">关系模型（最重要）</span>、面向对象模型和对象关系模型</td></tr>\n          <tr><td>物理模型</td><td><span class=\"eye\">真正实现数据在数据库中的存放</span></td></tr>\n        </tbody>\n      </table>\n    </div><ul><li><span class=\"kw\">数据建模过程</span>：需求分析→概念模型设计→逻辑模型设计→物理模型设计。</li></ul>"
        }
       ],
       "html": ""
      },
      {
       "title": "四、数据资产、集成、挖掘与服务",
       "points": [
        {
         "id": "考点6-08",
         "title": "数据资产管理DAM与资源编目",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li><span class=\"kw\">数字资源化</span>是数据资产化的<span class=\"eye\">必要前提</span>，以数据治理为工作重点。</li>\n      <li>数据资产化三环节：<span class=\"eye\">数据资产流通</span>（数据开放、共享、交易）→数据资产运营（持续跟踪和分析）→<span class=\"eye\">数据价值评估</span>（关键环节，价值基线）。</li>\n      <li><span class=\"kw\">数据资源目录</span>：<span class=\"eye\">全局视角</span>对所拥有的全部数据资源进行编目；含资源目录、资产目录和服务目录。</li>\n      <li><span class=\"kw\">信息项</span>：以<span class=\"eye\">元数据流水账</span>的形式（数据资源、数据资产、数据服务信息项）；数据资源库：专题、主题、基础数据资源库。</li>\n    </ul>"
        },
        {
         "id": "考点6-09",
         "title": "数据集成方法与访问接口",
         "freq": 4,
         "freqText": "中频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>接口</th><th>要点</th></tr></thead>\n        <tbody>\n          <tr><td>ODBC</td><td>应用程序接口、驱动程序管理器、驱动程序和数据库源</td></tr>\n          <tr><td>JDBC</td><td><span class=\"eye\">用于执行SQL语句的Java应用程序接口</span></td></tr>\n          <tr><td>OLE DB</td><td>对所有类型数据的操作；<span class=\"eye\">可离线</span>的情况下存取</td></tr>\n          <tr><td>ADO</td><td><span class=\"eye\">应用层</span>的接口；简单易学</td></tr>\n        </tbody>\n      </table>\n    </div><ul>\n      <li><span class=\"kw\">数据集成三方法</span>：模式集成（虚拟视图方法，数据集成方法的<span class=\"eye\">基础</span>，全局模式）、复制集成（可复制整个数据源，也可仅复制变化数据）、混合集成（简单请求→复制集成；复杂请求→模式集成）。</li>\n      <li><span class=\"kw\">Web Services</span>：WSDL（基于XML格式，Web服务描述的语言）、SOAP（消息传递协议）、UDDI（创建注册服务的规范）。</li>\n      <li><span class=\"kw\">数据网格技术</span>：分布、异构、数据位置、数据访问方式的<span class=\"eye\">透明性</span>。</li>\n    </ul>"
        },
        {
         "id": "考点6-10",
         "title": "数据挖掘（任务与五阶段必考）",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n      <li>与传统数据区别：传统数据量小、统计学、<span class=\"eye\">回顾型、成熟</span>；数据挖掘量大、多种技术、<span class=\"eye\">预测型、发展</span>。</li>\n      <li>目标：发现隐藏于数据之后的规律，<span class=\"eye\">服务于决策</span>。</li>\n    </ul><div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>主要任务</th><th>题眼</th></tr></thead>\n        <tbody>\n          <tr><td>数据总结</td><td>算统计值、画图表、简单概括</td></tr>\n          <tr><td>关联分析</td><td>找两件事<span class=\"eye\">一起发生</span>的关联</td></tr>\n          <tr><td>分类预测</td><td>类别提前定，归类＋预判</td></tr>\n          <tr><td>聚类分析</td><td><span class=\"eye\">没有预设类别，机器自动分组</span></td></tr>\n          <tr><td>孤立点分析</td><td>揪出异常数据</td></tr>\n        </tbody>\n      </table>\n    </div><ul>\n      <li><span class=\"kw\">五阶段</span>：确定分析对象→数据准备→数据挖掘→结果评估→结果应用；人员：业务分析人员、数据挖掘人员、数据管理人员。</li>\n    </ul><div class=\"box trap\"><span class=\"bt\">⚠ 易错</span>分类＝<b>有监督</b>（类别提前定），聚类＝<b>无监督</b>（无预设类别自动分组），二者必区分。</div>"
        },
        {
         "id": "考点6-11",
         "title": "数据服务与数据可视化",
         "freq": 3,
         "freqText": "基础",
         "html": "<ul>\n      <li><span class=\"kw\">数据服务</span>：目录服务（检索服务）；查询与浏览及下载服务（<span class=\"eye\">网上数据共享服务的重要方式</span>）；数据分发服务（数据发布、数据发现、数据评价）。</li>\n      <li><span class=\"kw\">数据可视化</span>：一维（文本、表格、源代码）、二维（地图、楼层平面图、GIS）、三维（立体信息）、多维（超过三维）；时态（<span class=\"eye\">最常见、最有用</span>，随可视化时间变化）、层次（树形数据结构）、网络（网络数据没有固有的层次结构）。</li>\n    </ul>"
        }
       ],
       "html": ""
      },
      {
       "title": "五、数据脱敏与分类分级",
       "points": [
        {
         "id": "考点6-12",
         "title": "敏感数据五级与脱敏规则",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>等级</th><th>L1</th><th>L2</th><th>L3</th><th>L4</th><th>L5</th></tr></thead>\n        <tbody>\n          <tr><td>名称</td><td><span class=\"eye\">公开</span></td><td>保密</td><td>机密</td><td>绝密</td><td>私密</td></tr>\n        </tbody>\n      </table>\n    </div><ul>\n      <li><span class=\"kw\">脱敏方式</span>：<span class=\"eye\">可恢复</span>（各类加解密算法规则）、<span class=\"eye\">不可恢复</span>（替换算法和生成算法两类）。</li>\n      <li><span class=\"kw\">脱敏原则</span>：算法不可逆；保留引用完整性（用于开发测试）；规避融合风险（潜在字段脱敏）；保持数据特征（关联记录同步改）；脱敏过程自动化；脱敏结果可重复。</li>\n      <li><span class=\"kw\">数据分级三维度</span>：基于价值（公开、内部、重要核心）、敏感程度（公开、秘密、机密、绝密）、司法影响（境内、跨区、跨境）。</li>\n    </ul>"
        }
       ],
       "html": ""
      }
     ]
    },
    {
     "id": "ch7",
     "isAppendix": false,
     "num": "07",
     "title": "软硬件系统集成",
     "en": "HARDWARE & SOFTWARE INTEGRATION",
     "desc": "",
     "stat": [
      {
       "label": "",
       "html": "<span>速记卡片：<b>P25–P26</b></span>"
      },
      {
       "label": "",
       "html": "<span>命题热点：<b>弱电系统拓扑、三种广域网交换对比、操作系统五类型、中间件分类、CORBA/COM/.NET/J2EE、EAI</b></span>"
      },
      {
       "label": "",
       "html": "<span>建议用时：<b>35分钟</b></span>"
      }
     ],
     "sections": [
      {
       "title": "一、基础设施集成",
       "points": [
        {
         "id": "考点7-01",
         "title": "集成总纲与弱电工程",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li>软硬件系统集成：以<span class=\"eye\">信息的集成为目标，功能的集成为结构，平台的集成为基础，人员的集成为保证</span>。</li>\n      <li>弱电一般指交流<span class=\"eye\">220V、50Hz以下</span>的用电。</li>\n    </ul><div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>系统</th><th>拓扑结构</th></tr></thead>\n        <tbody>\n          <tr><td>①电话通信系统 ②计算机局域网系统</td><td><span class=\"eye\">星型</span></td></tr>\n          <tr><td>③音乐/广播系统</td><td><span class=\"eye\">总线</span></td></tr>\n          <tr><td>④有线电视信号分配系统</td><td><span class=\"eye\">树型</span></td></tr>\n          <tr><td>⑤视频/监控系统</td><td>星型/总线</td></tr>\n          <tr><td>⑥消防报警系统</td><td><span class=\"eye\">总线为主，星型</span></td></tr>\n        </tbody>\n      </table>\n    </div>"
        },
        {
         "id": "考点7-02",
         "title": "网络集成：传输介质与交换子系统",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li><span class=\"kw\">传输介质</span>：无线（无线电波、微波、红外线）；有线（<span class=\"eye\">双绞线、同轴电缆、光纤</span>）。</li>\n      <li><span class=\"kw\">局域网交换</span>：共享式（共享高速传输介质）；交换式（以数据链路层的<span class=\"eye\">帧或更小的数据单元（信元）</span>为交换单位，硬件交换电路）。</li>\n      <li><span class=\"kw\">城域网交换</span>：传输媒介主要是光缆，以<span class=\"eye\">IP和ATM</span>电信技术为基础，以光纤作为传输媒介。</li>\n    </ul>"
        },
        {
         "id": "考点7-03",
         "title": "广域网三种交换（优缺点对比必考）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>交换方式</th><th>机制</th><th>优点</th><th>缺点</th></tr></thead>\n        <tbody>\n          <tr><td>电路交换</td><td>专用通信线路（电话网）</td><td><span class=\"eye\">延时小</span></td><td>利用率低</td></tr>\n          <tr><td>报文交换</td><td>无专用线路，节点多次“<span class=\"eye\">存储转发</span>”</td><td>利用率高</td><td><span class=\"eye\">延时大</span></td></tr>\n          <tr><td>分组交换</td><td>分组转发</td><td><span class=\"eye\">更高的利用率、更短的传输时延、更低的通信费用</span></td><td>—</td></tr>\n          <tr><td>混合交换</td><td colspan=\"3\">电路＋分组，典型的<span class=\"eye\">ATM技术</span></td></tr>\n        </tbody>\n      </table>\n    </div><div class=\"box mn\"><span class=\"bt\">🔑 口诀</span>“<b>电小低、报大高、分短高低</b>”——电路延时小利用率低；报文延时大利用率高；分组时延短费用低。</div><ul>\n      <li>网络三大子系统：安全子系统（防火墙、数据加密、访问控制）、网管子系统（网络是动态结构，保证网络良好运行）、服务子系统（<span class=\"eye\">网络服务是网络应用最核心的问题</span>）。</li>\n    </ul>"
        },
        {
         "id": "考点7-04",
         "title": "数据中心集成（选型因素）",
         "freq": 3,
         "freqText": "基础",
         "html": "<ul>\n      <li><span class=\"kw\">选择网络服务器考虑</span>：CPU的速度和数量、内存容量和性能、总线结构和类型、磁盘容量和性能、容错性能、网络接口性能、服务器软件等。</li>\n      <li><span class=\"kw\">存储设备集成考虑</span>：①磁盘阵列空间和类型 ②配置硬盘的数量 ③RAID控制器结构 ④支持<span class=\"eye\">RAID 0、RAID 1、RAID 5</span>或更多类型 ⑤<span class=\"eye\">IOPS</span>读写性能和数据传输能力 ⑥满足高可靠性，配置冗余热插拔的电源、风扇等。</li>\n    </ul>"
        }
       ],
       "html": ""
      },
      {
       "title": "二、基础软件集成",
       "points": [
        {
         "id": "考点7-05",
         "title": "操作系统：分类与功能",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>分类角度</th><th>类型</th></tr></thead>\n        <tbody>\n          <tr><td>运行环境</td><td>桌面、服务器、手机、嵌入式</td></tr>\n          <tr><td>功能角度</td><td><span class=\"eye\">批处理</span>（按顺序执行）、<span class=\"eye\">网络</span>（数据共享最核心）、<span class=\"eye\">实时</span>（时间敏感）、<span class=\"eye\">分时</span>（多用户和多任务）、<span class=\"eye\">分布式</span>（分布到多台计算机）</td></tr>\n        </tbody>\n      </table>\n    </div><ul>\n      <li>操作系统五大管理功能：<span class=\"eye\">进程、存储、设备、文件、作业管理</span>。</li>\n      <li>操作系统虚拟化是<span class=\"eye\">容器的核心技术</span>；技术架构三层：容器实例层、容器管理层和内核资源层。</li>\n    </ul>"
        },
        {
         "id": "考点7-06",
         "title": "中间件：定位、功能与六类",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n      <li>处于<span class=\"eye\">操作系统与应用软件的中间</span>；功能：公共服务、通信支持、应用支持。</li>\n    </ul><div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>分类</th><th>特点</th></tr></thead>\n        <tbody>\n          <tr><td>事务式</td><td>提供事务控制、负载平衡、故障恢复；<span class=\"eye\">可靠性高、极强扩展性</span>，大量行业应用</td></tr>\n          <tr><td>过程式（远程过程调用）</td><td>客户机和服务器（访问连接）；简单易用，但易剪裁性和容错性有局限</td></tr>\n          <tr><td>面向消息</td><td>消息队列和消息传递，<span class=\"eye\">非直接连接</span></td></tr>\n          <tr><td>面向对象</td><td>在分布异构环境下的自然拓展</td></tr>\n          <tr><td>交易</td><td>专门针对<span class=\"eye\">联机交易处理系统</span>而设计</td></tr>\n          <tr><td>Web应用服务器</td><td>直接支持三层或多层应用系统的开发；<span class=\"eye\">J2EE架构是主流标准</span></td></tr>\n        </tbody>\n      </table>\n    </div>"
        },
        {
         "id": "考点7-07",
         "title": "办公软件：流式 vs 版式",
         "freq": 3,
         "freqText": "基础",
         "html": "<div class=\"grid2\">\n      <div class=\"minicard\"><h4 class=\"eye\">流式</h4><ul><li>金山的 WPS Office</li><li>存在“<b>跑版</b>”现象</li></ul></div>\n      <div class=\"minicard\"><h4 class=\"gn\">版式</h4><ul><li>不做任何改动与编辑</li><li><b>不会“跑版”</b></li></ul></div>\n    </div>"
        }
       ],
       "html": ""
      },
      {
       "title": "三、应用软件集成与EAI",
       "points": [
        {
         "id": "考点7-08",
         "title": "CORBA / COM / DCOM / COM+ / .NET / J2EE",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\">\n      <table>\n        <thead><tr><th>技术</th><th>考点要点</th></tr></thead>\n        <tbody>\n          <tr><td>CORBA</td><td>功能：对象请求代理（<span class=\"eye\">ORB</span>）、对象服务、公共功能、域接口、应用接口</td></tr>\n          <tr><td>COM</td><td>特点：面向对象、客户机/服务器、语言无关性、进程透明性和可重用性</td></tr>\n          <tr><td>DCOM</td><td><span class=\"eye\">COM的扩展</span>，继承COM优点；新特性：位置透明性、网络安全性、跨平台调用等</td></tr>\n          <tr><td>COM+</td><td>真正的异步通信、事件服务、可伸缩性、继承并发展了MTS的特性、可管理和可配置性、易于开发</td></tr>\n          <tr><td>.NET</td><td>通用语言运行环境（<span class=\"eye\">底层、基础，编程模型</span>）、基础类库（编程接口）、ADO.NET（访问数据库）、ASP.NET（网络编程结构）；通用语言规范：VB、C++、C#、JScript</td></tr>\n          <tr><td>J2EE</td><td><span class=\"eye\">客户端层、服务器端组件层、EJB层、信息系统层</span></td></tr>\n        </tbody>\n      </table>\n    </div>"
        },
        {
         "id": "考点7-09",
         "title": "业务应用集成 EAI",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n      <li><span class=\"kw\">技术要求</span>：应用间的<span class=\"eye\">互操作性</span>、分布式环境中应用的<span class=\"eye\">可移植性</span>、系统中应用分布的<span class=\"eye\">透明性</span>。</li>\n      <li><span class=\"kw\">重要优势</span>：共享、提高效率、简化、降低成本、优化流程。</li>\n      <li><span class=\"kw\">三大组件</span>：①应用编程接口API（支持应用之间相互通信）②事件驱动型操作（触发器启动→执行操作）③数据映射（简化后续的数据导出、分组或分析工作）。</li>\n    </ul>"
        }
       ],
       "html": ""
      }
     ]
    }
   ],
   "appendices": [
    {
     "id": "apx-num",
     "isAppendix": true,
     "num": "A1",
     "title": "数字 · 距离 · 百分比速记",
     "en": "NUMBERS · DISTANCE · PERCENTAGE",
     "desc": "",
     "stat": [],
     "sections": [
      {
       "title": "一、网络作用范围：距离数字（必背）",
       "points": [],
       "html": "<div class=\"table-wrap\">\n    <table>\n      <thead><tr><th>网络</th><th>缩写</th><th>作用距离</th><th>一句话题眼</th></tr></thead>\n      <tbody>\n        <tr><td>个人局域网</td><td>PAN</td><td><span class=\"eye\">10m</span></td><td>最小，个人周边设备</td></tr>\n        <tr><td>局域网</td><td>LAN</td><td><span class=\"eye\">1km</span>以内</td><td>一幢楼/一个园区</td></tr>\n        <tr><td>城域网</td><td>MAN</td><td><span class=\"eye\">5～50km</span></td><td>一座城市范围</td></tr>\n        <tr><td>广域网</td><td>WAN</td><td><span class=\"eye\">几十～几千公里</span></td><td>跨城市、跨国家，范围最大</td></tr>\n      </tbody>\n    </table>\n  </div><div class=\"box trap\"><span class=\"bt\">⚠ 易错</span>距离递增顺序：<b>PAN（10m）＜ LAN（1km）＜ MAN（5–50km）＜ WAN（几十～几千公里）</b>，排序题最爱把 LAN 与 MAN 反置。</div>"
      },
      {
       "title": "二、年份 ↔ 国家战略目标（三步走）",
       "points": [],
       "html": "<div class=\"table-wrap\">\n    <table>\n      <thead><tr><th>时间节点</th><th>目标定位</th><th>配套表述</th></tr></thead>\n      <tbody>\n        <tr><td><span class=\"eye\">2020年</span></td><td><b>先进</b></td><td>建成网络大国（国家信息化“三步走”第一步）</td></tr>\n        <tr><td><span class=\"eye\">2025年</span></td><td><b>领先</b></td><td>涌现一批大型跨国网信企业</td></tr>\n        <tr><td><span class=\"eye\">2035年</span></td><td>数字鸿沟大幅缩小</td><td>城乡“数字鸿沟”大幅缩小（数字乡村）</td></tr>\n        <tr><td><span class=\"eye\">21世纪中叶</span></td><td><b>引领</b></td><td>建成网络强国；全面实现农业强、农村美、农民富</td></tr>\n      </tbody>\n    </table>\n  </div>"
      },
      {
       "title": "三、百分比 · 规模阈值 · 电气指标",
       "points": [],
       "html": "<div class=\"grid2\">\n    <div class=\"minicard\"><h4 class=\"eye\">80% 黄金数字</h4><ul>\n      <li><b>运营提升</b>阶段占服务整体生命周期的<span class=\"eye\">80%左右</span></li>\n      <li>含业务运营和IT运营，负责改进缺陷</li>\n    </ul></div>\n    <div class=\"minicard\"><h4 class=\"eye\">500人 分界线</h4><ul>\n      <li><b>集中式服务器</b>部署：访问量小、<span class=\"eye\">500人以下</span>、硬件环境要求不高</li>\n      <li>访问量大、高并发 → 微服务分布式（容器+DevOps）</li>\n    </ul></div>\n    <div class=\"minicard\"><h4 class=\"eye\">弱电 220V / 50Hz</h4><ul>\n      <li>弱电一般指交流<span class=\"eye\">220V、50Hz以下</span>的用电</li>\n      <li>弱电系统拓扑是第7章命题热点</li>\n    </ul></div>\n    <div class=\"minicard\"><h4 class=\"eye\">RAID 类型</h4><ul>\n      <li>存储设备集成须支持 <span class=\"eye\">RAID 0、RAID 1、RAID 5</span> 或更多类型</li>\n      <li>同时关注 IOPS、冗余热插拔电源/风扇</li>\n    </ul></div>\n  </div>"
      },
      {
       "title": "四、5G 关键指标（数字题）",
       "points": [],
       "html": "<div class=\"table-wrap\">\n    <table>\n      <thead><tr><th>指标</th><th>数值</th><th>三大场景</th></tr></thead>\n      <tbody>\n        <tr><td>峰值速率 / 用户体验速率</td><td><span class=\"eye\">20G 峰速、1G 体验</span></td><td rowspan=\"3\">eMBB 增强移动宽带<br/>uRLLC 超高可靠低时延通信<br/>mMTC 海量机器类通信</td></tr>\n        <tr><td>空口时延 / 连接密度</td><td><span class=\"eye\">1ms 时延、10M 连接密度</span></td></tr>\n        <tr><td>移动性 / 能效连接</td><td><span class=\"eye\">500公里高移动</span>、百万连接、3倍效</td></tr>\n      </tbody>\n    </table>\n  </div><div class=\"box ok\"><span class=\"bt\">✅ 特点三词</span>5G＝<b>高速率、大连接、低时延</b>。</div>"
      },
      {
       "title": "五、四套“五级序列”（等级顺序题）",
       "points": [],
       "html": "<div class=\"table-wrap\">\n    <table>\n      <thead><tr><th>模型</th><th>一级</th><th>二级</th><th>三级</th><th>四级</th><th>五级</th></tr></thead>\n      <tbody>\n        <tr><td>智能制造能力成熟度</td><td>规划级</td><td>规范级</td><td>集成级</td><td>优化级</td><td><span class=\"eye\">引领级</span></td></tr>\n        <tr><td>软件过程能力 CSMM</td><td>初始级</td><td>项目规范级</td><td>组织改进级</td><td>量化提升级</td><td><span class=\"eye\">创新引领级</span></td></tr>\n        <tr><td>智慧城市成熟度</td><td>规划级</td><td>管理级</td><td>协同级</td><td>优化级</td><td><span class=\"eye\">引领级</span></td></tr>\n        <tr><td>敏感数据分级</td><td>L1 公开</td><td>L2 保密</td><td>L3 机密</td><td>L4 绝密</td><td>L5 私密</td></tr>\n      </tbody>\n    </table>\n  </div><div class=\"box mn\"><span class=\"bt\">🔑 提示</span>三套成熟度最高级都落到“<b>引领</b>”二字；敏感数据 L1–L5 中 <b>L1 是公开</b>，不要想当然把公开放到最高。</div>"
      },
      {
       "title": "六、必考“个数”清单（枚举题防多防少）",
       "points": [],
       "html": "<div class=\"table-wrap\">\n    <table>\n      <thead><tr><th>个数</th><th>考点</th></tr></thead>\n      <tbody>\n        <tr><td><span class=\"eye\">7个</span></td><td>信息质量属性（精确性、完整性、可验证性、可靠性、及时性、经济性、安全性）；OSI 七层；OOD 七大原则</td></tr>\n        <tr><td><span class=\"eye\">14种</span></td><td>UML 2.0 图＝静态图 <b>8</b> 种 ＋ 动态图 <b>6</b> 种（动态图中含交互图4种）</td></tr>\n        <tr><td><span class=\"eye\">6个</span></td><td>国家信息化体系六要素；ITSS 5.0 六大内容；WPDRRC 六环节；中间件六类</td></tr>\n        <tr><td><span class=\"eye\">三大</span></td><td>数字中国三组成（数字经济/数字政府/数字社会）；数据价值化三化（资源化/资产化/资本化）；5G 三大场景</td></tr>\n        <tr><td><span class=\"eye\">七大领域</span></td><td>新基建：5G、人工智能、大数据中心、工业互联网、特高压、城际高铁和轨道交通、新能源充电桩</td></tr>\n        <tr><td><span class=\"eye\">四阶段</span></td><td>IT 服务生命周期：战略规划 → 设计实现 → 运营提升 → 退役终止；部署四阶段：计划→启动→执行→交付</td></tr>\n      </tbody>\n    </table>\n  </div>"
      }
     ]
    },
    {
     "id": "apx-mn",
     "isAppendix": true,
     "num": "A2",
     "title": "记忆口诀大全",
     "en": "MNEMONICS COLLECTION",
     "desc": "",
     "stat": [],
     "sections": [
      {
       "title": "第1章 · 信息与信息化",
       "points": [],
       "html": "<div class=\"table-wrap\">\n    <table>\n      <thead><tr><th>口诀</th><th>还原考点</th></tr></thead>\n      <tbody>\n        <tr><td class=\"gd\">姐易换</td><td>解码侧三设备：译（<b>译码器</b>）、模（<b>数模转换器</b>）、换（<b>解调器</b>）</td></tr>\n        <tr><td class=\"gd\">分析逻辑、设计物理</td><td>系统分析阶段建<b>逻辑模型</b>，系统设计阶段建<b>物理模型</b>；生命周期：规划—分析—设计—实施—运维</td></tr>\n        <tr><td class=\"gd\">上“鹰”下“鸡”、左“人”右“龟”</td><td>六要素地位图：上＝信息技术应用（<b>龙头</b>）、下＝技术和产业（<b>基础</b>）、左＝人才（<b>成功之本</b>）、右＝政策法规标准规范（<b>保障</b>）</td></tr>\n        <tr><td class=\"gd\">5人打工特高薪</td><td>新基建七大领域：<b>5</b>G、<b>人</b>工智能、<b>大</b>数据中心、<b>工</b>业互联网、<b>特</b>高压、<b>高</b>铁轨交、新能源<b>薪</b>（充）电桩</td></tr>\n        <tr><td class=\"gd\">通算术 · 能交 · 产科</td><td>新基建三类：信息基础设施（<b>通</b>信、<b>算</b>力、新技<b>术</b>）；融合基础设施（智<b>能</b>交通等）；创新基础设施（<b>产</b>学研<b>科</b>教）</td></tr>\n        <tr><td class=\"gd\">一花二饭三成四友五菱</td><td>智能制造能力成熟度五级：一级<b>规</b>（花）划、二级<b>规</b>（饭）范、三级<b>集</b>（成）成、四级<b>优</b>（友）化、五级<b>引</b>（菱）领</td></tr>\n      </tbody>\n    </table>\n  </div>"
      },
      {
       "title": "第2章 · 信息技术发展",
       "points": [],
       "html": "<div class=\"table-wrap\">\n    <table>\n      <thead><tr><th>口诀</th><th>还原考点</th></tr></thead>\n      <tbody>\n        <tr><td class=\"gd\">无话连二、络三传四、应关</td><td>交换层次：<b>物</b>理层—<b>话</b>（电话网）；数据<b>连</b>路层—<b>二</b>层交换机（MAC）；网<b>络</b>层—<b>三</b>层/路由器（IP）；<b>传</b>输层—<b>四</b>层交换机（端口）；<b>应</b>用层—网<b>关</b></td></tr>\n        <tr><td class=\"gd\">武术忘传会彪鹰</td><td>OSI 七层自下而上：<b>物</b>理层、<b>数</b>据链路层、<b>网</b>络层、<b>传</b>输层、<b>会</b>话层、<b>表</b>（彪）示层、<b>应</b>（鹰）用层</td></tr>\n        <tr><td class=\"gd\">真的P颠P颠上路取钱，花802吃海底捞</td><td>数据链路层协议/设备记忆（PPP、ATM、802系列、帧中继等，按卡片原音记忆）</td></tr>\n        <tr><td class=\"gd\">示意GGII</td><td>表示层数据格式：<b>G</b>IF、<b>J</b>PEG、<b>M</b>PEG、ASCII、D<b>E</b>S（加密压缩在表示层）</td></tr>\n        <tr><td class=\"gd\">对私D、非公R</td><td><b>对</b>称加密→<b>私</b>人秘钥→<b>D</b>ES；<b>非</b>对称加密→<b>公</b>开秘钥→<b>R</b>SA</td></tr>\n        <tr><td class=\"gd\">咋离憨批，你快受骗，实在水桶</td><td>三大计算框架：Hadoop＝<b>离</b>线复杂（憨批）；Spark＝<b>离</b>线<b>快</b>速（快受骗）；Storm＝<b>在</b>线<b>实</b>时（水桶）</td></tr>\n      </tbody>\n    </table>\n  </div>"
      },
      {
       "title": "第3章 · 信息技术服务",
       "points": [],
       "html": "<div class=\"table-wrap\">\n    <table>\n      <thead><tr><th>口诀</th><th>还原考点</th></tr></thead>\n      <tbody>\n        <tr><td class=\"gd\">全连法数</td><td>服务退役终止四风险：信息<b>安</b>（全）全、业务<b>连</b>续性、<b>法</b>律法规、<b>数</b>据</td></tr>\n        <tr><td class=\"gd\">计启执交</td><td>服务部署四阶段：<b>计</b>划 → <b>启</b>动 → 执<b>行</b> → 交<b>付</b></td></tr>\n        <tr><td class=\"gd\">全靠好形象</td><td>服务质量五特性总纲：<b>安</b>（全）全性、可<b>靠</b>性、响<b>应</b>性、有<b>形</b>（象）性、友<b>好</b>性</td></tr>\n        <tr><td class=\"gd\">全用密丸 / 靠有备连稳追 / 应激动 / 形式也贵 / 好灵动哩</td><td>子项展开：安全性＝可<b>用</b>性、<b>密</b>（秘）<b>完</b>（丸）整性、保密性；可靠性＝有（有效性）备（完备性）连（连续性）稳（稳定性）追（可追溯性）；响应性＝及时性、互动性；有形性＝可视性、专业性、合规性；友好性＝主动性、灵活性、礼貌性</td></tr>\n      </tbody>\n    </table>\n  </div>"
      },
      {
       "title": "第4章 · 信息系统架构",
       "points": [],
       "html": "<div class=\"table-wrap\">\n    <table>\n      <thead><tr><th>口诀</th><th>还原考点</th></tr></thead>\n      <tbody>\n        <tr><td class=\"gd\">预警护检测，响应恢复反击</td><td>WPDRRC 六环节（按序）：<b>W 预警</b>、<b>P 防护</b>、<b>D 检测</b>、<b>R 响应</b>、<b>R 恢复</b>、<b>C 反击</b>（反击靠证据）</td></tr>\n        <tr><td class=\"gd\">技 / 人 / 策</td><td>信息安全三要素：<b>技</b>术（保证）、<b>人</b>员（核心）、<b>策</b>略（桥梁）</td></tr>\n      </tbody>\n    </table>\n  </div>"
      },
      {
       "title": "第5章 · 软件工程",
       "points": [],
       "html": "<div class=\"table-wrap\">\n    <table>\n      <thead><tr><th>口诀</th><th>还原考点</th></tr></thead>\n      <tbody>\n        <tr><td class=\"gd\">形态S、属实R、能留F</td><td>结构化分析三模型：行<b>为</b>模型→状<b>态</b>转换图 <b>S</b>TD；<b>数</b>（属）据模型→<b>实</b>体联系图 E-<b>R</b>；功<b>能</b>模型→数据<b>流</b>图 <b>F</b>（DFD）</td></tr>\n      </tbody>\n    </table>\n  </div>"
      },
      {
       "title": "第7章 · 软硬件系统集成",
       "points": [],
       "html": "<div class=\"table-wrap\">\n    <table>\n      <thead><tr><th>口诀</th><th>还原考点</th></tr></thead>\n      <tbody>\n        <tr><td class=\"gd\">电小低、报大高、分短高低</td><td>三种广域网交换对比：<b>电</b>路交换—时延<b>小</b>、利用率<b>低</b>；<b>报</b>文交换—时延<b>大</b>、利用率<b>高</b>；<b>分</b>组交换—时延<b>短</b>、费用<b>低</b>（高质量的高低搭配）</td></tr>\n      </tbody>\n    </table>\n  </div><div class=\"box mn\"><span class=\"bt\">🔑 说明</span>第6章（数据工程）以“分级、分类、流程顺序”为主，无谐音口诀，相关易混点统一放 <a href=\"#apx-trap\" style=\"color:var(--gold);font-weight:800\">附录 A3</a> 辨析。</div>"
      }
     ]
    },
    {
     "id": "apx-trap",
     "isAppendix": true,
     "num": "A3",
     "title": "高频易混点辨析",
     "en": "CONFUSABLES COMPARISON",
     "desc": "",
     "stat": [],
     "sections": [
      {
       "title": "一、安全类孪生概念",
       "points": [],
       "html": "<div class=\"table-wrap\">\n    <table>\n      <thead><tr><th>易混点</th><th>概念 A</th><th>概念 B</th></tr></thead>\n      <tbody>\n        <tr>\n          <td>入侵检测 vs 入侵防护</td>\n          <td><b>IDS</b> 入侵检测系统：<span class=\"eye\">被动、只报警</span></td>\n          <td><b>IPS</b> 入侵防护系统：<span class=\"eye\">主动、控制并拦截</span></td>\n        </tr>\n        <tr>\n          <td>数据安全 vs 行为安全</td>\n          <td><b>数据安全＝静态安全</b>：秘密性、完整性、<span class=\"eye\">可用性</span></td>\n          <td><b>行为安全＝动态安全</b>：秘密性、完整性、<span class=\"eye\">可控性</span></td>\n        </tr>\n        <tr>\n          <td>对称 vs 非对称加密</td>\n          <td><b>对称</b>：私人秘钥、加解密同一把 → DES</td>\n          <td><b>非对称</b>：公开秘钥、公钥加密私钥解密 → RSA</td>\n        </tr>\n        <tr>\n          <td>OSI 安全服务位置</td>\n          <td colspan=\"2\"><span class=\"eye\">唯独第5层会话层不适合配置安全服务</span>；最适合的是 <b>1 物理层、3 网络层、4 传输层、7 应用层</b></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>"
      },
      {
       "title": "二、软件测试与设计类",
       "points": [],
       "html": "<div class=\"table-wrap\">\n    <table>\n      <thead><tr><th>易混点</th><th>概念 A</th><th>概念 B</th></tr></thead>\n      <tbody>\n        <tr>\n          <td>白盒 vs 黑盒测试</td>\n          <td><b>白盒＝结构测试</b>：透明、了解内部结构，<span class=\"eye\">用于单元测试</span></td>\n          <td><b>黑盒＝功能测试</b>：不透明、不看结构，<span class=\"eye\">用于集成测试、确认测试、系统测试</span></td>\n        </tr>\n        <tr>\n          <td>测试依据文档</td>\n          <td>单元测试 → <b>详细设计说明书</b>；集成测试 → <b>概要设计文档</b></td>\n          <td>确认测试 → 是否与<b>用户需求</b>一致</td>\n        </tr>\n        <tr>\n          <td>耦合 vs 内聚</td>\n          <td><b>耦合＝模块之间</b>的联系，排序<span class=\"eye\">从低到高</span>（无直接→数据→标记→控制→外部→公共→内容）</td>\n          <td><b>内聚＝模块内部</b>的联系，排序<span class=\"eye\">从高到低</span>（功能→顺序→通信→过程→时间→逻辑→偶然）</td>\n        </tr>\n        <tr>\n          <td>UML 用例图归属</td>\n          <td colspan=\"2\"><b>用例图是静态图</b>（高频反置为动态图）；静态图8种、动态图6种；类＝静态关系、对象＝动态性</td>\n        </tr>\n        <tr>\n          <td>需求跟踪方向</td>\n          <td><b>正向跟踪</b>：需求 → 成果</td>\n          <td><b>逆向跟踪</b>：成果 → 需求</td>\n        </tr>\n      </tbody>\n    </table>\n  </div><div class=\"box ok\"><span class=\"bt\">✅ 黄金结论</span>好设计＝<b>高内聚、低耦合</b>；迪米特原则（最少知识法则）专门用于降低耦合、提高独立性。</div>"
      },
      {
       "title": "三、数据工程类",
       "points": [],
       "html": "<div class=\"table-wrap\">\n    <table>\n      <thead><tr><th>易混点</th><th>概念 A</th><th>概念 B</th></tr></thead>\n      <tbody>\n        <tr>\n          <td>差分 vs 增量备份</td>\n          <td><b>差分备份</b>：基准＝上一次<span class=\"eye\">完全备份之后</span>变化的数据（累计）；恢复方便，<b>只需两份</b></td>\n          <td><b>增量备份</b>：基准＝上一次<span class=\"eye\">备份后</span>变化的数据；省空间，但恢复复杂、可靠性差</td>\n        </tr>\n        <tr>\n          <td>RPO vs RTO</td>\n          <td><b>RPO 恢复点目标</b>：灾难发生时<span class=\"eye\">允许丢失的数据量</span>（丢多少·点）</td>\n          <td><b>RTO 恢复时间目标</b>：系统<span class=\"eye\">恢复所需的时间</span>（多久恢复·时间）</td>\n        </tr>\n        <tr>\n          <td>分类 vs 聚类</td>\n          <td><b>分类预测＝有监督</b>：类别提前定，归类＋预判</td>\n          <td><b>聚类分析＝无监督</b>：没有预设类别，机器自动分组</td>\n        </tr>\n        <tr>\n          <td>资源化 vs 资产化</td>\n          <td><b>资源化＝数据价值化起点</b>：无序变有序、创造使用价值</td>\n          <td><b>资产化＝数据价值化核心</b>：流通交易、实现价值（二者地位高频互换设错）</td>\n        </tr>\n        <tr>\n          <td>OLAP vs OLTP</td>\n          <td><b>OLAP</b>：联机<b>分析</b>处理，数据仓库侧，重分析决策</td>\n          <td><b>OLTP</b>：联机<b>事务</b>处理，业务操作侧，重事务处理</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>"
      },
      {
       "title": "四、网络存储与政务类",
       "points": [],
       "html": "<div class=\"table-wrap\">\n    <table>\n      <thead><tr><th>易混点</th><th>概念 A</th><th>概念 B</th></tr></thead>\n      <tbody>\n        <tr>\n          <td>DAS / NAS / SAN</td>\n          <td><b>DAS</b> 直连式：数据块、直接连服务器，硬件堆叠；<b>NAS</b> 网络存储：走 <span class=\"eye\">TCP/IP、基于文件</span>共享与备份</td>\n          <td><b>SAN</b> 存储网络：<span class=\"eye\">光纤、数据块</span>，大型、成本高、速度快</td>\n        </tr>\n        <tr>\n          <td>TCP / UDP 协议归属</td>\n          <td colspan=\"2\">协议名<b>带“T”的均建立在 TCP 上</b>（HTTP、FTP、SMTP、Telnet…），<span class=\"eye\">唯独 TFTP 例外——TFTP 走 UDP</span></td>\n        </tr>\n        <tr>\n          <td>一网通办 vs 一窗式</td>\n          <td><b>一网通办</b>：<span class=\"eye\">个人自主填报</span>（网上办）</td>\n          <td><b>一窗式办理</b>：<span class=\"eye\">工作人员填报</span>（窗口办）</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>"
      },
      {
       "title": "五、三种广域网交换（补第7章）",
       "points": [],
       "html": "<div class=\"table-wrap\">\n    <table>\n      <thead><tr><th>交换方式</th><th>时延</th><th>线路利用率</th><th>其他</th></tr></thead>\n      <tbody>\n        <tr><td>电路交换</td><td><span class=\"eye\">小</span></td><td><span class=\"eye\">低</span></td><td>独占链路、建立连接</td></tr>\n        <tr><td>报文交换</td><td><span class=\"eye\">大</span></td><td><span class=\"eye\">高</span></td><td>存储转发、整个报文</td></tr>\n        <tr><td>分组交换</td><td><span class=\"eye\">短</span></td><td>较高</td><td>费用<b>低</b>、分组存储转发</td></tr>\n      </tbody>\n    </table>\n  </div><div class=\"box trap\"><span class=\"bt\">⚠ 终极提醒</span>做选择题先圈题干里的<b>“最/核心/基础/前提/起点/唯一/被动/主动/静态/动态”</b>，这些词80%就是命题人设反置的位置——本附录每一条都因此而来。</div>"
      }
     ]
    }
   ],
   "stats": {
    "chapters": 7,
    "kps": 100,
    "tables": 72,
    "mnemonics": 16,
    "traps": 12
   }
  },
  {
   "id": "part915",
   "icon": "📋",
   "title": "第9-15章 · 项目管理（管理篇）",
   "subtitle": "项目管理概论 → 组织保障",
   "chapters": [
    {
     "id": "ch9",
     "isAppendix": false,
     "num": "",
     "title": "第9章　项目管理概论",
     "en": "",
     "desc": "本章是项目管理的总纲：项目与运营的区别、项目集/项目组合、事业环境因素、组织结构、生命周期类型、立项与可行性研究、十二原则。选择题高频出题区。",
     "stat": [],
     "sections": [
      {
       "title": "",
       "points": [
        {
         "id": "9-1",
         "title": "项目与运营",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">项目</span>：<span class=\"eye\">临时性</span>（一次性），有明确的开始和结束时间。</li>\n<li><span class=\"kw\">产品/服务/成果</span>：不具有临时性的特点。</li>\n<li><span class=\"kw\">运营/运维</span>：<span class=\"eye\">周期性、反复性、持续性</span>。</li>\n<li>项目与运营：<span class=\"gd\">存在交叉</span>。</li>\n</ul>"
        },
        {
         "id": "9-2",
         "title": "项目效益：有形 vs 无形",
         "freq": 4,
         "freqText": "中频",
         "html": "<div class=\"grid2\">\n<div class=\"minicard\"><div class=\"mt\">有形效益（能够用钱来衡量）</div>货币资产、股东权益、公共事业、固定资产、工具、市场份额</div>\n<div class=\"minicard\"><div class=\"mt\">无形效益（不能够用钱来衡量）</div>商誉、声誉、商标、公共利益、战略联盟、品牌认知度等</div>\n</div><div class=\"box note\"><div class=\"bt\">成功标准</div>范围、进度、成本、质量 —— 口诀「<span class=\"gd\">进城吃饭</span>」（进=进度、城=成本、吃=范围（持）、饭=质量（范））。</div>"
        },
        {
         "id": "9-3",
         "title": "项目集 vs 项目组合",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\"><table>\n<tr><th>维度</th><th>项目集</th><th>项目组合</th></tr>\n<tr><td>关联性</td><td class=\"eye\">相互依赖/关联/协调</td><td class=\"eye\">不一定有关联</td></tr>\n<tr><td>管理重点</td><td>正确地做事</td><td>优先级排序；保持与组织战略一致，做正确的事</td></tr>\n</table></div><div class=\"box mn\"><div class=\"bt\">记忆口诀</div>项目集→「<span class=\"gd\">集正</span>」（集=正确地做事）；项目组合→「<span class=\"gd\">合作</span>」。组合重战略、看优先级；集重协调、看依赖。</div>"
        },
        {
         "id": "9-4",
         "title": "事业环境因素 vs 组织过程资产",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"grid2\">\n<div class=\"minicard\"><div class=\"mt\">事业环境因素 —— PM不可控制</div>\n内部：文化、治理、设施；软件系统、资源可用性；员工能力<br/>\n外部：市场、政策、商业、行业、汇率、利率、通胀、税收</div>\n<div class=\"minicard\"><div class=\"mt\">组织过程资产 —— PM可控制</div>\n经验教训、文档、模板、知识库</div>\n</div><div class=\"box trap\"><div class=\"bt\">易错点</div>问「项目经理<span class=\"eye\">不能控制</span>」的选事业环境因素；「可以更新/可控制」的选组织过程资产。</div>"
        },
        {
         "id": "9-5",
         "title": "组织结构类型与PM权力",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\"><table>\n<tr><th>组织类型</th><th>PM权力</th><th>PM角色</th></tr>\n<tr><td>PMO/项目导向</td><td>项目经理权力极大</td><td>全职</td></tr>\n<tr><td>职能型/多部门/简单型</td><td>职能经理说了算，项目经理无实权</td><td>兼职</td></tr>\n<tr><td>强矩阵</td><td>职能经理权力 &lt; 项目经理，项目经理说了算</td><td>全职</td></tr>\n<tr><td>弱矩阵</td><td>职能经理 &gt; 项目经理</td><td>兼职</td></tr>\n<tr><td>平衡矩阵/虚拟</td><td>职能经理 = 项目经理，权力倾斜职能经理</td><td>全职/兼职</td></tr>\n</table></div><div class=\"box mn\"><div class=\"bt\">记忆要点</div>强弱看「<span class=\"gd\">职能经理与项目经理谁大</span>」；平衡矩阵权力<span class=\"eye\">倾斜职能经理</span>。</div>"
        },
        {
         "id": "9-6",
         "title": "PMO 三种类型与作用",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\"><table>\n<tr><th>类型</th><th>特征</th><th>控制程度</th></tr>\n<tr><td>指令型</td><td>直接管控</td><td class=\"eye\">高</td></tr>\n<tr><td>控制型</td><td>既要求又支持</td><td class=\"eye\">中</td></tr>\n<tr><td>支持型</td><td>顾问角色</td><td class=\"eye\">很低</td></tr>\n</table></div><div class=\"box mn\"><div class=\"bt\">记忆口诀</div>「<span class=\"gd\">指高控中</span>」——指令型控制最高、控制型居中、支持型最低。</div><p><span class=\"kw\">PMO作用</span>：指导、分享、管理、监督、培训、审计、协调。</p>"
        },
        {
         "id": "9-7",
         "title": "生命周期类型（5种）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\"><table>\n<tr><th>类型</th><th>关键特征</th></tr>\n<tr><td>预测型（瀑布型）</td><td>FS（串行）PV，早期定范围；需求明确，<span class=\"eye\">严格限制变更</span>，编制详细计划</td></tr>\n<tr><td>迭代型</td><td>定期；渐进明细；逐渐细化计划，早期确定范围</td></tr>\n<tr><td>增量型</td><td>定期；渐进增加，<span class=\"eye\">最后一次交付才被视为完整</span></td></tr>\n<tr><td>适应型（敏捷型）</td><td><span class=\"eye\">频繁</span>；优先级排序；迭代+增量</td></tr>\n<tr><td>混合型</td><td>预测型 + 适应型</td></tr>\n</table></div>"
        },
        {
         "id": "9-8",
         "title": "生命周期阶段与特点",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"grid2\">\n<div class=\"minicard\"><div class=\"mt\">项目生命周期阶段</div>启动 → 组织准备 → 执行项目 → 结束项目</div>\n<div class=\"minicard\"><div class=\"mt\">产品生命周期阶段</div>引入 → 成长 → 成熟 → 衰退</div>\n</div><p><span class=\"kw\">产品管理形式</span>：产品生命周期含项目集管理、单个项目、项目集内的产品管理。</p><div class=\"box green\"><div class=\"bt\">三条曲线规律（常考）</div>\n1、成本与人力投入：先<span class=\"eye\">增</span>，执行最<span class=\"eye\">高</span>，后<span class=\"eye\">减</span>；<br/>\n2、干系人影响/风险/不确定性：逐渐<span class=\"eye\">降低</span>；确定性：逐渐<span class=\"gn\">增加</span>；<br/>\n3、变更代价：逐渐<span class=\"eye\">增加</span>。</div>"
        },
        {
         "id": "9-9",
         "title": "投资前期四个阶段 + 立项申请（项目建议书）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"flow\"><span class=\"step\">立项申请</span><span class=\"arr\">→</span><span class=\"step\">初步可行性研究</span><span class=\"arr\">→</span><span class=\"step\">详细可行性研究</span><span class=\"arr\">→</span><span class=\"step\">评估与决策</span></div><ul>\n<li>立项申请、初步可行性研究 —— <span class=\"eye\">可省略</span>；小项目只做详细可研；<span class=\"kw\">升级改造项目只做初步和详细</span>。</li>\n<li><span class=\"kw\">项目建议书概念</span>：建设单位向上级主管部门提交申请时所必须的文件，<span class=\"eye\">总体设想</span>；小项目可省略。</li>\n<li><span class=\"kw\">作用</span>：①是国家或上级主管部门<span class=\"eye\">选择项目</span>的依据；②也是<span class=\"eye\">可行性研究</span>的依据。</li>\n<li><span class=\"kw\">内容</span>：项目的必要性；项目建设必需的条件；项目的市场预测；产品方案或市场服务预测 —— 口诀「<span class=\"gd\">两必两测</span>」。</li>\n</ul>"
        },
        {
         "id": "9-10",
         "title": "可行性研究四类",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\"><table>\n<tr><th>类型</th><th>内容要点</th></tr>\n<tr><td>技术可行性</td><td><span class=\"eye\">决定了项目的方向</span>：项目开发的风险、人力资源的有效性、技术能力的可能性、物资的可用性（口诀「<span class=\"gd\">开发、人力物力、能力</span>」）</td></tr>\n<tr><td>经济可行性</td><td>支出分析（一次性：开发费、培训费、差旅费、初始数据录入、设备购置费；非一次性：软硬件租金、人员工资及福利、水电等公用设施费用）；投资回报分析（收益投资比、投资回收期）；敏感性分析、收益分析</td></tr>\n<tr><td>运行环境可行性</td><td>从用户管理体制、方法、制度、习惯、平台进行评估</td></tr>\n<tr><td>社会效益可行性</td><td>组织内部：技术创新效益、竞争力效益、管理/人员提升收益、品牌效益（「<span class=\"gd\">创立管人品</span>」）；社会发展：社会责任感效益、公共效益、文化效益、环境效益（「<span class=\"gd\">社工文静</span>」）</td></tr>\n</table></div>"
        },
        {
         "id": "9-11",
         "title": "初步可研 / 详细可研 / 项目评估",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">初步可行性研究目的</span>：分析前途；初步估计关键技术及核心问题；初步估计必须进行的辅助研究；可以作为正式的决策报告。</li>\n<li><span class=\"kw\">辅助（功能）研究</span>：只研究<span class=\"eye\">一个或几个方面，但不是所有方面</span>（市场研究、配件和投入物资、规模经济性、设备选择、试验室和中间工厂试验、网络物理布局设计）。</li>\n<li><span class=\"kw\">详细可研原则</span>：科学性、公正性、客观性 —— 口诀「<span class=\"gd\">学正课</span>」。</li>\n<li><span class=\"kw\">详细可研方法</span>：经济评价法、市场预测法、投资估算法、增量效益法。前后比较法：不考虑趋势，不准；<span class=\"eye\">增量效益法（有无比较法）：考虑动态比较，更准</span>。</li>\n<li><span class=\"kw\">开发成本</span>：经营成本（研发成本、行政管理成本、销售与分销成本——「<span class=\"gd\">发售行</span>」）；非经营成本（财务费用折旧）。</li>\n</ul><div class=\"box trap\"><div class=\"bt\">数字题眼</div>精度：初步可研 <span class=\"eye\">±20%</span>，详细可研 <span class=\"eye\">±10%</span>，设计开发 <span class=\"eye\">±5%</span> —— 口诀「<span class=\"gd\">初2相识发5</span>」。</div><div class=\"box note\"><div class=\"bt\">项目评估与决策</div>\n对象：由<span class=\"eye\">第三方</span>（国家、银行或有关机构）开展；<br/>\n目的：审查可靠性、真实性和客观性，为银行贷款决策或行政主管部门审批决策提供科学依据；<br/>\n依据：项目建议书及其批准文件、可行性研究报告、申请报告及主管部门初审意见、协议文件（「<span class=\"gd\">可以初见</span>」）；<br/>\n程序：成立评估小组→开展调查研究收集数据资料→分析与评估→编写评估报告→讨论修改报告→专家论证会→评估报告定稿。</div>"
        },
        {
         "id": "9-12",
         "title": "项目管理十二原则",
         "freq": 4,
         "freqText": "中频",
         "html": "<ol>\n<li>勤勉、尊重和关心他人</li>\n<li>营造协作的项目管理团队环境</li>\n<li>促进干系人有效参与</li>\n<li>聚焦于价值</li>\n<li>识别、评估和响应系统交互</li>\n<li>展现领导力</li>\n<li>根据环境进行裁剪</li>\n<li>将质量融入到过程和成果中</li>\n<li>驾驭复杂性</li>\n<li>优化风险应对</li>\n<li>拥抱适应性（变化）和韧性（恢复）</li>\n<li>为实现目标而驱动变革</li>\n</ol><div class=\"box mn\"><div class=\"bt\">记忆口诀</div>「<span class=\"gd\">复杂性、韧性适应性、风险质量、目标价值、营造参与尊重领导、环境交互</span>」。</div>"
        }
       ],
       "html": ""
      }
     ]
    },
    {
     "id": "ch10",
     "isAppendix": false,
     "num": "",
     "title": "第10章　启动过程组",
     "en": "",
     "desc": "本章仅两个过程：制定项目章程、识别干系人。考点集中在项目章程的内容、干系人登记册与干系人映射分析。",
     "stat": [],
     "sections": [
      {
       "title": "",
       "points": [
        {
         "id": "10-1",
         "title": "制定项目章程（概念 / 作用 / 输入）",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">定义</span>：编写正式文件、<span class=\"eye\">批准项目</span>。</li>\n<li><span class=\"kw\">作用</span>：确认项目的正式地位、展示承诺、明确项目与组织的直接联系。</li>\n<li><span class=\"kw\">输入</span>：立项文件、协议（合同）、因素、资产。</li>\n<li><span class=\"kw\">工具</span>：专家判断、会议、数据收集（头脑风暴、焦点小组、访谈）、人际关系与团队技能（冲突管理、引导、会议管理）。</li>\n</ul><div class=\"box trap\"><div class=\"bt\">易错点</div>项目章程由<span class=\"eye\">发起人编制</span>、机构与PM共同编制，项目以外的机构启动；PM在<span class=\"eye\">规划之前任命</span>；<span class=\"eye\">章程不能当合同</span>。</div>"
        },
        {
         "id": "10-2",
         "title": "项目章程内容",
         "freq": 5,
         "freqText": "高频",
         "html": "<p>整体项目<span class=\"eye\">风险</span>；项目审<span class=\"eye\">批</span>要求；关键干系<span class=\"eye\">人</span>名单；总里程碑<span class=\"eye\">进</span>度计划；可交付<span class=\"eye\">成</span>果；项目的<span class=\"eye\">目的</span>；项目的<span class=\"eye\">目标</span>和相关的成功<span class=\"eye\">标准</span>；项目退出的标准；高层级<span class=\"eye\">需求</span>；预先批准的<span class=\"eye\">财</span>务资源；委派项目经理的职责和职<span class=\"eye\">权</span>；发起人或其他批准章程的姓名和职权。</p><div class=\"box mn\"><div class=\"bt\">记忆口诀</div>「<span class=\"gd\">疯婶人进城，目标求财权</span>」（风=风险、婶=审批、人=干系人、进=进度、城=成果；目标=目的/目标/标准、求=需求、财=财务资源、权=职权）。</div><p><span class=\"kw\">另一个输出</span>：假设日志。</p>"
        },
        {
         "id": "10-3",
         "title": "识别干系人",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">定义</span>：分析记录利益、参与度等和对项目成功潜在影响。<span class=\"kw\">作用</span>：建立对每个干系人的<span class=\"eye\">适度关注</span>。</li>\n<li><span class=\"kw\">输出——干系人登记册</span>：<span class=\"eye\">身份信息、评估信息、干系人分类</span>；另有变更请求、计划和文件更新。</li>\n<li><span class=\"kw\">工具</span>：专家、会议、数据收集（问卷调查、头脑风暴）；数据分析（干系人分析——干系人利害组合：<span class=\"eye\">兴趣、权利、所有权、知识、贡献</span>；文件分析）。</li>\n<li><span class=\"kw\">开展节点</span>：识别干系人在项目章程<span class=\"eye\">之前或同时</span>首次开展，之后<span class=\"eye\">重复开展</span>（定期开展）。</li>\n</ul>"
        },
        {
         "id": "10-4",
         "title": "干系人映射分析 / 表现",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\"><table>\n<tr><th>模型</th><th>适用/要点</th></tr>\n<tr><td>方格模型</td><td>适合<span class=\"eye\">小型、简单</span>的项目</td></tr>\n<tr><td>凸显模型（权力/紧迫性/合法性（邻近性））</td><td>适合<span class=\"eye\">大型、复杂</span>的项目</td></tr>\n<tr><td>干系人立方体</td><td>三维模型；优先级排序</td></tr>\n<tr><td>影响方向</td><td>上：高管、客户；下：团队、专家；横向：同级人员；组织外：团队以外干系人</td></tr>\n</table></div>"
        },
        {
         "id": "10-5",
         "title": "重要工作：项目启动会议 + 开展节点",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n<li>项目启动会议由<span class=\"eye\">项目经理（PM）负责召开</span>。</li>\n<li><span class=\"kw\">会议步骤</span>：①确定会议目标；②会议准备；③识别参会人员；④明确议题；⑤会议记录 —— 口诀「<span class=\"gd\">标准人易记</span>」（标=目标、准=准备、人=人员、议=议题、记=记录）。</li>\n<li><span class=\"kw\">关注价值和目标</span>：价值是衡量效益的依据，商业价值可被视为回报；项目目标：<span class=\"eye\">成果性、约束性</span>。</li>\n<li><span class=\"kw\">开展节点</span>：制定项目章程——<span class=\"eye\">开展一次、预定义</span>；识别干系人——<span class=\"eye\">定期开展</span>。</li>\n</ul>"
        }
       ],
       "html": ""
      }
     ]
    },
    {
     "id": "ch11",
     "isAppendix": false,
     "num": "",
     "title": "第11章　规划过程组",
     "en": "",
     "desc": "本章是十大知识领域规划过程的集合，篇幅最大、考点最密。核心题眼：各规划过程的输出（××管理计划）、WBS、三点估算、关键路径法、成本基准公式、质量成本法、RACI、风险应对策略、合同类型。",
     "stat": [],
     "sections": [
      {
       "title": "",
       "points": [
        {
         "id": "11-1",
         "title": "规划项目管理计划",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：综合计划；用来确定所有工作的基础及执行。</li>\n<li><span class=\"kw\">输入</span>：项目章程、其他过程的输出、因素、资产。</li>\n<li><span class=\"kw\">输出——项目管理计划</span>：计划基准+开发周期（生命周期、开发方法）；<span class=\"eye\">注：计划需除「进度计划」</span>。</li>\n</ul><div class=\"box trap\"><div class=\"bt\">易错点</div>正式/非正式，详细/概括；应基准化。<span class=\"eye\">基准之前：无需走流程；基准之后：有变更，走流程</span>。</div>"
        },
        {
         "id": "11-2",
         "title": "规划范围管理（两个输出计划）",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：记录如何定义、确定和控制项目范围；对如何管理范围提供指南和方向。</li>\n<li><span class=\"kw\">工具</span>：专家、会议、数据分析（备选方案分析）。</li>\n</ul><div class=\"grid2\">\n<div class=\"minicard\"><div class=\"mt\">范围管理计划（「说明书、WBS、基准、验收」）</div>1.制定项目范围说明书 2.根据详细项目范围说明书创建WBS 3.确定如何审批和维护范围基准 4.正式验收已完成的项目可交付成果</div>\n<div class=\"minicard\"><div class=\"mt\">需求管理计划（口诀「需指配」）</div>1.如何规划、跟踪和报告各种需求活动 2.需求优先级排序过程 3.反映哪些需求属性将被列入跟踪矩阵 4.测量指标及使用这些指标的理由 5.配置管理活动等</div>\n</div>"
        },
        {
         "id": "11-3",
         "title": "收集需求（工具题眼密集）",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：记录需要和需求；为定义项目和产品范围定基础。</li>\n<li><span class=\"kw\">输入</span>：项目章程、立项管理文件、协议、项目文件、项目管理计划。</li>\n</ul><div class=\"table-wrap\"><table>\n<tr><th>工具</th><th>题眼</th></tr>\n<tr><td>原型法</td><td>故事板、图像图示展示</td></tr>\n<tr><td>焦点小组</td><td>有<span class=\"eye\">主持人</span></td></tr>\n<tr><td>问卷调查</td><td>受众<span class=\"eye\">多</span>时用</td></tr>\n<tr><td>标杆对照</td><td><span class=\"eye\">实际和计划对比</span></td></tr>\n<tr><td>决策</td><td>投票、多标准决策分析</td></tr>\n<tr><td>亲和图</td><td>分组</td></tr>\n<tr><td>思维导图</td><td>共性和差异</td></tr>\n<tr><td>名义小组技术</td><td>投票/排序</td></tr>\n<tr><td>引导</td><td>跨职能</td></tr>\n</table></div><p>另有：系统交互图、数据分析（文件分析）、数据收集（头脑风暴、访谈）、观察/交谈。</p>"
        },
        {
         "id": "11-4",
         "title": "收集需求输出：需求文件 + 需求跟踪矩阵",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">需求文件</span>：各种单一需求业务需求；可简单可详细；渐进明细。</li>\n<li><span class=\"kw\">内容</span>：干系人需求、过渡需求、解决方案需求（<span class=\"eye\">必须具备</span>）、业务需求（<span class=\"eye\">高层级</span>）、项目需求（<span class=\"eye\">满足条件</span>）、质量需求（<span class=\"eye\">成功完成/实现标准</span>）。</li>\n<li><span class=\"kw\">基准（好需求的特征）</span>：完整的、明确的（可测量/测试）、主要干系人认可、协调的、跟踪 —— 口诀「<span class=\"gd\">证明认鞋跟</span>」。</li>\n</ul><div class=\"box note\"><div class=\"bt\">需求跟踪矩阵</div>\n概念：把产品需求从其<span class=\"eye\">来源</span>连接到能满足需求的<span class=\"eye\">可交付成果</span>的一种表格。<br/>\n内容（过程）：业务需求/高层级需求→详细需求→产品设计→产品开发→测试策略和测试场景；（结果）项目范围和WBS可交付成果→项目目标。<br/>\n需求属性：唯一标识、需求文字描述、收录需求的理由、所有者、来源、优先级别、版本、当前状态（进行中、已取消、已推迟、新增加、已批准、被分配和已完成）和状态日期。</div>"
        },
        {
         "id": "11-5",
         "title": "定义范围 → 范围说明书（详细）",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：详细描述产品（范围）、服务成果的边界和验收标准。</li>\n<li><span class=\"kw\">工具</span>：专家、数据分析（备选方案分析）、决策（多标准决策分析）、人际关系与团队技能（引导）、<span class=\"eye\">产品分析</span>。</li>\n<li><span class=\"kw\">输出——范围说明书内容</span>：<span class=\"eye\">假</span>设条件；可交付<span class=\"eye\">成</span>果；制<span class=\"eye\">约</span>因素；需求；产品范围<span class=\"eye\">描</span>述；项目范围描述，<span class=\"eye\">除外</span>责任；验收标准；目标；边界等 —— 口诀「<span class=\"gd\">设成约，述求除表姐</span>」。</li>\n</ul>"
        },
        {
         "id": "11-6",
         "title": "创建 WBS",
         "freq": 5,
         "freqText": "高频",
         "html": "<p><span class=\"kw\">概念/作用</span>：可交付成果分解较小、理解易于管理；为所要交付的内容提供架构。</p><div class=\"flow\"><span class=\"step\">识别和分析可交付成果及相关工作</span><span class=\"arr\">→</span><span class=\"step\">确认WBS结构和编排方法</span><span class=\"arr\">→</span><span class=\"step\">自上而下逐层细分分解</span><span class=\"arr\">→</span><span class=\"step\">制定分配标识编码</span><span class=\"arr\">→</span><span class=\"step\">核实分解程度是否恰当</span></div><div class=\"box mn\"><div class=\"bt\">记忆口诀</div>步骤口诀「<span class=\"gd\">别排解配合</span>」（别=识别、排=编排、解=分解、配=分配编码、合=核实）。</div><ul>\n<li><span class=\"kw\">结构形式</span>：第二层可按生命周期，也可按可交付成果；外包制定WBS。</li>\n<li><span class=\"kw\">注意事项</span>：面向<span class=\"eye\">可交付成果</span>；符合项目范围；底层支持计划和控制；<span class=\"eye\">只有一人负责</span>；<span class=\"eye\">4-6层</span>，只能从属某个单元避免交叉；含管理和分包工作；所有干系人参与；非一成不变。</li>\n</ul><div class=\"table-wrap\"><table>\n<tr><th>范围基准组成</th><th>要点</th></tr>\n<tr><td>批准的范围说明书 + WBS + WBS词典</td><td>三者共同构成<span class=\"eye\">范围基准</span></td></tr>\n<tr><td>工作包</td><td><span class=\"eye\">最底层</span>的工作单元，工作包只与<span class=\"eye\">一个</span>控制账户关联</td></tr>\n<tr><td>控制账户</td><td>管理控制点（整合比较便于测量绩效），含两个或更多工作包</td></tr>\n<tr><td>规划包</td><td><span class=\"eye\">低于控制账户而高于工作包</span>，内容已知，进度未知</td></tr>\n<tr><td>WBS字典</td><td>账户编码标识、工作描述、假设条件和制约因素、组织、里程碑、进度活动、所需资源、成本估算、质量要求、验收标准等</td></tr>\n</table></div>"
        },
        {
         "id": "11-7",
         "title": "规划进度管理",
         "freq": 3,
         "freqText": "基础",
         "html": "<ul>\n<li><span class=\"kw\">概念</span>：为规划、编制、管理、执行和控制项目进度而制定的政策、程序文档；指南和方向。</li>\n<li><span class=\"kw\">输出——进度管理计划</span>：进度模型制定、进度模型维护、进度计划的发布和迭代长度、工作分解结构、准确度、计量单位、控制临界值、绩效测量规则、报告格式、过程描述。</li>\n</ul>"
        },
        {
         "id": "11-8",
         "title": "定义活动",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：识别和记录可交付成果的具体行动；为工作进度估算、规划、执行、监控打基础。</li>\n<li><span class=\"kw\">工具</span>：分解、<span class=\"eye\">滚动规划（近期详细，远期粗略）</span>、专家判断会议。</li>\n<li><span class=\"kw\">输出「2单1属」</span>：活动清单、里程碑清单（<span class=\"eye\">持续时间为0</span>，代表重要时间或事件节点）、活动属性（活动描述、紧前/紧后活动、逻辑关系、提前量和滞后量、资源需求、强制日期、制约因素和假设条件）。</li>\n</ul>"
        },
        {
         "id": "11-9",
         "title": "排列活动顺序",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\"><table>\n<tr><th>工具</th><th>题眼</th></tr>\n<tr><td>紧前关系绘图法（单代号图）</td><td>S开始、F结束；<span class=\"eye\">FS、FF、SS、SF</span>；六宫格图</td></tr>\n<tr><td>箭线图法（双代号）</td><td>唯一的一个代号，「<span class=\"gd\">出前入后</span>」，<span class=\"eye\">虚活动不耗时间、不耗资源</span>，弥补依赖关系的不足</td></tr>\n<tr><td>提前量和滞后量</td><td>提前量：<span class=\"eye\">负值（-）</span>；滞后量：<span class=\"eye\">正值（+）</span> —— 「<span class=\"gd\">前负后正</span>」</td></tr>\n<tr><td>确定整合依赖关系</td><td>—</td></tr>\n</table></div><p><span class=\"kw\">输出</span>：项目进度网络图：可详可略；任何异常的活动序列做详细说明。</p>"
        },
        {
         "id": "11-10",
         "title": "估算持续时间（三点估算是必考计算）",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">类似估算</span>：相似、类似；信息不足时用，<span class=\"eye\">成本低、耗时少、准确性低</span>。</li>\n<li><span class=\"kw\">参数估算</span>：算法、统计关系；参数模型，成熟度、可靠性（可以整个项目或部分）。</li>\n<li><span class=\"kw\">自下而上估算</span>：从下至上逐层汇总。</li>\n</ul><div class=\"box note\"><div class=\"bt\">三点估算技术 / PERT</div>\nα三角分布 =（大+中+小）/ 3<br/>\nβ贝塔分布（<span class=\"eye\">默认</span>）=（大 + 4×中 + 小）/ 6<br/>\n标准差 =（大 - 小）/ 6<br/>\n<span class=\"eye\">1σ=68%，2σ=95%，3σ=99%</span><br/>\n方差 = 标准差的平方；标准差 = 方差开根号<br/>\n最小周期 = 期望值 - 3σ；最大周期 = 期望值 + 3σ</div><p><span class=\"kw\">估算考虑因素</span>：技术进步、员工激励、收益递减规律、资源数量 —— 口诀「<span class=\"gd\">技工收数</span>」。</p>"
        },
        {
         "id": "11-11",
         "title": "制定进度计划（资源优化 / 进度压缩 / 关键路径法）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"grid2\">\n<div class=\"minicard\"><div class=\"mt\">资源优化 —— 「衡变滑不变」</div>\n平衡：<span class=\"eye\">往往导致关键路径改变</span>，针对关键人物<br/>\n平滑：<span class=\"eye\">不会改变项目关键路径</span>；找到并行的峰值最大值，并行非关键活动改成串行</div>\n<div class=\"minicard\"><div class=\"mt\">进度压缩</div>\n赶工：增加资源；<span class=\"eye\">直接成本增加</span>，风险增加<br/>\n快速跟进：并行；<span class=\"eye\">返工</span>、风险增加</div>\n</div><div class=\"box note\"><div class=\"bt\">关键路径法（计算必考）</div>\n关键路径是项目中时间<span class=\"eye\">最长</span>的活动顺序。<br/>\n正推，加法，取<span class=\"eye\">最大值</span>；逆推，减法，取<span class=\"eye\">最小值</span>。<br/>\n「总浮动时间」= 下 - 上；「自由浮动时间」= 后（取小值）- 前。<br/>\n关键路径上的自由时差和总时差为 <span class=\"eye\">0</span>。<br/>\n补充：总时差=总浮动时间；自由时差=自由浮动时间。</div><ul>\n<li><span class=\"kw\">其他工具</span>：进度网络分析、敏捷发布规划、数据分析（假设情景分析、模拟）。</li>\n<li><span class=\"kw\">输出——项目进度计划</span>：横道图（易读简单）、里程碑图、逻辑时标；制订步骤：定义项目里程碑→分配人员审查其被分配的活动→项目人员确认冲突→分析进度计划。另有进度基准、进度数据、项目日历、变更请求。</li>\n</ul>"
        },
        {
         "id": "11-12",
         "title": "规划成本管理 + 估算成本",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n<li><span class=\"kw\">成本管理计划</span>：计量单位、准确度（区间）、精确度（取整）、组织程序链接、控制临界值（允许出现最大差异）、绩效测量规则、报告格式、过程说明。</li>\n<li><span class=\"kw\">估算成本概念</span>：<span class=\"eye\">近似估算</span>；确定项目所需的资金。工具：类比估算、参数估算、三点估算、自下而上估算等。</li>\n<li><span class=\"kw\">其它</span>：某特定时点根据已知信息所做出的成本预测；考虑通货膨胀、补贴、融资成本、汇率、应急储备；通常用某种货币单位估算，也可采用计量单位。</li>\n</ul><div class=\"box trap\"><div class=\"bt\">数字题眼</div>粗略量级估算：<span class=\"eye\">-25% ~ +75%</span>；确定性估算：<span class=\"eye\">-5% ~ +10%</span>。</div>"
        },
        {
         "id": "11-13",
         "title": "制定预算（成本基准公式必考）",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：汇总工作包的估算成本，建立一个经批准的成本基准；确定监督和控制项目绩效的成本基准。</li>\n<li><span class=\"kw\">工具</span>：数据分析（储备分析）、成本汇总、历史信息审核、资金限制平衡、融资。</li>\n</ul><div class=\"box note\"><div class=\"bt\">核心公式</div>\n项目预算（成本预算/项目总金额）= 成本基准（BAC）+ <span class=\"eye\">管理储备</span><br/>\n成本基准（BAC）= <span class=\"eye\">应急储备</span> + 基础成本<br/>\nPMB = 总PV = BAC = 成本基准；EV百分比往往对应总PV<br/>\n如果储备金为0，项目预算就是要求的总PV<br/>\n完工时：SV = EV - PV = 0，此时PV=EV；CV = BAC - AC</div><div class=\"grid2\">\n<div class=\"minicard\"><div class=\"mt\">应急储备</div><span class=\"eye\">PM的钱</span>，应对 已知-未知 风险</div>\n<div class=\"minicard\"><div class=\"mt\">管理储备</div><span class=\"eye\">高管的钱</span>，应对 未知-未知 风险</div>\n</div><p><span class=\"kw\">资金需求</span>：根据成本基准确定总资金和阶段性资金需求；资金通常以<span class=\"eye\">增量</span>的方式投入，并且可能是<span class=\"eye\">非均衡</span>的，呈现阶梯状。</p>"
        },
        {
         "id": "11-14",
         "title": "规划质量管理（质量成本法必考）",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：识别并书面描述质量要求或标准；为核实质量提供指南。</li>\n</ul><div class=\"table-wrap\"><table>\n<tr><th colspan=\"2\">质量成本法</th><th>内容</th></tr>\n<tr><td rowspan=\"2\">一致</td><td>预防成本</td><td>培训、设备、文件过程</td></tr>\n<tr><td>评估成本</td><td>测试、破坏性试验损失、检查</td></tr>\n<tr><td rowspan=\"2\">不一致</td><td>内部失败</td><td>报废、返工</td></tr>\n<tr><td>外部失败</td><td>债务、流失业务、保修工作</td></tr>\n</table></div><div class=\"box mn\"><div class=\"bt\">记忆口诀</div>「<span class=\"gd\">预设培文，评查测试，外债失保，内部废工</span>」（预防=培训/设备/文件过程；评估=检查/测试；外部=债务/流失业务/保修；内部=报废/返工）。</div><ul>\n<li><span class=\"kw\">成本效益分析</span>：减少返工、提高生产率、降低成本。</li>\n<li><span class=\"kw\">数据表现</span>：矩阵图（识别质量测量指标，强弱关系；识别成功指标）；逻辑数据模型（数据可视化，不依赖任何特定技术）；流程图：SIPOC（供应商；输入；过程；输出；客户）输入转输出，帮助改进并识别缺陷；思维导图。</li>\n<li><span class=\"kw\">输出——质量管理计划</span>：①项目采用的质量标准 ②项目的质量目标 ③质量角色与职责 ④需要质量审查的项目可交付成果和过程 ⑤为项目规划的质量控制和质量管理活动 ⑥项目使用的质量工具 ⑦与项目有关的主要程序 —— 「目标职责，过程活动工具」。<span class=\"kw\">质量测量指标</span>：描述项目或产品属性，以及控制质量过程将如何验证符合程度。</li>\n</ul>"
        },
        {
         "id": "11-15",
         "title": "规划资源管理（WBS/OBS/RBS、RACI）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\"><table>\n<tr><th>数据表现</th><th>要点</th></tr>\n<tr><td>层级型</td><td>WBS（工作分解结构）：分解可交付物，明确高层职责；OBS（组织分解结构）：分解组织部门、单位或团队，明确部门成员职责；RBS（资源分解结构）：按资源和类别分，人力和实物，与WBS相结合</td></tr>\n<tr><td>矩阵型（直观）</td><td>职责分配矩阵（RAM）：大型项目；可多个层次，<span class=\"eye\">只能一个人负责</span>，避免职责不清；RACI：<span class=\"eye\">R(执行) A(负责) C(咨询) I(知情)</span></td></tr>\n<tr><td>文本型（详细）</td><td>团队成员详细描述职责，用文字形式表示</td></tr>\n</table></div><ul>\n<li><span class=\"kw\">输出——资源管理计划</span>：认可计划；培训；角色与职责；项目组织图；项目团队资源管理；识别资源；获取资源；团队建设；资源控制 —— 「认可培训职责；管理过程」。</li>\n<li><span class=\"kw\">输出——团队章程</span>：团队价值观；团队共识；会议指南；沟通指南；决策标准/过程；冲突处理过程 —— 口诀「<span class=\"gd\">团南过</span>」。</li>\n</ul><p><span class=\"kw\">估算活动资源</span>：估算团队资源、设施、设备、材料、用品的类型和数量；工具：专家、会议、自下而上估算、类比估算、参数估算、备选方案分析；输出：资源需求、估算依据、资源分解结构。</p>"
        },
        {
         "id": "11-16",
         "title": "规划沟通管理（拉式 / 推式 / 互动）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\"><table>\n<tr><th>沟通方法</th><th>特点</th><th>举例</th></tr>\n<tr><td>拉式</td><td>信息量很大或受众很多，<span class=\"eye\">自主自行</span></td><td>门户网站、组织内网、在线课程、经验教训、知识库</td></tr>\n<tr><td>推式</td><td>发送<span class=\"eye\">特定接受方</span></td><td>信件、备忘录、报告、电子邮件、传真、语音邮件、播客、新闻稿</td></tr>\n<tr><td>互动</td><td>双方、多方、<span class=\"eye\">实时</span>信息交换</td><td>会议、即时信息、社交媒体、视频会议</td></tr>\n</table></div><ul>\n<li><span class=\"kw\">输出——沟通管理计划</span>：干系人的沟通需求、传递信息的技术或方法、需要沟通的信息、做出回应的时限和频率、沟通人员、授权保密信息发布的人员、接收信息的个人、术语表（模板）等。</li>\n<li><span class=\"kw\">其他</span>：人际沟通：面对面的方式；小组沟通：<span class=\"eye\">3-6名</span>人员的小组内部开展；公众沟通：单个演讲者一群人；大众传播：与大量目标受众最低程度的联系；网络和社交工具沟通。</li>\n</ul>"
        },
        {
         "id": "11-17",
         "title": "规划风险管理（风险属性与分类）",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：定义如何实施项目风险管理活动；确保风险管理的水平、方法、可见度与项目风险度、重要度相匹配。</li>\n<li><span class=\"kw\">输出——风险管理计划</span>：方法论、角色与职责、资金、时间安排、风险管理策略、风险类别、干系人风险偏好、风险概率和影响、概率和影响矩阵、报告格式、跟踪。</li>\n</ul><div class=\"box note\"><div class=\"bt\">风险的属性 —— 「随变相」</div>\n随机性（偶然性）；<br/>\n相对性：收益越大，人们愿意承担的风险也就越大；投入得越多，愿意冒的风险也就越小；资源越多，风险承受能力也越大；<br/>\n可变性：风险的性质变化；风险后果的变化；出现新的风险。</div><div class=\"table-wrap\"><table>\n<tr><th>分类维度</th><th>类别</th><th>要点</th></tr>\n<tr><td>后果</td><td>纯粹风险 / 投机风险</td><td>纯粹：不能带来机会/无获得利益；投机：可能带来机会/获得利益。在一定条件下可以<span class=\"eye\">相互转化</span>，风险不是零和游戏</td></tr>\n<tr><td>来源</td><td>自然风险 / 人为风险</td><td>自然：地震、火灾、水灾等；人为：行为、经济、技术、政治和组织风险等</td></tr>\n<tr><td>影响范围</td><td>总体风险 / 局部风险</td><td>总体：<span class=\"eye\">关键路线</span>上的活动延误；局部：非关键路线上活动延误</td></tr>\n<tr><td rowspan=\"3\">可预测性</td><td>已知风险</td><td>发生的概率高、后果轻微不严重。例：项目目的不明确；设计或施工变更，材料价格波动</td></tr>\n<tr><td>可预测风险</td><td>可预见发生，但不可以预见后果的，可能相当严重。例：业主不审批，分包商不交工，设备故障、不可预见的地质条件</td></tr>\n<tr><td>不可预测风险</td><td>不能预见风险，未知风险。例：地震、百年不遇灾情、通货膨胀、政策变化</td></tr>\n</table></div>"
        },
        {
         "id": "11-18",
         "title": "风险识别",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：识别并记录单个项目风险以及整体项目风险的来源、风险特征；应鼓励<span class=\"eye\">所有项目干系人</span>参与项目的风险识别工作。</li>\n<li><span class=\"kw\">工具</span>：数据收集（头脑风暴、访谈；<span class=\"eye\">核对单——基于已完成的项目来编制，但它不可能穷尽所有风险</span>）；数据分析（假设条件制约因素分析：不准确、不稳定、不一致或不完整→识别出威胁；清除或放松→创造出机会；SWOT分析：优势/劣势/机会/威胁；根本原因分析、文件分析（结构化审查））。</li>\n</ul><div class=\"box trap\"><div class=\"bt\">输出题眼「2单1人」</div>\n风险登记册：已识别风险的<span class=\"eye\">清单</span>；潜在风险应对措施<span class=\"eye\">清单</span>；潜在风险责任<span class=\"eye\">人</span>。<br/>\n风险报告：整体项目风险的来源；已识别单个项目风险的概述信息。</div>"
        },
        {
         "id": "11-19",
         "title": "定性风险分析（矩阵、排序、评估、分类）",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：通过评估单个项目风险发生的概率和影响以及其他特征，优先级排序；重点关注<span class=\"eye\">高优先级</span>风险；敏捷或适应型，要在<span class=\"eye\">每次迭代开始前</span>进行实施定性分析。</li>\n<li><span class=\"kw\">数据分析</span>：风险数据质量评估；风险概率评估（调查每项具体风险发生的可能性）；风险影响评估（分析潜在影响，消极和积极影响）；其他风险参数评估：紧迫性（应对措施时间段）、邻近性（多长时间后影响项目）、潜伏期（显示时间段）、紧密度（很要紧的风险）、可监测性、可管理性、可控性、战略影响力、连通性。</li>\n<li><span class=\"kw\">数据表现</span>：概率和影响矩阵（表格）：风险进行优先级排序；风险划为低、中、高险；<span class=\"eye\">评估风险值 = 风险发生的概率 × 风险发生的后果</span>；层级图：使用<span class=\"eye\">两个以上</span>的参数对风险进行分类，如气泡三维数据。</li>\n<li><span class=\"kw\">输出</span>：项目文件更新。</li>\n</ul>"
        },
        {
         "id": "11-20",
         "title": "定量风险分析",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：已识别单个风险和不确定性的其他来源对整体目标影响进行定量分析；量化整体项目风险。<span class=\"eye\">并非所有项目实施定量风险分析，适用于大型或复杂的项目</span>。</li>\n<li><span class=\"kw\">数据分析工具</span>：模拟（蒙特卡洛分析——模拟单个风险和其他不确定性来源的综合影响）；敏感性分析（<span class=\"eye\">龙卷风图</span>，确定哪些风险对项目有最大的潜在影响）；决策树分析（<span class=\"eye\">EMV =（成功概率×净利润）+（失败概率×净亏损）</span>；净利润=收入-成本；别人赔给自己的钱（加分项）→记正值；自己赔出去的钱（减分项）→记负值）；影响图（辅助工具）。</li>\n<li><span class=\"kw\">输出——风险报告更新</span>：对整体项目风险最大可能性的评估结果；项目详细概率分析的结果；单个项目风险优先级清单；定量风险分析结果和趋势；风险应对建议。</li>\n</ul>"
        },
        {
         "id": "11-21",
         "title": "规划风险应对（应对策略必考）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"grid2\">\n<div class=\"minicard\"><div class=\"mt\">威胁应对策略（负面）</div>\n上报：不在项目范围内、超过项目经理权<br/>\n规避：消除威胁的原因；延长进度计划，改变项目策略，缩小范围<br/>\n减轻：降低发生的概率和影响；简单的流程、多次测试和选可靠卖方<br/>\n转移：威胁的责任转给第三方；买保险，保证书，签订协议<br/>\n接受：主动（建立应急储备，包括预留时间、货币、资源）；被动（不会主动采取行动，定期对威胁进行审查）</div>\n<div class=\"minicard\"><div class=\"mt\">机会应对策略（正面）</div>\n上报、接受<br/>\n开拓：有正面影响并已超出商定的项目风险临界值，高优先级的机会；最有能力的资源分配给项目，采用全新技术或技术升级<br/>\n分享：机会的责任转移给第三方；建立合伙关系、合作团队、特殊公司和合资企业<br/>\n提高：提高机会出现的概率和影响；强化（加强）</div>\n</div><div class=\"box trap\"><div class=\"bt\">易错点</div>整体应对策略（<span class=\"eye\">无上报策略</span>）：规避；开拓；接受；转移或分享；减轻或提高。风险应对方案应该与风险的<span class=\"eye\">重要性</span>相匹配。</div>"
        },
        {
         "id": "11-22",
         "title": "规划干系人参与",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：根据干系人需求、期望、利益制定项目干系人参与项目的方法；提供与干系人进行有效互动的可行计划。</li>\n<li><span class=\"kw\">工具——干系人参与度评估矩阵</span>：反对、中立、不知晓；支持、领导（积极致力成功）；<span class=\"eye\">C：当前状态；D：期望状态（团队估出来的）</span>。</li>\n<li><span class=\"kw\">输出</span>：干系人参与计划。</li>\n</ul>"
        },
        {
         "id": "11-23",
         "title": "规划采购管理（步骤 + 招标文件 + 合同类型）",
         "freq": 5,
         "freqText": "高频",
         "html": "<p><span class=\"kw\">概念</span>：定采购决策，明确采购方法，识别潜在卖方的过程；确定是否从项目外部获取货物和服务，在什么时间、以什么方式获取什么货物和服务 —— 「说明预算，广告名单，发布提交，技术成本，报告合同」。</p><div class=\"flow\"><span class=\"step\">准备采购工作说明书</span><span class=\"arr\">→</span><span class=\"step\">制定预算</span><span class=\"arr\">→</span><span class=\"step\">发布招标广告</span><span class=\"arr\">→</span><span class=\"step\">确定合格卖方名单</span><span class=\"arr\">→</span><span class=\"step\">准备并发布招标文件</span><span class=\"arr\">→</span><span class=\"step\">卖方提交建议书</span><span class=\"arr\">→</span><span class=\"step\">技术（质量）评估</span><span class=\"arr\">→</span><span class=\"step\">成本评估</span><span class=\"arr\">→</span><span class=\"step\">综合评估报告选出中标建议书</span><span class=\"arr\">→</span><span class=\"step\">谈判签署合同</span></div><div class=\"table-wrap\"><table>\n<tr><th>招标文件</th><th>要点</th></tr>\n<tr><td>信息邀请书（RFI）</td><td>卖方提供关于拟采购和服务的<span class=\"eye\">信息</span></td></tr>\n<tr><td>报价邀请（RFQ）</td><td>需要多少<span class=\"eye\">成本</span>的更多信息</td></tr>\n<tr><td>建议邀请（RFP）</td><td>项目中出现<span class=\"eye\">问题</span>且解决办法难以确定</td></tr>\n</table></div><div class=\"box mn\"><div class=\"bt\">记忆口诀</div>「<span class=\"gd\">I信 Q价 P议</span>」。</div><ul>\n<li><span class=\"kw\">输出</span>：自制或外购决策；独立成本估算；变更请求；采购管理计划（采购指标、职责、支付货币、独立估算信息、时间表、采购假设和制约因素、风险管理事项）；采购策略（采购交付方法、协议类型、采购阶段）；采购工作说明书（依据范围基准，可进行修改；力求清晰、完整和简练）；供方选择标准（价格、经验、服务、资质）。</li>\n</ul><div class=\"table-wrap\"><table>\n<tr><th>合同类型</th><th>适用</th><th>风险承担</th></tr>\n<tr><td>总价（闭口）</td><td>工作范围明确：工期短、风险小、技术不复杂（固定总价；总价激励（设置一个价格上限）；订购单（单边合同，非大量采购标准化）；总价经济价格调整（数年，通货膨胀））</td><td class=\"eye\">乙方承担风险</td></tr>\n<tr><td>成本补偿（开口）</td><td>工作范围不明确；紧急、重大变更、风险大（成本+固定费用补偿（实报实销，固定补偿）；成本+激励（预先确定激励费用）；成本+奖励（主观奖励，甲方给乙方））</td><td class=\"eye\">甲方承担风险</td></tr>\n<tr><td>工料</td><td>性质清楚，范围不清楚；动态增加人员</td><td class=\"eye\">双方承担风险</td></tr>\n</table></div><div class=\"box note\"><div class=\"bt\">成本激励计算（甲乙立场）</div>\n甲方立场：实际&gt;目标 →「目标成本+目标费用+买方应负担的成本超支」；实际&lt;目标 →「目标成本+目标费用-买方应享受的成本节约」。<br/>\n乙方立场：实际&gt;目标 →「实际成本+目标费用-卖方应负担的成本超支」；实际&lt;目标 →「实际成本+目标费用+卖方应享受的成本节约」。</div><ul>\n<li><span class=\"kw\">范围划分</span>：总承包合同（一个整体发包，能力强的卖方，不意味着只订立一个总合同）；单项工程承包合同（买方与不同卖方订立项目单项承包合同；有较强管理能力的发包人；吸引更多承包人参与投标竞争；衔接易出问题）；总分包分担合同（①经过买方认可 ②分包的部分必须是项目<span class=\"eye\">非主体</span>工作 ③只能分包部分项目，而不能<span class=\"eye\">转包</span>整个项目 ④分包方必须具备相应的资质条件 ⑤分包方<span class=\"eye\">不能再次分包</span>）。</li>\n<li><span class=\"kw\">开展节点</span>：定期开展——估算成本/估算活动资源、规划沟通管理/规划干系人参与；整个期间开展——①定义活动/排列活动顺序/估算活动持续时间/制定进度计划 ②识别风险/实施定性风险分析/实施定量风险分析/规划风险应对 ③定义范围；一次/预定义——其他。</li>\n</ul>"
        }
       ],
       "html": ""
      }
     ]
    },
    {
     "id": "ch12",
     "isAppendix": false,
     "num": "",
     "title": "第12章　执行过程组",
     "en": "",
     "desc": "本章考点集中在：变更请求四种类型、管理质量工具（数据表现与审计）、团队建设五阶段、冲突解决五方法、招投标方式。",
     "stat": [],
     "sections": [
      {
       "title": "",
       "points": [
        {
         "id": "12-1",
         "title": "指导与管理项目工作",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：执行项目计划并实施<span class=\"eye\">已批准变更</span>；对可交付成果进行综合管理。</li>\n<li><span class=\"kw\">输入</span>：项目管理计划、<span class=\"eye\">批准的变更请求</span>、因素、资产。<span class=\"kw\">工具</span>：专家、会议、信息系统。</li>\n<li><span class=\"kw\">输出</span>：可交付成果、问题日志；工作绩效数据（<span class=\"eye\">最低层次的细节</span>：已完成的工作、KPI、缺陷数量、变更请求的数量、进度进展情况、可交付成果状态、实际发生的成本等）。</li>\n</ul><div class=\"table-wrap\"><table>\n<tr><th>变更请求类型</th><th>含义</th><th>口诀</th></tr>\n<tr><td>纠正措施</td><td>使工作绩效重新与项目管理计划<span class=\"eye\">一致</span></td><td rowspan=\"3\">「<span class=\"gd\">纠正一致、补救不一致、预防未未</span>」</td></tr>\n<tr><td>缺陷补救</td><td>修正<span class=\"eye\">不一致</span>产品</td></tr>\n<tr><td>预防措施</td><td>确保工作<span class=\"eye\">未来</span>绩效符合项目管理计划</td></tr>\n<tr><td>更新</td><td>—</td><td>—</td></tr>\n</table></div>"
        },
        {
         "id": "12-2",
         "title": "管理知识",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：生成新知识，帮助学习；改进项目成果，支持运营和未来。</li>\n<li><span class=\"kw\">工具</span>：专家、信息管理（撰写<span class=\"eye\">显性知识</span>）、知识管理（用于<span class=\"eye\">人际互动</span>，营造相互信任的氛围）、人际关系与团队技能。</li>\n<li><span class=\"kw\">输出——经验教训登记册</span>：包含情况的类别和描述，相关的影响、建议和行动方案，记录遇到的挑战、问题、意识到的风险和机会。</li>\n</ul><div class=\"box note\"><div class=\"bt\">项目管理知识过程 —— 口诀「取存分转身」</div>\n知识获取与集成：显性知识（图书资料、内外部数据挖掘、网络搜索、营销与销售信息）；隐性知识（结构式访谈、行动/标杆/分析/经验/综合/交互学习）；<br/>\n知识组织与存储：<span class=\"eye\">知识库是构造专家系统的核心和基础</span>；<br/>\n知识分享：一个个体或组织向另一个个体或组织转移或传播的行为；<br/>\n知识转移与应用：由知识传输和知识吸收两个过程；<br/>\n知识管理审计：安全、能力、资源。</div>"
        },
        {
         "id": "12-3",
         "title": "管理质量",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：将质量管理计划转化为<span class=\"eye\">可执行的质量活动</span>；提高实现质量目标的可能性；识别无效过程和导致质量低劣的原因；促进质量过程改进。</li>\n<li><span class=\"kw\">工具——问题解决</span>：定义问题→识别根本原因→形成备选解决方案→选择最好的方案→实施选定的方案→核实解决效果。</li>\n<li><span class=\"kw\">数据分析</span>：备选方案分析、文件分析、过程分析、根本原因分析。</li>\n</ul><div class=\"table-wrap\"><table>\n<tr><th>数据表现</th><th>题眼</th></tr>\n<tr><td>亲和图</td><td>分类</td></tr>\n<tr><td>因果图</td><td>根本根因</td></tr>\n<tr><td>流程图</td><td>SIPOC</td></tr>\n<tr><td>直方图</td><td>条形图、缺陷展示</td></tr>\n<tr><td>散点图</td><td><span class=\"eye\">两个变量</span></td></tr>\n<tr><td>矩阵图</td><td>在行列交叉展示关系强弱；屋顶形（同属一组）；L形（两组关系）；X形（四组关系）；T形（一组分别与另两组关系，后两组没关系）；Y形（三组间的两两关系，每两组有关系）；C形（三组关系，三组变量同时有关系）</td></tr>\n</table></div><div class=\"box trap\"><div class=\"bt\">审计题眼</div>审计通常由项目<span class=\"eye\">外部</span>的团队开展。目标：（好）识别分享、（不好）识别改进积累——①识别全部正在实施的良好及最佳实践 ②分享所在组织和（或）行业中类似项目的良好实践 ③识别所有违规做法、差距及不足 ④积极主动提供协助以改进过程的执行，帮助团队提高生产效率 ⑤每次审计都应对组织经验教训知识库的积累做出贡献。</div><ul>\n<li><span class=\"kw\">输出</span>：质量报告（质量管理问题、纠正措施建议、质控发现的情况）、测试与评估文件（评估质量目标的实现情况）、变更请求。</li>\n<li><span class=\"kw\">管理质量有助于</span>：设计最优、建立信心、确保目标、提高效率。<span class=\"kw\">其他</span>：敏捷型：所有成员进行；传统型：特定团队成员进行。</li>\n</ul>"
        },
        {
         "id": "12-4",
         "title": "获取资源",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：获取所需团队资源、设备、设施、材料、用品和其他资源；指导资源的选择，分配给相应的活动。</li>\n<li><span class=\"kw\">工具</span>：<span class=\"eye\">预分派（特定/指定）</span>、虚拟团队、谈判、决策。</li>\n<li><span class=\"kw\">输出</span>：物资资源分配单、项目团队派工单、变更请求；资源日历（项目期间确定的团队和实物资源何时可用和可用多久）。</li>\n</ul>"
        },
        {
         "id": "12-5",
         "title": "建设团队（五阶段必考）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"flow\"><span class=\"step\">形成阶段：相互独立，怀有美好期待</span><span class=\"arr\">→</span><span class=\"step\">震荡阶段：互相指责，怀疑PM的能力</span><span class=\"arr\">→</span><span class=\"step\">规范阶段：团队相互信任，认可PM能力</span><span class=\"arr\">→</span><span class=\"step\">成熟阶段：配合默契，信任PM</span><span class=\"arr\">→</span><span class=\"step\">解散阶段：回家，各找各妈</span></div><div class=\"box mn\"><div class=\"bt\">记忆要点</div>如共事过，可<span class=\"eye\">跳过某个阶段</span>。工具：集中办公、虚拟团队、沟通技术、认可与奖励、培训、个人和团队评估、会议、人际关系与团队技能。</div><ul>\n<li><span class=\"kw\">建设团队目标——「3提一创」</span>（技能、能力、信任、文化）：提高团队成员的知识和技能；提高团队成员之间的信任和认同感；提高团队参与决策的能力；创建富有生气、凝聚力和协作性的团队文化。</li>\n<li><span class=\"kw\">评价团队有效性指标——「1加1降2改」</span>（离职率、凝聚力）：个人技能的改进、团队能力的改进；团队成员<span class=\"eye\">离职率的降低</span>；团队<span class=\"eye\">凝聚力的加强</span>。</li>\n<li><span class=\"kw\">团队高效运行的行为——「信管问测鸡狗」</span>：建立团队成员间的信任；以建设性方式管理冲突；鼓励合作型问题解决方法；鼓励合作型决策方法；创建团队建设机遇；使用开放与有效的沟通。</li>\n</ul>"
        },
        {
         "id": "12-6",
         "title": "管理团队（冲突解决五方法必考）",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：跟踪成员工作表现、提供反馈、解决问题、管理团队变更、以优化项目绩效；影响团队行为、管理冲突、解决问题。</li>\n<li><span class=\"kw\">冲突来源</span>：资源稀缺、进度优先级排序和个人工作风格差异等。</li>\n<li><span class=\"kw\">冲突发展阶段</span>：潜伏阶段（存在）→感知阶段（意识/发现）→感受阶段（想要行动）→呈现阶段（采取行动/公开）→结束阶段。</li>\n</ul><div class=\"table-wrap\"><table>\n<tr><th>冲突解决方法</th><th>输赢</th><th>含义</th></tr>\n<tr><td>撤退、回避</td><td>问题没解决</td><td>退出，推给别人解决</td></tr>\n<tr><td>妥协、调解</td><td class=\"eye\">双输</td><td>双方妥协；双方各让一步</td></tr>\n<tr><td>缓和、包容</td><td>赢-输</td><td>单方包容；强调一致而非差异；退让一步</td></tr>\n<tr><td>强迫、命令</td><td>赢-输</td><td>以牺牲其他方为代价，推行某一方的观点；权力解决</td></tr>\n<tr><td>合作、解决问题</td><td class=\"gn\">多赢</td><td>合作，达成共识和承诺</td></tr>\n</table></div><p><span class=\"kw\">管理团队的主要工作</span>：分析（冲突、误解、绩效）；评估（职责、技能、参与）。</p>"
        },
        {
         "id": "12-7",
         "title": "管理沟通 / 实施风险应对",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n<li><span class=\"kw\">管理沟通概念</span>：确保项目信息及时且恰当地收集、生成、发布、存储、检索、管理、监督和最终处置；促成项目团队干系人之间<span class=\"eye\">有效率且有效果</span>沟通。</li>\n<li><span class=\"kw\">工具</span>：沟通技术、沟通方法、沟通技能（胜任力、反馈、非言语、演示）；项目报告（<span class=\"eye\">不同干系人不同模版</span>）、会议、项目管理信息系统。</li>\n<li><span class=\"kw\">输出</span>：项目沟通记录（绩效报告、可交付成果的状态、进度进展、产生的成本等）。</li>\n<li><span class=\"kw\">实施风险应对</span>：执行商定的风险应对计划；<span class=\"eye\">最小化单个项目威胁以及最大化单个机会</span>；工具：专家判断、影响力、项目管理信息系统；输出：变更请求。</li>\n</ul>"
        },
        {
         "id": "12-8",
         "title": "实施采购（招投标方式）",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：获取卖方（乙方、合作方）应答、选择卖方授予合同的过程；选合格卖方并签署法律协议，签订的协议/正式合同。</li>\n<li><span class=\"kw\">采购文档</span>：招标文件（给卖方的 I信息邀请书、P建议邀请书、Q报价邀请书）；采购工作说明书（向卖方清晰地说明目标、需求及成果，以便卖方据此做出量化应答）；独立成本估算（可由内部或外部人员编制，用于评价投标人提交的建议书的合理性）；供方选择标准（如何评估投标人的建议书，包括评估标准和权重）。</li>\n<li><span class=\"kw\">工具</span>：广告、<span class=\"eye\">投标人会议（公平对待、平等竞争）</span>、建议书评价、谈判。</li>\n</ul><div class=\"table-wrap\"><table>\n<tr><th>采购形式</th><th>竞争性</th></tr>\n<tr><td>直接采购：直接邀请某一家厂商报价</td><td><span class=\"eye\">没有竞争性</span></td></tr>\n<tr><td>邀请招标：邀请一些厂家报价</td><td>有限竞争性</td></tr>\n<tr><td>竞争招标：公开发布招标广告，潜在卖方报价</td><td><span class=\"eye\">很大的竞争性</span></td></tr>\n</table></div><div class=\"flow\"><span class=\"step\">招标：买方发出招标文件，邀请潜在卖方要约</span><span class=\"arr\">→</span><span class=\"step\">投标：投标人会议（提问，可考察现场）</span><span class=\"arr\">→</span><span class=\"step\">评标：加权打分法（得分最高胜）；筛选系统（多轮过滤最后一家胜）；独立估算（最接近标底胜）</span><span class=\"arr\">→</span><span class=\"step\">授标：谈判，签合同</span></div>"
        },
        {
         "id": "12-9",
         "title": "管理干系人参与",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：与干系人进行沟通和协作以满足需求与期望、处理问题，促进参与；<span class=\"eye\">提高干系人支持，降低抵制</span>。</li>\n<li><span class=\"kw\">活动——口诀「引导管理处理解决」</span>：适当的项目阶段引导干系人参与；通过谈判和沟通的方式管理干系人期望；处理与干系人管理有关的任何风险或潜在关注点，预测问题；澄清和解决已识别的问题等。</li>\n<li><span class=\"kw\">开展节点</span>：定期——获取资源/实施采购；整个期间——其他。</li>\n</ul>"
        }
       ],
       "html": ""
      }
     ]
    },
    {
     "id": "ch13",
     "isAppendix": false,
     "num": "",
     "title": "第13章　监控过程组",
     "en": "",
     "desc": "本章考点：监督与控制的区别、工作绩效数据/信息/报告三层对比、整体变更控制规则、确认范围与控制质量对比、挣值公式全表、索赔管理。",
     "stat": [],
     "sections": [
      {
       "title": "",
       "points": [
        {
         "id": "13-1",
         "title": "监控项目工作（监督 vs 控制）",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：跟踪、审查；让干系人了解当前、未来状态。</li>\n<li><span class=\"kw\">工具</span>：专家、会议、备选方案分析、成本效益分析、挣值分析、根本原因分析、<span class=\"eye\">趋势分析（预测未来绩效）</span>、<span class=\"eye\">偏差分析（审查目标与实际绩效差异）</span>、决策。</li>\n</ul><div class=\"grid2\">\n<div class=\"minicard\"><div class=\"mt\">监督 —— 「监：收测」</div>收集、测量和分析测量结果，以及预测趋势</div>\n<div class=\"minicard\"><div class=\"mt\">控制 —— 「控制反推」</div>制订纠正、预防措施、重新规划，跟踪行动计划</div>\n</div><p><span class=\"kw\">关注内容——「报查监狱，唯一评比」</span>：报告项目进展和状态；检查风险状态；监督已批准变更的实施；预测成本与进度信息；维护信息库；与商业需求保持一致；定期评估项目绩效；实际与计划比较。</p><div class=\"table-wrap\"><table>\n<tr><th>工作绩效</th><th>产生频率</th><th>说明</th></tr>\n<tr><td>数据</td><td>随时产生</td><td>记录项目执行情况；是什么</td></tr>\n<tr><td>信息</td><td>间隔一定时间</td><td>支持变更决定；为什么</td></tr>\n<tr><td>报告</td><td>间隔时间较长</td><td>整个项目层面，如何预防和解决</td></tr>\n</table></div>"
        },
        {
         "id": "13-2",
         "title": "工作绩效报告的四种形式",
         "freq": 4,
         "freqText": "中频",
         "html": "<div class=\"table-wrap\"><table>\n<tr><th>形式</th><th>要点</th></tr>\n<tr><td>仪表盘</td><td>提供<span class=\"eye\">高层级</span>的概要信息</td></tr>\n<tr><td>大型可见图表（信息发射源）</td><td>是<span class=\"eye\">手动维护</span></td></tr>\n<tr><td>任务板</td><td>直观，可视化表示</td></tr>\n<tr><td>燃烧图</td><td>燃起图：跟踪<span class=\"eye\">已完成</span>的工作量；燃尽图：显示<span class=\"eye\">剩余</span>工作</td></tr>\n</table></div>"
        },
        {
         "id": "13-3",
         "title": "实施整体变更控制",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：审查/批准变更；变更综合评审。<span class=\"kw\">输出</span>：批准的变更请求。</li>\n<li><span class=\"kw\">工具</span>：专家、会议、变更控制工具、数据分析（备选方案分析、成本效益分析）、决策（投票、独裁、多标准决策分析）。</li>\n</ul><div class=\"box trap\"><div class=\"bt\">规则题眼</div>\n贯穿始终；<span class=\"eye\">PM承担责任</span>；可以<span class=\"eye\">口头提出，必须书面记录</span>；<span class=\"eye\">任何人都可以提</span>；必须一位责任人（通常是发起人、PM）；必要时 <span class=\"eye\">CCB批准</span>【变更控制委员会】（客户、高管、领导、发起人、PM（<span class=\"eye\">不能是组长</span>）等构成）。</div><ul>\n<li><span class=\"kw\">变更控制需要支持活动</span>：配置活动（关注：可交付成果及各个过程的技术规范；识别分配置项；记录并报告配置项状态；进行配置项核实与审计）；变更控制（关注：识别、记录、批准或否决变更；识别变更、记录变更、决定和跟踪变更等）。</li>\n</ul>"
        },
        {
         "id": "13-4",
         "title": "控制质量",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：为了评估绩效，满足客户期望，监督和记录执行结果；核实项目可交付成果和质量要求，确定项目输出是否达到预期目的，满足所有适用标准、要求、法规和规范。</li>\n<li><span class=\"kw\">工具</span>：数据收集（核对单、核查表、统计抽样、问卷调查）、数据分析（绩效审查、根本原因分析）、检查，产品/测试评估；数据表现：因果图、直方图、散点图、<span class=\"eye\">控制图（是否稳定/受控，最大值和最小值）</span>。</li>\n<li><span class=\"kw\">输出</span>：质量控制测量结果；<span class=\"eye\">核实的可交付成果</span>；变更请求；工作绩效信息。</li>\n</ul>"
        },
        {
         "id": "13-5",
         "title": "确认范围（与控制质量对比必考）",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：<span class=\"eye\">正式验收</span>已完成的项目可交付成果；使验收具有<span class=\"eye\">客观性</span>；提高最终产品、服务成果获取验收的可能性。</li>\n<li><span class=\"kw\">输出</span>：<span class=\"eye\">验收的可交付成果</span>、工作绩效信息、变更请求。</li>\n<li><span class=\"kw\">确认范围步骤——口诀「石头准不会」</span>：①确认需要进行范围确认的时间 ②识别范围确认需要哪些投入 ③确认范围正式被接受的标准和要素 ④确定范围确认会议的组织步骤 ⑤组织范围确认会议。</li>\n<li><span class=\"kw\">干系人关注点</span>：管理层：投入/产出合理性；客户：关心产品的范围，是否完成产品；管理人：时间/资金/资源是否足够；团队成员：自身负责。</li>\n</ul><div class=\"table-wrap\"><table>\n<tr><th colspan=\"2\">确认范围 vs 控制质量（相同点：检查、监控过程组）</th></tr>\n<tr><td>1.关注点</td><td>（确认）验收可交付成果；（质控）成果的正确性</td></tr>\n<tr><td>2.阶段</td><td>先质控后确认，或同时进行</td></tr>\n<tr><td>3.负责人</td><td>（确认）<span class=\"eye\">外部客户</span>；（质控）<span class=\"eye\">内部QC</span></td></tr>\n<tr><td>4.节点</td><td>（确认）<span class=\"eye\">定期</span>；（质控）<span class=\"eye\">整个期间</span></td></tr>\n<tr><td>5.输出</td><td>（确认）<span class=\"eye\">验收</span>可交付成果；（质控）<span class=\"eye\">核实</span>可交付成果</td></tr>\n</table></div><p><span class=\"kw\">控制范围</span>：监督项目产品的范围状态；保持对范围基准维护。工具：数据分析（偏差分析、趋势分析）。</p>"
        },
        {
         "id": "13-6",
         "title": "控制进度",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：监督项目状态；对进度基准的维护。</li>\n<li><span class=\"kw\">工具</span>：数据分析（挣值分析、迭代燃尽图、绩效审查、趋势分析、偏差分析、假设情景分析）、关键路径法、项目管理信息系统、资源优化、提前量和滞后量、进度压缩。<span class=\"kw\">迭代燃尽图</span>：理想是圆的，实际是方的，预测是虚的。</li>\n<li><span class=\"kw\">输出</span>：进度预测、工作绩效信息、变更请求。</li>\n<li><span class=\"kw\">关注内容</span>：整体变更控制过程（当前状态、是否变更、进行管理、施加影响、进度储备）；敏捷方法（当前状态、是否变更、进行管理、回顾性审查、优先级排序、迭代速度）。</li>\n</ul>"
        },
        {
         "id": "13-7",
         "title": "控制成本（挣值公式全表，计算必考）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\"><table>\n<tr><th>缩写</th><th>名称</th><th>公式</th><th>名称</th></tr>\n<tr><td>PV</td><td>计划工作预算费用</td><td>SV = EV - PV</td><td>进度偏差</td></tr>\n<tr><td>EV</td><td>实际工作预算费用</td><td>CV = EV - AC</td><td>成本偏差</td></tr>\n<tr><td>AC</td><td>实际费用</td><td>SPI = EV / PV</td><td>进度绩效指数</td></tr>\n<tr><td>BAC</td><td>完工预算</td><td>CPI = EV / AC</td><td>成本绩效指数</td></tr>\n<tr><td>VAC</td><td>完工偏差</td><td>VAC = BAC - EAC</td><td>—</td></tr>\n<tr><td>ETC<br/>完工尚需估算</td><td colspan=\"3\">ETC = BAC - EV（非典型）；ETC = (BAC - EV) / CPI（典型）</td></tr>\n<tr><td>EAC<br/>完工估算</td><td colspan=\"3\">EAC = AC + ETC（通用）；EAC = BAC / CPI（典型）；EAC = AC + BAC - EV（非典型）</td></tr>\n<tr><td>TCPI<br/>完工尚需绩效指数</td><td colspan=\"3\">TCPI = 现有成本 (BAC-EV)/(BAC-AC)；TCPI = 重新估算 (BAC-EV)/(EAC-AC)</td></tr>\n</table></div><div class=\"box trap\"><div class=\"bt\">计算规则题眼</div>\n求绩效情况：减法或除法，其中一组都可以；求绩效指数情况：<span class=\"eye\">只能用除法</span>一组。<br/>\n总PV = PMB = BAC = 成本基准；EV的计算往往与PV的总和相对应。<br/>\n项目完工时，全部的计划价值都将成为挣值，<span class=\"eye\">SV=0</span>；CV = BAC - AC。</div><p><span class=\"kw\">关注内容——「变更绩效成本」</span>：①及时处理变更；管理变更；报告所有经批准的变更；防止出现未经批准的变更；对造成成本基准变更的因素施加影响 ②监督成本绩效；监督工作绩效 ③确保成本支出不超过批准的资金限额；成本超支控制在可接受的范围内。</p>"
        },
        {
         "id": "13-8",
         "title": "控制资源 / 监督沟通",
         "freq": 3,
         "freqText": "基础",
         "html": "<ul>\n<li><span class=\"kw\">控制资源概念</span>：按计划分配实物资源，监督资源实际使用情况，采取必要的纠正措施；确保资源<span class=\"eye\">适时、适地</span>可用于项目，不需要时被释放。</li>\n<li><span class=\"kw\">控制资源关注内容——「监理管事变通」</span>：①监督资源支出 ②及时识别和处理资源缺乏/剩余情况 ③在变更实际发生时对其进行管理 ④确保根据计划和项目需求使用并释放资源 ⑤影响可以导致资源使用变更的因素 ⑥出现资源相关问题时通知相应干系人。</li>\n<li><span class=\"kw\">监督沟通概念</span>：确保满足信息需求；优化信息传递流程。工具：专家、会议、项目管理信息系统、干系人评估矩阵、观察/交谈。</li>\n<li><span class=\"kw\">监督沟通方法——口诀「评查理」</span>：开展客户满意度调查、开展团队观察、审查问题日志或评估变更、整理经验教训。</li>\n</ul>"
        },
        {
         "id": "13-9",
         "title": "监督风险",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：监督风险应对计划的实施，跟踪已识别风险，识别和分析新风险，评估风险有效性；使项目决策都基于整体项目风险和单个项目风险的当前信息。</li>\n<li><span class=\"kw\">工具</span>：技术绩效分析（实际和计划比较）、储备分析、<span class=\"eye\">审计（评估有效性；日常审查会/风险审查会开展）</span>、会议。</li>\n<li><span class=\"kw\">其他</span>：监督风险借助项目绩效信息，检查：风险应对效果、风险变化、有无新风险，核验管理方法、项目假设、制度执行、应急储备与项目策略有效性。</li>\n</ul>"
        },
        {
         "id": "13-10",
         "title": "控制采购 + 监督干系人参与",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n<li><span class=\"kw\">控制采购概念</span>：管理采购关系、监督合同绩效、实施必要的变更和纠偏，及关闭合同；确保买卖双方履行法律协议，满足项目需求。</li>\n<li><span class=\"kw\">索赔管理</span>：<span class=\"eye\">谈判是解决所有索赔和争议的首选方法</span>；按合同条款进行索赔；双方无法自行解决，替代争议解决方法。</li>\n<li><span class=\"kw\">输出</span>：<span class=\"eye\">结束的采购</span>、工作绩效信息、变更请求。</li>\n</ul><div class=\"box note\"><div class=\"bt\">合同管理活动 —— 口诀「记完变毒妇」</div>\n采购管理员可以是团队成员，向另一部门的合同管理经理报告。<br/>\n①收集数据和管理项目记录 ②完善采购计划和进度计划 ③建立与采购相关的项目数据的收集、分析和报告机制，并为组织编制定期报告 ④监督采购环境，以便引导或调整实施 ⑤向卖方付款。</div><ul>\n<li><span class=\"kw\">监督干系人参与概念</span>：监督干系人关系，修订参与与策略和计划来引导干系人合理参与项目；随项目进展和环境变化，<span class=\"eye\">维持/提升</span>效率、效果。工具：备选方案分析、根本原因分析、干系人分析、多标准决策分析、投票、干系人参与度评估矩阵、反馈、演示、积极倾听、文化意识、领导力、人际交往、政策意识、会议。</li>\n<li><span class=\"kw\">开展节点</span>：定期——<span class=\"eye\">确认范围</span>；整个期间——其他监控过程。</li>\n</ul>"
        }
       ],
       "html": ""
      }
     ]
    },
    {
     "id": "ch14",
     "isAppendix": false,
     "num": "",
     "title": "第14章　结束项目或阶段",
     "en": "",
     "desc": "本章仅一个过程，考点集中在收尾重点工作：验收（四项）、移交（三方向）、总结。",
     "stat": [],
     "sections": [
      {
       "title": "",
       "points": [
        {
         "id": "14-1",
         "title": "结束项目或阶段（概述）",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n<li><span class=\"kw\">概念/作用</span>：终结项目；存档信息、释放组织资源。</li>\n<li><span class=\"kw\">输入</span>：项目章程、项目管理计划、项目文件、<span class=\"eye\">验收的可交付成果</span>（批准的产品规范、交货收据和工作绩效文件）、项目立项文件、协议、采购文档、资产。</li>\n<li><span class=\"kw\">工具</span>：专家、会议、数据分析（文件分析、回归分析、趋势分析、偏差分析）。</li>\n<li><span class=\"kw\">输出</span>：最终产品、服务或成果；<span class=\"eye\">最终报告</span>。</li>\n<li><span class=\"kw\">活动</span>：开展完工活动；开展合同协议活动；开展总结经验教训、存档信息等活动；开展移交产品活动；收集改进的建议；测量干系人的满意度等。</li>\n</ul>"
        },
        {
         "id": "14-2",
         "title": "收尾重点工作：验收（四项）—— 口诀「测运档终」",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\"><table>\n<tr><th>验收项</th><th>要点</th></tr>\n<tr><td>1、验收测试</td><td>全面的测试；<span class=\"eye\">甲乙方共同进行</span>，也可由第三方公司进行</td></tr>\n<tr><td>2、试运行</td><td>数据迁移、日常维护以及缺陷跟踪和修复</td></tr>\n<tr><td>3、文档验收</td><td>最终报告、项目介绍、产品说明书、质量保证书、说明手册、维护手册等（「告诫书册」）</td></tr>\n<tr><td>4、项目终验</td><td>标志项目组<span class=\"eye\">开发工作的结束</span>和项目<span class=\"eye\">后续活动的开始</span></td></tr>\n</table></div>"
        },
        {
         "id": "14-3",
         "title": "收尾重点工作：移交（三方向）+ 总结",
         "freq": 4,
         "freqText": "中频",
         "html": "<ul>\n<li><span class=\"kw\">向用户移交</span>：需求/设计说明书、项目研发成果、测试报告、可执行程序及用户使用手册等。</li>\n<li><span class=\"kw\">向运维和支持团队移交</span>：（同「向用户移交」）、安装部署手册或运维手册等。</li>\n<li><span class=\"kw\">向组织移交过程资产——「资产文档」</span>：项目档案；收尾文件；技术和管理资产。</li>\n</ul><div class=\"box green\"><div class=\"bt\">总结</div>\n全体项目人员共同进行，总结会议<span class=\"eye\">所有人确认</span>。<br/>\n内容：项目目标、技术绩效、成本绩效、进度计划绩效；项目沟通、识别问题和解决问题、意见和建议。</div>"
        }
       ],
       "html": ""
      }
     ]
    },
    {
     "id": "ch15",
     "isAppendix": false,
     "num": "",
     "title": "第15章　组织保障",
     "en": "",
     "desc": "本章三大块：文档管理（类型+质量等级）、配置管理（配置项/配置库/配置控制/配置审计）、变更管理（分类+变更控制流程8步）。",
     "stat": [],
     "sections": [
      {
       "title": "",
       "points": [
        {
         "id": "15-1",
         "title": "文档类型 —— 口诀「开餐管」",
         "freq": 4,
         "freqText": "中频",
         "html": "<div class=\"table-wrap\"><table>\n<tr><th>类型</th><th>举例</th></tr>\n<tr><td>开发文档</td><td>计划、报告、说明、任务书、测试</td></tr>\n<tr><td>产品文档</td><td>手册、指南、广告</td></tr>\n<tr><td>管理文档</td><td>记录、职责，（项目计划、配置管理计划、项目阶段报告）2计+1报</td></tr>\n</table></div>"
        },
        {
         "id": "15-2",
         "title": "文档质量等级 —— 口诀「1低2内3作4式」",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\"><table>\n<tr><th>等级</th><th>名称</th><th>适用范围</th></tr>\n<tr><td>1级</td><td><span class=\"eye\">最低限度</span>文档</td><td>一个人月</td></tr>\n<tr><td>2级</td><td><span class=\"eye\">内部</span>文档</td><td>专用</td></tr>\n<tr><td>3级</td><td><span class=\"eye\">工作</span>文档</td><td>同一单位若干人联合</td></tr>\n<tr><td>4级</td><td><span class=\"eye\">正式</span>文档</td><td>正式发行</td></tr>\n</table></div><p><span class=\"kw\">管理规范</span>：文档书写规范（统一的格式）；图表编号规则（分类结构，为了方便查找）；文档目录编写（为了存档）；文档管理制度（规范、借阅、登记、文档权限制度等）。</p>"
        },
        {
         "id": "15-3",
         "title": "配置项分类与状态",
         "freq": 5,
         "freqText": "高频",
         "html": "<p>权限由 <span class=\"eye\">CMO</span> 严格管理；配置项<span class=\"eye\">评审和检查通过后</span>进入配置管理。</p><div class=\"grid2\">\n<div class=\"minicard\"><div class=\"mt\">基线配置项 —— 「基党员」</div>向<span class=\"eye\">开发人员</span>开放读取的权限；包括所有的<span class=\"eye\">设计文档和源程序（源代码）</span></div>\n<div class=\"minicard\"><div class=\"mt\">非基线配置项 —— 「非画报」</div>向 <span class=\"eye\">PM、CCB</span> 及相关人员开放；包括项目的各类<span class=\"eye\">计划和报告</span>等</div>\n</div><div class=\"box trap\"><div class=\"bt\">版本号题眼</div>草稿：<span class=\"eye\">0.XY</span>；正式：<span class=\"eye\">X.Y</span>；修改：<span class=\"eye\">X.YZ</span>。草稿和修改都得<span class=\"eye\">评审</span>才能变为正式。</div><ul>\n<li><span class=\"kw\">版本管理目的</span>：按一定规则保存配置项所有版本，避免版本丢失或混淆，并且可快速准确地查找配置项任何版本；保留所有版本，<span class=\"eye\">不能抛弃旧版本</span>，只要修改就会形成新版本，绝大部分的版本经过多次修改才能变为正式。</li>\n<li><span class=\"kw\">基线——「外行内造」</span>：一个产品可一个/多个基线，不能随意改，要改走流程；<span class=\"eye\">发行基线</span>——交付给外部顾客的基线；<span class=\"eye\">构造基线</span>——内部开发使用的基线。</li>\n</ul>"
        },
        {
         "id": "15-4",
         "title": "配置库（三库必考）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"table-wrap\"><table>\n<tr><th>配置库</th><th>别名</th><th>要点</th></tr>\n<tr><td>开发库</td><td>动态库、程序员库、工作库</td><td>正在开发的，<span class=\"eye\">开发人员控制</span></td></tr>\n<tr><td>受控库</td><td>主库</td><td>当前产品/当前基线</td></tr>\n<tr><td>产品库</td><td>静态库、发行库、软件仓库</td><td>已发布基线存档、最终产品</td></tr>\n</table></div><p><span class=\"kw\">建库——「类通一并，任专多串」</span>：类型（通用软件）：工具比较统一，利于管理；结构过于复杂，并行；开发任务（专业软件）：工具各类繁多；不利于统一管理，串行（线性）；灵活。</p>"
        },
        {
         "id": "15-5",
         "title": "配置管理活动与配置识别",
         "freq": 4,
         "freqText": "中频",
         "html": "<div class=\"box mn\"><div class=\"bt\">记忆口诀</div>活动口诀「<span class=\"gd\">计时制，状态审计回改</span>」：配置<span class=\"gd\">计</span>划；标<span class=\"gd\">识</span>；控<span class=\"gd\">制</span>；状态报告；审计；回顾改进。</div><ul>\n<li><span class=\"kw\">目标——「记录汇报管控」</span>：所有配置项被识别和记录；记录的完整性；记录的正确性并纠错；当前和历史状态得到汇报；有效控制和管理。</li>\n<li><span class=\"kw\">关键成功因素——「记分联号，变顾审责」</span>：所有配置项记录；配置项分类；能够与其他管理活动关联；所有配置项要编号；关注变化情况；定期进行回顾；对配置项信息审计；有负责人负责。</li>\n<li><span class=\"kw\">制定配置管理计划</span>：<span class=\"eye\">CMO编制，CCB审批</span>；内容：目标、职责、过程、工具、进度、基线等。</li>\n</ul><div class=\"box note\"><div class=\"bt\">配置识别七步 —— 「识相标号、定征定责、定时建基、维护」</div>\n1、识别需要受控的配置项；2、为每个配置项指定唯一的标号；3、定义每个配置项的重要特征；4、确定每个配置项的所有者及其责任；5、确定配置项进入配置管理的时间和条件；6、建立和控制基线；7、维护文档和组件的修订与产品版本之间的关系。</div>"
        },
        {
         "id": "15-6",
         "title": "配置控制（变更流程）",
         "freq": 5,
         "freqText": "高频",
         "html": "<div class=\"flow\"><span class=\"step\">变更申请（相关人员填表并提交给CCB）</span><span class=\"arr\">→</span><span class=\"step\">变更评估并决定（CCB负责）</span><span class=\"arr\">→</span><span class=\"step\">通告评估结果（CCB负责）</span><span class=\"arr\">→</span><span class=\"step\">变更实施（PM组织修改，记录）</span><span class=\"arr\">→</span><span class=\"step\">变更验证与确认（PM指定人员测试/验证，CCB确认）</span><span class=\"arr\">→</span><span class=\"step\">变更的发布（CMO将变更后的配置项纳入基线，记录）</span></div><p><span class=\"kw\">评估内容</span>：影响、内容必要、范围周全、方案可行、工作量合理。</p><div class=\"box note\"><div class=\"bt\">基于配置库变更控制流程</div>\n产品库<span class=\"eye\">复制</span>到受控库 → 受控库<span class=\"eye\">检出</span>到开发库并在开发库修改，进行「锁定」→ 从开发库<span class=\"eye\">检入</span>受控库，「锁定」被解除 → 将新基线从受控库<span class=\"eye\">更新</span>至产品库。</div>"
        },
        {
         "id": "15-7",
         "title": "配置审计（审核）",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">目的/作用</span>：不好——防止不适合，发现不完善，找出不匹配或不相容；好——保存基线，记录文档可追溯性。</li>\n</ul><div class=\"grid2\">\n<div class=\"minicard\"><div class=\"mt\">功能审计（一致性）</div><span class=\"eye\">完成</span>（开发/操作和支持文档）；<span class=\"eye\">达到</span>（性能/功能特征）</div>\n<div class=\"minicard\"><div class=\"mt\">物理审计（完整性）</div>是否<span class=\"eye\">存在</span>；是否包含<span class=\"eye\">所有必需项目</span></div>\n</div><div class=\"box mn\"><div class=\"bt\">记忆口诀</div>「<span class=\"gd\">功能一致，达到完成；物理完整，必需存在</span>」。回顾与改进：准备→会议→改进计划→落实改进。</div>"
        },
        {
         "id": "15-8",
         "title": "变更管理（分类 + 变更控制流程8步）",
         "freq": 5,
         "freqText": "高频",
         "html": "<ul>\n<li><span class=\"kw\">概念</span>：使项目基准与项目实际执行情况相一致，提升项目价值。</li>\n<li><span class=\"kw\">分类方法</span>：性质——<span class=\"eye\">重大变更、重要变更、一般变更</span>（通过不同审批权限）；迫切性——<span class=\"eye\">紧急变更、非紧急变更</span>。</li>\n<li><span class=\"kw\">原则</span>：基准管理；变更控制流程化；明确组织分工；评估变更的可能影响；妥善保存变更产生的相关文档等。</li>\n</ul><div class=\"flow\"><span class=\"step\">①变更申请（口头/书面→提出；书面→记录，任何人都可以提出）</span><span class=\"arr\">→</span><span class=\"step\">②初审（必要性；格式校验，达成共识；文档审核流转；负责人PM/CMO）</span><span class=\"arr\">→</span><span class=\"step\">③变更方案论证（变更顾问委员会 经济/技术论证）</span><span class=\"arr\">→</span><span class=\"step\">④变更审查（必须一位负责人，必要时CCB）</span><span class=\"arr\">→</span><span class=\"step\">⑤发出通知（确认时发布）</span><span class=\"arr\">→</span><span class=\"step\">⑥实施监控（PM负责基准监控，CCB监控主要成果/进度里程碑，也可监理单位）</span><span class=\"arr\">→</span><span class=\"step\">⑦效果评估（依据项目基准，评估目的达成，评估差距）</span><span class=\"arr\">→</span><span class=\"step\">⑧变更收尾（是否纳入正轨）</span></div><ul>\n<li><span class=\"kw\">操作要点</span>：整体压力较大——分批处理、分优先级处理；规模小、关联度小——简便、高效。</li>\n<li><span class=\"kw\">版本发布前准备工作</span>：回退分析→备份（存储过程等数据对象；配置数据；接口、应用、工作流等版本）→启动回退触发条件→回退职责说明。</li>\n<li><span class=\"kw\">回退步骤</span>：通知用户开始→通知关联版本回退→回退（存储过程等数据对象；配置数据；接口、应用、工作流等版本）→通知关联系统→测试→通知用户完成。</li>\n</ul>"
        },
        {
         "id": "15-9",
         "title": "角色职责",
         "freq": 4,
         "freqText": "中频",
         "html": "<div class=\"table-wrap\"><table>\n<tr><th>角色</th><th>职责</th></tr>\n<tr><td>CCB（配置控制委员会）</td><td>定策、审批计划/基线、监督、审查、通告、确认</td></tr>\n<tr><td>CCB（变更控制委员会）</td><td>审查、通告、确认</td></tr>\n<tr><td>配置经理（经理/管理负责人）</td><td>审批配置库、审计、定义、指派、负责、管理、评估、培训</td></tr>\n<tr><td>变更经理</td><td>负责、管理、评估、承担</td></tr>\n<tr><td>CMO</td><td>建立+配置管理过程</td></tr>\n<tr><td>配置项负责人</td><td>参与遵从配置过程；记录维护调查配置项</td></tr>\n<tr><td>变更请求者</td><td>提交初步计划，初步评价</td></tr>\n<tr><td>变更实施者</td><td>实施记录</td></tr>\n<tr><td>变更顾问委员会</td><td>提出建议，行使审批权限</td></tr>\n</table></div>"
        }
       ],
       "html": ""
      }
     ]
    }
   ],
   "appendices": [
    {
     "id": "appA",
     "isAppendix": true,
     "num": "",
     "title": "附录A　数字速记表",
     "en": "",
     "desc": "",
     "stat": [],
     "sections": [
      {
       "title": "",
       "points": [],
       "html": "<div class=\"table-wrap\"><table>\n<tr><th>数字</th><th>考点</th><th>章节</th></tr>\n<tr><td class=\"eye\">±20% / ±10% / ±5%</td><td>初步可研精度 / 详细可研精度 / 设计开发精度（「初2相识发5」）</td><td>第9章</td></tr>\n<tr><td class=\"eye\">4个阶段</td><td>投资前期：立项申请→初步可研→详细可研→评估与决策（升级改造项目只做初步和详细）</td><td>第9章</td></tr>\n<tr><td class=\"eye\">12条</td><td>项目管理十二原则</td><td>第9章</td></tr>\n<tr><td class=\"eye\">4-6层</td><td>WBS分解层数；只有一人负责；面向可交付成果</td><td>第11章</td></tr>\n<tr><td class=\"eye\">0</td><td>里程碑持续时间为0；关键路径上自由时差和总时差为0</td><td>第11章</td></tr>\n<tr><td class=\"eye\">-25%~+75% / -5%~+10%</td><td>粗略量级估算 / 确定性估算</td><td>第11章</td></tr>\n<tr><td class=\"eye\">68% / 95% / 99%</td><td>三点估算 1σ / 2σ / 3σ</td><td>第11章</td></tr>\n<tr><td class=\"eye\">（大+4×中+小）/6</td><td>β贝塔分布（默认）期望值；标准差=（大-小）/6</td><td>第11章</td></tr>\n<tr><td class=\"eye\">3-6名</td><td>小组沟通人数</td><td>第11章</td></tr>\n<tr><td class=\"eye\">10步</td><td>采购步骤（说明书→预算→广告→名单→文件→建议书→技术评估→成本评估→报告→谈判签约）</td><td>第11章</td></tr>\n<tr><td class=\"eye\">5阶段</td><td>团队建设：形成→震荡→规范→成熟→解散</td><td>第12章</td></tr>\n<tr><td class=\"eye\">5方法</td><td>冲突解决：撤退回避/妥协调解/缓和包容/强迫命令/合作解决问题</td><td>第12章</td></tr>\n<tr><td class=\"eye\">4级</td><td>文档质量等级：1低2内3作4式</td><td>第15章</td></tr>\n<tr><td class=\"eye\">0.XY / X.Y / X.YZ</td><td>配置项状态：草稿 / 正式 / 修改</td><td>第15章</td></tr>\n<tr><td class=\"eye\">3库</td><td>配置库：开发库、受控库、产品库</td><td>第15章</td></tr>\n<tr><td class=\"eye\">8步</td><td>变更控制流程：申请→初审→论证→审查→通知→监控→评估→收尾</td><td>第15章</td></tr>\n</table></div>"
      }
     ]
    },
    {
     "id": "appB",
     "isAppendix": true,
     "num": "",
     "title": "附录B　口诀大全",
     "en": "",
     "desc": "",
     "stat": [],
     "sections": [
      {
       "title": "",
       "points": [],
       "html": "<div class=\"table-wrap\"><table>\n<tr><th>口诀</th><th>对应考点</th><th>章节</th></tr>\n<tr><td class=\"gd\">进城吃饭</td><td>项目成功标准：进度、成本、范围、质量</td><td>9</td></tr>\n<tr><td class=\"gd\">集正 / 合作</td><td>项目集（正确地做事）/ 项目组合</td><td>9</td></tr>\n<tr><td class=\"gd\">指高控中</td><td>PMO：指令型控制高、控制型中、支持型很低</td><td>9</td></tr>\n<tr><td class=\"gd\">创交流</td><td>价值交付系统：创造价值、价值交付组件、信息流</td><td>9</td></tr>\n<tr><td class=\"gd\">两必两测</td><td>项目建议书内容：必要性、必需条件、市场预测、方案/服务预测</td><td>9</td></tr>\n<tr><td class=\"gd\">创立管人品 / 社工文静</td><td>社会效益可行性：组织内部 / 社会发展</td><td>9</td></tr>\n<tr><td class=\"gd\">学正课</td><td>详细可研原则：科学性、公正性、客观性</td><td>9</td></tr>\n<tr><td class=\"gd\">发售行</td><td>开发成本-经营成本：研发、销售与分销、行政管理</td><td>9</td></tr>\n<tr><td class=\"gd\">初2相识发5</td><td>可研精度：±20%、±10%、±5%</td><td>9</td></tr>\n<tr><td class=\"gd\">可以初见</td><td>项目评估依据</td><td>9</td></tr>\n<tr><td class=\"gd\">疯婶人进城，目标求财权</td><td>项目章程内容</td><td>10</td></tr>\n<tr><td class=\"gd\">标准人易记</td><td>启动会议步骤：目标、准备、人员、议题、记录</td><td>10</td></tr>\n<tr><td class=\"gd\">识人章程；实施管理，获取建设；确认监控；结束；计划剩余</td><td>五大过程组归属</td><td>10</td></tr>\n<tr><td class=\"gd\">说明书、WBS、基准、验收</td><td>范围管理计划</td><td>11</td></tr>\n<tr><td class=\"gd\">需指配</td><td>需求管理计划</td><td>11</td></tr>\n<tr><td class=\"gd\">证明认鞋跟</td><td>需求文件基准特征</td><td>11</td></tr>\n<tr><td class=\"gd\">设成约，述求除表姐</td><td>范围说明书内容</td><td>11</td></tr>\n<tr><td class=\"gd\">别排解配合</td><td>创建WBS步骤</td><td>11</td></tr>\n<tr><td class=\"gd\">2单1属</td><td>定义活动输出：活动清单、里程碑清单、活动属性</td><td>11</td></tr>\n<tr><td class=\"gd\">出前入后 / 前负后正</td><td>双代号箭线 / 提前量负值、滞后量正值</td><td>11</td></tr>\n<tr><td class=\"gd\">技工收数</td><td>估算考虑因素：技术进步、员工激励、收益递减、资源数量</td><td>11</td></tr>\n<tr><td class=\"gd\">衡变滑不变</td><td>资源优化：平衡改变关键路径、平滑不改变</td><td>11</td></tr>\n<tr><td class=\"gd\">预设培文，评查测试，外债失保，内部废工</td><td>质量成本法</td><td>11</td></tr>\n<tr><td class=\"gd\">目标职责，过程活动工具</td><td>质量管理计划内容</td><td>11</td></tr>\n<tr><td class=\"gd\">认可培训职责；管理过程</td><td>资源管理计划内容</td><td>11</td></tr>\n<tr><td class=\"gd\">团南过</td><td>团队章程：价值观、共识、会议/沟通指南、决策/冲突过程</td><td>11</td></tr>\n<tr><td class=\"gd\">随变相</td><td>风险属性：随机性、相对性、可变性</td><td>11</td></tr>\n<tr><td class=\"gd\">2单1人</td><td>风险登记册：风险清单、应对措施清单、责任人</td><td>11</td></tr>\n<tr><td class=\"gd\">I信 Q价 P议</td><td>RFI信息 / RFQ报价 / RFP建议邀请书</td><td>11</td></tr>\n<tr><td class=\"gd\">说明预算，广告名单，发布提交，技术成本，报告合同</td><td>采购步骤10步</td><td>11</td></tr>\n<tr><td class=\"gd\">纠正一致、补救不一致、预防未未</td><td>变更请求类型</td><td>12</td></tr>\n<tr><td class=\"gd\">取存分转身</td><td>知识过程：获取集成、组织存储、分享、转移应用、审计</td><td>12</td></tr>\n<tr><td class=\"gd\">3提一创</td><td>建设团队目标：技能、能力、信任、文化</td><td>12</td></tr>\n<tr><td class=\"gd\">1加1降2改</td><td>评价团队有效性：凝聚力加、离职率降、技能/能力改</td><td>12</td></tr>\n<tr><td class=\"gd\">信管问测鸡狗</td><td>团队高效运行行为</td><td>12</td></tr>\n<tr><td class=\"gd\">引导管理处理解决</td><td>管理干系人参与活动</td><td>12</td></tr>\n<tr><td class=\"gd\">监「收测」/ 控制反推</td><td>监督 vs 控制</td><td>13</td></tr>\n<tr><td class=\"gd\">报查监狱，唯一评比</td><td>监控项目工作关注内容</td><td>13</td></tr>\n<tr><td class=\"gd\">石头准不会</td><td>确认范围步骤</td><td>13</td></tr>\n<tr><td class=\"gd\">变更绩效成本</td><td>控制成本关注内容</td><td>13</td></tr>\n<tr><td class=\"gd\">监理管事变通</td><td>控制资源关注内容</td><td>13</td></tr>\n<tr><td class=\"gd\">评查理</td><td>监督沟通方法</td><td>13</td></tr>\n<tr><td class=\"gd\">记完变毒妇</td><td>合同管理活动</td><td>13</td></tr>\n<tr><td class=\"gd\">测运档终</td><td>收尾验收：验收测试、试运行、文档验收、项目终验</td><td>14</td></tr>\n<tr><td class=\"gd\">开餐管</td><td>文档类型：开发、产品、管理</td><td>15</td></tr>\n<tr><td class=\"gd\">1低2内3作4式</td><td>文档质量等级</td><td>15</td></tr>\n<tr><td class=\"gd\">基党员 / 非画报</td><td>基线配置项（源代码/设计文档，开发人员）/ 非基线（计划/报告，PM、CCB）</td><td>15</td></tr>\n<tr><td class=\"gd\">外行内造</td><td>发行基线（外部顾客）/ 构造基线（内部开发）</td><td>15</td></tr>\n<tr><td class=\"gd\">类通一并，任专多串</td><td>建库类型与开发任务</td><td>15</td></tr>\n<tr><td class=\"gd\">计时制，状态审计回改</td><td>配置管理活动6项</td><td>15</td></tr>\n<tr><td class=\"gd\">记录汇报管控</td><td>配置管理目标</td><td>15</td></tr>\n<tr><td class=\"gd\">记分联号，变顾审责</td><td>配置管理关键成功因素</td><td>15</td></tr>\n<tr><td class=\"gd\">识相标号、定征定责、定时建基、维护</td><td>配置识别7步</td><td>15</td></tr>\n<tr><td class=\"gd\">功能一致，达到完成；物理完整，必需存在</td><td>配置审计：功能审计 vs 物理审计</td><td>15</td></tr>\n</table></div>"
      }
     ]
    },
    {
     "id": "appC",
     "isAppendix": true,
     "num": "",
     "title": "附录C　高频易混辨析",
     "en": "",
     "desc": "",
     "stat": [],
     "sections": [
      {
       "title": "",
       "points": [],
       "html": "<div class=\"table-wrap\"><table>\n<tr><th>易混对</th><th>辨析要点</th></tr>\n<tr><td>项目 vs 运营</td><td>项目=临时性（一次性）；运营=周期性、反复性、持续性；二者存在交叉</td></tr>\n<tr><td>项目集 vs 项目组合</td><td>集=相互依赖、正确地做事；组合=不一定关联、优先级排序、做正确的事</td></tr>\n<tr><td>事业环境因素 vs 组织过程资产</td><td>因素=PM不可控制（文化/市场/政策…）；资产=PM可控制（经验教训/模板/知识库）</td></tr>\n<tr><td>强矩阵 vs 弱矩阵 vs 平衡矩阵</td><td>强：PM&gt;职能经理（全职）；弱：职能经理&gt;PM（兼职）；平衡：相等但权力倾斜职能经理</td></tr>\n<tr><td>迭代型 vs 增量型</td><td>迭代=渐进明细、逐渐细化计划；增量=渐进增加、最后一次交付才完整</td></tr>\n<tr><td>一次性支出 vs 非一次性支出</td><td>一次性：开发费/培训费/差旅费/初始数据录入/设备购置费；非一次性：租金/工资福利/水电/消耗品</td></tr>\n<tr><td>应急储备 vs 管理储备</td><td>应急=PM的钱，已知-未知风险，计入成本基准；管理=高管的钱，未知-未知风险，在成本基准之上</td></tr>\n<tr><td>工作包 vs 控制账户 vs 规划包</td><td>工作包=最底层、只关联一个控制账户；控制账户=含两个或更多工作包；规划包=低于控制账户高于工作包，内容已知进度未知</td></tr>\n<tr><td>赶工 vs 快速跟进</td><td>赶工=增加资源、直接成本增加；快速跟进=并行、返工风险增加；二者都增加风险</td></tr>\n<tr><td>资源平衡 vs 资源平滑</td><td>平衡=往往导致关键路径改变（针对关键人物）；平滑=不会改变关键路径</td></tr>\n<tr><td>预防成本 vs 评估成本 vs 内部失败 vs 外部失败</td><td>预防=培训/设备/文件过程；评估=测试/破坏性试验/检查；内部=报废/返工；外部=债务/流失业务/保修</td></tr>\n<tr><td>拉式 vs 推式 vs 互动沟通</td><td>拉=信息量大受众多、自主获取（门户/知识库）；推=发送特定接受方（邮件/备忘录）；互动=实时交换（会议/即时信息）</td></tr>\n<tr><td>定性 vs 定量风险分析</td><td>定性=概率影响矩阵、排序、所有项目都做、每次迭代前；定量=蒙特卡洛/龙卷风图/决策树EMV，仅大型或复杂项目</td></tr>\n<tr><td>规避 vs 减轻 vs 转移 vs 接受</td><td>规避=消除原因；减轻=降概率影响；转移=转给第三方（保险/保证书）；接受=主动（应急储备）/被动（定期审查）</td></tr>\n<tr><td>总价 vs 成本补偿 vs 工料合同</td><td>总价=范围明确、乙方担风险；成本补偿=范围不明确、甲方担风险；工料=性质清楚范围不清楚、双方担风险</td></tr>\n<tr><td>纠正 vs 缺陷补救 vs 预防</td><td>纠正=绩效重新一致；补救=修正不一致产品；预防=确保未来绩效符合计划</td></tr>\n<tr><td>撤退 vs 妥协 vs 缓和 vs 强迫 vs 合作</td><td>撤退=问题没解决；妥协=双输各让一步；缓和=赢输单方包容；强迫=赢输权力解决；合作=多赢共识承诺</td></tr>\n<tr><td>工作绩效数据 vs 信息 vs 报告</td><td>数据=随时产生、是什么；信息=间隔一定时间、为什么；报告=间隔较长、如何预防和解决</td></tr>\n<tr><td>确认范围 vs 控制质量</td><td>确认=外部客户验收可交付成果、定期开展；质控=内部QC核实成果正确性、整个期间；先质控后确认或同时</td></tr>\n<tr><td>燃起图 vs 燃尽图</td><td>燃起=跟踪已完成工作量；燃尽=显示剩余工作</td></tr>\n<tr><td>基线配置项 vs 非基线配置项</td><td>基线=设计文档+源代码、向开发人员开放；非基线=计划+报告、向PM/CCB开放</td></tr>\n<tr><td>开发库 vs 受控库 vs 产品库</td><td>开发库=动态库/程序员库/工作库，开发人员控制；受控库=主库，当前产品/当前基线；产品库=静态库/发行库/软件仓库，已发布基线存档</td></tr>\n<tr><td>功能审计 vs 物理审计</td><td>功能=一致性（完成/达到）；物理=完整性（是否存在/必需项目）</td></tr>\n<tr><td>配置管理变更流程 vs 变更管理8步流程</td><td>配置控制=申请→评估决定→通告→实施→验证确认→发布（CCB评估、PM实施、CMO发布）；变更管理=申请→初审→论证→审查→通知→监控→评估→收尾</td></tr>\n</table></div>"
      }
     ]
    }
   ],
   "stats": {
    "chapters": 7,
    "kps": 71,
    "tables": 31,
    "mnemonics": 11,
    "traps": 11
   }
  }
 ]
};
