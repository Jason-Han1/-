var xAxisData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var seriesData = [];
var data = [
    [60, 90, 60, 70, 80, 100, 70, 90, 60, 70, 80, 100],
    [50, 80, 50, 60, 70, 90, 60, 80, 50, 60, 70, 90],
    [40, 60, 40, 50, 55, 70, 50, 60, 30, 40, 50, 70],
];
let dataNewArr = [];
let colorArr = ['#4BCD6C', '#00F1FF', '#33AEEE'];
let legendData = ['转向架', '车体', '总装'];

// 颜色十六进制转换rgb
let hexToRgba = (hex, opacity) => {
    let rgbaColor = '';
    let reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt('0x' + hex.slice(3, 5))},${parseInt(
            '0x' + hex.slice(5, 7)
        )},${opacity})`;
    }
    return rgbaColor;
};
// 循环处理3条数据
for (var i = 0; i < data.length; i++) {
    dataHandling(i);
}
// 数据拆分为上升和下降
function dataHandling(num) {
    let lineData = data[num];
    let lineNewArr = [];
    let btn = true; //默认首次第一个和第二个比较是升就是false?否则是true
    let startIndex = 0;
    for (var i = 0; i < lineData.length; i++) {
        let next = lineData[i + 1];
        if (i == lineData.length - 1) {
            var flagArr = lineData.slice(startIndex);
            if (startIndex > 0) {
                for (var j = 0; j < startIndex; j++) {
                    flagArr.unshift('');
                }
            }
            if (flagArr.length > 0) {
                lineNewArr.push({
                    nullData: startIndex,
                    data: flagArr,
                    status: btn,
                });
            }
        }
        if (next) {
            if (btn == false) {
                if (next < lineData[i]) {
                    if (lineNewArr.length == 0) {
                        startIndex = 0;
                    }
                    var flagArr = lineData.slice(startIndex, i + 1);
                    if (startIndex > 0) {
                        for (var j = 0; j < startIndex; j++) {
                            flagArr.unshift('');
                        }
                    }
                    lineNewArr.push({
                        nullData: startIndex,
                        data: flagArr,
                        status: btn,
                    });
                    btn = true;
                    startIndex = i;
                }
            } else {
                if (next > lineData[i]) {
                    var flagArr = lineData.slice(startIndex, i + 1);
                    if (startIndex > 0) {
                        for (var j = 0; j < startIndex; j++) {
                            flagArr.unshift('');
                        }
                    }
                    lineNewArr.push({
                        nullData: startIndex,
                        data: flagArr,
                        status: btn,
                    });
                    startIndex = i;
                    btn = false;
                }
            }
        }
    }
    dataNewArr.push(lineNewArr);

    lineHandling(num);
}
// 循环line
function lineHandling(num) {
    let lineNewArr = dataNewArr[num];
    lineNewArr.forEach(function (item, i) {
        if (lineNewArr[i].status == false) {
            seriesData.push({
                name: legendData[num],
                data: lineNewArr[i].data,
                type: 'line',
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 14,
                label: {
                    show: true,
                    formatter: function (params) {
                        return params.value;
                    },
                    position: [0, -20],
                    textStyle: {
                        color: '#FDFDFD',
                        fontSize: 12,
                    },
                },
                lineStyle: {
                    normal: {
                        width: 2,
                        color: colorArr[num],
                        shadowBlur: 3,
                        shadowColor: 'rgba(0,0,0,.8)',
                        shadowOffsetY: 16,
                    },
                },
                emphasis: {
                    show: false,
                },

                itemStyle: {
                    color: colorArr[num],
                    borderColor: '#fff',
                    borderWidth: 1,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 2,
                    shadowOffsetX: 2,
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: hexToRgba(colorArr[num], 0.1),
                                },
                                {
                                    offset: 1,
                                    color: hexToRgba(colorArr[num], 0),
                                },
                            ],
                            false
                        ),
                        shadowColor: hexToRgba(colorArr[num], 0.1),
                        shadowBlur: 10,
                    },
                },
            });
        } else {
            seriesData.push({
                name: legendData[num],
                data: lineNewArr[i].data,
                type: 'line',
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 14,
                label: {
                    show: true,
                    formatter: function (params) {
                        return params.value;
                    },
                    position: [0, -20],
                    textStyle: {
                        color: '#FDFDFD',
                        fontSize: 12,
                    },
                },
                lineStyle: {
                    normal: {
                        width: 2,
                        color: '#F54D4D',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0,0,0,.8)',
                        shadowOffsetY: 16,
                    },
                },
                itemStyle: {
                    color: colorArr[num],
                    borderColor: '#fff',
                    borderWidth: 1,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 2,
                    shadowOffsetX: 2,
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: hexToRgba(colorArr[num], 0.1),
                                },
                                {
                                    offset: 1,
                                    color: hexToRgba(colorArr[num], 0),
                                },
                            ],
                            false
                        ),
                        shadowColor: hexToRgba(colorArr[num], 0.1),
                        shadowBlur: 10,
                    },
                },
            });
        }
    });
}

option = {
    backgroundColor: '#010e28',
    legend: {
        right: '5',
        top: '20',
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 15,
        textStyle: {
            color: '#E3E3E5',
            fontSize: 12,
            fontFamily: 'PingFang',
        },
        icon: 'rect',
        data: legendData,
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '5%',
        top: '15%',
        containLabel: true,
    },
    xAxis: {
        axisTick: {
            show: false, // 隐藏x轴的分割点
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#E3E3E5',
                fontFamily: 'PingFang',
            },
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        data: xAxisData,
    },
    yAxis: {
        type: 'value',
        scale: true,
        axisTick: {
            show: false, // 隐藏x轴的分割点
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#E3E3E5',
                fontFamily: 'PingFang',
            },
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: ' rgba(204,204,204,.42)',
                type: 'dashed',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ' rgba(204,204,204,.42)',
                type: 'dashed',
            },
        },
    },
    series: seriesData,
};
