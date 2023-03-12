  var datas = {
      value: 80,
      title: "健康度",
      type: 1,
      radiusType: 1
  };

  var fontColor = "#fff";
  var seriesName = "";
  let noramlSize = 16;
  let state = "";
  let center = ["50%", "70%"];
  let wqradius,
      nqradius,
      kdradius;

  wqradius = "100%";
  nqradius = "90%";
  kdradius = "95%";

  let wqColor = "rgba(80, 152, 237,0.9)";
  let nqColor = [
      [datas.value / 100, new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgba(248,182,45,1)',
                            }, {
                                offset: 0.5,
                                color: 'rgba(125,103,179,1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(33,109,195,1)',
                            }
                        ]
                    )],
      [1, "#2C3638"]
  ]

  option = {
      backgroundColor:"#000",
      title: {
          show: true,
          x: "center",
          bottom: "6%",
          text: datas.title,
          textStyle: {
              fontWeight: "700",
              fontSize: 16,
              color: fontColor
          }
      },
      tooltip: {
          show: false
      },
      series: [{
              name: "刻度文字",
              type: "gauge",
              radius: kdradius,
              center: center,
              startAngle: 180,
              endAngle: 0,
              z: 7,
              splitNumber: 5,
              min: 0,
              max: 100,
              axisTick: {
                  show: true,
                  lineStyle: {
                      color: "#0af",
                      width: 1
                  },
                  length: 8,
                  splitNumber: 6
              },
              splitLine: {
                  show: false
              },
              axisLine: {
                  lineStyle: {
                      width: 25,
                      opacity: 0
                  }
              },
              axisLabel: {
                  distance: -70,
                  fontSize: noramlSize,
                  color: fontColor,
              },
/*              pointer: {
                  show: false
              },
              detail: {
                  show: false
              }*/
              pointer: {
                  show: true,
                  width: 10,
                  length: "60%"
              },
              itemStyle: {
                  normal: {
                      //color: "#0af",//wqColor
                      color:new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgba(248,182,45,1)',
                            }, {
                                offset: 0.5,
                                color: 'rgba(125,103,179,1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(33,109,195,1)',
                            }
                        ]
                    )
                  }
              },
              detail: {
                  show: true,
                  offsetCenter: [0, "30%"],//显示数值的位置
                  rich: {
                      value: {
                          fontSize: 25,
                          lineHeight: 10,
                          color: "#1e87f0",
                          fontWeight: "700"
                      },
                      company: {
                          fontSize: 16,
                          lineHeight: 20,
                          color: "#1e87f0"
                      }
                  }
              },
              data: [datas.value]
          },/*
          {
              name: "指针",
              type: "gauge",
              z: 9,
              radius: "70%",
              startAngle: 180,
              endAngle: 0,
              center: center,
              axisLine: {
                  lineStyle: {
                      width: 0
                  }
              },
              axisTick: {
                  show: false
              },
              splitLine: {
                  show: false
              },
              axisLabel: {
                  show: false
              },
              min: 0,
              max: 5,
              pointer: {
                  show: true,
                  width: 10,
                  length: "60%"
              },
              itemStyle: {
                  normal: {
                      color: "#0af",//wqColor
                  }
              },
              detail: {
                  show: true,
                  offsetCenter: [0, "40%"],
                  rich: {
                      value: {
                          fontSize: 25,
                          lineHeight: 10,
                          color: "#1e87f0",
                          fontWeight: "700"
                      },
                      company: {
                          fontSize: 16,
                          lineHeight: 20,
                          color: "#1e87f0"
                      }
                  }
              },
              data: [datas.value]
          },*/
          {
              name: "内层盘",
              type: "gauge",
              z: 6,
              radius: nqradius,
              startAngle: 180,
              endAngle: 0,
              center: center,
              axisLine: {
                  lineStyle: {
                      color: nqColor,
                      width: 25,
                      opacity: 0.9
                  }
              },
              splitNumber: 5,
              min: 0,
              max: 100,
              axisTick: {
                  show: false
              },

              axisLabel: {
                  show: true
              },
              pointer: {
                  show: false
              },

              detail: {
                  show: 0
              }
          }
      ]
  };