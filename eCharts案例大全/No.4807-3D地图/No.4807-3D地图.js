var uploadedDataURL = '/asset/get/s/data-1592366734603-Z-iQwIHJk.json';

$.get(uploadedDataURL, function (json) {
    echarts.registerMap('map', json);
    option = {
        backgroundColor: '#000',
        geo3D: {
            map: 'map',
            regionHeight: 6, //地图厚度
            itemStyle: {
                color: '#082F5F',
                borderWidth: 1, //分界线宽度
                borderColor: '#248DD3', //分界线颜色
            },
            shading: 'lambert',
            label: {
                show: true,
                alignText: 'center',
                textStyle: {
                    color: '#fff', //文字颜色
                    fontSize: 18, //文字大小
                    padding: [5, 10],
                    alignText: 'center',
                    lineHeight: 24,
                    backgroundColor: 'rgba(0,0,0,0.32)', //透明度0清空文字背景
                    borderWidth: 1.5, //分界线宽度
                    borderRadius: 5,
                    borderColor: '#F2A451', //分界线颜色
                },
            },
            emphasis: {
                itemStyle: {
                    color: '#1341BE',
                    opacity: 0.9, // 透明度
                    borderWidth: 1, //分界线宽度
                    borderColor: '#00EBFF', //分界线颜色
                },
            },
            //shading: 'realistic',
            // 真实感材质相关配置 shading: 'realistic'时有效
            // realisticMaterial: {
            //     detailTexture: '#08274C', // 纹理贴图
            //     textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
            //     roughness: 1, // 材质粗糙度，0完全光滑，1完全粗糙
            //     metalness: 0, // 0材质是非金属 ，1金属
            //     roughnessAdjust: 0
            // },
            viewControl: {
                distance: 120, // 地图视角 控制初始大小
                // rotateSensitivity: 0, // 旋转
                // zoomSensitivity: 0, // 缩放
                // autoRotate: false,
                // maxBeta: Infinity,
                // minBeta: -Infinity,
                beta: -15, //旋转视角
                alpha: 40, //视角
                panMouseButton: 'left',
                rotateMouseButton: 'right',
                center: [5, -10, 0],
            },
        },
        series: [
            {
                type: 'lines3D',
                coordinateSystem: 'geo3D',
                effect: {
                    show: true,
                    trailWidth: 1,
                    trailOpacity: 0.8,
                    trailLength: 0.2,
                    constantSpeed: 20,
                },
                blendMode: 'source-over',
                lineStyle: {
                    width: 2,
                    opacity: .6,
                },
                data: [
                    [
                        [117.850341796875, 34.19817309627726],
                        [120.78369140624999, 32.30106302536928],
                    ],
                ],
            },
        ],
    };
    myChart.setOption(option);
});
