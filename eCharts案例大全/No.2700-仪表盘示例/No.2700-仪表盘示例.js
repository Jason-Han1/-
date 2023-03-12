option = {
    "dataset": {
    "url":"dbzjgcyx/yy/yysj"
  },
  "backgroundColor": "rgb(0,0,0,1)",
  "title": {
    "text": "仪表盘示例",
    "top": 50,
    "triggerEvent": true,
    "textStyle": {
      "color": "#333",
      "fontSize": 16,
      "fontFamily": "sans-serif",
      "fontStyle": "normal",
      "fontWeight": "normal"
    },
    "textAlign": "center"
  },
  "series": [
    {
    "type": "gauge",
    "name": "半环",
    "startAngle": -90,
    "endAngle": -269.999,
    "min": 0,
    "max": 180,
      "z": 20,
    "radius": "240",
    "splitNumber":6,
    "detail": {"show": false},
    "center": [450, 380],
    "pointer": {
      "show": false
    },
    "axisLine": {
      "lineStyle": {
        "width": 1,
        "color": [
          [1, "#fff"]
        ]
      }
    },
    "axisTick": {
      "show":false
    },
    "splitLine": {
      "show":false
    },
    "axisLabel": {
      "show":true,
      "color": "#fff",
      "distance": -50,
      "fontSize": 12
    },
    "data": [{"value": "" }
    ]
  },
    {
    "type": "gauge",
    "name": "大环",
    "startAngle": 90,
    "endAngle": -269.999,
    "min": 0,
    "max": 360,
    "splitNumber":12,
      "z": 20,
    "radius": "210",
    "center": [450, 380],
    "pointer": {
      "show": false
    },
    "detail": {"show": false},
    "axisLine": {
      "show": true,
      "lineStyle": {
        "width": 1,
        "color": [
          [1, "#fff"]
        ]
      }
    },
    "axisTick": {
      "show":true,
      "distance": -15,
      "length": 15,
      "lineStyle": {
        "color": "#fff",
        "width": 1
      }
    },
    "splitLine": {
      "show":true,
      "distance": -30,
      "length": 30,
      "lineStyle": {
        "color":"#fff",
        "width": 2
      }
    },
    "axisLabel": {
      "show":true,
      "hiddenEndlabel":true,
      "color": "#fff",
      "distance": 0,
      "fontSize": 12
    },
    "data": []
  },
    {
    "type": "gauge",
    "name": "小环1",
    "startAngle": 90,
    "endAngle": -269.999,
    "splitNumber":12,
    "min": 0,
    "max": 360,
    "radius": "180",
    "center": [450, 380],
    "detail": {"show": false},
    "pointer": {
      "show": false
    },
    "axisLine": {
      "lineStyle": {
        "width": 1,
        "color": [
          [1, "#fff"]
        ]
      }
    },
    "axisTick": {
      "show":false
    },
    "splitLine": {
      "show":false,
      "distance": -30,
      "length": 30,
      "lineStyle": {
        "color":"#fff",
        "width": 2
      }
    },
    "axisLabel": {
      "show":false
    },
    "data": []
  },
    {
    "type": "gauge",
    "name": "小环2",
    "splitNumber":12,
    "startAngle": 90,
    "endAngle": -269.999,
    "min": 0,
    "max": 360,
    "radius": "150",
    "center": [450, 380],
    "detail": {"show": false},
    "pointer": {
      "show": false
    },
    "axisLine": {
      "lineStyle": {
        "width": 1,
        "color": [
          [1, "#fff"]
        ]
      }
    },
    "axisTick": {
      "show":false
    },
    "splitLine": {
      "show":true,
      "distance": -30,
      "length": 30,
      "lineStyle": {
        "color":"#fff",
        "width": 2
      }
    },
    "axisLabel": {
      "show":false
    },
    "data": []
  },
    {
      "type": "gauge",
      "name": "小环3",
      "startAngle": 90,
      "endAngle": -269.999,
      "splitNumber":12,
      "min": 0,
      "max": 360,
      "radius": "120",
      "center": [450, 380],
      "detail": {"show": false},
      "pointer": {
        "show": false
      },
      "axisLine": {
        "lineStyle": {
          "width": 1,
          "color": [
            [1, "#fff"]
          ]
        }
      },
      "axisTick": {
        "show":false
      },
      "splitLine": {
        "show":true,
        "distance": -30,
        "length": 30,
        "lineStyle": {
          "color":"#fff",
          "width": 2
        }
      },
      "axisLabel": {
        "show":false
      },
      "data": []
    },
    {
      "type": "gauge",
      "name": "小环4",
      "startAngle": 90,
      "endAngle": -269.999,
      "splitNumber":12,
      "min": 0,
      "max": 360,
      "radius": "90",
      "center": [450, 380],
      "detail": {"show": false},
      "pointer": {
        "show": false
      },
      "axisLine": {
        "lineStyle": {
          "width": 1,
          "color": [
            [1, "#fff"]
          ]
        }
      },
      "axisTick": {
        "show":false
      },
      "splitLine": {
        "show":true,
        "distance": -30,
        "length": 30,
        "lineStyle": {
          "color":"#fff",
          "width": 2
        }
      },
      "axisLabel": {
        "show":false
      },
      "data": []
    },
    {
      "type": "gauge",
      "name": "小环5",
      "startAngle": 90,
      "endAngle": -269.999,
      "splitNumber":12,
      "min": 0,
      "max": 360,
      "radius": "60",
      "center": [450, 380],
      "detail": {"show": false},
      "pointer": {
        "show": false
      },
      "axisLine": {
        "lineStyle": {
          "width": 1,
          "color": [
            [1, "#fff"]
          ]
        }
      },
      "axisTick": {
        "show":false
      },
      "splitLine": {
        "show":true,
        "distance": -30,
        "length": 30,
        "lineStyle": {
          "color":"#fff",
          "width": 2
        }
      },
      "axisLabel": {
        "show":false
      },
      "data": []
    },
    {
      "type": "gauge",
      "name": "小环6",
      "startAngle": 90,
      "endAngle": -269.999,
      "splitNumber":12,
      "min": 0,
      "max": 360,
      "radius": "30",
      "center": [450, 380],
      "detail": {"show": false},
      "pointer": {
        "show": false
      },
      "axisLine": {
        "lineStyle": {
          "width": 1,
          "color": [
            [1, "#fff"]
          ]
        }
      },
      "axisTick": {
        "show":true,
        "distance": -9,
        "length": 6,
        "lineStyle": {
          "color": "#fff",
          "width": 1
        }
      },
      "splitLine": {
        "show":true,
        "distance": -30,
        "length": 30,
        "lineStyle": {
          "color":"#fff",
          "width": 2
        }
      },
      "axisLabel": {
        "show":false,
        "color": "#fff",
        "distance": 15,
        "fontSize":10
      },
      "data": []
    },
    {
      "type": "pie",
      "name": "pie1",
      "clockWise": true,
      "radius": [240, 210],
      "center": [450, 380],
      "silent": true,
      "data": [ {
        "value": 180,
        "itemStyle": {
          "color": "#000"
        }
      },{
          "value": 75,
          "itemStyle": {
            "color": "#e4becb"
          }
        }, {
          "value": 105,
          "itemStyle": {
            "color": "#000"
          }
        }
      ]
    },
    {
      "type": "pie",
      "name": "pie2",
      "clockWise": true,
      "silent": true,
      "radius": [210, 180],
      "center": [450, 380],
      "data": [ {
          "value": 330,
          "itemStyle": {
            "color": "#3d5cfa"
            }
        },
        {
          "value": 30,
          "itemStyle": {
            "color": "#000"
          }
        }
      ]
    }
  ]
}