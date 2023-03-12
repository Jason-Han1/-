option = {
    数据节点1: 30,
    数据节点2: 52,
    color: ['rgba(245, 42, 118,', 'rgba(255, 255, 0,', 'rgba(14, 248, 254,'],
    backgroundColor: '#020B19',
    dataset: {
        source: [
            ["product", "data","data2"],
            ["面料", "100","30"],
            ["里料", "50","60"],
            ["尼龙拉链", "25","50"],
            ["主标", "60","70"],
            ["小类1", "77","44"],
            ["小类2", "87","50"],
            ["小类3", "45","85"],
            ["小类4", "67","66"],
            ["小类5", "89","50"],
            ["小类6", "24","78"]
        ]
    },
    grid: {
        top: '17%',
        bottom: '52%',
    },
      "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "line",
     "lineStyle": {
         "width":60,
         "color":"rgba(14, 248, 254,.1)"
     }
    },
      "legend": {
    "show": true,
    "right": 10,
    "data": [
      "有销库存满足率","日环比"
    ],
    "itemWidth": 4,
    "itemHeight": 12,
    "itemGap": 15,
    "icon": "circle",
    "textStyle": {
      "color": "rgba(14, 248, 254,1)",
      "fontSize": 12
    }
  },
    "borderWidth": 1,
    "backgroundColor": "#0e2b33",
    "borderColor": "rgba(14, 248, 254, 1)",
    "formatter": function(A){
        var htm="<div style='color:#fff'>"+A[0].name+"</div><div style='color:rgba(14, 248, 254,1)'>有销库存满足率："+A[0].value[1].toLocaleString()+"%</div><div style='color:rgba(14, 248, 254,1)'>日环比："+A[0].value[2].toLocaleString()+"%</div>"
        return htm   
    },
    "extraCssText": "z-index:96"
  },
    xAxis: {
        type: "category",
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: true,
            interval: 0,
            margin: 25,
            textStyle: {
                color: '#fff',
                fontSize: 12
            }
        }
    },
    yAxis: {
        show: false,
        type: "value"
    },
    series: [{
        name: '有销库存满足率', //顶
        type: 'pictorialBar',
        symbolSize: [25, 10],
        symbolOffset: [0, -10],
        symbolPosition: 'end',
        z: 12,
        itemStyle: {
            color: function(params) {
                return option.color[2] + "1)"
            },
            barBorderRadius: 30,
        },
        label: {
            show: true,
            position: "top",
            fontSize: 15,
            fontFamily: "DIN",
            fontWeight: "bold",
            formatter: function(params) {
                return params.value[params.encode.y[0]] + "%"
            }
        }
    }, {
        name: '有销库存满足率', //底
        type: 'pictorialBar',
        symbolSize: [25, 10],
        symbolOffset: [0, 5],
        z: 12,
        itemStyle: {
            color: function(params) {
                return option.color[2] + "1)"
            },
            barBorderRadius: 30
        }
    }, {
        name: '有销库存满足率', //底
        type: 'pictorialBar',
        symbolSize: [36, 12],
        symbolOffset: [0, 8],
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: "rgba(14, 248, 254,1)",
                borderWidth: 2
            }
        }
    }, {
        name: '有销库存满足率', //底
        type: 'pictorialBar',
        symbolSize: [52, 18],
        symbolOffset: [0, 14],
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: "rgba(14, 248, 254,1)",
                borderWidth: 2
            }
        }
    }, {
        name: '日环比', 
        type: 'bar',
        itemStyle: {
            color: function(params) {
                var colorList = []
                    colorList[params.dataIndex] = new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: option.color[2] + '0.05)'
                            },
                            {
                                offset: 1,
                                color: option.color[2] + '.6)'
                            }
                        ]
                    )
                return colorList[params.dataIndex]
            }
        },
        showBackground: true,
        backgroundStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                        offset: 0,
                        color: 'rgba(14, 248, 254,0)'
                    }, //柱图渐变色
                    {
                        offset: 1,
                        color: 'rgba(14, 248, 254,0.2)'
                    }
                ]
            )
        },
        barWidth: 25,
        barGap: '-100%'
    },
     {
      "name": "SKC满足率",
      "type": "line",
      "smooth": true,
      "showAllSymbol": false,
      "showSymbol":false,
      "symbol": 'circle',
      "symbolSize": 3,
      "lineStyle": {
        "normal": {
          "show": true,
          "color": "#ffea38"
        }
      },
      "encode": {
        "y": "data2"
      },
       "label": {
                "show": false,
                "position": "top",
                 "formatter": function(params) {
                    return params.data[1] + "%"
                }
            },
             "itemStyle": {
                "color":  "#ffea38",
             }
    }]
};