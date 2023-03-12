var value = 80
var titleText = '总数'
option = {
    backgroundColor: '#010d13',
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    title: [{
            text: titleText,
            x: 'center',
            y: 'center',
            top: '46%',
            textStyle: {
                color: '#FFFFFF',
                fontSize: 25,
                fontWeight: '400'
            },
            subtext: "1068",
            subtextStyle: {
                color: '#FFFFFF',
                fontSize: 23,
                fontWeight: '400'
            }
        },
        {
            textAlign: "center",
            text: "居住类",
            x: '15.5%',
            y: 'center',
            top: '46%',
            textStyle: {
                color: '#FFFFFF',
                fontSize: 25,
                fontWeight: '400'
            },
            subtext: "1068",
            subtextStyle: {
                color: '#FFFFFF',
                fontSize: 23,
                fontWeight: '400'
            }
        }
    ],
    series: [{
            name: 'a',
            type: 'pie',
            startAngle: 180,
            radius: [0, 95],
            center: ['50%', '50%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                value: 100,
                name: 'A',
                itemStyle: {
                    normal: {
                        color: "#1485bf"
                    }
                }
            }]
        },
        {
            name: 'a',
            type: 'pie',
            startAngle: 180,
            radius: [115, 118],
            center: ['50%', '50%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                value: 100,
                name: 'A',
                itemStyle: {
                    normal: {
                        color: "#73d2f1"
                    }
                }
            }]
        },
        {
            name: 'b',
            type: 'pie',
            startAngle: 180,
            center: ["16%", "50%"],
            radius: [0, 95],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                value: 100,
                name: 'A',
                itemStyle: {
                    normal: {
                        color: "#1485bf"
                    }
                }
            }]
        },
        {
            name: 'b',
            type: 'pie',
            startAngle: 180,
            radius: [115, 118],
            center: ["16%", "50%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            silent: true,
            data: [{

                value: 100,
                name: 'A',
                itemStyle: {
                    normal: {
                        color: "#73d2f1"
                    }
                }
            }]
        },
        {
            name: 'b',
            type: 'pie',
            startAngle: 90,
            radius: [110, 123],
            center: ["16%", "50%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            silent: true,
            data: [{
                    value: 90,
                    name: 'A',
                    itemStyle: {
                        normal: {
                            color: "5cdaec"
                        }
                    }
                },
                {
                    value: 10,
                    name: 'A',
                    itemStyle: {
                        normal: {
                            color: 'rgba(0, 0, 0, 0)',
                        }
                    }
                }
            ]
        }
    ]
}