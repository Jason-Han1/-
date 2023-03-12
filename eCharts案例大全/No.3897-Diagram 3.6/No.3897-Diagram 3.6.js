option = {
    "title": {
        "text": "",
        "left": "center"
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    "legend": {
        "data": [
            "Källsorterat",
            "Blandat",
            "Kravnivål"
        ],
        "bottom": "0"
    },
    "grid": {
        "top": "10%",
        "left": "5%",
        "right": "12%",
        "bottom": "10%",
        "containLabel": true
    },
    "xAxis": [{
        "type": "category",
        "data": [
            "Bobergsskolan (SISAB)",
            "Hjorthagshallen\n (Fastighetskontoret)",
            "CA Fastigheter (Hus \n20)",
            "Vectura förskola"
        ]
    }],
    "yAxis": [{
        "type": "value",
        "boundaryGap": [
            "0%",
            "0%"
        ],
        "splitNumber": 20,
        "interval": 20
    }],
    "series": [{
            "name": "Källsorterat",
            "type": "bar",
            "stack": "2",
            "data": [
                60.28, 48.05, 82.45, 135
            ],
            "barWidth": "25%",
            "itemStyle": {
                "normal": {
                    "color": "#006ebf"
                }
            }
        },
        {
            "name": "Blandat",
            "type": "bar",
            "stack": "2",
            "data": [
                8.51, 11.53, 7.95, 0.6
            ],
            "barWidth": "25%",
            "itemStyle": {
                "normal": {
                    "color": "#c9472d"
                }
            }
        },

        {

            "name": "Kravnivål",
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
                    "yAxis": 20,
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
}