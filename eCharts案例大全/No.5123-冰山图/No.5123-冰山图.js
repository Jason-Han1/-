option = {
    "title": {
        "text": "",
        "left": "center",
        "textStyle": {
            "fontSize": 20,
            "color": "rgb(85,85,85)"
        }
    },
    "dataset": {
        "source": [{
            "zzmmmc": "2017",
            "人数": 6588
        },
        {
            "zzmmmc": "2018",
            "人数": 4343
        },
        {
            "zzmmmc": "2019",
            "人数": 3159
        },
        {
            "zzmmmc": "2020",
            "人数": 6149
        }]
    },
    "grid": {
        "left": "2%",
        "right": "2%",
        "containLabel": true
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        },
        "enterable": true,
        "extraCssText": "max-height:300px; overflow-y:auto;",
    },
    "legend": {
        "show": false,
        "type": "scroll",
        "orient": "horizontal",
        "x": "center",
        "y": "bottom",
        "icon": "rect",
        "textStyle": {
            "color": "rgb(85,85,85)",
            "fontSize": 12
        },
        "data": ["人数"]
    },
    "xAxis": [{
        "inverse": false,
        "name": "",
        "type": "category",
        "position": "bottom",
        "boundaryGap": true,
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#2db2ee",
                "width": 1
            }
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": "rgb(221,221,221)"
            }
        },
        "axisLabel": {
            "show": true,
            "fontSize": 12,
            "color": "rgb(85,85,85)",
            "rotate": 0
        },
        "axisTick": {
            "show": false
        },
        "nameTextStyle": {
            "color": "rgb(85,85,85)",
            "fontSize": 12
        }
    }],
    "yAxis": [{
        "inverse": false,
        "name": "",
        "type": "value",
        "boundaryGap": [0, "20%"],
        "position": "left",
        "axisLabel": {
            "show": true,
            "fontSize": 12,
            "color": "rgb(85,85,85)"
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#2db2ee",
                "width": 1
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#2db2ee"
            }
        },
        "axisTick": {
            "show": false
        },
        "nameTextStyle": {
            "color": "rgb(85,85,85)",
            "fontSize": 12
        }
    }],
    "series": [{
        "type": "pictorialBar",
        "smooth": true,
        "name": "人数",
        "barGap": "0%",
        "symbol": "path://d='M150 0 L75 200 L225 200 Z'",
        "dimensions": ["zzmmmc", "人数"],
        "connectNulls": true,
        "barWidth": "45%",
        "label": {
            "normal": {
                "show": false,
                "textStyle": {
                    "fontSize": 14,
                    "color": "#1890ff"
                },
                "position": "top",
                "formatter": "{@[1]}"
            }
        },
        "itemStyle": {
            "normal": {
                "color": function(params){
                    let list = [
                        {
                    "x": 0,
                    "y": 0,
                    "y2": 0,
                    "x2": 1,
                    "global": false,
                    "colorStops": [{
                        "offset": 0,
                        "color": "#1ABAE1"
                    },
                    {
                        "offset": 0.5,
                        "color": "#1ABAE1"
                    },
                    {
                        "color": "#17D1FF",
                        "offset": 0.5
                    },
                    {
                        "offset": 1,
                        "color": "#17D1FF"
                    }],
                    "type": "linear"
                },
                {
                    "x": 0,
                    "y": 0,
                    "y2": 0,
                    "x2": 1,
                    "global": false,
                    "colorStops": [{
                        "offset": 0,
                        "color": "rgb(28,207,108)"
                    },
                      {
                        "color": "rgb(34,210,113)",
                        "offset": 0.5
                    },
                    {
                        "offset": 0.5,
                        "color": "rgb(79,232,147)"
                    },
                    {
                        "offset": 1,
                        "color": "rgb(79,232,147)"
                    }],
                    "type": "linear"
                },
                   {
                    "x": 0,
                    "y": 0,
                    "y2": 0,
                    "x2": 1,
                    "global": false,
                    "colorStops": [{
                        "offset": 0,
                        "color": "rgb(228,158,22)"
                    },
                      {
                        "color": "rgb(244,180,57)",
                        "offset": 0.5
                    },
                    {
                        "offset": 0.5,
                        "color": "rgb(230,161,26)"
                    },
                    {
                        "offset": 1,
                        "color": "rgb(244,180,57)"
                    }],
                    "type": "linear"
                },
                    {
                    "x": 0,
                    "y": 0,
                    "y2": 0,
                    "x2": 1,
                    "global": false,
                    "colorStops": [{
                        "offset": 0,
                        "color": "rgb(217,86,21)"
                    },
                      {
                        "color": "rgb(247,116,51)",
                        "offset": 0.5
                    },
                    {
                        "offset": 0.5,
                        "color": "rgb(247,116,51)"
                    },
                    {
                        "offset": 1,
                        "color": "rgb(244,180,57)"
                    }],
                    "type": "linear"
                },
            ]
            return list[params.dataIndex];
            }
        }
    }
}]
}