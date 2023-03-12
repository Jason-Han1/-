var v = [];

var geoCoordMap1 = {
    '中国 · 山东威海': [122.12, 37.52],
    '石家庄': [114.48, 38.03],
    '北京': [116.46, 39.92],
    '成都': [104.06, 30.67]
};

var data1 = [{
    name: '中国 · 山东威海',
    value: 10
}, {
    name: '石家庄',
    value: 10
}, {
    name: '北京',
    value: 20
}, {
    name: '成都',
    value: 20
}];

//数据处理函数
function formtGCData(geoData, data, srcNam, dest) {
    var tGeoDt = [];
    
        for (var i = 0, len = data.length; i < len; i++) {
            if (srcNam != data[i].name) {
                tGeoDt.push({
                    coords: [geoData[data[i].name], geoData[srcNam]]
                });
            }
        }
    return tGeoDt;
}

function formtVData(geoData, data, srcNam) {
    var tGeoDt = [];
    
    tGeoDt.push({
        name: srcNam,
        value: geoData[srcNam],
        symbolSize: 10,
        itemStyle: {
            normal: {
                color: '#4DFFFF',
                borderColor: '#fff'
            }
        }
    });
    return tGeoDt;
}

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';


option = {
    backgroundColor: '#013769',
    geo: {
        name: '地图示意图',
        type: 'map',
        map: 'world',
        roam: true,
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#022548',
                borderColor: '#0DABEA'
            },
            emphasis: {
                areaColor: '#011B34'
            }
        }
    },
    series: [{
      
        type: 'lines', //中国发散出去
        zlevel: 2,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: '#65A2C2',
                width: 1,
                opacity: 0.4,
                curveness: 0.1
            }
        },
        data: formtGCData(geoCoordMap, data, '中国 · 山东威海', false)
    }, {
        type: 'effectScatter', //世界地图上高亮的点
        coordinateSystem: 'geo',
        zlevel: 7,
        rippleEffect: {
            period: 4,
            scale: 4,
            brushType: 'stroke',
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: 5,
        itemStyle: {
            normal: {
                color: '#fff',
                borderColor: 'gold'
            }
        },
        data: formtVData(geoCoordMap, data, '中国 · 山东威海')
    }, {
        type: 'effectScatter', //中国地图上高亮的点
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            period: 4,
            scale: 4,
            brushType: 'stroke',
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: 5,
        itemStyle: {
            normal: {
                color: '#fff',
                borderColor: 'gold'
            }
        },
        data: formtVData(geoCoordMap1, data1, '中国 · 山东威海')
    }]
};