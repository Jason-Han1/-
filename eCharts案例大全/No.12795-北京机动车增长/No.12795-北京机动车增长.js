var data = [{
    "name": "2001",
    "value": 170
}, {
    "name": "2002",
    "value": 190
}, {
    "name": "2003",
    "value": 212
}, {
    "name": "2004",
    "value": 230
}, {
    "name": "2005",
    "value": 258
}, {
    "name": "2006",
    "value": 288
}, {
    "name": "2007",
    "value": 313
}, {
     "name": "2008",
    "value": 350
}, {
    "name": "2009",
    "value": 402
}, {
    "name": "2010",
    "value": 481
}, {
    "name": "2011",
    "value": 498
}, {
    "name": "2012",
    "value": 520
}, {
    "name": "2013",
    "value": 544
}, {
    "name": "2014",
    "value": 559
}, {
    "name": "2015",
    "value": 562
}, {
    "name": "2016",
    "value": 572
}];
var xData = [],
    yData = [];
var min = 100; 
data.map(function(a, b) {
    xData.push(a.name);
    if (a.value === 0) {
        yData.push(a.value + min);
    } else {
        yData.push(a.value);
    }
});
option = {
    backgroundColor:"#111c4e",
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        formatter: function(prams) {
            if (prams[0].data === min) {
                return "合格率：0"
            } else {
                return "合格率：" + prams[0].data
            }
        }
    },
    legend: {
        data: ['直接访问', '背景'],
        show: false
    },
    grid: {
        left: '1%',
        right: '1%',
        bottom: '5%',
        top: '7%',
        height: '85%',
        containLabel: true,
        z: 22
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        data: xData,
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#0c3b71'
            }
        },
        axisLabel: {
            show: true,
             color: 'rgb(170,170,170)',
             fontSize:16
        }
    }],
    yAxis: [{
            type: 'value',
            gridIndex: 0,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            min: min,
            max: 600,
            axisLine: {
                lineStyle: {
                    color: '#0c3b71'
                }
            },
            axisLabel: {
                color: 'rgb(170,170,170)',
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            min: min,
            max: 100,
            splitNumber: 12,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                }
            }
        }
    ],
    series: [{
            name: '合格率',
            type: 'bar',
            barWidth: '30%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00feff'
                            },
                            {
                                offset: 0.5,
                                color: '#027eff'
                            },
                            {
                                offset: 1,
                                color: '#0286ff'
                            }
                        ]
                    )
                }
            },
            data: yData,
            zlevel: 11

        },
        {
            name: '背景',
            type: 'bar',
            barWidth: '50%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-135%',
            data: [100, 100, 100, 100, 100, 100, 100,100,100,100,100,100,100,100,100,100],
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            zlevel: 9
        },
      
    ]
};

