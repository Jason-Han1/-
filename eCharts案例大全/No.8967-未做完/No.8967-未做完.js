      option = {
          angleAxis: {
              interval: 1,
              type: 'category',
              z: 2,
              axisLine: {
                  show: true,
                  lineStyle: {
                      color: "#6d7491",
                      width: 1,
                      type: "solid"
                  },
              },
              axisLabel: {
                  interval: 0,
                  show: true,
                  color: "#ccc",
                  margin: 8,
                  fontSize: 12
              },
          },
          radiusAxis: {
              min: 0,
              max: 100,
              interval: 20,
              axisLine: {
                  show: true,
                  lineStyle: {
                      color: "#999999",
                      width: 1,
                      type: "solid"
                  },
              },
              axisLabel: {
                  formatter: '{value} ',
                  show: true,
                  // padding: [0, 0, 20, 0],
                  color: "#ccc",
                  fontSize: 12
              },
              splitLine: {
                  lineStyle: {
                      color: "#4f546a",
                      width: 1,
                      type: "solid"
                  }
              }
          },
          polar: {},
          
         "series": [
        {
        "name": "XX线索",
        "type": "pie",
        "radius": [
            37,
            155
        ],
        "avoidLabelOverlap": false,
        "startAngle": 0,
        "center": [
            "50.1%",
            "50%"
        ],
        "roseType": "area",
        "selectedMode": "single",
        "label": {
            "normal": {
                "show": true,
                 position: 'inside',
                "formatter": "{c}"
            },
            "emphasis": {
                "show": true
            }
        },
        "labelLine": {
            "normal": {
                "show": false,
                "smooth": false,
                "length": 20,
                "length2": 10
            },
            "emphasis": {
                "show": true
            }
        },
        "data": [
            {
                "value": 20000,
                "name": "义乌市1",
                "itemStyle": {
                    "normal": {
                        "color": "#f845f1"
                    }
                }
            },
            {
                "value": 30000,
                "name": "义乌市2",
                "itemStyle": {
                    "normal": {
                        "color": "#ad46f3"
                    }
                }
            },
            {
                "value": 50000,
                "name": "义乌市3",
                label:{
                    normal:{
                inverse:0,
              rotate:-45,  
                    },
                },
                "itemStyle": {
                    "normal": {
                        "color": "#5045f6"
                    }
                }
            },
            {
                "value":40000,
                "name": "义乌市4",
                "itemStyle": {
                    "normal": {
                        "color": "#4777f5"
                    }
                }
            },
            {
                "value": 8800,
                "name": "义乌市5",
                "itemStyle": {
                    "normal": {
                        "color": "#44aff0"
                    }
                }
            },
            {
                "value": 20000,
                "name": "义乌市6",
                "itemStyle": {
                    "normal": {
                        "color": "#45dbf7"
                    }
                }
            },
            {
                "value": 20000,
                "name": "义乌市7",
                "itemStyle": {
                    "normal": {
                        "color": "#f6d54a"
                    }
                }
            },
            {
                "value": 16000,
                "name": "义乌市8",
                "itemStyle": {
                    "normal": {
                        "color": "#f69846"
                    }
                }
            },
            {
                "value": 18000,
                "name": "义乌市9",
                "itemStyle": {
                    "normal": {
                        "color": "#ff4343"
                    }
                }
            },
            {
                "value": 20000,
                "name": "",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": false
                        },
                        "labelLine": {
                            "show": false
                        }
                    }
                }
            },
            {
                "value": 19000,
                "name": "",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": false
                        },
                        "labelLine": {
                            "show": false
                        }
                    }
                }
            },
            {
                "value": 20800,
                "name": "",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": false
                        },
                        "labelLine": {
                            "show": false
                        }
                    }
                }
            },
            {
                "value": 700,
                "name": "",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": false
                        },
                        "labelLine": {
                            "show": false
                        }
                    }
                }
            },
            {
                "value": 0,
                "name": "",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": false
                        },
                        "labelLine": {
                            "show": false
                        }
                    }
                }
            },
            {
                "value": 0,
                "name": "",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": false
                        },
                        "labelLine": {
                            "show": false
                        }
                    }
                }
            },
            {
                "value": 0,
                "name": "",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": false
                        },
                        "labelLine": {
                            "show": false
                        }
                    }
                }
            },
            {
                "value": 0,
                "name": "",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": false
                        },
                        "labelLine": {
                            "show": false
                        }
                    }
                }
            },
            {
                "value": 0,
                "name": "",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": false
                        },
                        "labelLine": {
                            "show": false
                        }
                    }
                }
            }]
    }]
      };