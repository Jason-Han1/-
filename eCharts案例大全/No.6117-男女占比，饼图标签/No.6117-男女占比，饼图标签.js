var scale=14
var rich = {
    yellow: {
        color: "#3bc7ff",
        fontSize: 14 * scale,
        padding: [8, 0],
        align: 'center'
    },
    total: {
        color: "#A2C7F3",
        fontSize: 60 * scale,
        align: 'center'
    },
    white: {
        color: "#a2c7f3",
        align: 'center',
        fontSize: 18 * scale,
        padding: [8,0 ]
    },
    blue: {
        color: '#3bc7ff',
        fontSize: 18 * scale,
        align: 'center'
    },
    hr: {
        borderColor: '#a2c7f3',
        width: 0,
        align:'center',
        borderWidth: 1,
        height: 20 
        
    },
         hr1: {
        borderColor: '#a2c7f3',
        width: '100%',
        borderWidth: 1,
        height: 0 }
}
option = {
  "color": [
    "#6482ff",
    "#25eaff",
    "#ff5f74",
    "#fcc04e",
    "#fad052",
    "#e84a50",
    "#ed44a1",
    "#fb6633",
    "#fb982e",
    "#64ca31"
  ],
  "color20": [
    "#2e5bff",
    "#8c54ff",
    "#00c1d4",
    "#33ac2e",
    "#fad052",
    "#e84a50",
    "#ed44a1",
    "#fb6633",
    "#fb982e",
    "#64ca31",
    "#5781ff",
    "#9071ff",
    "#24d7e0",
    "#56b84f",
    "#ffe27a",
    "#f57676",
    "#fa70b7",
    "#ff8a5c",
    "#ffb357",
    "#85d656"
  ],
  "tooltip": {
    "confine": true,
    "trigger": "item"
  },
  "legend": {
    "type": "scroll",
    "show": false,
    "data": [
      "某地区男生占比",
      "某地区女生占比"
    ],
    "textStyle": {
      "color": "#fff"
    }
  },
  "title": {
    "text": "男女占比",
    "show": true,
    "textStyle": {
      "color": "#fff",
      "fontSize": "36",
      "fontFamily": "Source Han Sans CN Regular, Source Han Sans CN Regular-Regular",
      "fontWeight": 400
    },
    "top": "42",
    "left": "40"
  },
  "backgroundColor": "transparent",
  "series": [
    {
      "type": "pie",
      "radius": [
        0,
        "50%"
      ],
      "center": [
        "54%",
        "50%"
      ],
      "avoidLabelOverlap": true,
      "label": {
        "normal": {
          "show": true,
           rich: rich
        }
      },
      "data": [
        {
          "name": "男生",
          "value": "55",
          "label": {
            "normal": {
              "show": true,
                 padding:[0,-15],
                height: 88,
               formatter:(params)=>{
                    return params.name +'\n'+ Math.round(params.percent)+'%'+ '\n{hr1|}\n{hr|}\n'
                  }
            
            }
          },
          "labelLine": {
            "normal": {
              "show": true
            },
            "emphasis": {
              "show": true
            }
          }
        },
        {
          "name": "女生",
          "value": "45",
          "label": {
            "normal": {
              "show": true,
            padding:[0,-15],
            height: 88,
               formatter:(params)=>{
                    return params.name +'\n'+ Math.round(params.percent)+'%'+ '\n{hr1|}\n{hr|}\n'
                  }
            }
          },
          "labelLine": {
            "normal": {
              "show": true
            },
            "emphasis": {
              "show": true
            }
          }
        }
      ],
      "itemStyle": {
        "emphasis": {
          "shadowBlur": 10,
          "shadowOffsetX": 0,
          "shadowColor": "rgba(0, 0, 0, 0.5)"
        }
      },
      "roseType": false,
      "labelLine": {
        "normal": {
          "show": true,
          "length": 0
,          "length2": 100
        }
      }
    },
    {
      "type": "pie",
      "radius": [
        0,
        "60%"
      ],
      "center": [
        "54%",
        "50%"
      ],
      "avoidLabelOverlap": true,
      "data": [
        {
          "name": "男生",
          "value": "55",
          "label": {
            "normal": {
              "show": false,
              "position": "outside"
            },
            "emphasis": {
              "show": true
            }
          },
          "labelLine": {
            "normal": {
              "show": false,
              "length": 0,
              "length2": 0
            },
            "emphasis": {
              "show": true
            }
          }
        },
        {
          "name": "女生",
          "value": "45",
          "label": {
            "normal": {
              "show": false,
              "position": "outside"
            },
            "emphasis": {
              "show": true
            }
          },
          "labelLine": {
            "normal": {
              "show": false,
              "length": 0,
              "length2": 0
            },
            "emphasis": {
              "show": true
            }
          },
          "itemStyle": {
            "color": "rgba(0,0,0,0)"
          }
        }
      ],
      "label": {
        "normal": {
          "show": true,
          "position": "outside"
        }
      },
      "labelLine": {
        "normal": {
          "show": true,
          "length": 88,
          "length2": 0
        }
      },
      "roseType": false
    }
  ],
  "isData": false,
  "percent": false,
  "componentName": "充值数据"
}
