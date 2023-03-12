var linesData =  [
            [
                [119.107078, 36.70925, 1000],
                [116.587245, 35.415393, 1000]
            ],
            [
                [
                    117.000923,
                    36.675807
                ],
                [
                    120.355173,
                    36.082982
                ]
            ],
            [
                [
                    118.047648,
                    36.814939
                ],
                [
                    118.66471,
                    37.434564
                ]
            ],
            [
                [
                    121.391382,
                    37.539297
                ],
                [
                    119.107078,
                    36.70925
                ]
            ],
            [
                [
                    116.587245,
                    35.415393
                ],
                [
                    122.116394,
                    37.509691
                ]
            ],
            [
                [
                    119.461208,
                    35.428588
                ],
                [
                    118.326443,
                    35.065282
                ]
            ],
            [
                [
                    116.307428,
                    37.453968
                ],
                [
                    115.469381,
                    35.246531
                ]
            ]
        ];
option = {
    title: {
        text: '牛鼻闪闪的3D地图+3D飞线图',
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
        type: 'lines3D',
        coordinateSystem: 'geo3D',
        effect: {
            show: true,
            period: 4,
            trailWidth: 3,
            trailLength: 0.5,
            trailColor: '#f00',
            trailOpacity: 1
        },
        lineStyle: {
            show: false,
            color: '#fff',
            opacity: 0,
        },
        data:linesData

    }]
};