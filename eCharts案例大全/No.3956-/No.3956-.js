option = {
    title: {
        text: '一天用电量分布',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 1, 2, 3, 4, 5, 16, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} W'
        },
        axisPointer: {
            snap: true
        }
    },
    visualMap: {
        show: true,
        dimension: 1,
        pieces: [{
            lte: 6,
            color: 'yellow'
        }, {
            gt: 6,
            lte: 8,
            color: 'red'
        }, {
            gt: 8,
            lte: 14,
            color: 'blue'
        }, {
            gt: 14,
            lte: 17,
            color: 'white'
        }, {
            gt: 17,
            color: 'orange'
        }]
    },
    series: [{
            name: '用电量',
            type: 'line',
            smooth: true,
            data: [0, 1, 2, 3, 4, 15, 16, 17, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],

        },
        {
            name: '用电量1',
            type: 'line',
            smooth: true,
            data: [11, 22, 33, 44, 55, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],

        },
        {
            name: '用电量2',
            type: 'line',
            smooth: true,
            data: [2, 3, 4, 5, 6, 17, 18, 19, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 29],

        }
    ]
};