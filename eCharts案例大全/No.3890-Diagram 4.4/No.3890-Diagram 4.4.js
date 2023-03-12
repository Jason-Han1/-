option = {
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    "grid": {
        "top": "10%",
        "left": "3%",
        "right": "12%",
        "bottom": "10%",
        "containLabel": true
    },
    "legend": {
        "data": ["Kravnivå"],
        "bottom": "5%",
        "left": "5%"
    },
    "yAxis": {
        "type": "value",
        "boundaryGap": [0, 0.01],
        "max": 0.8,
        "interval": 0.2,
    },
    "xAxis": {
        "type": "category",
        "data": [
            "Hjorthagshallen\n(Fastighetskontoret)",
            "Bobergsskolan (SISAB)",
            "Förskolan (Vectura)"
        ]
    },
    "series": [{
            "name": "2017",
            "type": "bar",
            "barWidth": "25%",
            "data": [0.53, 0.59, 0.66],
            "itemStyle": {
                "color": "#00837c"
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
                    "yAxis": 0.6,
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
    ]
};