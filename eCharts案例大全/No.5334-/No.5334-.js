 const CubeLeft = echarts.graphic.extendShape({
     shape: {
         x: 0,
         y: 0
     },
     buildPath: function(ctx, shape) {
         // 会canvas的应该都能看得懂，shape是从custom传入的
         const xAxisPoint = shape.xAxisPoint
         const c0 = [shape.x, shape.y]
         const c1 = [shape.x - 13, shape.y - 13]
         const c2 = [xAxisPoint[0] - 13, xAxisPoint[1] - 13]
         const c3 = [xAxisPoint[0], xAxisPoint[1]]
         ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
     }
 })
 // 绘制右侧面
 const CubeRight = echarts.graphic.extendShape({
     shape: {
         x: 0,
         y: 0
     },
     buildPath: function(ctx, shape) {
         const xAxisPoint = shape.xAxisPoint
         const c1 = [shape.x, shape.y]
         const c2 = [xAxisPoint[0], xAxisPoint[1]]
         const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9]
         const c4 = [shape.x + 18, shape.y - 9]
         ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
     }
 })
 // 绘制顶面
 const CubeTop = echarts.graphic.extendShape({
     shape: {
         x: 0,
         y: 0
     },
     buildPath: function(ctx, shape) {
         const c1 = [shape.x, shape.y]
         const c2 = [shape.x + 18, shape.y - 9]
         const c3 = [shape.x + 5, shape.y - 22]
         const c4 = [shape.x - 13, shape.y - 13]
         ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
     }
 })
 // 注册三个面图形
 echarts.graphic.registerShape('CubeLeft', CubeLeft)
 echarts.graphic.registerShape('CubeRight', CubeRight)
 echarts.graphic.registerShape('CubeTop', CubeTop)


 const MAX = ['优秀', '优秀', '优秀', '优秀', '优秀', '优秀', '优秀', '优秀', '优秀']
 const VALUE = [{
     value: '优秀',
     itemStyle: {
         color: {
             type: "linear",
             x1: 0,
             y1: 0,
             x2: 0,
             y2: 1,
             colorStops: [{
                     offset: 0,
                     color: "#1D43F3"
                 },
                 {
                     offset: 1,
                     color: "#4366F3"
                 }
             ],
             global: false
         }
     }
 }, {
     value: '良好',
     itemStyle: {
         color: {
             type: "linear",
             x1: 0,
             y1: 0,
             x2: 0,
             y2: 1,
             colorStops: [{
                     offset: 0,
                     color: "#38A0D6"
                 },
                 {
                     offset: 1,
                     color: "#61C3E2"
                 }
             ],
             global: false
         }
     }
 }, {
     value: '优秀',
     itemStyle: {
         color: {
             type: "linear",
             x1: 0,
             y1: 0,
             x2: 0,
             y2: 1,
             colorStops: [{
                     offset: 0,
                     color: "#38A0D6"
                 },
                 {
                     offset: 1,
                     color: "#61C3E2"
                 }
             ],
             global: false
         }
     }
 }, {
     value: '合格',
     itemStyle: {
         color: {
             type: "linear",
             x1: 0,
             y1: 0,
             x2: 0,
             y2: 1,
             colorStops: [{
                     offset: 0,
                     color: "#4721CA"
                 },
                 {
                     offset: 1,
                     color: "#8651F4"
                 }
             ],
             global: false
         }
     }
 }, {
     value: '合格',
     itemStyle: {
         color: {
             type: "linear",
             x1: 0,
             y1: 0,
             x2: 0,
             y2: 1,
             colorStops: [{
                     offset: 0,
                     color: "#4721CA"
                 },
                 {
                     offset: 1,
                     color: "#8651F4"
                 }
             ],
             global: false
         }
     }
 }, {
     value: '需努力',
     itemStyle: {
         color: {
             type: "linear",
             x1: 0,
             y1: 0,
             x2: 0,
             y2: 1,
             colorStops: [{
                     offset: 0,
                     color: "#1D43F3"
                 },
                 {
                     offset: 1,
                     color: "#4366F3"
                 }
             ],
             global: false
         }
     }
 }, {
     value: '良好',
     itemStyle: {
         color: {
             type: "linear",
             x1: 0,
             y1: 0,
             x2: 0,
             y2: 1,
             colorStops: [{
                     offset: 0,
                     color: "#FF457E"
                 },
                 {
                     offset: 1,
                     color: "#FFA53C"
                 }
             ],
             global: false
         }
     }
 }, {
     value: '合格',
     itemStyle: {
         color: {
             type: "linear",
             x1: 0,
             y1: 0,
             x2: 0,
             y2: 1,
             colorStops: [{
                     offset: 0,
                     color: "#38A0D6"
                 },
                 {
                     offset: 1,
                     color: "#61C3E2"
                 }
             ],
             global: false
         }
     }
 }, {
     value: '优秀',
     itemStyle: {
         color: {
             type: "linear",
             x1: 0,
             y1: 0,
             x2: 0,
             y2: 1,
             colorStops: [{
                     offset: 0,
                     color: "#FF457E"
                 },
                 {
                     offset: 1,
                     color: "#FFA53C"
                 }
             ],
             global: false
         }
     }
 }]
 option = {
     baseOption: {

         backgroundColor: '#141E38',
         tooltip: {},
         timeline: {
             currentIndex: 1,
             autoPlay: true,
             show: false,
             playInterval: 4000,
             axisType: 'category',
             data: ['历史等第考', '最近一次等第考']
         },
         legend: {
             textStyle: {
                 color: '#fff'
             }
         },
         grid: {
             top: 60,
             bottom: 30,
         },
         xAxis: {
             axisLine: {
                 lineStyle: {
                     color: "#fff"
                 }
             },
             axisTick: {
                 show: false
             },
             axisLabel: {
                 textStyle: {
                     color: "#fff",
                     fontFamily: "din"
                 }
             },
             splitLine: {
                 show: true,
                 lineStyle: {
                     color: "rgba(255,255,255,0.1)"
                 }
             },
             type: 'category',

         },
         yAxis: {
             axisTick: {
                 show: false
             },
             axisLine: {
                 lineStyle: {
                     color: "#fff"
                 }
             },
             axisLabel: {
                 textStyle: {
                     color: "#fff",
                     fontFamily: "din"
                 }
             },
             splitLine: {
                 show: true,
                 lineStyle: {
                     color: "rgba(255,255,255,0.1)"
                 }
             },
             type: 'category',
             data: ['需努力', '合格', '良好', '优秀'],
         },

     },
     options: [{
             legend: {
                 show: true
             },
             color: ['#6DCDE6', '#E23AF5', '#FFA53C'],
             xAxis: {
                 data: ['一年级上学期', '一年级下学期', '二年级上学期', '二年级下学期'],
                 type: 'category',
                 splitLine: {
                     show: true
                 },
                 axisLine: {
                     show: true
                 }
             },
             yAxis: {
                 type: 'category',
                 splitLine: {
                     show: true
                 },
                 axisLine: {
                     show: true
                 }
             },
             series: [{
                 type: "line",
                 name: '语文',
                 label: {
                     show: true,
                     color: "#6DCDE6",
                     fontFamily: "din",
                     fontSize: 16
                 },
                 lineStyle: {
                     color: "#6DCDE6",
                     shadowColor: '#fff',
                     shadowBlur: 50,
                     shadowOffsetX: 2,
                     shadowOffsetY: 2,
                 },
                 symbol: 'none',
                 areaStyle: {
                     color: {
                         type: "linear",
                         x1: 0,
                         y1: 0,
                         x2: 0,
                         y2: 1,
                         colorStops: [{
                                 offset: 0,
                                 color: "#6DCDE6"
                             },
                             {
                                 offset: 1,
                                 color: "transparent"
                             }
                         ],
                         global: false
                     }
                 },
                 data: ['需努力', '合格', '良好', '优秀']
             }, {
                 type: "line",
                 name: '数学',
                 label: {
                     show: true,
                     color: "#E23AF5",
                     fontFamily: "din",
                     fontSize: 16
                 },
                 lineStyle: {
                     color: "#E23AF5",
                     shadowColor: '#fff',
                     shadowBlur: 50,
                     shadowOffsetX: 2,
                     shadowOffsetY: 2,
                 },
                 symbol: 'none',
                 areaStyle: {
                     color: {
                         type: "linear",
                         x1: 0,
                         y1: 0,
                         x2: 0,
                         y2: 1,
                         colorStops: [{
                                 offset: 0,
                                 color: "#E23AF5"
                             },
                             {
                                 offset: 1,
                                 color: "transparent"
                             }
                         ],
                         global: false
                     }
                 },
                 data: ['合格', '优秀', '优秀', '合格', ]
             }, {
                 type: "line",
                 name: '英语',
                 label: {
                     show: true,
                     color: "#FFA53C",
                     fontFamily: "din",
                     fontSize: 16
                 },
                 lineStyle: {
                     color: "#FFA53C",
                     shadowColor: '#fff',
                     shadowBlur: 50,
                     shadowOffsetX: 2,
                     shadowOffsetY: 2,
                 },
                 symbol: 'none',
                 areaStyle: {
                     color: {
                         type: "linear",
                         x1: 0,
                         y1: 0,
                         x2: 0,
                         y2: 1,
                         colorStops: [{
                                 offset: 0,
                                 color: "#FFA53C"
                             },
                             {
                                 offset: 1,
                                 color: "transparent"
                             }
                         ],
                         global: false
                     }
                 },
                 data: ['需努力', '优秀', '合格', '良好']
             }]
         },
         {
             legend: {
                 show: false
             },
             color: [],
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
             xAxis: {
                 type:'category',
                 data: [ '数学','语文', '英语', '自然', '美术', '体育', '音乐', '劳技', '品德'],
                 axisLine: {
                     show: false
                 },
                 splitLine: {
                     show: false
                 }
             },
             yAxis: {
                 type:'category',
                 axisLine: {
                     show: false
                 },
                 boundaryGap: false

             },
             series: [{
                 type: 'custom',
                 renderItem: function(params, api) {
                     const location = api.coord([api.value(0), api.value(1)])
                     return {
                         type: 'group',
                         children: [{
                             type: 'CubeLeft',
                             shape: {
                                 api,
                                 x: location[0],
                                 y: location[1],
                                 xAxisPoint: api.coord([api.value(0), 0])
                             },
                             style: {
                                 fill: 'rgba(47,102,192,.27)'
                             }
                         }, {
                             type: 'CubeRight',
                             shape: {
                                 api,
                                 x: location[0],
                                 y: location[1],
                                 xAxisPoint: api.coord([api.value(0), 0])
                             },
                             style: {
                                 fill: 'rgba(59,128,226,.27)'
                             }
                         }, {
                             type: 'CubeTop',
                             shape: {
                                 api,
                                 x: location[0],
                                 y: location[1],
                                 xAxisPoint: api.coord([api.value(0), 0])
                             },
                             style: {
                                 fill: 'rgba(72,156,221,.27)'
                             }
                         }]
                     }
                 },
                 data: MAX
             }, {
                 type: 'custom',
                 renderItem: (params, api) => {
                     console.log(api.style())
                     const location = api.coord([api.value(0), api.value(1)])
                     var color = api.style().fill
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
                                 fill: color
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
                                 fill: color
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
                                 fill: color
                             }
                         }]
                     }
                 },
                 data: VALUE
             } ]
         }
     ],
 };