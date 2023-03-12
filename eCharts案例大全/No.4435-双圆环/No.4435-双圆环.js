  let numWjc = 2; //未解除数字
  let numYjc = 1; //已解除数字
  let allNum = numWjc + numYjc; //中间数字
  let pieData1 = []; //小圆 有颜色部分
  let pieData2 = []; //小圆 背景
  let pieNum = 90;
  let yjcOutColor = "#BA1F26"; //已解除颜色 外部圆环
  let wjcOutColor = "#FF6971"; //未解除颜色 外部圆环
  let innerCircleBg = "#1e313a" //内部圆环背景 
  let innerCircleActiveStart = "#59AF33" //内部圆环 渐变开始
  let innerCircleActiveEnd = "#AFFF8C" //内部圆环 渐变结束
  let innerRadius = ["30%", "42%"]
  let outRadius = ["72%", "57%"]


  for (let i = 0; i < pieNum; ++i) {
      pieData1.push({
          value: 1,
          name: i,
          itemStyle: {
              normal: {
                  color: i < (pieNum * numYjc) / allNum ?
                      new echarts.graphic.LinearGradient(
                          0,
                          0,
                          0,
                          1,
                          [{
                                  offset: 0,
                                  color: innerCircleActiveStart,
                              },
                              {
                                  offset: 1,
                                  color: innerCircleActiveEnd,
                              },
                          ]
                      ) : "rgba(0,209,228,0)",
              },
          },
      });
  }
  for (let i = 0; i < pieNum; ++i) {
      pieData2.push({
          value: 1,
          name: i,
          itemStyle: {
              normal: {
                  color: "#638F7F",
              },
          },
      });
  }

  option = {
      title: [{
          text: allNum,
          x: "48%",
          y: "40%",
          textAlign: "center",
          textStyle: {
              fontSize: "43",
              fontWeight: "900",
              color: "#77FFC4",
              textAlign: "center",
          },
      }, ],
      polar: {
          radius: outRadius,
          center: ["50%", "50%"],
      },
      angleAxis: {
          show: false,
          max: allNum,
      },
      radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
              show: false,
          },
          axisLine: {
              show: false,
          },
          axisTick: {
              show: false,
          },
      },
      tooltip: {
          show: false,
      },
      calculable: true,
      series: [{
              // 外圈
              name: "",
              type: "bar",
              // roundCap: true,
              barWidth: 60,
              showBackground: true,
              backgroundStyle: {
                  color: "#638F7F",
              },
              data: [numYjc],
              coordinateSystem: "polar",
              itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(
                          0,
                          1,
                          0,
                          0,
                          [{
                                  offset: 0,
                                  color: yjcOutColor,
                              },
                              {
                                  offset: 1,
                                  color: wjcOutColor,
                              },
                          ]
                      ),
                  },
              },
          },
          {
              // 小圆 有颜色部分
              hoverAnimation: false,
              type: "pie",
              z: 2,
              data: pieData1,
              radius: innerRadius,
              zlevel: -2,
              itemStyle: {
                  normal: {
                      borderColor: innerCircleBg,
                      borderWidth: 1,
                  },
              },
              label: {
                  normal: {
                      position: "inside",
                      show: false,
                  },
              },
          },
          {
              // 小圆 背景 竖条
              hoverAnimation: false,
              type: "pie",
              z: 1,
              data: pieData2,
              radius: innerRadius,
              zlevel: -2,
              itemStyle: {
                  normal: {
                      borderColor: "#1e313a",
                      borderWidth: 1,
                  },
              },
              label: {
                  show: false,
              },
          },
      ],
  };