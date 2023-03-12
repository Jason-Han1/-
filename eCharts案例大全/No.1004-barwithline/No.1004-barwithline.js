var xData= ['A','B','C','D','E'],yData1=[21,43,56,32,64],yData2=[30,40,50,20,10];
option = {
    backgroundColor:'#031d33',
        animation: true,
        grid: {
          top: "5%",
          bottom: "15%",
          right: "5%"
        },
        xAxis: {
          data:xData,
          boundaryGap:false,
          axisLine: {
            show: false //隐藏X轴轴线
          },
          axisTick: {
            show: false //隐藏X轴轴线
          },
          splitLine: {
            show: false,
            
          },
          axisLabel: {
            show: true,
            margin: 14,
            fontSize: 16,
            textStyle: {
              color: "#65D5FF" //X轴文字颜色
            }
          },
        },
        yAxis: [
          {
            type: "value",
            gridIndex: 0,
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(77, 128, 254, 0.2)",
                width: 2
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              margin: 14,
              fontSize: 16,
              textStyle: {
                color: "#65D5FF"
              }
            }
          }
        ],
        series: [
          {
            name: "",
            type: "bar",
            barWidth: 16,
            itemStyle: {
              normal: {
                color: '#59e9d0'
              }
            },
            data: yData1,
            z: 10,
            zlevel: 0
          },
          {
            // 分隔
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: "#0F375F"
              }
            },
            symbolRepeat: "fixed",
            symbolMargin: 6,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [20, 1],
            symbolPosition: "start",
            symbolOffset: [0,1],
            data: yData1,
            width: 2,
            z: 0,
            zlevel: 1
          },
          {
            name: "外框",
            type: "bar",
            barGap: "-111%", // 设置外框粗细
            data: [100, 100, 100, 100, 100, 100, 100],
            barWidth: 20,
            itemStyle: {
              normal: {
                color: "rgba(18,48,108,0.5)", // 填充色
                borderWidth:0.5,
                borderColor:'#145181',
                shadowColor: 'rgba(21, 82, 131, 1)',
                shadowBlur: 5,
                label: {
                  // 标签显示位置
                  show: false,
                  position: "top" // insideTop 或者横向的 insideLeft
                }
              }
            },
            z: 0
          },
          {
            name: "背影",
            type: "line",
            smooth: true, //平滑曲线显示
            showAllSymbol: false, //显示所有图形。
            symbolSize: 0,
            lineStyle: {
              width: 1
            },
            areaStyle: {
              color: "rgba(0, 151, 251, 0.1)"
            },
            data:  yData2,
            z: 5
          }
        ],
        // dataZoom: [
        //   {
        //     type: "slider",
        //     show: false,
        //     xAxisIndex: [0],
        //     endValue: 4,
        //     startValue: 0
        //   }
        // ]
      }
