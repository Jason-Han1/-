 option = {
     color: ['#00ffff', '#00ffa2', '#f0e750'],
     tooltip: {
         trigger: 'axis',
         textStyle: {
             fontSize: 15,
             color: "#fff",
         }
     },
     legend: {
         orient: 'horizontal',
         right: "4%",
         itemGap: 20,
         //itemWidth:16,
         //itemHeight:12,
         data: ['高危', '中危', '低危'],
         textStyle: {
             color: '#fff',
         }
     },
     toolbox: {
         show: true,
         orient: 'vertical',
         right: 'right',
         top: '20%',
         itemGap: 20,
         feature: {
             magicType: {
                 show: true,
                 type: ['line', 'bar']
             },
             restore: {
                 show: true
             },
             saveAsImage: {
                 show: true
             }
         },
         iconStyle: {
             normal: {
                 color: '#0390e9'
             }
         }
     },
     grid: {
         show: true,
         left: 60,
         top: 34,
         right: 44,
         bottom: 42,
         borderWidth: 1,
         borderColor: 'rgba(170,172,178,0.33)',
         backgroundColor: 'rgba(17, 34, 69, 0.24)',
     },
     calculable: true,
     xAxis: [{
         type: 'category',
         boundaryGap: false,
         //在（type: 'category'）中设置data有效
         data: ['00:00:00', '03:00:00', '06:00:00', '09:00:00', '12:00:00',
             '15:00:00', '18:00:00', '21:00:00', '00:00:00'
         ],

         splitLine: { //坐标轴在 grid 区域中的分隔线；
             show: true,
             lineStyle: { //分割线颜色，可设单个，也可以设置数组。
                 color: 'rgba(170,172,178,0.33)'
             }
         },
         axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
             show: true,
             lineStyle: {
                 color: 'rgba(170,172,178,0.53)'
             },
         },
         axisLabel: {
             textStyle: {
                 color: 'rgba(255,255,255,0.83)',
                 fontSize: 15,
             },
         },
     }],
     yAxis: [{
         type: 'value',
         min: 0,
         max: 4000,
         splitLine: {
             show: true,
             lineStyle: {
                 color: 'rgba(170,172,178,0.33)'
             }
         },
         axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
             show: true,
             lineStyle: {
                 color: 'rgba(170,172,178,0.53)'
             },
         },
         axisLabel: {
             textStyle: {
                 color: 'rgba(255,255,255,0.83)',
                 fontSize: 12,
             },
         },
         splitArea: {
             show: true,
             areaStyle: {
                 color: ['#112245', 'rgba(34,50,82,0.4)']
             }
         }
     }],
     series: [{
                 name: '高危',
                 type: 'line',
                 smooth: true, //是否平滑曲线显示
                 lineStyle: { //线条样式 
                     normal: {
                         width: 1
                     }
                 },
                 areaStyle: { //区域填充样式
                     normal: {
                         //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: 'rgba(0, 255, 255, 0.9)'
                         }, {
                             offset: 0.7,
                             color: 'rgba(0, 255, 255, 0.6)'
                         }], false),

                         shadowColor: 'rgba(0, 0, 0, 0.9)', //阴影颜色
                         shadowBlur: 10 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                     }
                 },
                 itemStyle: { //折现拐点标志的样式
                     normal: {
                         color: 'rgb(0,255,255)'
                     }
                 },
                 data: [2000, 122, 3121, 54, 60, 2630, 1150, 2442, 1292]
             }, {
                 name: '中危',
                 type: 'line',
                 smooth: true,
                 lineStyle: {
                     normal: {
                         width: 1
                     }
                 },
                 areaStyle: {
                     normal: {
                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: 'rgba(240, 231, 80, 0.9)'
                         }, {
                             offset: 0.8,
                             color: 'rgba(240, 231, 80, 0.4)'
                         }], false),
                         shadowColor: 'rgba(0, 0, 0, 0.9)',
                         shadowBlur: 10
                     }
                 },
                 itemStyle: {
                     normal: {
                         color: 'rgb(240,231,80)'

                     }
                 },
                 data: [1130, 812, 1134, 2361, 413, 1330, 1301, 594, 1230]
             }, {
                 name: '低危',
                 type: 'line',
                 smooth: true,
                 lineStyle: {
                     normal: {
                         width: 1
                     }
                 },
                 itemStyle: {
                     normal: {
                         color: 'rgb(0,255,162)'
                     }
                 },
                 areaStyle: {
                     normal: {
                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: 'rgba(0,255,162, 0.8)'
                         }, {
                             offset: 0.8,
                             color: 'rgba(0,255,162, 0.4)'
                         }], false),
                         shadowColor: 'rgba(0, 0, 0, 0.9)',
                         shadowBlur: 10
                     }
                 },
                 data: [1220, 1132, 1421, 2114, 954, 620, 132, 190, 540]
             },

         ] //series结束
 }; // option结束