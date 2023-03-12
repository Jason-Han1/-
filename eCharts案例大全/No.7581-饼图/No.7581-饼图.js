function getData(percent) {
    return [{
        value: percent,
        name: percent,
        itemStyle: {
             normal: {
                 color: 'rgba(0, 0, 0, 0)',
                borderWidth: 10,
                borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                                color: '#abcdff'
                            }, {
                                offset: 1,
                                color: '#5e9eff'
                            }]),
            }
        }
    }, {
        value: 1 - percent,
        name:1-percent,
         itemStyle: placeHolderStyle
    }];
}

var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    },
    emphasis:{
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
            }
};

option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            if(params.dataIndex === 0) return params.seriesName + ": " + params.name * 100 + "%";
            
        }
    },
    
    series: [{
        name: '实勘率',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [80, 100],
        silent: true,
        itemStyle: {
             normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: '#f3f7fa',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
            },
            emphasis:{
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
            }
        },
        data: [{
            value: 1,
            name: 1,
            itemStyle: {
                 normal: {
                    color: '#f3f7fa',
                }
            }
        }, {
            value: 0,
        }]
    }, {
        name: '户型图比例',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [85, 95],
        itemStyle: placeHolderStyle,
        data: getData(0.5)
    }, {
        name: '钥匙率',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [0, 65],
        silent: true,
        itemStyle: {
             normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
            }
        },
        data: [{
            value: 1,
            name: 1,
            itemStyle: {
                 normal: {
                    color: '#f3f7fa',
                }
            }
        }, {
            value: 0,
        }]
    }]
};