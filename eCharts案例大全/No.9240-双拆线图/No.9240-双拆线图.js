option = {
    backgroundColor: '#2D2D35',
    title: {
        text: '标题',
        textStyle: {
            fontWeight: 'normal',
            color: '#ececef'
        },
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        show: true,
        top: 5,
        right: 5,
        data: ['红线', '蓝线'],
        textStyle: {
            color: '#ececef',
            fontWeight: 'bold'
        }
    },
    grid: {
        show: true,
        top: 50,
        right: 0,
        left: 0,
        containLabel: true,
        borderWidth: 1,
        borderColor: '#383841',
        shadowBlur: 2
    },
    xAxis: [{
        type: 'category',
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 13
            }
        },
        splitLine: {
            show: false
        },
        data: ['2017-04-29', '2017-04-30', '2017-05-01', '2017-05-02', '2017-05-03', '2017-05-04', '2017-05-05', '2017-05-06', '2017-05-07', '2017-05-08']
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 13
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#383841'
            }
        },
        splitArea: {
            show: false
        }
    }],
    // dataZoom: [
    //     { type: 'slider', startValue: 0, endValue: 15 }
    // ],
    dataZoom: {
        type: 'slider',
        height: 10,
        start: 0,
        end: 50,
        borderColor: 'transparent',
        handleSize: 0,
        backgroundColor: 'rgba(255,255,255,0.1)',
        handleStyle: {
            color: 'rgba(255,255,255,0.2)'
        },
        showDetail: false,
    },
    series: [{
            type: 'line',
            name: '红线',
            symbol: 'image://images/dataIcon/circle_red.png',
            symbolSize: 10,
            data: [40, 160, 120, 120, 250, 150, 200, 300, 205, 255],
            itemStyle: {
                normal: {
                    color: '#D44F32',
                }
            },
            label: {
                normal: {
                    show: false
                }
            }
        },
        {
            type: 'line',
            name: '蓝线',
            symbol: 'image://images/dataIcon/circle_blue.png',
            symbolSize: 10,
            data: [4, 60, 20, 100, 230, 50, 100, 200, 105, 205],
            itemStyle: {
                normal: {
                    color: '#4c95cd'
                }
            },
            label: {
                normal: {
                    show: false
                }
            }
        }
    ]
};