var data = [{
    "name": "光谷三路",
    "value": 8
}, {
    "name": "黄陵大道",
    "value": 11
}, {
    "name": "临空港大道",
    "value": 13
}, {
    "name": "青年路",
    "value": 12
}, {
    "name": "八一路",
    "value": 15
}, {
    "name": "兴业路",
    "value": 16
}, {
    "name": "汉阳大街",
    "value": 10
}, {
    "name": "汉施大道",
    "value": 16
}, {
    "name": "沿河大道",
    "value": 16
}];
var xData = [],
    yData = [];
data.map(function(a, b) {
    xData.push(a.name);
    yData.push(a.value);
    // yData.push((Math.random(0,1) * 100).toFixed(0));
});
option = {
    backgroundColor: "#fff",
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        formatter: function(prams) {
            var htmlStr = '车流量：' + prams[0].data + '万' +
                '<br>' + '合格率：' + prams[1].data + '%';
            return htmlStr;
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            //type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        formatter: function(prams) {
            var seriesName = prams[0].name;
            var htmlStr = seriesName + '<br>车流量：' + prams[0].data + '万' +
                '<br>' + '合格率：' + prams[1].data + '%';
            return htmlStr;
        }
    },
    legend: {
        show: true,
        data: ['车流量', '遥测合格率']
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '7%',
        height: '85%',
        containLabel: true,
        z: 1
    },
    xAxis: [{
        type: 'category',
        data: xData,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            color: 'rgb(170,170,170)',
            fontSize: 16
        }
    }],
    yAxis: [{
        name: '车流量（单位：万）',
        type: 'value',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#0c3b71'
            }
        },
        axisLabel: {
            color: 'rgb(170,170,170)',
            //formatter: '{value} %'
        }
    }, {
        name: '遥测合格率（单位：%）',
        type: 'value',
        position: 'right',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#0c3b71'
            }
        },
        axisLabel: {
            color: 'rgb(170,170,170)',
            formatter: '{value} %'
        },
        //data:['20','40','60','80','100']
        max: 100
    }],
    series: [{
            name: '车流量',
            yAxisIndex: 0,
            type: 'bar',
            barWidth: '20',
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(185,121,245)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(240,147,186)'
                            }
                        ]
                    )
                }
            },
            markPoint: {
                label: {
                    color: '#FFF'
                },
                data: [{
                    name: '',
                    type: 'min',
                }]
            },
            data: yData,
            //zlevel: 1
        },
        {
            name: '遥测合格率',
            type: 'line',
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: 'rgb(86,152,255)',
                    lineStyle: {
                        width: 2,
                        type: 'solid',
                    }
                }
            },
            label: {
                normal: {
                    show: false, //折线上方label控制显示隐藏
                    position: 'top',
                }
            },
            symbol: 'circle',
            symbolSize: 6,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: 'rgb(255,255,255,0)'
                    }, {
                        offset: 0,
                        color: 'rgb(116,170,255)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            markPoint: {
                label: {
                    color: '#FFF',
                    formatter: '{c}%'
                },
                data: [{
                    name: '',
                    type: 'max',
                }]
            },
            data: yData,
            //zlevel: 1
        }

    ]
};