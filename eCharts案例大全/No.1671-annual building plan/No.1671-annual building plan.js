javascript:;
let xLabel = [  "淮安",
    "南京",
    "宿迁",
    "镇江",
    "连云港",
       "大连",
    "南通",
    "苏州",
    "扬州",
    "无锡",
     "盐城",
    "泰州",
    "常州",]
option = {
    tooltip:{},
    backgroundColor: '#09252e',
    animation: false,
    grid: {
        top: "25%",
        bottom: "10%"//也可设置left和right设置距离来控制图表的大小
    },
    legend:{
      show:true,
      icon:'rect',
      right:'5%',
      top:"10%",
      itemHeight:5,
      textStyle:{
          color:"#fff"
      }
    },
    xAxis: {
        data: xLabel,
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#11417a'
            }
        },
        axisTick: {
            show: false //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            margin: 14,
            fontSize: 10,
            textStyle: {
                color: "#A3C0DF" //X轴文字颜色
            }
        },
         
    },
    yAxis: [
        {
            type: "value",
            gridIndex: 0,
            min: 0,
            max: 100,
            interval: 25,
            // splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#113763',
                    width: 1
                },
            },
            axisTick: {
                show: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#11417a'
                }
            },
            axisLabel: {
                show: true,
                margin: 14,
                fontSize: 10,
                textStyle: {
                    color: "#A3C0DF" //X轴文字颜色
                }
            },
        },
    ],
    series: [
        {
            name: "建成农房",
            type: "bar",
         barWidth: 12,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#2befc1"
                        },
                        {
                            offset: 1,
                            color: "#11535e"
                        }
                    ])
                }
            },
            data: ["20", "50", "42", "41", "30", "60","45", "30", "50", "42","20", "50","49"],
            z: 10,
            zlevel: 0,
            "label": {
                "show": false,
                "position": "top",
                "distance": 10,
                fontSize:16,
                "color": "#01fff4"
            }
        },
        
        {
            // 分隔
            type: "pictorialBar",
            itemStyle: {
                normal:{
                    color:"#0F375F"
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 3,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [20, 2],
            symbolPosition: "start",
            symbolOffset: [-4, 0],
            // symbolBoundingData: this.total,
            data: ["20", "50", "42", "41", "30", "60","45", "30", "50", "42","20", "50","49"],
            width: 25,
            z: 0,
            zlevel: 1,
        },
        {
            name: "年度建房计划",
            type: "bar",
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#1fc6e4"
                        },
                        {
                            offset: 1,
                            color: "#124b65"
                        }
                    ])
                }
            },
            data: ["22", "55", "48", "49", "40", "80","75", "40", "60", "82","90", "60","69"],
            z: 10,
            zlevel: 0,
            "label": {
                "show": false,
                "position": "top",
                "distance": 10,
                fontSize:16,
                "color": "#01fff4"
            }
        },
        {
            // 分隔
            type: "pictorialBar",
            itemStyle: {
                normal:{
                    color:"#0F375F"
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 3,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [10, 2],
            symbolPosition: "start",
            symbolOffset: [8,0],
            // symbolBoundingData: this.total,
            data:  ["22", "55", "48", "49", "40", "80","75", "40", "60", "82","90", "60","69"],
            width: 25,
            z: 0,
            zlevel: 1,
        },
         {
            name: "资金补助",
            type: "line",
          
              showAllSymbol: false, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 1, //标记的大小
           
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#F0BE11"
                        },
                        {
                            offset: 1,
                            color: "#F0BE11"
                        }
                    ])
                }
            },
            data: ["22", "55", "48", "49", "40", "80","75", "40", "60", "82","90", "60","69"],
            z: 10,
            zlevel: 0,
            "label": {
                "show": false,
                "position": "top",
                "distance": 10,
                fontSize:16,
                "color": "#F0BE11"
            }
        },
    ]
};