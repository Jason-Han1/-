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
        "bottom": "10%",
        "left": "10%"
    },
    "yAxis": {
        "type": "value",
        "boundaryGap": [0, 0.01]
    },
    "xAxis": {
        "type": "category",
        "data": [
            "Norra 1",
            "Västra",
            "Norra 2",
            "Brofästet",
            "Gasverket Västra",
            "Jackproppen (bostäder)",
            "Södra Värtan Södra",
            "Södra Värtan Norra",
            "Starkströmmen",
            "Värtaterminalen",
            "Jackproppen (parklek)"
        ],
        "axisLabel": {
            "rotate": 55
        }
    },
    "series": [{
            "name": "2017",
            "type": "bar",
            "stack": "a",
            "barWidth": "25%",
            "data": [{
                "value": 0.39,
                "itemStyle": {
                    "color": "#C8E6E3"
                }
            }, {
                "value": 0.35,
                "itemStyle": {
                    "color": "#C8E6E3"
                }
            }, 0.61, 0.66, 0.59, 0.62, 0.67, 0.72, 0.735, 0.39, 0.16],
            "itemStyle": {
                "color": "#00837c"
            }
        },
        {
            "name": "Kravnivå",
            "type": "line",
            "data": [],
            "symbol": "line",
            "itemStyle": {
                "normal": {
                    "color": "#00837c"
                }
            },
            "markLine": {
                "symbolSize": 0,
                "data": [
                    [{
                            "yAxis": 0.67,
                            "name": "",
                            "x": "6.3%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#00837c",
                                    "width": 2,
                                    "type": "dashed"
                                }
                            }
                        },
                        {
                            "yAxis": 0.67,
                            "x": "39%"
                        }
                    ],
                    [{
                            "yAxis": 0.67,
                            "name": "",
                            "x": "39%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#00837c",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 0.67,
                            "x": "60%"
                        }
                    ],
                    [{
                            "yAxis": 0.5,
                            "name": "",
                            "x": "60%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#00837c",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 0.5,
                            "x": "85%"
                        }
                    ]
                ]
            }
        }
    ]
};