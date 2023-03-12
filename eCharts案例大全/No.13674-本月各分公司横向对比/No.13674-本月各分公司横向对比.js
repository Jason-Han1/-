app.title = '折柱混合';

option = {
    color: ['#3398DB', '#D53A35'],
    title: {
        text: '本月各分公司横向对比',
        textStyle: {
            //color: '#fff'
        }
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
        data: ['百公里油耗(L)', '平均运行时间(H)']
    },
    xAxis: [{
        type: 'category',
        data: ['武汉公司', '长沙公司', '北京公司', '上海公司', '南京公司', '深证公司'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
            type: 'value',
            name: '百公里油耗(L)',
            min: 0,
            max: 40,
            interval: 4,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '平均运行时间(H)',
            min: 0,
            max: 20,
            interval: 2,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [{
            name: '百公里油耗(L)',
            type: 'bar',
            data: [20.0, 10.9, 18.0, 23.2, 25.6, 36.7]
        },
        {
            name: '平均运行时间(H)',
            type: 'bar',
            yAxisIndex: 1,
            data: [7.6, 8.9, 6.0, 3.4, 2.7, 8.7]
        }
    ]
};