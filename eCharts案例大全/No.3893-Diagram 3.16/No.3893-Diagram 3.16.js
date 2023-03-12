option = {
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
        },
    },
    "legend": {
        "data": ["Solel", "Solfångare", "Vind el", "Kravnivå solfångare", "Kravnivå solel"],
        "bottom": "0",
    },
    "grid": {
        "top": "10%",
        "left": "5%",
        "right": "3%",
        "bottom": "10%",
        "containLabel": true,
    },
    "yAxis": {
        "type": "value",
        "boundaryGap": [0, 0.01],
        "max": 8,
        "interval": 2,
        "name": "Energiproduktion [kWh/m2]",
        "nameRotate": 90,
        "nameLocation": "center",
        "nameGap": "25",
        "nameTextStyle": {
            "color": "#000",
            "fontWeight": "700",
            "fontSize": 16
        }
    },
    "xAxis": {
        "type": "category",
        "data": [
            "Norra 2- uppmätt",
            "Värtaterminalen- uppmätt",
            "Brofästet- uppmätt",
            "Gasverket Västra- projtekterat",
            "Jackproppen- parklek-projtekterat",
            "Starkströmmen- Banhof- projtekterat",
            "Södra Värtan- projekterat"
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
            "data": [2.20, 3.4, 3.66, {
                "value": 2.63333,
                "itemStyle": {
                    "color": "rgb(0,176,80)"
                }
            }, {
                "value": 7.5,
                "itemStyle": {
                    "color": "rgb(0,176,80)"
                }
            }, {
                "value": 21.1,
                "itemStyle": {
                    "color": "rgb(0,176,80)"
                }
            }, {
                "value": 2,
                "itemStyle": {
                    "color": "rgb(0,176,80)"
                }
            }],
            "itemStyle": {
                "color": "#5B9BD5",
            },
        },
        {
            "name": "Solfångare",
            "type": "bar",
            "stack": "a",
            "barWidth": "25%",
            "data": [1.04, 0, 0, 0, 0, 0, 0],
            "itemStyle": {
                "color": "#ED7D31",
            },
        },
        {
            "name": "Vind el",
            "type": "bar",
            "stack": "a",
            "barWidth": "25%",
            "data": [3.74, 0, 0, 0, 0, 0, 0],
            "itemStyle": {
                "color": "#A5A5A5",
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