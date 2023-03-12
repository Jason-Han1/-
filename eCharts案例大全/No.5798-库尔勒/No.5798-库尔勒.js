var uploadedDataURL = "/asset/get/s/data-1600917850737-DXTCn4FUR.json";




let mapData = [{
        name: "中心机房",
        value: [85.74, 41.60, 2],
    },
    {
        name: "机房1",
        value: [86.23, 41.74, 2]
    },
    {
        name: "机房2",
        value: [85.92, 41.40, 2]
    },
    {
        name: "机房3",
        value: [85.62, 41.38, 2]
    },
    {
        name: "机房4",
        value: [85.3295, 41.58, 2]
    },
    {
        name: "机房5",
        value: [85.50, 41.99, 2]
    },



];
let linesData = [{

        fromName: "中心机房",
        toName: "机房1",
        coords: [
            [85.74, 41.60, 1],
            [86.23, 41.74, 1],

        ]
    },
    {

        fromName: "中心机房",
        toName: "机房2",
        coords: [
            [85.74, 41.60, 1],
            [85.92, 41.40, 1],

        ]
    },
    {

        fromName: "中心机房",
        toName: "机房3",
        coords: [
            [85.74, 41.60, 1],
            [85.62, 41.38, 1],

        ]
    },
    {

        fromName: "中心机房",
        toName: "机房4",
        coords: [
            [85.74, 41.60, 1],
            [85.3295, 41.58, 1],

        ]
    },
    {

        fromName: "中心机房",
        toName: "机房5",
        coords: [
            [85.74, 41.60, 1],
            [85.50, 41.99, 1],

        ]
    },


]


$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('kel', geoJson);
    option = {
        backgroundColor: '#000f1e',
        geo3D: {
            map: 'kel',
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

                distance: 500, //默认视角距离主体的距离
                center: [0, 0, 0],

                animation: true,
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut'
            },
        },

        series: [
            {
                type: 'map3D',
                map: 'kel',
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
                    color: '#025894',
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
                        color: '#025894',
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

                    distance: 500, //默认视角距离主体的距离
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
                //symbol: 'path://m232.99844,160.209511l15.863519,0l0,-14.211071l16.27296,0l0,14.211071l15.863521,0l0,14.577861l-15.863521,0l0,14.211069l-16.27296,0l0,-14.211069l-15.863519,0l0,-14.577861z',
                symbol: 'circle',
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
                    color: '#2681cf',
                    shadowBlur: 20,
                    shadowColor: '#fff'
                },
                emphasis: {
                    itemStyle: { //坐标点颜色
                        color: '#1ca1d2',
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
                data: linesData,

            },


        ]
    };
    myChart.setOption(option);
});

myChart.on('click', function(params) {
    let option = myChart.getOption();
    console.log(params);

});