// 
      // 总数
      let Count = 600
      let WC = 500
      let YJ = 50
      let ZC = 45
      let ZH = 5
      
      if (WC & ZC & YJ & ZH !== 0) {
        var minAngle = 20
      }
      let Sdata = [
        { value: WC, name: "已完成" },
        { value: ZC, name: "正常推进" },
        { value: YJ, name: "预警" },
        { value: ZH, name: "滞后" }
      ];
      let colorList = [
        ["rgba(89,170,245,0.85)", "rgba(89,170,245,0.25)"],
        ["rgba(21,190,79,0.85)", "rgba(21,190,79,0.25)"],
        ["rgba(244,212,75,0.85)", "rgba(244,212,75,0.25)"],
        ["rgba(252,92,92,0.85)", "rgba(252,92,92,0.25)"],
        ["#ccc", "#E3F0FF"]
      ];
      let rich = {
        total: {
          fontSize: 24,
          lineHeight: 30,
          color: "#333",
          fontWeight: "bold"
        },
        active: {
          fontSize: 14,
          color: "#333",
          lineHeight: 30
        }
      };
      let seriesArr = [];
      Sdata.forEach(function(item, index) {
        seriesArr.push({
          name: item.name,
          type: "pie",
          clockWise: false,
          radius: ["20%", "30%"],
          itemStyle: {
            normal: {
              color: colorList[index][0],
              shadowColor: colorList[index][0],
              shadowBlur: 0,
              label: { show: false },
              labelLine: { show: false }
            }
          },
          hoverAnimation: false,
          center: [
            index > 4 ? (index - 5) * 20 + 20 + "%" : index * 25 + 13 + "%",
            "60%"
          ],
          data: [
            {
              value: item.value,
              label: {
                normal: {
                  formatter: function(params) {
                    var name =
                      params.seriesIndex == 0
                        ? "已完成"
                        : params.seriesIndex == 1
                        ? "正常推进"
                        : params.seriesIndex == 2
                        ? "预警"
                        : params.seriesIndex == 3
                        ? "滞后"
                        : "其它";
                    var value = params.value;
                    return "{active|" + name + "}\n\r{total|" + value + "}";
                  },
                  rich: rich,
                  position: "center",
                  show: true,
                  textStyle: {
                    fontSize: "20",
                    fontWeight: "bold",
                    color: colorList[index][0]
                  }
                }
              }
            },
            {
              value: Count - item.value,
              name: "invisible",
              itemStyle: {
                normal: {
                  color: colorList[index][1]
                },
                emphasis: {
                  color: colorList[index][1]
                }
              }
            }
          ]
        });
      });




option = {
     title: {
          text: "各类目占比",
          left: "2%"
        },
        legend: {
          right: 0,
          top: "10px",
          show: true,
          selectedMode: false,
          data: Sdata
        },
        series: seriesArr
};
