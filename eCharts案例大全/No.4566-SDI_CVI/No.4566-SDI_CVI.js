option = {
  "tooltip": {
    "trigger": "item"
  },
  "legend": {
    "selectedMode": true,
    "bottom": "-1%",
    "icon": "roundRect",
    "data": [
      "可接受(69)",
      "一般可接受(13)",
      "",
      "勉强接受(5)",
      "有待调整(3)"
    ],
    "textStyle": {
      "fontFamily": "Microsoft YaHei",
      "color": "#000"
    }
  },
  "xAxis": [
    {
      "name": "CVI",
      "type": "value",
      "min": 0,
      "max": 2.5,
      "axisTick": {
        "show": false
      },
      "axisLabel": {
        "margin": -160,
        "textStyle": {
          "color": "#000000",
          "fontFamily": "Microsoft YaHei"
        }
      },
      "axisLine": {
        "lineStyle": {
          "color": "#000000",
          "fontFamily": "Microsoft YaHei"
        }
      },
      "nameTextStyle": {
        "color": "#000000",
        "fontFamily": "Microsoft YaHei"
      },
      "z": 2
    },
    {
      "show": false,
      "type": "value",
      "min": 0,
      "max": 2.5,
      "axisTick": {
        "show": true
      },
      "axisLabel": {
        "show": false
      },
      "axisLine": {
        "show": true
      }
    },
    {
      "show": false,
      "type": "category",
      "data": [
        "a",
        "b",
        "c",
        "d"
      ],
      "axisTick": {
        "show": true
      },
      "axisLine": {
        "onZero": true
      }
    }
  ],
  "yAxis": [
    {
      "show": true,
      "type": "value",
      "min": -3,
      "max": 3,
      "interval": 0.5,
      "position": "right",
      "axisLine": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "axisLabel": {
        "show": false
      }
    },
    {
      "show": true,
      "name": "SDI",
      "type": "category",
      "data": [
        "",
        "-2.5",
        "-2.0",
        "-1.5",
        "-1.0",
        "-0.5",
        "0",
        "0.5",
        "1.0",
        "1.5",
        "2.0",
        "2.5",
        ""
      ],
      "boundaryGap": false,
      "axisTick": {
        "show": false
      },
      "axisLine": {
        "lineStyle": {
          "color": "#000000",
          "fontFamily": "Microsoft YaHei"
        }
      },
      "axisLabel": {
        "textStyle": {
          "color": "#000000",
          "fontFamily": "Microsoft YaHei"
        }
      },
      "nameTextStyle": {
        "color": "#000000",
        "fontFamily": "Microsoft YaHei"
      }
    },
    {
      "show": false,
      "type": "category",
      "data": [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
      ],
      "offset": 20,
      "boundaryGap": true,
      "axisTick": {
        "interval": 0
      }
    },
    {
      "show": false,
      "type": "category",
      "data": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "boundaryGap": true,
      "offset": 40,
      "axisTick": {
        "interval": 0
      }
    },
    {
      "show": false,
      "type": "category",
      "data": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "axisTick": {
        "interval": 0
      },
      "offset": 60
    },
    {
      "show": false,
      "type": "value",
      "min": -3,
      "max": 3
    }
  ],
  "series": [
    {
      "name": "有待调整(3)",
      "type": "scatter",
      "silent": true,
      "animation": false,
      "data": [
        [
          "2.26",
          "0.31"
        ],
        [
          "2.49",
          "1.09"
        ],
        [
          2.5,
          "0.66"
        ]
      ],
      "markArea": {
        "silent": true
      },
      "itemStyle": {
        "normal": {
          "color": "#ff6363"
        }
      },
      "xAxisIndex": 0,
      "yAxisIndex": 0
    },
    {
      "name": "勉强接受(5)",
      "type": "scatter",
      "animation": false,
      "silent": true,
      "data": [
        [
          "1.17",
          "1.83"
        ],
        [
          "0.60",
          "-2.00"
        ],
        [
          "0.94",
          "1.86"
        ],
        [
          "0.63",
          "1.60"
        ],
        [
          "0.37",
          "1.57"
        ]
      ],
      "markArea": {
        "silent": true
      },
      "itemStyle": {
        "normal": {
          "color": "#ffad2d"
        }
      },
      "xAxisIndex": 0,
      "yAxisIndex": 0
    },
    {
      "name": "一般可接受(13)",
      "type": "scatter",
      "animation": false,
      "silent": true,
      "data": [
        [
          "0.23",
          "-1.03"
        ],
        [
          "0.14",
          "-1.14"
        ],
        [
          "0.17",
          "-1.31"
        ],
        [
          "0.34",
          "-1.26"
        ],
        [
          "1.49",
          "0.89"
        ],
        [
          "0.31",
          "-1.09"
        ],
        [
          "1.09",
          "0.00"
        ],
        [
          "0.40",
          "1.17"
        ],
        [
          "0.51",
          "1.09"
        ],
        [
          "0.29",
          "-1.03"
        ],
        [
          "0.60",
          "1.26"
        ],
        [
          "0.43",
          "1.46"
        ],
        [
          "0.26",
          "-1.06"
        ]
      ],
      "markArea": {
        "silent": true
      },
      "itemStyle": {
        "normal": {
          "color": "#ffad2d"
        }
      },
      "xAxisIndex": 0,
      "yAxisIndex": 0
    },
    {
      "name": "可接受(69)",
      "type": "scatter",
      "animation": false,
      "silent": true,
      "data": [
        [
          "0.26",
          "-0.43"
        ],
        [
          "0.17",
          "-0.80"
        ],
        [
          "0.31",
          "0.63"
        ],
        [
          "0.11",
          "-0.03"
        ],
        [
          "0.26",
          "-0.94"
        ],
        [
          "0.34",
          "-0.11"
        ],
        [
          "0.34",
          "0.54"
        ],
        [
          "0.74",
          "0.20"
        ],
        [
          "0.20",
          "-0.29"
        ],
        [
          "0.43",
          "-0.80"
        ],
        [
          "0.54",
          "0.71"
        ],
        [
          "0.26",
          "0.37"
        ],
        [
          "0.17",
          "0.03"
        ],
        [
          "0.57",
          "0.80"
        ],
        [
          "0.26",
          "-0.20"
        ],
        [
          "0.51",
          "0.46"
        ],
        [
          "0.83",
          "-0.69"
        ],
        [
          "0.26",
          "0.11"
        ],
        [
          "0.29",
          "-0.69"
        ],
        [
          "0.40",
          "1.00"
        ],
        [
          "0.34",
          "0.11"
        ],
        [
          "0.31",
          "-0.63"
        ],
        [
          "0.34",
          "-0.71"
        ],
        [
          "0.31",
          "0.46"
        ],
        [
          "0.46",
          "0.17"
        ],
        [
          "0.40",
          "0.94"
        ],
        [
          "0.14",
          "-0.83"
        ],
        [
          "0.23",
          "0.14"
        ],
        [
          "0.20",
          "-0.69"
        ],
        [
          "0.63",
          "0.06"
        ],
        [
          "0.26",
          "-0.11"
        ],
        [
          "0.23",
          "-0.57"
        ],
        [
          "0.57",
          "-0.49"
        ],
        [
          "0.40",
          "-0.17"
        ],
        [
          "0.49",
          "0.60"
        ],
        [
          "0.26",
          "-0.46"
        ],
        [
          "0.23",
          "0.29"
        ],
        [
          "0.17",
          "-0.57"
        ],
        [
          "0.26",
          "-0.74"
        ],
        [
          "0.34",
          "0.31"
        ],
        [
          "0.37",
          "-0.11"
        ],
        [
          "0.40",
          "-0.69"
        ],
        [
          "0.37",
          "0.60"
        ],
        [
          "0.17",
          "-0.83"
        ],
        [
          "0.37",
          "-0.66"
        ],
        [
          "0.74",
          "0.40"
        ],
        [
          "0.34",
          "-0.51"
        ],
        [
          "0.26",
          "-0.06"
        ],
        [
          "0.23",
          "0.09"
        ],
        [
          "0.43",
          "-0.26"
        ],
        [
          "0.54",
          "0.43"
        ],
        [
          "0.54",
          "-0.26"
        ],
        [
          "0.37",
          "0.17"
        ],
        [
          "0.34",
          "-0.49"
        ],
        [
          "0.34",
          "-0.26"
        ],
        [
          "0.34",
          "-0.23"
        ],
        [
          "0.69",
          "-0.54"
        ],
        [
          "0.29",
          "-0.80"
        ],
        [
          "0.63",
          "-0.23"
        ],
        [
          "0.40",
          "0.97"
        ],
        [
          "0.34",
          "1.00"
        ],
        [
          "0.26",
          "-0.71"
        ],
        [
          "0.69",
          "-0.43"
        ],
        [
          "0.26",
          "-0.40"
        ],
        [
          "0.37",
          "-0.14"
        ],
        [
          "0.51",
          "0.63"
        ],
        [
          "0.23",
          "0.00"
        ],
        [
          "0.37",
          "0.14"
        ],
        [
          "0.51",
          "0.31"
        ]
      ],
      "markArea": {
        "silent": true
      },
      "itemStyle": {
        "normal": {
          "color": "#27b900"
        }
      },
      "xAxisIndex": 0,
      "yAxisIndex": 0
    },
    {
      "type": "line",
      "animation": false,
      "xAxisIndex": 1,
      "yAxisIndex": 1,
      "data": [
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "type": "line",
      "animation": false,
      "xAxisIndex": 2,
      "yAxisIndex": 5,
      "data": [
        0
      ],
      "silent": true,
      "lineStyle": {
        "normal": {
          "opacity": 0
        }
      },
      "itemStyle": {
        "normal": {
          "opacity": 0
        }
      },
      "markLine": {
        "data": [
          {
            "type": "average",
            "name": "",
            "symbol": "none"
          }
        ],
        "lineStyle": {
          "normal": {
            "type": "solid"
          }
        },
        "label": {
          "normal": {
            "show": false
          }
        }
      }
    },
    {
      "type": "bar",
      "animation": false,
      "data": [
        {
          "value": 0,
          "itemStyle": {
            "normal": {
              "color": "#dbf5fd"
            }
          }
        },
        {
          "value": 2,
          "itemStyle": {
            "normal": {
              "color": "#dbf5fd"
            }
          }
        },
        {
          "value": 2,
          "itemStyle": {
            "normal": {
              "color": "#dbf5fd"
            }
          }
        },
        {
          "value": 2,
          "itemStyle": {
            "normal": {
              "color": "#dbf5fd"
            }
          }
        },
        {
          "value": 2,
          "itemStyle": {
            "normal": {
              "color": "#dbf5fd"
            }
          }
        },
        {
          "value": 0,
          "itemStyle": {
            "normal": {
              "color": "#dbf5fd"
            }
          }
        }
      ],
      "barGap": 0,
      "barCategoryGap": 0,
      "xAxisIndex": 0,
      "yAxisIndex": 2,
      "silent": true
    },
    {
      "type": "bar",
      "animation": false,
      "data": [
        {
          "value": 0,
          "itemStyle": {
            "normal": {}
          }
        },
        {
          "value": 0,
          "itemStyle": {
            "normal": {}
          }
        },
        {
          "value": 0,
          "itemStyle": {
            "normal": {}
          }
        },
        {
          "value": 1.5,
          "itemStyle": {
            "normal": {
              "color": "#abe8fd"
            }
          }
        },
        {
          "value": 1.5,
          "itemStyle": {
            "normal": {
              "color": "#abe8fd"
            }
          }
        },
        {
          "value": 1.5,
          "itemStyle": {
            "normal": {
              "color": "#abe8fd"
            }
          }
        },
        {
          "value": 1.5,
          "itemStyle": {
            "normal": {
              "color": "#abe8fd"
            }
          }
        },
        {
          "value": 1.5,
          "itemStyle": {
            "normal": {
              "color": "#abe8fd"
            }
          }
        },
        {
          "value": 1.5,
          "itemStyle": {
            "normal": {
              "color": "#abe8fd"
            }
          }
        },
        {
          "value": 0,
          "itemStyle": {
            "normal": {}
          }
        },
        {
          "value": 0,
          "itemStyle": {
            "normal": {}
          }
        },
        {
          "value": 0,
          "itemStyle": {
            "normal": {}
          }
        }
      ],
      "barGap": 0,
      "barCategoryGap": 0,
      "xAxisIndex": 0,
      "yAxisIndex": 3,
      "silent": true
    },
    {
      "type": "bar",
      "animation": false,
      "data": [
        {
          "value": 0,
          "itemStyle": {
            "normal": {}
          }
        },
        {
          "value": 0,
          "itemStyle": {
            "normal": {}
          }
        },
        {
          "value": 1,
          "itemStyle": {
            "normal": {
              "color": "#5ad5fd"
            }
          }
        },
        {
          "value": 1,
          "itemStyle": {
            "normal": {
              "color": "#5ad5fd"
            }
          }
        },
        {
          "value": 0,
          "itemStyle": {
            "normal": {}
          }
        },
        {
          "value": 0,
          "itemStyle": {
            "normal": {}
          }
        }
      ],
      "barGap": 0,
      "barCategoryGap": 0,
      "xAxisIndex": 0,
      "yAxisIndex": 4,
      "silent": true
    }
  ]
}