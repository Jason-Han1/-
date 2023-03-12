var data = [{
    "name": "18岁以下",
    "value": 8.29
}, {
    "name": "18-24岁",
    "value": 20.26
}, {
    "name": "25-34岁",
    "value": 32.75
}, {
    "name": "35-44岁",
    "value": 27.71
}, {
    "name": "45岁以上",
    "value": 10.99
}];
var xData = [],
    yData = [];
var min = 0;
var max = 40;
data.map(function(a, b) {
    xData.push(a.name);
    if (a.value === 0) {
        yData.push(a.value + min);
    } else {
        yData.push(a.value);
    }
});
option = {
    backgroundColor:"#fff",
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
                return "合格率：0%"
            } else {
                return "合格率：" + prams[0].data + "%"
            }
        }
    },
    legend: {
        data: ['直接访问', '背景'],
        show: false
    },
    grid: {
        top: '15%',
        left: '5%',
        right: '5%',
        bottom: '15%',
        containLabel: true,
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
                color: '#000'
            }
        },
        axisLabel: {
            show: true,
             color: '#000',
             fontSize:24
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
            max: max,
            axisLine: {
                lineStyle: {
                    color: '#000'
                }
            },
            axisLabel: {
                color: '#000',
                fontSize:24,
                formatter: '{value} %'
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            min: min,
            max: max,
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
                    color: ['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.05)']
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
            data: [100, 100, 100, 100, 100, 100, 100],
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            zlevel: 9
        },
      
    ]
};

