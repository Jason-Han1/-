option = {
    tooltip: {
        show: true, // 默认显示
        showContent: true, // 是否显示提示框浮层
        trigger: 'item', // 触发类型，默认数据项触发
        triggerOn: 'mousemove', // 提示触发条件，mousemove鼠标移至触发，还有click点击触发
        alwaysShowContent: false, // 默认离开提示框区域隐藏，true为一直显示
        showDelay: 100, // 浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。在 triggerOn 为 'mousemove' 时有效。
        hideDelay: 2000, // 浮层隐藏的延迟，单位为 ms，在 alwaysShowContent 为 true 的时候无效。
        enterable: false, // 鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true。
        position: 'right', // 提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。只在 trigger 为'item'的时候有效。
        confine: false, // 是否将 tooltip 框限制在图表的区域内。
        // 外层的 dom 被设置为 'overflow: hidden'，或者移动端窄屏，导致 tooltip 超出外界被截断时，此配置比较有用。
        transitionDuration: 0.2, // 提示框浮层的移动动画过渡时间，单位是秒，设置为 0 的时候会紧跟着鼠标移动。
    },
    legend: { // 图例显示（显示在右上角），name:类别名称，icon:图例的形状（默认是roundRect圆角矩形）。
        show: true,
        data: [ // name(类别名称)要同legend(图例）按次序一致
            {
                name: '发现'
            },
            {
                name: '定义'
            },
            {
                name: '发展'
            },
            {
                name: '实现'
            },
            {
                name: '定性'
            },
            {
                name: '定性且定量'
            },
            {
                name: '定量'
            },
            {
                name: '信息收集'
            },
            {
                name: '信息处理'
            },
            {
                name: '信息挖掘'
            },
            {
                name: '可视化'
            },
        ]
    },
    series: [{
        type: 'graph', // 关系图
        name: '信息设计方法可视化:', // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
        layout: 'force', // 图的布局，类型为'force'力导图，'circular' 采用环形布局，见示例 Les Miserables
        legendHoverLink: true, // 是否启用图例 hover(悬停) 时的联动高亮。
        hoverAnimation: true, // 是否开启鼠标悬停节点的显示动画
        coordinateSystem: null, // 坐标系可选
        xAxisIndex: 0, // x轴坐标 有多种坐标系轴坐标选项
        yAxisIndex: 0, // y轴坐标 
        force: { // 力引导图基本配置
            // initLayout: , // 力引导的初始化布局，默认使用xy轴的标点
            repulsion: 500, // 节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
            gravity: 0.02, // 节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
            edgeLength: 200, // 边的两个节点之间的距离，这个距离也会受 repulsion影响 。值越大则长度越长
            layoutAnimation: true // 因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画
            // 在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。                        
        },
        roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启，true 为都开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'
        nodeScaleRatio: 0.6, // 鼠标漫游缩放时节点的相应缩放比例，当设为0时节点不随着鼠标的缩放而缩放
        draggable: true, // 节点是否可拖拽，只在使用力引导布局的时候有用。
        focusNodeAdjacency: true, // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
        // symbol:'roundRect', // 关系图节点标记的图形。
        // ECharts 提供的标记类型包括：'circle'(圆形), 'rect'（矩形）, 'roundRect'（圆角矩形）,
        // 'triangle'（三角形）, 'diamond'（菱形）, 'pin'（大头针）, 'arrow'（箭头）
        // 也可以通过 'image://url' 设置为图片，其中 url 为图片的链接。'path:// 这种方式可以任意改变颜色并且抗锯齿
        // symbolSize: 10 , // 也可以用数组分开表示宽和高，例如 [20, 10] 如果需要每个数据的图形大小不一样，
        // 可以设置为如下格式的回调函数：(value: Array|number, params: Object) => number|Array
        // symbolRotate:, // 关系图节点标记的旋转角度。注意在 markLine 中当 symbol 为 'arrow' 时会忽略 symbolRotate 强制设置为切线的角度。
        // symbolOffset:[0,0], // 关系图节点标记相对于原本位置的偏移。[0, '50%']
        edgeSymbol: ['none', 'none'], // 边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。
        // 默认不显示标记，常见的可以设置为箭头，如下：edgeSymbol: ['circle', 'arrow']
        edgeSymbolSize: 10, // 边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。

        itemStyle: { // ========图形样式，有 normal 和 emphasis 两个状态。
            // normal 是图形在默认状态下的样式；
            // emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
            normal: { // 默认样式
                label: {
                    show: true
                },
                borderType: 'solid', // 图形描边类型，默认为实线，支持 'solid'（实线）, 'dashed'(虚线), 'dotted'（点线）。
                borderColor: 'rgba(185, 185, 185, 0.4)', // 设置图形边框为淡金色,透明度为0.4
                borderWidth: 2, // 图形的描边线宽。为 0 时无描边。
                opacity: 1 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5

            },
            emphasis: { // 高亮状态

            }
        },
        lineStyle: { // ========关系边的公用线条样式。
            normal: {
                color: 'rgba(185, 185, 185, 0.4)',
                width: '1', //线的粗细
                type: 'solid', // 线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                curveness: 0.3, // 线条的曲线程度，从0到1
                opacity: 0.5 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
            },
            emphasis: { // 高亮状态

            }
        },
        label: { // ========结点图形上的文本标签
            normal: {
                show: true, // 是否显示标签。
                position: ['50%', '50%'], //'inside', // 标签的位置。['50%', '50%'] [x,y]
                textStyle: { // 标签的字体样式
                    color: '#2b8d3d', // 字体颜色 #cde6c7 #d1c7b7 #d9d6c3 #d3d7d4
                    fontStyle: 'normal', // 文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                    fontWeight: 'bolder', // 'normal'标准，'bold'粗的，'bolder'更粗的，'lighter'更细的，或100 | 200 | 300 | 400...
                    fontFamily: 'sans-serif', // 文字的字体系列
                    fontSize: 12, // 字体大小
                }
            },
            emphasis: { // 高亮状态

            }
        },
        edgeLabel: { // ========连接线上的文本标签 
            normal: {
                show: false // 不显示连接线上的文字，如果显示只能显示结点的value值，而不是连接线的值
            },
            emphasis: { // 高亮状态

            }
        },
        categories: [ // name(类别名称)要同legend(图例）按次序一致
            {
                name: '发现'
            },
            {
                name: '定义'
            },
            {
                name: '发展'
            },
            {
                name: '实现'
            },
            {
                name: '定性'
            },
            {
                name: '定性且定量'
            },
            {
                name: '定量'
            },
            {
                name: '信息收集'
            },
            {
                name: '信息处理'
            },
            {
                name: '信息挖掘'
            },
            {
                name: '可视化'
            },
        ],

        // 设置结点node的数据
        // category: 类别序号，从0开始
        // name: 结点图形显示的文字
        // value: 鼠标点击结点，显示的数字
        // symbolSize: 结点图形的大小
        // symbol: 类目节点标记图形，默然为圆形
        // label: 标签样式
        data: [{
                'category': '发现',
                'name': '问卷调查',
                'value': 1,
                'symbolSize': 10
            },
            {
                'category': '发现',
                'name': '热点报告',
                'value': 2,
                'symbolSize': 10
            },
            {
                'category': '发现',
                'name': '案例研究',
                'value': 3,
                'symbolSize': 10
            },
            {
                'category': '发现',
                'name': '格式塔组织原则',
                'value': 4,
                'symbolSize': 10
            },
            {
                'category': '发现',
                'name': '内容分析法',
                'value': 5,
                'symbolSize': 10
            },
            {
                'category': '发现',
                'name': '焦点小组',
                'value': 6,
                'symbolSize': 10
            },
            {
                'category': '发现',
                'name': '行为地图',
                'value': 7,
                'symbolSize': 10
            },
            {
                'category': '发现',
                'name': '观察法',
                'value': 8,
                'symbolSize': 10
            },
            {
                'category': '发现',
                'name': '五帽架法则',
                'value': 9,
                'symbolSize': 10
            },
            {
                'category': '发现',
                'name': '网站分析',
                'value': 10,
                'symbolSize': 10
            },
            {
                'category': '发现',
                'name': 'AIDA模式',
                'value': 11,
                'symbolSize': 10
            },
            {
                'category': '发现',
                'name': '自由列举法',
                'value': 12,
                'symbolSize': 10
            },
            {
                'category': '发现',
                'name': '自动远程研究',
                'value': 13,
                'symbolSize': 10
            },
            {
                'category': '发现',
                'name': 'SAPAD方法',
                'value': 14,
                'symbolSize': 10
            },
            {
                'category': '定义',
                'name': '5W1H',
                'value': 15,
                'symbolSize': 10
            },
            {
                'category': '定义',
                'name': '故事板',
                'value': 16,
                'symbolSize': 10
            },
            {
                'category': '定义',
                'name': '卡片分类',
                'value': 17,
                'symbolSize': 10
            },
            {
                'category': '定义',
                'name': '学习风格模型',
                'value': 18,
                'symbolSize': 10
            },
            {
                'category': '定义',
                'name': '实体关系图',
                'value': 19,
                'symbolSize': 10
            },
            {
                'category': '定义',
                'name': '亲和图',
                'value': 20,
                'symbolSize': 10
            },
            {
                'category': '定义',
                'name': '用例图',
                'value': 21,
                'symbolSize': 10
            },
            {
                'category': '定义',
                'name': '统一建模语言',
                'value': 22,
                'symbolSize': 10
            },
            {
                'category': '定义',
                'name': '可视化轮盘',
                'value': 23,
                'symbolSize': 10
            },
            {
                'category': '定义',
                'name': 'FRAD概念模型',
                'value': 24,
                'symbolSize': 10
            },
            {
                'category': '发展',
                'name': '隐喻',
                'value': 25,
                'symbolSize': 10
            },
            {
                'category': '发展',
                'name': '头脑风暴图像组织法',
                'value': 26,
                'symbolSize': 10
            },
            {
                'category': '发展',
                'name': '决策树',
                'value': 27,
                'symbolSize': 10
            },
            {
                'category': '发展',
                'name': '标杆法',
                'value': 28,
                'symbolSize': 10
            },
            {
                'category': '发展',
                'name': '启发式评估',
                'value': 29,
                'symbolSize': 10
            },
            {
                'category': '发展',
                'name': 'TACT策略开法流程',
                'value': 30,
                'symbolSize': 10
            },
            {
                'category': '发展',
                'name': '大众分类法',
                'value': 31,
                'symbolSize': 10
            },
            {
                'category': '发展',
                'name': '用户体验蜂巢模型',
                'value': 32,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '黄金比例',
                'value': 33,
                'symbolSize': 10

            },
            {
                'category': '实现',
                'name': '墨卡托投影',
                'value': 34,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '亚尔勃斯投影',
                'value': 35,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '面包屑导航法',
                'value': 36,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '倒金字塔式写作',
                'value': 37,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '路径综合法',
                'value': 38,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '维恩图',
                'value': 39,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '颜色映射',
                'value': 40,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '概览+细节',
                'value': 41,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '节点-链接法',
                'value': 42,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '分面分类法',
                'value': 43,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '最小可察觉定律',
                'value': 44,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '最小努力原则',
                'value': 45,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '认知地图',
                'value': 46,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '有限理性理论',
                'value': 47,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '眼球追踪',
                'value': 48,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '意元集组',
                'value': 49,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '古登堡图表',
                'value': 50,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '阶段学说模型',
                'value': 51,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '超文本结构',
                'value': 52,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '模糊分类法',
                'value': 53,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '路线搜寻',
                'value': 54,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '概念图',
                'value': 55,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '易读性',
                'value': 56,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '降低不确定感理论',
                'value': 57,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '解释结构模型法',
                'value': 58,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '克利夫兰任务模式',
                'value': 59,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '采草莓模型',
                'value': 60,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '基于视觉工作模型选择图表形式',
                'value': 61,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '等值线提取',
                'value': 62,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '体绘制',
                'value': 63,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '焦点+上下文',
                'value': 64,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '多元层级结构',
                'value': 65,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '自由式标签',
                'value': 66,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '内容映射图',
                'value': 67,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '高级架构站点地图',
                'value': 68,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '情景式导航',
                'value': 69,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '纹理法',
                'value': 70,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '高度图',
                'value': 71,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '图标法',
                'value': 72,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '几何法',
                'value': 73,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '文本内容可视化',
                'value': 74,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '拼贴',
                'value': 75,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '意向看板',
                'value': 76,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '拓扑法',
                'value': 77,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '点数据可视化',
                'value': 78,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '线数据可视化',
                'value': 79,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '区域数据可视化',
                'value': 80,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '跨媒体数据可视化',
                'value': 81,
                'symbolSize': 10
            },
            {
                'category': '实现',
                'name': '时空采样',
                'value': 82,
                'symbolSize': 10
            },
            {
                'category': '发现',
                'name': '发现',
                'value': 'a',
                'symbolSize': 28
            },
            {
                'category': '定义',
                'name': '定义',
                'value': 'b',
                'symbolSize': 20
            },
            {
                'category': '发展',
                'name': '发展',
                'value': 'c',
                'symbolSize': 16
            },
            {
                'category': '实现',
                'name': '实现',
                'value': 'd',
                'symbolSize': 100
            },
            {
                'category': '定性',
                'name': '定性',
                'value': 'e',
                'symbolSize': 78
            },
            {
                'category': '定性且定量',
                'name': '定性且定量',
                'value': 'f',
                'symbolSize': 62
            },
            {
                'category': '定量',
                'name': '定量',
                'value': 'g',
                'symbolSize': 24
            },
            {
                'category': '信息收集',
                'name': '信息收集',
                'value': 'h',
                'symbolSize': 10
            },
            {
                'category': '信息处理',
                'name': '信息处理',
                'value': 'i',
                'symbolSize': 32
            },
            {
                'category': '信息挖掘',
                'name': '信息挖掘',
                'value': 'j',
                'symbolSize': 58
            },
            {
                'category': '可视化',
                'name': '可视化',
                'value': 'k',
                'symbolSize': 64
            }
        ],
        links: [{
                'source': 'AIDA模式',
                'target': '发现',
            },
            {
                'source': 'AIDA模式',
                'target': '定性且定量',
            },
            {
                'source': 'AIDA模式',
                'target': '信息挖掘',
            },
            {
                'source': '五帽架法则',
                'target': '发现',
            },
            {
                'source': '五帽架法则',
                'target': '定性',
            },
            {
                'source': '五帽架法则',
                'target': '信息处理',
            },
            {
                'source': 'SAPAD方法模型',
                'target': '发现',
            },
            {
                'source': 'SAPAD方法模型',
                'target': '定性',
            },
            {
                'source': 'SAPAD方法模型',
                'target': '信息挖掘',
            },
            {
                'source': '案例研究',
                'target': '发现',
            },
            {
                'source': '案例研究',
                'target': '定性',
            },
            {
                'source': '案例研究',
                'target': '信息收集',
            },
            {
                'source': '格式塔组织原则',
                'target': '发现',
            },
            {
                'source': '格式塔组织原则',
                'target': '定性',
            },
            {
                'source': '格式塔组织原则',
                'target': '信息挖掘',
            },
            {
                'source': '观察法',
                'target': '发现',
            },
            {
                'source': '观察法',
                'target': '定性',
            },
            {
                'source': '观察法',
                'target': '信息收集',
            },
            {
                'source': '行为地图',
                'target': '发现',
            },
            {
                'source': '行为地图',
                'target': '定性且定量',
            },
            {
                'source': '行为地图',
                'target': '可视化',
            },
            {
                'source': '焦点小组',
                'target': '发现',
            },
            {
                'source': '焦点小组',
                'target': '定性',
            },
            {
                'source': '焦点小组',
                'target': '信息收集',
            },
            {
                'source': '内容分析法',
                'target': '发现',
            },
            {
                'source': '内容分析法',
                'target': '定性且定量',
            },
            {
                'source': '内容分析法',
                'target': '信息挖掘',
            },
            {
                'source': '热点报告',
                'target': '发现',
            },
            {
                'source': '热点报告',
                'target': '定性',
            },
            {
                'source': '热点报告',
                'target': '信息收集',
            },
            {
                'source': '网站分析',
                'target': '发现',
            },
            {
                'source': '网站分析',
                'target': '定量',
            },
            {
                'source': '网站分析',
                'target': '信息处理',
            },
            {
                'source': '问卷调查',
                'target': '发现',
            },
            {
                'source': '问卷调查',
                'target': '定性且定量',
            },
            {
                'source': '问卷调查',
                'target': '信息收集',
            },
            {
                'source': '自动远程研究',
                'target': '发现',
            },
            {
                'source': '自动远程研究',
                'target': '定量',
            },
            {
                'source': '自动远程研究',
                'target': '信息处理',
            },
            {
                'source': '自由列举法',
                'target': '发现',
            },
            {
                'source': '自由列举法',
                'target': '定性且定量',
            },
            {
                'source': '自由列举法',
                'target': '信息挖掘',
            },
            {
                'source': '5W1H',
                'target': '定义',
            },
            {
                'source': '5W1H',
                'target': '定性',
            },
            {
                'source': '5W1H',
                'target': '信息处理',
            },
            {
                'source': 'FRAD概念模型',
                'target': '定义',
            },
            {
                'source': 'FRAD概念模型',
                'target': '定性',
            },
            {
                'source': 'FRAD概念模型',
                'target': '信息处理',
            },
            {
                'source': '故事板',
                'target': '定义',
            },
            {
                'source': '故事板',
                'target': '定性',
            },
            {
                'source': '故事板',
                'target': '可视化',
            },
            {
                'source': '卡片分类',
                'target': '定义',
            },
            {
                'source': '卡片分类',
                'target': '定性且定量',
            },
            {
                'source': '卡片分类',
                'target': '信息处理',
            },
            {
                'source': '可视化轮盘',
                'target': '定义',
            },
            {
                'source': '可视化轮盘',
                'target': '定性',
            },
            {
                'source': '可视化轮盘',
                'target': '信息挖掘',
            },
            {
                'source': '亲和图',
                'target': '定义',
            },
            {
                'source': '亲和图',
                'target': '定量',
            },
            {
                'source': '亲和图',
                'target': '信息处理',
            },
            {
                'source': '实体关系图',
                'target': '定义',
            },
            {
                'source': '实体关系图',
                'target': '定量',
            },
            {
                'source': '实体关系图',
                'target': '信息挖掘',
            },
            {
                'source': '统一建模语言',
                'target': '定义',
            },
            {
                'source': '统一建模语言',
                'target': '定性',
            },
            {
                'source': '统一建模语言',
                'target': '信息处理',
            },
            {
                'source': '学习风格模型',
                'target': '定义',
            },
            {
                'source': '学习风格模型',
                'target': '定性',
            },
            {
                'source': '学习风格模型',
                'target': '信息处理',
            },
            {
                'source': '用例图',
                'target': '定义',
            },
            {
                'source': '用例图',
                'target': '定性',
            },
            {
                'source': '用例图',
                'target': '信息处理',
            },
            {
                'source': 'TACT策略开发流程',
                'target': '发展',
            },
            {
                'source': 'TACT策略开发流程',
                'target': '定性',
            },
            {
                'source': 'TACT策略开发流程',
                'target': '信息挖掘',
            },
            {
                'source': '标杆法',
                'target': '发展',
            },
            {
                'source': '标杆法',
                'target': '定性且定量',
            },
            {
                'source': '标杆法',
                'target': '信息挖掘',
            },
            {
                'source': '大众分类法',
                'target': '发展',
            },
            {
                'source': '大众分类法',
                'target': '定性',
            },
            {
                'source': '大众分类法',
                'target': '信息挖掘',
            },
            {
                'source': '决策树',
                'target': '发展',
            },
            {
                'source': '决策树',
                'target': '定性且定量'
            },
            {
                'source': '决策树',
                'target': '信息挖掘'
            },
            {
                'source': '启发式评估',
                'target': '发展'
            },
            {
                'source': '启发式评估',
                'target': '定性且定量'
            },
            {
                'source': '启发式评估',
                'target': '信息挖掘'
            },
            {
                'source': '头脑风暴图像组织法',
                'target': '发展'
            },
            {
                'source': '头脑风暴图像组织法',
                'target': '定性'
            },
            {
                'source': '头脑风暴图像组织法',
                'target': '可视化'
            },
            {
                'source': '隐喻',
                'target': '发展'
            },
            {
                'source': '隐喻',
                'target': '定性'
            },
            {
                'source': '隐喻',
                'target': '信息挖掘'
            },
            {
                'source': '用户体验蜂巢模型',
                'target': '发展',
            },
            {
                'source': '用户体验蜂巢模型',
                'target': '定性',
            },
            {
                'source': '用户体验蜂巢模型',
                'target': '信息处理',
            },
            {
                'source': '采草莓模型',
                'target': '实现',
            },
            {
                'source': '采草莓模型',
                'target': '定性且定量',
            },
            {
                'source': '采草莓模型',
                'target': '信息处理',
            },
            {
                'source': '超文本结构',
                'target': '实现',
            },
            {
                'source': '超文本结构',
                'target': '定性',
            },
            {
                'source': '超文本结构',
                'target': '信息挖掘',
            },
            {
                'source': '倒金字塔式写作',
                'target': '实现',
            },
            {
                'source': '倒金字塔式写作',
                'target': '定性',
            },
            {
                'source': '倒金字塔式写作',
                'target': '信息挖掘',
            },
            {
                'source': '等值线提取',
                'target': '实现',
            },
            {
                'source': '等值线提取',
                'target': '定性且定量',
            },
            {
                'source': '等值线提取',
                'target': '可视化',
            },
            {
                'source': '点数据可视化',
                'target': '实现',
            },
            {
                'source': '点数据可视化',
                'target': '定性且定量',
            },
            {
                'source': '点数据可视化',
                'target': '可视化',
            },
            {
                'source': '多元层级结构',
                'target': '实现',
            },
            {
                'source': '多元层级结构',
                'target': '定性',
            },
            {
                'source': '多元层级结构',
                'target': '信息处理',
            },
            {
                'source': '分面分类法',
                'target': '实现',
            },
            {
                'source': '分面分类法',
                'target': '定性',
            },
            {
                'source': '分面分类法',
                'target': '信息挖掘',
            },
            {
                'source': '概览+细节',
                'target': '实现',
            },
            {
                'source': '概览+细节',
                'target': '定性且定量',
            },
            {
                'source': '概览+细节',
                'target': '可视化',
            },
            {
                'source': '概念图',
                'target': '实现',
            },
            {
                'source': '概念图',
                'target': '定性',
            },
            {
                'source': '概念图',
                'target': '可视化',
            },
            {
                'source': '高度图',
                'target': '实现',
            },
            {
                'source': '高度图',
                'target': '定性且定量',
            },
            {
                'source': '高度图',
                'target': '可视化',
            },
            {
                'source': '高级架构站点地图',
                'target': '实现',
            },
            {
                'source': '高级架构站点地图',
                'target': '定性且定量',
            },
            {
                'source': '高级架构站点地图',
                'target': '信息处理',
            },
            {
                'source': '古登堡图表',
                'target': '实现',
            },
            {
                'source': '古登堡图表',
                'target': '定性',
            },
            {
                'source': '古登堡图表',
                'target': '可视化',
            },
            {
                'source': '黄金比例',
                'target': '实现',
            },
            {
                'source': '黄金比例',
                'target': '定量',
            },
            {
                'source': '黄金比例',
                'target': '可视化'
            },
            {
                'source': '基于视觉工作模式选择图表形式',
                'target': '实现'
            },
            {
                'source': '基于视觉工作模式选择图表形式',
                'target': '定性'
            },
            {
                'source': '基于视觉工作模式选择图表形式',
                'target': '可视化'
            },
            {
                'source': '几何法',
                'target': '实现'
            },
            {
                'source': '几何法',
                'target': '定性且定量'
            },
            {
                'source': '几何法',
                'target': '可视化'
            },
            {
                'source': '降低不确定感理论',
                'target': '实现',
            },
            {
                'source': '降低不确定感理论',
                'target': '定性',
            },
            {
                'source': '降低不确定感理论',
                'target': '可视化',
            },
            {
                'source': '焦点+上下文',
                'target': '实现',
            },
            {
                'source': '焦点+上下文',
                'target': '定性且定量',
            },
            {
                'source': '焦点+上下文',
                'target': '可视化'
            },
            {
                'source': '阶段学说模型',
                'target': '实现'
            },
            {
                'source': '阶段学说模型',
                'target': '定性'
            },
            {
                'source': '阶段学说模型',
                'target': '信息挖掘'
            },
            {
                'source': '节点-链接法',
                'target': '实现',
            },
            {
                'source': '节点-链接法',
                'target': '定性且定量',
            },
            {
                'source': '节点-链接法',
                'target': '可视化',
            },
            {
                'source': '解释结构模型法',
                'target': '实现',
            },
            {
                'source': '解释结构模型法',
                'target': '定性且定量',
            },
            {
                'source': '解释结构模型法',
                'target': '信息挖掘',
            },
            {
                'source': '克利夫兰任务模式',
                'target': '实现',
            },
            {
                'source': '克利夫兰任务模式',
                'target': '定性且定量',
            },
            {
                'source': '克利夫兰任务模式',
                'target': '可视化',
            },
            {
                'source': '跨媒体数据可视化',
                'target': '实现',
            },
            {
                'source': '跨媒体数据可视化',
                'target': '定性且定量',
            },
            {
                'source': '跨媒体数据可视化',
                'target': '可视化',
            },
            {
                'source': '路径综合法',
                'target': '实现',
            },
            {
                'source': '路径综合法',
                'target': '定量',
            },
            {
                'source': '路径综合法',
                'target': '信息挖掘',
            },
            {
                'source': '路线搜寻',
                'target': '实现',
            },
            {
                'source': '路线搜寻',
                'target': '定性且定量',
            },
            {
                'source': '路线搜寻',
                'target': '信息挖掘',
            },
            {
                'source': '意元集组',
                'target': '实现',
            },
            {
                'source': '意元集组',
                'target': '定量',
            },
            {
                'source': '意元集组',
                'target': '信息挖掘',
            },
            {
                'source': '面包屑导航法',
                'target': '实现',
            },
            {
                'source': '面包屑导航法',
                'target': '定性',
            },
            {
                'source': '面包屑导航法',
                'target': '信息挖掘',
            },
            {
                'source': '模糊分类法',
                'target': '实现',
            },
            {
                'source': '模糊分类法',
                'target': '定性',
            },
            {
                'source': '模糊分类法',
                'target': '信息挖掘',
            },
            {
                'source': '墨卡托投影',
                'target': '实现',
            },
            {
                'source': '墨卡托投影',
                'target': '定量',
            },
            {
                'source': '墨卡托投影',
                'target': '可视化',
            },
            {
                'source': '内容映射图',
                'target': '实现',
            },
            {
                'source': '内容映射图',
                'target': '定性',
            },
            {
                'source': '内容映射图',
                'target': '信息处理',
            },
            {
                'source': '拼贴',
                'target': '实现',
            },
            {
                'source': '拼贴',
                'target': '定性',
            },
            {
                'source': '拼贴',
                'target': '可视化',
            },
            {
                'source': '情景式导航',
                'target': '实现',
            },
            {
                'source': '情景式导航',
                'target': '定性且定量',
            },
            {
                'source': '情景式导航',
                'target': '信息处理',
            },
            {
                'source': '区域数据可视化',
                'target': '实现',
            },
            {
                'source': '区域数据可视化',
                'target': '定性且定量',
            },
            {
                'source': '区域数据可视化',
                'target': '可视化',
            },
            {
                'source': '认知地图',
                'target': '实现',
            },
            {
                'source': '认知地图',
                'target': '定性且定量',
            },
            {
                'source': '认知地图',
                'target': '信息挖掘',
            },
            {
                'source': '时空采样',
                'target': '实现',
            },
            {
                'source': '时空采样',
                'target': '定性且定量',
            },
            {
                'source': '时空采样',
                'target': '可视化',
            },
            {
                'source': '体绘制',
                'target': '实现',
            },
            {
                'source': '体绘制',
                'target': '定性且定量',
            },
            {
                'source': '体绘制',
                'target': '可视化',
            },
            {
                'source': '图标法',
                'target': '实现',
            },
            {
                'source': '图标法',
                'target': '定性且定量',
            },
            {
                'source': '图标法',
                'target': '可视化',
            },
            {
                'source': '拓扑法',
                'target': '实现',
            },
            {
                'source': '拓扑法',
                'target': '定性',
            },
            {
                'source': '拓扑法',
                'target': '可视化',
            },
            {
                'source': '维恩图',
                'target': '实现',
            },
            {
                'source': '维恩图',
                'target': '定性',
            },
            {
                'source': '维恩图',
                'target': '可视化',
            },
            {
                'source': '文本内容可视化',
                'target': '实现',
            },
            {
                'source': '文本内容可视化',
                'target': '定性且定量',
            },
            {
                'source': '文本内容可视化',
                'target': '可视化',
            },
            {
                'source': '纹理法',
                'target': '实现',
            },
            {
                'source': '纹理法',
                'target': '定性',
            },
            {
                'source': '纹理法',
                'target': '可视化',
            },
            {
                'source': '线数据可视化',
                'target': '实现',
            },
            {
                'source': '线数据可视化',
                'target': '定性且定量',
            },
            {
                'source': '线数据可视化',
                'target': '可视化',
            },
            {
                'source': '亚尔勃斯投影',
                'target': '实现',
            },
            {
                'source': '亚尔勃斯投影',
                'target': '定量',
            },
            {
                'source': '亚尔勃斯投影',
                'target': '可视化',
            },
            {
                'source': '颜色映射',
                'target': '实现',
            },
            {
                'source': '颜色映射',
                'target': '定量',
            },
            {
                'source': '颜色映射',
                'target': '可视化',
            },
            {
                'source': '眼球追踪',
                'target': '实现',
            },
            {
                'source': '眼球追踪',
                'target': '定量',
            },
            {
                'source': '眼球追踪',
                'target': '信息挖掘',
            },
            {
                'source': '易读性',
                'target': '实现',
            },
            {
                'source': '易读性',
                'target': '定性且定量',
            },
            {
                'source': '易读性',
                'target': '可视化',
            },
            {
                'source': '意向看板',
                'target': '实现',
            },
            {
                'source': '意向看板',
                'target': '定性',
            },
            {
                'source': '意向看板',
                'target': '可视化',
            },
            {
                'source': '有限理性理论',
                'target': '实现',
            },
            {
                'source': '有限理性理论',
                'target': '定性'
            },
            {
                'source': '有限理性理论',
                'target': '信息挖掘'
            },
            {
                'source': '自由式标签',
                'target': '实现'
            },
            {
                'source': '自由式标签',
                'target': '定性'
            },
            {
                'source': '自由式标签',
                'target': '信息挖掘'
            },
            {
                'source': '最小可察觉定律',
                'target': '实现'
            },
            {
                'source': '最小可察觉定律',
                'target': '定量'
            },
            {
                'source': '最小可察觉定律',
                'target': '信息处理'
            },
            {
                'source': '最小努力原则',
                'target': '实现'
            },
            {
                'source': '最小努力原则',
                'target': '定性'
            },
            {
                'source': '最小努力原则',
                'target': '信息挖掘'
            },
        ]
    }]
};