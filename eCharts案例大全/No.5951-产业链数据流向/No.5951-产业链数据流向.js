 var data = [
     ////////////////////////////////////////////////
     //化工产业链位置
         {
          name: "化工产业",
          x: 400,
          y: 400,
          value: [250, 600],

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
          name: "化工上游",
          symbolSize: [80, 40],

          label: {
            color: "#666"
          },
          value: [120, 530],

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
          name: "化工中游",
          symbolSize: [80, 40],

          label: {
            color: "#666"
          },
          value: [260, 530],

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
          name: "化工下游",
          x: 200,
          y: 200,
          value: [400, 530],

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
       ///////////////////////////////////////////////////////////////
       //钢铁产业链
         {
          name: "钢铁产业",
          x: 400,
          y: 400,
          value: [250, 70],

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
          name: "钢铁上游",
          symbolSize: [80, 40],

          label: {
            color: "#666"
          },
          value: [120, 0],

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
          name: "钢铁中游",
          symbolSize: [80, 40],

          label: {
            color: "#666"
          },
          value: [260, 0],

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
          name: "钢铁下游",
          x: 200,
          y: 200,
          value: [400, 0],

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
        ///////////////////////////////////////////////////////////////
       //大数据产业链
         {
          name: "大数据产业",
          x: 400,
          y: 400,
          value: [750, 600],

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
          name: "大数据上游",
          symbolSize: [80, 40],

          label: {
            color: "#666"
          },
          value: [620, 530],

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
          name: "大数据中游",
          symbolSize: [80, 40],

          label: {
            color: "#666"
          },
          value: [760, 530],

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
          name: "大数据下游",
          x: 200,
          y: 200,
          value: [900, 530],

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
        //////////////////////////////////////////////////////////
        //现代农林牧渔产业
         {
          name: "现代农林牧渔产业",
          x: 400,
          y: 400,
          value: [750, 70],

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
          name: "农林牧渔上游",
          symbolSize: [80, 40],

          label: {
            color: "#666"
          },
          value: [620, 0],

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
          name: "农林牧渔中游",
          symbolSize: [80, 40],

          label: {
            color: "#666"
          },
          value: [760, 0],

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
          name: "农林牧渔下游",
          x: 200,
          y: 200,
          value: [900, 0],

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
        /////////////////////////////////////////////////////////
        //高端装备制造产业链
        {
          name: "高端装备制造产业",
          x: 400,
          y: 400,
          value: [130, 380],

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
          name: "高端装备上游",
          symbolSize: [80, 40],

          label: {
            color: "#666"
          },
          value: [0, 310],

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
          name: "高端装备中游",
          symbolSize: [80, 40],

          label: {
            color: "#666"
          },
          value: [140, 310],

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
          name: "高端装备下游",
          x: 200,
          y: 200,
          value: [280, 310],

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
        //////////////////////////////////////////////////////
        //智能制造产业
      {
          name: "智能制造产业",
          x: 400,
          y: 400,
          value: [500, 460],

          fixed: true,
          symbolSize: [100, 50],

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
          name: "智能制造上游",
          symbolSize: [80, 40],

          label: {
            color: "#666"
          },
          value: [370, 390],

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
          name: "智能制造中游",
          symbolSize: [80, 40],

          label: {
            color: "#666"
          },
          value: [510, 390],

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
          name: "智能制造下游",
          x: 200,
          y: 200,
          value: [650, 390],

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
      ///////////////////////////////////////////////////// 
    //新能源汽车制造产业
     {
          name: "新能源汽车产业",
          x: 400,
          y: 400,
          value: [500, 150],

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
          name: "新能源汽车上游",
          symbolSize: [90, 40],

          label: {
            color: "#666"
          },
          value: [370, 220],

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
          name: "新能源汽车中游",
          symbolSize: [90, 40],

          label: {
            color: "#666"
          },
          value: [510, 220],

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
          name: "新能源汽车下游",
          x: 200,
          y: 200,
          value: [650, 220],

          fixed: true,
          symbolSize: [90, 40],
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
        ///////////////////////////////////
        //生物医药产业
         {
          name: "生物医药产业",
          x: 400,
          y: 400,
          value: [930, 380],

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
          name: "生物医药上游",
          symbolSize: [80, 40],

          label: {
            color: "#666"
          },
          value: [770, 310],

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
          name: "生物医药中游",
          symbolSize: [80, 40],

          label: {
            color: "#666"
          },
          value: [910, 310],

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
          name: "生物医药下游",
          x: 200,
          y: 200,
          value: [1050, 310],

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
        
      
      ];

      option=({
       
        backgroundColor: "",
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
                source: "智能制造下游",
                target: "新能源汽车上游"
                // lineStyle: {
                //   normal: {
                //     color: "#12b5d0",
                //
                //   }
                // }
              },
              {
                source: "智能制造下游",
                target: "大数据上游",
                lineStyle: {
                  normal: {
                    // color: "#12b5d0",
                  }
                }
              },
              {
                source: "智能制造下游",
                target: "高端装备上游",
                lineStyle: {
                  normal: {
                    // color: "#12b5d0",
                  }
                }
              },
               {
                source: "大数据下游",
                target: "农林牧渔上游",
                lineStyle: {
                  normal: {
                    // color: "#12b5d0",
                  }
                }
              },
               {
                source: "农林牧渔下游",
                target: "生物医药上游",
                lineStyle: {
                  normal: {
                    // color: "#12b5d0",
                  }
                }
              }, {
                source: "钢铁下游",
                target: "高端装备上游",
                lineStyle: {
                  normal: {
                    // color: "#12b5d0",
                  }
                }
              },
              {
                source: "钢铁下游",
                target: "智能制造上游",
                lineStyle: {
                  normal: {
                    // color: "#12b5d0",
                  }
                }
              },
               {
                source: "钢铁下游",
                target: "新能源汽车上游",
                lineStyle: {
                  normal: {
                    // color: "#12b5d0",
                  }
                }
              },
               {
                source: "化工下游",
                target: "农林牧渔上游",
                lineStyle: {
                  normal: {
                    // color: "#12b5d0",
                  }
                }
              },
              
               {
                source: "化工下游",
                target: "高端装备上游",
                lineStyle: {
                  normal: {
                    // color: "#12b5d0",
                  }
                }
              },

              {
                source: "化工下游",
                target: "新能源汽车上游",
                lineStyle: {
                  normal: {
                    // color: "#12b5d0",
                  }
                }
              },

              {
                source: "化工下游",
                target: "智能制造上游",
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
                curveness: 0,

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
                curveness: 0
              }
            },

            data: [
              {
                coords: [
                  [650, 390],
                  [370, 220]
                ]
              },
              {
                coords: [
                  [650, 390],
                  [620, 530]
                ]
              },
                {
                coords: [
                  [650, 390],
                  [0, 310]
                ]
              },
                {
                coords: [
                  [900, 530],
                  [620, 0]
                ]
              },
              {
                coords: [
                  [900, 0],
                  [770, 310]
                ]
              },
              {
                coords: [
                  [400, 0],
                  [0, 310]
                ]
              },
               {
                coords: [
                  [400, 0],
                  [370, 220]
                ]
              },
               {
                coords: [
                  [400, 0],
                  [370, 390]
                ]
              },
              {
                coords: [
                  [400, 530],
                  [0, 310]
                ]
              },
             {
                coords: [
                  [400, 530],
                  [370, 390]
                ]
              },{
                coords: [
                  [400, 530],
                  [370, 220]
                ]
              },{
                coords: [
                  [400, 530],
                  [620, 0]
                ]
              },
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
                curveness: 0
              }
            },

            data: [
              {
                coords: [
                    [650, 390],
                  [370, 220]
                ]
              },
              {
                coords: [
                   [650, 390],
                  [620, 530]
                ]
              },
             {
                coords: [
                  [650, 390],
                  [0, 310]
                ]
              },
              {
                coords: [
                  [900, 530],
                  [620, 0]
                ]
              },
               {
                coords: [
                  [900, 0],
                  [770, 310]
                ]
              },
              {
                coords: [
                  [400, 0],
                  [0, 310]
                ]
              },
               {
                coords: [
                  [400, 0],
                  [370, 220]
                ]
              },
               {
                coords: [
                  [400, 0],
                  [370, 390]
                ]
              },
               {
                coords: [
                  [400, 530],
                  [0, 310]
                ]
              },
             {
                coords: [
                  [400, 530],
                  [370, 390]
                ]
              },{
                coords: [
                  [400, 530],
                  [370, 220]
                ]
              },{
                coords: [
                  [400, 530],
                  [620, 0]
                ]
              },
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
                curveness: 0
              }
            },

            data: [
              {
                coords: [
                    [650, 390],
                  [370, 220]
                ]
              },
              {
                coords: [
                   [650, 390],
                  [620, 530]
                ]
              },
              {
                coords: [
                  [650, 390],
                  [0, 310]
                ]
              },
              {
                coords: [
                  [900, 530],
                  [620, 0]
                ]
              },
               {
                coords: [
                  [900, 0],
                  [770, 310]
                ]
              },
              {
                coords: [
                  [400, 0],
                  [0, 310]
                ]
              },
               {
                coords: [
                  [400, 0],
                  [370, 220]
                ]
              },
               {
                coords: [
                  [400, 0],
                  [370, 390]
                ]
              },
               {
                coords: [
                  [400, 530],
                  [0, 310]
                ]
              },
             {
                coords: [
                  [400, 530],
                  [370, 390]
                ]
              },{
                coords: [
                  [400, 530],
                  [370, 220]
                ]
              },{
                coords: [
                  [400, 530],
                  [620, 0]
                ]
              },
            ]
          }
        ]
      });