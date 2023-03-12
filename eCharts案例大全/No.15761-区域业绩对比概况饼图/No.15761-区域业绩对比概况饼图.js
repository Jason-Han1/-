var data1 = [444.4, -22.2, 15.1];
var data2 = [244.4, 33.3, 15.2];
var data3 = [200.0, 44.4, 15.3];
var data4 = [111.1, -55.5, 15.4];

var Name = ['全国合计', '第一集群', '第二集群', '第三集群'];

percent1 = Math.abs(data1[1]) / 100;
percent2 = Math.abs(data2[1]) / 100;
percent3 = Math.abs(data3[1]) / 100;
percent4 = Math.abs(data4[1]) / 100;


function getData1() {
    var g = Math.round(255 - 255 * percent1),
        b = Math.round(255 - 255 * percent1);
    var mainColor = 'rgb(0,' + b + ',' + 255 + ')';
    var borderColor = 'rgb(0,' + Math.round(b - b * 0.1) + ',' + 255 + ')';
    return [{
        value: percent1,
        itemStyle: {
            normal: {
                color: mainColor,
                borderWidth: 1.5,
                borderColor: borderColor
            }
        }
    }, {
        value: 1 - percent1,
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        }
    }];
}

function getData2() {
    var g = Math.round(255 - 255 * percent2),
        b = Math.round(255 - 255 * percent2);
    var mainColor = 'rgb(0,' + b + ',' + 255 + ')';
    var borderColor = 'rgb(0,' + Math.round(b - b * 0.1) + ',' + 255 + ')';
    return [{
        value: percent2,
        itemStyle: {
            normal: {
                color: mainColor,
                borderWidth: 1.5,
                borderColor: borderColor
            }
        }
    }, {
        value: 1 - percent2,
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        }
    }];
}

function getData3() {
    var g = Math.round(255 - 255 * percent3),
        b = Math.round(255 - 255 * percent3);
    var mainColor = 'rgb(0,' + b + ',' + 255 + ')';
    var borderColor = 'rgb(0,' + Math.round(b - b * 0.1) + ',' + 255 + ')';
    return [{
        value: percent3,
        itemStyle: {
            normal: {
                color: mainColor,
                borderWidth: 1.5,
                borderColor: borderColor
            }
        }
    }, {
        value: 1 - percent3,
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        }
    }];
}

