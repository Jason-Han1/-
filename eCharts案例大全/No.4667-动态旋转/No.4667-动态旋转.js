 let angle = 0; //角度，用来做简单的动画效果的
 let value = 80;
 option = {
     backgroundColor: '#000E1A',
     title: [{
         text: '75%',
         x: '50%',
         y: '40%',
         textAlign: 'center',
         textStyle: {
             fontSize: '70',
             fontWeight: '100',
             color: '#79ffff',
             textAlign: 'center',
         },
     }, ],
     polar: {
         radius: ['85%', '81%'],
         center: ['50%', '50%'],
     },
     angleAxis: {
         max: 100,
         show: false,
         startAngle: 0,
     },
     radiusAxis: {
         type: 'category',
         show: true,
         axisLabel: {
             show: false,
         },
         axisLine: {
             show: false,

         },
         axisTick: {
             show: false
         },
     },

     series: [
         // 紫色
         {
             name: "ring5",
             type: 'custom',
             coordinateSystem: "none",
             renderItem: function(params, api) {
                 return {
                     type: 'arc',
                     shape: {
                         cx: api.getWidth() / 2,
                         cy: api.getHeight() / 2,
                         r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.9,
                         startAngle: (0 + angle) * Math.PI / 180,
                         endAngle: (90 + angle) * Math.PI / 180
                     },
                     style: {
                         stroke: "#8383FA",
                         fill: "transparent",
                         lineWidth: 1.5
                     },
                     silent: true
                 };
             },
             data: [0]
         }, 
         {
             name: "ring5", //紫点
             type: 'custom',
             coordinateSystem: "none",
             renderItem: function(params, api) {
                 let x0 = api.getWidth() / 2;
                 let y0 = api.getHeight() / 2;
                 let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.9;
                 let point = getCirlPoint(x0, y0, r, (90 + angle))
                 return {
                     type: 'circle',
                     shape: {
                         cx: point.x,
                         cy: point.y,
                         r: 4
                     },
                     style: {
                         stroke: "#8450F9", //绿
                         fill: "#8450F9"
                     },
                     silent: true
                 };
             },
             data: [0]
         },
         // 蓝色

         {
             name: "ring5",
             type: 'custom',
             coordinateSystem: "none",
             renderItem: function(params, api) {
                 return {
                     type: 'arc',
                     shape: {
                         cx: api.getWidth() / 2,
                         cy: api.getHeight() / 2,
                         r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.9,
                         startAngle: (180 + angle) * Math.PI / 180,
                         endAngle: (270 + angle) * Math.PI / 180
                     },
                     style: {
                         stroke: "#4386FA",
                         fill: "transparent",
                         lineWidth: 1.5
                     },
                     silent: true
                 };
             },
             data: [0]
         },
         {
             name: "ring5", // 蓝色
             type: 'custom',
             coordinateSystem: "none",
             renderItem: function(params, api) {
                 let x0 = api.getWidth() / 2;
                 let y0 = api.getHeight() / 2;
                 let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.9;
                 let point = getCirlPoint(x0, y0, r, (180 + angle))
                 return {
                     type: 'circle',
                     shape: {
                         cx: point.x,
                         cy: point.y,
                         r: 4
                     },
                     style: {
                         stroke: "#4386FA", //绿
                         fill: "#4386FA"
                     },
                     silent: true
                 };
             },
             data: [0]
         },

         {
             name: "ring5",
             type: 'custom',
             coordinateSystem: "none",
             renderItem: function(params, api) {
                 return {
                     type: 'arc',
                     shape: {
                         cx: api.getWidth() / 2,
                         cy: api.getHeight() / 2,
                         r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.95,
                         startAngle: (270 + -angle) * Math.PI / 180,
                         endAngle: (40 + -angle) * Math.PI / 180
                     },
                     style: {
                         stroke: "#0CD3DB",
                         fill: "transparent",
                         lineWidth: 1.5
                     },
                     silent: true
                 };
             },
             data: [0]
         },
         // 橘色

         {
             name: "ring5",
             type: 'custom',
             coordinateSystem: "none",
             renderItem: function(params, api) {
                 return {
                     type: 'arc',
                     shape: {
                         cx: api.getWidth() / 2,
                         cy: api.getHeight() / 2,
                         r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.95,
                         startAngle: (90 + -angle) * Math.PI / 180,
                         endAngle: (220 + -angle) * Math.PI / 180
                     },
                     style: {
                         stroke: "#FF8E89",
                         fill: "transparent",
                         lineWidth: 1.5
                     },
                     silent: true
                 };
             },
             data: [0]
         }, {
             name: "ring5",
             type: 'custom',
             coordinateSystem: "none",
             renderItem: function(params, api) {
                 let x0 = api.getWidth() / 2;
                 let y0 = api.getHeight() / 2;
                 let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.95;
                 let point = getCirlPoint(x0, y0, r, (90 + -angle))
                 return {
                     type: 'circle',
                     shape: {
                         cx: point.x,
                         cy: point.y,
                         r: 4
                     },
                     style: {
                         stroke: "#FF8E89", //粉
                         fill: "#FF8E89"
                     },
                     silent: true
                 };
             },
             data: [0]
         }, {
             name: "ring5", //绿点
             type: 'custom',
             coordinateSystem: "none",
             renderItem: function(params, api) {
                 let x0 = api.getWidth() / 2;
                 let y0 = api.getHeight() / 2;
                 let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.95;
                 let point = getCirlPoint(x0, y0, r, (270 + -angle))
                 return {
                     type: 'circle',
                     shape: {
                         cx: point.x,
                         cy: point.y,
                         r: 4
                     },
                     style: {
                         stroke: "#0CD3DB", //绿
                         fill: "#0CD3DB"
                     },
                     silent: true
                 };
             },
             data: [0]
         }, {
             name: '',
             type: 'bar',
             roundCap: true,
             barWidth: 60,
             showBackground: true,
             backgroundStyle: {
                 color: '#464451',
             },
             data: [75],
             coordinateSystem: 'polar',
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                         offset: 0,
                         color: '#0ff'
                     }, {
                         offset: 1,
                         color: '#02aeff'
                     }]),
                 }
             }
         },
         {
             type: 'pie',
             radius: ['75%', '76%'],
             center: ['50%', '50%'],
             data: [{
                     hoverOffset: 1,
                     value: 100,
                     name: '',
                     itemStyle: {
                         color: '#ff6189',
                     },
                     label: {
                         show: false
                     },
                     labelLine: {
                         normal: {
                             smooth: true,
                             lineStyle: {
                                 width: 0
                             }
                         }
                     },
                     hoverAnimation: false,
                 },
                 {
                     label: {
                         show: false
                     },
                     labelLine: {
                         normal: {
                             smooth: true,
                             lineStyle: {
                                 width: 0
                             }
                         }
                     },
                     value: 100 - 75,
                     hoverAnimation: false,
                     itemStyle: {
                         color: '#3c3a48',
                     },
                 }
             ]
         },
     ]
 };

 //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
 function getCirlPoint(x0, y0, r, angle) {
     let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
     let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
     return {
         x: x1,
         y: y1
     }
 }

 function draw() {
     angle = angle + 3
     myChart.setOption(option, true)
     //window.requestAnimationFrame(draw);
 }

 setInterval(function() {
     //用setInterval做动画感觉有问题
     draw()
 }, 100);