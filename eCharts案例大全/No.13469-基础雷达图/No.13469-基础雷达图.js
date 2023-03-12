option = {
    title: {
        text: '综合评分'
    },
    backgroundColor: '#fff',
    color: ['#3BB8FF', '#7460EE'],
    tooltip: {
        show: false
    },
    legend: {
        icon: 'line',
        data: ['时间1', '时间2']
    },
    radar: {
        name: {
            textStyle: {
                fontSize: 14,
                color: '#666',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '外观', max: 6500},
           { name: '舒适', max: 16000},
           { name: '空间', max: 30000},
           { name: '动力', max: 38000},
           { name: '续航', max: 52000},
        ],
        axisLine: {
            lineStyle: {
                color: 'transparent'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#ccc',
                width: 3,
                type: 'dotted'
            }
        },
        splitArea: {
            areaStyle: {
                color: '#fff'
            }
        }
    },
    series: [{
        type: 'radar',
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '时间1',
                lineStyle: {
                    // width: 5
                },
                areaStyle: {
                    
                }
            }
        ]
    }]
};