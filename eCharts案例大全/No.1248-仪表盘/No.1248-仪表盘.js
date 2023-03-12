var value =  82.5;
   option = {
       backgroundColor:'rgb(4,31,62)',
        title: {
            text: '{a|' + value + '}{c|%}',
            x: 'center',
            y: 'center',
            textStyle: {
                rich: {
                    a: {
                        fontSize: 30,
                        color: '#fff'
                    },

                    c: {
                        fontSize: 30,
                        color: '#ffffff',
                    }
                }
            }
        },
        legend: {
            show: false,
        },
        series: [
            {
                name: "外层细线",
                z: 0,
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.75,
                            startAngle: 0,
                            endAngle: 360
                        },
                        style: {
                            stroke: 'rgb(105,206,195)',
                            fill: "transparent",
                            lineWidth: 0.5
                        },
                        silent: true
                    };
                },
                data: [0]
            },
            {
                name: name,
                type: 'pie',
                radius: ['65%', '75%'],
                silent: true,
                clockwise: false,
                startAngle: 90,
                z: 1,
                zlevel: 0,
                label: {
                    normal: {
                        position: "center",

                    }
                },
                data: [{
                        value: value,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'rgb(105,206,195)',
                            }
                        }
                    },
                    {
                        value: 100 - value,
                        name: "",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "rgba(0,0,0,0)"
                            }
                        }
                    }
                ]
            },
            {
                name: "刻度间隔",
                z: 2,
                type: "gauge",
                radius: '83%',
                center: ['50%', '50%'],
                startAngle: 0,
                endAngle: 359.9,
                splitNumber: 50,
                hoverAnimation: true,
                axisTick: {
                    show: true,
                    splitNumber: 1,
                    length: '14%',
                    lineStyle: {
                        width: 2,
                        color: 'rgb(4,31,62)'
                    }
                },
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        opacity: 0,
                    }
                },
                detail: {
                    show: false
                },
                data: [0]
            }
        ]
    }

