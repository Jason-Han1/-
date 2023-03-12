let data = [{
    name: "a",
    value: 40
}, {
    name: "b",
    value: 30
}, {
    name: "c",
    value: 20
}, {
    name: "d",
    value: 10
}]
option = {
    backgroundColor: '#012248',
    color: ['#3398DB'],
    dataZoom: {
        type: 'inside',
        start: 0,
        end: 100
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        formatter: '{b0}<br/>{a}：{c0}'
    },
    legend: {
        data: [],
        show: false
    },
    grid: {
        top: 'center',
        left: 'center',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        data: data.map((item)=>{return item.name}),
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#00c7ff'
            }
        },
        axisLabel: {
            show: true,
            color: '#ffffff',
            fontSize: 14,
            // rotate: 90,
            interval: 0
        }
    }],
    yAxis: [{
            type: 'value',
            // name: "单位:",
            // nameTextStyle: {
            //     color: 'rgb(170,170,170)'
            // },
            gridIndex: 0,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#00c7ff'
                }
            },
            axisLabel: {
                margin: 10,
                // formatter: (val) => {return val},
                color: '#ffffff',
                fontSize: 14
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            min: 50,
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
            name: "分布",
            type: 'bar',
            barWidth: '30%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
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
                    ])
                }
            },
            data: data,
            zlevel: 11
        },
        {
            type: 'bar',
            barWidth: '50%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-135%',
            data: [
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100
            ],
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0)'
                }
            },
            zlevel: 9
        }
    ]
}