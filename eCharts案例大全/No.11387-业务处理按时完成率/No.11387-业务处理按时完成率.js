option = {
    backgroundColor: "#031845",
    color: ['#22c2f0', '#28f19b', '#fcfa3c', '#f44061'],
    title: {
        text: '',
        //  subtext: 7789,
        textStyle: {
            color: '#f2f2f2',
            fontSize: 40,
            // align: 'center'
        },
        subtextStyle: {
            fontSize: 30,
            color: ['#ff9d19']
        },
        x: 'center',
        y: 'center',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        icon: 'circle',
        bottom: 20,
        x: 'center',
        textStyle: {
            color: '#fff'
        },
        data: ['业务处理按时完成率']
    },
    series: [{
            name: '业务处理按时完成率',
            type: 'pie',
            clockWise: false,
            radius: ["70%", "80%"],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    shadowBlur: 0,
                    shadowColor: '#203665'
                }
            },
            hoverAnimation: false,
            center: ['50%', '50%'],
            data: [{
                value: 75,
                label: {
                    normal: {
                        formatter: "{d}%",
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '40',
                            fontWeight: 'normal',
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#2c6cc4',
                        shadowColor: '#2c6cc4',
                        shadowBlur: 0
                    }
                }
            }, {
                value: 75,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: '#24375c'
                    },
                    emphasis: {
                        color: '#24375c'
                    }
                }
            }]
        },
        {
            name: "",
            type: "gauge",
            radius: "75%",
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 150,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 139,
                lineStyle: {
                    width: 4,
                    color: "#031845"
                }
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            detail: {
                show: false
            },
            data: [{
                value: 0,
                name: ""
            }]
        }, {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '60%'],
            silent: true,
            z: 0,
            // zlevel: 0,
            label: {
                normal: {
                    show:false
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 0,
                    length2: 100,
                    lineStyle: {
                        type: 'solid',
                        width: 2
                    }
                }
            },
            data: [{
                    value: 150,
                    name: ''
                }

            ]
        }
    ]
};