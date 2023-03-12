let value = 55.33;
let title = '%';
let extra = '\n机构占比'

option = {
    backgroundColor: '#051531',
    title: {
        // text: '{a|' + value + '}{c|' + title + '}',
        // text: `${value}% \n 机构占比`,
        text: '{a|' + value + title +'}{c|' + extra + '}',
        x: 'center',
        y: '46%', // 'center'
        textStyle: {
            fontSize: 30,
            // color: '#579ff9',
            rich: {
                a: {
                    fontSize: 30,
                    fontWeight: 700,
                    color: '#579ff9'
                },
                c: {
                    fontSize: 24,
                    color: '#579ff9',
                    fontWeight: 500,
                    padding: [5, 0]
                }
            }
        }
    },
    series: [
        // {
        //     type: 'gauge', // 外圈 刻度
        //     startAngle: 270,
        //     endAngle: -89.9999,
        //     center: ['50%', '50%'],
        //     axisTick: {
        //         show: false
        //     },
        //     axisLabel: {
        //         show: false
        //     },
        //     radius: '30%',
        //     splitNumber: '52',
        //     axisLine: {
        //         show: false,
        //         lineStyle: {
        //             color: [
        //                 [1, '#1755ff']
        //             ],
        //             width: 20
        //         }
        //     },
        //     splitLine: {
        //         length: 15,
        //         lineStyle: {
        //             width: 2,
        //             color: '#1755ff',
        //             distance: 10,
        //         } //刻度节点线
        //     },
        //     detail: {
        //         show: false
        //     },
        // },
        {
            type: 'gauge',
            radius: '30%',
            clockwise: false,
            startAngle: '-180', // 90
            endAngle: '179', // -269
            splitNumber: 12,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' '
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0, '#051531' ], // '#1452ff'
                        [20 / 100, '#7DEDFF'], // '#65b4ff'
                        [1, '#0B1666'] // '#1654ff'
                    ],
                    width: 30
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 32,
                lineStyle: {
                    color: '#051531', // '#051F54'
                    width: 8
                }
            },
            axisLabel: {
                show: false
            }
        },
        {
            type: 'pie',
            name: '细圆环1',
            radius: ['38%', '38.3%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#039ED5'
                }
            },
            label: {
                show: false
            },
            data: [100]
        },
        {
            type: 'pie',
            name: '细圆环2',
            radius: ['34%', '34.3%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#053DB4'
                }
            },
            label: {
                show: false
            },
            data: [100]
        },
        {
            type: 'pie',
            name: '内细圆环3',
            radius: ['19%', '19.8%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    // color: '#05C0F7',
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: '#05C0F7',
                    }, {
                        offset: 1,
                        color: '#060f20'
                    }])
                }
            },
            label: {
                show: false
            },
            data: [100]
        }

    ]
};