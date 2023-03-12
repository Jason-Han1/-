option = {
     backgroundColor: '#093036',
    color: ["#27d391", "#eddb76", "#fe3838", "#27d391"],
    legend: {
        top: 10,
        left: 'center',
        textStyle: {
            color: '#97b8d8'
        },
        data: ['优', '良', '差', '无']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    xAxis: [{
        gridIndex: 0,
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(151,184,216,0.5)',
                type: "dashed"
            }
        },
        type: 'category',
        boundaryGap: false,
        data: ['2021年', '2020年', '2019年', '2018年', '2017年']
    }, {
        gridIndex: 1,
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(151,184,216,0.5)',
                type: "dashed"
            }
        },
        type: 'category',
        boundaryGap: false,
         data: ['2021年', '2020年', '2019年', '2018年', '2017年']
    }, {
        gridIndex: 2,
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(151,184,216,0.5)',
                type: "dashed"
            }
        },
        type: 'category',
        boundaryGap: false,
        data: ['2021年', '2020年', '2019年', '2018年', '2017年']
    }, {
        gridIndex: 3,
        axisLine: {
            lineStyle: {
                color: '#97b8d8'
            }
        },
        axisLabel: {
            color: '#97b8d8',
            fontSize: 14
        },
        type: 'category',
        boundaryGap: false,
        data: ['2021年', '2020年', '2019年', '2018年', '2017年']
    }],
    yAxis: [{
        gridIndex: 0,
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false
        },
        splitNumber: 1,
        name: 'BIM应用率',
        nameLocation: 'center',
        nameTextStyle: {
            color: '#97b8d8',
            fontSize: 14
        },
        nameRotate: 360
    }, {
        gridIndex: 1,
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false
        },
        splitNumber: 1,
        name: '装配率',
        nameLocation: 'center',
        nameTextStyle: {
            color: '#97b8d8',
            fontSize: 14
        },
        nameRotate: 360
    }, {
        gridIndex: 2,
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false
        },
        splitNumber: 1,
        name: '绿建率',
        nameLocation: 'center',
        nameTextStyle: {
            color: '#97b8d8',
            fontSize: 14
        },
        nameRotate: 360
    }, {
        gridIndex: 3,
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false
        },
        splitNumber: 1,
        name: '',
        nameLocation: 'center',
        nameTextStyle: {
            color: '#97b8d8',
            fontSize: 14
        },
        nameRotate: 360
    }],
    grid: [{
        top: '10%',
        left: '12%',
        right: '4%',
        bottom: '4%',
        height: '20%'
    }, {
        top: '30%',
        left: '12%',
        right: '4%',
        bottom: '4%',
        height: '20%'
    }, {
        top: '50%',
        left: '12%',
        right: '4%',
        bottom: '4%',
        height: '20%'
    }, {
        top: '70%',
         left: '12%',
        right: '4%',
        bottom: '4%',
        height: '20%'
    }],
    series: [{
        type: 'line',
        data: [0, 41.1, 30.4, 65.1, 53.3, 53.3, 53.3, 41.1, 30.4, 65.1, 53.3, 0],
        xAxisIndex: 0,
        yAxisIndex: 0,
        smooth: true,
        lineStyle: {
              color: 'rgba(0,171,252,1)'
        },
        itemStyle: {
            normal: {
                color: '#92c690',
                borderColor: '#92c690'
            }
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0,171,252,0.6)'
                //   color: '#92c690b3'
            }, {
                offset: 1,
                  color: 'rgba(0,171,252,0)'
            }])
        }
    }, {
        type: 'line',
        data: [12, 45, 15, 2, 56, 15, 12, 45, 15, 2, 56, 15],
        xAxisIndex: 1,
        yAxisIndex: 1,
        smooth: true,
        lineStyle: {
            color: '#B89919'
        },
        itemStyle: {
            normal: {
                color: '#219cab',
                borderColor: '#219cab'
            }
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(188,156,22,1)'
                },
                {
                    offset: 1,
                    color: 'rgba(188,156,22,0.1)'
                }
            ])
        }
    }, {
        type: 'line',
        data: [0, 74.1, 67.2, 79.5, 46.4, 46.4, 46.4, 74.1, 67.2, 79.5, 46.4, 0],
        xAxisIndex: 2,
        yAxisIndex: 2,
        smooth: true,
        lineStyle: {
            color: 'rgba(38,210,165,1)'
        },
        itemStyle: {
            normal: {
                color: '#6f68bf',
                borderColor: '#6f68bf'
            }
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(38,210,165,0.6)'
            }, {
                offset: 1,
                color: 'rgba(38,210,165,0)'
            }])
        }
    }]
};
