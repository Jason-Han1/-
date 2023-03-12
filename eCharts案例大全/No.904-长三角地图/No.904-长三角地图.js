var anhui = "/asset/get/s/data-1636875897713-hOpLeFv7u.json";

var uploadedDataURL = "/asset/get/s/data-1636875901526-oeEjUI9zW.json";

var uploadedDataURL = "/asset/get/s/data-1636875905135-NsTp4VGtH.json";

var uploadedDataURL = "/asset/get/s/data-1636875909884-45xoPdSK0.json";

$.get('anhui', function (chinaJson) {
    echarts.registerMap('china', {geoJSON: geoJson});
    var chart = echarts.init(document.getElementById('main'));
    chart.setOption({
        geo: [{
            map: 'anhui',
        }]
    });
});     