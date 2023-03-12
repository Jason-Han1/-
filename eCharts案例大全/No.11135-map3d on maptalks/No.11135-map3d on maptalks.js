var chinaMap = echarts.getMap('china').geoJson;
var provincedata = chinaMap.features.map(function(feature) {
    return {
        name: feature.properties.name,
        value: Math.random() * 100
    }
})
$.getJSON('/asset/get/s/data-1514711407227-BkDOYXIQG.json', function(data) {
    myChart.setOption({
        visualMap: {
            show: false,
            max: 100,
            min: 0,
            calculable: true,
            realtime: false,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            outOfRange: {
                colorAlpha: 0
            }
        },
        maptalks3D: {
            center: [120.114129, 31.550339],
            urlTemplate: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
            zoom: 3,
            pitch: 30,
            altitudeScale: 1e5,
            postEffect: {
                enable: true,
                screenSpaceAmbientOcclusion: {
                    enable: true,
                    intensity: 1,
                    radius: 3,
                    quality: 'high'
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
                    texture: '/asset/get/s/data-1514714925763-B18EwVU7G.hdr',
                    exposure: 2,
                    diffuseIntensity: 0.5
                }
            }
        },
        series: [{
            type: 'map3D',
            coordinateSystem: 'maptalks3D',
            map: 'china',
            data: [],
            regionHeight: 3,
            shading: 'lambert',
            itemStyle:{
                borderWidth:1,
                borderColor:'green'
            }
        }]
    });
    myChart.on('click', function(e) {
        console.log(e)
    })
    var geo3D = myChart.getModel().getComponent("geo3D")
});
window.addEventListener('resize', function() {
    myChart.resize();
});

// window.addEventListener('resize', function () {
//     chart.resize();
// });