var jsonData = {
    "dataPoint": [{
        "name": "太原",
        "value": [112.466466, 37.954529, 300]
    }, {
        "name": "长治",
        "value": [112.867566, 36.564529, 300]
    }]
}
myChart.showLoading();
var uploadedDataURL = "/asset/get/s/data-1565332444721-GYAKd_Cx6.json";
var colorList = ["#d1d756", "#e8a74f", "#d64560"];
var dataTemp = jsonData.dataPoint;
var realData = []
echarts.util.each(dataTemp, function(item, index) {
    realData.push({
        name: dataTemp[index].name,
        value: dataTemp[index].value,
        itemStyle: {
            normal: {
                color: colorList[index]
            }
        }
    });
})
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('shanxi', geoJson);
    myChart.hideLoading();
    option = {
        "backgroundColor": "#151739",
        "title": {
            "top": 20,
            "x": "center",
            "text": "",
            "textStyle": {
                "color": "#ccc"
            }
        },
        "tooltip": {
            "show": false,
            "trigger": "item"
        },
        // "visualMap": {
        //     "show": false,
        //     "min": 0,
        //     "max": 500,
        //     "top": "bottom",
        //     "left": "left",
        //     "calculable": true,
        //     "text": ["高", "低"],
        //     "seriesIndex": [1]
        // },
        "geo": {
            "show": true,
            "map": "shanxi",
            "roam": true,
            "itemStyle": {
                "normal": {
                    "borderColor": "#016cde",
                    "areaColor": "#2380f1",
                    "borderWidth": 2,
                    "shadowBlur": 30,
                    "shadowColor": "rgba(63, 218, 255, 0.5)"
                },
                "emphasis": {
                    "areaColor": "#31d2ff"
                }
            },
            "label": {
                "normal": {
                    "show": true,
                    "formatter": function(params) {
                        return params.name + "\n确诊人数:0"
                    },
                    "textStyle": {
                        "color": "#fff"
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "color": "#097593",
                        "fontWeight": "bolder"
                    }
                }
            }
        },
        "series": [{
            "type": "map",
            "map": "shanxi",
            "geoIndex": 0,
            "aspectScale": 0.75,
            "showLegendSymbol": false,
            "label": {
                "normal": {
                    "show": false
                },
                "emphasis": {
                    "show": false,
                    "textStyle": {
                        "color": "#fff"
                    }
                }
            },
            "roam": true,
            "itemStyle": {
                "normal": {
                    "areaColor": "#031525",
                    "borderColor": "#FFFFFF"
                },
                "emphasis": {
                    "areaColor": "#2B91B7"
                }
            },
            "animation": false
        }, {
            "name": "地图",
            "type": "effectScatter",
            "hoverAnimation": true,
            "symbolSize": function(val) {
                return val[2] / 10;
            },
            "label": {
                "normal": {
                    "show": false,
                    "position": "right",
                    "formatter": "{b}"
                }
            },
            "itemStyle": {
                "normal": {
                    "color": "#F4E925",
                    "shadowBlur": 10,
                    "shadowColor": "#05C3F9"
                }
            },
            "coordinateSystem": "geo",
            "showEffectOn": "render",
            "rippleEffect": {
                "brushType": "stroke"
            },
            "zlevel": 1,
            "data": realData
        }]

    };


    myChart.setOption(option);
});