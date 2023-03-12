 function tooltipSquare(color){
  return `<span style="display:inline-block;width:10px;height:10px;margin-right:5px;border-radius:2px;background:${color};"></span>`;
}
//tooltip 文本
 function tooltipFormatter(params){
  let result ='';
  if(params instanceof Array){
    result=`${params[0].axisValue}<br/>`;
    params.forEach(function(item){
      if(item.seriesName!==''){//数据的name为空不显示
        result+=`${tooltipSquare(item.color)}${item.seriesName}:${item.value}<br/>`
      }
      
    })
  }else{
    result=`${params.axisValue}<br/>${tooltipSquare(params.color)}${params.seriesName}:${params.value}`
  }
  return result;
}
option={
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "line",
      "lineStyle": {
        "color": "#5c656f"
      }
    },
    formatter:tooltipFormatter
  },
  "color": [
    "#399FFD",
    "#3BBBBA",
    "#E6C335",
    "#E17184",
    "#9B69DF"
  ],
  "legend": {
    "align": "left",
    "right": 16,
    "top": 16,
    "itemWidth": 10,
    "itemHeight": 10,
    "itemGap": 20,
    "data": [
      "东区",
      "西区",
      "南区",
      "北区",
      "中区"
    ]
  },
  "grid": {
    "left": 16,
    "right": 16,
    "bottom": 16,
    "top": 52,
    "containLabel": true,
    "lineStyle": {
      "type": "dashed"
    }
  },
  "xAxis": {
    "type": "category",
    "data": [
      {
        "value": "周一",
        "textStyle": {
          "color": "#5c656f"
        }
      },
      {
        "value": "周二",
        "textStyle": {
          "color": "#5c656f"
        }
      },
      {
        "value": "周三",
        "textStyle": {
          "color": "#5c656f"
        }
      },
      {
        "value": "周四",
        "textStyle": {
          "color": "#5c656f"
        }
      },
      {
        "value": "周五",
        "textStyle": {
          "color": "#5c656f"
        }
      },
      {
        "value": "周六",
        "textStyle": {
          "color": "#5c656f"
        }
      },
      {
        "value": "周日",
        "textStyle": {
          "color": "#5c656f"
        }
      }
    ],
    "axisTick": {
      "show": false
    },
    "axisLine": {
      "gridIndex": 10,
      "lineStyle": {
        "color": "#E4E8ED"
      }
    }
  },
  "yAxis": {
    "gridIndex": 0,
    "type": "value",
    "axisTick": {
      "show": false
    },
    "axisLabel": {
      "color": "#5c656f"
    },
    "axisLine": {
      "show": false
    },
    "splitLine": {
      "lineStyle": {
        "type": "dashed",
        "width": 1
      }
    }
  },
  "series": [
    {
      "name": "",
      "type": "line",
      "lineStyle": {
        "normal": {
          "color": "#5c656f",
          "width": 1
        }
      },
      "label": {
        "normal": {
          "show": true,
          "color": "#5c656f"
        }
      },
      "data": [
        655,
        662,
        655,
        684,
        691,
        645,
        651
      ]
    },
    {
      "name": "东区",
      "type": "bar",
      "stack": "放款金额",
      "barWidth": 10,
      "data": [
        132,
        145,
        126,
        140,
        150,
        105,
        134
      ]
    },
    {
      "name": "西区",
      "type": "bar",
      "stack": "放款金额",
      "barWidth": 10,
      "data": [
        120,
        130,
        127,
        136,
        149,
        145,
        151
      ]
    },
    {
      "name": "南区",
      "type": "bar",
      "stack": "放款金额",
      "barWidth": 10,
      "data": [
        156,
        145,
        135,
        128,
        149,
        126,
        119
      ]
    },
    {
      "name": "北区",
      "type": "bar",
      "stack": "放款金额",
      "barWidth": 10,
      "data": [
        123,
        126,
        130,
        136,
        128,
        124,
        120
      ]
    },
    {
      "name": "中区",
      "type": "bar",
      "stack": "放款金额",
      "barWidth": 10,
      "data": [
        124,
        116,
        137,
        144,
        115,
        145,
        127
      ]
    }
  ]
}