option = {
    legend: {
        bottom: 20,
        textStyle: {
            color: '#333',
            fontSize:14
        },
        data: ['男', '女', '总人数'],
        selectedMode: false
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    yAxis: [
        {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#999',
                fontSize: 12
            }
        }
    },{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#999',
                fontSize: 12
            }
        }
    }],
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                }
            },
            splitLine:{
                show:true
            },
            data: [1,2,3,4,5,6,7,8,9,10,11,12],
            axisLabel: {
                textStyle: {
                    color: '#999',
                    fontSize: 12
                }
            }
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: [1,2,3,4,5,6,7,8,9,10,11,12],
        },

    ],
    series: [{
            name: '总人数',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#cfe2fc',
                    barBorderRadius: 4
                }
            },
            data: [11,12,13,14,15,16,17,18,19,110,111,112]
        }, {
            name: '总人数',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#def2f2',
                    barBorderRadius: 4
                }
            },
            barGap: '10%',
            data: [11,12,13,14,15,16,17,18,19,110,111,112]
        }, {
            name: '总人数',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#e6e7fc',
                    barBorderRadius: 4
                }
            },
            barGap: '20%',
            data: [11,12,13,14,15,16,17,18,19,110,111,112]
        }, {
            name: '男',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#4c84d2'
                }
            },
            data: [1,2,3,4,5,6,7,8,9,10,11,12]
        }, {
            name: '女',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#29c3c1'
                }
            },
            barGap: '10%',
            data: [1,2,3,4,5,6,7,8,9,10,11,12]
        }, {
            name: '女1',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#8084d9'
                }
            },
            barGap: '20%',
            data: [1,2,3,4,5,6,7,8,9,10,11,12]
        }

    ]
};