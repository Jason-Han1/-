(plantCap = [
    {
        name: '63\n社保',
        value: [56, 48],
        symbolSize: 120,
    },
    {
        name: '115\n执法',
        value: [20, 80],
        symbolSize: 80,
    },

    {
        name: '95\n其他',
        value: [85, 20],
        symbolSize: 50,
    },
    {
        name: '92\n建设',
        value: [10, 20],
        symbolSize: 80,
    },

    {
        name: '60\n管理',
        value: [92, 70],
        symbolSize: 65,
    },
]),
    (option = {
        xAxis: {
            show: false,
        },
        yAxis: {
            show: false,
        },
        grid: {
            top: '25%',
            bottom: '0%',
        },
        series: [
            {
                symbolSize: 120,
                data: plantCap,
                type: 'scatter',
                label: {
                    normal: {
                        show: true,
                        formatter: '{b}',
                        color: '#fff',
                        textStyle: {
                            fontSize: '12',
                        },
                        lineHeight: 16,
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#1469A7',
                        opacity: 0.9,
                    },
                },
            },
        ],
    });
myChart.setOption(option);
