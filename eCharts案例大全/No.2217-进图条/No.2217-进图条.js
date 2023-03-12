let backgroundColor = 'rgba(0,0,0,1)';
let chartdata = [
    [12],
    ['进度'],
];

var getmydmc = chartdata[1]; //数据点名称
var getmyd = chartdata[0]; //收入金额
var getmydzd = ["100"];

let big = 10;
getmyd.forEach((el) => {
    if (!(el === undefined || el === '')) {
        if (big < Number(el)) {
            big = Number(el);
        }
    }
});
var max = 100;
option = {
    backgroundColor: backgroundColor,
    grid: {
        left: '3%',
        right: '13%',
        bottom: '10%',
        top: '10%',
        containLabel: true,
    },
    tooltip: {
        formatter: (params) => {
            if (params.name !== '') {
                return params.name+ ' : ' + getmyd[params.dataIndex];
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
                margin: 5,
                color: '#fff',
                formatter: function (val) {
                    return val + '';
                },
                textStyle: {
                    fontSize: '0',
                },
            },
            min: 0,
            max: max, // 计算最大值
            // interval: max / 5, //  平均分为5份
            splitNumber: 15,
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
            type: 'category',
            inverse: true,
            //  boundaryGap:true,
            axisLabel: {
                show: false,
                formatter: (value, index) => {
                    if (value.length >= 12) {
                        value = value.slice(0, 12) + `\n` + value.slice(12);
                    }
                    if (value.length >= 26) {
                        value = value.slice(0, 26) + `\n` + value.slice(26);
                    }
                    return value;
                },
                textStyle: {
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '12',
                    align: 'right',
                    lineHeight: 18,
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                    width: 1,
                    opacity: 0.3,
                },
            },
            data: getmydmc,
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
                                color: '#40cbe8', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#3afbc2', // 100% 处的颜色
                            },
                        ],
                    },
                },
            },
            barWidth: 30,
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
            symbolMargin: 12,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [2, 30],
            symbolPosition: 'start',
            symbolOffset: [-1, 1],
            data: getmydzd,
            z: 66,
            animationEasing: 'elasticOut',
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 29,
            barGap: '-100%',
            xAxisIndex: 1,
            data: getmydzd,
            itemStyle: {
                normal: {
                    color: {
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(24,144,255,0.3)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(99,180,255,0.3)', // 100% 处的颜色
                            },
                        ],
                    },
                },
            },
            z: 0,
        },
        {
            // 外边框
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: 'none',
                },
            },
            label: {
                normal: {
                    formatter: (params) => {
                        var text;
                        if (params.dataIndex == 1) {
                            text = '{f|  ' + params.data + '}';
                        } else if (params.dataIndex == 2) {
                            text = '{f|  ' + params.data + '}';
                        } else if (params.dataIndex == 3) {
                            text = '{f|  ' + params.data + '}';
                        } else {
                            text = '{f|  ' + params.data + '}';
                        }
                        return text;
                    },
                    rich: {
                        f: {
                            color: '#ccfff4',
                            fontSize: '22',
                        },
                    },
                    position: 'right',
                    padding: [0, 0, 0, -10],
                    show: true,
                },
            },
            data: getmyd,
            z: 77,
            animationEasing: 'elasticOut',
        },
    ],
};
