var uploadedDataURL = "/asset/get/s/data-1598929586542-0zn9mj60y.json";


let dataPoint = [{
        name: "龙亭镇",
        value: [107.64046846020508, 33.215041091597946, 2],

    },
    {
        name: "谢村镇",
        value: [107.45208, 33.183403, 2]
    },

    {
        name: "马畅镇",
        value: [107.380081, 33.19104, 2]
    },
    {
        name: "溢水镇",
        value: [107.451401, 33.252083, 2]
    },
    {
        name: "磨子桥镇",
        value: [107.522369, 33.186253, 2]
    },
    {
        name: "黄家营镇",
        value: [107.73360483593751, 33.10465171943266, 2]
    },
    {
        name: "黄安镇",
        value: [107.616379, 33.188942, 2]
    },
    {
        name: "黄金峡镇",
        value: [107.851662, 33.183479, 2]
    },
    {
        name: "槐树关镇",
        value: [107.715042, 33.24757, 2]
    },
    {
        name: "金水镇",
        value: [107.854279, 33.2747, 2]
    },
    {
        name: "华阳镇",
        value: [107.392563, 33.612713, 2]
    },
    {
        name: "茅坪镇",
        value: [107.684509, 33.433952, 2]
    },
    {
        name: "八里关镇",
        value: [107.628944, 33.386372, 2]
    },
    {
        name: "桑溪镇",
        value: [108.012367, 33.201622, 2]
    },
    {
        name: "关帝镇",
        value: [107.509422, 33.321411, 2]
    },

]

let mapData = [
                {
                    name: "卫校附设医院",
                    value: [107.554558, 33.21843, 2]
                },
                {
                    name: "黄安卫生院",
                    value: [107.61841747885131, 33.1884481733651, 2]
                },
                {
                    name: "溢水卫生院",
                    value: [107.4494698095093, 33.25498544659004, 2]
                },
                {
                    name: "龙亭园卫生院",
                    value: [107.6554190932541, 33.20854674023374, 2]
                },
                {
                    name: "华阳医院",
                    value: [107.54518100000001, 33.59248987410931, 2]
                },
                {
                    name: "茅坪中心卫生院",
                    value: [107.68401547354127, 33.43404824947542, 2]
                },
                {
                    name: "桑溪卫生院",
                    value: [108.00989400328827, 33.20189131981074, 2]
                },
                {
                    name: "金水中心卫生院",
                    value: [107.85502600000001, 33.27706248479885, 2]
                },
                {
                    name: "马畅中心卫生院",
                    value: [107.37508672681429, 33.192166785182195, 2]
                },

            ];



