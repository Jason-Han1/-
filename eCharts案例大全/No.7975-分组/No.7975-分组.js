option = {
    "color": ["rgba(43, 138, 178,.5)", "rgb(138, 204, 128)", "rgb(202, 202, 123)", "rgb(255, 235, 53)", "rgb(235, 72, 60)"],
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "line",
            "label": {
                "backgroundColor": "#6a7985"
            }
        }
    },
    "grid": [{
        "id": "ym",
        "show": true,
        "top": 60
    }, {
        "id": "paintColor",
        "show": true,
        "top": 30,
        "height": 30
    }, {
        "id": "paintSupplierName",
        "show": true,
        "top": 0,
        "height": 30
    }],
    "dataset": {
        "dimensions": ["ym", "tarPaintWeightTotal", "actPaintWeightTotal", "paintShipmentTotal", "paintSupplierName", "paintColor"],
        "source": [{
            "paintSupplierName": "1235",
            "paintColor": "",
            "tarPaintWeightTotal": 0.006,
            "actPaintWeightTotal": 150,
            "paintShipmentTotal": 50,
            "alert1Total": 0.0063,
            "alert2Total": 0.0066,
            "ym": "202004",
            "y": "2020",
            "m": "04"
        }, {
            "paintSupplierName": "武藏",
            "paintColor": "Dark grey",
            "tarPaintWeightTotal": 0.028,
            "actPaintWeightTotal": 200,
            "paintShipmentTotal": 150,
            "alert1Total": 0.0294,
            "alert2Total": 0.0308,
            "ym": "202004",
            "y": "2020",
            "m": "04"
        }, {
            "paintSupplierName": "永盛辉",
            "paintColor": "银黑",
            "tarPaintWeightTotal": 0.077,
            "actPaintWeightTotal": 25,
            "paintShipmentTotal": 0,
            "alert1Total": 0.08085,
            "alert2Total": 0.0847,
            "ym": "202004",
            "y": "2020",
            "m": "04"
        }, {
            "paintSupplierName": "飞鹏实业",
            "paintColor": "Black",
            "tarPaintWeightTotal": 0.006,
            "actPaintWeightTotal": 150,
            "paintShipmentTotal": 100,
            "alert1Total": 0.0063,
            "alert2Total": 0.0066,
            "ym": "202004",
            "y": "2020",
            "m": "04"
        }, {
            "paintColor": "paintcolor",
            "tarPaintWeightTotal": 0.096,
            "actPaintWeightTotal": 100,
            "paintShipmentTotal": 150,
            "alert1Total": 0.1008,
            "alert2Total": 0.1056,
            "ym": "202004",
            "y": "2020",
            "m": "04"
        }]
    },
    "xAxis": [{
        "zlevel": 3,
        "type": "category",
        "gridIndex": 0,
        "data": ["202004", "202004", "202004", "202004", "202004"],
        "axisLabel": {
            "show": true
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#e0dede"
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    }, {
        "zlevel": 2,
        "type": "category",
        "gridIndex": 1,
        "data": null,
        "axisLabel": {
            "show": false
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#e0dede"
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    }, {
        "zlevel": 1,
        "type": "category",
        "gridIndex": 2,
        "data": null,
        "axisLabel": {
            "show": false
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#e0dede"
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    }],
    "yAxis": [{
        "gridIndex": 0,
        "type": "value",
        "axisLabel": {
            "show": true
        },
        "axisLine": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    }, {
        "gridIndex": 1,
        "type": "value",
        "axisLabel": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    }, {
        "gridIndex": 2,
        "type": "value",
        "axisLabel": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    }],
    "series": [{
        "name": "Target Usage",
        "type": "bar",
        "xAxisIndex": 0,
        "yAxisIndex": 0,
        "data": [0.006, 0.028, 0.077, 0.006, 0.096]
    }, {
        "name": "Actual Usage",
        "type": "bar",
        "xAxisIndex": 0,
        "yAxisIndex": 0,
        "data": [150, 200, 25, 150, 100]
    }, {
        "name": "Shipment",
        "type": "bar",
        "xAxisIndex": 0,
        "yAxisIndex": 0,
        "data": [50, 150, 0, 100, 150]
    }, {
        "name": "Color",
        "type": "bar",
        "xAxisIndex": 1,
        "yAxisIndex": 1,
        "barCategoryGap": 0,
        "itemStyle": {
            "color": "transparent"
        },
        "label": {
            "show": true,
            "position": "inside",
            "formatter": "{b}",
            "color": "red"
        },
        "encode": {
            "x": 5
        }
    }, {
        "name": "Supplier",
        "type": "bar",
        "xAxisIndex": 2,
        "yAxisIndex": 2,
        "barCategoryGap": 0,
        "itemStyle": {
            "color": "transparent"
        },
        "label": {
            "show": true,
            "position": "inside",
            "formatter": "{b}",
            "color": "red"
        },
        "encode": {
            "x": 4
        }
    }],
    "dataZoom": {
        "type": "slider",
        "handleIcon": "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
        "handleSize": "80%",
        "handleStyle": {
            "color": "#fff",
            "shadowBlur": 3,
            "shadowColor": "rgba(0, 0, 0, 0.6)",
            "shadowOffsetX": 2,
            "shadowOffsetY": 2
        }
    }
}