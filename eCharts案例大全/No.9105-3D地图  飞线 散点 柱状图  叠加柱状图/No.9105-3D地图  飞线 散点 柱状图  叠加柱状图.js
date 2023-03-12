// 全国经纬度
var geoCoordMap = {
    '辽宁': [123.429092, 41.796768],
    '吉林': [125.324501, 43.886841],
    '黑龙江': [126.642464, 45.756966],
    '北京': [116.405289, 39.904987],
    '天津': [117.190186, 39.125595],
    '内蒙古': [111.751990, 40.841490],
    '宁夏': [106.232480, 38.486440],
    '山西': [112.549248, 37.857014],
    '河北': [114.502464, 38.045475],
    '山东': [117.000923, 36.675808],
    '河南': [113.665413, 34.757977],
    '陕西': [108.948021, 34.263161],
    '湖北': [114.298569, 30.584354],
    '江苏': [118.76741, 32.041546],
    '安徽': [115.782939, 33.869338],
    '上海': [121.472641, 31.231707],
    '湖南': [112.982277, 28.19409],
    '江西': [115.892151, 28.676493],
    '浙江': [120.15358, 30.287458],
    '福建': [119.306236, 26.075302],
    '广东': [113.28064, 23.125177],
    '台湾': [121.5200760, 25.0307240],
    '海南': [110.199890, 20.044220],
    '广西': [108.320007, 22.82402],
    '重庆': [106.504959, 29.533155],
    '云南': [102.71225, 25.040609],
    '贵州': [106.713478, 26.578342],
    '四川': [104.065735, 30.659462],
    '甘肃': [103.834170, 36.061380],
    '青海': [101.777820, 36.617290],
    '西藏': [91.11450, 29.644150],
    '新疆': [87.616880, 43.826630],
    '香港': [114.165460, 22.275340],
    '澳门': [113.549130, 22.198750]
}

// 柱状图模拟数据  数据格式 [{name:名字,value:[lng,lat,数值]}]
var barData = [];
var barDatacp1 = [];
var barDatacp2 = [];

// 模拟飞线数据[[[start.lng,start.lat,海拔高度],[end.lng,end.lat,海拔高度]]]
var flyLinesData = [];
var end = "安徽";
var endPoint = geoCoordMap[end];
endPoint.push(2)

for (var key in geoCoordMap) {
    var point1 = JSON.parse(JSON.stringify(geoCoordMap[key]));
    var point2 = JSON.parse(JSON.stringify(geoCoordMap[key]));
    var point3 = JSON.parse(JSON.stringify(geoCoordMap[key]));
    point1[0] += 0.6;
    point1.push(_random(100, 600));
    point2.push(_random(100, 300));
    point3.push(_random(100, 300))
    barData.push({
        'name': key,
        'value': point1
    })

    barDatacp1.push({
        'name': key,
        'value': point2
    })

    barDatacp2.push({
        'name': key,
        'value': point3
    })

    var startPoint = geoCoordMap[key];
    startPoint.push(2)
    if (key != end) flyLinesData.push([startPoint, endPoint])
}


option = {
    geo3D: {
        map: 'china',
        regionHeight: 1,
        // 环境可配置为全景贴图 纯色 渐变色
        environment: '#000',
        itemStyle: {
            areaColor: '#0e88de',
            opacity: 1,
            borderWidth: 0.4,
            borderColor: '#00FFF8' // 地图边配色
        },
        label: {
            textStyle: {
                color: "#dbde0e",
                backgroundColor: "#000",
                padding: 5,
                fontSize: 18
            }
        },
        emphasis: {
            label: {
                show: false
            },
            itemStyle: {
                areaColor: '#0edecb'
            }
        },
        shading: 'lambert',
        light: { //光照阴影
            main: {
                color: '#fff', //光照颜色
                intensity: 1.2, //光照强度
                //shadowQuality: 'high', //阴影亮度
                shadow: true, //是否显示阴影
                alpha: 55,
                beta: 10

            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    series: [
        // 3D飞线图
        {
            name: '飞线',
            type: 'lines3D',
            coordinateSystem: 'geo3D',
            effect: {
                show: true,
                trailWidth: 4,
                trailOpacity: 1,
                trailLength: 0.2,
                constantSpeed: null
            },
            // blendMode: 'lighter',
            lineStyle: {
                color: '#fcff0a',
                width: 2,
                opacity: 0.5
            },
            data: flyLinesData
        },
        // 3D气泡图 数值代表气泡高度
        {
            name: '气泡',
            type: "scatter3D",
            coordinateSystem: 'geo3D',
            symbol: 'circle',
            symbolSize: 14,
            opacity: 1,
            label: {
                show: false,
                formatter: '{b}'
            },
            itemStyle: {
                // borderWidth: 0.5,
                // borderColor: '#fff'//气泡边的颜色
                color: '#09f5f5'
            },
            data: barData
        },
        // 叠加柱状图
        {
            name: 'c',
            stack: 'cp',
            type: "bar3D",
            coordinateSystem: 'geo3D',
            barSize: 0.6, //柱宽
            bevelSize: 0.5, //倒角
            label: {
                textStyle: {
                    color: "#dbde0e",
                    backgroundColor: "#000",
                    padding: 5,
                    fontSize: 18
                },
                formatter: function(e) {
                    return e.name + '：' + e.value[2]
                }
            },
            itemStyle: {
                color: '#f50997'
            },
            shading: 'lambert',
            data: barDatacp1
        },
        // 叠加柱状图 叠加时每个叠加的柱宽最好设置不相同 不然会影响渲染效果和事件效果
        {
            name: 'p',
            stack: 'cp',
            type: "bar3D",
            coordinateSystem: 'geo3D',
            barSize: 0.7, //柱宽
            bevelSize: 0.5, //倒角
            label: {
                textStyle: {
                    color: "#dbde0e",
                    backgroundColor: "#000",
                    padding: 5,
                    fontSize: 18
                },
                formatter: function(e) {
                    return e.name + '：' + e.value[2]
                }
            },
            itemStyle: {
                color: '#095df5'
            },
            shading: 'lambert',
            data: barDatacp2
        },
        // 如果同一经纬度需要展示不同柱图且不叠加  最好让改变此点经纬度让其发生一些偏移
        {
            type: "bar3D",
            coordinateSystem: 'geo3D',
            offset: 3,
            barSize: 0.6, //柱宽
            bevelSize: 0.5, //倒角
            label: {
                textStyle: {
                    color: "#dbde0e",
                    backgroundColor: "#000",
                    padding: 5,
                    fontSize: 18
                },
                formatter: function(e) {
                    return e.name + '：' + e.value[2]
                }
            },
            itemStyle: {
                color: '#0ac0c1'
            },
            shading: 'lambert',
            data: barData
        }
    ]
};

function _random(a, b) {
    return Math.round(Math.random() * Math.abs(b - a) + a)
}