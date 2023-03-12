option = {
  "grid": [
    {
      "show": false,
      "containLabel": true,
      "left": 105,
      "right": 20,
      "bottom": 10,
      "top": 10
    }
  ],
  "title": [],
  "series": [
    {
      "id": "complete",
      "type": "pie",
      "radius": [
        "35%",
        "60%"
      ],
      "avoidLabelOverlap": false,
      "label": {
        "show": true,
        "position": "center",
        "fontSize": 24
      },
      "labelLine": {
        "show": false
      },
      "data": [
        {
          "value": 154819,
          "name": "已完成",
          "itemStyle": {},
          "emphasis": {
            "itemStyle": {}
          }
        },
        {
          "value": 9469224,
          "name": "未完成",
          "z": -1,
          "itemStyle": {
            "color": "transparent"
          }
        }
      ]
    },
    {
      "id": "unComplete",
      "type": "pie",
      "radius": [
        "40%",
        "55%"
      ],
      "label": {
        "show": false,
        "position": "outside",
        "rotate": 0,
        "formatter": "{b}: {@[1]}",
        "align": "center",
        "underline": false,
        "color": "auto",
        "strikethrough": false,
        "fontStyle": "normal",
        "fontFamily": "Microsoft Yahei",
        "fontSize": 14,
        "fontWeight": "normal"
      },
      "labelLine": {
        "show": false
      },
      "data": [
        {
          "value": 154819,
          "name": "已完成",
          "z": -1,
          silent: true,
          "itemStyle": {
            "color": "transparent"
          }
        },
        {
          "value": 9469224,
          "itemStyle": {},
          "emphasis": {
            "itemStyle": {
              "color": "rgb(255, 204, 0)"
            }
          },
          "name": "未完成"
        }
      ]
    }
  ],
  "tooltip": {
    "show": true,
    "textStyle": {
      "color": "#333",
      "underline": false,
      "strikethrough": false,
      "fontStyle": "normal",
      "fontFamily": "Microsoft Yahei",
      "fontSize": 14,
      "fontWeight": "normal"
    },
    "backgroundColor": "rgba(255, 255, 255, .9)",
    "borderColor": "rgba(204, 204, 204, .9)",
    "borderWidth": 1
  },
  "legend": {
    "type": "plain",
    "show": true,
    "textStyle": {
      "underline": false,
      "color": "#888888",
      "fontStyle": "normal",
      "fontSize": 12,
      "fontFamily": "Microsoft Yahei",
      "rich": {
        "a": {
          "fontSize": 12,
          "padding": 10
        },
        "b": {
          "fontSize": 14,
          "fontWeight": "bold"
        }
      },
      "strikethrough": false,
      "fontWeight": "normal"
    },
    "orient": "horizontal",
    "width": "35%",
    "legend": "item",
    "data": [
      {
        "name": "已完成",
        "icon": "circle"
      },
      {
        "name": "未完成",
        "icon": "circle"
      }
    ],
    "icon": "circle"
  },
  "color": [
    "rgb(102, 204, 204)",
    "rgb(255, 204, 0)",
    "rgb(255, 153, 204)",
    "rgb(153, 204, 51)",
    "rgb(102, 102, 51)",
    "rgb(153, 51, 102)",
    "rgb(255, 153, 153)",
    "rgb(204, 255, 102)",
    "rgb(255, 153, 0)",
    "rgb(204, 204, 51)",
    "rgb(255, 0, 51)",
    "rgb(255, 204, 153)",
    "rgb(255, 102, 102)",
    "rgb(102, 102, 153)",
    "rgb(72, 170, 221)",
    "rgb(105, 202, 127)",
    "rgb(255, 102, 0)",
    "rgb(204, 204, 153)",
    "rgb(153, 204, 204)",
    "rgb(139, 179, 234)"
  ],
  "label": {
    "distance": 5
  },
  "yAxis": [],
  "xAxis": []
};