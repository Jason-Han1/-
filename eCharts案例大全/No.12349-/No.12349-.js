/**
*   @author liang
*   2019.01.07
*   依赖脚本：TweenMax
*   说明：第4版为原生JS,demo版，后续改为createJS,不断优化中
*   所有配置均在38-62行config对象里
*/
let data = [
     {name: '海门', value: 90},
     {name: '鄂尔多斯', value: 102},
     {name: '齐齐哈尔', value: 140}
];
let geoCoordMap = {
    '海门':[121.15,31.89],
    '鄂尔多斯':[109.781327,39.608266],
    '齐齐哈尔':[123.97,47.33]
};

let convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

/**
* priority  tooltip朝向（top/bottom）
* left, top 为默认值
* 根据展示内容需要微调text的宽高
*/
let left = false, top = false, priority = 'top'
// 自定义tooltip配置属性
let config = {
    ecBoxId: 'chart-panel',
    lineColor: '#fff',
    L1: {
        time: 0.3,
        long: 40
    },
    L2: {
        time: 0.3,
        long: 40
    },
    text: {
        time: 0.5,
        text: '',
        font: '14px Arial',
        color: '#fff',
        padding: [10, 10],
        width: 120,
        height: 60,
        lineHeight: 24,
        backgroundColor: 'rgba(50, 50, 50, 0.8)'
    }
}
option = {
    backgroundColor: '#404a59',
    tooltip : {
        trigger: 'item',
        triggerOn: 'click',
        hideDelay:2000,
        backgroundColor: 'transparent',
        //alwaysShowContent: true,
        position (pos) {
            let position = getPosOrSize('pos', pos)
            return position
        },
        formatter (params,p,a) {
            canvasAnimation(params)
            let size = getPosOrSize('size')
            let tooltipDom = `<canvas id="tCanvas" width="${size.width}" height="${size.height}">123</canvas>`
            return tooltipDom
        }
    },
    legend: {
        show:false
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series : [
        {
            name: 'Tooltip Test',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};

const canvasAnimation = params => {
    setTimeout(function() {
        console.log(params)
        // config.text.text = params.name
        config.text.text = `地点：${params.name}\n数量：${params.value[2]}`
        new myTooltip('tCanvas', config)
    }, 0);
}

// 计算tooltip位置
const getPosOrSize = (type, point) => {
    let x1 = config.L1.long * Math.sin(Math.PI / 4)
    let width = x1 + config.L2.long + config.text.width,
        height = x1 + config.text.height / 2
    if (type === 'size') {
        config.width = width
        config.height = height
        return {
            width,
            height
        }
    } else {
        let box = document.getElementById(config.ecBoxId),
            bw = box.offsetWidth,
            bh = box.offsetHeight,
            x = point[0],
            y = point[1]
        left = false
        if (x + width >= bw - 30) {
            x = x - width - 15
            left = true
        }
        if (priority === 'top') {
            // L1向上
            top = true
            y = y - height - 15
            if (y <= 0) {
                y = point[1]
                top = false
            }
            return [x, y]
        } else {
            top = false
            if (y + height >= bh) {
                y = y - height - 15
                top = true
            }
            return [x, y]
        }
    }
}

class myTooltip {
    constructor (id, config) {
        this.config = config
        this.totalTime = 0
        this.stage = new createjs.Stage(id)
        this.timeline = new TimelineMax({repeat: 0})
        this.g = new createjs.Graphics()
        this.lineShape = new createjs.Shape(this.g)
        this.textShape = new createjs.Shape()
        this.stage.addChild(this.lineShape, this.textShape)
        this.init()
        this.begin()
        this.update()
    }
    init () {
        this.start = [0, 0]
        if (left) {
            this.start[0] = this.config.width 
        }
        if (top) {
            this.start[1] = this.config.height
        }
    }
    begin () {
        this.L1()
        this.L2()
        this.addText()
    }
    L1 () {
        let me = this
        let c = me.config
        let tl = new TimelineMax()
        let scale = {s: 0},
        x = c.L1.long * Math.sin(Math.PI / 4)
        if (left) {
            if (top) {
                this.L1End = [me.start[0] - x, me.start[1] - x]
            } else {
                this.L1End = [me.start[0] - x, me.start[1] + x]
            }
        } else {
            if (top) {
                this.L1End = [x, me.start[1] - x]
            } else {
                this.L1End = [x, x]
            }
        }
        
        tl.to(scale, c.L1.time, {
            s: 1,
            onUpdate () {
                let s = scale.s
                if (left) {
                    if (top) {
                        me.g.c().s(c.lineColor).mt(...me.start).lt(me.start[0] - x * s, me.start[1] - x * s)
                    } else {
                        me.g.c().s(c.lineColor).mt(...me.start).lt(me.start[0] - x * s, me.start[1] + x * s)
                    }
                } else {
                    if (top) {
                        me.g.c().s(c.lineColor).mt(...me.start).lt(x * s, me.start[1] - x * s)
                    } else {
                        me.g.c().s(c.lineColor).mt(...me.start).lt(x * s, x * s)
                    }
                }
                me.update()
            }
        })
        this.timeline.add(tl, this.totalTime)
        this.totalTime += c.L1.time
    }
    L2 () {
        // 只跟左右有关，只判断left
        let me = this
        let c = me.config
        let tl = new TimelineMax()
        let scale = {s: 0}
        tl.to(scale, c.L2.time, {
            s: 1,
            onUpdate () {
                let s = scale.s
                if (left) {
                    me.g.c().s(c.lineColor).mt(...me.start).lt(...me.L1End).lt(me.L1End[0] - c.L2.long * s, me.L1End[1])
                } else {
                    me.g.c().s(c.lineColor).mt(...me.start).lt(...me.L1End).lt(me.L1End[0] + c.L2.long * s, me.L1End[1])
                }
                me.update()
            }
        })
        this.timeline.add(tl, this.totalTime)
        this.totalTime += c.L2.time
    }
    addText () {
        // text框只与L2end有关，只需判断left即可，top不影响
        let me = this
        let c = me.config
        let tl = new TimelineMax()
        let scale = {s: 0},
            L2End = [me.L1End[0] + c.L2.long, me.L1End[1]]
        if (left) {
            L2End = [me.L1End[0] - c.L2.long, me.L1End[1]]
        }
        tl.to(scale, c.text.time, {
            s: 1,
            onStart () {
                let x = 0, y = 0
                if (left) {
                    x = L2End[0] - c.text.width
                } else {
                    x = L2End[0]
                }
                me.g.c().s(c.lineColor).mt(...me.start).lt(...me.L1End).lt(...L2End)
                me.text = new createjs.Text(c.text.text, c.text.font, c.text.color)
                me.text.alpha = 0
                me.text.lineHeight = c.text.lineHeight
                me.text.x = x + c.text.padding[0]
                me.text.y = L2End[1] - c.text.height / 2 + c.text.padding[1]
                me.stage.addChild(me.text)
                me.textShape.graphics.c().f(c.text.backgroundColor).rr(x, L2End[1] - c.text.height / 2, c.text.width, c.text.height, 5)
                me.textShape.alpha = 0
                me.update()
            },
            onUpdate () {
                me.text.alpha = scale.s
                me.textShape.alpha = scale.s
                me.update()
            }
        })
        this.timeline.add(tl, this.totalTime)
    }
    update () {
        this.stage.update()
    }
}

window.addEventListener('resize', e => {
    let tCanvas = document.getElementById('tCanvas')
    if (tCanvas) {
        tCanvas.style.display = 'none'
    }
})
