
var uploadedDataURL = "/asset/get/s/data-1638783357267-0K0WSN5-V.json";


var data = [{
        name: '崖州区',
        value: 1
    },
    {
        name: '天涯区',
        value: 2
    },
    {
        name: '海棠区',
        value: 3
    },
    {
        name: '吉阳区',
        value: 4
    }
];
var splitList = [{
        start: 1,
        end: 1,
        label: '崖州区',
        color: 'rgba(36, 255, 232, 0.6)'
    },
    {
        start: 2,
        end: 2,
        label: '天涯区',
        color: 'rgba(173, 113, 255, 0.6)'
    },
    {
        start: 3,
        end: 3,
        label: '海棠区',
        color: 'rgba(36, 175, 255, 0.6)'
    },
    {
        start: 4,
        end: 4,
        label: '吉阳区',
        color: 'rgba(255, 251, 147, 0.6)'
    }
];
//获取青岛地图数据。
$.get(uploadedDataURL, function(getJSON) {
    echarts.registerMap("三亚市", getJSON)
    option = {
        series: [{
            tooltip: {
                trigger: 'item'
            },
            name: '三亚市',
            type: 'map3D',
            map: '三亚市',
            boxDepth: 100, //地图倾斜度
            regionHeight: 4, //地图厚度
            label: {
                show: true, //是否显示市
                textStyle: {
                    color: "#fff", //文字颜色
                    fontSize:32, //文字大小
                    fontFamily: '微软雅黑',
                    backgroundColor: "rgba(0,0,0,0)", //透明度0清空文字背景
                },
            },
            itemStyle: {
                opacity: 1, // 透明度
                borderWidth: 0, //分界线宽度
                borderColor: "#207fce", //分界线颜色
            },
            groundplane: {
                show: false
            },
            data: data,
            shading: 'realistic',
            // 真实感材质相关配置 shading: 'realistic'时有效
            realisticMaterial: {
                detailTexture: '#000', // 纹理贴图
                textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
                roughness: 0, // 材质粗糙度，0完全光滑，1完全粗糙
                metalness: 0, // 0材质是非金属 ，1金属
                roughnessAdjust: 0
            },
            viewControl: {
                distance: 135, // 地图视角 控制初始大小
                // rotateSensitivity: 1, // 旋转
                // zoomSensitivity: 1, // 缩放
            },
        }],
        dataRange: {
            show: true,
            splitList: splitList
        },
        animation: false
    };
    myChart.setOption(option);
})
