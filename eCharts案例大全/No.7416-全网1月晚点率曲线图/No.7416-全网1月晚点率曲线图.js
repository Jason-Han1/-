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
        text: '全网1月晚点率曲线图',
        left:'center',
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
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: "#fff",
                backgroundColor: '#282828',
                padding: 10,
                borderColor: 'rgba(255, 255, 255, .3)',
                borderWidth: '10',
            },
        },
        data: ["2018-01-01", "2018-01-02", "2018-01-03", "2018-01-04", "2018-01-05", "2018-01-06", "2018-01-07","2018-01-08", "2018-01-09", "2018-01-10", "2018-01-11", "2018-01-12", "2018-01-13", "2018-01-14","2018-01-15", "2018-01-16", "2018-01-17", "2018-01-18", "2018-01-19", "2018-01-20", "2018-01-21","2018-01-22", "2018-01-23", "2018-01-24", "2018-01-25", "2018-01-26", "2018-01-27", "2018-01-28","2018-01-29", "2018-01-30", "2018-01-31"],

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
        symbolSize: 2,
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
        data:[36, 34, 36, 61, 57, 52, 53, 46, 41, 36, 34, 39, 35, 35, 33, 33, 33, 33, 37, 33, 33, 41, 32, 37, 54, 59, 63, 69, 55, 0.40, 40]
    }, {
        name: '拆线',
        type: 'line',
        stack: '总量',
        symbolSize: 18,
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
                color: '#52c1ee',
                width: 1.5,
                shadowColor: 'rgba(0,0,0,.3)',
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5,
            }
        },
        data: [36, 34, 36, 61, 57, 52, 53, 46, 41, 36, 34, 39, 35, 35, 33, 33, 33, 33, 37, 33, 33, 41, 32, 37, 54, 59, 63, 69, 55, 0.40, 40]
    }, {
        name: '柱子',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        label: {
            normal: {
                color: '#00f3fb'
            }
        },
        itemStyle: {
            normal: {
                borderColor: 'rgba(255, 255, 255, .3)',
                borderWidth: '0.25',
                barBorderRadius: 25,
                color: '#282828',
            }
        },
        z: -12,
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,100, 100, 100, 100, 100, 100, 100, 100, 100]
    }]
};