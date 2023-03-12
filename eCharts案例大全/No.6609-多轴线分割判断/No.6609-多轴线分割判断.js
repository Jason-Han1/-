option = {
  "grid": {
    "left": "5%",
    "right": "10%",
    "bottom": "1%",
    "top": "1%",
    "containLabel": true
  },
  "xAxis": [
    {
      "type": "value",
      "min": 0,
      "max": 100,
      "axisLabel": {
        "textStyle": {
          "fontSize": 14,
          "color": "#999"
        }
      },
      "axisLine": {
        "lineStyle": {
          "color": "#c8c8c9"
        }
      },
      "axisTick": {
        "show": false
      },
      "gridIndex": 0
    }
  ],
  "yAxis": [
    {
      "type": "category",
      "data": [
        "视觉疲劳",
        "情感应对",
        "脑力活动",
        "情绪波动大",
        "内心抵触",
        "紧迫",
        "强迫性回忆",
        "心理适应中",
        "心理适应高",
        "发呆",
        "思考"
      ],
      "show": false,
      "axisLabel": {
        "fontSize": 4
      },
      "axisLine": {
        "lineStyle": {
          "color": "#ffffff"
        }
      },
      "axisTick": {
        "show": false
      }
    },
    {
      "type": "category",
      "position": "left",
      "axisLine": {
        "lineStyle": {
          "color": "translate"
        }
      }
    },
    {
      "type": "value",
      "position": "left",
      "axisLine": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "axisLabel": {
        "show": false
      },
      "splitLine": {
        "show": false
      },
      "min": 0,
      "max": 100
    }
  ],
  "series": [
    {
      "data": [
        29,
        26,
        27,
        25,
        20,
        100,
        20,
        30,
        30,
        30,
        20
      ],
      "type": "bar",
      "itemStyle": {
        "color": "#9ce4d8"
      },
      "yAxisIndex": 0,
      "zlevel": 999,
      "label": {
        "show": true,
        "position": [
          "20%",
          "40%"
        ],
        "formatter": "  {b} {c}%",
        "color": "gray"
      }
    },
    {
      "data": [
        {
          "name": "认知",
          "value": 100
        }
      ],
      "label": {
        "show": true,
        "position": "left",
        "formatter": "{b}",
        "color": "#777"
      },
      "type": "bar",
      "barGap": 0,
      "barWidth": "18.181818181818183%",
      "itemStyle": {
        "color": "rgba(210,253,246,0.3)"
      },
      "yAxisIndex": 1
    },
    {
      "data": [
        {
          "name": "应对",
          "value": 100
        }
      ],
      "label": {
        "show": true,
        "position": "left",
        "formatter": "{b}",
        "textStyle": {
          "color": "#777"
        }
      },
      "type": "bar",
      "barGap": 0,
      "barWidth": "27.272727272727273%",
      "itemStyle": {
        "normal": {
          "color": "rgba(210,253,246,0.3)"
        }
      },
      "yAxisIndex": 1
    },
    {
      "data": [
        {
          "name": "情绪",
          "value": 100
        }
      ],
      "label": {
        "show": true,
        "position": "left",
        "formatter": "{b}",
        "textStyle": {
          "color": "#777"
        }
      },
      "type": "bar",
      "barGap": 0,
      "barWidth": "27.272727272727273%",
      "itemStyle": {
        "normal": {
          "color": "rgba(210,253,246,0.3)"
        }
      },
      "yAxisIndex": 1
    },
    {
      "data": [
        {
          "name": "应激",
          "value": 100
        }
      ],
      "label": {
        "show": true,
        "position": "left",
        "formatter": "{b}",
        "textStyle": {
          "color": "#777"
        }
      },
      "type": "bar",
      "barGap": 0,
      "barWidth": "18.181818181818183%",
      "itemStyle": {
        "normal": {
          "color": "red"
        }
      },
      "yAxisIndex": 1
    },
    {
      "data": [
        {
          "name": "疲劳",
          "value": 100
        }
      ],
      "label": {
        "show": true,
        "position": "left",
        "formatter": "{b}",
        "textStyle": {
          "color": "#777"
        }
      },
      "type": "bar",
      "barGap": 0,
      "barWidth": "9.090909090909092%",
      "itemStyle": {
        "normal": {
          "color": "rgba(210,253,246,0.3)"
        }
      },
      "yAxisIndex": 1
    },
    {
      "data": [],
      "type": "bar",
      "lineStyle": {
        "show": false
      },
      "yAxisIndex": 2,
      "markLine": {
        "silent": true,
        "symbol": "none",
        "data": [
          {
            "name": "",
            "yAxis": 9.090909090909092,
            "lineStyle": {
              "opacity": 1,
              "color": "#9feadd",
              "type": "solid"
            },
            "label": {
              "position": "end",
              "show": false
            }
          }
        ]
      }
    },
    {
      "data": [],
      "type": "bar",
      "lineStyle": {
        "show": false
      },
      "yAxisIndex": 2,
      "markLine": {
        "silent": true,
        "symbol": "none",
        "data": [
          {
            "name": "",
            "yAxis": 27.272727272727273,
            "lineStyle": {
              "opacity": 1,
              "color": "#9feadd",
              "type": "solid"
            },
            "label": {
              "position": "end",
              "show": false
            }
          }
        ]
      }
    },
    {
      "data": [],
      "type": "bar",
      "lineStyle": {
        "show": false
      },
      "yAxisIndex": 2,
      "markLine": {
        "silent": true,
        "symbol": "none",
        "data": [
          {
            "name": "",
            "yAxis": 54.54545454545455,
            "lineStyle": {
              "opacity": 1,
              "color": "#9feadd",
              "type": "solid"
            },
            "label": {
              "position": "end",
              "show": false
            }
          }
        ]
      }
    },
    {
      "data": [],
      "type": "bar",
      "lineStyle": {
        "show": false
      },
      "yAxisIndex": 2,
      "markLine": {
        "silent": true,
        "symbol": "none",
        "data": [
          {
            "name": "",
            "yAxis": 81.81818181818183,
            "lineStyle": {
              "opacity": 1,
              "color": "#9feadd",
              "type": "solid"
            },
            "label": {
              "position": "end",
              "show": false
            }
          }
        ]
      }
    }
  ]
}
