let all = 10000;//实际数量=>刻度数
let bAll = 2000;//少色块部分实际总量
let cAll = 4000;//多色块部分实际总量
let x = 1000;

let y = 4 / 5 * 1000;//可见部分
let a = 1 / 5 * 1000;//隐藏部分
let b = bAll / all * y;//少色块占比
let c = (cAll - bAll) / all * y;//多色块占比
let d = y - b - c;//空部分
option = {
    backgroundColor: "#091438",
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['其他(' + bAll + ')', '本市(' + cAll + ')'],
                textStyle: {
                    color: "#fff"
                }
            },
            title: {
                show: true,
                text: ["{b|在线人数\n}", `{a|${bAll + cAll}} `].join(""),
                padding: 20,
                backgroundColor: "#f00",
                borderRadius: 10,
                textStyle: {
                    rich: {
                        a: {
                            color: "#fff",
                            fontSize: 62,
                            height: 100
                        },
                        b: {
                            color: "#fff",
                            fontSize: 26,
                            lineHeight: 65
                        }
                    }
                },
                left: "center",
                top: 'center'
            },
            tooltip: {
                show: false
            },
            series: [{
                type: "pie",
                startAngle: 306,
                radius: ["65%", "60%"],
                center: ["50%", "50%"],
                legendHoverLink: false,
                hoverAnimation: false,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: "center",
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: "30",
                            fontWeight: "bold"
                        }
                    },

                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {
                        value: a,

                        itemStyle: {
                            normal: {
                                color: "#091438"
                            },
                            emphasis: {
                                color: "#091438"
                            }
                        }
                    },
                    {
                        value: b,
                        name: '其他(' + bAll + ')',
                        itemStyle: {
                            normal: {
                                color: "#da2b80"
                            },
                            emphasis: {
                                color: "#da2b80"
                            }
                        }
                    },
                    {
                        value: c,
                        name: '本市(' + cAll + ')',
                        itemStyle: {
                            normal: {
                                color: "#ffa600"
                            },
                            emphasis: {
                                color: "#ffa600"
                            }
                        }
                    },
                    {
                        value: d,
                        itemStyle: {
                            normal: {
                                color: "#00fef7"
                            },
                            emphasis: {
                                color: "#00fef7"
                            }
                        }
                    },
                ]
            },
            {
                name: "",
                type: "pie",
                radius: ["0%", "55%"],
                center: ["50%", "50%"],
                silent: true,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 100,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#006cd5' // 0% 处的颜色
                            }, {
                                offset: 0.5,
                                color: '#35c4f8' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#006cd5' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }]
            },
            {
                name: '刻度',
                type: 'gauge',
                radius: '85%',
                min: 0,//最小刻度
                max: cAll > 10000 ? 100000 : 10000,//最大刻度
                splitNumber: 10, //刻度数量
                startAngle: 234,//开始度数
                endAngle: -54,//截至度数
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: [[1, 'rgba(0,0,0,0)']]
                    }
                },//仪表盘轴线
                axisLabel: {
                    show: true,
                    color: '#4d5bd1',
                    distance: 25,
                    formatter: function (value) {
                        return value / 10000 + 'w';
                    }
                },
                axisTick: {
                    show: true,
                    splitNumber: 10,
                    lineStyle: {
                        //color: '#fff',
                        width: 1,
                    },
                    length: -8
                },//刻度样式
                splitLine: {
                    show: true,
                    length: -20,
                    lineStyle: {
                        color: '#fff'
                    }
                },//分隔线样式
                detail: {
                    show: false
                },
                pointer: {
                    show: false
                }
            }
            ]
};