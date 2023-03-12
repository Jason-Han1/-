option = {
    backgroundColor: "#030c23",
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        showContent: false
    },
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
            color: "#c2c2c2"
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#1c2946"
            }
        }
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: "#1c2946"
            }
        }

    }],
    series: [{
        name: '区域分析',
        type: 'bar',
        barWidth: 20,
        data: [10, 52, 200, 334, 320, 330, 220],
        label: {
            show: false,
            
        },
        emphasis: {
            label: {
                show: true,
                color: "#30cc77",
                position: "top",
                fontWeight: "bold"
            }
        },
        itemStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                        offset: 0,
                        color: 'rgba(48, 204, 119, 1)'
                    },
                    {
                        offset: 0.5,
                        color: 'rgba(29, 122, 89, .8)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(10, 47, 49, .6)'
                    }
                ]
            ),
            barBorderRadius:[10, 10, 0, 0]
        }
    }]
};