var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

//geoCoordMap把所有可能出现的城市加到数组里面
var geoCoordMap = {
    "杭州": [119.5313, 29.8773],
    "苏州": [118.8062, 31.9208],
    '上海': [121.4648, 31.2891],
    "天津": [117.4219, 39.4189],
    '深圳': [114.072026, 22.552194],
    "成都": [103.9526, 30.7617],
    "郑州": [113.4668, 34.6234],
    "宁波": [121.640618, 29.86206],
    "合肥": [117.29, 32.0581],
    "重庆": [108.384366, 30.439702],
    "广州": [113.12244, 23.009505],
    "大连": [123.1238, 42.1216],
    "青岛": [117.1582, 36.8701],
    '北京': [116.4551, 40.2539],
    '义乌': [120.067209, 29.346921],
    '东莞': [113.764742, 23.02039],
    "长沙": [113.0823, 28.2568],
    "贵阳": [106.6992, 26.7682],
    '珠海': [113.556111, 22.250876],
    '威海': [122.109148, 37.516889],
    "泉州": [118.58, 24.93],
    "赤峰": [118.87, 42.28],
    "厦门": [118.1, 24.46],
    "福州": [119.3, 26.08],
    "抚顺": [123.97, 41.97],
    "汕头": [116.69, 23.39],
    "宁波": [121.56, 29.86],
    "海口": [110.35, 20.02],
    "岳阳": [113.09, 29.37],
    "武汉": [114.31, 30.52],
    "义乌": [120.06, 29.32],
    "唐山": [118.02, 39.63],
    "石家庄": [114.48, 38.03],
    "哈尔滨": [126.63, 45.75],
    "兰州": [103.73, 36.03],
    "贵阳": [106.71, 26.57],
    "呼和浩特": [111.65, 40.82],
    "南昌": [115.89, 28.68],
    "佛山": [113.11, 23.05],
    "汕头": [116.69, 23.39],
    "烟台": [121.39, 37.52],
    "威海": [122.1, 37.5],
};

//2013年数据
var d1 = {
    "杭州": 100,
    "苏州": 2,
    '上海': 21,
    "天津": 4,
    '深圳': 7,
    "郑州": 7,
    "成都": 5,
    "宁波": 2,
    "合肥": 1,
    "重庆": 3,
    "广州": 19,
    "大连": 1,
    "青岛": 2,
    '北京': 16,
    '义乌': 2,
    '东莞': 1,
    "长沙": 3,
    "贵阳": 0,
    '珠海': 0,
    '威海': 0,
    '南昌': 1,
    '西安': 2,
    '南京': 6,
    '海口': 0,
    '厦门': 3,
    '沈阳': 3,
    '无锡': 0,
    '呼和浩特': 0,
    '长春': 0,
    '哈尔滨': 1,
    '武汉': 5,
    '南宁': 1,
    '昆明': 1,
    '兰州': 0,
    '唐山': 0,
    '石家庄': 2,
    '太原': 1,
    '赤峰': 0,
    '抚顺': 0,
    '珲春': 0,
    '绥芬河': 0,
    '徐州': 0,
    '南通': 1,
    '温州': 2,
    '绍兴': 0,
    '芜湖': 0,
    '福州': 5,
    '泉州': 2,
    '赣州': 2,
    '济南': 3,
    '烟台': 0,
    '洛阳': 1,
    '黄石': 0,
    '岳阳': 0,
    '汕头': 0,
    '佛山': 0,
    '泸州': 0,
    '海东': 0,
    '银川': 0,
};

var mapData = [];

for (var key in geoCoordMap) {
    mapData.push({
        "year": '2013',
        "name": key,
        "value": d1[key],
    })
}
mapData.sort(function sortNumber(a, b) {
    return a.value - b.value
});

$.getJSON(uploadedDataURL, function(geoJson) {

    echarts.registerMap('china', geoJson);
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    optionXyMap01 = {
        grid: {
            right: '1%',
            top: '15%',
            bottom: '10%',
            width: '20%'
        },
        tooltip: {
            trigger: 'axis', // hover触发器
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                shadowStyle: {
                    color: 'rgba(150,150,150,0.1)' //hover颜色
                }
            }
        },
        geo: {
            show: true,
            map: 'china',
            roam: false,
            zoom: 1,
            center: [113.83531246, 34.0267395887],
        },

        series: [
            //地图中闪烁的点
            {
                //  name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(mapData.sort(function(a, b) {
                    return b.value - a.value;
                }).slice(0, 20)),
                symbolSize: function(val) {
                    return val[2] / 10;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#1DE9B6",
                        shadowBlur: 10,
                        shadowColor: "#1DE9B6"
                    }
                },
                zlevel: 1
            },
        ]
    };
    myChart.setOption(optionXyMap01);
});