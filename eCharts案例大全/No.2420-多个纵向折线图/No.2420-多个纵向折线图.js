option = {
    backgroundColor: 'rgba(151,184,216,0)',
    color: ["#27d391", "#eddb76", "#fe3838", "#27d391"],
    legend: {
        top: 10,
        left: 'center',
        textStyle: {
            color: '#97b8d8'
        },
        data: ['优', '良', '差']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    yAxis: [{
        gridIndex: 0,
        axisLine: {
            lineStyle: {
                color: '#97b8d8'
            }
        },
        axisLabel: {
            color: '#97b8d8',
            fontSize: 14
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(151,184,216,0.5)',
                type: "dashed"
            }
        },
        type: 'category',
        boundaryGap: false,
        data: ['站点1', '站点2', '站点3', '站点4', '站点5', '站点6', '站点5', '站点7', '站点8', '站点9', '站点9', 'z郑州']
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
        data: ['站点1', '站点2', '站点3', '站点4', '站点5', '站点6', '站点5', '站点7', '站点8', '站点9', '站点9', 'z郑州']
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
        data: ['站点1', '站点2', '站点3', '站点4', '站点5', '站点6', '站点5', '站点7', '站点8', '站点9', '站点9', 'z郑州']
    }, /*{
        gridIndex: 3,
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        type: 'category',
        boundaryGap: false,
        data: ['站点1', '站点2', '站点3', '站点4', '站点5', '站点6', '站点5', '站点7', '站点8', '站点9', '站点9', 'z郑州']
    }*/],
    xAxis: [{
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
        name: '优',
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
        name: '良',
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
        name: '差',
        nameLocation: 'center',
        nameTextStyle: {
            color: '#97b8d8',
            fontSize: 14
        },
        nameRotate: 360
    }, /*{
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
        name: '无',
        nameLocation: 'center',
        nameTextStyle: {
            color: '#97b8d8',
            fontSize: 14
        },
        nameRotate: 360
    }*/],
    grid: [{
        top: '10%',
        left: '10%',
        //right: '4%',
        bottom: '4%',
        height: '80%',
        width: '30%',
    }, {
        top: '10%',
        left: '40%',
        //right: '4%',
        bottom: '4%',
        height: '80%',
        width: '30%',
    }, {
        top: '10%',
        left: '70%',
        //right: '4%',
        bottom: '4%',
        height: '80%',
        width: '30%',
    }/*, {
        top: '10%',
        left: '70%',
        //right: '4%',
        bottom: '4%',
        height: '80%',
        width: '20%',
    }*/],
    series: [{
        type: 'line',
        data: [0, 41.1, 30.4, 65.1, 53.3, 53.3, 53.3, 41.1, 30.4, 65.1, 53.3, 0],
        xAxisIndex: 0,
        yAxisIndex: 0,
        smooth: true,
        lineStyle: {
            color: '#92c690'
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
                color: '#92c690b3'
            }, {
                offset: 1,
                color: '#92c69003'
            }])
        }
    }, {
        type: 'line',
        data: [12, 45, 15, 2, 56, 15, 12, 45, 15, 2, 56, 15],
        xAxisIndex: 1,
        yAxisIndex: 1,
        smooth: true,
        lineStyle: {
            color: '#219cab'
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
                    color: '#219cabb3'
                },
                {
                    offset: 1,
                    color: '#219cab03'
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
            color: '#6f68bf'
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
                color: '#6f68bfb3'
            }, {
                offset: 1,
                color: '#6f68bf03'
            }])
        }
    }]
};