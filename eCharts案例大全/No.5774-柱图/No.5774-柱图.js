option = {
  "grid": {
    "right": 13,
    "left": 263.0348307291667,
    "top": "15px",
    "bottom": "10px",
    "containLabel": false
  },
  "tooltip": {
    "axisPointer": {
      "type": "shadow",
      "shadowStyle": {
        "color": "rgba(0,0,0,0.04)"
      }
    },
    "trigger": "axis",
    "confine": true,
    "padding": 5,
    "backgroundColor": "#fff",
    "textStyle": {
      "color": "#333333",
      "fontSize": 16
    },
    "extraCssText": "box-shadow:0px 3px 7px 2px rgba(207,214,237,1);padding:10px"
  },
  "xAxis": [
    {
      "type": "value",
      "axisLabel": {
        "show": false
      },
      "splitNumber": 1,
      "axisLine": {
        "show": false
      },
      "splitLine": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "min": 0,
      "max": 12
    },
    {
      "type": "value",
      "axisLabel": {
        "show": false
      },
      "splitNumber": 1,
      "axisLine": {
        "show": false
      },
      "splitLine": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "max": 0.000001,
      "min": 0
    }
  ],
  "color": [
    "red",
    "red"
  ],
  "title": {
    "text": "",
    "show": false,
    "textStyle": {
      "fontStyle": "normal",
      "fontSize": 15,
      "color": "#777"
    }
  },
  "animationEasing": "elasticOut",
  "legend": {
    "data": [
      "某某1",
      "某某"
    ],
    "show": false
  },
  "yAxis": {
    "triggerEvent": true,
    "type": "category",
    "data": [
      "测试:今",
      "测试:今天",
      "测试:今天",
      "测试:今天天气",
      "测试:今天天气真",
      "测试:今天天气真好",
      "测试:今天天气真好呀",
      "测试:今天天气真好呀呀"
    ],
    "silent": false,
    "splitLine": {
      "show": false,
      "interval": 0
    },
    "axisLabel": {
      "interval": 0,
      "margin": 248.8056640625,
      "clickable": true,
      "textStyle": {
        "align": "left",
        "fontSize": 14,
        "color": "#333"
      }
    },
    "axisTick": {
      "show": false,
      "interval": "auto",
      "alignWithLabel": false
    },
    "inverse": true,
    "axisLine": {
      "show": false
    }
  },
  "series": [
    {
      "name": "某某1",
      "type": "bar",
      "barMaxWidth": 20,
      "data": [
        11, 2,3,4,5,5,6,7
      ],
      "stack": "one",
      "xAxisIndex": 0,
 
      "label": {
        "show": true,
        "position": "right",
        "color": "#333333"
      },
      "barWidth": 16
    },
    {
      "name": "某某",
      "type": "bar",
      "barMaxWidth": 20,
      "data": [
        11,
        12,
        13,
        14,
        12,
        13,
        14,
        12,
        13,
      ],
      "stack": "one",
      "xAxisIndex": 1,
      "color": "rgba(0,0,0,0)",
      "label": {
        "show": true,
        "position": "insideRight",
        "color": "#333333",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "MicrosoftYaHei"
      },
      "barWidth": 16
    }
  ],
  "animation": false
}