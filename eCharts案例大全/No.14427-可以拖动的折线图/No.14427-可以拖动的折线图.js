option = {
    "tooltip": {
        "show": false
    },
    "legend": {
        "left": "left",
        "data": []
    },
    "xAxis": {
        "type": "category",
        "name": "x",
        "splitLine": {
            "show": false
        },
        "data": ["2016", "2017", "2017", "2017", "2018", "2018", "2019", "2019", "2020", "2020", "2021", "2021", "2022"],
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#979797"
            }
        }
    },
    "grid": {
        "left": "-1%",
        "right": "3%",
        "bottom": "10%",
        "top": 10,
        "containLabel": true
    },
    "dataZoom": [{
        "start": 0,
        "end": 38.46153846153847,
        "show": false
    }, {
        "type": "inside",
        "zoomLock": false
    }],
    "yAxis": {
        "min": 1,
        "max": 20,
        "type": "log",
        "name": "y",
        "show": false
    },
    "visualMap": {
        "show": false,
        "dimension": 0,
        "seriesIndex": 0,
        "pieces": [{
            "lte": 2,
            "color": "red"
        }, {
            "gt": 2,
            "lte": 13,
            "color": "orange"
        }]
    },
    "series": [{
        "type": "line",
        "data": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        "label": {
            "normal": {
                "show": true,
                "position": "top",
                "fontSize": 12,
                "rich": {
                    "valueAlready": {
                        "color": "red"
                    },
                    "valueNotreach": {
                        "color": "green"
                    }
                }
            }
        },
        "lineStyle": {
            "normal": {
                "width": 1
            }
        },
        "itemStyle": {
            "normal": {
                "lineStyle": {}
            }
        }
    }]
}