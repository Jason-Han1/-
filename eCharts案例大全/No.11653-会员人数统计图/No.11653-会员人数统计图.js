option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['新增人数', '续费人数'],
        align: 'left',
        top: '2%',
        right: 10,
        textStyle: {
            color: "#999"
        },
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 35
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['周一',
            '周二',
            '周三',
            '周四',
            '周五',
            '周六',
            '周日'
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#999",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#333",
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} '
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#333",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
                color: "#999",
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
        name: '新增人数',
        type: 'bar',
        label: {
                        normal: {
                            show: true,
                            position: 'top',
                            formatter: '{c}',
                            textStyle: {
                                color: '#333'
                            }
                        }
                    },
        data: [20, 50, 80, 58, 83, 68, 57],
        barWidth: '20%', //柱子宽度
        barGap: 0, //柱子之间间距
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#ff97ac'
                }, {
                    offset: 1,
                    color: '#f47e96'
                }]),
                opacity: 1,
            }
        }
    }, {
        name: '续费人数',
        type: 'bar',
        label: {
                        normal: {
                            show: true,
                            position: 'top',
                            formatter: '{c}',
                            textStyle: {
                                color: '#333'
                            }
                        }
                    },
        data: [50, 70, 60, 61, 75, 87, 60],
        barWidth: '20%',
        barGap: 0,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#dabafa'
                }, {
                    offset: 1,
                    color: '#c6a2ec'
                }]),
                opacity: 1,
            }
        }
    },]
};