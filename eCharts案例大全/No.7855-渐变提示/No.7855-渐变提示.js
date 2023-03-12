option = {
    tooltip: {
        trigger: 'axis',
        showContent: false,
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                margin: -60,
                backgroundColor: 'rgba(0,0,0,0)',
                formatter: function (d) {
                    console.log(arguments)
                    var data = d.seriesData
                    return '产量\n\n' + data[0].data
                }
            },
            shadowStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(0,0,0,.2)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(4,4,68,.8)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        itemStyle: {
            color: 'rgba(0,0,0,0)'
        },
        stack: 'sum',
        silent: true
    }, {
        data: [10, 10, 10, 10, 10, 10, 10],
        type: 'bar',
        stack: 'sum',
        label: {
            formatter: function () {
                console.log(arguments)
                return '1'
            },
            show: true,
            position: 'top'
        }
    }]
};
