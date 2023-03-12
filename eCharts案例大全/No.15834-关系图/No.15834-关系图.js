var dom = document.getElementById('chart-panel');
dom.style.width = 780 + 'px';
dom.style.height = 600 + 'px';
option = {
    tooltip: {
        show: false
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'none',
        symbolSize: 50,
        roam: false, //禁止用鼠标滚轮缩小放大效果
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        // 连接线上的文字
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 20
                }
            }
        },
        lineStyle: {
            normal: {
                opacity: 1,
                width: 2,
                curveness: 0.1
            }
        },
        // 圆圈内的文字
        label: {
            normal: {
                show: true
            }
        },
        data: [{
                name: '节点1',
                x: 550,
                y: 100,
                itemStyle: {
                    normal: {
                        color: '#f90'
                    }
                }
            }, {
                name: '节点2',
                x: 800,
                y: 300
            }, {
                name: '节点3',
                x: 550,
                y: 500
            }, {
                name: '节点4',
                x: 300,
                y: 300
            }, {
                name: '节点5',
                x: 550,
                y: 300
            }

        ],
        // links: [],
        links: [{
            source: '节点1',
            target: '节点2',
            lineStyle: {
                normal: {
                    color: '#38f',
                    curveness: 0.2 // 线的弯曲度 0-1之间 越大则歪曲度更大
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#07ac72'
                    }
                }
            }
        }, {
            source: '节点2',
            target: '节点1',
            symbolSize: [4, 20] // 箭头大小
        }, {
            source: '节点2',
            target: '节点3'
        }, {
            source: '节点3',
            target: '节点2'
        }, {
            source: '节点3',
            target: '节点4'
        }, {
            source: '节点4',
            target: '节点3'
        }, {
            source: '节点4',
            target: '节点1'

        }, {
            source: '节点1',
            target: '节点4'
        }, {
            source: '节点1',
            target: '节点5'
        }, {
            source: '节点5',
            target: '节点1'
        }]
    }]
};