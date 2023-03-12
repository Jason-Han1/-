 let angle = 180;//角度，用来做简单的动画效果的
let value = 55.33;
option = {
backgroundColor:"#061740",
title: {
        text: '{a|'+ value +'}{c|%}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich:{
                a: {
                    fontSize: 48,
                    color: '#FFF43C'
                },
                
                c: {
                    fontSize: 20,
                    color: '#ffffff',
                    // padding: [5,0]
                }
            }
        }
    },
    series: [     // 紫色
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
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.25,
                      startAngle: (0 + angle) * Math.PI / 180,
                         endAngle: (90 + angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#0CD3DB",
                        fill: "transparent",
                        lineWidth: 5.5
                    },
                    silent: true
                };
            },
              data: [
                {
                    value: 50,
                    itemStyle: {
                        normal: {
                            color: "rgba(4,40,50,1)"
                        }
                    }
                },

            ]
        }, {
            name: "ring5",  //绿点
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.25;
                 let point = getCirlPoint(x0, y0, r, (90 + angle))
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 4
                    },
                    style: {
                        stroke: "#0CD3DB",      //绿
                        fill: "#0CD3DB"
                    },
                    silent: true
                };
            },
            data: [0]
        },
         {
             name: '事件总数',
             type: 'pie',
             radius: ['32%', '35%'],
             silent: true,
             clockwise: true,
             startAngle: 270,
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
                                     color: '#00EDF3' // 0% 处的颜色
                                 }, {
                                     offset: 1,
                                     color: '#646CF9' // 100% 处的颜色
                                 }]
                             },
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
                             color: "#173164"
                         }
                     }
                 }
             ]
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
