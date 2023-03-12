option = {
    geo3D: {
        show: true,
        map: 'china',
        boxHeight: 3,
        regionHeight: 3,
        environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#00aaff' // 天空颜色
        }, {
            offset: 0.7,
            color: '#998866' // 地面颜色
        }, {
            offset: 1,
            color: '#998866' // 地面颜色
        }], false),
        itemStyle: {
            areaColor: '#fff',
            borderWidth: 1,
            borderColor: '#aaa'
        },
        emphasis: {
            label: {
                show: true
            },
            itemStyle: {
                areaColor: '#fff',
                opacity: 1
            }
        },
        label: {
            show: false,
            textStyle: {
                fontSize: 10
            }
        },
        shading: 'lambert',
        lambertMaterial: {
            detailTexture: '/asset/get/s/data-1508231178158-r1GG_HmaZ.hdr',
            textureOffset: 0.3
        },
        light: {
            main: {
                color: '#fff',
                intensity: 2,
                shadow: true,
                shadowQuality: 'ultra',
                alpha: 20,
                beta: 40
            }
        },
        postEffect: {
            enable: false
        },
        temporalSuperSampling: {
            enable: true
        },
        viewControl: {
            //			            zoomSensitivity: 0, //禁止缩放
            //			            rotateSensitivity: 0, //禁止旋转
            alpha: 50,
            panMouseButton: 'right'
        }
    }
};