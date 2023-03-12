let myData = [
    '张三',
    '李四',
    '王二',
    '麻子',
    '小明'
]
var dataFirm = {
    1: [389, 259, 262, 324, 233]
}
var dataDevice = {
    1: [2201, 3808, 2303, 3009, 3302, ]
}
var timeLineData = [1]
var option = {
    baseOption: {
        title: {
            text: '学生阅读量对比',
            top: '2%',
            left: '41%'
        },
        timeline: {
            show: false,
            top: 0,
            data: []
        },
        legend: { // 图例
            top: '10%', // 图例距离顶部距离
            left: 'center', // 图例距离左侧距离(此处水平居中)
            itemWidth: 20,
            itemHeight: 20,
            itemGap: 300,
            textStyle: { // 图例文本样式
                color: ['#4ca8f6', '#00d484']
            },
            data: ['阅读书籍', '阅读字数'] // 图例的数据数组,一般对应系列名称,即 series.name
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b}<br/>{a}: {c}',
            axisPointer: {
                type: 'shadow'
            }
        },

        grid: [{
                show: false,
                left: '9%',
                top: 100,
                bottom: 0,
                containLabel: true,
                width: '31%'
            },
            {
                show: false,
                left: '50%',
                top: 100,
                bottom: 0,
                width: '0%'
            },
            {
                show: false,
                right: '9%',
                top: 100,
                bottom: 0,
                containLabel: true,
                width: '31%'
            }
        ],

        xAxis: [{
                type: 'value',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            {
                gridIndex: 1,
                show: false
            },
            {
                gridIndex: 2,
                nameTextStyle: {
                    color: '#000',
                    fontSize: 14
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: myData
            },
            {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    interval: 0,
                    textStyle: {
                        color: '#000',
                        fontSize: 14
                    }
                },
                data: myData.map(function(value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center'
                        }
                    }
                })
            },
            {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: myData
            }
        ],
        series: []
    },
    options: []
}
option.baseOption.timeline.data.push(timeLineData[0])
option.options.push({
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br/>{a}: {c} '
    },
    series: [{
            name: '阅读书籍',
            type: 'bar',
            barWidth: 20,
            barMinWidth: 5,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    formatter: function(params) {
                        return params.value + "本"
                    },
                    offset: [0, 0],
                    textStyle: {
                        color: '#000',
                        fontSize: 14
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#4ca8f6',
                    barBorderRadius: 5
                }
            },

            data: dataFirm[timeLineData[0]]
        },
        {
            name: '阅读字数',
            type: 'bar',
            barWidth: 20,
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: function(params) {
                        return params.value + "字"
                    },
                    offset: [0, 0],
                    textStyle: {
                        color: '#000',
                        fontSize: 14
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#00d484',
                    barBorderRadius: 5
                }
            },
            data: dataDevice[timeLineData[0]]
        }
    ]
})