 option = {
          title: {
            text: '2019年销售水量和主营业务收入对比',
            textStyle: {
              align: 'center',
              color: '#fff',
              fontSize: 20,
            },
            top: '3%',
            left: '10%',
          },
          backgroundColor: '#0f375f',
          grid: {
            top: "25%",
            bottom: "10%"//也可设置left和right设置距离来控制图表的大小
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
              label: {
                // show: true
              }
            },

          },
          xAxis: {
            data: [
              "aa",
              "bb",
              "cc",
              "dd",
              "ee",
              "ff",
              "gg",
              "hh",

            ],
            axisLine: {
              show: false, //隐藏X轴轴线
              lineStyle: {
                color: '#01FCE3'
              }
            },
            axisTick: {
              show: false //隐藏X轴刻度
            },
            axisLabel: {
              show: true,
              color: "#fff" //X轴文字颜色
            },

          },
          yAxis: [{
            type: "value",
            // name: "ceshi",
            nameTextStyle: {
              color: "#ebf8ac"
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#FFFFFF'
              }
            },
            axisLabel: {
              show: true,
              color: "#fff"
            },

          },
            {
              type: "value",
              name: "同比",
              show: false,
              nameTextStyle: {
                color: "#ebf8ac"
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
                formatter: "{value} %", //右侧Y轴文字显示
                color: ""
              }
            }
          ],
          series: [{
            name: "销售水量",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 8, //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [
                  {
                    offset: 0, color: '#fff' // 0% 处的颜色
                  }, {
                    offset: 0.25, color: '#fff' // 100% 处的颜色
                  }, {
                    offset: 0.5, color: '#058cff' // 100% 处的颜色
                  },  {
                    offset: 1, color: 'red' // 100% 处的颜色
                  }
                ],
                global: false, // 缺省为 false
                emphasis:{
                  color: '#EB547C',
                  borderColor: '#EB547C',
                  borderWidth: 40,
                }
              }
            },
            lineStyle: {
              color: "#058cff"
            },
            areaStyle:{
              color: "rgba(5,140,255, 0)"
            },
            data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
          },
            {
              // name: "主营业务",
              type: "bar",
              barWidth: 1,
              tooltip: {
                show: false
              },
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "#1268f3"
                },
                  // {
                  //     offset: 0.5,
                  //     color: "#4693EC"
                  // },
                  {
                    offset: 1,
                    color: "rgba(250, 250, 250, 0)"
                  }
                ])
              },
              data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
            }
          ]
        }