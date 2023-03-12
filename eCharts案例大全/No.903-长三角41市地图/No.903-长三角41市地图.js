$.get('map/china_geo.json', function (chinaJson) {
    echarts.registerMap('china', {geoJSON: geoJson});
    var chart = echarts.init(document.getElementById('main'));
    chart.setOption({
        geo: [{
            map: 'china',
        }]
    });
});