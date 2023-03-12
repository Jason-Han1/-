var cityProper = "/asset/get/s/data-1585106163478-9_Yhr9ySc.json";
var cityProper = "/asset/get/s/data-1585106268181-f8BWTEuMp.json";
var cityProper = "/asset/get/s/data-1585106264482-9CvnI30KG.json";
var cityProper = "/asset/get/s/data-1585106260708-J4WQhFviS.json";
var cityProper = "/asset/get/s/data-1585106256461-HJdbYAvmo.json";
var cityProper = "/asset/get/s/data-1585106251441-Rqm9T1h9S.json";
var cityProper = "/asset/get/s/data-1585106245488-adg_bxKZR.json";
var cityProper = "/asset/get/s/data-1585106240790-vd1Tj3lQb.json";
var cityProper = "/asset/get/s/data-1585106230281-jm2vc8Jj6.json";
var cityProper = "/asset/get/s/data-1585106145352-2svyDKcNx.json";
var cityProper = "/asset/get/s/data-1585106151234-8__DZ4Kn7.json";
var cityProper = "/asset/get/s/data-1585106168848-Lr8VTLQ6A.json";
var cityProper = "/asset/get/s/data-1585106176156-9fyM4Qgcn.json";
var cityProper = "/asset/get/s/data-1585106180256-ij5MGbSBo.json";

var data = [{
        name: '南京市',
        value: 1
    },
    {
        name: '无锡市',
        value: 2
    },
    {
        name: '徐州市',
        value: 3
    },
    {
        name: '常州市',
        value: 4
    },
    {
        name: '苏州市',
        value: 5
    },
    {
        name: '南通市',
        value: 6
    },
    {
        name: '连云港市',
        value: 7
    },
    {
        name: '淮安市',
        value: 8
    },
    {
        name: '盐城市',
        value: 9
    },
    {
        name: '扬州市',
        value: 10
    },
    {
        name: '镇江市',
        value: 11
    },
    {
        name: '泰州市',
        value: 12
    },
    {
        name: '宿迁市',
        value: 13
    },
];
var splitList = [{
        start: 1,
        end: 1,
        label: '南京市',
        color: '#236da8'
    },
    {
        start: 2,
        end: 2,
        label: '无锡市',
        color: '#2884db'
    },
    {
        start: 3,
        end: 3,
        label: '徐州市',
        color: '#244779'
    },
    {
        start: 4,
        end: 4,
        label: '常州市',
        color: '#246198'
    },
    {
        start: 5,
        end: 5,
        label: '苏州市',
        color: '#2884db'
    },
    {
        start: 6,
        end: 6,
        label: '南通市',
        color: '#2884db'
    },
    {
        start: 7,
        end: 7,
        label: '连云港市',
        color: '#244779'
    },
    {
        start: 8,
        end: 8,
        label: '淮安市',
        color: '#244779'
    },
    {
        start: 9,
        end: 9,
        label: '盐城市',
        color: '#244779'
    },
    {
        start: 10,
        end: 10,
        label: '扬州市',
        color: '#246198'
    },
    {
        start: 11,
        end: 11,
        label: '镇江市',
        color: '#2884db'
    },
    {
        start: 12,
        end: 12,
        label: '泰州市',
        color: '#2884db'
    },
    {
        start: 13,
        end: 13,
        label: '宿迁市',
        color: '#244779'
    },
];
//获取青岛地图数据。
$.get('/asset/get/s/data-1585106163478-9_Yhr9ySc.json', function(getJSON) {
    echarts.registerMap("江苏", getJSON)
    option = {
        series: [{
            tooltip: {
                trigger: 'item'
            },
            name: '江苏',
            type: 'map3D',
            map: '江苏',
            boxDepth: 100, //地图倾斜度
            regionHeight: 4, //地图厚度
            label: {
                show: true, //是否显示市
                textStyle: {
                    color: "#fff", //文字颜色
                    fontSize: 12, //文字大小
                    fontFamily: '微软雅黑',
                    backgroundColor: "rgba(0,0,0,0)", //透明度0清空文字背景
                },
            },
            itemStyle: {
                opacity: 1, // 透明度
                borderWidth: 1.5, //分界线宽度
                borderColor: "#207fce", //分界线颜色
            },
            groundplane: {
                show: false
            },
            data: data,
            //shading: 'realistic',
            // 真实感材质相关配置 shading: 'realistic'时有效
            realisticMaterial: {
                detailTexture: '#fff', // 纹理贴图
                textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
                roughness: 0, // 材质粗糙度，0完全光滑，1完全粗糙
                metalness: 0, // 0材质是非金属 ，1金属
                roughnessAdjust: 0
            },
            viewControl: {
                distance: 135, // 地图视角 控制初始大小
                rotateSensitivity: 1, // 旋转
                zoomSensitivity: 1, // 缩放
            },
        }],
        dataRange: {
            show: false,
            splitList: splitList
        },
        animation: false
    };
    chart.setOption(option);
    chart.on("click", chartClick);
})

function chartClick(param) {
    chart.setOption(option, false);
    var selectedPro = param.name;
    if (!cityProper[selectedPro]) {
        option.series.splice(1);
        option.legend = null;
        option.visualMap = null;
        chart.setOption(option, true);
        return;
    }
    //获取点击区域数据
    $.get(cityProper[selectedPro], function(geojson) {
        echarts.registerMap(selectedPro, geojson);
        //根据需求，如果要替换青岛地图，series参数为[0]，不替换为[1],其中left、top自己设置。
        option.series[0] = {
            name: '',
            type: 'map',
            map: selectedPro,
            boxDepth: 100, //地图倾斜度
            regionHeight: 5, //地图厚度
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            groundplane: {
                show: false
            },
            data: data,
            shading: 'realistic',
            // 真实感材质相关配置 shading: 'realistic'时有效
            realisticMaterial: {
                detailTexture: '#fff', // 纹理贴图
                textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
                roughness: 0, // 材质粗糙度，0完全光滑，1完全粗糙
                metalness: 0, // 0材质是非金属 ，1金属
                roughnessAdjust: 0
            },
            viewControl: {
                distance: 150, // 地图视角 控制初始大小
                rotateSensitivity: 1, // 旋转
                zoomSensitivity: 1, // 缩放
            }
        }
        chart.setOption(option);
    })
}