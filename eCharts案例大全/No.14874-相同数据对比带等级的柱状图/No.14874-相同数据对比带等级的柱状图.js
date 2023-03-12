var params = [
    [],
    []
];


for (var i = 0; i < 19; i++) {
    var obj1 = {
        name: '图表测试' + (i + 1),
        value: parseInt(100 * Math.random())
    };
    params[0].push(obj1);
    var obj2 = {
        name: '图表测试' + (i + 1),
        value: parseInt(100 * Math.random())
    };
    params[1].push(obj2);
}


var xData = []; //x轴数据
$.each(params[0], function(ind, val) {
    var color = '';
    if (ind >= 0 && ind <= 6) {
        color = '#b2f3ef';

    } else if (ind >= 7 && ind <= 11) {
        color = '#f7c68e';

    } else if (ind >= 12 && ind <= 18) {
        color = '#ffa5a9';

    }
    var obj = {
        value: val.name,
        textStyle: {
            fontSize: 12,
            color: color
        }
    };
    xData.push(obj)
});

option = {
    grid: {

        borderColor: '#fff',
        borderWidth: 2,
        left: 30
    },

    yAxis: [{
        max: 100,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,

            lineStyle: {
                color: '#fff',
                width: 2,
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        interval: 25,
        splitArea: {
            show: true,
            areaStyle: {

                color: ['rgba(116,194,199,0.6)', 'rgba(121,161,191,0.6)', 'rgba(65,138,179,0.6)', 'rgba(34,121,180,0.6)']
            }
        },
        splitLine: {
            show: false
        },
        type: 'value',
    }],

    xAxis: [{
            type: 'category',
            axisTick: {
                inside: true,

                length: 10,
                lineStyle: {
                    color: '#fff',
                    width: 2,

                }
            },

            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                },

                formatter: function(val) {
                    var strs = val.split(''); //字符串数组
                    var str = ''
                    for (var i = 0, s; s = strs[i++];) { //遍历字符串数组
                        str += s;
                        if (!(i % 2)) str += '\n';
                    }
                    return str
                }

            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 2,
                }
            },
            data: xData
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {

                show: false
            },
            axisLabel: {
                interval: 0,
                show: false,

            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']

        },

    ],
    series: [{
            name: '占位背景',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#195372',
                    barBorderRadius: 50,
                    borderWidth: 0,

                }
            },
            silent: true,
            barWidth: 6,
            barGap: '100%',
            data: [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99]
        }, {
            name: '占位背景',
            type: 'bar',
            xAxisIndex: 1,
            silent: true,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#195372',
                    barBorderRadius: 50,
                    borderWidth: 0,

                }
            },
            barWidth: 6,
            barGap: '100%',
            data: [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99]
        }, {
            name: '上次测评',
            type: 'bar',
            barWidth: 6,
            itemStyle: {
                normal: {
                    barBorderRadius: [50, 50, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(2, 223, 189, 1)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 186, 254, 1)'
                    }], false),
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#00e9c4',
                        fontSize: 12
                    }
                }
            },
            data: params[0]
        }, {
            name: '本次测评',
            type: 'bar',
            barWidth: 6,
            itemStyle: {
                normal: {
                    barBorderRadius: [50, 50, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(239, 235, 214, 1)'

                    }, {
                        offset: 0.8,
                        color: 'rgba(255, 160, 102, 1)'
                    }], false),
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#f3ef91',

                        fontSize: 12
                    }
                }
            },
            barGap: '100%',
            data: params[1]
        }

    ]
};
myChart.setOption(option);