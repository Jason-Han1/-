 colorList=[
          "#73DDFF",
          "#73ACFF",
          "#FDD56A",
          "#FDB36A",
          "#FD866A",
          "#9E87FF",
          "#58D5FF",
        ],
        legendData1= ["酒仙", "诗歌", "人间", "六月"],
        legendData2=["渡口", "挥手", "怀念"],
        data1=[
          {
            name: "酒仙",
            value:10,
          },
          {
            name: "诗歌",
            value: 11,
          },
          {
            name: "人间",
            value:12,
          },
          {
            name: "六月",
            value: 11,
          },
          {
            name: "渡口",
            value: 11,
          },
          {
            name: "挥手",
            value: 11,
          },
          {
            name: "怀念",
            value:10,
          },
        ],

option = {
    tooltip: {
          trigger: "item",
        },
        legend: [
          {
            type: "scroll",
            orient: "vertical",
            icon: "square",
            left: "60%",
            align: "left",
            top: "20%",
            itemGap: 50,
            textStyle: {
              color: "#a2a2a3",
            },
            data: legendData1,
            formatter: function (name) {
              if (data1 && data1.length) {
                for (var i = 0; i < data1.length; i++) {
                  if (name === data1[i].name) {
                    return name + "    " + "    " + data1[i].value + "个";
                  }
                }
              }
            },
          },
          {
            type: "scroll",
            orient: "vertical",
            icon: "square",
            left: "80%",
            align: "left",
            top: "20%",
            itemGap: 50,
            textStyle: {
              color: "#a2a2a3",
            },
            data: legendData2,
            formatter: function (name) {
              if (data1 && data1.length) {
                for (var i = 0; i < data1.length; i++) {
                  if (name === data1[i].name) {
                    return name + "    " + "    " + data1[i].value + "个";
                  }
                }
              }
            },
          },
        ],
        series: [
          {
            type: "pie",
            center: ["30%", "40%"],
            radius: ["45%", "75%"],
            roseType: "radius",
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
              normal: {
                shadowColor: "rgba(255,255,255,0.88)",
                shadowBlur: 60,
                color: function (params) {
                  return colorList[params.dataIndex];
                },
              },
            },
            label: {
              show: false,
              position: "outside",
              formatter: "{a|{b}：{d}%}\n{hr|}",
              rich: {
                hr: {
                  backgroundColor: "t",
                  borderRadius: 3,
                  width: 3,
                  height: 3,
                  padding: [3, 3, 0, -12],
                },
                a: {
                  padding: [-30, 15, -20, 15],
                },
              },
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                  width: 1,
                },
              },
            },
            data: data1,
          },
        ],
};
