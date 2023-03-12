var data = [{
        month: "1",
        value: 100,},

    {
        month: "2",
        value: 90,
    },

    {
        month: "3",
        value: 200,
        // ratio: 75.8
    },

    {
        month: "4",
        value: 150,
        // ratio: 19.8
    },

    {
        month: "5",
        value: 230,
        // ratio: 44.5
    },


    {
        month: "6",
        value: 135,
        // ratio: 87.3
    },
    {
        month: "7",
        value: 60,
        // ratio: 87.3
    },
    {
        month: "8",
        value: 163,
        // ratio: 87.3
    },
    {
        month: "9",
        value: 53,
        // ratio: 87.3
    },
    {
        month: "10",
        value: 53,
        // ratio: 87.3
    },
    {
        month: "11",
        value: 50,
        // ratio: 87.3
    },
    {
        month: "12",
        value: 60,
        // ratio: 87.3
    },
    { month: "13",value: 60,},{ month: "14",value: 55 },{month: "15",value: 44,}];
var bkData = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
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
        boundaryGap: true, // 坐标轴两边留白
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
                // color: 'rgba(255,255,255,.2)',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
            name: '单位：次',
            type: 'value',
            nameTextStyle: {
                color: "rgb(170,170,170)"
            },
            gridIndex: 0,
            axisTick: {
                show: false
            },
            // min: min,
            // max: 350,
            axisLine: {
                lineStyle: {
                    // color: 'rgba(255,255,255,0)'
                }
            },
            axisLabel: {
                color: '#95a2aa',
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
            // max: 6,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
             axisLabel: {
                color: '#95a2aa',
                fontSize: 14,
                formatter: '{value}'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
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
                                color: '#00fbfc'
                            },
                            {
                                offset: 1,
                                color: '#0193f4'
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
                    color: 'rgba(255,255,255,0.1)',
                    barBorderRadius: [20, 20, 0, 0]
                },
            },
            tooltip: {
                show: false
            },
            zlevel: 9
        },

    ]
};   