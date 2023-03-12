/*
 * 1. 点击高亮周边节点
 * 2. 点击空白取消高亮节点
 * 3. 可拖拽
 */
var uploadedDataURL = "/asset/get/s/data-1547519076593-iDKvm1_Je.json";
myChart.showLoading();
// dat.gui
app.configParameters = {
    pie1Process: {
        min: 0,
        max: 100
    },
    pie2Process: {
        min: 0,
        max: 100
    },
    pie3Process: {
        min: 0,
        max: 100
    },
};
app.config = {
    message: 'dat.gui',
    pie1Process: 25,
    pie2Process: 50,
    pie3Process: 75
};

$.getJSON(uploadedDataURL, function (graph) {
    myChart.hideLoading();

    var categories = [];
    for (var i = 0; i < 9; i++) {
        categories[i] = {
            name: '类目' + i
        };
    }
    graph.nodes.forEach(function (node) {
        node.itemStyle = null;
        node.value = node.symbolSize;
        node.symbolSize /= 1.5;
        node.symbolSize = 10;
        node.label = {
            normal: {
                show: node.symbolSize > 30
            }
        };
        
        // node.x = node.y = null;
        // 增强节点拖拽
        node.draggable = true;
        // 固定 position
        node.fixed = true;
        node.category = node.attributes.modularity_class;
    });
    option = {
        title: {
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [{
            // selectedMode: 'single',
            data: categories.map(function (a) {
                return a.name;
            })
        }],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'force',
                force: {
                    repulsion: 100
                },
                data: graph.nodes,
                links: graph.links,
                categories: categories,
                roam: true,
                // 禁止 hover 高亮周边节点
                focusNodeAdjacency: false,
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
    
    // 拖动固定位置
    myChart.on('mouseup', (param) => {
        
        // 仅处理 Node 节点
        if (param.dataType === 'node') {

            graph.nodes[param.dataIndex] = param.data;
            myChart.setOption({
                series: [{
                    name: 'Les Miserables',
                    data: graph.nodes
                }]
            });        
        }
    });
    
    
    let  focusNodeAdjacency;
    
    let clearFocusNodeAdjacency = () => {
        if (focusNodeAdjacency) {
            myChart.dispatchAction({
                type: 'unfocusNodeAdjacency',
                dataIndex: focusNodeAdjacency
            });
            focusNodeAdjacency = null;
        }
    }
    myChart.on('click', params => {
        clearFocusNodeAdjacency();
        if (params.dataType === 'node') {
            focusNodeAdjacency = params.dataIndex;
            myChart.dispatchAction({
                type: 'focusNodeAdjacency',
                dataIndex: params.dataIndex
            })
        }
    })
    
    myChart.getZr().on('click', event => {
      if(!event.target){
          clearFocusNodeAdjacency();
      }
    });
});