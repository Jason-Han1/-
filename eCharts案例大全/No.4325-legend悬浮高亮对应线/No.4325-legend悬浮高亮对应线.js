option = {
    title: {
        text: 'Awesome Chart'
    },
    legend: {
        data: ['测试']
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        name: '测试',
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
};
myChart.on('downplay', function(params) {
    hilightFn(params, 'downplay')
})
myChart.on('highlight', function(params) {
    hilightFn(params)
})

function hilightFn(params, actionName) {
    if (!params.batch) {
        for (let k = 0; k < option.series.length; k++) {
            let itm = option.series[k]
            console.log(itm.name == params.seriesName)
            if (itm.name == params.seriesName) {
                itm.lineStyle = {
                    width: actionName == 'downplay' ? 2 : 8
                }
            } else {
                itm.lineStyle && (itm.lineStyle.width = 2)
            }
        }
        myChart.setOption(option);
    }
}