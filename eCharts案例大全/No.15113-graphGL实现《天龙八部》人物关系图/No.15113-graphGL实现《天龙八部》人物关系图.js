var uploadedDataURL = "/asset/get/s/data-1499235712572-BkKKrbcNZ.gexf";

myChart.showLoading();

$.get(uploadedDataURL, function(xml) {
    console.log(1111);
    myChart.hideLoading();

    var graph = echarts.dataTool.gexf.parse(xml);
    var categories = [];
    for (var i = 0; i < 15; i++) {
        categories[i] = {
            name: '类目' + i
        };
    }

    graph.nodes.forEach(function(node) {
        node.itemStyle = null;
        node.value = node.symbolSize;
        node.symbolSize /= 1.5;
        node.label = {
            show: node.symbolSize > 10,
            normal: {
                textStyle: {
                    fontSize: 12
                        // fontSize: node.symbolSize>30?node.symbolSize/3:(node.symbolSize>10?node.symbolSize/2:node.symbolSize*2)
                }
            }
        };
        node.category = node.attributes.modularity_class;
        node.draggable = true;
    });
    option = {
        color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3', '#fcd', '#ccc', ' #F0FFFF', 'blue'],
        title: {
            text: '天龙八部人物关系图',
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
            name: '天龙八部人物',
            type: 'graphGL',
            // layout: 'force',
            modularity: true,
            data: graph.nodes,
            links: graph.links,
            categories: categories,
            focusNodeAdjacency: true,
            // roam: true,
            label: {
                normal: {
                    position: 'right',
                    formatter: '{b}',
                    textStyle: {
                        fontSize: 12,
                    }
                }
            },
            lineStyle: {
                normal: {
                    color: 'source',
                    curveness: 0.3
                }
            },
            //       modularity: {
            //     resolution: 10,
            //     // If sort the communities
            //     // sort: false
            // },
            //      forceAtlas2:{
            // preventOverlap: true,
            // scaling: 15,
            //      }

        }]
    };

    myChart.setOption(option);
}, 'xml');