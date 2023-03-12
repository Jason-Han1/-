 var data = [{
    "time": 1980,
    "data": [{
        "name": "四川",
        "value": [9838, 10.01, "四川"]
    }, {
        "name": "山东",
        "value": [7316, 8.45, "山东"]
    }, {
        "name": "江苏",
        "value": [5953, 6.01, "江苏"]
    }, {
        "name": "湖南",
        "value": [5297, 5.39, "湖南"]
    }, {
        "name": "河北",
        "value": [5186, 5.28, "河北"]
    }, {
        "name": "安徽",
        "value": [4906, 4.99, "安徽"]
    }, {
        "name": "广东",
        "value": [5392, 5.49, "广东"]
    }, {
        "name": "湖北",
        "value": [4696, 4.78, "湖北"]
    }, {
        "name": "河南",
        "value": [7308, 7.43, "河南"]
    }, {
        "name": "浙江",
        "value": [3836, 3.9, "浙江"]
    }]
}, {
    "time": 1990,
    "data": [{
        "name": "四川",
        "value": [10804, 9.45, "四川"]
    }, {
        "name": "山东",
        "value": [8493, 7.43, "山东"]
    }, {
        "name": "江苏",
        "value": [6766.9, 5.92, "江苏"]
    }, {
        "name": "湖南",
        "value": [6110, 5.34, "湖南"]
    }, {
        "name": "河北",
        "value": [6159, 5.39, "河北"]
    }, {
        "name": "安徽",
        "value": [5675, 4.96, "安徽"]
    }, {
        "name": "广东",
        "value": [6347.19, 5.55, "广东"]
    }, {
        "name": "湖北",
        "value": [5439, 4.76, "湖北"]
    }, {
        "name": "河南",
        "value": [8649, 7.456, "河南"]
    }, {
        "name": "广西",
        "value": [4261, 3.73, "广西"]
    }]
},{
    "time": 2000,
    "data": [{
       "name": "四川",
        "value": [8602, 6.79, "四川"]
    }, {
        "name": "山东",
        "value": [8998, 7.10, "山东"]
    }, {
        "name": "江苏",
        "value": [7327, 5.78, "江苏"]
    }, {
        "name": "湖南",
        "value": [6562, 5.18, "湖南"]
    }, {
        "name": "河北",
        "value": [6674, 5.27, "河北"]
    }, {
        "name": "安徽",
        "value": [6286, 4.96, "安徽"]
    }, {
        "name": "广东",
        "value": [7707, 6.08, "广东"]
    }, {
        "name": "湖北",
        "value": [5960, 4.70, "湖北"]
    }, {
        "name": "河南",
        "value": [9488, 7.49, "河南"]
    }, {
        "name": "广西",
        "value": [4750, 3.75, "广西"]
    }]
} ,{
    "time": 2010,
    "data": [{
        "name": "四川",
        "value": [8045, 6.00, "四川"]
    }, {
        "name": "山东",
        "value": [9588, 7.15, "山东"]
    }, {
        "name": "江苏",
        "value": [7869, 5.87, "江苏"]
    }, {
        "name": "湖南",
        "value": [6570, 4.90, "湖南"]
    }, {
        "name": "河北",
        "value": [7194, 4.9, "河北"]
    }, {
        "name": "安徽",
        "value": [5957, 4.44, "安徽"]
    }, {
        "name": "广东",
        "value": [10441, 7.79, "广东"]
    }, {
        "name": "湖北",
        "value": [5728, 4.27, "湖北"]
    }, {
        "name": "河南",
        "value": [9405, 7.01, "河南"]
    }, {
        "name": "浙江",
        "value": [5447, 4.06, "浙江"]
    }]
} ,{
    "time": 2019,
    "data": [{
        "name": "广东",
        "value": [11521, 8.23, "广东"]
    }, {
        "name": "江苏",
        "value": [8070, 5.76, "江苏"]
    }, {
        "name": "山东",
        "value": [10070, 7.19, "山东"]
    }, {
        "name": "浙江",
        "value": [5850, 4.18, "浙江"]
    }, {
        "name": "河南",
        "value": [9640, 6.89, "河南"]
    }, {
        "name": "安徽",
        "value": [6366, 4.55, "安徽"]
    }, {
        "name": "四川",
        "value": [8375, 5.98, "四川"]
    }, {
        "name": "河北",
        "value": [7592, 5.42, "河北"]
    }, {
        "name": "湖北",
        "value": [5927, 4.23, "湖北"]
    }, {
        "name": "湖南",
        "value": [6918, 4.94, "湖南"]
    }]
} ]


