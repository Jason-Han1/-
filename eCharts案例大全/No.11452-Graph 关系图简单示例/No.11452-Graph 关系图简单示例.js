option = {
    title: {
        text: 'Graph 简单示例'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [{
                name: '公交站点1',
                x: 100,
                y: 300
            }, {
                name: '公交站点2',
                x: 300,
                y: 300
            }, {
                name: '公交站点3',
                x: 500,
                y: 300
            }, {
                name: '公交站点4',
                x: 700,
                y: 300
            }],
            // links: [],
            links: [{
                source: 0,
                target: 1,
                symbolSize: [5, 20],
                label: {
                    normal: {
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 5,
                        curveness: 0.2
                    }
                }
            }, {
                source: '公交站点2',
                target: '公交站点1',
                label: {
                    normal: {
                        show: true
                    }
                },
                lineStyle: {
                    normal: { curveness: 0.2 }
                }
            }, {
                source: '公交站点1',
                target: '公交站点3'
            }, {
                source: '公交站点2',
                target: '公交站点3'
            }, {
                source: '公交站点2',
                target: '公交站点4'
            }, {
                source: '公交站点1',
                target: '公交站点4'
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    color: 'blue',
                    // width: 2,
                    curveness: 0.2
                }
            }
        }
    ]
};