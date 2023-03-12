var rate = [0.18]

option = {
    title: {
        text: '百分比'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: []
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: {
        show: false,
        type: 'category',
        data: []
    },
    series: [{
        name: 'colormap',
        type: 'bar',
        data: [256],
        barWidth: 25,
        itemStyle: {
            normal: {
                barBorderRadius: 20,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#00ff00'
                }, {
                    offset: 1,
                    color: '#ff0000'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 20
            }
        }
    }, {
        name: 'rate',
        type: 'scatter',
        data: [256*rate[0]],
        itemStyle: {
            normal: {
                color: '#000',
            }
        },
        symbol: 'triangle',
        symbolSize: 18,
        symbolRotate: 180,
        symbolOffset: [0, '-25'],
        label: {
            normal: {
                show: false,
                position: ['-11', '-18'],
                distance: 15,
                fontSize: 15
            }
        },
    }, ]
};