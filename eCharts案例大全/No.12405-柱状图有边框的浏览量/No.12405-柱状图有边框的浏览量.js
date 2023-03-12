option = {
    title: {
        text: '浏览量',
        textStyle: {
            color: '#fff',
        },
    },
    backgroundColor: '#141845',
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        top: '8%',
        left: '3%',
        right: '6%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        }
    },
    series: [{
            name: '成都',
            type: 'bar',
            stack: '总量',
            data: [2800, 1800, 1700, 1600, 1500, 1400, 1300, 1200, 1100, 1000, 900, 800],
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f7734e'
                    }, {
                        offset: 1,
                        color: '#e12945'
                    }]),
                    barBorderRadius: 50, 
                    borderWidth: 6,
                    borderColor:"#fff"
                }
            },
        },
        {
            name: '广元',
            type: 'bar',
            stack: '总量',
            data: [4000, 3800, 3600, 3500, 3200, 3100, 2800, 2700, 2600, 2500, 2400, 2300]
        },
        {
            name: '德阳',
            type: 'bar',
            stack: '总量',
            data: [4000, 3800, 3600, 3500, 3200, 3100, 2800, 2700, 2600, 2500, 2400, 2300]
        },
        {
            name: '阿坝',
            type: 'bar',
            stack: '总量',
            data: [4000, 3800, 3600, 3500, 3200, 3100, 2800, 2700, 2600, 2500, 2400, 2300]
        },
        {
            name: '绵阳',
            type: 'bar',
            stack: '总量',
            data: [4000, 3800, 3600, 3500, 3200, 3100, 2800, 2700, 2600, 2500, 2400, 2300]
        }
    ]
};