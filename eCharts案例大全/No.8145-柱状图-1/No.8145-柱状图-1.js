option = {
    color: ['#5b98fe', '#12fffc', '#ffa16d', '#ff666c'],
        legend: {},
        barWidth: 8,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true
                },

            }
        },
    dataset: {
        source: [
            ['product', '检测人员', '非检测人员', '人员总数'],
            ['杭州市', 43.3, 85.8, 93.7],
            ['金华市', 83.1, 73.4, 55.1],
            ['绍兴市', 86.4, 65.2, 82.5],
            ['丽水市', 72.4, 53.9, 39.1],
            ['舟山市', 72.4, 53.9, 39.1],
            ['湖州市', 72.4, 53.9, 39.1],
            ['衢州市', 72.4, 53.9, 39.1],
            ['温州市', 72.4, 53.9, 39.1],
            ['宁波市', 72.4, 53.9, 39.1],
            ['台州市', 72.4, 53.9, 39.1],
            ['嘉兴市', 72.4, 53.9, 39.1],
        ]
    },
    xAxis: {
            type: 'category'
        },
        yAxis: [{
            type: 'value',
            name: '单位：份'
        }],
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
};
