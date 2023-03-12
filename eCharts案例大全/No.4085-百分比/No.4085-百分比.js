option = {
    color: ['#73a0fa', '#fd838c', '#73deb3', '#ffb761'],
    title: {
        text: '百分比'
    },
    tooltip: {
        trigger: 'axis',
        show: true,
        formatter: function(params) {
            var res = params[0].name
            for (var i = 0; i < params.length; i++) {
                res +=
                    '<br>' +
                    params[i].marker +
                    params[i].seriesName +
                    '：' +
                    params[i].data +
                    '%'
            }
            return res
        }
    },
    legend: {
        show: true,
        x: '5%',
        icon: 'rect',
        top: 20,
        textStyle: {
            fontSize: 12,
            color: '#c8c8c8'
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '15%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0
        },
        data: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07']
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [{
            name: '成功率',
            type: 'line',
            data: [5, 10, 41, 35, 51, 49, 62]
        },
        {
            name: '失败率',
            type: 'line',
            data: [50, 20, 35, 20, 75, 30, 60]
        },
        {
            name: '合法率',
            type: 'line',
            data: [15, 30, 15, 40, 55, 20, 40]
        },
        {
            name: '非法律',
            type: 'line',
            data: [5, 60, 20, 45, 15, 55, 25]
        }
    ]
};