option = {
    xAxis: {
        type: 'category',

        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    yAxis: {

        type: 'value'
    },
    series: [

        {
            name: '手工生产线2',
            type: 'line',
            stack: 1,
            symbol: 'circle',
            data: [-85200, -82320, -73920, -65520, -29610, 6300, 42210, 80120, 118030, 155940, 190850, 225760],

            areaStyle: {
                normal: {}
            },

        },
        {
            name: '手工生产线1',
            type: 'line',
            stack: 1,
            symbol: 'circle',
            data: [-85200, -82320, -73920, -65520, -29610, 6300, 42210, 80120, 118030, 155940, 190850, 225760],

            areaStyle: {
                normal: {}
            },

        }
    ]
}