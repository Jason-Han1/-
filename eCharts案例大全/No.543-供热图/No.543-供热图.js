var image2 = "/asset/get/s/data-1605493703679-ydPWrx0rH.png";
var image1 = "/asset/get/s/data-1605494522699-WjdxwqFTe.png";

  option = ({
        grid: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 0,
        },

        graphic: {
            elements: [{
                type: 'image',
                left: '2%',
                top: '41%',
                style: {
                    image: image1,
                    width: 80,
                    height: 120
                }
            },
                {
                    type: 'image',
                    left: '28%',
                    top: '4%',
                    style: {
                        image: image2,
                        width: 60,
                        height: 100
                    }
                },
                {
                    type: 'image',
                    left: '48%',
                    top: '4%',
                    style: {
                        image: image2,
                        width: 60,
                        height: 100
                    }
                },
                {
                    type: 'image',
                    left: '68%',
                    top: '4%',
                    style: {
                        image: image2,
                        width: 60,
                        height: 100
                    }
                },
                {
                    type: 'image',
                    left: '88%',
                    top: '4%',
                    style: {
                        image: image2,
                        width: 60,
                        height: 100
                    }
                },
                {
                    type: 'image',
                    left: '88%',
                    top: '34%',
                    style: {
                        image: image2,
                        width: 60,
                        height: 100
                    }
                },
                {
                    type: 'image',
                    left: '48%',
                    top: '34%',
                    style: {
                        image: image2,
                        width: 60,
                        height: 100
                    }
                },
                {
                    type: 'image',
                    left: '68%',
                    top: '64%',
                    style: {
                        image: image2,
                        width: 60,
                        height: 100
                    }
                },
                {
                    type: 'image',
                    left: '88%',
                    top: '64%',
                    style: {
                        image: image2,
                        width: 60,
                        height: 100
                    }
                },
            ]
        },
        xAxis: {
            show: false,
            min: 0,
            max: 1000,
            axisPointer: {
                show: false
            },
        },
        yAxis: {
            show: false,
            min: 0,
            max: 1000,
            axisPointer: {
                show: false
            },
        },
        series: [{
            type: 'scatter',
            data: [{
                value: [250, 910],
                label: {
                    normal: {
                        show: true,
                        formatter: [
                            '{textBorder|九号楼}',
                            '2单元702',
                            '温度:23°C',
                        ].join('\n'),
                        backgroundColor: '#eee',
                        borderRadius: 10,
                        padding: 4,
                        color: '#000',
                        fontSize: 12,
                        shadowBlur: 3,
                        shadowColor: '#888',
                        lineHeight: 25,
                        rich: {
                            textBorder: {
                                fontSize: 15,
                                textBorderColor: '#000',
                                textBorderWidth: 3,
                                color: '#fff'
                            },
                        }
                    }
                }
            }]
        },
            {
                type: 'scatter',
                data: [{
                    value: [450, 910],
                    label: {
                        normal: {
                            show: true,
                            formatter: [
                                '{textBorder|八号楼}',
                                '3单元301',
                                '温度:26°C',
                            ].join('\n'),
                            backgroundColor: '#eee',
                            borderRadius: 10,
                            padding: 5,
                            color: '#000',
                            fontSize: 12,
                            shadowBlur: 3,
                            shadowColor: '#888',
                            lineHeight: 25,
                            rich: {
                                textBorder: {
                                    fontSize: 15,
                                    textBorderColor: '#000',
                                    textBorderWidth: 3,
                                    color: '#fff'
                                },
                            }
                        }
                    }
                }]
            },
            {
                type: 'scatter',
                data: [{
                    value: [650, 910],
                    label: {
                        normal: {
                            show: true,
                            formatter: [
                                '{textBorder|五号楼}',
                                '4单元602',
                                '温度:23°C',
                            ].join('\n'),
                            backgroundColor: '#eee',
                            borderRadius: 10,
                            padding: 5,
                            color: '#000',
                            fontSize: 12,
                            shadowBlur: 3,
                            shadowColor: '#888',
                            lineHeight: 25,
                            rich: {
                                textBorder: {
                                    fontSize: 15,
                                    textBorderColor: '#000',
                                    textBorderWidth: 3,
                                    color: '#fff'
                                },
                            }
                        }
                    }
                }]
            },
            {
                type: 'scatter',
                data: [{
                    value: [850, 910],
                    label: {
                        normal: {
                            show: true,
                            formatter: [
                                '{textBorder|一号楼}',

                                '2单元1102',

                                '温度:20°C',
                            ].join('\n'),
                            backgroundColor: '#eee',
                            borderRadius: 10,
                            padding: 5,
                            color: '#000',
                            fontSize: 12,
                            shadowBlur: 3,
                            shadowColor: '#888',
                            lineHeight: 25,
                            rich: {
                                textBorder: {
                                    fontSize: 15,
                                    textBorderColor: '#000',
                                    textBorderWidth: 3,
                                    color: '#fff'
                                },
                            }
                        },

                        value:29,

                    }
                }]
            },
            {
                type: 'scatter',
                data: [{
                    value: [850, 610],
                    label: {
                        normal: {
                            show: true,
                            formatter: [
                                '{textBorder|二号楼}',
                                '1单元1102',
                                '温度:17°C',
                            ].join('\n'),
                            backgroundColor: '#eee',
                            borderRadius: 10,
                            padding: 5,
                            color: '#000',
                            fontSize: 12,
                            shadowBlur: 3,
                            shadowColor: '#888',
                            lineHeight: 25,
                            rich: {
                                textBorder: {
                                    fontSize: 15,
                                    textBorderColor: '#000',
                                    textBorderWidth: 3,
                                    color: '#fff'
                                },
                            }
                        }
                    }
                }]
            },
            {
                type: 'scatter',
                data: [{
                    value: [850, 310],
                    label: {
                        normal: {
                            show: true,
                            formatter: [
                                '{textBorder|三号楼}',
                                '1单元1101',
                                '温度:20°C',
                            ].join('\n'),
                            backgroundColor: '#eee',
                            borderRadius: 10,
                            padding: 5,
                            color: '#000',
                            fontSize: 12,
                            shadowBlur: 3,
                            shadowColor: '#888',
                            lineHeight: 25,
                            rich: {
                                textBorder: {
                                    fontSize: 15,
                                    textBorderColor: '#000',
                                    textBorderWidth: 3,
                                    color: '#fff'
                                },
                            }
                        }
                    }
                }]
            },
            {
                type: 'scatter',
                data: [{
                    value: [450, 610],
                    label: {
                        normal: {
                            show: true,
                            formatter: [
                                '{textBorder|六号楼}',
                                '2单元401',
                                '温度:26°C',
                            ].join('\n'),
                            backgroundColor: '#eee',
                            borderRadius: 10,
                            padding: 5,
                            color: '#000',
                            fontSize: 12,
                            shadowBlur: 3,
                            shadowColor: '#888',
                            lineHeight: 25,
                            rich: {
                                textBorder: {
                                    fontSize: 15,
                                    textBorderColor: '#000',
                                    textBorderWidth: 3,
                                    color: '#fff'
                                },
                            }
                        }
                    }
                }]
            },
            {
                type: 'scatter',
                data: [{
                    value: [760, 310],
                    label: {
                        normal: {
                            show: true,
                            formatter: [
                                '{textBorder|七号楼}',
                                '1单元402',
                                '温度:27°C',
                            ].join('\n'),
                            backgroundColor: '#eee',
                            borderRadius: 10,
                            padding: 5,
                            color: '#000',
                            fontSize: 12,
                            shadowBlur: 3,
                            shadowColor: '#888',
                            lineHeight: 25,
                            rich: {
                                textBorder: {
                                    fontSize: 15,
                                    textBorderColor: '#000',
                                    textBorderWidth: 3,
                                    color: '#fff'
                                },
                            }
                        }
                    }
                }]
            },
            {
                type: "graph",
                coordinateSystem: "cartesian2d",
                symbol: "rect",
                symbolOffset: ["1%", 0],
                label: {
                    normal: {
                        show: true
                    }
                },
                data: [{
                    id: "10",
                    name: "机组供水",
                    symbol: 'circle',
                    symbolSize: [20, 20],
                    value: [100, 500],
                    label: {
                        color: "#000",
                        position: 'bottom',
                    },
                    itemStyle: {
                        normal: {
                            color: "#35c2ff"
                        }
                    }
                },
                    {
                        id: "11",
                        symbol: 'circle',
                        symbolSize: [15, 15],
                        value: [300, 800],
                        itemStyle: {
                            normal: {
                                color: "#35c2ff"
                            }
                        }
                    },
                    {
                        id: "12",
                        symbol: 'circle',
                        symbolSize: [15, 15],
                        value: [500, 800],
                        itemStyle: {
                            normal: {
                                color: "#35c2ff"
                            }
                        }
                    },
                    {
                        id: "13",
                        symbol: 'circle',
                        symbolSize: [15, 15],
                        value: [700, 800],
                        itemStyle: {
                            normal: {
                                color: "#35c2ff"
                            }
                        }
                    },
                    {
                        id: "14",
                        symbol: 'circle',
                        symbolSize: [15, 15],
                        value: [900, 800],
                        itemStyle: {
                            normal: {
                                color: "#35c2ff"
                            }
                        }
                    },
                    {
                        id: "15",
                        symbol: 'circle',
                        symbolSize: [15, 15],
                        value: [500, 500],
                        itemStyle: {
                            normal: {
                                color: "#35c2ff"
                            }
                        }
                    },
                    {
                        id: "16",
                        symbol: 'circle',
                        symbolSize: [15, 15],
                        value: [900, 500],
                        itemStyle: {
                            normal: {
                                color: "#35c2ff"
                            }
                        }
                    },
                    {
                        id: "17",
                        symbol: 'circle',
                        symbolSize: [15, 15],
                        value: [700, 200],
                        itemStyle: {
                            normal: {
                                color: "#35c2ff"
                            }
                        }
                    },
                    {
                        id: "18",
                        symbol: 'circle',
                        symbolSize: [15, 15],
                        value: [900, 200],
                        itemStyle: {
                            normal: {
                                color: "#35c2ff"
                            }
                        }
                    },
                    {
                        id: "00",
                        symbol: 'circle',
                        name: "机组回水",
                        symbolSize: [20, 20],
                        value: [100, 550],
                        label: {
                            color: "#000",
                            position: 'bottom',
                        },
                        itemStyle: {
                            normal: {
                                color: "#35c2ff"
                            }
                        }
                    },
                    {
                        id: "01",
                        symbol: 'circle',
                        symbolSize: [15, 15],
                        value: [300, 850],
                        itemStyle: {
                            normal: {
                                color: "#35c2ff"
                            }
                        }
                    },
                    {
                        id: "02",
                        symbol: 'circle',
                        symbolSize: [15, 15],
                        value: [500, 850],
                        itemStyle: {
                            normal: {
                                color: "#35c2ff"
                            }
                        }
                    },
                    {
                        id: "03",
                        symbol: 'circle',
                        symbolSize: [15, 15],
                        value: [700, 850],
                        itemStyle: {
                            normal: {
                                color: "#35c2ff"
                            }
                        }
                    },
                    {
                        id: "04",
                        symbol: 'circle',
                        symbolSize: [15, 15],
                        value: [900, 850],
                        itemStyle: {
                            normal: {
                                color: "#35c2ff"
                            }
                        }
                    },

                    {
                        id: "05",
                        symbol: 'circle',
                        symbolSize: [15, 15],
                        value: [500, 550],
                        itemStyle: {
                            normal: {
                                color: "#35c2ff"
                            }
                        }
                    },
                    {
                        id: "06",
                        symbol: 'circle',
                        symbolSize: [15, 15],
                        value: [900, 550],
                        itemStyle: {
                            normal: {
                                color: "#35c2ff"
                            }
                        }
                    },
                    {
                        id: "07",
                        symbol: 'circle',
                        symbolSize: [15, 15],
                        value: [700, 250],
                        itemStyle: {
                            normal: {
                                color: "#35c2ff"
                            }
                        }
                    },
                    {
                        id: "08",
                        symbol: 'circle',
                        symbolSize: [15, 15],
                        value: [900, 250],
                        itemStyle: {
                            normal: {
                                color: "#35c2ff"
                            }
                        }
                    },
                    {
                        id: "20",
                        symbolSize: [0, 0],
                        value: [200, 500],
                    },
                    {
                        id: "21",
                        symbolSize: [0, 0],
                        value: [250, 550],
                    },
                    {
                        id: "22",
                        symbolSize: [0, 0],
                        value: [200, 800],
                    },
                    {
                        id: "23",
                        symbolSize: [0, 0],
                        value: [250, 850],
                    },
                    {
                        id: "24",
                        symbolSize: [0, 0],
                        value: [630, 500],

                    },
                    {
                        id: "25",
                        symbolSize: [0, 0],
                        value: [680, 550],
                    },
                    {
                        id: "26",
                        symbolSize: [0, 0],
                        value: [630, 200],
                    },
                    {
                        id: "27",
                        symbolSize: [0, 0],
                        value: [680, 250],
                    },
                ],
                links: [{
                    source: "10",
                    target: "20",
                    lineStyle: {
                        color: "red",
                    }
                },
                    {
                        source: "20",
                        target: "15",
                        lineStyle: {
                            color: "red",
                        }
                    },
                    {
                        source: "15",
                        target: "24",
                        lineStyle: {
                            color: "red",
                        }
                    },
                    {
                        source: "24",
                        target: "16",
                        lineStyle: {
                            color: "red",
                        }
                    },
                    {
                        source: "24",
                        target: "26",
                        lineStyle: {
                            color: "red",
                        }
                    },
                    {
                        source: "26",
                        target: "17",
                        lineStyle: {
                            color: "red",
                        }
                    },
                    {
                        source: "17",
                        target: "18",
                        lineStyle: {
                            color: "red",
                        }
                    },
                    {
                        source: "20",
                        target: "22",
                        lineStyle: {
                            color: "red",
                        }
                    },
                    {
                        source: "22",
                        target: "11",
                        lineStyle: {
                            color: "red",
                        }
                    },
                    {
                        source: "11",
                        target: "12",
                        lineStyle: {
                            color: "red",
                        }
                    },
                    {
                        source: "12",
                        target: "13",
                        lineStyle: {
                            color: "red",
                        }
                    },
                    {
                        source: "13",
                        target: "14",
                        lineStyle: {
                            color: "red",
                        }
                    },
                    {
                        source: "00",
                        target: "21",
                        lineStyle: {
                            color: "#35c2ff",
                        }
                    }, {
                        source: "21",
                        target: "23",
                        lineStyle: {
                            color: "#35c2ff",
                        }
                    },
                    {
                        source: "23",
                        target: "01",
                        lineStyle: {
                            color: "#35c2ff",
                        }
                    },
                    {
                        source: "01",
                        target: "02",
                        lineStyle: {
                            color: "#35c2ff",
                        }
                    },
                    {
                        source: "02",
                        target: "03",
                        lineStyle: {
                            color: "#35c2ff",
                        }
                    },
                    {
                        source: "03",
                        target: "04",
                        lineStyle: {
                            color: "#35c2ff",
                        }
                    },
                    {
                        source: "21",
                        target: "05",
                        lineStyle: {
                            color: "#35c2ff",
                        }
                    },
                    {
                        source: "05",
                        target: "25",
                        lineStyle: {
                            color: "#35c2ff",
                        }
                    },
                    {
                        source: "25",
                        target: "27",
                        lineStyle: {
                            color: "#35c2ff",
                        }
                    },
                    {
                        source: "25",
                        target: "06",
                        lineStyle: {
                            color: "#35c2ff",
                        }
                    },
                    {
                        source: "27",
                        target: "07",
                        lineStyle: {
                            color: "#35c2ff",
                        }
                    },
                    {
                        source: "07",
                        target: "08",
                        lineStyle: {
                            color: "#35c2ff",
                        }
                    },

                    {
                        source: "01",
                        target: "11",
                        lineStyle: {
                            color: "yellow",
                        }
                    },
                    {
                        source: "02",
                        target: "12",
                        lineStyle: {
                            color: "yellow",
                        }
                    },
                    {
                        source: "03",
                        target: "13",
                        lineStyle: {
                            color: "yellow",
                        }
                    },
                    {
                        source: "04",
                        target: "14",
                        lineStyle: {
                            color: "yellow",
                        }
                    },
                    {
                        source: "05",
                        target: "15",
                        lineStyle: {
                            color: "yellow",
                        }
                    },
                    {
                        source: "06",
                        target: "16",
                        lineStyle: {
                            color: "yellow",
                        }
                    },
                    {
                        source: "07",
                        target: "17",
                        lineStyle: {
                            color: "yellow",
                        }
                    },
                    {
                        source: "08",
                        target: "18",
                        lineStyle: {
                            color: "yellow",
                        }
                    },
                ],
                lineStyle: {
                    normal: {
                        opacity: 0.1,
                        curveness: 0,
                        width: 15
                    }
                }
            },
            {
                type: "lines",
                coordinateSystem: "cartesian2d",
                polyline: true,
                effect: {
                    show: true,
                    period: 8,
                    trailLength: 0.71,
                    symbolSize: 13,
                    symbol: "circle",
                    loop: true,

                },
                lineStyle: {
                    normal: {
                        opacity: 0.5, //线条透明度
                        color: "#ffaaaa",
                        width: 0,
                        curveness: 0 //动画线路的曲度
                    }

                },
                data: [{
                    coords: [
                        [100, 500],
                        [500, 500],
                        [500, 550],
                        [100, 550]
                    ]
                },
                    {
                        coords: [
                            [100, 500],
                            [900, 500],
                            [900, 550],
                            [100, 550]
                        ]
                    },
                    {
                        coords: [
                            [100, 500],
                            [630, 500],
                            [630, 200],
                            [900, 200],
                            [900, 250],
                            [680, 250],
                            [680, 550],
                            [100, 550],
                        ]
                    },
                    {
                        coords: [
                            [100, 500],
                            [630, 500],
                            [630, 200],
                            [700, 200],
                            [700, 250],
                            [680, 250],
                            [680, 550],
                            [100, 550],
                        ]
                    },
                    {
                        coords: [
                            [100, 500],
                            [200, 500],
                            [200, 800],
                            [300, 800],
                            [300, 850],
                            [250, 850],
                            [250, 550],
                            [100, 550],
                        ]
                    },
                    {
                        coords: [
                            [100, 500],
                            [200, 500],
                            [200, 800],
                            [500, 800],
                            [500, 850],
                            [250, 850],
                            [250, 550],
                            [100, 550],
                        ]
                    },
                    {
                        coords: [
                            [100, 500],
                            [200, 500],
                            [200, 800],
                            [700, 800],
                            [700, 850],
                            [250, 850],
                            [250, 550],
                            [100, 550],
                        ]
                    },
                    {
                        coords: [
                            [100, 500],
                            [200, 500],
                            [200, 800],
                            [900, 800],
                            [900, 850],
                            [250, 850],
                            [250, 550],
                            [100, 550],
                        ]
                    },
                ]
            },
        ]
    });