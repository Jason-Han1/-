option = {
    backgroundColor: '#292743',
    tooltip: {
        trigger: 'axis',
        formatter:'{b}月<br />{a}:{c}',
    },
    xAxis: [{
        type: 'category',
        data: ['0','2','4','6','8','10'],
        name: '（h）',
        nameTextStyle: {
            fontSize: 16,
            color: '#6e69b2'
        },
        axisLabel: {
            align: 'left',
            fontSize: 16,
            color: '#6e69b2',
            margin: 12
        },
        axisLine: {
            lineStyle: {
                color: "rgba(101, 124, 168, 0.3)",
                width: 2
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(101, 124, 168, 0.1)'
            }
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        type: 'value',
        splitNumber: 3,
        splitLine: {
            lineStyle: {
                color: 'rgba(101, 124, 168, 0.1)'
            }
        },
        axisLabel: {
          show: false  
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(101, 124, 168, 0.3)",
                width: 2
            }
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
        name: '课时',
        type: 'line',
        data: [250,380,540,243,280,260],
        markPoint: {
            symbol: 'pin',
            position: 'top',
            symbolSize: [60, 50],
            data: [{
                type: 'max',
                name: '最大值'
            }, {
                type: 'min',
                name: '最小值'
            }],
            symbolOffset: [0, '-30%'],
            itemStyle: {
                color: '#5e80f3'
            }
        },
        lineStyle: {
            normal: {
                width: 8,
                color: {
                    type: 'linear',

                    colorStops: [{
                        offset: 0,
                        color: '#a54dff' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#04c1e4' // 100% 处的颜色
                    }]
                }
            }
        },
        itemStyle: {
            // opacity: 0.1,
            borderWidth: 10,
            borderColor: '#fff'
        },
        smooth: true
    
    }]
};