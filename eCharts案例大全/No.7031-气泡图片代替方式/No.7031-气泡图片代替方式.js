 let img = "image://pages/NewJrxh/left/img/qp_60_36.png";//气泡背景图片
            var dataX = ["资源库", "项目库", "需求库"];
            let data = [19,23,31];
            let data2 = [];
            for (let i = 0; i < data.length; i++) {
                    data2.push({
                        value: data[i],
                        symbol: img,
                        symbolSize: [42, 40]
                    });
            }
             option = {
                grid: {
                    top: "20%",
                    left: "10%",
                    right: "5%",
                    bottom: "20%",
                    containLabal: true
                },
                xAxis: {
                    data: dataX,
                    axisTick: { show: false },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            type: 'solid',
                            color: '#06314b',
                            width: 1,

                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#0080a5',
                            fontSize: 16,
                        },
                        show: true,
                        interval: 0,
                        formatter: function (params) {
                            return (params.length > 6 ? (params.slice(0, 6) + "...") : params)
                        },
                    },
                    splitLine: { show: false },
                },
                yAxis: {
                    splitLine: {
                        show: true,
                        interval: 1,
                        lineStyle: {
                            type: 'dashed',
                            color: '#06314b',
                            width: 1.5,

                        }
                    },
                    axisTick: { show: false },
                    axisLine: {
                        show: false,

                    },
                    axisLabel: {
                        show: true,
                        interval: 1,
                        textStyle: {
                            color: '#86ddfe',
                            fontSize: 16,
                            fontFamily: 'Noto Sans CJK SC Regular'
                        }
                    }, splitNumber: 2
                },
                series: [
                    {
                        name: "内容库",
                        type: 'pictorialBar',
                        barCategoryGap: '-130%',
                        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                        label: {
                            normal: {
                                show: true,
                                position: "top",
                                formatter: function (params) {
                                    //  var index = params.dataIndex;
                                    var str = "{c|" + params.value + "}";
                                    return str;
                                },
                                rich: {
                                    c: {
                                        fontSize: 18,
                                        color: "rgb(188,237,255)",
                                        padding: [
                                            0,
                                            0,
                                            2,
                                            0
                                        ],
                                        backgroundColor: img,
                                        align: "center",
                                        verticalAlign: "bottom",
                                        height: 40,
                                        lineHeight: 40,
                                        width: 52
                                    }
                                }
                            },
                            emphasis: {
                                color: "rgb(128,61,61)"
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: "rgba(70,120,146,1)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(70,120,146,0.2)"
                                    }
                                    ],
                                    global: false
                                }
                            },
                            emphasis: {
                                color: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: "rgba(128,61,61,1)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(128,61,61,0.2)"
                                    }
                                    ],
                                    global: false
                                }

                            }
                        },
                        data: data,
                    },
                    {
                        name:"内容库ts",
                        type: 'pictorialBar',
                        barGap: '-100%',
                        symbolPosition: 'end',
                        symbolSize: 50,
                        symbolOffset: [0, '-120%'],
                        data: data2
                    }
                ]
            }