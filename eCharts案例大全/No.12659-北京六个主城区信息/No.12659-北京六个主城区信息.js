option = {
   "title": {
      "text": "北京六个主城区信息",
      "left": "center",
      "y": "10",
      "textStyle": {
        "color": "#fff"
      }
    },
    "backgroundColor": "#1c2e40",
    "color": "#384757",
    "tooltip": {
      "trigger": "axis",
      "axisPointer": {
        "type": "cross",
        "crossStyle": {
          "color": "#384757"
        }
      }
    },
    "legend": {
      "data": [
        {
          "name": "生产总值",
          "icon": "circle",
          "textStyle": {
            "color": "#7d838b"
          }
        },
        {
          "name": "第三产业产值",
          "icon": "circle",
          "textStyle": {
            "color": "#7d838b"
          }
        },
        {
          "name": "第三产业占比",
          "icon": "circle",
          "textStyle": {
            "color": "#7d838b"
          }
        }
      ],
      "top": "10%",
      "textStyle": {
        "color": "#fff"
      }
    },
    "xAxis": [
      {
        "type": "category",
        "data": [
          "海淀区",
          "朝阳区",
          "西城区",
          "东城区",
          "大兴区",
          "石景山区"
        ],
        "axisPointer": {
          "type": "shadow"
        },
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#7d838b"
          }
        }
      }
    ],
    "yAxis": [
      {
        "type": "value",
        "name": "生产总值",
        "nameTextStyle": {
          "color": "#7d838b"
        },
        "min": 0,
        "max": 6000,
        "interval": 600,
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#7d838b"
          }
        },
        "axisLine": {
          "show": true
        },
        "splitLine": {
          "lineStyle": {
            "color": "#7d838b"
          }
        }
      },
      {
        "type": "value",
        "name": "第三产业产值",
        "show": true,
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#7d838b"
          }
        }
      }
    ],
    "grid": {
      "top": "20%"
    },
    "series": [
      {
        "name": "生产总值",
        "type": "bar",
        "data": [
          5915,
          5629,
          3916,
          2242,
          2009,
          534
        ],
        "barWidth": "auto",
        "itemStyle": {
          "normal": {
            "color": {
              "type": "linear",
              "x": 0,
              "y": 0,
              "x2": 0,
              "y2": 1,
              "colorStops": [
                {
                  "offset": 0,
                  "color": "rgba(255,37,117,0.7)"
                },
                {
                  "offset": 0.5,
                  "color": "rgba(0,133,245,0.7)"
                },
                {
                  "offset": 1,
                  "color": "rgba(0,133,245,0.3)"
                }
              ],
              "globalCoord": false
            }
          }
        }
      },
      {
        "name": "第三产业产值",
        "type": "bar",
        "data": [
          5316,
          4757,
          3579,
          2154,
          1719,
          404
        ],
        "barWidth": "auto",
        "itemStyle": {
          "normal": {
            "color": {
              "type": "linear",
              "x": 0,
              "y": 0,
              "x2": 0,
              "y2": 1,
              "colorStops": [
                {
                  "offset": 0,
                  "color": "rgba(255,37,117,0.7)"
                },
                {
                  "offset": 0.5,
                  "color": "rgba(0,255,252,0.7)"
                },
                {
                  "offset": 1,
                  "color": "rgba(0,255,252,0.3)"
                }
              ],
              "globalCoord": false
            }
          }
        },
        "barGap": "0"
      },
      {
        "name": "第三产业占比",
        "type": "line",
        "yAxisIndex": 1,
        "data": [
          88.83,
          84.51,
          91.4,
          96.1,
          85.6,
          75.7
        ],
        "itemStyle": {
          "normal": {
            "color": "#ffaa00"
          }
        },
        "smooth": true
      }
    ]
};