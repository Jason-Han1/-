option = {
    backgroundColor: '#011c3a',
    legend: {
        show: true,
        textStyle: {
            color: '#fff'
        },
        data: [{
            name: '排放量',
            icon: 'rect'
        },{
            name: '用电量'
        }]
    },
    tooltip: {
    show: true,
    },
    xAxis: {
        data: ['1', '2', '3', '4', '5','6', '7', '8','9','10','11','12'],
        axisLine: {
            lineStyle: {
                color: '#3d5269'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14
        }
    },
    yAxis:[ {
        type: 'value',
        name: "单位:次",
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#3d5269'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 16
        },
        splitLine: {
            show:true,
            lineStyle: {
                color: '#2d3d53'
            }
        },
        max: 6000,
        interval: 1200,
        yAxisIndex:0

    },{
        type: 'value',
        name: "(千瓦时)",
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        max: 6000,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#3d5269'
            }
        },
        axisLabel: {
            show: true,
            color: '#fff',
            fontSize: 16
        },
        
        splitLine: {
            show:true,
            lineStyle: {
                color: '#2d3d53'
            }
        },
        interval: 1200,
        
    }],
    series: [
        {
        name: '排放量',
        type: 'bar',
        barWidth: 20,
        zlevel: 2,
        itemStyle:{
            normal:{
                color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#05af79'
                }, {
                    offset: 1,
                    color: '#05af792e'
                }], false)
            }
        },
        label: {
            normal: {
                show: false,
                fontSize: 18,
                fontWeight: 'bold',
                color: '#ffffff',
                position: 'top',
            }
        },
        data: [254, 3254, 1654, 2454, 4757, 2011, 1211, 3254, 1654, 2454, 4757, 2011]
    },{
            name: '用电量',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            yAxisIndex: 1,
            symbolSize: 6,
            lineStyle: {
                normal: {
                    color: "rgba(0, 96, 255, 1)",
                },
            },
            zlevel: 1,
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#6c50f3',
                }
            },
            itemStyle: {
                color: "rgba(0, 96, 255, 0.8)",
                borderColor: "#fff",
                borderWidth: 2,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 96, 255, 0.6)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0, 96, 255, 0)'
                        }
                    ], false),
                    shadowColor: 'rgba(0, 96, 255, 0.9)',
                    shadowBlur: 10
                }
            },
            data: [4600,4790,4900,5130,5600,5800,5700,5600,5400,5300,5200,5100]
        }]
};