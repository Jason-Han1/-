var mapName = 'world';
var data = [
    {name:"加拿大",value:199},
    {name:"利比亚",value:42},
    {name:"俄罗斯",value:102},
];

var geoCoordMap = {
    '芬兰': [24.909912, 60.169095], 
    '美国': [-100.696295, 33.679979], 
    '日本': [139.710164, 35.706962], 
    '韩国': [126.979208, 37.53875], 
    '瑞士': [7.445147, 46.956241],
    '东南亚': [117.53244, 5.300343], 
    '澳大利亚': [135.193845, -25.304039], 
    '德国': [13.402393, 52.518569], 
    '英国': [-0.126608, 51.208425], 
    '加拿大': [-102.646409, 59.994255],
    '利比亚': [13.07, 32.49],
    '俄罗斯': [37.35, 55.45],
};

// /*获取地图数据*/
// myChart.showLoading();
// var mapFeatures = echarts.getMap(mapName).geoJson.features;
// myChart.hideLoading();
// mapFeatures.forEach(function(v) {
//     // 地区名称
//     var name = v.properties.name;
//     // 地区经纬度
//     geoCoordMap[name] = v.properties.cp;

// });
console.log(geoCoordMap)
console.log(data)
var max = 480,
    min = 9; // todo
var maxSize4Pin = 100,
    minSize4Pin = 20;

var convertData = function(data) {
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
    backgroundColor:"rgb(18,40,109)",
    tooltip: {
        padding: 0,
        enterable: true,
        transitionDuration: 1,
        textStyle: {
            color: '#000',
            decoration: 'none',
        },
        // position: function (point, params, dom, rect, size) {
        //   return [point[0], point[1]];
        // },
        formatter: function(params) {
            // console.log(params)
            
            return '';
        }

    },

    visualMap: {
        show: false,
        min: 0,
        max: 200,
        left: '10%',
        top: 'bottom',
        calculable: true,
        seriesIndex: [1],
        inRange: {
            color: ['#04387b', '#467bc0'] // 蓝绿
        }
    },
    geo: {
        show: true,
        map: mapName,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#023677',
                borderColor: '#1180c7',
            },
            emphasis: {
                areaColor: '#4499d0',
            }
        }
    },
    series: [{
        name: '散点',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(data),
        // symbolSize: function(val) {
        //     return val[2] / 10;
        // },
        symbolSize:10,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: false
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#fff'
            }
        }
    },
        {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 6,
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 10)),
            // symbolSize: function(val) {
            //     return val[2] / 10;
            // },
            symbolSize:10,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'left',
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: 'yellow',
                    shadowBlur: 10,
                    shadowColor: 'yellow'
                }
            },
            zlevel: 1
        },

    ]
};

