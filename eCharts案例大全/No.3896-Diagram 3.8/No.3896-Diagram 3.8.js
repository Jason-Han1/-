option = {
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "right": 10,
        "top": "10%",
        "data": [
            "Energiåtervinning",
            "Materialåtervinning",
            "Blandat avfall",
            "Deponi"
        ]
    },
    "series": [{
        "name": "",
        "type": "pie",
        "right": "15%",
        "radius": ["0", "80%"],
        "label": {
            "formatter": "{b|{d}%}  ",
            "borderRadius": 4,
            "rich": {
                "b": {
                    "fontSize": 16,
                    "lineHeight": 33,
                    "align": "center"
                },
                "per": {
                    "color": "#000",
                    "align": "center"
                }
            }
        },
        "data": [{
                "value": 37,
                "name": "Energiåtervinning",
                "itemStyle": {
                    "color": "#006EBF"
                }
            },
            {
                "value": 62,
                "name": "Materialåtervinning",
                "itemStyle": {
                    "color": "#C9472C"
                }
            },
            {
                "value": 1,
                "name": "Blandat avfall",
                "itemStyle": {
                    "color": "#A5A5A5"
                }
            },
            {
                "value": 0,
                "name": "Deponi",
                "itemStyle": {
                    "color": "#FFC001"
                }
            }
        ]
    }]
}