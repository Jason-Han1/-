var xData = [
    '幼儿：1-6周岁',
    '儿童：7-14周岁',
    '少年：13-18周岁',
    '青年：19-44周岁',
    '中年：45-59周岁',
    '老年：60周岁以上'
];
var lastYearData = [
    20,
    86,
    52,
    10,12,45
];
var thisYearData = [
    40,
    11,
    45,
    11,
    25,55
];

var option = {
    
    baseOption: {
        tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
        backgroundColor: '#363636',
        timeline: {
            show: false,
            top: 0,
        },
        legend: {
            top: '5%',
            right: 'center',
            icon: 'horizontal',
            textStyle: {
                color: '#ffffff',
                fontSize: 16,
            },
            data: ['女性', '男性'],
        },
        grid: [
            {
                show: false,
                left: '3%',
                top: '14%',
                bottom: '5%',
                width: '35%',
            },
            {
                show: false,
                left: '51%',
                top: '14%',
                bottom: '5%',
            },
            {
                show: false,
                right: '3%',
                top: '14%',
                bottom: '5%',
                width: '35%',
            },
        ],
        xAxis: [
            {
                type: 'value',
                inverse: true,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                },
            },
            {
                gridIndex: 1,
                show: false,
            },
            {
                gridIndex: 2,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                },
            },
        ],
        yAxis: [
            {
                type: 'category',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                data: xData,
            },
            {
                gridIndex: 1,
                position: 'left',
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 16,
                    },
                },
                data: xData.map(function (value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center',
                        },
                    };
                }),
            },
            {
                gridIndex: 2,
                type: 'category',
                position: 'left',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                data: xData,
            },
        ],
        series: [
                {
                    name: '女性',
                    type: 'bar',
                    barWidth: 12,
                    stack: '1',
                    itemStyle: {
                        normal: {
                            color: '#FB6565',
                            barBorderRadius: [8, 0, 0, 8]
                        }
                    },
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    data: lastYearData,
                },
                {
                    name: '男性',
                    type: 'bar',
                    barWidth: 12,
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    itemStyle: {
                        normal: {
                            color:'#3E8FF9',
                            barBorderRadius: [0, 8, 8, 0]
                        },
                    },
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    data: thisYearData,
                },],
    },
};
