option = {
    title: {
        text: '近七天水位流量详情',
        subtext: '八时流量',
        textAlign: 'center',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis'
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
        data: ['2016-07-01', '2016-07-02', '2016-07-03', '2016-07-04', '2016-07-05', '2016-07-06', '2016-07-07'],
        splitLine: {
            show: true,
            interval: 'auto'
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} m³/s'
        }
    },
    series: [{
        name: '八时流量',
        type: 'line',
        smooth: true,
        data: [392, 459, 344, 179, 381, 217, 479, ],
        animation: false,
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#000'
                }
            }
        }
    }]
};