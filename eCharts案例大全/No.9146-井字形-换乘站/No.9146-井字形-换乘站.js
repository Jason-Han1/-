option = {
         /*  title: {
              text: '流程图模拟'
          }, */
          tooltip: {},
          xAxis: {
              type : 'value',
              boundaryGap : false,
              show: false,
          },
          yAxis: {
              type : 'value',
              show: false,
          },
          series: [
              {
                  type: 'graph',
                  layout: 'none',
                  coordinateSystem: 'cartesian2d',
                  symbolSize: 40,
                  label: {
                      normal: {
                          show: true
                      }
                  },
                  data: [{
                      name: '1上',
                      value: [9.5, 0],
                      tooltip: {
                          formatter: '1号线上行',
                      },
                      itemStyle: {
                            color: "rgba(40,140,200,1)",
                      },
                  }, {
                      name: '2上',
                      value: [0, 10.5],
                      itemStyle: {
                            color: "rgba(40,200,80,1)",
                      },
                  }, {
                      name: '1下',
                      value: [10.5, 20],
                      itemStyle: {
                            color: "rgba(200,180,40,1)",
                      },
                  },{
                      name: '2下',
                      value: [20, 9.5],
                      itemStyle: {
                            color: "rgba(200,90,40,1)",
                      },
                  },],
              },
              {
                  name: 'lineDemo',
                  type: 'lines',
                  symbol: ['none', 'none'],
                  symbolSize: 10,
                  coordinateSystem: 'cartesian2d',
                  effect: {
                      show: true,
                      period: 6,
                      trailLength: 0,
                      symbolSize: 15,
                      symbol: 'arrow',
                  },
                  label: {
                      show: true,
                      position: 'middle',
                  },
                  lineStyle: {
                      normal: {
                          color:'green',
                          width: 2,
                          opacity: 1,
                          curveness: 0
                      }
                  },
                  data: [
                      // 下
                      {
                      name: '1350笔',
                      coords: [[9.5, 0], [0, 9.5]],
                      label: {
                          padding: [0, 0, -20, 0],
                      },
                      lineStyle: {
                          normal: {
                            show : true,
                            curveness: -0.3,//边的曲度，支持从 0 到 1 的值，值越大曲度越大。
                            color: 'rgba(40,140,200,1)'
                              }
                      },
                      effect: {
                          show: true,
                          smooth: false,
                          trailLength: 0,
                          symbol: "arrow",
                          color: 'rgba(40,140,200,1)',
                          symbolSize: 8
                      },
                  }, {
                      name: '1240笔',
                      coords: [[9.5, 0], [20, 10.5]],
                      lineStyle: {
                          normal: {
                            show : true,
                            curveness: 0.3,//边的曲度，支持从 0 到 1 的值，值越大曲度越大。
                            color: 'rgba(40,140,200,1)'
                              }
                      },
                      effect: {
                          show: true,
                          smooth: false,
                          trailLength: 0,
                          symbol: "arrow",
                          color: 'rgba(40,140,200,1)',
                          symbolSize: 8
                      },
                  },
                  // 左
                  {
                      name: '1978笔',
                      coords: [[0, 10.5], [10.5, 0]],
                      lineStyle: {
                          normal: {
                            show : true,
                            curveness: 0.3,//边的曲度，支持从 0 到 1 的值，值越大曲度越大。
                            color: 'rgba(40,200,80,1)'
                              }
                      },
                      effect: {
                          show: true,
                          smooth: false,
                          trailLength: 0,
                          symbol: "arrow",
                          color: 'rgba(40,200,80,1)',
                          symbolSize: 8
                      },
                  }, {
                      name: '1545笔',
                      coords: [[0, 10.5], [9.5, 20]],
                      lineStyle: {
                          normal: {
                            show : true,
                            curveness: -0.3,//边的曲度，支持从 0 到 1 的值，值越大曲度越大。
                            color: 'rgba(40,200,80,1)'
                              }
                      },
                      effect: {
                          show: true,
                          smooth: false,
                          trailLength: 0,
                          symbol: "arrow",
                          color: 'rgba(40,200,80,1)',
                          symbolSize: 8
                      },
                  },
                  // 上
                  {
                      name: '1989笔',
                      coords: [[10.5, 20], [0, 9.5]],
                      label: {
                          padding: [0, 0, -20, 0],
                      },
                      lineStyle: {
                          normal: {
                            show : true,
                            curveness: 0.3,//边的曲度，支持从 0 到 1 的值，值越大曲度越大。
                            color: 'rgba(200,180,40,1)'
                              }
                      },
                      effect: {
                          show: true,
                          smooth: false,
                          trailLength: 0,
                          symbol: "arrow",
                          color: 'rgba(200,180,40,1)',
                          symbolSize: 8
                      },
                  }, {
                      name: '2笔',
                      coords: [[10.5, 20], [20.5, 10.5]],
                      lineStyle: {
                          normal: {
                            show : true,
                            curveness: -0.3,//边的曲度，支持从 0 到 1 的值，值越大曲度越大。
                            color: 'rgba(200,180,40,1)'
                              }
                      },
                      effect: {
                          show: true,
                          smooth: false,
                          trailLength: 0,
                          symbol: "arrow",
                          color: 'rgba(200,180,40,1)',
                          symbolSize: 8
                      },
                  },
                  // 右
                  {
                      name: '1笔',
                      coords: [[20, 9.5], [9.5, 20]],
                      label: {
                          padding: [0, 0, -20, 0],
                      },
                      lineStyle: {
                          normal: {
                            show : true,
                            curveness: 0.3,//边的曲度，支持从 0 到 1 的值，值越大曲度越大。
                            color: 'rgba(200,90,40,1)'
                              }
                      },
                      effect: {
                          show: true,
                          smooth: false,
                          trailLength: 0,
                          symbol: "arrow",
                          color: 'rgba(200,90,40,1)',
                          symbolSize: 8
                      },
                  }, {
                      name: '1345笔',
                      coords: [[19.5, 9.5], [10.5, 0]],
                      label: {
                          padding: [0, 0, -20, 0],
                      },
                      lineStyle: {
                          normal: {
                            show : true,
                            curveness: -0.3,//边的曲度，支持从 0 到 1 的值，值越大曲度越大。
                            color: 'rgba(200,90,40,1)'
                              }
                      },
                      effect: {
                          show: true,
                          smooth: false,
                          trailLength: 0,
                          symbol: "arrow",
                          color: 'rgba(200,90,40,1)',
                          symbolSize: 8
                      },
                  },
                  // 1
                  {
                      name: '',
                      coords: [[9.5, 0], [9.5, 20]],
                      lineStyle: {
                          normal: {
                            width: 4,
                            color: 'rgba(40,140,200,1)'
                              }
                      },
                      effect: {
                          show: true,
                          smooth: false,
                          trailLength: 0,
                          symbol: "arrow",
                          color: 'rgba(40,140,200,1)',
                          symbolSize: 12
                      },
                  }, {
                      name: '',
                      coords: [[20, 9.5], [0, 9.5]],
                      lineStyle: {
                          normal: {
                            width: 4,
                            color: 'rgba(200,90,40,1)'
                              }
                      },
                      effect: {
                          show: true,
                          smooth: false,
                          trailLength: 0,
                          symbol: "arrow",
                          color: 'rgba(200,90,40,1)',
                          symbolSize: 12
                      },
                  },
                  // 2
                  {
                      name: '',
                      coords: [[0, 10.5], [20, 10.5]],
                      lineStyle: {
                          normal: {
                            width: 4,
                            color: 'rgba(40,200,80,1)'
                              }
                      },
                      effect: {
                          show: true,
                          smooth: false,
                          trailLength: 0,
                          symbol: "arrow",
                          color: 'rgba(40,200,80,1)',
                          symbolSize: 12
                      },
                  }, {
                      name: '',
                      coords: [[10.5, 20], [10.5, 0]],
                      label: {
                          padding: [0, 0, -20, 0],
                      },
                      lineStyle: {
                          normal: {
                            width: 4,
                            color: 'rgba(200,180,40,1)'
                              }
                      },
                      effect: {
                          show: true,
                          smooth: false,
                          trailLength: 0,
                          symbol: "arrow",
                          color: 'rgba(200,180,40,1)',
                          symbolSize: 12
                      },
                  },]
              }
          ]
      };