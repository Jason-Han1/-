option = {
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "shadow"
    },
    "formatter": null
  },
  
  "grid": {
    "left": "5%",
    "right": "5%",
    "bottom": "5%",
    "top": "10%",
    "containLabel": true
  },
  "xAxis": [
    {
      "type": "category",
      "axisTick": {
        "alignWithLabel": true
      },
      "nameRotate": 90,
      "data": [
        "上海",
        "西安",
        "天津",
        "石家庄",
        "长沙",
        "南京",
        "深圳",
        "乌鲁木齐",
        "南昌",
        "沈阳"
      ],
      "splitLine": {
        "show": false,
        "lineStyle": {
          "color": "rgba(144,19,254,1)"
        }
      },
      "axisLine": {
        "lineStyle": {
          "color": "rgba(65,117,5,1)"
        },
        "show": true
      }
    },
     /*隐藏一个不显示的横坐标，用作横线的位置*/
        {
            type: 'category',
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            axisLabel: {
                show: true
            },
            splitArea: {
                show: true
            },
            splitLine: {
                show: true
            },
            data: []
        },
  ],
  "yAxis": [
    {
      "type": "value",
      "axisLabel": {
        "formatter": "{value}"
      },
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "rgba(245,166,35,1)"
        }
      },
      "splitLine": {
        "show": false,
        "lineStyle": {
          "color": "rgba(144,19,254,1)"
        }
      }
    },
    {
      "show": true,
      "axisLabel": {
        "formatter": "{value}"
      },
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "rgba(144,19,254,1)"
        }
      },
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": "rgba(80,227,194,1)"
        }
      }
    }
  ],
  "series": [
    {
      "type": "bar",
      "data": [
        19,
        6,
        65,
        37,
        22,
        7,
        21,
        18,
        19,
        5
      ],
      "name": "业务员名称",
      "showAllSymbol": false,
      "_auto": false,
      "itemStyle": {
        "normal": {
          "color": {
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false,
            "colorStops": [
              {
                "offset": 0.3,
                "color": "rgba(80,227,194,1)"
              },
              {
                "offset": 0.8,
                "color": "rgba(184,233,134,1)"
              }
            ]
          }
        }
      },
      "stack": null,
      "numberFormatter": {
        "auto": true,
        "value": {}
      },
      "label": {},
      "markArea": null,
      "markLine": null
    },
        {
            /*这个bar是撑起横线的高度，并设置透明*/
            name: "盈亏平衡点",
            stack: 'breakevenEleGroup',/*盈亏点数据组，需要设置才能将两个bar堆积在一起*/
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',/*设置bar为隐藏，撑起下面横线*/
                }
            },
            data: [10, 30, 50, 70, 60, 50, 40, 30, 15, 5],
        },
        {
            /*这个bar是横线的显示*/
            name: "盈亏平衡点",
            stack: 'breakevenEleGroup',/*盈亏点数据组，需要设置才能将两个bar堆积在一起*/
            type: 'bar',
            xAxisIndex: 1,
            barGap: "0",
            itemStyle: {
                normal: {
                    color: 'rgba(255,0,0,1)'
                }
            },
            data: [.1, .1, .1, .1, 0, .1, .1, 0, .1, .1],
        }
    
  ]
}