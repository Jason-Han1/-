option = {
        backgroundColor: '#000',
        "normal": {
          "top": 200,
          "left": 300,

          "width": 500,
          "height": 400,
          "zIndex": 6,
          "backgroundColor": ""
        },
        "color": ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],
        "title": {
          "show": true,
          "left": "40%",
          "top": "1%",
          "textStyle": {
            "fontSize": 18,
            "color": "#fff",
            "fontStyle": "normal",
            "fontWeight": "normal"
          }
        },
        "tooltip": {
          "show": true,
          "trigger": "item"
        },
        "radar": {
          "center": ["50%", "50%"],
          "radius": "70%",
          "startAngle": 90,
          "splitNumber": 4,
          "shape": "circle",
          "splitArea": {
            "show":false,
            "areaStyle": {
              "color": ["transparent"]
            }
          },
          "axisLabel": {
            "show": true,
            "fontSize": 12,
            "color": "#0ab3f0"
          },
          "axisLine": {
            "show": true,
            "lineStyle": {
              "type": "dashed",
              "color": "#0ab3f0",
              "width":1.5//
            }
          },
          "splitLine": {
            "show": true,
            "lineStyle": {
              "color": "#0ab3f0",
              "width":2//
            }
          },
          "indicator": [{
            "name": "N[0]",
            "max": 180
          }, {
            "name": "",
            "max": 180
          }, {
            "name": "W[270]",
            "max": 180
          }, {
            "name": "",
            "max": 180
          },{
            "name": "S[180]",
            "max": 180
          }, {
            "name": "",
            "max": 180
          }, {
            "name": "E[90]",
            "max": 180
          }, {
            "name": "",
            "max": 180
          }]
        },
         legend: {
           icon: 'circle',
           bottom:'10',
          textStyle: { fontSize: 14, color: '#fff' },
          itemGap: 20,
          itemWidth: 14,
    data: ['GPS', 'BDS', 'GLONASS', 'Galileo']
  },
        "series": [
          {
          "name": "GPS",
          "type": "radar",
          "symbol": "circle",
          "symbolSize": 20,
          "itemStyle": {
            "normal": {
              "color":'rgba(255, 0, 0, 0.4)',
            }
          },
          "areaStyle": {
            "normal": {
              "color": "rgba(19, 173, 255, 0)"
            }
          },
          "lineStyle": {
            "normal": {
              "color": "rgba(19, 173, 255, 0)",
              "width": 2,
              "type": "dashed"
            }
          },
          "data": [
            [60, 10, 20, 50,60,90,60,60]
          ]
        },
          {
            "name": "BDS",
            "type": "radar",
            "symbol": "circle",
            "symbolSize": 20,
            "itemStyle": {
              "normal": {
                "color":'rgb(0,64,255,0.4)',
              }
            },
            "areaStyle": {
              "normal": {
                "color": "rgba(19, 173, 255, 0)"
              }
            },
            "lineStyle": {
              "normal": {
                "color": "rgba(19, 173, 255, 0)",
                "width": 2,
                "type": "dashed"
              }
            },
            "data": [
              [70, 30, 50, 80,90,40,88]
            ]
          },
          {
            "name": "GLONASS",
            "type": "radar",
            "symbol": "circle",
            "symbolSize": 20,
            "itemStyle": {
              "normal": {
                "color":'rgb(0,247,255,0.4)',
              }
            },
            "areaStyle": {
              "normal": {
                "color": "rgba(19, 173, 255, 0)"
              }
            },
            "lineStyle": {
              "normal": {
                "color": "rgba(19, 173, 255, 0)",
                "width": 2,
                "type": "dashed"
              }
            },
            "data": [
              [80, 20, 40, 60,80,20,44]
            ]
          },
          {
            "name": "Galileo",
            "type": "radar",
            "symbol": "circle",
            "symbolSize": 20,
            "itemStyle": {
              "normal": {
                "color":'rgb(0,255,234,0.4)',
              }
            },
            "areaStyle": {
              "normal": {
                "color": "rgba(19, 173, 255, 0)"
              }
            },
            "lineStyle": {
              "normal": {
                "color": "rgba(19, 173, 255, 0)",
                "width": 2,
                "type": "dashed"
              }
            },
            "data": [
              [60, 15, 25, 35,45,20,44]
            ]
          },
        ]
      };