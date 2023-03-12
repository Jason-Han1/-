var v1dom = document.getElementById("chart-panel");
var v1 = echarts.init(v1dom);
v1.resize();
dataBJ = [

    [134, 96, 165, 41, 55],

];
indicatorData = [{
    name: '响应时间',
    max: 300
}, {
    name: '消耗流量',
    max: 300
}, {
    name: '崩溃率',
    max: 300
}];

option = {
    backgroundColor: '#fff',
    title: [{
            text: '唐家三少',
            x: '30',
            y: '50',
            textStyle: {
                color: "rgb(51,51,51)",
                fontSize: 16
            },
        },
        {
            text: '绝世唐门',
            subtext: '2018.01-2018-02',
            x: 'center',
            y: 'center',
            textStyle: {
                color: "rgb(51,51,51)",
                fontSize: 25
            },
            subtextStyle: {
                color: "rgb(51,51,51)",
                fontSize: 16
            },
            zlevel: 24
        }
    ],
    tooltip: {},
    radar: {
        center: ['50%', '50%'],
        indicator: indicatorData,
        radius: '65%',
        splitNumber: 1,
        shape: 'circle',
        name: {
            textStyle: {
                color: 'rgb(51,51,51)',
                fontSize: 23,
            },
            padding: [208, 98, 100, 100]
        },
        splitLine: {
            lineStyle: {
                color: 'rgb(90,177,239)',
                type: 'dotted',
                width: 2
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgb(90,177,239)',
                type: 'dotted'
            }
        },
        zlevel: 23
    },
    series: [

        {
            type: 'pie',
            radius: ['75%', '82%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 1000,
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(30,177,239,0.6)'
                    }
                }
            }]
        },

        {
            name: '雷达线ALL',
            type: 'radar',
            lineStyle: {
                normal: {
                    type: 'dotted',
                    color: 'rgb(90,177,239)',
                    width: 2,

                }
            },
            data: [
                [300, 300, 300]
            ],

            label: {
                normal: {
                    show: false
                }
            },

            itemStyle: {
                normal: {
                    opacity: 0

                }
            },
            areaStyle: {
                normal: {
                    opacity: 0
                }
            }
        },

        {
            name: '雷达线3',
            type: 'radar',
            lineStyle: {
                normal: {
                    type: 'dotted',
                    color: 'rgb(90,177,239)',
                    width: 1,

                }
            },
            data: [{
                name: 'A',
                value: [200, 200, 200],
                symbol: 'circle',
                symbolSize: 1,
                label: {
                    normal: {
                        show: false
                    }
                },
            }],

            itemStyle: {
                normal: {
                    opacity: 0

                }
            },
            areaStyle: {
                normal: {
                    color: 'rgb(90,177,239)',
                    opacity: 0
                }
            }
        },

        {
            name: '雷达线4',
            type: 'radar',
            silent: true,
            lineStyle: {
                normal: {
                    type: 'dotted',
                    color: 'rgb(90,177,239)',
                    width: 1,
                    opacity: 0.4,

                }
            },
            data: [{
                name: 'B',
                value: [100, 100, 100],
                symbol: 'circle',
                symbolSize: 1,
                label: {
                    normal: {
                        show: false
                    }
                }
            }],

            itemStyle: {
                normal: {
                    opacity: 0

                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    opacity: 0
                }
            }
        },


        {
            name: '数据显示',
            type: 'radar',
            lineStyle: {
                normal: {
                    width: 0.1,
                    opacity: 0.1
                }
            },
            data: dataBJ,
            symbolSize: 0,
            itemStyle: {
                normal: {
                    borderColor: 'rgb(90,177,239)',
                    borderWidth: 4,
                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(90,177,239,0.8)',
                    opacity: 0.85
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            zlevel: 21
        },

    ]
};
v1.setOption(option);