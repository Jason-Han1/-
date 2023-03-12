var links1 = [{
        source: 0,
        target: 2,

    },
    {
        source: 1,
        target: 2,

    },
    {
        source: 2,
        target: 3,
    },
    {
        source: 2,
        target: 4,
    }, {
        source: 2,
        target: 5,
    }
];
var links2 = [{
        source: 0,
        target: 2,

    },
    {
        source: 1,
        target: 2,

    },
    {
        source: 2,
        target: 3,
    },
    {
        source: 2,
        target: 4,
    } 
];
var data1 = [
    {
        name: '张三',
        value: 30,
        category: 0
    }, {
        name: '李四',
        value: 30,
        category: 0
    }, {
        name: '05.03-05.30',
        symbolSize: [150, 100],
        value: 40,
        category: 1
    }, {
        name: '王五',
        value: 30,
        category: 0
    }, {
        name: '赵六',
        value: 30,
        category: 0
    }, {
        name: '孙七',
        value: 30,
        category: 0
    }
    ];
var data2 = [
    {
        name: '关羽',
        value: 30,
        category: 0
    }, {
        name: '赵云',
        value: 30,
        category: 0
    }, {
        name: '06.03-06.30',
        symbolSize: [150, 100],
        value: 40,
        category: 1
    }, {
        name: '刘备',
        value: 30,
        category: 0
    }, {
        name: '曹操',
        value: 30,
        category: 0
    }
    ]
    
var data = {
    timeline: ['links1','links2'],
    dataot: [{
        series: [{
            data:data1,
            links: links1,
        }]
    },
    {
        series: [{
            data:data2,
            links: links2,
        }]
    },
    ],
}



option = {
    baseOption: {
        backgroundColor: 'rgba(5, 38, 75, 0.6)',
        title: {
            text: '人员关系情况',
            textStyle: {
                color: '#fff',
            }
        },
        timeline: {
            axisType: 'category',
            show: false,
            autoPlay: true,
            playInterval: 5000,
            data: data.timeline,
        },
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'graph',
            layout: 'force',
                   force: {
            repulsion: 1000,
            edgeLength: 180
        },
            symbolSize: (value) => {
                return value * 2;
            },
            coordinateSystem: null,
            label: {
                normal: {
                    show: true,
                    // position: 'bottom',
                    color: '#ffffff'
                }
            },
            // edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: 8,
            //数据之间的关系
            categories: [{
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            colorStops: [{
                                offset: 0,
                                color: '#0e3861' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#fcc709' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
                label: {
                    normal: {
                        fontSize: '12'
                    }
                },
            }, {
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            colorStops: [{
                                offset: 0,
                                color: '#376585' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#28c9fd' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }

                    }
                },
                label: {
                    normal: {
                        fontSize: '14'
                    }
                },
            }, ],
            lineStyle: {
                normal: {
                    width: 2.5,
                    curveness: 0.5,
                    color: {
                        type: 'linear',
                        colorStops: [{
                            offset: 0,
                            color: '#28c9fd' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#fcc709' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                }
            },
        }]
    },
    options: data.dataot
};