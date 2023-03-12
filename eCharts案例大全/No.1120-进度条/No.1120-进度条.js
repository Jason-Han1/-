let backgroundColor = 'rgba(0,0,0,1)';
let chartData = [
    [0,20,333, 0],
    ['AAA', 'BBB', 'CCC', 'DDD'],
];
let getmydmc = chartData[1]; //数据点名称
let getmyd = chartData[0]; //收入金额
let getmydzd = [];

let big = 0;
getmyd.forEach((el) => {
    if (!(el === undefined || el === '' || el === 0)) {
        if (big < Number(el)) {
            big = Number(el);
        }
    } else {
        big = 100;
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
            if (!(el1 === undefined || el1 === '' || el1 === 0)) {
                if (max < Number(el1)) {
                    max = Number(el1);
                }
            } else {
                max == 100;
            }
        });
    });
    let maxint = Math.ceil(max / 9.5);
    //不让最高的值超过最上面的刻度
    let maxval = maxint * 10;
    //让显示的刻度是整数
    return maxval;
}

const max = Math.ceil(calMax([getmyd]) / 10) * 10;

option = {
    backgroundColor: backgroundColor,
    grid: {
        left: '10%',
        right: '10%',
        bottom: '0%',
        top: '5%',
        // containLabel: true,
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
                padding: [0, 0, 20, -10],
                inside: true,
                textStyle: {
                    fontSize: 14,
                    fontFamily: 'PingFang SC',
                    fontWeight: 400,
                    color: '#d2d2d2',
                    align: 'left',
                    textShadowColor: '#00d6ff',
                    textShadowOffsetX: 0,
                    textShadowOffsetY: 0,
                    textShadowBlur: 5,
                },
                formatter: '{value}\n{a|占位}',
                rich: {
                    a: {
                        color: 'transparent',
                        lineHeight: 30,
                        fontFamily: 'digital',
                        fontSize: 14,
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
            inverse: false,
            axisLabel: {
                show: true,
                verticalAlign: 'bottom',
                align: 'right',
                padding: [0, 10, 18, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: '14',
                },
                formatter: function (value) {
                    return '{x|' + value + '}';
                    // return '{x|' + value + '}  {y|' + '%}';
                },
                rich: {
                    y: {
                        color: '#3dffef',
                        fontFamily: 'Orbitron',
                        fontSize: 14,
                    },
                    x: {
                        color: '#3dffef',
                        fontFamily: 'Orbitron',
                        fontSize: 14,
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
            // barGap: '100%',
            padding: 10,
            // zlevel: 1,
            xAxisIndex: 0,
            label: {
                show: false,
                position: 'right',
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                },
            },
            itemStyle: {
                normal: {
                    borderRadius: 0,
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
            barWidth: 18,
            data: getmyd,
            z: 0,
        },
        {
            // 分隔
            type: 'pictorialBar',
            symbolRotate: '-25',
            itemStyle: {
                normal: {
                    color: 'rgba(1, 12, 38, 0.4)',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 6,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [5, 22],
            symbolPosition: 'start',
            symbolOffset: [0, -2],
            data: getmyd,
            z: 66,
            animationEasing: 'elasticOut',
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 24,
            barGap: '-118%',
            data: getmydzd,
            itemStyle: {
                normal: {
                    color: 'rgba(5,59,113,0.7)',
                    borderRadius: 0,
                    // borderColor: 'rgba(0, 255, 236, 1)',
                    borderColor: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#015EFE', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#10C2E8', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                },
            },
            z: -1,
        },
        {
            type: 'pictorialBar',
            name: '左内边框',
            symbol: 'rect',
            symbolSize: [3, 22],
            symbolOffset: [0, -2],
            animation: false,
            // symbolKeepAspect: true,
            // animationEasing: 'none',
            itemStyle: {
                normal: {
                    color: 'rgba(5,59,113,1)',
                },
                opacity: 1,
            },
            z: 99,
            data: new Array(getmyd.length).fill(1),
        },
    ],
};
