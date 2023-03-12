var uploadedDataURL = "/asset/get/s/data-1551865257982-m28YSB79q.json";







var option = {
    // backgroundColor: '#404a59',
    title: [{
        text: '北京市XX村分布图',
        //    subtext: 'data from PM25.in',
        sublink: 'http://www.pm25.in',
        left: 'center',
        textStyle: {
            color: '#4a4a4a'
        }
    }, {
        text: '区级XX村',
        right: "30",
        bottom: "24",
        width: 100,
        textStyle: {
            color: '#4a4a4a',
            fontSize: 12
        }
    }, {
        text: "市级XX村",
        right: "30",
        bottom: "0",
        width: 100,
        textStyle: {
            color: '#4a4a4a',
            fontSize: 12
        }
    }, ],
    tooltip: {
        show: false,
        trigger: 'item',
        formatter: function(params) {
            return params.name + ' : ' + params.data.value[2];
        }
    },
    legend: {
        orient: 'vertical',
        id: 1,
        y: 'bottom',
        x: 'right',
        data: [{
            name: '区级XX村',
            icon: "react"
        }, {
            name: '市级XX村',
            icon: "react"
        }],
        textStyle: {
            color: '#fff'
        }
    },
    // visualMap: {
    //     type: "piecewise",
    //     realtime: false,
    //     calculable: true,
    //     inRange: {
    //         color: ['#0D2434', '#00CC99', '#DCB222']
    //     },
    //     pieces: [{
    //         min: 0,
    //         max: 1,
    //         label: '未建立',
    //         color: new echarts.graphic.LinearGradient(
    //             1, 0, 0, 0,
    //             [{
    //                     offset: 0,
    //                     color: 'rgba(115,99,43,1)'
    //                 },
    //                 {
    //                     offset: 0.5,
    //                     color: 'rgba(115,99,43,0.7)'
    //                 },
    //                 {
    //                     offset: 1,
    //                     color: 'rgba(115,99,43,0.4)'
    //                 }
    //             ]
    //         )
    //     }, {
    //         min: 2,
    //         max: null,
    //         label: '已建立',
    //         color: {
    //             type: 'linear',
    //             x: 0,
    //             y: 0,
    //             x2: 0,
    //             y2: 1,
    //             colorStops: [{
    //                 offset: 0,
    //                 color: 'rgba(23, 151, 148, 0.4)' // 0% 处的颜色
    //             }, {
    //                 offset: 1,
    //                 color: 'rgba(23, 151, 148, 0.9)' // 100% 处的颜色
    //             }],
    //             globalCoord: false // 缺省为 false
    //         }
    //     }],
    //     itemSymbol: '',
    //     itemWidth: 15 ,
    //     itemHeight: 15,
    //     bottom: '7%',
    //     right: '34%',
    //     show: true,
    //     textStyle: {
    //         color: '#ffffff',
    //         fontSize: 16 ,
    //     },
    // },

    geo: {
        map: '北京',
        label: {
            normal: {
                show: true,
                color: "#3d3831"
            }
        },
        roam: true,
        zoom: 1.2,
        itemStyle: {
            normal: {
                areaColor: '#fbf9e8',
                borderColor: '#565454'
            },
            emphasis: {
                // areaColor: '#2a333d'
            }
        },
        regions: [{
            name: '东城区',
            value: 18163,
            label: {
                normal: {
                    show: true,
                    fontSize: 8
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#fbf9e8',
                },
            }
        }, {
            name: '西城区',
            value: 22036,
            label: {
                normal: {
                    show: true,
                    fontSize: 8
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#e9f6fc',
                },
            }
        }, {
            name: '海淀区',
            value: 39825,
            itemStyle: {
                normal: {
                    areaColor: '#fbf9e8',
                },
            }
        }, {
            name: '朝阳区',
            value: 48405,
            itemStyle: {
                normal: {
                    areaColor: '#e9f6fc',
                },
            }
        }, {
            name: '石景山区',
            value: 15212,
            label: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#e9f6fc',
                },
            }
        }, {
            name: '大兴区',
            value: 26681,
            itemStyle: {
                normal: {
                    areaColor: '#e9f4e8',
                },
            }
        }, {
            name: '门头沟区',
            value: 11161,
            itemStyle: {
                normal: {
                    areaColor: '#e9f4e8',
                },
            }
        }, {
            name: '昌平区',
            value: 20687,
            itemStyle: {
                normal: {
                    areaColor: '#fce4e4',
                },
            }
        }, {
            name: '通州区',
            value: 51488,
            itemStyle: {
                normal: {
                    areaColor: '#fce4e4',
                },
            }
        }, {
            name: '房山区',
            value: 23053,
            itemStyle: {
                normal: {
                    areaColor: '#e9f6fc',

                },
            }
        }, {
            name: '丰台区',
            value: 26504,
            itemStyle: {
                normal: {
                    areaColor: '#fce4e4',
                },
            }
        }, {
            name: '顺义区',
            value: 3247,
            itemStyle: {
                normal: {
                    areaColor: '#e9f4e8',
                },
            }
        }, {
            name: '怀柔区',
            value: 21812,
            itemStyle: {
                normal: {
                    areaColor: '#e9f6fc',
                },
            }
        }, {
            name: '密云区',
            value: 18589,
            itemStyle: {
                normal: {
                    areaColor: '#fce4e4',
                },
            }
        }, {
            name: '延庆区',
            value: 22211,
            itemStyle: {
                normal: {
                    areaColor: '#fbf9e8',
                },
            }
        }, {
            name: '平谷区',
            value: 16729,
            itemStyle: {
                normal: {
                    areaColor: '#fbf9e8',
                },
            }

        }],


    },

    series: [{
            name: '区级XX村',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [],
            symbolSize: function(val) {
                return val[2] / 1;
            },
            label: {
                normal: {
                    show: false,
                    formatter: function(params) {
                        // console.log(params);
                        return params.name;
                    },
                    position: 'right',
                    color: '#fff',
                    fontSize: '8'
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0.5,
                            color: 'rgba(255,255,255,0.5)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(246,190,14,0.9)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    borderWidth: 0,
                    borderColor: '#b4dccd'
                }
            }
        },
        {
            name: '市级XX村',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [],
            symbol: 'path://M423.23842 889.236714l0-266.284739 177.523159 0 0 266.284739 221.903949 0L822.665529 534.190395l133.142369 0L512 134.762263 68.191078 534.190395l133.142369 0 0 355.047342L423.23842 889.237737z',
            symbolSize: function(val) {
                return val[2] / 3.5;
            },
            label: {
                normal: {
                    show: false,
                    formatter: function(params) {
                        // console.log(params);
                        return params.name;
                    },
                    position: 'inside',
                    color: '#4a4a4a'
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    // color: {
                    //     type: 'linear',
                    //     x: 0,
                    //     y: 0,
                    //     x2: 0,
                    //     y2: 1,
                    //     colorStops: [{
                    //         offset: 0,
                    //         color: 'rgba(41,173,100,0.5)' // 0% 处的颜色
                    //     }, {
                    //         offset: 1,
                    //         color: 'rgba(0,0,0,0.5)' // 100% 处的颜色
                    //     }],
                    //     global: false // 缺省为 false
                    // },
                    // color: {
                    //     type: 'radial',
                    //     x: 0.5,
                    //     y: 0.5,
                    //     r: 0.5,
                    //     colorStops: [{
                    //         offset: 0,
                    //         color: 'rgba(255,255,255,0.1)' // 0% 处的颜色
                    //     }, {
                    //         offset: 1,
                    //         color: 'rgba(228,117,50,0.9)' // 100% 处的颜色
                    //     }],
                    //     global: false // 缺省为 false
                    // },
                    color: 'rgba(228,117,50,1)',
                    borderWidth: 0,
                    borderColor: '#f4b391',
                    // shadowColor: 'rgba(0, 0, 0, 0.5)',
                    // shadowBlur: 10
                }
            }
        }

    ]
};

$.getJSON(uploadedDataURL, function(res) {
    console.log(res)

    option.series[0].data = res.qj;
    option.series[1].data = res.sj;
    myChart.setOption(option);
    myChart.on("click", function(e) {
        console.log(e.data)
    })
    myChart.on("geoRoam", function(e) {
        console.log(e.zoom)
    })
})