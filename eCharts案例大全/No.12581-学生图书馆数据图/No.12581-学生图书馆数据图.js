option = {
    backgroundColor: '#141845',
    title: {
        text: '学生图书馆数据图',
        textStyle: {
            color: '#fff'
        }
    },
    name: 'a',
    tooltip: {
        trigger: 'axis', //按x轴显示
        show: true,
        axisPointer: {
            lineStyle: {
                color: 'none', //不显示线条
            },
        },
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        textStyle: {
            align: 'left',
            fontSize: 12,
            color: '#333333',
        },
        extraCssText: 'box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2)' //添加阴影
    },
    color: ['#0580f2', '#faa732', '#e1575d'],
    grid: {
        left: '5%',
        right: '6%',
        top: '14%',
        bottom: '6%',
        containLabel: true
    },
    legend: {
        show: true,
        textStyle: {
            fontSize: 12,
            color: '#333333'
        },
        y: 25,
        data: [{
                name: '早餐',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: '午餐',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: '晚餐',
                textStyle: {
                    color: '#fff'
                }
            }
        ]
    },
    xAxis: {
        show: true,
        type: 'category',
        axisTick: {
            show: false
        },
        data: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29'],
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    yAxis: {
        type: 'value',
        scale: true,
        min: 7,
        name: '时间/小时',
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    series: [{
        name: '早餐',
        type: 'line',
        symbol: 'circle',
        symbolSize: [8, 8],
        data: [7.8, 8.1, 8.4, 8.7, 8.9, 8.9, 8.7, 8.4, 8.1, 7.9, 8.1, 8.4, 8.7, 8.9, 9],
        smooth: true,
        itemStyle: {
            normal: {
                color: "#3EFEC5"
            }
        }
    }, {
        name: '午餐',
        type: 'line',
        symbol: 'circle',
        symbolSize: [8, 8],
        data: [11.8, 12.1, 12.4, 12.7, 12.9, 12.9, 12.7, 12.4, 12.1, 11.9, 12.1, 12.4, 12.7, 12.9, 13],
        smooth: true,
        itemStyle: {
            normal: {
                color: "#FFE242"
            }
        }
    }, {
        name: '晚餐',
        type: 'line',
        symbol: 'circle',
        data: [17.8, 18.1, 18.4, 18.7, 18.9, 18.9, 18.7, 18.4, 18.1, 17.9, 18.1, 18.4, 18.7, 18.9, 19],
        smooth: true,
        itemStyle: {
            normal: {
                color: "#3D7DFF"
            }
        }
    }]
};