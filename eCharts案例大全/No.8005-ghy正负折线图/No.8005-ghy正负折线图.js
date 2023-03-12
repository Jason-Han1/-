// 配置
option = {
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        }
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#ccc',
                type: 'dashed'
            }
        }
    },
    legend: {
        show: true,
        textStyle: {
            color: '#A6A6A6'
        }
    },
    grid: [{
            left: 50,
            right: 0,
            height: '35%'
        },
        {
            left: 50,
            right: 0,
            top: '42%',
            height: '35%'
        }
    ],
    xAxis: [{
            gridIndex: 0,
            type: 'category',
            splitNumber: 3,
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                margin: 12,
                textStyle: {
                    color: '#A6A6A6',
                    fontSize: 14
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#eee'
                }
            },
            data: ['2019-1-1', '2019-1-2', '2019-1-3', '2019-1-4', '2019-1-5', '2019-1-6', '2019-1-7', '2019-1-8', '2019-1-9']
        },
        {
            gridIndex: 1,
            type: 'category',
            splitNumber: 3,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#eee'
                }
            },
            data: ['2019-1-1', '2019-1-2', '2019-1-3', '2019-1-4', '2019-1-5', '2019-1-6', '2019-1-7', '2019-1-8', '2019-1-9']
        }
    ],
    yAxis: [{
            gridIndex: 0,
            name: '(时间:秒)',
            nameGap: 20,
            nameTextStyle: {
                fontSize: 14,
                color: '#999'
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#A6A6A6',
                    fontSize: 14
                }
            },
            splitLine: {
                show: false
            }
        },
        {
            gridIndex: 1,
            name: '(数量:十万)',
            nameGap: 20,
            nameTextStyle: {
                fontSize: 14,
                color: '#999'
            },
            
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#A6A6A6',
                    fontSize: 14
                }
            },
            splitLine: {
                show: false
            }
        }
    ],
   
    series: [{
            name: '当日',
            type: 'line',
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#1990FF',
                    shadowColor: 'rgba(25, 144, 255, 0.5)',
                    shadowBlur: 4,
                    shadowOffsetY: 2
                }
            },
            itemStyle: {
                normal: {
                    color: '#1990FF',
                    borderColor: '#1990FF',
                    borderWidth: 10,
                    opacity: 0.3
                }
            },
            data: [123, 58, 221, 12, 45, 234, 42, 623, 45 ]
        },
        {
            name: '今天',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#30DAD7',
                    shadowColor: 'rgb(48, 218, 215, 0.5)',
                    shadowBlur: 4,
                    shadowOffsetY: 2
                }
            },
            itemStyle: {
                normal: {
                    color: '#30DAD7',
                    borderColor: '#30DAD7',
                    borderWidth: 10,
                    opacity: 0.3
                }
            },
            data: [-123,-58, -221, -12, -45, -234, -42, -623, -45 ]
        }
    ]
}
