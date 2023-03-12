//自定义椭圆形状

//这部分代码来源于zrender 的 Ellipse形状
var Ellipse = echarts.graphic.extendShape({
    shape: {
        cx: 0, cy: 0,
        rx: 0, ry: 0
    },
    buildPath: function (ctx, shape) {
        var k = 0.5522848;
        var x = shape.cx;
        var y = shape.cy;
        var a = shape.rx;
        var b = shape.ry;
        var ox = a * k; // 水平控制点偏移量
        var oy = b * k; // 垂直控制点偏移量
        // 从椭圆的左端点开始顺时针绘制四条三次贝塞尔曲线
        ctx.moveTo(x - a, y);
        ctx.bezierCurveTo(x - a, y - oy, x - ox, y - b, x, y - b);
        ctx.bezierCurveTo(x + ox, y - b, x + a, y - oy, x + a, y);
        ctx.bezierCurveTo(x + a, y + oy, x + ox, y + b, x, y + b);
        ctx.bezierCurveTo(x - ox, y + b, x - a, y + oy, x - a, y);
        ctx.closePath();
    }
});

echarts.graphic.registerShape("ellipse",Ellipse);


option = {
    title: {
        text: '绘制椭圆'
    },
    xAxis: {
        max:100
    },
    graphic:[
        {
            type:"ellipse",
            shape:{
                cx: 50, cy: 100,
                rx: 10, ry: 60
            },
            style:{fill:"green"}
        }
    ],
    yAxis: {max:100},
    series: [{
        type: 'custom',
        data:[
            [15,15,1,1,"#ff0000"],
            [50,70,3,2,"#00ff00"]
        ],
        encode:{
            x:[0,2],
            y:[1,3],
            seriesName:[4]
        },
        renderItem:function(params, api){
            var p1 = api.coord([api.value(0),api.value(1)])
            var p2 = api.coord([api.value(2)+api.value(0),api.value(3)+api.value(1)])
            return {
                type: 'ellipse',
                shape: {
                    cx: p1[0], cy: p1[1],
                    rx: p2[0]-p1[0], ry: p1[1]-p2[1]
                },
                style:{fill:api.value(4),opacity:0.8},
                styleEmphasis:{opacity:1}
            }
        }
    }]
};