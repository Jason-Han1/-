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
      "yoins"
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
      "data": [
        "20190401-20190407",
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
  "dataZoom": 
    [
        {
            type: 'slider',
            yAxisIndex: 0,
            filterMode: 'empty'
        },
        {
            type: 'inside',
            yAxisIndex: 0,
            filterMode: 'empty'
        }
    ]
    // "show": true,
    // "type": "inside",
    // "disabled": true,
    // "xAxisIndex": [
    //   0
    // ],
    // "filterMode": "filter"
  ,
  "series": [
    {
      "name": "aliexpress",
      "type": "line",
      "data": [
        "17534",
        "118629",
        "111172",
        "105406",
        "85366",
        "14650"
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
      "name": "amazon",
      "type": "line",
      "data": [
        "1378",
        "12083",
        "11196",
        "10697",
        "10992",
        "1684"
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
      "name": "banggood",
      "type": "line",
      "data": [
        "8058",
        "94317",
        "83452",
        "82884",
        "77807",
        "12611"
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
      "name": "cdiscount",
      "type": "line",
      "data": [
        "255",
        "2640",
        "1016",
        "308",
        "2417",
        "344"
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
      "name": "chicdeals",
      "type": "line",
      "data": [
        "43",
        "117",
        "120",
        "121",
        "124",
        "23"
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
      "name": "ebay",
      "type": "line",
      "data": [
        "7937",
        "61584",
        "53231",
        "53348",
        "56116",
        "8481"
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
        "3",
        "55",
        "58",
        "43",
        "16",
        "2"
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
        "1331",
        "15855",
        "14941",
        "14699",
        "13487",
        "2150"
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
        "2",
        "20",
        "17",
        "5",
        "4",
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
    },
    {
      "name": "priceminster",
      "type": "line",
      "data": [
        "37",
        "361",
        "379",
        "339",
        "356",
        "53"
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
        "12",
        "70",
        "79",
        "87",
        "73",
        "12"
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
        "13",
        "138",
        "74",
        "57",
        "59",
        "5"
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
        "349",
        "4761",
        "4244",
        "4128",
        "4137",
        "520"
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
        "51",
        "384",
        "354",
        "205",
        "316",
        "37"
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
        "370",
        "3496",
        "3458",
        "3520",
        "3686",
        "593"
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