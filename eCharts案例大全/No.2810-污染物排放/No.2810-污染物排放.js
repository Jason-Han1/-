var data = [
    { name: '天津', value: 42323 },
    { name: '石家庄', value: 33252 },
    { name: '呼号浩特', value: 31024 },
    { name: '沈阳', value: 25904 },
    { name: '长春', value: 14300 },
    { name: '哈尔滨', value: 19168 },
    { name: '南京', value: 15404 },
    { name: '杭州', value: 26497 },
    { name: '福州', value: 34138 },
    { name: '济南', value: 16545 },
    { name: '郑州', value: 16472 },
    { name: '武汉', value: 14077 },
    { name: '重庆', value: 139880 },
    { name: '贵阳', value: 50631 },
    { name: '昆明', value: 44515 },
    { name: '兰州', value: 20095 },
    { name: '银川', value: 13728 },
    { name: '乌鲁木齐', value: 37483 },
    { name: '广州', value: 15285 },
    { name: '西宁', value: 24120 },
];
var geoCoordMap = {
    兰州: [103.73, 36.03],
    西宁: [101.74, 36.56],
    成都: [104.06, 30.67],
    石家庄: [114.48, 38.03],
    贵阳: [106.71, 26.57],
    武汉: [114.31, 30.52],
    郑州: [113.65, 34.76],
    济南: [117, 36.65],
    杭州: [120.19, 30.26],
    福州: [119.3, 26.08],
    广州: [113.23, 23.16],
    沈阳: [123.38, 41.8],
    长春: [125.35, 43.88],
    哈尔滨: [126.63, 45.75],
    西安: [108.95, 34.27],
    重庆: [106.54, 29.59],
    天津: [117.2, 39.13],
    呼号浩特: [111.65, 40.82],
    银川: [106.27, 38.47],
    乌鲁木齐: [87.68, 43.77],
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

option = {
    backgroundColor: '#1D346F',
    title: {
        text: '全国主要城市废中污染物排放情况',
        subtext: 'TOP 20',
        left: 'center',
        textStyle: {
            color: '#fff',
        },
    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        orient: 'vertical',
        bottom: '30',
        x: 'center',
        data: ['工业二氧化硫'],
        textStyle: {
            color: '#fff',
        },
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
                    areaColor: '#1D346F',
                    borderWidth: 0,
                    shadowColor: '#D79D3D',
                    shadowBlur: 30,
                    shadowOffsetX: -5,
                    shadowOffsetY: 10,
                },
                emphasis: {
                    areaColor: '#2a333d',
                },
            },
        },
    ],
    series: [
        {
            type: 'map',
            map: 'china',
            geoIndex: 1,
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
                    areaColor: '#1D346F',
                    borderColor: '#D79D3D',
                },
                emphasis: {
                    areaColor: '#0f2c70',
                },
            },
        },
        {
            name: '工业二氧化硫',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 4000;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    fontSize: '12',
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
        },
    ],
};
