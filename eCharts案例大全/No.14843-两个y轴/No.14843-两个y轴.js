option = {
    color: ['#bfd7f0', '#ffc1ca', '#008cff', '#ff516e'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        textStyle: {
            fontSize: 12,
            color: '#333333'
        },
        padding: 10,
        // formatter: '{d}<br />{{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}'
        // axisPointer: {
        //   lineStyle: {
        //     color: 'none',
        //   },
        // }
    },
    legend: {
        show: true,
        bottom: '30px',
        icon: 'circle',
        data: [{
            name: '老会员数',
            textStyle: {
                color: '#bfd7f0'
            },
        }, {
            name: '新会员数',
            textStyle: {
                color: '#ffc1ca'
            },
        }, {
            name: '老会员复购率',
            textStyle: {
                color: '#008cff'
            },
        }, {
            name: '新会员复购率',
            textStyle: {
                color: '#ff516e'
            },
        }],
    },
    grid: {
        left: '2%',
        right: '6%',
        // bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        name: '日期',
        // nameLocation: 'start',
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        nameTextStyle: {
            fontSize: 14,
        },
    }],
    yAxis: [{
        name: '百分比',
        nameTextStyle: {
            color: '#666666',
            fontSize: 14,
        },
        show: true,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#485465'
            },
            formatter: function(value, index) {
                if (index === 0) {
                    return '五月'
                }
                return value * 100 + '%'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#eeeeee',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#eeeeee',
            }
        },
        scale: true,
        // max: 100,
        // min: 0,
    }, {
        name: '会员数',
        nameTextStyle: {
            color: '#666666',
            fontSize: 14,
        },
        show: true,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#485465'
            },
            formatter: function(value, index) {
                if (index === 0) {
                    return ''
                }
                return value
            }
        },
        axisLine: {
            lineStyle: {
                color: '#eeeeee',
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#eeeeee',
            }
        },
    }],
    series: [{
        name: '老会员数',
        type: 'bar',
        yAxisIndex: 1,
        barWidth: 19,
        itemStyle: {
            normal: {
                barBorderRadius: [6,6,0,0]
            }
        },
        data: [150, 232, 201, 154, 190, 330, 410, 190, 340, 400, 154, 190, 330, 410, 190]
    }, {
        name: '新会员数',
        type: 'bar',
        yAxisIndex: 1,
        barWidth: 19,
        data: [220, 182, 191, 234, 290, 330, 310, 120, 330, 410, 182, 191, 234, 290, 330]
    }, {
        name: '老会员复购率',
        type: 'line',
        symbol: 'circle',
        symbolSize: [14, 14],
        // borderWidth: 0,
        data: [0.110, 0.112, 0.80, 0.34, 0.100, 0.130, 0.110, 0.120, 0.122, 0.91, 0.110, 0.112, 0.80, 0.34, 0.100]
    }, {
        name: '新会员复购率',
        type: 'line',
        symbol: 'circle',
        symbolSize: [14, 14],
        data: [0.220, 0.182, 0.191, 0.234, 0.290, 0.330, 0.310, 0.220, 0.330, 0.410, 0.182, 0.191, 0.234, 0.290, 0.330]
    }, ]

};