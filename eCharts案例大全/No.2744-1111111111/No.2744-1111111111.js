 // 指定图表的配置项和数据
        option = {
            backgroundColor: new echarts.graphic.RadialGradient(0, 0, 0, [{
                offset: 0,
                color: '#f7f8fa'
            }, {
                offset: 1,
                color: '#fff'
            }]),
            tooltip: {},
            // 图标下方显示-横行条
            // legend: [{
            //     formatter: function(name) {
            //         return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
            //     },
            //     tooltip: {
            //         show: true
            //     },
            //     selectedMode: 'false',
            //     bottom: 20,
            //     data: ['刘备2239', '诸葛亮1892', '曹操979', '关羽948', '张飞408', '赵云393', '孙权390', '吕布384', '周瑜328', '魏延327']
            // }],
            //工具
            toolbox: {
                show: false,
                feature: {
                    dataView: {
                        show: true,
                        readOnly: true
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            animationDuration: 3000,
            animationEasingUpdate: 'quinticInOut',
            series: [{
                name: '紧缺海外人才行业',
                type: 'graph',
                layout: 'force',

                force: {
                    //元素之间的间距
                    repulsion: 300
                },
                data: [{
                    "name": "模式识别与智能系统",
                    "symbolSize": 9,
                    "category": "模式识别与智能系统",
                    "draggable": "true",
                    "value": 3

                },
                    {
                        "name": "信息与通信工程",
                        "symbolSize": 12,
                        "category": "信息与通信工程",
                        "draggable": "true",
                        "value": 4

                    },
                    {
                        "name": "控制科学",
                        "symbolSize": 15,
                        "category": "控制科学",
                        "draggable": "true",
                        "value": 5

                    },
                    {
                        "name": "智能科学",
                        "symbolSize": 18,
                        "category": "智能科学",
                        "draggable": "true",
                        "value": 6

                    },
                    {
                        "name": "生物信息处理",
                        "symbolSize": 21,
                        "category": "生物信息处理",
                        "draggable": "true",
                        "value": 7

                    },
                    {
                        "name": "凝聚态物理",
                        "symbolSize": 24,
                        "category": "凝聚态物理",
                        "draggable": "true",
                        "value": 8

                    },
                    {
                        "name": "物理电子学",
                        "symbolSize": 27,
                        "category": "物理电子学",
                        "draggable": "true",
                        "value": 9

                    },
                    {
                        "name": "量子通信",
                        "symbolSize": 30,
                        "category": "量子信息",
                        "draggable": "true",
                        "value": 10

                    },
                    {
                        "name": "理论物理",
                        "symbolSize": 33,
                        "category": "理论物理",
                        "draggable": "true",
                        "value": 11

                    },
                    {
                        "name": "高分子化学与物理",
                        "symbolSize": 36,
                        "category": "高分子化学与物理",
                        "draggable": "true",
                        "value": 12

                    },
                    {
                        "name": "微电子与固体电子",
                        "symbolSize": 42,
                        "category": "微电子与固体电子",
                        "draggable": "true",
                        "value": 14

                    },
                    {
                        "name": "电子封装",
                        "symbolSize": 15,
                        "category": "电子封装",
                        "draggable": "true",
                        "value": 15

                    },
                    {
                        "name": "材料科学",
                        "symbolSize": 16,
                        "category": "材料科学",
                        "draggable": "true",
                        "value": 16

                    },
                    {
                        "name": "电子设计自动化",
                        "symbolSize": 17,
                        "category": "电子设计自动化",
                        "draggable": "true",
                        "value": 17

                    },
                    {
                        "name": "基因工程",
                        "symbolSize": 18,
                        "category": "基因工程",
                        "draggable": "true",
                        "value": 18

                    },
                    {
                        "name": "细胞生物学",
                        "symbolSize": 19,
                        "category": "细胞生物学",
                        "draggable": "true",
                        "value": 19

                    },
                    {
                        "name": "分子生物学",
                        "symbolSize": 20,
                        "category": "分子生物学",
                        "draggable": "true",
                        "value": 20

                    },
                    {
                        "name": "遗传学",
                        "symbolSize": 21,
                        "category": "遗传学",
                        "draggable": "true",
                        "value": 21

                    },
                    {
                        "name": "基础医学",
                        "symbolSize": 22,
                        "category": "基础医学",
                        "draggable": "true",
                        "value": 22

                    },
                    {
                        "name": "机器学习",
                        "symbolSize": 23,
                        "category": "机器学习",
                        "draggable": "true",
                        "value": 23

                    },
                    {
                        "name": "应用数学",
                        "symbolSize": 24,
                        "category": "应用数学",
                        "draggable": "true",
                        "value": 24

                    },
                    {
                        "name": "云计算",
                        "symbolSize": 25,
                        "category": "云计算",
                        "draggable": "true",
                        "value": 25

                    },
                    {
                        "name": "数据挖掘",
                        "symbolSize": 26,
                        "category": "数据挖掘",
                        "draggable": "true",
                        "value": 26

                    },
                    {
                        "name": "超级计算",
                        "symbolSize": 27,
                        "category": "超级计算",
                        "draggable": "true",
                        "value": 27

                    },
                    {
                        "name": "工业网络技术",
                        "symbolSize": 28,
                        "category": "工业网络技术",
                        "draggable": "true",
                        "value": 28

                    },
                    {
                        "name": "数据科学",
                        "symbolSize": 29,
                        "category": "数据科学",
                        "draggable": "true",
                        "value": 29

                    },
                    {
                        "name": "网络安全",
                        "symbolSize": 30,
                        "category": "网络安全",
                        "draggable": "true",
                        "value": 30

                    },
                    {
                        "name": "信息安全",
                        "symbolSize": 31,
                        "category": "信息安全",
                        "draggable": "true",
                        "value": 31

                    },
                    {
                        "name": "人工智能",
                        "symbolSize": 30,
                        "category": "人工智能",
                        "draggable": "true",
                        "value": 25

                    },
                    {
                        "name": "量子信息",
                        "symbolSize": 50,
                        "category": "量子信息",
                        "draggable": "true",
                        "value": 50

                    },
                    {
                        "name": "集成电路（半导体）",
                        "symbolSize": 60,
                        "category": "集成电路（半导体）",
                        "draggable": "true",
                        "value": 62

                    },
                    {
                        "name": "生命科学",
                        "symbolSize": 60,
                        "category": "生命科学",
                        "draggable": "true",
                        "value": 100

                    },
                    {
                        "name": "大数据",
                        "symbolSize": 60,
                        "category": "大数据",
                        "draggable": "true",
                        "value": 125

                    },
                    {
                        "name": "工业互联网",
                        "symbolSize": 60,
                        "category": "工业互联网",
                        "draggable": "true",
                        "value": 118

                    },
                    {
                        "name": "紧缺行业方向",
                        "symbolSize": 120,
                        "category": "紧缺行业方向",
                        "draggable": "true",
                        "value": 480

                    }],
                links: [{
                    "source": "人工智能",
                    "target": "模式识别与智能系统"
                },
                    {
                        "source": "人工智能",
                        "target": "信息与通信工程"
                    },
                    {
                        "source": "人工智能",
                        "target": "控制科学"
                    },
                    {
                        "source": "人工智能",
                        "target": "智能科学"
                    },
                    {
                        "source": "人工智能",
                        "target": "生物信息处理"
                    },
                    {
                        "source": "量子信息",
                        "target": "凝聚态物理"
                    },
                    {
                        "source": "量子信息",
                        "target": "物理电子学"
                    },
                    {
                        "source": "量子信息",
                        "target": "量子通信"
                    },
                    {
                        "source": "量子信息",
                        "target": "理论物理"
                    },
                    {
                        "source": "量子信息",
                        "target": "高分子化学与物理"
                    },
                    {
                        "source": "集成电路（半导体）",
                        "target": "微电子与固体电子"
                    },
                    {
                        "source": "集成电路（半导体）",
                        "target": "电子封装"
                    },
                    {
                        "source": "集成电路（半导体）",
                        "target": "材料科学"
                    },
                    {
                        "source": "集成电路（半导体）",
                        "target": "电子设计自动化"
                    },
                    {
                        "source": "生命科学",
                        "target": "基因工程"
                    },
                    {
                        "source": "生命科学",
                        "target": "细胞生物学"
                    },
                    {
                        "source": "生命科学",
                        "target": "分子生物学"
                    },
                    {
                        "source": "生命科学",
                        "target": "遗传学"
                    },
                    {
                        "source": "生命科学",
                        "target": "基础医学"
                    },
                    {
                        "source": "大数据",
                        "target": "机器学习"
                    },
                    {
                        "source": "大数据",
                        "target": "应用数学"
                    },
                    {
                        "source": "大数据",
                        "target": "云计算"
                    },
                    {
                        "source": "大数据",
                        "target": "数据挖掘"
                    },
                    {
                        "source": "大数据",
                        "target": "超级计算"
                    },
                    {
                        "source": "工业互联网",
                        "target": "工业网络技术"
                    },
                    {
                        "source": "工业互联网",
                        "target": "数据科学"
                    },
                    {
                        "source": "工业互联网",
                        "target": "网络安全"
                    },
                    {
                        "source": "工业互联网",
                        "target": "信息安全"
                    },
                    {
                        "source": "紧缺行业方向",
                        "target": "人工智能"
                    },
                    {
                        "source": "紧缺行业方向",
                        "target": "量子信息"
                    },
                    {
                        "source": "紧缺行业方向",
                        "target": "集成电路（半导体）"
                    },
                    {
                        "source": "紧缺行业方向",
                        "target": "生命科学"
                    },
                    {
                        "source": "紧缺行业方向",
                        "target": "大数据"
                    },
                    {
                        "source": "紧缺行业方向",
                        "target": "工业互联网"
                    }],
                // 二级配色数据
                categories: [{
                    'name': '模式识别与智能系统'
                },
                    {
                        'name': '信息与通信工程'
                    },
                    {
                        'name': '控制科学'
                    },
                    {
                        'name': '智能科学'
                    },
                    {
                        'name': '生物信息处理'
                    },
                    {
                        'name': '凝聚态物理'
                    },
                    {
                        'name': '物理电子学'
                    },
                    {
                        'name': '量子通信'
                    },
                    {
                        'name': '理论物理'
                    },
                    {
                        'name': '高分子化学与物理'
                    },
                    {
                        'name': '微电子与固体电子'
                    },
                    {
                        'name': '电子封装'
                    },
                    {
                        'name': '材料科学'
                    },
                    {
                        'name': '电子设计自动化'
                    },
                    {
                        'name': '基因工程'
                    },
                    {
                        'name': '细胞生物学'
                    },
                    {
                        'name': '分子生物学'
                    },
                    {
                        'name': '遗传学'
                    },
                    {
                        'name': '基础医学'
                    },
                    {
                        'name': '机器学习'
                    },
                    {
                        'name': '应用数学'
                    },
                    {
                        'name': '云计算'
                    },
                    {
                        'name': '数据挖掘'
                    },
                    {
                        'name': '超级计算'
                    },
                    {
                        'name': '工业网络技术'
                    },
                    {
                        'name': '数据科学'
                    },
                    {
                        'name': '网络安全'
                    },
                    {
                        'name': '信息安全'
                    },
                    {
                        'name': '人工智能'
                    },
                    {
                        'name': '量子信息'
                    },
                    {
                        'name': '集成电路（半导体）'
                    },
                    {
                        'name': '生命科学'
                    },
                    {
                        'name': '大数据'
                    },
                    {
                        'name': '工业互联网'
                    },
                    {
                        'name': '紧缺行业方向'
                    }],
                focusNodeAdjacency: true,
                //只能缩放
                roam: "scale",
                //标签
                label: {
                    normal: {
                        show: true,
                        //定位上方
                        position: 'top',
                        //字体设置
                        textStyle: {
                            color: "black"
                            // fontWeight: "bold"
                        }

                    }

                },
                //连接线的配置
                lineStyle: {
                    width: 10,
                    normal: {
                        color: 'source',
                        curveness: 0,
                        width: 3,
                        type: "solid"
                    }
                },
                //圆盘颜色
                color: [ '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc', '#cfb850', '#4ee0d7', '#e3698c', '#eca389', '#6939e4', '#9f73c7', '#6056e9', '#c97648', '#0d5d64']
                // 6056e9
                // color: []
            }]
        };