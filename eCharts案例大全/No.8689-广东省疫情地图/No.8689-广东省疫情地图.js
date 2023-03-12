option = {
  "visualMap": {
    "show": true,
    "type": "piecewise",
    "min": 0,
    "max": 2000,
    "align": "right",
    "top": 0,
    "right": 0,
    "left": "3%",
    "inRange": {
      "color": [
        "#ffc0b1",
        "#ff8c71",
        "#ef1717",
        "#9c0505"
      ]
    },
    "pieces": [
      {
        "min": 1000
      },
      {
        "min": 500,
        "max": 999
      },
      {
        "min": 100,
        "max": 499
      },
      {
        "min": 10,
        "max": 99
      },
      {
        "min": 1,
        "max": 9
      }
    ],
    "orient": "horizontal",
    "showLabel": true,
    "itemWidth": 10,
    "itemHeight": 10,
    "textStyle": {
      "fontSize": 10
    }
  },
  "series": [
    {
      "left": "center",
      "type": "map",
      "name": "确诊人数",
      "label": {
        "show": true,
        "position": "inside",
        "fontSize": 6
      },
      "mapType": "广东",
      "data": [
        {
          "name": "深圳市",
          "value": 406
        },
        {
          "name": "广州市",
          "value": 335
        },
        {
          "name": "珠海市",
          "value": 95
        },
        {
          "name": "佛山市",
          "value": 84
        },
        {
          "name": "东莞市",
          "value": 81
        },
        {
          "name": "中山市",
          "value": 65
        },
        {
          "name": "惠州市",
          "value": 58
        },
        {
          "name": "汕头市",
          "value": 25
        },
        {
          "name": "江门市",
          "value": 22
        },
        {
          "name": "湛江市",
          "value": 22
        },
        {
          "name": "肇庆市",
          "value": 17
        },
        {
          "name": "梅州市",
          "value": 15
        },
        {
          "name": "茂名市",
          "value": 13
        },
        {
          "name": "阳江市",
          "value": 13
        },
        {
          "name": "清远市",
          "value": 12
        },
        {
          "name": "韶关市",
          "value": 10
        },
        {
          "name": "揭阳市",
          "value": 8
        },
        {
          "name": "潮州市",
          "value": 5
        },
        {
          "name": "汕尾市",
          "value": 5
        },
        {
          "name": "河源市",
          "value": 3
        },
        {
          "name": "地区待确认市",
          "value": 0
        }
      ],
      "zoom": 1.2,
      "roam": false,
      "showLegendSymbol": false,
      "emphasis": {},
      "rippleEffect": {
        "show": true,
        "brushType": "stroke",
        "scale": 2.5,
        "period": 4
      }
    }
  ]
}