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
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: 45,
            focusNodeAdjacency: false,
            //roam: true,
            draggable : false,
            categories: [{
                name: '朋友',
                itemStyle: {
                    normal: {
                        color: "#009800",
                    }
                }
            }, {
                name: '战友',
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
                category: 1,
                draggable: true,
            }, {
                name: '邓志荣',
                category: 1,
                draggable: true,
            }, {
                name: '李荣庆',
                category: 1,
                draggable: true,
            }, {
                name: '郑志勇',
                category: 1,
                draggable: true,
            }, {
                name: '赵英杰',
                category: 1,
                draggable: true,
            }, {
                name: '赵英杰1',
                category: 1,
                draggable: true,
            }, {
                name: '赵英杰2',
                category: 1,
                draggable: true,
            }],
            links: [{
                source: 0,
                target: 1,
                category: 0,
                value: '朋友'
            }, {
                source: 0,
                target: 2,
                value: '战友'
            }, {
                source: 0,
                target: 3,
                value: '房东'
            }, {
                source: 0,
                target: 4,
                value: '朋友'
            }, {
                source: 0,
                target: 5,
                value: '朋友'
            }, {
                source: 0,
                target: 6,
                value: '朋友'
            }, {
                source: 0,
                target: 7,
                value: '朋友'
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0
                }
            }
        }
    ]
};