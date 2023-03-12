option = {
    backgroundColor: '#1A2447',
    tooltip: {
        show: true
    },
    grid: {
        left: '5%',
        right: '6%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        name: '年份',

        axisLine: {
            lineStyle: {
                color: '#00c7ff'
            }
        },
        data: ["2016", "2017", "2018", "2019", "2020", "2021"]
    }],
    yAxis: [{
        name: '数量（个）',
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#00c7ff'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: '专利申请',
        type: 'bar',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        itemStyle: {
            normal: {
                color: '#7370fd',
            }
        },
        data: [5, 20, 40, 10, 10, 20]
    }]
};