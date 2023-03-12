       //图表X轴数据
       var Xdata = ["大洼街道", "田家街道", "榆树街道", "王家街道", "新兴镇", "东风镇", "新开镇",
           "新立镇", "清水镇", "唐家镇", "平安镇", "赵圈河镇", "于楼街道", "西安镇", "荣兴街道", "荣滨街道",
           "田庄台镇", "二街沟街道"
       ];


       var fp_jzrk = {
           2000: [589, 259, 262, 324, 232, 176, 196, 214, 133, 370, 120, 150, 120, 186, 309,293, 143, 169],
           2005: [511, 315, 139, 375, 204, 352, 163, 258, 385, 209, 100, 159, 100, 150, 219,223, 143, 152],
           2010: [527, 210, 328, 292, 241, 110, 130, 185, 392, 392, 220, 222, 123, 253, 241,263, 234, 160],
           2015: [500, 350, 300, 250, 200, 150, 100, 150, 200, 250, 280, 130, 220, 188, 200,333, 283, 260],
           2020: [580, 128, 255, 254, 313, 143, 360, 343, 338, 163, 125, 250, 189, 199, 343,313, 143, 310]
       };
       var fp_jzfyb = {
           2000: [589, 259, 262, 324, 232, 176, 196, 214, 133, 370, 120, 150, 120, 186, 309,293, 143, 169],
           2005: [511, 315, 139, 375, 204, 352, 163, 258, 385, 209, 100, 159, 100, 150, 219,223, 143, 152],
           2010: [527, 210, 328, 292, 241, 110, 130, 185, 392, 392, 220, 222, 123, 253, 241,263, 234, 160],
           2015: [500, 350, 300, 250, 200, 150, 100, 150, 200, 250, 280, 130, 220, 188, 200,333, 283, 260],
           2020: [580, 128, 255, 254, 313, 143, 360, 343, 338, 163, 125, 250, 189, 199, 343,313, 143, 310]
       };
       //图表月份
       var timeLineData = [2000, 2005, 2010, 2015, 2020];
       option = {
           baseOption: {
               backgroundColor: "#061740",
               timeline: {
                   show: true,
                   axisType: 'category',
                   tooltip: {
                       show: true,
                       formatter: function(params) {
                           return params.name + '月份数据统计';
                       }
                   },
                   autoPlay: true,
                   currentIndex: 10,
                   playInterval: 2000,
                   label: {
                       normal: {
                           show: true,
                           color: '#20dbfd',
                           interval: 'auto',
                           formatter: function(params) {
                               return params
                           }
                       },
                   },
                   lineStyle: {
                       show: true,
                       color: '#20dbfd'
                   },
                   itemStyle: {
                       show: true,
                       color: '#20dbfd'
                   },
                   controlStyle: {
                       show: true,
                       color: '#20dbfd',
                       borderColor: '#20dbfd'
                   },
                   left: "0",
                   right: "0",
                   bottom: '0',
                   padding: [15, 0],
                   data: timeLineData,
               },
               title: {
                   textStyle: {
                       color: '#fff',
                       fontSize: 16,
                   },
               },
               tooltip: {
                   show: true,
                   trigger: 'axis',
                   axisPointer: {
                       type: 'shadow',
                   }
               },
               grid: {
                   top: "10%",
                   left: "3%",
                   right: "7%",
                   bottom: "10%",
                   containLabel: true
               },

               xAxis: [{
                   type: 'category',
                   axisLine: {
                       show: false,
                   },
                   axisTick: {
                       show: false,
                   },
                   axisLabel: {
                       show: true,
                       formatter: function(val) {
                           var strs = val.split(''); //字符串数组
                           var str = ''
                           for (var i = 0, s; s = strs[i++];) { //遍历字符串数组
                               str += s;
                               if (!(i % 2)) str += '\n'; //按需要求余
                           }
                           return str
                       },
                       textStyle: {
                           color: '#B2B2B2',
                           fontSize: 12,
                       },
                   },
                   splitLine: {
                       show: false,
                       lineStyle: {
                           color: '#fff',
                           width: 1,
                       },
                   },
                   data: Xdata,
               }],
               yAxis: [{
                       type: 'value',
                       name: "(万)",
                       nameTextStyle: {
                           color: "#fff",
                       },
                       axisLine: {
                           show: false
                       },
                       axisTick: {
                           show: false
                       },
                       axisLabel: {
                           show: true,
                           textStyle: {
                               color: '#fff',
                               fontSize: 12,
                           },

                       }
                   },
                   {
                       type: 'value',
                       name: "抚养比(%)",
                       nameTextStyle: {
                           color: "#fff",
                       },
                       position: "right",
                       axisLine: {
                           show: false
                       },
                       axisTick: {
                           show: false
                       },
                       axisLabel: {
                           show: true,
                           textStyle: {
                               color: '#fff',
                               fontSize: 12,
                           },

                       }
                   }
               ]
           },
           options: []
       };
       for (var i = 0; i < timeLineData.length; i++) {
           option.options.push({
               series: [{
                       name: '各街镇人口',
                       type: 'bar',
                       barWidth: '20%',
                       label: {
                           normal: {
                               show: false,
                               textStyle: {
                                   color: '#fff',
                                   fontSize: 12,
                               },
                           },
                           emphasis: {
                               show: false,
                               offset: [0, 0],
                               textStyle: {
                                   color: '#fff'
                               },
                           },
                       },
                       itemStyle: {
                           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                               offset: 0,
                               color: 'rgba(0,244,255,1)' // 0% 处的颜色
                           }, {
                               offset: 1,
                               color: 'rgba(0,77,167,1)' // 100% 处的颜色
                           }], false),
                           barBorderRadius: [30, 30, 30, 30],
                           shadowColor: 'rgba(0,160,221,1)',
                           shadowBlur: 4,
                           emphasis: {
                               opacity: 1,
                           },
                       },
                       data: fp_jzrk[timeLineData[i]],
                   },
                   {
                       name: "抚养比",
                       type: "line",
                       yAxisIndex: 1,
                       smooth: true, //平滑曲线显示
                       showAllSymbol: true, //显示所有图形。
                       symbol: "circle", //标记的图形为实心圆
                       symbolSize: 8, //标记的大小
                       itemStyle: {
                           color: "#DC3AFF",
                           borderColor: "#DC3AFF",
                       },
                       lineStyle: {
                           color: "#DC3AFF",
                           shadowColor: "#3D7EEB",
                           shadowBlur: 4
                       },
                       data: fp_jzfyb[timeLineData[i]]
                   },
               ]
           });
       }