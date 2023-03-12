option = {
  "title": [
    {
      "text": "今天  12:00发布",
      "right": 0,
      "top": 10,
      "textStyle": {
        "color": "#b3b3b3",
        "fontSize": 12,
        "fontWeight": "normal"
      }
    },
    {
      "text": "监测站点：官渡区博物馆空气自动站",
      "bottom": "20px",
      "left": "center",
      "textStyle": {
        "color": "#b3b3b3",
        "fontSize": 12,
        "fontWeight": "normal"
      }
    }
  ],
  "grid": {
    "height": 200,
    "left": 0,
    "top": 0,
    "bottom": 0,
    "right": 0
  },
  "series": [
    {
      "name": "仪表盘",
      "type": "gauge",
      "axisLine": {
        "lineStyle": {
          "color": [
            [
              0.2,
              "#5DD1FA"
            ],
            [
              1,
              "#f7f9fc"
            ]
          ],
          "width": 10
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
      "title": {
        "color": "#7f7f7f",
        "fontSize": 16,
        "fontWeight": "bolder"
      },
      "detail": {
        "offsetCenter": [
          0,
          0
        ],
        "textStyle": {
          "fontSize": "48",
          "fontWeight": "bolder",
          "color": "#000"
        }
      },
      "pointer": {
        "show": false
      },
      "data": [
        {
          "name": "优",
          "value": 50
        }
      ]
    },
    {
      "title": {
        "color": "#7f7f7f",
        "fontSize": 13,
        "offsetCenter": [
          0,
          "40%"
        ]
      },
      "type": "gauge",
      "splitNumber": 0,
      "startAngle": 0,
      "endAngle": 0,
      "splitLine": {
        "show": false
      },
      "axisLabel": {
        "show": false
      },
      "pointer": {
        "show": false
      },
      "detail": {
        "show": false
      },
      "data": [
        {
          "name": "最近监测站 AQI"
        }
      ]
    }
  ]
}