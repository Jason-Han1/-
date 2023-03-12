option = {
    title: {
        text: '百分比'
    },
    legend: {
        right: 0,
        data: ['不合格', '合格']
    },
    xAxis: {
        data: [],
        type: 'value',
        show: false,
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        show: false,
        axisTick: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        name: '不合格',
        data: [30, 45, 30, 45, 30],
        stack: 'income',
        barWidth: 30,
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(obj) {
                    return obj.value + '%';
                }
            }
        }
    }, {
        type: 'bar',
        name: '合格',
        data: [70, 55, 70, 55, 70],
        stack: 'income',
        barWidth: 30,
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(obj) {
                    return obj.value + '%';
                }
            }
        }
    }]
};