

var uploadedDataURL = "/asset/get/s/data-1606959574704-fdtWnfPRB.json";

// 方法一：coordinates合并，但合并后省份交界处存在边界
// https://www.cnblogs.com/zzwlong/p/10338950.html
// var uploadedDataURL = "/asset/get/s/data-1606901385551-N8C_biM-e.json";
// var mergeProvinces = function(chinaJson, names, properties) { //合并大区里省份的coordinates
//     var features = chinaJson.features;
//     var polygons = [];
//     var polygons2 = [];
//     for (var i = 0; i < names.length; i++) {
//         var polygonsCoordinates = [];
//         var polygonsEncodeOffsets = [];
//         for (var z = 0; z < names[i].length; z++) {
//             for (var j = 0; j < features.length; j++) {
//                 if (features[j].properties.name.includes(names[i][z])) {
//                     if (features[j].geometry.coordinates[0].constructor == String) { //合并coordinates
//                         for (var l = 0; l < features[j].geometry.coordinates.length; l++) {
//                             polygonsCoordinates.push(features[j].geometry.coordinates[l]);
//                         }

//                     } else if (features[j].geometry.coordinates[0].constructor == Array) {
//                         for (var k = 0; k < features[j].geometry.coordinates.length; k++) {
//                             for (var d = 0; d < features[j].geometry.coordinates[k].length; d++) {
//                                 polygonsCoordinates.push(features[j].geometry.coordinates[k][d]);
//                             }
//                         }
//                     }
//                     break;
//                 }
//             }
//         }
//         polygons.push(polygonsCoordinates);
//         polygons2.push(polygonsEncodeOffsets);
//     }

//     // 构建新的合并区域
//     var features = [];
//     for (var a = 0; a < names.length; a++) {
//         var feature = {
//             id: features.length.toString(),
//             type: "FeatureCollection",
//             geometry: {
//                 type: "Polygon",
//                 coordinates: polygons[a],
//                 encodeOffsets: polygons2[a]
//             },
//             properties: {
//                 name: properties.name[a] || "",
//                 childNum: polygons[a].length
//             }
//         };
//         if (properties.cp[a]) {
//             feature.properties.cp = properties.cp[a];
//         }

//         // 将新的合并区域添加到地图中
//         features.push(feature);
//     }
//     console.log('features', features)
//     chinaJson.features = features;
//     return chinaJson

// };

// 方法二：在此网站可进行地图合并  https://mapshaper.org/ 
// 具体教程  https://www.lizenghai.com/archives/60916.html
// 仅需处理json数据，然后进行合并即可，会消除共同边界，返回新的json

// 颜色待补充
let colorList = [
    new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
        offset: 0,
        color: 'red',
    }, {
        offset: 1,
        color: 'blue'
    }]), new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
        offset: 0,
        color: 'red',
    }, {
        offset: 1,
        color: 'blue'
    }]), new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
        offset: 0,
        color: 'red',
    }, {
        offset: 1,
        color: 'blue'
    }]), new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
        offset: 0,
        color: 'red',
    }, {
        offset: 1,
        color: 'blue'
    }]), new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
        offset: 0,
        color: 'red',
    }, {
        offset: 1,
        color: 'blue'
    }]), new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
        offset: 0,
        color: 'red',
    }, {
        offset: 1,
        color: 'blue'
    }]), new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
        offset: 0,
        color: 'red',
    }, {
        offset: 1,
        color: 'blue'
    }])
]





$.get(uploadedDataURL, function(chinaJson) {
    // 方法一：
    // var params = {
    //     names: [ //把各个大区的省份用二维数组分开
    //         ['北京', '天津', '河北', '山西', '内蒙古'],
    //         ["黑龙江", "吉林", "辽宁"],
    //         ['山东', '江苏', '安徽', '江西', '浙江', '福建', '上海', '台湾'],
    //         ['河南', '湖北', '湖南'],
    //         ['广东', '广西', '海南', '香港', '澳门'],
    //         ['重庆', '四川', '云南', '西藏', '贵州'],
    //         ['陕西', '甘肃', '青海', '宁夏', '新疆']
    //     ],
    //     properties: { //自定义大区的名字，要和上面的大区省份一一对应
    //         name: ['华北', '东北', '华东', '华中', '华南', '西南', '西北'],
    //         cp: [ //经纬度可以自己随意定义
    //             [116.24, 39.54],
    //             [126.32, 43.50],
    //             [121.28, 31.13],
    //             [114.20, 30.32],
    //             [113.15, 23.08],
    //             [104.04, 30.39],
    //             [103.49, 36.03]
    //         ]
    //     }
    // };
    // let newMap = mergeProvinces(JSON.parse(chinaJson), params.names, params.properties);
    // echarts.registerMap('china', newMap);
    
    echarts.registerMap('china',chinaJson);

    option = {
        geo: [{
            center: [103.49, 36.03],
            map: 'china',
            show: true, //显示地图
            roam: false,
            label: {
                emphasis: {
                    show: false
                }
            },
            aspectScale: 1, //地图的长宽比拉升地图
            layoutSize:100, //地图的大小
            itemStyle: {
                normal: {
                    opacity: 1
                },
                emphasis: {
                    label: {
                        show: true,
                        opacity: 0
                    }
                }
            },
            // 区域颜色部分
            regions: [{
                name: '华北',
                itemStyle: {
                    areaColor: 'red',
                    borderColor: 'pink',
                    borderWidth:2
                }
            }, {
                name: '东北',
                itemStyle: {
                    areaColor: 'blue',
                    borderColor: 'red',
                    borderWidth:2
                }
            }, {
                name: '华东',
                itemStyle: {
                    areaColor: 'green',
                    borderColor: 'blue',
                    borderWidth:2
                }
            }, {
                name: '华中',
                itemStyle: {
                    areaColor: 'yellow',
                    borderColor: 'green',
                    borderWidth:2
                }
            }, {
                name: '华南',
                itemStyle: {
                    areaColor: 'orange',
                    borderColor: 'yellow',
                    borderWidth:2
                }
            }, {
                name: '西南',
                itemStyle: {
                    areaColor: 'gray',
                    borderColor: 'orange',
                    borderWidth:2
                }
            }, {
                name: '西北',
                itemStyle: {
                    areaColor: 'pink',
                    borderColor: 'gray',
                    borderWidth:2
                }
            }, {
                name: "南海诸岛",
                itemStyle: {
                    // 隐藏地图
                    normal: {
                        opacity: 0, // 为 0 时不绘制该图形
                    }
                },
                label: {
                    show: false // 隐藏文字
                }
            }]
        }
        ],
        series: []
    };
    myChart.setOption(option);
});