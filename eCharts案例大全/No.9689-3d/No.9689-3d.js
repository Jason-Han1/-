
//各省份的数据
var allData = [{
    name: '北京'
}, {
    name: '天津'
}, {
    name: '上海'
}, {
    name: '重庆'
}, {
    name: '河北'
}, {
    name: '河南'
}, {
    name: '云南'
}, {
    name: '辽宁'
}, {
    name: '黑龙江'
}, {
    name: '湖南'
}, {
    name: '安徽'
}, {
    name: '山东'
}, {
    name: '新疆'
}, {
    name: '江苏'
}, {
    name: '浙江'
}, {
    name: '江西'
}, {
    name: '湖北'
}, {
    name: '广西'
}, {
    name: '甘肃'
}, {
    name: '山西'
}, {
    name: '内蒙古'
}, {
    name: '陕西'
}, {
    name: '吉林'
}, {
    name: '福建'
}, {
    name: '贵州'
}, {
    name: '广东'
}, {
    name: '青海'
}, {
    name: '西藏'
}, {
    name: '四川'
}, {
    name: '宁夏'
}, {
    name: '海南'
}, {
    name: '台湾'
}, {
    name: '香港'
}, {
    name: '澳门'
}];
for (var i = 0; i < allData.length; i++) {
    allData[i].value = Math.round(Math.random() * 100);
}


loadMap('/asset/get/s/data-1527045631990-r1dZ0IM1X.json', 'china'); //初始化全国地图

var timeFn = null;




// 绑定双击事件，返回全国地图
myChart.on('dblclick', function(params) {
    //当双击事件发生时，清除单击事件，仅响应双击事件
    clearTimeout(timeFn);

    //返回全国地图
    loadMap('/asset/get/s/data-1527045631990-r1dZ0IM1X.json', 'china');
});

/**
 获取对应的json地图数据，然后向echarts注册该区域的地图，最后加载地图信息
 @params {String} mapCode:json数据的地址
 @params {String} name: 地图名称
 */
function loadMap(mapCode, name) {
    $.get(mapCode, function(data) {
        if (data) {
            echarts.registerMap(name, data);
            var option = {
                backgroundColor: '#020c4b',
                tooltip: {
                    show: true,
                    formatter: function(params) {
                        if (params.data) return params.name + '：' + params.data['value']
                    },
                },
                visualMap: {
                    type: 'continuous',
                    text: ['', ''],
                    showLabel: true,
                    left: '50',
                    min: 0,
                    max: 100,
                    inRange: {
                        color: ['#2e6bc2', '#3b76c3', '#1c4096']
                    },
                    splitNumber: 0,
                    show: false,
                },
                geo: {
                    map: 'china',
                    aspectScale: 0.75,
                    itemStyle: {
                        normal: {
                            borderColor: 'white',
                            borderWidth: 1,
                            areaColor: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: 'rgba(46,107,194,0.3)' // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.5,
                                        color: 'rgba(59,118,195,0.5)' // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(28,64,150,0.5)' // 50% 处的颜色
                                    }
                                ],
                                global: true // 缺省为 false
                            },
                        },

                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    },
                    z: 2
                },
                series: [
                    {

                        name: 'MAP',
                        type: 'map',
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(147, 235, 248, 0.6)',
                                borderWidth: 0.8,
                                opacity: 1
                            }
                        },
                        mapType: name,
                        data: allData,
                        top: '11%',
                        left: '10%',
                    },
                   
                ]
            };
            myChart.setOption(option);
            // curMap = {
            //     mapCode: mapCode,
            //     mapName: name
            // };
        } else {
            alert('无法加载该地图');
        }
    });
}