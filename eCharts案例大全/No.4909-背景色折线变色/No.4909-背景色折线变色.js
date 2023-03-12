option = {
    数据节点1: 50,
    数据节点2: 80,
    backgroundColor: "#0a1216",
    color: ['rgba(14, 248, 254,', 'rgba(218, 52, 110,', 'rgba(63, 212, 255,'],
    dataset: {
        "source": [
            ["product", "data1","data2" ],
            ["休闲", "57","100"],
            ["运动", "23","100"],
            ["商务", "68","100"],
            ["户外", "50","100"],
            ["童装", "42","100"],
        ]
    },
   "循环时间毫秒": 1500,
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "line",
     "lineStyle": {
         "width":30,
         "color":"rgba(14, 248, 254,.1)"
     }
    },
    "borderWidth": 1,
    "backgroundColor": "#0e2b33",
    "borderColor": "rgba(14, 248, 254, 1)",
    "formatter": function(A){
        var htm="<div style='color:#fff'>"+A[0].name+"</div><div style='color:rgba(14, 248, 254,1)'>SKC满足率："+A[0].value[1].toLocaleString()+"%</div>"
        return htm   
    },
    "extraCssText": "z-index:96"
  },
  "grid": {
    "top": "15%",
    "left": "5%",
    "right": "5%",
    "bottom": "10%",
    "containLabel": true
  },
  "xAxis": [
    {
      "type": "category",
      "boundaryGap": true,
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "rgba(255, 255, 255,0.17)"
        }
      },
      "axisLabel": {
        "textStyle": {
          "color": "#fff",
          "margin": 15,
          "fontSize": 10
        }
      },
      "axisTick": {
        "show": false
      }
    }
  ],
  "yAxis": [
    {
      "type": "value",
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": "rgba(255, 255, 255,0.17)"
        }
      },
      "axisLine": {
        "show": false
      },
      "axisLabel": {
        "margin": 20,
        "textStyle": {
          "color": "#fff",
          "fontSize": 10
        }
      },
      "axisTick": {
        "show": false
      }
    }
  ],
  "series": [
    {
      "name": "SKC满足率",
      "type": "line",
      "smooth": false,
      "showAllSymbol": true,
      "symbol": 'circle',
      "showBackground": true,
            "backgroundStyle": {
                "color": "#fff",
                "borderColor": "#fff",
                "borderWidth": 30
            },
      "symbolSize": 10,
      "lineStyle": {
        "normal": {
          "show": true,
          "color": "rgba(14, 248, 254,1)",
        }
      },
       "label": {
                "show": true,
                "position": "top",
                 "formatter": function(params) {
                    return params.data[1] + "%"
                }
            },
             "itemStyle": {
                "color": function(params) {
                    var colorList = []
                    let num1 = option.数据节点1
                    if(params.data[1]<num1){
                        colorList[params.dataIndex] = option.color[0] + "1)"
                    }else{
                        
                    colorList[params.dataIndex] = option.color[1] + "1)"
                    }
                    return colorList[params.dataIndex];
                }
             }
    },
    {
            "type": "bar",
            "barWidth": "30",
            "showBackground": true,
            "backgroundStyle": {
                "color": "rgba(14, 248, 254,.05)",
                "borderColor": "rgba(14, 248, 254,0)",
                "borderWidth": 0
            }
            
        }
  ]
};