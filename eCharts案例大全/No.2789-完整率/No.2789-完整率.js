option = {
    "title": {
            "text": "完整率",
            "textStyle": {
                "color": "#606266",
                "fontWeight": "normal",
                "fontSize": 14
            },
            "bottom": "18%",
            "left": "center"
        },
        "series": [{
            "type": "gauge",
            "progress": {
                "show": true,
                "width": 8,
                "itemStyle": {
                    "color": "#FBB61B"
                }

            },
            "axisLine": {
                "lineStyle": {
                    "width": 8
                }
            },
            "axisTick": {
                "show": false
            },
            "splitLine": {
                "length": 10,
                "lineStyle": {
                    "width": 1,
                    "color": "#999"
                }
            },
            "axisLabel": {
                "distance": 10,
                "color": "#999",
                "fontSize": 10
            },
            "pointer": {
                "itemStyle": {
                    "color": "#FBB61B"
                }
            },
            "anchor": {
                "show": true,
                "showAbove": true,
                "size": 10,
                "itemStyle": {
                    "borderWidth": 2,
                    "itemStyle": {
                        "color": "#FBB61B",
                        "borderColor": "#FBB61B"
                    }
                }
            },
            "detail": {
                "valueAnimation": true,
                "fontSize": 18,
                "formatter": "{value} %",
                "color": "#FBB61B",
                "offsetCenter": [0, "30%"]
            },
            "data": [{
                "value": "50"
            }]
        }]
};
