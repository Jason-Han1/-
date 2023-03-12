option = {
    title: {
        text: ''
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12
            },
        }
    },
    legend: {
        x: "center",
        show: true,
        data: ["夫妻", "朋友", '亲戚']
    },
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [{
                name: '夫妻',
                itemStyle: {
                    normal: {
                        color: "#109800",
                    }
                }
            }, {
                name: '朋友',
                itemStyle: {
                    normal: {
                        color: "#4592FF",
                    }
                }
            }, {
                name: '亲戚',
                itemStyle: {
                    normal: {
                        color: "#3592F",
                    }
                }
            }],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                }
            },
            force: {
                repulsion: 1000
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: "{c}"
                }
            },
            data: [{
                name: '徐贱云',
                draggable: true,
            }, {
                name: '冯可梁',
                category: 0,
                draggable: true,
            }, {
                name: '邓志荣',
                category: 1,
                draggable: true,
            }],
            links: [{
                source: '徐贱云',
                target: '冯可梁',
                category: 0,
                value: '夫妻'
            },{
                source: '徐贱云',
                target: '邓志荣',
                category: 1,
                value: '朋友'
            }],
            lineStyle: {
                normal: {
                    opacity: 1,
                    width: 1,
                    curveness: 0
                }
            }
        }
    ]
};