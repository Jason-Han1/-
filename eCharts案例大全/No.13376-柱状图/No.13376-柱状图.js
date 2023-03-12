option = {
    title: {
        text: '2016年12月长宁区合规成本分析'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['包租费', '装修费', '保洁费', '物业费'],
        align: 'right',
        right: 10
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['新虹桥', '中山公园', '虹桥', '镇宁路', '天山古北']
    }],
    yAxis: [{
        type: 'value',
        name: '总价(万元)',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
            name: '包租费',
            type: 'bar',
            itemStyle: {
                color: '#c12e34'
            },
            data: [20, 12, 31, 34, 31]
        },
        {
            type: 'line',
            barWidth: '60%',
            symbol: 'circle',

            itemStyle: {
                color: '#c12e34'
            },
            data: [20, 12, 31, 34, 31]
        },
        {
            name: '装修费',
            type: 'bar',
            itemStyle: {
                color: '#cda819'
            },
            data: [10, 20, 5, 9, 3]
        },
        {
            type: 'line',
            barWidth: '60%',
            symbol: 'circle',

            itemStyle: {
                color: '#cda819'
            },
            data: [10, 20, 5, 9, 3]
        }, {
            name: '保洁费',
            type: 'bar',
            itemStyle: {
                color: '#339ca8'
            },
            data: [1, 1, 2, 3, 1]
        },
        {
            type: 'line',
            barWidth: '60%',
            symbol: 'circle',

            itemStyle: {
                color: '#339ca8'
            },
            data: [1, 1, 2, 3, 1]
        }
    ]
};