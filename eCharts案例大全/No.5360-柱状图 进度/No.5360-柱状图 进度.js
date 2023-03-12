   option = {
       backgroundColor: "#000",
       grid: {
           left: '3%',
           right: '10%',
           bottom: '5%',
           top: "15%",
           containLabel: true
       },
       xAxis: [{
           type: "value",
           splitNumber: 5, //划分等分
           axisLabel: {
               show: true,
               textShadowColor: '#2706dd',
               opacity: 0.8,
               verticalAlign: 'bottom',
               textStyle: {
                   color: '#ffffff', //更改坐标轴文字颜色
                   fontSize: 14,
                   fontFamily: 'SourceHanSansCN-Regular',
                   fontSize: 14,
                   fontWeight: 'normal',
                   fontStretch: 'normal',
                   lineHeight: 19,
                   letterSpacing: 0,
               },
           },
           position: 'top',
           boundaryGap: [0, 0.1], //设置距离左边位置
           // boundaryGap: false,
           axisTick: {
               show: false
           },
           axisLine: { //x轴线样式
               lineStyle: {
                   color: '#666cb4',
                   width: 1, //这里是为了突出显示加上的
                   padding: [0, 10],
               },
               symbol: ['none', 'arrow'] //设置x轴箭头  ，none为不设置箭头
           },
           nameTextStyle: { //x轴右方单位的颜色
               color: '#ffffff',
               fontFamily: 'SourceHanSansCN-Regular',
               fontSize: 14,
               fontWeight: 'normal',
               fontStretch: 'normal',
               lineHeight: 19,
               letterSpacing: 0,
               padding: [0, 0, 30, 10]
           },
           splitLine: { //设置网格颜色
               show: false
           }
       }],
       yAxis: [{
               //左边的纵轴
               type: "category",
               inverse: true, //是否将数据反转,所给的数据为正常数据
               axisLabel: {
                   show: true,
                   textStyle: {
                       fontFamily: 'SourceHanSansCN-Regular',
                       fontSize: 14,
                       fontWeight: 'normal',
                       fontStretch: 'normal',
                       lineHeight: 19,
                       letterSpacing: 0,
                       color: '#ffffff',
                   },
               },
               boundaryGap: [0, 0.8], //设置距离上边位置
               axisLine: { //y轴线样式
                   lineStyle: {
                       color: '#666cb4',
                       width: 1, //这里是为了突出显示加上的
                       z: 100,
                   }
               },
               // 纵坐标数据
               data: ["在建项目", "竣工项目", "延期项目", "已完成项目"], //左边纵坐标值
               yAxisIndex: 0,
               // 横坐标 分割线等取消显示
               axisTick: {
                   show: false
               }

           },
           { //右边的纵轴
               type: "category",
               inverse: true,
               boundaryGap: [0, 0], //设置距离上边位置
               axisLine: {
                   show: false
               },
               axisTick: {
                   show: false
               },
               axisLabel: {
                   show: true,
                   inside: false,
                   verticalAlign: "left",
                   // position:"absolute",
                   // rigth:20,
                   // 位置 上右下左
                   padding: [-7, 0, 2, -60],
                   textStyle: {
                       fontFamily: 'SourceHanSansCN-Regular',
                       fontSize: 14,
                       lineHeight: 17,
                       letterSpacing: 0,
                       color: '#00EEFE'
                   }
               },
               z: 4,
               // 统计的总量 用纵坐标模拟
               data: ["10%", "20%", "20%", "20%"], //右边纵坐标的值
           },

       ],
       series: [{
               //虚线柱形
               show: true,
               type: 'pictorialBar',
               symbol: 'fixed',
               symbolSize: [6, 9], //黑色间隔的宽，高
               symbolMargin: 3, //黑色间隔的间距
               left: 10,
               symbolRepeat: 'repeat',
               barWidth: 3, // 统计条宽度
               boundaryGap: true, //设置距离左边位置
               itemStyle: {
                   normal: {
                       color: {
                           colorStops: [{
                                   offset: 0,
                                   color: '#00b9f9', // 0% 处的颜色
                               },
                               {
                                   offset: 0.5,
                                   color: '#00d3fb', // 50% 处的颜色
                               },
                               {
                                   offset: 1,
                                   color: '#02bac7', // 100% 处的颜色
                               },
                           ],
                           globalCoord: false, // 缺省为 false
                       }
                   },
               },

               z: 3, //z 值小的图形会被z值大的图形覆盖。
               data: ["10", "20", "20", "20"],
           },

           { //总进度底色
               show: true,
               type: 'pictorialBar',
               symbol: 'fixed',
               symbolSize: [6, 9],
               symbolMargin: 3,
               symbolRepeat: 'repeat',
               barGap: '-100%',
               barWidth: 3, // 统计条宽度
               itemStyle: {
                   normal: {
                       color: '#015970',
                   },
               },

               z: 2,
               data: [100, 100, 100, 100],
           },
       ]
   };