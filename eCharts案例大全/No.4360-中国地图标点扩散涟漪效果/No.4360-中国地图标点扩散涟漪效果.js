//stroke(涟漪)和fill(扩散)，两种效果，现在用的涟漪
var data = [{
        name: '郑州',
        value: 100 //扩散的大小
    },
    {
        name: '北京',
        value: 100
    },
    {
        name: '香港',
        value: 100
    },
    {
        name: '上海',
        value: 100
    },
];
var geoCoordMap = {
    '郑州': [113.649638, 34.75659],
    '香港': [114.186133, 22.29343],
    '北京': [116.395645, 39.92998],
    '上海': [121.487884, 31.24910]
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

option = {
    backgroundColor: '#404a59',
    tooltip: {
        trigger: 'item',
        formatter: function(obj) {
            return obj.name + '：' + obj.value[0] + '，' + obj.value[1];
        },
        textStyle: {
            fontSize: 18
        }
    },
    series: [{
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(data.sort(function(a, b) {
            return b.value - a.value;
        }).slice(0, 6)),
        symbolSize: function(val) {
            return val[2] / 10;
        },
        showEffectOn: 'render',
        zlevel: 2,
        rippleEffect: {
            period: 2.5, //波纹秒数
            brushType: 'fill', //stroke(涟漪)和fill(扩散)，两种效果
            scale: 20 //波纹范围
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'top',
                show: true
            }
        },
        itemStyle: {
            normal: {
                show: true,
                color: "#0579FA", //字体和点颜色
                label: {
                    textStyle: {
                        fontWeight: 'bold', //字体
                        fontSize: 18, //字体大小
                        color: "#023AFD"
                    }
                },
            }
        },
    }],
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        layoutCenter: ['50%', '50%'],
        layoutSize: "130%",
        itemStyle: {
            normal: {
                color: '#51FFFF',
                borderColor: '#0285FF'
            },
            emphasis: {
                color: '#004881'
            }
        }
    }
};