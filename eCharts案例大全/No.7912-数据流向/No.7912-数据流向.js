 var data = [
        {
          name: "数据中心人员专题库",

          tooltip: {
            formatter: "{b}: 19999<br />"
          },
          value: [10, 0],
          symbol: "rect",
          symbolSize: [120, 50],
          value: [700, 400],
          x: 800,
          y: 400,
          fixed: true,
          // draggable: false,
          category: 1,
          label: {
            color: "#666"
          },
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#157eff"
                },
                {
                  offset: 1,
                  color: "#35c2ff"
                }
              ])
            }
          }
        },

        {
          name: "数据治理服务",
          x: 400,
          y: 400,
          value: [400, 400],

          fixed: true,
          symbolSize: [120, 50],

          label: {
            color: "#666"
          },
          category: 1,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#157eff"
                },
                {
                  offset: 1,
                  color: "#35c2ff"
                }
              ])
            }
          }
        },

        {
          name: "OSM",
          x: 200,
          y: 200,
          value: [100, 200],

          fixed: true,
          symbolSize: [80, 40],
          label: {
            color: "#666"
          },
          category: 1,

          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#ffb402"
                },
                {
                  offset: 1,
                  color: "#ffdc84"
                }
              ])
            }
          }
        },
        {
          name: "人员专题库",
          symbolSize: [80, 40],

          label: {
            color: "#666"
          },
          value: [100, 500],

          x: 200,
          y: 500,
          fixed: true,
          category: 1,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#ffb402"
                },
                {
                  offset: 1,
                  color: "#ffdc84"
                }
              ])
            }
          }
        },
        {
          name: "国家队",
          symbolSize: [80, 40],
          label: {
            color: "#666"
          },
          x: 1000,
          y: 300,
          value: [1000, 300],

          fixed: true,
          category: 1,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#ffb402"
                },
                {
                  offset: 1,
                  color: "#ffdc84"
                }
              ])
            }
          }
        },
        {
          name: "社会专家",
          symbolSize: [80, 40],
          label: {
            color: "#666"
          },
          value: [1000, 100],

          x: 1000,
          y: 100,
          fixed: true,
          category: 2,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#ffb402"
                },
                {
                  offset: 1,
                  color: "#ffdc84"
                }
              ])
            }
          }
        },
        {
          name: "志愿者",
          symbolSize: [80, 40],
          label: {
            color: "#666"
          },
          x: 1000,
          y: 200,
          value: [1000, 200],

          fixed: true,
          category: 2,
          itemStyle: {
            normal: {
              // borderColor: "#b457ff",
              // borderWidth: 4,
              // shadowBlur: 10,
              // shadowColor: "#b457ff",
              color: "rgb(255, 197, 61)" //黄色
            }
          }
        },
        {
          name: "专职队",
          symbolSize: [80, 40],
          label: {
            color: "#666"
          },
          x: 1000,
          y: 400,
          value: [1000, 400],

          fixed: true,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#ffb402"
                },
                {
                  offset: 1,
                  color: "#ffdc84"
                }
              ])
            }
          },
          category: 2
        },
        {
          name: "主机",
          symbolSize: [80, 40],
          label: {
            color: "#666"
          },
          x: 1000,
          y: 600,
          value: [1000, 600],

          fixed: true,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#ffb402"
                },
                {
                  offset: 1,
                  color: "#ffdc84"
                }
              ])
            }
          },
          category: 2
        },
        {
          name: "自建",
          symbolSize: [80, 40],
          label: {
            color: "#666"
          },
          x: 600,
          y: 200,
          value: [600, 600],

          fixed: true,

          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#ffb402"
                },
                {
                  offset: 1,
                  color: "#ffdc84"
                }
              ])
            }
          },
          category: 2
        },
        {
          name: "组织机构",
          symbolSize: [80, 40],

          label: {
            color: "#666"
          },
          value: [1000, 500],

          x: 1000,
          y: 500,
          fixed: true,
          category: 2,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#ffb402"
                },
                {
                  offset: 1,
                  color: "#ffdc84"
                }
              ])
            }
          }
        }
      ];

      option=({
       
        backgroundColor: "#fff",
        xAxis: {
          show: false,
          type: "value"
        },
        yAxis: {
          show: false,
          type: "value"
        },
        tooltip: {},
        series: [
          {
            type: "graph",
            zlevel: 5,

            draggable: false,
            coordinateSystem: "cartesian2d", //使用二维的直角坐标系（也称笛卡尔坐标系）

            // edgeSymbolSize: [0, 8], //边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定
            // edgeLabel: {
            //   normal: {
            //     textStyle: {
            //       fontSize: 60
            //     }
            //   }
            // },
            symbol: "rect",
            symbolOffset: ["15%", 0],

            label: {
              normal: {
                show: true
              }
            },
            data: data,
            links: [
              {
                source: "数据治理服务",
                target: "数据中心人员专题库"
                // lineStyle: {
                //   normal: {
                //     color: "#12b5d0",
                //
                //   }
                // }
              },
              {
                source: "OSM",
                target: "数据治理服务",
                lineStyle: {
                  normal: {
                    // color: "#12b5d0",
                  }
                }
              },
              {
                source: "人员专题库",
                target: "数据治理服务",
                lineStyle: {
                  normal: {
                    // color: "#12b5d0",
                  }
                }
              },
              {
                source: "数据中心人员专题库",
                target: "社会专家",
                lineStyle: {
                  normal: {
                    // color: "#12b5d0",
                  }
                }
              },

              {
                source: "数据中心人员专题库",
                target: "志愿者",
                lineStyle: {
                  normal: {
                    // color: "#12b5d0",
                  }
                }
              },

              {
                source: "数据中心人员专题库",
                target: "国家队",
                lineStyle: {
                  normal: {
                    // color: "#12b5d0",
                  }
                }
              },

              {
                source: "数据中心人员专题库",
                target: "专职队"
                // lineStyle: {
                //   normal: {
                //     color: "#12b5d0",
                //
                //   }
                // }
              },
              {
                source: "数据中心人员专题库",
                target: "组织机构",
                lineStyle: {
                  normal: {
                    // color: "#12b5d0",
                  }
                }
              },
              {
                source: "数据中心人员专题库",
                target: "主机",
                lineStyle: {
                  normal: {
                    // color: "#12b5d0",
                  }
                }
              },
              {
                source: "自建",
                target: "数据中心人员专题库",
                lineStyle: {
                  normal: {
                    // color: "#12b5d0",
                  }
                }
              }
            ],

            lineStyle: {
              normal: {
                opacity: 1,
                color: "#53B5EA",
                curveness: 0.2,

                // 12b5d0
                // type: "dashed",
                width: 2
              }
            }
          },

          {
            type: "lines",
            coordinateSystem: "cartesian2d",
            z: 1,
            zlevel: 2,
            animation: false,
            effect: {
              show: true,
              period: 5,
              trailLength: 0.01,
              symbolSize: 12,
              symbol: "pin",
              loop: true,
              color: "rgba(55,155,255,0.5)"
            },
            lineStyle: {
              normal: {
                color: "#22AC38",
                width: 0,
                curveness: 0.2
              }
            },

            data: [
              {
                coords: [
                  [100, 200],
                  [400, 400]
                ]
              },
              {
                coords: [
                  [100, 500],
                  [400, 400]
                ]
              },
              {
                coords: [
                  [400, 400],
                  [700, 400]
                ]
              },
              {
                coords: [
                  [700, 400],
                  [1000, 100]
                ]
              },
              {
                coords: [
                  [700, 400],
                  [1000, 200]
                ]
              },
              {
                coords: [
                  [700, 400],
                  [1000, 300]
                ]
              },
              {
                coords: [
                  [700, 400],
                  [1000, 400]
                ]
              },
              {
                coords: [
                  [700, 400],
                  [1000, 500]
                ]
              },
              {
                coords: [
                  [700, 400],
                  [1000, 600]
                ]
              },
              {
                coords: [
                  [600, 600],
                  [700, 400]
                ]
              }
            ]
          },
          {
            type: "lines",
            coordinateSystem: "cartesian2d",
            z: 1,
            zlevel: 2,
            animation: false,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.01,
              symbolSize: 12,
              symbol: "pin",
              loop: true,

              // period: 2.5,
              // trailLength:0,
              // symbolSize: 12,
              // symbol: "circle",
              color: "rgba(55,155,255,0.5)"
            },
            lineStyle: {
              normal: {
                color: "#22AC38",
                width: 0,
                curveness: 0.2
              }
            },

            data: [
              {
                coords: [
                  [100, 200],
                  [400, 400]
                ]
              },
              {
                coords: [
                  [100, 500],
                  [400, 400]
                ]
              },
              {
                coords: [
                  [400, 400],
                  [700, 400]
                ]
              },
              {
                coords: [
                  [700, 400],
                  [1000, 100]
                ]
              },
              {
                coords: [
                  [700, 400],
                  [1000, 200]
                ]
              },
              {
                coords: [
                  [700, 400],
                  [1000, 300]
                ]
              },
              {
                coords: [
                  [700, 400],
                  [1000, 400]
                ]
              },
              {
                coords: [
                  [700, 400],
                  [1000, 500]
                ]
              },
              {
                coords: [
                  [700, 400],
                  [1000, 600]
                ]
              },
              {
                coords: [
                  [600, 600],
                  [700, 400]
                ]
              }
            ]
          },
          {
            type: "lines",
            coordinateSystem: "cartesian2d",
            z: 1,
            zlevel: 2,
            animation: false,

            effect: {
              show: true,
              period: 8,
              trailLength: 0.01,
              symbolSize: 12,
              symbol: "pin",
              loop: true,

              // period: 2.5,
              // trailLength:0,
              // symbolSize: 12,
              // symbol: "circle",
              color: "rgba(55,155,255,0.5)"
            },
            lineStyle: {
              normal: {
                color: "#22AC38",
                width: 0,
                curveness: 0.2
              }
            },

            data: [
              {
                coords: [
                  [100, 200],
                  [400, 400]
                ]
              },
              {
                coords: [
                  [100, 500],
                  [400, 400]
                ]
              },
              {
                coords: [
                  [400, 400],
                  [700, 400]
                ]
              },
              {
                coords: [
                  [700, 400],
                  [1000, 100]
                ]
              },
              {
                coords: [
                  [700, 400],
                  [1000, 200]
                ]
              },
              {
                coords: [
                  [700, 400],
                  [1000, 300]
                ]
              },
              {
                coords: [
                  [700, 400],
                  [1000, 400]
                ]
              },
              {
                coords: [
                  [700, 400],
                  [1000, 500]
                ]
              },
              {
                coords: [
                  [700, 400],
                  [1000, 600]
                ]
              },
              {
                coords: [
                  [600, 600],
                  [700, 400]
                ]
              }
            ]
          }
        ]
      });