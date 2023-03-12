option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['概率', '累计概率']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1级', '2级', '3级', '4级', '5级', '6级', '7级', '8级'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '百分比',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [
        {
            name: '概率',
            type: 'bar',
            data: [5.0, 10, 4, 6, 25, 30, 5, 5]
        },
        {
            name: '累计概率',
            type: 'line',
            data: [5.0, 15, 19, 25, 50, 80, 85, 90]
        }
    ]
};
