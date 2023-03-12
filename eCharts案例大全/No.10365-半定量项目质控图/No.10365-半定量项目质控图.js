option = {
  
  
  "tooltip": {
    "backgroundColor": "rgba(89,182,209,.7)",
    "extraCssText": "text-align: left;padding: 7px 14px;box-shadow: 3px 3px 1px 1px #9cb7bf;"
  },
  "xAxis": [
    {//无用
      "show": false,
      "gridIndex": 1,
      "type": "value",
      "position": "top",
      "axisPointer": {
        "show": false
      }
    },
    {
      "show": false,
      "gridIndex": 1,
      "type": "category",
      "position": "bottom",
      "boundaryGap": false,
      "axisLabel": {
        "show": false,
        "textStyle": {
          "color": "#676a6c"
        }
      },
      "axisPointer": {
        "show": true,
        "triggerTooltip": true
      },
      "data": []
    },
    {
      "show": false,
      "gridIndex": 1,
      "position": "top",
      "type": "value",
      "axisPointer": {
        "show": false
      }
    },
    {
      "show": true,
      "gridIndex": 0,
      "type": "category",
      "position": "bottom",
      "boundaryGap": true,
      "axisLabel": {
        "show": true,
        "textStyle": {
          "color": "#676a6c"
        }
      },
      "axisLine": {
        "onZero": false
      },
      "axisPointer": {
        "show": false,
        "triggerTooltip": true
      },
      "data": [
        "第1次\n2019/08/14",
        "第2次\n2019/08/14",
        "第3次\n2019/08/14",
        "第4次\n2019/08/14",
        "第5次\n2019/08/14",
        ""
      ],
      "z": -10
    }
  ],
  "yAxis": [
    {
      "show": true,
      "gridIndex": 1,
      "type": "category",
      "boundaryGap": false,
      "interval": 0,
      "axisLine": {
        "show": true
      },
      "axisTick": {
        "show": false
      },
      "scale": false,
      "position": "left",
      "splitArea": {
        "show": false
      },
      "axisLabel": {
        "show": true,
        "textStyle": {
          "color": "#676a6c"
        }
      },
      "axisPointer": {
        "show": false
      },
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": [
            "#CCCCCC",
            "#ed5565",
            "#f8ac59",
            "#1c84c6",
            "#5C945C",
            "#1c84c6",
            "#f8ac59",
            "#ed5565",
            "#CCCCCC"
          ],
          "width": 1,
          "type": "broken"
        }
      }
    },
    {
      "show": false,
      "gridIndex": 1,
      "type": "value",
      "max": 6,
      "min": 0,
      "splitLine": {
        "show": false
      },
      "axisPointer": {
        "show": false
      },
      "axisLine": {
        "onZero": false
      }
    },
    {
      "show": false,
      "gridIndex": 1,
      "type": "category",
      "position": "left",
      "data": [
          "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"
      ],
      "boundaryGap": true,
      "axisPointer": {
        "show": false
      }
    },
    {
      "show": true,
      "gridIndex": 0,
      "type": "value",
      "max": 6,
      "min": 0,
      "splitNumber": 7,
      "splitLine": {
        "show": false
      },
      "axisPointer": {
        "show": false
      },
      "axisLabel": {
        "show": true,
        formatter:function(params){
            return params/2;
        }
      },
      "axisTick": {
        "show": false
      },
      "z": 1
    }
  ],
  "series": [
    
    {
      "xAxisIndex": 3,
      "yAxisIndex": 3,
      "z": 1,
      "name": "L-J",
      "type": "line",
      "smooth": false,
      "showAllSymbol": true,
      "clipOverflow": false,
      "itemStyle": {
        "normal": {
          "color": "rgba(26,179,148,0.8)"
        }
      },
      "symbolSize": 8,
      "symbol": "circle",
      "data": [
        {
          "date": "10",
          "name": "第1次\n2019/08/14",
          "totalSd": 0,
          "totalCv": 0,
          "value": 0,
          "primaryZvalue": 0,
          "status": 1,
          "reportTime": "16:30"
        },
        {
          "date": "10",
          "name": "第2次\n2019/08/14",
          "totalSd": 0,
          "totalCv": 0,
          "value": 0,
          "primaryZvalue": 0,
          "status": 1,
          "reportTime": "16:31"
        },
        {
          "date": "10",
          "name": "第3次\n2019/08/14",
          "totalSd": 0,
          "totalCv": 0,
          "value": 0,
          "primaryZvalue": 0,
          "status": 1,
          "reportTime": "16:31"
        },
        {
          "date": "10",
          "name": "第4次\n2019/08/14",
          "totalSd": 0,
          "totalCv": 0,
          "value": 0,
          "primaryZvalue": 0,
          "status": 1,
          "reportTime": "16:31"
        },
        {
          "date": "12",
          "name": "第5次\n2019/08/14",
          "totalSd": 0.89,
          "totalCv": 8.56,
          "value": 1,
          "primaryZvalue": 1,
          "status": 1,
          "reportTime": "16:32"
        },
        {
          "-": "-"
        }
      ],
      "tooltip": {
        "show": true,
        "trigger": "item"
      },
      markArea:{
          itemStyle:{
            color:"#ffc4c4"  
          },
        //   data:[
        //     [{
        //         // name:'cut-off值',
        //         xAxis:0,
        //         yAxis:5
        //     },{
        //         xAxis:1,
        //         yAxis:6
        //     }]
        //   ]
        data: [
                [{
                    "itemStyle": {
                        "color": "rgba(255, 0, 0, 0.05)"
                    }
                }, {
                    "xAxis": 1,
                    "yAxis": "1"
                }],
                [{
                    "itemStyle": {
                        "color": "rgba(25, 0, 0, 0.05)"
                    },
                    "xAxis": "第2次\n2019/08/14",
                    "yAxis": "5"
                }, {
                    "xAxis": "第4次\n2019/08/14",
                    "yAxis": "6"
                }],
            ]
        
      },
      "markLine": {
        "silent": true,
        "symbolSize": [
          0,
          0
        ],
        "label": {
          "position": "start",
          "color": "#676a6c",
          show:false,
        },
        "lineStyle": {
          "width": 1
        },
        "emphasis": {
          "lineStyle": {
            "width": 1
          }
        },
        "data": [
          {
            "yAxis": 0,
            "label": {
              "position": "start"
            },
            "lineStyle": {
              "color": "#ed5565",
              "width": 1,
              "type": "type"
            }
          },
          {
            "yAxis": 1,
            "label": {
              "position": "start"
            },
            "lineStyle": {
              "color": "#f8ac59",
              "width": 1,
              "type": "type"
            }
          },
          {
            "yAxis": 2,
            "label": {
              "position": "start"
            },
            "lineStyle": {
              "color": "#1c84c6",
              "width": 1,
              "type": "type"
            }
          },
          {
            "yAxis": 3,
            "label": {
              "position": "start"
            },
            "lineStyle": {
              "color": "#5C945C",
              "width": 1,
              "type": "type"
            }
          },
          {
            "yAxis": 4,
            "label": {
              "position": "start"
            },
            "lineStyle": {
              "color": "#1c84c6",
              "width": 1,
              "type": "type"
            }
          },
          {
            "yAxis": 5,
            "label": {
              "position": "start"
            },
            "lineStyle": {
              "color": "#f8ac59",
              "width": 1,
              "type": "type"
            }
          },
          {
            "yAxis": 6,
            "label": {
              "position": "start"
            },
            "lineStyle": {
              "color": "#ed5565",
              "width": 1,
              "type": "type"
            }
          }
        ]
      }
    },
   
    {
      "name": "失控",
      "type": "scatter",
      "tooltip": {
        "trigger": "item"
      },
      "xAxisIndex": 3,
      "yAxisIndex": 3,
      "itemStyle": {
        "normal": {
          "color": "rgba(235,85,101,1)"
        }
      },
      "z": 1,
      "data": [
          
            [
    	      "第2次\n2019/08/14",
    	      3,
    	      "25",
    	      "15:21",
    	      365512,
    	      "2_2S",
    	      "rest/snTestResultSon/list_new?planId=2003&resultId=29500&reportDate=2019-08-14",
    	      3
    	    ]
          ]
    },
    
    
    {
      "name": "更换试剂线",
      "type": "bar",
      "barWidth": 1,
      "tooltip": {
        "triangle": "item"
      },
      "itemStyle": {
        "color": "#8c9bd2"
      },
      "yAxisIndex": 3,
      "xAxisIndex": 3,
      "data": []
    },
    
    {
      "name": "更换均值线",
      "type": "bar",
      "yAxisIndex": 3,
      "xAxisIndex": 3,
      "barWidth": 1,
      "label": {
        "show": false
      },
      "itemStyle":{
        color:"#333"  
      },
      "data": [
        [
          5,
          6
        ]
      ],
      "position": [
        "10",
        "-48"
      ],
      "markPoint": {
        "name": "",
        "silent": true,
        "symbol": "arrow",
        "symbolRotate": -90,
        "symbolOffset": [
          "-120%",
          -2
        ],
        "symbolSize": 1,
        "label": {
          "show": true,
          "color": "#333333",
          "position": "insideRight",
          "distance": 5,
          "fontSize": 12
        },
        "data": [
          {
            "name": "触发",
            "value": "18.00",
            "coord": [
              5,
              0
            ]
          },
          {
            "name": "触发",
            "value": "16.00",
            "coord": [
              5,
              1
            ]
          },
          {
            "name": "触发",
            "value": "14.00",
            "coord": [
              5,
              2
            ]
          },
          {
            "name": "触发",
            "value": "10.00",
            "coord": [
              5,
              3
            ]
          },
          {
            "name": "触发",
            "value": "8.00",
            "coord": [
              5,
              4
            ]
          },
          {
            "name": "触发",
            "value": "6.00",
            "coord": [
              5,
              5
            ]
          },
          {
            "name": "触发",
            "value": "12.00",
            "coord": [
              5,
              6
            ]
          }
        ]
      }
    }
  ],
  /*"dataZoom": [
    {
      "type": "slider",
      "show": true,
      "bottom": 30,
      "realtime": false,
      "xAxisIndex": 3,
      "yAxisIndex": null,
      "zoomOnMouseWheel": false,
      "moveOnMouseMove": false,
      "moveOnMouseWheel": false,
      "preventDefaultMouseMove": false
    }
  ],*/
  "animation": true,
  "grid": [
    {
	    "borderWidth": 0,
	    "borderColor": "#ccc",
	    "containLabel": false,
	    "width": "85%",
	    "height": "80%",
	    "bottom": "15%",
	    "left": "8%",
	    "z": 1
	  },
	  {
	    "borderWidth": 0,
	    "borderColor": "#000",
	    "containLabel": false,
	    "width": "85%",
	    "height": "80%",
	    "bottom": "15%",
	    "left": "8%",
	    "tooltip": {
	      "trigger": "item"
	    },
	    "z": -2
	  }
  ]
}
