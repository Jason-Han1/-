option = {
    visualMap: {
        show: false,
        min: 0,
        max: 15,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    series: [{
        type: 'map3D',
        map: 'china',
        light: {
            main: {
                intensity: 1,
                shadow: true,
                alpha: 150,
                beta: 70
            },
            ambient: {
                intensity: 0
            },
            ambientCubemap: {
                diffuseIntensity: 1,
                texture: '/asset/get/s/data-1510019923072-HkjLX5CRZ.hdr'
            }
        },
        groundPlane: {
            show: true
        }
    }]
};