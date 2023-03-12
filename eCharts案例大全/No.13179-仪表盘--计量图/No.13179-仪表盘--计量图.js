option = {

    "tooltip": {
        "show": false
    },
    "legend": {
        "left": "right",
        "type": "scroll",
        "top": "top",
        "show": true,
        "orient": "vertical",
        "textStyle": {
            "color": "#333",
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12
        }
    },
    "toolbox": {
        "show": false
    },
    "gird": {},
    "series": [{
        "type": "gauge",
        "center": ["45%", "50%"],
        "radius": "75%",
        "data": [{
            "value": 67,
            "oldValue": 2012459
        }],
        "min": 0,
        "max": 100,
        "splitNumber": 1,
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "axisLabel": {
            "show": true,
            "padding": [0, 0, -30, 0],
            "color": "#333",
            "fontSize": 13
        },
        "axisLine": {
            "lineStyle": {
                "color": [
                    [1, "#e5bf29"]
                ]
            }
        },
        "detail": {
            formatter: function(value) {
                return value.toFixed(2) + "%";
            }
        },
        markLine: {

            lineStyle: {
                color: "#e345e3"
            },
            data: [
                [{
                        name: "444",
                        x: '45%',
                        y: '50%',
                    },
                    {
                        x: "7.870827386906377%",
                        y: "55.26065975587649%"
                    }
                ]
            ]
        }

    }],
    "color": ["#3fb1e3", "#6be6c1", "#626c91", "#a0a7e6", "#FF9966", "#96dee8", "#ec7e7f", "#c4ebad"]
}