var mapData = {
    num: [10, 15], // 每次出现球的个数范围： 最小6 最大10
    mapColor: '#5c9ac1', //地图填充颜色
    borderColor: '#5278a7', //地图边框颜色
    shadowColor: '#5174a4', //阴影颜色
    shadowBlur: 2, //地图阴影
    setIntervalTime: 2000, //默认刷新时间3秒
}


////0-8 慢 9-15 快 16-22特快
var data = [{
        name: '库尔勒',
        value: 86
    },
    {
        name: '拉萨',
        value: 120
    },
    {
        name: '西宁',
        value: 86
    },
    {
        name: '成都',
        value: 120
    },

    {
        name: '银川',
        value: 70
    },
    {
        name: '呼和浩特',
        value: 86
    },
    {
        name: '呼和浩特右',
        value: 86
    },
    {
        name: '哈尔滨',
        value: 86
    },

    {
        name: '天津',
        value: 40
    },
    {
        name: '南宁',
        value: 120
    },
    {
        name: '太原',
        value: 40
    },
    {
        name: '澳门',
        value: 100
    },
    {
        name: '石家庄',
        value: 86
    },
    {
        name: '济南',
        value: 70
    },
    {
        name: '武汉',
        value: 86
    },
    {
        name: '长沙',
        value: 86
    },
    {
        name: '南昌',
        value: 60
    },
    {
        name: '南京',
        value: 70
    },
    {
        name: '上海',
        value: 140
    },
    {
        name: '福州',
        value: 86
    },

    {
        name: '香港',
        value: 140
    },
    {
        name: '广州',
        value: 50
    },
    {
        name: '北京',
        value: 120
    },

]
var geoCoordMap = {
    '库尔勒': [86.06, 41.68],
    '拉萨': [87.852814, 32.027792],
    '西宁': [95.800446, 36.426903],
    '成都': [102.71783, 31.587876],
    '银川': [105.955754, 37.3138],
    '呼和浩特': [111.916478, 40.756366],
    '呼和浩特右': [118.024381, 42.740123],
    '哈尔滨': [127.002262, 46.623208],
    '北京': [116.479008, 40.137923],
    '天津': [117.288489, 39.228155],
    '太原': [112.358013, 37.665644],
    '石家庄': [115.522348, 35.889795],
    '济南': [118.833862, 36.605113],
    '武汉': [111.401354, 30.8288413],
    '长沙': [112.358013, 27.535879],
    '南昌': [115.301581, 27.601462],
    '南京': [119.643343, 31.902318],
    '上海': [121.556662, 31.145853],
    '福州': [119.128219, 26.811868],
    '南宁': [108.384197, 23.191126],
    '香港': [115.301581, 23.937347],
    '广州': [111.254175, 23.734258],
    '澳门': [110.591873, 21.617284]

};

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

function randNum2(min, max, num) {
    if (num > max - min) {
        console.error('范围太小');
        return false;
    }
    var range = max - min,
        minV = min + 1, //实际上可以取的最小值
        arr = [],
        tmp = "";

    function GenerateANum(i) {
        for (i; i < num; i++) {
            var rand = Math.random(); //  rand >=0  && rand < 1
            tmp = Math.floor(rand * range + minV);
            if (arr.indexOf(tmp) == -1) {
                arr.push(tmp)
            } else {
                GenerateANum(i);
                break;
            }

        }
    }
    GenerateANum(0); //默认从0开始
    return arr;
}

function getSeries(arrIndex) {

    if (!arrIndex) {
        var nums = randNum2(mapData.num[0], mapData.num[1], 1)[0]
        var len = data.length - 1
        arrIndex = randNum2(0, len, nums)
    }

    var tempArr = []
    arrIndex.forEach((item) => {
        tempArr.push(data[item])
    })
    return convertData(tempArr)
}

option = {
    background: 'transparent',
    tooltip: {},
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        regions: [{
            name: '南海诸岛',
            value: 0,
            itemStyle: {
                normal: {
                    opacity: 0,
                    label: {
                        show: false
                    }
                }
            }
        }],
        roam: true,
        itemStyle: {
            normal: {
                areaColor: mapData.mapColor,
                borderColor: mapData.borderColor,
                shadowColor: mapData.shadowColor,
                shadowBlur: mapData.shadowBlur,
            },
            emphasis: {
                areaColor: mapData.mapColor,
            }
        }
    },
    series: [{
            name: '正常频率较慢',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: getSeries([0, 1, 2, 3, 4, 5, 6, 7]),
            symbolSize: function(val) {
                return val[2] / 8;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
                scale: 2, //设置缩放
                period: 5, //设置时间
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(255, 255, 255, .6)',
                    shadowBlur: 10,
                    shadowColor: 'rgba(255, 255, 255, .6)',
                }
            },
            zlevel: 1
        },
        {
            name: '高亮频率较快',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: getSeries([15, 14, 13, 12, 11, 10, 9, 8]),
            symbolSize: function(val) {
                return val[2] / 8;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
                scale: 3, //设置缩放
                period: 3, //设置时间
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                   color: 'rgba(255, 255, 255, .8)',
                    shadowBlur: 10,
                    shadowColor: 'rgba(255, 255, 255, .8)',
                }
            },
            zlevel: 2,
        },
        {
            name: '高亮频率特快',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: getSeries([22, 21, 20, 19, 18, 17, 16]),
            symbolSize: function(val) {
                return val[2] / 8;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
                scale: 3, //设置缩放
                period: 2, //设置时间
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(255, 255, 255, 1)',
                    shadowBlur: 10,
                    shadowColor: '#fff'
                }
            },
            zlevel: 2,
        }
    ],
    animationDelayUpdate: function(idx) {
        return idx * 30;
    }
}

// setInterval(() => {
// option.series[1].data = getSeries()
// myChart.setOption(option, true);
// }, mapData.setIntervalTime);