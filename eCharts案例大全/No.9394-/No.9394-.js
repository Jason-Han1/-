var colors = ['#FF7E45'];
option = {
    backgroundColor: '#ffffff',
    color: colors,
    tooltip: {
        trigger: 'axis',
        // triggerOn: 'none',
        backgroundColor: 'rgba(66,75,80,0.9)',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: 'rgba(255,0,0,0.2)',
                width: 4
            }
        },
        formatter: function(params) {
            return params[0].value + ' Lux'
        }
    },
    animation: false,
    grid: {
        left: 30,
        top: 20,
        right: 20,
        bottom: 20
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ 
                offset: 0,
                color: 'rgba(238,238,238,0.16)'
            }, {
                offset: .46,
                color: '#DBDFEC'
            },{
                offset: 1,
                color: 'rgba(216,216,216,0.16)'
            }])
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#606A84',
                fontSize: 12
            }
        }
    },
    yAxis: {
        x: 'center',
        type: 'value',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#606a84',
                fontSize: 12
            }
        },
        min: 0,
        max: 100
    },
    series: [{
        name: '空气温度',
        type: 'line',
        showSymbol: false,
        smooth: true,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        markLine: {
            symbol: 'none',
            silent: true,
            label: {
                show: false
            },
            data: [{
                lineStyle: {
                    color: '#00B79D'
                },
                yAxis: 10
            }, {
                lineStyle: {
                    color: '#00B79D'
                },
                yAxis: 80
            }]
        },
        data: [65, 20, 80, 40, 50, 60, 100, 40, 60, 20, 10, 90]
    }]
};