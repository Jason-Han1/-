var dataAll = [389, 259, 262, 324, 232, 176, 196, 214, 133, 370];
var yAxisData = ['摄001', '温湿仪002', '摄003', '温湿仪004', '摄004', '摄005', '摄006', '摄008', '摄009', '摄010'];
var option = {
    backgroundColor: '#0c2127',
    grid: {
        top:'10%',
        left:"10%",
        bottom:"10%",
        right:"10%",
        containLabel: true
    },
    tooltip: {
        formatter: '{b} ({c})'
    },
    xAxis: [{
        gridIndex: 0,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#839fa7'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#1d3237"
            }

        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#1d3237"
            }

        }
    }],
    yAxis: [{
        gridIndex: 0,
        interval: 0,
        data: yAxisData.reverse(),
        axisTick: {
            show: true
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#839fa7'
            }
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#1d3237"
            }
        },
    }],
    series: [


        {
            name: '投诉原因TOP10',
            type: 'bar',
            xAxisIndex: 0,
            barWidth: '45%',
            itemStyle: {
                barBorderRadius: 0,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#3fb1d1'
                    },
                    {
                        offset: 1,
                        color: '#3fd1cf'
                    }
                ])
            },
            data: dataAll.sort(),
        },

    ]
};