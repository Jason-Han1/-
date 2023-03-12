var geoCoordMap = {
    "吉林": [125.8154, 44.2584],
    "北京": [116.4551, 40.2539],
    "辽宁": [123.1238, 42.1216],
    "河北": [114.4995, 38.1006],
    "天津": [117.4219, 39.4189],
    "山西": [112.3352, 37.9413],
    "陕西": [109.1162, 34.2004],
    "甘肃": [103.5901, 36.3043],
    "宁夏": [106.3586, 38.1775],
    "青海": [101.4038, 36.8207],
    "新疆": [87.9236, 43.5883],
    "西藏": [91.11, 29.97],
    "四川": [103.9526, 30.7617],
    "重庆": [108.384366, 30.439702], 
    "山东": [117.1582, 36.8701],
    "河南": [113.4668, 34.6234],
    "江苏": [118.8062, 31.9208],
    "安徽": [117.29, 32.0581],
    "湖北": [114.3896, 30.6628],
    "浙江": [119.5313, 29.8773],
    "福建": [119.4543, 25.9222],
    "江西": [116.0046, 28.6633],
    "湖南": [113.0823, 28.2568],
    "贵州": [106.6992, 26.7682],
    "云南": [102.9199, 25.4663],
    "广东": [113.12244, 23.009505],
    "广西": [108.479, 23.1152],
    "海南": [110.3893, 19.8516],
    "上海": [121.4648, 31.2891],
    "成都": [104.06, 30.67],
    "深圳": [114.07, 22.62],
    "黑龙江": [127.9688, 45.368],
};

var BJData = [
    [{
        name: '北京'
    }, {
        name: '北京',
        value: 32
    }],
    [{
        name: '北京'
    }, {
        name: '广东',
        value: 1
    }],
     [{
        name: '北京'
    }, {
        name: '河北',
        value: 2
    }],
    [{
        name: '北京'
    }, {
        name: '河南',
        value: 1
    }],
    [{
        name: '北京'
    }, {
        name: '黑龙江',
        value: 1
    }],
    [{
        name: '北京'
    }, {
        name: '上海',
        value: 2
    }],
    [{
        name: '北京'
    }, {
        name: '天津',
        value: 1
    }],
];

var SHData = [
     [{
        name: '上海'
    }, {
        name: '安徽',
        value: 1
    }],
    
    [{
        name: '上海'
    }, {
        name: '北京',
        value: 24
    }],
    [{
        name: '上海'
    }, {
        name: '福建',
        value: 1
    }],
    [{
        name: '上海'
    }, {
        name: '甘肃',
        value: 1
    }],
    [{
        name: '上海'
    }, {
        name: '广东',
        value: 1
    }],
    [{
        name: '上海'
    }, {
        name: '湖北',
        value: 1
    }],
     [{
        name: '上海'
    }, {
        name: '江苏',
        value: 20
    }],
    [{
        name: '上海'
    }, {
        name: '辽宁',
        value: 1
    }],
    [{
        name: '上海'
    }, {
        name: '山东',
        value: 3
    }],
    [{
        name: '上海'
    }, {
        name: '陕西',
        value: 1
    }],
    [{
        name: '上海'
    }, {
        name: '上海',
        value: 77
    }],
    [{
        name: '上海'
    }, {
        name: '天津',
        value: 3
    }],
    [{
        name: '上海'
    }, {
        name: '浙江',
        value: 12
    }],
];

var CDData = [
    [{
        name: '成都'
    }, {
        name: '北京',
        value: 4
    }],
    [{
        name: '成都'
    }, {
        name: '福建',
        value: 2
    }],
    [{
        name: '成都'
    }, {
        name: '广东',
        value: 1
    }],
    [{
        name: '成都'
    }, {
        name: '贵州',
        value: 1
    }],
    [{
        name: '成都'
    }, {
        name: '河南',
        value: 1
    }],
    [{
        name: '成都'
    }, {
        name: '湖北',
        value: 2
    }],
    [{
        name: '成都'
    }, {
        name: '吉林',
        value: 1
    }],
    [{
        name: '成都'
    }, {
        name: '上海',
        value: 4
    }],
    [{
        name: '成都'
    }, {
        name: '四川',
        value: 12
    }],
    [{
        name: '成都'
    }, {
        name: '重庆',
        value: 1
    }],
];

var SZData = [
    [{
        name: '深圳'
    }, {
        name: '北京',
        value: 2
    }],
    [{
        name: '深圳'
    }, {
        name: '福建',
        value: 1
    }],
    [{
        name: '深圳'
    }, {
        name: '广东',
        value: 31
    }],
    [{
        name: '深圳'
    }, {
        name: '湖北',
        value: 1
    }],
    [{
        name: '深圳'
    }, {
        name: '上海',
        value: 4
    }],
];

var planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord
            }, {
                coord: toCoord
            }]);
        }
    }
    return res;
};

var color = ['#3ed4ff', '#d94d4c', '#a6c84c','#eba438'];
var series = [];
[
    ['北京', BJData],
    ['上海', SHData],
    ['深圳', SZData],
    ['成都', CDData]
].forEach(function(item, i) {
    series.push({
        name: item[0] + ' Top10',
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
                opacity: 0.4,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    }, {
        name: item[0] + ' Top10',
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

option = {
    backgroundColor: '#080a20',
    title: {
        text: '付费客户区域',
        subtext: '分区域展示客户来源',
        left: 'left',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['北京 Top10', '上海 Top10', '深圳 Top10', '成都 Top10'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#132937',
                borderColor: '#0692a4'
            },
            emphasis: {
                areaColor: '#0b1c2d'
            }
        }
    },
    series: series
};