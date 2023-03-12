
var data = [60, 85, 10, 60, 90, 80, 90, 80, 10, 60, 70, 90, 40];
var data1 = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
var xdata = ['02', '03', '04', '05', '06', '07', '09', '10', '11', '12', '13', '14', '15'];
option = {
    backgroundColor: "#fff",
    tooltip: {
        trigger: "item",
        show: true
    },
    grid: {
        left: "10%",
        top: "35%",
        bottom: "15%",
        right: "10%",
        containLabel: true
    },
    xAxis: {
        data: xdata,
        type: 'category',
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#1F2E4D',
            fontSize: 12
        }
    },
    yAxis: {
        type: 'value',

        splitLine: {
            show: true,
            lineStyle: {
                color: '#E6E9F0'
            }
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#1F2E4D',
            fontSize: 12
        }
    },
    series: [{
            type: 'bar',
            animation: false,
            barWidth: 12,
             xAxisIndex: 0,
            yAxisIndex: 0,
            data: data,
            tooltip: {
                show: false
            },
            itemStyle: {
                 normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#8AD8F0' // 0% 处的颜色  
                }, {
                    offset: 1,
                    color: '#3377FE' // 100% 处的颜色
                }], false),
                barBorderRadius: [100, 100, 100, 100]
            }
            },
            zlevel: 11
        },
           { // For shadow
            type: 'bar',
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: ' #DBECF8',
                     barBorderRadius: [100, 100, 100, 100],
                }
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: data1,
            animation: false
        },
        {
            type: 'scatter',
            data: data,
            symbolSize: 20,
            itemStyle: {
                borderWidth: 0,
                opacity: 1,
                color: "#fff",
                shadowColor: 'rgba(20,26,46,0.20)',
                shadowBlur: 4,
            },
            zlevel: 12
        }

    ]
};