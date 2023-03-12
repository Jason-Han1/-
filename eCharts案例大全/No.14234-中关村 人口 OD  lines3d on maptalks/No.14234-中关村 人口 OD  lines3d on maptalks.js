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

var dataurl = '/asset/get/s/data-1515825121695-rkqkOQvEz.js'
myChart.showLoading();
$.getJSON(dataurl, function(rs) {
    myChart.hideLoading();

    var lineData = [];
    var maxLength = 0;

    for (var i = 0; i < rs.length; i++) {
        var item = rs[i][1];
        if (item.length > maxLength)
            maxLength = item.length;
        lineData.push(mecatorToLngLat(item));
    }

    option = {
        maptalks3D: {
            center: [116.32736206054689, 39.75861229610178],
            zoom: 11,
            urlTemplate: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
            altitudeScale: 2,
            // style: 'mapbox://styles/mapbox/dark-v9',
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
                constantSpeed: 40,
                trailWidth: 2,
                trailLength: 0.4,
                trailOpacity: 1,
                spotIntensity: 10
            },

            blendMode: 'lighter',

            polyline: true,

            lineStyle: {
                width: 0.1,
                color: 'rgb(10, 60, 170)',
                opacity: 0.
            },

            data: lineData
        }]
    }
    myChart.setOption(option);
})