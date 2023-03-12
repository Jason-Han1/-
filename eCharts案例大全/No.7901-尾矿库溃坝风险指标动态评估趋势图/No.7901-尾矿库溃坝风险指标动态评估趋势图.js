option = {
    color: '#61a0d7',
    grid: {
        bottom: 60,
    },
    title: {
        text: '尾矿库溃坝风险指标动态评估趋势图',
        x: 'center',
        textStyle: {
            fontWeight: 400,
            fontSize: '13'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        type: 'line',
        data: [30, 61, 62, 52,34, 51, 66, 790, 48, 25],
        markLine: {
            lineStyle: {
                width: 1
            },
            label: {
                position: 'insideEndTop',
                formatter: '{b}',
                color: '#333'
            },
            symbolSize: 0,
            data: [{
                    name: '红色风险',
                    yAxis: 720,
                    lineStyle: {
                        color: '#f60902'
                    }
                },
                {
                    name: '橙色风险',
                    yAxis: 240,
                    lineStyle: {
                        color: '#f89933'
                    }
                },
                {
                    name: '黄色风险',

                    yAxis: 80,
                    lineStyle: {
                        color: '#facc00'
                    }
                },
                {
                    name: '蓝色风险',
                    yAxis: 50,
                    lineStyle: {
                        color: '#65a1d7'
                    }
                }
            ]
        }
    }]
};