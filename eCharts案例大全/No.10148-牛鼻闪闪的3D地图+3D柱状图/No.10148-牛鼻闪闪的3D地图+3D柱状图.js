var barData = [{
        name: '淄博市',
        value: [118.047648, 36.814939, 100]
    },
    {
        name: '枣庄市',
        value: [117.557964, 34.856424, 100]
    },
    {
        name: '济南市',
        value: [117.000923, 36.675807, 100]
    },
];
option = {
    title: {
        text: '牛鼻闪闪的3D地图+3D柱状图',
        left: 'center',
        top: 20
    },
    geo3D: {
        map: 'shandong',
        viewControl: {
            center: [-10, 0, 10]
        },
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
                texture: '/asset/get/s/data-1491896094618-H1DmP-5px.hdr'
            }
        },
        groundPlane: {
            show: true
        },
        postEffect: {
            enable: false
        },
        itemStyle: {
            borderColor: 'rgb(62,215,213)',
            borderWidth: 1
        }

    },
    series: [{
        type: 'bar3D',
        coordinateSystem: 'geo3D',
        bevelSize: 0,
        itemStyle: {
            color: '#17e3ff',
            opacity: 1
        },
        shading: 'lambert',
        data: barData
    }]
};