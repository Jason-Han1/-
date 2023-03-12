var uploadedDataURL = 'https://cdn.jsdelivr.net/npm/echarts-mapjson@1.0.2/province/hubei.json';

var dataV = [{ name: '武汉市', value: [114.298572, 30.584355, 1] }];

$.get(uploadedDataURL, function (geoJson) {
    echarts.registerMap('hubei', geoJson);
    option = {
        tooltip: {
            trigger: 'item',
            show: true,
            confine: true,
            // enterable: true,
            textStyle: {
                fontSize: 13,
                color: '#fff',
            },
            backgroundColor: 'rgba(0,2,89,0.8)',
            //formatter: '{b}<br />{c}',
            // formatter: function (params) {
            //     var name = params.name;
            //     var value = params.value[2];
            //     var text = `${name}`;
            //     return text;
            // },
        },

        geo3D: {
            map: 'hubei',
            show: true,
            roam: true,
            // zlevel: -10,
            boxWidth: 90,
            boxHeight: 4, //4:没有bar. 30:有bar,bar最高度30，按比例分配高度
            // boxDepth: 150, //地图倾斜度
            regionHeight: 2, //地图厚度
            environment: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                    {
                        offset: 0,
                        color: '#06b', // 天空颜色
                    },
                    {
                        offset: 0.7,
                        color: '#113', // 地面颜色
                    },
                    {
                        offset: 1,
                        color: '#113', // 地面颜色
                    },
                ],
                false
            ),
            groundPlane: {
                // show:true
            },
            // label: {
            //     // 标签的相关设置
            //     show: false,
            // },

            itemStyle: {
                color: '#048',
                opacity: 1,
                borderWidth: 0.5,
                borderColor: '#06b',
            },
            emphasis: {
                label: {
                    show: false,
                },
                itemStyle: {
                    color: '#46f',
                    borderColor: '#18f',
                    borderWidth: 2,
                },
            },
            light: {
                main: {
                    intensity: 1,
                    shadow: true,
                    shadowQuality: 'ultra',
                    alpha: 0,
                    beta: 0,
                },
            },

            postEffect: {
                enable: true,
                bloom: {
                    enable: true,
                    bloomIntensity: 0.5,
                },
            },

            SSAO: {
                enable: true,
                quality: 'ultra',
                radius: 32,
            },

            FXAA: {
                enable: true,
            },

            // groundPlane: {
            //     show: true,
            // },

            shading: 'lambert',
            viewControl: {
                projection: 'perspective', //'orthographic',
                autoRotate: false,
                damping: 0,
                rotateSensitivity: 2, //旋转操作的灵敏度
                rotateMouseButton: 'left', //旋转操作使用的鼠标按键
                zoomSensitivity: 2, //缩放操作的灵敏度
                panSensitivity: 2, //平移操作的灵敏度
                panMouseButton: 'right', //平移操作使用的鼠标按键

                distance: 150, //默认视角距离主体的距离
                minDistance: 10,
                maxDistance: 300,
                minAlpha: 30,
                maxAlpha: 100,
                minBeta: -25,
                maxBeta: 85,
                center: [-10, -25, 0],
                animation: true,
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
            },
        },

        series: [
            {
                type: 'scatter3D',
                coordinateSystem: 'geo3D',
                //zlevel: -10,
                symbol: 'pin',
                symbolSize: 20,
                data: dataV,
                itemStyle: {
                    //坐标点颜色
                    normal: {
                        show: true,
                        color: '#ace',
                        shadowBlur: 20,
                        shadowColor: '#000',
                    },
                    emphasis: {
                        color: '#fff',
                    },
                },
                emphasis: {
                    label: {
                        show: false,
                    },
                },
            },
        ],
    };
    myChart.setOption(option);
});
