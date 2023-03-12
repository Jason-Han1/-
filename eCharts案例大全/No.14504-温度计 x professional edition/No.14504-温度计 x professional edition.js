//刻度
text = ['35', '36', '37', '38', '39', '40', '41'];

//原始数据
var value = 37.5;

//设置温度计颜色
var mercuryColor = '#fd4d49';
var borderColor = '#fd4d49';

//计算x轴最大值和bar长度
function getAxisMax(data) {
    var Max = {};
    Max.maxAxis0 = data.length * 20;
    Max.maxAxis1 = data.length * 2 - 1;
    Max.lenOuterBar = [data.length * 20];
    Max.lenInnerBar = [data.length * 20 * 0.99];
    return Max;
}
max = getAxisMax(text)

//将原始数据转换为图上显示的数值
function getData(value) {
    return [value * 20 + -684.5];
}
var data = getData(value);

//构造显示刻度
function getScale(data) {
    scale = [{
        value: 0,
        label: {
            normal: {
                formatter: ''
            }
        }
    }];
    for (var i in data) {
        scale.push({
            value: 10,
            label: {
                normal: {
                    formatter: data[i]
                }
            }
        });
        if (i == (data.length - 1)) {
            break;
        }
        scale.push({
            value: 5,
            label: {
                normal: {
                    formatter: ''
                }
            }
        });
    }
    return scale;
}
scale = getScale(text);

option = {
    title: {
        text: '温度计 x professional edition',
        show: false
    },
    xAxis: [{
        show: false,
        min: 0,
        max: max.maxAxis0
    }, {
        show: false,
        data: [],
        min: 0,
        max: max.maxAxis1,
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
        min: -110, //根据容器大小调整此处最小值和最大值，以正常显示刻度
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
        data: max.lenInnerBar,
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
        data: max.lenOuterBar,
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
            }
        },
        barGap: '-100%',
        data: scale,
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