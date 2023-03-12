var dom = document.getElementById('chart-panel');
dom.style.width = 780 + 'px';
dom.style.height = 600 + 'px';
option = {
    tooltip: {
        show: false
    },
    legend: {
        x: "center",
        data: ["家人", "朋友"]
    },
    animation: false,
    series: [{
        categories: [{
            name: '家人',
            itemStyle: {
                normal: {
                    color: "#009800",
                }
            }
        }, {
            name: '朋友',
            itemStyle: {
                normal: {
                    color: "#4592FF",
                }
            }
        }],
        type: 'graph',
        layout: 'force',
        symbol: "circle",
        symbolSize: 50,
        roam: true, //禁止用鼠标滚轮缩小放大效果
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [0, 10],
        // 连接线上的文字
        focusNodeAdjacency: true, //划过只显示对应关系
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 20
                },
                formatter: "{c}"
            }
        },
        categories: [{
            name: '家人',
            itemStyle: {
                normal: {
                    color: "#009800",
                }
            }
        }, {
            name: '朋友',
            itemStyle: {
                normal: {
                    color: "#4592FF",
                }
            }
        }],
        lineStyle: {
            normal: {
                opacity: 1,
                width: 2,
                curveness: 0
            }
        },
        // 圆圈内的文字
        label: {
            normal: {
                show: true
            }
        },
        force: {
            repulsion: 5000
        },
        data: [{
            name: '节点1',
            symbol: 'image://http://www.damndigital.com/wp-content/uploads/2010/12/steve-jobs.jpg',
            itemStyle: {
                normal: {
                    color: '#f90', //圆点的颜色
                    label: {
                        position: 'bottom',
                        textStyle: {
                            color: '#f90'
                        }
                    }
                }
            },

        }, {
            name: '节点2',
            category: 1,
            itemStyle: {
                normal: {
                    color: '#090',
                },
                emphasis: {
                    color: "#000"
                }
            }
        }, {
            name: '节点3',
            category: 1,
            draggable: true,
        }, {
            name: '节点4',
            category: 0,
            draggable: true,
        }, {
            name: '节点5',
            category: 0,
            draggable: true,
        }, {
            name: '节点6',
            category: 0,
            draggable: true,
        }],
        links: [{
            source: '节点1',
            target: '节点2',
            value: "朋友",
            lineStyle: {
                normal: {
                    color: '#38f',
                    curveness: 0 // 线的弯曲度 0-1之间 越大则歪曲度更大
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
            source: '节点1',
            target: '节点3',
            value: "朋友"
        }, {
            source: '节点1',
            target: '节点4',
            value: "家人"
        }, {
            source: '节点1',
            target: '节点5',
            value: "家人"
        }, {
            source: '节点1',
            target: '节点6',
            value: "家人"
        }, ]
    }]
};