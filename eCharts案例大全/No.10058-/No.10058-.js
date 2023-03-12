var myData = ['分公司1', '分公司2', '分公司3', '分公司4', '分公司5', '分公司6']
var databeast = {
    1: [389, 259, 262, 324, 444, 290]
}
var databeauty = {
    1: [121, 388, 233, 309, 230, 251]
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
        legend: [{
                data: ['人流量'],
                icon: 'rect',
                itemWidth: 16,
                align: 'right',
                itemHeight: 30,
                itemGap: 100,
                width: '45%',
                right: '55%',
                borderRadius: 0,
                textStyle: {
                    color: '#B0B0B1',
                    fontSize: 25
                },
            },
            {
                data: ['收费额'],
                icon: 'rect',
                itemWidth: 16,
                right: '34%',
                width: '45%',
                align: 'left',
                itemHeight: 30,
                borderRadius: 0,
                textStyle: {
                    color: '#B0B0B1',
                    fontSize: 25
                },
            }
        ],
        tooltip: {
            show: false,
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
            width: '42%'
        }, {
            show: false,
            left: '51%',
            top: 0,
            bottom: 0,
            width: '0%'
        }, {
            show: false,
            left: '54%',
            top: 0,
            bottom: 0,
            containLabel: true,
            width: '45%'
        }, {
            show: false,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            containLabel: true,
            // height:'100%',
            width: '100%',
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
        }, {
            gridIndex: 3,
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
                    color: '#B0B0B1',
                    fontSize: 20
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
        }, {
            gridIndex: 3,
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
        name: '人流量',
        type: 'bar',
        barWidth: 10,
        label: {
            normal: {
                show: true,
                position: 'left',
                offset: [0, 0],
                formatter: [
                    '{d|{c}}',
                    '{a|人}',
                ].join(''),
                rich: {
                    d: {
                        color: '#fff',
                        fontSize: 18
                    },
                    a: {
                        color: '#B0B0B1',
                        // align: 'center',
                        fontSize: 15
                    },
                },
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#F3B12C',
                // barBorderRadius: 50
            }
        },

        data: databeast[timeLineData[0]]
    }, {
        name: '收费额',
        type: 'bar',
        barWidth: 10,
        xAxisIndex: 2,
        yAxisIndex: 2,
        label: {
            normal: {
                show: true,
                position: 'right',
                offset: [0, 0],
                formatter: [
                    '{d|{c}}',
                    '{a|元}',
                ].join(''),
                rich: {
                    d: {
                        color: '#fff',
                        fontSize: 18
                    },
                    a: {
                        color: '#B0B0B1',
                        // align: 'center',
                        fontSize: 15
                    },
                },
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#00EEF4',
                // barBorderRadius: 50
            }
        },
        data: databeauty[timeLineData[0]]
    }, {
        name: '背景',
        type: 'bar',
        barWidth: '32',
        xAxisIndex: 3,
        yAxisIndex: 3,
        barGap: '135%',
        data: [1000, 1000, 1000, 1000, 1000, 1000],
        itemStyle: {
            normal: {
                color: '#202D42'
            }
        },
        zlevel: -1
    }, ]
})