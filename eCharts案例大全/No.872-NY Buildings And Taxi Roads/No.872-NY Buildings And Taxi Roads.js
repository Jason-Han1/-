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

    var regionsData = builds.map(function(feature) {
        return {
            name: feature.properties.name,
            value: Math.random() * 1,
            height: feature.properties.height,
            coords: feature.geometry.coordinates
        };
    });

    $.getJSON('/asset/get/s/data-1524055280228-SkugT242f.json', function(linesData) {
        var data = linesData.features;
        var hStep = 300 / (data.length - 1);
        var taxiRoutes = [];
        var i = 0;
        for (var x in data) {
            var lnglats = data[x].geometry.coordinates
            taxiRoutes.push({
                coords: lnglats,
                lineStyle: {
                    color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * x))

                },
                value: Math.random() * 200
            })
        }

        myChart.setOption({
            maptalks3D: {
                center: [-74.01164278497646, 40.70769573605318],
                zoom: 16,
                pitch: 55,
                urlTemplate: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
                // altitudeScale: 1,
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
                    type: 'polygons3D',
                    coordinateSystem: 'maptalks3D',
                    // map: 'buildings',
                    data: regionsData,
                    shading: 'realistic',
                    silent: true,
                    instancing: true,
                    realisticMaterial: {
                        metalness: 1,
                        roughness: 0.4,
                        // textureTiling: 200,
                        // detailTexture: '/asset/get/s/data-1528097075999-B13VYDfxm.jpg'
                    }
                },
                {
                    type: 'lines3D',
                    coordinateSystem: 'maptalks3D',
                    effect: {
                        show: true,
                        constantSpeed: 1,
                        trailWidth: 3,
                        trailLength: 1,
                        trailOpacity: 1,
                        spotIntensity: 10
                    },
                    blendMode: 'lighter',
                    polyline: true,
                    data: taxiRoutes
                }
            ]
        });

        var maptalksIns = myChart.getModel().getComponent('maptalks3D').getMaptalks();
        maptalksIns.on('click', function(e) {
            console.log(e)
        });

    });
});