let scatterData = [
    {
        name: '济南',
        value: [117, 36.65],
    },
];

option = {
    geo3D: {
        map: 'china',
        roam: true,
        boxWidth: 100,
        boxHeight: 100,
        boxDepth: 100,
        itemStyle: {
            opacity: 1,
            borderWidth: 0.8,
            color: 'rgb(5,101,123)',
            borderColor: 'rgb(62,215,213)',
        },
        label: {
            show: true,
            textStyle: {
                opacity: 1,
                color: '#fff',
                fontSize: 12,
                backgroundColor: 'rgba(0,0,0,0)',
            },
        },

        //鼠标 hover 高亮时图形和标签的样式。
        emphasis: {
            label: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                    backgroundColor: 'rgba(0,23,11,0)',
                },
            },
        },

        // 光照
        light: {
            // 场景主光源的设置
            main: {
                color: '#fff',
                intensity: 1.2,
                shodow: true,
                alpha: 55,
                beta: 10,
            },
            // 全局的环境光设置。
            ambient: {
                intensity: 0.2,
            },
        },

        viewControl: {
            projection: 'orthographic',
            orthographicSize: 70, // 正交投影的大小,为'orthographic'的时候有效。
            alpha: 45, // 视角绕 x 轴，即上下旋转的角度
            beta: 0, // 视角绕 y 轴，即左右旋转的角度。
            autoRotate: false, // 是否开启视角绕物体的自动旋转查看。
            autoRotateDirection: 'ccw',
        },
    },

    series: [
        {
            name: 'effectScatter',
            type: 'effectScatter',
            coordinateSystem: 'geo', // 使用地理坐标系
            geoIndex: 100,
            symbolSize: 70,
            label: {
                show: true,
            },
            itemStyle: {
                normal: {
                    color: '#ddb926',
                },
            },
            data: scatterData,
        },
    ],
};
