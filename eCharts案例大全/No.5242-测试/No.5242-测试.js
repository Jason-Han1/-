var legendData = [];
var xAxisData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var seriesName1 = "人数";
var seriesName2 = "占比";
var seriesData1 = [10, 10.9, 12.4, 13.6, 19.2, 22.5, 24.6, 18.5, 18.7, 19.9, 30.8, 15.4, 16.9];
var seriesData2 = [12.6, 13.6, 11.6, 15.7, 16.6, 17.6, 16.7, 15.1, 22.4, 23.5, 13.6, 16.6, 19.6];


var option = {
    tooltip: {
        trigger: 'axis',
        formatter: '{a0}: {c0}<br />{a1}: {c1}%',
        axisPointer: {
            type: 'shadow',
            label: {
                backgroundColor: '#4c647c'
            }
        },
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    grid: {
        left: '1%',
        right: '4%',
        bottom: '6%',
        top: '15%',

        padding: '0 0 0 0',
        containLabel: true,
    },
    legend: {
        // x: '50%',
        icon: "circle",
        bottom: 'bottom',
        itemGap: 300,
        textStyle: {
            color: '#4c647c',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        },
        data: name,
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: xAxisData,
        axisLabel: {
            interval: 0,
            margin: 15,
            textStyle: {
                color: '#4c647c',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        axisTick: {
            show: false,
        },

        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#4c647c',
                opacity: 0.6
            }
        },
        splitLine: {
            show: false,
        }
    }],
    yAxis: [{
            type: 'value',
            splitNumber: 5,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#4c647c',
                    fontStyle: '{value}',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: ['#000'],
                    opacity: 0.2
                }
            }

        },
        {
            type: 'value',
            splitNumber: 5,
            axisLabel: {
                formatter: '{value}%',
                textStyle: {
                    color: '#4c647c',
                    fontStyle: '{value}',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {

                    color: ['#000'],
                    opacity: 0.06
                }
            }

        }
    ],
    series: [{
            name: seriesName1,
            type: 'line',
            data: seriesData1,
            symbolSize: 0,
            barWidth: 10,
            barGap: 0,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 3,

                    },
                    barBorderRadius: 20,
                    color: '#1a92f8',
                },
            },
        },
        {
            name: seriesName2,
            type: 'line',
            data: seriesData2,
            symbolSize: 0,
            yAxisIndex: 1,
            barGap: 1,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 3,

                    },
                    barBorderRadius: 20,
                    color: '#52cc76',
                },
            },
        },

    ]
};