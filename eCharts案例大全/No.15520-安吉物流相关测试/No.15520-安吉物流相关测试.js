var uploadedDataURL = "/asset/get/s/data-1490087166781-rkDbpwAix.gexf";




myChart.showLoading();
$.get(uploadedDataURL, function (xml) {
    myChart.hideLoading();

    var graph = echarts.dataTool.gexf.parse(xml);
    var categories = [];
    for (var i = 0; i < 7; i++) {
        categories[i] = {
            name: '类目' + i
        };
    }
    graph.nodes.forEach(function (node) {
        node.itemStyle = null;
        node.value = node.symbolSize;
        node.label = {
            normal: {
                show: node.symbolSize > 20
            }
        };
        node.category = node.attributes.modularity_class;
    });
    option = {
        title: {
            text: 'Les Miserables',
            subtext: 'Circular layout',
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
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                name: '安吉物流相关测试',
                type: 'graph',
                layout: 'circular',
                circular: {
                    rotateLabel: true
                },
                data: graph.nodes,
                links: graph.links,
                categories: categories,
                roam: true,
                label: {
                    normal: {
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.3
                    }
                }
            }
        ]
    };

    myChart.setOption(option);
}, 'xml');