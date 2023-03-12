option = {
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
        },
    },
    "legend": {
        "data": ["Projekterad energianvändning", "Uppmätt energianvändning", "Kravnivå", "BBR"],
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
        "max": 100,
        "interval": 20,
        "name": "Energianvändning [kWh/m2]",
        "nameRotate": 90,
        "nameLocation": "center",
        "nameGap": "40",
        "nameTextStyle": {
            "color": "#000",
            "fontWeight": "700",
            "fontSize": 16
        }
    },
    "xAxis": {
        "type": "category",
        "data": [
            "Tobin Properties",
            "Stockholmshem",
            "Besqab",
            "Åke Sundvalls",
            "Oscar Properties",
            "Einar Mattsson 1",
            "Riksbyggen",
            "HSB",
            "Einar Mattson 2"
        ],
        "axisLabel": {
            rotate: 45,
        },
    },
    "series": [{
            "name": "Projekterad energianvändning",
            "type": "bar",
            "barWidth": "25%",
            "data": [36.61, 27.71, 56.5, 50.60, 51.68, 55, 53.10, 49.9, 51.80],
            "itemStyle": {
                "color": "#5B9BD5",
            },
        },
        {
            "name": "Uppmätt energianvändning",
            "type": "bar",
            "barWidth": "25%",
            "data": [55.4, 31.8, 65, 0, 0, 92, 0, 75, 0],
            "itemStyle": {
                "color": "#ED7D31",
            },
        },
        {

            "name": "BBR",
            "type": "line",
            "data": [],
            "symbol": "arrow",
            "itemStyle": {
                "normal": {
                    "color": "#A5A5A5"
                }
            },
            "markLine": {
                "data": [{
                    "yAxis": 90,
                    "lineStyle": {
                        "normal": {
                            "color": "#A5A5A5",
                            "width": 2,
                            "type": "solid"
                        }
                    }
                }]
            }
        },
        {

            "name": "Kravnivå",
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
                    "yAxis": 55,
                    "lineStyle": {
                        "normal": {
                            "color": "#006ebf",
                            "width": 2,
                            "type": "solid"
                        }
                    }
                }]
            }
        }
    ],
};