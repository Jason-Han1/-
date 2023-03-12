var data = [
    [0, 0, 5],
    [0, 1, 1],
    [0, 2, 0],
    [0, 3, 0],
    [0, 4, 0],
    [0, 5, 0],
    [0, 6, 0],
    [0, 7, 0],
    [0, 8, 0],
    [0, 9, 0],
    [0, 10, 0],
    [0, 11, 2],
    [0, 12, 4],
    [0, 13, 1],
    [0, 14, 1],
    [0, 15, 3],
    [0, 16, 4],
    [0, 17, 6],
    [0, 18, 4],
    [0, 19, 4],
    [0, 20, 3],
    [0, 21, 3],
    [0, 22, 2],
    [0, 23, 5]
];

data = data.map(function(item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    title: {
        text: '恶意发帖以及回复效率',
        subtext: '看水军速度'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['敌方水军跟进速度', '友方水军跟进速度', '水军发帖时间']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {
                readOnly: false
            },
            magicType: {
                type: ['line', 'bar']
            },
            restore: {},
            saveAsImage: {}
        }
    },
    grid: [{
        left: 50,
        right: 50,
        height: '75%'
    }],
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: ['1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12a']

    },
    {
        type: 'category',
        boundaryGap: true,
        data: ['1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12a']

    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} 回帖'
        }
    }],

    series: [{
            name: '敌方水军跟进速度',
            type: 'line',
            data: [11, 11, 15, 13, 12, 13, 10, 14, 25, 40, 46, 66, 74, 75, 72, 71, 73, 60, 44, 43, 41, 13, 12, 11]


        }, {
            name: '友方水军跟进速度',
            type: 'line',
            data: [1, 11, 11, 15, 13, 12, 13, 10, 14, 25, 40, 46, 66, 74, 75, 72, 71, 73, 60, 44, 43, 41, 13, 12]
        }, {
            name: '水军发帖时间',
            type: 'effectScatter',
            symbolSize: 30,
            data: ['none', 'none', 'none', 'none', 70],
            markPoint: {
                data: [{
                    name: '水军发帖时间',
                    coord: ['5a', 70],
                }]
            },
        }

    ]
};