var value = 62;

function getData(value) {
    return [value * 0.8 + 16];
}
var data = getData(value);
var mercuryColor = '#fd4d49';
var borderColor = '#fd4d49';

option = {
    title: {
        text: '温度计 x',
        show: false
    },
    xAxis: [{
        show: false,
    }, {
        show: false,
        data: [],
        min: 0,
        max: 9,
    }],
    yAxis: [{
        show: false,
        data: [],
    }, {
        show: false,
        data: [],
    }, {
        show: false,
        data: [],
    }, {
        show: false,
        min: -110,//根据容器大小调整此处最小值和最大值，以正常显示刻度
        max: 93,
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
        hoverAnimation: false,
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
        hoverAnimation: false,
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
        hoverAnimation: false,
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
    }, {
        name: '刻度',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 3,
        label: {
            normal: {
                show: true,
                position: 'top',
                distance: 12,
                color: '#525252',
                fontSize: 20,
                formatter: function(params) {
                    if (params.dataIndex == 1) {
                        return '0';
                    } else if (params.dataIndex == 5) {
                        return '50';
                    } else if (params.dataIndex == 9) {
                        return '100';
                    } else {
                        return ''
                    }
                }
            }
        },
        barGap: '-100%',
        data: [0, 10, 5, 10, 5, 10, 5, 10, 5, 10],
        barWidth: 5,
        itemStyle: {
            normal: {
                color: borderColor,
                barBorderRadius: 10,
            }
        },
        z: 0
    }]
};