option = {
    backgroundColor:"black",
    title: {
      text: "75%",
      textStyle: {
        color: "#ABE8F3",
        fontSize: 60
      },
      left: "center",
      top: "center"
    },
    angleAxis: {
      max: 100, // 满分
      // 隐藏刻度线
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    radiusAxis: {
      type: "category",
      // 隐藏刻度线
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    polar: {
      center: ["50%", "50%"],
      radius: "80%" //图形大小
    },
    series: [
      {
        //底部环
        type: "bar",
        data: [
          {
            name: "作文得分",
            value: 100,
            itemStyle: {
              normal: {
                color: "#2F556E"
              }
            }
          }
        ],
        coordinateSystem: "polar",
        roundCap: true,
        barWidth: 20,
        barGap: "-100%", // 两环重叠
        z: 1
      },
      {
        type: "bar",
        data: [
          {
            value: 75,
            itemStyle: {
              color: "#ABE8F3"
            }
          }
        ],
        coordinateSystem: "polar",
        roundCap: true,
        barWidth: 20,
        barGap: "-100%", // 两环重叠
        z: 2
      }
    ]
  };