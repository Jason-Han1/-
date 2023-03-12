var uploadedDataURL = "/asset/get/s/data-1508307412468-Hy20ZuV6b.json";


function showProvince() {
    var name = 'qingdao';

    // myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        // 处理


        myChart.setOption(option = {
            "geo": {
                "show": true,
                "map": "qingdao",
                "label": {
                    "normal": {
                        "show": false,
                        "color": "#fff"
                    },
                    "emphasis": {
                        "show": false,
                        "color": "#fff"
                    }
                },
                "zoom": 1.2,
                "roam": true,
                "itemStyle": {
                    "normal": {
                        "areaColor": "rgba(78, 159, 202, .5)",
                        "borderWidth": 1,
                        "borderColor": "#8dc2d6",
                        "shadowColor": "rgba(80, 163, 186, .8)",
                        "shadowBlur": 1
                    },
                    "emphasis": {
                        "areaColor": "rgba(107, 176, 207, .6)"
                    }
                }
            },
            "series": [{
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: [{
                        name: "",
                        value: [120.075966, 36.800892, 0]

                    }],
                    symbolSize: 14,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        },
                    },
                    itemStyle: {
                        color: '#e93f42',
                    }
                },
                {
                    "type": "scatter",
                    "coordinateSystem": "geo",
                    "data": [{
                            "name": "山东省青岛市市北区富源一路118号明翠雅庭1单元4层401室",
                            "value": [
                                120.42036504006357,
                                36.1097004800983,
                                0
                            ]
                        },
                        {
                            "name": "山东省青岛市市北区富源一路118号明翠雅庭1单元4层401室",
                            "value": [
                                120.42036504006357,
                                36.1097004800983,
                                0
                            ]
                        },
                        {
                            "name": "山东省青岛市市南区增城路7号海信燕岛国际公寓小区增城路7号商服楼1层2号网点室",
                            "value": [
                                120.39433776955278,
                                36.05488272319778,
                                0
                            ]
                        },
                        {
                            "name": "山东省青岛市市南区徐州路98号丙班芙春天2号楼4层408室",
                            "value": [
                                120.37293214343087,
                                36.07913360762258,
                                0
                            ]
                        },
                        {
                            "name": "山东省青岛市李沧区虎山路海尔公寓5号楼2单元2层202室",
                            "value": [
                                120.40810234113933,
                                36.172197780363774,
                                0
                            ]
                        },
                        {
                            "name": "山东省青岛市胶州市北京东路269号御花园1号楼1单元1层102室",
                            "value": [
                                120.02547287889087,
                                36.265168148066195,
                                0
                            ]
                        },
                        {
                            "name": "山东省青岛市胶州市北京东路269号御花园1号楼1单元1层101室",
                            "value": [
                                120.02547287889087,
                                36.265168148066195,
                                0
                            ]
                        },
                        {
                            "name": "山东省青岛市胶州市北京东路269号御花园1号楼1单元1层101室",
                            "value": [
                                120.02547287889087,
                                36.265168148066195,
                                0
                            ]
                        },
                    ],
                    "symbolSize": 12,
                    "showEffectOn": "render",
                    "rippleEffect": {
                        "brushType": "stroke"
                    },
                    "hoverAnimation": true,
                    "itemStyle": {
                        "normal": {
                            "color": "yellow",
                            "shadowBlur": 5,
                            "shadowColor": "yellow"
                        }
                    }
                },
                {
                    // 滚动label解决方案
                    "type": "scatter",
                    "coordinateSystem": "geo",
                    "data": [{
                            "name": "李沧区",
                            "value": [120.421236, 36.160023, 103]
                        },
                        {
                            "name": "市北区",
                            "value": [120.355026, 36.083819, 338]
                        },
                        {
                            "name": "市南区",
                            "value": [120.395966, 36.070892, 284]
                        },
                        {
                            "name": "即墨市",
                            "value": [120.447352, 36.390847, 2]
                        },
                        {
                            "name": "黄岛区",
                            "value": [120.0970458984375, 36.04465753921525, 86]
                        },
                        {
                            "name": "胶州市",
                            "value": [120.006202, 36.285878, 34]
                        },
                        {
                            "name": "崂山区",
                            "value": [120.467393, 36.102569, 48]
                        },
                        {
                            "name": "城阳区",
                            "value": [120.41564941406251, 36.268635800737876, 74]
                        },
                        {
                            "name": "莱西市",
                            "value": [120.526226, 36.86509, 11]
                        },
                        {
                            "name": "平度市",
                            "value": [119.959012, 36.788828, 16]
                        },
                    ],
                    label: {
                        normal: {
                            formatter: function(val) {

                                let {
                                    name,
                                    value
                                } = val;

                                const v = isNaN(value[2]) ? 0 : value[2];
                                return `${name}\n评估数量：${v}个`;
                            },
                            show: true,
                            color: '#fff'
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    "symbolSize": 1,
                    "hoverAnimation": true,
                },

                {
                    "type": "map",
                    "mapType": "qingdao",
                    "aspectScale": 0.75,
                    "zoom": 1.2,
                    "geoIndex": 0,
                    label: {
                        normal: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            },
                            formatter: function(val) {
                                let {
                                    name,
                                    value
                                } = val;
                                value = isNaN(value) ? 0 : value;
                                return `${name}\n评估数量：${value}个`;
                            },
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "borderColor": "#9dc6d6",
                            "areaColor": "rgba(78, 159, 202, .8)"
                        },
                        "emphasis": {
                            "areaColor": "#6bb0cf"
                        }
                    },
                    "animation": false,
                    "data": [{
                            "name": "市北区",
                            "value": 338
                        },
                        {
                            "name": "市南区",
                            "value": 284
                        },
                        {
                            "name": "李沧区",
                            "value": 103
                        },
                        {
                            "name": "黄岛区",
                            "value": 84
                        },
                        {
                            "name": "城阳区",
                            "value": 74
                        },
                        {
                            "name": "崂山区",
                            "value": 48
                        },
                        {
                            "name": "即墨市",
                            "value": 48
                        },
                        {
                            "name": "胶州市",
                            "value": 34
                        },
                        {
                            "name": "平度市",
                            "value": 16
                        },
                        {
                            "name": "莱西市",
                            "value": 11
                        }
                    ]
                }
            ],
            "visualMap": {
                "show": false,
                "min": 11,
                "max": 338,
                "left": "left",
                "top": "bottom",
                "text": [
                    "高",
                    "低"
                ],
                "seriesIndex": [3],
                "inRange": {
                    "color": [
                        "#2d5e87",
                        "#204765"
                    ]
                },
                "textStyle": {
                    "color": "#fff"
                }
            }
        });
    });
}

var currentIdx = 0;

showProvince();