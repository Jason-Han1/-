option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: "轿车",
        subtext: "兴趣点",
        top: "top",
        left: "center"
    },
    tooltip: {},
    legend: [{
        formatter: function(name) {
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        selectedMode: 'false',
        bottom: 20,
        data: ['娱乐', '母婴育儿', '时事', '搞笑', '汽车', '动漫', '美食', '宠物', '科学', '财经', '军事', '健康养生', '音乐', '旅游', '社会', '历史', '体育', '家居', '情感', '游戏', '文化', '时尚', '教育', '科技', '星座运势', '数码', '国际']
    }],
    toolbox: {
        show: true,
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
        name: '轿车',
        type: 'graph',
        layout: 'force',

        force: {
            repulsion: 50
        },
        data: [{
            "name": "轿车",
            // "x": 0,
            // y: 0,
            "symbolSize": 50,
            "draggable": "true",
            "value": 20,
            "itemStyle": {
                normal: {
                    color: '#FF0000'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#FFFFFF'
                }
            }
        }, {
            "name": "娱乐",
            "value": 3,
            "symbolSize": 27.04,
            "category": "娱乐",
            "draggable": "true",
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "母婴育儿",
            "value": 4.58,
            "symbolSize": 0.94,
            "category": "母婴育儿",
            "draggable": "true",
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "时事",
            "symbolSize": 3.44,
            "category": "时事",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "搞笑",
            "symbolSize": 1.56,
            "category": "搞笑",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "汽车",
            "value": 6,
            "symbolSize": 4.83,
            "category": "汽车",
            "draggable": "true",
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "动漫",
            "symbolSize": 0.77,
            "category": "动漫",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "美食",
            "symbolSize": 1.24,
            "category": "美食",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "宠物",
            "symbolSize": 0.55,
            "category": "宠物",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "科学",
            "symbolSize": 0.71,
            "category": "科学",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "财经",
            "symbolSize": 2.4,
            "category": "财经",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "军事",
            "symbolSize":3.13,
            "category": "军事",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "健康养生",
            "symbolSize": 1.02,
            "category": "健康养生",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "音乐",
            "symbolSize": 2.28,
            "category": "音乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "旅游",
            "value": 5,
            "symbolSize": 1.25,
            "category": "旅游",
            "draggable": "true",
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "社会",
            "symbolSize": 1.05,
            "category": "社会",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "历史",
            "symbolSize": 1.45,
            "category": "历史",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "体育",
            "symbolSize": 2.47,
            "category": "体育",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "家居",
            "symbolSize": 0.43,
            "category": "家居",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "情感",
            "symbolSize": 0.46,
            "category": "情感",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "游戏",
            "value": 6,
            "symbolSize": 1.03,
            "category": "游戏",
            "draggable": "true",
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "文化",
            "symbolSize": 0.87,
            "category": "文化",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "时尚",
            "symbolSize": 0.56,
            "category": "时尚",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "教育",
            "symbolSize": 0.78,
            "category": "教育",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "科技",
            "symbolSize": 0.53,
            "category": "科技",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "星座运势",
            "symbolSize": 0.14,
            "category": "星座运势",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "数码",
            "symbolSize": 0.13,
            "category": "数码",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "国际",
            "value": 10,
            "symbolSize": 0.15,
            "category": "国际",
            "draggable": "true",
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "影视",
            "value": 10,
            "symbolSize": 0,
            "category": "影视",
            "draggable": "true",
            "itemStyle": {
                normal: {
                    color: '#00BFFF'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#000000'
                }
            }
        }, {
            "name": "伦理片",
            "symbolSize": 4.43,
            "category": "娱乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "影视周边",
            "symbolSize": 3.13,
            "category": "娱乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "武侠片",
            "symbolSize": 2.26,
            "category": "娱乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "明星",
            "symbolSize": 1.94,
            "category": "娱乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "军旅片",
            "symbolSize": 1.23,
            "category": "娱乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "神话片",
            "symbolSize": 1.16,
            "category": "娱乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "动作片",
            "value": 6,
            "symbolSize": 1.71,
            "category": "娱乐",
            "draggable": "true",
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "爱情片",
            "value": 6,
            "symbolSize": 2.41,
            "category": "娱乐",
            "draggable": "true",
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "战争片",
            "symbolSize": 3.77,
            "category": "娱乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "犯罪片",
            "symbolSize": 1.92,
            "category": "娱乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "情感综艺",
            "symbolSize": 0.87,
            "category": "娱乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "职场片",
            "symbolSize": 0.63,
            "category": "娱乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "脱口秀",
            "symbolSize": 0.45,
            "category": "娱乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "功夫片",
            "symbolSize": 0.37,
            "category": "娱乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "喜剧片",
            "symbolSize": 1.08,
            "category": "娱乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "宫廷片",
            "symbolSize": 0.92,
            "category": "娱乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "恐怖片",
            "symbolSize": 0.74,
            "category": "娱乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "历史片",
            "symbolSize": 0.74,
            "category": "娱乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "娱乐周边",
            "symbolSize": 0.9,
            "category": "娱乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "早期教育",
            "symbolSize": 4.02,
            "category": "母婴育儿",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "民生",
            "symbolSize": 1.42,
            "category": "时事",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "法制",
            "symbolSize": 0.69,
            "category": "时事",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "地区发展",
            "symbolSize": 0.45,
            "category": "时事",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "车评",
            "symbolSize": 3.51,
            "category": "汽车",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "汽车保养",
            "symbolSize": 0.74,
            "category": "汽车",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "汽车配件",
            "symbolSize": 0.5,
            "category": "汽车",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        },  {
            "name": "菜谱",
            "symbolSize": 0.56,
            "category": "美食",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "动物界",
            "value": 8,
            "symbolSize": 1.25,
            "category": "宠物",
            "draggable": "true",
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "太空探索",
            "symbolSize": 1.33,
            "category": "科学",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "健康",
            "symbolSize": 0.81,
            "category": "健康养生",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "三农",
            "symbolSize": 2.15,
            "category": "财经",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        },{
            "name": "流行音乐",
            "symbolSize": 2.08,
            "category": "音乐",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "武器装备",
            "symbolSize": 0.71,
            "category": "军事",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "环球军事",
            "symbolSize": 0.55,
            "category": "军事",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        }, {
            "name": "军事周边",
            "symbolSize": 0.58,
            "category": "军事",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        },{
            "name": "军人风采",
            "symbolSize": 0.63,
            "category": "军事",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        },{
            "name": "幽默短剧",
            "symbolSize": 1,
            "category": "搞笑",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        },{
            "name": "拳击",
            "symbolSize": 0.63,
            "category": "体育",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        },{
            "name": "旅途趣闻",
            "symbolSize": 0.62,
            "category": "旅游",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        },{
            "name": "旅游休闲",
            "symbolSize": 0.6,
            "category": "旅游",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        },{
            "name": "奇闻轶事",
            "symbolSize": 0.6,
            "category": "社会",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        },{
            "name": "中国历史",
            "symbolSize": 0.48,
            "category": "历史",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        },{
            "name": "野史",
            "symbolSize": 0.57,
            "category": "历史",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        },{
            "name": "兴趣学习",
            "symbolSize": 0.52,
            "category": "教育",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        },{
            "name": "两性",
            "symbolSize": 0.47,
            "category": "情感",
            "draggable": "true",
            "value": 1,
            "itemStyle": {
                normal: {
                    color: '#FFA500'
                }
            },
            "label": {
                normal: {
                    position: 'inside',
                    color: '#8B0000'
                }
            }
        },],
        links: [{
            "source": "轿车",
            "target": "娱乐"
        }, {
            "source": "娱乐",
            "target": "伦理片"
        }, {
            "source": "娱乐",
            "target": "影视周边"
        }, {
            "source": "娱乐",
            "target": "武侠片"
        }, {
            "source": "娱乐",
            "target": "明星"
        }, {
            "source": "娱乐",
            "target": "动作片"
        }, {
            "source": "娱乐",
            "target": "爱情片"
        }, {
            "source": "娱乐",
            "target": "战争片"
        }, {
            "source": "娱乐",
            "target": "犯罪片"
        }, {
            "source": "娱乐",
            "target": "军旅片"
        }, {
            "source": "娱乐",
            "target": "神话片"
        }, {
            "source": "娱乐",
            "target": "情感综艺"
        }, {
            "source": "娱乐",
            "target": "职场片"
        }, {
            "source": "娱乐",
            "target": "喜剧片"
        },  {
            "source": "娱乐",
            "target": "宫廷片"
        },  {
            "source": "娱乐",
            "target": "恐怖片"
        },  {
            "source": "娱乐",
            "target": "历史片"
        },  {
            "source": "娱乐",
            "target": "娱乐周边"
        },  {
            "source": "娱乐",
            "target": "脱口秀"
        },  {
            "source": "娱乐",
            "target": "功夫片"
        }, {
            "source": "轿车",
            "target": "母婴育儿"
        }, {
            "source": "母婴育儿",
            "target": "早期教育"
        }, {
            "source": "轿车",
            "target": "时事"
        }, {
            "source": "时事",
            "target": "民生"
        }, {
            "source": "时事",
            "target": "法制"
        }, {
            "source": "时事",
            "target": "地区发展"
        }, {
            "source": "轿车",
            "target": "搞笑"
        },  {
            "source": "搞笑",
            "target": "幽默短剧"
        }, {
            "source": "轿车",
            "target": "汽车"
        }, {
            "source": "汽车",
            "target": "车评"
        }, {
            "source": "汽车",
            "target": "汽车保养"
        }, {
            "source": "汽车",
            "target": "汽车配件"
        }, {
            "source": "轿车",
            "target": "动漫"
        }, {
            "source": "轿车",
            "target": "美食"
        }, {
            "source": "美食",
            "target": "菜谱"
        }, {
            "source": "轿车",
            "target": "宠物"
        }, {
            "source": "宠物",
            "target": "动物界"
        }, {
            "source": "轿车",
            "target": "科学"
        }, {
            "source": "科学",
            "target": "太空探索"
        }, {
            "source": "轿车",
            "target": "财经"
        }, {
            "source": "财经",
            "target": "三农"
        }, {
            "source": "轿车",
            "target": "军事"
        }, {
            "source": "军事",
            "target": "武器装备"
        }, {
            "source": "军事",
            "target": "环球军事"
        }, {
            "source": "军事",
            "target": "军事周边"
        }, {
            "source": "军事",
            "target": "军人风采"
        }, {
            "source": "轿车",
            "target": "健康养生"
        }, {
            "source": "健康养生",
            "target": "健康"
        }, {
            "source": "轿车",
            "target": "音乐"
        }, {
            "source": "音乐",
            "target": "流行音乐"
        }, {
            "source": "轿车",
            "target": "旅游"
        }, {
            "source": "旅游",
            "target": "旅途趣闻"
        },{
            "source": "旅游",
            "target": "旅游休闲"
        },  {
            "source": "轿车",
            "target": "社会"
        }, {
            "source": "社会",
            "target": "奇闻轶事"
        }, {
            "source": "轿车",
            "target": "历史"
        }, {
            "source": "历史",
            "target": "中国历史"
        }, {
            "source": "历史",
            "target": "野史"
        }, {
            "source": "轿车",
            "target": "体育"
        }, {
            "source": "体育",
            "target": "拳击"
        }, {
            "source": "轿车",
            "target": "家居"
        }, {
            "source": "轿车",
            "target": "情感"
        }, {
            "source": "情感",
            "target": "两性"
        }, {
            "source": "轿车",
            "target": "游戏"
        }, {
            "source": "轿车",
            "target": "文化"
        }, {
            "source": "轿车",
            "target": "时尚"
        }, {
            "source": "轿车",
            "target": "教育"
        }, {
            "source": "教育",
            "target": "兴趣学习"
        },{
            "source": "轿车",
            "target": "科技"
        }, {
            "source": "轿车",
            "target": "星座运势"
        }, {
            "source": "轿车",
            "target": "数码"
        }, {
            "source": "轿车",
            "target": "国际"
        }, {
            "source": "轿车",
            "target": "影视"
        }],
        categories: [{
            'name': '娱乐'
        }, {
            'name': '母婴育儿'
        }, {
            'name': '时事'
        }, {
            'name': '搞笑'
        }, {
            'name': '汽车'
        }, {
            'name': '动漫'
        }, {
            'name': '美食'
        }, {
            'name': '宠物'
        }, {
            'name': '科学'
        }, {
            'name': '财经'
        }, {
            'name': '军事'
        }, {
            'name': '健康养生'
        }, {
            'name': '音乐'
        }, {
            'name': '旅游'
        }, {
            'name': '社会'
        }, {
            'name': '历史'
        }, {
            'name': '体育'
        }, {
            'name': '家居'
        }, {
            'name': '情感'
        }, {
            'name': '游戏'
        }, {
            'name': '文化'
        }, {
            'name': '时尚'
        }, {
            'name': '教育'
        }, {
            'name': '科技'
        }, {
            'name': '星座运势'
        }, {
            'name': '数码'
        }, {
            'name': '国际'
        }, {
            'name': '影视'
        }],
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {

                show: true,
                position: 'top',

            }
        },
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};