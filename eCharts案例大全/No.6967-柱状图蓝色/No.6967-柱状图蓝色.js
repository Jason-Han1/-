
option = {
    backgroundColor:'#333',
    "tooltip": {
        "trigger": "axis",
    },
    "grid": {
        "left": "80",
        "right": "3%",
        "bottom": "10%"
    },
    "xAxis": [
        {
            "type": "category",
            "data": [
                "03-06",
                "",
                "03-07",
                "",
                "03-08",
                "",
                "03-09",
                "",
                "03-10",
                "",
                "03-11",
                "",
            ],
            "axisLabel": {
                "color": "#b3e5ff",
                // margin: 0,
                // width: '20',
                // align: "left",
                // padding: [0, 0, 0, 100],
                // align: "center",
                // backgroundColor: "rgba(187, 6, 228, 1)"
            },
            show: false,
            "axisLine": {
                "show": false
            },
            "axisTick": {
                // "show": false
            },
            "axisPointer": {
                "show": true,
                "lineStyle": {
                    "color": "transparent"
                }
            }
        },
        {
            "type": "category",
            "axisLine": {
                "show": false
            },
            "axisTick": {
                // "show": false
            },
            position: "bottom",
            "axisLabel": {
                "color": "#ddd"
            },
            show: false,
            "axisPointer": {
                "show": true,
                "lineStyle": {
                    "color": "transparent"
                }
            },
            "data": [
                "",
                "03-06",
                "",
                "03-07",
                "",
                "03-08",
                "",
                "03-09",
                "",
                "03-10",
                "",
                "03-11",
            ]
        },
        {
            "type": "category",
            position: "bottom",
            "data": [
                "03-06",
                "03-07",
                "03-08",
                "03-09",
                "03-10",
                "03-11",
            ],
            "axisLabel": {
                "color": "#b3e5ff",
                // margin: 0,
                // width: '20',
                // align: "left",
                // padding: [0, 0, 0, 100],
                // align: "center",
                // backgroundColor: "rgba(187, 6, 228, 1)"
            },
            // show: false,
            "axisLine": {
                "show": false
            },
            "axisTick": {
                // "show": false
            },
            "axisPointer": {
                "show": true,
                "lineStyle": {
                    "color": "transparent"
                }
            }
        },
        // {
        //     "type": "value",
        //     max: 600
        // }
    ],
    "yAxis": [
        {
            "type": "value",
            "axisTick": {
                "show": false
            },
            "nameTextStyle": {
                "color": "#b3e5ff"
            },
            "axisLabel": {
                "color": "#b3e5ff"
            },
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#042e60"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": "#042e60",
                    "width": 1
                }
            }
        }
    ],
    "dataZoom": [
        {
            "type": "inside",
            "zoomLock": true,
            "xAxisIndex": [
                0,
                1
            ],
            "disabled": false,
            "start": 0,
            "end": 100
        }
    ],
    dataZoom: [{
        type: 'inside',
        zoomLock: true,
        xAxisIndex: [0, 1, 2],
        disabled: false,
        maxSpan: 60,
        start: 0,
        end: 100
    }],
    "series": [
        {
            "itemStyle": {
                "normal": {
                    "color": "#034162"
                }
            },
            "name": "东风本部",
            "type": "bar",
            "data": [
                {
                    "name": "2021-03-06",
                    "value": 10000,
                },
                '',
                {
                    "name": "2021-03-07",
                    "value": 20000,
                },
                '',
                {
                    "name": "2021-03-08",
                    "value": 30000,
                },
                '',
                {
                    "name": "2021-03-09",
                    "value": 40000,
                },
                '',
                {
                    "name": "2021-03-10",
                    "value": 50000,
                },
                '',
                {
                    "name": "2021-03-11",
                    "value": 35000,
                },
                '',
            ],
            // 'barGap': '50%',
            "barWidth": '20%'
        },
        {
            "itemStyle": {
                "normal": {
                    "color": "#00e5ff"
                }
            },
            "name": "东风本部",
            "type": "bar",
            "data": [
                {
                    "name": "2021-03-06",
                    "value": 5000,
                },
                '',
                {
                    "name": "2021-03-07",
                    "value": 15000,
                },
                '',
                {
                    "name": "2021-03-08",
                    "value": 25000,
                },
                '',
                {
                    "name": "2021-03-09",
                    "value": 35000,
                },
                '',
                {
                    "name": "2021-03-10",
                    "value": 45000,
                },
                '',
                {
                    "name": "2021-03-11",
                    "value": 30000,
                },
                '',
            ],
            // "xAxisIndex": 1,
            'barGap': '-75%',
            "barWidth": '10%'
        },
        {
            "itemStyle": {
                "normal": {
                    "color": "rgb(51,248,255)"
                }
            },
            "name": "东风本部",
            "type": "line",
            "data": [
                7000,
                '',
                22000,
                '',
                32000,
                '',
                42000,
                '',
                35000,
                '',
                30000,
                '',
            ],
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    "color": "#b3e5ff"
                }
            },
            // symbolOffset: ['50%',0],
            connectNulls: true,
            // "xAxisIndex": 2,
        },
        {
            "itemStyle": {
                "normal": {
                    "color": "#014676"
                }
            },
            "name": "陕重汽",
            "type": "bar",
            "data": [
                '',
                {
                    "name": "2021-03-06",
                    "value": 21000,
                },
                '',
                {
                    "name": "2021-03-07",
                    "value": 28000,
                },
                '',
                {
                    "name": "2021-03-08",
                    "value": 20000,
                },
                '',
                {
                    "name": "2021-03-09",
                    "value": 50000,
                },
                '',
                {
                    "name": "2021-03-10",
                    "value": 55000,
                },
                '',
                {
                    "name": "2021-03-11",
                    "value": 45000,
                }
            ],
            "xAxisIndex": 1,
            // 'barGap': '50%',
            "barWidth": '20%'
        },
        {
            "itemStyle": {
                "normal": {
                    "color": "#009cff"
                }
            },
            "name": "陕重汽",
            "type": "bar",
            "data": [
                '',
                {
                    "name": "2021-03-06",
                    "value": 15000,
                },
                '',
                {
                    "name": "2021-03-07",
                    "value": 18000,
                },
                '',
                {
                    "name": "2021-03-08",
                    "value": 50000,
                },
                '',
                {
                    "name": "2021-03-09",
                    "value": 30000,
                },
                '',
                {
                    "name": "2021-03-10",
                    "value": 20000,
                },
                '',
                {
                    "name": "2021-03-11",
                    "value": 10000,
                }
            ],
            // 'barGap': '200%',
            "xAxisIndex": 1,
            'barGap': '-75%',
            "barWidth": '10%'
        },
        {
            "itemStyle": {
                "normal": {
                    "color": "rgb(255,51,235)"
                }
            },
            "name": "陕重汽",
            "type": "line",
            "data": [
                '',
                14000,
                '',
                10000,
                '',
                18000,
                '',
                15000,
                '',
                10000,
                '',
                20000,
            ],
            
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    "color": "#b3e5ff"
                }
            },
            // symbolOffset: ['50%',0],
            connectNulls: true,
            "xAxisIndex":1,
        }
    ]
};