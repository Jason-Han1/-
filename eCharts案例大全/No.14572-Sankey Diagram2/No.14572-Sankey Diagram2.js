var uploadedDataURL = "/asset/get/s/data-1510471525698-r1RPPOH1M.json";

myChart.showLoading();
$.getJSON(uploadedDataURL, function(data) {
    myChart.hideLoading();

    myChart.setOption(option = {
        backgroundColor: '#FFFFFF',
        title: {
            text: 'Sankey Diagram'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [{
            type: 'sankey',
            layout: 'none',
            data: data.nodes,
            links: data.links,
            itemStyle: {
                normal: {
                    borderWidth: 0.1,
                    borderColor: '#aaa'
                }
            },
            lineStyle: {
                normal: {
                    color: 'target',
                    curveness: 0.5
                }
            }
        }]
    });
});