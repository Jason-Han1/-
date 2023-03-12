option = option ={
                              series: [
                                    {
                                          name: "当日耗能",
                                          type: "gauge",
                                          min: 0,
                                          max: 100,
                                          data: [{value: 26, name: ""}],
                                          center: ['50%', '50%'],
                                          radius:'75%',
                                          splitNumber: 4, //刻度数量
                                          startAngle: 225,
                                          endAngle: -45,
                                          axisLabel: {
                                                show: false,
                                          },//刻度标签。
                                          axisLine: {
                                                lineStyle: {
                                                      width: 60,
                                                      color: [
                                                            [0.2, "#345E43"],
                                                            [0.4, "#81A12E"],
                                                            [0.6, "#DDD11A"],
                                                            [0.8, "#DD9A2D"],
                                                            [1, "#CE2028"]
                                                      ]
                                                }
                                          },
                                          axisTick: {  //刻度线
                                                show: true,
                                                length: 10,
                                                splitNumber: 5,
                                                distance:-10,
                                                lineStyle: {
                                                      color: "#F8C232",

                                                }
                                          },
                                          splitLine: {  //分割线
                                                show: false,
                                                length: 10,
                                                lineStyle: {
                                                      color: '#F8C232',
                                                      width:1
                                                }
                                          },//分隔线样式
                                          axisLabel: {
                                                show: false,
                                          },
                                          detail: {
                                                show: false
                                          },
                                          pointer: { // 仪表盘指针
                                                show: true,
                                                length: "50%",
                                                width: 5,
                                          },
                                          itemStyle: { // 仪表盘指针样式
                                                color: "rgba(248, 194, 50, 1)", // 指针颜色，默认(auto)取数值所在的区间的颜色
                                                opacity: 1, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                                                borderWidth: 0, // 描边线宽,默认 0。为 0 时无描边。
                                                borderType: "solid", // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
                                                borderColor: "#000", // 图形的描边颜色,默认 "#000"。支持的颜色格式同 color，不支持回调函数。
                                                shadowBlur: 1, // (发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
                                                shadowColor: "#fff", // 阴影颜色。支持的格式同color。

                                          },
                                    }
                              ]
                        }