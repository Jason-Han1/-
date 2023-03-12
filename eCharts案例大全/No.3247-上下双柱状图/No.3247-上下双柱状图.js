var xData = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var lineData = [100, 100, 100, 100, 100, 100, 100];
var lastYearData = [1, 1, 3, 4, 5, 6, 7];
var thisYearData = [7, 6, 5, 4, 3, 2, 1];
let legend = ['2017', '2018'];
let colors = [
    {
        borderColor: 'rgba(227,161,96,1)',
        start: 'rgba(227,161,96,0.8)',
        end: 'rgba(227,161,96,0.3)',
    },
    {
        borderColor: 'rgba(0,222,255,1)',
        start: 'rgba(0,222,255,0.3)',
        end: 'rgba(0,222,255,0.8)',
    },
];

var option = {
    baseOption: {
        timeline: {
            show: false,
            top: 0,
            data: [],
        },
        legend: {
            top: '5%',
            right: '5%',
            itemWidth: 20,
            itemHeight: 5,
            data: legend,
        },
        grid: [
            {
                show: false,
                top: '52%',
                containLabel: true,
                width: '100%',
            },
            {
                show: false,
                top: '49%',
                height: 0,
                left: '11.6%',
                containLabel: true,
                width: '100%',
            },
            {
                show: false,
                bottom: '52%',
                containLabel: true,
                width: '100%',
            },
        ],
        xAxis: [
            {
                type: 'category',
                position: 'top',
                data: xData,
                axisLine: {
                    show: true,
                },

                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                inverse: false,
            },
            {
                gridIndex: 1,
                type: 'category',
                inverse: false,
                position: 'top',
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    padding: [30, 0, 0, 0],
                    textStyle: {
                        fontSize: 20,
                    },
                    align: 'center',
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
                position: 'bottom',
                inverse: false,
                data: xData,
                axisLine: {
                    show: true,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
            },
        ],
        yAxis: [
            {
                type: 'value',
                inverse: true,
                position: 'top',
                axisLine: {
                    show: true,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                },
                splitLine: {
                    show: true,
                },
            },
            {
                gridIndex: 1,
                show: false,
            },
            {
                gridIndex: 2,
                inverse: false,
                position: 'bottom',
                axisLine: {
                    show: true,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                },
                splitLine: {
                    show: true,
                },
            },
        ],
        series: [],
    },
    options: [
        {
            series: [
                {
                    name: '2017',
                    type: 'bar',
                    barWidth: 25,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: colors[0].start,
                                },
                                {
                                    offset: 1,
                                    color: colors[0].end,
                                },
                            ]),
                        },
                    },
                    data: lastYearData,
                    animationEasing: 'elasticOut',
                },
                {
                    name: '2018',
                    type: 'bar',
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    barWidth: 25,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'red',
                                },
                                {
                                    offset: 1,
                                    color: colors[1].end,
                                },
                            ]),
                        },
                    },
                    data: thisYearData,
                },
            ],
        },
    ],
};
