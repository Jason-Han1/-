/**
*   该版本为只读版本，想修改的同学请移步
*   https://gallery.echartsjs.com/editor.html?c=xLSe_4jfMh
*   @author liang
*   2019.01.09
*/
let data = [
    { name: '鄂尔多斯', value: 12 },
    { name: '招远', value: 12 },
    { name: '舟山', value: 12 },
    { name: '齐齐哈尔', value: 14 },
    { name: '大庆', value: 27 },
    { name: '承德', value: 25 },
    { name: '厦门', value: 26 },
    { name: '汕尾', value: 26 },
    { name: '潮州', value: 26 },
    { name: '丹东', value: 27 },
    { name: '太仓', value: 27 },
    { name: '曲靖', value: 27 },
    { name: '烟台', value: 28 },
    { name: '福州', value: 29 },
    { name: '渭南', value: 72 },
    { name: '宝鸡', value: 72 },
    { name: '焦作', value: 75 },
    { name: '北京', value: 79 },
    { name: '徐州', value: 79 },
    { name: '衡水', value: 80 },
    { name: '包头', value: 80 },
    { name: '绵阳', value: 80 },
    { name: '乌鲁木齐', value: 84 },
    { name: '枣庄', value: 84 }
];
let geoCoordMap = {
    '海门':[121.15,31.89],
    '鄂尔多斯':[109.781327,39.608266],
    '招远':[120.38,37.35],
    '舟山':[122.207216,29.985295],
    '齐齐哈尔':[123.97,47.33],
    '盐城':[120.13,33.38],
    '赤峰':[118.87,42.28],
    '青岛':[120.33,36.07],
    '乳山':[121.52,36.89],
    '金昌':[102.188043,38.520089],
    '泉州':[118.58,24.93],
    '莱西':[120.53,36.86],
    '日照':[119.46,35.42],
    '胶南':[119.97,35.88],
    '南通':[121.05,32.08],
    '拉萨':[91.11,29.97],
    '云浮':[112.02,22.93],
    '梅州':[116.1,24.55],
    '文登':[122.05,37.2],
    '上海':[121.48,31.22],
    '攀枝花':[101.718637,26.582347],
    '威海':[122.1,37.5],
    '承德':[117.93,40.97],
    '厦门':[118.1,24.46],
    '汕尾':[115.375279,22.786211],
    '潮州':[116.63,23.68],
    '丹东':[124.37,40.13],
    '太仓':[121.1,31.45],
    '曲靖':[103.79,25.51],
    '烟台':[121.39,37.52],
    '福州':[119.3,26.08],
    '瓦房店':[121.979603,39.627114],
    '即墨':[120.45,36.38],
    '抚顺':[123.97,41.97],
    '玉溪':[102.52,24.35],
    '张家口':[114.87,40.82],
    '阳泉':[113.57,37.85],
    '莱州':[119.942327,37.177017],
    '湖州':[120.1,30.86],
    '汕头':[116.69,23.39],
    '昆山':[120.95,31.39],
    '宁波':[121.56,29.86],
    '湛江':[110.359377,21.270708],
    '揭阳':[116.35,23.55],
    '荣成':[122.41,37.16],
    '连云港':[119.16,34.59],
    '葫芦岛':[120.836932,40.711052],
    '常熟':[120.74,31.64],
    '东莞':[113.75,23.04],
    '河源':[114.68,23.73],
    '淮安':[119.15,33.5],
    '泰州':[119.9,32.49],
    '南宁':[108.33,22.84],
    '营口':[122.18,40.65],
    '惠州':[114.4,23.09],
    '江阴':[120.26,31.91],
    '蓬莱':[120.75,37.8],
    '韶关':[113.62,24.84],
    '嘉峪关':[98.289152,39.77313],
    '广州':[113.23,23.16],
    '延安':[109.47,36.6],
    '太原':[112.53,37.87],
    '清远':[113.01,23.7],
    '中山':[113.38,22.52],
    '昆明':[102.73,25.04],
    '寿光':[118.73,36.86],
    '盘锦':[122.070714,41.119997],
    '长治':[113.08,36.18],
    '深圳':[114.07,22.62],
    '珠海':[113.52,22.3],
    '宿迁':[118.3,33.96],
    '咸阳':[108.72,34.36],
    '铜川':[109.11,35.09],
    '平度':[119.97,36.77],
    '佛山':[113.11,23.05],
    '海口':[110.35,20.02],
    '江门':[113.06,22.61],
    '章丘':[117.53,36.72],
    '肇庆':[112.44,23.05],
    '大连':[121.62,38.92],
    '临汾':[111.5,36.08],
    '吴江':[120.63,31.16],
    '石嘴山':[106.39,39.04],
    '沈阳':[123.38,41.8],
    '苏州':[120.62,31.32],
    '茂名':[110.88,21.68],
    '嘉兴':[120.76,30.77],
    '长春':[125.35,43.88],
    '胶州':[120.03336,36.264622],
    '银川':[106.27,38.47],
    '张家港':[120.555821,31.875428],
    '三门峡':[111.19,34.76],
    '锦州':[121.15,41.13],
    '南昌':[115.89,28.68],
    '柳州':[109.4,24.33],
    '三亚':[109.511909,18.252847],
    '自贡':[104.778442,29.33903],
    '吉林':[126.57,43.87],
    '阳江':[111.95,21.85],
    '泸州':[105.39,28.91],
    '西宁':[101.74,36.56],
    '宜宾':[104.56,29.77],
    '呼和浩特':[111.65,40.82],
    '成都':[104.06,30.67],
    '大同':[113.3,40.12],
    '镇江':[119.44,32.2],
    '桂林':[110.28,25.29],
    '张家界':[110.479191,29.117096],
    '宜兴':[119.82,31.36],
    '北海':[109.12,21.49],
    '西安':[108.95,34.27],
    '金坛':[119.56,31.74],
    '东营':[118.49,37.46],
    '牡丹江':[129.58,44.6],
    '遵义':[106.9,27.7],
    '绍兴':[120.58,30.01],
    '扬州':[119.42,32.39],
    '常州':[119.95,31.79],
    '潍坊':[119.1,36.62],
    '重庆':[106.54,29.59],
    '台州':[121.420757,28.656386],
    '南京':[118.78,32.04],
    '滨州':[118.03,37.36],
    '贵阳':[106.71,26.57],
    '无锡':[120.29,31.59],
    '本溪':[123.73,41.3],
    '克拉玛依':[84.77,45.59],
    '渭南':[109.5,34.52],
    '马鞍山':[118.48,31.56],
    '宝鸡':[107.15,34.38],
    '焦作':[113.21,35.24],
    '句容':[119.16,31.95],
    '北京':[116.46,39.92],
    '徐州':[117.2,34.26],
    '衡水':[115.72,37.72],
    '包头':[110,40.58],
    '绵阳':[104.73,31.48],
    '乌鲁木齐':[87.68,43.77],
    '枣庄':[117.57,34.86],
    '杭州':[120.19,30.26],
    '淄博':[118.05,36.78],
    '鞍山':[122.85,41.12],
    '溧阳':[119.48,31.43],
    '库尔勒':[86.06,41.68],
    '安阳':[114.35,36.1],
    '开封':[114.35,34.79],
    '济南':[117,36.65],
    '德阳':[104.37,31.13],
    '温州':[120.65,28.01],
    '九江':[115.97,29.71],
    '邯郸':[114.47,36.6],
    '临安':[119.72,30.23],
    '兰州':[103.73,36.03],
    '沧州':[116.83,38.33],
    '临沂':[118.35,35.05],
    '南充':[106.110698,30.837793],
    '天津':[117.2,39.13],
    '富阳':[119.95,30.07],
    '泰安':[117.13,36.18],
    '诸暨':[120.23,29.71],
    '郑州':[113.65,34.76],
    '哈尔滨':[126.63,45.75],
    '聊城':[115.97,36.45],
    '芜湖':[118.38,31.33],
    '唐山':[118.02,39.63],
    '平顶山':[113.29,33.75],
    '邢台':[114.48,37.05],
    '德州':[116.29,37.45],
    '济宁':[116.59,35.38],
    '荆州':[112.239741,30.335165],
    '宜昌':[111.3,30.7],
    '义乌':[120.06,29.32],
    '丽水':[119.92,28.45],
    '洛阳':[112.44,34.7],
    '秦皇岛':[119.57,39.95],
    '株洲':[113.16,27.83],
    '石家庄':[114.48,38.03],
    '莱芜':[117.67,36.19],
    '常德':[111.69,29.05],
    '保定':[115.48,38.85],
    '湘潭':[112.91,27.87],
    '金华':[119.64,29.12],
    '岳阳':[113.09,29.37],
    '长沙':[113,28.21],
    '衢州':[118.88,28.97],
    '廊坊':[116.7,39.53],
    '菏泽':[115.480656,35.23375],
    '合肥':[117.27,31.86],
    '武汉':[114.31,30.52],
    '大庆':[125.03,46.58]
};

let convertData = function (data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
        let geoCoord = geoCoordMap[data[i].name];
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
    title: {
        top: 10,
        text: '引导线tooltip轮播动画效果',
        subtext: '点击查看github最新代码',
        sublink: 'https://github.com/Mying666/myEcTooltip',
        subtextStyle: {
            color: '#ccc'
        },
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    backgroundColor: '#404a59',
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
            }).slice(0, 50)),
            symbolSize: function (val) {
                return val[2] / 5;
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
