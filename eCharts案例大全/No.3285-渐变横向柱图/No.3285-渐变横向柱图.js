option = {
    title: {
        text: '加密表',
        subtext: '各数据库加密表情况'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['加密表情况']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['数据库A', '数据库B', '数据库C', '数据库D', '数据库E', '数据库F']
    },
    series: [
        {
            name: '加密表情况',
            type: 'bar',
            data: [100, 200, 150, 88, 70, 230],
            itemStyle: {
                normal: {
                    barBorderRadius: [0,0,20,0],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(57,89,255,0.5)'
                    }, {
                        offset: 1,
                        color: 'rgb(46,200,207,1)'
                    }]),
                },
            },
            barWidth: 20,
        }
    ]
};
