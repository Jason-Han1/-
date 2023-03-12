option = {
    backgroundColor: '#000',
    grid: {
        top: 40,
        left: 90,
        right: 40,
        bottom: 40
    },
    legend: {
        data: ['折线1', '折线2'],
        left: 30,
        icon: "rect",
        itemWidth: 30,
        itemHeight: 2,
        textStyle: {
            color: "#fff"
        }
    },
    tooltip: {
        trigger: "axis"
    },
    xAxis: {
        type: "category",
        axisTick: {
            show: false
        },
        axisLabel: {
            color: "#fff"
        },
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        },
        boundaryGap: false,
        data: [1, 2, 3, 4, 5, 6, 7]
    },
    yAxis: {
        type: "value",
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: "#fff"
        },
        splitLine: {
            lineStyle: {
                opacity: 0.5
            }
        }
    },
    series: [{
        name: '折线1',
        data: [200, 134, 305, 200, 89, 100, 300],
        type: "line",
        showSymbol: false,
        itemStyle: {
            color: '#3FF4B8'
        }
    },{
        name: '折线2',
        data: [210, 340, 50, 100, 69, 120, 200],
        type: "line",
        showSymbol: false,
        itemStyle: {
            color: '#FFCC33'
        }
    }]
};