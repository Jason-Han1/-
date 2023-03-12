option = {
    "legend": {
        "show": false,
        "right": 10,
        "top": 25
    },
    "xAxis": [{
        "type": "category",
        "nameLocation": "middle",
        "nameGap": 22,
        "name": "",
        "axisTick": {
            "show": false
        },
        "data": ["2019-12", "2020-01", "2020-02", "2020-03"],
        "show": true,
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#e0dede"
            }
        },
        "axisLabel": {
            "show": true,
            "rotate": 45
        }
    }],
    "series": [{
        "name": "Total",
        "type": "line",
        "data": [
            ["2019-12", 36],
            ["2020-01", 1],
            ["2020-02", 8],
            ["2020-03", 71]
        ],
        "itemStyle": {
            "color": "rgb(252,191,100)"
        },
        "lineStyle": {
            "color": "rgb(252,191,100)"
        },
        "areaStyle": {
            "color": {
                "type": "linear",
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "colorStops": [{
                    "offset": 0,
                    "color": "rgb(252,191,100)"
                }, {
                    "offset": 1,
                    "color": "rgba(252,191,100,.3)"
                }],
                "global": false
            }
        }
    }],
    "yAxis": [{
        "type": "value",
        "axisTick": {
            "show": false
        },
        "show": true,
        "axisLabel": {
            "show": true
        },
        "name": "",
        "scale": false,
        "min": null,
        "max": null,
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#e0dede",
                "type": "dashed"
            }
        },
        "axisLine": {
            "show": false
        }
    }, {
        "type": "value",
        "axisTick": {
            "show": false
        },
        "show": true,
        "axisLabel": {
            "show": true
        },
        "name": "",
        "scale": false,
        "min": null,
        "max": null,
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#e0dede",
                "type": "dashed"
            }
        },
        "axisLine": {
            "show": false
        }
    }],
    "tooltip": {
        "trigger": "axis"
    },
    "color": ["#19d4ae", "#5ab1ef", "#fa6e86", "#ffb980", "#0067a6", "#c4b4e4", "#d87a80", "#9cbbff", "#d9d0c7", "#87a997", "#d49ea2", "#5b4947", "#7ba3a8"],
    "grid": {
        "left": 20,
        "right": 20,
        "top": 50,
        "bottom": 20
    },
    "title": {
        "textStyle": {
            "fontWeight": "normal",
            "fontSize": 15
        },
        "top": 10,
        "left": 10,
        "text": "Issue Qty By Month"
    },
    "textStyle": {
        "fontFamily": "Arial",
        "color": "#9d9d9d"
    }
}