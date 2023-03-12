let item = ['a', 'b']
let category = ['aa', 'bb', 'cc', 'dd', 'ee']
let splitNumber = 5
let showLegend = true

option = {
    color: ['#399EFF', '#FF8A44'],
    legend: {
        show: showLegend,
        data: item,
        bottom: 0,
        icon: 'circle',
        itemWidth: 8,
        itemHeight: 8
    },
    radar: {
        name: {
            textStyle: {
                fontSize: 12,
                color: '#666'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
        },
        
        splitNumber: splitNumber,
        splitLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
            
        },
        splitArea: {
            show: false,
            
        },
        indicator: [
            { name: category[0], max: 6500, axisLabel: {show: true}},
            { name: category[1], max: 16000},
            { name: category[2], max: 30000},
            { name: category[3], max: 38000},
            { name: category[4], max: 52000}
        ]
    },
    series: [{
        type: 'radar',
        symbol: 'circle',
        symbolSize: 5,
        data: [
            {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: item[0],
               
            },
            {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: item[1],
            }
        ]
    }]
};