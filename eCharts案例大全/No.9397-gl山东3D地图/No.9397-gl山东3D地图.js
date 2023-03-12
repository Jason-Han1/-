var bg = "/asset/get/s/data-1574737112736-lLcvpCv-.png";
var rollImg = "/asset/get/s/data-1574736963471-r-ylhO8t.png";
var backImg = "/asset/get/s/data-1574736872681-lfPGd278.png";
var uploadedDataURL = "/asset/get/s/data-1574735297717-mJXJPi39.json";

$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('山东', geoJson);
    var geoCoordMap = {
        '济南': [117.126399, 36.656554],
        '菏泽': [115.480656, 35.23375],
        '济宁': [116.593614, 35.420177],
        '德州': [116.365553, 37.441308],
        '聊城': [115.991588, 36.462759],
        '泰安': [117.094492, 36.205857],
        '临沂': [118.363537, 35.110672],
        '淄博': [118.061455, 36.819085],
        '枣庄': [117.330539, 34.815994],
        '滨州': [117.9774, 37.388197],
        '潍坊': [119.168374, 36.71265],
        '东营': [118.588463, 37.454848],
        '青岛': [120.389458, 36.072227],
        '烟台': [121.454417, 37.47004],
        '威海': [122.127545, 37.516431],
        '日照': [119.533418, 35.422839],
    };
    var geoCoordMap2 = {
        '济南': [117.356399, 36.656554],
        '菏泽': [115.710656, 35.23375],
        '济宁': [116.823614, 35.420177],
        '德州': [116.595553, 37.441308],
        '聊城': [116.221588, 36.462759],
        '泰安': [117.324492, 36.205857],
        '临沂': [118.593537, 35.110672],
        '淄博': [118.291455, 36.819085],
        '枣庄': [117.560539, 34.815994],
        '滨州': [118.2074, 37.388197],
        '潍坊': [119.398374, 36.71265],
        '东营': [118.818463, 37.454848],
        '青岛': [120.619458, 36.072227],
        '烟台': [121.684417, 37.47004],
        '威海': [122.357545, 37.516431],
        '日照': [119.753418, 35.422839],
    };

    function randomNum(minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                break;
            default:
                return 0;
                break;
        }
    }
    var city = [{
            status: '状态一',
            name: '济南',
            value: randomNum(300, 400)
        },
        {
            status: '状态一',
            name: '菏泽',
            value: randomNum(300, 400)
        },
        {
            status: '状态一',
            name: '济宁',
            value: randomNum(300, 400)
        },
        {
            status: '状态一',
            name: '德州',
            value: randomNum(300, 400)
        },
        {
            status: '状态一',
            name: '聊城',
            value: randomNum(300, 400)
        },
        {
            status: '状态一',
            name: '泰安',
            value: randomNum(300, 400)
        },
        {
            status: '状态一',
            name: '临沂',
            value: randomNum(300, 400)
        },
        {
            status: '状态一',
            name: '淄博',
            value: randomNum(300, 400)
        },
        {
            status: '状态一',
            name: '枣庄',
            value: randomNum(300, 400)
        },
        {
            status: '状态一',
            name: '滨州',
            value: randomNum(300, 400)
        },
        {
            status: '状态一',
            name: '潍坊',
            value: randomNum(300, 400)
        },
        {
            status: '状态一',
            name: '东营',
            value: randomNum(300, 400)
        },
        {
            status: '状态一',
            name: '青岛',
            value: randomNum(300, 400)
        },
        {
            status: '状态一',
            name: '烟台',
            value: randomNum(300, 400)
        },
        {
            status: '状态一',
            name: '威海',
            value: randomNum(300, 400)
        },
        {
            status: '状态一',
            name: '日照',
            value: randomNum(300, 400)
        },
    ];
    var city2 = [{
            status: '状态二',
            name: '济南',
            value: randomNum(200, 300)
        },
        {
            status: '状态二',
            name: '菏泽',
            value: randomNum(200, 300)
        },
        {
            status: '状态二',
            name: '济宁',
            value: randomNum(200, 300)
        },
        {
            status: '状态二',
            name: '德州',
            value: randomNum(200, 300)
        },
        {
            status: '状态二',
            name: '聊城',
            value: randomNum(200, 300)
        },
        {
            status: '状态二',
            name: '泰安',
            value: randomNum(200, 300)
        },
        {
            status: '状态二',
            name: '临沂',
            value: randomNum(200, 300)
        },
        {
            status: '状态二',
            name: '淄博',
            value: randomNum(200, 300)
        },
        {
            status: '状态二',
            name: '枣庄',
            value: randomNum(200, 300)
        },
        {
            status: '状态二',
            name: '滨州',
            value: randomNum(200, 300)
        },
        {
            status: '状态二',
            name: '潍坊',
            value: randomNum(200, 300)
        },
        {
            status: '状态二',
            name: '东营',
            value: randomNum(200, 300)
        },
        {
            status: '状态二',
            name: '青岛',
            value: randomNum(200, 300)
        },
        {
            status: '状态二',
            name: '烟台',
            value: randomNum(200, 300)
        },
        {
            status: '状态二',
            name: '威海',
            value: randomNum(200, 300)
        },
        {
            status: '状态二',
            name: '日照',
            value: randomNum(200, 300)
        },
    ];
    var city3 = [{
            status: '状态三',
            name: '济南',
            value: randomNum(200, 300)
        },
        {
            status: '状态三',
            name: '菏泽',
            value: randomNum(0, 400)
        },
        {
            status: '状态三',
            name: '济宁',
            value: randomNum(0, 400)
        },
        {
            status: '状态三',
            name: '德州',
            value: randomNum(0, 400)
        },
        {
            status: '状态三',
            name: '聊城',
            value: randomNum(0, 400)
        },
        {
            status: '状态三',
            name: '泰安',
            value: randomNum(0, 400)
        },
        {
            status: '状态三',
            name: '临沂',
            value: randomNum(0, 400)
        },
        {
            status: '状态三',
            name: '淄博',
            value: randomNum(0, 400)
        },
        {
            status: '状态三',
            name: '枣庄',
            value: randomNum(0, 400)
        },
        {
            status: '状态三',
            name: '滨州',
            value: randomNum(0, 400)
        },
        {
            status: '状态三',
            name: '潍坊',
            value: randomNum(0, 400)
        },
        {
            status: '状态三',
            name: '东营',
            value: randomNum(0, 400)
        },
        {
            status: '状态三',
            name: '青岛',
            value: randomNum(0, 400)
        },
        {
            status: '状态三',
            name: '烟台',
            value: randomNum(0, 400)
        },
        {
            status: '状态三',
            name: '威海',
            value: randomNum(0, 400)
        },
        {
            status: '状态三',
            name: '日照',
            value: randomNum(0, 400)
        },
    ];
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                    status: data[i].status
                });
            }
        }
        return res;
    };
    var convertData2 = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap2[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                    status: data[i].status
                });
            }
        }
        return res;
    };


    var option = {
        backgroundColor: '#091C3D',
        z: -5,
        legend: {
            zlevel: -20,
            top: '55%',
            left: '67%',
            orient: 'vertical',
            textStyle: {
                color: '#fff',
            },
            data: ["状态一", "状态二", "状态三"],
        },
        tooltip: {
            show: true,
            formatter: (params) => {
                let data = params.name + "<br/>" + params.marker + params.data.status + ":" + params.value[2] + "<br/>" + "地理坐标:[" + params.value[0] + "," + params.value[1] + "]";
                return data;
            },
        },
        /* visualMap: [{
        	show: false,
        	type: 'continuous',
        	seriesIndex: 0,
        	text: ['bar3D'],
        	calculable: true,
        	max: 600,
        	inRange: {
        		color: ['#87aa66', '#eba438', '#d94d4c']
        	}
        }], */
        geo3D: { //地图的具体参数
            backgroundColor: '#091C3D',
            map: '山东', //地图范围
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            environment:bg,
            shading: 'realistic', //光照带来的明暗
            realisticMaterial: {
                detailTexture:backImg,
                roughness: 0.6,
                metalness: 0.1,
                textureTiling: 1,
            },
            light: { // 光照相关的设置。在 shading 为 'color' 的时候无效。
                main: { //场景主光源的设置
                    intensity: 2, //主光源的强度
                    shadow: true, //主光源是否投射阴影
                    shadowQuality: 'ultra', //阴影的质量
                    alpha: 45, //主光源绕 x 轴偏离的角度
                    beta: -30, //主光源绕 y 轴偏离的角度
                },
                ambient: { //全局的环境光设置。
                    intensity: 1 //环境光的强度
                }
            },
            label: {
                show: true,
                position: 'top',
                distance: 350,
                textStyle: {
                    color: "#000",
                    fontWeight: "bolder",
                    fontSize: 20,
                    textBorderColor: "#fff",
                    textBorderWidth: 0,
                    backgroundColor: "rgba(0,100,100,0.7)",
                },
                formatter: function(params) {
                    return params.name;
                },
            },
            viewControl: { //用于鼠标的旋转，缩放等视角控制
                autoRotate: true,
                //projection:'orthographic',
                projection: 'perspective',
                autoRotateSpeed: 3,
                distance: 150, //默认视角距离主体的距离
                maxDistance: 180,
                minDistance: 83,
                minBeta: Number.NEGATIVE_INFINITY,
                maxBeta: Number.POSITIVE_INFINITY,
                panMouseButton: 'right', //平移操作使用的鼠标按键
                rotateMouseButton: 'left', //旋转操作使用的鼠标按键
                alpha: 50, // 让canvas在x轴有一定的倾斜角度
                center: [-10, -17, 0],

            },
            postEffect: { //为画面添加高光，景深，环境光遮蔽（SSAO），调色等效果
                enable: true, //是否开启
                bloom: {
                    enable: true,
                    bloomIntensity: 1,
                },
                SSAO: { //环境光遮蔽
                    radius: 10000, //环境光遮蔽的采样半径。半径越大效果越自然
                    intensity: 1, //环境光遮蔽的强度
                    quality: 'medium',
                    enable: true
                },

            },
            temporalSuperSampling: { //分帧超采样。在开启 postEffect 后，WebGL 默认的 MSAA 会无法使用,分帧超采样用来解决锯齿的问题
                enable: true
            },
            itemStyle: { //三维图形的视觉属性
                color: '#1B69CD',
                borderWidth: 0.5,
                borderColor: '#091C3D'
            },
            regionHeight: 3, //区域的高度

        },
        series: [{
            name: '状态一',
            minHeight: 0.1,
            stack: "a",
            type: "bar3D",
            coordinateSystem: 'geo3D',
            barSize: 2, //柱子粗细
            shading: 'realistic',
            realisticMaterial: {
                //detailTexture:rollImg,
                roughness: 0.5,
                metalness: 0.3,
                textureTiling: 1,
            },
            opacity: 1,
            bevelSize: 0.3,
            label: {
                show: false,
                textStyle: {
                    color: "#000",
                    fontWeight: "bolder",
                    fontSize: 20,
                    textBorderColor: "#fff",
                    textBorderWidth: 0,
                    backgroundColor: "rgba(0,100,100,0.7)",
                },
                formatter: function(params) {
                    return params.name;
                },
            },
            itemStyle: {
                color: '#62FAFB',
            },
            data: convertData(city),
        }, {
            name: '状态二',
            type: "bar3D",
            stack: "a",
            minHeight: 0.1,
            coordinateSystem: 'geo3D',
            barSize: 2.1, //柱子粗细
            shading: 'realistic',
            realisticMaterial: {
                //detailTexture:rollImg,
                roughness: 0.5,
                metalness: 0.3,
                textureTiling: 1,
            },
            opacity: 1,
            bevelSize: 0.3,
            label: {
                show: false,
                emphasis: {
                    show: false,
                },
                formatter: function(params) {
                    return params.name;
                },
            },
            itemStyle: {
                color: '#E5D02D',
            },
            data: convertData(city2),
        }, {
            name: '状态三',
            type: "bar3D",
            minHeight: 1,
            coordinateSystem: 'geo3D',
            barSize: 2, //柱子粗细
            shading: 'realistic',
            realisticMaterial: {
                //detailTexture:rollImg,
                roughness: 0,
                metalness: 0.5,
                textureTiling: 1,
            },
            opacity: 1,
            bevelSize: 0.3,
            label: {
                show: false,
                emphasis: {
                    show: false,
                },
                formatter: function(params) {
                    return params.name;
                },
            },
            itemStyle: {
                color: '#FF51B6',
            },
            data: convertData2(city3),
        }]
    };
    myChart.setOption(option);
});