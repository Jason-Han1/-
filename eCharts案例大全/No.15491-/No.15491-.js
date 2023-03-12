var json = {
    color: ['#028891', '#7f7f81', '#412cab'],
    data1: [1, 3, 1],
    data2: [1, 3, 1],
    data3: [1, 3, 1],
}
var img = new Image();
img.src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497252934&di=816999706026790ef44132b0c8170fd9&imgtype=jpg&er=1&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140618%2F0008020912438078_b.jpg'

var eStyle = {
    textStyle: {
        fontFamily: 'Helvetica Neue, Arial, Helvetica, Verdana, sans-serif',
        color: '#999',
        // fontSize:fontSize(12),
    },
    markPoint: {
        data: [{
            type: 'max',
            name: '最大值'
        }, {
            type: 'min',
            name: '最小值'
        }],
        symbolSize: 40,
        label: {
            normal: {
                textStyle: {
                    color: '#fff'
                }
            }
        }
    },
    pieHide: {
        normal: {
            color: 'rgba(0,0,0,0)',
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    },
    gradient: function(json) {
        var x0 = json.x0 || 0;
        var y0 = json.y0 || 0;
        var x2 = json.x2 || 1;
        var y2 = json.y2 || 0;
        return new echarts.graphic.LinearGradient(x0, y0, x2, y2, [{
            offset: 0,
            color: json.color[0]
        }, {
            offset: 1,
            color: json.color[1]
        }], false)
    }
};
var labelBottom = {
    normal: {
        color: 'rgba(0,0,0,0)',
        label: {
            show: false,
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var labelTop = {
    normal: {
        color: {
            image:img,
        },
        label: {
            show: false,
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        // color: 'rgba(0,0,0,0)'
    }
};
option = {
    color: json.color,
    series: [{
        name: '访问来源1',
        type: 'pie',
        selectedMode: 'single',
        radius: ['15%', '30%'],
        center: ['12%', '30%'],
        hoverAnimation: false,
        z: 12,
        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: json.data1[0],
            name: '1'
        }, {
            value: json.data1[1],
            name: '辅助',
            itemStyle: labelBottom
        }, ]
    }, {
        name: '访问来源1',

        type: 'pie',
        selectedOffset: 0,
        hoverAnimation: false,
        startAngle: 0,
        radius: ['20%', '30%'],
        center: ['12%', '30%'],
        data: [{
            value: json.data2[0],
            name: '辅助',
            itemStyle: labelBottom
        }, {
            value: json.data2[1],
            name: '2',
            itemStyle: labelTop
        }, ]
    },
    {
        name: '访问来源2',
        type: 'pie',
        selectedMode: 'single',
        radius: ['15%', '30%'],
        center: ['36%', '30%'],
        hoverAnimation: false,
        z: 12,
        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: json.data1[0],
            name: '1'
        }, {
            value: json.data1[1],
            name: '辅助',
            itemStyle: labelBottom
        }, ]
    }, {
        name: '访问来源2',

        type: 'pie',
        selectedOffset: 0,
        hoverAnimation: false,
        startAngle: 0,
        radius: ['20%', '30%'],
        center: ['36%', '30%'],
        data: [{
            value: json.data2[0],
            name: '辅助',
            itemStyle: labelBottom
        }, {
            value: json.data2[1],
            name: '2',
            itemStyle: labelTop
        }, ]
    },
    {
        name: '访问来源3',
        type: 'pie',
        selectedMode: 'single',
        radius: ['15%', '30%'],
        center: ['60%', '30%'],
        hoverAnimation: false,
        z: 12,
        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: json.data1[0],
            name: '1'
        }, {
            value: json.data1[1],
            name: '辅助',
            itemStyle: labelBottom
        }, ]
    }, {
        name: '访问来3源',

        type: 'pie',
        selectedOffset: 0,
        hoverAnimation: false,
        startAngle: 0,
        radius: ['20%', '30%'],
        center: ['60%', '30%'],
        data: [{
            value: json.data2[0],
            name: '辅助',
            itemStyle: labelBottom
        }, {
            value: json.data2[1],
            name: '2',
            itemStyle: labelTop
        }, ]
    },
    {
        name: '访问来源4',
        type: 'pie',
        selectedMode: 'single',
        radius: ['15%', '30%'],
        center: ['84%', '30%'],
        hoverAnimation: false,
        z: 12,
        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: json.data1[0],
            name: '1'
        }, {
            value: json.data1[1],
            name: '辅助',
            itemStyle: labelBottom
        }, ]
    }, {
        name: '访问来源4',

        type: 'pie',
        selectedOffset: 0,
        hoverAnimation: false,
        startAngle: 0,
        radius: ['20%', '30%'],
        center: ['84%', '30%'],
        data: [{
            value: json.data2[0],
            name: '辅助',
            itemStyle: labelBottom
        }, {
            value: json.data2[1],
            name: '2',
            itemStyle: labelTop
        }, ]
    },
    {
        name: '访问来源5',
        type: 'pie',
        selectedMode: 'single',
        radius: ['15%', '30%'],
        center: ['25%', '70%'],
        hoverAnimation: false,
        z: 12,
        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: json.data1[0],
            name: '1'
        }, {
            value: json.data1[1],
            name: '辅助',
            itemStyle: labelBottom
        }, ]
    }, {
        name: '访问来源5',

        type: 'pie',
        selectedOffset: 0,
        hoverAnimation: false,
        startAngle: 0,
        radius: ['20%', '30%'],
        center: ['25%', '70%'],
        data: [{
            value: json.data2[0],
            name: '辅助',
            itemStyle: labelBottom
        }, {
            value: json.data2[1],
            name: '2',
            itemStyle: labelTop
        }, ]
    },
    {
        name: '访问来源6',
        type: 'pie',
        selectedMode: 'single',
        radius: ['15%', '30%'],
        center: ['50%', '70%'],
        hoverAnimation: false,
        z: 12,
        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: json.data1[0],
            name: '1'
        }, {
            value: json.data1[1],
            name: '辅助',
            itemStyle: labelBottom
        }, ]
    }, {
        name: '访问来源6',

        type: 'pie',
        selectedOffset: 0,
        hoverAnimation: false,
        startAngle: 0,
        radius: ['20%', '30%'],
        center: ['50%', '70%'],
        data: [{
            value: json.data2[0],
            name: '辅助',
            itemStyle: labelBottom
        }, {
            value: json.data2[1],
            name: '2',
            itemStyle: labelTop
        }, ]
    },
    {
        name: '访问来源7',
        type: 'pie',
        selectedMode: 'single',
        radius: ['15%', '30%'],
        center: ['75%', '70%'],
        hoverAnimation: false,
        z: 12,
        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: json.data1[0],
            name: '1'
        }, {
            value: json.data1[1],
            name: '辅助',
            itemStyle: labelBottom
        }, ]
    }, {
        name: '访问来源7',

        type: 'pie',
        selectedOffset: 0,
        hoverAnimation: false,
        startAngle: 0,
        radius: ['20%', '30%'],
        center: ['75%', '70%'],
        data: [{
            value: json.data2[0],
            name: '辅助',
            itemStyle: labelBottom
        }, {
            value: json.data2[1],
            name: '2',
            itemStyle: labelTop
        }, ]
    }]
};


img.onload = function() {
    myChart.setOption(option)
}