var TP_value = 200;
var kd = [];
var Gradient = [];
var leftColor = '';
var showValue = '';
var boxPosition = [100, 0];
var TP_txt = ''
var max_temp = 250;
// 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
for(var i = 0, len = max_temp; i <= len; i++) {
if(i < 10 || i > max_temp) {
    kd.push('')
} else {
    if((i - 50) % 50 === 0) {
        kd.push('-3');
    } else if((i - 10) % 10 === 0) {
        kd.push('-1');
    } else {
        kd.push('');
    }
}

}
//中间线的渐变色和文本内容
if(TP_value > 200) {
TP_txt = '温度偏高';
Gradient.push({
    offset: 0,
    color: '#93FE94'
}, {
    offset: 0.5,
    color: '#E4D225'
}, {
    offset: 1,
    color: '#E01F28'
})
} else if(TP_value > 160) {
TP_txt = '温度正常';
Gradient.push({
    offset: 0,
    color: '#93FE94'
}, {
    offset: 1,
    color: '#E4D225'
})
} else {
TP_txt = '温度偏低';
Gradient.push({
    offset: 1,
    color: '#93FE94'
})
}
if(TP_value > max_temp) {
showValue = max_temp
} else {
if(TP_value < -60) {
    showValue = -60
} else {
    showValue = TP_value
}
}
if(TP_value < -10) {
boxPosition = [65, -120];
}
leftColor = Gradient[Gradient.length - 1].color;
// 因为柱状初始化为0，温度存在负值，所以加上负值60和空出距离10
option = {
backgroundColor: '#0C2F6F',

title:{
    text:[
        '{a|' + TP_value + '}{b|°C}',
        '{c|' + TP_txt + '}'
    ].join('\n'),

    x: 'center',
    y: "50%",
    textStyle: {
        color: "#aaa",
        fontWeight: 200,
        fontSize: 14,
        rich: {
        a: {
            align: 'center',
            lineHeight: 50,
            fontSize: 40,
            fontFamily: 'digifacewide',
            color: leftColor
        },
        b: {
            fontFamily: '微软雅黑',
            fontSize: 15,
            lineHeight: 50,
            color: leftColor
        },
        c: {
            lineHeight: 50,
            fontSize: 25,
            align: 'center',
            color: '#fff'
        }
    },
    },
},
grid:{
    left: "25%"
},
yAxis: [{
    show: false,
    data: [],
    min: 0,
    max: max_temp,
    axisLine: {
        show: false
    }
}, {
    show: false,
    min: 0,
    max: 50,
}, {
    type: 'category',
    data: ['', '', '', '', '', '', '', '', '', '', '°C'],
    position: 'left',
    offset: -80,
    axisLabel: {
        fontSize: 10,
        color: 'white'
    },
    axisLine: {
        show: false
    },
    axisTick: {
        show: false
    },
}],
xAxis: [{
    show: false,
    min: -10,
    max: 80,
    data: []
}, {
    show: false,
    min: -10,
    max: 80,
    data: []
}, {
    show: false,
    min: -10,
    max: 80,
    data: []
}, {
    show: false,
    min: -5,
    max: 80,

}],
series: [{
    name: '条',
    type: 'bar',
    // 对应上面XAxis的第一个对)象配置
    xAxisIndex: 0,
    data: [{
        value: (showValue ),
        label: {
            normal: {
                show: false,
            }
        }
    }],

    barWidth: 6,
    itemStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient)
        }
    },
    z: 2
}, {
    name: '白框',
    type: 'bar',
    xAxisIndex: 1,
    barGap: '-100%',
    data: [max_temp],
    barWidth: 12,
    itemStyle: {
        normal: {
            color: '#0C2E6D',
            barBorderRadius: 20,
        }
    },
    z: 1
}, {
    name: '外框',
    type: 'bar',
    xAxisIndex: 2,
    barGap: '-100%',
    data: [max_temp],
    barWidth: 18,
    itemStyle: {
        normal: {
            color: '#4577BA',
            barBorderRadius: 50,
        }
    },
    z: 0
}, {
    name: '圆',
    type: 'scatter',
    hoverAnimation: false,
    data: [0],
    xAxisIndex: 0,
    symbolSize: 22,
    itemStyle: {
        normal: {
            color: '#93FE94',
            opacity: 1,
        }
    },
    z: 2
}, {
    name: '白圆',
    type: 'scatter',
    hoverAnimation: false,
    data: [0],
    xAxisIndex: 1,
    symbolSize: 28,
    itemStyle: {
        normal: {
            color: '#0C2E6D',
            opacity: 1,
        }
    },
    z: 1
}, {
    name: '外圆',
    type: 'scatter',
    hoverAnimation: false,
    data: [0],
    xAxisIndex: 2,
    symbolSize: 35,
    itemStyle: {
        normal: {
            color: '#4577BA',
            opacity: 1,
        }
    },
    z: 0
}, {
    name: '刻度',
    type: 'bar',
    yAxisIndex: 0,
    xAxisIndex: 3,
    label: {
        normal: {
            show: true,
            position: 'left',
            distance: 10,
            color: 'white',
            fontSize: 14,
            formatter: function(params) {
                if(params.dataIndex > max_temp || params.dataIndex < 10) {
                    return '';
                } else {
                    if((params.dataIndex - 50) % 50 === 0) {
                        return params.dataIndex ;
                    } else {
                        return '';
                    }
                }
            }
        }
    },
    barGap: '-100%',
    data: kd,
    barWidth: 1,
    itemStyle: {
        normal: {
            color: 'white',
            barBorderRadius: 20,
        }
    },
    z: 0
}]
};