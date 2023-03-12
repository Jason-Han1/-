var index =0;
var baccolor = ['#8A64B8', '#7575D3', '#5F85DD', '#6FABE8', '#7ED3F4', '#8CD8C0',
                                 '#9CDF8D', '#BFED6B', '#EAFE4F', '#FFFD47']
//  var years = ['2016', '2017', '2018'];
// var years = ['9月', '10月', '11月'];
//  var years = ['2021年','12月', '11月', '10月'];
 var years = ['12月'];
//  var jdData = [
//      ['香港同胞', '澳门同胞', '台湾同胞', '日  本', '韩  国', '蒙  古', '印度尼西亚', '马来西亚', '菲律宾', '新加坡', '泰  国', '印  度', '越  南', '缅  甸', '朝  鲜', '巴基斯坦', '其  它'],
//      ['香港同胞', '澳门同胞', '台湾同胞', '日  本', '韩  国', '蒙  古', '印度尼西亚', '马来西亚', '菲律宾', '新加坡', '泰  国', '印  度', '越  南', '缅  甸', '朝  鲜', '巴基斯坦', '其  它'],
//      ['香港同胞', '澳门同胞', '台湾同胞', '日  本', '韩  国', '蒙  古', '印度尼西亚', '马来西亚', '菲律宾', '新加坡', '泰  国', '印  度', '越  南', '缅  甸', '朝  鲜', '巴基斯坦', '其  它']
//  ]
//  var data = [
//      [13.2, 1.11, 13.6, 9284, 64138, 2237, 4779, 48877, 2371, 36224, 12956, 2499, 4778, 594, 717, 534, 16487],
//      [15.26, 1.31, 16.68, 10331, 91580, 1909, 40469, 67490, 1765, 36982, 15371, 3643, 2871, 762, 962, 757, 34414],
//      [14.23, 1.31, 21.13, 10873, 94964, 2966, 129748, 59827, 8519, 38344, 18495, 3531, 1369, 544, 2005, 975, 33855, ],
//  ];

 var jdData = [
     ['南昌工厂', '宜昌工厂', '赣州工厂',  '重庆工厂','乐山工厂','贵州工厂','湛江工厂'],
     ['南昌工厂', '宜昌工厂', '赣州工厂',  '重庆工厂','乐山工厂','贵州工厂','湛江工厂'],
     ['南昌工厂', '宜昌工厂', '赣州工厂',  '重庆工厂','乐山工厂','贵州工厂','湛江工厂'],
     ['南昌工厂', '宜昌工厂', '赣州工厂',  '重庆工厂','乐山工厂','贵州工厂','湛江工厂']
 ]
 var data = [
     [10.2, 12.11, 13.6, 11,16,8,12],
     [13.2, 1.11, 13.6, 12,10,1,10],
     [15.26, 10.31, 16.68, 10,11,7,10],
     [10.23, 1.31, 21.13, 18,10,5,10],
 ];

 option = {

     baseOption: {
         backgroundColor: '#091837', //背景颜色
         timeline: {
             data: years,
             axisType: 'category',
             autoPlay: true,
             show: false,
             playInterval: 5000, //播放速度

             left: '10%',
             right: '20%',
             bottom: '0%',
             width: '75%', //控制时间轴长度
             //  height: null,
             label: {
                 normal: {
                     textStyle: {

                         color: '#316BF2', //时间轴底部字体颜色
                     }
                 },
                 emphasis: {
                     textStyle: {
                         color: '#DFC42F'
                     }
                 }
             },
             symbolSize: 5,
             lineStyle: {
                 color: '#red'
             },
             checkpointStyle: {
                 borderColor: '#red',
                 borderWidth: 2
             },
             controlStyle: {
                 showNextBtn: true,
                 showPrevBtn: true,
                 normal: {
                     color: '#143964', //时间轴颜色
                     borderColor: '#143964'
                 },
                 emphasis: {
                     color: 'red',
                     borderColor: 'red'
                 }
             },

         },
         title: {
             text: '',
             right: '15%',
             bottom: '8%',
             textStyle: {
                 fontSize: 20,
                 color: '#EFEFEF' //时间轴标题字体颜色
             }
         },
         tooltip: {
             'trigger': 'axis'
         },
         calculable: true,
         grid: {
             left: '20%',
             right: '20%',
             bottom: '6%',
             top: '2%',
             containLabel: true
         },
         label: {
             normal: {
                 textStyle: {
                     color: '#DFC42F'
                 }
             }
         },
         yAxis: [{
             type: 'category',
             inverse: true, //控制是正序还是倒序排列
             nameGap: 10,
             offset: '100', //Y轴标题与图表间隔
            //  'type': 'category',
             interval: 50,
             //inverse: ture,//图表倒叙或者正序排版
             data: '',
             nameTextStyle: {
                 color: 'red'
             },


             axisLabel: {
                 //rotate:45,
                 show: true,
                 textStyle: {
                 fontSize: 20,

                 color: function(params, Index) { // 标签国家字体颜色
                     //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色
                     var colorarrays =  ['#8A64B8', '#7575D3', '#5F85DD', '#6FABE8', '#7ED3F4', '#8CD8C0',
                             '#9CDF8D', '#BFED6B', '#EAFE4F', '#FFFD47', '#FFEA55', '#FFCF63',
                             '#FFA069', '#fce38a', '#eaffd0', '#95e1d3', '#e3fdfd', '#749f83', '#ca8622'
                         ];
                     //console.log("111", Index, colorarrays[Index],params); //打印序列
                     return colorarrays[jdData[0].indexOf(params)];
                 },

                 }, //rotate:45,
                //  interval: 50,

                formatter: function(params) {
                    if (index == 7) {
                        index = 0;
                    }
                    index++;
                    if (index - 1 < 3) {
                        return [
                            '{a' + index + '|' + index + '}' /*+ '  ' + params*/
                        ].join('\n')
                    } else {
                        return [
                            '{b|' + index + '}'/*+ '  ' + params*/
                        ].join('\n')
                    }
                },
                 rich: {
                    a1: {
                        color: '#fff',
                        backgroundColor: baccolor[0],
                        width: 30,
                        height: 30,
                        align: 'center',
                        borderRadius: 5
                    },
                    a2: {
                        color: '#fff',
                        backgroundColor: baccolor[1],
                        width: 30,
                        height: 30,
                        align: 'center',
                        borderRadius: 5
                    },
                    a3: {
                        color: '#fff',
                        backgroundColor: baccolor[2],
                        width: 30,
                        height: 30,
                        align: 'center',
                        borderRadius: 5
                    },
                    b: {
                        color: '#fff',
                        backgroundColor: baccolor[3],
                        width: 30,
                        height: 30,
                        align: 'center',
                        borderRadius: 5
                    }
                },                
             },
             axisLine: {
                 lineStyle: {
                     color: '#153C64' //Y轴颜色
                 },
             },
             splitLine: {
                 show: false,
                 lineStyle: {
                     color: 'balck'
                 }
             },
         }
         ],
         xAxis: [{
             'type': 'value',
             'name': '',
             splitNumber: 9, //轴线个数
             nameTextStyle: {
                 color: 'balck'
             },
             axisLine: {
                 lineStyle: {
                     color: '#ffa597' //X轴颜色
                 }
             },
             axisLabel: {
                 formatter: '{value} '
             },
             splitLine: {
                 show: true,
                 lineStyle: {
                     color: '#143964' //控制竖线颜色
                 }
             },
         }],
         series: [{
                 'name': '',
                 'type': 'bar',
                 markLine: {
                     label: {
                         normal: {
                             show: false
                         }
                     },
                     lineStyle: {
                         normal: {
                             color: 'red',
                             width: 1
                         }
                     },
                 },
                 label: {
                     normal: {
                         show: true,
                         position: 'right', //数值显示在右侧
                         formatter: '{c}'+ '‰',
                         fontSize:18
                     }
                 },
                 itemStyle: {
                     normal: {
                         color: function(params) {
                             // build a color map as your need.
                             //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色         
                             var colorList =  ['#8A64B8', '#7575D3', '#5F85DD', '#6FABE8', '#7ED3F4', '#8CD8C0',
                                 '#9CDF8D', '#BFED6B', '#EAFE4F', '#FFFD47', '#FFEA55', '#FFCF63',
                                 '#FFA069', '#fce38a', '#eaffd0', '#95e1d3', '#e3fdfd', '#749f83', '#ca8622'
                             ];
                             // return colorList[params.dataIndex]

                             console.log("111", params.name); //打印序列
                             return colorList[jdData[0].indexOf(params.name)];
                         },

                     }
                 },
             },

             {
                 'name': '',
                 'type': 'bar',
                 markLine: {
                     label: {
                         normal: {
                             show: true
                         }
                     },
                     lineStyle: {
                         
                         normal: {
                             color: 'red',
                             width: 3
                         }
                     },
                 },
                 barWidth: '50%',
                 barGap: '-50%',
                 label: {
                     normal: {
                         show: true,
                         fontSize: 20,  //标签国家字体大小
                         position: 'left', //数值显示在右侧
                         formatter: function(p) {
                             return p.name;
                            //  return '';
                         }
                     }
                 },
                 itemStyle: {
                     normal: {
                         color: function(params) {
                             // build a color map as your need.
                             //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色         
                            //渐变颜色luohh
                             var colorList = ['#8A64B8', '#7575D3', '#5F85DD', '#6FABE8', '#7ED3F4', '#8CD8C0',
                                 '#9CDF8D', '#BFED6B', '#EAFE4F', '#FFFD47', '#FFEA55', '#FFCF63',
                                 '#FFA069', '#fce38a', '#eaffd0', '#95e1d3', '#e3fdfd', '#749f83', '#ca8622'
                             ];
                             // return colorList[params.dataIndex]

                             // console.log("111", params.name); //打印序列
                             return colorList[jdData[0].indexOf(params.name)];
                         },

                     }
                 },
             }
         ],

         animationEasingUpdate: 'quinticInOut',
         animationDurationUpdate: 1500, //动画效果
     },

     options: []
 };
 for (var n = 0; n < years.length; n++) {

     var res = [];
     //alert(jdData.length);
     for (j = 0; j < data[n].length; j++) {
         res.push({
             name: jdData[n][j],
             value: data[n][j]
         });

     }

     res.sort(function(a, b) {
         return b.value - a.value;
     }).slice(0, 6);

     res.sort(function(a, b) {
         return a.value - b.value;
     });


     var res1 = [];
     var res2 = [];
     //console.log(res);
     for (t = 0; t < res.length; t++) {
         res1[t] = res[t].name;
         res2[t] = res[t].value;
     }
     option.options.push({
         title: {
             text: years[n] 
         },
         yAxis: {
             data: res1,
         },
         series: [{
             data: res2
         }, {
             data: res2
         }]
     });
 }