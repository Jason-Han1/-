var planePath_s = "image://asset/get/s/data-1597596595435-DWPvo1QV8.png";

var planePath_l = "image://asset/get/s/data-1597594271499-52GJjfmHO.png";

var uploadedDataURL = "/asset/get/s/data-1595333738804-TWg_bHnhl.json";


$.get(uploadedDataURL, function(geoJson) {

    myChart.hideLoading();

    echarts.registerMap('china', geoJson);

    var allData = {
        "citys": [{
                "name": "山东",
                "value": [116.965026962616, 36.6662886548544, 2],
                "symbolSize": 3.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "北京",
                "value": [116.387734895952, 39.906319964806, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "天津",
                "value": [117.222165116914, 39.114854285361, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "秦皇岛",
                "value": [119.591779628446, 39.9248919981598, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            }, {
                "name": "沈阳",
                "value": [123.4040661, 41.7872311, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "锦州",
                "value": [122.110296101187, 41.686858907347, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "通辽",
                "value": [122.281812278308, 43.6109907948307, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "四平",
                "value": [124.367490399413, 43.1617950492302, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            }, {
                "name": "白城",
                "value": [122.8318184, 45.61366081, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "河北",
                "value": [114.492413166608, 38.0435975887442, 2],
                "symbolSize": 3.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "昂昂溪",
                "value": [123.96786831452, 47.3431555994515, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "烟台",
                "value": [121.382662696445, 37.527997391355, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "青岛",
                "value": [120.355687992507, 36.1104711759537, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "威海卫",
                "value": [122.110757368119, 37.4948913170806, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "日照",
                "value": [119.448028015085, 35.4220736013667, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "大连",
                "value": [121.557560137686, 38.8992537407634, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "长春",
                "value": [125.303707455, 43.8841501254403, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "哈尔滨",
                "value": [126.639518338973, 45.7555310873232, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "营口",
                "value": [122.259052384403, 40.674867331565, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "丹东",
                "value": [124.346896415523, 40.0865911647227, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "符拉迪沃斯托克",
                "value": [131.885218977188, 43.1155387018385, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },
            {
                "name": "潍坊",
                "value": [119.090501261986, 36.7026001304917, 4],
                "symbolSize": 1.5,
                "itemStyle": {
                    "normal": {
                        "color": "#a6c84c"
                    }
                }
            },

        ],

        "moveLines_l": [{
                "fromName": "山东",
                "toName": "北京",
                "coords": [
                    [116.965026962616, 36.6662886548544],
                    [116.387734895952, 39.906319964806]
                ]
            },
            {
                "fromName": "山东",
                "toName": "天津",
                "coords": [
                    [116.965026962616, 36.6662886548544],
                    [117.222165116914, 39.114854285361]
                ]
            },
            {
                "fromName": "山东",
                "toName": "山海关",
                "coords": [
                    [116.965026962616, 36.6662886548544],
                    [119.591779628446, 39.9248919981598]
                ]
            },
            {
                "fromName": "山东",
                "toName": "沈阳",
                "coords": [
                    [116.965026962616, 36.6662886548544],
                    [123.4040661, 41.7872311]
                ]
            },
            {
                "fromName": "山东",
                "toName": "通辽",
                "coords": [
                    [116.965026962616, 36.6662886548544],
                    [122.281812278308, 43.6109907948307]
                ]
            },
            {
                "fromName": "山东",
                "toName": "洮南",
                "coords": [
                    [116.965026962616, 36.6662886548544],
                    [122.8318184, 45.61366081]
                ]
            },
            {
                "fromName": "山东",
                "toName": "打虎山",
                "coords": [
                    [116.965026962616, 36.6662886548544],
                    [122.110296101187, 41.686858907347]
                ]
            },
            {
                "fromName": "山东",
                "toName": "四平街",
                "coords": [
                    [116.965026962616, 36.6662886548544],
                    [124.367490399413, 43.1617950492302]
                ]
            },
            {
                "fromName": "河北",
                "toName": "卢沟桥",
                "coords": [
                    [114.492413166608, 38.0435975887442],
                    [116.387734895952, 39.906319964806]
                ]
            },
            {
                "fromName": "河北",
                "toName": "沈阳",
                "coords": [
                    [114.492413166608, 38.0435975887442],
                    [123.4040661, 41.7872311]
                ]
            },
            {
                "fromName": "河北",
                "toName": "打虎山",
                "coords": [
                    [114.492413166608, 38.0435975887442],
                    [122.110296101187, 41.686858907347]
                ]
            },
            {
                "fromName": "河北",
                "toName": "洮南/洮安",
                "coords": [
                    [114.492413166608, 38.0435975887442],
                    [122.8318184, 45.61366081]
                ]
            },
            {
                "fromName": "河北",
                "toName": "昂昂溪",
                "coords": [
                    [114.492413166608, 38.0435975887442],
                    [123.96786831452, 47.3431555994515]
                ]
            },

        ],

        "moveLines_s": [{
                "fromName": "烟台",
                "toName": "大连",
                "coords": [
                    [121.382662696445, 37.527997391355],
                    [121.557560137686, 38.8992537407634]
                ]
            },
            {
                "fromName": "青岛",
                "toName": "大连",
                "coords": [
                    [120.355687992507, 36.1104711759537],
                    [121.557560137686, 38.8992537407634]
                ]
            },
            {
                "fromName": "威海卫",
                "toName": "大连",
                "coords": [
                    [122.110757368119, 37.4948913170806],
                    [121.557560137686, 38.8992537407634]
                ]
            },
            {
                "fromName": "石臼港",
                "toName": "大连",
                "coords": [
                    [119.448028015085, 35.4220736013667],
                    [121.557560137686, 38.8992537407634]
                ]
            },
            {
                "fromName": "大连",
                "toName": "长春",
                "coords": [
                    [121.557560137686, 38.8992537407634],
                    [125.303707455, 43.8841501254403]
                ]
            },
            {
                "fromName": "大连",
                "toName": "滨江",
                "coords": [
                    [121.557560137686, 38.8992537407634],
                    [126.639518338973, 45.7555310873232]
                ]
            },
            {
                "fromName": "烟台",
                "toName": "营口",
                "coords": [
                    [121.382662696445, 37.527997391355],
                    [122.259052384403, 40.674867331565]
                ]
            },
            {
                "fromName": "烟台",
                "toName": "安东",
                "coords": [
                    [121.382662696445, 37.527997391355],
                    [124.346896415523, 40.0865911647227]
                ]
            },
            {
                "fromName": "烟台",
                "toName": "海参崴",
                "coords": [
                    [121.382662696445, 37.527997391355],
                    [131.885218977188, 43.1155387018385]
                ]
            },
            {
                "fromName": "山东",
                "toName": "羊角沟",
                "coords": [
                    [116.965026962616, 36.6662886548544],
                    [119.090501261986, 36.7026001304917]
                ]
            },
            {
                "fromName": "河北",
                "toName": "天津",
                "coords": [
                    [114.492413166608, 38.0435975887442],
                    [117.222165116914, 39.114854285361]
                ]
            },
            {
                "fromName": "天津",
                "toName": "营口",
                "coords": [
                    [114.492413166608, 38.0435975887442],
                    [122.259052384403, 40.674867331565]
                ]
            },
            {
                "fromName": "天津",
                "toName": "大连",
                "coords": [
                    [114.492413166608, 38.0435975887442],
                    [121.557560137686, 38.8992537407634]
                ]
            }

        ]
    };

    option = {
        backgroundColor: '#444444',
        title: [{
            text: '清末“闯关东”路线图',
            bottom: '30%',
            right: '6%',
            textStyle: {
                color: '#fff',
                fontSize: 30
            },
            subtextStyle: {
                color: "rgba(255,255,255,0.5)",
                fontSize: 13
            }
        },{
            text: '',
            subtext: '数据来源：《近代“闯关东”移民外在特征探》 范立君 谭玉秀',
            bottom: '25%',
            right: '2%',
            subtextStyle: {
                color: "rgba(255,255,255,0.5)",
                fontSize: 15
            }
        }],
        legend: {
            show: true,
            right:'9%',
            //orient: 'vertical',
            bottom: '5%',
            //left: 'right',
            data: ['地点', '陆路', '水路'],
            textStyle: {
                fontSize:15,
                color: '#fff'
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params, ticket, callback) {
                console.log(params);
                if (params.seriesType == "effectScatter") {
                    return "线路：" + params.data.name + "" + params.data.value[2];
                } else if (params.seriesType == "lines") {
                    return params.data.fromName + " -> " + params.data.toName + "<br />";
                } else {
                    return params.name;
                }
            }

        },
        geo: {
            left: '-2%',
            top: '52%',
            show: true,

            zoom:3.3,
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#363636',
                    borderColor: '#444444'
                },
                emphasis: {
                    areaColor: '#363636'
                }
            }
        },
        series: [{
                name: '地点',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 1,
                rippleEffect: {
                    //brushType: 'stroke',
                    period: 4,
                    scale: 30
                },
                label: {
                    emphasis: {
                        show: true,
                        position: 'top',
                        formatter: '{b}'
                    }
                },
                //symbolSize: 5,
                showEffectOn: 'render',
                itemStyle: {
                    normal: {
                        color: '#a6c84c'
                    }
                },
                data: allData.citys
            },
            // {
            //     name: '.',
            //     type: 'lines',
            //     coordinateSystem: 'geo',
            //     zlevel: 2,
            //     large: true,
            //     effect: {
            //         show: true,
            //         period: 6,
            //         symbolSize: 3,
            //         trailLength: 0.7,
            //     },
            //     lineStyle: {
            //         normal: {
            //             color: '#fff',
            //             width: 0,
            //             curveness: 0.2,
            //             type: 'dashed',
            //         }
            //     },
            //     data: allData.moveLines_l
            // }, 
            {
                name: '陆路',
                type: 'lines',
                coordinateSystem: 'geo',
                zlevel: 1,
                large: true,
                symbol: ['none', 'arrow'],
                effect: {
                    show: true,
                    period: 6,
                    symbol: planePath_l, //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                    symbolSize: 20,
                    trailLength: 0,
                },
                lineStyle: {
                    normal: {
                        color: '#ffa022',
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.3,
                        type: 'dashed',
                    }
                },
                data: allData.moveLines_l
            },
            // {
            //     name: '.',
            //     type: 'lines',
            //     coordinateSystem: 'geo',
            //     zlevel: 2,
            //     large: true,
            //     effect: {
            //         show: true,
            //         period: 6,
            //         symbolSize: 3,
            //         trailLength: 0.7,
            //     },
            //     lineStyle: {
            //         normal: {
            //             color: '#fff',
            //             width: 0,
            //             curveness: 0.2,
            //             type: 'dashed',
            //         }
            //     },
            //     data: allData.moveLines_s
            // }, 
            {
                name: '水路',
                type: 'lines',
                symbol: ['none', 'arrow'],
                coordinateSystem: 'geo',
                zlevel: 1,
                large: true,
                effect: {
                    show: true,
                    period: 6,
                    symbol: planePath_s, //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                    symbolSize: 20,
                    trailLength: 0,
                },
                lineStyle: {
                    normal: {
                        color: '#46bee9',
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.3,
                        type: 'dashed',
                    }
                },
                data: allData.moveLines_s
            }
        ]
    };
    myChart.setOption(option);
});