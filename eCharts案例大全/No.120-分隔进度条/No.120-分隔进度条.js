let backgroundColor = 'rgba(0,0,0,1)';
let chartdata = [
    [111, 222, 333, 444],
    ['石油', '煤矿', '汽油', '电力'],
];

var getmydmc = chartdata[1]; //数据点名称
var getmyd = chartdata[0]; //收入金额
var getmydzd = [];

let big = 0;
getmyd.forEach((el) => {
    if (!(el === undefined || el === '')) {
        if (big < Number(el)) {
            big = Number(el);
        }
    }
});
for (let i = 0; i < getmyd.length; i++) {
    getmydzd.push(big * 4);
}
//计算最大值
function calMax(arr) {
    let max = 0;
    arr.forEach((el) => {
        el.forEach((el1) => {
            if (!(el1 === undefined || el1 === '')) {
                if (max < Number(el1)) {
                    max = Number(el1);
                }
            }
        });
    });
    let maxint = Math.ceil(max / 9.5);
    //不让最高的值超过最上面的刻度
    let maxval = maxint * 10;
    //让显示的刻度是整数
    return maxval;
}

var max = Math.ceil(calMax([getmyd]) / 10) * 10;
option = {
    backgroundColor: backgroundColor,
    grid: {
        left: '12%',
        right: '13%',
        bottom: '10%',
        top: '10%',
        containLabel: true,
    },
    tooltip: {
        formatter: (params) => {
            if (params.name !== '') {
                return params.name + ' : ' + getmyd[params.dataIndex];
            }
        },
        textStyle: {
            align: 'left',
        },
    },
    xAxis: [
        {
            type: 'value',
            axisLabel: {
                show: false,
                color: '#fff',
                formatter: function (val) {
                    return val + '';
                },
                textStyle: {
                    fontSize: '13',
                },
            },
            min: 0,
            max: max, // 计算最大值
            interval: max / 5, //  平均分为5份
            splitNumber: 5,
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
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
        {
            type: 'value',
            axisLabel: {
                show: false,
            },
            min: 0,
            max: max, // 计算最大值
            interval: max / 10, //  平均分为5份
            splitNumber: 10,
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed',
                    color: '#D8D8D8',
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            inverse: false,
            data: getmydmc,
            axisLabel: {
                padding: [0, 0, 40, 0],
                inside: true,
                textStyle: {
                    fontSize: 20,
                    fontFamily: 'PingFang SC',
                    fontWeight: 400,
                    color: '#B1C3DD',
                    align: 'left',
                },

                formatter: '{value}\n{a|占位}',
                rich: {
                    a: {
                        color: 'transparent',
                        lineHeight: 30,
                        fontFamily: 'digital',
                        fontSize: 20,
              shadowColor: 'rgba(0, 0, 0, 1)',
                shadowBlur: 10,
                    },
                },
            },
            // offset: 0,
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
        },

        {
            //左侧柱状图的Y轴
            gridIndex: 0, //y轴所在的 grid 的索引
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            data: getmyd,
            inverse: true,
            axisLabel: {
                show: true,
                verticalAlign: 'bottom',
                align: 'right',
                padding: [0, 10, 30, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: '20',
                },
                formatter: function (value) {
                    return '{x|' + value + '}  {y|' + '%}';
                },
                rich: {
                    y: {
                        color: '#3dffef',
                        fontFamily: 'Orbitron',
                        fontSize: 20,
                    },
                    x: {
                        color: '#3dffef',
                        fontFamily: 'Orbitron',
                        fontSize: 20,
                    },
                },
            },
        },
    ],
    dataZoom: [
        {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 100,
            orient: 'vertical',
            zlevel: 66,
        },
    ],
    series: [
        {
            name: '值',
            type: 'bar',
            barGap: '-130%',
            // zlevel: 1,
            xAxisIndex: 0,
            label: {
                show: false,
                position: 'right',
                textStyle: {
                    color: '#fff',
                    fontSize: 20,
                },
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 4,
                    color: {
                        colorStops: [
                            {
                                offset: 0,
                                color: '#46B7ED', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#48EDD3', // 100% 处的颜色
                            },
                        ],
                    },
                },
            },
            barWidth: 26,
            data: getmyd,
            z: 0,
        },
        {
            // 分隔
            type: 'pictorialBar',
            symbolRotate: '-20',
            itemStyle: {
                normal: {
                    color: 'rgba(1, 12, 38, 0.4)',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 10,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [5, 28],
            symbolPosition: 'start',
            symbolOffset: [0, -1],
            data: getmyd,
            z: 66,
            animationEasing: 'elasticOut',
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 32,
            barGap: '-110%',
            data: getmydzd,
            itemStyle: {
                normal: {
                    color: 'rgba(5,59,113,.7)',
                    barBorderRadius: 6,
                    borderColor: 'rgba(0, 255, 236, 1)',
                },
            },
            z: -1,
        },
    ],
};
