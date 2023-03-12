var count = 30;
var data = [],
    dataX = [],
    dataL = []
for (var i = 0; i < count; i++) {
    dataX.push('day-' + i)
    let d = ~~(Math.random() * 100)
    data.push([i, 0, d])
    dataL.push(d)
}
console.log(data, dataX, dataL)

option = {
    tooltip: {
        trigger: 'axis',

        show: true,
        showContent: true,
        position: function(pos, params, dom, rect, size) {
            return [pos[0], 10]
        },
        formatter: '{c}'
    },
    grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 'auto'
    },
    brush: {

        brushType: 'lineX',
        toolbox: ['lineX']
    },
    // timeline: {},
    animation: false,
    xAxis: [{
        position: 'top',
        show: false,
        type: 'category',
        axisPointer: {
            show: true
        },
        data: dataX
    }],
    yAxis: [{
            show: false,
            type: 'category',
            data: ['异常'],
            axisPointer: {
                show: false
            }
        },
        {
            show: false,
            type: 'value',
            axisPointer: {
                show: false
            },
            boundaryGap: ['5%', '5%']
        }
    ],
    visualMap: {
        type: 'piecewise',
        show: false,
        min: 0,
        max: 100,
        pieces: [
            {
                gte: 0,
                lt: 60,
                color: '#b1cfa5'
            },
            {
                gte: 60,
                lt: 80,
                color: '#f5d69f'
            },
            {
                gte: 80,
                lt: 90,
                color: '#f5898b'
            },
            {
                gte: 90,
                lt: 100,
                color: '#ef5055'
            }
        ]
    },
    series: [{

        zlevel: 0,
        yAxisIndex: 0,
        type: 'heatmap',
        data: data,
        tooltip: {
            show: false
        },
        label: {
            normal: {
                show: false
            }
        }
    }, {
        type: 'line',
        yAxisIndex: 1,
        zlevel: 1,
        showSymbol: false,
        lineStyle: {
            color: '#fff'
        },
        data: dataL
    }]
}