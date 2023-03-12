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
    legend: {
        data: ['浏览量', '加购量', '购买量']
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['<100', '100-500', '500-1000', '1000-5000', '5000-10000', '>10000'],
        axisPointer: {
            type: 'shadow'
        },
    }],
    yAxis: [{
        type: 'value',
        name: '金额（元）',
        min: 0,
        max: 2500,
    }],
    series: [{
            name: '浏览量',
            type: 'bar',
            data: [2140, 1349, 1170, 432, 256, 167]
        },
        {
            name: '加购量',
            type: 'bar',
            data: [1126, 859, 490, 264, 187, 107]
        },
        {
            name: '购买量',
            type: 'bar',
            data: [112, 85, 49, 26, 18, 17]
        }

    ]
};


myChart.setOption(option);

function randomData() {
    return Math.round(Math.random() * 1000);
}