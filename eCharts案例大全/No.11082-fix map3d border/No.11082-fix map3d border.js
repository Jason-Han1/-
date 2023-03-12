myChart.setOption({
    maptalks3D: {
        center: [116.4073963, 39.90419989999999],
        zoom: 4,
        urlTemplate: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
        altitudeScale: 1e5,
        pitch: 0,
        shading: 'lambert',
        light: { //光照阴影
            main: {
                color: '#fff', //光照颜色
                intensity: 1, //光照强度
                shadowQuality: 'high', //阴影亮度
                shadow: true, //是否显示阴影
                alpha: -45,
                beta: 0
            },
            ambient: {
                color: '#fff',
                intensity: 0.6
            }
        },
    },
    series: [{
        type: 'map3D',
        map: 'china',
        coordinateSystem: 'maptalks3D',
        regionHeight: 2,
        shading: 'lambert',
        lambertMaterial: {
            detailTexture: './bg-map.png',
            textureTiling: 10,
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
                show: false,
            },
            itemStyle: {
                color: '#427FCF'
            }
        },
        itemStyle: {
            // color: '#427FCF',
            borderWidth: 2
        },
    }]
});
