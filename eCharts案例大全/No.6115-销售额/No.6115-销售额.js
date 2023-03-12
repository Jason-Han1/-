option = {
    legend: {data: ['历史期销售额', '预测期销售额'],
        top: '90%'
        },
    grid: {
        top: "10%",
        right: "4%",
        left: "10%",
        bottom: "20%"
    },
    toolbox: {
    feature: {
            saveAsImage: {}
    }
        },
    xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisLabel: {
            textStyle: {
                fontSize: 8,
            },
        },
    },
    yAxis: {
        min: 0,
        max: 500,
        interval: 250,
        axisLabel: {
            textStyle: {
                fontSize: 11,
            },
        },
    },
    series: [{
            name:"历史期销售额",
            type: 'line',
            smooth: true,
            data: [300, 310, 293, 330, 341, 321, 451, 231, 278, 341, 321, 300],
            color: '#d5e8e4',
            areaStyle: {
                color: echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#d5e8e4',
                    },
                    {
                        offset: 1,
                        color: '#ffff',
                    },
                ]),
            },
        },
        {
            name:"预测期销售额",
            type: 'line',
            smooth: true,
            data: [278, 289, 290, 411, 341, 330, 368, 389, 341, 321, 330, 321],
            color: '#026143'
        },
    ],
}