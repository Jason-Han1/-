option = {
  "title": [
    {
      "text": "在线：2",
      "left": "27%",
      "top": "73%",
      "textAlign": "center",
      "textStyle": {
        "fontWeight": "normal",
        "color": "black",
        "fontSize": 14,
        "textAlign": "center"
      }
    },
    {
      "text": "离线：2",
      "left": "73%",
      "top": "73%",
      "textAlign": "center",
      "textStyle": {
        "fontWeight": "normal",
        "color": "black",
        "fontSize": 14,
        "textAlign": "center"
      }
    },
    {
      "text": "总数：4/在线：2/离线：2",
      "left": "45%",
      "top": "7%",
      "textAlign": "center",
      "textStyle": {
        "fontWeight": "bold",
        "color": "black",
        "fontSize": 14,
        "textAlign": "center"
      }
    }
  ],
  "series": [
    {
      "type": "liquidFill",
      "data": [
        0.5,
        0.3333333333333333,
        0.16666666666666666
      ],
      "radius": "50%",
      "color": [
        "#d46b08",
        "#fa8c16",
        "#ffc069"
      ],
      "center": [
        "27%",
        "45%"
      ],
      "outline": {
        "borderDistance": 5,
        "itemStyle": {
          "borderWidth": 6,
          "borderColor": "#d46b08"
        }
      },
      "label": {
        "normal": {
          "formatter": "50.00%",
          "color": "red",
          "fontSize": 12
        }
      },
      "backgroundStyle": {
        "color": "rgba(212, 107, 8, 0.2)"
      }
    },
    {
      "type": "liquidFill",
      "data": [
        0.5,
        0.3333333333333333,
        0.16666666666666666
      ],
      "radius": "50%",
      "color": [
        "#CDC5BF",
        "#CDC9C9",
        "#CFCFCF"
      ],
      "center": [
        "73%",
        "45%"
      ],
      "outline": {
        "borderDistance": 5,
        "itemStyle": {
          "borderWidth": 6,
          "borderColor": "#CDC5BF"
        }
      },
      "label": {
        "normal": {
          "formatter": "50.00%",
          "color": "red",
          "fontSize": 12
        },
        "color": "red",
      },
      "backgroundStyle": {
        "color": "rgba(4,24,74,0.2)"
      }
    }
  ]
};