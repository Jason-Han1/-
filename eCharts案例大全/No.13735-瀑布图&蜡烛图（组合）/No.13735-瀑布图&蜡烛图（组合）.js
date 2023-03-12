var plusColor = '#70B3EE';
var minusColor = '#3B3C57';
var totalColor = '#4283F7';
var minusCandleColor = 'red';

option = {
    title: {
        text: '瀑布图&蜡烛图（组合）'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            console.log(params);
            var text = params[1].name + '<br />' + params[1].seriesName + '：' + params[1].value;
            if (params[2].data.value) text += '<br />平均最大值：' + params[2].value[4];
            if (params[2].data.value) text += '<br />平均最小值：' + params[2].value[3];
            return text;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: ['基础分', '导演', '主演', '制作公司', '播出渠道', 'IP', '预计声量', '前作', '常量', '变量', '总分']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: '辅助',
            type: 'bar',
            stack: 'total',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 90, 125, 153, 143, 143, 151, 163, 183, 148, 0]
        },
        {
            name: 'SEI值',
            type: 'bar',
            stack: 'total',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color: '#202020'
                }
            },
            itemStyle: {
                color: plusColor
            },
            data: [90, 35, 35, {
                value: 7,
                itemStyle: {
                    color: minusColor
                }
            }, {
                value: 10,
                itemStyle: {
                    color: minusColor
                }
            }, 8, 12, 28, {
                value: 8,
                itemStyle: {
                    color: minusColor
                }
            }, {
                value: 35,
                itemStyle: {
                    color: minusColor
                }
            }, {
                value: 148,
                itemStyle: {
                    color: totalColor
                }
            }]
        }, {
            type: 'candlestick',
            barWidth: '80%',
            data: [
                [],
                {
                    value: [125, 125, 115, 135],
                    itemStyle: {
                        color: minusColor,
                        color0: minusColor,
                        borderColor: minusColor,
                        borderColor0: minusColor
                    }
                },
                {
                    value: [160, 160, 150, 170],
                    itemStyle: {
                        color: minusColor,
                        color0: minusColor,
                        borderColor: minusColor,
                        borderColor0: minusColor
                    }
                },
                {
                    value: [153, 153, 143, 158],
                    itemStyle: {
                        color: minusCandleColor,
                        color0: minusCandleColor,
                        borderColor: minusCandleColor,
                        borderColor0: minusCandleColor
                    }
                },
                {
                    value: [143, 143, 133, 148],
                    itemStyle: {
                        color: minusCandleColor,
                        color0: minusCandleColor,
                        borderColor: minusCandleColor,
                        borderColor0: minusCandleColor
                    }
                },
                {
                    value: [151, 151, 146, 161],
                    itemStyle: {
                        color: minusColor,
                        color0: minusColor,
                        borderColor: minusColor,
                        borderColor0: minusColor
                    }
                },
                {
                    value: [163, 163, 158, 173],
                    itemStyle: {
                        color: minusColor,
                        color0: minusColor,
                        borderColor: minusColor,
                        borderColor0: minusColor
                    }
                },
                {
                    value: [191, 191, 181, 197],
                    itemStyle: {
                        color: minusColor,
                        color0: minusColor,
                        borderColor: minusColor,
                        borderColor0: minusColor
                    }
                },
                {
                    value: [183, 183, 173, 188],
                    itemStyle: {
                        color: minusCandleColor,
                        color0: minusCandleColor,
                        borderColor: minusCandleColor,
                        borderColor0: minusCandleColor
                    }
                },
                {
                    value: [148, 148, 138, 158],
                    itemStyle: {
                        color: minusCandleColor,
                        color0: minusCandleColor,
                        borderColor: minusCandleColor,
                        borderColor0: minusCandleColor
                    }
                },
                {
                    value: [148, 148, 138, 158],
                    itemStyle: {
                        color: minusColor,
                        color0: minusColor,
                        borderColor: minusColor,
                        borderColor0: minusColor
                    }
                }
            ]
        }
    ]
};