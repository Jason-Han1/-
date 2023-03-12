option = {
    title: {
        text: '一天运输跟踪温度',
        subtext: '要求：冷藏1℃-4℃'
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
        data: ['03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} ℃'
        },
        axisPointer: {
            snap: true
        }
    },
    visualMap: {
        show: false,
        dimension: 1,
        pieces: [{
            gte: 1,
            lt: 4,
            color: '#3AD235'
        }, {
            gt: 4,
            lte: 6,
            color: 'red'
        }, {
            gte: -2,
            lte: 1,
            color: '#7DBEF5'
        }]
    },
    series: [{
        name: '温度跟踪',
        type: 'line',
        smooth: true,
        data: [1.6, -2, 2.2, 5.6, 3, 2.1, 0],
        markArea: {
            itemStyle: {
                color: '#C5E2C5'
            },
            data: [
                [{
                    name: '正常温度范围',
                    yAxis: '4'
                }, {
                    yAxis: '1'
                }]
            ]
        },
        markPoint: {
            data: [{
                    type: 'max',
                    name: '最大值',
                    itemStyle: {
                        color: 'red'
                    }
                },
                {
                    type: 'min',
                    name: '最小值',
                    itemStyle: {
                        color: '#56AFE6'
                    }
                }
            ]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值',
                itemStyle: {
                    color: '#2E90D1'
                }
            }]
        }
    }]
};