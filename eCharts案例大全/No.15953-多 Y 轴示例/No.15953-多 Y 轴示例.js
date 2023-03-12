option = {
    "tooltip": {
        "trigger": "axis"
    },
    "legend": {
        "data": [
            "CA19-9(糖链抗原19-9)",
            "CEA(癌胚抗原)",
            "CA242(糖链抗原242)",
            "AFP(甲胎蛋白)",
            "CA125(糖链抗原125)",
            "CA15-3(糖链抗原15-3)",
            "NSE(神经元烯醇化酶)",
            "ferritin(铁蛋白)",
            "beta-hCG(人绒毛膜促性腺激素)",
            "hGH(生长激素)"
        ]
    },
    "grid": [],
    "toolbox": {
        "show": false
    },
    "xAxis": [],
    "yAxis": [
        {
            "type": "value",
            "gridIndex": 0,
            "min": 0,
            "max": 35,
            "axisLabel": {
                "formatter": "{value} U/ml"
            }
        },
        {
            "type": "value",
            "min": 0,
            "max": 5,
            "axisLabel": {
                "formatter": "{value} ng/ml"
            }
        },
        {
            "type": "value",
            "min": 0,
            "max": 20,
            "axisLabel": {
                "formatter": "{value} U/ml"
            }
        },
        {
            "type": "value",
            "min": 0,
            "max": 20,
            "axisLabel": {
                "formatter": "{value} ng/ml"
            }
        },
        {
            "type": "value",
            "gridIndex": 0,
            "min": 0,
            "max": 35,
            "axisLabel": {
                "formatter": "{value} U/ml"
            }
        },
        {
            "type": "value",
            "gridIndex": 0,
            "min": 0,
            "max": 35,
            "axisLabel": {
                "formatter": "{value} U/ml"
            }
        },
        {
            "type": "value",
            "min": 0,
            "max": 13,
            "axisLabel": {
                "formatter": "{value} ng/ml"
            }
        },
        {
            "type": "value",
            "min": 0,
            "max": 219,
            "axisLabel": {
                "formatter": "{value} ng/ml"
            }
        },
        {
            "type": "value",
            "min": 0,
            "max": 3,
            "axisLabel": {
                "formatter": "{value} IU/L"
            }
        },
        {
            "type": "value",
            "min": 0,
            "max": 7.5,
            "axisLabel": {
                "formatter": "{value} ng/ml"
            }
        }
    ],
    "series": [
        {
            "name": "CA19-9(糖链抗原19-9)",
            "type": "line",
            "data": [
                13.65,
                14.69
            ],
            "markLine": {
                "data": [
                    {
                        "yAxis": 35,
                        "name": "max"
                    }
                ]
            }
        },
        {
            "name": "CEA(癌胚抗原)",
            "type": "line",
            "data": [
                1.05,
                1.7
            ],
            "markLine": {
                "data": [
                    {
                        "yAxis": 5,
                        "name": "max"
                    }
                ]
            }
        },
        {
            "name": "CA242(糖链抗原242)",
            "type": "line",
            "data": [
                5.22,
                6.48
            ],
            "markLine": {
                "data": [
                    {
                        "yAxis": 20,
                        "name": "max"
                    }
                ]
            }
        },
        {
            "name": "AFP(甲胎蛋白)",
            "type": "line",
            "data": [
                0.79,
                0.47
            ],
            "markLine": {
                "data": [
                    {
                        "yAxis": 20,
                        "name": "max"
                    }
                ]
            }
        },
        {
            "name": "CA125(糖链抗原125)",
            "type": "line",
            "data": [
                5.75,
                2.61
            ],
            "markLine": {
                "data": [
                    {
                        "yAxis": 35,
                        "name": "max"
                    }
                ]
            }
        },
        {
            "name": "CA15-3(糖链抗原15-3)",
            "type": "line",
            "data": [
                17.46,
                10.36
            ],
            "yAxisIndex": [5],
            "markLine": {
                "data": [
                    {
                        "yAxis": 35,
                        "name": "max"
                    }
                ]
            }
        },
        {
            "name": "NSE(神经元烯醇化酶)",
            "type": "line",
            "data": [
                2.71,
                2.2
            ],
            "markLine": {
                "data": [
                    {
                        "yAxis": 13,
                        "name": "max"
                    }
                ]
            }
        },
        {
            "name": "ferritin(铁蛋白)",
            "type": "line",
            "data": [
                36.02,
                8.86
            ],
            "markLine": {
                "data": [
                    {
                        "yAxis": 219,
                        "name": "max"
                    }
                ]
            }
        },
        {
            "name": "beta-hCG(人绒毛膜促性腺激素)",
            "type": "line",
            "data": [
                0.18,
                0.1
            ],
            "markLine": {
                "data": [
                    {
                        "yAxis": 3,
                        "name": "max"
                    }
                ]
            }
        },
        {
            "name": "hGH(生长激素)",
            "type": "line",
            "data": [
                0.11,
                0.18
            ],
            "markLine": {
                "data": [
                    {
                        "yAxis": 7.5,
                        "name": "max"
                    }
                ]
            }
        }
    ]
}

for (var i = 0; i < option.yAxis.length; i++) {
    option.yAxis[i].gridIndex = i;
    option.yAxis[i].splitNumber = 2;
    option.grid.push({
        left: '10%',
        top: i / option.yAxis.length * (100 - 8) + 8 + '%',
        right: '5%',
        height: '6%'
    })
    option.xAxis.push({
        "type": "category",
        "boundaryGap": false,
        "gridIndex": i,
        show: i === option.yAxis.length - 1,
        "data": [
            "2016-2-4",
            "2016-3-30"
        ]
    })
    option.series[i].xAxisIndex = i;
    option.series[i].yAxisIndex = i;
}