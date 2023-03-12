option = {
    "legend": {
        "show": false,
        "right": 10,
        "top": 25
    },
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
    "series": [{
        "name": "Total",
        "type": "bar",
        "data": [22, 2, 6, 1, 1, 1, 5, 2, 2, 1, 1, 8, 1, 2, 1, 1, 1, 1, 1, 4, 1, 49, 1, 1],
        "yAxisIndex": "0",
        "itemStyle": {
            "normal": {
                "opacity": 1,
                barBorderRadius:[10,10,0,0]
            }
        },
        "barMaxWidth": 20
    }],
    "xAxis": [{
        "type": "category",
        "name": "",
        "nameLocation": "middle",
        "nameGap": 22,
        "data": ["AC ADAPTERS", "ANTENNA", "BACKPLANE", "BEZELS/DOORS", "BLUE TOOTH ADAPTERS", "CABLES EXTERNAL", "CABLES INTERNAL", "CAMERAS", "CHASSIS AND FRAMES", "DOCKING STATIONS", "DRIVES EXTERNAL", "HEAT SINKS", "HOT SWAP HARD DRIVE", "KEYBOARDS EXTERNAL", "KEYBOARDS INTERNAL", "KYB MICE", "LABOR", "LCD PANELS", "LCD PARTS", "MEMORY", "MONITORS EXTERNAL", "POWER SUPPLIES INTERNAL", "SOLID STATE DRIVES", "SYSTEM BOARDS"],
        "axisLabel": {
            "show": true,
            "rotate": 45,
            "fontSize": 10
        },
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
        "axisTick": {
            "show": false
        }
    }],
    "tooltip": {
        "trigger": "axis",
        "confine": true
    },
    "color": ["#19d4ae", "#5ab1ef", "#fa6e86", "#ffb980", "#0067a6", "#c4b4e4", "#d87a80", "#9cbbff", "#d9d0c7", "#87a997", "#d49ea2", "#5b4947", "#7ba3a8"],
    "grid": {
        bottom:100
    },
    "title": {
        "textStyle": {
            "fontWeight": "normal",
            "fontSize": 15
        },
        "top": 10,
        "left": 10,
        "text": "Issue Qty By Commodity"
    },
    "textStyle": {
        "fontFamily": "Arial",
        "color": "#9d9d9d"
    }
}