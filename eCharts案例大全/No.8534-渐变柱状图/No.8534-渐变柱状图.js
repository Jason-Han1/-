option = {
    backgroundColor: '#00000000',
    grid: {
        top: '15%',
        right: '10%',
        left: '10%',
        bottom: '12%'
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: ['2015', '2016', '2017', '2018', '2019'],
        axisLabel: {
            margin: 20,
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
    }],
    yAxis: [{
        min: 0,
        max: 100,
        axisLabel: {
            formatter: '{value}%',
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
        data: [80, 87, 88, 90,91],
        barWidth: '50px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#19ae00' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#19aedb' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30, 0, 0],
            }
        },
        label: {
            normal: {
                show: true,
                fontSize: 18,
                fontWeight: 'bold',
                color: '#333',
                position: 'top',
            }
        }
    },{
        data: [80, 87, 88, 90,91],
        type: 'line',
        smooth: true,
        name: '折线图',
        symbol: 'none',
        lineStyle: {
            color: '#3275FB',
            width: 4,
            shadowColor: 'rgba(0, 0, 0, 0.3)',//设置折线阴影
            shadowBlur: 15,
            shadowOffsetY: 20,
        }
    }
]
};