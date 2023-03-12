var data = [{
        month: "B4",
        value: 100,
        // ratio: 14.89
    },

    {
        month: "B3",
        value: 90,
        // ratio: 79.49
    },

    {
        month: "C4",
        value: 87,
        // ratio: 75.8
    },

    {
        month: "A1",
        value: 87,
        // ratio: 19.8
    },

    {
        month: "E2",
        value: 80,
        // ratio: 44.5
    },


    {
        month: "C1",
        value: 78,
        // ratio: 87.3
    },
    {
        month: "D1",
        value: 78,
        // ratio: 87.3
    },
    {
        month: "A3",
        value: 78,
        // ratio: 87.3
    },
    {
        month: "E3",
        value: 78,
        // ratio: 87.3
    },
    {
        month: "A2",
        value: 78,
        // ratio: 87.3
    },
    {
        month: "D2",
        value: 64,
        // ratio: 87.3
    },
    {
        month: "C2",
        value: 62,
        // ratio: 87.3
    },
    {
        month: "D3",
        value: 60,
        // ratio: 87.3
    },
    {
        month: "D4",
        value: 55,
        // ratio: 87.3
    },
    {
        month: "B2",
        value: 44,
        // ratio: 87.3
    },
    {
        month: "A4",
        value: 44,
        // ratio: 87.3
    },
    {
        month: "C3",
        value: 44,
        // ratio: 87.3
    },
    {
        month: "E1",
        value: 42,
        // ratio: 87.3
    },
    {
        month: "B1",
        value: 40,
        // ratio: 87.3
    },

];
var bkData = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
var xData = [],
    yData = [];
var min = 50;
data.map(function(a, b) {
    xData.push(a.month);
    if (a.value === 0) {
        yData.push(a.value + min);
    } else {
        yData.push(a.value);
    }
});
option = {
    backgroundColor: "#111c4e",
    color: ['#3398DB'],
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        // formatter: function(prams) {
        //     if (prams[0].data === min) {
        //         return "合格率：0%"
        //     } else {
        //         return "合格率：" + prams[0].data + "%"
        //     }
        // }
    },
    grid: {
        left: '5%',
        right: '5%',
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
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#fff'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.2)',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
            type: 'value',
            // name:"单位:户",
            nameTextStyle: {
                color: "rgb(170,170,170)"
            },
            gridIndex: 0,
            axisTick: {
                show: false
            },
            // min: min,
            max: 120,
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0)'
                }
            },
            axisLabel: {
                color: '#65F5FD',
                fontSize: 14,
                formatter: '{value}'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
        },
        {
            type: 'value',
            gridIndex: 0,
            // min: min,
            max: 100,
            // splitNumber: 12,
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
        }
    ],
    series: [{
            // name: '合格率',
            type: 'bar',
            barWidth: '50%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    // barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#009DFE'
                            },
                            {
                                offset: 0.5,
                                color: '#057FD4'
                            },
                            {
                                offset: 1,
                                color: '#0E2F62'
                            }
                        ]
                    )
                }
            },
            data: yData,
            zlevel: 11

        },
        {
            // name: '背景',
            type: 'bar',
            barWidth: '50%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-100%',
            data: bkData,
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            tooltip: {
                show: false
            },
            zlevel: 9
        },

    ]
};