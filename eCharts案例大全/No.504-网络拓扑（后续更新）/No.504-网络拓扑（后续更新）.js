let halfWidth = 150
let halfHeight = 50

let halfItemwidth = 85
let halfItemHeight = 20
let curveness1 = {
    normal: {
        curveness: 0.2,
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: 'green' // 0% 处的颜色
            }, {
                offset: 1,
                color: 'blue' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },
    }
}
let curveness2 = {
    normal: {
        curveness: -0.2,
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: 'green' // 0% 处的颜色
            }, {
                offset: 1,
                color: 'blue' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },
    }
}
let curveness3 = {
    normal: {
        curveness: 0,
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: 'green' // 0% 处的颜色
            }, {
                offset: 1,
                color: 'blue' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },
    }
}

// for (var i = 0; i < lines.length; i++) {
//     // 组装动态移动的效果数据
//     var line = {
//         coords: [
//             dataMap.get(lines[i].source),
//             dataMap.get(lines[i].target)
//         ]
//     }

//     charts.linesData.push(line)
// }
// var dataMap = new Map()
// let lidata = [{
//         source: 0,
//         target: 1,
//         lineStyle: curveness3,

//     }, {
//         source: 0,
//         target: 2
//     }, {
//         source: 0,
//         target: 3,
//         lineStyle: curveness3
//     }, {
//         source: 0,
//         target: 4,
//         lineStyle: curveness3
//     }, {
//         source: 0,
//         target: 5,
//         lineStyle: curveness3
//     },
//     {
//         source: 1,
//         target: 6,
//         lineStyle: curveness1
//     }, {
//         source: 2,
//         target: 7,
//         lineStyle: curveness3
//     }, {
//         source: 3,
//         target: 8,
//         lineStyle: curveness3
//     }, {
//         source: 4,
//         target: 9,
//         lineStyle: curveness3
//     }, {
//         source: 5,
//         target: 10,
//         lineStyle: curveness3
//     }, {
//         source: 6,
//         target: 11,
//         lineStyle: curveness1,
//         label: {
//             normal: {
//                 show: true,
//                 formatter: '区域特征',
//             }
//         },
//     }, {
//         source: 6,
//         target: 12,
//         lineStyle: curveness2,
//         label: {
//             normal: {
//                 show: true,
//                 formatter: '网络拓扑',
//             },
//         },
//     },
// ]
// let redata = []
// for (var i = 0; i < lidata.length; i++) {
//     // 组装动态移动的效果数据
//     var line = {
//         coords: [
//             dataMap.get(lidata[i].source),
//             dataMap.get(lidata[i].target)
//         ]
//     }

