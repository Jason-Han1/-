option = {
    backgroundColor: '#000',
    title: {
        text: "进度条",

        textStyle: {
            color: '#fff',
            fontSize: 50,
            fontWeight: 'bold'
        },
        left: 'center',
        bottom: '42%',

        itemGap: 60,
    },
    tooltip: {
        show: false,
    },
    legend: {

    },
    series: [{
            name: '内圈',
            type: 'pie',
            hoverAnimation: false,
            tooltip: {

            },
            radius: [0, "38%"],
            color: ['#55a2f2', '#0065ba', '#35a2ff', '#12cbf6'],
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    color: '#fff',
                    formatter: function(params) {
                        return params.value
                    },
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 0,
                itemStyle: {
                    normal: {
                        color: "rgba(20,198,249,1)"
                    }
                }
            }, ]
        },


        {
            name: '数据',
            type: 'pie',
            startAngle: 315,
            radius: ['50%', '60%'],
            legendHoverLink: false,
            hoverAnimation: false,
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 25,
                    itemStyle: {
                        normal: {
                            color: "rgba(0,0,0,0)"
                        }
                    }
                },
                {
                    value: 25,
                    itemStyle: {
                        normal: {
                            color: "rgba(20,198,249,1)"
                        }
                    }

                },
                {
                    value: 50,
                    itemStyle: {
                        normal: {
                            color: "rgba(4,40,50,1)"
                        }
                    }
                },

            ]
        },

        {
            name: '外圈',
            type: 'pie',
            startAngle: 315,
            hoverAnimation: false,
            radius: ["68%", "69%"],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '10',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 25,
                    itemStyle: {
                        normal: {
                            color: "rgba(0,0,0,0)"
                        }
                    }
                },
                {
                    value: 75,
                    itemStyle: {
                        normal: {
                            color: "rgba(20,198,249,1)"
                        }
                    }
                },
            ]
        }
    ]
};