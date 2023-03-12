

//数据较多的情况，这也是个办法
option = {
    backgroundColor: "#fff",
    tooltip: {
        trigger: 'axis',
        show: true,
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '15%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
        },
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
    },
    yAxis: {
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
    },
    
    //下面可以根据自己个性化一些 STYLE
    dataZoom: [{
        show: true,
        height: 30,
        xAxisIndex: [0],
        bottom: 30,
        "start": 10,
        "end": 80,
        handleStyle: {
            color: "#5B3AAE",
        },

    }, {
        type: "inside",
        show: true,
        height: 15,
        start: 1,
        end: 35
    }],
    series: [{
        name:'A',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 13,
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
                    shadowBlur: 5,
                    shadowOffsetY: 20,
                    shadowOffsetX: 0,
                    color: '#fb7636',
                }
            },
            itemStyle: {
                color: '#fb7636',
                borderColor: "#fff",
                borderWidth: 2,
            },

            data: [5, 10, 41, 35, 51, 49, 62, 10, 41, 35, 51, 49, 62]
        },
        {
            name:'B',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 13,
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
                    shadowBlur: 5,
                    shadowOffsetY: 20,
                    shadowOffsetX: 0,
                    color: '#24b314',
                }
            },
            itemStyle: {
                color: '#24b314',
                borderColor: "#fff",
                borderWidth: 2,
            },

            data: [50, 20, 35, 20, 75, 30, 60, 20, 35, 20, 75, 30, 60]
        },
        {
            name:'C',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 13,
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
                    shadowBlur: 5,
                    shadowOffsetY: 20,
                    shadowOffsetX: 0,
                    color: '#027ad7',
                }
            },
            itemStyle: {
                color: '#027ad7',
                borderColor: "#fff",
                borderWidth: 2,
            },

            data: [15, 30, 15, 40, 55, 20, 40, 30, 15, 40, 55, 20, 40]
        },
        { 
            name:'D',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 13,
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
                    shadowBlur: 5,
                    shadowOffsetY: 20,
                    shadowOffsetX: 0,
                    color: '#8452e7',
                }
            },
            itemStyle: {
                color: '#8452e7',
                borderColor: "#fff",
                borderWidth: 2,
            },

            data: [5, 60, 20, 45, 15, 55, 25, 60, 20, 45, 15, 55, 25]
        },
    ]
};