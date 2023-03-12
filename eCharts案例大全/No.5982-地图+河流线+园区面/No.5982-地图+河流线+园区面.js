var cq_yubei_yuanqu_ploygon = "/asset/get/s/data-1601004278072-mwT9hm1OS.json"; // 园区面数据

var cq_yubei_yuanqu_ployline = "/asset/get/s/data-1601000263534-L5nH9FF-Z.json"; // 园区线数据

var cq = "/asset/get/s/data-1600228345761-fxbCoFhIA.json"; // cq

var river = "/asset/get/s/data-1600223191033-_JIZbaq7Y.json"; // 河流线数据

myChart.showLoading();



$.getJSON(river, function(riverJson) {

    /** -------问题（1）-echarts叠加河流--------- */

    // 将rivergeojson 进行处理成 type:lines 所需的坐标格式
    // 因为 echarts.registerMap() 只能加载面\多面的geojson数据"type": "MultiPolygon",不能加载线要素"type" : "LineString",
    // 多段线则不能显示 label,如长江不能显示在河流中部。
    var riverLines = [].concat.apply([], riverJson.features.map(function(feature, idx) {
        return {
            coords: feature.geometry.coordinates
        }
    }));

    /** -------问题（2）-echarts叠加园区之线要素--------- */
    // 闭合多段线要素、但不能显示label
    // 解决办法：在特定坐标点加点坐标，显示label
    var dataArr = [{
        name: '渝北区-空港新城-规划范围线',
        value: [106.5845,29.7306],
    },{
        name: '渝北区_前沿科技城企业',
        value: [106.6655,29.6656],
    },{
        name: '渝北区_创新经济走廊建成区',
        value: [106.6184,29.6767],
    },{
        name: '渝北区_创新经济走廊建成区',
        value: [106.5906,29.6496],
    },{
        name: '渝北区_仙桃数据谷',
        value: [106.5482,29.7466],
    },{
        name: '空港工业园区-航空产业园',
        value: [106.6466,29.7459],
    },{
        name: '空港工业园区-创新示范基地',
        value: [106.6370,29.7591],
    },{
        name: '空港工业园区-航空小镇',
        value: [106.6281,29.7837],
    },{
        name: '空港工业园区-木耳物流园',
        value: [106.6787,29.8069],
    },{
        name: '渝北区_农业园区',
        value: [106.7237,29.8808],
    }];
    
    $.getJSON(cq_yubei_yuanqu_ployline, function(cq_yubei_yuanqu_ploylineJson) {

        var yuanquLines = [].concat.apply([], cq_yubei_yuanqu_ploylineJson.features.map(function(feature, idx) {
            return {
                coords: feature.geometry.coordinates
            }
        }));

        /** -------问题（3）-echarts叠加园区之面要素--------- */

        // 叠加两个面数据可通过geo。但是不能配准，两个相互独立。
        // 缩放和移动，可通过监听 'georoam' 实时改变
        // $.getJSON(cq_yubei_yuanqu_ploygon, function(cq_yubei_yuanqu_ploygonJson) {
        //     echarts.registerMap('园区', cq_yubei_yuanqu_ploygonJson);

        $.getJSON(cq, function(geoJson) {
            echarts.registerMap('重庆市', geoJson);
            myChart.hideLoading();
            option = {
                backgroundColor: '#091c3d',
                geo: [{
                        zlevel: 1,
                        show: true,
                        map: '重庆市',
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true,
                                color: '#fff'
                            }
                        },
                        roam: true,
                        aspectScale: 1,
                        itemStyle: {
                            normal: {
                                areaColor: 'transparent',
                                borderColor: '#3fdaff',
                                borderWidth: 2,
                                shadowColor: 'rgba(63, 218, 255, 0.5)',
                                shadowBlur: 30
                            },
                            emphasis: {
                                areaColor: '#2B91B7',
                            }
                        }
                    },
                    // 匹配问题（3）
                    // {
                    //     zlevel:2,
                    //     map: '园区',
                    //     roam: true,
                    // }
                ],
                series: [{
                        zlevel: 3,
                        type: 'lines',
                        coordinateSystem: 'geo',
                        polyline: true,
                        data: riverLines,
                        silent: true,
                        lineStyle: {
                            normal: {
                                color: 'rgb(200, 35, 45)',
                                // opacity: 0.2,
                                width: 5
                            }
                        },
                        label: {
                            show: true,
                            formatter: 'sss'
                        }
                    },
                    // 匹配问题（2）
                    {
                        zlevel: 1,
                        type: 'lines',
                        coordinateSystem: 'geo',
                        polyline: true,
                        data: yuanquLines,
                        silent: true,
                        lineStyle: {
                            normal: {
                                color: '#3fdaff',
                                // opacity: 0.2,
                                // width: 5
                            }
                        },
                        label: {
                            show: true,
                            formatter: 'ssss'
                        }
                    },
                    // 匹配问题（2）--指定点label
                    {
                        zlevel: 1,
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        // symbol: 'none',
                        symbolSize: 2,
                        data: dataArr,
                        label: { // 文字
                            show: true,
                            color: '#fff',
                            position: 'top',
                            // fontSize: 12,
                            formatter:'{b}'
                        },

                    }
                ]
            };
            myChart.setOption(option);
        });

        // });

    });

});