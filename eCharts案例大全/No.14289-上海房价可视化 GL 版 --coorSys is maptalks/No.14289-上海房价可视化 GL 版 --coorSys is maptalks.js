var uploadedDataURL = "/asset/get/s/data-1495284690309-Bk9Ro3Te-.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(linedata) {
    myChart.hideLoading();
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
            max: linedata[1]
        },
        maptalks3D: {
            center: [121.4693, 31.123070],
            zoom: 10,
            pitch: 50,
            bearing: -10,
            urlTemplate: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}',
            // baseLayer: {
            //     //google
            //     'urlTemplate': 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}',

            //     //amap 高德
            //   // 'urlTemplate': ' http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',

            //   //this is arcgis
            //   //'urlTemplate': ' http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}',

            //     // 'subdomains'  : ['a','b','c','d']
            // },
            boxHeight: 1,
            postEffect: {
                enable: true,
                SSAO: {
                    enable: true,
                    radius: 2,
                    intensity: 1.5
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
                    texture: '/asset/get/s/data-1491896094618-H1DmP-5px.hdr',
                    exposure: 1,
                    diffuseIntensity: 0.5
                }
            }
        },
        series: [{
            type: 'bar3D',
            shading: 'realistic',
            coordinateSystem: 'maptalks3D',
            barSize: 1,
            silent: true,
            data: linedata[0]
        }]
    });
});

window.addEventListener('resize', function() {
    myChart.resize();
});