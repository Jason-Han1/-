
    // let value = 76.33;
    let title = '同比';
    // let int = value.toFixed(2).split('.')[0];
    // let float = value.toFixed(2).split('.')[1];

    option = {
        backgroundColor: '#4D499B',
        title: {
            text: '{c|' + title + '}',
            x: 'center',
            y: 'center',
            textStyle: {
                rich: {
                    a: {
                        fontSize: 48,
                        color: '#29EEF3'
                    },
                    b: {
                        fontSize: 48,
                        color: '#29EEF3'
                        // padding: [0,0,14,0]
                    },
                    c: {
                        fontSize: 27,
                        color: '#000000',
                        padding: [5, 0]
                    }
                }
            }
        },
        series: [
            {
                type: 'gauge',
                radius: '40%',
                clockwise: false,
                startAngle: '90',
                endAngle: '-269.9999',
                //调整间隔距离
                splitNumber: 50,
                detail: {
                    offsetCenter: [0, -20],
                    formatter: ' '
                },
                pointer: {
                    show: true
                },
                axisLine: {
                    show: true,
                    color: 'red',
                    lineStyle: {
                        color: [
                            [9, '#007fff'],
                            //计算比例
                            [0.872, '#6B5AAD'],

                            [1, '#FB9D5AFF']
                        ],
                        width: 60
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    length: 60,
                    lineStyle: {
                        color: '#4D489B',
                        width: 6
                    }
                },
                axisLabel: {
                    show: false
                }
            }
            // {
            //     type: 'pie',
            //     name: '内层细圆环',
            //     radius: ['43%', '45%'],
            //     hoverAnimation: false,
            //     clockWise: false,
            //     itemStyle: {
            //         normal: {
            //             color: '#0C355E'
            //         }
            //     },
            //     label: {
            //         show: false
            //     },
            //     data: [100]
            // },
            // {
            //     type: 'pie',
            //     name: '内层环',
            //     radius: [0, '43%'],
            //     hoverAnimation: false,
            //     clockWise: false,
            //     itemStyle: {
            //         normal: {
            //             color: '#02163F'
            //         }
            //     },
            //     label: {
            //         show: false
            //     },
            //     data: [100]
            // }
        ]
    };
