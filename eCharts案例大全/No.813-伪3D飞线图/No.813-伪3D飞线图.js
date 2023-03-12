var img = '/asset/get/s/data-1637237965898-Rm3bDQPZn.png';
var border = '/asset/get/s/data-1637237918423--5oVX0MvD.png';
var geoCoordMap = {
    成都: [103.9526, 30.7617],
    上海: [121.4648, 31.2891],
    尼日利亚: [-4.388361, 11.186148],
    美国洛杉矶: [-118.24311, 34.052713],
    香港邦泰: [114.195466, 22.282751],
    美国芝加哥: [-87.801833, 41.870975],
    加纳库马西: [-4.62829, 7.72415],
    英国曼彻斯特: [-1.657222, 51.886863],
    德国汉堡: [10.01959, 54.38474],
    哈萨克斯坦阿拉木图: [45.326912, 41.101891],
    俄罗斯伊尔库茨克: [89.116876, 67.757906],
    巴西: [-48.678945, -10.493623],
    埃及达米埃塔: [31.815593, 31.418032],
    西班牙巴塞罗纳: [2.175129, 41.385064],
    柬埔寨金边: [104.88659, 11.545469],
    意大利米兰: [9.189948, 45.46623],
    乌拉圭蒙得维的亚: [-56.162231, -34.901113],
    莫桑比克马普托: [32.608571, -25.893473],
    阿尔及利亚阿尔及尔: [3.054275, 36.753027],
    阿联酋迪拜: [55.269441, 25.204514],
    匈牙利布达佩斯: [17.108519, 48.179162],
    澳大利亚悉尼: [150.993137, -33.675509],
    美国加州: [-121.910642, 41.38028],
    澳大利亚墨尔本: [144.999416, -37.781726],
    墨西哥: [-99.094092, 19.365711],
    加拿大温哥华: [-123.023921, 49.311753],
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
    美国: [-100.696295, 33.679979],
    日本: [139.710164, 35.706962],
    韩国: [126.979208, 37.53875],
    瑞士: [7.445147, 46.956241],
    东南亚: [117.53244, 5.300343],
    澳大利亚: [135.193845, -25.304039],
    德国: [13.402393, 52.518569],
    英国: [-0.126608, 51.208425],
    加拿大: [-102.646409, 59.994255],
};
var convertData = function (data) {
    var res = [];
    for (let i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var coords = [start.value, geoCoordMap[dataItem.name]];
        res.push({
            fromName: start.name,
            toName: dataItem.name,
            coords: coords,
            value: dataItem.value,
        });
    }
    return res;
};
// 顶部展示数据处理
var formatData = function (data) {
    var res = [];
    for (let i = 0; i < data.length; i++) {
        let dataItem = data[i];
        let value = geoCoordMap[dataItem.name];
        value = value.concat(dataItem.value);
        res.push({
            name: dataItem.name,
            value: value,
        });
    }
    return res;
};
var start = {
    name: '成都',
    value: [103.9526, 30.7617],
};
var data = [
    {
        name: '德国汉堡',
        value: 6280,
    },
    {
        name: '俄罗斯伊尔库茨克',
        value: 8125,
    },
    {
        name: '西班牙巴塞罗纳',
        value: 3590,
    },
    {
        name: '阿联酋迪拜',
        value: 590,
    },
];
option = {
    backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#05153a', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#062959', // 100% 处的颜色
            },
        ],
        globalCoord: false, // 缺省为 false
    },
    visualMap: {
        //图例值控制
        min: 0,
        max: 10000,
        show: true,
        calculable: true,
        color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
        textStyle: {
            color: '#ffffff',
        },
    },
    geo: {
        map: 'world',
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false,
            },
        },
        roam: true, //是否允许缩放
        layoutCenter: ['50%', '50%'], //地图位置
        layoutSize: '140%',
        itemStyle: {
            normal: {
                areaColor: '#21729a',
                borderColor: '#68ebf0', //线
                borderWidth: 0,
                borderJoin: 'round',
                shadowColor: 'rgba(18, 216, 250, 1)', //外发光
                shadowOffsetX: -3,
                shadowOffsetY: 5,
                shadowBlur: 2, //图形阴影的模糊大小
            },
            emphasis: {
                areaColor: '#2f9eff', //悬浮区背景
            },
        },
    },
    series: [
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            symbol:'circle',
            symbolSize: 8,
            showEffectOn: 'render',
            rippleEffect: {
                scale: 5,
                brushType: 'stroke',
                color: '#0EB1FE',
            },
            label: {
                show: true,
                backgroundColor: {
                    image: border,
                },
                lineHeight: 18,
                align: 'center',
                padding: [10, 10, 10, 10],
                formatter: function (params) {
                    var name = params.name;
                    var value = params.value[2];
                    var text = `{name|${name}}\n{val|${value}}`;
                    // return text;
                    return `{name|${name}}`;
                },
                position: 'top',
                rich: {
                    name: {
                        color: '#0EB1FE',
                        fontWeight: 'bold',
                        fontSize: '14',
                    },
                    val: {
                        align: 'center',
                    },
                },
            },
            emphasis:{
                label: {
                show: true,
                backgroundColor: {
                    image: border,
                },
                lineHeight: 18,
                align: 'center',
                padding: [10, 10, 10, 10],
                formatter: function (params) {
                    var name = params.name;
                    var value = params.value[2];
                    var text = `{name|${name}}\n{val|${value}}`;
                    return text;
                    // return `{name|${name}}`;
                },
                position: 'top',
                rich: {
                    name: {
                        color: '#0EB1FE',
                        fontWeight: 'bold',
                        fontSize: '14',
                    },
                    val: {
                        align: 'center',
                    },
                },
            },
            },
            data: formatData(data),
        },
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'image://' + img,
            symbolSize: [32, 41],
            symbolOffset: [0, 0],
            label: {
                normal: {
                    show: false,
                    position: 'bottom',
                    formatter: '{b}',
                    textStyle: {
                        color: '#ffffff',
                    },
                },
                emphasis: {
                    show: false,
                },
            },
            data: [start],
        },
        // 线 和 点
        {
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6, //箭头指向速度，值越小速度越快
                trailLength: 0.8, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'circle', //箭头图标,'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
                symbolSize: 3, //图标大小
            },
            lineStyle: {
                normal: {
                    width: 1, //尾迹线条宽度
                    opacity: 0.05, //尾迹线条透明度
                    curveness: 0.3, //尾迹线条曲直度
                },
            },
            label: {
                show: false,
            },
            data: convertData(data),
        },
    ],
};
