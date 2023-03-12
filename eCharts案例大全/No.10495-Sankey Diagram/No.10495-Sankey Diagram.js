myChart.showLoading();
    myChart.hideLoading();
    
 var   data =  {"nodes":[
{"name":"启动APP(40%)"},
{"name":"首页"},
{"name":"购物车"},
{"name":"商详页(40%)"},
{"name":"退出App"},
{"name":"专题(60%)"}
],
"links":[
{"source": "启动APP(40%)", "target": "首页",  "value": 1.1},
{"source": "首页", "target": "购物车",  "value": 0.8},
{"source": "首页",  "target": "商详页(40%)",  "value": 2},
{"source": "首页",  "target": "退出App",  "value": 1.2},
{"source": "专题(60%)", "target": "首页",  "value": 2.9},
]}


    myChart.setOption(option = {
        title: {
            text: 'Sankey Diagram'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                nodeGap:100,
                nodeWidth: 50,
                type: 'sankey',
                data: data.nodes,
                links: data.links,
                focusNodeAdjacency: 'allEdges',
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.5
                    }
                }
            }
        ]
    });