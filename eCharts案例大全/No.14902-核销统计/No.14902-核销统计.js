var itemStyle = {
    normal: {

    },
    emphasis: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};

option = {
    title: {
        text: '核销统计'
    },
    backgroundColor: '#fff',
    legend: {
        data: ['男性', '女性'],
        top: "0"
    },
    tooltip: {
        formatter: function(params) {
            if (params.value < 0) {
                return params.name + '<br/>男性:' + -params.value+"%"
            } else {
                return params.name + '<br/>女性:' + params.value+"%"
            }
        }
    },
    xAxis: {
        name: '',
        silent: false,
        type: 'category',
        data: []

    },
    yAxis: [{
        position :"right",
        inverse: true,
        name: '',
        splitArea: {
            show: false
        },
        axisLabel: {
            formatter: function(value) {
                if (value < 0) {
                    return -value+"%"
                } else {
                    return value+"%"
                }
            }
        }

    }, {
        inverse: true,
        name: '',
        position: 'right',
        nameLocation: 'start',
        splitArea: {
            show: false
        }
    }],
    grid: {

    },
    series: [{
        name: '男性',
        type: 'bar',
        stack: 'one',
        itemStyle: itemStyle,
        data: [{
            name: "领券未核销",
            value: "30",
            itemStyle: {
                normal: {
                    color: "#3fc6f5"
                }
            }
        }, {
            name: "领券核销单张",
            value: "80",
            itemStyle: {
                normal: {
                    color: "#2dc313"
                }
            }
        }, {
            name: "领券未核销",
            value: "40",
            itemStyle: {
                normal: {
                    color: "#e8872f"
                }
            }
        }]
    }, {
        name: '女性',
        type: 'bar',
        stack: 'one',
        itemStyle: itemStyle,
        data: [{
            name: "领券未核销",
            value: "-70",
            itemStyle: {
                normal: {
                    color: "#3fc6f5"
                }
            }
        }, {
            name: "领券核销单张",
            value: "-20",
            itemStyle: {
                normal: {
                    color: "#2dc313"
                }
            }
        }, {
            name: "领券核销多张",
            value: "-60",
            itemStyle: {
                normal: {
                    color: "#e8872f"
                }
            }
        }]
    }]
};