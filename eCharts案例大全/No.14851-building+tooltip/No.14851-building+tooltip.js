$.getJSON('/asset/get/s/data-1504836161934-Hk5B9_k9Z.json', function(buildingsGeoJSON) {

    echarts.registerMap('buildings', buildingsGeoJSON);

    var regions = buildingsGeoJSON.features.map(function(feature) {
        return {
            name: feature.properties.name,
            value: feature.properties.height,
            height: +feature.properties.height * 3 + 0.1
        };
    });

    var option = {
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
            formatter: "buildings <br/>编号:{b} 高度:{c}",
            triggerOn: 'mousemove',
            position: [10, 10]
        },
        series: [{
            type: 'map3D',
            map: 'buildings',
            shading: 'realistic',
            realisticMaterial: {
                roughness: 0.6,
                textureTiling: 20
            },
            postEffect: {
                enable: true,
                bloom: {
                    enable: false
                },
                SSAO: {
                    enable: true,
                    quality: 'medium',
                    radius: 10,
                    intensity: 1.2
                },
                depthOfField: {
                    enable: false,
                    focalRange: 5,
                    fstop: 1,
                    blurRadius: 6
                }
            },
            groundPlane: {
                show: true,
                color: '#000000'
            },
            light: {
                main: {
                    intensity: 1,
                    shadow: true,
                    shadowQuality: 'high',
                    alpha: 30
                },
                ambient: {
                    intensity: 0
                },
                ambientCubemap: {
                    texture: '/asset/get/s/data-1491896094618-H1DmP-5px.hdr',
                    exposure: 2,
                    diffuseIntensity: 1,
                    specularIntensity: 1
                }
            },
            viewControl: {
                minBeta: -360,
                maxBeta: 360
            },

            label: {
                textStyle: {
                    color: 'white'
                }
            },

            silent: false,

            instancing: true,

            boxWidth: 200,
            boxHeight: 1,

            data: regions
        }]
    };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

});