var canvas = document.createElement('canvas');
var worldmap = echarts.init(canvas, null, {
    width: 4096,
    height: 2048
});
worldmap.setOption({
    series: [{
        type: 'map',
        map: 'world',
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
                areaColor: 'rgba(255,255,255,0)',
                borderColor: 'rgba(255,255,255,0.05)'
            },
            emphasis: {
                areaColor: 'rgba(255,255,255,0.06)',
                label: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontWeight: 100,
                    }
                }
            },
        },
    }]
});
myChart.setOption({
    globe: {
        baseTexture: '/asset/get/s/data-1545126625324-RjAO2P4UV.jpg',
        environment: '/asset/get/s/data-1545104248951-mtfBOvOb9.jpg',
        displacementTexture: '/asset/get/s/data-1545104240896-CXP5p8FwT.jpg',
        heightTexture: '/asset/get/s/data-1545126625324-RjAO2P4UV.jpg',
        displacementScale: 0.08,
        displacementQuality: 'high',
        globeOuterRadius: 100,
        shading: 'realistic',
        realisticMaterial: {
            roughness: 0.3,
            metalness: 0,
        },
        postEffect: {
            enable: true,
        },
        temporalSuperSampling: {
            enable: true
        },
        light: {
            ambient: {
                intensity: 0
            },
            main: {
                intensity: 0.1,
                shadow: false
            },
            ambientCubemap: {
                texture: '/asset/get/s/data-1545104257737-uGSQq3F_8.hdr',
                exposure: 1,
                diffuseIntensity: 0.8,
                specularIntensity: 2
            }
        },
        viewControl: {
            autoRotate: false,
            beta: 180,
            alpha: 20,
            distance: 100
        },
        layers: [{
            show: true,
            type: 'overlay',
            name: 'worldmap',
            texture: worldmap,
            blendTo: 'albedo',
            shading: 'realistic',
            intensity: 1,
            distance: 6,
        }],
    }
});