var data = [{
        "name": "1月",
        "value": 80
    }, {
        "name": "2月",
        "value": 87.8
    }, {
        "name": "3月",
        "value": 71
    }, {
        "name": "4月",
        "value": 80
    }, {
        "name": "5月",
        "value": 66
    }, {
        "name": "6月",
        "value": 80
    }, {
        "name": "7月",
        "value": 80
    }, {
        "name": "8月",
        "value": 66
    }, {
        "name": "9月",
        "value": 80
    }, {
        "name": "10月",
        "value": 80
    },
    {
        "name": "11月",
        "value": 80
    }, {
        "name": "12月",
        "value": 80
    }
];
var xData = [],
    yData = [];
var min = 0;
data.map(function(a, b) {
    xData.push(a.name);
    // if (a.value === 0) {
    yData.push(a.value);
    // } else {
    yData.push(a.value);
    // }
});
option = {
    backgroundColor: "#111c4e",
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
            return prams[0].data + ""
        }
    },
    // legend: {
    //     data: ['直接访问', '背景'],
    //     show: false
    // },
    grid: {
        left: '0%',
        right: '0%',
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
            // alignWithLabel: true
            show:false
        },
        axisLine: {
          show:false
        },
        axisLabel: {
            show: true,
            color: 'rgb(170,170,170)',
            fontSize: 16
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
            max: 100,
            axisLine: {
              show:false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#00E4FF",
                    fontSize: 14
                },
                formatter: '{value}',
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
                    color: ['rgba(250,250,250,0.05)','rgba(250,250,250,0.0)']
                }
            }
        }
    ],
    series: [{
        // name: '合格率',
        type: 'bar',
        barWidth: '30%',
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: {
            normal: {
                // barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                            offset: 0,
                            color: '#3CA9FE',
                            // color:'rgba(20,169,254,.8)'
                        },
                        {
                            offset: 0.5,
                            color: '#3A5DB7',
                            // color:'rgba(98,53,153,.5)'
                        },
                        {
                            offset: 1,
                            color: '#252D6C',
                            // color:'rgba(37,45,108,.8)'
                        }
                    ]
                )
            }
        },
        data: yData,

    }, ]
};