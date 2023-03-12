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
          right: "4%",
          top: "10%",
          bottom: "1%"
        },
        legend: {
          data: ["环境管控单元","生态管控分区","大气环境管控分区","水环境管控分区","土壤污染风险管控分区","自然资源管控分区","岸线管控分区"],
          // 大小 和位置 文字样式
          itemGap: 12,
          right: 'center',
          top: 10,
          width:'80%',
          textStyle: {
            fontSize: 14,
            color: "#5D6C8E",
            fontFamily: "SourceHanSansCN-Regular"
          }
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
              verticalAlign: "bottom",
              align: "left",
              padding: [0, 0, -10,-40],
              textStyle: {
                fontSize: 16,
                color: "#65779E",
                fontFamily: "SourceHanSansCN-Regular"
              }
            },
            // 纵坐标数据
            data: [
              "济南",
              "青岛",
              "淄博",
              "枣庄",
              "东营",
              "烟台",
              "潍坊",
              "济宁",
              "泰安",
              "威海",
              "日照",
              "滨州",
              "德州",
              "聊城",
              "临沂"
            ],
            yAxisIndex: 0,
            // 横坐标 分割线等取消显示
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "环境管控单元",
            type: "bar",
            // 宽度
            barWidth: "16",
            // 堆叠
            stack: "总量",
            showBackground: true,
            // 全部背景
            backgroundStyle: {
              color: "#031e46"
            },
            data: [2,2, 2, 2, 2, 2, 2 ,2,2,2,2,2,2,2,2],
            itemStyle: {
                emphasis: {
                  barBorderRadius: 7
              },
              normal: {
                show: true,
                barBorderRadius: 7,
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
                      color: "#fc9e60"
                    },
                    {
                      offset: 1,
                      color: "#fc9e60"
                    }
                  ],
                  false
                )
              }
            }
          },
          {
            name: "生态管控分区",
            type: "bar",
            // 宽度
            barWidth: "16",
            // 堆叠
            stack: "总量",
            showBackground: true,
            // 全部背景
            backgroundStyle: {
              color: "#031e46"
            },
            data: [2,2, 2, 2, 2, 2, 2 ,2,2,2,2,2,2,2,2],
            itemStyle: {
                emphasis: {
                  barBorderRadius: 7
              },
              normal: {
                barBorderRadius: 7,
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
                      color: "#b0ffac"
                    },
                    {
                      offset: 1,
                      color: "#b0ffac"
                    }
                  ],
                  false
                )
              }
            }
          },
          {
            name: "大气环境管控分区",
            type: "bar",
            // 宽度
            barWidth: "16",
            // 堆叠
            stack: "总量",
            showBackground: true,
            // 全部背景
            backgroundStyle: {
              color: "#031e46"
            },
            data: [2,2, 2, 2, 2, 2, 2 ,2,2,2,2,2,2,2,2],
            itemStyle: {
              emphasis: {
                  barBorderRadius: 7
              },
              normal: {
                show: true,
                barBorderRadius: 7,
                textStyle: {
                  fontSize: 16,
                  
                },
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#90BEFF"
                    },
                    {
                      offset: 1,
                      color: "#5EA1FF"
                    }
                  ],
                  false
                )
              }
            }
          },
          {
            name: "水环境管控分区",
            type: "bar",
            // 宽度
            barWidth: "16",
            // 堆叠
            stack: "总量",
            showBackground: true,
            // 全部背景
            backgroundStyle: {
              color: "#031e46"
            },
            data: [2,2, 2, 2, 2, 2, 2 ,2,2,2,2,2,2,2,2],
            itemStyle: {
              emphasis: {
                  barBorderRadius: 7
              },
              normal: {
                show: true,
                barBorderRadius: 7,
                textStyle: {
                  fontSize: 16,
                  
                },
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#11d3f7"
                    },
                    {
                      offset: 1,
                      color: "#11d3f7"
                    }
                  ],
                  false
                )
              }
            }
          },
          {
            name: "土壤污染风险管控分区",
            type: "bar",
            // 宽度
            barWidth: "16",
            // 堆叠
            stack: "总量",
            showBackground: true,
            // 全部背景
            backgroundStyle: {
              color: "#031e46"
            },
            data: [2,2, 2, 2, 2, 2, 2 ,2,2,2,2,2,2,2,2],
            itemStyle: {
              emphasis: {
                  barBorderRadius: 7
              },
              normal: {
                show: true,
                barBorderRadius: 7,
                textStyle: {
                  fontSize: 16,
                  
                },
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#ffcb34"
                    },
                    {
                      offset: 1,
                      color: "#ffcb34"
                    }
                  ],
                  false
                )
              }
            }
          },
          {
            name: "自然资源管控分区",
            type: "bar",
            // 宽度
            barWidth: "16",
            // 堆叠
            stack: "总量",
            showBackground: true,
            // 全部背景
            backgroundStyle: {
              color: "#031e46"
            },
            data: [2,2, 2, 2, 2, 2, 2 ,2,2,2,2,2,2,2,2],
            itemStyle: {
              emphasis: {
                  barBorderRadius: 7
              },
              normal: {
                show: true,
                barBorderRadius: 7,
                textStyle: {
                  fontSize: 16,
                  
                },
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#73ffc8"
                    },
                    {
                      offset: 1,
                      color: "#73ffc8"
                    }
                  ],
                  false
                )
              }
            }
          },
          {
            name: "岸线管控分区",
            type: "bar",
            // 宽度
            barWidth: "16",
            // 堆叠
            stack: "总量",
            showBackground: true,
            // 全部背景
            backgroundStyle: {
              color: "#031e46"
            },
            data: [1.1,1.2, 1.3, 1.4, 1.5, 1.6, 1.7 ,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5],
            itemStyle: {
              emphasis: {
                  barBorderRadius: 7
              },
              normal: {
                show: true,
                barBorderRadius: 7,
                textStyle: {
                  fontSize: 16,
                  
                },
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#faa935"
                    },
                    {
                      offset: 1,
                      color: "#faa935"
                    }
                  ],
                  false
                )
              }
            }
          }
        ]
      };