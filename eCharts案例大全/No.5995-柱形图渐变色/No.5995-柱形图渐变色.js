option = {
    backgroundColor: 'rgba(3, 14, 61, 0.9)',
    grid: {
        top: '15%',
        right: '10%',
        left: '10%',
        bottom: '12%'
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: ['16级', '17级', '18级', '19级', '16级', '17级', '18级', '19级', '16级', '17级', '18级', '19级'],
        axisLabel: {
            margin: 20,
            color: '#999',
            interval: 0,
            rotate: 40,
            textStyle: {
                fontSize: 18
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(107,107,107,0.37)',
            }
        },
        axisTick: {
            show: false
        },

    }],
    yAxis: [{
        min: 0,
        max: 40,
        splitNumber: 2,
        axisLabel: {
            formatter: '{value}',
            color: '#999',
            textStyle: {
                fontSize: 18
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(107,107,107,0.37)',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(131,101,101,0.2)',
                type: 'dashed',
            }
        }
    }],
    series: [{
        type: 'bar',
        data: [30, 32, 21, 21, 30, 32, 21, 21, 30, 32, 21, 21],
        barWidth: '50px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FF9A22' // 0% 处的颜色
                }, {
                    offset: 0.5,
                    color: '#FF9A22' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FFD56E' // 100% 处的颜色
                }], false),
                barBorderRadius: [0, 0, 0, 0],
            }
        },
        label: {
            normal: {
                show: false,
                fontSize: 18,
                fontWeight: 'bold',
                color: '#333',
                position: 'top',
            }
        }
    }]
};