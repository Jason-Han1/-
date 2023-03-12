myChart = echarts.init(document.getElementById('chart-panel'), null, {renderer: 'svg'})

option = {
    title: {
        text: 'Awesome Chart'
    },
    toolbox: {
                        top: 30,
                        feature: {
                            dataView: {},
                            saveAsImage: {
                                pixelRatio: 2
                            }
                        },

                        iconStyle: {
                            emphasis: {
                                textPosition: 'top'
                                // textAlign: 'right'
                            }
                        }
                    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};