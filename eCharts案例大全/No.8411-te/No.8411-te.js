option = {
    "backgroundColor": "#fff",
    "animation": true,
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "line",
            "snap": true,
            "lineStyle": {
                "color": "#000",
                "width": 2,
                "type": "dashed"
            }
        },
        "backgroundColor": "#fff",
        "borderWidth": 1,
        "borderColor": "rgba(0,0,0,0.10)",
        "padding": 10,
        "textStyle": {
            "color": "#000"
        },
        "extraCssText": "box-shadow: 0 4px 12px 0 rgba(0,0,0,0.20);",
        // "triggerOn": "mousemove",
        "confine": true,
        'position': (pos,params,el, elRect, size)=> {
             const left = pos[0] > size.viewSize[0] * 0.75 ? pos[0] - 300 : pos[0] + 60;
      // const top = pos[1] - 150;
          return [left, 0];
        }
    },
    "axisPointer": {
        "link": {
            "xAxisIndex": "all"
        },
        "label": {
            "backgroundColor": "#777"
        }
    },
    "grid": [{
            "top": "5%",
            "left": "8%",
            "right": "4%",
            "height": "52%"
        },
        {
            "left": "8%",
            "right": "4%",
            "bottom": "20%",
            "height": "15%"
        }
    ],
    "xAxis": [{
            "type": "category",
            "scale": true,
            "boundaryGap": false,
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#d8d8d8"
                }
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "margin": 15,
                "color": "rgba(0,0,0,0.54)",
                "fontSize": 14
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": "#d8d8d8",
                    "type": "dashed"
                }
            },
            "splitNumber": 20,
            "min": "dataMin",
            "max": "dataMax",
            "axisPointer": {
                "z": 100
            },
            "data": [
                "-1",
                "2014-07-21",
                "2014-07-22",
                "2014-07-29",
                "2014-08-01",
                "2014-08-22",
                "2014-08-23",
                "2014-08-26",
                "2014-08-29",
                "2014-08-30",
                "2014-09-01",
                "2014-09-03",
                "2014-09-15",
                "2014-09-17",
                "2014-09-22",
                "2014-09-29",
                "2014-10-17",
                "2014-10-20",
                "2014-10-24",
                "2014-10-31",
                "2014-11-11",
                "2014-11-14",
                "2014-11-17",
                "2014-12-08",
                "2014-12-10",
                "2014-12-17",
                "2014-12-24",
                "2014-12-31",
                "2015-01-02",
                "2015-01-07",
                "2015-01-14",
                "2015-01-15",
                "2016-10-28",
                "2016-10-29",
                "2016-11-02",
                "2016-11-03",
                "2016-11-04",
                "2016-11-17",
                "2016-11-18",
                "2016-11-22"
            ]
        },
        {
            "type": "category",
            "gridIndex": 1,
            "scale": true,
            "boundaryGap": false,
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#d8d8d8"
                }
            },
            "axisLabel": {
                "margin": 15,
                "color": "rgba(0,0,0,0.54)",
                "fontSize": 14
            },
            "axisTick": {
                "show": false
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": "#d8d8d8",
                    "type": "dashed"
                }
            },
            "splitNumber": 20,
            "min": "dataMin",
            "max": "dataMax",
            "data": [
                "-1",
                "2014-07-21",
                "2014-07-22",
                "2014-07-29",
                "2014-08-01",
                "2014-08-22",
                "2014-08-23",
                "2014-08-26",
                "2014-08-29",
                "2014-08-30",
                "2014-09-01",
                "2014-09-03",
                "2014-09-15",
                "2014-09-17",
                "2014-09-22",
                "2014-09-29",
                "2014-10-17",
                "2014-10-20",
                "2014-10-24",
                "2014-10-31",
                "2014-11-11",
                "2014-11-14",
                "2014-11-17",
                "2014-12-08",
                "2014-12-10",
                "2014-12-17",
                "2014-12-24",
                "2014-12-31",
                "2015-01-02",
                "2015-01-07",
                "2015-01-14",
                "2015-01-15",
                "2016-10-28",
                "2016-10-29",
                "2016-11-02",
                "2016-11-03",
                "2016-11-04",
                "2016-11-17",
                "2016-11-18",
                "2016-11-22"
            ]
        }
    ],
    "yAxis": [{
            "scale": true,
            "splitArea": {},
            "axisLine": {
                "show": false,
                "onZero": false,
                "lineStyle": {
                    "color": "#d8d8d8"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": "#d8d8d8",
                    "type": "dashed"
                }
            },
            "axisLabel": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "name": "检验结果",
            "nameTextStyle": {
                "color": "rgba(0,0,0,0.90)",
                "fontSize": 16,
                "padding": [
                    0,
                    80,
                    0,
                    0
                ]
            }
        },
        {
            "type": "category",
            "scale": true,
            "gridIndex": 1,
            "splitNumber": 2,
            "axisLabel": {
                "color": "rgba(0,0,0,0.90)",
                "fontSize": 16
            },
            "axisLine": {
                "show": false,
                "onZero": false,
                "lineStyle": {
                    "color": "#d8d8d8",
                    "type": "dashed"
                }
            },
            "axisTick": {
                "show": false
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": "#d8d8d8",
                    "type": "dashed"
                }
            }
        }
    ],
    "dataZoom": [{
            "type": "inside",
            "xAxisIndex": [
                0,
                1
            ],
            "start": 0,
            "end": 100
        },
        {
            "show": true,
            "height": 16,
            "xAxisIndex": [
                0,
                1
            ],
            "type": "slider",
            "left": "10%",
            "right": "8%",
            "bottom": "5%",
            "start": 0,
            "end": 100,
            "handleIcon": "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
            "handleSize": "140%",
            "handleStyle": {
                "color": "#57A6AF"
            },
            "backgroundColor": "#f8f8f9",
            "dataBackground": {
                "lineStyle": {
                    "width": 0
                },
                "areaStyle": {
                    "color": "transparent"
                }
            },
            "fillerColor": "rgba(87,166,175,0.40)"
        }
    ],
    "series": [{
            "name": "疾病分期",
            "type": "line",
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "data": [
                [
                    "2014-09-03",
                    "疾病分期"
                ]
            ],
            "symbolSize": 10,
            "lineStyle": {
                "width": 4
            },
            "keyPath": "[0].events[0].detail[2]"
        },
        {
            "name": "疾病分期",
            "type": "line",
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "data": [
                [
                    "2016-11-04",
                    "疾病分期"
                ]
            ],
            "symbolSize": 10,
            "lineStyle": {
                "width": 4
            },
            "keyPath": "[0].events[1].detail[2]"
        },
        {
            "name": "药物治疗",
            "type": "line",
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "data": [
                [
                    "2014-08-26",
                    "药物治疗"
                ],
                [
                    "2014-10-31",
                    "药物治疗"
                ]
            ],
            "symbolSize": 10,
            "lineStyle": {
                "width": 4
            },
            "keyPath": "[1].events[0].detail[0]"
        },
        {
            "name": "药物治疗",
            "type": "line",
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "data": [
                [
                    "2014-08-26",
                    "药物治疗"
                ],
                [
                    "2014-09-03",
                    "药物治疗"
                ]
            ],
            "symbolSize": 10,
            "lineStyle": {
                "width": 4
            },
            "keyPath": "[1].events[1].detail[0]",
            "symbolOffset": [
                5,
                0
            ]
        },
        {
            "name": "药物治疗",
            "type": "line",
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "data": [
                [
                    "2014-11-11",
                    "药物治疗"
                ],
                [
                    "-1",
                    "药物治疗"
                ]
            ],
            "symbolSize": 10,
            "lineStyle": {
                "width": 4
            },
            "keyPath": "[1].events[2].detail[0]"
        },
        {
            "name": "药物治疗",
            "type": "line",
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "data": [
                [
                    "2016-10-29",
                    "药物治疗"
                ],
                [
                    "2016-11-03",
                    "药物治疗"
                ]
            ],
            "symbolSize": 10,
            "lineStyle": {
                "width": 4
            },
            "keyPath": "[1].events[3].detail[0]"
        },
        {
            "name": "放射治疗",
            "type": "line",
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "data": [
                [
                    "2014-12-08",
                    "放射治疗"
                ],
                [
                    "2015-01-15",
                    "放射治疗"
                ]
            ],
            "symbolSize": 10,
            "lineStyle": {
                "width": 4
            },
            "keyPath": "[2].events[0].detail[0]"
        },
        {
            "name": "检查结果",
            "type": "line",
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "data": [
                [
                    "2014-07-22",
                    "检查结果"
                ]
            ],
            "symbolSize": 10,
            "lineStyle": {
                "width": 4
            },
            "keyPath": "[3].events[0].detail[0]"
        },
        {
            "name": "检查结果",
            "type": "line",
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "data": [
                [
                    "2014-08-01",
                    "检查结果"
                ]
            ],
            "symbolSize": 10,
            "lineStyle": {
                "width": 4
            },
            "keyPath": "[3].events[1].detail[0]"
        },
        {
            "name": "检查结果",
            "type": "line",
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "data": [
                [
                    "2014-08-23",
                    "检查结果"
                ]
            ],
            "symbolSize": 10,
            "lineStyle": {
                "width": 4
            },
            "keyPath": "[3].events[2].detail[0]"
        },
        {
            "name": "检查结果",
            "type": "line",
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "data": [
                [
                    "2014-09-17",
                    "检查结果"
                ]
            ],
            "symbolSize": 10,
            "lineStyle": {
                "width": 4
            },
            "keyPath": "[3].events[3].detail[0]"
        },
        {
            "name": "检查结果",
            "type": "line",
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "data": [
                [
                    "2014-11-14",
                    "检查结果"
                ]
            ],
            "symbolSize": 10,
            "lineStyle": {
                "width": 4
            },
            "keyPath": "[3].events[4].detail[0]"
        },
        {
            "name": "检查结果",
            "type": "line",
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "data": [
                [
                    "2015-01-02",
                    "检查结果"
                ]
            ],
            "symbolSize": 10,
            "lineStyle": {
                "width": 4
            },
            "keyPath": "[3].events[5].detail[0]"
        },
        {
            "name": "jianyanbaogao.血常规.白细胞",
            "type": "line",
            "data": [
                6.3,
                12.4,
                11.4,
                8.2,
                6.9,
                7.7,
                5.6,
                4.7,
                6,
                2.4,
                13.5,
                44.1,
                17,
                6,
                37.2,
                4.2,
                29.7,
                5.2,
                4.6,
                5.7,
                4.9,
                4,
                4.1,
                6.1,
                5.5,
                4.2,
                4
            ],
            "keyPath": "[1]",
            "xAxisIndex": 0,
            "yAxisIndex": 0,
            "normalRange": [
                "3.5",
                "9.5"
            ],
            "markPoint": {
                "symbol": "circle",
                "symbolSize": 10,
                "label": {
                    "position": "top",
                    "color": "#000",
                    "formatter": "{c} 10^9/L"
                },
                "data": [{
                        "name": "最大值",
                        "type": "max"
                    },
                    {
                        "name": "最小值",
                        "type": "min"
                    }
                ]
            },
            "markArea": {
                "itemStyle": {
                    "normal": {
                        "lineStyle": {
                            "type": "solid",
                            "width": 4,
                            "color": "orange"
                        },
                        "label": {
                            "show": true,
                            "position": "middle"
                        }
                    }
                },
                "symbol": "none",
                "data": [
                    [{
                            "name": "正常值范围",
                           yAxis:3.5
                        },
                        {
                            yAxis: 9.5
                        }
                    ]
                ]
            }
        }
    ]
}