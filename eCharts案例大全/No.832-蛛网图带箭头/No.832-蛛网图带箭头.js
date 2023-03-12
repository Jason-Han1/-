option =   {
          backgroundColor: "#0A2E5D",
          tooltip: {},

          radar: {
            radius: "50%", //大小
            nameGap: 20, // 图中工艺等字距离图的距离
            center: ["50%", "50%"], // 图的位置
            name: {
              textStyle: {
                color: "rgba(101, 213, 255, 1)",
                fontSize: 16
              },
              formatter: function(name) {
              return name;
              }
            },
            indicator: [
              {"name":'社会稳定',"max":"100"},
              {"name":'社会治安',"max":"100"},
              {"name":'交通安全',"max":"100"},
              {"name":'消防安全',"max":"100"},
              {"name":'公共安全',"max":"100"},
              ],
            axisLine: {
              lineStyle: {
               
                color: "rgba(153, 409, 246, 0.2)"
              },
              show:true,
             symbolSize : [20,15],
             symbol:['none', 'arrow'],
             symbolOffset:[0,15]
              
            },
            splitArea: {
              show: false,
              areaStyle: {
                color: "rgba(255,0,0,0)" // 图表背景的颜色
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: "rgba(153, 209, 246, 0.2)" // 设置网格的颜色
              }
            }
          },

          series: [
            {
              name: "报警类型分析",
              type: "radar",
              symbol: "angle",
              itemStyle: {
                normal: {
                  areaStyle: { type: "default" }
                }
              },
              data: [
                {
                  symbol: "circle",
                  symbolSize: 5,
                  value: [70,42,63,84,75,34],
                  areaStyle: { color: "rgba(64, 205, 241, 0.2)" },
                  itemStyle: {
                    normal: {
                      borderWidth:1,
                      color: "RGBA(0, 34, 66, 1)",
                      borderColor: "rgba(146, 225, 255, 1)"
                    }
                  },
                  lineStyle: {
                    color: "rgba(146, 225, 255, 1)",
                    width: 1
                  }
                }
              ]
            }
          ]
        }