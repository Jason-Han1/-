let value = 45;
let title = '操作指引';
let angle = 0; //角度，用来做简单的动画效果的
function getCirlPoint(x0, y0, r, angle) {
    let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
    let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
    return {
        x: x1,
        y: y1
    };
}
option = {
    backgroundColor: '#0E192D',
    title: {
        text: `${title}\n${value}%`,
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: 16,
            color: '#ffffff',
        }
    },
    series: [{
            name: "内线",
            type: "custom",
            coordinateSystem: "none",
            renderItem: function(params, api) {
                console.log(Math.min(
                    api.getWidth(),
                    api.getHeight()
                ) / 2.3)
                return {
                    type: "arc",
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(
                            api.getWidth(),
                            api.getHeight()
                        ) / 4.6,
                        startAngle: ((0 + angle) * Math.PI) / 180,
                        endAngle: ((90 + angle) * Math.PI) / 180
                    },
                    style: {
                        stroke: '#0ff',
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
                        r: Math.min(
                            api.getWidth(),
                            api.getHeight()
                        ) / 4.6,
                        startAngle: ((180 + angle) * Math.PI) / 180,
                        endAngle: ((270 + angle) * Math.PI) / 180
                    },
                    style: {
                        stroke: '#0ff',
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
                        r: Math.min(
                            api.getWidth(),
                            api.getHeight()
                        ) / 4.3,
                        startAngle: ((270 + -angle) * Math.PI) / 180,
                        endAngle: ((40 + -angle) * Math.PI) / 180
                    },
                    style: {
                        stroke: '#0ff',
                        fill: "transparent",
                        lineWidth: 1.5
                    },
                    silent: true
                };
            },
            data: [0]
        }, {
            name: "外线",
            type: "custom",
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: "arc",
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(
                            api.getWidth(),
                            api.getHeight()
                        ) / 4.3,
                        startAngle: ((90 + -angle) * Math.PI) / 180,
                        endAngle: ((220 + -angle) * Math.PI) / 180
                    },
                    style: {
                        stroke: '#0ff',
                        fill: "transparent",
                        lineWidth: 1.5
                    },
                    silent: true
                };
            },
            data: [0]
        },
        // {
        //     name: "线头点",
        //     type: "custom",
        //     coordinateSystem: "none",
        //     renderItem: function(params, api) {
        //         let x0 = api.getWidth() / 2;
        //         let y0 = api.getHeight() / 2;
        //         let r =
        //             Math.min(api.getWidth(), api.getHeight()) / 2.1;
        //         let point = getCirlPoint(x0, y0, r, 90 + -angle);
        //         return {
        //             type: "circle",
        //             shape: {
        //                 cx: point.x,
        //                 cy: point.y,
        //                 r: 5
        //             },
        //             style: {
        //                 stroke: '#0ff', //绿
        //                 fill: '#0ff'
        //             },
        //             silent: true
        //         };
        //     },
        //     data: [0]
        // },
        // {
        //     name: "线头点",
        //     type: "custom",
        //     coordinateSystem: "none",
        //     renderItem: function(params, api) {
        //         let x0 = api.getWidth() / 2;
        //         let y0 = api.getHeight() / 2;
        //         let r =
        //             Math.min(api.getWidth(), api.getHeight()) / 2.1;
        //         let point = getCirlPoint(x0, y0, r, 270 + -angle);
        //         return {
        //             type: "circle",
        //             shape: {
        //                 cx: point.x,
        //                 cy: point.y,
        //                 r: 5
        //             },
        //             style: {
        //                 stroke: '#0ff', //绿
        //                 fill: '#0ff'
        //             },
        //             silent: true
        //         };
        //     },
        //     data: [0]
        // },
        {
            name: "内盘上",
            type: 'gauge',
            splitNumber: 6,
            radius: '31%',
            center: ['50%', '50%'],
            startAngle: 120,
            endAngle: 58.9999,
            axisLine: {
                show: false,
                lineStyle: {
                    color: [
                        [1, '#00FFFF']
                    ]
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 22,
                lineStyle: {
                    color: 'auto',
                    width: 6
                }
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            }
        }, {
            name: "内盘下",
            type: 'gauge',
            splitNumber: 6,
            radius: '31%',
            center: ['50%', '50%'],
            startAngle: -60,
            endAngle: -120.9999,
            axisLine: {
                show: false,
                lineStyle: {
                    color: [
                        [1, '#00FFFF']
                    ]
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 22,
                lineStyle: {
                    color: 'auto',
                    width: 6
                }
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            }
        }, {
            name: "外盘左",
            type: 'gauge',
            splitNumber: 6,
            radius: '39%',
            center: ['50%', '50%'],
            startAngle: -155,
            endAngle: -205.9999,
            axisLine: {
                show: false,
                lineStyle: {
                    color: [
                        [1, '#00FFFF']
                    ]
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 22,
                lineStyle: {
                    color: 'auto',
                    width: 6
                }
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            }
        }, {
            name: "外盘右",
            type: 'gauge',
            splitNumber: 6,
            radius: '39%',
            center: ['50%', '50%'],
            startAngle: 26,
            endAngle: -26.9999,
            axisLine: {
                show: false,
                lineStyle: {
                    color: [
                        [1, '#00FFFF']
                    ]
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 22,
                lineStyle: {
                    color: 'auto',
                    width: 6
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
            type: 'pie',
            name: '内层细圆环',
            radius: ['31%', '31.5%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#00FFFF',
                }
            },
            label: {
                show: false
            },
            data: [100]
        },
        {
            type: 'pie',
            name: '外层细圆环',
            radius: ['41%', '41.5%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#00FFFF'
                }
            },
            label: {
                show: false
            },
            data: [100]
        },
    ]
};

function setdata() {
    let dataArr = [{
            name: (1).toString(),
            value: 40,
            itemStyle: {
                normal: {
                    color: 'rgb(0,255,255,.3)',
                }
            }
        },
        {
            name: (2).toString(),
            value: 100,
            itemStyle: {
                normal: {
                    color: 'rgb(0,0,0,0)',
                    borderWidth: 0,
                    borderColor: "rgba(0,255,255,1)",
                }
            }
        }, {
            name: (3).toString(),
            value: 40,
            itemStyle: {
                normal: {
                    color: 'rgb(0,255,255,.3)',
                }
            }
        },
        {
            name: (4).toString(),
            value: 100,
            itemStyle: {
                normal: {
                    color: 'rgb(0,0,0,0)',
                    borderWidth: 0,
                    borderColor: "rgba(0,255,255,1)",
                }
            }
        }
    ];
    // for (var i = 0; i < 100; i++) {
    //     if (i % 2 === 0) {
    //         dataArr.push({
    //             name: (i + 1).toString(),
    //             value: 40,
    //             itemStyle: {
    //                 normal: {
    //                     color: 'rgb(0,255,255,.3)',
    //                 }
    //             }
    //         })
    //     } else {
    //         dataArr.push({
    //             name: (i + 1).toString(),
    //             value: 100,
    //             itemStyle: {
    //                 normal: {
    //                     color: 'rgb(0,0,0,0)',
    //                     borderWidth: 0,
    //                     borderColor: "rgba(0,255,255,1)",
    //                 }
    //             }
    //         })
    //     }

    // }
    return dataArr
}

function startTimer() {
    timer = setInterval(() => {
        let option = myChart.getOption();
        angle = angle + 3;
        // option.series[0].startAngle = option.series[0].startAngle - 1;
        // option.series[1].startAngle = option.series[1].startAngle - 1;
        // option.series[1].endAngle = option.series[1].endAngle - 1;
        // option.series[2].startAngle = option.series[2].startAngle - 1;
        // option.series[2].endAngle = option.series[2].endAngle - 1;
        // option.series[3].startAngle = option.series[3].startAngle + 1;
        // option.series[3].endAngle = option.series[3].endAngle + 1;
        // option.series[4].startAngle = option.series[4].startAngle + 1;
        // option.series[4].endAngle = option.series[4].endAngle + 1;
        myChart.setOption(option);
    }, 100);
}
setTimeout(startTimer, 0);