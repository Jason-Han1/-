//地理坐标
var geoCoordMap = {
    '厦门': [118.1689, 24.6478],
    '北京': [116.4551, 40.2539],
    '加拿大': [-102.646409, 59.994255],
    '北美洲': [-111.846685,40.68879],
    '南美洲': [-61.345727,-22.468745],
    '欧洲': [19.308022,51.20277],
    "大洋洲": [135.873295,-25.176524]
};
//迁移数据
var XMData = [
    [{
        name: '厦门'
    }, {
        name: "北美洲",
        value: 95
    }],
    [{
        name: '厦门'
    }, {
        name: '北京',
        value: 80
    }],
    [{
        name: '厦门'
    }, {
        name: '欧洲',
        value: 70
    }],
    [{
        name: '厦门'
    }, {
        name: '加拿大',
        value: 60
    }],
    [{
        name: '厦门'
    }, {
        name: '南美洲',
        value: 50
    }],
    [{
        name: '厦门'
    }, {
        name: '大洋洲',
        value: 40
    }],
]
//图标svg
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
//数据转化
var convertData = function(data) {
    console.log(data);
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
                value: dataItem[1].value
            });
        }
    }
    return res;
};
//颜色
var color = ['#46bee9'];
var series = [];
//图表配置
[
    ['厦门', XMData]
].forEach(function(item, i) {
    series.push({
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    }, {
        name: item[0] + ' Top10',
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    }, {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function(val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                color: color[i]
            }
        },
        data: item[1].map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});
//样式

option = {
    backgroundColor: '#404a59',
    title: {
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'world',
        label: {
            emphasis: {
                show: true,
                color: '#fff'
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: series
};