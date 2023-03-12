option = {
    grid: {
        left: '0%',
        right: '4%',
        bottom: '3%',
        top: '0',
        containLabel: true
    },
    xAxis: {
        position: 'top',
        min:0,
        max: 360,
        interval: 90,
        axisLine: {
            symbol: ['none', 'arrow'],
            lineStyle: {
                color: '#8895A2',
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#8895A2',
                fontSize: 12
            }  
        }
    },
    yAxis: {
        inverse: true,
        min: 0,
        max: 2500,
        interval: 500,
        axisLine: {
            symbol: ['none', 'arrow'],
            lineStyle: {
                color: '#8895A2',
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#8895A2',
                fontSize: 12
            }  
        }
    },
    series: [{
        data: [[0, 0], [60, 2200]],
        type: 'line'
    },{
        data: [[30, 0], [90, 2200]],
        type: 'line'
    }]
}