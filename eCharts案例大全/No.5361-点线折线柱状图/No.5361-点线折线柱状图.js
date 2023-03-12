option = {
  "grid": {
    "left": "left",
    "right": 20,
    "bottom": 20,
    "width": "98%",
    "containLabel": true
  },
  "legend": {
    "data": [
      "a花费",
      "a销售",
      "a指数",
      "b花费",
      "b销售",
      "b指数"
    ]
  },
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "shadow",
      "shadowStyle": {
        "color": "rgba(0,60,101, .1)"
      }
    }
  },
  "yAxis": [
    {
      "type": "value",
      "name": "花费",
      "min": 0,
      "max": 250,
      "interval": 50,
      "axisLabel": {
        "formatter": "{value} 百万"
      }
    },
    {
      "type": "value",
      "name": "消费量",
      "min": 0,
      "max": 25,
      "interval": 5,
      "axisLabel": {
        "formatter": "{value} 百万"
      }
    }
  ],
  "series": [
    {
      "name": "a指数",
      "type": "scatter",
      "color": [
        "rgba(255, 0, 0, 0.2)"
      ],
      "label": {
        "normal": {
          "show": false,
          "position": "top",
          "textStyle": {
            "color": "#9bc8ff",
            "fontSize": 12
          },
          "formatter": "{c}"
        }
      },
      "itemStyle": {
        "normal": {
          "color": "red"
        }
      },
      "symbol": "circle",
      "symbolPosition": "end",
      "symbolSize": 30,
      "yAxisIndex": 1,
      "data": [
        {
          "name": "1月",
          "value": 2,
          "symbolSize": 20
        },
        {
          "name": "2月",
          "value": 2.2,
          "symbolSize": 10
        },
        [
          "3月",
          3.3
        ],
        [
          "4月",
          4.5
        ],
        [
          "5月",
          6.3
        ],
        [
          "6月",
          10.2
        ],
        [
          "7月",
          20.3
        ],
        [
          "8月",
          23.4
        ],
        [
          "9月",
          23
        ],
        [
          "10月",
          16.5
        ],
        [
          "11月",
          12
        ],
        [
          "12月",
          6.2
        ]
      ]
    },
    {
      "name": "b指数",
      "type": "scatter",
      "color": [
        "red"
      ],
      "label": {
        "normal": {
          "show": false,
          "position": "top",
          "textStyle": {
            "color": "#9bc8ff",
            "fontSize": 12
          },
          "formatter": "{c}"
        }
      },
      "itemStyle": {
        "normal": {
          "color": "blue",
          "opacity": 0.8
        }
      },
      "symbol": "circle",
      "symbolPosition": "end",
      "symbolSize": 20,
      "yAxisIndex": 1,
      "data": [
        {
          "name": "1月",
          "value": 3,
          "symbolSize": 20
        },
        {
          "name": "2月",
          "value": 5.2,
          "symbolSize": 10
        },
        [
          "3月",
          3.3
        ],
        [
          "4月",
          4.5
        ],
        [
          "5月",
          3.3
        ],
        [
          "6月",
          10.2
        ],
        [
          "7月",
          20.3
        ],
        [
          "8月",
          23.4
        ],
        [
          "9月",
          23
        ],
        [
          "10月",
          12.5
        ],
        [
          "11月",
          11
        ],
        [
          "12月",
          5.2
        ]
      ]
    },
    {
      "name": "a花费",
      "type": "bar",
      barCategoryGap: 0,
      "data": [
        2,
        4.9,
        7,
        23.2,
        25.6,
        76.7,
        135.6,
        162.2,
        32.6,
        20,
        6.4,
        3.3
      ]
    },
    {
      "name": "b花费",
      "type": "bar",
      barCategoryGap: 0,
      "data": [
        2.6,
        5.9,
        9,
        26.4,
        28.7,
        70.7,
        175.6,
        182.2,
        48.7,
        18.8,
        6,
        2.3
      ]
    },
    {
      "color": [
        "red"
      ],
      "name": "a销售",
      "type": "line",
      "yAxisIndex": 1,
      "symbolSize": 10,
      "data": [
        2,
        2.2,
        3.3,
        4.5,
        6.3,
        10.2,
        20.3,
        23.4,
        23,
        16.5,
        12,
        6.2
      ]
    },
    {
      "color": [
        "blue"
      ],
      "name": "b销售",
      "type": "line",
      "yAxisIndex": 1,
      "symbolSize": 10,
      "data": [
        3,
        5.2,
        3.3,
        4.5,
        3.3,
        10.2,
        20.3,
        23.4,
        23,
        12.5,
        11,
        5.2
      ]
    }
  ],
  "xAxis": [
    {
      "type": "category",
      "data": [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      "axisPointer": {
        "type": "shadow"
      }
    }
  ],
  "color": [
    "red",
    "blue"
  ]
}