option = {
  "color": [
    "skyblue",
    "#E3E3E3",
    "green"
  ],
  "title": {
    "text": "测试滚动条",
    "textStyle": {
      "fontSize": 16,
      "fontFamily": "Microsoft YaHei",
      "fontWeight": "bold"
    }
  },
  "grid": {
    "left": "0px",
    "right": 0,
    "top": 36,
    "bottom": 10,
    "containLabel": true
  },
  "animationEasing": "elasticOut",
  "legend": {
    "data": [
      "某某个数",
      "某某",
      "某某概率"
    ],
    "show": false
  },
  "tooltip": {
    "confine": true,
    "trigger": "axis",
    "axisPointer": {
      "type": "shadow",
      "shadowStyle": {
        "color": "rgba(0,0,0,0.04)"
      }
    },
    "backgroundColor": "#fff",
    "textStyle": {
      "color": "#333333",
      "fontSize": 11.2
    },
    "extraCssText": "box-shadow:0px 3px 7px 2px rgba(207,214,237,1);padding:10px"
  },
  "xAxis": {
    "type": "category",
    "data": [
      "分类1",
      "分类2",
      "分类3",
      "分类4",
      "分类5",
      "分类6",
      "分类7",
      "分类8",
      "分类9",
      "分类10",
      "分类11",
      "分类12",
      "分类13",
      "分类114"
    ],
    "silent": false,
    "splitLine": {
      "show": false,
      "interval": 0,
      "lineStyle": {
        "color": "#EDEFF6",
        "type": "solid"
      }
    },
    "axisLabel": {
      "color": "#323849",
      "interval": 0,
      "align": "center",
      "fontSize": 11.2
    },
    "axisTick": {
      "show": true,
      "interval": "auto",
      "alignWithLabel": true
    },
    "axisLine": {
      "lineStyle": {
        "color": "#F6F8FD"
      }
    },
    "triggerEvent": true
  },
  "yAxis": [
    {
      "interval": 5,
      "axisLine": {
        "lineStyle": {
          "color": "#F6F8FD"
        }
      },
      "splitLine": {
        "show": false
      },
      "axisLabel": {
        "color": "#BFBDBD",
        "fontSize": 11.2
      },
      "show": true,
      "offset": 0,
      "type": "value",
      "min": 0,
      "max": 10,
      "position": "left"
    },
    {
      "interval": 1,
      "axisLine": {
        "lineStyle": {
          "color": "#F6F8FD"
        }
      },
      "splitLine": {
        "show": false
      },
      "axisLabel": {
        "color": "#BFBDBD",
        "fontSize": 11.2
      },
      "show": true,
      "offset": 0,
      "type": "value",
      "min": 0,
      "max": 2,
      "position": "right"
    }
  ],
  "series": [
    {
      "name": "某某个数",
      "type": "bar",
      "barMaxWidth": 20,
      "data": [
        2.3,
        10,
        1.547,
        0.4,
        0.6,
        0.4,
        0.5,
        0.2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0.882,
        0,
        0,
        0
      ],
      "yAxisIndex": 0,
      "stack": "one",
      "barWidth": 24,
      
    },
    {
      "name": "某某",
      "type": "bar",
      "barMaxWidth": 20,
      "data": [
        3.491,
        0.0133,
        0,
        0.933334,
        0.1833,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0.63,
        0.784,
        2.323425,
        0.4377,
        0,
        0.1355,
        0.583333,
        0.168889
      ],
      "yAxisIndex": 0,
      "stack": "one",
      "barWidth": 24,
      "emphasis": {
        "itemStyle": {
          "color": "#E3E3E3"
        }
      },
      
    },
    {
      "name": "某某概率",
      "type": "line",
      "barMaxWidth": 20,
      "data": [
        0.4980,
        0,
        1.8539,
        0.2999,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1.4354417401069257,
        0,
        0,
        0
      ],
      "yAxisIndex": 1,
      "symbol": "none",
      
    }
  ],
  "dataZoom": [
    {
      "type": "slider",
      "start": 0,
      "end": 40,
      "height": 10,
      "bottom": 0,
      "showDetail": false,
      "showDataShadow": false,
      "borderColor": "transparent"
    }
  ]
}