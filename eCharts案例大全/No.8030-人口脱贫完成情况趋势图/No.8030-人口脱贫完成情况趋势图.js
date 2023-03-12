// Generate data
var category = []; //年月
var lineData = []; //贫困人口
var barData = [0]; //脱贫人口
var rateData = []; //脱贫率

var total = 316532;
var data = new Date('2018-12-1');
var year = data.getFullYear();
data.setMonth(data.getMonth() + 1, 1) //获取到当前月份,设置月份
for (var i = 0; i < 36; i++) {
    data.setMonth(data.getMonth() - 1); //每次循环一次 月份值减1
    var m = data.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    category.push(data.getFullYear() + "-" + (m));
    var b = barData[i] + parseInt(Math.random() * 10000);
    barData.push(b);
    lineData.push(total - b);
    rateData.push((b / (total - b)).toFixed(2) * 100);
}
category.reverse();

// option
option = {
    title: {
        text: '人口脱贫完成情况趋势图',
        textStyle: {
            color: '#fff',
            fontSize: 25
        }
    },
    backgroundColor: '#0f375f',
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
        data: ['贫困人口', '脱贫人口', '脱贫率'],
        textStyle: {
            color: '#ccc'
        }
    },
    grid: {
        left: '20',
        right: '20',
        bottom: '9%',
        top: '60',
        containLabel: true
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
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#ffffff',
                }
            },
            axisLabel: {
                formatter: '{value} ',
            }
        },
        {
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#B4B4B4',
                }
            },
            axisLabel: {
                formatter: function(value) {
                    return value + '%';
                }
            }
        }
    ],
    series: [{
            name: '脱贫率',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#F02FC2'
                },
            },
            data: rateData
        },
        {
            name: '脱贫人口',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    //颜色渐变
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 1,
                                color: '#33cabb'
                            },
                            {
                                offset: 0,
                                color: '#3EACE5'
                            }
                        ]
                    )
                }
            },
            data: barData,
        },

        {
            name: '贫困人口',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: 'rgba(156,107,211,1)'
                            },
                            // {offset: 0.2, color: 'rgba(156,107,211,0.5)'},
                            {
                                offset: 1,
                                color: 'rgba(156,107,211,0)'
                            }
                        ]
                    )
                }
            },
            data: lineData
        },
    ]
};