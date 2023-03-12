option = {
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
        },
    },
    "legend": {
        "data": ["Solel", "Kravnivå solfångare", "Kravnivå solel"],
        "bottom": "0",
    },
    "grid": {
        "top": "10%",
        "left": "3%",
        "right": "3%",
        "bottom": "10%",
        "containLabel": true,
    },
    "yAxis": {
        "type": "value",
        "boundaryGap": [0, 0.01],
        "max": 25,
        "interval": 5
    },
    "xAxis": {
        "type": "category",
        "data": [
            "Tobin Properties",
            "Stockholmshem",
            "Einar Mattsson 1",
            "Besqab",
            "Riksbyggen- projekterat",
            "HSB",
            "Einar Mattson 2-projekterat"
        ],
        "axisLabel": {
            "rotate": 45,
        },
    },
    "series": [{
            "name": "Solel",
            "type": "bar",
            "stack": "a",
            "barWidth": "25%",
            "data": [0.73, 23.4, 0.74, 2, {
                "value": 2,
                "itemStyle": {
                    "color": "rgb(84,130,53)"
                }
            }, 2.1, {
                "value": 2,
                "itemStyle": {
                    "color": "rgb(84,130,53)"
                }
            }],
            "itemStyle": {
                "color": "#5B9BD5",
            },
        },
        {

            "name": "Kravnivå solfångare",
            "type": "line",
            "data": [],
            "symbol": "arrow",
            "itemStyle": {
                "normal": {
                    "color": "#006ebf"
                }
            },
            "markLine": {
                "data": [{
                    "yAxis": 6,
                    "lineStyle": {
                        "normal": {
                            "color": "#006ebf",
                            "width": 2,
                            "type": "solid"
                        }
                    }
                }]
            }
        },
        {

            "name": "Kravnivå solel",
            "type": "line",
            "data": [],
            "symbol": "arrow",
            "itemStyle": {
                "normal": {
                    "color": "#ED7D31"
                }
            },
            "markLine": {
                "data": [{
                    "yAxis": 2,
                    "lineStyle": {
                        "normal": {
                            "color": "#ED7D31",
                            "width": 2,
                            "type": "solid"
                        }
                    }
                }]
            }
        }
    ],
};