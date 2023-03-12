option = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [{
        name: '业务指标',
        type: 'gauge',
        detail: {
            formatter: '{value}%'
        },
        data: [{
            value: 50,
            name: '完成率'
        }],
        axisLine: {
            show: true,
            lineStyle: {
                color: [
                    [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0.1,
                            color: "#FFC600"
                        },
                        {
                            offset: 0.6,
                            color: "#30D27C"
                        },
                        {
                            offset: 1,
                            color: "#0B95FF"
                        }
                    ])]
                ]

            }
        }

    }]
};

setInterval(function() {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
}, 2000);