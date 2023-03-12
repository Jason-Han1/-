option = {
  "tooltip": {
    "show": true,
    "trigger": "axis",
    "axisPointer": {
      "type": "cross",
      "label": {
        "backgroundColor": "#6a7985"
      }
    },
    "backgroundColor": "rgb(255, 255, 255)",
    "textStyle": {
      "color": "#2c3e50",
      "align": "left"
    },
    "extraCssText": "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);"
  },
  "legend": {
    "show": true,
    "data": [
      "aliexpress",
      "amazon",
      "banggood",
      "cdiscount",
      "chicdeals",
      "ebay",
      "hiselling",
      "newchic",
      "newegg",
      "priceminster",
      "secrexy",
      "shopify",
      "walmart",
      "wish",
      "yoins",
      "品牌站"
    ]
  },
  "grid": {
    "left": "30",
    "right": "6%",
    "top": "15%",
    "containLabel": true
  },
  "xAxis": [
    {
      "show": true,
      "type": "category",
      "boundaryGap": false,
      "axisLabel": {},
      "data": [
        "20190408-20190414",
        "20190415-20190421",
        "20190422-20190428",
        "20190429-20190505",
        "20190506-20190512"
      ]
    }
  ],
  "yAxis": {
    "scale": true,
    "show": true,
    "name": "",
    "nameRotate": 90,
    "nameLocation": "middle",
    "nameGap": 50,
    "type": "value",
    "splitLine": {
      "show": true
    },
    "axisLabel": {
      "show": true,
      "interval": "auto"
    }
  },
  "dataZoom": [
        {
            "show": true,
            "type": "slider",
            "yAxisIndex": 0
        }
    ],

  "series": [
    {
      "name": "aliexpress",
      "type": "line",
      "data": [
        "0.8659",
        "0.8994",
        "0.9127",
        "0.7989",
        "0.9136"
      ],
      "label": {
        "normal": {
          "show": true,
          "position": "inside",
          "formatter": "{c}"
        }
      },
      "smooth": true
    },
    {
      "name": "amazon",
      "type": "line",
      "data": [
        "0.9145",
        "0.9427",
        "0.9314",
        "0.8153",
        "0.9333"
      ],
      "label": {
        "normal": {
          "show": true,
          "position": "inside",
          "formatter": "{c}"
        }
      },
      "smooth": true
    },
    {
      "name": "banggood",
      "type": "line",
      "data": [
        "0.8629",
        "0.8979",
        "0.8930",
        "0.6704",
        "0.8788"
      ],
      "label": {
        "normal": {
          "show": true,
          "position": "inside",
          "formatter": "{c}"
        }
      },
      "smooth": true
    },
    {
      "name": "cdiscount",
      "type": "line",
      "data": [
        "0.8995",
        "0.9833",
        "0.9253",
        "0.8349",
        "0.9215"
      ],
      "label": {
        "normal": {
          "show": true,
          "position": "inside",
          "formatter": "{c}"
        }
      },
      "smooth": true
    },
    {
      "name": "chicdeals",
      "type": "line",
      "data": [
        "0.3875",
        "0.8583",
        "0.7686",
        "0.4597",
        "0.8837"
      ],
      "label": {
        "normal": {
          "show": true,
          "position": "inside",
          "formatter": "{c}"
        }
      },
      "smooth": true
    },
    {
      "name": "ebay",
      "type": "line",
      "data": [
        "0.8307",
        "0.9001",
        "0.8795",
        "0.7288",
        "0.8928"
      ],
      "label": {
        "normal": {
          "show": false,
          "position": "inside",
          "formatter": "{c}"
        }
      },
      "smooth": true
    },
    {
      "name": "hiselling",
      "type": "line",
      "data": [
        "0.8000",
        "0.9483",
        "0.8139",
        "0.8750",
        "0.9091"
      ],
      "label": {
        "normal": {
          "show": false,
          "position": "inside",
          "formatter": "{c}"
        }
      },
      "smooth": true
    },
    {
      "name": "newchic",
      "type": "line",
      "data": [
        "0.8485",
        "0.8994",
        "0.9009",
        "0.5950",
        "0.3587"
      ],
      "label": {
        "normal": {
          "show": false,
          "position": "inside",
          "formatter": "{c}"
        }
      },
      "smooth": true
    },
    {
      "name": "newegg",
      "type": "line",
      "data": [
        "0.3529",
        "0.9412",
        "0.8000",
        "0.2500",
        "1"
      ],
      "label": {
        "normal": {
          "show": false,
          "position": "inside",
          "formatter": "{c}"
        }
      },
      "smooth": true
    },
    {
      "name": "priceminster",
      "type": "line",
      "data": [
        "0.7741",
        "0.9103",
        "0.8761",
        "0.7584",
        "0.8667"
      ],
      "label": {
        "normal": {
          "show": false,
          "position": "inside",
          "formatter": "{c}"
        }
      },
      "smooth": true
    },
    {
      "name": "secrexy",
      "type": "line",
      "data": [
        "0.8039",
        "0.9114",
        "0.9540",
        "0.7123",
        "0.9565"
      ],
      "label": {
        "normal": {
          "show": false,
          "position": "inside",
          "formatter": "{c}"
        }
      },
      "smooth": true
    },
    {
      "name": "shopify",
      "type": "line",
      "data": [
        "0.9400",
        "0.7162",
        "0.7895",
        "0.6949",
        "0.9697"
      ],
      "label": {
        "normal": {
          "show": false,
          "position": "inside",
          "formatter": "{c}"
        }
      },
      "smooth": true
    },
    {
      "name": "walmart",
      "type": "line",
      "data": [
        "0.8530",
        "0.8857",
        "0.8806",
        "0.7124",
        "0.9059"
      ],
      "label": {
        "normal": {
          "show": false,
          "position": "inside",
          "formatter": "{c}"
        }
      },
      "smooth": true
    },
    {
      "name": "wish",
      "type": "line",
      "data": [
        "0.7879",
        "0.7655",
        "0.6244",
        "0.6930",
        "0.6701"
      ],
      "label": {
        "normal": {
          "show": false,
          "position": "inside",
          "formatter": "{c}"
        }
      },
      "smooth": true
    },
    {
      "name": "yoins",
      "type": "line",
      "data": [
        "0.7271",
        "0.8569",
        "0.8355",
        "0.2170",
        "0.7600"
      ],
      "label": {
        "normal": {
          "show": false,
          "position": "inside",
          "formatter": "{c}"
        }
      },
      "smooth": true
    },
    {
      "name": "品牌站",
      "type": "line",
      "data": [
        "0",
        "0",
        "0",
        "0",
        "0"
      ],
      "label": {
        "normal": {
          "show": false,
          "position": "inside",
          "formatter": "{c}"
        }
      },
      "smooth": true
    }
  ]
}