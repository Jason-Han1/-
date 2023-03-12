var radius = [  // 宽度为14
    [100, 114],
    [128, 142]
] 
var maxValue = 100
var colorReMain = '#E8E8E8'
var datalist = [{
        name: '经理分配',
        value: 40,
        color: '#409EFF'
    },
    {
        name: '关联需求',
        value: 0,
        color: '#e6a23c'
    }
]

function getOption(list) {
    var series = []
    for (var i = 0; i < list.length; i++) {
        var item = list[i]
        var percent = item.value * 100 / maxValue
        series.push({
            type: 'pie',
            radius: radius[i],
            center: ['50%', '50%'],
            hoverAnimation: false,
            clockwise: false,
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            data: [{
                name: 'remainCircle', // 开始的圆角
                value: 0,
                itemStyle: {
                    color: item.color
                },
                label: {
                    show: true,
                    position: 'inside',
                    padding: [6, 0, 0, 0],
                    borderRadius: 30,
                    rich: {
                        name: { // 宽度为14
                            width: 14,
                            height: 14,
                            borderRadius: 10,
                            backgroundColor: item.color
                        }
                    },
                    formatter() {
                        return `{name|}`
                    }
                }
            }, {
                name: 'remain',
                value: (maxValue - item.value),
                itemStyle: {
                    borderColor: colorReMain,
                    borderWidth: 0,
                    color: colorReMain
                },
                label: {
                    show: false
                },
                emphasis: {
                    itemStyle: {
                        borderColor: colorReMain,
                        borderWidth: 0,
                        color: colorReMain
                    }
                }
            }, {
                name: 'remainCircle', // 结束的圆角
                value: 0,
                curVal: item.value,
                label: {
                    show: true,
                    rotate: true,
                    position: 'inside',
                    borderRadius: 30,
                    rich: {
                        margin: {
                            width: 6
                        },
                        name: {
                            width: 14,
                            height: 14,
                            borderRadius: 10,
                            backgroundColor: item.color
                        }
                    },
                    formatter: percent ? (percent < 50 ? '{name|}{margin|}' : '{margin|}{name|}') : ''
                }
            }, {
                name: item.name,
                value: item.value,
                itemStyle: {
                    color: item.color
                },
                label: datalist.length < 2 ? {
                    show: true,
                    position: 'center',
                    rich: {
                        num: {
                            fontSize: 42,
                            color: '#000',
                            padding: [5, 0, 0, 0]
                        },
                        name: {
                            fontSize: 12,
                            color: '#000'
                        }
                    },
                    formatter(params) {
                        return `{num|${params.value}}\n{name|${params.name}}`
                    }
                } : {
                    show: false
                }
            }]
        })
    }
    // 中间统计
    series.push({
      type: 'pie',
      radius: [0, radius[0][0]],
      center: ['50%', '50%'],
      hoverAnimation: false,
      clockwise: false,
      labelLine: { show: false },
      data: [{ name: 'remain', value: 1, itemStyle: { color: 'transparent' } }],
      label: {
        show: true,
        position: 'center',
        rich: {
          num: { fontSize: 42, color: '#000', padding: [5, 0, 0, 0] },
          name: { fontSize: 12, color: '#000' }
        },
        formatter () {
          return `{num|${maxValue}}\n{name|中间统计}`
        }
      },
      animation: false
    })
    return {
        title: {
            text: 'radius pie'
        },
        series: series
    }
}
var indexvalue = 0
var speed = 1
myChart.setOption(getOption(datalist))
window.setInterval(function() {
    datalist[1].value = indexvalue +=speed
    if (indexvalue > 100) speed = -speed
    else if (indexvalue < 0) speed = -speed
    myChart.setOption(getOption(datalist), true)
}, 100)