var uploadedDataURL = "/asset/get/s/data-1510243457894-H15FneMyz.json";


myChart.showLoading();

$.getJSON(uploadedDataURL, function (data) {
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
        
        series: [
            {
                type: 'sankey',
                layout: 'none',
                data: data.nodes,
                links: data.links,
                 
                 color: [
        '#30588C',
        '#77C3F2',
        '#FAA805'
    ],
                
                
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                        
                    }
                },
                lineStyle: {
                    
                    normal: { 
                        color: 'source',
                        curveness: 0.7
                    }
                }
            }
        ]
    });
});
