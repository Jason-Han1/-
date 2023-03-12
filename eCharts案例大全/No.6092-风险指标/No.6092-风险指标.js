var myColor = ['#48a6d9', '#f25e7a', '#57bbca', '#566d86', '#48a6d9', '#f25e7a', '#57bbca', '#566d86',];
var option = {
    backgroundColor: '#fff',
    tooltip: {
        show: false
    },
    grid: {
        top: '20%',
        left: '5%',
        right: '5%',
        bottom: '15%',
    },
    xAxis: {
        data: ['处置方式环保风险性评估指标', '污染物处理工艺稳定性指标', '处置方式安全性评估指标', '处理工艺的经济性评估指标', '处置方式人员职业病健康评估指标'],
        // offset: 15,
        axisLine: {
            lineStyle: {
                color: '#3b5872',
                width:'5',
            }
        },
        axisTick: {
            alignWithLabel: true
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
        
            textStyle: {
                fontSize: 10,
                fontWeight: '600',
                color: function(param, index) {
                    return myColor[index]
                },
            }
        },
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#ccc',
            }
        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#ccc',
            }
        },
    },
    series: [
        {
            type: 'bar',
            z: 1,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(219, 219, 219,1)'
                    }, {
                        offset: .3,
                        color: 'rgba(219, 219, 219,.3)'
                    }, {
                        offset: 1,
                        color: 'rgba(219, 219, 219,.1)'
                    }],
                    global: false
                },
            },
            barWidth: '40',
            data: [35, 10, 25, 15, 15],
        },
        {
            name: '',
            type: 'pictorialBar',
            z: 2,
            symbolPosition: 'end',
            symbolSize: 40.6,
            symbolOffset: [0, '-20'],
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 5,
                    shadowOffsetY: 3,
                    shadowOffsetX: 0,
                    color: function(params) {
                        var colorList = ['#57bbca', '#f25e7a', '#48a6d9', '#566d86', '#57bbca', '#f25e7a', '#48a6d9', '#566d86',];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        fontSize: 20,
                        position: 'top',
                        distance: -80,
                        formatter: '{c}',
                        fontWeight:'600',
                    }
                }
            },
            data: [{
                value: 35,
            }, {
                value: 10,
            }, {
                value: 25,
            }, {
                value: 15,
            }, {
                value: 15,
            }]
        },
        {
        name: 'A',
        type: 'line',
        z:1,
        // symbol: 'roundRect',
        lineStyle: {
            normal: {
                width: 2,
                color:'#000',
            }
        },
        symbolSize: [0, 0],
        data: [35, 10, 25, 15, 15],
    },

    ],
};