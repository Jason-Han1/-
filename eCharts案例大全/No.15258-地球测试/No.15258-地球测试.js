var uploadedDataURL = "/asset/get/s/data-1491386042704-Hkma0Efae.json";

$.get(uploadedDataURL, function(geoJson) {

    myChart.hideLoading();

    echarts.registerMap('北京市', geoJson);

    var allData = {
        "citys": [{
            "name": "柏林",
            "value": [13.25, 52.3, 4],
            "symbolSize": 2,
            "itemStyle": {
                "normal": {
                    "color": "#F58158"
                }
            }
        }, {
            "name": "波兰",
            "value": [19.08, 51.55, 4],
            "symbolSize": 2,
            "itemStyle": {
                "normal": {
                    "color": "#F58158"
                }
            }
        }, {
            "name": "青海",
            "value": [110.49, 36.34, 4],
            "symbolSize": 2,
            "itemStyle": {
                "normal": {
                    "color": "#F58158"
                }
            }
        }, {
            "name": "India",
            "value": [77,28, 4],
            "symbolSize": 2,
            "itemStyle": {
                "normal": {
                    "color": "#F58158"
                }
            }
        }, {
            "name": "Romania",
            "value": [25, 44, 4],
            "symbolSize": 2,
            "itemStyle": {
                "normal": {
                    "color": "#F58158"
                }
            }
        }, {
            "name": "Rusia",
            "value": [100, 65, 4],
            "symbolSize": 2,
            "itemStyle": {
                "normal": {
                    "color": "#F58158"
                }
            }
        }, {
            "name": "Rusia",
            "value": [30, 31, 4],
            "symbolSize": 2,
            "itemStyle": {
                "normal": {
                    "color": "#F58158"
                }
            }
        }, {
            "name": "South Afr ",
            "value": [24, -27, 4],
            "symbolSize": 2,
            "itemStyle": {
                "normal": {
                    "color": "#F58158"
                }
            }
        }],


        "moveLines": [{
            "fromName": "青海",
            "toName": "柏林",
            "coords": [
                [110.49, 36.34],
                [13.25, 52.3]
            ]
        }, {
            "fromName": "青海",
            "toName": "SA",
            "coords": [
                [110.49, 36.34],
                [24,-27]
            ]
        }, {
            "fromName": "青海",
            "toName": "Egyp",
            "coords": [
                [110.49, 36.34],
                [30,31]
            ]
        }, {
            "fromName": "青海",
            "toName": "India",
            "coords": [
                [110.49, 36.34],
                [77,28]
            ]
        },{
            "fromName": "青海",
            "toName": "波兰",
            "coords": [
                [110.49, 36.34],
                [19.08, 51.55]
            ]
        }, {
            "fromName": "青海",
            "toName": "Romania",
            "coords": [
                [110.49, 36.34],
                [25,44]
            ]
        }, {
            "fromName": "青海",
            "toName": "Russia",
            "coords": [
                [110.49, 36.34],
                [100, 65]
            ]
        }]
    };

    option = {
        backgroundColor: '#404a59',
        title: {
            text: '华为光伏',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        legend: {
            show: true,
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['地点', '线路'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'world',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'grey',
                    borderColor: '#404a59'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            },
             regions: [{
            name: 'Germany',
            itemStyle: {
                normal: {
                    areaColor: 'red',
                    color: '#2a333d'
                }
            }
        },{
            name: 'Poland',
            itemStyle: {
                normal: {
                    areaColor: 'red',
                    color: '#2a333d'
                }
            }
        },{
            name: 'Bahrain',
            itemStyle: {
                normal: {
                    areaColor: 'red',
                    color: '#2a333d'
                }
            }
        },{
            name: 'India',
            itemStyle: {
                normal: {
                    areaColor: 'red',
                    color: '#2a333d'
                }
            }
        },
        {
            name: 'South Africa',
            itemStyle: {
                normal: {
                    areaColor: 'red',
                    color: '#2a333d'
                }
            }
        }, {
            name: 'Egypt',
            itemStyle: {
                normal: {
                    areaColor: 'red',
                    color: '#2a333d'
                }
            }
        },{
            name: 'China',
            itemStyle: {
                normal: {
                    areaColor: 'red',
                    color: '#2a333d'
                }
            }
        },{
            name: 'Romania',
            itemStyle: {
                normal: {
                    areaColor: 'red',
                    color: '#2a333d'
                }
            }
        },{
            name: 'Russia',
            itemStyle: {
                normal: {
                    areaColor: 'red',
                    color: '#2a333d'
                }
            }
        }]
        },
       
        series: [{
            name: '地点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke',
                period: 7,
                scale: 26
            },
            label: {
                emphasis: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: 2,
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: '#46bee9'
                }
            },
            data: allData.citys
        }, {
            name: '线路',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 2,
            large: true,
            effect: {
                show: true,
                constantSpeed: 30,
                symbol: 'arrow', //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                symbolSize: 8,
                trailLength: 0,
            },
            lineStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'yellow'
                    }, {
                        offset: 1,
                        color: 'red'
                    }], false),
                    width: 3,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: allData.moveLines
        }]
    };
    myChart.setOption(option);
});