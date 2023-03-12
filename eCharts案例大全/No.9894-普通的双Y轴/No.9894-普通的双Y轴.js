option = {
    "name": "salesAnalysis",
    "backgroundColor": '#000',
    "title": [{
        "text": "面积（万平方）",
        "left": 20,
        "top": 42,
        "textStyle": {
            "color": "rgba(225, 245, 254, 0.2)",
            "fontSize": 14,
            "fontWeight": "normal"
        }
    }, {
        "subtext": "交易额（万元）",
        "subtextStyle": {
            "color": "rgba(225, 245, 254, 0.2)",
            "fontSize": 14,
            "fontWeight": "normal"
        },
        "right": 0,
        "top": 32
    }],
    "isDouble": true,
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "label": {
                "backgroundColor": "#6a7985"
            },
            "lineStyle": {
                "type": "dashed"
            }
        },
        "padding": 15,
        "backgroundColor": "rgba(0,0,0,0.7)",
        "formatter": {
            "_custom": {
                "type": "function",
                "display": "<span>ƒ</span> formatter(params)"
            }
        }
    },
    "legend": {
        "data": ["接单量", "交易额"],
        "icon": "rect",
        "itemWidth": 14,
        "itemHeight": 14,
        "left": 22,
        "top": -10,
        "textStyle": {
            "color": ["#80DAFF", "#FFD67E"],
            "padding": [0, 5],
            "lineHeight": 28,
            "fontSize": 14,
            "verticalAlign": "middle",
            "itemGap": 10
        },
        "itemGap": 30,
        "selectedMode": false
    },
    "dataset": {
        "dimensions": ["date", "saleAmount", "saleArea"],
        "source": [{
            "id": "4_2019-10-06_0_0",
            "saleArea": "44.46",
            "saleAmount": "101.97",
            "saleDays": null,
            "saleAreaAvgDay": null,
            "saleAmountAvgDay": 0,
            "supCnt": 15,
            "capacity": 3507248,
            "orderCnt": 905,
            "dateType": 4,
            "date": "10.6",
            "regionType": 0,
            "regionCode": "0",
            "regionName": "中国",
            "updateTime": 1570803393000,
            "weekOfYear": "第null周",
            "month": "null月"
        }, {
            "id": "4_2019-10-07_0_0",
            "saleArea": "306.95",
            "saleAmount": "735.43",
            "saleDays": null,
            "saleAreaAvgDay": null,
            "saleAmountAvgDay": 0,
            "supCnt": 15,
            "capacity": 3507248,
            "orderCnt": 6167,
            "dateType": 4,
            "date": "10.7",
            "regionType": 0,
            "regionCode": "0",
            "regionName": "中国",
            "updateTime": 1571040029000,
            "weekOfYear": "第null周",
            "month": "null月"
        }, {
            "id": "4_2019-10-08_0_0",
            "saleArea": "213.73",
            "saleAmount": "513.56",
            "saleDays": null,
            "saleAreaAvgDay": null,
            "saleAmountAvgDay": 0,
            "supCnt": 15,
            "capacity": 3507248,
            "orderCnt": 4436,
            "dateType": 4,
            "date": "10.8",
            "regionType": 0,
            "regionCode": "0",
            "regionName": "中国",
            "updateTime": 1570977742000,
            "weekOfYear": "第null周",
            "month": "null月"
        }, {
            "id": "4_2019-10-09_0_0",
            "saleArea": "289.19",
            "saleAmount": "678.50",
            "saleDays": null,
            "saleAreaAvgDay": null,
            "saleAmountAvgDay": 0,
            "supCnt": 15,
            "capacity": 3507248,
            "orderCnt": 5057,
            "dateType": 4,
            "date": "10.9",
            "regionType": 0,
            "regionCode": "0",
            "regionName": "中国",
            "updateTime": 1570973933000,
            "weekOfYear": "第null周",
            "month": "null月"
        }, {
            "id": "4_2019-10-10_0_0",
            "saleArea": "294.73",
            "saleAmount": "721.23",
            "saleDays": null,
            "saleAreaAvgDay": null,
            "saleAmountAvgDay": 0,
            "supCnt": 15,
            "capacity": 3507248,
            "orderCnt": 5654,
            "dateType": 4,
            "date": "10.10",
            "regionType": 0,
            "regionCode": "0",
            "regionName": "中国",
            "updateTime": 1571045274000,
            "weekOfYear": "第null周",
            "month": "null月"
        }, {
            "id": "4_2019-10-11_0_0",
            "saleArea": "274.68",
            "saleAmount": "638.17",
            "saleDays": null,
            "saleAreaAvgDay": null,
            "saleAmountAvgDay": 0,
            "supCnt": 15,
            "capacity": 3507248,
            "orderCnt": 4832,
            "dateType": 4,
            "date": "10.11",
            "regionType": 0,
            "regionCode": "0",
            "regionName": "中国",
            "updateTime": 1571044083000,
            "weekOfYear": "第null周",
            "month": "null月"
        }, {
            "id": "4_2019-10-12_0_0",
            "saleArea": "330.01",
            "saleAmount": "771.10",
            "saleDays": null,
            "saleAreaAvgDay": null,
            "saleAmountAvgDay": 0,
            "supCnt": 15,
            "capacity": 3507248,
            "orderCnt": 5680,
            "dateType": 4,
            "date": "10.12",
            "regionType": 0,
            "regionCode": "0",
            "regionName": "中国",
            "updateTime": 1571046021000,
            "weekOfYear": "第null周",
            "month": "null月"
        }]
    },
    "grid": {
        "left": "35px",
        "right": "25px",
        "top": "100",
        "bottom": "40",
        "containLabel": true
    },
    "xAxis": {
        "type": "category",
        "axisTick": {
            "alignWithLabel": true,
            "show": false
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#E1F5FE",
                "fontSize": 14
            }
        },
        "axisLine": {
            "lineStyle": {
                "color": "#E1F5FE"
            }
        },
        "offset": 16
    },
    "yAxis": [{
        "type": "value",
        "nameLocation": "end",
        "nameGap": 40,
        "offset": 10,
        "nameRotate": 0,
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "alignWithLabel": true,
            "show": false
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#E1F5FE",
                "fontSize": 14
            }
        },
        "nameTextStyle": {
            "color": "rgba(225, 245, 254, 0.2)",
            "fontSize": 14,
            "padding": [0, 0, 0, 54]
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "color": "rgba(225,245,254, 0.2)"
            }
        },
        "max": 500,
        "interval": 100
    }, {
        "type": "value",
        "nameLocation": "end",
        "nameGap": 40,
        "offset": 10,
        "nameRotate": 0,
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "alignWithLabel": true,
            "show": false
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#E1F5FE",
                "fontSize": 14
            }
        },
        "nameTextStyle": {
            "color": "rgba(225, 245, 254, 0.2)",
            "fontSize": 14
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "color": "rgba(225,245,254, 0.2)"
            }
        },
        "max": 875,
        "interval": 175
    }],
    "series": [{
        "name": "接单量",
        "type": "line",
        "symbol": "circle",
        "yAxisIndex": 0,
        "encode": {
            "x": "date",
            "y": "saleArea"
        }
    }, {
        "name": "交易额",
        "type": "line",
        "yAxisIndex": 1,
        "symbol": "circle",
        "encode": {
            "x": "date",
            "y": "saleAmount"
        }
    }],
    "color": ["#9af7fd", "#ffd67e"]
}