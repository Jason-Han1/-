var uploadedDataURL = "/asset/get/s/data-1551588846073-bEWk1-YFr.json";

/*参考引用 锃光瓦亮6666 的作品*/
/**
 * priority  tooltip朝向（top/bottom）
 * left, top 为默认值
 * 根据展示内容需要微调text的宽高
 */
let left = false,
    top = false,
    priority = 'top'
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

/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/



myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('jiangxi', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '济南市': [117.121225, 36.66466],
        '菏泽市': [115.480656, 35.23375],
        '济宁市': [116.59, 35.38],
        '德州市': [116.39, 37.45],
        '聊城市': [115.97, 36.45],
        '泰安市': [117.13, 36.18],
        '临沂市': [118.35, 35.05],
        '淄博市': [118.05, 36.78],
        '枣庄市': [117.57, 34.86],
        '滨州市': [118.03, 37.36],
        '潍坊市': [119.1, 36.62],
        '东营市': [118.49, 37.46],
        '青岛市': [120.3, 36.62],
        '烟台市': [120.9, 37.32],
        '威海市': [122.1, 37.2],
        '日照市': [119.1, 35.62],
        '济宁市': [116.7, 35.42],
        '莱芜市': [117.70, 36.28],
    }
    var data = [{
            name: '济南市',
            value: 390
        },
        {
            name: '菏泽市',
            value: 158
        },
        {
            name: '德州市',
            value: 252
        },
        {
            name: '聊城市',
            value: 99
        },
        {
            name: '泰安市',
            value: 189
        },
        {
            name: '临沂市',
            value: 52
        },
        {
            name: '淄博市',
            value: 158
        },
        {
            name: '枣庄市',
            value: 152
        },
        {
            name: '滨州市',
            value: 189
        },
        {
            name: '潍坊市',
            value: 160
        },
        {
            name: '东营市',
            value: 80
        },
        {
            name: '青岛市',
            value: 180
        },
        {
            name: '烟台市',
            value: 190
        },
        {
            name: '威海市',
            value: 290
        },
        {
            name: '日照市',
            value: 190
        },
        {
            name: '济宁市',
            value: 190
        },
        {
            name: '莱芜市',
            value: 290
        },
    ];
    var max = 480,
        min = 9; // todo 
    var maxSize4Pin = 100,
        minSize4Pin = 20;

    var convertData = function(data) {
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


    option = {
        backgroundColor: '#020933',
        title: {
            top: 20,
            text: '“会员活跃度” - 山东省',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },

        tooltip: {
            trigger: 'item',
            //triggerOn: 'click',
            backgroundColor: 'transparent',
            alwaysShowContent: true,
            position(pos) {
                let position = getPosOrSize('pos', pos);
                return position;
            },
            formatter(params, p, a) {
                canvasAnimation(params);
                let size = getPosOrSize('size');
                let tooltipDom = `<canvas id="tCanvas" width="${size.width}" height="${size.height}">123</canvas>`;
                return tooltipDom;
            }
        },
        /*   legend: {
               orient: 'vertical',
               y: 'bottom',
               x: 'right',
                data:['pm2.5'],
               textStyle: {
                   color: '#fff'
               }
           },*/
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },
        visualMap: {
            show: false,
            min: 0,
            max: 500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {
                // color: ['#3B5077', '#031525'] // 蓝黑
                // color: ['#ffc0cb', '#800080'] // 红紫
                // color: ['#3C3B3F', '#605C3C'] // 黑绿
                //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                //color: ['#23074d', '#cc5333'] // 紫红
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#1488CC', '#2B32B2'] // 浅蓝
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿

            }
        },
        // toolbox: {
        //     show: true,
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'center',
        //     feature: {
        //             dataView: {readOnly: false},
        //             restore: {},
        //             saveAsImage: {}
        //             }
        // },
        geo: {
            show: true,
            map: 'jiangxi',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#3fdaff',
                    borderWidth: 2,
                    shadowColor: 'rgba(63, 218, 255, 0.5)',
                    shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            }
        },
        series: [{
                name: 'light',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function(val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F4E925'
                    }
                }
            },
            {
                type: 'map',
                map: 'jiangxi',
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#FFFFFF',
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                animation: false,
                data: data
            },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function(a, b) {
                    return b.value - a.value;
                }).slice(0, 5)),
                symbolSize: function(val) {
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
                        color: '#F4E925',
                        shadowBlur: 10,
                        shadowColor: '#05C3F9'
                    }
                },
                zlevel: 1
            },

        ]
    };
    myChart.setOption(option);
});

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
    constructor(id, config) {
        this.config = config
        this.totalTime = 0
        this.stage = new createjs.Stage(id)
        this.timeline = new TimelineMax({
            repeat: 0
        })
        this.g = new createjs.Graphics()
        this.lineShape = new createjs.Shape(this.g)
        this.textShape = new createjs.Shape()
        this.stage.addChild(this.lineShape, this.textShape)
        this.init()
        this.begin()
        this.update()
    }
    init() {
        this.start = [0, 0]
        if (left) {
            this.start[0] = this.config.width
        }
        if (top) {
            this.start[1] = this.config.height
        }
    }
    begin() {
        this.L1()
        this.L2()
        this.addText()
    }
    L1() {
        let me = this
        let c = me.config
        let tl = new TimelineMax()
        let scale = {
                s: 0
            },
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
            onUpdate() {
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
    L2() {
        // 只跟左右有关，只判断left
        let me = this
        let c = me.config
        let tl = new TimelineMax()
        let scale = {
            s: 0
        }
        tl.to(scale, c.L2.time, {
            s: 1,
            onUpdate() {
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
    addText() {
        // text框只与L2end有关，只需判断left即可，top不影响
        let me = this
        let c = me.config
        let tl = new TimelineMax()
        let scale = {
                s: 0
            },
            L2End = [me.L1End[0] + c.L2.long, me.L1End[1]]
        if (left) {
            L2End = [me.L1End[0] - c.L2.long, me.L1End[1]]
        }
        tl.to(scale, c.text.time, {
            s: 1,
            onStart() {
                let x = 0,
                    y = 0
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
            onUpdate() {
                me.text.alpha = scale.s
                me.textShape.alpha = scale.s
                me.update()
            }
        })
        this.timeline.add(tl, this.totalTime)
    }
    update() {
        this.stage.update()
    }
}
let EC = myChart; //echarts.getInstanceByDom(document.getElementById("chart-panel"))
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