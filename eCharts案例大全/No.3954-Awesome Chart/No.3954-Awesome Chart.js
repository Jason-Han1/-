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
    },
    yAxis: {
        type: 'value',
        
        axisPointer: {
            snap: true
        }
    },
    visualMap: {
        show: true,
        dimension: 2,
        pieces: [{
            lte: 12,
            color: 'yellow'
        },{
            gt: 12,
            lte: 23,
            color: 'blue'
        }, {
            gt: 23,
            lte: 60,
            color: 'white'
        }, {
            gt: 60,
            color: 'orange'
        }]
    },
    series: [{
            name: '用电量',
            type: 'line',
            smooth: true,
            data: [
                    [14,15,11],
                    [3, 6, 23],
                    [2, 1, 60],
                    [1, 7, 1]
]

        }
    ]
};