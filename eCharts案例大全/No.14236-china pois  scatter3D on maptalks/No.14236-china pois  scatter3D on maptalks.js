var uploadedDataURL = "/asset/get/s/data-1515821994295-B1f2ofDNG.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(rs) {
    myChart.hideLoading();
    var data = [];
    var max = 10000;
    for (var i = 0; i < rs[0].length; i++) {
        var geoCoord = rs[0][i].geoCoord;
        var value = geoCoord.concat(Math.random() * max);
        var obj = {
            name: '',
            value: value
        }
        data.push(obj);
    }
    myChart.setOption({
        visualMap: {
            show: false,
            calculable: true,
            realtime: false,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            outOfRange: {
                colorAlpha: 0
            },
            max: max
        },
        maptalks3D: {
            urlTemplate: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
            center: [121.4693, 31.123070],
            zoom: 3,
            pitch: 50,
            // bearing: -10,
            // style: 'mapbox://styles/mapbox/light-v9',
            boxHeight: 2,
            // altitudeScale: 3e2
        },
        series: [{
            type: 'scatter3D',
            coordinateSystem: 'maptalks3D',
            silent: true,
            data: data,
            itemStyle: {
                borderWidth: 0.5,
                borderColor: '#fff'
            }
        }]
    });
});