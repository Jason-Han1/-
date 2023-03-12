  // 图表渲染参数开始
        option = {
            tooltip: {
                trigger: 'item',
                // formatter: "{b} : {d}%"
                formatter:function(a){
                    var c = a.name;
                    var d = c.split(":");
                    return d[0]+" : " +a.percent + "%";
                }
            },
            legend: [{
                    icon: "square",
                    orient: 'vertical',
                    left: 'left',
                    top: 'center',
                    itemGap: 18,
                    padding: 15,
                    textStyle: {
                        "color": "#000",
                        padding: [0, 0, 0, -5],
                    },
                      data: ['其他分类: 70', '信息监控: 100', '章: 270', '警: 90', '自危害: 120', '攻击入侵: 110']
                    // data: dataResult.name[0]
                },
                {
                    icon: "square",
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    itemGap: 18,
                    padding: 15,
                    textStyle: {
                        "color": "#000",
                        padding: [0, -100, 0, -60],
                    },
                      data: ['认证授权: 140', '网络访问: 130', '操作记录: 170', '安全预警: 150', '信息刺探: 70', '恶意代码: 60']
                    // data: dataResult.name[1]
                }
            ],
            grid:{
              right:100  
            },
            series: [{

                type: 'pie',
                radius: ['40%', '60%'],
                center: ['50%', '50%'],

                label: {
                    normal: {
                        show: false,
                    }
                },
                labelLine: {
                    normal: {
                        show: false,
                        length2: 10
                    }
                },
                data: [{
                        value: 70,
                        // value: dataResult.value[0],
                        name: '其他分类'+": "+70,
                        // name: dataResult.name[0][0],
                        // formatter: dataResult.value[0],
                        itemStyle: {
                            normal: {
                                color: '#7EC0EE'
                            }
                        }
                    }, {
                        value: 5,
                        itemStyle: {
                            normal: {
                                color: '#ffffff'
                            }
                        }
                    },
                    {
                        value: 100,
                        // value: dataResult.value[1],
                        name: '信息监控'+": "+100,
                        // name: dataResult.name[0][1],
                        itemStyle: {
                            normal: {
                                color: '#9ACD32'
                            }
                        }
                    }, {
                        value: 5,
                        itemStyle: {
                            normal: {
                                color: '#ffffff'
                            }
                        }
                    },
                    {
                        value: 270,
                        // value: dataResult.value[2],
                        name: '章'+": "+270,
                        // name: dataResult.name[0][2],
                        itemStyle: {
                            normal: {
                                color: '#FFB90F'
                            }
                        }
                    }, {
                        value: 5,
                        itemStyle: {
                            normal: {
                                color: '#ffffff'
                            }
                        }
                    },
                    {
                        value: 90,
                        // value: dataResult.value[3],
                        name: '警'+": "+90,
                        // name: dataResult.name[0][3],
                        itemStyle: {
                            normal: {
                                color: '#FF8C69'
                            }
                        }
                    }, {
                        value: 5,
                        itemStyle: {
                            normal: {
                                color: '#ffffff'
                            }
                        }
                    },
                    {
                        value: 120,
                        // value: dataResult.value[4],
                        name: '自危害'+": "+120,
                        // name: dataResult.name[0][4],
                        itemStyle: {
                            normal: {
                                color: '#AB82FF'
                            }
                        }
                    }, {
                        value: 5,
                        itemStyle: {
                            normal: {
                                color: '#ffffff'
                            }
                        }
                    },
                    {
                        value: 110,
                        // value: dataResult.value[5],
                        name: '攻击入侵'+": "+110,
                        // name: dataResult.name[0][5],
                        itemStyle: {
                            normal: {
                                color: '#8899AA'
                            }
                        }
                    }, {
                        value: 5,
                        itemStyle: {
                            normal: {
                                color: '#ffffff'
                            }
                        }
                    },
                    {
                        value: 140,
                        // value: dataResult.value[6],
                        name: '认证授权'+": "+140,
                        // name: dataResult.name[1][0],
                        itemStyle: {
                            normal: {
                                color: '#7FFFD4'
                            }
                        }
                    }, {
                        value: 5,
                        itemStyle: {
                            normal: {
                                color: '#ffffff'
                            }
                        }
                    },
                    {
                        value: 130,
                        // value: dataResult.value[7],
                        name: '网络访问'+": "+130,
                        // name: dataResult.name[1][1],
                        itemStyle: {
                            normal: {
                                color: '#EE30A7'
                            }
                        }
                    }, {
                        value: 5,
                        itemStyle: {
                            normal: {
                                color: '#ffffff'
                            }
                        }
                    },
                    {
                        value: 170,
                        // value: dataResult.value[8],
                        name: '操作记录'+": "+170,
                        // name: dataResult.name[1][2],
                        itemStyle: {
                            normal: {
                                color: '#EE9A00'
                            }
                        }
                    }, {
                        value: 5,
                        itemStyle: {
                            normal: {
                                color: '#ffffff'
                            }
                        }
                    },
                    {
                        value: 150,
                        // value: dataResult.value[9],
                        name: '安全预警'+": "+150,
                        // name: dataResult.name[1][3],
                        itemStyle: {
                            normal: {
                                color: '#8B5A00'
                            }
                        }
                    }, {
                        value: 5,
                        itemStyle: {
                            normal: {
                                color: '#ffffff'
                            }
                        }
                    },
                    {
                        value: 70,
                        // value: dataResult.value[10],
                        name: '信息刺探'+": "+70,
                        // name: dataResult.name[1][4],
                        itemStyle: {
                            normal: {
                                color: '#8B4789'
                            }
                        }
                    }, {
                        value: 5,
                        itemStyle: {
                            normal: {
                                color: '#ffffff'
                            }
                        }
                    },
                    {
                        value: 60,
                        // value: dataResult.value[11],
                        name: '恶意代码'+": "+60,
                        // name: dataResult.name[1][5],
                        itemStyle: {
                            normal: {
                                color: '#A9A9A9'
                            }
                        }
                     
                    }, {
                        value: 5,
                        itemStyle: {
                            normal: {
                                color: '#ffffff'
                            }
                        }
                    }
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };