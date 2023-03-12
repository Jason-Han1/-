option = {
    visualMap: {
        show: true,
        min: 0,
        max: 100,
        itemWidth: 10,
        itemHeight: 50,
        inRange: {
            color: ["#03fbfa", "#fdc102"]
        },
        textStyle: {
            fontSize: "12",
            color: "#91bbd4"
        },
        text: ["高", "低"],
        calculable: true,
        left: "left",
        top: "bottom"
    },
    geo3D: {
        map: "china",
        show: false,
        light: {
            main: {
                color: '#52e2e2',
                intensity: 3,
                shadow: true
            }
        },
        viewControl: {
            alpha: 35,
            distance: 80,
            rotateSensitivity: 1,
            zoomSensitivity: 0,
            panSensitivity: 0,
            panMouseButton: "right"
        }
    },
    series: [{
        type: "map3D",
        map: "china",
        boxWidth: 100,
        boxHeight: 8,
        regionHeight: 2,
        shading: 'lambert',
        itemStyle: {
            color: "#001e3a",
            opacity: 1,
            borderWidth: 1,
            borderColor: "#52e2e2"
        },
        instancing: false,
        label: {
            show: true,
            distance: 0,
            textStyle: {
                color: "#fff",
                fontFamily: "微软雅黑",
                fontSize: "12",
                fontStyle: "normal",
                fontWeight: "normal",
                backgroundColor: "rgba(0,0,0,0)"
            }
        },
        emphasis: {},
        light: {
            main: {
                color: '#52e2e2',
                intensity: 3,
                shadow: true
            }
        },
        viewControl: {
            alpha: 35,
            distance: 80,
            rotateSensitivity: 1,
            zoomSensitivity: 0,
            panSensitivity: 0,
            panMouseButton: "right"
        },
        data: [{
            name: '福建',
            value: 100
        }]
    }, {
        name: "利润",
        type: "bar3D",
        coordinateSystem: "geo3D",
        shading: 'lambert',
        emphasis: {
            label: {
                formatter: (params) => {
                    return params.value[2]
                }
            }
        },
        bevelSize: 0.3,
        itemStyle: {
            //  opacity: 0.8
        },
        minHeight: 1,
        data: [{
            "name": "西宁",
            "value": [101.48, 36.38, 44],
        }, {
            "name": "长春",
            "value": [125.19, 43.539999999999999, 33],
        }, {
            "name": "银川",
            "value": ["106.16", "38.270000000000003", 25],
        }, {
            "name": "呼和浩特",
            "value": ["111.41", "40.479999999999997", 30],
        }, {
            "name": "拉萨",
            "value": ["91.079999999999998", "29.390000000000001", 44],
        }, {
            "name": "兰州",
            "value": ["103.51000000000001", "36.039999999999999", 55],
        }, {
            "name": "昆明",
            "value": ["102.42", "25.039999999999999", 66],
        }, {
            "name": "沈阳",
            "value": ["123.25", "41.479999999999997", 46],
        }, {
            "name": "重庆",
            "value": ["106.33", "29.350000000000001", 77],
        }, {
            "name": "合肥",
            "value": ["117.17", "31.52", 88],
        }, {
            "name": "天津",
            "value": ["117.12", "39.020000000000003", 99],
        }, {
            "name": "石家庄",
            "value": ["114.3", "38.020000000000003", 74],
        }, {
            "name": "武汉",
            "value": ["114.17", "30.350000000000001", 65],
        }, {
            "name": "杭州",
            "value": ["120.09999999999999", "30.16", 23],
        }, {
            "name": "郑州",
            "value": ["113.40000000000001", "34.460000000000001", 63],
        }, {
            "name": "上海",
            "value": ["121.29000000000001", "31.140000000000001", 85],
        }]
    }]
}