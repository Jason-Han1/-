var data_val = [2220, 1682, 2791, 3000, 4090, 3230, 2910],
    xdata = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

option = {
    backgroundColor: '#fff',
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
            color: '#34374E',
            fontSize: '22'
        },
    },
    xAxis: {
        type: 'category',
        data: xdata,
        boundaryGap: false,
        axisLabel: {
            textStyle: {
                color: '#AAAFC8'
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
                color: '#AAAFC8'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(170,175,200,0.8)',
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
            barWidth: 2,
            hoverAnimation: false,
            data: data_val,
            itemStyle: {
                normal: {
                    color: '#A2C8E9',
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
            symbolSize: 25,
            animation: true,
            lineWidth: 3,
            hoverAnimation: true,
            data: data_val,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    color: '#A2C8E9',
                    shadowBlur: 10,
                    shadowColor: "rgba(128,172,209,0.8)",
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#fff',

                        }
                    }
                }
            },


        }
    ]
};