option = {
    backgroundColor: "black",
    xAxis: {
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'],
        axisLine: {
            show: false
        },
        axisLabel: {
            color: "#A3C7E7",
            margin: 20
        }

    },
    yAxis: {
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color: "#96F5F6"
        }
    },
    series: [{
            type: 'line',
            data: [32, 30, 15, 45, 35, 28, 34],
            itemStyle: {
                color: "green"
            },
            symbol: 'circle',
            symbolSize: 6
        },
        {
            type: 'line',
            data: [17, 20, 28, 22, 27, 17, 29, 19],
            itemStyle: {
                color: "red"
            },
            symbol: 'circle',
            symbolSize: 6
        },
        {
            type: 'line',
            data: [16, 11, 1, 28, 17, 9, 16],
            itemStyle: {
                color: "blue"
            },
            symbol: 'circle',
            symbolSize: 6
        },
        {
            type: 'line',
            data: [0, 3, 9, 5, 9, 2, 10, 2],
            itemStyle: {
                color: "orange"
            },
            symbol: 'circle',
            symbolSize: 6
        }
    ]
};