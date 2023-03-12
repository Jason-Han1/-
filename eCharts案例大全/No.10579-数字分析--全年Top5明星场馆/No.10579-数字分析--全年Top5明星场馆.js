
var xdata = [0, 500, 1000, 1500, 2000, 2500, 3000, 3500];
var ydata = ['D区出口1', 'B区出口2', 'D区出口2','C区出口1','E区出口2'];
var dataArr = [3400, 3200, 2700,2600,2000];
option = {
    backgroundColor: 'rgba(0,0,0,.5)',
    tooltip: {
        // trigger: 'axis'
    },
    grid: {
        left: "8%",
        top: "12%",
        right: "5%",
        bottom: "5%",
        containLabel: true
    },
    calculable: true,
    xAxis: [{
            type: 'value',
            boundaryGap: [0, 1],
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
       
    ],
    yAxis: [{
            type: 'category',
            data: ydata,
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
            type: 'bar',
            barWidth: 20,
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
            data: dataArr,
        },
    ]
};