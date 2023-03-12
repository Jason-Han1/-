var data = [62]

option = {
    title: {
        text: '温度计 plus',
        show: false
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        show: false,
        data: []
    }, {
        show: false,
        data: []
    }],
    series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: 20,
        itemStyle: {
            normal: {
                color: '#fd4d49',
            }
        }
    }, {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: [100],
        barWidth: 35,
        itemStyle: {
            normal: {
                color: 'none',
                borderColor: '#fd4d49',
                borderWidth: 5,
                barBorderRadius: 30,
            }
        }
    }, {
        name: '圆',
        type: 'scatter',
        data: [0],
        symbolSize: 54,
        itemStyle: {
            normal: {
                color: '#fd4d49',
                opacity: 1,
            }
        }
    }]
};