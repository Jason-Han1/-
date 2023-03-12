option = {
    title: {
        text: 'Awesome Chart'
    },

    grid: {
        top: '8%',
        right: '3%',
        left: '3%',
        bottom: '10%'
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        axisLabel: {
            margin: 16,
            color: '#00000080',
            fontSize: 12
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#0E162610']
            }
        },

        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '10%'],
        axisLabel: {
            margin: 16,
            color: '#00000060',
            fontSize: 12
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },

        splitLine: {
            show: true,
            lineStyle: {
                color: ['#0E162610'],
                type: 'dashed'
            }
        },
        min: function(value) {
            return value.min - 20;
        },
    },
    series: [{
        type: 'bar',
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
};