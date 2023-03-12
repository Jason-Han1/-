const series = [ {name: 'One', value: 81}, {name: 'Two', value: 46}, {name: 'Three', value: 59} ]
const centerX = '50%'
const angle = 0

let total = series
    .map(item => item.value)
    .reduce((prev, next) => {
        return prev + next
    }, 0)

let maxLen = 0
let oldAllRate = 0
series.map((o, index) => {
    if (index === series.length - 1) {
        o.rate = oldAllRate === 0 && o.value === 0 ? 0 : (100 - oldAllRate).toFixed(1)
    } else {
        o.rate = total > 0 ? ((o.value / total) * 100).toFixed(1) : 0
        oldAllRate += Number(o.rate)
    }
    maxLen = o.name.length > maxLen ? o.name.length : maxLen
})

function getCirlPoint(x0, y0, r, angle) {
    //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
    let x1 = x0 + r * Math.cos((angle * Math.PI) / 180)
    let y1 = y0 + r * Math.sin((angle * Math.PI) / 180)
    return {
        x: x1,
        y: y1
    }
}

function _pie1() {
    let data = []
    total = 0
    series.forEach(o => {
        total += o.value
    })
    series.forEach(o => {
        data.push(o, {
            value: total / 90,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        })
    })
    return data
}
function _pie2() {
    let dataArr = []
    for (var i = 0; i < 4; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: '#1a4050',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)'
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)'
                    }
                }
            })
        }
    }
    return dataArr
}

option = {
    backgroundColor: '#0E1327',
    fontSize: 16,
    tooltip: {
        trigger: 'item',
        textStyle: {
            color: '#fff'
        },
        backgroundColor: 'rgba(16, 32, 40, 0.88)',
        borderRadius: 4,
        borderColor: '#20749e',
        formatter: params => {
            return params.name ? params.marker + params.name + ': ' + params.value : ''
        }
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: '0%',
        width: '50%', // 影响了所有，讨论后再看怎么加
        itemGap: 20,
        itemWidth: 14,
        itemHeight: 14,
        top: 'middle',
        textStyle: {
            color: '#fff',
            rich: {
                a: {
                    fontSize: 12,
                    width: maxLen > 3 ? 80 : 60
                },
                b: {
                    fontSize: 10,
                    width: 65
                },
                c: {
                    fontSize: 10,
                    width: 45
                }
            }
        },
        // 使用回调函数
        // formatter: function(name) {
        //               var data = options.series[0].data
        //               //   var total = 0
        //               var tarValue
        //               var tarRate
        //               for (var i = 0, l = data.length; i < l; i++) {
        //                   //   if (data[i].value && data[i].name) {
        //                   //       total += data[i].value
        //                   //   }
        //                   if (data[i].name == name) {
        //                       tarValue = data[i].value
        //                       tarRate = data[i].rate
        //                   }
        //               }
        //               //   var p = total > 0 ? ((tarValue / total) * 100).toFixed(1) : 0
        //               const word =
        //                   name.length > 6 ? name.substr(0, Math.ceil(name.length / 2)) + '\n' + name.substr(Math.ceil(name.length / 2)) : name
        //               //   return '{a|' + word + '}{b|' + tarValue + data[0].unit + '}{c|' + p + '%' + '}'
        //               return '{a|' + word + '}{b|' + tarValue + data[0].unit + '}{c|' + tarRate + '%' + '}'
        //               // 影响了所有，讨论后再看怎么加
        //               //   return name + '   ' + tarValue + data[0].unit + '  ' + '   ' + p + '%'
        //               //   return name + ' ' + p + '%'
        //           },
        data: series
    },
    series: [
        {
            name: '',
            type: 'pie',
            color: ['#9fe8ff', '#cbd4ff', '#fff7c0', '#9fffff', '#62ffdf'],
            center: [centerX, '50%'],
            radius: ['60%', '70%'],
            avoidLabelOverlap: false,
            zlevel: 5,
            label: {
                show: false
            },
            hoverAnimation: false,
            emphasis: {
                show: false
            },
            labelLine: {
                show: false
            },
            // itemStyle: {
            //     borderWidth: 5, // 间距的宽度
            //     borderColor: 'rgba(0, 0, 0, 0)' //背景色
            // },
            data: _pie1()
        },
        {
            radius: ['60%', '63%'],
            center: [centerX, '50%'],
            type: 'pie',
            zlevel: 6,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            hoverAnimation: false,
            animation: false,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0.8)'
                }
            },
            data: _pie1()
        },
        {
            radius: ['67%', '70%'],
            center: [centerX, '50%'],
            type: 'pie',
            zlevel: 6,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            hoverAnimation: false,
            animation: false,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0.8)'
                }
            },
            data: _pie1()
        },
        {
            type: 'pie',
            zlevel: 2,
            silent: true,
            center: [centerX, '50%'],
            radius: ['70%', '74%'],
            startAngle: 45,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: _pie2()
        },
        {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
                return {
                    type: 'arc',
                    shape: {
                        // cx: api.getWidth() / 2,
                        cx: centerX,
                        cy: api.getHeight() / 2,
                        r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.45,
                        startAngle: ((0 + angle) * Math.PI) / 180,
                        endAngle: ((360 + angle) * Math.PI) / 180
                    },
                    style: {
                        stroke: {
                            type: 'linear',
                            x: 1,
                            y: 0.5,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'transparent' // 0% 处的颜色
                                },
                                {
                                    offset: 0.6,
                                    color: '#00eaff' // 100% 处的颜色
                                }
                            ]
                        },
                        fill: 'transparent',
                        lineWidth: 1
                    },
                    // style: api.style(),
                    silent: true
                }
            },
            data: [0]
        },
        {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
                // let x0 = api.getWidth() / 2
                let x0 = centerX
                let y0 = api.getHeight() / 2
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.45
                let point = getCirlPoint(x0, y0, r, -95 + angle)
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 2.5
                    },
                    style: {
                        stroke: '#00eaff', //绿
                        fill: '#00eaff'
                    },
                    silent: true
                }
            },
            data: [0]
        }
    ]
}
