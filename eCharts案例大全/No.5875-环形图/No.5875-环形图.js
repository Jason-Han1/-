  


let angle = 0;//角度，用来做简单的动画效果的
let value = 2751;
option = {
backgroundColor:"#061740",
title: {
        text: '{a|'+ value +'}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich:{
                a: {
                    fontSize: 48,
                    color: '#d35161'
                },
                
                c: {
                    fontSize: 20,
                    color: '#d35161',
                    // padding: [5,0]
                }
            }
        }
    },
    series: [
        {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.7,
                        startAngle: (5+angle) * Math.PI / 180,
                        endAngle: (175+angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#d35161",
                        fill: "transparent",
                        lineWidth: 1.5
                    },
                    silent: true
                };
            },
            data: [0]
        }, 
        {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.7,
                        startAngle: (185+angle) * Math.PI / 180,
                        endAngle: (355+angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#d35161",
                        fill: "transparent",
                        lineWidth: 1.5
                    },
                    silent: true
                };
            },
            data: [0]
        },
        {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                        startAngle: (275+-angle) * Math.PI / 180,
                        endAngle: (-5+-angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#84888a",
                        fill: "transparent",
                        lineWidth: 1.5
                    },
                    silent: true
                };
            },
            data: [0]
        }, 
        {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                        startAngle: (5+-angle) * Math.PI / 180,
                        endAngle: (85+-angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#84888a",
                        fill: "transparent",
                        lineWidth: 1.5
                    },
                    silent: true
                };
            },
            data: [0]
        }, 
        {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                        startAngle: (95+-angle) * Math.PI / 180,
                        endAngle: (175+-angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#84888a",
                        fill: "transparent",
                        lineWidth: 1.5
                    },
                    silent: true
                };
            },
            data: [0]
        },
        {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                        startAngle: (185+-angle) * Math.PI / 180,
                        endAngle: (265+-angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#84888a",
                        fill: "transparent",
                        lineWidth: 1.5
                    },
                    silent: true
                };
            },
            data: [0]
        },
        {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                console.log(api.getHeight)
                let x0 = api.getWidth()/2;
                let y0 = api.getHeight()/2.05;
                let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                let point = getCirlPoint(x0, y0, r, (85+-angle))
                return {
                    type: 'rect',
                    shape: {
                       x: point.x, 
                       y:point.y,
                       width: 3, 
                       height: 10
                    },
                    style: {
                        stroke: "#84888a",//粉
                        fill: "#84888a"
                    },
                    silent: true
                };
            },
            data: [0]
        },
        {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2.05;
                let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                let point = getCirlPoint(x0, y0, r, (95.5+-angle))
                return {
                    type: 'rect',
                    shape: {
                       x: point.x, 
                       y:point.y,
                       width: 3, 
                       height: 10
                    },
                    style: {
                        stroke: "#84888a",//粉
                        fill: "#84888a"
                    },
                    silent: true
                };
            },
            data: [0]
        },
        {
            name: "ring5",  //绿点
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                let point = getCirlPoint(x0, y0, r, (275+-angle))
                return {
                   type: 'rect',
                    shape: {
                       x: point.x, 
                       y:point.y,
                       width: 3, 
                       height: 10
                    },
                    style: {
                        stroke: "#84888a",      //绿
                        fill: "#84888a"
                    },
                    silent: true
                };
            },
            data: [0]
        }, 
        {
            name: "ring5",  //绿点
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                let point = getCirlPoint(x0, y0, r, (265+-angle))
                return {
                   type: 'rect',
                    shape: {
                       x: point.x, 
                       y:point.y,
                       width: 3, 
                       height: 10
                    },
                    style: {
                        stroke: "#84888a",      //绿
                        fill: "#84888a"
                    },
                    silent: true
                };
            },
            data: [0]
        }, 
        {
            name: '攻击次数',
            type: 'pie',
            radius: ['58%', '45%'],
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
                            color: '#373a41',
                        }
                    }
                },
                {
                    value: 100000-value,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#373a41"
                        }
                    }
                }
            ]
        }
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

// function draw(){
//     angle = angle+3
//     myChart.setOption(option, true)
//   //window.requestAnimationFrame(draw);
// }

// setInterval(function() {
//     //用setInterval做动画感觉有问题
//     draw()
// }, 100);