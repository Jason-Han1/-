option = {
    "color": [
        "#f56e64",
        "#2c81ca",
        "#ffcb2e",
        "#bf4cd4",
        "#6ec7e7",
        "#f3a39e",
        "#fae29a",
        "#d5a3e0"
    ],
    "title": {
        "text": "近一年总收益与各类资产收益按月变化",
        "textStyle": {
            "fontSize": 12,
            "fontWeight": "normal",
            "lineHeight": 30
        }
    },
    "tooltip": {
        "trigger": "axis"
    },
    "legend": {
        "bottom": 28,
        "left": "center",
        "data": [
            "权益多头",
            "市场中性",
            "管理期货",
            "套利策略",
            "固收策略",
            "组合策略",
            "其他"
        ]
    },
    "dataZoom": {
        "bottom": 0,
        "height": 20
    },
    "grid": {
        "left": "3%",
        "right": "4%",
        "bottom": "14%",
        "containLabel": true
    },
    "xAxis": {
        "type": "category",
        "boundaryGap": false,
        "data": [
            "2020-01",
            "2020-02",
            "2020-03",
            "2020-04",
            "2020-05",
            "2020-06",
            "2020-07",
            "2020-08",
            "2020-09",
            "2020-10",
            "2020-11",
            "2020-12",
            "2021-01"
        ]
    },
    "yAxis": {
        "type": "value",
        "name": "收益(万元)",
        "axisLine": {
            "show": false,
            "onZero": false
        },
        "splitLine": {
            "show": true
        }
    },
    "series": [{
            "name": "权益多头",
            "type": "bar",
            "barGap": 0,
            "barMaxWidth": "20px",
            "data": [
                "210.60",
                "163.82",
                "-1661.13",
                "1616.60",
                "489.52",
                "3495.99",
                "6418.99",
                "1211.64",
                "-3432.22",
                "337.69",
                "1555.95",
                "335.77",
                "89.34"
            ],
            "itemStyle": {
                "normal": {
                    "color": "#f56e64"
                }
            }
        },
        {
            "name": "市场中性",
            "type": "bar",
            "barGap": 0,
            "barMaxWidth": "20px",
            "data": [
                "59.59",
                "353.19",
                "880.05",
                "325.90",
                "72.75",
                "1393.75",
                "1967.59",
                "99.52",
                "-1219.31",
                "658.05",
                "-1565.22",
                "-275.51",
                "-73.36"
            ],
            "itemStyle": {
                "normal": {
                    "color": "#2c81ca"
                }
            }
        },
        {
            "name": "管理期货",
            "type": "bar",
            "barGap": 0,
            "barMaxWidth": "20px",
            "data": [
                "-41.88",
                "-121.65",
                "813.43",
                "-58.89",
                "45.77",
                "201.23",
                "1222.03",
                "-247.51",
                "253.44",
                "-155.74",
                "697.57",
                "18.38",
                "5.91"
            ],
            "itemStyle": {
                "normal": {
                    "color": "#ffcb2e"
                }
            }
        },
        {
            "name": "套利策略",
            "type": "bar",
            "barGap": 0,
            "barMaxWidth": "20px",
            "data": [
                "40.16",
                "133.33",
                "422.19",
                "394.82",
                "123.46",
                "-56.52",
                "464.75",
                "395.13",
                "237.81",
                "450.26",
                "203.44",
                "40.98",
                "-145.52"
            ],
            "itemStyle": {
                "normal": {
                    "color": "#bf4cd4"
                }
            }
        },
        {
            "name": "固收策略",
            "type": "bar",
            "barGap": 0,
            "barMaxWidth": "20px",
            "data": [
                "21.98",
                "-34.85",
                "110.15",
                "49.46",
                "86.23",
                "138.43",
                "148.53",
                "210.45",
                "93.91",
                "-46.58",
                "-69.29",
                "3.66",
                "0.22"
            ],
            "itemStyle": {
                "normal": {
                    "color": "#6ec7e7"
                }
            }
        },
        {
            "name": "组合策略",
            "type": "bar",
            "barGap": 0,
            "barMaxWidth": "20px",
            "data": [
                "23.76",
                "406.71",
                "336.96",
                "103.04",
                "137.50",
                "-89.77",
                "0.00"
            ],
            "itemStyle": {
                "normal": {
                    "color": "#f3a39e"
                }
            }
        },
        {
            "name": "其他",
            "type": "bar",
            "barGap": 0,
            "barMaxWidth": "20px",
            "data": [
                "9.51",
                "-7.19",
                "14.58",
                "20.99",
                "13.24",
                "-0.35"
            ],
            "itemStyle": {
                "normal": {
                    "color": "#fae29a"
                }
            }
        }
    ]
}