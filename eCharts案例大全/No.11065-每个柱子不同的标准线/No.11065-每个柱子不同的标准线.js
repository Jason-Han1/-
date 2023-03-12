option = {
    backgroundColor: '#0b2747',
    "tooltip": {
        "trigger": "item",
        "axisPointer": {
            "type": "shadow"
        }
    },
    "grid": {
        "left": "5%",
        "right": "5%",
        "bottom": "15%",
        "top": "10%"
    },
    "xAxis": [{
        "type": "category",
        "data": ["2019", "去年同期"],
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "color": "#fff",
            "fontSize": 14
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#5e99c6"
            }
        }
    }],
    "yAxis": [{
        "type": "value",
        "max": 100,
        "axisLabel": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "splitArea": {
            "show": false
        }
    }],
    "series": [{
        "type": "bar",
        "barWidth": "40",
        "label": {
            "normal": {
                "show": true,
                "position": "top",
                "color": "#fff",
                "formatter": "{c}"
            }
        },
        "data": [{
            "value": 100,
            "itemStyle": {
                "normal": {
                    "color": "#4478FC",
                    "barBorderRadius": [5, 5, 0, 0]
                }
            }
        }, {
            "value": 60,
            "itemStyle": {
                "normal": {
                    "color": "#3ecfc1",
                    "barBorderRadius": [5, 5, 0, 0]
                }
            }
        }]
    }, {
        "type": "line",
        "data": [74, 50],
        //symbol: 'rect',// 实线用rect  虚线用图片
        //需要虚线可以用图片
        "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAACCAYAAADPV1tRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUY2QTQ5QUE3QUNDMTFFOUI4MEU4MkU1MDRFNjYyNDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUY2QTQ5QUI3QUNDMTFFOUI4MEU4MkU1MDRFNjYyNDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RjZBNDlBODdBQ0MxMUU5QjgwRTgyRTUwNEU2NjI0MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RjZBNDlBOTdBQ0MxMUU5QjgwRTgyRTUwNEU2NjI0MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlleP4EAAAAtSURBVHjaYvxvzPCfAR2c+c8IZ5sw0l+egYERiU19eUrtR9LPxDAKKAIAAQYAjDkXAf+k4YMAAAAASUVORK5CYII=",
        "symbolSize": [60, 1],
        "symbolOffset": [10, 0],
        "itemStyle": {
            "color": "#ffd61a"
        },
        "lineStyle": {
            "width": 0
        },
        "label": {
            "normal": {
                "show": true,
                "position": "top",
                "formatter": "{c}",
                "padding": [8, 20],
                "offset": [40, 20]
            }
        }
    }]
}