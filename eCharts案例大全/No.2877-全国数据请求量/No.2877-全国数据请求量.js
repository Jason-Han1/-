var data = [
    { name: '北京', value: 24 },
    { name: '南昌', value: 3 },
    { name: '成都', value: 12 },
    { name: '深圳', value: 10 },
    { name: '西安', value: 8 },
    { name: '佛山', value: 1 },
    { name: '沈阳', value: 4 },
    { name: '厦门', value: 2 },
    { name: '石家庄', value: 3 },
    { name: '无锡', value: 3 },
    { name: '乌鲁木齐', value: 1 },
    { name: '宁波', value: 4 },
    { name: '上海', value: 19 },
    { name: '呼和浩特', value: 2 },
    { name: '南京', value: 10 },
    { name: '南宁', value: 4 },
    { name: '兰州', value: 1 },
    { name: '昆明', value: 6 },
    { name: '合肥', value: 4 },
    { name: '青岛', value: 6 },
    { name: '哈尔滨', value: 2 },
    { name: '济南', value: 3 },
    { name: '东莞', value: 1 },
    { name: '大连', value: 7 },
    { name: '常州', value: 1 },
    { name: '福州', value: 2 },
    { name: '苏州', value: 5 },
    { name: '长春', value: 5 },
    { name: '长沙', value: 6 },
    { name: '香港', value: 11 },
    { name: '太原', value: 1 },
    { name: '重庆', value: 10 },
    { name: '杭州', value: 7 },
    { name: '郑州', value: 7 },
    { name: '贵阳', value: 1 },
    { name: '徐州', value: 2 },
    { name: '广州', value: 16 },
    { name: '天津', value: 6 },
    { name: '温州', value: 1 },
    { name: '武汉', value: 10 },
];
var geoCoordMap = {
    北京: [116.322056, 39.89491],
    南昌: [115.857963, 28.683016],
    成都: [104.06632, 30.572903],
    深圳: [114.058975, 22.543754],
    西安: [108.939621, 34.343147],
    佛山: [113.121511, 23.021318],
    沈阳: [123.465009, 41.677287],
    厦门: [118.08923, 24.479406],
    石家庄: [114.514793, 38.042225],
    无锡: [120.311889, 31.491064],
    乌鲁木齐: [87.616842, 43.82539],
    宁波: [121.6216, 29.859515],
    上海: [121.473658, 31.230378],
    呼和浩特: [111.748426, 40.842723],
    南京: [118.796604, 32.059018],
    南宁: [108.36637, 22.817746],
    兰州: [103.834249, 36.06081],
    昆明: [102.833722, 24.881539],
    合肥: [117.227308, 31.82057],
    青岛: [120.374402, 36.168923],
    哈尔滨: [126.535319, 45.803131],
    济南: [117.120098, 36.6512],
    东莞: [113.751766, 23.020854],
    大连: [121.614699, 38.913918],
    常州: [119.974029, 31.810916],
    福州: [119.296389, 26.074268],
    苏州: [120.585197, 31.299473],
    长春: [125.323628, 43.817001],
    长沙: [112.938888, 28.228272],
    香港: [114.171202, 22.277469],
    太原: [112.549717, 37.87046],
    重庆: [106.550464, 29.563761],
    杭州: [120.209947, 30.245853],
    郑州: [113.778584, 34.759197],
    贵阳: [116.369666, 39.973437],
    徐州: [117.283988, 34.203994],
    广州: [113.264385, 23.129112],
    天津: [117.201538, 39.085294],
    温州: [120.699255, 27.993805],
    武汉: [114.305215, 30.592935],
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
};

myChart.setOption(
    (option = {
        backgroundColor: '#1D346F',
        title: {
            text: '全国40座城市地铁线路数量分布图',
            subtext: 'Show Data',
            left: 'center',
            top: 'top',
            textStyle: {
                color: '#fff',
            },
        },
        tooltip: {
            //提示框组件。
            trigger: 'item', //数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
            formatter: '{a} <br/> {b}: {c}',
            textStyle: {
                fontSize: '24px',
            },
        },
        legend: {
            show: false,
            orient: 'horizontal', //图例的排列方向
            x: 'left', //图例的位置
            data: [''],
        },
        geo: [
            {
                show: true,
                map: 'china',
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                    },
                },
                // roam: false,//地图设置不可拖拽，固定的
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderWidth: 0,
                        shadowColor: '#D79D3D',
                        shadowBlur: 30,
                        shadowOffsetX: -5,
                        shadowOffsetY: 10,
                    },
                },
            },
        ],
        series: [
            {
                type: 'map',
                map: 'china',
                geoIndex: 1,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: true, // 存在legend时显示
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff',
                        },
                    },
                },
                roam: true,
                itemStyle: {
                    normal: {
                        borderColor: '#3B5077',
                        areaColor: '#1D346F',
                        borderColor: '#D79D3D',
                    },
                    emphasis: {
                        areaColor: '#0f2c70',
                    },
                },
                data: [{ name: '北京', value: 21300 }],
            },
            {
                name: '城市',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function (val) {
                    return val[2] / 1;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false,
                    },
                    emphasis: {
                        show: true,
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926',
                    },
                },
            },
            {
                name: '前5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(
                    data
                        .sort(function (a, b) {
                            return b.value - a.value;
                        })
                        .slice(0, 6)
                ),
                symbolSize: function (val) {
                    return val[2] / 0.8;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke',
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true,
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333',
                    },
                },
                zlevel: 1,
            },
        ],
    })
);
