option = {
    backgroundColor: "",
    color: ["#27d391", "#eddb76", "#fe3838", "#27d391"],
    legend: {
        top: 10,
        left: 'center',
        textStyle: {
            color: '#97b8d8'
        },
        data: ['转让', '许可', '质押']
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
        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
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
        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
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
        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
    }, {
        gridIndex: 3,
        axisLine: {
            lineStyle: {
                color: '#97b8d8'
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14
        },
        type: 'category',
        boundaryGap: false,
        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
    }],
    yAxis: [{
        gridIndex: 0,
        axisLabel: {
            show:false
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
        name: '转让',
        nameLocation: 'center',
        nameTextStyle: {
            color: '#fff',
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
        name: '许可',
        nameLocation: 'center',
        nameTextStyle: {
            color: '#fff',
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
        name: '质押',
        nameLocation: 'center',
        nameTextStyle: {
            color: '#fff',
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
        nameRotate: 360
    }],
    grid: [{
        top: '10%',
        left: '7%',
        right: '4%',
        bottom: '4%',
        height: '20%'
    }, {
        top: '30%',
        left: '7%',
        right: '4%',
        bottom: '4%',
        height: '20%'
    }, {
        top: '50%',
        left: '7%',
        right: '4%',
        bottom: '4%',
        height: '20%'
    }, {
        top: '50%',
        left: '7%',
        right: '4%',
        bottom: '4%',
        height: '20%'
    }],
    series: [{
        type: 'line',
        data: [0, 41, 30, 65, 53, 53, 53, 41, 30, 65, 53, 0],
        xAxisIndex: 0,
        yAxisIndex: 0,
        smooth: false,
        lineStyle: {
            color: '#92c690'
        },
        label: {
                show: true,
                position: 'top',
                textStyle: {
                   color: '#92c690',
                }
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
                color: '#98f195'
            }, {
                offset: 1,
                color: '#98f19503'
            }])
        }
    }, {
        type: 'line',
        data: [12, 45, 15, 2, 56, 15, 12, 45, 15, 2, 56, 15],
        xAxisIndex: 1,
        yAxisIndex: 1,
        smooth: false,
        lineStyle: {
            color: '#219cab'
        },
        label: {
                show: true,
                position: 'top',
                textStyle: {
                   color: '#219cab',
                }
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
                    color: '#69d0e1'
                },
                {
                    offset: 1,
                    color: '#69d0e103'
                }
            ])
        }
    }, {
        type: 'line',
        data: [0, 74, 67, 79, 46, 46, 46, 74, 67, 79, 46, 0],
        xAxisIndex: 2,
        yAxisIndex: 2,
        smooth: false,
        lineStyle: {
            color: '#F18F24'
        },
        label: {
                show: true,
                position: 'top',
                textStyle: {
                   color: '#F18F24',
                }
            },
        itemStyle: {
            normal: {
                color: '#F18F24',
                borderColor: '#F18F24'
            }
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#F18F24'
            }, {
                offset: 1,
                color: '#F18F2403'
            }])
        }
    }]
};