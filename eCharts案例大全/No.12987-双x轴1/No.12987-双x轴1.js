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
        "left": 40,
        "right": 40,
        "bottom": 20,
        "containLabel": true
    },
    "toolbox": {
        "show": false
    },
    "xAxis": [{
        "type": "category",
        "data": ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月", "01月"],
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
        },
        "splitArea": {
            "show": false
        }
    }, {
        "type": "category",

        "position": "bottom",
        "offset": 22,
        "axisLine": {
            "show": false,
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
            "rotate": "0",

            interval: function(index, value) {
                var a = value === '--' ? 0 : 1;
                return a;
            }
        },
        "axisTick": {
            "show": true,
            alignWithLabel: true,
            "length": 22,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#aaa"
            }

        },
        "splitArea": {
            "show": true,
            alignWithLabel: true,
        },
        "data": [{
            "value": "2010年"
        }, {
            "value": "--"
        }, {
            "value": "--"
        }, {
            "value": "--"
        }, {
            "value": "--"
        }, {
            "value": "--"
        }, {
            "value": "--"
        }, {
            "value": "--"
        }, {
            "value": "--"
        }, {
            "value": "--"
        }, {
            "value": "--"
        }, {
            "value": "--"
        }, {
            "value": "2011年"
        }]
    }],
    "yAxis": [{
        "type": "value",
        "name": "id(求和)",
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
            },

        },
        "axisLabel": {
            "show": true,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#555",

        },
        "min": null,
        "max": null
    }],
    "series": [{
        "colId": "colc5a67eve",
        "name": "id(求和)",
        "type": "bar",
        "stack": null,
        "data": [{
            "oldValue": "229878310906.00",
            "value": "229878310906.00",
            "colnptvspl3": "2010年",
            "colwf4gnn19": "01月",
            "name": "2010年"
        }, {
            "oldValue": "208197770230.00",
            "value": "208197770230.00",
            "colnptvspl3": "2010年",
            "colwf4gnn19": "02月",
            "name": "2010年"
        }, {
            "oldValue": "231573050760.00",
            "value": "231573050760.00",
            "colnptvspl3": "2010年",
            "colwf4gnn19": "03月",
            "name": "2010年"
        }, {
            "oldValue": "224861073535.00",
            "value": "224861073535.00",
            "colnptvspl3": "2010年",
            "colwf4gnn19": "04月",
            "name": "2010年"
        }, {
            "oldValue": "229412981675.00",
            "value": "229412981675.00",
            "colnptvspl3": "2010年",
            "colwf4gnn19": "05月",
            "name": "2010年"
        }, {
            "oldValue": "225341088575.00",
            "value": "225341088575.00",
            "colnptvspl3": "2010年",
            "colwf4gnn19": "06月",
            "name": "2010年"
        }, {
            "oldValue": "230856848737.00",
            "value": "230856848737.00",
            "colnptvspl3": "2010年",
            "colwf4gnn19": "07月",
            "name": "2010年"
        }, {
            "oldValue": "231309828073.00",
            "value": "231309828073.00",
            "colnptvspl3": "2010年",
            "colwf4gnn19": "08月",
            "name": "2010年"
        }, {
            "oldValue": "223435154476.00",
            "value": "223435154476.00",
            "colnptvspl3": "2010年",
            "colwf4gnn19": "09月",
            "name": "2010年"
        }, {
            "oldValue": "231974591807.00",
            "value": "231974591807.00",
            "colnptvspl3": "2010年",
            "colwf4gnn19": "10月",
            "name": "2010年"
        }, {
            "oldValue": "223747287757.00",
            "value": "223747287757.00",
            "colnptvspl3": "2010年",
            "colwf4gnn19": "11月",
            "name": "2010年"
        }, {
            "oldValue": "231306937121.00",
            "value": "231306937121.00",
            "colnptvspl3": "2010年",
            "colwf4gnn19": "12月",
            "name": "2010年"
        }, {
            "oldValue": "233827536464.00",
            "value": "233827536464.00",
            "colnptvspl3": "2011年",
            "colwf4gnn19": "01月",
            "name": "2011年"
        }],
        "label": {
            "show": false,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#aaa",
            "position": "top"
        }
    }, {
        "type": "custom",
        "xAxisIndex": 1,
        "z": 0,
        "data": ["", "", "", "", "", "", "", "", "", "", "", "", ""],
        "label": {
            "show": false,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#aaa",
            "position": "top"
        }
    }],
    "legend": {
        "show": false,
        "type": "scroll",
        "orient": "vertical",
        "top": "top",
        "left": "right",
        "textStyle": {
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#aaa"
        }
    },
    "color": ["#99CCFF", "#0099FF", "#666699", "#0099CC", "#99CC33", "#CCFF66", "#003366", "#3399CC"],
    "dataZoom": null
}