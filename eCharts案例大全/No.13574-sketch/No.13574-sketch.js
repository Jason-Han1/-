
let canvas = document.createElement('canvas');
let mapChart = echarts.init(canvas, null, {
    width: 4096,
    height: 2048
});
mapChart.setOption({
    series: [{
        type: 'map',
        map: 'world',
        // 绘制完整尺寸的 echarts 实例
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        boundingCoords: [
            [-180, 90],
            [180, -90]
        ],
        itemStyle: {
            normal: {
                areaColor: 'transparent',
                borderColor: 'rgb(60, 60, 200)'
            }
        }
    }]
});

$.getJSON('/asset/get/s/data-1491909692146-S1NH24cTe.json', function (data) {
    var airports = data.airports.map(function (item) {
        return {
            coord: [item[3], item[4]]
        }
    });
    function getAirportCoord(idx) {
        return [data.airports[idx][3], data.airports[idx][4]];
    }

    // Route: [airlineIndex, sourceAirportIndex, destinationAirportIndex]
    var routesGroupByAirline = {};
    data.routes.forEach(function (route) {
        var airline = data.airlines[route[0]];
        var airlineName = airline[0];
        if (!routesGroupByAirline[airlineName]) {
            routesGroupByAirline[airlineName] = [];
        }
        routesGroupByAirline[airlineName].push(route);
    });

    var pointsData = [];
    data.routes.forEach(function (airline) {
        pointsData.push(getAirportCoord(airline[1]));
        pointsData.push(getAirportCoord(airline[2]));
    });

    var series = data.airlines.map(function (airline) {
        var airlineName = airline[0];
        var routes = routesGroupByAirline[airlineName];

        if (!routes) {
            return null;
        }
        return {
            type: 'lines3D',
            name: airlineName,


            lineStyle: {
                width: 1,
                color: 'rgb(200, 60, 60)',
                opacity: 0.5
            },
            blendMode: 'lighter',

            data: routes.map(function (item) {
                var weight = Math.random();
                return {
                    lineStyle: {
                        width: weight * 2 + 0.2,
                        color: 'rgb(200, 60, 60)',
                        opacity: weight / 2
                    },
                    coords: [airports[item[1]].coord, airports[item[2]].coord],
                }
            })
        };
    }).filter(function (series) {
        return !!series;
    });
    series.push({
        type: 'scatter3D',
        coordinateSystem: 'globe',
        blendMode: 'lighter',
        symbolSize: 2,
        itemStyle: {
            color: 'rgb(200, 60, 60)',
            opacity: 0.2
        },
        data: pointsData
    });

    myChart.setOption({
        legend: {
            selectedMode: 'single',
            left: 'left',
            data: Object.keys(routesGroupByAirline),
            orient: 'vertical',
            textStyle: {
                color: '#fff'
            }
        },
        globe: {

            environment: '/asset/get/s/data-1491837999815-H1_44Qtal.jpg',

            heightTexture: '/asset/get/s/data-1491837512042-rJlLfXYax.jpg',

            displacementScale: 0.02,
            displacementQuality: 'high',

            baseColor: '#000',

            shading: 'realistic',
            realisticMaterial: {
                roughness: 0.2,
                metalness: 0
            },

            postEffect: {
                enable: true,
                depthOfField: {
                    enable: false,
                    focalDistance: 150
                }
            },
            temporalSuperSampling: {
                enable: true
            },
            
            layers: [{
                texture: mapChart 
            }],
            light: {
                ambient: {
                    intensity: 0
                },
                main: {
                    intensity: 0.1,
                    shadow: false
                },
                ambientCubemap: {
                    texture: '/asset/get/s/data-1491837984109-r1u7NmY6e.hdr',
                    exposure: 1,
                    diffuseIntensity: 0.5,
                    specularIntensity: 2
                }
            },
            viewControl: {
                autoRotate: false
            },
            silent: true
        },
        series: series
    });
    window.addEventListener('keydown', function () {
        series.forEach(function (series, idx) {
            myChart.dispatchAction({
                type: 'lines3DToggleEffect',
                seriesIndex: idx
            });
        })
    });
});
