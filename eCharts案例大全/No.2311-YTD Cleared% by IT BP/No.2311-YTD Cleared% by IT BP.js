option = {
    "title": [
        {
            "text": "YTD Cleared% by IT BP",
            "left": "30%",
            "top": "5%"
        }
    ],
    "legend": {
        "bottom": "5%",
        "left": "25%"
    },
    "grid": {
        "left": "10%",
        "right": "10%",
        "bottom": "20%",
        "top": "20%",
        "containLabel": true
    },
    "tooltip": {},
    "dataset": {
        "source": [
            [
                "it_bp_desc",
                "YTD Settled%",
                "YTD Cancelled%",
                "Ending Balance%"
            ],
            [
                "Taylor Li",
                98,
                0,
                2
            ],
            [
                "Kevin Guo",
                2,
                0,
                98
            ],
            [
                "Shihong Chen",
                0,
                0,
                100
            ],
            [
                "Tony Tang",
                17,
                0,
                83
            ],
            [
                "Spark Wang",
                65,
                0,
                35
            ],
            [
                "Julia Ju",
                30,
                0,
                70
            ],
            [
                "Raymond Tang",
                63,
                0,
                37
            ],
            [
                "Roger Wu",
                36,
                18,
                46
            ],
            [
                "Annie Ye",
                43,
                0,
                57
            ],
            [
                "Quentin Xu",
                64,
                0,
                36
            ]
        ]
    },
    "xAxis": {
        "name": "",
        "type": "value",
        "axisLine": {
            "show": true,
            "symbol": [
                "none",
                "arrow"
            ],
            "symbolOffset": [
                0,
                5
            ]
        },
        "axisLabel": {
            "show": true,
            "interval": "auto",
            "formatter": "{value} %"
        }
    },
    "yAxis": {
        "name": "",
        "type": "category"
    },
    "series": [
        {
            "stack": "0",
            "type": "bar",
            "itemStyle": {
                "normal": {
                    "color": "#acd4fc"
                }
            },
            "emphasis": {
                "shadowBlur": 10,
                "shadowOffsetX": 0,
                "shadowColor": "rgba(0, 0, 0, 0.5)"
            }
        },
        {
            "stack": "0",
            "type": "bar",
            "itemStyle": {
                "normal": {
                    "color": "#0474c4"
                }
            },
            "emphasis": {
                "shadowBlur": 10,
                "shadowOffsetX": 0,
                "shadowColor": "rgba(0, 0, 0, 0.5)"
            }
        },
        {
            "stack": "0",
            "type": "bar",
            "itemStyle": {
                "normal": {
                    "color": "#9c9c9c"
                }
            },
            "emphasis": {
                "shadowBlur": 10,
                "shadowOffsetX": 0,
                "shadowColor": "rgba(0, 0, 0, 0.5)"
            }
        }
    ]
}