const data = ['23.59', '26.62', '27.18', '27.68', '27.65', '28.52', '29.53', '28.66', '27.50', '26.48', '25.49', '22.49', '20.31']
option = {
    backgroundColor: '#0295D9',
    color: ['#FFF'],
    grid: {
        top: '3%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            //    onZero:false
        },
        axisLabel: {
            textStyle: {
                color: '#FFF',
                fontWeight: 'bold'
            }
        },
        splitLine: { //网格线
            show: false,
            interval: 0,
            lineStyle: {
                color: ['#FFF'],
                type: 'dashed'
            }
        },
        data: ['现在', '10时', '11时', '12时', '1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时']
    },
    yAxis: {
        min: -20,
        max: 60,
        interval: 10,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            //    onZero:false
        },
        axisLabel: {
            show: false,
            formatter: '{value} ℃',
            textStyle: {
                color: '#FFF',

                fontWeight: 'bold'

            }
        },
        splitLine: { //网格线
            show: false
        }
    },
    series: [{
            name: '温度',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 12,
            itemStyle: {
                color: '#FFF'
            },
            data: data.map((item, index) => {
                if (index === 0) {
                    return {
                        value: item,
                        label: {
                            normal: {
                                show: true
                            }
                        }
                    }
                } else {
                    return item
                }
            }),
            label: {
                normal: {
                    show: false,
                    formatter: '{c} ℃',
                    position: 'top', //值显示

                }
            }

        },
        {
            type: 'bar',
            name: '分隔线',
            animation: false,
            barWidth: 1,
            hoverAnimation: false,
            data: data.map((item, index) => {
                if (index % 2 === 1) {
                    return {
                        value: item,
                        itemStyle: {
                            normal: {
                                opacity: 0
                            }
                        }
                    }
                } else {
                    return item
                }
            }),
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderType: 'dashed',
                    borderColor: '#fff',
                    color: 'transparent',
                    opacity: 0.6,
                    label: {
                        show: false
                    }
                }
            }
        }
    ]
};