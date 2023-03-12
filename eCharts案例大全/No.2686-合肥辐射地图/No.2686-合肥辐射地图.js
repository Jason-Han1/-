function randomData() {
    return Math.round(Math.random() * 100);
}
var data = [
    {
        name: '齐齐哈尔',
    },
    {
        name: '盐城',
    },
    {
        name: '青岛',
    },
    {
        name: '金昌',
    },
    {
        name: '泉州',
    },
    {
        name: '拉萨',
    },
    {
        name: '上海浦东',
    },
    {
        name: '攀枝花',
    },
    {
        name: '威海',
    },
    {
        name: '承德',
    },
    {
        name: '汕尾',
    },
    {
        name: '克拉玛依',
    },
    {
        name: '重庆市',
    },
    {
        name: '北京市',
    },
    {
        name: '合肥',
    },
];

var geoCoordMap = {
    齐齐哈尔: [123.97, 47.33],
    盐城: [120.13, 33.38],
    青岛: [120.33, 36.07],
    金昌: [102.188043, 38.520089],
    泉州: [118.58, 24.93],
    拉萨: [91.11, 29.97],
    上海浦东: [121.48, 31.22],
    攀枝花: [101.718637, 26.582347],
    威海: [122.1, 37.5],
    承德: [117.93, 40.97],
    汕尾: [115.375279, 22.786211],
    克拉玛依: [84.77, 45.59],
    重庆市: [108.384366, 30.439702],
    北京市: [116.4551, 40.2539],
    合肥: [117.2757034, 31.86325455],
};

var planePath =
    'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var dataFrom = '合肥';

myChart.setOption({
    series: [
        {
            type: 'map',
            map: 'china',
        },
    ],
});

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
    backgroundColor:'#fafafa',
    visualMap: {
        min: 0,
        max: 5,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true,
        inRange: {
            color: ['#d9edd4', '#fffcc7', '#f9d9e7', '#fadfca', '#dbd6ea'],
            // ['绿色', '#黄色', '#粉色', '#肉色', '#紫色']
        },
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            // dataView: {
            //     readOnly: false,
            // },
            // restore: {},
            saveAsImage: {
                show:true,
            },
        },
    },

    geo: {
        map: 'china',
        zoom: 1.2,
        label: {
            normal: {
                show: false,
                color: '#c1c4c8',
            },
            emphasis: {
                show: false,
                color: '#292929',
            },
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#fbfbfb',
                // borderColor: '#b9b4b7',
            },
            emphasis: {
                areaColor: '#05ff09',
            },
        },
    },
    series: [
        {
            name: '安徽',
            type: 'lines',
            zlevel: 2,
            symbolSize: 10,
            effect: {
                show: false,
                period: 6,
                symbol: planePath,
                trailLength: 0,
                symbolSize: 15,
            },
            lineStyle: {
                normal: {
                    color: '#df192d',
                    width: 1,
                    opacity: 0.5,
                    curveness: 0.2,
                },
            },
            data: data.map(function (dataItem) {
                return {
                    fromName: dataFrom,
                    toName: dataItem.name,
                    coords: [geoCoordMap[dataFrom], geoCoordMap[dataItem.name]],
                };
            }),
        },
        {
            name: '供需占比',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: 8,
            showEffectOn: 'render',
            // rippleEffect: {
            //     scale: 5,
            //     brushType: 'stroke',
            // },

            hoverAnimation: true,
            label: {
                normal: {
                    color: '#000',
                    formatter: '{b}',
                    position: 'right',
                    show: true,
                },
                emphasis: {
                    show: true,
                },
            },
            itemStyle: {
                normal: {
                    color: '#df192d',
                    shadowBlur: 20,
                    shadowColor: '#333',
                },
            },
        },
        {
            type: 'map',
            mapType: 'china',
            geoIndex: 0,
            label: {
                normal: {
                    show: true,
                },
                emphasis: {
                    show: true,
                },
            },
            data: [
                {
                    name: '北京',
                    value: 4,
                },
                {
                    name: '天津',
                    value: 4,
                },
                {
                    name: '上海',
                    value: 3,
                },
                {
                    name: '重庆',
                    value: 0,
                },
                {
                    name: '河北',
                    value: 4,
                },
                {
                    name: '河南',
                    value: 3,
                },
                {
                    name: '云南',
                    value: 0,
                },
                {
                    name: '辽宁',
                    value: 0,
                },
                {
                    name: '黑龙江',
                    value: 5,
                },
                {
                    name: '湖南',
                    value: 3,
                },
                {
                    name: '安徽',
                    value: 1,
                },
                {
                    name: '山东',
                    value: 5,
                },
                {
                    name: '新疆',
                    value: 5,
                },
                {
                    name: '江苏',
                    value: 0,
                },
                {
                    name: '浙江',
                    value: 3,
                },
                {
                    name: '江西',
                    value: 5,
                },
                {
                    name: '湖北',
                    value: 0,
                },
                {
                    name: '广西',
                    value: 1,
                },
                {
                    name: '甘肃',
                    value: 3,
                },
                {
                    name: '山西',
                    value: 0,
                },
                {
                    name: '内蒙古',
                    value: 1,
                },
                {
                    name: '陕西',
                    value: 4,
                },
                {
                    name: '吉林',
                    value: 2,
                },
                {
                    name: '福建',
                    value: 1,
                },
                {
                    name: '贵州',
                    value: 4,
                },
                {
                    name: '广东',
                    value: 0,
                },
                {
                    name: '青海',
                    value: 0,
                },
                {
                    name: '西藏',
                    value: 4,
                },
                {
                    name: '四川',
                    value: 1,
                },
                {
                    name: '宁夏',
                    value: 0,
                },
                {
                    name: '海南',
                    value: 3,
                },
                {
                    name: '台湾',
                    value: 3,
                },
                {
                    name: '吉林',
                    value: 2,
                },
                {
                    name: '澳门',
                    value: 5,
                },
            ],
        },
    ],
};

