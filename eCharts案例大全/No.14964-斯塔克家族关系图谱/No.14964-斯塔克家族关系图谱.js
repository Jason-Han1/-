option = {
    title: {
        text: '斯塔克家族关系图谱'
    },
    tooltip: {
        formatter: function(x) {
            return x.data.des;
        }
    },
    series: [{
        type: 'graph',
        layout: 'force',
        symbolSize: 80,
        roam: true,
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
            normal: {
                textStyle: {
                    fontSize: 20
                }
            }
        },
        force: {
            repulsion: 2500,
            edgeLength: [10, 50]
        },
        draggable: true,
        itemStyle: {
            normal: {
                color: '#4b565b'
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                color: '#4b565b'

            }
        },
        edgeLabel: {
            normal: {
                show: true,
                formatter: function(x) {
                    return x.data.name;
                }
            }
        },
        label: {
            normal: {
                show: true,
                textStyle: {}
            }
        },
        data: [{
            name: '班扬.斯塔克',
            des: '守夜人首席游骑兵',
            symbolSize: 100,
            itemStyle: {
                normal: {
                    color: 'red'
                }
            }
        }, {
            name: '艾德.斯塔克',
            des: '临冬城公爵，国王之手',
            itemStyle: {
                normal: {
                    color: 'red'
                }
            }
        }, {
            name: '凯瑟琳.斯塔克',
            des: '临冬城夫人',
            symbolSize: 100
        }, {
            name: '罗伯.斯塔克',
            des: '临冬城继承人',
            itemStyle: {
                normal: {
                    color: 'red'
                }
            }
        }, {
            name: '琼恩.雪诺',
            itemStyle: {
                normal: {
                    color: 'red'
                }
            }
        }, {
            name: '三傻.斯塔克',
            symbolSize: 100
        }, {
            name: '布兰.斯塔克',
            itemStyle: {
                normal: {
                    color: 'red'
                }
            }
        }, {
            name: '艾利亚.斯塔克',
        }, ],
        links: [{
            source: '艾德.斯塔克',
            target: '班扬.斯塔克',
            name: '兄弟',
            des: '班杨是艾德等弟弟'
        }, {
            source: '艾德.斯塔克',
            target: '凯瑟琳.斯塔克',
            name: '夫妻'
        }, {
            source: '艾德.斯塔克',
            target: '罗伯.斯塔克',
            name: "父子"
        }, {
            source: '艾德.斯塔克',
            target: '琼恩.雪诺',
            name: "私生子"
        }, {
            source: '艾德.斯塔克',
            target: '布兰.斯塔克',
            name: "父子"
        }, {
            source: '艾德.斯塔克',
            target: '三傻.斯塔克',
            name: "父女"
        }, {
            source: '艾德.斯塔克',
            target: '艾利亚.斯塔克',
            name: "父女"
        }, {
            source: '凯瑟琳.斯塔克',
            target: '艾利亚.斯塔克',
            name: "母女"
        }, {
            source: '凯瑟琳.斯塔克',
            target: '布兰.斯塔克',
            name: "母子"
        }, {
            source: '凯瑟琳.斯塔克',
            target: '三傻.斯塔克',
            name: "母女"
        }, {
            source: '凯瑟琳.斯塔克',
            target: '琼恩.雪诺',
            name: "母子"
        }, {
            source: '凯瑟琳.斯塔克',
            target: '罗伯.斯塔克',
            name: "母子"
        } ]
    }]
};