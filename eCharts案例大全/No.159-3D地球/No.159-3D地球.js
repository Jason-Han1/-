var uploadedDataURL = '/asset/get/s/data-1625545136350-oWFk_ystL.json';

var baseTexture = null;
var option = null;
var geoJson = null;
// 请求world.json文件
function getGeoJsonData() {
    $.getJSON(uploadedDataURL, function (jsonObj) {
        geoJson = jsonObj;
        getBaseTexture();
    });
}

// 生成球面纹理
function getBaseTexture() {
    echarts.registerMap('world', geoJson);
    let canvas = document.createElement('canvas');
    baseTexture = echarts.init(canvas, null, {
        width: 4096,
        height: 2048,
    });
    baseTexture.setOption({
        backgroundColor: '#031c48',
        geo: {
            type: 'map',
            map: 'world',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            boundingCoords: [
                [-180, 90],
                [180, -90],
            ],
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#2455ad',
                    borderColor: '#000c2d',
                },
                emphasis: {
                    areaColor: '#357cf8',
                },
            },
            label: {
                normal: {
                    fontSize: 20,
                    show: true,
                    textStyle: {
                        color: '#fff',
                    },
                },
                emphasis: {
                    fontSize: 30,
                    show: true,
                    textStyle: {
                        color: 'yellow',
                    },
                },
            },
        },
    });
    drawEarth();
}

// 绘制球体
function drawEarth() {
    option = {
        backgroundColor: '#013954',
        tooltip: {
            trigger: 'item',
        },
        globe: {
            baseTexture: baseTexture, // 基础纹理
            globeRadius: 150, // 球面半径
            environment: '#000',
            shading: 'color',
            light: {
                // 光照阴影
                main: {
                    color: '#fff', // 光照颜色
                    intensity: 1, // 光照强度
                    alpha: 40,
                    beta: -30,
                },
                ambient: {
                    color: '#fff',
                    intensity: 1,
                },
            },
            viewControl: {
                alpha: 30,
                beta: 160,
                autoRotate: true, // 开启自动旋转
                autoRotateAfterStill: 10,
                distance: 240,
            },
        },
        series: [
            {
                name: '世界贸易情况',
                type: 'lines3D',
                coordinateSystem: 'globe',
                effect: {
                    show: true,
                },
                blendMode: 'lighter',
                lineStyle: {
                    width: 2,
                },
                data: [],
                silent: false,
            },
        ],
    };
    // 随机数据 i控制线数量
    for (let i = 0; i < 100; i++) {
        option.series[0].data = option.series[0].data.concat(rodamData());
    }
    myChart.clear();
    myChart.setOption(option, true);
}

function rodamData() {
    let name = '随机数据' + Math.random().toFixed(5) * 100000;
    // 模拟数据，构造飞线的起始经纬度
    let longitude = 116.2;
    let latitude = 39.56;
    let longitude2 = Math.random() * 360 - 180;
    let latitude2 = Math.random() * 180 - 90;
    return {
        coords: [
            [longitude, latitude],
            [longitude2, latitude2],
        ],
        value: (Math.random() * 3000).toFixed(2),
    };
}

getGeoJsonData();