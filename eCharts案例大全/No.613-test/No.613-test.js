option = {
    backgroundColor:'#073c54',
   grid: {
          top: 70,
          bottom: 100
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true
            }
          }
        },
        legend: {
          data: ["增长率", "能源消耗总量"],
          // top: "15%",
          top: 8,
          right: 10,
          textStyle: {
            color: "#ffffff"
          }
        },
        "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 10,
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#fff"},
           borderColor:"#90979c"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
        xAxis: {
           data: ["09/12", "09/13", "09/14", "09/15", "09/16", "09/17"],
          //data: this.mydata.data.name,
          axisLine: {
            // show: true, //隐藏X轴轴线
            lineStyle: {
              color: "#c0c3cd"
            }
          },
          axisTick: {
            show: true //隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              // color: "#c0c3cd" //X轴文字颜色
            }
          }
        },
        yAxis: [
          {
            type: "value",
            name: "功率：kw",
            nameTextStyle: {
              // color: "#ebf8ac"
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: true
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#c0c3cd"
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                // color: "#ebf8ac"
              }
            }
          },
          {
            type: "value",
            name: "同比",
            nameTextStyle: {
              color: "#c0c3cd"
            },
            position: "right",
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              formatter: "{value}%", //右侧Y轴文字显示
              textStyle: {
                color: "#c0c3cd"
              }
            }
          },
          {
            type: "value",
            gridIndex: 0,
            min: 50,
            max: 100,
            splitNumber: 8,
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
              }
            }
          }
        ],
        series: [
          {
            name: "增长率",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: false, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 5, //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              normal: {
                color: "#FEBE36",
                borderWidth: 20,
                shadowColor: "rgba(72,216,191, 0.3)",
                shadowBlur: 100,
                borderColor: "rgba(255,255,255,0.5)"
              }
              // color: "#FEBE36",
              // borderWidth: 3,
              // borderColor: "rgba(255,255,255,0.5)"
            },
            lineStyle: {
              color: "rgba(255,255,255,0.5)"
            },
            areaStyle: {
              color: "rgba(5,140,255, 0.2)"
            },
            data: [4, 18, 5, 3, 2, 3]
          },
          {
            name: "能源消耗总量",
            type: "bar",
            barWidth: 15,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#00FFE3"
                  },
                  {
                    offset: 1,
                    color: "#4693EC"
                  }
                ])
              }
            },
            data: [4.2, 4.95, 5.2, 5.35, 5.47, 5.63]
          }
        ]
};
