option = {
    "backgroundColor": "#070E29",
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
          "name": "A相",
          "textStyle": {
            "color": "#7d838b"
          }
        },
        {
          "name": "B相",
          "textStyle": {
            "color": "#7d838b"
          }
        },
        {
          "name": "C相",
          "textStyle": {
            "color": "#7d838b"
          }
        }
      ],
      "top": "10%",
      "left":"right",
      "textStyle": {
        "color": "#253A77"
      }
    },
    "xAxis": [
      {
        "type": "category",
        "data": [
          "1时",
          "2时",
          "3时",
          "4时",
          "5时",
          "6时",
          "7时",
          "8时",
          "9时",
          "10时",
          "11时",
          "12时",
          "13时",
          "14时",
          "16时",
          "16时",
          "17时",
          "18时",
          "19时",
          "20时",
          "21时",
          "22时",
          "23时",
          "24时"
        ],
        "axisPointer": {
          "type": "shadow"
        },
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#7d838b"
          }
        },
             "axisLine": {
          "show": true,
          "lineStyle": {
            "color": "#253A77"
          }
        },
        "axisTick":{
         "show":false
        }
      }
    ],
    "yAxis": [
      {
        "type": "value",
        "nameTextStyle": {
          "color": "#7d838b"
        },
        "min": 0,
        "max": 50,
        "interval": 10,
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#7d838b"
          }
        },
        "axisLine": {
          "show": true,
           "lineStyle": {
                "color":"#253A77"
           }
        },
        "splitLine": {
         "show":true,
        "lineStyle": {
            "color": ["#253A77","#253A77","#253A77","#253A77","#253A77","#070E29"]
          }
        },
        "axisTick":{
         "show":false
        }
      }
    ],
    
    "grid": {
      "top": "20%"
    },
    "series": [
      {
        "name": "A相",
        "type": "bar",
        "data": [
          4,
          6,
          36,
          6,
          8,
          6, 4,
          6,
          36,
          6,
          8,
          6, 4,
          6,
          36,
          6,
          8,
          6, 4,
          6,
         80,
          6,
          8,
          6
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
                  "color": "rgba(255,118,2,1)"
                }, {
                  "offset": 0.5,
                  "color": "rgba(255,255,0,1)"
                },
                {
                  "offset": 1,
                  "color": "rgba(255,255,0,1)"
                }
              ],
              "globalCoord": false
            }
          }
        }
      },
      {
        "name": "B相",
        "type": "bar",
        "data": [
          4,
          19,
          48,
          3,
          12,
          2,4,
          19,
          48,
          3,
          12,
          2,4,
          19,
          48,
          3,
          12,
          2,4,
          19,
          48,
          3,
          12,
          2
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
                  "color": "rgba(21,60,255,1)"
                }, {
                  "offset": 0.8,
                  "color": "rgba(56,236,255,1)"
                },
                {
                  "offset": 1,
                  "color": "rgba(56,236,255,1)"
                }
              ],
              "globalCoord": false
            }
          }
        },
        "barGap": "0"
      }, {
        "name": "C相",
        "type": "bar",
        "data": [
          4,
          2,
          36,
          6,
          8,
          6,
           4,
          2,
          36,
          6,
          8,
          6,
           4,
          2,
          36,
          6,
          8,
          6, 4,
          2,
          36,
          6,
          8,
          6
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
                  "color": "rgba(118,36,245,1)"
                },
                {
                  "offset": 0.8,
                  "color": "rgba(239,17,207,1)"
                },
                {
                  "offset": 1,
                  "color": "rgba(239,17,207,1)"
                }
              ],
              "globalCoord": false
            }
          }
        },
        "barGap": "0"
      }
    ]
};