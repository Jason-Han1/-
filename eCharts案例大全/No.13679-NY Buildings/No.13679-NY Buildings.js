var uploadedDataURL = "/asset/get/s/data-1534124434928-H1s9ZDCHm.png";
$.getJSON('/asset/get/s/data-1524056463493-H1PcbpN2z.json', function(buildingsGeoJSON) {
    console.log(buildingsGeoJSON);
    var builds = buildingsGeoJSON.map(function(feature) {
        return {
            "type": "Feature",
            "properties": {
                "name": Math.random().toString(),
                "height": feature.height || 100
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [feature.polygon]
            }
        }
    })
    var map = {
        "features": builds
    }
    console.log(map)
    echarts.registerMap('buildings', map);
    var regionsData = builds.map(function(feature) {
        return {
            name: feature.properties.name,
            value: Math.random() * 1,
            height: feature.properties.height
        };
    });
    console.log(regionsData)
    myChart.setOption({
        //   visualMap: {
        //     show: true,
        //     min: 0.4,
        //     max: 200,
        //     inRange: {
        //         color: ['blue', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        //     }
        // },
        maptalks3D: {
            center: [-74.01164278497646, 40.70769573605318],
            zoom: 16,
            pitch: 55,
            bearing: -10,
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
                    shadow: false,
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
            type: 'map3D',
            coordinateSystem: 'maptalks3D',
            map: 'buildings',
            data: regionsData,
            shading: 'realistic',
            instancing: true,
            silent: true,
            itemStyle: {
                color: '#FFFFFF',
                borderWidth: 1
            },
            realisticMaterial: {
                metalness: 1,
                roughness: 0.4,
                // textureTiling: 35,
                // detailTexture: uploadedDataURL
            }
        }]
    });
});

window.addEventListener('resize', function() {
    myChart.resize();
});