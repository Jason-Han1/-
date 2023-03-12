mapboxgl.accessToken = 'pk.eyJ1IjoibW9yZ2Vua2FmZmVlIiwiYSI6IjIzcmN0NlkifQ.0LRTNgCc-envt9d5MzR75w';
$.getJSON('/asset/get/s/data-1524056463493-H1PcbpN2z.json', function(buildingsGeoJSON) {
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
            height: feature.properties.height,
            //  itemStyle:{
            //       color:'#000000',
            //       borderColor:'red'
            //  }
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
        mapbox3D: {
            center: [-74.01164278497646, 40.70769573605318],
            zoom: 16,
            pitch: 55,
            bearing: -10,
            style: 'mapbox://styles/mapbox/traffic-night-v2',
            postEffect: {
                // enable: true,
                // SSAO: {
                //     enable: true,
                //     intensity: 1.2,
                //     radius: 10
                // },
                // screenSpaceReflection: {
                //     enable: true
                // }
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
            coordinateSystem: 'mapbox3D',
            map: 'buildings',
            data: regionsData,
            shading: 'realistic',
            instancing: true,
            silent: true,
            // itemStyle: {
            //     color:'#000000',
            //     // borderColor: [0, 2, 10],
            //     borderWidth: 1
            // },
            realisticMaterial: {
                // metalness: 1,
                // roughness: 0.4,
                textureTiling: 35,
                detailTexture: '/asset/get/s/data-1528097075999-B13VYDfxm.jpg'
            }
        }]
    });

});
window.addEventListener('resize', function() {
    myChart.resize();
});