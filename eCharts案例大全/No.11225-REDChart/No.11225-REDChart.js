var uploadedDataURL = "http://sinacloud.net/mistmare/edr.gexf?KID=sina,hv963pv7KWJ8yc0IPSWK&Expires=1559642061&ssig=DtTaLT7lxX";

myChart.showLoading();
$.get(uploadedDataURL, function(xml) {
    myChart.hideLoading();
    var graph = echarts.dataTool.gexf.parse(xml);
    var categories = [{
			'name': 'source'
		}, {
			'name': 'target'
		}];

    graph.nodes.forEach(function(node) {
        node.itemStyle = null;
        node.symbolSize *= 10;
        node.value = node.symbolSize;
        node.category = node.attributes.modularity_class;
        // Use random x, y
        node.x = node.y = null;
        node.draggable = true;
    });
    option = {
        title: {
            text: '疾病药物关系图',
            subtext: '疾病与药物之间的关系',
            top: 'top',
            left: 'center'
        },
        tooltip: {},
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            name: '疾病药物关系图',
            type: 'graph',
            layout: 'force',
            data: graph.nodes,
            links: graph.links,
            categories: categories,
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
            force: {
                repulsion: 100
            },
            emphasis: {
                lineStyle: {
                    width: 10
                }
            }
        }]
    };
    console.log(option)
    myChart.setOption(option);
}, 'xml');