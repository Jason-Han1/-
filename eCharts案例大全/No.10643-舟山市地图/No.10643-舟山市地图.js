var uploadedDataURL = "/asset/get/s/data-1563939176692-YEnQYr5sd.json";


$.get(uploadedDataURL, function(geoJson) {
echarts.registerMap('舟山市', geoJson);

option = {
    series: [{
        label: {
            normal: {
                show: true,
            },
            emphasis: {
                show: true
            }
        },
        type: 'map',
        zoom: 2,
        roam: true,
        map: '舟山市',
    }]
};
myChart.setOption(option);
});