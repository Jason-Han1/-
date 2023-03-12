var data = [120, 75, 110, 160, 130, 80, 110]
var xdata = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
option = {
    backgroundColor: new echarts.graphic.RadialGradient(0, 0, 0.8, [{
        offset: 0,
        color: '#a1a1a1'
    }, {
        offset: 1,
        color: '#050505'
    }]),
    tooltip: {},
    title: {
        text: "蚂蚁和大象",
        subtext: '一只蚂蚁在沙滩上，忽然对大象说：“站起来！”大象站起来了，他又\n说“坐下!”大象不解问：“干嘛？”蚂蚁说：“我的内裤丢了，我看看你有没有偷穿......”',
        textStyle: {
            color: "#fff",
            fontSize: 20
        },
        subtextStyle: {
            color: "#878787",
            fontSize: 14
        },
        left: 'center',
        top: "30"
    },
    grid: {
        left: "20px",
        top: "25%",
        bottom: "20px",
        right: "20px",
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
            color: "#878787",
            fontSize: 14,
            margin: 20
        }
    },
    yAxis: {
        type: 'value',
        splitNumber: 4,
        interval: 50,
        splitLine: {
            show: true,
            lineStyle: {
                color: "#878787",
                type: 'dashed'
            }
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            color: "#878787",
            fontSize: 14
        }
    },
    series: [{
            type: 'bar',
            barWidth: 4,
            data: data,
            color: "#fff",
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, 0.8)',
                    shadowBlur: 0,
                }
            },
            label: {
                show: false,
                position: 'top',
                offset: [0, -15],
                fontSize: 16,

            }
        },
        {
            type: 'scatter',
            symbolSize: 30,
            itemStyle: {
                borderWidth: 2.5,
                borderColor: "#fff",
                color: "rgba(0, 0, 0, 0)",
                opacity: 1
            },
            silent: true,
            data: data
        },
        {
            type: 'scatter',
            symbolSize: 20,
            itemStyle: {
                color: {
                    type: 'radial',
                    r: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#0f0'
                    }, {
                        offset: 1,
                        color: 'rgba(255,255,255, 0)'
                    }],
                    global: false
                },
            },
            silent: true,
            data: data
        }
    ]
}