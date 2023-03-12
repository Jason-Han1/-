


var getname = ['SCI', 'SSCI','EI','ISTP','AHCI','ISSHP','其他'];
var getvalue = [0,2700,3397,3541,2000,2233,3397];
var getamount = [60.3,40,75.4,65.5,22.3,15.6,75.4];
var getorderCount = [0,5000,11000,14000,15000,20000,20121];
var datas = [];
for (var i = 0; i < getname.length; i++) {
    datas.push({
        name: getname[i],
        value: getvalue[i],
        amount: getamount[i],
        orderCount: getorderCount[i],
    })
}
let packedDatas = packDatas(datas);

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
   grid: {
        top: 60,
        bottom: 40,
        left: 50,
        right: 30
    },
    legend: {
        data: ['2010','2020'],
        type: "scroll",
        right: '15',
        top: '10',
        itemGap: 25,
        itemWidth: 14,
        itemHeight: 14,
        textStyle: {
            fontSize: '13',
            color: '#656565',
        },

    },
    tooltip : {
        trigger: 'item',
        triggerOn: 'click',
        backgroundColor: 'transparent',
        alwaysShowContent: true,
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
     xAxis: {
        splitLine: {
            show: false,
        },
        scale: true,
        type: 'value',
        name: '人均发表篇次',
        nameTextStyle: {
            color: '#666666',
            fontSize: 13,
            padding: [0, 0, 30, -80]
        },
        axisLabel: {
            formatter: function(value) {
                num = value
                if (num && num != 'undefined' && num != 'null') {
                    let numS = num;
                    numS = numS.toString();
                    numS = numS.replace(/,/gi, '');
                    return numS;
                } else {
                    return num;
                }
            },
            color: '#656565',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
    },
    yAxis: {
        name: '人均发表篇次',
        nameTextStyle: {
            color: '#666666',
            fontSize: 13,
            padding: [0, 0, 0, 70]
        },
        axisLabel: {
            formatter: function(value) {
                num = value
                if (num && num != 'undefined' && num != 'null') {
                    let numS = num;
                    numS = numS.toString();
                    numS = numS.replace(/,/gi, '');
                    return numS;
                } else {
                    return num;
                }
            },
            color: '#656565',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(209,209,209,.25)',
            }
        }
    },

    series: [{
        name: '2010',
        symbolSize: function(data) {
            return data[1]/5;
        },
        itemStyle: {
            normal: {
                color: '#9CC8FF',
                borderColor: '#4B95F3',
                borderWidth: 2,
            }
        },
        data: packedDatas,
        type: 'scatter',
    }]
};

const canvasAnimation = params => {
    setTimeout(function() {
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
        if (x + width >= bw / 1.2) {
            x = x - width - 5
            left = true
        }
        if (priority === 'top') {
            // L1向上
            top = true
            y = y - height - 5
            if (y <= 0) {
                y = point[1]
                top = false
            }
            return [x, y]
        } else {
            top = false
            if (y + height >= bh) {
                y = y - height - 5
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

let EC = echarts.getInstanceByDom(document.getElementById("chart-panel"))

var index = 0
setInterval(_ => {
    EC.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: index
    })
    index++
    if (index >= data.length) {
        index = 0
    }
}, 3000)
window.addEventListener('resize', e => {
    let tCanvas = document.getElementById('tCanvas')
    if (tCanvas) {
        tCanvas.style.display = 'none'
    }
})
function packDatas(datas) {
    let packedDatas = datas.map((data) => {
        let name = data['name'];
        let dispathCount = data['orderCount'];
        let refs = data['amount'];
        let avt = data['value'];
        return [dispathCount, refs, name, avt ];
    });

    return packedDatas;
}