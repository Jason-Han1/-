var valueData1= 100,valueData2=200;
var multiple = document.documentElement.clientWidth / 1920;
var imgSVG = 'path://M57.974,0.883 L19.925,0.883 L0.889,19.694 L0.889,19.694 L0.889,91.963 L42.601,91.963 L42.601,69.629 L55.254,69.629 L55.254,91.963 L96.968,91.963 L96.968,19.694 L96.968,19.694 L77.932,0.883 L71.361,0.883 L57.974,0.883 ZM19.923,74.437 L11.401,74.437 L11.401,64.902 L19.923,64.902 L19.923,74.437 ZM19.923,58.739 L11.401,58.739 L11.401,49.197 L19.923,49.197 L19.923,58.739 ZM19.923,42.387 L11.401,42.387 L11.401,32.852 L19.923,32.852 L19.923,42.387 ZM36.555,74.437 L28.035,74.437 L28.035,64.902 L36.555,64.902 L36.555,74.437 ZM36.555,58.739 L28.035,58.739 L28.035,49.197 L36.555,49.197 L36.555,58.739 ZM36.555,42.387 L28.035,42.387 L28.035,32.852 L36.555,32.852 L36.555,42.387 ZM53.189,58.739 L44.668,58.739 L44.668,49.197 L53.189,49.197 L53.189,58.739 ZM53.189,42.387 L44.668,42.387 L44.668,32.852 L53.189,32.852 L53.189,42.387 ZM69.822,74.437 L61.302,74.437 L61.302,64.902 L69.822,64.902 L69.822,74.437 ZM69.822,58.739 L61.302,58.739 L61.302,49.197 L69.822,49.197 L69.822,58.739 ZM69.822,42.387 L61.302,42.387 L61.302,32.852 L69.822,32.852 L69.822,42.387 ZM86.452,74.437 L77.935,74.437 L77.935,64.902 L86.452,64.902 L86.452,74.437 ZM86.452,58.739 L77.935,58.739 L77.935,49.197 L86.452,49.197 L86.452,58.739 ZM86.452,42.387 L77.935,42.387 L77.935,32.852 L86.452,32.852 L86.452,42.387 Z';
var option = {
    backgroundColor:"purple",
    title: {
        text: '',
        textStyle: {
            color: '#fff',
            fontSize: 28 * multiple
        },
        // padding:5
    },
    grid: {
        top: '15%',
        // right: "50%",
        // left: "50%",
        bottom: "10%",
    },

    xAxis: [{
        data: [],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }],

    yAxis: [{
        show: false,
        max: valueData1 + valueData2,
        offset: 20 * multiple,
        splitLine: {
            show: false
        }
    }],

    // color: ['#fece51'],
    series: [{
        name: 'typeA',
        type: 'pictorialBar',
        symbolClip: true,
        symbolBoundingData: valueData1 + valueData2,
        label: {
            normal: {
                show: true,
                position: 'right',

                offset: [0, 0],
                formatter: function(param) {
                    // console.log(param)
                    return '{a|' + param.data.name + '\n}' + '{b|' + param.data.value + '\n}' + '{a|' + (param.value / (valueData1 + valueData2) * 100).toFixed(0) + '%}';
                },
                rich: {
                    a: {
                        lineHeight: 18 * multiple,
                        fontSize: 16 * multiple,
                        align: 'left',
                        color: "#FFFF",
                    },
                    b: {
                        lineHeight: 28 * multiple,
                        fontSize: 26 * multiple,
                        align: 'left',
                        color: '#f67765',
                    }
                }
            }
        },
        itemStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                        offset: 0,
                        color: '#ffd44f'
                    },

                    {
                        offset: 1,
                        color: '#f67765'
                    }
                ]
            )
        },
        data: [{
            value: valueData1,
            name: "单位",
            symbol: imgSVG,
            // symbolSize:[460*multiple,490*multiple],
            label: {
                color: "#FFFF",
            }
        }],
        z: 10
    }, {
        name: 'full',
        type: 'pictorialBar',
        symbolBoundingData: valueData1 + valueData2,
        animationDuration: 0,
        label: {
            normal: {
                show: true,
                position: 'left',
                offset: [0, 0],
                formatter: function(param) {
                    // console.log(param)
                    return '{a|' + param.data.name + '\n}' + '{b|' + param.data.value + '\n}' + '{a|' + (param.value / (valueData1 + valueData2) * 100).toFixed(0) + '%}';
                },
                rich: {
                    a: {
                        lineHeight: 18 * multiple,
                        fontSize: 16 * multiple,
                        align: 'right',
                        color: "#FFFF",
                    },
                    b: {
                        lineHeight: 28 * multiple,
                        fontSize: 26 * multiple,
                        align: 'right',
                        color: '#8A8AFF'
                    }
                }
            }
        },
        itemStyle: {
            // normal: {
            //     color: 'blue'
            // }
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                            offset: 0,
                            color: '#4141FF'
                        },

                        {
                            offset: 1,
                            color: '#8A8AFF'
                        }
                    ]
                )
            }
        },
        data: [{
            value: valueData2,
            name: "个人",
            symbol: imgSVG,
            // symbolSize:[460*multiple,490*multiple],
            label: {
                color: "#FFFF",
            }
        }]
    }]
}