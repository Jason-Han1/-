var lineitemStyle = {
    normal: {
        color: 'rgba(0, 0, 0, 0)',
        borderColor: "#fff",
        borderWidth: 2,
        shadowColor: 'rgba(0, 0, 0, .6)',
        shadowBlur: 0,
        shadowOffsetY: 2,
        shadowOffsetX: 2,
    },
};
option = {
    backgroundColor: '#101010',
    title: {
        text: 'Bar-Line 结合',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0,0,0,0.9)',
        formatter: function(prams) {
            return "使用率：" + prams[0].data + "%"
        }
    },
    grid: {
        top: 100,
        left: 10,
        right: 10,
        bottom: 100
    },
    dataZoom: [{
        show: false,
        height: 30,
        xAxisIndex: [0],
        bottom: 0,
        type: 'slider',
        start: 1,
        end: 100,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: '#555'
        }
    }],

    xAxis: {
        data: ['16:08', '16:09', '16:10', '16:11', '16:12', '16:13', '16:14', '16:15', '16:16', '16:17', '16:18', '16:19'],
        axisLine: {
            lineStyle: {
                color: '#fff',
                backgroundColor: '#0f0',
            }
        },
        axisLabel: {
            rotate: 0
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
    },
    series: [{
        type: 'scatter',
        symbolSize: 5,
        itemStyle: {
            color: {
                type: 'radial',
                r: 1,
                colorStops: [{
                    offset: 0,
                    color: '#fff'
                }, {
                    offset: 1,
                    color: '#fff'
                }],
                global: false
            },
        },
        silent: true,
        data: [34, 35, 45, 65, 67, 43, 24, 46, 34, 23, 23, 63]
    }, {
        name: '拆线',
        type: 'line',
        stack: '总量',
        symbolSize: 25,
        symbol: 'circle',
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: "{c}%",
                color: '#fff',
            }
        },
        itemStyle: lineitemStyle,

        lineStyle: {
            normal: {
                color: '#f25072',
                width: 1.5,
                shadowColor: 'rgba(0,0,0,.3)',
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5,
            }
        },
        data: [34, 35, 45, 65, 67, 43, 24, 46, 34, 23, 23, 63]
    }, {
        name: '柱子',
        type: 'bar',
        barGap: '-100%',
        // barWidth: 20,
        label: {
            normal: {
                color: '#00f3fb'
            }
        },
        itemStyle: {
            normal: {
                borderColor: 'rgba(255, 255, 255, .1)',
                borderWidth: '10',
                barBorderRadius: 5,
                color: '#282828',
            }
        },
        z: -12,
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
    }]
};