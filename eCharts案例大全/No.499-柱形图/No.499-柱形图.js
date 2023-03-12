option = {
    backgroundColor:'#031d33',
        animation: true,
        grid: {
          top: "5%",
          bottom: "15%",
          right: "5%"
        },
        tooltip: {
          show: true,
        },
        xAxis: {
          data: ['死因', '伤情', 'DNA', '指纹', '足迹', '毒物', '毒品', '微量', '笔记', '印章', '视频', '电物', '语音'],
          axisLine: {
            show: false //隐藏X轴轴线
          },
          axisTick: {
            show: false //隐藏X轴轴线
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(77, 128, 254, 0.2)",
              width: 2
            }
          },
          axisLabel: {
            show: true,
            interval: 0,
            // margin: 14,
            fontSize: 13,
            textStyle: {
              color: "#a8d5ff" //X轴文字颜色
            }
          }
        },
        yAxis: [
          {
            type: "value",
            gridIndex: 0,
            min: 0,
            //max: 100,
            interval: 100,
            // splitNumber: 4,
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
              show: true,
              lineStyle: {
                color: "rgba(77, 128, 254, 0.2)"
              }
            },
            axisLabel: {
              show: true,
              margin: 14,
              fontSize: 13,
              textStyle: {
                color: "#a8d5ff"
              }
            }
          }
        ],
        series: [
          {
            name: "设备在线率",
            type: "bar",
            barWidth: 16,
            itemStyle: {
              normal: {
                label: {
									show: true, //开启显示
									position: 'top', //在上方显示
									textStyle: { //数值样式
										color: '#fff',
										fontSize: 16
									}
								},
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(146, 225, 255, 1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 151, 251, 1)"
                  }
                ])
              }
            },
            data: [498, 520, 568, 432, 464, 332, 344, 458, 470, 468, 398, 310, 421],
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
            symbolSize: [18, 2],
            symbolPosition: "start",
            symbolOffset: [1,1],
            data:  [498, 520, 568, 432, 464, 332, 344, 458, 470, 468, 398, 310, 421],
            width: 2,
            z: 0,
            zlevel: 1
          },
          {
            name: "外框",
            type: "bar",
            barGap: "-110%", // 设置外框粗细
            data: [100, 100, 100, 100, 100, 100, 100],
            barWidth: 16,
            itemStyle: {
              normal: {
                color: "transparent", // 填充色
                // barBorderRadius: 0, //圆角半径
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
              width: 0
            },
            areaStyle: {
              color: "rgba(0, 151, 251, 0.1)"
            },
            data:  [498, 520, 568, 432, 464, 332, 344, 458, 470, 468, 398, 310, 421],
            z: 5
          }
        ],
        // dataZoom: [
        //   {
        //     type: "slider",
        //     show: false,
        //     xAxisIndex: [0],
        //     endValue: 14,
        //     startValue: 0
        //   }
        // ]
      }
