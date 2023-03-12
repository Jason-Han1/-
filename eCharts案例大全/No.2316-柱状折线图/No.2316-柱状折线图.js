option = {
    "title": [
        {
            "text": "YTD Cleared%",
            "left": "50%",
            "top": "5%"
        },
        {
            "subtext": "('000 RMB)",
            "top": "10%",
            "x": "80%"
        }
    ],
    "legend": {
        "top": "90%"
    },
    "grid": {
        "left": "1%",
        "right": "10%",
        "bottom": "20%",
        "top": "20%",
        "containLabel": true
    },
    "tooltip": {},
    "dataset": {
        "source": [
            [
                "Type",
                "YTD Settled%",
                "YTD Cancelled%",
                "Ending Balance%",
                "Monthly Cleared*"
            ],
            [
                "Jan",
                1,
                0,
                99,
                496
            ],
            [
                "Feb",
                5,
                0,
                95,
                2483
            ],
            [
                "Mar",
                21,
                0,
                79,
                10125
            ],
            [
                "Apr",
                31,
                0,
                69,
                5852
            ],
            [
                "May",
                42,
                0,
                58,
                6610
            ],
            [
                "Jun",
                48,
                0,
                52,
                3952
            ],
            [
                "Jul",
                53,
                0,
                47,
                3003
            ],
            [
                "Aug",
                53,
                0,
                47,
                0
            ],
            [
                "Sep",
                0,
                0,
                0,
                0
            ],
            [
                "Oct",
                0,
                0,
                0,
                0
            ],
            [
                "Nov",
                0,
                0,
                0,
                0
            ],
            [
                "Dec",
                0,
                0,
                0,
                0
            ]
        ]
    },
    "xAxis": {
        "name": "",
        "type": "category"
    },
    "yAxis": [
        {
            "name": "",
            "type": "value"
        },
        {
            "name": "",
            "type": "value",
            "interval": 2400
        }
    ],
    "series": [
        {
            "yAxisIndex": 0,
            "stack": "0",
            "type": "bar",
            "label": {
                "show": true
            },
            "itemStyle": {
                "normal": {
                    "color": "#9cc4e4"
                }
            },
            "emphasis": {
                "shadowBlur": 10,
                "shadowOffsetX": 0,
                "shadowColor": "rgba(0, 0, 0, 0.5)"
            }
        },
        {
            "yAxisIndex": 0,
            "stack": "0",
            "type": "bar",
            "barWidth": 30,
            "label": {
                "show": true
            },
            "itemStyle": {
                "normal": {
                    "color": "#4474c4"
                }
            },
            "emphasis": {
                "shadowBlur": 10,
                "shadowOffsetX": 0,
                "shadowColor": "rgba(0, 0, 0, 0.5)"
            }
        },
        {
            "yAxisIndex": 0,
            "stack": "0",
            "type": "bar",
            "barWidth": 30,
            "label": {
                "show": true
            },
            "itemStyle": {
                "normal": {
                    "color": "#cccccc"
                }
            },
            "emphasis": {
                "shadowBlur": 10,
                "shadowOffsetX": 0,
                "shadowColor": "rgba(0, 0, 0, 0.5)"
            }
        },
        {
            "yAxisIndex": 1,
            "type": "line",
            "itemStyle": {
                "normal": {
                    "color": "orange"
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