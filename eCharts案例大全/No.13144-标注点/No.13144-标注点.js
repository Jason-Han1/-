option = {
    "title": {
        "show": false
    },
    "tooltip": {
        "trigger": "axis",
        "confine": true,
        "transitionDuration": 0.5,
        "enterable": true,
        "extraCssText": "padding: 10px 15px;max-height:256px;overflow: auto;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.16) 0px 3px 10px"
    },
    "grid": {
        "top": 60,
        "left": "5%",
        "right": "3%",
        "bottom": 40,
        "containLabel": true
    },
    "toolbox": {
        "show": false
    },
    "xAxis": [{
        "type": "category",
        "data": ["2014年", "2015年", "2016年"],
        "axisLine": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#aaa"
            }
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "type": "dotted",
                "color": "#ccc",
                "width": 1
            }
        },
        "axisTick": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#aaa"
            }
        },
        "axisLabel": {
            "show": true,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#555",
            "interval": "auto",
            "rotate": "0"
        }
    }],
    "yAxis": [{
        "type": "value",
        "name": "num(求和)",
        "nameLocation": "center",
        "nameGap": 40,
        "axisLine": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#aaa"
            }
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "type": "dotted",
                "color": "#ccc",
                "width": 1
            }
        },
        "axisTick": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#aaa"
            }
        },
        "axisLabel": {
            "show": true,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#555",
            "interval": "auto"
        },
        "min": null,
        "max": null
    }],
    "series": [{
        "colId": "colmr2xtumw",
        "name": "num(求和)",
        "type": "bar",
        "stack": null,
        "data": [{
            "oldValue": "111",
            "value": "111",
            "coljfj26rjc": "2014年"
        }, {
            "oldValue": "711",
            "value": "711",
            "coljfj26rjc": "2015年"
        }, {
            "oldValue": "18",
            "value": "18",
            "coljfj26rjc": "2016年"
        }],
        "label": {
            "show": 0,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#aaa",
            "position": "top"
        },
        "markPoint": {
            "data": [{
                "name": "第1种",
                "value": "第1种",
                "type": "max"
            }, {
                "value": "第2种",
                xAxis: "min",
                yAxis: "max"
            }, {
                "value": "第3种",
                coord: [0, 200]
            }, {
                "value": "第4种",
                coord: [],
                x: 100,
                y: 200
            }]
        }
    }, {
        "colId": "colaiaix1k9",
        "name": "dou(求和)",
        "type": "bar",
        "stack": null,
        "data": [{
            "oldValue": "222.0",
            "value": "222.0",
            "coljfj26rjc": "2014年"
        }, {
            "oldValue": "760.2",
            "value": "760.2",
            "coljfj26rjc": "2015年"
        }, {
            "oldValue": "38.5",
            "value": "38.5",
            "coljfj26rjc": "2016年"
        }],
        "label": {
            "show": false,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#aaa",
            "position": "top"
        }
    }],
    "legend": {
        "show": true,
        "type": "scroll",
        "orient": "vertical",
        "top": "top",
        "left": "right",
        "textStyle": {
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#aaa"
        },
        "data": ["num(求和)", "dou(求和)"]
    },
    "dataZoom": null,
    "color": ["#99CCFF", "#0099FF", "#666699", "#0099CC", "#99CC33", "#CCFF66", "#003366", "#3399CC"]
}