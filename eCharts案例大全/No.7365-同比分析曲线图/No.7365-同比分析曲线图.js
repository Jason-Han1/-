    var colorList = {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            // 0deg; #2846ff 0; #229dfb 100
            color: "#229dfb" // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#2846ff" // 100% 处的颜色
          }
        ]

        // globalCoord: false // 缺省为 false
      };
      var colorList2 = {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            // 0deg; #44bdf6 0; #44f6f6 100
            color: "#44f6f6" // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#44bdf6" // 100% 处的颜色
          }
        ]
        // globalCoord: false // 缺省为 false
      };
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          },
          extraCssText: "width:auto;height:auto;text-align:left;"
        },
        title: [
          {
            text: "同比分析曲线图",
            left: "10%",
            top: "2%",
            textAlign: "center",
            textBaseline: "middle",
            textStyle: {
              color: "#99c3fd",
              fontWeight: "normal",
              fontSize: 20
            }
          },
          {
            // text: "单位:吨标煤",
            text: "单位:", //单位
            right: "10%",
            top: "2%",
            textAlign: "center",
            textBaseline: "middle",
            textStyle: {
              color: "#99c3fd",
              fontWeight: "normal",
              fontSize: 20
            }
          }
        ],
        legend: {
          data: ["上期指数", "本期指数", "变化率"],
          top: "6%",
          right: "center",
          textStyle: {
            fontSize: 16,
            color: "#8597c1"
          }
        },
        xAxis: [
          {
            type: "category",
            data:[1,2,3,4,5,6,7,8,9,10,11,12],
            axisPointer: {
              type: "shadow"
            },
            axisLine: {
              lineStyle: {
                color: "#8597c1"
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              interval: "0",
              textStyle: {
                fontSize: 16,
                color: "#99c3fd"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            // min: 0,
            // max: 7,
            // interval: 4,
            axisLine: {
              show: false,
              lineStyle: {
                color: "#99c3fd"
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              interval: "0",
              textStyle: {
                fontSize: 16,
                color: "#99c3fd"
              }
            }
          },
          {
            type: "value",
            // min: 0,
            // max: 0.20,
            // interval: 0.05,
            axisLine: {
              show: false,
              lineStyle: {
                color: "#99c3fd"
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              formatter: "{value} %",
              interval: "0",
              textStyle: {
                fontSize: 16,
                color: "#8597c1"
              }
            }
          }
        ],
        series: [
          {
            name: "上期指数",
            type: "bar",
            barWidth: "20%",
            data: [100,52,56,80,45,99,250,152,163],
            itemStyle: {
              barBorderRadius: 50,
              borderWidth: 0,
              color: function(params) {
                return colorList;
              }
            }
          },
          {
            name: "本期指数",
            type: "bar",
            barWidth: "20%",
            data: [100,52,56,80,45,99,250,152,163],
            itemStyle: {
              barBorderRadius: 50,
              borderWidth: 0,
              color: function(params) {
                return colorList2;
              }
            },
         
            // animationDelay:'10',
          },
          {
            name: "变化率",
            type: "line",
            yAxisIndex: 1,
            data: [100,52,56,80,45,99,250,152,163],
            itemStyle: {
              color: "#ddf82a"
            }
          },
        ],  
        
      };
setInterval(() => {
    myChart.setOption({
      legend: {
        selected: {
          '上期指数': false,
          '本期指数': false,
          '变化率': false,
        }
      }
    })
    myChart.setOption({
      legend: {
        selected: {
          '上期指数': true,
          '本期指数': true,
           '变化率': true,
        }
      }
    })
},5000)