
option = {
    backgroundColor:'#fff',
    grid: {
        top: '8%',
        left: '5%',
        right: '5%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: [{
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#999',
                fontSize: 10
            }
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        axisLabel: { textStyle: { color: '#999',fontSize: 10 } },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#eee'
            } // 虚线
        }
    }],
    series: [{
        name: '',
        type: 'bar',
        barWidth: '12px',
        color: ['#57B2FF'],
        itemStyle: {
            barBorderRadius: [2], // 圆角
        },
        data: [10, 52, 200, 334, 390, 330, 220]
    }]
};