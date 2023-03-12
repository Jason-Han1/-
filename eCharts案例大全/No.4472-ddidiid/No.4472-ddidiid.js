option = {
    backgroundColor: '#fff',
    // grid: {
    //     top: '15%',
    //     right: '10%',
    //     left: '10%',
    //     bottom: '120%'
    // },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: ['药名A', '药名B', '药名c','药名d','药名e'],
        axisLabel: {
            margin: 20,
            color: '#02F1EC',
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
            formatter: '{value}',
            color: '#02F1EC',
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
        data: [40, 80, 200],
        color:'#FFFEFEFF',
        barWidth: '50px',
        itemStyle: {
            normal: {
                color: function(params){//展示正值的柱子，负数设为透明
                    let colorArr = params.value > 0?['#FFF600', '#FF6000']:['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: colorArr[0] // 0% 处的颜色
                    }, {
                        offset: 1,
                        color:  colorArr[1]// 100% 处的颜色
                    }], false)
                },
                barBorderRadius: [30,30,0,0]
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
    },
    {
        type: 'bar',
        data: [123, 200, 150,120,80],
        barWidth: '10px',
        barGap: '10%',
        itemStyle: {
            normal: {
                color: function(params){//展示负值的柱子，正数设为透明
                    let colorArr = params.value > 0?['rgba(0,0,0,0)', 'rgba(0,0,0,0)']:['#FFD56E', '#FF9A22']
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: colorArr[0] // 0% 处的颜色
                    }, {
                        offset: 1,
                        color:  colorArr[1]// 100% 处的颜色
                    }], false)
                },
                barBorderRadius: [0,0,30,30]
            },
        }
    }
]
};