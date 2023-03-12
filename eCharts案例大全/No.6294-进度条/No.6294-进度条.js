var value = 83;
var placeHolderStyle = {
    normal: {
        color: 'rgba(124,228,245,0.2)',
    },
};
option = {
    // backgroundColor: '000',
    title: {
        text: `${value}分`,
        
        left: 'center',
        top: 'center', //top待调整
        textStyle: {
            color: '#fff',
            fontSize: 80,
            fontFamily: 'DINAlternate-Bold',
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 35,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -4 //主副标题间距
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        }
        // data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: [
        // 内圆
        {
            type: 'pie',
            radius: ['0', '50%'],
            center: ['50%', '50%'],
            z: 0,
            itemStyle: {
                normal: {
                    color: 'rgba(0,150,255,0.4)',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
            },
            label: {
                normal: {
                    position: "center",

                }
            },
            data: [100],
        },
        // 进度圈
        // {
        //     type: 'pie',
        //     clockWise: true,
        //     radius: ["60%", "51%"],
        //     data: [{
        //             value: value,
        //             itemStyle: {
        //                 normal: {
        //                     borderWidth: 10,
        //                     borderColor: '#00C6FF',
        //                     color: '#00C6FF',
        //                     label: {
        //                         show: false
        //                     },
        //                     labelLine: {
        //                         show: false
        //                     },
        //                 },
        //             }
        //         },
        //         {
        //             name: 'gap',
        //             value: 100 - value,
        //             itemStyle: {
        //                 normal: {
        //                     label: {
        //                         show: false
        //                     },
        //                     labelLine: {
        //                         show: false
        //                     },
        //                     color: 'rgba(0, 0, 0, 0)',
        //                     borderColor: 'rgba(0, 0, 0, 0)',
        //                     borderWidth: 0,
        //                 }
        //             },
        //         }
        //     ]
        // },
       {
            name: '销量3',
            type: 'pie',
             hoverAnimation: false, //鼠标移入变大
            clockWise: false,
            radius: ["60%", "50%"],
            itemStyle: {
                 normal: {
                    color: '#4cabfe',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            data: [ {
                    name: 'gap',
                    value: 100 - value,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0,
                        }
                    },},
                    {
                    value:value,
                    name: 'invisible',
                    itemStyle: {color: '#00C6FF'}
                },
                 

            ],

        },
        // 刻度圈
        {
            "type": "pie",
            "radius": ["0%", "73%"],
            "center": ["50%", "50%"],
            "avoidLabelOverlap": false,
            hoverAnimation: false,
            "itemStyle": {
                "normal": {
                    "color": {
                        "type": "linear",
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "colorStops": [{
                            "offset": 0.05,
                            "color": "rgba(32,36,107, 0.2)"
                        }, {
                            "offset": 0.5,
                            "color": "rgba(32,36,107,0.3)"
                        }, {
                            "offset": 0.95,
                            "color": "rgba(32,36,107, 0.2)"
                        }]
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 3235
            }]
        },
       
    ]
};