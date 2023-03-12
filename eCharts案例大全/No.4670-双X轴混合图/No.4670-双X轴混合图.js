option = {
        inverse:true,
        title: {
          // text: "段灰比 （kg/m）",
          textStyle: {
            color: "rgba(0, 0, 0, 0.45)",
            fontSize: 14,
            fontWeight: 100,
            fontFamily: "phLight"
          }
        },
        grid: {
          left: "5%",
          right: "5%",
          top: "5%",
          bottom: "0%",
          containLabel: true
        },
        background: "none",
        tooltip: {
          trigger: "axis",
          backgroundColor: "#fff", //通过设置rgba调节背景颜色与透明度
          color: "rgba(0,0,0,.65)",
          textStyle: {
            color: "rgba(0,0,0,.65)",
            fontSize: 12
          },
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#006CD9"
            }
          }
          // formatter: "{a} <br/>{c}kg<br/>{c1}min"
        },
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ["line", "bar"] },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        textStyle: {
          color: "rgba(0, 0, 0, 0.45)",
          fontSize: 12,
          fontFamily: "phLight"
        },
        legend: {
          itemWidth: 10,
          itemHeight: 10,
          x:'5.4%',
          textStyle: {
            color: "rgba(0, 0, 0, 0.45)"
          },
          data: [
            {
              name: "段灰比",
              icon: "rect"
            },
            {
              name: "搅拌时间",
              icon: "line"
            },
            {
              name: "段灰比设计平均值",
              icon: `line`
            }
          ]
        },
        xAxis: [
            {
            type: "value",
            name: "min",
            nameTextStyle: {
              verticalAlign:"top",
              lineHeight:25,
            },
            // min: 0,
            // max: 400,
            splitNumber: 20,
            // interval: 10,
            axisLabel: {
              formatter: "{value}"
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "rgba(86, 115, 120, .2)"
              }
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgba(0,0,0,.1)"
              }
            }
          },
           {
            type: "value",
            name: "kg/m",
            nameTextStyle: {
              verticalAlign:"top",
              lineHeight:-30,
            },
            min: 0,
            // max: 1000,
            // splitNumber: 5,
            // interval: 50,
            axisLabel: {
              formatter: "{value}"
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "rgba(86, 115, 120, .2)"
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: "dashed",
                color: "rgba(0,0,0,.1)"
              }
            }
          }
          
        ],
        yAxis: [
            {
            type: "category",
            inverse:true,
            axisLine: {
              show: false,
              lineStyle: {
                color: "rgba(86, 115, 120, .2)"
              }
            },
            data: [
              "1m",
              "2m",
              "3m",
              "4m",
              "5m",
              "6m",
              "7m",
              "8m",
              "9m",
              "10m",
              "11m",
              "12m"
            ],
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        series: [
          {
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  { offset: 0, color: "#0A8BFF" }, //柱图渐变色
                  { offset: 1, color: "rgba(10, 139, 255, 0.1)" } //柱图渐变色
                ])
              }
            },
            name: "段灰比",
            type: "bar",
            xAxisIndex: 1,
            barMaxWidth: 30,
            // label: {
            //     show: true,
            //     position:"right",
            //     color:"#206199",
            //     formatter:function(params){ 
            //         str =  params.data+"kg/m"
            //         return str
            //     },
            // },
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },
          {
            itemStyle: {
              normal: {
                color: "#006CD9",
                borderColor: "#006CD9",
                borderWidth: 2
              }
            },
            symbol: "circle",
            name: "搅拌时间",
            type: "line",
            // label: {
            //     show: true,
            //     position:"right",
            //     color:"#206199",
            //     formatter:function(params){ 
            //         str =  params.data+"min"
            //         return str
            //     },
            // },
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          },
          {
            name: "段灰比设计平均值",
            type: "line",
            xAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#006CD9",
                borderColor: "#006CD9",
                borderWidth: 2
              }
            },
            markLine: {
              symbol: ["none", "none"], //去掉箭头
              data: [
                {
                  name: "段灰比设计平均值",
                  // 支持 'average', 'min', 'max'
                  xAxis: 120,
                  type: "average",
                  lineStyle: {
                    normal: {
                      color: "#006CD9",
                      width: 1,
                      type: "dashed"
                    }
                  }
                }
              ]
            }
          }
        ]
      };