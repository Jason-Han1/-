   var yDatas1 = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,6, 6, 6, 6, 2, 2, 2, 2, 13, 13, 2, 2, 13, 13, 2, 2, 13, 13, 2, 2, 2,13, 2, 13, 13, 6, 13, 6, 13, 13, 13, 6, 4, 13, 4, 13, 13, 6, 6, 6, 6, 6,6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
   var data = {
       XDatas: [0, 5, 10, 15, 20, 25, 31, 36, 41, 46, 51, 56, 61, 66, 71, 76, 82, 87, 92, 97, 102,107,112,117,122,127,122,138,143,148,153,158,163,168,173,178,184,189,194,199,204,209,214,219,224,229,235,240,245,250,255,260,265,270,275,280,286,291,296,301,306,311,316,321,326,332,337,342,347,352,357,362,367,372,377,383,388,393,398,403,408,413,418,423,428],
       lengend: ["a", "b"],
       yDatas1: yDatas1,
       yDatas2: [38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38,38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38,38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38,38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38],
       yDatas3: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
       yName: "V",
       yName1: "A",
       min: Math.min.apply(null, yDatas1)
   };
   var fontColor = '#95a2aa';
   var fontSize = 20;
   // console.log('====data', data)
   var option = {
       backgroundColor:'#000',
       tooltip: {
           trigger: 'axis',
           formatter: function(params) {
               return "a:" + params[1].data + "<br/>" + "b:" + params[0].data;
           },
           borderColor: '#43845D',
           borderWidth: 1,
           backgroundColor: 'rgba(11,42,89,0.3)',
           borderRadius: 20,
           padding: 10,
           textStyle: {
               color: '#fff',
               fontSize: 30
           },
           axisPointer: {
               lineStyle: {
                   color: '#fef018',
                   width: '3'
               }
           }
       },
       legend: {
           show: true,
           itemWidth: 40,
           itemHeight: 8,
           itemGap: 35,
           textStyle: {
               color: '#0FC703',
               fontSize: 22
           },
           x: 'center',
           y: '20',
           align: 'left',
           data: [{
                   name: 'a',
                   icon: 'image://..//res//img//chargingSafety//changfangxing.png',
                   textStyle: {
                       color: '#a9afb7'
                   }
               },
               {
                   name: 'b',
                   icon: 'rect',
                   textStyle: {
                       color: '#a9afb7'
                   }
               }
           ]
       },
       grid: {
           top: '20%',
           bottom: '10%',
           left: '5%',
           right: '5%',
           borderWidth: 0,
           containLabel: true,
           show: false // 网格边框是否显示，上和右边框 
       },
       xAxis: [{
           type: 'category',
           name: '时间/s',
           nameGap: 40,
           nameLocation: 'middle',
           nameTextStyle: {
               fontSize: fontSize,
               color: fontColor,
           },
           //   boundaryGap: 0,
           axisLabel: {
               show: true,
               textStyle: {
                   fontSize: fontSize,
                   color: fontColor
               }
           },
           axisLine: {
               lineStyle: {
                   color: 'rgba(80, 114, 132,.8)'
               }
           },
           axisTick: {
               show: true
           },
           splitLine: {
               show: false,
               lineStyle: {
                   color: 'rgba(255,255,255,0.1)'
               }
           },
           data: data.XDatas
       }],
       yAxis: [{
           name: 'b',
           nameGap: 50,
           nameLocation: 'middle',
           nameTextStyle: {
               fontSize: fontSize,
               color: 'rgba(9, 189, 211,1)',
           },
           axisLine: {
               show: true,
               lineStyle: {
                   color: 'rgba(80, 114, 132,.8)'
               }
           },
           type: 'value',
           min: 2,
           // splitNumber: 2,
           // interval: 1,
           axisLabel: {
               formatter: '{value}',
               color: 'rgba(9, 189, 211,1)',
               fontSize: fontSize
           },
           splitLine: {
               show: false,
               lineStyle: {
                   color: 'rgba(255,255,255,0.1)'
               }
           },
           axisTick: {
               show: false
           },
           position: 'right'
       }, {
           name: '单位',
           nameGap: 50,
           nameLocation: 'middle',
           nameTextStyle: {
               fontSize: fontSize,
               color: 'rgb(220, 128, 7)',
           },
           type: 'value',
           boundaryGap: true, // 坐标轴两边留白
           //splitNumber: 8,
           // interval: 1,
           axisLabel: {
               show: true,
               textStyle: {
                   fontSize: fontSize,
                   color: 'rgb(220, 128, 7)'
               }
           },
           axisTick: {
               show: false,
               // alignWithLabel:false,
               // interval:'auto'
           },
           axisLine: {
               show: false,
               lineStyle: {
                   color: fontColor
               }
           },
           splitLine: {
               show: false,
               lineStyle: {
                   color: fontColor
               }
           },

       }],
       series: [{
               name: 'b',
               type: 'scatter',
               symbol: 'circle',
               symbolSize: 5,
               smooth: true,
               itemStyle: {
                   normal: {
                       color: 'rgb(9,189,211)',
                       lineStyle: {
                           color: "rgb(9,189,211)",
                           width: 3,
                       },
                       areaStyle: {
                           color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                               offset: 0,
                               color: 'rgba(9,189,211,0)'
                           }, {
                               offset: 1,
                               color: 'rgba(9,189,211,0.3)'
                           }]),
                       }
                   }
               },
               data: data.yDatas1
           },
           {
               name: 'a',
               type: 'bar',
               yAxisIndex: 1,
               stack: 'a',
               label: {
                   normal: {
                       textStyle: {
                           color: '#682d19'
                       },
                       position: 'left',
                       show: false,
                       formatter: '{b}'
                   }
               },
               barCategoryGap: 0,
               itemStyle: {
                   normal: {
                       color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                           offset: 0,
                           color: 'transparent'
                       }, {
                           offset: 0.5,
                           color: 'transparent'
                       }, {
                           offset: 0.8,
                           color: 'rgba(0, 0, 0, 0)'
                       }, {
                           offset: 0.92,
                           color: 'rgba(0, 0, 0, 0)'
                       }, {
                           offset: 1,
                           color: 'rgba(0, 0, 0, 0)'
                       }])
                   }
               },
               data: data.yDatas2
           }, {
               type: 'bar',
               yAxisIndex: 1,
               stack: 'a',
               silent: true,
               data: data.yDatas3,
               itemStyle: {
                   normal: {
                       barBorderRadius: [8, 8, 8, 8],
                       color: '#FE8F01'
                   }
               },
               barMinHeight: 8
           },

       ]
   }