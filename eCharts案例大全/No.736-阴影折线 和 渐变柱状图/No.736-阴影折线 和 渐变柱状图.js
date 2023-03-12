//负数的柱子，圆头朝下的样例见本人其他作品
option = {
    backgroundColor: '#fff',
    grid: {
        top: '15%',
        right: '10%',
        left: '10%',
        bottom: '12%'
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: ['2019Q1', '2019Q2', '2019Q3', '2019Q4'],
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
        data: [40, 80, 20, -16],
        barWidth: '50px',
        itemStyle: {
            normal: {
                color: function(params){
                    let colorArr = params.value > 0?['#FF9A22', '#FFD56E']:['#FFD56E', '#FF9A22']
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: colorArr[0] // 0% 处的颜色
                    }, {
                        offset: 1,
                        color:  colorArr[1]// 100% 处的颜色
                    }], false)
                },
                barBorderRadius: [30, 30, 0, 0]
            },
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
        data: [48, 40, 10, -6],
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