 var years = ['2016', '2017', '2018'];
 var jdData = [
     ['服务', '个人用通信设备和用品', '其他家用设备', '洗浴、身体护理品', '贵重珠宝', '摄像机、照相机附件', '钱包、手提包', '床上用品', '吸收剂', '管理者用品和附件', '精密仪器制造', '焊接机械', '呼吸器官保护', '无机化合物', '桌上用品', '生产和材料运输车辆', '其  它'],
    ['服务', '个人用通信设备和用品', '其他家用设备', '洗浴、身体护理品', '贵重珠宝', '摄像机、照相机附件', '钱包、手提包', '床上用品', '吸收剂', '管理者用品和附件', '精密仪器制造', '焊接机械', '呼吸器官保护', '无机化合物', '桌上用品', '生产和材料运输车辆', '其  它'],
    ['服务', '个人用通信设备和用品', '其他家用设备', '洗浴、身体护理品', '贵重珠宝', '摄像机、照相机附件', '钱包、手提包', '床上用品', '吸收剂', '管理者用品和附件', '精密仪器制造', '焊接机械', '呼吸器官保护', '无机化合物', '桌上用品', '生产和材料运输车辆', '其  它']
 ]
 var data = [
     [13.2, 1.11, 13.6, 9284, 64138, 2237, 4779, 48877, 2371, 36224, 12956, 2499, 4778, 594, 717, 534, 16487],
     [15.26, 1.31, 16.68, 10331, 91580, 1909, 40469, 67490, 1765, 36982, 15371, 3643, 2871, 762, 962, 757, 34414],
     [14.23, 1.31, 21.13, 10873, 94964, 2966, 129748, 59827, 8519, 38344, 18495, 3531, 1369, 544, 2005, 975, 33855, ],
 ];

 option = {

     baseOption: {
         backgroundColor: '#012248', //背景颜色
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
                         fontSize: 14,  //标签国家字体大小
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
             text: years[n] + '年'
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