function mecatorToLngLat(mecator_lnglat) {
    var lnglat = [];
    if (Array.isArray(mecator_lnglat[0])) {
        for (var i = 0; i < mecator_lnglat.length; i++) {
            var _lnglat = proj4('EPSG:3857', 'EPSG:4326', mecator_lnglat[i]);
            lnglat.push(_lnglat)
        }
    } else {
        lnglat = proj4('EPSG:3857', 'EPSG:4326', mecator_lnglat);
    }
    return lnglat;
}
var taxiRoutes = [];
var dataurl = '/asset/get/s/data-1516182603477-B1XI252Ef.json'
myChart.showLoading();
$.getJSON(dataurl, function(regionsData) {
    myChart.hideLoading();
    var data = regionsData.data;
    var hStep = 300 / (data.length - 1);
    var i = 0;
    for (var x in data) {
        var pointString = data[x];
        var pointArr = pointString.split(';');
        var lnglats = [];
        for (var j in pointArr) {
            lnglats.push(pointArr[j].split(','))
        }
        taxiRoutes.push({
            coords: lnglats,
            lineStyle: {
                color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * x))
            }
        })
    }
    option = {
        maptalks3D: {
            center: [127.41212033876286, 36.35230174302066],
            zoom: 8,
            baseLayer: {
                'urlTemplate': 'http://a.tiles.mapbox.com/v3/spatialdev.map-c9z2cyef/{z}/{x}/{y}.png',
                'subdomains': ['a', 'b', 'c', 'd']
            },
            pitch: 50,
            // bearing: -10,
            altitudeScale: 2,
            urlTemplate: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
            postEffect: {
                enable: true,
                FXAA: {
                    enable: true
                }
            },
            light: {
                main: {
                    intensity: 1,
                    shadow: true,
                    shadowQuality: 'high'
                },
                ambient: {
                    intensity: 0.
                },
                ambientCubemap: {
                    texture: '/asset/get/s/data-1491838644249-ry33I7YTe.hdr',
                    exposure: 1,
                    diffuseIntensity: 0.5,
                    specularIntensity: 2
                }
            }
        },
        series: [{
            type: 'lines3D',
            coordinateSystem: 'maptalks3D',
            effect: {
                show: true,
                constantSpeed: 1,
                trailWidth: 2,
                trailLength: 0.4,
                trailOpacity: 1,
                spotIntensity: 10
            },
            blendMode: 'lighter',
            polyline: true,
            lineStyle: {
                width: 0.1,
                color: 'rgb(100, 100, 0)',
                opacity: 0.
            },
            data: taxiRoutes
        }]
    }
    myChart.setOption(option);
})