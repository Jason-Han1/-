option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    legend: {
        show: true
    },
    series: [{
            type: 'line',
            name: 'Red',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            type: 'line',
            name: 'Orange',
            data: [211, 112, 151, 254, 260, 320, 300],
            lineStyle: {

                normal: {
                    color: 'orange',
                    width: 2
                },


            }
        }
    ]
};


myChart.on('mouseover', function(params) { // 鼠标移入
    // myChart.dispatchAction({
    //     type: 'highlight',
    //     seriesName: params.seriesName,
    // })

    myChart.setOption({ // 设置 鼠标移入后想要的样式
        series: {
            name: params.seriesName,
            symbolSize: 6,
            lineStyle: {
                width: 6
            }
        }
    })
});

myChart.on('mouseout', function(params) { // 鼠标移出
    // myChart.dispatchAction({
    //     type: 'downplay',
    //     seriesName: params.seriesName,
    // })

    myChart.setOption({ // 将样式复原
        series: {
            name: params.seriesName,
            symbolSize: 2,
            lineStyle: {
                width: 2
            }
        }
    })

})