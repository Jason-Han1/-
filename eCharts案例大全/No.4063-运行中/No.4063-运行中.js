var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    },
    emphasis: {
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    }
};


var dataStyle = {
    normal: {
        formatter: '{c}%',
        position: 'center',
        show: true,
        textStyle: {
            fontSize: '20',
            fontWeight: 'normal',
            color: '#AAAFC8'
        }
    }
};


option = {
    backgroundColor: '#0F1C3C',
    title: [{
        text: '运行中',
        left: '19%',
        top: '52%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '14',
            color: '#AAAFC8',
            textAlign: 'center',
        },
    }, {
        text: '维修中',
        left: '49%',
        top: '52%',
        textAlign: 'center',
        textStyle: {
            color: '#AAAFC8',
            fontWeight: 'normal',
            fontSize: '14',
            textAlign: 'center',
        },
    }, {
        text: '离网/在建',
        left: '79%',
        top: '52%',
        textAlign: 'center',
        textStyle: {
            color: '#AAAFC8',
            fontWeight: 'normal',
            fontSize: '14',
            textAlign: 'center',
        },
    }],

    //第一个图表
    series: [{
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['50%', '55%'],
            center: ['20%', '50%'],
            startAngle: 100,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: '#E1E8EE'
                        }
                    },
                }, {
                    value: 0,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        //上层环形配置
        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['50%', '55%'],
            center: ['20%', '50%'],
            startAngle: 90,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 80,
                    itemStyle: {
                        normal: {
                            color: '#6F78CC'
                        }
                    },
                    label: dataStyle,
                }, {
                    value: 20,
                    itemStyle: placeHolderStyle,
                },

            ]
        },


        //第二个图表
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['50%', '55%'],
            center: ['50%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: '#E1E8EE'


                        }
                    },

                }, {
                    value: 0,
                    itemStyle: placeHolderStyle,
                },

            ]
        },

        //上层环形配置
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['50%', '55%'],
            center: ['50%', '50%'],
            startAngle: 90,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: '#4897f6'
                        }
                    },
                    label: dataStyle,
                }, {
                    value: 70,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
         //第三个图表
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['50%', '55%'],
            center: ['80%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: '#E1E8EE'


                        }
                    },

                }, {
                    value: 0,
                    itemStyle: placeHolderStyle,
                },

            ]
        },

        //上层环形配置
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['50%', '55%'],
            center: ['80%', '50%'],
            startAngle: 90,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 55,
                    itemStyle: {
                        normal: {
                            color: 'rgba(32, 232, 36, 1)'
                        }
                    },
                    label: dataStyle,
                }, {
                    value: 45,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
    ]
};