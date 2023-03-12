let datas = [
    {month: "01", nums: 5778},
 {month: "02", nums: 3352},
 {month: "03", nums: 5700},
 {month: "04", nums: 5855},
 {month: "05", nums: 6407},
 {month: "06", nums: 9526},
 {month: "07", nums: 6920},
 {month: "08", nums: 7871},
 {month: "09", nums: 6771},
 {month: "10", nums: 0},
 {month: "11", nums: 0},
 {month: "12", nums: 0}
    ]
option = {
  backgroundColor:'#032950',
          grid: {
            left: "55",
            right: "15",
            bottom: "15%",
            top: "10%"
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "line" // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          xAxis: {
            type: "category",
            data: datas.map(e => {
              return e.month;
            }),
            // axisLine: {
            //   show: true //隐藏X轴轴线
            // },
            axisLine: {
              lineStyle: {
                color: "#0E4986"
              }
            },
            splitLine: {
              //网格线
              show: true,
              lineStyle: {
                color: "#0E4986"
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                fontSize: 14,
                color: "#fff" //X轴文字颜色
              }
            }
          },
          yAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#0E4986"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              //网格线
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                fontSize: 14,
                color: "#fff" //X轴文字颜色
              }
            }
          },
          series: [
            {
              data: datas.map(e => {
                return e.nums;
              }),

              type: "line",
              // symbol: "circle", //折线点设置为实心点
              symbolSize: 12, //折线点的大小
              itemStyle: {
                normal: {
                  color: "#00DF4C",
                  width: "15px",
                  lineStyle: {
                    color: "#00DF4C",
                    width: 5
                  }
                }
              }
            }
          ]
          // dataZoom: [
          //   // 前面显示
          //   {
          //     textStyle: false,
          //     show: true,
          //     startValue: 0, //数据窗口范围的起始数值
          //     endValue: 100,
          //     fillerColor: "#297ACC", //选中背景颜色
          //     backgroundColor: "#314D70", //没选中背景颜色
          //     height: 10,
          //     bottom: "10",
          //     left: 30,
          //     width: "93%",
          //     borderColor: "#314D70",
          //     handleIcon:
          //       "M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z",
          //     handleStyle: {
          //       color: "#fff",
          //       shadowBlur: 2
          //     },
          //     handleSize: 15,
          //     dataBackground: {
          //       lineStyle: {
          //         opacity: 0
          //       },
          //       areaStyle: {
          //         opacity: 0
          //       }
          //     }
          //   }
          // ]
        };