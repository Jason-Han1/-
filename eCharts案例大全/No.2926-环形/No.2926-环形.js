                let scale = 1,
                    bgColor = "rgba(19,22,24,1)",
                    echartData = [
                        {
                            name: "小型企业",
                            value: 100
                        },
                        {
                            name: "中型企业",
                            value: 200
                        },
                        {
                            name: "大型企业",
                            value: 200
                        }
                    ];
                var option = {
                    color: ['rgba(252, 160, 0, 1)', 'rgba(0, 120, 254, 1)', 'rgba(125, 247, 255, 1)'],
                    tooltip: {
                        trigger: "item",
                        formatter: "{b}: {c} ({d}%)"
                    },
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: [0, -30],
                                color: '#ddd',
                            },
                            labelLine: {
                                show: false,
                            }
                        }
                    },
                    title: {
                        text: '{a|测试}{b|家}',
                        top: 'center',
                        textAlign: "center",
                        left: "35%",
                        textStyle: {
                            color: "#fff",
                            rich: {
                                a: {
                                    fontSize: 26 * scale,
                                    lineHeight: 48 * scale,
                                    fontWeight: 'bold'
                                },
                                b: {
                                    fontSize: 14 * scale,
                                    color: 'rgba(0, 120, 254, 1)',
                                    padding: [0, 0, 5, 5],
                                }
                            }
                        }
                    },
                    legend: {
                        top: "10%",
                        orient: 'vertical',
                        right: "1%",
                        icon: "rect",
                        itemWidth: 25,
                        itemHeight: 10,
                        itemGap: 15,
                        textStyle: {
                            rich: {
                                name: {
                                    color: "rgba(255, 255, 255, 0.5)",
                                    fontSize: 12 * scale,
                                    align: 'left',
                                    padding: [-10, 0, 0, -35],
                                }
                            }
                        },
                        formatter: function (name) {
                            let res = echartData.filter(v => v.name === name);
                            return (
                                "\n{name| " + name + "}"
                            );
                        }
                    },
                    series: [
                        {
                            type: 'pie',
                            name: '最内层径向渐变圆心',
                            clockWise: false,
                            radius: '35%',
                            center: ['35%', '50%'],
                            z: 1,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.RadialGradient(.5, .5, .6, [{
                                        offset: 0,
                                        color: 'rgba(0, 19, 53, 1.00)'
                                    },
                                        {
                                            offset: 1,
                                            color: 'rgba(2, 103, 165, 1.00)'
                                        }
                                    ], false)
                                },
                            },
                            label: {
                                show: false,
                            },
                            tooltip: {
                                show: false
                            },
                            data: [100],
                        },
                        {
                            type: "pie",
                            radius: [50, 60],
                            center: ["35%", "50%"],
                            itemStyle: {
                                normal: {
                                    borderColor: bgColor,
                                    borderWidth: 1
                                }
                            },
                            label: {
                                normal: {
                                    formatter: params => {
                                        return (
                                            '{value|' + params.value + '}'
                                        );
                                    },
                                    padding: [0, 0, 0, 0],
                                    rich: {
                                        value: {
                                            fontSize: 14,
                                            fontWeight: 'bold',
                                            color: 'rgba(255, 255, 255, 0.5)'
                                        }
                                    }
                                }
                            },
                            data: echartData
                        }],
                };