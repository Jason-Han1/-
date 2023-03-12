option = {
    backgroundColor: '#1a4377',
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
        symbolSize: 70,
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
                name: '李富贵',
            },
            {
                name: '王桂花',
            },
            {
                name: '李思思',
            },
            {
                name: '自住房屋',

            },
            {
                name: '车子',

            },
            {
                name: '租房',

            },
            {
                name: '黄涛',
            },
            {
                name: '于海',

            },
            {
                name: '张柏',
            },
            {
                name: '付梦杰',
            }
        ],
        links: [{
                source: 0,
                target: 1,
                value: '夫妻'
            },
            {
                source: 0,
                target: 2,
                value: '父女'
            },
            {
                source: 0,
                target: 3,
                value: '自住'
            },
            {
                source: 0,
                target: 4,
                value: '车主'
            },
            {
                source: 0,
                target: 5,
                value: '租户'
            },
            {
                source: 5,
                target: 6,
                value: '租赁'

            },
            {
                source: 5,
                target: 7,
                value: '租赁'
            },
            {
                source: 5,
                target: 8,
                value: '租赁'
            },
            {
                source: 5,
                target: 9,
                value: '租赁'
            }
        ],
    }]
}