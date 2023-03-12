data = 20
option = {
    backgroundColor: 'rgb(20,28,52)',
    grid: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        containLabel: true
    },
    tooltip: {
        show: false
    },

    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
    series: [{
            name: '',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#6569FF'
                    }, {
                        offset: 1,
                        color: '#00CCFF'
                    }]),
                },
            },
            barWidth: 20,
            data: [data],
            label: {
                show: true,
                position: 'right',
                color: "#fff",
                formatter: function(params) {
                    return '{a|▼}'
                },
                rich: {
                    a: {
                        fontSize: 16,
                        color: '#FFFB8F',
                        lineHeight: 10,
                        padding: [50, 0, 0, -14],
                        textShadowBlur: 15,
                        textShadowColor: '#FFFB8F'
                    },

                }

            }


        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: [100],
            itemStyle: {
                normal: {
                    color: '#3B7EAA',
                    barBorderRadius: 30,

                    opacity: 0.3
                }
            },
        },
    ]
};