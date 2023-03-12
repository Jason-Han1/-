let XData = ["陆家所","花桥所","千灯所","锦溪所","兵希所","陆家所1","花桥所1","千灯所1"]
let valueData = [
  {
    data: [7845,6587,6109,5907,3209,3200,2478,1438]
  },
  {
    data: [325,435,654,54,223,67,45,4]
  }
  ]
option = {
        color: ["#65779E"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "10%", //距离dom间距
          right: "10%",
          top: "10%",
          bottom: "1%"
        },
        xAxis: [
          {
            type: "value",
            axisPointer: {
              type: "shadow"
            },
            // 横坐标 分割线等取消显示
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
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLabel: {
              // show: false,
              margin: 50,
              fontSize: 15,
              align: 'left',
              color: '#000000',
              padding: [0,0,0,-50],
              interval: 0,
              rich: {
                  a: {
                      color: 'rgba(37, 168, 250, 1)',
                      backgroundColor: '#fff',
                      borderColor: 'rgba(37, 168, 250, 1)',
                      borderWidth: 2,
                      width: 24,
                      height: 24,
                      align: 'center',
                      borderRadius: 24,
                      fontSize: 15,
                  }
              },
              formatter: function(params) {
                  var index = XData.map(item => item).indexOf(params);
                  index = index + 1;
                   return [
                      '{a|' + index + '}' + '  ' + params
                   ].join('\n')
              }
            },
            // 纵坐标数据
            data: XData,
            yAxisIndex: 0,
            // 横坐标 分割线等取消显示
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          },
          {
            type: "category",
            // inverse: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              // show: false,
              // margin: 50,
              fontSize: 15,
              align: 'right',
              color: '#000000',
              padding: [0,-70,0,0],
              interval: 0,
              rich: {
                  a1: {
                      color: 'rgba(21, 161, 249, 1)',
                      fontSize: 15,
                  },
                  a2: {
                      color: 'rgba(125, 182, 9, 1)',
                      fontSize: 15,
                  },
              },
              formatter: function (value, index) {
                return `{a1|${value}/}`+`{a2|${valueData[1].data[index]}}`
            },
            },
            // 统计的总量 用纵坐标模拟
            data: valueData[0].data
          }
        ],
        series: [
          {
            name: "全量",
            type: "bar",
            // 宽度
            barWidth: "16",
            // 堆叠
            stack: "总量",
            showBackground: true,
            // 全部背景
             backgroundStyle: {
              color: "#EEF2F9",
              borderColor: 'rgba(183, 209, 222, 0.58)',
              borderWidth: 1
            },
            data: valueData[0].data,
            itemStyle: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 16
                },
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "RGBA(37, 168, 250, 1)"
                    },
                    {
                      offset: 1,
                      color: "RGBA(37, 168, 250, 1)"
                    }
                  ],
                  false
                )
              }
            }
          },
          {
            name: "标准",
            type: "bar",
            // 宽度
            barWidth: "16",
            // 堆叠
            stack: "总量",
            showBackground: true,
            // 全部背景
            backgroundStyle: {
              color: "#EEF2F9",
              borderColor: 'rgba(183, 209, 222, 0.58)',
              borderWidth: 1
            },
            data: valueData[1].data,
            itemStyle: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 16
                },
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "rgba(115, 154, 14, 1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(175, 231, 69, 1)"
                    }
                  ],
                  false
                )
              }
            }
          }
        ]
      };