option = {
    backgroundColor: '#ffffff',
    /*title: {
        text: '积分数',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: '#333'
        },
        top:"2%",
        left: '6%'
    },*/
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 13,
        data: ['积分的发放', '积分的使用'],
        top:"3%",
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#333'
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
                color: '#999'
            }
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日',]
    }, {
        axisPointer: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#'
            }
        },
        axisTick: {
            show: false
        },

        position: 'bottom',
        offset: 20,
        
    }],
    yAxis: [{
        type: 'value',
        name: '积分数（分）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#999'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12
            }
        },
        splitLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    }],
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: [{
        name: '积分的发放',
        type: 'line',
        smooth: false,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(67, 206, 91, 0.6)'
                }, {
                    offset: 0.8,
                    color: 'rgba(67, 206, 91, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(67,206,91)',
                borderColor: 'rgba(67,206,91,0.27)',
                borderWidth: 12

            }
        },
        data: [220, 112, 171, 134, 220, 120, 190]
    }, {
        name: '积分的使用',
        type: 'line',
        smooth: false,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(80, 133, 242, 0.6)'
                }, {
                    offset: 0.8,
                    color: 'rgba(80, 133, 242, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(116,160,250)',
                borderColor: 'rgba(116,160,250,0.27)',
                borderWidth: 12

            }
        },
        data: [120, 180, 125, 185, 132, 185, 150]
    }, ]
};