var option = {
    backgroundColor: '#2B54B7',
    baseOption: {
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut',
        timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval: 5000,
            left: null,
            right: 5,
            top: 20,
            bottom: 20,
            width: 46,
            height: null,
            label: {
                normal: {
                    textStyle: {
                        color: '#ddd'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            symbol: 'none',
            lineStyle: {
                color: '#555'
            },
            checkpointStyle: {
                color: '#bbb',
                borderColor: '#777',
                borderWidth: 1
            },
            controlStyle: {
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                    color: '#666',
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            data: data.map(function(ele) {
                return ele.time
            })
        },
        backgroundColor: '#333399',
        title: {
            text: '1980-2019年中国人口总数排名前十省份变化情况',
            subtext: '单位:万人',
            left: 'center',
            top: 'top',
            textStyle: {
                fontSize: 25,
                color: 'rgba(255,255,255, 0.9)'
            }
        },
        tooltip: {
            formatter: function(params) {
                if ('value' in params.data) {
                    return params.data.value[2] + ': ' + params.data.value[0];
                }
            }
        },
        grid: {
            left: 10,
            right: '45%',
            top: '70%',
            bottom: 5
        },
        xAxis: {},
        yAxis: {},
        series: [{
            id: 'map',
            type: 'map',
            mapType: 'china',
            top: '10%',
            //bottom: '25%',
            //left: '5%',
            //right: '10%',
            itemStyle: {
                normal: {
                    areaColor: '#526276',
                    borderColor: '#BFB5A6'
                },
                emphasis: {
                    label: {
                        show: true
                    },
                    areaColor: 'rgba(255,255,255, 0.5)'
                }
            },
            data: []
        }, {
            id: 'bar',
            type: 'bar',
            tooltip: {
                show: false
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#ddd'
                    }
                }
            },
            data: []
        }, {
            id: 'pie',
            type: 'pie',
            radius: ['12%', '20%'],
            center: ['75%', '85%'],
            //roseType: 'area',
            tooltip: {
                formatter: '{b} {d}%'
            },
            data: [],
            label: {
                normal: {
                    textStyle: {
                        color: '#ddd'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#ddd'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(0,0,0,0.3)',
                    borderSize: 1
                }
            }
        }]
    },
    options: []
}

for (var i = 0; i < data.length; i++) {
    //计算其余省份人口
    var restPercent = 100;
    var restValue = 0;
    data[i].data.forEach(function(ele) {
        restPercent = restPercent - ele.value[1];
    });
    restValue = data[i].data[0].value[0] * (restPercent / data[i].data[0].value[1]);
    console.log(restPercent);
    console.log(restValue);
    option.options.push({
        visualMap: [{
            //type:'continous',
            //type: 'continuous',
            calculable: true,
            dimension: 0,
            left: 10,
            top: 'center',
            itemWidth: 12,
            min: data[i].data[9].value[0],
            max: data[i].data[0].value[0],
            text: ['High', 'Low'],
            textStyle: {
                color: '#ddd'
            },
            inRange: {
//                color: ['lightskyblue', 'yellow', 'orangered', 'red']
                color: ['lightskyblue', 'yellow', 'orangered']
            }
        }],
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.1],
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#ddd'
                }
            },

            data: data[i].data.map(function(ele) {
                return ele.value[2]
            }).reverse()
        },
        series: [{
            id: 'map',
            data: data[i].data
        }, {
            id: 'bar',
            label: {
                normal: {
                    position: 'right',
                    formatter: '{b} : {c}'
                }
            },
            data: data[i].data.map(function(ele) {
                return ele.value[0]
            }).sort(function(a, b) {
                return a > b
            })
        }, {
            id: 'pie',
            data: data[i].data.map(function(ele) {
                return {
                    name: ele.value[2],
                    value: ele.value
                }
            }).concat({
                name: '其他省份',
                value: restValue
            }),
        }]
    })
}