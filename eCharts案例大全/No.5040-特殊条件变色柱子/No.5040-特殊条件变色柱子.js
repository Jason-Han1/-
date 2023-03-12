var name = '通风量';
var data = {
    xAxis: ["#1 水泵室", "#2 水泵室", "#3 水泵室", "#4 水泵室", "#5 水泵室", "#6 水泵室"],
    yAxis: [15, 13, 23, 9, 19, 6]
}

option = {
    backgroundColor:'#000',
    tooltip: {
        trigger: "axis",
        textStyle: {
            fontSize: 50
        }
    },
    legend: {
        data: [name],
        textStyle: {
            fontSize: 40,
            color: '#fff'
        }
    },
    grid: {
        left: '12%',
        bottom: '15%',
        right: '15%'
    },
    xAxis: {
        data: data.xAxis,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgb(2,185,208)'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#ecf6f5',
                fontSize: 28,
            },
            margin: 20,
            interval: 0,
            formatter: function(value) {
                var ret = ""; //拼接加\n返回的类目项  
                var maxLength = 3; //每项显示文字个数  
                var valLength = value.length; //X轴类目项的文字个数  
                var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
                if (rowN > 1) //如果类目项的文字大于5,  
                {
                    for (var i = 0; i < rowN; i++) {
                        var temp = ""; //每次截取的字符串  
                        var start = i * maxLength; //开始截取的位置  
                        var end = start + maxLength; //结束截取的位置  
                        //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                        temp = value.substring(start, end) + "\n";
                        ret += temp; //凭借最终的字符串  
                    }
                    return ret;
                } else {
                    return value;
                }
            }
        }
    },
    yAxis: {
        type: "value",
        name: '    m³/min',
        nameTextStyle: {
            fontSize: 30,
            padding: 20
        },
        axisLine: {
            lineStyle: {
                color: 'rgb(2,185,208)'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#ecf6f5',
                fontSize: 40,
            },
            margin: 20
        }
    },
    series: [{
        name: [name],
        type: "bar",
        data: data.yAxis,
        barWidth: 25,
        "markLine": {
            "data": [{
                type: 'average',
                "lineStyle": {
                    "color": "red",
                    "width": 1.7,
                    height: 20
                },
                "label": {
                    normal: {
                        show: true,
                        position: "end",
                        formatter: '上限',
                        textStyle: {
                            fontSize: 40
                        }
                    },
                },
                "name": "min",
                "yAxis": 17
            }, {
                type: 'average',
                "lineStyle": {
                    "color": "#31e4b6",
                    "width": 1.7
                },
                "label": {
                    normal: {
                        show: true,
                        position: "end",
                        formatter: '下限',
                        textStyle: {
                            fontSize: 40
                        }
                    },
                },
                "name": "下限",
                "yAxis": 2
            }],
        },
        itemStyle: {
            normal: {
                barBorderRadius: 10,
                label: {
                    show: false,
                    position: 'right',
                    textStyle: {
                        fontSize: 40,
                        color: 'rgba(123,198 ,255)'
                    }
                },
                color: function(param) {
                    if (param.value >  17) {
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(223, 82, 72,1)"
                            },
                            {
                                offset: 1,
                                color: "rgba(223, 82, 72,0)"
                            }
                        ]);
                    } else {
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(121, 195, 252,1)'
                            }, {
                                offset: 0.4,
                                color: 'rgba(121, 195, 252,0.5)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(121, 195, 252,0.1)'
                            }
                        ])
                    }
                },
            }
        },
    }, ],
    // color: ["rgb(30, 144, 255)"]
};