option = {
    backgroundColor: "#fff",
    tooltip: {
        trigger: 'axis',
        show: true,
    },
    legend: {
        show: true,
        icon: 'circle',
        top: 20,
        textStyle: {
            fontSize: 12,
            color: '#c8c8c8'
        },
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
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    },
    yAxis: {
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
    },
    series: [{
        name:'实时',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 13,
            lineStyle: {
                normal: {
                    width: 3,
                    color: '#10D3F2',
                }
            },
            itemStyle: {
                color: '#10D3F2',
                borderColor: "#fff",
                borderWidth: 2,
            },

            data: [100,200, 100, 100, 100, 100, 100]
        },
        {
            name:'长沙',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 13,
            lineStyle: {
                normal: {
                    width: 3,
                    color: '#4DCFB3',
                }
            },
            itemStyle: {
                color: '#4DCFB3',
                borderColor: "#fff",
                borderWidth: 2,
            },

            data: [200,200, 200, 200, 200, 200, 200]
        },
        {
            name:'南京',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 13,
            lineStyle: {
                normal: {
                    width: 3,
                    color: '#D686FF',
                }
            },
            itemStyle: {
                color: '#D686FF',
                borderColor: "#fff",
                borderWidth: 2,
            },

            data: [300,300, 300, 300, 300, 300, 300]
        },
        { 
            name:'北京',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 13,
            lineStyle: {
                normal: {
                    width: 3,
                    color: '#DF807F',
                }
            },
            itemStyle: {
                color: '#DF807F',
                borderColor: "#fff",
                borderWidth: 2,
            },

            data: [400,400, 400, 400, 400, 400, 400]
        },
        { 
            name:'福建',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 13,
            lineStyle: {
                normal: {
                    width: 3,
                    color: '#C9A739',
                }
            },
            itemStyle: {
                color: '#C9A739',
                borderColor: "#fff",
                borderWidth: 2,
            },

            data: [500,500, 500, 500, 500, 500, 500]
        },
        { 
            name:'深圳',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 13,
            lineStyle: {
                normal: {
                    width: 3,
                    color: '#BDEB95',
                }
            },
            itemStyle: {
                color: '#BDEB95',
                borderColor: "#fff",
                borderWidth: 2,
            },

            data: [600,600, 600, 600, 600, 600, 600]
        },
    ]
};