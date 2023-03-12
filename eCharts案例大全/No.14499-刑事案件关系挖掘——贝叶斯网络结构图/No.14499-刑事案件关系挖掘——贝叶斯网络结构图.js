option = {
    title: {
        text: '刑事案件关系挖掘——贝叶斯网络结构图'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12
            },
        }
    },
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: 58,
            focusNodeAdjacency: true,
            roam: true,
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
            edgeSymbolSize: [4, 50],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: "{c}"
                }
            },
            data: [{
                name: '刑事案件数量',
                draggable: true,
            }, {
                name: 'GDP',
                category: 1,
                draggable: true,
            }, {
                name: '受教育水平',
                category: 1,
                draggable: true,
            }, {
                name: '人口密度',
                category: 1,
                draggable: true,
            }, {
                name: '摄像头',
                category: 1,
                draggable: true,
            }, {
                name: '岗亭数目',
                category: 1,
                draggable: true,
            }, {
                name: '失业率',
                category: 1,
                draggable: true,
            }, {
                name: '人均收入',
                category: 1,
                draggable: true,
            }, {
                name: '社会保险缴纳水平',
                category: 1,
                draggable: true,
            }],
            links: [{
                source: 0,
                target: 1,
                value: 0.25
            }, {
                source: 0,
                target: 2,
                value: 0.18
            }, {
                source: 0,
                target: 3,
                value: 0.16
            }, {
                source: 0,
                target: 4,
                value: 0.22
            }, {
                source: 1,
                target: 2,
                value: 0.24
            }, {
                source: 0,
                target: 5,
                value: 0.25
            }, {
                source: 4,
                target: 5,
                value: 0.13
            }, {
                source: 2,
                target: 8,
                value: 0.18
            }, {
                source: 0,
                target: 12,
                value: 0.14
            }, {
                source: 6,
                target: 11,
                value: 0.12
            }, {
                source: 6,
                target: 3,
                value: 0.11
            },{
                source: 2,
                target: 7,
                value: 0.10
            }, {
                source: 1,
                target: 3,
                value: 0.13
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0
                }
            }
        }
    ]
};