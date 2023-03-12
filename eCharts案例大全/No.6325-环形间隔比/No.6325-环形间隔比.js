let value = 76.33;
let title = '报警总数';
let int = value.toFixed(2).split('.')[0];
let float = value.toFixed(2).split('.')[1];
let num1 = 0;
let num2 = 9;
let num3 = 0;
let total = num1+num2+num3;
option = {

    title: {

        text: '{c|' + title + '}\n{a|' + int + '}{b|.' + float + '%}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 36,
                    color: '#29EEF3'
                },
                b: {
                    fontSize: 36,
                    color: '#29EEF3',
                    // padding: [0,0,14,0]
                },
                c: {
                    fontSize: 32,
                    color: '#000000',
                    padding: [5, 0]
                },

            }
        }
    },
    series: [{
            type: 'gauge',
            radius: '60%',
            clockwise: false,
            startAngle: 0,
            endAngle: num1/total * 360-0.001,
            //调整间隔距离
            splitNumber: 1,
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

                    width: 0,
                    shadowBlur: 0
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#000",
                    width: 5,

                },
                length: '10%',
                splitNumber: num1/total * 100,
            },
            // splitLine: {
            //     show: true,
            //     length: 32,
            //     lineStyle: {
            //         // color: '#051F54',
            //         width: 6
            //     }
            // },
            axisLabel: {
                show: false
            }
        },
        {
            type: 'gauge',
            radius: '60%',
            clockwise: false,
            startAngle: num1/total * 360,
            endAngle: (num1+num2)/total * 360-0.001,
            //调整间隔距离
            splitNumber: 1,
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

                    width: 0,
                    shadowBlur: 0
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#0f0",
                    width: 5,

                },
                length: '10%',
                splitNumber: num2/total * 100,
            },
            // splitLine: {
            //     show: true,
            //     length: 32,
            //     lineStyle: {
            //         // color: '#051F54',
            //         width: 6
            //     }
            // },
            axisLabel: {
                show: false
            }
        },
        {
            type: 'gauge',
            radius: '60%',
            clockwise: false,
            startAngle: (num1+num2)/total * 360-0.001,
            endAngle: 360,
            //调整间隔距离
            splitNumber: 1,
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

                    width: 0,
                    shadowBlur: 0
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#00f",
                    // 为0的时候要把这个设为0，可以自己试一下
                    width: 0,

                },
                length: '10%',
                splitNumber: num3/total * 100,
            },
            // splitLine: {
            //     show: true,
            //     length: 32,
            //     lineStyle: {
            //         // color: '#051F54',
            //         width: 6
            //     }
            // },
            axisLabel: {
                show: false
            }
        },


    ]
};