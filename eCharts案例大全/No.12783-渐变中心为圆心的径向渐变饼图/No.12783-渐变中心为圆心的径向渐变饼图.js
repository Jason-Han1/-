// Echarts的Pie图的径向渐变不是很方便, 如果有人需要指向圆心的径向渐变可以直接用
// 需要注意的是:
// 1.legend会变得很奇怪, 最好自己重写
// 2.legend在点击之后(少了一个弧之后)也会不对, 最后在点击之后重新用calc来计算
//   (或者)干脆别让他点...
var data = [
    {value:20, name:'直接访问', color0: '#F45D67', color1: '#E2332B'},
    {value:20, name:'邮件营销', color0: '#F0C35E', color1: '#D45900'},
    {value:20, name:'联盟广告', color0: '#15E09B', color1: '#1DBD6B'},
    {value:20, name:'视频广告', color0: '#0E58D4', color1: '#093ED9'},
    {value:20, name:'搜索引擎', color0: 'yellow', color1: 'green'}
]

// 计算总数
var total = data.map(v => v.value).reduce((o, n) => o + n );

// 计算每一个data的其实角度和末了角度 θ1和θ2
data.reduce((o, v) => {
    v.theta1 = o;
    v.theta2 = o + v.value / total;
    return v.theta2
}, 0);
// 添加渐变
data.forEach((v, i) => {
    var ops = calc(v.theta1 * 2 * Math.PI, v.theta2 * 2 * Math.PI);
    if (v.value) v.itemStyle = {
        color: {
            type: 'radial',
            x: ops.center[0],
            y: ops.center[1],
            r: ops.radius,
            colorStops: [{
                offset: 0, color: v.color0
            },{
                offset: 0.7, color: v.color0
            },{
                offset: 0.6, color: v.color1
            }, {
                offset: 1, color: v.color1
            }],
            globalCoord: false // 缺省为 false
        }
    }
})

// 计算渐变中心以及渐变半径
function calc (theta1, theta2) {
    var r = 0.5; // 半径是0.5 其实表示0.5个直径
    var inner = 0.6; // 里面镂空部分占60%  option中radius为[33%, 55%]  55 * 0.6 == 33

    var cos = Math.cos;
    var sin = Math.sin;
    var PI = Math.PI;
    var min = Math.min;
    var max = Math.max;

    var bottom = 0;
    var left = 2 * r;
    var right = 0;

    // y0: θ1对应的外部点的y值
    // y1: θ2对应的外部点的y值
    // _y0: θ1对应的内部点的y值
    // _y1: θ2对应的内部点的y值
    // x0: θ1对应的外部点的x值
    // x1: θ2对应的外部点的x值
    // _x0: θ1对应的内部点的x值
    // _x1: θ2对应的内部点的x值
    var y0 = r * (1 - cos(theta1));
    var y1 = r * (1 - cos(theta2));

    var _y0 = r * (1 - inner * cos(theta1));
    var _y1 = r * (1 - inner * cos(theta2));

    // 如果这个弧经过θ == PI的点  则bottom = 2PI
    // bottom用于之后的max计算中
    if (theta1 < PI && theta2 > PI) {
        bottom = 2 * r;
    }
    // 计算这几个点的最大最小值
    var ymin = min(_y0, _y1, y0, y1);
    var ymax = max(_y0, _y1, y0, y1, bottom);

    var x0 = r * (1 + sin(theta1));
    var x1 = r * (1 + sin(theta2));

    var _x0 = r * (1 + inner * sin(theta1));
    var _x1 = r * (1 + inner * sin(theta2));

    // 如果这个弧经过θ == PI / 2的点  则right = 2PI
    if (theta1 < PI / 2 && theta2 > PI / 2) {
        right = 2 * r;
    }
    // 如果这个弧经过θ == PI / 2 * 3的点  则left = 0
    if (theta1 < PI / 2 * 3 && theta2 > PI / 2 * 3) {
        left = 0;
    }
    xmin = min(_x0, _x1, x0, x1, left);
    xmax = max(_x0, _x1, x1, x0, right);

    return {
        // 计算圆心以及半径
        center: [(r - xmin) / (xmax - xmin), (r - ymin) / (ymax - ymin)],
        radius: r / min(xmax - xmin, ymax - ymin)
    }
}

option = {
    title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : ['33%', '55%'],
            center: ['50%', '60%'],
            data:data,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            // animation: false
        }
    ]
};