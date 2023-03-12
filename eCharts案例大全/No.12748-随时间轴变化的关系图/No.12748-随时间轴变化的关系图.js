var nodes = [

    {
        category: '主线',
        name: '1',
        symbolSize: 23
    },
];
var nodes1 = [{
    category: '主线',
    name: '2',
    symbolSize: 17
}];
var nodes2 = [{
    category: '主线',
    name: '3',
    symbolSize: 23
}, ];
var nodes3 = [{
    category: '主线',
    name: '4',
    symbolSize: 23
}, ];
var categories = [


    {
        name: '主线'
    },

    {
        name: '地点'
    },
    {
        name: '专题'
    },

    {
        name: '活动'
    },
    {
        name: '题材'
    },
    {
        name: '人物'
    },
    {
        name: '阅读感受'
    },
    {
        name: '书'
    },
];

var links = [];
var links1 = [{
    source: '1',
    target: '2'
}, ];
var links2 = [{
        source: '1',
        target: '2'
    },
    {
        source: '2',
        target: '3'
    },
];
var links3 = [{
        source: '1',
        target: '2'
    },
    {
        source: '2',
        target: '3'
    },
    {
        source: '3',
        target: '4'
    },
];


option = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 3000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '1', '2', '3', '4'
            ],
            label: {
                formatter: function(s) {
                    return (new Date(s)).getFullYear();
                }
            }
        },
        title: {
            text: '2018年阅读宇宙',
            subtext: '书籍就像人类智慧的宇宙，每本书就像一个孤独的星球。\n真理的线索分散在不同的书籍中。\n通过书将自己理解到的内容联系在一起。\n将一年选择阅读的书籍的隐秘的关联性显现出来。',
            textStyle: {
                fontSize: 25,
            }
        },
        backgroundColor: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: 'red' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'blue' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            }
        },
        legend: [{
            //selectedMode: 'single',
            top: 30,
            left: 'right',
            data: categories,
            show: true,
            //selected: selected1

        }],
        tooltip: {},
        animationDurationUpdate: 2,
        animationEasingUpdate: 'quinticInOut',

        series: [{
            type: 'graph',
            ribbonType: true,
            //layout: 'circular',
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [9, 10],
            circular: {
                rotateLabel: true
            },


            layout: 'force',

            force: {
                //initLayout: 'circular',
                repulsion: 300,
                gravity: 0.5,
                edgeLength: [1, 10],
                layoutAnimation: true,
            },

            roam: true,
            focusNodeAdjacency: true,
            hoverAnimation: true,
            label: {
                normal: {
                    position: 'inside',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 10,
                    formatter: '{b}',
                }
            },
            draggable: true,
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 2,
                    shadowBlur: 10,
                    shadowColor: 'rgba(255,255, 255, 0.8)'
                }
            },

            lineStyle: {
                color: 'target',
                curveness: 0.3
            },
            emphasis: {
                lineStyle: {
                    width: 10
                }
            },
            categories: categories,
            data: nodes,
            links: links
        }]
    },
    options: [{
            series: [{
                data: nodes,
                // links: [],
                links: links
            }]
        }, {
            series: [{
                data: nodes1,
                // links: [],
                links: links1
            }]
        },
        {
            series: [{
                data: nodes2,
                links: links2
            }]
        },
        {
            series: [{
                data: nodes3,
                links: links3
            }]
        },

    ]
};