myChart.setOption(option);

myChart.on('mouseover', function (params) {
    var city = params.name;

    if (city == '广东' || city == '广西' || city == '海南') {
        myChart.dispatchAction({
            type: 'highlight',
            name: '广东',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '广西',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '海南',
        });
    }

    if (city == '山东' || city == '江苏' || city == '浙江' || city == '安徽' || city == '福建' || city == '上海') {
        myChart.dispatchAction({
            type: 'highlight',
            name: '山东',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '江苏',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '浙江',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '安徽',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '福建',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '上海',
        });
    }

    if (city == '湖北' || city == '湖南' || city == '河南' || city == '江西') {
        myChart.dispatchAction({
            type: 'highlight',
            name: '湖北',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '湖南',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '河南',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '江西',
        });
    }

    if (city == '北京' || city == '天津' || city == '河北' || city == '山西' || city == '内蒙古') {
        myChart.dispatchAction({
            type: 'highlight',
            name: '北京',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '天津',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '河北',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '山西',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '内蒙古',
        });
    }
    if (city == '宁夏' || city == '新疆' || city == '青海' || city == '陕西' || city == '甘肃') {
        myChart.dispatchAction({
            type: 'highlight',
            name: '宁夏',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '新疆',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '青海',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '陕西',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '甘肃',
        });
    }
    if (city == '四川' || city == '云南' || city == '贵州' || city == '西藏' || city == '重庆') {
        myChart.dispatchAction({
            type: 'highlight',
            name: '四川',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '云南',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '贵州',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '西藏',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '重庆',
        });
    }
    if (city == '辽宁' || city == '吉林' || city == '黑龙江') {
        myChart.dispatchAction({
            type: 'highlight',
            name: '辽宁',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '吉林',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '黑龙江',
        });
    }
    if (city == '台湾' || city == '香港' || city == '澳门') {
        myChart.dispatchAction({
            type: 'highlight',
            name: '台湾',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '香港',
        });
        myChart.dispatchAction({
            type: 'highlight',
            name: '澳门',
        });
    }
});

myChart.on('mouseout', function (params) {
    var city = params.name;

    if (city == '广东' || city == '广西' || city == '海南') {
        myChart.dispatchAction({
            type: 'downplay',
            name: '广东',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '广西',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '海南',
        });
    }
    if (city == '山东' || city == '江苏' || city == '浙江' || city == '安徽' || city == '福建' || city == '上海') {
        myChart.dispatchAction({
            type: 'downplay',
            name: '山东',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '江苏',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '浙江',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '安徽',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '福建',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '上海',
        });
    }
    if (city == '湖北' || city == '湖南' || city == '河南' || city == '江西') {
        myChart.dispatchAction({
            type: 'downplay',
            name: '湖北',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '湖南',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '河南',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '江西',
        });
    }
    if (city == '北京' || city == '天津' || city == '河北' || city == '山西' || city == '内蒙古') {
        myChart.dispatchAction({
            type: 'downplay',
            name: '北京',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '天津',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '河北',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '山西',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '内蒙古',
        });
    }
    if (city == '宁夏' || city == '新疆' || city == '青海' || city == '陕西' || city == '甘肃') {
        myChart.dispatchAction({
            type: 'downplay',
            name: '宁夏',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '新疆',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '青海',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '陕西',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '甘肃',
        });
    }
    if (city == '四川' || city == '云南' || city == '贵州' || city == '西藏' || city == '重庆') {
        myChart.dispatchAction({
            type: 'downplay',
            name: '四川',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '云南',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '贵州',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '西藏',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '重庆',
        });
    }
    if (city == '辽宁' || city == '黑龙江' || city == '吉林') {
        myChart.dispatchAction({
            type: 'downplay',
            name: '辽宁',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '黑龙江',
        });
        myChart.dispatchAction({
            type: 'downplay',
            name: '吉林',
        });
    }
    if (city == '台湾' || city == '香港' || city == '澳门') {
        myChart.dispatchAction({
            type: 'downplay',
            name: '台湾',
        });

        myChart.dispatchAction({
            type: 'downplay',
            name: '香港',
        });

        myChart.dispatchAction({
            type: 'downplay',
            name: '澳门',
        });
    }
});
