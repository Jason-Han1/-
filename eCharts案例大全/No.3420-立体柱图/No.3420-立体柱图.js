// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          //   console.log('shape',shape.xAxisPoint)
          const xAxisPoint = shape.xAxisPoint;
          const c0 = [shape.x - 30, shape.y];
          const c1 = [shape.x + 1, shape.y + 20];
          const c2 = [xAxisPoint[0] + 1, xAxisPoint[1] + 20];
          const c3 = [xAxisPoint[0] - 30, xAxisPoint[1]];
          ctx
            .moveTo(c0[0], c0[1])
            .lineTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .closePath();
        },
      });
      const CubeRight = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          const xAxisPoint = shape.xAxisPoint;
          const c1 = [shape.x + 30, shape.y];
          const c2 = [xAxisPoint[0] + 31, xAxisPoint[1] + 5];
          const c3 = [xAxisPoint[0], xAxisPoint[1] + 20];
          const c4 = [shape.x, shape.y];
          ctx
            .moveTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .lineTo(c4[0], c4[1])
            .closePath();
        },
      });
      const CubeTop = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          const c1 = [shape.x - 30, shape.y];
          const c2 = [shape.x, shape.y - 15]; //右点
          const c3 = [shape.x + 30, shape.y];
          const c4 = [shape.x, shape.y + 20];
          ctx
            .moveTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .lineTo(c4[0], c4[1])
            .closePath();
        },
      });
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)


const VALUE = [2016, 1230, 3790]

option = {
    backgroundColor: "rgb(1, 12, 36)",
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params, ticket, callback) {
            const item = params[1]
            return item.name + ' : ' + item.value;
        }
    },
    grid: {
        left: '10%',
        right: '10%',
        top: '15%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['雄县', '安新', '容城'],
        axisLine: {
            show: true,
            lineStyle: {
                color: 'white'
            }
        },
        axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
                color: '#7DFFFD'
            }
        },
        axisLabel: {
            fontSize: 20
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'white'
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 16
        },
        boundaryGap: ['20%', '20%']
    },
    series: [{
        type: 'custom',
        renderItem: (params, api) => {
            const location = api.coord([api.value(0), api.value(1)])
            return {
                type: 'group',
                children: [{
                    type: 'CubeLeft',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(55, 64, 110,0.2)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(55, 64, 110,0.2)'
                            }
                        ])
                    }
                }, {
                    type: 'CubeRight',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#f40'
                            },
                            {
                                offset: 1,
                                color: '#f40'
                            }
                        ])
                    }
                }, {
                    type: 'CubeTop',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#f40'
                            },
                            {
                                offset: 1,
                                color: '#f40'
                            }
                        ])
                    }
                }]
            }
        },
        data: VALUE
    }, {
        type: 'bar',
        stack: "统筹区域",
        itemStyle: {
            color: 'transparent'
        },
        tooltip: {
        },
        data: VALUE
    },{
        type: 'custom',
        renderItem: (params, api) => {
            const location = api.coord([api.value(0), api.value(1)])
            return {
                type: 'group',
                children: [{
                    type: 'CubeLeft',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0, 64, 110,1)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0, 64, 110,1)'
                            }
                        ]),
                        borderColor: '#fff',
                         borderWidth:1,
                    stroke:'#fff',
                    // lineWidth:10
                    },
                }, {
                    type: 'CubeRight',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#f40'
                            },
                            {
                                offset: 1,
                                color: '#f40'
                            }
                        ]),
                        
                    },
        //              itemStyle:{
        //       borderColor: '#fff',
        //       borderWidth:1,
        //       borderType : 'solid'
        // },
                }, {
                    type: 'CubeTop',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#f40'
                            },
                            {
                                offset: 1,
                                color: '#f40'
                            }
                        ])
                    }
                }]
            }
        },
       
        data: VALUE
    }, {
        type: 'bar',
        stack: "统筹区域",
        itemStyle: {
            color: 'transparent'
        },
        tooltip: {
        },
        data: VALUE
    }]
}