var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
let option;
$.getJSON(ROOT_PATH + '/data-gl/asset/data/flights.json', function(data) {
    function getAirportCoord(idx) {
        return [data.airports[idx][3], data.airports[idx][4]];
    }
    var routes = data.routes.map(function(airline) {
        return [
            getAirportCoord(airline[1]),
            getAirportCoord(airline[2])
        ];
    });
    console.log(routes)
    // 图片显示跨域
    myChart.setOption({
        backgroundColor: '#000',
        globe: {
            baseTexture:'data-gl/asset/world.topo.bathy.200401.jpg',
            // baseTexture:'#000',
            heightTexture: 'data-gl/asset/bathymetry_bw_composite_4k.jpg',
            shading: 'lambert',
            displacementScale: 0.1,
            environment: 'data-gl/asset/starfield.jpg',
            realisticMaterial: {
                roughness: '/asset/get/s/data-1497599804873-H1SHkG-mZ.jpg',
                metalness: '/asset/get/s/data-1497599800643-BJbHyGWQW.jpg',
                textureTiling: [8, 4]
            },
            light: {
                ambient: {
                    intensity: 0.5
                },
                main: {
                    intensity: 0.5
                }
            },
            // 物体自转
            viewControl: {
                autoRotate: true,
                autoRotateAfterStill: 3
            },
            // 云层
            layers: [{
                type: 'blend',
                blendTo: 'emission',
                texture: 'asset/night.jpg'
            }, {
                type: 'overlay',
                texture:  'asset/clouds.png',
                shading: 'lambert',
                distance: 5
            }]
        },
        series: {
            type: 'lines3D',
            coordinateSystem: 'globe',
            effect: {
                show: true,
                trailWidth: 1,
                trailLength: 0.2,
                trailOpacity: 1.5,
                trailColor: 'rgb(30, 30, 60)'
            },
            blendMode: 'lighter',

            lineStyle: {
                width: 1,
                color: 'rgb(50, 50, 150)',
                opacity: 0.1
            },

            data: routes
        }
    });
});
option && myChart.setOption(option);