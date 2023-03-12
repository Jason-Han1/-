   var seriesData1 = [{
       name: "汽油",
       value: "3759",
       itemStyle: {
           normal: {
               borderWidth: 0,
               shadowBlur: 10,
               borderColor: '#000',
               shadowColor: '#9ECB3C'
           }
       }
   }, {
       name: "柴油",
       value: "1741",
       itemStyle: {
           normal: {
               borderWidth: 0,
               shadowBlur: 10,
               borderColor: '#000',
               shadowColor: '#9ECB3C'
           }
       }
   }];

   var seriesData2 = [{
       name: "92#汽油",
       value: "1759",
       itemStyle: {
           normal: {
               borderWidth: 0,
               shadowBlur: 20,
               borderColor: '#000',
               shadowColor: '#fff'
           }
       }
   }, {
       name: "95#汽油",
       value: "1500",
       itemStyle: {
           normal: {
               borderWidth: 0,
               shadowBlur: 20,
               borderColor: '#000',
               shadowColor: '#fff'
           }
       }
   }, {
       name: "98#汽油",
       value: "500",
       itemStyle: {
           normal: {
               borderWidth: 0,
               shadowBlur: 20,
               borderColor: '#000',
               shadowColor: '#fff'
           }
       }
   }, {
       name: "0#柴油",
       value: "741",
       itemStyle: {
           normal: {
               borderWidth: 0,
               shadowBlur: 20,
               borderColor: '#000',
               shadowColor: '#fff'
           }
       }
   }, {
       name: "-10#柴油",
       value: "600",
       itemStyle: {
           normal: {
               borderWidth: 0,
               shadowBlur: 20,
               borderColor: '#000',
               shadowColor: '#fff'
           }
       }
   }, {
       name: "-20#柴油",
       value: "400",
       itemStyle: {
           normal: {
               borderWidth: 0,
               shadowBlur: 20,
               borderColor: '#000',
               shadowColor: '#fff'
           }
       }
   }];


   var echartData = {
       inner: seriesData1,
       outer: seriesData2
   };

   var colorList1 = [{
       x: 0,
       y: 0,
       x2: 0,
       y2: 1,
       colorStops: [{
           offset: 0,
           color: '#06fdbc' // 0% 处的颜色
       }, {
           offset: 1,
           color: '#06fdbc' // 100% 处的颜色
       }]
   }, {
       x: 0,
       y: 0,
       x2: 0,
       y2: 1,
       colorStops: [{
           offset: 0,
           color: '#d9ff84' // 0% 处的颜色
       }, {
           offset: 1,
           color: '#d9ff84' // 100% 处的颜色
       }]
   }];
   var colorList2 = [{
       x: 0,
       y: 0,
       x2: 0,
       y2: 1,
       colorStops: [{
           offset: 0,
           color: '#00ffff' // 0% 处的颜色
       }, {
           offset: 1,
           color: '#00ffff' // 100% 处的颜色
       }]

   }, {
       x: 0,
       y: 0,
       x2: 0,
       y2: 1,
       colorStops: [{
           offset: 0,
           color: '#00cfff' // 0% 处的颜色
       }, {
           offset: 1,
           color: '#00cfff' // 100% 处的颜色
       }]
   }, {
       x: 0,
       y: 0,
       x2: 0,
       y2: 1,
       colorStops: [{
           offset: 0,
           color: '#006ced' // 0% 处的颜色
       }, {
           offset: 1,
           color: '#006ced' // 100% 处的颜色
       }]
   }, {
       x: 0,
       y: 0,
       x2: 0,
       y2: 1,
       colorStops: [{
           offset: 0,
           color: '#ffe000' // 0% 处的颜色
       }, {
           offset: 1,
           color: '#ffe000' // 100% 处的颜色
       }]
   }, {
       x: 0,
       y: 0,
       x2: 0,
       y2: 1,
       colorStops: [{
           offset: 0,
           color: '#ffa800' // 0% 处的颜色
       }, {
           offset: 1,
           color: '#ffa800' // 100% 处的颜色
       }]
   }, {
       x: 0,
       y: 0,
       x2: 0,
       y2: 1,
       colorStops: [{
           offset: 0,
           color: '#ff5b00' // 0% 处的颜色
       }, {
           offset: 1,
           color: '#ff5b00' // 100% 处的颜色
       }]
   }, {
       x: 0,
       y: 0,
       x2: 0,
       y2: 1,
       colorStops: [{
           offset: 0,
           color: '#9a7fd1' // 0% 处的颜色
       }, {
           offset: 1,
           color: '#9a7fd1' // 100% 处的颜色
       }]
   }, {
       x: 0,
       y: 0,
       x2: 0,
       y2: 1,
       colorStops: [{
           offset: 0,
           color: '#07a2a4' // 0% 处的颜色
       }, {
           offset: 1,
           color: '#07a2a4' // 100% 处的颜色
       }]
   }];
   option = {
       backgroundColor: '#0A2E5D',
       title: {
           text: '库存',
           top: '48%',
           textAlign: "center",
           left: "49%",
           textStyle: {
               color: '#fff',
               fontSize: 18,
               fontWeight: '800'
           }
       },
       series: [{
           color: colorList1,
           type: 'pie',
           radius: ['40%', '55%'],
           minAngle: 10,
           avoidLabelOverlap: true,
           hoverOffset: 15,
           itemStyle: {
               normal: {
                   borderColor: 'rgba(28,33,46,0.6)',
                   borderWidth: 0
               }
           },
           label: {
               normal: {
                   position: 'inner',
                   fontSize: 14,
                   formatter: function(params) {
                       return (
                           params.name
                           // '{name|' + params.name + '}'
                       );
                   },
                   padding: [0, -130, 25, -130],
                   rich: {
                       name: {
                           fontSize: 14,
                           padding: [-15, 0, 2, 0],
                           color: '#17204c'
                       },
                       percent: {
                           fontSize: 14,
                           color: '#17204c',
                           padding: [0, 0, 10, 0]
                       }
                   },
                   textStyle: {
                       color: '#ff0000'
                   }
               }
           },
           labelLine: {
               normal: {
                   show: false
               }
           },
           data: echartData.inner
       }, {
           type: 'pie',
           color: colorList2,
           radius: ['62%', '70%'],
           data: echartData.outer,
           minAngle: 10,
           avoidLabelOverlap: true,
           hoverOffset: 15,
           itemStyle: {
               normal: {
                   borderColor: 'rgba(28,33,46,0.6)',
                   borderWidth: 0
               }
           },
           labelLine: {
               normal: {
                   length: 20,
                   length2: 0,
                   lineStyle: {
                       color: '#ffed77'
                   }
               }
           },
           label: {
               normal: {
                   fontSize: 14,

                   formatter: function(params) {
                       // return  params.name +':'+params.value+'吨 '+params.percent+'%';
                       return '{name|' + params.name + '}\n{hr|}\n{percent|' + params.value + '吨}  {percent|' + params.percent + '%} '
                   },
                   distanceToLabelLine: 0,
                   padding: [-2, 0, 0, 0],
                   rich: {
                       name: {
                           color: "#ffed77",
                           fontSize: 16,
                           padding: [6, 10],
                           align: 'left'
                       },
                       percent: {

                           color: "#ffed77",
                           align: 'center',
                           fontSize: 16,
                           padding: [5, 10]
                       },
                       hr: {

                           borderColor: '#ffed77',
                           width: '100%',
                           borderWidth: 0.5,
                           height: 0,
                       }
                   }
               }
           }
       }]
   };