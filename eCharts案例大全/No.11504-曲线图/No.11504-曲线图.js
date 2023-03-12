 var dataAP = [1000, 3200, 3000, 2000, 4000, 3500, 4000, 5000];
 option = {
     title: {
         text: '单位/个',
         textStyle: {
             fontSize: 12,
             fontWeight: 'normal',
             color: '#6ba1bb' //标题颜色
         },
         left: '2%',
     },
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'cross',
             label: {
                 backgroundColor: '#6a7985'
             },
         }
     },
     // legend: {
     //     data:['邮件营销','搜索引擎'],
     //     x: 'left'
     // },
     color: ["#0080ff", "#4cd5ce"],
     toolbox: {
         // feature: {
         //     saveAsImage: {}
         // }
     },
     grid: {
         left: '3%',
         top: '25%',
         right: '4%',
         bottom: '3%',
         containLabel: true
     },
     xAxis: [{
         type: 'category',
         boundaryGap: false,
         data: ['9:00 ', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '18:00', ],
         axisLabel: {
             show: true,
             textStyle: {
                 color: '#6ba1bb'
             }
         },
         axisLine: {
             lineStyle: {
                 color: '#0a2b52',
                 width: 0.5, //这里是为了突出显示加上的
             }
         }
     }],
     yAxis: [{
         type: 'value',
         axisLine: {
             onZero: false,
             lineStyle: {
                 color: '#0a2b52',
                 width: 1, //这里是为了突出显示加上的
             }
         },
         axisLabel: {
             show: true,
             textStyle: {
                 color: '#6ba1bb' //字体颜色
             }
         },
         splitLine: { //保留网格线
             show: true,
             lineStyle: { //y轴网格线设置
                 color: '#0a2b52',
                 width: 1,
                 type: 'solid'
             }
         },
     }],
     series: [{
             name: '管节实时浇筑',
             type: 'line',
             smooth: true,
             symbol: "none", //去掉折线点
             stack: 100,
             itemStyle: {
                 normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#01806f' // 0% 处的颜色
                     }, {
                         offset: 0.5,
                         color: '#025f5a' // 100% 处的颜色
                     }, {
                         offset: 1,
                         color: '#04122a' // 100% 处的颜色
                     }]), //背景渐变色
                     lineStyle: { // 系列级个性化折线样式
                         width: 0.5,
                         type: 'solid',
                         color: "#02675f"
                     }
                 },
                 emphasis: {
                     color: '#02675f',
                     lineStyle: { // 系列级个性化折线样式
                         width: 0.5,
                         type: 'dotted',
                         color: "#02675f" //折线的颜色
                     }
                 }
             }, //线条样式
             symbolSize: 5, //折线点的大小
             areaStyle: {
                 normal: {}
             },
             data: dataAP,
         },

     ]
 };

setInterval(function() { //数据动态展现
     for (var i = 0; i < dataAP.length; i++) {
         if (dataAP[i] % 2 === 0) {
             dataAP[i] -= Math.round(Math.random() * 100);
         } else {
             dataAP[i] += Math.round(Math.random() * 100);
         }

     }
      myChart.setOption({
          series:[{
              data: dataAP,
          }]
      })
     
    /* option = {
         title: {
             text: '单位/个',
             textStyle: {
                 fontSize: 12,
                 fontWeight: 'normal',
                 color: '#6ba1bb' //标题颜色
             },
             left: '2%',
         },
         tooltip: {
             trigger: 'axis',
             axisPointer: {
                 type: 'cross',
                 label: {
                     backgroundColor: '#6a7985'
                 },
             }
         },
         // legend: {
         //     data:['邮件营销','搜索引擎'],
         //     x: 'left'
         // },
         color: ["#0080ff", "#4cd5ce"],
         toolbox: {
             // feature: {
             //     saveAsImage: {}
             // }
         },
         grid: {
             left: '3%',
             top: '25%',
             right: '4%',
             bottom: '3%',
             containLabel: true
         },
         xAxis: [{
             type: 'category',
             boundaryGap: false,
             data: ['9:00 ', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '18:00', ],
             axisLabel: {
                 show: true,
                 textStyle: {
                     color: '#6ba1bb'
                 }
             },
             axisLine: {
                 lineStyle: {
                     color: '#0a2b52',
                     width: 0.5, //这里是为了突出显示加上的
                 }
             }
         }],
         yAxis: [{
             type: 'value',
             axisLine: {
                 onZero: false,
                 lineStyle: {
                     color: '#0a2b52',
                     width: 1, //这里是为了突出显示加上的
                 }
             },
             axisLabel: {
                 show: true,
                 textStyle: {
                     color: '#6ba1bb' //字体颜色
                 }
             },
             splitLine: { //保留网格线
                 show: true,
                 lineStyle: { //y轴网格线设置
                     color: '#0a2b52',
                     width: 1,
                     type: 'solid'
                 }
             },
         }],
         series: [{
                 name: '管节实时浇筑',
                 type: 'line',
                 smooth: true,
                 symbol: "none", //去掉折线点
                 stack: 100,
                 itemStyle: {
                     normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: '#01806f' // 0% 处的颜色
                         }, {
                             offset: 0.5,
                             color: '#025f5a' // 100% 处的颜色
                         }, {
                             offset: 1,
                             color: '#04122a' // 100% 处的颜色
                         }]), //背景渐变色
                         lineStyle: { // 系列级个性化折线样式
                             width: 0.5,
                             type: 'solid',
                             color: "#02675f"
                         }
                     },
                     emphasis: {
                         color: '#02675f',
                         lineStyle: { // 系列级个性化折线样式
                             width: 0.5,
                             type: 'dotted',
                             color: "#02675f" //折线的颜色
                         }
                     }
                 }, //线条样式
                 symbolSize: 5, //折线点的大小
                 areaStyle: {
                     normal: {}
                 },
                 data: dataAP,
             },

         ]
     };
     myChart.setOption(option)*/

 }, 1000);