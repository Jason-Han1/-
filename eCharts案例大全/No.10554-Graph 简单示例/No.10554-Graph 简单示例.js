option = {
    title: {
        text: 'Graph 简单示例'
    },
    tooltip:false,
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            xAxisIndex : 0, //x轴坐标 有多种坐标系轴坐标选项
            yAxisIndex : 0, //y轴坐标 
            type: 'graph',
            layout: 'none',
            symbolSize: 10,//圆圈大小
            roam: false,//不可拖动
            label: {
                normal: {
                    // color: '#17FFF3',//端口号颜色
                    show: true
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],//连线箭头大小
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [
                {
                name: '端口0',
                itemStyle: {
                 normal: {
                     color: 'white',
                 }
             },
                x: 0,
                y: 0
            },
            {
                name: '端口1000',
                itemStyle: {
                 normal: {
                     color: 'white',
                 }
             },
                x: 0,
                y: 1000
            },
            {
                name: '端口9000',
                itemStyle: {
                 normal: {
                     color: 'white',
                 }
             },
                x: 1000,
                y: 1000
            },
            {
                name: '端口00',
                itemStyle: {
                 normal: {
                     color: 'white',
                 }
             },
                x: 1000,
                y: 0
            },
            {
                name: '端口1',
                itemStyle: {
                 normal: {
                     color: 'red',
                 }
             },
                x: 110,
                y: 300
            }, {
                name: '端口2',
                x: 120,
                y: 300
            }, {
                name: '端口3',
                x: 130,
                y: 300
            }, {
                name: '端口4',
                x: 140,
                y: 300
            },
            {
                name: '端口5',
                x: 110,
                y: 400
            }, {
                name: '端口6',
                x: 120,
                y: 400
            }, {
                name: '端口7',
                x: 130,
                y: 400
            }, {
                name: '端口8',
                x: 140,
                y: 400
            }
            ,
            {
                name: '端口11',
                x: 410,
                y: 300
            }, {
                name: '端口12',
                x: 420,
                y: 300
            }, {
                name: '端口13',
                x: 430,
                y: 300
            }, {
                name: '端口14',
                x: 440,
                y: 300
            },
            {
                name: '端口15',
                x: 410,
                y: 400
            }, {
                name: '端口16',
                x: 420,
                y: 400
            }, {
                name: '端口17',
                x: 430,
                y: 400
            }, {
                name: '端口18',
                x: 440,
                y: 400
            }
            ],
            // links: [],
            links: [
            //     {
            //     source: 0,
            //     target: 1,
            //     symbolSize: [5, 20],//灰色圈大小
            //     label: {
            //         normal: {
            //             show: true
            //         }
            //     },
            //     lineStyle: {
            //         normal: {
            //             width: 5,
            //             curveness: 0.2
            //         }
            //     }
            // }
            // , {
            //     source: '节点2',
            //     target: '节点1',
            //     label: {
            //         normal: {
            //             show: true
            //         }
            //     },
            //     lineStyle: {
            //         normal: { curveness: 0.2 }
            //     }
            // }
            // ,
            {
                source: '端口1',
                target: '端口5'
            }, {
                source: '端口2',
                target: '端口6'
            }, {
                source: '端口3',
                target: '端口7'
            }, 
            // {
            //     source: '端口11',
            //     target: '端口17'
            // },
            {
                source: '端口4',
                target: '端口8'
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 2,//连线宽度
                    curveness: 0//连线曲线度
                }
            }
        }
    ]
};