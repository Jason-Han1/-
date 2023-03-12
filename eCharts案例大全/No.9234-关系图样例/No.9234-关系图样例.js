let data = {
    nodes: [{
        name: '国内',
        draggable: true,
    }, {
        name: '华南',
        category: 1,
        x: 1000,
        y: 300,
        fixed: true,
        draggable: true,
    }, {
        name: '华中',
        category: 1,
        x: 150,
        y: 300,
        fixed: true,
        draggable: true,
    }, {
        name: '华东',
        category: 1,
        draggable: true,
    }, {
        name: '郑志勇',
        category: 2,
        draggable: true,
    }, {
        name: '赵英杰',
        category: 2,
        draggable: true,
    }, {
        name: '王承军',
        category: 2,
        draggable: true,
    }, {
        name: '陈卫东',
        category: 2,
        draggable: true,
    }, {
        name: '邹劲松',
        category: 2,
        draggable: true,
    }, {
        name: '赵成',
        category: 2,
        draggable: true,
    }, {
        name: '陈现忠',
        category: 2,
        draggable: true,
    }, {
        name: '陶泳',
        category: 2,
        draggable: true,
    }, {
        name: '王德福',
        category: 2,
        draggable: true,
    }],
    links: [{
        source: 0,
        target: 1,
        category: 0,
        value: '夫妻'
    }, {
        source: 0,
        target: 2,
        value: '子女'
    }, {
        source: 0,
        target: 3,
        value: '夫妻'
    }, {
        source: 1,
        target: 4,
        value: '父母'
    }, {
        source: 1,
        target: 5,
        value: '表亲'
    }, {
        source: 1,
        target: 6,
        value: '朋友'
    }, {
        source: 2,
        target: 7,
        value: '朋友'
    }, {
        source: 2,
        target: 8,
        value: '叔叔'
    }, {
        source: 2,
        target: 9,
        value: '朋友'
    }, {
        source: 3,
        target: 10,
        value: '爱人'
    }, {
        source: 3,
        target: 11,
        value: '朋友'
    }, {
        source: 3,
        target: 12,
        value: '朋友'
    }, {
        source: 3,
        target: 13,
        value: '朋友'
    }]
}


option = {
    title: {
        text: '人员销售状况'
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
            top: "top",
            left: "left",
        }
    },
    legend: {
        // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） | 'vertical'（垂直）
        orient: 'vertical',
        // x 设置水平安放位置，默认全图居中，可选值：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        x: 'left',
        // y 设置垂直安放位置，默认全图顶端，可选值：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
        y: 'center',
        //    itemWidth: 24,   // 设置图例图形的宽
        //  itemHeight: 18,  // 设置图例图形的高
        textStyle: {
            color: '#666000' // 图例文字颜色
        },
        // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
        itemGap: 30,
        data: ["华南", "华中", '华东']
    },
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: 35,
            focusNodeAdjacency: true,
            roam: true,
            categories: [{
                // name: '夫妻',
                itemStyle: {
                    normal: {
                        // color: "#009800",
                    }
                }
            }, {
                // name: '战友',
                itemStyle: {
                    normal: {
                        // color: "#4592FF",
                    }
                }
            }, {
                // name: '亲戚',
                itemStyle: {
                    normal: {
                        // color: "#3592F",
                    }
                }
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
                repulsion: 300
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
                normal: {
                    show: false, //显示连线的文字
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: "{c}"
                }
            },
            data: data.nodes,
            links: data.links,
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