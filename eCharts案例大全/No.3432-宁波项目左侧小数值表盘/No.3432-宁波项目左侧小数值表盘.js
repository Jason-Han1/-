option = {
    series: [{
        type: 'gauge',
        progress: {
            show: true,
            width: 25
        },
        pointer:{
            show:false
        },
        axisLine: {
            shwo:false,
            lineStyle: {
                width: 25
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show:false, 
            length: 15,
            lineStyle: {
                width: 2,
                color: '#999'
            }
        },
        axisLabel: {
            show:false,
            distance: 25,
            color: '#999',
            fontSize: 20
        },
        anchor: {
            show: false,
            showAbove: true,
            size: 25,
            itemStyle: {
                borderWidth: 10
            }
        },
        title: {
            show: false
        },
        detail: {
            valueAnimation: true,
            fontSize: 80,
            offsetCenter: [0, '10%']
        },
        data: [{
            value: 70
        }]
    }]
};