 var lineData = ['2016', '2017', '2018'];
 
 var datas = [
     [{
         "name": "杭州",
         "value": 48877
     }, {
         "name": "北京",
         "value": 39851
     }, {
         "name": "上海",
         "value": 36854
     }, {
         "name": "郑州",
         "value": 26584
     }, {
         "name": "重庆",
         "value": 15842
     }, {
         "name": "成都",
         "value": 14785
     }, {
         "name": "武汉",
         "value": 36954
     }, {
         "name": "苏州",
         "value": 25689
     }, {
         "name": "福州",
         "value": 15847
     }, {
         "name": "宁波",
         "value": 12569
     }, {
         "name": "东莞",
         "value": 8652
     }, {
         "name": "南京",
         "value": 7854
     }, {
         "name": "西安",
         "value": 4778
     }, {
         "name": "呼和浩特市",
         "value": 3658
     }, {
         "name": "天津",
         "value": 1564
     }],
     [{
         "name": "杭州",
         "value": 58877
     }, {
         "name": "北京",
         "value": 53684
     }, {
         "name": "上海",
         "value": 48756
     }, {
         "name": "郑州",
         "value": 36589
     }, {
         "name": "重庆",
         "value": 36582
     }, {
         "name": "成都",
         "value": 25874
     }, {
         "name": "武汉",
         "value": 39584
     }, {
         "name": "苏州",
         "value": 35698
     }, {
         "name": "福州",
         "value": 17596
     }, {
         "name": "宁波",
         "value": 23658
     }, {
         "name": "东莞",
         "value": 15371
     }, {
         "name": "南京",
         "value": 15475
     }, {
         "name": "西安",
         "value": 9658
     }, {
         "name": "呼和浩特市",
         "value": 15658
     }, {
         "name": "天津",
         "value": 8521
     }],
     [{
         "name": "杭州",
         "value": 68877
     }, {
         "name": "北京",
         "value": 62481
     }, {
         "name": "上海",
         "value": 56982
     }, {
         "name": "郑州",
         "value": 48751
     }, {
         "name": "重庆",
         "value": 58652
     }, {
         "name": "成都",
         "value": 69854
     }, {
         "name": "武汉",
         "value": 52483
     }, {
         "name": "苏州",
         "value": 59827
     }, {
         "name": "福州",
         "value": 38519
     }, {
         "name": "宁波",
         "value": 36344
     }, {
         "name": "东莞",
         "value": 18495
     }, {
         "name": "南京",
         "value": 32531
     }, {
         "name": "西安",
         "value": 13069
     }, {
         "name": "呼和浩特市",
         "value": 25544
     }, {
         "name": "天津",
         "value": 12005
     }]
 ]
 
 color = ['#00CC98', '#65FE66'];

 option = {

     baseOption: {
         timeline: {
             data: lineData,
             axisType: 'category',
             autoPlay: true,
             playInterval: 5000, //播放速度

             left: '5%',
             right: '5%',
             bottom: '0%',
             width: '90%',
             //  height: null,
             label: {
                 normal: {
                     textStyle: {

                         color: '#FFFFFF',
                     }
                 },
                 emphasis: {
                     textStyle: {
                         color: '#63FD68'
                     }
                 }
             },
             symbolSize: 10,
             lineStyle: {
                 color: '#2C7439'
             },
             checkpointStyle: {

                 color: '#63FD68',
                 symbolSize: 15,
                 borderColor: "rgb(107,110,116,0.8)",
                 borderWidth: 3.5
             },
             controlStyle: {
                 showNextBtn: true,
                 showPrevBtn: true,
                 normal: {
                     color: '#aaaaaa',
                     borderColor: '#aaaaaa'
                 },
                 emphasis: {
                     color: '#63FD68',
                     borderColor: '#63FD68'
                 }
             },
             emphasis: {
                 itemStyle: {
                     color: "63FD68"
                 }
             }

         },
         title: {
             text: '',
             right: '2%',
             bottom: '8%',
             textStyle: {
                 fontSize: 50,
                 color: '#aaaaaa' //标题字体颜色
             }
         },
         tooltip: {
             show: true,
         },
         calculable: true,
         grid: {
             left: '10%',
             right: '5%',
             bottom: '6%',
             top: '4%',
             containLabel: true
         },
         label: {
             normal: {
                 textStyle: {
                     color: '#63FD68'
                 }
             }
         },
         xAxis: [{
             show: true,
             position: 'top',
             axisLine: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
         }],
         yAxis: [{
             show: true,
             'type': 'category',
             // inverse: true,
             data: '',
             axisLine: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             axisLabel: {
                 show: false,
             }
         }],

         series: [{
             'name': '',
             'type': 'bar',
             showBackground: true,
             backgroundStyle: {
                 barBorderRadius: 30,
             },
             markLine: {
                 show: false,
             },
             barWidth: 15,
             label: {
                 normal: {
                     show: true,
                     fontSize: 16, //标签国家字体大小
                     position: 'left', //数值显示在右侧
                     formatter: function(p) {
                         var val = "";
                         if (p.name.length > 4) {
                             val = p.name.substr(0, 4) + '...';
                             return val;
                         } else {
                             return p.name;
                         }

                     }
                 }
             },
             itemStyle: {
                 normal: {
                     show: true,
                     // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，分别表示右,下,左,上。例如（0，0，0，1）表示从正上开始向下渐变；如果是（1，0，0，0），则是从正右开始向左渐变。
                     // 相当于在图形包围盒中的百分比，如果最后一个参数传 true，则该四个值是绝对的像素位置
                     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                         offset: 0,
                         color: color[0] //指0%处的颜色
                     }, {
                         offset: 1,
                         color: color[1] //指100%处的颜色
                     }], false),
                     barBorderRadius: 30,

                 },
                 emphasis: {
                     color: new echarts.graphic.LinearGradient(
                         0, 0, 1, 0,
                         [{
                                 offset: 0,
                                 color: '#CE8A00'
                             },
                             {
                                 offset: 1,
                                 color: '#EEBA00'
                             }
                         ]
                     )

                 }
             },
         }],

         animationEasingUpdate: 'quinticInOut',
         animationDurationUpdate: 1500, //动画效果
     },

     options: []
 };
 for (var n = 0; n < lineData.length; n++) {

     var res = datas[n];
     
    //  console.log(res);
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
             text: lineData[n] + '年'
         },
         yAxis: {
             data: res1,
         },
         series: [{
             data: res2
         }]
     });
 }