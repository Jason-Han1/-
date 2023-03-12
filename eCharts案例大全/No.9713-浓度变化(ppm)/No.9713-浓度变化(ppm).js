option = {
    backgroundColor:'black',
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "lineStyle": {
        "color": {
          "type": "linear",
          "x": 0,
          "y": 0,
          "x2": 0,
          "y2": 1,
          "colorStops": [
            {
              "offset": 0,
              "color": "rgba(255,255,255,0)"
            },
            {
              "offset": 0.5,
              "color": "rgba(255,255,255,1)"
            },
            {
              "offset": 1,
              "color": "rgba(255,255,255,0)"
            }
          ],
          "global": false
        }
      }
    }
  },
  "title": {
    "text": "浓度变化(ppm)",
    "x": "center",
    "textStyle": {
      "color": "white"
    }
  },
  "grid": {
    "top": "35%",
    "left": "5%",
    "right": "9%",
    "bottom": "0%",
    "containLabel": true
  },
  "xAxis": [
    {
      "type": "category",
      "boundaryGap": true,
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "rgba(255,255,255,0.4)"
        }
      },
      "splitLine": {
        "show": false
      },
      "axisLabel": {
        "textStyle": {
          "color": "#d1e6eb",
          "margin": 15
        },
        formatter:function(val){
            var date= new Date(val)
            var month =date.getMonth() + 1;
            if(month < 10){
                month = '0' + month;
            }
            var day = date.getDate();
            if(day < 10){
                day = '0' + day;
            }
            var hour = date.getHours();
            if(hour < 10){
                hour = '0' + hour;
            }
            var min = date.getMinutes();
            if(min < 10){
                min = '0' + min;
            }
            return month + "-" + day + "\n" + hour + ":" + min;

        }
      },
      "axisTick": {
        "show": false
      },
      "data": [
        "2019-10-21 16:28:00",
        "2019-10-22 04:31:06",
        "2019-10-22 10:32:39",
        "2019-10-22 16:34:12",
        "2019-10-23 10:38:51",
        "2019-10-23 16:40:24",
        "2019-10-24 13:00:08",
        "2019-10-24 19:01:41",
        "2019-10-25 07:04:47",
        "2019-10-25 13:06:19",
        "2019-10-30 13:31:05",
        "2019-10-30 13:37:16",
        "2019-10-30 19:38:49",
        "2019-10-31 01:40:22",
        "2019-10-31 07:41:55",
        "2019-10-31 13:31:05"
      ]
    }
  ],
  "yAxis": [
    {
      "type": "value",
      "min": 0,
    //   "max": 2200,
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": "rgba(255,255,255,0.1)"
        }
      },
      "axisLine": {
        "show": false
      },
      "axisLabel": {
        "show": false,
        "margin": 20,
        "textStyle": {
          "color": "#d1e6eb"
        }
      },
      "axisTick": {
        "show": false
      }
    }
  ],
  "series": [
    {
      "name": "烟雾浓度",
      "type": "line",
      "smooth": true,
      "symbolSize": 8,
      "lineStyle": {
        "normal": {
          "color": "#53fdfe"
        },
        "borderColor": "#f0f"
      },
      "label": {
        "show": false,
        "position": "top",
        "textStyle": {
          "color": "#fff"
        }
      },
      "markLine": {
        "silent": true,
        "lineStyle": {
          "normal": {
            "color": "yellow"
          }
        },
        "data": [
          {
            "yAxis": 2000
          }
        ],
        "label": {
          "normal": {
            "formatter": "预警线"
          }
        }
      },
      "markPoint":{
            symbol: 'pin',
            symbolSize: 60,
            data:[
            {
                name:'最大值',
                type: 'max'
            }] ,
            itemStyle:{
                color: '#3398DB',
                borderColor: 'white'
            }
      },
      "itemStyle": {
        "normal": {
          "color": "rgba(255,255,255,1)"
        }
      },
      "tooltip": {
        "show": true
      },
      "areaStyle": {
        "normal": {
          "color": {
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false,
            "colorStops": [
              {
                "offset": 0,
                "color": "rgba(0,150,239,0.3)"
              },
              {
                "offset": 1,
                "color": "rgba(0,253,252,0)"
              }
            ]
          },
          "shadowColor": "rgba(53,142,215, 0.9)",
          "shadowBlur": 20
        }
      },
      "data": [
        2900,
        2800,
        2200,
        2600,
        2800,
        2600,
        2300,
        2000,
        2400,
        2400,
        2400,
        2500,
        2400,
        2500,
        2600,
        4000
      ]
    }
  ]
};
option = {
    backgroundColor:'black',
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "lineStyle": {
        "color": {
          "type": "linear",
          "x": 0,
          "y": 0,
          "x2": 0,
          "y2": 1,
          "colorStops": [
            {
              "offset": 0,
              "color": "rgba(255,255,255,0)"
            },
            {
              "offset": 0.5,
              "color": "rgba(255,255,255,1)"
            },
            {
              "offset": 1,
              "color": "rgba(255,255,255,0)"
            }
          ],
          "global": false
        }
      }
    }
  },
  "title": {
    "text": "浓度变化(ppm)",
    "x": "center",
    "textStyle": {
      "color": "white"
    }
  },
  "grid": {
    "top": "35%",
    "left": "5%",
    "right": "9%",
    "bottom": "10%",
    "containLabel": true
  },
  "xAxis": [
    {
      "type": "category",
      "boundaryGap": true,
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "rgba(255,255,255,0.4)"
        }
      },
      "splitLine": {
        "show": false
      },
      "axisLabel": {
        "textStyle": {
          "color": "#d1e6eb",
          "margin": 15
        },
        formatter:function(val){
                                    var date= new Date(val)
                                    var month =date.getMonth() + 1;
                                    if(month < 10){
                                        month = '0' + month;
                                    }
                                    var day = date.getDate();
                                    if(day < 10){
                                        day = '0' + day;
                                    }
                                    var hour = date.getHours();
                                    if(hour < 10){
                                        hour = '0' + hour;
                                    }
                                    var min = date.getMinutes();
                                    if(min < 10){
                                        min = '0' + min;
                                    }
                                    return month + "-" + day + "\n" + hour + ":" + min;

                                }
      },
      "axisTick": {
        "show": false
      },
      "data": [
        "2019-10-21 16:28:00",
        "2019-10-22 04:31:06",
        "2019-10-22 10:32:39",
        "2019-10-22 16:34:12",
        "2019-10-23 10:38:51",
        "2019-10-23 16:40:24",
        "2019-10-24 13:00:08",
        "2019-10-24 19:01:41",
        "2019-10-25 07:04:47",
        "2019-10-25 13:06:19",
        "2019-10-30 13:31:05",
        "2019-10-30 13:37:16",
        "2019-10-30 19:38:49",
        "2019-10-31 01:40:22",
        "2019-10-31 07:41:55",
        "2019-10-31 13:31:05"
      ]
    }
  ],
  "yAxis": [
    {
      "type": "value",
      "min": 0,
    //   "max": 2200,
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": "rgba(255,255,255,0.1)"
        }
      },
      "axisLine": {
        "show": false
      },
      "axisLabel": {
        "show": false,
        "margin": 20,
        "textStyle": {
          "color": "#d1e6eb"
        }
      },
      "axisTick": {
        "show": false
      }
    }
  ],
  "series": [
    {
      "name": "烟雾浓度",
      "type": "line",
      "smooth": true,
      "symbolSize": 8,
      "lineStyle": {
        "normal": {
          "color": "#53fdfe"
        },
        "borderColor": "#f0f"
      },
      "label": {
        "show": false,
        "position": "top",
        "textStyle": {
          "color": "#fff"
        }
      },
      "markLine": {
        "silent": true,
        "lineStyle": {
          "normal": {
            "color": "yellow"
          }
        },
        "data": [
          {
            "yAxis": 2000
          }
        ],
        "label": {
          "normal": {
            "formatter": "预警线"
          }
        }
      },
      "markPoint":{
            symbol: 'pin',
            symbolSize: 60,
            data:[
            {
                name:'最大值',
                type: 'max'
            }] ,
            itemStyle:{
                color: '#3398DB',
                borderColor: 'white'
            }
      },
      "itemStyle": {
        "normal": {
          "color": "rgba(255,255,255,1)"
        }
      },
      "tooltip": {
        "show": true
      },
      "areaStyle": {
        "normal": {
          "color": {
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false,
            "colorStops": [
              {
                "offset": 0,
                "color": "rgba(0,150,239,0.3)"
              },
              {
                "offset": 1,
                "color": "rgba(0,253,252,0)"
              }
            ]
          },
          "shadowColor": "rgba(53,142,215, 0.9)",
          "shadowBlur": 20
        }
      },
      "data": [
        2900,
        2800,
        2200,
        2600,
        2800,
        2600,
        2300,
        1800,
        2400,
        2400,
        2400,
        2500,
        2400,
        2500,
        2600,
        4000
      ]
    }
  ]
};
