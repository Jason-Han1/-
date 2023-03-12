option = {
  "legend": {
    "show": false,
    "itemGap": 20,
    "x": "center",
    "y": "0",
    "textStyle": {
      "fontSize": 20,
      "color": "#fff",
      "fontWeight": "normal",
      "fontFamily": "微软雅黑"
    }
  },
  "tooltip": {
    "trigger": "axis",
    "show": true,
    "axisPointer": {
      "type": "cross",
      "label": {
        "backgroundColor": "#6a7985",
        "fontSize": 20,
        "fontWeight": "normal",
        "fontFamily": "微软雅黑"
      }
    },
    "backgroundColor": "rgba(50,50,50,0.7)",
    "textStyle": {
      "color": "#fff",
      "fontSize": 14,
      "fontWeight": "normal",
      "fontFamily": "微软雅黑"
    }
  },
  "xAxis": {
    "type": "category",
    "name": "",
    "boundaryGap": false,
    "nameTextStyle": {
      "color": "#D5CBE8",
      "fontSize": 20,
      "fontWeight": "normal",
      "fontFamily": "微软雅黑"
    },
    "nameGap": 5,
    "axisLine": {
      "show": true,
      "lineStyle": {
        "color": "#D5CBE8"
      }
    },
    "axisLabel": {
      "margin": 10,
      "textStyle": {
        "fontSize": 14,
        "fontWeight": "normal",
        "fontFamily": "微软雅黑",
        "color": "#D5CBE8"
      }
    },
    "splitLine": {
      "show": false,
      "lineStyle": {
        "type": "solid",
        "color": "#57617B"
      }
    }
  },
  "yAxis": {
    "setMin": true,
    "calibration": 5,
    "type": "value",
    "name": "",
    "nameTextStyle": {
      "color": "#D5CBE8",
      "fontSize": 20,
      "align": "left",
      "fontWeight": "normal",
      "fontFamily": "微软雅黑"
    },
    "nameGap": 30,
    "axisTick": {
      "show": false
    },
    "axisLine": {
      "show": false,
      "lineStyle": {
        "color": "#D5CBE8"
      }
    },
    "splitNumber": 5,
    "axisLabel": {
      "margin": 10,
      "textStyle": {
        "fontSize": 14,
        "color": "#D5CBE8",
        "fontWeight": "normal",
        "fontFamily": "微软雅黑"
      }
    },
    "splitLine": {
      "show": true,
      "lineStyle": {
        "type": "solid",
        "color": "#57617B"
      }
    }
  },
  "series": [
    {
      "name": "类别1",
      "type": "line",
      "stack": "Total",
      "label": {
        "show": true,
        "position": "top",
        "textStyle": {
          "color": "#fff",
          "fontSize": 14,
          "fontWeight": "normal",
          "fontFamily": "微软雅黑"
        }
      },
      "lineStyle": {
        "color": "#ffffff",
        "width": 2,
        "type": "solid"
      },
      "areaStyle": {
        "color": {
          "type": "linear",
          "x": 0,
          "y": 0,
          "x2": 0,
          "y2": 1,
          "colorStops": [
            {
              "offset": 0,
              "color": "rgba(63,177,227,0.5)"
            },
            {
              "offset": 1,
              "color": "rgba(255,255,255,0)"
            }
          ],
          "global": false
        }
      },
      "showSymbol": true,
      "symbol": "none",
      "symbolSize": 10,
      "smooth": true
    },
    {
      "name": "类别2",
      "type": "line",
      "label": {
        "show": true,
        "position": "top",
        "textStyle": {
          "color": "#fff",
          "fontSize": 14,
          "fontWeight": "normal",
          "fontFamily": "微软雅黑"
        }
      },
      "lineStyle": {
        "color": "#000000",
        "width": 2,
        "type": "solid"
      },
      "areaStyle": {
        "color": {
          "type": "linear",
          "x": 0,
          "y": 0,
          "x2": 0,
          "y2": 1,
          "colorStops": [
            {
              "offset": 0,
              "color": "rgba(107,230,193,0.5)"
            },
            {
              "offset": 1,
              "color": "rgba(255,255,255,0)"
            }
          ],
          "global": false
        }
      },
      "showSymbol": true,
      "symbol": "none",
      "symbolSize": 10,
      "smooth": true
    },
    {
      "name": "类别3",
      "type": "line",
      "label": {
        "show": true,
        "position": "top",
        "textStyle": {
          "color": "#fff",
          "fontSize": 14,
          "fontWeight": "normal",
          "fontFamily": "微软雅黑"
        }
      },
      "lineStyle": {
        "color": "rgba(255,253,0,1)",
        "width": 2,
        "type": "solid"
      },
      "areaStyle": {
        "color": {
          "type": "linear",
          "x": 0,
          "y": 0,
          "x2": 0,
          "y2": 1,
          "colorStops": [
            {
              "offset": 0,
              "color": "rgba(107,230,193,0.5)"
            },
            {
              "offset": 1,
              "color": "rgba(255,255,255,0)"
            }
          ],
          "global": false
        }
      },
      "showSymbol": true,
      "symbol": "none",
      "symbolSize": 10,
      "smooth": true
    },
    {
      "name": "类别4",
      "type": "line",
      "label": {
        "show": true,
        "position": "top",
        "textStyle": {
          "color": "#fff",
          "fontSize": 14,
          "fontWeight": "normal",
          "fontFamily": "微软雅黑"
        }
      },
      "lineStyle": {
        "color": "rgba(255,19,0,1)",
        "width": 2,
        "type": "solid"
      },
      "areaStyle": {
        "color": {
          "type": "linear",
          "x": 0,
          "y": 0,
          "x2": 0,
          "y2": 1,
          "colorStops": [
            {
              "offset": 0,
              "color": "rgba(107,230,193,0.5)"
            },
            {
              "offset": 1,
              "color": "rgba(255,255,255,0)"
            }
          ],
          "global": false
        }
      },
      "showSymbol": true,
      "symbol": "none",
      "symbolSize": 10,
      "smooth": true
    },
    {
      "name": "类别5",
      "type": "line",
      "label": {
        "show": true,
        "position": "top",
        "textStyle": {
          "color": "#fff",
          "fontSize": 14,
          "fontWeight": "normal",
          "fontFamily": "微软雅黑"
        }
      },
      "lineStyle": {
        "color": "rgba(4,0,255,1)",
        "width": 2,
        "type": "solid"
      },
      "areaStyle": {
        "color": {
          "type": "linear",
          "x": 0,
          "y": 0,
          "x2": 0,
          "y2": 1,
          "colorStops": [
            {
              "offset": 0,
              "color": "rgba(0,9,252,0.5)"
            },
            {
              "offset": 1,
              "color": "rgba(255,255,255,0)"
            }
          ],
          "global": false
        }
      },
      "showSymbol": true,
      "symbol": "none",
      "symbolSize": 10,
      "smooth": true
    }
  ],
  "autoRefrsh": {
    "allowRefh": false,
    "refrshTime": 7000
  },
}