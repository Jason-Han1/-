//数据请点击上方脚本按钮,查看数据文件地址.
var lineColor = '#e53935';
var bgColor = {
    type: 'radial',
    x: 0.5,
    y: 0.5,
    r: 0.7,
    colorStops: [{
        offset: 0.3,
        color: '#000' // 0% 处的颜色
    }, {
        offset: 0.5,
        color: 'rgba(30,10,40 ,1)' // 100% 处的颜色
    }, {
        offset: 1,
        color: '#001' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
};

var impotent = 8;
var bookimpotent = 50;

for (var i = 0; i < nodes.length; i++) {
    node = nodes[i];
    v = node.value;
    fontSize1 = 3;
    
        node.itemStyle = null;



    if (node.category == '书') {
        //nodes.splice(i, 1);
        //node.value=1;
        if (v < bookimpotent) {
            node.symbolSize = 10; //书籍只是联系起来的线索,所以大小固定就行了.
        } else {
            node.symbolSize = (v + 10) * 1.5; //重要标签放大
            fontSize1 = fontSize1 + v/3; //字体大小与标签的值大小相关
        }
        node.label = {
            normal: {
                fontSize: fontSize1,
                show: node.value >= bookimpotent //超出阈值的才显示标签
            }
        };
    } else {
        if (node.category == '标签' && v < 8) {
            node.category = '低频标签';
        }else{
        if (node.category == '标签' ) {
            node.category = '阅读主线';
        }
        }
        if (v > impotent) {
            node.symbolSize = (v + 10) * 3; //重要标签放大
            fontSize1 = fontSize1 + v+10; //字体大小与标签的值大小相关
            if (fontSize1 > 22) { //最大字体不超过一定的值.
                fontSize1 = 22;
            }
        } else {
            node.symbolSize = (v + 10) * 1.5; //次要标签放大倍数,视觉上忽略次要元素.
        }
        node.label = {
            normal: {
                fontSize: fontSize1,
                show: node.value > impotent //超出阈值的才显示标签
            }
        };
    }
}

var categories = [

    {
        name: '地点'
    },
    {
        name: '阅读主线'
    },
    {
        name: '活动'
    },
    {
        name: '题材'
    },
    {
        name: '人物'
    },
    {
        name: '阅读感受'
    },
    {
        name: '书'
    },
    {
        name: '低频标签'
    },
];
var selected1 = {
    '书': true,
    '地点': false,
    '低频标签': false,
    '人物': false,
    '阅读主线': true,
    '阅读感受': false,
    '活动': false,
    '题材': false,
};



var option = {
    title: {
        text: '2018年阅读宇宙',
        subtext: '书籍就像人类智慧的宇宙，每本书就像一个孤独的星球。\n真理的线索分散在不同的书籍中。\n通过书将自己理解到的内容联系在一起。\n将一年选择阅读的书籍的隐秘关联性显现出来。\n 请使用图例控制显示的维度。',
        textStyle: {
            fontSize: 25,
            textBorderWidth:5,
            textBorderColor:'#FFF',
            shadowBlur:5,
            shadowColor:'#000',
            shadowOffsetX:2,
            shadowOffsetY:2
        }
    },
    backgroundColor: bgColor,
    legend: [{
        //selectedMode: 'single',
        bottom: 25,
        left: 'center',
        data: categories,
        show: true,
        selected: selected1,
        textStyle: {
            color: '#fff'
        }

    }],
    tooltip: {},
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    animationDurationUpdate: 2,
    animationEasingUpdate: 'quinticInOut',

    series: [{
        type: 'graph',
        //tooltip: {},
        //top:'30%',
        //left:'10%',
        //width: '70%',
        //height: '50%',
        ribbonType: true,
        //layout: 'circular',
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [9, 10],
        circular: {
            rotateLabel: true
        },


        layout: 'force',

        force: {
            //initLayout: 'circular',
            repulsion: 400,
            gravity: 0.4,
            edgeLength: [1, 10],
            layoutAnimation: true,
        },

        roam: true,
        focusNodeAdjacency: true,
        hoverAnimation: true,
        label: {
            normal: {
                //show:false,
                position: 'center',
                //fontWeight: 'bold',
                fontSize: 10,
                formatter: '{b}',
                normal: {
                    textStyle: {
                        color: '#fff',
                        fontFamily: '宋体'
                    }
                }
            }
        },
        draggable: true,
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 2,
                shadowBlur: 10,
                shadowColor: 'rgba(255,255, 255, 0.8)',
                opacity: 0.8
            }
        },
        label: {
            position: 'inside',
            color: '#fff',
            fontWeight: 'bold',
            formatter: '{b}'
        },
        lineStyle: {
            color: 'target',
            curveness: 0.3
        },
        emphasis: {
            lineStyle: {
                width: 10
            }
        },
        categories: categories,
        data: nodes,
        // links: [],
        links: links
    }]
};