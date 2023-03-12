option = {
    backgroundColor: '#1f1e26',
    title: [{
        text: '70',
        subtext: 'kw/h',
        x: '35%',
        y: '44%',
        textAlign: 'center',
        textStyle: {
            fontSize: 24,
            fontWeight: 800,
            color: '#e8f7ff',
            textAlign: 'center',
        },
    }],
    polar: {
        // radius: ['40%', '35%'],
        // center: ['35%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
        startAngle: 0,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    series: [
        {
            type: 'pie',
            radius: ['30%', '29%'],
            center: ['35%', '50%'],
            data: [{
                    hoverOffset: 1,
                    value: 100,
                    name: '',
                    itemStyle: {
                        color: 'rgba(3,140,197,0.8)',
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
                    value: 0,
                    hoverAnimation: false,
                    itemStyle: {
                        color: '#3c3a48',
                    },
                }
            ]
        },
       
        //最里圈
        // {
        //     type: 'pie',
        //     radius: ['20%', '19%'],
        //     center: ['35%', '50%'],
        //     data: [{
        //             hoverOffset: 1,
        //             value: 0,
        //             name: '',
        //             itemStyle: {
        //                 color: '#30778e',
        //             },
        //             label: {
        //                 show: false
        //             },
        //             labelLine: {
        //                 normal: {
        //                     smooth: true,
        //                     lineStyle: {
        //                         width: 0
        //                     }
        //                 }
        //             },
        //             hoverAnimation: false,
        //         },
        //         {
        //             label: {
        //                 show: false
        //             },
        //             labelLine: {
        //                 normal: {
        //                     smooth: true,
        //                     lineStyle: {
        //                         width: 0
        //                     }
        //                 }
        //             },
        //             value: 100 - 75,
        //             hoverAnimation: false,
        //             itemStyle: {
        //                 color: '#3c3a48',
        //             },
        //         }
        //     ]
        // },
        //齿轮
        {
            name: "大环",
            type: 'gauge',
            splitNumber: 18,
            radius: '24%',
            center: ['35%', '50%'],
            startAngle: -35,
            endAngle: -269.9999,
            axisLine: {
                show: false,
                lineStyle: {
                    color: [
                        [0.2, '#1b3e55'],
                        [0.3,'#21779e'],
                        [0.4,'#2baade'],
                        [0.6,'#289aca'],
                        [0.7,'#2fc0f8'],
                        [0.8,'#1b9fff'],
                        [1, '#0175ff']
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
                    width: 5
                }
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            }
        },
        {
            name: "大环",
            type: 'gauge',
            splitNumber: 80,
            radius: '27%',
            center: ['35%', '50%'],
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
                show: false,
                lineStyle: {
                    color: [
                        [0, 'rgba(255,255,255,0.2)'],
                        [1, 'rgba(255,255,255,0.2)']
                    ]
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 4,
                lineStyle: {
                    color: 'auto',
                    width: 1.5
                }
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            }
        },


    ]
};