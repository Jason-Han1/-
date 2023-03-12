 var years = ['最大分值', '实际得分'];
 var jdData = [
     [
             '全过程不落地处理',
             '大部分处理单元实现了不落地',
             '无废水排放，全部循环利用，固体废物资源化利用',
             '废水排入污水处理厂，固体废物无害化处置',
             '废水达标排入环境，固体废物填埋处置',
             '危险化学品截流系统',
             '事故废水应急池',
             '雨污、清污分流系统',
             '环境事故应急救援预案、演练',
             '环境事故隐患排查',
             '环境事故应急宣传培训',
             '环境事故应急物资准备',
             '环保机构及制度',
             '设施运行管理维护',
             '环境监测和在线监测',
             '历史环境事件',
             '钻井作业现场',
             '场外处理',
             '毒性',
             '易燃',
             '腐蚀性',
             '故障率',
             '设备故障安全冗余',
             '故障维修工时',
             '最小无故障维修时间',
             '设备的安全性',
             '人员的安全性',
             '安全操作规程',
             '安全教育制度',
             '安全应急预案及演练',
             '处理设备经济性',
             '运行成本经济性',
             '废水回用率、污油回收率',
             '水泥尘肺病防控措施',
             '刺激性化学物质所致肺部疾病防控',
             '硫化氢中毒防控措施',
             '化学性皮肤灼伤防控措施',
             '接触性皮炎防控措施',
             '化学性眼部灼伤防控措施',
         ],
     [
             '全过程不落地处理',
             '大部分处理单元实现了不落地',
             '无废水排放，全部循环利用，固体废物资源化利用',
             '废水排入污水处理厂，固体废物无害化处置',
             '废水达标排入环境，固体废物填埋处置',
             '危险化学品截流系统',
             '事故废水应急池',
             '雨污、清污分流系统',
             '环境事故应急救援预案、演练',
             '环境事故隐患排查',
             '环境事故应急宣传培训',
             '环境事故应急物资准备',
             '环保机构及制度',
             '设施运行管理维护',
             '环境监测和在线监测',
             '历史环境事件',
             '钻井作业现场',
             '场外处理',
             '毒性',
             '易燃',
             '腐蚀性',
             '故障率',
             '设备故障安全冗余',
             '故障维修工时',
             '最小无故障维修时间',
             '设备的安全性',
             '人员的安全性',
             '安全操作规程',
             '安全教育制度',
             '安全应急预案及演练',
             '处理设备经济性',
             '运行成本经济性',
             '废水回用率、污油回收率',
             '水泥尘肺病防控措施',
             '刺激性化学物质所致肺部疾病防控',
             '硫化氢中毒防控措施',
             '化学性皮肤灼伤防控措施',
             '接触性皮炎防控措施',
             '化学性眼部灼伤防控措施',
         ],
 ]
 var data = [
     [5,2,5  ,2  ,1  ,2,2  ,2  ,3,3  ,2  ,2,1  ,1   ,1  ,1,5,5,3,1  ,1  ,1,1,1,1,5,5,2,2,2,6,6,3,3,3,3,2,2,2],
     [3,1,2.4,1.2,0.6,1,0.9,1.6,3,2.1,1.1,1,0.7,0.62,0.6,1,4,3,2,0.8,0.4,1,1,1,1,5,5,2,2,2,6,6,3,3,3,3,2,2,2],
 ];

 option = {

     baseOption: {
        // backgroundColor: '#2c343c', //背景颜色
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
                         fontSize: 16,  //标签国家字体大小
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
             text: years[n] + ''
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