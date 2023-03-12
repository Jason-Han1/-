var data_age = [{
        name: "22岁以下",
        value: "15"
    },
    {
        name: "22-30岁以上",
        value: "50"
    },
    {
        name: "31-48岁",
        value: "35"
    },
    {
        name: "48岁以上",
        value: "10"
    }
];

option = {
    backgroundColor: '#000',
    color: ['#b8038e', '#00dcff', '#0f7cfd', '#6d41ff'],
    series: [{
        name: '年龄比例',
        type: 'pie',
        z: 2,
        radius: ['45%', '60%'],
        center: ['50%', '50%'],
        data: data_age,
        hoverAnimation: false,
        labelLine: {
            normal: {
                length: 10,
                length2: 10,
                lineStyle: {
                    color: 'transparent'
                }
            }
        },
        label: {
            normal: {
                formatter: params => {
                    return (
                        '{name|' + params.name + '}\n{value|' + params.value + '%}'
                    );
                },
                rich: {
                    name: {
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: '400'
                    },
                    value: {
                        color: "#fff",
                        fontSize: 10,
                        padding: [2, 0],
                        fontWeight: '500',
                        align: 'center'
                    }
                }
            }
        }
    }, {
        name: '标题圆点',
        type: 'pie',
        z: 0,
        radius: ['69%', '69%'],
        center: ["50%", "50%"],
        labelLine: {
            normal: {
                length: 0,
                length2: 0,
                lineStyle: {
                    color: 'transparent'
                }
            }
        },
        label: {
            normal: {
                formatter: params => {
                    return '{cir|●}';
                },
                rich: {
                    cir: {
                        fontSize: 5,
                    }
                },
            }
        },
        data: data_age
    }, {
        name: '圆点',
        type: 'pie',
        z: 5,
        radius: '2%',
        center: ['50%', '50%'],
        data: [100],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                color: '#714d55'
            }
        },
        labelLine: {
            show: false
        },
        label: {
            show: false
        }
    }, {
        name: '背景4',
        type: 'pie',
        z: 4,
        radius: ['7.5%', '8%'],
        center: ['50%', '50%'],
        data: [100],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        labelLine: {
            show: false
        },
        label: {
            show: false
        }
    }, {
        name: '背景3',
        type: 'pie',
        z: 3,
        radius: ['0', '20%'],
        center: ['50%', '50%'],
        data: [100],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                color: '#27303d'
            }
        },
        labelLine: {
            show: false
        },
        label: {
            show: false
        }
    }, {
        name: '背景2',
        type: 'pie',
        z: 2,
        radius: ['0', '30%'],
        center: ['50%', '50%'],
        data: [100],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                color: '#0f1825'
            }
        },
        labelLine: {
            show: false
        },
        label: {
            show: false
        }
    }, {
        name: '背景1',
        type: 'pie',
        z: 1,
        radius: ['0', '45%'],
        center: ['50%', '50%'],
        data: [100],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                color: '#040e1d'
            }
        },
        labelLine: {
            show: false
        },
        label: {
            show: false
        }
    }, {
        name: '背景',
        type: 'pie',
        z: 0,
        radius: ['0', '70%'],
        center: ['50%', '50%'],
        data: [100],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                shadowBlur: 20,
                shadowColor: 'rgba(53,139,255,.5)',
                color: '#040e1d'
            }
        },
        labelLine: {
            show: false
        },
        label: {
            show: false
        }
    }, {
        name: "刻度1",
        type: 'gauge',
        z: 2,
        splitNumber: 20, //刻度数量
        min: 0,
        max: 100,
        radius: '33%', //图表尺寸
        center: ['50%', '50%'],
        startAngle: 90,
        endAngle: -269.9999,
        axisLine: {
            show: false,
            lineStyle: {
                width: 0,
                shadowBlur: 0,
                color: [
                    [1, '#0a394a']
                ]
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            length: 3,
            lineStyle: {
                color: 'auto',
            }
        },
        axisLabel: {
            show: false
        },
        detail: {
            show: 0,
        },
    }, {
        name: "刻度2",
        type: 'gauge',
        z: 2,
        splitNumber: 4, //刻度数量
        min: 0,
        max: 100,
        radius: '35%', //图表尺寸
        center: ['50%', '50%'],
        startAngle: 90,
        endAngle: -269.9999,
        axisLine: {
            show: false,
            lineStyle: {
                width: 0,
                shadowBlur: 0,
                color: [
                    [1, '#4d171c']
                ]
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            length: 10,
            lineStyle: {
                color: 'auto',
            }
        },
        axisLabel: {
            show: false
        },
        detail: {
            show: 0,
        },
    }]
}