var data = ['文艺', '人文社科', '经管', '励志',
    '科技', '生活'
];
var c = [];
var m = [];
var n = [];
var l = [800, 700, 750, 850, 1000, 1200];
var a = ["星星上的人", "心无挂碍", "解忧杂货店", "小王子", "次第花开", "老人与海", "影响力", "金字塔原理", "阿米巴经营", "断舍离", "非暴力沟通", "人性的弱点营", "时间重生", "虚空：宇宙源起何处", "无限之书：从宇宙边", "太空之眼 : 哈勃", "肌肉健美训练图解", "如果可以去流浪", "孤独星球", "最好的时光在路上"];
var d = [280, 220, 300, 200, 240, 260, 300, 200, 250, 300, 200, 350, 300, 200, 180, 320, 320, 350, 250, 280];
for (var i = 0; i < data.length; i++) {
    c.push({
        "name": data[i],
        "value": l[i],
        "symbolSize": 9,
        "category": data[i],
        "draggable": "true"
    });
    m.push({
        "source": "借阅频次高的书类进行排名",
        "target": data[i]
    });
    n.push({
        'name': data[i]
    });
}
for (var k = 0; k < a.length; k++) {
    if (k < 3) {
        c.push({
            "name": a[k],
            "value": d[k],
            "symbolSize": 18,
            "category": "文艺",
            "draggable": "true"
        });
        m.push({
            "source": "文艺",
            "target": a[k]
        })
    } else if (k < 6) {
        c.push({
            "name": a[k],
            "value": d[k],
            "symbolSize": 18,
            "category": "人文社科",
            "draggable": "true"
        });
        m.push({
            "source": "人文社科",
            "target": a[k]
        })
    } else if (k < 9) {
        c.push({
            "name": a[k],
            "value": d[k],
            "symbolSize": 18,
            "category": "经管",
            "draggable": "true"
        });
        m.push({
            "source": "经管",
            "target": a[k]
        })
    } else if (k < 12) {
        c.push({
            "name": a[k],
            "value": d[k],
            "symbolSize": 18,
            "category": "励志",
            "draggable": "true"
        });
        m.push({
            "source": "励志",
            "target": a[k]
        })
    } else if (k < 16) {
        c.push({
            "name": a[k],
            "value": d[k],
            "symbolSize": 18,
            "category": "科技",
            "draggable": "true"
        });
        m.push({
            "source": "科技",
            "target": a[k]
        })
    } else if (k < 20) {
        c.push({
            "name": a[k],
            "value": d[k],
            "symbolSize": 18,
            "category": "生活",
            "draggable": "true"
        });
        m.push({
            "source": "生活",
            "target": a[k]
        })
    }
}
c.push({
    "name": "借阅频次高的书类进行排名",
    "symbolSize": 3,
    "category": "借阅频次高的书类进行排名",
    "draggable": "true",
    "value": []
});
/*   d.push( {
       "source": "人文学院",
       "target": "汉语言文学(应用语言学)"
   });*/
option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: "书类排名",
    },
    tooltip: {},
    legend: [{
        formatter: function(name) {
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        selectedMode: 'false',
        bottom: 20,
        data: ['文艺', '人文社科', '经管', '励志',
            '科技', '生活', '音像'
        ]
    }],
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '借阅频次高的书类进行排名',
        type: 'graph',
        layout: 'force',

        force: {
            repulsion: 50
        },
        data: c,
        links: m,
        categories: n,
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {

                show: true,
                position: 'top',

            }
        },
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};