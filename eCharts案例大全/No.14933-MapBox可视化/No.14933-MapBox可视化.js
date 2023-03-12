$.getJSON('/asset/get/s/data-1504165783912-rylo1HSFb.json', function(data) {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYWFyb242NjYiLCJhIjoiY2o2M2NmZmJ4MWc0ZDJxbnI3dmZ5OXB2MSJ9.T3trJ5Tu66Kw-w-1ELpzBA';
    var mapboxgl_style = 'mapbox://styles/mapbox/dark-v9';
    var mapboxgl_center = [120.30327558517455, 31.55755415024492];

    echarts.registerMap('buildings', data);

    myChart.hideLoading();

    var regionsData = data.features.map(function(feature) {
        return {
            name: feature.properties.name,
            value: feature.properties.height,
            height: +feature.properties.height * 10 + 0.1,
            emphasis: {
                label: {
                    show: true
                }
            }
        };
    });

    var roadData = data.features.map(function(feature) {
        return {
            name: feature.properties.name,
            value: feature.properties.height,
            coords: feature.geometry.coordinates
        };
    });

    myChart.setOption({
        visualMap: {
            show: false,
            min: 2,
            max: 35,
            inRange: {
                color: ['#696868', '#594e76', '#635177', '#7b5675', '#94596d', '#da6b58', '#ff6029', '#f23e19', '#e42e16'] //aaron
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            triggerOn: 'mousemove',
            position: [10, 10]
        },
        mapbox: {
            center: mapboxgl_center,
            zoom: 16,
            pitch: 50,
            bearing: -10,
            style: mapboxgl_style,
            shading: 'realistic',
            postEffect: {
                enable: true,
                SSAO: {
                    enable: true,
                    intensity: 1.3,
                    radius: 5,
                    quality: 'low'
                },
                depthOfField: {
                    enable: false,
                    blurRadius: 1,
                    focalDistance: 90,
                    quality: 'low'
                }
            },
            light: {
                main: {
                    intensity: 0.5,
                    shadow: false,
                    alpha: 10,
                    beta: -10
                },
                ambient: {
                    intensity: 0.2
                },
                ambientCubemap: {
                    texture: './img_mapbox/sunlight.hdr',
                    exposure: 0.5,
                    diffuseIntensity: 0.5,
                    specularIntensity: 2
                }
            },
            zlevel: 10
        },
        series: [{
            //路线数据
            type: 'lines3D',
            coordinateSystem: 'mapbox',
            effect: {
                show: true,
                constantSpeed: 24,
                trailWidth: 2,
                trailLength: 0.5,
                trailOpacity: 1,
                trailColor: '#ff8022',
                spotIntensity: 2
            },
            lineStyle: {
                width: 1,
                color: '#ff8022',
                opacity: 0.1
            },
            blendMode: 'realistic',
            polyline: true,
            data: roadData,
            zlevel: -99
        }, {
            //建筑数据
            type: 'map3D',
            silent: false,
            name: 'buildings',
            coordinateSystem: 'mapbox',
            map: 'buildings',
            data: regionsData,
            shading: 'realistic',
            instancing: true,
            realisticMaterial: {
                metalness: 0,
                roughness: 0.5
            },
            label: {
                show: false,
                distance: 10,
                formatter: '{b}: {c}',
                textStyle: {
                    color: '#272727',
                    borderWidth: 0,
                    fontFamily: 'sans-serif',
                    fontWeight: 'lighter',
                    fontSize: 12
                }
            },
            itemStyle: {
                opacity: 1
            },
            emphasis: {
                label: {
                    show: true,
                    distance: 2,
                    formatter: '{b}: {c}',
                    textStyle: {
                        color: '#272727',
                        borderWidth: 0,
                        fontFamily: 'sans-serif',
                        fontWeight: 'lighter',
                        fontSize: 12
                    }
                },
                itemStyle: {
                    opacity: 1,
                    borderWidth: 1,
                    borderColor: '#ff8022'
                }
            },
            zlevel: -100
        }]
    });

});