
 var labelData = [];
 for (var i = 0; i < 30; ++i) {
     labelData.push({
         value: 1,
         name: i,
         itemStyle: {
             normal: {
                 color: "#ffffff1a"
             }
         }
     });
 }
 for (var i = 0; i < labelData.length; ++i) {
     if (labelData[i].name < 25) {
         labelData[i].itemStyle = {
             normal: {
                 color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(251, 200, 79, 1)'},
                        {offset: 1, color: 'yellow'}
                    ]
                )
             },
             
         }
     }
 }
  var labelData1 = [];
 for (var i = 0; i < 40; ++i) {
     labelData1.push({
         value: 1,
         name: i,
         itemStyle: {
             normal: {
                 color: "#ffffff1a"
             }
         }
     });
 }
 for (var i = 0; i < labelData1.length; ++i) {
     if (labelData1[i].name < 40) {
         labelData1[i].itemStyle = {
             normal: {
                 color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#eee'},
                        {offset: 1, color: '#fff'}
                    ]
                )
             },
             
         }
     }
 }
var num1 = 75;
option = {
    backgroundColor: '#f2f2f2',
    title: [
    {
        text: '75%',
        x: '29%',
        y: '20%',
        textAlign: 'center',
        textStyle: {
            fontSize: '50',
            fontWeight: '500',
            color: '#828282',
        },
        subtextStyle: {
            color: '#666',
            fontSize: 16
        },
    },
    {
        text: '75%',
        x: '69%',
        y: '20%',
        textAlign: 'center',
        textStyle: {
            fontSize: '50',
            fontWeight: '500',
            color: '#828282',
        },
        subtextStyle: {
            color: '#666',
            fontSize: 16
        },
    },
    {
        text: '75%',
        x: '69%',
        y: '71%',
        textAlign: 'center',
        textStyle: {
            fontSize: '50',
            fontWeight: '500',
            color: '#828282',
        },
        subtextStyle: {
            color: '#666',
            fontSize: 16
        },
    },
    {
        text: '75%',
        x: '29%',
        y: '71%',
        textAlign: 'center',
        textStyle: {
            fontSize: '50',
            fontWeight: '500',
            color: '#828282',
        },
        subtextStyle: {
            color: '#666',
            fontSize: 16
        },
    },
    ],
    series: [
        {
            type: 'pie',
            z:2,
            radius: ['38%', '43%'],
            center: ['30%', '25%'],
            startAngle: -80,
            data: [{
                    hoverOffset: 1,
                    value: num1,
                    name: '',
                    itemStyle: {
                        shadowColor: 'rgba(0, 0, 0, .5)',
                    shadowBlur: 4,
                    shadowOffsetY: 0,
                    shadowOffsetX: 0,
                        color: 'rgba(251, 200, 79, 1)',
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    value: 100 - num1,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(251, 200, 79, 0)',
                    },
                }
            ]
        },
        {
         hoverAnimation: false,
         type: 'pie',
         data: labelData1,
         radius: ['34%', '47%'],
         center: ['30%', '25%'],
         startAngle: -80,
         zlevel: -1,
         itemStyle: {
             normal: {
                 shadowBlur: 5,
                 shadowColor: 'rgba(0, 0,0, .3)',
             }
         },
         label: {
             normal: {
                 position: 'inside',
                 show: false,
             }
         }
     },
        
        {
            type: 'pie',
            z:2,
            radius: ['42%', '47%'],
            center: ['70%', '25%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num1,
                hoverAnimation: false,
                itemStyle: {
                   color: new echarts.graphic.LinearGradient(
                    .1, .1, .99, .1,
                    [{
                            offset: 0,
                            color: '#e6e6e6'
                        },
                        {
                            offset: 1,
                            color: '#e6e6e6'
                        }
                    ]
                ),
                },
            }]
        },
        {
         hoverAnimation: false,
         type: 'pie',
         data: labelData,
         radius: ['0%', '42%'],
            center: ['70%', '25%'],
         startAngle: -80,
         zlevel: -2,
         itemStyle: {
             normal: {
                 shadowBlur: 5,
                 shadowColor: 'rgba(0, 0,0, .3)',
             }
         },
         label: {
             normal: {
                 position: 'inside',
                 show: false,
             }
         }
     },
        {
            type: 'pie',
            z:2,
            radius: ['0%', '35%'],
            center: ['70%', '25%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num1,
                hoverAnimation: false,
                itemStyle: {
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 15,
                    shadowOffsetY: 0,
                    shadowOffsetX: 0,
                    color: new echarts.graphic.LinearGradient(
                    .1, .1, .99, .1,
                    [{
                            offset: 0,
                            color: '#e9e9e9'
                        },
                        {
                            offset: 1,
                            color: '#e8e8e8'
                        }
                    ]
                ),
                },
            }]
        },
        {
            type: 'pie',
            z:3,
            radius: ['0%', '33.5%'],
            center: ['70%', '25%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num1,
                hoverAnimation: false,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                    .1, .1, .99, .1,
                    [{
                            offset: 0,
                            color: '#dedede'
                        },
                        {
                            offset: 1,
                            color: '#fff'
                        }
                    ]
                ),
                },
            }]
        },
        {
            type: 'pie',
            z:4,
            radius: ['0%', '27%'],
            center: ['70%', '25%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num1,
                hoverAnimation: false,
                itemStyle: {
                    shadowColor: 'rgba(0, 0, 0, .2)',
                    shadowBlur: 1,
                    shadowOffsetY: 1,
                    shadowOffsetX: 1,
                    color: new echarts.graphic.LinearGradient(
                    .1, .1, .99, .1,
                    [{
                            offset: 0,
                            color: '#e6e6e6'
                        },
                        {
                            offset: 1,
                            color: '#e2e2e2'
                        }
                    ]
                ),
                },
            }]
        },
        
        {
         hoverAnimation: false,
         type: 'pie',
         data: labelData,
         radius: ['34%', '41%'],
         center: ['30%', '75%'],
         startAngle: -80,
         zlevel: 2,
         itemStyle: {
             normal: {
                 shadowBlur: 5,
                 shadowColor: 'rgba(0, 0,0, .3)',
             }
         },
         label: {
             normal: {
                 position: 'inside',
                 show: false,
             }
         }
     },
        {
            type: 'pie',
            z:13,
            radius: ['35%', '40%'],
            center: ['30%', '75%'],
            startAngle: -80,
            data: [{
                    hoverOffset: 1,
                    value: num1,
                    name: '',
                    itemStyle: {
                    shadowColor: 'rgba(255, 255,255, 1)',
                    shadowBlur: 1,
                    shadowOffsetY: 0,
                    shadowOffsetX: 0,
                        color: 'rgba(251, 200, 79, 1)',
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    value: 100 - num1,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(251, 200, 79, 0)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            z:2,
            radius: ['0%', '47%'],
            center: ['30%', '75%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num1,
                hoverAnimation: false,
                itemStyle: {
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 15,
                    shadowOffsetY: 0,
                    shadowOffsetX: 0,
                    color: new echarts.graphic.LinearGradient(
                    .1, .1, .99, .1,
                    [{
                            offset: 0,
                            color: '#e9e9e9'
                        },
                        {
                            offset: 1,
                            color: '#e8e8e8'
                        }
                    ]
                ),
                },
            }]
        },
        {
            type: 'pie',
            z:3,
            radius: ['0%', '45%'],
            center: ['30%', '75%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num1,
                hoverAnimation: false,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                    .1, .1, .99, .1,
                    [{
                            offset: 0,
                            color: '#dedede'
                        },
                        {
                            offset: 1,
                            color: '#fff'
                        }
                    ]
                ),
                },
            }]
        },
        {
            type: 'pie',
            z:4,
            radius: ['0%', '30%'],
            center: ['30%', '75%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num1,
                hoverAnimation: false,
                itemStyle: {
                    shadowColor: 'rgba(0, 0, 0, .2)',
                    shadowBlur: 1,
                    shadowOffsetY: 1,
                    shadowOffsetX: 1,
                    color: new echarts.graphic.LinearGradient(
                    .1, .1, .99, .1,
                    [{
                            offset: 0,
                            color: '#e6e6e6'
                        },
                        {
                            offset: 1,
                            color: '#e2e2e2'
                        }
                    ]
                ),
                },
            }]
        },
        
        {
         hoverAnimation: false,
         type: 'pie',
         data: labelData,
         radius: ['0%', '47%'],
         center: ['70%', '75%'],
         startAngle: -80,
         zlevel: -2,
         itemStyle: {
             normal: {
                 shadowBlur: 5,
                 shadowColor: 'rgba(0, 0,0, .3)',
             }
         },
         label: {
             normal: {
                 position: 'inside',
                 show: false,
             }
         }
     },
        {
            type: 'pie',
            z:2,
            radius: ['0%', '40%'],
            center: ['70%', '75%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num1,
                hoverAnimation: false,
                itemStyle: {
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 15,
                    shadowOffsetY: 0,
                    shadowOffsetX: 0,
                    color: new echarts.graphic.LinearGradient(
                    .1, .1, .99, .1,
                    [{
                            offset: 0,
                            color: '#e9e9e9'
                        },
                        {
                            offset: 1,
                            color: '#e8e8e8'
                        }
                    ]
                ),
                },
            }]
        },
        {
            type: 'pie',
            z:3,
            radius: ['0%', '40%'],
            center: ['70%', '75%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num1,
                hoverAnimation: false,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                    .1, .1, .99, .1,
                    [{
                            offset: 0,
                            color: '#dedede'
                        },
                        {
                            offset: 1,
                            color: '#fff'
                        }
                    ]
                ),
                },
            }]
        },
        {
            type: 'pie',
            z:4,
            radius: ['0%', '33%'],
            center: ['70%', '75%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num1,
                hoverAnimation: false,
                itemStyle: {
                    shadowColor: 'rgba(0, 0, 0, .2)',
                    shadowBlur: 1,
                    shadowOffsetY: 1,
                    shadowOffsetX: 1,
                    color: new echarts.graphic.LinearGradient(
                    .1, .1, .99, .1,
                    [{
                            offset: 0,
                            color: '#e6e6e6'
                        },
                        {
                            offset: 1,
                            color: '#e2e2e2'
                        }
                    ]
                ),
                },
            }]
        },
    ]
};