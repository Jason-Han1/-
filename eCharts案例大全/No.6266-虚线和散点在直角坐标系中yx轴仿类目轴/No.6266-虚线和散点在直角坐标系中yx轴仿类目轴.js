// x轴位于top
option = {
    backgroundColor: '#232d36',
    grid: {
        top: '45%',
        left: '10%',
        right: '5%',
        bottom: '25%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: false,
            color: '#A582EA'
        },
        position: 'top',
        axisLabel: {
            color: '#A582EA',
            width: 100,
            interval: 0,
            fontSize: 20
        },
        splitLine: {
            show: false
        },
        offset: 20,
        data: ["四平2", "四平", "四平3", "四平4", "四平5"] //this.$moment(data.times).format("HH-mm") ,

    }],

    yAxis: [{
        min: 1,
        max: 2,
        splitNumber: 1,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#00667e',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            margin: 20,
            color: function(value, index) {
                if (index == 0) {
                    return '#0a65a4'
                } else {
                    return '#239996'
                }
            },
            formatter: function(value, index) {
                if (index == 0) {
                    return '真实路径'
                } else {
                    return '交易路径'
                }
            }
        },
        axisTick: {
            show: false,
        }
    }],
    series: [{
            name: '真实路径',
            type: 'scatter',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#0daaf2'
                    }, {
                        offset: 1,
                        color: '#2053a2'
                    }],
                    global: false
                },
                borderColor: "#A582EA",
                borderWidth: 2,
            },
            data: [2, 2, 2, 2, 2, 2]
        },
        {
            name: '交易路径',
            type: 'scatter',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                color: "#fff",
                borderColor: "#A582EA",
                borderWidth: 2,
            },
            data: [, 1, , 1, 1, 1]
        },
    ]
};