option = {
    "legend": {
        "show": false
    },
    "tooltip": {
        "trigger": "item",
        "confine": true,
        "alwaysShowContent": true
    },
    "xAxis": [{
        "type": "category",
        "show": true,
        "data": ["FY1920"],
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
        },
        "axisLabel": {
            "show": true,
            "rotate": 45
        }
    }],
    "yAxis": {
        "type": "value",
        "show": true,
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": true
        },
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
    },
    "series": [{
        "type": "scatter",
        "data": [{
            "value": ["FY1920", 3.4914, 3.4914],
            "symbolSize": 50
        }],
        "name": "FY1920",
        "itemStyle": {
            "color": "rgb(157,195,230)"
        },
        "barMaxWidth": 20
    }],
    "color": ["#19d4ae", "#5ab1ef", "#fa6e86", "#ffb980", "#0067a6", "#c4b4e4", "#d87a80", "#9cbbff", "#d9d0c7", "#87a997", "#d49ea2", "#5b4947", "#7ba3a8"],
    "grid": {
        
    },
    "title": {
        "textStyle": {
            "fontWeight": "normal",
            "fontSize": 15
        },
        "top": 10,
        "left": 10,
        "text": "Average System Recovery Cycle Time By FY"
    },
    "textStyle": {
        "fontFamily": "Arial",
        "color": "#9d9d9d"
    }
}