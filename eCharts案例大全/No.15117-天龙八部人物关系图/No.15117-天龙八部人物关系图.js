var uploadedDataURL = "asset/get/s/data-1499235712572-BkKKrbcNZ.gexf";

myChart.showLoading();
$.get(uploadedDataURL, function(xml) {
    myChart.hideLoading();

    var graph = echarts.dataTool.gexf.parse(xml);
    var categories = [];
    for (var i = 0; i < 9; i++) {
        categories[i] = {
            name: '类目' + i
        };
    }
    graph.nodes.forEach(function(node) {
        node.itemStyle = null;
        node.value = node.symbolSize;
        node.label = {
            normal: {
                show: node.symbolSize > 0
            }
        };
        node.category = node.attributes.modularity_class;
    });
    option = {
        title: {
            text: '《天龙八部》人物关系图',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [{
            // selectedMode: 'single',
            data: categories.map(function(a) {
                return a.name;
            })
        }],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            name: '天龙八部',
            type: 'graph',
            layout: 'force',
            data: graph.nodes,
            links: graph.links,
            categories: categories,
            focusNodeAdjacency: true,
            roam: true,
            label: {
                normal: {
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    curveness: 0.1,
                    color: 'source',
                }
            },
            force: {
                repulsion: 650,
                gravity: 0.25,
                edgeLength: [100,150]
            },
        }]
    };

    myChart.setOption(option);
}, 'xml');