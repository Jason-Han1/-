var data = [62]
var mercuryColor = '#fd4d49'
var borderColor = '#fd4d49'

option = {
    title: {
        text: '温度计 pro',
        show: false
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        show: false,
        data: [],
    }, {
        show: false,
        data: [],
    }, {
        show: false,
        data: [],
    }],
    series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: 18,
        itemStyle: {
            normal: {
                color: mercuryColor,
                barBorderRadius: 40,
            }
        },
        z: 2
    }, {
        name: '白框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: [99],
        barWidth: 28,
        itemStyle: {
            normal: {
                color: '#ffffff',
                barBorderRadius: 40,
            }
        },
        z: 1
    }, {
        name: '外框',
        type: 'bar',
        yAxisIndex: 2,
        barGap: '-100%',
        data: [100],
        barWidth: 38,
        itemStyle: {
            normal: {
                color: borderColor,
                barBorderRadius: 40,
            }
        },
        z: 0
    }, {
        name: '圆',
        type: 'scatter',
        data: [0],
        yAxisIndex: 0,
        symbolSize: 48,
        itemStyle: {
            normal: {
                color: mercuryColor,
                opacity: 1,
            }
        },
        z: 2
    }, {
        name: '白圆',
        type: 'scatter',
        data: [0],
        yAxisIndex: 1,
        symbolSize: 60,
        itemStyle: {
            normal: {
                color: '#ffffff',
                opacity: 1,
            }
        },
        z: 1
    }, {
        name: '外圆',
        type: 'scatter',
        data: [0],
        yAxisIndex: 2,
        symbolSize: 70,
        itemStyle: {
            normal: {
                color: borderColor,
                opacity: 1,
            }
        },
        z: 0
    }]
};