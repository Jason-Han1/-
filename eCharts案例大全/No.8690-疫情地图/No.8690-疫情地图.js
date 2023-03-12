option = {
  "visualMap": {
    "show": true,
    "type": "piecewise",
    "min": 0,
    "max": 2000,
    "align": "right",
    "top": "40%",
    "right": 0,
    "left": "auto",
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
    "orient": "vertical",
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
      "mapType": "china",
      "data": [
        {
          "name": "湖北",
          "value": 54406
        },
        {
          "name": "广东",
          "value": 1294
        },
        {
          "name": "河南",
          "value": 1212
        },
        {
          "name": "浙江",
          "value": 1162
        },
        {
          "name": "湖南",
          "value": 1001
        },
        {
          "name": "安徽",
          "value": 950
        },
        {
          "name": "江西",
          "value": 913
        },
        {
          "name": "江苏",
          "value": 604
        },
        {
          "name": "重庆",
          "value": 537
        },
        {
          "name": "山东",
          "value": 530
        },
        {
          "name": "四川",
          "value": 470
        },
        {
          "name": "黑龙江",
          "value": 425
        },
        {
          "name": "北京",
          "value": 372
        },
        {
          "name": "上海",
          "value": 326
        },
        {
          "name": "河北",
          "value": 291
        },
        {
          "name": "福建",
          "value": 285
        },
        {
          "name": "广西",
          "value": 235
        },
        {
          "name": "陕西",
          "value": 232
        },
        {
          "name": "海南",
          "value": 162
        },
        {
          "name": "云南",
          "value": 162
        },
        {
          "name": "贵州",
          "value": 143
        },
        {
          "name": "山西",
          "value": 127
        },
        {
          "name": "天津",
          "value": 121
        },
        {
          "name": "辽宁",
          "value": 119
        },
        {
          "name": "甘肃",
          "value": 90
        },
        {
          "name": "吉林",
          "value": 88
        },
        {
          "name": "宁夏",
          "value": 70
        },
        {
          "name": "新疆",
          "value": 70
        },
        {
          "name": "内蒙古",
          "value": 68
        },
        {
          "name": "香港",
          "value": 56
        },
        {
          "name": "青海",
          "value": 18
        },
        {
          "name": "台湾",
          "value": 18
        },
        {
          "name": "澳门",
          "value": 10
        },
        {
          "name": "西藏",
          "value": 1
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