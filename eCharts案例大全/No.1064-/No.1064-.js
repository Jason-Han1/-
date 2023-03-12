var xData = ['AAAAAAAAAAAAAAA', 'B', 'C', 'D', 'E', 'F', 'G'];
var lineData = [100, 100, 100, 100, 100, 100, 100];
var lastYearData = [3, 20, 122, 134, 55, 65, 33];
var thisYearData = [11, 38, 23, 139, 66, 66, 79];
var timeLineData = [1];
let legend = ['上月', '本月'];
var background = '#36467E' // 背景
let textColor = '#fff';
let lineColor = 'rgba(255,255,255,0.2)';
let colors = [
    {
        borderColor: 'rgba(255,204,0,1)',
        start: 'rgba(255,204,0,1)',
        end: 'rgba(255,204,0,0)',
    },
    {
        borderColor: 'rgba(250,88,50,1)',
        start: 'rgba(250,88,50,0)',
        end: 'rgba(250,88,50,1)',
    },
];
let borderData = [];
let scale = 2;
borderData = xData.map((item) => {
    return scale;
});
option = {
    baseOption: {
        backgroundColor: background,
        timeline: {
            show: false,
            top: 0,
            data: [],
        },
        legend: {
            top: '0',
            right: 'center',
            width: '100%',
            itemWidth: 0,
            itemHeight: 0,
            itemGap: 130,
            orient: 'horizontal',
            textStyle: {
                color: '#70c5ff',
                fontSize: 14,
                fontWeight: '700',
            },
            data: legend,
        },
        grid: [
            {
                show: false,
                left: '5%',
                top: '15%',
                bottom: '11%',
                containLabel: true,
                width: '26%',
            },
            {
                show: false,
                left: '51%',
                top: '15%',
                bottom: '11%',
                width: '0%',
            },
            {
                show: false,
                right: '5%',
                top: '15%',
                bottom: '11%',
                containLabel: true,
                width: '26%',
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
                position: 'top',
                axisLabel: {
                    show: false,
                    color: textColor,
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: lineColor,
                    },
                },
            },
            {
                gridIndex: 1,
                show: false,
            },
            {
                gridIndex: 2,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: 'top',
                axisLabel: {
                    show: false,
                    color: textColor,
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: lineColor,
                    },
                },
            },
        ],
        yAxis: [
            {
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: lineColor,
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
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    width: '100%',
                    padding: [0, 10, 0, 10],
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 15,
                    },
                    ellipsis: '...',
                    align: 'center',
                },
                data: xData.map(function (value) {
                    let str = value.length > 6 ? value.substring(0, 6) + '...' : value;
                    return {
                        value: str,
                        textStyle: {
                            align: 'center',
                        },
                    };
                }),
            },
            {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: lineColor,
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
        series: [],
    },
    options: [],
};
option.baseOption.timeline.data.push(timeLineData[0]);
option.options.push({
    series: [
        {
            name: '上月',
            type: 'bar',
            // barWidth: 25,
            stack: '1',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
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
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    color: '#ffcc00',
                    fontSize: 13,
                },
            },
            data: lastYearData,
            animationEasing: 'elasticOut',
        },
        // {
        //   name: '上月',
        //   type: 'bar',
        //   // barWidth: 25,
        //   stack: '1',
        //   itemStyle: {
        //     normal: {
        //       color: colors[0].borderColor

        //     }
        //   },
        //   data: borderData
        // },
        {
            name: '本月',
            type: 'bar',
            stack: '2',
            // barWidth: 25,
            xAxisIndex: 2,
            yAxisIndex: 2,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: colors[1].start,
                        },
                        {
                            offset: 1,
                            color: colors[1].end,
                        },
                    ]),
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    color: '#ff7656',
                    fontSize: 13,
                },
            },
            data: thisYearData,
            animationEasing: 'elasticOut',
        },
        // {
        //   name: '本月',
        //   type: 'bar',
        //   xAxisIndex: 2,
        //   yAxisIndex: 2,
        //   // barWidth: 25,
        //   stack: '2',
        //   itemStyle: {
        //     normal: {
        //       color: colors[1].borderColor

        //     }
        //   },
        //   data: borderData
        // }
    ],
});
