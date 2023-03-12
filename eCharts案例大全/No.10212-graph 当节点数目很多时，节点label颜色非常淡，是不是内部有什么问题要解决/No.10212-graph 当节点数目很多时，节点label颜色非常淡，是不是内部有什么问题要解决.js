myChart.showLoading();
    myChart.hideLoading();

    var categories = [];
    for (var i = 0; i < 9; i++) {
        categories[i] = {
            name: '类目' + i
        };
    }
    var graph = {
        nodes:[],
        links:[]
    }
    var nodeNum = 1500;
    var linkNum = 2600;
    for(i=0;i<nodeNum;i++){
        graph.nodes.push({
            x: Math.random() * 1000,
            y: Math.random() * 1000,
            name: 'test' + i
        })
    }
    for(i=0;i<linkNum;i++){
        graph.links.push({
            source: parseInt(Math.random() * nodeNum),
            target: parseInt(Math.random() * nodeNum),
        })
    }
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
                layout: 'none',
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
                emphasis: {
                    lineStyle: {
                        width: 10
                    }
                }
            }
        ]
    };

    myChart.setOption(option);