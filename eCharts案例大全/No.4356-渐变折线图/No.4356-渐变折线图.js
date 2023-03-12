option = {
    backgroundColor: '#03060F',
    grid: {
        top: '27%',
        right: '7%',
        left: '6%',
        bottom: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    xAxis: [{
        boundaryGap: false,
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
        axisLine: {
            lineStyle: {
                color: '#306269'
            }
        },
        axisLabel: {
            margin: 10,
            color: '#ffffff',
            textStyle: {
                fontSize: 12
            },
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'value',
        name: '单位',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#0e284e',
            }
        }
    }],
    series: [{
        showAllSymbol: true,
        type: 'line',
        symbol: 'circle',
        smooth: true,
        symbolSize: 0,
        itemStyle: {
            color: "#229aff",
        },
        lineStyle: {
            normal: {
                color: "#229aff", // 线条颜色
            },
        },
        areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#229aff"
                    },
                    {
                        offset: 1,
                        color: "rgba(255,255,255,.0)"
                    }
                ], false)
            }
        },
        data: [20, 24, 36, 23, 28, 32]
    }]
}