var name = ["户籍", "非户籍"];
var option = {
    backgroundColor: "#000",
    tooltip: {
        trigger: 'item',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        },
        textStyle: {
            fontSize: 24
        }
    },
    "legend": {
        "left": "center",
        "top": "5%",
        "show": true,
        "type": "scroll",
        "data": name,
        "itemWidth": 20,
        "itemHeight": 15,
        "itemGap": 30,
        "textStyle": {
            "fontSize": 20,
            "color": "#fff",
            "fontFamily": "Microsoft YaHei"
        },
    },
    "grid": [{
        "left": "10%",
        "right": "53%",
        "top": 60,
        "bottom": "30"
    }, {
        "left": "47%",
        "right": "10%",
        "top": 60,
        "bottom": "30"
    }, {
        "left": "0%",
        "right": "0%",
        "top": 0,
        "bottom": "0"
    }],
    "xAxis": [{
        "type": "value",
        "gridIndex": 0,
        "inverse": true,
        "axisLine": {
            "show": false,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "red"
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
                "color": "#fff"
            }
        },
        "axisLabel": {
            "show": false,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 20,
            "color": "fff",
            "interval": "auto",
            "rotate": "0",
        },
        "data": [],
    }, {
        "type": "value",
        "gridIndex": 1,
        "inverse": false,
        "axisLine": {
            "show": false,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "red"
            }
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "type": "dotted",
                "color": "red",
                "width": 1
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "red"
            }
        },
        "axisLabel": {
            "show": false,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#fff",
            "interval": "auto",
            "rotate": "0"
        },
        "data": [],
    }, {
        "type": "value",
        "gridIndex": 2,
        "inverse": false,
        "axisLine": { //只有这个
            "show": false,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "red"
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
                "color": "red"
            }
        },
        "axisLabel": {
            "show": false,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "red",
            "interval": "auto",
            "rotate": "0"
        },
        "data": [],
    }],
    "yAxis": [{
        "type": "category",
        "axisLine": {
            "show": false,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "red"
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
            "fontSize": 16,
            "color": "#FFA880",
            "interval": "auto"
        },
        // "data": ['20岁以下', '20-30岁', '30-40岁', '40-50岁', '50-60岁', '60岁以上'],
        "data": [],
        "position": "right"
    }, {
        "type": "category",
        "gridIndex": 1,
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
            "color": "#fff",
            "interval": "auto"
        },
        "data": [],

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
            "fontSize": 20,
            "color": "#777575",
            "interval": "auto"
        }
    }],
    "series": [{
        "colId": "col402utokg",
        "name": name[0],
        "type": "bar",
        "data": [423, 556, 456, 418, 566, 122],
        barWidth: 15,
        color: '#00f3df',
        "xAxisIndex": 0,
        "yAxisIndex": 0,
        itemStyle: {
            normal: {
                barBorderRadius: [10, 10, 10, 10],
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(43,163,205,1)'
                    },
                    {
                        offset: 1,
                        color: "rgba(43,163,205,0)"
                    }
                ])
            }
        },
        "label": {
            "position": "left",
            "fontFamily": "Microsoft YaHei",
            "show": true,
            "fontSize": 20,
            "color": "#fff"
        }
    }, {
        "colId": "col3kkgr6h9",
        "name": name[1],
        "type": "bar",
        "data": [323, 556, 456, 408, 566, 456],
        barWidth: 15,
        color: '#01b3e0',
        "xAxisIndex": 1,
        "yAxisIndex": 1,
        itemStyle: {
            normal: {
                barBorderRadius: [10, 10, 10, 10],
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: "rgba(140,113,246,1)"
                    },
                    {
                        offset: 1,
                        color: "rgba(140,113,246,0)"
                    }
                ])
            }
        },
        "label": {
            "position": "right",
            "fontFamily": "Microsoft YaHei",
            "show": true,
            "fontSize": 20,
            "color": "#fff",

        }
    }],
}