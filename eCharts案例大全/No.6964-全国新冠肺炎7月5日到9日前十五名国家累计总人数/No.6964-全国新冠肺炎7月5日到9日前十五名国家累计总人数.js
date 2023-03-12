 var years = ['7.5', '7.6', '7.7','7.8','7.9'];
 var jdData = [
     ['美国','巴西','印度','俄罗斯','秘鲁','智利','英国','墨西哥','西班牙','伊朗','意大利','巴基斯坦','沙特阿拉伯','土耳其','法国'],
     ['美国','巴西','印度','俄罗斯','秘鲁','智利','英国','墨西哥','西班牙','伊朗','意大利','巴基斯坦','沙特阿拉伯','土耳其','法国'],
     ['美国','巴西','印度','俄罗斯','秘鲁','智利','英国','墨西哥','西班牙','伊朗','意大利','巴基斯坦','沙特阿拉伯','土耳其','南非'],
     ['美国','巴西','印度','俄罗斯','秘鲁','智利','英国','墨西哥','西班牙','伊朗','意大利','巴基斯坦','沙特阿拉伯','南非','土耳其'],
     ['美国','巴西','印度','俄罗斯','秘鲁','智利','英国','墨西哥','西班牙','伊朗','意大利','巴基斯坦','南非','沙特阿拉伯','土耳其']
 ]
 var data = [
     [2839917 , 1577004 , 673165 , 680283 , 299080 , 291847 , 286414 , 252165 , 250545 , 240438, 241419, 228474, 205929, 204610, 204222],
     [2888729 , 1603055 , 697413 , 686777 , 302718 , 295532 , 286932 , 256848 , 250545 , 243051 , 241611 , 231818 , 209509 , 205758 , 204222 ],
     [2948397 , 1623284 , 719664 , 693215 , 305703 , 298557 , 287291 , 261750 , 251789 , 245688 , 241819 , 234509 , 217108 , 206844 , 205721 ],
     [2996679 , 1668589 , 742417 , 699749 , 309278 , 301019 , 287880 , 268008 , 252130 , 248379 , 241956, 237489 , 220144 , 215855 , 207897 ],
     [3055144 , 1713160 , 767296 , 706179 , 312911 , 303083 , 288512 , 275003 , 252513 , 250458 , 242149 , 240848 , 224665 , 220144 , 208938 ]
 ];

 option = {

     baseOption: {
         backgroundColor: '#2c343c', //背景颜色
         timeline: {
             data: years,
             axisType: 'category',
             autoPlay: true,
             playInterval: 1500, //播放速度

             left: '5%',
             right: '5%',
             bottom: '0%',
             width: '90%',
             //  height: null,
             label: {
                 normal: {
                     textStyle: {

                         color: 'red',
                     }
                 },
                 emphasis: {
                     textStyle: {
                         color: 'red'
                     }
                 }
             },
             symbolSize: 10,
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
                     color: '#ff8800',
                     borderColor: '#ff8800'
                 },
                 emphasis: {
                     color: 'red',
                     borderColor: 'red'
                 }
             },

         },
         title: {
             text: '',
             right: '2%',
             bottom: '8%',
             textStyle: {
                 fontSize: 50,
                 color: 'black' //标题字体颜色
             }
         },
         tooltip: {
             'trigger': 'axis'
         },
         calculable: true,
         grid: {
             left: '8%',
             right: '2%',
             bottom: '6%',
             top: '0%',
             containLabel: true
         },
         label: {
             normal: {
                 textStyle: {
                     color: 'red'
                 }
             }
         },
         yAxis: [{

             nameGap: 50,
             offset: '37',
             'type': 'category',
             interval: 50,
             //inverse: ture,//图表倒叙或者正序排版
             data: '',
             nameTextStyle: {
                 color: 'red'
             },


             axisLabel: {
                 //rotate:45,
                 show: false,
                 textStyle: {
                     fontSize: 32,

                     color: function(params, Index) { // 标签国家字体颜色

                         //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色

                         var colorarrays = ['#6bc0fb', '#7fec9d', '#fedd8b', '#ffa597', '#84e4dd', '#749f83',
                             '#ca8622', '#bda29a', '#a8d8ea', '#aa96da', '#fcbad3', '#ffffd2',
                             '#f38181', '#fce38a', '#eaffd0', '#95e1d3', '#e3fdfd', '#749f83', '#ca8622'
                         ];

                         //console.log("111", Index, colorarrays[Index],params); //打印序列

                         return colorarrays[jdData[0].indexOf(params)];
                     },


                 }, //rotate:45,
                 interval: 50
             },
             axisLine: {

                 lineStyle: {
                     color: 'balck' //Y轴颜色
                 },
             },
             splitLine: {
                 show: false,
                 lineStyle: {
                     color: 'balck'
                 }
             },

         }],
         xAxis: [{
             'type': 'value',
             'name': '',

             splitNumber: 8, //轴线个数
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
                     color: '#fedd8b'
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
                             width: 3
                         }
                     },
                 },
                 label: {
                     normal: {
                         show: true,
                         position: 'right', //数值显示在右侧
                         formatter: '{c}'
                     }
                 },
                 itemStyle: {
                     normal: {
                         color: function(params) {
                             // build a color map as your need.
                             //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色         
                             var colorList = ['#6bc0fb', '#7fec9d', '#fedd8b', '#ffa597', '#84e4dd', '#749f83',
                                 '#ca8622', '#bda29a', '#a8d8ea', '#aa96da', '#fcbad3', '#ffffd2',
                                 '#f38181', '#fce38a', '#eaffd0', '#95e1d3', '#e3fdfd', '#749f83', '#ca8622'
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
                             show: false
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
                 barGap: '-100%',
                 label: {
                     normal: {
                         show: true,
                         fontSize: 16, //标签国家字体大小
                         position: 'left', //数值显示在右侧
                         formatter: function(p) {
                             return p.name;
                         }
                     }
                 },
                 itemStyle: {
                     normal: {


                         color: function(params) {
                             // build a color map as your need.
                             //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色         
                             var colorList = ['#6bc0fb', '#7fec9d', '#fedd8b', '#ffa597', '#84e4dd', '#749f83',
                                 '#ca8622', '#bda29a', '#a8d8ea', '#aa96da', '#fcbad3', '#ffffd2',
                                 '#f38181', '#fce38a', '#eaffd0', '#95e1d3', '#e3fdfd', '#749f83', '#ca8622'
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
             text: years[n] + '日  '
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