//     redata.push(line)
// }
option = {
    color: ['#096DD9', '#1890FF', '#40A9FF'],

    series: [{
            type: 'graph',
            // layout: 'force',
            force: {
                repulsion: 2000
            },
            roam: true,
            label: {
                normal: {
                    show: true
                },
            },
            // edgeSymbol: ['circle', 'arrow'],
            // edgeSymbolSize: [0, 5], //箭头的大小
            data: [
                // root
                {
                    name: '互联网',
                    x: halfWidth,
                    y: halfHeight,
                    value: 67,
                    category: 0,
                    symbol: 'image:///asset/get/s/data-1547633094304-08Q_2YEvH.png',
                    symbolSize: 130,
                    label: {
                        normal: {
                            position: 'bottom'
                        }
                    }
                },
                // 行业
                {
                    name: '管理网',
                    x: halfWidth + halfItemwidth + 179,
                    y: halfHeight + 14,
                    value: 12,
                    category: 1,
                    symbol: 'image:///asset/get/s/data-1547633192258-2EYYUDdcd.png',
                    symbolSize: 60,
                    label: {
                        normal: {
                            position: 'bottom'
                        }
                    }
                }, {
                    name: '内网',
                    x: halfWidth + halfItemwidth + 179,
                    y: halfHeight - 155,
                    value: 12,
                    category: 1,
                    symbol: 'image:///asset/get/s/data-1547632915872-WZMUphq72.png',
                    symbolSize: 60,
                    label: {
                        normal: {
                            position: 'bottom'
                        }
                    }
                }, {
                    name: '服务网',
                    x: halfWidth + halfItemwidth + 179,
                    y: halfHeight + 200,
                    value: 12,
                    category: 1,
                    symbol: 'image:///asset/get/s/data-1547632915872-WZMUphq72.png',
                    symbolSize: 60,
                    label: {
                        normal: {
                            position: 'bottom'
                        }
                    }
                }, {
                    name: '办公网',
                    x: halfWidth - halfItemwidth - 165,
                    y: halfHeight - 72,
                    value: 12,
                    category: 1,
                    symbol: 'image:///asset/get/s/data-1547633192258-2EYYUDdcd.png',
                    symbolSize: 60,
                    label: {
                        normal: {
                            position: 'bottom'
                        }
                    }
                }, {
                    name: '控制网',
                    x: halfWidth - halfItemwidth - 165,
                    y: halfHeight + 98,
                    value: 12,
                    category: 1,
                    symbol: 'image:///asset/get/s/data-1547632915872-WZMUphq72.png',
                    symbolSize: 60,
                    label: {
                        normal: {
                            position: 'bottom'
                        }
                    }
                },
                // 个股A
                {
                    name: 'CPE外网',
                    x: halfWidth + halfItemwidth + 400,
                    y: halfHeight - 56,
                    value: 12,
                    category: 2,
                    symbol: 'image:///asset/get/s/data-1547632686885-o5Rfi3tyk.png',
                    symbolSize: 40,
                    label: {
                        normal: {
                            position: 'bottom'
                        }
                    }
                },
                // 个股B
                {
                    name: '灯杆内网',
                    x: halfWidth + halfItemwidth + 400,
                    y: halfHeight - 225,
                    value: 12,
                    category: 2,
                    symbol: 'image:///asset/get/s/data-1547632686885-o5Rfi3tyk.png',
                    symbolSize: 40,
                    label: {
                        normal: {
                            position: 'bottom'
                        }
                    }
                },
                // 个股C
                {
                    name: '服务器网',
                    x: halfWidth + halfItemwidth + 400,
                    y: halfHeight + 200,
                    value: 12,
                    category: 2,
                    symbol: 'image:///asset/get/s/data-1547632686885-o5Rfi3tyk.png',
                    symbolSize: 40,
                    label: {
                        normal: {
                            position: 'bottom'
                        }
                    }
                },
                // 个股D
                {
                    name: '员工办公',
                    x: halfWidth - halfItemwidth - 400,
                    y: halfHeight - 80,
                    value: 12,
                    category: 2,
                    symbol: 'image:///asset/get/s/data-1547632686885-o5Rfi3tyk.png',
                    symbolSize: 50,
                    label: {
                        normal: {
                            position: 'bottom'
                        }
                    }
                },
                // 个股E
                {
                    name: '系统控制',
                    x: halfWidth - halfItemwidth - 400,
                    y: halfHeight + 100,
                    value: 12,
                    category: 2,
                    symbol: 'image:///asset/get/s/data-1547632686885-o5Rfi3tyk.png',
                    symbolSize: 50,
                    label: {
                        normal: {
                            position: 'bottom'
                        }
                    }
                }, {
                    name: '20.20.1.0/24 ',
                    x: halfWidth - halfItemwidth + 900,
                    y: halfHeight - 110,
                    value: 12,
                    category: 2,
                    symbol: 'roundRect',
                    symbolSize: [150, 15],
                    label: {
                        normal: {
                            color: '#fff'
                        }
                    }
                }, {
                    name: '总线型 ',
                    x: halfWidth - halfItemwidth + 900,
                    y: halfHeight - 10,
                    value: 12,
                    category: 2,
                    symbol: 'roundRect',
                    symbolSize: [150, 15],
                    label: {
                        normal: {
                            color: '#fff'
                        }
                    }
                },
            ],
            lineStyle: curveness3,
            links: [{
                    source: 0,
                    target: 1,
                    lineStyle: curveness3,

                }, {
                    source: 0,
                    target: 2
                }, {
                    source: 0,
                    target: 3,
                    lineStyle: curveness3
                }, {
                    source: 0,
                    target: 4,
                    lineStyle: curveness3
                }, {
                    source: 0,
                    target: 5,
                    lineStyle: curveness3
                },
                {
                    source: 1,
                    target: 6,
                    lineStyle: curveness1
                }, {
                    source: 2,
                    target: 7,
                    lineStyle: curveness3
                }, {
                    source: 3,
                    target: 8,
                    lineStyle: curveness3
                }, {
                    source: 4,
                    target: 9,
                    lineStyle: curveness3
                }, {
                    source: 5,
                    target: 10,
                    lineStyle: curveness3
                }, {
                    source: 6,
                    target: 11,
                    lineStyle: curveness1,
                    label: {
                        normal: {
                            show: true,
                            formatter: '区域特征',
                        }
                    },
                }, {
                    source: 6,
                    target: 12,
                    lineStyle: curveness2,
                    label: {
                        normal: {
                            show: true,
                            formatter: '网络拓扑',
                        },
                    },
                },
            ]
        },
        // {
        //     name: 'A',
        //     type: 'lines',
        //     coordinateSystem: 'polar',
        //     lineStyle: {
        //         color: '#a6c84c',
        //         width: 1,
        //         opacity: 0.6,
        //         curveness: 0.5
        //     },
        //     effect: {
        //         show: true,
        //         // trailLength: 0,
        //         symbol: 'triangle',
        //         color: '#12b5d0',
        //         symbolSize: 8
        //     },
        //     data: redata
        // }

    ]
}