function getData4() {
    var g = Math.round(255 - 255 * percent4),
        b = Math.round(255 - 255 * percent4);
    var mainColor = 'rgb(0,' + b + ',' + 255 + ')';
    var borderColor = 'rgb(0,' + Math.round(b - b * 0.1) + ',' + 255 + ')';
    return [{
        value: percent4,
        itemStyle: {
            normal: {
                color: mainColor,
                borderWidth: 1.5,
                borderColor: borderColor
            }
        }
    }, {
        value: 1 - percent4,
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        }
    }];
}
///////////////////////////////////////////////////////////////////////
option = {
    backgroundColor: '#eee',
    graphic: {
        elements: []
    },

    series: [
        ///////////////////////////图1////////////////////////////////////////////
        {
            type: 'pie',
            radius: ['0%', '10%'],
            center: ['30%', '47%'],
            silent: true,
            label: {
                normal: {
                    show: false,
                }
            },
            data: [{
                name: Name[0],
                label: {
                    normal: {
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '24',
                            fontWeight: 'bold',
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'transparent',
                    }
                }
            }],
            animation: false


        }, {
            type: 'pie',
            radius: ['29.3%', '35.7%'],
            center: ['30%', '25%'],
            silent: true,
            label: {
                normal: {
                    show: false,
                }
            },
            data: [{
                itemStyle: {
                    normal: {
                        color: 'rgba(300,300,300,1)',
                        shadowBlur: 10,
                        shadowColor: 'rgba(0,176,255,1)'
                    }
                }
            }],
            animation: false
        }, {
            name: 'chart1',
            type: 'pie',
            radius: ['30%', '35%'],
            center: ['30%', '25%'],
            label: {
                normal: {
                    show: false,
                }
            },
            data: getData1(),
            animationEasingUpdate: 'quarticOut',
            animationDurationUpdate: 2000
        }, {
            z: -10,
            type: 'pie',
            radius: ['0%', '28%'],
            silent: true,
            center: ['30%', '25%'],
            animation: false,
            clockwise: false,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: data1[0],
                name: data1[0] + '亿元',
                label: {
                    normal: {
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '24',
                            fontWeight: 'bold',
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(146,208,80,1)',
                        shadowBlur: 10,
                        shadowColor: 'rgba(300,300,300,1)'
                    }
                }
            }, {
                value: 0,
                name: '\n' + '全店比' + data1[1] + '%',
                label: {
                    normal: {
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold',
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(300,300,300,1)',
                        shadowBlur: 10,
                        shadowColor: 'rgba(300,300,300,1)'
                    }
                }
            }, {
                value: data1[0] - data1[0],
                name: '毛利率' + data1[2] + '%',
                label: {
                    normal: {
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold',
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(300,300,300,1)',
                        shadowBlur: 10,
                        shadowColor: 'rgba(300,300,300,1)'
                    }
                }

            }, ]
        },
        /////////////////////////////图2//////////////////////////////////////////

        {
            type: 'pie',
            radius: ['0%', '10%'],
            center: ['70%', '47%'],
            silent: true,
            label: {
                normal: {
                    show: false,
                }
            },
            data: [{
                name: Name[1],
                label: {
                    normal: {
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '24',
                            fontWeight: 'bold',
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'transparent',
                    }
                }
            }],
            animation: false


        }, {
            type: 'pie',
            radius: ['29.3%', '35.7%'],
            center: ['70%', '25%'],
            silent: true,
            label: {
                normal: {
                    show: false,
                }
            },
            data: [{
                itemStyle: {
                    normal: {
                        color: 'rgba(300,300,300,1)',
                        shadowBlur: 10,
                        shadowColor: 'rgba(0,176,255,1)'
                    }
                }
            }],
            animation: false
        }, {
            name: 'chart2',
            type: 'pie',
            radius: ['30%', '35%'],
            center: ['70%', '25%'],
            label: {
                normal: {
                    show: false,
                }
            },
            data: getData2(),
            animationEasingUpdate: 'quarticOut',
            animationDurationUpdate: 2000
        }, {
            z: -10,
            type: 'pie',
            radius: ['0%', '28%'],
            silent: true,
            center: ['70%', '25%'],
            animation: false,
            clockwise: false,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: data2[0],
                name: data2[0] + '亿元',
                label: {
                    normal: {
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '24',
                            fontWeight: 'bold',
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(146,208,80,1)',
                        shadowBlur: 10,
                        shadowColor: 'rgba(300,300,300,1)'
                    }
                }
            }, {
                value: 0,
                name: '\n' + '全店比' + data2[1] + '%',
                label: {
                    normal: {
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold',
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(300,300,300,1)',
                        shadowBlur: 10,
                        shadowColor: 'rgba(300,300,300,1)'
                    }
                }
            }, {
                value: data1[0] - data2[0],
                name: '毛利率' + data2[2] + '%',
                label: {
                    normal: {
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold',
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(300,300,300,1)',
                        shadowBlur: 10,
                        shadowColor: 'rgba(300,300,300,1)'
                    }
                }

            }, ]
        },
        //////////////////////////图3///////////////////////////////////////////////////
        {
            type: 'pie',
            radius: ['0%', '10%'],
            center: ['30%', '97%'],
            silent: true,
            label: {
                normal: {
                    show: false,
                }
            },
            data: [{
                name: Name[2],
                label: {
                    normal: {
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '24',
                            fontWeight: 'bold',
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'transparent',
                    }
                }
            }],
            animation: false


        }, {
            type: 'pie',
            radius: ['29.3%', '35.7%'],
            center: ['30%', '75%'],
            silent: true,
            label: {
                normal: {
                    show: false,
                }
            },
            data: [{
                itemStyle: {
                    normal: {
                        color: 'rgba(300,300,300,1)',
                        shadowBlur: 10,
                        shadowColor: 'rgba(0,176,255,1)'
                    }
                }
            }],
            animation: false
        }, {
            name: 'chart3',
            type: 'pie',
            radius: ['30%', '35%'],
            center: ['30%', '75%'],
            label: {
                normal: {
                    show: false,
                }
            },
            data: getData3(),
            animationEasingUpdate: 'quarticOut',
            animationDurationUpdate: 2000
        }, {
            z: -10,
            type: 'pie',
            radius: ['0%', '28%'],
            silent: true,
            center: ['30%', '75%'],
            animation: false,
            clockwise: false,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: data3[0],
                name: data3[0] + '亿元',
                label: {
                    normal: {
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '24',
                            fontWeight: 'bold',
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(146,208,80,1)',
                        shadowBlur: 10,
                        shadowColor: 'rgba(300,300,300,1)'
                    }
                }
            }, {
                value: 0,
                name: '\n' + '全店比' + data3[1] + '%',
                label: {
                    normal: {
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold',
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(300,300,300,1)',
                        shadowBlur: 10,
                        shadowColor: 'rgba(300,300,300,1)'
                    }
                }
            }, {
                value: data1[0] - data3[0],
                name: '毛利率' + data3[2] + '%',
                label: {
                    normal: {
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold',
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(300,300,300,1)',
                        shadowBlur: 10,
                        shadowColor: 'rgba(300,300,300,1)'
                    }
                }

            }, ]
        },
        /////////////////////////////图4///////////////////////////////////////////////
        {
            type: 'pie',
            radius: ['0%', '10%'],
            center: ['70%', '97%'],
            silent: true,
            label: {
                normal: {
                    show: false,
                }
            },
            data: [{
                name: Name[3],
                label: {
                    normal: {
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '24',
                            fontWeight: 'bold',
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'transparent',
                    }
                }
            }],
            animation: false


        }, {
            type: 'pie',
            radius: ['29.3%', '35.7%'],
            center: ['70%', '75%'],
            silent: true,
            label: {
                normal: {
                    show: false,
                }
            },
            data: [{
                itemStyle: {
                    normal: {
                        color: 'rgba(300,300,300,1)',
                        shadowBlur: 10,
                        shadowColor: 'rgba(0,176,255,1)'
                    }
                }
            }],
            animation: false
        }, {
            name: 'chart4',
            type: 'pie',
            radius: ['30%', '35%'],
            center: ['70%', '75%'],
            label: {
                normal: {
                    show: false,
                }
            },
            data: getData4(),
            animationEasingUpdate: 'quarticOut',
            animationDurationUpdate: 2000
        }, {
            z: -10,
            type: 'pie',
            radius: ['0%', '28%'],
            silent: true,
            center: ['70%', '75%'],
            animation: false,
            clockwise: false,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: data4[0],
                name: data4[0] + '亿元',
                label: {
                    normal: {
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '24',
                            fontWeight: 'bold',
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(146,208,80,1)',
                        shadowBlur: 10,
                        shadowColor: 'rgba(300,300,300,1)'
                    }
                }
            }, {
                value: 0,
                name: '\n' + '全店比' + data4[1] + '%',
                label: {
                    normal: {
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold',
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(300,300,300,1)',
                        shadowBlur: 10,
                        shadowColor: 'rgba(300,300,300,1)'
                    }
                }
            }, {
                value: data1[0] - data4[0],
                name: '毛利率' + data4[2] + '%',
                label: {
                    normal: {
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold',
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(300,300,300,1)',
                        shadowBlur: 10,
                        shadowColor: 'rgba(300,300,300,1)'
                    }
                }

            }, ]
        }
        //////////////////////////////////////////////////////////////////////////////

    ]
};
//////////////////////////////////////////////////////////////////////////////
setInterval(function() {
    var Arr = [0, Math.abs(data1[1]) / 100];
    var n = Math.floor(Math.random() * Arr.length + 1) - 1;
    percent1 = Arr[n];

    var Brr = [0, Math.abs(data2[1]) / 100];
    var m = Math.floor(Math.random() * Brr.length + 1) - 1;
    percent2 = Brr[m];

    var Crr = [0, Math.abs(data3[1]) / 100];
    var l = Math.floor(Math.random() * Crr.length + 1) - 1;
    percent3 = Crr[l];

    var Drr = [0, Math.abs(data4[1]) / 100];
    var k = Math.floor(Math.random() * Drr.length + 1) - 1;
    percent4 = Drr[k];

    myChart.setOption({
        series: [{
            name: 'chart1',
            data: getData1()
        }, {
            name: 'chart2',
            data: getData2()
        }, {
            name: 'chart3',
            data: getData3()
        }, {
            name: 'chart4',
            data: getData4()
        }]
    })
}, 3000);