$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('yx', geoJson);
    option = {
                backgroundColor: '#000f1e',
                geo3D: {
                    map: 'yx',
                    show: false,
                    zlevel: -10,
                    boxWidth: 200,
                    boxHeight: 4, //4:没有bar. 30:有bar,bar最高度30，按比例分配高度
                    regionHeight: 3,
                    shading: 'lambert',


                    viewControl: {
                        projection: 'perspective',
                        autoRotate: false,
                        damping: 0,
                        rotateSensitivity: 2, //旋转操作的灵敏度
                        rotateMouseButton: 'left', //旋转操作使用的鼠标按键
                        zoomSensitivity: 2, //缩放操作的灵敏度
                        panSensitivity: 2, //平移操作的灵敏度
                        panMouseButton: 'right', //平移操作使用的鼠标按键

                        distance: 200, //默认视角距离主体的距离
                        center: [0, 0, 0],

                        animation: true,
                        animationDurationUpdate: 1000,
                        animationEasingUpdate: 'cubicInOut'
                    },
                },

                series: [
                    {
                    type: 'map3D',
                    map: 'yx',
                    show: true,
                    zlevel: 1,
                    boxWidth: 200,
                    //boxHeight: 4, //4:没有bar. 30:有bar,bar最高度30，按比例分配高度
                    regionHeight: 3,
                    shading: 'lambert',
                    label: { // 标签的相关设置
                        show: false,
                    },

                    itemStyle: {
                        color:'#025894',
                        areaColor: '#025894',
                        opacity: 1,
                        borderWidth: 1,
                        borderColor: '#1cccff'
                    },
                    emphasis: {
                        label: {
                            show: false,

                            textStyle: {
                                color: '#fff',
                                fontSize: 14,
                                backgroundColor: 'transparent' // 字体背景色
                            }
                        },
                        borderColor: '#333',
                        borderWidth: 5,
                        itemStyle: {
                            color:'#025894',
                            areaColor: '#025894',

                        }
                    },
                    light: {
                        main: {

                            shadow: true,
                            shadowQuality: 'ultra',
                        },

                    },



                    viewControl: {
                        projection: 'perspective',
                        autoRotate: false,
                        damping: 0,
                        rotateSensitivity: 2, //旋转操作的灵敏度
                        rotateMouseButton: 'left', //旋转操作使用的鼠标按键
                        zoomSensitivity: 2, //缩放操作的灵敏度
                        panSensitivity: 2, //平移操作的灵敏度
                        panMouseButton: 'right', //平移操作使用的鼠标按键

                        distance: 200, //默认视角距离主体的距离
                        center: [0, 0, 0],

                        animation: true,
                        animationDurationUpdate: 1000,
                        animationEasingUpdate: 'cubicInOut'
                    },


                },
                    {
                        type: 'scatter3D',
                        coordinateSystem: 'geo3D',
                        zlevel: 3,
                        symbol: 'path://m232.99844,160.209511l15.863519,0l0,-14.211071l16.27296,0l0,14.211071l15.863521,0l0,14.577861l-15.863521,0l0,14.211069l-16.27296,0l0,-14.211069l-15.863519,0l0,-14.577861z',
                        //symbol: 'circle',
                        symbolSize: 16,

                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                formatter: '{b}',

                                textStyle: {
                                    color: '#fff',
                                    fontSize: 14,
                                    backgroundColor: 'transparent' // 字体背景色
                                },

                            }
                        },

                        data: mapData,
                        itemStyle: { //坐标点颜色
                            color: '#ff0000',
                            shadowBlur: 20,
                            shadowColor: '#fff'
                        },
                        emphasis: {
                            itemStyle: { //坐标点颜色
                                color: '#1ca1d2',
                            },
                        }


                    },
                    {
                        type: 'scatter3D',
                        coordinateSystem: 'geo3D',
                        zlevel: 2,
                        symbol: 'none',
                        symbolSize: 16,

                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                formatter: '{b}',

                                textStyle: {
                                    color: '#1ca1d2',
                                    fontSize: 10,
                                    backgroundColor: 'transparent' // 字体背景色
                                },

                            }
                        },

                        data: dataPoint,
                        itemStyle: { //坐标点颜色
                                color: '#0ac1ef',
                                shadowBlur: 20,
                                shadowColor: '#fff'
                        },
                        emphasis: {
                            itemStyle: { //坐标点颜色
                                color: '#f00',
                            },
                        }

                    },
                    // 线 和 点
                    {
                        type: 'lines3D',
                        coordinateSystem: 'geo3D',
                        zlevel: 1, //设置这个才会有轨迹线的小尾巴
                        polyline: false,
                        effect: {
                            show: true,
                            period: 10,
                            trailLength: 0.1,
                            trailColor: '#17eafe',
                            color: '#fff', //流动点颜色
                            symbol: 'arrow',
                            symbolSize: 6
                        },
                        lineStyle: {
                            normal: {
                                color: '#fff', //线条颜色
                                width: 1,
                                curveness: 0.5,
                                shadowColor: '#fff',
                            }
                        },
                        blendMode: 'lighter',
                        data: [{

                            fromName: "卫校附设医院",
                            toName: "黄安卫生院",
                            coords: [
                                [107.554558, 33.21843, 1],
                                [107.61841747885131, 33.1884481733651, 1],

                            ]
                        },
                            {

                                fromName: "卫校附设医院",
                                toName: "溢水卫生院",
                                coords: [
                                    [107.554558, 33.21843, 1],
                                    [107.4494698095093, 33.25498544659004, 1]

                                ]
                            },
                            {

                                fromName: "卫校附设医院",
                                toName: "龙亭园卫生院",
                                coords: [
                                    [107.554558, 33.21843, 1],
                                    [107.6554190932541, 33.20854674023374, 1]

                                ]
                            },
                            {

                                fromName: "卫校附设医院",
                                toName: "华阳医院",
                                coords: [
                                    [107.554558, 33.21843, 1],
                                    [107.54518100000001, 33.59248987410931, 1]

                                ]
                            },
                            {

                                fromName: "卫校附设医院",
                                toName: "茅坪中心卫生院",
                                coords: [
                                    [107.554558, 33.21843, 1],
                                    [107.68401547354127, 33.43404824947542, 1]

                                ]
                            },
                            {

                                fromName: "卫校附设医院",
                                toName: "桑溪卫生院",
                                coords: [
                                    [107.554558, 33.21843, 1],
                                    [108.00989400328827, 33.20189131981074, 1]

                                ]
                            },
                            {

                                fromName: "卫校附设医院",
                                toName: "金水中心卫生院",
                                coords: [
                                    [107.554558, 33.21843, 1],
                                    [107.85502600000001, 33.27706248479885,1]

                                ]
                            },
                            {

                                fromName: "卫校附设医院",
                                toName: "马畅中心卫生院",
                                coords: [
                                    [107.554558, 33.21843, 1],
                                    [107.37508672681429, 33.192166785182195,1]

                                ]
                            },

                        ],

                    },

                ]
            };
    myChart.setOption(option);
});

myChart.on('click', function(params) {
    let option = myChart.getOption();
    console.log(params.name);

});