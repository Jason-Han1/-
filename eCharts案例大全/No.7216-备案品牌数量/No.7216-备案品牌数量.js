var option = {
    backgroundColor: "",
    legend: {
        name: ['环比'],
        right: 20,
        top: 20
    },
    tooltip: {
        trigger: 'axis',
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: "#121a2a"
            }
        },
        splitArea: {
            color: '#121a2a',
            lineStyle: {
                color: '#121a2a'
            },
        },
        axisLabel: {
            lineStyle: {
                color: "#121a2a"
            }
        },
        splitLine: {
            show: false
        },
        boundaryGap: true,
        data: ['2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12','2020-01','2020-02','2020-03','2020-04','2020-05'],

    }],

    yAxis: [{
        show: false,
        name: "数量",
        nameTextStyle: {
            color: "#426ab3",
            fontSize: 14
        },
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#426ab3"
            }
        },
        axisLabel: {
            show: true,
            margin: 20,
            textStyle: {
                color: '#426ab3',

            },
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: "#426ab3"
            }
        },
    }],
    series: [{
        name: '备案品牌数量',
        
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                color: "#426ab3",
                shadowColor: '#426ab3',
                shadowBlur: 0,
                shadowOffsetY: 0,
                shadowOffsetX: 0,
            },
        },
        label: {
            show: false,
            position: 'top',
            textStyle: {
                color: '#426ab3',
            }
        },
        itemStyle: {
            color: "#426ab3",
            borderColor: "#fff",
            borderWidth: 1,
            shadowColor: '#426ab3',
            shadowBlur: 0,
            shadowOffsetY: 0,
            shadowOffsetX: 0,
        },
        tooltip: {
            show: true
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#426ab3'
                    },
                    {
                        offset: 1,
                        color: '#426ab3'
                    }
                ], false),
                shadowColor: '#426ab3',
                shadowBlur: 1
            }
        },
        data: ['5','2','9','1','5','6','','7','','1','2','2']
    }]
}