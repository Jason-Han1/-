option ={
    backgroundColor:'#fff',
  "title": [
    {
      "text": "",
      "subtext": "",
      "x": "center"
    },
    {
      "text": "",
      "subtext": "",
      "x": "25%",
      "y": "46%",
      "textStyle": {
        "color": "yellow",
        "fontSize": 12
      }
    }
  ],
  legend:{
      zlevel:3,
      bottom:0,
      left:'10%',
      textStyle:{
          padding:[0,50,0,0]
      },
      selectedMode:false,
      data:[
          {
              name:'集中上报时间段',
              icon:'rect'
          },
          {
              name:'超过20:00上报',
              icon:'rect'
          }
     ]
  },
  "tooltip": {
    "trigger": "item",
    "backgroundColor": "rgba(50,50,50,0)",
    "textStyle": {
      "color": "red",
      "fontWeight": "bold"
    },
    "formatter": "{d}%"
  },
  "grid": {
    "left": "70%",
    "right": "8%",
    "bottom": "3%",
    "containLabel": true
  },
  "xAxis": {
    "type": "value",
    "show": false,
    "boundaryGap": [
      0,
      0.01
    ],
    "axisTick": {
      "show": false
    },
    "axisLine": {
      "show": false
    },
    "splitLine": {
      "show": false
    }
  },
  "yAxis": {
    "show": true,
    "type": "category",
    // "data": null,
    data:['13:00～13:59','14:00～14:59','15:00～15:59','16:00～16:59','17:00～17:59'],
    "axisTick": {
      "show": false
    },
    "axisLine": {
      "show": false
    },
    "axisLabel": {
      "show": true
    }
  },
  "dataZoom": [],
  "series": [
    {
      "name": "最外圈圆环01",
      "type": "pie",
      "radius": [
        "84%",
        "82%"
      ],
      "center": [
        "24%",
        "50%"
      ],
      "data": [
        {
          "value": 335
        }
      ],
      "hoverAnimation": false,
      "itemStyle": {
        "normal": {
          "color": {
            "type": "linear",
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "colorStops": [
              {
                "offset": 0,
                "color": "#2e5ab3"
              },
              {
                "offset": 1,
                "color": "#58f2fe"
              }
            ],
            "global": false
          }
        }
      },
      "label": {
        "normal": {
          "position": "inner",
          "show": false
        }
      },
      "animation": false,
      "tooltip": {}
    },
    {
      "name": "上报数据时间点01",
      "type": "pie",
      "radius": [
        "20%",
        "57%"
      ],
      "roseType": "area",
      "color": [
        "#3681f4"
      ],
      "data": [
        {
          "name": "0~1",
          "value": 2
        },
        {
          "name": "1~2",
          "value": 2
        },
        {
          "name": "2~3",
          "value": 2
        },
        {
          "name": "3~4",
          "value": 2
        },
        {
          "name": "4~5",
          "value": 2
        },
        {
          "name": "5~6",
          "value": 2
        },
        {
          "name": "6~7",
          "value": 2
        },
        {
          "name": "7~8",
          "value": 2
        },
        {
          "name": "8~9",
          "value": 2
        },
        {
          "name": "9~10",
          "value": 2
        },
        {
          "name": "10~11",
          "value": 2
        },
        {
          "name": "11~12",
          "value": 2
        },
        {
          "name": "12~13",
          "value": 0,
          "itemStyle": {
            "color": "transparent"
          }
        },
        {
          "name": "13~14",
          "value": 2
        },
        {
          "name": "14~15",
          "value": 4
        },
        {
          "name": "15~16",
          "value": 3
        },
        {
          "name": "集中上报时间段",
          "value": 5,
          "itemStyle": {
            "color": "yellow"
          }
        },
        {
          "name": "17~18",
          "value": 2
        },
        {
          "name": "18~19",
          "value": 2
        },
        {
          "name": "19~20",
          "value": 3
        },
        {
          "name": "超过20:00上报",
          "value": 2,
          itemStyle:{
              color:'#f00'
          }
        },
        {
          "name": "21~22",
          "value": 0,
          "itemStyle": {
            "color": "transparent"
          }
        },
        {
          "name": "22~23",
          "value": 1
        },
        {
          "name": "23~24",
          "value": 1
        }
      ],
      "avoidLabelOverlap": false,
      "center": [
        "24%",
        "50%"
      ],
      "labelLine": {
        "normal": {
          "show": false
        }
      },
      "label": {
        "normal": {
          "position": "inner",
          "show": false
        }
      },
      "itemStyle": {
        "normal": {
          "shadowBlur": 10,
          "shadowOffsetX": 0,
          "shadowColor": "rgba(0, 0, 0, 0.5)",
          "color": null
        },
        "emphasis": {
          "shadowBlur": 10,
          "shadowOffsetX": 0,
          "shadowColor": "rgba(0, 0, 0, 0.5)"
        }
      },
      "tooltip": {
        "textStyle": {
          "color": "#fff"
        }
      }
    },
    {
      "name": "外第二圈圆环时间点刻度01",
      "type": "gauge",
      "min": 0,
      "max": 24,
      "startAngle": 90,
      "endAngle": 449.9,
      "radius": "84%",
      "splitNumber": 24,
      "clockwise": false,
      "animation": false,
      "center": [
        "24%",
        "50%"
      ],
      "detail": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "axisLine": {
        "lineStyle": {
          "color": [
            [
              0.25,
              "#1b376c"
            ],
            [
              1,
              "#1b376c"
            ]
          ],
          "width": "40%",
          "shadowColor": "#0d4b81",
          "shadowBlur": 40,
          "opacity": 1
        }
      },
      "splitLine": {
        "length": 4,
        "lineStyle": {
          "color": "#ffffff",
          "width": 2
        }
      },
      "axisLabel": {
        "textStyle": {
          "color": "#fff",
          "fontWeight": 700,
          "fontSize": 12,
          
        },
        formatter:function(params){
              if(params % 2 == 0 && params != 24){
                  return params;
              }
          }
      },
      "itemStyle": {
        "normal": {
          "color": "green",
          "width": 2
        }
      }
    },
    {
      "name": "内圆盘外第三层01",
      "type": "gauge",
      "min": 0,
      "max": 24,
      "startAngle": 90,
      "endAngle": 449.9,
      "radius": "57%",
      "splitNumber": 24,
      "clockwise": false,
      "animation": false,
      "center": [
        "24%",
        "50%"
      ],
      "detail": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "axisLine": {
        "lineStyle": {
          "color": [
            [
              0.25,
              "#18447e"
            ],
            [
              1,
              "#18447e"
            ]
          ],
          "width": "10%",
          "opacity": 0.8
        }
      },
      "splitLine": {
        "show": true,
        "length": "89%",
        "lineStyle": {
          "color": "#eee",
          "width": "0.2"
        }
      },
      "axisLabel": {
        "show": false,
        "textStyle": {
          "color": "#fb5310",
          "fontWeight": 700
        }
      },
      "itemStyle": {
        "normal": {
          "color": "green",
          "width": 2,
          "borderWidth": 3
        }
      }
    },
    {
      "name": "最里面饼图01",
      "type": "pie",
      "radius": "20%",
      "center": [
        "24%",
        "50%"
      ],
      "data": [
        {
          "value": 335,
          "name": "20%"
        }
      ],
      "hoverAnimation": false,
      "itemStyle": {
        "normal": {
          "color": "#1b376c"
        }
      },
      "label": {
        "normal": {
          "position": "center",
          "show": true,
          "color": "yellow"
        }
      },
      "animation": false,
      "tooltip": {}
    },
    
    
    // 右侧排序
    {
        zlevel:1,
        type:'bar',
        xAxisIndex:0,
        yAxisIndex:0,
        barWidth:30,
        itemStyle:{
          color:'#add5ff'  
        },
        label:{
          show:true,
          position:'right',
          color:'#333',
          formatter:function(params){
              return params.data.perVal + '%'
          }
        },
        data:[
            {
                name:'13:00～13:59',
                value:2,
                perVal:5
            },
            {
                name:'14:00～14:59',
                value:20,
                perVal:50
            },
            {
                name:'15:00～15:59',
                value:2,
                perVal:5
            },
            {
                name:'16:00～16:59',
                value:2,
                perVal:5
            },
            {
                name:'17:00～17:59',
                value:2,
                perVal:5
            }
        ]
    },
    {
        type:'bar',
        xAxisIndex:0,
        barGap:'-100%',
        yAxisIndex:0,
        barWidth:30,
        itemStyle:{
          color:'#f5f5f5'  
        },
        label:{
          show:true,
          position:'right',
          color:'#333',
          formatter:function(params){
              return params.data.reaVal + '个';
          }
        },
        data:[{
            name:'',
            value:40,
            reaVal:2
        },{
            name:'',
            value:40,
            reaVal:20
        },{
            name:'',
            value:40,
            reaVal:2
        },{
            name:'',
            value:40,
            reaVal:2
        },{
            name:'',
            value:40,
            reaVal:2
        }]
    }
  ]
}