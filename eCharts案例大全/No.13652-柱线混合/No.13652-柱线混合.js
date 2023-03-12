option = {
    width: 350,
    height: 230,
   "title": {
      "text": "自定义的折柱混合--BarLine",
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
          "name": "待处理",
          "icon": "circle",
          "textStyle": {
            "color": "#7d838b"
          }
        },
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
          "1",
          "2",
          "3",
          "4",
          "5",
          6,7,8,9,10,11,12
        ],
        "axisPointer": {
          "type": "shadow"
        },
        "axisLabel": {
          "show": true,
          interval: 0,
          "textStyle": {
            "color": "#3dd3f8"
          }
        }
      }
    ],
    "yAxis": [
      {
        "type": "value",
        "name": "单位(万)",
        "nameTextStyle": {
          "color": "#3dd3f8"
        },
        "min": 0,
        "axisLabel": {
          "show": true,
        //   inside: true,
          "textStyle": {
            "color": "#3dd3f8"
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
        "name": "",
        "show": true,
        "axisLabel": {
          "show": false,
          "textStyle": {
            "color": "#3dd3f8"
          }
        }
      }
    ],
    "grid": {
      "top": "20%"
    },
   
    "series": [
        /*
      {
        "name": "待处理",
        "type": "bar",
        "data": [
          26102,
          24132,
          28555,
          41262,
          49653,56384,80347,127614,70853,50505,33820,27310,
        ],
        "barWidth": "20",
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
      },*/
      {
        "name": "船舶进出港",
        "type": "line",
        "yAxisIndex": 0,
        "data": [
          2.6102,
          2.4132,
          2.8555,
          4.1262,
          4.9653,5.6384,8.0347,12.7614,7.0853,5.0505,3.3820,2.7310,
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