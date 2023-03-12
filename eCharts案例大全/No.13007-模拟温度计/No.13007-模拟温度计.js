option = {
    color: ['transparent', '#3398DB'],
    grid: {
        left: '3%',
        right: '3%',
        bottom: '10%',
        top: '10%'
    },
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        type: 'value',
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }],
    series: [{
            name: 'A',
            type: 'bar',
            data: [{
                value: 100, percent: '10'
            }, {
                value: 100, percent: '20'
            }, {
                value: 100, percent: '30'
            }, {
                value: 100, percent: '40'
            }, {
                value: 100, percent: '50'
            }, {
                value: 100, percent: '60'
            }, {
                value: 100, percent: '70'
            }],
            barWidth: 70,
            itemStyle: {
                borderColor: '#999',
                barBorderRadius: 100
            },
            label: {
                show: true,
                position: 'top',
                color: '#999',
                formatter: function(item) {
                    return item.data.percent + '%';
                }
            }
        },
        {
            name: 'B',
            type: 'bar',
            barWidth: 50,
            data: [10, 20, 30, 40, 50, 60, 70],
            barGap: '-87%',
            itemStyle: {
                barBorderRadius: 100
            }
        }
    ]
};