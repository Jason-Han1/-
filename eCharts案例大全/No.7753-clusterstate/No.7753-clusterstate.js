const targetCoord = [1000, 90]
const targetCoord1 = [1000, 190]
const curveness = 0.2
const linesData = []
const categories = [{
    name: '可用',
    itemStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#01acca'
            }, {
                offset: 1,
                color: '#5adbe7'
            }]),
        }
    },
    label: {
        normal: {
            fontSize: '14'
        }
    },
}, {
    name: '不可用',
    itemStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#ffb402'
            }, {
                offset: 1,
                color: '#ffdc84'
            }]),
        }
    },
    label: {
        normal: {
            fontSize: '14'
        }
    },
}]

const item0 = {
    name: "Proxy0",
    value: targetCoord,
    symbolSize: 100,
    itemStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#157eff'
            }, {
                offset: 1,
                color: '#35c2ff'
            }]),
        }
    },
    label: {
        normal: {
            fontSize: '14'
        }
    },
}

const item1 = {
    name: "Proxy1",
    value: targetCoord1,
    symbolSize: 100,
    itemStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#157eff'
            }, {
                offset: 1,
                color: '#35c2ff'
            }]),
        }
    },
    label: {
        normal: {
            fontSize: '14'
        }
    },
}

const items = [{
    name: "MySQL0",
    category: 0,
    active: true,
    speed: '50 TPS',
    value: [0, 0]
}, {
    name: "MySQL1",
    category: 0,
    active: true,
    speed: '50 TPS',
    value: [0, 100]
}, {
    name: "MySQL2",
    category: 0,
    active: true,
    speed: '50 TPS',
    value: [0, 200]
}, {
    name: "MySQL3",
    category: 1,
    value: [0, 300]
}]

const data = items.concat([item0, item1])

items.forEach(function(el) {
    if (el.active) {
        linesData.push([{
            coord: el.value
        }, {
            coord: targetCoord
        }])
    }
})

const links0 = items.map((el) => {
    return {
        source: el.name,
        target: item0.name,
        speed: el.speed,
        lineStyle: {
            normal: {
                color: el.speed ? '#12b5d0' : '#ff0000',
                curveness: curveness,
            }
        },
    }
})

const links1 = items.map((el) => {
    return {
        source: el.name,
        target: item1.name,
        speed: el.speed,
        lineStyle: {
            normal: {
                color: el.speed ? '#12b5d0' : '#ff0000',
                curveness: curveness,
            }
        },
    }
})

const links = links0.concat(links1)

option = {
    legend: [{
        formatter: function(name) {
            return echarts.format.truncateText(name, 100, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        textStyle: {
            color: '#999'
        },
        selectedMode: false,
        right: 0,
        data: categories.map(function(el) {
            return el.name
        })
    }],
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: {
        show: false,
        type: 'value'
    },
    series: [{
        type: 'graph',
        layout: 'none',
        coordinateSystem: 'cartesian2d',
        symbolSize: 60,
        z: 3,
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 14
                },
                formatter: function(params) {
                    let txt = ''
                    if (params.data.speed !== undefined) {
                        txt = params.data.speed
                    }
                    return txt
                },
            }
        },
        label: {
            normal: {
                show: true,
                position: 'bottom',
                color: '#5e5e5e'
            }
        },
        itemStyle: {
            normal: {
                shadowColor: 'none'
            },
            emphasis: {

            }
        },
        lineStyle: {
            normal: {
                width: 2,
                shadowColor: 'none'
            },
        },
        edgeSymbol: ['none', 'arrow'],
        edgeSymbolSize: 8,
        data: data,
        links: links,
        categories: categories
    }, {
        name: 'A',
        type: 'lines',
        coordinateSystem: 'cartesian2d',
        z: 1,
        effect: {
            show: true,
            smooth: false,
            trailLength: 0,
            symbol: "arrow",
            color: 'rgba(55,155,255,0.5)',
            symbolSize: 12
        },
        lineStyle: {
            normal: {
                curveness: curveness
            }
        },
        data: linesData
    }]
}