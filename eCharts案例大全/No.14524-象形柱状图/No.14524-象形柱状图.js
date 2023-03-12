option = {
    backgroundColor: "#0B0E54",
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: []
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ["2014", "2015", "2016", "2017"],
        splitLine: {
            show: false
        },
        axisLabel: {
            fontStyle: {
                fontSize: 12,
            },
            color: "#fff"
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#054FB2'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#054FB2'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#054FB2'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        name: '元/平米',
        nameTextStyle: {
            color: "#fff"
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#054FB2'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#054FB2'
            }
        },
        axisLabel: {
            fontStyle: {
                fontSize: 12,
            },
            color: "#fff"
        },
        axisTick: {
            lineStyle: {
                color: '#054FB2'
            }
        }
    }],
    color: ['#fff'],
    series: [{
        name: '房价',
        type: 'pictorialBar',
        barCategoryGap: '10%',
        // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(253,173,52,1)'
                }, {
                    offset: 1,
                    color: 'rgba(246,105,49,1)'
                }]),
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        data: [5000, 5500, 8000, 15000],
        z: 10
    }]
};