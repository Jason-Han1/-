
var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        shadowColor: 'rgba(0, 0, 0,0.8)',
    }
};
var data = [ 
                 
                 
                {
                    value: 2.1,
                    name: '资产负债',
                      selected:false
                },
                {
                    value: 1.8,
                    name: '社交网络服务'
                ,
                      selected:false},
                {
                    value: 1.7,
                    name: '支付结算'
               ,
                      selected:false },
                {
                    value: 2.95,
                    name: '其他'
               ,
                      selected:false }
            ];
getBackgroundImage()

let angle = 0;//角度，用来做简单的动画效果的

option = {
    //backgroundColor: "transparent",
    title: {
        text: "9%",
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle:{
            color:"white",
            fontSize:40
        },
        left:"50%",
        top:"50%"
        
    },
    grid:{
        left:"0%",
        top:"0%",
        right:"0%",
        bottom:"0%",
    },
     
    series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['58%', '35%'],
            avoidLabelOverlap: false,
            color: ["#0066ff", "#ff9c00", "#00fcff", "#00bc73", "#f33887", "#5e66ff", "#f0d700"],
            label: {
                show: false
            },
             itemStyle: dataStyle,
            data: data,
            silent: true
        },{
            name: "ring4",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.85,
                        startAngle: (0+-angle) * Math.PI / 180,
                        endAngle: (90+-angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "rgb(255, 255, 255,0.2)",
                        fill: "transparent"
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
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.85,
                        startAngle: (180+-angle) * Math.PI / 180,
                        endAngle: (270+-angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "rgb(255, 255, 255,0.2)",
                        fill: "transparent"
                    },
                    silent: true
                };
            },
            data: [0]
        }, {
            name: "ring4",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'ring',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.8,
                        r0: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.58
                    },
                    style: {
                        stroke: "transparent",
                        fill: new echarts.graphic.LinearGradient(0, 0.58, 0, 0.8, [{
                                // 0% 处的颜色   
                                offset: 0,
                                color: 'rgb(255, 255, 255,0.1)'
                            },
                            {
                                // 100% 处的颜色
                                offset: 1,
                                color: 'transparent'
                            }
                        ]),
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
                        startAngle: (0+angle) * Math.PI / 180,
                        endAngle: (90+angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#086d9f",
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
                        stroke: "#086d9f",
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
                        stroke: "#883d20",
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
                        stroke: "#883d20",
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
                        stroke: "#883d20",
                        fill: "#883d20"
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
                let point = getCirlPoint(x0, y0, r, (270+-angle))
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 4
                    },
                    style: {
                        stroke: "#883d20",
                        fill: "#883d20"
                    },
                    silent: true
                };
            },
            data: [0]
        }, 
        {
            name: "ring1",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'ring',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.37
                    },
                    style: {
                        stroke: "rgba(255,255,255,0.4)",
                        fill: "transparent"
                    },
                    silent: true
                };
            },
            data: [0]
        },
         
        {
            name: "ring2",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'ring',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.30
                    },
                    style: {
                        stroke: "#0885b5",
                        fill: "transparent",
                        lineWidth: 2,
                        lineDash: [15, 10]
                    },
                    silent: true
                };
            },
            data: [0]
        },
        {
            name: "ring3",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'ring',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.28
                    },
                    style: {
                        stroke: "rgba(16, 81, 167,.5)",
                        fill: "transparent"
                    },
                    silent: true
                };
            },
            data: [0]
        },
        {
            name: "ring4",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'ring',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.2
                    },
                    style: {
                        stroke: "#873c20",
                        fill: "transparent",
                        //shadowColor:"#ddd",
                        //shadowOffsetX:0,
                        //shadowBlur:4
                    },
                    silent: true
                };
            },
            data: [0]
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


//设置背景图片
function getBackgroundImage() {
    let panel = document.getElementById("chart-panel")
    let bgImgSrc = "http://i2.hdslb.com/bfs/archive/2da1ff7cd9e88497116a78146b39e73e967fb25e.jpg";
    panel.style.backgroundImage = "url(" + bgImgSrc + ")";
    panel.style.backgroundSize = "cover";
}
 
 function draw(){
    angle = angle+3
    myChart.setOption(option, true)
   //window.requestAnimationFrame(draw);
}
//draw()

setInterval(function() {
    //用setInterval做动画感觉有问题
    draw()
    times++;
    if(times >= 20){
        times = 0;
        changeSelect();
    }
}, 100);

 var times = 0;
var count = 0;
 
function changeSelect() {
    var r = count % data.length;
    option.series[0].data[r].selected = false;
    
    count++;
    var s = count % data.length;
    option.series[0].data[s].selected = true;
    option.title.text = option.series[0].data[s].value + "%";
    myChart.setOption(option, true);
} 