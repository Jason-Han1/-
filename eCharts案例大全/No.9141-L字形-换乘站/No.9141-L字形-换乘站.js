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
                      name: '1下',
                      value: [1.5, 10],
                      itemStyle: {
                            color: "rgba(200,180,40,1)",
                      },
                  },{
                      name: '2下',
                      value: [10, 0.5],
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
                  // 左
                  // 上
                  {
                      name: '2笔',
                      coords: [[1.5, 10], [10.5, 1.5]],
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
                      coords: [[10, 0.5], [0.5, 10]],
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
                  },
                  // 1
                  {
                      name: '',
                      coords: [[0.5, 0.5], [0.5, 10]],
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
                      coords: [[10, 0.5], [0.5, 0.5]],
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
                      coords: [[0.5, 1.5], [10, 1.5]],
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
                      coords: [[1.5, 10], [1.5, 0.5]],
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