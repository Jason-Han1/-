option ={
            title:{
                text:''
            },
            tooltip: {
            },
            series: [{
                name: '仪表盘创建情况',
                type: 'pie',
                radius: ['70%', '65%'],
                center:['15%','50%'],
                color:'#2f808f',
                hoverAnimation:false,
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 32,
                    name: '我创建的',
                    label: {
                        normal: {
                            formatter: '{d} %',
                            textStyle: {
                                fontSize: 22
                            }
                        },
                        emphasis:{
                            textStyle: {
                                fontSize: 25
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#2f808f'
                        },
                        emphasis: {
                            color: '#394a5f'
                        }
                    },
                    tooltip:{
                        trigger: 'item',
                        formatter: "{a} <br/> 我创建的 : {c}"
                    }
                }, {
                    value: 72,
                    name: '其他用户创建的',
                    label: {
                        normal: {
                            formatter: '\n我的仪表盘',
                            textStyle: {
                                color: '#555',
                                fontSize: 13
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#d8e8f2'
                        },
                        emphasis: {
                            color: '#d8e8f2'
                        }
                    },
                }]
            },{
                name: '图表创建情况',
                type: 'pie',
                radius: ['70%', '65%'],
                center:['50%','50%'],
                color:'#2f808f',
                hoverAnimation:false,
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 14,
                    name: '我的图表创建情况',
                    label: {
                        normal: {
                            formatter: '{d} %',
                            textStyle: {
                                fontSize: 22
                            }
                        },
                        emphasis:{
                            textStyle: {
                                fontSize: 25
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#2f808f'
                        },
                        emphasis: {
                            color: '#394a5f'
                        }
                    },
                    tooltip:{
                        trigger: 'item',
                        formatter: "{a} <br/> 我创建的 : {c}"
                    }
                }, {
                    value: 50,
                    name: '其他用户创建的',
                    label: {
                        normal: {
                            formatter: '\n我的图表',
                            textStyle: {
                                color: '#555',
                                fontSize: 13
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#d8e8f2'
                        },
                        emphasis: {
                            color: '#d8e8f2'
                        }
                    },
                }]
            },{
                name: '数据集创建情况',
                type: 'pie',
                radius: ['70%', '65%'],
                center:['85%','50%'],
                color:'#2f808f',
                hoverAnimation:false,
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 18,
                    name: '我创建的',
                    label: {
                        normal: {
                            formatter:'{d}'+'%',
                            textStyle: {
                                fontSize: 22
                            }
                        },
                        emphasis:{
                            textStyle: {
                                fontSize: 25
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#2f808f'
                        },
                        emphasis: {
                            color: '#394a5f'
                        }
                    },
                    tooltip:{
                        trigger: 'item',
                        formatter: "{a} <br/> 我创建的 : {c}"
                    }
                }, {
                    value: 86,
                    name: '其他用户创建的',
                    label: {
                        normal: {
                            formatter: '\n我的数据集',
                            textStyle: {
                                color: '#555',
                                fontSize: 13
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#d8e8f2'
                        },
                        emphasis: {
                            color: '#d8e8f2'
                        }
                    },
                }]
            }]
    }