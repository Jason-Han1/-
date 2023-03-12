app.title = '腾讯云设备周gpu概况';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['平均gpu使用率', '使用时间(day)']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    xAxis: {
        type: 'category',
        axisLabel:{
                interval:0,
                rotate:40
            },
        data: ['10.0.0.19:9009',
'10.0.0.12:9009',
'10.0.0.5:9009',
'10.0.0.2:9009',
'10.0.0.11:9009',
'10.0.0.17:9009',
'10.0.0.8:9009',
'10.0.0.14:9009',
'10.0.0.15:9009',
'10.0.0.7:9009',
'10.0.0.6:9009',
'10.0.0.21:9009',
'10.0.0.23:9009',
'10.0.0.20:9009',
'10.0.0.9:9009'
]
    },
    series: [
        {
            name: '平均gpu使用率',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position:'top'
                }
            },
            data: [0,
0.11,
1.54,
1.55,
1.56,
1.57,
1.59,
1.6,
1.62,
1.62,
1.62,
1.64,
1.65,
4.08,
20.68
]
        },
        {
            name: '使用时间(day)',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position:'top'
                }
            },
            data: [7.8,7.6,8,7.9,8,8,8,8,8,8,7.8,8,7.9,8,7.9]
        }
    ]
};
