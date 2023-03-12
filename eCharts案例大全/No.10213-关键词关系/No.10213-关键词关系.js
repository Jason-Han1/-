var option = {
    title: {
        text: '关键词关系',
        top: 'top',
        left: 'left'
    },
    tooltip: {},
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            name: '关键词关系',
            type: 'graph',
            layout: 'force',
            data: [
                {"name":"赞助机构A","value":20},
                {"name":"A","value":10},
                {"name":"B","value":9},
                {"name":"C","value":9},
                {"name":"D","value":9}
            ],
            links: [
                {"source":"A","target":"C"},
                {"source":"A","target":"D"},
                {"source":"B","target":"C"},
                {"source":"C","target":"D"},
                {"source":"赞助机构A","target":"A"},
                {"source":"赞助机构A","target":"B"},
                {"source":"赞助机构A","target":"C"},
                {"source":"赞助机构A","target":"D"}
            ],
            symbolSize:(value, params) => {
                return value
            },
            draggable:true,
            force: {
                initLayout: 'circular',
                repulsion : 1000,
                edgeLength: 50
            },
            roam: true,
            focusNodeAdjacency: true,
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
            },
            label: {
                position: 'right',
                formatter: '{b}'
            },
            lineStyle: {
                color: 'source',
                curveness: 0.3
            },
            emphasis: {
                lineStyle: {
                    width: 10
                }
            }
        }
    ]
};
myChart.setOption(option);