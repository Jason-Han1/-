

let angle = 0;//角度，用来做简单的动画效果的
let value = 55.33;
option1 = {
    backgroundColor:"#0B1837",
    color: ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05"],
    // title: {
    //     text: '网络/安全设备',
    //     left: '60',
    //     top: 0,
    //     textAlign: 'center',
    //     textStyle: {
    //         color: '#fff',
    //         fontSize: 14,
    //         fontWeight: 0
    //     }
    // },
    grid: {
        left: -100,
        top: -2250,
        bottom: 10000,
        right: 10000,
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        type: "scroll",
        orient: "vartical",
        // x: "right",
        top: "center",
        right: "15",
        // bottom: "0%",
        itemWidth: 16,
        itemHeight: 8,
        itemGap: 16,
        textStyle: {
            color: '#A3E2F4',
            fontSize: 12,
            fontWeight: 0
        },
        data: ['IDS', 'VPN', '交换机', '防火墙', 'WAF', '堡垒机']
    },
    polar: {},
    angleAxis: {
        interval: 1,
        type: 'category',
        data: [],
        z: 10,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#0B4A6B",
                width: 1,
                type: "solid"
            },
                        symbolSize:[10,10]
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: "#0B4A6B",
            margin: 8,
            fontSize: 16
        },
    },
    radiusAxis: {
        boundaryGap : true,
        radius: ["70%", "75%"],
        axisLine: {
            show: false,
            lineStyle: {
                color: "#0B3E5E",
                width: 1,
                type: "solid"
            },
                        symbolSize:[10,10]
        },
        axisLabel: {
            formatter: '{value} %',
            show: false,
            padding: [0, 0, 20, 0],
            color: "#0B3E5E",
            fontSize: 16
        },
        splitLine: {
            lineStyle: {
                color: "#0B3E5E",
                width: 2,
                type: "solid"
            }
        }
    },
    calculable: true,
    series: [  {
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
        },{
        type: 'pie',
        radius: ["5%", "10%"],
        hoverAnimation: false,
        id:40,
        labelLine: {
            normal: {
                show: false,
                length: 30,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        data: [{
            name: '',
            value: 0,
            itemStyle: {
                normal: {
                    color: "#0B4A6B"
                }
            }
        }]
    }, {
        type: 'pie',
        radius: ["70%", "75%"],
        hoverAnimation: false,
        id:30,
        labelLine: {
            normal: {
                show: false,
                length: 30,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        name: "",
        data: [{
            name: '',
            value: 0,
            itemStyle: {
                normal: {
                    color: "#0B4A6B"
                }
            }
        }]
    },{
        stack: 'a',
        type: 'pie',
        radius: ['20%', '60%'],
        roseType: 'area',
        zlevel:10,
        id:50,
        label: {
            normal: {
                show: true,
                formatter: "{c}",
                textStyle: {
                    fontSize: 12,
                },
                position: 'outside'
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        data: [{
                value: 10,
                name: 'IDS'
            },
            {
                value: 50,
                name: 'VPN'
            },
            {
                value: 15,
                name: '交换机'
            },
            {
                value: 25,
                name: '防火墙'
            },
            {
                value: 20,
                name: 'WAF'
            },
            {
                value: 350,
                name: '堡垒机'
            }
        ]
    }, ]
}

      
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
    myChart.setOption(option1, true)
   //window.requestAnimationFrame(draw);
}

setInterval(function() {
    //用setInterval做动画感觉有问题
    draw()
}, 100);
