var colors = ['#1E90FF', '#ff0000'];
var data1 = [421, 356, 719, 658, 458];
var data2 = [87, 46, 129, 174, 45];
var xData = ['南宁市行政审批局','柳州市行政审批局','梧州市行政审批局','北海市行政审批局','钦州市行政审批局'];
option = {
    backgroundColor:'#fff',
    title: {
        text: '单位不予受理情况',
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
        right: '60%',
        bottom: '60%'
    },
    legend: {
        data: ['审批申请数', '不予受理数'],
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
            rotate:-30,
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
                color: '#000'
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
            name: '不予受理数',
            type: 'bar',
            color: colors[1],
            barWidth: 10,
            data: data2
        },
        {
            name: '不予受理率',
            type: 'pie',
            radius: ['10%', '14%'],
            color: ['#ff0000','#00EE76'],
            center: ['43%', '10%'],
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
                name: '不予受理数',

                label: {
                    normal: {
                        formatter: '{d} %',
                        textStyle: {
                            fontSize: 12
                        }
                    }
                }
            }, {
                value: data1[0] - data2[0],
                name: '受理数',

                label: {
                    normal: {
                        formatter: '\不予受理率',
                        textStyle: {
                            color: '#555',
                            fontSize: 10
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
myChart.on('mouseover', function(params) {
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
                    name: '不予受理数',
                    type: 'bar',
                    color: colors[1],
                    barWidth: 10,
                    data: data2
                },
                {
                    name: '不予受理率',
                    type: 'pie',
                    radius: ['10%', '14%'],
            color: ['#ff0000','#00EE76'],
            center: ['43%', '10%'],
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
                        name: '不予受理数',

                        label: {
                            normal: {
                                formatter: '{d} %',
                                textStyle: {
                                    fontSize: 12
                                }
                            }
                        }
                    }, {
                        value: data1[dataIndex] - data2[dataIndex],
                        name: '受理数',

                        label: {
                            normal: {
                                formatter: '\不予受理率',
                                textStyle: {
                                    color: '#555',
                                    fontSize: 10
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