var option = {
  "backgroundColor":"#fff",
  "tooltip":{
      "trigger":"axis",
      "backgroundColor":"rgba(0,0,0,0.5)"
  },
  "grid":{
      "top":"10%",
      "bottom":"30%"
  },
  "xAxis":[
      {
          "type":"value",
          "color":"#59588D",
          "axisLine":{
              "show":true
          },
          "min":0,
          "axisLabel":{
              "color":"#282828"
          },
          "splitLine":{

          },
          "name":"",
          "nameLocation":"middle",
          "nameTextStyle":{
              "fontSize":14,
              "align":"center",
              "padding":[
                  20,
                  0,
                  0,
                  0
              ]
          }
      }
  ],
  "yAxis":[
      {
          "type":"value",
          "splitNumber":4,
          "axisLine":{
              "show":true
          },
          "axisLabel":{
              "show":true,
              "textStyle":{
                  "color":"#737373"
              }
          },
          "name":"",
          "nameLocation":"left",
          "nameTextStyle":{
              "fontSize":14,
              "padding":[
                  200,
                  70,
                  -30,
                  0
              ]
          },
          "splitLine":{
              "show":true,
              "lineStyle":{
                  "color":"rgba(131,101,101,0.2)",
                  "type":"dashed"
              }
          }
      }
  ],
  "dataZoom":[
      {
          "type":"slider",
          "filterMode":"filter",
          "bottom":"20"
      },
      {
          "type":"inside"
      }
  ],
  "brush":{
      "toolbox":[
          "rect"
      ],
      "xAxisIndex":"all",
      "brushMode":"single",
      "transformable":true,
      "throttleType":"debounce",
      "throttleDelay":600,
      "brushStyle":{
          "borderWidth":3,
          "color":"rgba(120,140,180,0.6)",
          "borderColor":"rgba(120,140,180,0.8)"
      }
  },
  "toolbox":{
      "itemSize":20,
      "right":20,
      "top":5
  },
  "color":[
      "#00AC49",
      "#389AFF",
      "#A258EC"
  ],
  "legend":{
      "type":"scroll",
      "data":[
          "对比机",
          "试验机",
          "标准谱"
      ],
      "left":"right",
      "bottom":"bottom",
      "textStyle":{
          "width":"20px",
          "height":"20px"
      },
      "icon":"pin"
  },
  series: [
    {
      name:'对比机',
      markArea: {
        data: []
      },
      markLine: {
        symbol: 'none',
        data: []
      },
      data:[[0.1,22],[1.2,23],[2,43]],
      type: 'line',
      symbol: 'none',
      itemStyle: {
        normal: {
          lineStyle: {
            color: 'rgba(26, 140, 255, 1)'
          }
        }
      }
    },
    {
      name:'试验机',
      data: [[0,12],[1,23],[2,33]],
      type: 'line',
      symbol: 'none',
    },
    {
      name:'标准谱',
      data: [[0,12],[1,13],[2,3]],
      type: 'line',
      symbol: 'none',
    },
  ]
}