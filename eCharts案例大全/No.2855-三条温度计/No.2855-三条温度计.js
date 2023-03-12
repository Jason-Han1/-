var TP_value = 100;
var height = 80,
    normal = 30;
var kd = [];
var Gradient = [];
var leftColor = '';
var showValue = '';
var boxPosition = [65, 0];
var TP_txt = '';
// 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
for (var i = 0, len = 100; i <= len; i++) {
    if (i % 10 == 0) {
        kd.push('-3');
    } else {
        kd.push('-1');
    }
}
//中间线的渐变色和文本内容
if (TP_value > height) {
    TP_txt = '温度偏高';
    Gradient.push(
        {
            offset: 0,
            color: '#93FE94',
        },
        {
            offset: 0.5,
            color: '#E4D225',
        },
        {
            offset: 1,
            color: '#E01F28',
        }
    );
} else if (TP_value > normal) {
    TP_txt = '温度正常';
    Gradient.push(
        {
            offset: 0,
            color: '#93FE94',
        },
        {
            offset: 1,
            color: '#E4D225',
        }
    );
} else {
    TP_txt = '温度偏低';
    Gradient.push({
        offset: 1,
        color: '#93FE94',
    });
}

leftColor = Gradient[Gradient.length - 1].color;
// 因为柱状初始化为0，温度存在负值，所以加上负值60和空出距离10
var option = {
    backgroundColor: '#0C2F6F',
    title: {
        text: '温度计',
        show: false,
    },
    yAxis: [
        {
            show: false,
            data: [],
            min: 0,
            max: 105,
            axisLine: {
                show: false,
            },
        },
        {
            show: false,
            min: 0,
            max: 120,
        },
    ],
    xAxis: [
        {
            show: false,
            min: -10,
            max: 80,
            data: [],
        },
        {
            show: false,
            min: -10,
            max: 80,
            data: [],
        },
        {
            show: false,
            min: -10,
            max: 80,
            data: [],
        },

        {
            show: false,
            min: -5,
            max: 80,
        },

        {
            show: false,
            min: -10,
            max: 30,
            data: [],
        },
        {
            show: false,
            min: -10,
            max: 30,
            data: [],
        },
        {
            show: false,
            min: -10,
            max: 30,
            data: [],
        },

        {
            show: false,
            min: -10,
            max: 15,
            data: [],
        },
        {
            show: false,
            min: -10,
            max: 15,
            data: [],
        },
        {
            show: false,
            min: -10,
            max: 15,
            data: [],
        },
    ],
    series: [
        {
            name: '条',
            type: 'bar',
            // 对应上面XAxis的第一个对)象配置
            xAxisIndex: 0,
            data: [
                {
                    value: TP_value,
                    label: {
                        normal: {
                            position: 'top',
                            backgroundColor: 'rgba(255,255,255,0.6)',
                            padding: 5,
                            show: true,
                            formatter: '{back| ' + TP_value + ' }{unit|%}\n{downTxt|' + TP_txt + '}',
                            rich: {
                                back: {
                                    align: 'center',
                                    lineHeight: 40,
                                    fontSize: 20,
                                    fontFamily: 'digifacewide',
                                    fontWeight: 'bolder',
                                    color: leftColor,
                                },
                                unit: {
                                    fontFamily: '微软雅黑',
                                    fontSize: 15,
                                    fontWeight: 'bolder',
                                    color: leftColor,
                                },
                                downTxt: {
                                    fontSize: 20,
                                    align: 'center',
                                    fontWeight: 'bolder',
                                    color: '#ffffff',
                                },
                            },
                        },
                    },
                },
            ],
            barWidth: 18,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient),
                },
            },
            z: 2,
        },
        {
            name: '白框',
            type: 'bar',
            xAxisIndex: 1,
            barGap: '-100%',
            data: [105],
            barWidth: 28,
            itemStyle: {
                normal: {
                    color: '#0C2E6D',
                    barBorderRadius: 50,
                },
            },
            z: 1,
        },
        {
            name: '外框',
            type: 'bar',
            xAxisIndex: 2,
            barGap: '-100%',
            data: [106],
            barWidth: 38,
            itemStyle: {
                normal: {
                    color: '#4577BA',
                    barBorderRadius: 50,
                },
            },
            z: 0,
        },

        {
            name: '圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 4,
            symbolSize: 48,
            itemStyle: {
                normal: {
                    color: '#93FE94',
                    opacity: 1,
                },
            },
            z: 2,
        },
        {
            name: '白圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 5,
            symbolSize: 60,
            itemStyle: {
                normal: {
                    color: '#0C2E6D',
                    opacity: 1,
                },
            },
            z: 1,
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 6,
            symbolSize: 70,
            itemStyle: {
                normal: {
                    color: '#4577BA',
                    opacity: 1,
                },
            },
            z: 0,
        },

        {
            name: '条',
            type: 'bar',
            // 对应上面XAxis的第一个对)象配置
            xAxisIndex: 4,
            data: [
                {
                    value: TP_value,
                    label: {
                        normal: {
                            position: 'top',
                            backgroundColor: 'rgba(255,255,255,0.6)',
                            padding: 5,
                            show: true,
                            formatter: '{back| ' + TP_value + ' }{unit|%}\n{downTxt|' + TP_txt + '}',
                            rich: {
                                back: {
                                    align: 'center',
                                    lineHeight: 40,
                                    fontSize: 20,
                                    fontFamily: 'digifacewide',
                                    fontWeight: 'bolder',
                                    color: leftColor,
                                },
                                unit: {
                                    fontFamily: '微软雅黑',
                                    fontSize: 15,
                                    fontWeight: 'bolder',
                                    color: leftColor,
                                },
                                downTxt: {
                                    fontSize: 20,
                                    align: 'center',
                                    fontWeight: 'bolder',
                                    color: '#ffffff',
                                },
                            },
                        },
                    },
                },
            ],
            barWidth: 18,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient),
                },
            },
            z: 2,
        },
        {
            name: '白框',
            type: 'bar',
            xAxisIndex: 5,
            barGap: '-100%',
            data: [105],
            barWidth: 28,
            itemStyle: {
                normal: {
                    color: '#0C2E6D',
                    barBorderRadius: 50,
                },
            },
            z: 1,
        },
        {
            name: '外框',
            type: 'bar',
            xAxisIndex: 6,
            barGap: '-100%',
            data: [106],
            barWidth: 38,
            itemStyle: {
                normal: {
                    color: '#4577BA',
                    barBorderRadius: 50,
                },
            },
            z: 0,
        },
        {
            name: '圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 0,
            symbolSize: 48,
            itemStyle: {
                normal: {
                    color: '#93FE94',
                    opacity: 1,
                },
            },
            z: 2,
        },
        {
            name: '白圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 1,
            symbolSize: 60,
            itemStyle: {
                normal: {
                    color: '#0C2E6D',
                    opacity: 1,
                },
            },
            z: 1,
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 2,
            symbolSize: 70,
            itemStyle: {
                normal: {
                    color: '#4577BA',
                    opacity: 1,
                },
            },
            z: 0,
        },

        {
            name: '条',
            type: 'bar',
            // 对应上面XAxis的第一个对)象配置
            xAxisIndex: 7,
            data: [
                {
                    value: TP_value,
                    label: {
                        normal: {
                            position: 'top',
                            backgroundColor: 'rgba(255,255,255,0.6)',
                            padding: 5,
                            show: true,
                            formatter: '{back| ' + TP_value + ' }{unit|%}\n{downTxt|' + TP_txt + '}',
                            rich: {
                                back: {
                                    align: 'center',
                                    lineHeight: 40,
                                    fontSize: 20,
                                    fontFamily: 'digifacewide',
                                    fontWeight: 'bolder',
                                    color: leftColor,
                                },
                                unit: {
                                    fontFamily: '微软雅黑',
                                    fontSize: 15,
                                    fontWeight: 'bolder',
                                    color: leftColor,
                                },
                                downTxt: {
                                    fontSize: 20,
                                    align: 'center',
                                    fontWeight: 'bolder',
                                    color: '#ffffff',
                                },
                            },
                        },
                    },
                },
            ],
            barWidth: 18,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient),
                },
            },
            z: 2,
        },
        {
            name: '白框',
            type: 'bar',
            xAxisIndex: 8,
            barGap: '-100%',
            data: [105],
            barWidth: 28,
            itemStyle: {
                normal: {
                    color: '#0C2E6D',
                    barBorderRadius: 50,
                },
            },
            z: 1,
        },
        {
            name: '外框',
            type: 'bar',
            xAxisIndex: 9,
            barGap: '-100%',
            data: [106],
            barWidth: 38,
            itemStyle: {
                normal: {
                    color: '#4577BA',
                    barBorderRadius: 50,
                },
            },
            z: 0,
        },
        {
            name: '圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 7,
            symbolSize: 48,
            itemStyle: {
                normal: {
                    color: '#93FE94',
                    opacity: 1,
                },
            },
            z: 2,
        },
        {
            name: '白圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 8,
            symbolSize: 60,
            itemStyle: {
                normal: {
                    color: '#0C2E6D',
                    opacity: 1,
                },
            },
            z: 1,
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 9,
            symbolSize: 70,
            itemStyle: {
                normal: {
                    color: '#4577BA',
                    opacity: 1,
                },
            },
            z: 0,
        },

        {
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
                    formatter: function (params) {
                        if (params.dataIndex > 100 || params.dataIndex < 0) {
                            return '';
                        } else {
                            if (params.dataIndex % 10 === 0) {
                                return params.dataIndex;
                            } else {
                                return '';
                            }
                        }
                    },
                },
            },
            barGap: '-100%',
            data: kd,
            barWidth: 1,
            itemStyle: {
                normal: {
                    color: 'white',
                    barBorderRadius: 120,
                },
            },
            z: 0,
        },
    ],
};
