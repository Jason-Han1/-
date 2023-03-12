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
            fontSize: '40',
            fontWeight: 'normal',
            color: '#34374E'
        }
    }
};


option = {
    backgroundColor: '#fff',
    title: [{
        text: '正面评论',
        left: '29.8%',
        top: '60%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '16',
            color: '#AAAFC8',
            textAlign: 'center',
        },
    }, {
        text: '负面评论',
        left: '70%',
        top: '60%',
        textAlign: 'center',
        textStyle: {
            color: '#AAAFC8',
            fontWeight: 'normal',
            fontSize: '16',
            textAlign: 'center',
        },
    }],

    //第一个图表
    series: [{
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '30%'],
            center: ['30%', '50%'],
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
                    value: 35,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        //上层环形配置
        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '30%'],
            center: ['30%', '50%'],
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
                    value: 75,
                    itemStyle: {
                        normal: {
                            color: '#6F78CC'
                        }
                    },
                    label: dataStyle,
                }, {
                    value: 35,
                    itemStyle: placeHolderStyle,
                },

            ]
        },


        //第二个图表
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '30%'],
            center: ['70%', '50%'],
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
                    value: 35,
                    itemStyle: placeHolderStyle,
                },

            ]
        },

        //上层环形配置
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '30%'],
            center: ['70%', '50%'],
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
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: '#4897f6'
                        }
                    },
                    label: dataStyle,
                }, {
                    value: 55,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
    ]
};