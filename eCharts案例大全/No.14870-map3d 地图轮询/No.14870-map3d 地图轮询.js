var option = {
        backgroundColor: '#cdcfd5',
        series: [{
            type: 'map3D',
            map: 'china',
            shading: 'lambert',
            realisticMaterial: {
                roughness: 0.2,
                metalness: 0
            },
            postEffect: {
                enable: true,
                SSAO: {
                    enable: true,
                    radius: 2,
                    intensity: 1
                }
            },
            groundPlane: {
                show: true
            },
            light: {
                main: {
                    intensity: 2,
                    shadow: true,
                    shadowQuality: 'high',
                    alpha: 30
                },
                ambient: {
                    intensity: 0
                },
                ambientCubemap: {
                    texture: '/asset/get/s/data-1491896094618-H1DmP-5px.hdr',
                    exposure: 1,
                    diffuseIntensity: 1
                }
            },
            viewControl: {
                distance: 100 //距离中心点的距离
            },
            regionHeight: 1
        }]
    };
    
var provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽',
    '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南',
    '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];
var index = 0;
var arr = ['china','world'];
var mapStr = '';
setInterval(function () {
    
    if (index == 2) index = 0;
    var option = {
        backgroundColor: '#cdcfd5',
        series: [{
            type: 'map3D',
            map: arr[index],
            shading: 'lambert',
            realisticMaterial: {
                roughness: 0.2,
                metalness: 0
            },
            postEffect: {
                enable: true,
                SSAO: {
                    enable: true,
                    radius: 2,
                    intensity: 1
                }
            },
            groundPlane: {
                show: true
            },
            light: {
                main: {
                    intensity: 2,
                    shadow: true,
                    shadowQuality: 'high',
                    alpha: 30
                },
                ambient: {
                    intensity: 0
                },
                ambientCubemap: {
                    texture: '/asset/get/s/data-1491896094618-H1DmP-5px.hdr',
                    exposure: 1,
                    diffuseIntensity: 1
                }
            },
            viewControl: {
                distance: 100 //距离中心点的距离
            },
            regionHeight: 1
        }]
    };
   myChart.setOption(option);
   index++;
}, 3000);