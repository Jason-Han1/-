var colors = ['#66CDAA', '#B8860B'];
var data1 = [421, 356, 719, 658, 458, 443, 620, 416, 551, 721, 466, 632];
var data2 = [87, 46, 129, 174, 45, 26, 84, 52, 46, 138, 96, 164];
var xData = function() {
    var data = [];
    for (var i = 0; i < 12; i++) {
        data.push(i + 1 + '月');
    }
    return data;
}();
option = {
    title: {
        text: '单位审批事项情况',
        textStyle: {
            fontSize: '15'
        }
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    grid: {
        top: 65,
        right: '50%',
        bottom: '50%'
    },
    legend: {
        data: ['审批申请数', '办结数'],
        align: 'left',
        left: 10,
        top: 30
    },
    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            textStyle: {
                fontSize: 10
            }
        },
        "data": xData,
    }],
    yAxis: [{
        type: 'value',
        name: '',
        min: 0,
        max: 1000,
        position: 'left',
        axisLine: {
            lineStyle: {
                color: colors[0]
            }
        },
        axisLabel: {
            formatter: '{value} '
        }
    }],
    series: [{
            name: '审批申请数',
            type: 'bar',
            color: colors[0],
            barWidth: 10,
            data: data1
        },
        {
            name: '办结数',
            type: 'bar',
            color: colors[1],
            barWidth: 10,
            data: data2
        },
        {
            name: '办结率',
            type: 'pie',
            radius: ['12%', '15%'],
            color: '#ff0000',
            center: ['45%', '12%'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: data2[0],
                name: '办结数',

                label: {
                    normal: {
                        formatter: '{d} %',
                        textStyle: {
                            fontSize: 15
                        }
                    }
                }
            }, {
                value: data1[0] - data2[0],
                name: '未办结数',
                label: {
                    normal: {
                        formatter: '\n办结率',
                        textStyle: {
                            color: '#555',
                            fontSize: 13
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#aaa'
                    },
                    emphasis: {
                        color: '#aaa'
                    }
                },
            }]
        }
    ]
};
// 点击事件
myChart.on('click', function(params) {
    if (params.componentType === 'series' && params.seriesType === 'bar') {
        var dataIndex = params.dataIndex;
        myChart.setOption({
            series: [{
                    name: '审批申请数',
                    type: 'bar',
                    color: colors[0],
                    barWidth: 10,
                    data: data1
                },
                {
                    name: '办结数',
                    type: 'bar',
                    color: colors[1],
                    barWidth: 10,
                    data: data2
                },
                {
                    name: '办结率',
                    type: 'pie',
                    radius: ['12%', '15%'],
                    color: '#ff0000',
                    center: ['45%', '12%'],
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                        value: data2[dataIndex],
                        name: '办结数',

                        label: {
                            normal: {
                                formatter: '{d} %',
                                textStyle: {
                                    fontSize: 15
                                }
                            }
                        }
                    }, {
                        value: data1[dataIndex] - data2[dataIndex],
                        name: '未办结数',
                        label: {
                            normal: {
                                formatter: '\n办结率',
                                textStyle: {
                                    color: '#555',
                                    fontSize: 13
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#aaa'
                            },
                            emphasis: {
                                color: '#aaa'
                            }
                        },
                    }]
                }
            ]
        })
    }
});