var uploadedDataURL = "/asset/get/s/data-1592323490338-uZNa8Om2p.json";
$.getJSON(uploadedDataURL, function (json) {
    echarts.registerMap('ChinaFull', json);
    
    myChart.setOption({
        series: [{
            type: 'map',
            map: 'ChinaFull',
            roam: true
        }] 
    });
});