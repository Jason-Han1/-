let angle = 0; //角度，用来做简单的动画效果的
            let value = 12;
option = {
    backgroundColor:'#000',
                title: {
                    text: value + "%",
                    x: "center",
                    y: "center",
                    textStyle: {
                        fontSize: 24,
                        color: "#FF4953"
                    }
                },
                series: [
                    {
                        name: "内线",
                        type: "custom",
                        coordinateSystem: "none",
                        renderItem: function(params, api) {
                            return {
                                type: "arc",
                                shape: {
                                    cx: api.getWidth() / 2,
                                    cy: api.getHeight() / 2,
                                    r:
                                        Math.min(
                                            api.getWidth(),
                                            api.getHeight()
                                        ) / 2.3,
                                    startAngle: ((0 + angle) * Math.PI) / 180,
                                    endAngle: ((90 + angle) * Math.PI) / 180
                                },
                                style: {
                                    stroke: "#FF4953",
                                    fill: "transparent",
                                    lineWidth: 1.5
                                },
                                silent: true
                            };
                        },
                        data: [0]
                    },
                    {
                        name: "内线",
                        type: "custom",
                        coordinateSystem: "none",
                        renderItem: function(params, api) {
                            return {
                                type: "arc",
                                shape: {
                                    cx: api.getWidth() / 2,
                                    cy: api.getHeight() / 2,
                                    r:
                                        Math.min(
                                            api.getWidth(),
                                            api.getHeight()
                                        ) / 2.3,
                                    startAngle: ((180 + angle) * Math.PI) / 180,
                                    endAngle: ((270 + angle) * Math.PI) / 180
                                },
                                style: {
                                    stroke: "#FF4953",
                                    fill: "transparent",
                                    lineWidth: 1.5
                                },
                                silent: true
                            };
                        },
                        data: [0]
                    },
                    {
                        name: "外线",
                        type: "custom",
                        coordinateSystem: "none",
                        renderItem: function(params, api) {
                            return {
                                type: "arc",
                                shape: {
                                    cx: api.getWidth() / 2,
                                    cy: api.getHeight() / 2,
                                    r:
                                        Math.min(
                                            api.getWidth(),
                                            api.getHeight()
                                        ) / 2.1,
                                    startAngle:
                                        ((270 + -angle) * Math.PI) / 180,
                                    endAngle: ((40 + -angle) * Math.PI) / 180
                                },
                                style: {
                                    stroke: "#FF4953",
                                    fill: "transparent",
                                    lineWidth: 1.5
                                },
                                silent: true
                            };
                        },
                        data: [0]
                    },
                    {
                        name: "外线",
                        type: "custom",
                        coordinateSystem: "none",
                        renderItem: function(params, api) {
                            return {
                                type: "arc",
                                shape: {
                                    cx: api.getWidth() / 2,
                                    cy: api.getHeight() / 2,
                                    r:
                                        Math.min(
                                            api.getWidth(),
                                            api.getHeight()
                                        ) / 2.1,
                                    startAngle: ((90 + -angle) * Math.PI) / 180,
                                    endAngle: ((220 + -angle) * Math.PI) / 180
                                },
                                style: {
                                    stroke: "#FF4953",
                                    fill: "transparent",
                                    lineWidth: 1.5
                                },
                                silent: true
                            };
                        },
                        data: [0]
                    },
                    {
                        name: "线头点",
                        type: "custom",
                        coordinateSystem: "none",
                        renderItem: function(params, api) {
                            let x0 = api.getWidth() / 2;
                            let y0 = api.getHeight() / 2;
                            let r =
                                Math.min(api.getWidth(), api.getHeight()) / 2.1;
                            let point = getCirlPoint(x0, y0, r, 90 + -angle);
                            return {
                                type: "circle",
                                shape: {
                                    cx: point.x,
                                    cy: point.y,
                                    r: 5
                                },
                                style: {
                                    stroke: "#FF4953",
                                    fill: "#FF4953"
                                },
                                silent: true
                            };
                        },
                        data: [0]
                    },
                    {
                        name: "线头点",
                        type: "custom",
                        coordinateSystem: "none",
                        renderItem: function(params, api) {
                            let x0 = api.getWidth() / 2;
                            let y0 = api.getHeight() / 2;
                            let r =
                                Math.min(api.getWidth(), api.getHeight()) / 2.1;
                            let point = getCirlPoint(x0, y0, r, 270 + -angle);
                            return {
                                type: "circle",
                                shape: {
                                    cx: point.x,
                                    cy: point.y,
                                    r: 5
                                },
                                style: {
                                    stroke: "#FF4953", //绿
                                    fill: "#FF4953"
                                },
                                silent: true
                            };
                        },
                        data: [0]
                    },
                    {
                        name: "当月任务故障率",
                        type: "pie",
                        radius: ["80%", "60%"],
                        silent: true,
                        clockwise: true,
                        startAngle: 90,
                        z: 0,
                        zlevel: 0,
                        label: {
                            normal: {
                                position: "center"
                            }
                        },
                        data: [
                            {
                                value: value,
                                name: "",
                                itemStyle: {
                                    normal: {
                                        color: "#FF4953"
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
                                        color: "#FAC1D0"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        name: "",
                        type: "gauge",
                        radius: "80%",
                        center: ["50%", "50%"],
                        startAngle: 0,
                        endAngle: 359.9,
                        splitNumber: 8,
                        hoverAnimation: true,
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            length: "26%",
                            lineStyle: {
                                width: 3,
                                color: "#061740"
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
                        data: [
                            {
                                value: 0,
                                name: ""
                            }
                        ]
                    }
                ]
            };
            
            function getCirlPoint(x0, y0, r, angle) {
                let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
                let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
                return {
                    x: x1,
                    y: y1
                };
            }
            function draw() {
                angle = angle + 3;
                myChart.setOption(option);
            }
            setInterval(function() {
                draw();
            }, 100);    