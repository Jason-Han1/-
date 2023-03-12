option = {
    backgroundColor:'',
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
        grid: {
          right: "5%",
          top: "20%",
          left: "5%",
          bottom: "5%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: ["武汉市","黄石市",'襄阳市','十堰市','宜昌市'],
          axisLabel: {
            //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            //	margin:15,
            textStyle: {
              color: "#65D5FF",
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
            }
          },
          splitLine: {
            //坐标轴在 grid 区域中的分隔线。
            show: true,
            lineStyle: {
              color: "rgba(77, 128, 254, 0.2)"
            }
          }
        },
        yAxis: [
          {
            type: "value",
            max: 100,
            interval:20,
            splitNumber: 3,
            axisLabel: {
              textStyle: {
                color: "#65D5FF",
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
        series: [
            {
          name: '1月',
          type: "pictorialBar",
          barWidth: "60%",
          stack: "总量",
          label: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 151, 251, 1)" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 34, 66, 0.2)" // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              } //渐变颜色
            }
          },
          symbol:
            "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",

          data: [98,87,84,74,23]
        }],
};
