var data_val = [2220, 1682, 2791, 3000, 4090, 3230, 2910],
xdata = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

option = {
    backgroundColor: '#354061',
    grid: {
        left: '2%',
        right: '4%',
        bottom: '10%',
        top: '14%',
        containLabel: true
    },
    tooltip: {
        show: true,
        backgroundColor: '#E8E093',
        borderColor: '#E8E093',
        borderWidth: 4,
        textStyle: {
            color: '#354060'
        },
        formatter: '{b} : {c}¥',
        extraCssText: 'box-shadow: 0 0 10px rgba(37,47,77,0.8)'
    },

    title: {
        text: "交易总量统计",
        x: "2%",
        y: "2%",
        textStyle: {
            color: '#fff',
            fontSize: '22'
        },
    },
    xAxis: {
        type: 'category',
        data: xdata,
        boundaryGap: false,
        axisLabel: {
            textStyle: {
                color: '#DFDFDF'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },

    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#DFDFDF'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)',
            }
        },

    },

    series: [{
            type: 'bar',
            name: 'linedemo',


            tooltip: {
                show: false
            },
            animation: false,
            barWidth: 1.4,
            hoverAnimation: false,
            data: data_val,
            itemStyle: {
                normal: {
                    color: '#67B59F',
                    opacity: 0.6,
                    label: {
                        show: false
                    }
                }
            }
        },

        {
            type: 'line',
            name: 'linedemo',
            smooth: true,
            symbolSize: 15,
            animation: true,
            lineWidth: 1.2,
            hoverAnimation: true,
            data: data_val,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    color: '#67B59F',
                    shadowBlur: 10,
                    shadowColor: "rgba(37,47,77,0.8)",
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#67B59F',

                        }
                    }
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(78,197,163,0.7)'
                    }, {
                        offset: 1,
                        color: 'rgba(89,170,147,0.02)'
                    }]),
                }
            }

        }
    ]
};