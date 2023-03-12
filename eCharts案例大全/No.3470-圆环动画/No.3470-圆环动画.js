let angle = 0;//角度，用来做简单的动画效果的
option = {
    color:['#008bee',"#03e9d5","#fcff00"],
    tooltip: {
        trigger: 'item'
    },
    title: {
        text: '{a|'+ 50 +'}{c|%}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich:{
                a: {
                    fontSize: 48,
                    color: '#29EEF3'
                },
                
                c: {
                    fontSize: 20,
                    color: '#ffffff',
                    // padding: [5,0]
                }
            }
        }
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 20,
                borderColor: '#fff',
                borderWidth: 20
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: false,
                    // fontSize: '40',
                    // fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
            ]
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
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                        startAngle: (0+angle) * Math.PI / 180,
                        endAngle: (90+angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#0CD3DB",
                        fill: "transparent",
                        lineWidth: 1.5
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
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                        startAngle: (180+angle) * Math.PI / 180,
                        endAngle: (270+angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#0CD3DB",
                        fill: "transparent",
                        lineWidth: 1.5
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
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                        startAngle: (270+-angle) * Math.PI / 180,
                        endAngle: (40+-angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#0CD3DB",
                        fill: "transparent",
                        lineWidth: 1.5
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
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                        startAngle: (90+-angle) * Math.PI / 180,
                        endAngle: (220+-angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#0CD3DB",
                        fill: "transparent",
                        lineWidth: 1.5
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
                let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                let point = getCirlPoint(x0, y0, r, (90+-angle))
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 4
                    },
                    style: {
                        stroke: "#0CD3DB",//粉
                        fill: "#0CD3DB"
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
                let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                let point = getCirlPoint(x0, y0, r, (270+-angle))
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
