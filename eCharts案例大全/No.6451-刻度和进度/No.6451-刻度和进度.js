sumNum = 1000;
successNum = 875;
option = {
    title: {
        show: true,
        text: '数量：' + successNum,
        top: 10,
        left: 10,
        textStyle: {
            color: '#4E7490'
        }
    },
    backgroundColor: "#000D13",
    tooltip: {
        show: false,
    },
    legend: {
        show: false
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        height: 200,
    },
    xAxis: {
        max: sumNum,
        type: 'value',
        boundaryGap: [0, 0.01],
        minorTick: {
            show: true,
            length: 10,
            lineStyle: {
                width: 3,
                color: '#4E7490'
            },
            splitNumber: 10
        },
        axisLabel: {
            show: true,
            inside: false,
            margin: 27,
            color: '#4E7490'

        },
        axisTick: {
            show: true,
            length: 20,
            inside: false,
            lineStyle: {
                width: 3,
                color: '#4E7490'
            }

        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        position: "top",
        offset: -67
    },
    yAxis: {
        type: 'category',
        data: ['数量'],
        show: false
    },
    series: [{
        name: '数量',
        type: 'bar',
        itemStyle: {
            barBorderRadius: [15, 15, 15, 15],
            color: new echarts.graphic.LinearGradient(
                0, 0, 1, 0,
                [{
                        offset: 0,
                        color: '#6faaed'
                    },
                    {
                        offset: 1,
                        color: '#1edaf6'
                    }
                ]
            )

        },
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(4, 38, 64, 0.8)',
            barBorderRadius: [15, 15, 15, 15]
        },
        barWidth: 16,
        data: [successNum]
    }, ]
};