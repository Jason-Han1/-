var uploadedDataURL = "/asset/get/s/data-1521015834382-r1MXhU8YG.json";

// var uploadedDataURL = "/asset/get/s/data-1521015828942-Hkafn8LYG.json";

myChart.showLoading();

$.getJSON(uploadedDataURL, function(china) {
    console.log(china);
    myChart.hideLoading();
    echarts.registerMap('china', china);
    option = {
        "title": {
            "y": "",
            "text": "",
            "textStyle": {
                "fontWeight": 700
            },
            "x": "center",
            "show": false
        },
        "color": [
            "#1A75CF",
            "#FFA51B",
            "#EF635C",
            "#7FBAC4",
            "#48A47D",
            "#BCB52B",
            "#B46A88",
            "#B29688",
            "#9FACA4",
            "#6B6B6B"
        ],
        "series": [{
            "data": [{
                "name": "信阳",
                "value": 9.005706119081422
            }],
            right: 0,
            "showLegendSymbol": false,
            "name": "Province",
            "itemStyle": {
                "emphasis": {
                    "areaColor": "#1B74CF"
                }
            },
            "selectedMode": "multiple",
            "label": {
                "emphasis": {
                    "show": false
                },
                "normal": {
                    "show": false
                }
            },
            "mapType": "china",
            "map": "china",
            "roam": false,
            "type": "map",
            "left": 0
        }],
        "tooltip": {
            "axisPointer": {
                "type": "shadow"
            },
            "trigger": "item",
            "extraCssText": "border-radius: 0px;",
            "textStyle": {
                "fontSize": 12
            }
        },
        "visualMap": [{
            "min": 8.470855938387771,
            "max": 9.505384372380604,
            "itemHeight": 12,
            "show": false,
            "dimension": 0,
            "itemWidth": 12,
            "seriesIndex": 0,
            "inRange": {
                "color": [
                    "#C30000",
                    "#FFD32C",
                    "#237845"
                ]
            },
            "type": "continuous",
            "top": "top",
            "left": "left"
        }],
        "xAxis": [{
            "nameLocation": "middle",
            "splitNumber": "10",
            "minInterval": 1,
            "name": "",
            "show": false,
            "data": null,
            "axisLabel": {
                "textStyle": {
                    "color": "#787878",
                    "fontSize": 10
                },
                "inside": false,
                "rotate": 0,
                "show": true
            },
            "boundaryGap": [
                "10%",
                "10%"
            ],
            "nameTextStyle": {
                "color": "#787878",
                "fontSize": 10
            },
            "nameGap": 35,
            "axisLine": {
                "lineStyle": {
                    "color": "#A6A6A6"
                },
                "show": true
            },
            "triggerEvent": true,
            "z": 10,
            "type": "category",
            "axisTick": {
                "show": false
            }
        }],
        "ext_js_list": [],
        "toolbox": {
            "feature": {
                "restore": {
                    "show": true
                },
                "saveAsImage": {
                    "show": true
                },
                "dataView": {
                    "readOnly": false,
                    "show": true
                },
                "mark": {
                    "show": true
                },
                "myDownloadData": {
                    "title": "\u4e0b\u8f7d\u6570\u636e",
                    "icon": "image://http://echarts.baidu.com/images/favicon.png",
                    "onclick": self.downloadData,
                    "show": true
                },
                "myShowOption": {
                    "title": "\u7f16\u8f91",
                    "icon": "image://http://echarts.baidu.com/images/favicon.png",
                    "onclick": self.showOption,
                    "show": true
                },
                "myGoBack": {
                    "title": "\u8fd4\u56de",
                    "icon": "image://http://echarts.baidu.com/images/favicon.png",
                    "onclick": self.goBack,
                    "show": false
                }
            },
            "show": false
        },
        "legend": {
            "textStyle": {
                "padding": 0,
                "lineHeight": 10,
                "fontSize": 10
            },
            "show": false,
            "itemHeight": 12,
            "itemGap": 5,
            "padding": 0,
            "itemWidth": 12,
            "pageTextStyle": {},
            "data": [
                "Province"
            ],
            "left": "left"
        }
    };
    myChart.setOption(option);
});