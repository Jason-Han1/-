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
                name: '节点1',
                x: 300,
                y: 300
            }, {
                name: '节点2',
                x: 300,
                y: 800
            }],
            links: [{
                source: 0,
                target: 1,
                symbolSize: [5, 20],
                label: {
                    normal: {
                        show: true,
                        rotate: 90
                    }
                },
                lineStyle: {
                    normal: {
                        width: 5,
                        curveness: 0.2
                    }
                }
            }, {
                source: '节点2',
                target: '节点1',
                label: {
                    normal: {
                        show: true,
                        position: 'middle',
                        align: 'left',
                        verticalAlign: 'bottom',
                        rotate: 90,
                        rich: {
                            align: 'left',
                            verticalAlign: 'middle',
                            rotate: 90
                        }
                    }
                },
                lineStyle: {
                    normal: { curveness: 0.2 }
                }
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                }
            }
        }
    ]
};