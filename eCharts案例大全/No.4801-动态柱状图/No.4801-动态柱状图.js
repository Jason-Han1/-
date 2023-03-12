//当前值
var totalData = 600
var onlineData = 300
var offlineData = 200
var warnData = 100
//最大值
var maxData = 800
var value1 = (totalData / maxData).toFixed(2);
var value2 = (onlineData / totalData).toFixed(2);
var value3 = (offlineData / totalData).toFixed(2);
var value4 = (warnData / totalData).toFixed(2);
var data1 = [value1, value1, value1, value1];
var data2 = [value2, value2, value2, value2];
var data3 = [value3, value3, value3, value3];
var data4 = [value4, value4, value4, value4];

option = {
    //  backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
    //     offset: 0,
    //     color: '#431ab8'
    // }, {
    //     offset: 1,
    //     color: '#471bba'
    // }]),

    title: [{
            text: '圆形图-动态水流2 ?',
            x: '50%',
            y: 30,
            textAlign: 'center',
            textStyle: {
                fontSize: '30',
                fontWeight: '100',
                color: '#333',
                textAlign: 'center',
            },
        },
        // 蓝色
        {
            text: '总数：' + (value1 * 100).toFixed(0) + '%',
            left: '30%',
            top: '30%',
            textAlign: 'center',
            textStyle: {
                fontSize: '30',
                fontWeight: '400',
                color: '#02456d',
                textAlign: 'center',
                textBorderColor: 'rgba(0, 0, 0, 0)',
                textShadowColor: '#fff',
                textShadowBlur: '0',
                textShadowOffsetX: 0,
                textShadowOffsetY: 1,
            },
        },
        // 绿色
        {
            text: '在线：' + (value2 * 100).toFixed(0) + '%',
            left: '30%',
            top: '70%',
            textAlign: 'center',
            textStyle: {
                fontSize: '30',
                fontWeight: '400',
                color: '#295008',
                textAlign: 'center',
                textBorderColor: 'rgba(0, 0, 0, 0)',
                textShadowColor: '#fff',
                textShadowBlur: '0',
                textShadowOffsetX: 0,
                textShadowOffsetY: 1,
            },
        },
        // 黄色
        {
            text: '离线：' + (value3 * 100).toFixed(0) + '%',
            left: '70%',
            top: '30%',
            textAlign: 'center',
            textStyle: {
                fontSize: '30',
                fontWeight: '400',
                color: '#a06a0a',
                textAlign: 'center',
                textBorderColor: 'rgba(0, 0, 0, 0)',
                textShadowColor: '#fff',
                textShadowBlur: '0',
                textShadowOffsetX: 0,
                textShadowOffsetY: 1,
            },
        },
        // 红色
        {
            text: '告警：' + (value4 * 100).toFixed(0) + '%',
            left: '70%',
            top: '70%',
            textAlign: 'center',
            textStyle: {
                fontSize: '30',
                fontWeight: '400',
                color: 'red',
                textAlign: 'center',
                textBorderColor: 'rgba(0, 0, 0, 0)',
                textShadowColor: '#fff',
                textShadowBlur: '0',
                textShadowOffsetX: 0,
                textShadowOffsetY: 1,
            },
        },
    ],
    series: [
        {
            type: 'liquidFill',
            radius: '30%',
            center: ['30%', '30%'],
            amplitude: 5,
            //水填充图的形状 circle默认圆形  rect矩形  triangle三角形  
            //diamond菱形  pin水滴状 arrow箭头状、svg的path
            // shape: 'roundRect',
            data: data1,
            backgroundStyle: {
                borderWidth: 1,
                color: 'transparent',
            },
            outline: {
                show: true,
                itemStyle: {
                    borderWidth: 0,
                },
                borderDistance: 0,
            },
            //波浪颜色
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 1,
                    color: 'rgba(0, 108, 154, 1)'
                }, {
                    offset: 0.5,
                    color: 'rgba(0, 155, 219, .5)'
                }, {
                    offset: 0,
                    color: 'rgba(0, 155, 219, 0)'
                }],
                globalCoord: false
            },
            label: {
                normal: {
                    formatter: '',
                }
            }
        },
        {
            type: 'liquidFill',
            radius: '30%',
            center: ['30%', '70%'],
            amplitude: 20,
            data: data2,
            backgroundStyle: {
                borderWidth: 1,
                color: 'transparent',
            },
            outline: {
                show: true,
                itemStyle: {
                    borderWidth: 0,
                },
                borderDistance: 0,
            },
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 1,
                    color: 'rgba(74, 134, 21, 1)'
                }, {
                    offset: 0.5,
                    color: 'rgba(119, 185, 63, .5)'
                }, {
                    offset: 0,
                    color: 'rgba(119, 185, 63, 0)'
                }],
                globalCoord: false
            },
            label: {
                normal: {
                    formatter: '',
                }
            }
        },
        {
            type: 'liquidFill',
            radius: '30%',
            center: ['70%', '30%'],
            data: data3,
            backgroundStyle: {
                borderWidth: 1,
                color: 'transparent',
            },
            outline: {
                show: true,
                itemStyle: {
                    borderWidth: 0,
                },
                borderDistance: 0,
            },
           color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 1,
                    color: 'rgba(189, 126, 12, 1)'
                }, {
                    offset: 0.5,
                    color: 'rgba(251, 173, 23, .5)'
                }, {
                    offset: 0,
                    color: 'rgba(251, 173, 23, 0)'
                }],
                globalCoord: false
            },
            label: {
                normal: {
                    formatter: '',
                }
            }
        },
        {
            type: 'liquidFill',
            radius: '30%',
            center: ['70%', '70%'],
            amplitude: 5,
            data: data4,
            backgroundStyle: {
                borderWidth: 1,
                color: 'transparent',
            },
            outline: {
                show: true,
                itemStyle: {
                    borderWidth: 0,
                },
                borderDistance: 0,
            },
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 1,
                    color: 'rgba(169, 14, 115, 1)'
                }, {
                    offset: 0.5,
                    color: 'rgba(255, 0, 0, .5)'
                }, {
                    offset: 0,
                    color: 'rgba(255, 0, 0, 0)'
                }],//填充颜色
                globalCoord: false
            },
            label: {
                normal: {
                    formatter: '',
                }
            }
        },
    ]
};

// backgroundStyle: {
//      color: {
//          type: 'linear',
//          x: 1,
//          y: 0,
//          x2: 0.5,
//          y2: 1,
//          colorStops: [{
//              offset: 1,
//              color: 'rgba(68, 145, 253, 0)'
//          }, {
//              offset: 0.5,
//              color: 'rgba(68, 145, 253, .25)'
//          }, {
//              offset: 0,
//              color: 'rgba(68, 145, 253, 1)'
//          }],
//          globalCoord: false
//      },
//  },
// outline: {
//     borderDistance: 0,
//     itemStyle: {
//         borderWidth: 20,
//         borderColor: {
//             type: 'linear',
//             x: 0,
//             y: 0,
//             x2: 0,
//             y2: 1,
//             colorStops: [{
//                 offset: 0,
//                 color: 'rgba(69, 73, 240, 0)'
//             }, {
//                 offset: 0.5,
//                 color: 'rgba(69, 73, 240, .25)'
//             }, {
//                 offset: 1,
//                 color: 'rgba(69, 73, 240, 1)'
//             }],
//             globalCoord: false
//         },
//         shadowBlur: 10,
//         shadowColor: '#000',
//     }
// },