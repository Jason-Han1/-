option = {
    backgroundColor: '#12193a',
    color: ['#287CE7', '#29B0C5', '#E9BC5C', '#AD7BCF'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['八类重点人群采样人数', '八类重点人群检测人数', '其他重点人群采样人数', '其他重点人群检测人数'],
        top: '5%',
        textStyle: {
            color: '#EFF7FF',
            "fontSize": 12
        }
    },
    grid: {
        left: '4%',
        right: '4%',
        top: '15%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['2020-04', '2020-05', '2020-06', '2020-07', '2020-08', '2020-09'],
        axisLine: {
            lineStyle: {
                color: 'rgba(164,218,255,0.1)',
                type: 'solid'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            color: '#fdfeff'
        }
    }],
    yAxis: [{
        type: 'value',
        name: '单位：个',
        nameTextStyle: {
            color: '#c1cadf',
            align: 'right',
            lineHeight: 10
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(240,199,37,0.5)'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            color: '#c1cadf'
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(164,218,255,0.1)",
                type: 'dashed'
            }
        }
    }],
    series: [{
        name: '八类重点人群采样人数',
        type: 'line',
        symbol: 'circle',
        smooth: true,
        symbolSize: 8,
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(40,124,231,0.3)'
            }, {
                offset: 1,
                color: 'rgba(40,124,231,0.03)'
            }])
        },
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: '#287CE7',
            }
        },
        data: [30, 50, 13, 22, 26, 31],
    }, {
        name: '八类重点人群检测人数',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(41,176,197,0.3)'
            }, {
                offset: 1,
                color: 'rgba(41,176,197,0.03)'
            }])
        },
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: '#29B0C5'
            }
        },
        data: [5, 12, 20, 27, 42, 11],
    }, {
        name: '其他重点人群采样人数',
        type: 'line',
        symbol: 'circle',
        smooth: true,
        symbolSize: 8,
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(233,188,92,0.3)'
            }, {
                offset: 1,
                color: 'rgba(233,188,92,0.03)'
            }])
        },
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: '#E9BC5C'
            }
        },
        data: [20, 19, 8, 16, 53, 27],
    }, {
        name: '其他重点人群检测人数',
        type: 'line',
        symbol: 'circle',
        smooth: true,
        symbolSize: 8,
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(173,123,207,0.3)'
            }, {
                offset: 1,
                color: 'rgba(173,123,207,0.03)'
            }])
        },
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: '#AD7BCF'
            }
        },
        data: [15, 30, 4, 31, 39, 9],
    }]
};