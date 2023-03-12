    this.option = {
                    //     title: {
                    //     text: '75',
                    //     textStyle: {
                    //       color: '#01c4a3',
                    //       fontSize: 60
                    //     },
                    //     subtext: '总分：100分',
                    //     subtextStyle: {
                    //       color: '#909090',
                    //     },
                    //     itemGap: -10, // 主副标题距离
                    //     left: 'center',
                    //     top: 'center'
                    //   },
                     grid: {
                        top: '0.5%',
                        left: '0.5%',
                        right: '0.5%',
                        bottom: '0.5%'
                    },
                    tooltip: {
                        trigger: 'item',
                        backgroundColor: 'rgba(255, 255, 255, .9)',
                        textStyle: {
                            color: '#3c3c3c'
                        },
                        alwaysShowContent: false,//移入显示
                        extraCssText: 'box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);',
                        confine: true,
                        formatter(param) {
                            const xName = ['测试1','测试2']
                            const tipUnit = ['m²' , '单']
                            return `<span style="color: #333;padding-left: 33px;"> ${param.name}</span><br>
                                    <span style="display:inline-block;margin-left: 12px;margin-right:5px;border-radius:7px;width:7px;height:7px;background-color:rgba(0,122,255,0.7);"></span>
                                    <span style="color: #666;margin-left: 6px;margin-right:25px">${xName[0]}: ${tipUnit[0] || 'm²'}</span><br>\
                                    <span style="display:inline-block;margin-left: 12px;margin-right:5px;border-radius:7px;width:7px;height:7px;background-color:#F5A623;"></span>
                                    <span style="color: #666;margin-left: 6px; margin-right:25px">${xName[1]}: ${tipUnit[1] || '单'} </span>`
                        }
                    },

                    angleAxis: {
                        max: 100, // 最大值
                        clockwise: true, // 逆时针
                        // 隐藏刻度线
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        }
                    },
                    radiusAxis: {
                        type: 'category',
                        // 隐藏刻度线
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        }
                    },
                    polar: {
                        center: ['50%', '50%'],
                        radius: [67,28] //图形大小
                    },
                    series: [
                     {
                        type: 'bar',
                        seriesIndex: 0,
                        itemStyle: {
                            normal: {
                                color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: '#6C93F3'
                                }, {
                                    offset: 1,
                                    color: '#65C3FF'
                                }],
                                global: false
                            }
                            }, //鼠标悬停时：
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }

                        },
                        data: [80],
                        coordinateSystem: 'polar',
                        roundCap: true,
                        barWidth: 14,
                        barGap: '-100%', // 两环重叠
                        z: 4
                    },
                    { // 灰色环
                        type: 'bar',
                        seriesIndex: 1,
                        itemStyle: {
                            color: '#EEEEEE'

                        },
                        data: [100],
                        coordinateSystem: 'polar',
                        roundCap: false,
                        barWidth: 14,
                        barGap: '-100%', // 两环重叠
                        z: 3
                    },
                    {
                            type: 'pie',
                            top: 'middle',
                            left: '0',
                            radius: ['46', '32'],
                            startAngle: 120,
                            // legendHoverLink: true,
                            hoverAnimation: true,//禁用高亮
                            clockwise: false,//是否顺时针
                            // label: {
                            //     show: true
                            // },
                            labelLine: {
                                show: false //视觉引导线
                            },
                            data: [
                                {
                                    value: 80,
                                    itemStyle: {
                                        normal: {
                                            color: "rgba(0,0,0,0)"
                                        }
                                    }
                                },
                                {
                                    value: 50,
                                    itemStyle: {
                                        normal: {
                                            color: {
                                                    type: 'linear',
                                                    x: 0,
                                                    y: 0,
                                                    x2: 0,
                                                    y2: 1,
                                                    colorStops: [
                                                    {
                                                        offset: 0, color: 'rgba(249, 100, 100, 1)'
                                                    },
                                                    {
                                                        offset: 1, color: 'rgba(255, 154, 145, 1)'
                                                    }
                                                    ],
                                                    global: false
                                                }
                                        }
                                    }

                                }


                            ],
                            z: 5
                    }
                    ]
                }