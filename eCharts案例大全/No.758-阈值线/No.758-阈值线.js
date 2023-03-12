option = {
    backgroundColor: '#0A1651',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        // icon: 'diamond',
        itemGap: 13,
        data: ['接口增加量', '接口减少量', '接口变化量'],
        top: '3%',
        left: 'center',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    grid: {
        bottom: '10%'
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },

        axisLabel: {
            margin: 10,
            textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: '12',
            }
        },
        splitLine: {
            lineStyle: {
                color: "rgba(255,255,255,0.1)",
            }
        }
    }],
    // visualMap: [{
    //     show: false,
    //     pieces: [
    //         {
    //             gt: 0,
    //             lt: 30,
    //             color: '#FFFF00',
    //         },
    //         {
    //             gt: 30,
    //             lt: 54,
    //             color: '#00A1EA',
    //         }
    //     ],
    //     outOfRange: {
    //         color: '#FF5D1D',
    //     },
    // }, ],
    series: [{
        name: '接口增加量',
        type: 'line',
        smooth: true,
        markLine: { //最大值和最小值
            data: [{
                    name: '阈值54',
                    yAxis: 54,
                    label: {
                        show: 'true',
                        position: 'end',
                        formatter: '增加量阈值54'
                    },
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: "#FF5D1D",
                        }
                    }

                },
            ]
        },
        lineStyle: {
            normal: {
                width: 1
            }
        },
        symbol: 'circle',
            symbolSize: 4,
            itemStyle: {
                normal: {
                    color: 'green',
                    // borderColor: 'blue', //拐点边框颜色
                }
            },
        data: [50, 52, 52, 52, 52, 58, 52, 55, 48, 52, 52, 52, 54, 52, 52, 52, 50, 52, 52, 52, 52, 52, 55, 52, 52, 49, 52, 52, 52, 52, 52]
    },{
        name: '接口减少量',
        type: 'line',
        smooth: true,
        markLine: { //最大值和最小值
            data: [{
                    name: '阈值30',
                    yAxis: 30,
                    label: {
                        show: 'true',
                        position: 'end',
                        formatter: '减少量阈值30'
                    },
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: "#FF5D1D",
                        }
                    }

                },
              
            ]
        },
        lineStyle: {
            normal: {
                width: 1
            }
        },
        symbol: 'circle',
            symbolSize: 4,
            itemStyle: {
                normal: {
                    color: '#00A1EA',
                    // borderColor: 'blue', //拐点边框颜色
                }
            },
       data: [30, 32, 32, 32, 32, 38, 32, 33, 36, 32, 32, 32, 34, 32, 32, 32, 39, 32, 32, 32, 32, 32, 33, 32, 32, 23, 32, 32, 32, 32, 32]
    },{
        name: '接口变化量',
        type: 'line',
        smooth: true,
        markLine: { //最大值和最小值
            data: [
                {
                    name: '阈值10',
                    yAxis: 10,
                    label: {
                        show: 'true',
                        position: 'end',
                        formatter: '变化量阈值10'
                    },
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: "#FF5D1D",
                        }
                    }
                },
               
            ]
        },
        lineStyle: {
            normal: {
                width: 1
            }
        },
        symbol: 'circle',
            symbolSize: 4,
            itemStyle: {
                normal: {
                    color: 'yellow',
                    // borderColor: 'blue', //拐点边框颜色
                }
            },
        data: [10, 11, 12, 13, 11,9, 11, 12, 13, 11,9, 8, 10, 12, 13, 11,9, 8, 10, 12,10, 13, 11,9, 11, 12, 13, 11,9, 8, 10, 12, 13, 11,9, 8, 10, 12,10]
    } ]

}