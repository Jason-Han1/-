myChart.showLoading();
$.getJSON('https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/les-miserables.json', function (graph) {
    myChart.hideLoading();

    option = {
        tooltip: {},
        legend: [{
            data: graph.categories.map(function (a) {
                return a.name;
            })
        }],
        series: [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'none',
                data: graph.nodes,
                links: graph.links,
                categories: graph.categories,
                roam: true,
                label: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                },
                labelLayout: {
                    hideOverlap: true
                },
                scaleLimit: {
                    min: 0.4,
                    max: 2
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.3
                }
            }
        ]
    };

    myChart.setOption(option);
});