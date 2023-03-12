option = {
    title: {
        show:true,
        text: '近期理想睡眠数据',
        textStyle: {
            color: '#5751a5'
        },
        left: 5,
        top: 5
    },
    grid: {
        top: '15%',
        right: '10%',
        left: '20%',
        bottom: '12%'
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: ['10.07', '10.08', '10.09', '10.10', '10.11', '10.12', '10.13'],
        axisLabel: {
            margin: 20,
            color: '#999',
            textStyle: {
                fontSize: 18
            },
        },
        axisLine: {
            show: false

        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        axisLabel: {
            show: false

        },
        axisLine: {
            show: false

        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false

        }
    }],
    series: [{
        type: 'bar',
        data: [7.5, 6.5, 5.5, 5.0, 7.7, 7.6, 7.8],
        barWidth: '50px',
        itemStyle: {
            normal: {
                color: function(params) {
                    let colorArr = params.value >= 7.5 ? ['#7af9c0', '#83c9fc'] : ['#946eff', '#805eff']
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: colorArr[0] // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: colorArr[1] // 100% 处的颜色
                    }], false)
                },
                barBorderRadius: [30, 30, 0, 0]
            },
        },
        label: {
            normal: {
                show: false,
            }
        },
        markLine: {
            symbol: ['line', 'none'],
            symbolSize: 30,
            label: {
                show: true,
                distance: 10,
                formatter: param => {
                    return param.name
                },
                position: 'start'
            },
            data: [{
                name: '7.5h达标线',
                yAxis: 7.5,
                lineStyle: {
                    type: 'dashed',
                    color: '#5751a5',
                }
            }]

        }
    }]
};