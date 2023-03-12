option = {
  "yAxis": {
    "type": "category",
    "data": [
      "山东",
      "广东",
      "辽宁",
      "黑龙江",
      "湖北",
      "江苏",
      "河南",
      "湖南",
      "浙江",
      "四川"
    ],
    "z": 10,
    "show": true,
    "startAngle": 90,
    "axisLine": {
      "lineStyle": {
        "color": "rgb(0, 0, 0)",
        "width": "1"
      }
    },
    "axisLabel": {
      "fontSize": "12"
    },
    "splitLine": {
      "lineStyle": {},
      "show": false
    }
  },
  "xAxis": {
    "type": "value",
    "show": true,
    "axisLine": {
      "lineStyle": {
        "color": "rgb(0, 0, 0)",
        "width": "1"
      }
    },
    "axisLabel": {
      "interval": 0,
      "rotate": 0,
      "fontSize": "12"
    },
    "splitLine": {
      "lineStyle": {},
      "show": false
    }
  },
//   "polar": {
    
//   },
  "series": [
    {
      "name": "m1",
      "type": "bar",
    //   "coordinateSystem": "polar",
      "data": [
        914,
        836,
        668,
        652,
        588,
        583,
        454,
        432,
        418,
        392
      ],
    //   "stack": "sum",
      "itemStyle": {}
    }
  ],
  "legend": [],
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "shadow"
    },
    "confine": true,
    "enterable": true,
    "textStyle": {
      "color": "#CCCCCC",
      "fontSize": "14",
      "fontFamily": "Microsoft Yahei"
    },
    "backgroundColor": "rgb(102, 102, 102)"
  },
  "visualMap": [
    {
      "type": "continuous",
      "show": true,
      "max": 914,
      "min": 392,
      "splitNumber": 5,
     
      "calculable": true,
       dimension: 0,
      "seriesIndex": 0,
      "textStyle": {
        "color": "#000",
        "fontSize": "12"
      },
      "orient": "horizontal",
      "left": "center",
      "top": 10,
      "itemWidth": 10,
      "itemHeight": 124,
      "text": [
        "914",
        "392"
      ]
    }
  ],
  "graphic": [
    {
      "type": "group",
      "left": "center",
      "children": [
        {
          "type": "text",
          "z": 100,
          "style": {
            "fill": "#666666",
            "text": "省/自治区",
            "font": "12px Microsoft YaHei"
          }
        }
      ],
      "bottom": "5"
    }
  ]
};