option = {
    backgroundColor: '#00265f',
    title: [{
                show: true,
                text: '深圳所参与地方标准类型及其数量',
                textStyle: {
                    color: '#ccc',
                    fontSize: 25
                },
                x: 'center',
                top: 10
            }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%'
    },
    xAxis: [{
        type: 'category',
        data: ['农业', '信息', '信息', '信息', '信息', '信息', '服务'],
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        },
        axisLabel: {
            margin: 10,
            color: '#e2e9ff',
            textStyle: {
                fontSize: 14
            },
        },
    }],
    yAxis: [{
        axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff',
        },
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        }
    }],
    series: [{
        type: 'bar',
        data: [300, 450, 770, 203, 255, 188, 156],
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,244,255,1)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(0,77,167,1)' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30, 30, 30],
                shadowColor: 'rgba(0,160,221,1)',
                shadowBlur: 4,
            }
        },
        label: {
            normal: {
                show: true,
                lineHeight: 30,
                width: 80,
                height: 30,
                backgroundColor: 'rgba(0,160,221,0.1)',
                borderRadius: 200,
                position: ['-8', '-60'],
                distance: 1,
                formatter: [
                    '    {d|●}',
                    ' {a|{c}}     \n',
                    '    {b|}'
                ].join(','),
                rich: {
                    d: {
                        color: '#3CDDCF',
                    },
                    a: {
                        color: '#fff',
                        align: 'center',
                    },
                    b: {
                        width: 1,
                        height: 30,
                        borderWidth: 1,
                        borderColor: '#234e6c',
                        align: 'left'
                    },
                }
            }
        }
    }]
};