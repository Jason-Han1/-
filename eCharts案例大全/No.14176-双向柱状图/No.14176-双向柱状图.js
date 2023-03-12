var myData = ['特长隧道', '长隧道', '中隧道', '短隧道']
var databeast = {
    1: [389, 259, 262, 324]
}
var databeauty = {
    1: [121, 388, 233, 309]
}
var timeLineData = [1]

var option = {
    baseOption: {
        backgroundColor: 'rgba(1, 36, 65, 0.8)',
        timeline: {
            show: false,
            top: 0,
            data: []
        },
        legend: {
            show: false
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b}<br/>{a}: {c}人',
            axisPointer: {
                type: 'shadow'
            }
        },

        grid: [{
            show: false,
            left: '5%',
            top: 0,
            bottom: 0,
            containLabel: true,
            width: '45%'
        }, {
            show: false,
            left: '51%',
            top: 20,
            bottom: 0,
            width: '0%'
        }, {
            show: false,
            right: '5%',
            top: 0,
            bottom: 0,
            containLabel: true,
            width: '45%'
        }],

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
        }, {
            gridIndex: 1,
            show: false
        }, {
            gridIndex: 2,
            nameTextStyle: {
                color: '#50afff',
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
        }],
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
        }, {
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
                textStyle: {
                    color: '#50afff',
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
        }, {
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
        }],
        series: []

    },
    options: []
}

option.baseOption.timeline.data.push(timeLineData[0])
option.options.push({
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br/>{c} {a}'
    },
    series: [{
        name: '座',
        type: 'bar',
        barWidth: 10,
        label: {
            normal: {
                show: true,
                position: 'left',
                offset: [0, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#4ca8f6',
                barBorderRadius: 50
            }
        },

        data: databeast[timeLineData[0]]
    }, {
        name: '万延米',
        type: 'bar',
        barWidth: 10,
        xAxisIndex: 2,
        yAxisIndex: 2,
        label: {
            normal: {
                show: true,
                position: 'right',
                offset: [0, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#00d484',
                barBorderRadius: 50
            }
        },
        data: databeauty[timeLineData[0]]
    }]
})