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
                name: '光伏+',
                type: 'graph',
                layout: 'force',

                force: {
                    //元素之间的间距
                    repulsion: 300
                },
                data: [{
                    "name": "光伏+蔬菜",
                    "symbolSize": 9,
                    "category": "光伏+蔬菜",
                    "draggable": "true",
                    "value": 3

                },
                    {
                        "name": "光伏+水果",
                        "symbolSize": 12,
                        "category": "光伏+水果",
                        "draggable": "true",
                        "value": 4

                    },
                    {
                        "name": "光伏+菌落",
                        "symbolSize": 15,
                        "category": "光伏+菌落",
                        "draggable": "true",
                        "value": 5

                    },
                    {
                        "name": "光伏+药材",
                        "symbolSize": 18,
                        "category": "光伏+药材",
                        "draggable": "true",
                        "value": 6

                    },
                    {
                        "name": "光伏+苗木花卉",
                        "symbolSize": 21,
                        "category": "光伏+苗木花卉",
                        "draggable": "true",
                        "value": 7

                    },
                    {
                        "name": "光伏+畜牧",
                        "symbolSize": 24,
                        "category": "光伏+畜牧",
                        "draggable": "true",
                        "value": 8

                    },
                    {
                        "name": "光伏+渔业",
                        "symbolSize": 27,
                        "category": "光伏+渔业",
                        "draggable": "true",
                        "value": 9

                    },
                    {
                        "name": "光伏+禽类",
                        "symbolSize": 30,
                        "category": "光伏+禽类",
                        "draggable": "true",
                        "value": 10

                    },
                    {
                        "name": "光伏+其他",
                        "symbolSize": 33,
                        "category": "光伏+其他",
                        "draggable": "true",
                        "value": 11

                    },
                    {
                        "name": "光伏+储能",
                        "symbolSize": 42,
                        "category": "光伏+储能",
                        "draggable": "true",
                        "value": 14

                    },
                    {
                        "name": "光伏+建筑能效",
                        "symbolSize": 15,
                        "category": "光伏+建筑能效",
                        "draggable": "true",
                        "value": 15

                    },
                    {
                        "name": "光伏+供能",
                        "symbolSize": 16,
                        "category": "光伏+供能",
                        "draggable": "true",
                        "value": 16

                    },
                    {
                        "name": "光伏+高耗能行业",
                        "symbolSize": 17,
                        "category": "光伏+高耗能行业",
                        "draggable": "true",
                        "value": 17

                    },
                    {
                        "name": "光伏+基因工程",
                        "symbolSize": 18,
                        "category": "光伏+基因工程",
                        "draggable": "true",
                        "value": 18

                    },
                    {
                        "name": "光伏+细胞生物学",
                        "symbolSize": 19,
                        "category": "光伏+细胞生物学",
                        "draggable": "true",
                        "value": 19

                    },
                    {
                        "name": "光伏+分子生物学",
                        "symbolSize": 20,
                        "category": "光伏+分子生物学",
                        "draggable": "true",
                        "value": 20

                    },
                    {
                        "name": "光伏+遗传学",
                        "symbolSize": 21,
                        "category": "光伏+遗传学",
                        "draggable": "true",
                        "value": 21

                    },
                    {
                        "name": "光伏+基础医学",
                        "symbolSize": 22,
                        "category": "光伏+基础医学",
                        "draggable": "true",
                        "value": 22

                    },
                    {
                        "name": "光伏+机器学习",
                        "symbolSize": 23,
                        "category": "光伏+机器学习",
                        "draggable": "true",
                        "value": 23

                    },
                    {
                        "name": "光伏+5G",
                        "symbolSize": 24,
                        "category": "光伏+5G",
                        "draggable": "true",
                        "value": 24

                    },
                    {
                        "name": "光伏+云计算",
                        "symbolSize": 25,
                        "category": "光伏+云计算",
                        "draggable": "true",
                        "value": 25

                    },
                    {
                        "name": "光伏+数据挖掘",
                        "symbolSize": 26,
                        "category": "光伏+数据挖掘",
                        "draggable": "true",
                        "value": 26

                    },
                    {
                        "name": "光伏+超级计算",
                        "symbolSize": 27,
                        "category": "光伏+超级计算",
                        "draggable": "true",
                        "value": 27

                    },
                    {
                        "name": "光伏+旅游",
                        "symbolSize": 28,
                        "category": "光伏+旅游",
                        "draggable": "true",
                        "value": 28

                    },
                    {
                        "name": "光伏+广告",
                        "symbolSize": 29,
                        "category": "光伏+广告",
                        "draggable": "true",
                        "value": 29

                    },
                    {
                        "name": "光伏+市政服务",
                        "symbolSize": 30,
                        "category": "光伏+市政服务",
                        "draggable": "true",
                        "value": 30

                    },
                    {
                        "name": "光伏+城市交通",
                        "symbolSize": 31,
                        "category": "光伏+城市交通",
                        "draggable": "true",
                        "value": 31

                    },
                    {
                        "name": "种植业",
                        "symbolSize": 30,
                        "category": "种植业",
                        "draggable": "true",
                        "value": 25

                    },
                    {
                        "name": "养殖业",
                        "symbolSize": 50,
                        "category": "养殖业",
                        "draggable": "true",
                        "value": 51

                    },
                    {
                        "name": "工业",
                        "symbolSize": 60,
                        "category": "工业",
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
                        "name": "云服务",
                        "symbolSize": 60,
                        "category": "云服务",
                        "draggable": "true",
                        "value": 118

                    },
                    {
                        "name": "光伏",
                        "symbolSize": 120,
                        "category": "光伏",
                        "draggable": "true",
                        "value": 480

                    }],
                links: [{
                    "source": "种植业",
                    "target": "光伏+蔬菜"
                },
                    {
                        "source": "种植业",
                        "target": "光伏+水果"
                    },
                    {
                        "source": "种植业",
                        "target": "光伏+菌落"
                    },
                    {
                        "source": "种植业",
                        "target": "光伏+药材"
                    },
                    {
                        "source": "种植业",
                        "target": "光伏+苗木花卉"
                    },
                    {
                        "source": "养殖业",
                        "target": "光伏+畜牧"
                    },
                    {
                        "source": "养殖业",
                        "target": "光伏+渔业"
                    },
                    {
                        "source": "养殖业",
                        "target": "光伏+禽类"
                    },
                    {
                        "source": "养殖业",
                        "target": "光伏+其他"
                    },
                    {
                        "source": "工业",
                        "target": "光伏+储能"
                    },
                    {
                        "source": "工业",
                        "target": "光伏+建筑能效"
                    },
                    {
                        "source": "工业",
                        "target": "光伏+供能"
                    },
                    {
                        "source": "工业",
                        "target": "光伏+高耗能行业"
                    },
                    {
                        "source": "生命科学",
                        "target": "光伏+基因工程"
                    },
                    {
                        "source": "生命科学",
                        "target": "光伏+细胞生物学"
                    },
                    {
                        "source": "生命科学",
                        "target": "光伏+分子生物学"
                    },
                    {
                        "source": "生命科学",
                        "target": "光伏+遗传学"
                    },
                    {
                        "source": "生命科学",
                        "target": "光伏+基础医学"
                    },
                    {
                        "source": "大数据",
                        "target": "光伏+机器学习"
                    },
                    {
                        "source": "大数据",
                        "target": "光伏+5G"
                    },
                    {
                        "source": "大数据",
                        "target": "光伏+云计算"
                    },
                    {
                        "source": "大数据",
                        "target": "光伏+数据挖掘"
                    },
                    {
                        "source": "大数据",
                        "target": "光伏+超级计算"
                    },
                    {
                        "source": "云服务",
                        "target": "光伏+旅游"
                    },
                    {
                        "source": "云服务",
                        "target": "光伏+广告"
                    },
                    {
                        "source": "云服务",
                        "target": "光伏+市政服务"
                    },
                    {
                        "source": "云服务",
                        "target": "光伏+城市交通"
                    },
                    {
                        "source": "光伏",
                        "target": "种植业"
                    },
                    {
                        "source": "光伏",
                        "target": "养殖业"
                    },
                    {
                        "source": "光伏",
                        "target": "工业"
                    },
                    {
                        "source": "光伏",
                        "target": "生命科学"
                    },
                    {
                        "source": "光伏",
                        "target": "大数据"
                    },
                    {
                        "source": "光伏",
                        "target": "云服务"
                    }],
                // 二级配色数据
                categories: [{
                    'name': '光伏+蔬菜'
                },
                    {
                        'name': '光伏+水果'
                    },
                    {
                        'name': '光伏+菌落'
                    },
                    {
                        'name': '光伏+药材'
                    },
                    {
                        'name': '光伏+苗木花卉'
                    },
                    {
                        'name': '光伏+畜牧'
                    },
                    {
                        'name': '光伏+渔业'
                    },
                    {
                        'name': '光伏+禽类'
                    },
                    {
                        'name': '光伏+其他'
                    },
                    {
                        'name': '光伏+储能'
                    },
                    {
                        'name': '光伏+建筑能效'
                    },
                    {
                        'name': '光伏+供能'
                    },
                    {
                        'name': '光伏+高耗能行业'
                    },
                    {
                        'name': '光伏+基因工程'
                    },
                    {
                        'name': '光伏+细胞生物学'
                    },
                    {
                        'name': '光伏+分子生物学'
                    },
                    {
                        'name': '光伏+遗传学'
                    },
                    {
                        'name': '光伏+基础医学'
                    },
                    {
                        'name': '光伏+机器学习'
                    },
                    {
                        'name': '光伏+5G'
                    },
                    {
                        'name': '光伏+云计算'
                    },
                    {
                        'name': '光伏+数据挖掘'
                    },
                    {
                        'name': '光伏+超级计算'
                    },
                    {
                        'name': '光伏+旅游'
                    },
                    {
                        'name': '光伏+广告'
                    },
                    {
                        'name': '光伏+市政服务'
                    },
                    {
                        'name': '光伏+城市交通'
                    },
                    {
                        'name': '种植业'
                    },
                    {
                        'name': '养殖业'
                    },
                    {
                        'name': '工业'
                    },
                    {
                        'name': '生命科学'
                    },
                    {
                        'name': '大数据'
                    },
                    {
                        'name': '云服务'
                    },
                    {
                        'name': '光伏'
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