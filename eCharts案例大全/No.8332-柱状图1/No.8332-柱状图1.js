option = {
    backgroundColor: '#fff',
    grid: {
          top: "8%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
    xAxis: [{
        type: "category",
        data: [1, 2, 3, 4, 5, 6, 7]
    }, {
        type: "category",
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: [1, 2, 3, 4, 5, 6, 7]
    }],
    yAxis: [{
        type: "value",
        name: "",
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
            type: 'bar',
            barWidth: 18,
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 6,
                    color: 'rgba(225,225,225,0.4)'
                }
            },
            data: [5000, 5000, 5000, 5000, 5000, 5000, 5000,]
        },
        {
            type: 'bar',
            barWidth: 18,
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 6,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3D9FFF'
                    }, {
                        offset: 0.8,
                        color: '#41D0F3'
                    }], false)
                }
            },
            data: [254, 3254, 1654, 2454, 4757, 2011, 1211]
        }
    ]
};