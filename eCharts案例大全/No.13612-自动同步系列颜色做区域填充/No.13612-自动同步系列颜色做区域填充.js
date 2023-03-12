option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: 's1',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        lineStyle: {
            width: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            shadowBlur: 10
        },
        areaStyle: {}
    },{
        name: 's2',
        data: [420, 232, 501, 534, 790, 630, 820],
        type: 'line',
        smooth: true,
        lineStyle: {
            width: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            shadowBlur: 10
        },
        areaStyle: {}
    }]
};

setTimeout(function() {
    var color = myChart.getModel().getSeriesByIndex(0).getData().getVisual('color').substr(1)
    // console.log('rgba(' + parseInt('0x' + color.substr(0, 2)) + ', ' + parseInt('0x' + color.substr(2, 2)) + ', ' + parseInt('0x' + color.substr(4, 2)) + ', 1' + ')')
    var color1 = 'rgba(' + parseInt('0x' + color.substr(0, 2)) + ', ' + parseInt('0x' + color.substr(2, 2)) + ', ' + parseInt('0x' + color.substr(4, 2)) + ', 1' + ')'
    var color0 = 'rgba(' + parseInt('0x' + color.substr(0, 2)) + ', ' + parseInt('0x' + color.substr(2, 2)) + ', ' + parseInt('0x' + color.substr(4, 2)) + ', 0' + ')'
    
    var colors2 = myChart.getModel().getSeriesByIndex(1).getData().getVisual('color').substr(1)
    var color21 = 'rgba(' + parseInt('0x' + colors2.substr(0, 2)) + ', ' + parseInt('0x' + colors2.substr(2, 2)) + ', ' + parseInt('0x' + colors2.substr(4, 2)) + ', 1' + ')'
    var color20 = 'rgba(' + parseInt('0x' + colors2.substr(0, 2)) + ', ' + parseInt('0x' + colors2.substr(2, 2)) + ', ' + parseInt('0x' + colors2.substr(4, 2)) + ', 0' + ')'
    myChart.setOption({
        series: [{
            name: 's1',
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0, y: 0, x2: 0, y2: 1,
                    colorStops: [
                        {offset: 0, color: color1},
                        {offset: 1, color: color0}
                    ]
                }
            }
        }, {
            name: 's2',
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0, y: 0, x2: 0, y2: 1,
                    colorStops: [
                        {offset: 0, color: color21},
                        {offset: 1, color: color20}
                    ]
                }
            }
        }]
    })
}, 10);