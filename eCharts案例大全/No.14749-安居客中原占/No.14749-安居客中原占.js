// 总和
var total1 = {
    name: '安居客中原占',
    value: '5%'
}
var total2 = {
    name: '搜房中原占',
    value: '10%'
}
var total3 = {
    name: '58中原占',
    value: '10%'
}
var total4 = {
    name: '新浪中原占',
    value: '10%'
}
var option = {
    backgroundColor:'#111',
    color: ['#6474c1', '#2cc185', '#f68d24', '#f8d347', '#e02c00'],
    title: [{
        text: total1.name,
        left: '25%',
        top: '23%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 14
        }
    }, {
        text: total1.value,
        left: '25%',
        top: '28%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 20
        }
    }, {
        text: total2.name,
        left: '75%',
        top: '23%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 14
        }
    }, {
        text: total2.value,
        left: '75%',
        top: '28%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 20
        }
    }, {
        text: total3.name,
        left: '25%',
        top: '73%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 14
        }
    }, {
        text: total3.value,
        left: '25%',
        top: '78%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 20
        }
    }, {
        text: total4.name,
        left: '75%',
        top: '73%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 14
        }
    }, {
        text: total4.value,
        left: '75%',
        top: '78%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 20
        }
    }],
    tooltip: {
        /*trigger: 'item',
        formatter: "{a} <br/>{b} : {c}"
        formatter: function(params) {
            //return params.seriesType
            //return params.name+':'+params.value
        }*/
    },
    grid: {
        left: '10%',
        right: '35%',
        top: '20%',
        bottom: '6%',
        containLabel: true
    },
    toolbox: {
        "show": false,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        "axisLine": {
            "show": false,
            lineStyle: {
                color: '#c0576d'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#ffd285'
            }
        },
        boundaryGap: true, //false时X轴从0开始

    },
    yAxis: {
        "axisLine": {
            "show": false,
            lineStyle: {
                color: '#c0576d'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#c0576d'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#ffd285'
            }
        },
        type: 'value'
    },
    series: [{
            type: 'pie',
            center: ['25%', '25%'],
            radius: ['25%', '40%'],
            name: '访问来源',
            startAngle: 120,
            tooltip: {
                trigger: 'item',
                formatter: "",
                backgroundColor: '#32437b'
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#ffd285',
                    },
                    formatter: ""
                }
            },
            labelLine: {
                normal: {

                    show: false

                }
            },
            data: [{
                value: 135,
                name: '百度访问',
                itemStyle: {
                    normal: {
                        color: '#6474c1'
                    }
                }
            }, {
                value: 70,
                name: '邮件营销',
                itemStyle: {
                    normal: {
                        color: '#2cc185'
                    }
                }
            }, {
                value: 94,
                name: '联盟广告',
                itemStyle: {
                    normal: {
                        color: '#f68d24'
                    }
                }
            }, {
                value: 55,
                name: '视频广告',
                itemStyle: {
                    normal: {
                        color: '#f8d347'
                    }
                }
            }, {
                value: 48,
                name: '搜索引擎',
                itemStyle: {
                    normal: {
                        color: '#e02c00'
                    }
                }
            }]
        }, {
            type: 'pie',
            center: ['75%', '25%'],
            radius: ['25%', '40%'],
            name: '访问来源',
            startAngle: 120,
            tooltip: {
                trigger: 'item',
                formatter: "",
                backgroundColor: '#32437b'
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#ffd285',
                    },
                    formatter: ""
                }
            },
            labelLine: {
                normal: {

                    show: false

                }
            },
            data: [{
                value: 35,
                name: '百度访问',
                itemStyle: {
                    normal: {
                        color: '#6474c1'
                    }
                }
            }, {
                value: 70,
                name: '邮件营销',
                itemStyle: {
                    normal: {
                        color: '#2cc185'
                    }
                }
            }, {
                value: 94,
                name: '联盟广告',
                itemStyle: {
                    normal: {
                        color: '#f68d24'
                    }
                }
            }, {
                value: 55,
                name: '视频广告',
                itemStyle: {
                    normal: {
                        color: '#f8d347'
                    }
                }
            }, {
                value: 48,
                name: '搜索引擎',
                itemStyle: {
                    normal: {
                        color: '#e02c00'
                    }
                }
            }]
        }, {
            type: 'pie',
            center: ['25%', '75%'],
            radius: ['25%', '40%'],
            name: '访问来源',
            startAngle: 120,
            tooltip: {
                trigger: 'item',
                formatter: "",
                backgroundColor: '#32437b'
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#ffd285',
                    },
                    formatter: ""
                }
            },
            labelLine: {
                normal: {

                    show: false

                }
            },
            data: [{
                value: 35,
                name: '百度访问',
                itemStyle: {
                    normal: {
                        color: '#6474c1'
                    }
                }
            }, {
                value: 70,
                name: '邮件营销',
                itemStyle: {
                    normal: {
                        color: '#2cc185'
                    }
                }
            }, {
                value: 94,
                name: '联盟广告',
                itemStyle: {
                    normal: {
                        color: '#f68d24'
                    }
                }
            }, {
                value: 55,
                name: '视频广告',
                itemStyle: {
                    normal: {
                        color: '#f8d347'
                    }
                }
            }, {
                value: 48,
                name: '搜索引擎',
                itemStyle: {
                    normal: {
                        color: '#e02c00'
                    }
                }
            }]
        }, {
            type: 'pie',
            center: ['75%', '75%'],
            radius: ['25%', '40%'],
            name: '访问来源',
            startAngle: 120,
            tooltip: {
                trigger: 'item',
                formatter: "",
                backgroundColor: '#32437b'
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#ffd285',
                    },
                    formatter: ""
                }
            },
            labelLine: {
                normal: {

                    show: false

                }
            },
            data: [{
                value: 35,
                name: '百度访问',
                itemStyle: {
                    normal: {
                        color: '#6474c1'
                    }
                }
            }, {
                value: 70,
                name: '邮件营销',
                itemStyle: {
                    normal: {
                        color: '#2cc185'
                    }
                }
            }, {
                value: 94,
                name: '联盟广告',
                itemStyle: {
                    normal: {
                        color: '#f68d24'
                    }
                }
            }, {
                value: 55,
                name: '视频广告',
                itemStyle: {
                    normal: {
                        color: '#f8d347'
                    }
                }
            }, {
                value: 48,
                name: '搜索引擎',
                itemStyle: {
                    normal: {
                        color: '#e02c00'
                    }
                }
            }]
        },



    ]
};