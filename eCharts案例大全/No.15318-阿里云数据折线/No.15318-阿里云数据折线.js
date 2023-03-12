option = {
    backgroundColor: '#0E2A43',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['事业一部', '事业二部', '事业三部'],
        top: 'bottom',
        textStyle: {
            color: '#fff'
        },
    },
    grid: {
        left: '3%',
        right: '4%',
       
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['04/02', '04/03', '04/04', '04/05', '04/06', '04/07', '04/08'],
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        }

    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            lineStyle: {
                // 使用深浅的间隔色
                color: ['#aaa', '#ddd'],
                type :'dashed'
            }
        },

    },
    series: [{
        name: '事业一部',
        type: 'line',
        data: [0.42, 0.5, 0.3, 0.39, 0.55, 0.2, 0.6]
    }, {
        name: '事业二部',
        type: 'line',
        data: [0.32, 0.2, 0.4, 0.7, 0.3, 0.2, 0.7]
    }, {
        name: '事业三部',
        type: 'line',

        data: [0.22, 0.5, 0.3, 0.49, 0.3, 0.8, 0.1]
    }]
};