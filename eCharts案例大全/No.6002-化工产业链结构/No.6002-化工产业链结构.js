option = {
    backgroundColor: '',
    grid: {
        left: '10%',
        top: 60,
        right: '10%',
        bottom: 60,
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 1000,
            edgeLength: 70,
            layoutAnimation: true,
        },
        symbolSize: 100,
        nodeScaleRatio: 1, //图标大小是否随鼠标滚动而变
        roam: true, //缩放
        draggable: true, //节点是否可以拖拽
        focusNodeAdjacency: false, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
        edgeSymbol: ['circle', 'arrow'], //线2头标记
        label: {
            normal: {
                show: true,
                position: 'inside',
                color: 'gold'
            }
        },
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 12,
                    color: '#fff'
                },
                formatter: "{c}"
            }
        },
        categories: [{
            name: '亲人',
        }, {
            name: '租户',
            symbol: 'rect'
        }],
        itemStyle: {
            normal: {
                borderColor: '#04f2a7',
                borderWidth: 2,
                shadowBlur: 10,
                shadowColor: '#04f2a7',
                color: '#001c43',
            }
        },
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 2,
                curveness: 0,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#e0f55a' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#639564' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }
            }
        },
        symbolKeepAspect: false,
        data: [{
                name: '上游',
            },
            {
                name: '原材料生产',
            },
            {
                name: '上游行业用电',
            },
           
              {
                name: '中游',

            },
            {
                name: '精细化工品制造',

            },
            {
                name: '中游行业用电',

            },
            {
                name: '下游',

            },
             {
                name: '化工制品及终端应用',

            },
            {
                name: '下游行业用电',

            },
            //以下为上游产品及服务的子节点
            {
                name: '煤',

            },{
                name: '天然气',

            },{
                name: '原油',

            },{
                name: '原盐',

            },{
                name: '硫铁矿',

            },{
                name: '磷矿石',

            },{
                name: '...',

            },
            //以下为上游用电行业的子节点
            {
                name: '煤炭开采和洗选业',

            },{
                name: '石油和天然气开采业',

            },{
                name: '黑色金属矿采选业',

            },{
                name: '有色金属矿采选业',

            },{
                name: '非金属矿采选业',

            },
             // 以下为中游产品及服务的子节点
             
             {
                name: '氮磷钾肥',

            }, {
                name: '合成橡胶',

            },{
                name: '有机硅',

            },{
                name: 'ABS',

            },{
                name: '....',

            },
            // 以下为中游行业用电的子节点
            {
                name: '石油、煤炭及其他燃料加工业',

            },{
                name: '化学原料和化学制品制造业',

            },
            
            // 以下为下游产品及服务的子节点
             {
                name: '建材',

            },{
                name: '玻璃',

            },{
                name: '轮胎',

            },{
                name: '医疗器具',

            },{
                name: '塑料',

            },{
                name: '涂料',

            },{
                name: '燃料',

            },{
                name: '.....',

            },
             // 以下为下游行业用电的子节点
             {
                name: '农业',

            }, {
                name: '纺织业',

            },{
                name: '林业',

            },{
                name: '建筑业',

            },{
                name: '房地产业',

            },{
                name: '纺织服装、服饰业',

            },{
                name: '家具制造业',

            },{
                name: '医药制造业',

            },{
                name: '橡胶和塑料制品业',

            },{
                name: '非金属矿物制品业',

            },{
                name: '汽车制造业',

            },{
                name: '电气机械和器材制造业',

            },{
                name: '铁路、船舶、航空航天和其他运输设备制造业',

            }, 
        ],
        links: [{
                source: 1,
                target: 0,
                value: ''
            },
            {
                source: 2,
                target: 0,
                value: ''
            },
            {
                source: 0,
                target: 3,
                value: ''
            },
            {
                source: 4,
                target: 3,
                value: ''
            },
            {
                source: 5,
                target: 3,
                value: ''
            },
            {
                source: 3,
                target: 6,
                value: ''

            },
             {
                source: 6,
                target: 7,
                value: ''

            },
             {
                source: 6,
                target: 8,
                value: ''

            },
            //上游产品及服务：1
            //上游行业用电：2
            //中游产品及服务：4
            //中游行业用电：5
            //下游产品及服务：7
            //下游行业用电：8
            
            //以下为上游产品及服务的子节点
             {
                source: 9,
                target: 1,
                value: ''

            }, {
                source: 10,
                target: 1,
                value: ''

            }, {
                source: 11,
                target: 1,
                value: ''

            }, {
                source: 12,
                target: 1,
                value: ''

            }, {
                source: 13,
                target: 1,
                value: ''

            }, {
                source: 14,
                target: 1,
                value: ''

            }, {
                source: 15,
                target: 1,
                value: ''

            },
            
            // 以下为上游用电行业的子节点
             {
                source: 16,
                target: 2,
                value: ''

            }, {
                source: 17,
                target: 2,
                value: ''

            }, {
                source: 18,
                target: 2,
                value: ''

            }, {
                source: 19,
                target: 2,
                value: ''

            }, {
                source: 20,
                target: 2,
                value: ''

            },
             // 以下为中游产品及服务的子节点
              {
                source: 21,
                target: 4,
                value: ''

            }, {
                source: 22,
                target: 4,
                value: ''

            }, {
                source: 23,
                target: 4,
                value: ''

            }, {
                source: 24,
                target: 4,
                value: ''

            }, {
                source: 25,
                target: 4,
                value: ''

            },
             // 以下为中游行业用电的子节点
              {
                source: 26,
                target: 5,
                value: ''

            }, {
                source: 27,
                target: 5,
                value: ''

            },
             
             // 以下为下游产品及服务的子节点
              {
                source: 28,
                target: 7,
                value: ''

            }, {
                source: 29,
                target: 7,
                value: ''

            }, {
                source: 30,
                target: 7,
                value: ''

            }, {
                source: 31,
                target: 7,
                value: ''

            }, {
                source: 32,
                target: 7,
                value: ''

            }, {
                source: 33,
                target: 7,
                value: ''

            }, {
                source: 34,
                target: 7,
                value: ''

            }, {
                source: 35,
                target: 7,
                value: ''

            },
             
             // 以下为下游行业用电的子节点
             {
                source: 36,
                target: 8,
                value: ''

            }, {
                source: 37,
                target: 8,
                value: ''

            }, {
                source: 38,
                target: 8,
                value: ''

            }, {
                source: 39,
                target: 8,
                value: ''

            }, {
                source: 40,
                target: 8,
                value: ''

            }, {
                source: 41,
                target: 8,
                value: ''

            }, {
                source: 42,
                target: 8,
                value: ''

            }, {
                source: 43,
                target: 8,
                value: ''

            }, {
                source: 44,
                target: 8,
                value: ''

            }, {
                source: 45,
                target: 8,
                value: ''

            }, {
                source: 46,
                target: 8,
                value: ''

            }, {
                source: 47,
                target: 8,
                value: ''

            }, {
                source: 48,
                target: 8,
                value: ''

            },
            
        ],
    }]
}