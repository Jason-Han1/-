option = {
    // title: {
    //     text: '折线图堆叠'
    // },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['咖啡', '食品', '食品', '冰激凌', '月饼', '粽子', '水饺']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1年', '2年', '3年', '4年', '5年', '6年', '7年', '8年', '9年', '10年', '11年', '12年', '13年以上']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: '咖啡',
            type: 'line',
            // stack: '总量',
            data: [2000, 2500, 2800, 4000, 5000, 6000, 7000, 7200, 7100, 7250, 6000, 5700, 4300]
        },
        {
            name: '食品',
            type: 'line',
            // stack: '总量',
            data: [1500, 1800, 2100, 3000, 4000, 5000, 5600, 6000, 6100, 6050]
        },
        {
            name: '冰激凌',
            type: 'line',
            // stack: '总量',
            data: [1000, 1200, 1400, 2000, 3000, 4000, 5000]
        },
        {
            name: '月饼',
            type: 'line',
            // stack: '总量',
            data: [1000, 1200, 3000, 4500, 5600, 6700, 7800, 8000]
        },
        {
            name: '粽子',
            type: 'line',
            // stack: '总量',
            data: [500, 577, 588, 690, 700, 1000, 2000, 3000]
        },
        {
            name: '水饺',
            type: 'line',
            // stack: '总量',
            data: [1000, 2000, 3000, 4000, 4100, 4200, 4300, 4500]
        }
    ]
};