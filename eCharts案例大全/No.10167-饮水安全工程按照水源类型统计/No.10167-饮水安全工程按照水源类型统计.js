option = {
                    title: {
                        top: 13,
                        left: 'center',
                        text: '饮水安全工程按照水源类型统计'
                    },
                    backgroundColor: 'rgba(0,0,0,0)',
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b}  <br/>{c}个"
                    },
                    legend: {
                        x: 'center',
                        y: '80%',
                        data: ['地表水源', '地下水源', '联合水源'],
                        icon: 'circle',
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    calculable: true,
                    series: [{
                        name: '水源类型',
                        type: 'pie',
                        //起始角度，支持范围[0, 360]
                        startAngle: 0,
                        //饼图的半径，数组的第一项是内半径，第二项是外半径
                        radius: [41, 110],
                        //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                        center: ['50%', '25%'],
                        //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                        // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                        //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                        roseType: 'area',
                        //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                formatter: '{c}个'
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true,
                                length2: 1,
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data: [{
                            value: 600,
                            name: '地表水源',
                            itemStyle: {
                                normal: {
                                    color: '#f845f1'
                                }
                            }
                        },
                            {
                                value: 1100,
                                name: '地下水源',
                                itemStyle: {
                                    normal: {
                                        color: '#ad46f3'
                                    }
                                }
                            },
                            {
                                value: 1200,
                                name: '联合水源',
                                itemStyle: {
                                    normal: {
                                        color: '#5045f6'
                                    }
                                }
                            },
                            {
                                value: 0,
                                name: "",
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            {
                                value: 0,
                                name: "",
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            {
                                value: 0,
                                name: "",
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            {
                                value: 0,
                                name: "",
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            {
                                value: 0,
                                name: "",
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            {
                                value: 0,
                                name: "",
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        ]
                    }]
                }