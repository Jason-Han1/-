option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B' // X 轴坐标颜色
            }
        },
        data: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日', '1月7日', '1月8日', '1月9日', '1月10日', '1月11日', '1月12日']
    }],
    yAxis: [{
        type: 'value',
        name: '单位（辆）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B' // Y轴坐标颜色
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            lineStyle: {
                color: '#fff' // Y轴内容线颜色（横线）
            }
        }
    }],
    series: [{
        name: '车辆',
        type: 'line',
        symbolSize: 8,
        lineStyle: {
            normal: {
                color: 'rgba(34,150,243, 1)',   // 折线颜色
                width: 2,
                shadowColor:'rgba(34,150,243, 0.3)', // 折线阴影颜色
                shadowOffsetY: 5
                
            }
        },
        itemStyle: {
            normal: {
                color: 'rgba(34,150,243, 1)' // 折线小圆点颜色
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(34,150,243, 0.3)' // 折线底下区域渐变色
                }, {
                    offset: 0.8,
                    color: 'rgba(34,150,243, 0)' // 折线底下区域渐变色
                }], false)
            }
        },
        data: [220, 215, 210, 220, 225, 210, 226, 235, 212, 225, 220, 236]
    }]
};