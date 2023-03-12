option = {
    backgroundColor:'#031d33',
        tooltip: {
          show: true,
          trigger: "axis", //axis , item
          backgroundColor: "RGBA(0, 49, 85, 1)",
          borderColor: "rgba(0, 151, 251, 1)",
          borderWidth: 1,
          borderRadius: 0,
          textStyle: {
            color: "#BCE9FC",
            fontSize: 16,
            align: "left"
          }
        },
        color: ["#0080ff", "#4cd5ce"],
        grid: {
          left: "4%",
          right: "5%",
          bottom: "6%",
          containLabel: true,
          top: "6%"
        },
        xAxis: {
          type: "category",
          boundaryGap: false, //坐标轴两边留白
          data:['奉城镇','金汇镇','南桥镇','柘林镇'],
          axisLabel: {
            //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            //	margin:15,
            textStyle: {
              color: "rgba(101, 213, 255, 1)",
              fontStyle: "normal",
              fontSize: 16
            }
          },
          axisTick: {
            //坐标轴刻度相关设置。
            show: false
          },
          axisLine: {
            //坐标轴轴线相关设置
            lineStyle: {
              color: "rgba(77, 128, 254, 0.2)"
              //   opacity: 0.2,
            }
          },
          splitLine: {
            //坐标轴在 grid 区域中的分隔线。
            show: true,
            lineStyle: {
              color: "rgba(77, 128, 254, 0.2)"
              // 	opacity:0.1
            }
          }
        },
        yAxis: [
          {
            type: "value",
            splitNumber: 2,
            axisLabel: {
              textStyle: {
                color: "rgba(101, 213, 255, 1)",
                fontStyle: "normal",
                fontSize: 16
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(77, 128, 254, 0.2)"
              }
            }
          }
        ],
        series: [{
          name: '1月',
          type: "line",
          stack: "总量",
          itemStyle: {
            normal: {
              color:"rgba(48, 236, 166, 0.1)",
              lineStyle: {
                color: "rgba(48, 236, 166, 0.4)",
                width: 1
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(48, 236, 166, 0.1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(48, 236, 166, 0.4)"
                  }
                ])
              }
            }
          },
          areaStyle: { normal: {} },
          symbolSize: 4, //折线点的大小
          data: [10,32,53,5]
        },
        {
          name: '2月',
          type: "line",
          stack: "总量",
          itemStyle: {
            normal: {
              color:"rgba(146, 225, 255, 0.1)",
              lineStyle: {
                color: "rgba(146, 225, 255, 0.4)",
                width: 1
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(146, 225, 255, 0.1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(146, 225, 255, 0.4)"
                  }
                ])
              }
            }
          },
          areaStyle: { normal: {} },
          symbolSize: 4, //折线点的大小
          data: [20,42,23,15]
        }
        ],
        
      };