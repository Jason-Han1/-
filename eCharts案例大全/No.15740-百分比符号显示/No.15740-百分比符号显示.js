
option = {
    "color": ["#EE0000", "#45a7ca"],
    "calculable": true,
    "title": {
        "text": "",
        "subtext": "",
        "left": "left"
    },
    "toolbox": {
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "保存为图片",
                "type": "png",
                "lang": ["点击保存"]
            },
            "dataView": {
                "show": true,
                "title": "数据视图",
                "readOnly": false,
                "lang": ["数据视图", "关闭", "刷新"]
            },
            "magicType": {
                "show": true,
                "title": {
                    "bar": "柱形图切换",
                    "stack": "堆积",
                    "tiled": "平铺",
                    "line": "折线图切换"
                },
                "type": ["line", "bar"]
            },
            "restore": {
                "show": true,
                "title": "还原"
            }
        },
        "show": true,
        "left": "82%"
    },
    "tooltip": {
        "trigger": "axis",
        "formatter": function(params) {
            var res = params[1].name;
            for (var i = 0, l = params.length; i < l; i++) {
                if (params[i].value != undefined && params[i].value != "-") {
                    res += '<br/><font color="' + params[i].color + '" size="4">●</font>' + params[i].seriesName + ' : ' + params[i].value + "%"
                } else {
                    res += '<br/><font color="red" size="4">●</font>面包 :- '
                }
            }
            return res
        }
    },
    "legend": {
        "data": ["面包", "牛奶"]
    },
    "dataZoom": [{
        "type": "slider",
        "start": 0,
        "end": 100,
        "show": true,
        "y": "90%"
    }],
    "grid": {
        "left": "10%",
        "right": "10%",
        "bottom": "15%"
    },
    "xAxis": [{
        "type": "category",
        "data": ["2016-01", "2016-02", "2016-03", "2016-04", "2016-05", "2016-06", "2016-07", "2016-08", "2016-09", "2016-10", "2016-11"]
    }],
    "yAxis": [{
        "type": "value",
        "name": "需求增长（%）",
        "axisLabel": {
            "formatter": "{value} %"
        },
        "splitArea": {
            "show": true
        },
        "scale": true
    }],
    "series": [{
        "barWidth": 50,
        "name": "面包",
        "type": "bar",
        "label": {
            "normal": {
                "show": true,
                "formatter": (function() {
                    return ' {c}%';
                })(),
                "position": "top"
            }
        },
        "data": ["-", 0.05, 0.71, -0.75, 0.05, 0.05, 0.01, 0.02]
    }, {
        "barWidth": 50,
        "name": "牛奶",
        "type": "bar",
        "label": {
            "normal": {
                "show": true,
                "formatter": (function() {
                    return ' {c}%';
                })(),
                "position": "top"
            }
        },
        "data": [-21.04, -2.33, 11.84, -1.91, 0.41, -0.49, 1.59, 3.87, -2.24, 2.55, 1.63]
    }]
};