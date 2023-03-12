// Generate data
var category = [];
var dottedBase = +new Date();
var lineData = [];
var barData = [];
var linebarData = [];

for (var i = 0; i < 20; i++) {
    var date = new Date(dottedBase += 1000 * 3600 * 24);
    category.push([
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    ].join('-'));
    var b = ((200 + Math.random() * 50) / 10).toFixed(2);
    var d = ((200 + Math.random() * 50) / 10).toFixed(2);
    linebarData.push(d);
    barData.push(b)
    lineData.push(((b - d) / d * 100).toFixed(2));
}


// option
option = {
    backgroundColor: '#0f375f',
    title: {
        text: '第二分区 考核表与计量表日差值分析',
        textStyle: {
            color: '#eee',
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#333'
            }
        }
    },
    legend: {
        x: 'center',
        y: 'bottom',
        data: ['差值率', '计量表水量', '考核表水量'],
        textStyle: {
            color: '#ccc'
        }
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: [{
            type: 'value',
            name: '水量',
            min: 0,
            max: 30,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisLabel: {
                formatter: '{value} 万m3'
            }
        },
        {
            type: 'value',
            name: '差值率',
            min: -50,
            max: 100,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [{
        name: '差值率',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        yAxisIndex: 1,
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: lineData
    }, {
        name: '计量表水量',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [{
                            offset: 0,
                            color: '#14c8d4'
                        },
                        {
                            offset: 1,
                            color: '#43eec6'
                        }
                    ]
                )
            }
        },
        data: barData
    }, {
        name: '考核表水量',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [{
                            offset: 0,
                            color: 'rgba(20,200,212,0.5)'
                        },
                        {
                            offset: 0.2,
                            color: 'rgba(20,200,212,0.2)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(20,200,212,0)'
                        }
                    ]
                )
            }
        },
        z: -12,
        data: linebarData
    }, {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#0f375f'
            }
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: linebarData
    }]
};