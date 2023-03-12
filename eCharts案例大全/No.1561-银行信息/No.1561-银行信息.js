let backgroundColor = 'rgba(0,0,0,1)';
let chartdata = [
    [111, 222, 333, 444],
    ['石油', '煤矿', '汽油', '电力'],
];

let yLabel = ['石油', '煤矿', '汽油', '电力'];
var getmyd = [111, 222, 333, 444];

// var getmydmc = chartdata[1]; //数据点名称
// var getmyd = chartdata[0]; //收入金额
// var getmydzd = [];

// let big = 0;
// getmyd.forEach((el) => {
//     if (!(el === undefined || el === '')) {
//         if (big < Number(el)) {
//             big = Number(el);
//         }
//     }
// });
// for (let i = 0; i < getmyd.length; i++) {
//     getmydzd.push(big * 4);
// }
//计算最大值
// function calMax(arr) {
//     let max = 0;
//     arr.forEach((el) => {
//         el.forEach((el1) => {
//             if (!(el1 === undefined || el1 === '')) {
//                 if (max < Number(el1)) {
//                     max = Number(el1);
//                 }
//             }
//         });
//     });
//     let maxint = Math.ceil(max / 9.5);
//     //不让最高的值超过最上面的刻度
//     let maxval = maxint * 10;
//     //让显示的刻度是整数
//     return maxval;
// }

// var max = Math.ceil(calMax([getmyd]) / 10) * 10;
option = {
    tooltip: {},
    backgroundColor: '#0f375f',
    animation: false,
    grid: {
        top: '25%',
        bottom: '10%', //也可设置left和right设置距离来控制图表的大小
    },
    xAxis: [
        {
            axisLabel: {
                color: '#fff',
                textStyle: {
                    fontSize: '13',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(255,255,255,0.2)',
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                    width: 1,
                    opacity: 0.3,
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            type: 'category',
            inverse: true,
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    // color: '#fff',
                    color: new echarts.graphic.LinearGradient(0, 1,1, 0, [
                        {
                            offset: 0,
                            color: 'rgba(255,255,255,0.8)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(255,255,255,0)',
                        },
                    ]),
                    width: 1,
                },
            },
            axisLabel: {
                color: '#fff',
                textStyle: {
                    fontSize: '13',
                },
            },
            data: yLabel,
        },
    ],
    series: [
        {
            name: '值',
            type: 'bar',
            // zlevel: 1,
            xAxisIndex: 0,
            itemStyle: {
                normal: {
                    // barBorderRadius: [0, 5, 5, 0],
                    color: {
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(0, 121, 255, 1)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(0, 202, 220, 1)', // 100% 处的颜色
                            },
                        ],
                    },
                },
            },
            barWidth: 15,
            data: getmyd,
            z: 0,
        },
        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#022539',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 4,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [2, 15],
            symbolPosition: 'start',
            symbolOffset: [-1, 0],
            data: getmyd,
            z: 66,
            animationEasing: 'elasticOut',
        },
    ],
};
