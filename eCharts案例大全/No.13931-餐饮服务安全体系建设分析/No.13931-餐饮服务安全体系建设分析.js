option = {
    backgroundColor: "#fff",
    color: ['#ffd285', '#ff733f', '#ec4863'],
    grid: {
        left: '1%',
        right: '35%',
        top: '16%',
        bottom: '6%',
        containLabel: true
    },
     tooltip: {
        trigger: 'item',
        formatter: "计算公式：占比率=（{b}企业数/有效企业数)<br/>*100% <br/>企业数：{c}<br/>"
    },
    toolbox: {
        "show": false,
        feature: {
            saveAsImage: {}
        }
    },
   
    series: [
    {
        type: 'pie',
        center: ['25%', '25%'],
        radius: ['25%', '30%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [ {
            value: 180,
            name: '优秀',
            itemStyle: {
                normal: {
                    color: '#f1ca11'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#f1ca11',
                        fontSize: 20

                    }
                    
                }
            }
        },{
            value: 335,
            name: '良好、一般',
            itemStyle: {
                normal: {
                    color: '#999'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#f1ca11',
                    },
                    formatter: '\n优秀'
                }
            }
        },]
    },
    {
        type: 'pie',
        center: ['75%', '25%'],
        radius: ['25%', '30%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 100,
            name: '明厨亮灶实施',
            itemStyle: {
                normal: {
                    color: '#05c83c'


                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#05c83c',
                        fontSize: 20
                    }
                }
            }
        },{
            value: 435,
            name: '明厨亮灶未实施',
            itemStyle: {
                normal: {
                    color: '#999'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#05c83c',
                    },
                    formatter: '\n明厨亮灶'
                }
            }
        }, ]
    }, {
        type: 'pie',
        center: ['25%', '75%'],
        radius: ['25%', '30%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [ {
            value: 100,
            name: '色标管理未开展',
            itemStyle: {
                normal: {
                    color: '#0fcff5'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#0fcff5',
                        fontSize: 20

                    }
                   
                }
            }
        },{
            value: 435,
            name: '色标管理开展',
            itemStyle: {
                normal: {
                    color: '#999'
                }
            },
            label: {
                normal: {
                     textStyle: {
                        color: '#0fcff5',
                    },
                    formatter: '\n色标管理'
                }
            }
        },]
    }]
}