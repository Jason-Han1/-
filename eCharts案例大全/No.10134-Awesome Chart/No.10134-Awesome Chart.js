option = {
    backgroundColor: "#fff",
    title: {
            text: '项目完成统计'
        },
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
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['总数', '已完成', '完成率'],
        textStyle: {
            color: "#000"
        },
    },
    xAxis: [{
        type: 'category',
        data: ['太原东二环', '207', '209', '隰吉高速', '昔榆'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
            type: 'value',
            name: '',
            min: 0,
            max: 60000,
            interval: 10000,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            interval: 5,
            axisLabel: {
                formatter: ' '
            }
        }
    ],
    series: [{
            name: '总数',
            type: 'bar',
            data: [47300, 37200, 31000, 17600, 27900]
        },
        {
            name: '已完成',
            type: 'bar',
            data: [28200, 18300, 18400, 8600, 18800]
        },
        {
            name: '完成率',
            type: 'line',
            yAxisIndex: 1,
            data: [3.5, 4.2, 3.7, 4.1, 3.3, 3.2, 4.3, 3.4, 5.0, 4.5, 5.0, 5.2]
        }
    ]
};