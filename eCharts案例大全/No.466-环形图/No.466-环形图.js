const mockData = [
    {total: "98", detail: "本地费控"},
    {total: "98", detail: "时区时段"},
    {total: "99", detail: "费率电价"},
   
]
option = {
    grid: {
        left: 0
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}({d}%)',
        textStyle: {
            color: '#000'
        },
        backgroundColor: '#fff',
        extraCssText: 'box-shadow: 0px 0px 10px 0px rgba(19,83,88,0.2);'
    },
    legend: {
        // orient: 'vertical',
        // y: 'middle',
        right: '0%',
        top: '35%',
        left: '60%',
        bottom: '80%',
        data: mockData.map(item => item.detail), 
        icon: 'circle',
        formatter: params => { 
            const dataAll = mockData.map(item => Number(item.total))
            const total = dataAll.reduce((x, y) => parseInt(x, 10) + parseInt(y, 10))
            const value = Number(mockData.filter(item => item.detail === params)[0].total)
            if (total === 0) {
                return `{a|${params}：}{b|0.00%}`
            }
            const name = params
            return `{a|${name}：}{b|${((value * 100) / total).toFixed(2)}%}`
        },
        textStyle: {
            rich: {
                a: {
                    color: '#120000',
                    width: 70,
                    fontSize: 14,
                    fontWeight: 'bold',
                    align: 'left'
                },
                b: {
                    color: '#18355C',
                    fontSize: 14,
                    fontWeight: 'bold',
                }
            }
        },  
        selectorPosition: 'start',
        align: 'left',
        itemHeight: 8,
        itemWidth: 8,
        itemGap: 30
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ['42%', '75%'],
            center: ['30%', '50%'],
            clockwise: false,
            avoidLabelOverlap: false,
            hoverOffset: 10,
            legendHoverLink: true,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: '400'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#ffffff',
                }
            },
            data: [
                { 
                    value: mockData[0].total,
                    name: mockData[0].detail,
                    itemStyle: {
                        shadowBlur: 15,
                        shadowOffsetX: -10,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(122,74,255, 0.4)',
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#9B66FF' },
                                { offset: 1, color: '#6236FF' }
                            ]
                        ),
                        emphasis: {
                            shadowBlur: 15,
                            shadowColor: 'rgba(122,74,255, 1)',
                            borderColor: '#ffffff',
                            borderWidth: 0
                        }
                    }    
                },
                { 
                    value: mockData[1].total,
                    name: mockData[1].detail,
                    itemStyle: {
                        shadowBlur: 15,
                        shadowOffsetX: -10,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(236,102,255, 0.4)',
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#EC66FF' },
                                { offset: 1, color: '#B620E0' }
                            ]
                        ),
                        emphasis: {
                            shadowBlur: 15,
                            shadowColor: 'rgba(236,102,255, 1)',
                            borderColor: '#ffffff',
                            borderWidth: 0
                        }
                    }
                },
                { 
                    value: mockData[2].total,
                    name: mockData[2].detail,
                    itemStyle: {
                        shadowBlur: 15,
                        shadowOffsetX: -10,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(245,114,164, 0.4)',
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#F572A4' },
                                { offset: 1, color: '#D72552' }
                            ]
                        ),
                        emphasis: {
                            shadowBlur: 15,
                            shadowColor: 'rgba(245,114,164, 1)',
                            borderColor: '#ffffff',
                            borderWidth: 0
                        }
                    }
                },
                { 
                    value: mockData[3].total,
                    name: mockData[3].detail,
                    itemStyle: {
                        shadowBlur: 15,
                        shadowOffsetX: -10,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#FD9D00' },
                                { offset: 1, color: '#FA6400' }
                            ]
                        ),
                        shadowColor: 'rgba(238,101,0,0.4)',
                        emphasis: {
                            shadowBlur: 15,
                            shadowColor: 'rgba(238,101,0,1)',
                            borderColor: '#ffffff',
                            borderWidth: 0
                        }
                    }
                },
                { 
                    value: mockData[4].total,
                    name: mockData[4].detail,
                    itemStyle: {
                        shadowBlur: 15,
                        shadowOffsetX: -10,
                        shadowColor: 'rgba(247,181,0, 0.4)',
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#FCDB00' },
                                { offset: 1, color: '#F7B500' }
                            ]
                        ),
                        emphasis: {
                            shadowBlur: 15,
                            shadowColor: 'rgba(247,181,0, 1)',
                            borderWidth: 0
                        }
                    }    
                },
                { 
                    value: mockData[5].total,
                    name: mockData[5].detail,
                    itemStyle: {
                        shadowBlur: 15,
                        shadowOffsetX: -10,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(130,221,0, 0.4)',
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#A6EC00' },
                                { offset: 1, color: '#6DD400' }
                            ]
                        ),
                        emphasis: {
                            shadowBlur: 15,
                            shadowColor: 'rgba(130,221,0, 1)',
                            borderColor: '#ffffff',
                            borderWidth: 0
                        }
                    }
                },
                { 
                    value: mockData[6].total,
                    name: mockData[6].detail,
                    itemStyle: {
                        shadowBlur: 15,
                        shadowOffsetX: -10,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(88,224,196, 0.4)',
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#79EDDC' },
                                { offset: 1, color: '#44D7B6' }
                            ]
                        ),
                        emphasis: {
                            shadowBlur: 15,
                            shadowColor: 'rgba(88,224,196, 1)',
                            borderColor: '#ffffff',
                            borderWidth: 0
                        }
                    }
                },
                { 
                    value: mockData[7].total,
                    name: mockData[7].detail,
                    itemStyle: {
                        shadowBlur: 15,
                        shadowOffsetX: -10,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(0,176,255, 0.4)',
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#00C4FF' },
                                { offset: 1, color: '#0091FF' }
                            ]
                        ),
                        emphasis: {
                            shadowBlur: 15,
                            shadowColor: 'rgba(0,176,255, 1)',
                            borderColor: '#ffffff',
                            borderWidth: 0
                        }
                    }
                },
                { 
                    value: mockData[8].total,
                    name: mockData[8].detail,
                    itemStyle: {
                        shadowBlur: 15,
                        shadowOffsetX: -10,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(49, 189, 209, 0.4)',
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#31BDD1' },
                                { offset: 1, color: '#4388C6' }
                            ]
                        ),
                        emphasis: {
                            shadowBlur: 15,
                            shadowColor: 'rgba(49, 189, 209, 1)',
                            borderColor: '#ffffff',
                            borderWidth: 0
                        }
                    }
                }, { 
                    value: mockData[9].total,
                    name: mockData[9].detail,
                    itemStyle: {
                        shadowBlur: 15,
                        shadowOffsetX: -10,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(114, 151, 255, 0.4)',
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#7297FF' },
                                { offset: 1, color: '#364BEC' }
                            ]
                        ),
                        emphasis: {
                            shadowBlur: 15,
                            shadowColor: 'rgba(114, 151, 255, 1)',
                            borderColor: '#ffffff',
                            borderWidth: 0
                        }
                    }
                },
            ]
        }
    ]
};