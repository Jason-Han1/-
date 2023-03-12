 let angle = 0;//角度，用来做简单的动画效果的
let value = 55.33;
option = {
// backgroundColor:"#061740",
title: {
        text: '{a|'+ value +'}{c|%}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich:{
                a: {
                    fontSize: 35,
                    color: '#FF9933'
                },
                
                c: {
                    fontSize: 35,
                    color: '#FF9933',
                    // padding: [5,0]
                }
            }
        }
    },
    legend: {
        type: "plain",
        orient: "vertical",
        right: 0,
        top: "10%",
        align: "auto",
        data: [{
            name: '涨价后没吃过',
            icon: "circle"
        }, {
            name: '天天吃',
            icon: "circle"
        }, {
            name: '三五天吃一次',
            icon: "circle"
        }, {
            name: '半个月吃一次',
            icon: "circle"
        }],
        textStyle: {
            color: "white",
            fontSize: 16,
            padding: [10, 1, 10, 0]
        },
        selectedMode:false
    },
    series: [ {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.5,
                        startAngle: (0+angle) * Math.PI / 180,
                        endAngle: (90+angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#FF9933",
                        fill: "transparent",
                        lineWidth: 3
                    },
                    silent: true
                };
            },
            data: [0]
        }, {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.5,
                        startAngle: (180+angle) * Math.PI / 180,
                        endAngle: (270+angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#000000",
                        fill: "transparent",
                        lineWidth: 3
                    },
                    silent: true
                };
            },
            data: [0]
        }, {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.57,
                        startAngle: (270+-angle) * Math.PI / 180,
                        endAngle: (40+-angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#FF9933",
                        fill: "transparent",
                        lineWidth: 3
                    },
                    silent: true
                };
            },
            data: [0]
        }, {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.57,
                        startAngle: (90+-angle) * Math.PI / 180,
                        endAngle: (220+-angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#000000",
                        fill: "transparent",
                        lineWidth: 3
                    },
                    silent: true
                };
            },
            data: [0]
        }, {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.57;
                let point = getCirlPoint(x0, y0, r, (90+-angle))
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 5
                    },
                    style: {
                        stroke: "#FF9933",//粉
                        fill: "#FF9933"
                    },
                    silent: true
                };
            },
            data: [0]
        }, {
            name: "ring5",  //绿点
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.57;
                let point = getCirlPoint(x0, y0, r, (270+-angle))
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 5
                    },
                    style: {
                        stroke: "#000",      //绿
                        fill: "#000"
                    },
                    silent: true
                };
            },
            data: [0]
        }, {
            name: '吃猪肉频率',
            type: 'pie',
            radius: ['45%', '37%'],
            silent: true,
            clockwise: true,
            startAngle: 90,
            z: 0,
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
                            color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#FFCC00' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#FF9933' // 100% 处的颜色
                                }]
                            },
                        }
                    }
                },
                {
                    value: 100-value,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#999999"
                        }
                    }
                }
            ]
        },
        
        {
            name: "",
            type: "gauge",
            radius: "35%",
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 8,
            hoverAnimation: true,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 40,
                lineStyle: {
                    width: 3,
                    color: "#000000"
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
        },
             {
            name: "",
            type: "gauge",
            radius: "45%",
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 8,
            hoverAnimation: true,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 15
                ,
                lineStyle: {
                    width: 3,
                    color: "#000000"
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
        },
    ]
};

//获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
function getCirlPoint(x0, y0, r, angle) {
    let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
    let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
    return {
        x: x1,
        y: y1
    }
}

function draw(){
    angle = angle+3
    myChart.setOption(option, true)
   //window.requestAnimationFrame(draw);
}

setInterval(function() {
    //用setInterval做动画感觉有问题
    draw()
}, 100);