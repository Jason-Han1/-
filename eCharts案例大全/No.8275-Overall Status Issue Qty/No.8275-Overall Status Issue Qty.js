var colorMap = {
    yellow: 'rgb(252,191,100)',
    red: 'rgb(243,118,23)',
    green: 'rgb(109,198,114)',
    blue: 'rgb(157,195,230)'
}
option = {
    "legend": {
        "show": false,
        "right": 10,
        "top": 25
    },
    "yAxis": [{
        "type": "category",
        "name": "",
        "nameLocation": "middle",
        "nameGap": 22,
        "data": ["YELLOW", "RED", "GREEN"],
        axisLabel: {
            show: true,
            color: function(value, index) {
                return colorMap[value.toLowerCase()]
            }
        },
        "show": true,
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    }],
    "series": [{
        "name": "Total",
        "type": "bar",
        "data": [6, 76, 17],
        "xAxisIndex": "0",
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorMap[params.name.toLowerCase()]
                },
                barBorderRadius: 10
            }
        },
        "label": {
            "show": true,
            "position": "inside",
            "color": "#fff"
        },
        "barMaxWidth": 25
    }],
    "xAxis": [{
        "type": "value",
        "axisTick": {
            "show": false
        },
        "show": true,
        "axisLabel": {
            "show": false,
            "rotate": 45
        },
        "name": "",
        "scale": false,
        "min": null,
        "max": null,
        "splitLine": {
            "show": false
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
            "show": false,
            "rotate": 45
        },
        "name": "",
        "scale": false,
        "min": null,
        "max": null,
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        }
    }],
    "tooltip": {
        "trigger": "axis",
        "confine": true
    },
    "grid": {
        "top": "20%",
        "bottom": "20%"
    },
    "title": {
        "textStyle": {
            "fontWeight": "normal",
            "fontSize": 15
        },
        "top": 10,
        "left": 10,
        "text": "Overall Status Issue Qty"
    },
    "textStyle": {
        "fontFamily": "Arial",
        "color": "#9d9d9d"
    }
}