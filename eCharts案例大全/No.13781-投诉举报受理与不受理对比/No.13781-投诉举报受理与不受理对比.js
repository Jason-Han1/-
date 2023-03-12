var colors = ['#52dee7', '#eac688'];
var data1 = [521, 856, 919,763,836, 719,463,856,1119,863, 756, 919];
var data2 = [120, 146, 129,187, 246, 229,187, 116, 329,387, 146, 229,];
var xData = function() {
    var data = [];
    for (var i = 0; i < 12; i++) {
        data.push(i + 1 + '月');
    }
    return data;
}();
option = {
     backgroundColor:'#fff',
    title: {
        text: '投诉举报受理与不受理对比',
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
        right: '63%',
        bottom: '73%'
    },
    legend: {
        data: ['投诉举报受理数', '投诉举报不予受理数'],
        align: 'left',
        left: 40,
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
            interval: {default: 0},
            rotate:50,
            formatter : function(params){
               var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 4;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    var tempStr = "";
                    tempStr=params.substring(0,4);
                    newParamsName = tempStr+"...";// 最终拼成的字符串
                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }

        },
        "data":xData
    }],
    yAxis: [{
        type: 'value',
        name: '',
        min: 0,
        max:2500,
        position: 'left',
        axisLine: {
            lineStyle: {
                color: '#22769d'
            }
        },
        axisLabel: {
            formatter: '{value} '
        }
    }],
    series: [{
            name: '投诉举报受理数',
            type: 'bar',
            color: colors[0],
            
            data: data1
        },
        {
            name: '投诉举报不予受理数',
            type: 'bar',
            color: colors[1],
            
            data: data2
        },
        {
            name: '不予受理率',
            type: 'pie',
            radius: ['9%', '12%'],
            color: '#e60033',
            center: ['35%', '14%'],
            tooltip: {
                trigger: 'item',
                formatter: " {b} :<br/> {c} ({d}%)"
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: data2[0],
                name: '投诉举报不予受理数',

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
                name: '投诉举报受理数',
                label: {
                    normal: {
                        formatter: '\n不予受理率',
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
myChart.on('click', function(params) {
    if (params.componentType === 'series' && params.seriesType === 'bar') {
        var dataIndex = params.dataIndex;
        myChart.setOption({
            series: [{
                    name: '投诉举报受理数',
                    type: 'bar',
                    color: colors[0],
                    data: data1
                },
                {
                    name: '投诉举报不予受理数',
                    type: 'bar',
                    color: colors[1],
                    data: data2
                },
                {
                    name: '不予受理率',
                    type: 'pie',
                   radius: ['9%', '12%'],
                    color: '#e60033',
                    center: ['35%', '14%'],
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b} :<br/> {c} ({d}%)"
                    },
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                        value: data2[dataIndex],
                        name: '投诉举报不予受理数',

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
                        name: '投诉举报受理数',
                        label: {
                            normal: {
                                formatter: '\n不予受理率',
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