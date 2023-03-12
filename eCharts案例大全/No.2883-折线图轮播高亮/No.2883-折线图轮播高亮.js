
option = {
    title: {
        text: '折线图轮播高亮',
        left: 'center'
    },
    xAxis: {
        type: 'category',
        name: 'x',
        data: ['一', '二', '三', '四', '五']
    },
    yAxis: {
        type: 'value',
        name: 'y',
    },
    series: [
        {
            type: 'line',
            emphasis: {
                lineStyle: {
                    color: 'red',
                    width: 5
                }
            },
            data: [25, 10, 39, 12, 35]
        },
        {
            type: 'line',
            emphasis: {
                lineStyle: {
                    color: 'red',
                    width: 5
                }
            },
            data: [1, 2, 4, 8, 16]
        },
        {
            type: 'line',
            emphasis: {
                lineStyle: {
                    color: 'red',
                    width: 5
                }
            },
            data: [3, 8, 15, 23, 45]
        }
    ]
};

let index = 0

setInterval(function() {
    let len = option.series.length
    
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: index
    })
     index >= 1 && myChart.dispatchAction({
        type: 'downplay',
        // 图例名称
        seriesIndex: index - 1
    })
    index = index > len - 1 ?  0 : index + 1
}, 3000);