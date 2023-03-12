var yAxisData = ['招生办', '就业处', '后勤', '招生办02', '就业处02', '后勤02', '招生办03', '就业处03', '后勤03'];
var option = {
    backgroundColor: '#0f375f',
    tooltip: {
        formatter: '{b} ({c})'
    },
    xAxis: [{
        gridIndex: 0,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        }

    }, ],
    yAxis: [{
        gridIndex: 0,
        interval: 0,
        data: yAxisData.reverse(),
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: "8px",
                color: "#36a8fa"
            }
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        }

    }],
    series: [{
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: '45%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(41,134,207,1)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0,255,205,.9)'
                    }], false)
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "right",
                    textStyle: {
                        color: "#00FFCD"
                    }
                }
            },
            data: ['135', '764', '692', '834', '549', '734', '861', '245', '397']
        },

    ]
};