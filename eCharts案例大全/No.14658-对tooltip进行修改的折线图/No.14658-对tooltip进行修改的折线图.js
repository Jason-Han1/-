option = {
    backgroundColor: '#ffffff',
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
        icon: 'circle',
        right: 20,
        textStyle: {
            fontSize: 12,
            color: '#333333'
        },
        data: ['发明专利', '外观专利', '实用新型']
    },
    xAxis: {
        show: true,
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#eeeeee',
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#999999'
            }
        },
        data: ['2010', '2011', '2012', '2015', '2016', '2017']
    },
    yAxis: {
        show: true,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#f2f3f7'
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#999999'
            }
        }
    },
    series: [{
        name: '发明专利',
        type: 'line',
        symbol: 'circle',
        itemStyle: {
            emphasis: {
                symbol: 'circle',
            }
        },
        symbolSize: [8, 8],
        data: [1, 0, 1, 4, 10, 8]
    }, {
        name: '外观专利',
        type: 'line',
        symbol: 'circle',
        symbolSize: [8, 8],
        data: [2, 1, 3, 3, 5, 6]
    }, {
        name: '实用新型',
        type: 'line',
        symbol: 'circle',
        symbolSize: [8, 8],
        data: [4, 4, 4, 10, 15, 3]
    }]
};