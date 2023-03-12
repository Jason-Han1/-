option = {
    backgroundColor: '#08223A',
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#42BEE2',
                opacity: 0.1
            }
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#42BEE2'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#254F7F',
                width: 2
            }
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#42BEE2',
                opacity: 0.1
            }
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#42BEE2'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#254F7F',
                width: 2,
            }
        }
    },
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};