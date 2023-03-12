option ={
    "title": {
        "show": false
    },
    "tooltip": {
        "confine": true,
        "transitionDuration": 0.5,
        "enterable": true,
        "extraCssText": "padding: 10px 15px;max-height:256px;overflow: auto;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.16) 0px 3px 10px"
    },
    "legend": {
        "textStyle": {
            "fontSize": 12,
            "color": "#333",
            "fontFamily": "Microsoft YaHei"
        },
        "left": "right",
        "top": "top",
        "show": true,
        "orient": "vertical",
        "type": "scroll",
        "data": ["上传总数", "下载总数"]
    },
    "toolbox": {
        "show": false
    },
    "xAxis": [{
        "type": "value",
        "gridIndex": 0,
        "inverse": true,
        "axisLine": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#333"
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
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#333",
            "interval": "auto",
            "rotate": "0"
        },
        "data": ["02日", "04日", "07日", "15日", "17日", "18日", "21日", "24日", "26日", "30日"],
        "max": 800
    }, {
        "type": "value",
        "gridIndex": 1,
        "inverse": false,
        "axisLine": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#333"
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
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#333",
            "interval": "auto",
            "rotate": "0"
        },
        "data": [],
        "max": 800
    }, {
        "type": "value",
        "gridIndex": 2,
        "inverse": false,
        "axisLine": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#333"
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
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#333",
            "interval": "auto",
            "rotate": "0"
        },
        "data": [],
        "max": 800
    }],
    "yAxis": [{
        "type": "category",
        "gridIndex": 0,
        "axisLine": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#888888"
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
            "show": false,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#888888"
            }
        },
        "axisLabel": {
            "show": true,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#777575",
            "interval": "auto"
        },
        "data": ["02日", "04日", "07日", "15日", "17日", "18日", "21日", "24日", "26日", "30日"],
        "position": "right"
    }, {
        "type": "category",
        "gridIndex": 1,
        "axisLine": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#888888"
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
            "show": false,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#888888"
            }
        },
        "axisLabel": {
            "show": false,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#777575",
            "interval": "auto"
        },
          "data": ["02日", "04日", "07日", "15日", "17日", "18日", "21日", "24日", "26日", "30日"],
        
    }, {
        "type": "category",
        "gridIndex": 2,
        "axisLine": {
            "show": false,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#888888"
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
                "color": "#888888"
            }
        },
        "axisLabel": {
            "show": true,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#777575",
            "interval": "auto"
        }
    }],
    "grid": [{
        "left": "20",
        "right": "52%",
        "top": 60,
        "bottom": "30"
    }, {
        "left": "52%",
        "right": "8%",
        "top": 60,
        "bottom": "30"
    }, {
        "left": "8%",
        "right": "8%",
        "top": 60,
        "bottom": "30"
    }],
    "series": [{
        "colId": "col402utokg",
        "name": "上传总数",
        "type": "bar",
        "stack": null,
        "data": [{
            "oldValue": null,
            "value": 0,
            "colb1a4nsv3": "02日"
        }, {
            "oldValue": "6",
            "value": "6",
            "colb1a4nsv3": "04日"
        }, {
            "oldValue": null,
            "value": 0,
            "colb1a4nsv3": "07日"
        }, {
            "oldValue": null,
            "value": 0,
            "colb1a4nsv3": "15日"
        }, {
            "oldValue": "6",
            "value": "6",
            "colb1a4nsv3": "17日"
        }, {
            "oldValue": "711",
            "value": "711",
            "colb1a4nsv3": "18日"
        }, {
            "oldValue": null,
            "value": 0,
            "colb1a4nsv3": "21日"
        }, {
            "oldValue": null,
            "value": 0,
            "colb1a4nsv3": "24日"
        }, {
            "oldValue": "6",
            "value": "6",
            "colb1a4nsv3": "26日"
        }, {
            "oldValue": "111",
            "value": "111",
            "colb1a4nsv3": "30日"
        }],
        "xAxisIndex": 0,
        "yAxisIndex": 0,
        "label": {
            "position": "inside",
            "fontFamily": "Microsoft YaHei",
            "show": false,
            "fontSize": 12,
            "color": "#333"
        }
    }, {
        "colId": "col3kkgr6h9",
        "name": "下载总数",
        "type": "bar",
        "stack": null,
        "data": [{
            "oldValue": null,
            "value": 0,
            "colb1a4nsv3": "02日"
        }, {
            "oldValue": "7.7",
            "value": "7.7",
            "colb1a4nsv3": "04日"
        }, {
            "oldValue": null,
            "value": 0,
            "colb1a4nsv3": "07日"
        }, {
            "oldValue": "7.7",
            "value": "7.7",
            "colb1a4nsv3": "15日"
        }, {
            "oldValue": "7.7",
            "value": "7.7",
            "colb1a4nsv3": "17日"
        }, {
            "oldValue": "760.2",
            "value": "760.2",
            "colb1a4nsv3": "18日"
        }, {
            "oldValue": null,
            "value": 0,
            "colb1a4nsv3": "21日"
        }, {
            "oldValue": null,
            "value": 0,
            "colb1a4nsv3": "24日"
        }, {
            "oldValue": "7.7",
            "value": "7.7",
            "colb1a4nsv3": "26日"
        }, {
            "oldValue": "229.7",
            "value": "229.7",
            "colb1a4nsv3": "30日"
        }],
        "xAxisIndex": 1,
        "yAxisIndex": 1,
        "label": {
            "position": "inside",
            "fontFamily": "Microsoft YaHei",
            "show": false,
            "fontSize": 12,
            "color": "#333"
        }
    }],
    "color": ["#3fb1e3", "#6be6c1", "#626c91", "#a0a7e6", "#FF9966", "#96dee8", "#ec7e7f", "#c4ebad"]
}