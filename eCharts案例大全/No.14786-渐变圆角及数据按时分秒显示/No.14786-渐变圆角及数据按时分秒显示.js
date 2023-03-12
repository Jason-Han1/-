option = {
    title: {
        show: true,
        text: '渐变圆角及数据按时分秒显示',
        textStyle: {
            fontSize: 30,
            color: '#78789a',
            fontWeight: 400
        },
        left: 30
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        show: false
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#78789a',
                width: 2
            }
        },
        axisLabel: {
            fontSize: 18
        }
    }],
    yAxis: [{
        type: 'value',
        show: false,
        axisLine: {
            show: false
        },
        axisLabel: {
            fontSize: 18
        }
    }],
    series: [{
        name: '当日数据',
        type: 'bar',
        barWidth: '20%',
        data: [200, 200, 20, 300, 100, 50, 200],
        itemStyle: {
            normal: {
                barBorderRadius: [50, 50, 50, 50],
                color: new echarts.graphic.LinearGradient(
                    1, 1, 0, 0, [{
                            offset: 0,
                            color: '#e22548'
                        }, {
                            offset: 1,
                            color: '#f8467f'
                        }

                    ]
                )
            }
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: function(params) {
                    var h, m, s, o, p;
                    if (params.value > 60) {
                        h = parseInt(params.value / 3600);
                        o = params.value % 3600;
                        m = parseInt(o / 60);
                        s = o % 60;
                    } else {
                        return '00:00:' + params.value;
                    }
                    if (h < 10) {
                        h = '0' + h;
                    }
                    if (m < 10) {
                        m = '0' + m
                    }
                    if (s < 10) {
                        s = '0' + s
                    }
                    return h + ':' + m + ':' + s;
                },
                fontSize: 18,
                color: '#78789a'
            }
        }

    }]
};