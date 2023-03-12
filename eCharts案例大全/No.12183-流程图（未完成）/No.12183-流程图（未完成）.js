option = {
    title: {
        text: 'Graph 简单示例'
    },
    tooltip: {},
    //数据更新动画的时长。
    animationDurationUpdate: 1500,
    //数据更新动画的缓动效果。
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            type: 'graph',
            layout: 'none',
            //节点大小
            symbolSize: [50, 100],
            //roam: true,
            //节点文字是否显示
            label: {
                normal: {
                    show: true,
                }
            },
            //指向箭头
            edgeSymbol: ['circle', 'arrow'],
            //edgeSymbolSize: [1, 10],
            //连接线文字大小
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [{
                name: '节点1',
                x: 0,
                y: 0
            }, {
                name: '节点2',
                x: 200,
                y: 0
            }, {
                name: '节点3',
                x: 400,
                y: 0
            }, {
                name: '节点4',
                x: 600,
                y: 0
            }],
            // links: [],
            links: [{
                //起点
                source: "节点1",
                //终点
                target: "节点2",
                symbolSize: [4, 10],
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
                source: '节点2',
                target: '节点1',
                label: {
                    normal: {
                        show: true
                    }
                },
                lineStyle: {
                    normal: { curveness: 0.2 }
                }
            }, {
                source: '节点1',
                target: '节点3'
            }, {
                source: '节点2',
                target: '节点3'
            }, {
                source: '节点2',
                target: '节点4'
            }, {
                source: '节点1',
                target: '节点4'
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0.4
                }
            }
        }
    ]
};