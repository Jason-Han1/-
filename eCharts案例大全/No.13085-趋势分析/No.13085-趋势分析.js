option = {
    backgroundColor: '#153E64',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '40%',
        top: '20%',
        containLabel: true
    },
    xAxis: [
        {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#44607C'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#D5CBE8',
                fontWeight: 700
            }
        },
        axisTick: {
            show: false
        },
        data: ['11点', '12点', '13点', '14点', '15点', '16点', '17点', '18点', '19点', '20点', '21点', '22点']
    }],
    yAxis: [{
        type: 'value',
        name: '单位（%）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'none'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#3681B5',
                fontWeight: 700
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    series: [{
        name: '移动',
        type: 'line',
        smooth: true,
        stack: '总量',
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        animationDelay: 2000,
        animationDuration: 1000,
        markPoint: {
            symbol: 'path://M783.136 180.064C771.872 168.832 757.152 160 742.4 160L281.6 160C266.848 160 252.128 168.832 240.864 180.064 229.632 191.328 224 209.248 224 224l0 460.8c0 14.752 5.632 26.272 16.864 37.536C252.128 733.568 266.848 736 281.6 736l115.2 0 115.2 115.2 115.2-115.2 115.2 0c14.752 0 29.472-2.432 40.736-13.664C794.368 711.072 800 699.552 800 684.8L800 224C800 209.248 794.368 191.328 783.136 180.064z',
            symbolOffset:[0, '-100%'],
            symbolSize: 35,//这里可以改变大小
            data: [
                {
                    type: 'max',
                    name: '最大值'
                }
            ],
            label: {
                offset: [0,-3]
            },
            animationDelay: 3000,
            animationDuration: 1000
        },
        lineStyle: {
            normal: {
                width: 3,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#64C3FA' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#A774FC' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                opacity: 0.9
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(52, 79, 168, 0.8)'
                }, {
                    offset: 0.8,
                    color: 'rgba(52, 79, 168, 0.6)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#3A5493',
                borderColor: '',
                borderWidth: 12

            }
        },
        data: [220, 182, 191, 134, 250, 120, 110, 125, 145, 122, 165, 122]
    }]
};