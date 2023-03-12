let dataRel=[
                {
                name: '实体',
                draggable: false, // 是否可以拖拽，默认false
                category: 0, // 这是种类，运维1测试2应用3实施4开发5
                number: 0, // 这是编号 非必须，目的仅为方便编写line
                value: [300, 45], //图形大小
                symbolSize: 80,
                showNum: 25 //节点需要显示的额外内容
            }, {
                name: '环境因子',
                number: 1,
                category: 1,
                draggable: true,
                value: 40,
                showNum: 35
            }, {
                name: '物质',
                number: 2,
                category: 1,
                draggable: true,
                value: 45,
                showNum: 35
            }, {
                name: '生物',
                number: 3,
                category: 1,
                draggable: true,
                value: 45,
                showNum: 35
            }, {
                name: '浮游生物',
                number: 4,
                category: 1,
                draggable: false,
                value: [300, 100],
                 symbolSize: 80,
                showNum: 35
            }, {
                name: '浮游植物',
                number: 5,
                category: 3,
                draggable: true,
                value: 45,
                showNum: 35
            }, {
                name: '浮游动物',
                number: 6,
                category: 3,
                draggable: true,
                value: 45,
                showNum: 35
            }, {
                name: '原生生物',
                number: 7,
                category: 2,
                draggable: true,
                value: 45,
                showNum: 35
            }, {
                name: '细菌',
                number: 8,
                category: 2,
                draggable: true,
                value: 45,
                showNum: 35
            }, {
                name: '灾害事件',
                number: 9,
                category: 1,
                draggable: true,
                value: 45,
                showNum: 35
            }, {
                name: '赤潮',
                number: 10,
                category: 2,
                draggable: true,
                value: 45,
                showNum: 35
            }, {
                name: '水母灾害',
                number: 11,
                category: 2,
                draggable: true,
                value: 35,
                showNum: 35
            }]
let dataLink= [
                {
                source: 0, // 可以用name 可以用number，但name不能重名
                target: 1,
                value: '一级'
            }, {
                source: 0, // 可以用name 可以用number，但name不能重名
                target: 2,
                value: '一级'
            }, {
                source: 0, // 可以用name 可以用number，但name不能重名
                target: 3,
                value: '一级'
            }, {
                source: 0, // 可以用name 可以用number，但name不能重名
                target: 9,
                value: '一级'
            }, {
                source: 3, // 可以用name 可以用number，但name不能重名
                target: 4,
                value: '二级-生物'
            }, {
                source: 3, // 可以用name 可以用number，但name不能重名
                target: 7,
                value: '二级-生物'
            }, {
                source: 3, // 可以用name 可以用number，但name不能重名
                target: 8,
                value: '二级-生物'
            }, {
                source: 4, // 可以用name 可以用number，但name不能重名
                target: 5,
                value: '三级-灾害事件'
            }, {
                source: 4, // 可以用name 可以用number，但name不能重名
                target: 6,
                value: '三级-灾害事件'
            }, {
                source: 9, // 可以用name 可以用number，但name不能重名
                target: 10,
                value: '二级-灾害事件'
            }, {
                source: 9, // 可以用name 可以用number，但name不能重名
                target: 11,
                value: '二级-灾害事件'
            }, ]
option = {
    title: {
        text: '实体关系网络'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    legend: {
        x: "center",
        show: true,
        data: [] // 此处不显示根节点学生
    },
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: function(size) {
                return size;
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: "{c}"
                }
            },
            force: {
                repulsion: 2500,
                edgeLength: [10, 50]
            },
            focusNodeAdjacency: true,
            roam: true,
            categories: [{
                name: '用户',
            }, {
                name: '话题',
            }, {
                name: '测试',
                // itemStyle: { 可配置颜色
                //     normal: {
                //         color: "blue",
                //     }
                // }
            }, {
                name: '应用',
            }, {
                name: '实施',
            }, {
                name: '开发',
            }],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                }
            },
            force: {
                repulsion: 1000
            },
            tooltip: {
                formatter: function(node) { // 区分连线和节点，节点上额外显示其他数字
                    if (!node.value) {
                        return node.data.name;
                    } else {
                        return node.data.name + ":" + node.data.showNum;
                    }
                },
            },
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0.3
                }
            },
            data: dataRel,
            links:dataLink
        }
    ]
};