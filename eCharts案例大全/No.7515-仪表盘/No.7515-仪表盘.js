option = {
  "title": [
    {
      "show": true,
      "text": "91.72%",
      "left": "center",
      "top": "center",
     
      "textStyle": {
        "color": "#fff",
        "fontSize": 24,
        "fontFamily": "Source Han Sans CN",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  ],
  "backgroundColor": "balck",
  "series": [
    {
      "name": "刻度1",
      "type": "gauge",
      "radius": "60%",
      "min": 0,
      "max": 100,
      "splitNumber": 5,
      "startAngle": 225,
      "endAngle": -45,
      "axisLine": {
        "show": true,
        "lineStyle": {
          "width": 1,
          "color": [
            [
              1,
              "rgba(0,0,0,0)"
            ]
          ]
        }
      },
      "axisLabel": {
        "show": true,
        "color": "#4247bc",
        "distance": 30,
        "fontSize": 10
      },
      "axisTick": {
        "show": true,
        "splitNumber": 7,
        "lineStyle": {
          "color": "#5c53de",
          "width": 1
        },
        "length": -8
      },
      "splitLine": {
        "show": true,
        "length": -20,
        "lineStyle": {
          "fontSize": 16,
          "color": "#443d92"
        }
      },
      "detail": {
        "show": false
      },
      "pointer": {
        "show": false
      }
    },
    {
      "name": "指针",
      "type": "gauge",
      "title": {
        "show": false
      },
      "detail": {
        "show": false
      },
      "data": [
        {
          "value": 91.716254
        }
      ],
      "radius": "59%",
      "itemStyle": {
        "color": "#73dcf7"
      },
      "axisLine": {
        "lineStyle": {
          "show": true,
          "width": 2,
          "color": [
            [
              10,
              "#314376"
            ]
          ]
        }
      },
      "axisLabel": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "splitLine": {
        "show": false
      },
      "pointer": {
        "show": true,
        "length": "73%",
        "width": 1
      }
    },
    {
      "name": "仪表盘2",
      "type": "gauge",
      "radius": "60%",
      "splitNumber": 10,
      "axisLine": {
        "lineStyle": {
          "color": [
            [
              0.91716254,
              {
                "x": 0,
                "y": 0,
                "x2": 1,
                "y2": 0,
                "type": "linear",
                "global": false,
                "colorStops": [
                  {
                    "offset": 0,
                    "color": "#646BFA"
                  },
                  {
                    "offset": 1,
                    "color": "#F23256"
                  }
                ]
              }
            ]
          ],
          "width": 6
        }
      },
      "axisLabel": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "splitLine": {
        "show": false
      },
      "itemStyle": {
        "show": false
      },
      "detail": {
        "show": false
      },
      "title": {
        "color": "#fff",
        "fontSize": 10,
        "offsetCenter": [
          0,
          "60%"
        ]
      },
      "data": [
        {
          "value": 91.71625399999999
        }
      ],
      "pointer": {
        "show": false
      }
    },
    {
      "type": "pie",
      "radius": "45%",
      "center": [
        "50%",
        "50%"
      ],
      "z": 1,
      "itemStyle": {
        "normal": {
          "color": {
            "x": 0.5,
            "y": 0.5,
            "r": 0.8,
            "type": "radial",
            "global": false,
            "colorStops": [
              {
                "offset": 0,
                "color": "#2B386A"
              },
              {
                "offset": 0.5,
                "color": "#2B086A"
              },
              {
                "offset": 1,
                "color": "#3F4A9A"
              }
            ]
          },
          "label": {
            "show": false
          },
          "labelLine": {
            "show": false
          }
        }
      },
      "hoverAnimation": false,
      "label": {
        "show": false
      },
      "tooltip": {
        "show": false
      },
      "data": [
        {
          "value": 68.7871905
        },
        {
          "value": 31.212809500000006,
          "itemStyle": {
            "color": "transparent"
          }
        }
      ],
      "animationType": "scale",
      "startAngle": 225
    }
  ]
}