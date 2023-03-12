var datas = [{
        name: '人员1',
        id: '1-1',
        category: 1,
        draggable: true,
    }, {
        name: '文献',
        id: '3',
        category: 3,
        draggable: true
    }, {
        name: '机构',
        id: '2',
        category: 2,
        draggable: true
    },
    {
        name: '项目',
        id: '0',
        draggable: true
    },
    {
        name: '人员',
        id: '1',
        category: 1,
        draggable: true,
    }

];
var lines = [{
        source: '1',
        target: '1-1',
        value: ''
    }, {
        source: '0',
        target: '1',
        value: ''
    },
    {
        source: '0',
        target: '2',
        value: ''
    },
    {
        source: '0',
        target: '3',
        value: ''
    }
];
var option = {
    title: {
        text: ''
    },
    color:["#BB8FCE","#0099FF","#5DADE2",],
    tooltip: {},
    animationDurationUpdate: 1500,
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12
            },
        }
    },
    series: [{
        type: 'graph',
        layout: 'force', //采用力引导布局
        symbolSize: 45,
        legendHoverLink: true, //启用图例 hover 时的联动高亮。
        focusNodeAdjacency: false, //在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
        roam: true,
        label: {
            normal: {
                show: true,
                position: 'inside',
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
        categories:['机构','文献','人员'],
        // categories: [{
        //     itemStyle: {
        //         normal: {
        //             color: "#BB8FCE",
        //         }
        //     }
        // }, {
        //     itemStyle: {
        //         normal: {
        //             color: "#0099FF",
        //         }
        //     }
        // }, {
        //     itemStyle: {
        //         normal: {
        //             color: "#5DADE2",
        //         }
        //     }
        // }],
        data: datas,
        links: lines,
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 1,
                curveness: 0
            }
        }
    }]
};