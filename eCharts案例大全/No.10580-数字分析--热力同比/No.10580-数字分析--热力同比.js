var legendData = ['今日', '昨日'];
var xdata = [0, 500, 1000, 1500, 2000, 2500, 3000, 3500];
var xdata2 =  [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000];
var dataArr=[
     [8400, 12500, 4200],
     [800, 2800, 1600]
    ];
option = {
    backgroundColor: 'rgba(0,0,0,.5)',
    tooltip: {
        // trigger: 'axis'
    },
    grid: {
        // left: "8%",
        // top: "12%",
        // right: "5%",
        // bottom: "8%",
        // containLabel: true
    },
    legend: {
        data: legendData,
        textStyle: {
            color: '#fff'
        },
    },
    calculable: false,
    xAxis: [{
            type: 'value',
            // boundaryGap: [0, 1],
            data: xdata,
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: "#02E3FF",
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0)'
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#DDD'
                }
            },
        },
        {
            // type: 'category',
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0)'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                   color: "#02E3FF",
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#DDD'
                }
            },
            data:xdata2
        }
    ],
    yAxis: [{
            type: 'category',
            data: ['车流', '客流', '资源消耗'],
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: '#D5CBE8'
                }
            },
            axisTick: "none",
            axisLine: {
                lineStyle: {
                    color: '#135184',
                    width: 3
                }
            },
        },

    ],
    series: [{
            name: legendData[0],
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#248ff7'
                    }, {
                        offset: 1,
                        color: '#6851f1'
                    }]),
                    barBorderRadius: [0, 10, 10, 0],
                }

            },
            data:dataArr[0],
        },
        {
            name: legendData[1],
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                 normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                         color: 'rgba(1,38,93,0)'
                    }, {
                        offset: 1,
                        color: 'rgba(1,78,134.8)'
                    }]),
                    barBorderRadius: [0, 10, 10, 0],
                }
            },
            data: dataArr[1]

        }
    ]
};