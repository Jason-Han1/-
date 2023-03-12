option =   {
          tooltip: {},
          gird:{
            top:200
          },
          radar: {
            radius: "50%", //大小
            nameGap:10, // 图中工艺等字距离图的距离
            center: ["50%", "50%"], // 图的位置
            name: {
              textStyle: {
                color: "#666666",
                fontSize: 16
              },
              formatter: function(name) {
              return name;
              }
            },
            indicator: [
              {"name":'举报投诉',"max":"100",axisLabel : {
    show: true
}},
              {"name":'举报投诉',"max":"100"},
              {"name":'举报投诉',"max":"100"},
              {"name":'举报投诉',"max":"100"},
              {"name":'举报投诉',"max":"100"},
              
              ],
            axisLine: {
              show:true,
              lineStyle: {
                color: "#666666"
              }
            },
            splitArea: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: "#666666" // 设置网格的颜色
              }
            },

          },
          
          series: [
            {
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
                  symbolSize: 0,
                  value: [70,42,63,84,75,34],
                  areaStyle: { color: "rgba(64, 205, 241, 0.2)" },
                  // itemStyle: {
                  //   normal: {
                  //     borderWidth:1,
                  //     color: "RGBA(0, 34, 66, 1)",
                  //     borderColor: "rgba(146, 225, 255, 1)"
                  //   }
                  // },
                  lineStyle: {
                    color: "blue",
                    width: 1
                  }
                }
              ]
            }
          ]
        }