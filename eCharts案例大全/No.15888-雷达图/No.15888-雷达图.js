//扇形
CanvasRenderingContext2D.prototype.sector = function(x, y, radius, sDeg, eDeg) {
    // 初始保存
    this.save();
    // 位移到目标点
    this.translate(x, y);
    this.beginPath();
    // 画出圆弧
    this.arc(0, 0, radius, sDeg, eDeg);
    // 再次保存以备旋转
    this.save();
    // 旋转至起始角度
    this.rotate(eDeg);
    // 移动到终点，准备连接终点与圆心
    this.moveTo(radius, 0);
    // 连接到圆心
    this.lineTo(0, 0);
    // 还原
    this.restore();
    // 旋转至起点角度
    this.rotate(sDeg);
    // 从圆心连接到起点
    this.lineTo(radius, 0);
    this.closePath();
    // 还原到最初保存的状态
    this.restore();
    return this;
}

var data = [{
    "name": "销售（sales）", //名称
    "weight": 0.58 //强度. 取值范围:0.0~1.0
}, {
    "name": "管理（Administration）", //名称
    "weight": 0.3 //强度. 取值范围:0.0~1.0
}, {
    "name": "信息技术（Information Techology）", //名称
    "weight": 0.28 //强度. 取值范围:0.0~1.0
}, {
    "name": "客服（Customer Support）", //名称
    "weight": 0.33 //强度. 取值范围:0.0~1.0
}, {
    "name": "研发（Development）", //名称
    "weight": 0.45 //强度. 取值范围:0.0~1.0
}, {
    "name": "市场（Marketing）", //名称
    "weight": 0.46 //强度. 取值范围:0.0~1.0
}];

var len = data.length;
var _d = {};
_d.indicator = [];
_d.data = [];
_d.data[0] = {
    value: [],
    name: '典型特征'
};
for (var i = 0; i < len; i++) {
    _d.indicator.push(data[i].name);
    _d.data[0].value.push(data[i].weight);
}

var indicator = [];

for (var i = 0; i < len; i++) {
    indicator[i] = {
        name: _d.indicator[i],
        max: 1
    };
}
var canvas = document.createElement("canvas");
setTimeout(function() {
    drawShadow($("canvas").width(), $("canvas").height());
}, 100);

function drawShadow(w, h) {
    canvas.width = w;
    canvas.height = h;
    var ctx = canvas.getContext('2d');
    var angle = Math.PI * 2 / len;
    var radius = Math.min(w, h) * 0.75 * 0.5;
    for (var i = 0; i < len; i++) {
        ctx.fillStyle = i % 2 === 0 ? "rgba(100,100,100,0.1)" : "rgba(0,0,0,0)";
        ctx.sector(w / 2, h / 2, radius, -Math.PI / 2 + i * angle, -Math.PI / 2 + (i + 1) * angle).fill();
    }
    var dom = $("canvas").parent().parent()[0];
    var myChart = echarts.getInstanceByDom(dom);
    myChart.clear();
    option = {
        title: {
            text: ''
        },
        backgroundColor: {
            image: canvas,
            repeat: 'no-repeat'
        },
        tooltip: {},
        radar: {
            shape: 'circle',
            center: ['50%', '50%'],
            radius: '75%',
            indicator: indicator,
            name: {
                formatter: function(d, e) {
                    e.nameTextStyle = {
                        color: 'rgba(86,111,141,0.5)',
                        fontSize: 12
                    };
                    if (d == indicator[index].name) {
                        e.nameTextStyle = {
                            color: 'rgba(255,127,143,1)',
                            fontSize: 18
                        };
                    }
                    return d;
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            }
        },
        series: [{
            name: '',
            type: 'radar',
            //areaStyle: {normal: {}},
            data: _d.data
        }]
    };
    myChart.setOption(option, true);
}

var index = 0;
option = {
    title: {
        text: ''
    },
    backgroundColor: {
        image: canvas,
        repeat: 'no-repeat'
    },
    tooltip: {},
    radar: {
        shape: 'circle',
        center: ['50%', '50%'],
        radius: '75%',
        indicator: indicator,
        name: {
            formatter: function(d, e) {
                e.nameTextStyle = {
                    color: 'rgba(86,111,141,0.5)',
                    fontSize: 12
                };
                if (d == indicator[index].name) {
                    e.nameTextStyle = {
                        color: 'rgba(255,127,143,1)',
                        fontSize: 18
                    };
                }
                return d;
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: 'rgba(0,0,0,0)'
            }
        }
    },
    series: [{
        name: '',
        type: 'radar',
        //areaStyle: {normal: {}},
        data: _d.data
    }]
};