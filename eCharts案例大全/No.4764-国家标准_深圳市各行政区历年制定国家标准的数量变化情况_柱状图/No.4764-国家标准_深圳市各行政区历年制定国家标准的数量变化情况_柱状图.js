 var years = ['2018', '2019', '2020'];
 var jdData = [
     ['南山区', '福田区', '宝安区', '龙岗区', '罗湖区', '龙华区', '光明区', '盐田区', '坪山区', '大鹏新区'],
     ['南山区', '福田区', '宝安区', '龙岗区', '罗湖区', '龙华区', '光明区', '盐田区', '坪山区', '大鹏新区'],
     ['南山区', '福田区', '宝安区', '龙岗区', '罗湖区', '龙华区', '光明区', '盐田区', '坪山区', '大鹏新区'],
 ]
 var data = [
     [ 92840, 64138, 2237, 4779, 48877, 2371, 36224, 12956, 2499, 4778],
     [103310, 91580, 1909, 40469, 67490, 1765, 36982, 15371, 3643, 2871],
     [108730, 94964, 2966, 129748, 59827, 8519, 38344, 18495, 3531, 1369],
 ];

 option = {
     baseOption: {
         timeline: {
             data: years,
             axisType: 'category',
             autoPlay: true,
             playInterval: 5000,
             left: '10%',
             right: '10%',
             bottom: '0%',
             width: '80%',
             //  height: null,
             label: {
                 normal: {
                     textStyle: {

                         color: '#ff8800',
                     }
                 },
                 emphasis: {
                     textStyle: {
                         color: '#fff'
                     }
                 }
             },
             symbolSize: 10,
             lineStyle: {
                 color: '#555'
             },
             checkpointStyle: {
                 borderColor: '#777',
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
                     color: '#aaa',
                     borderColor: '#aaa'
                 }
             },

         },
         title: {
             text: '',
             right: '2%',
             bottom: '8%',
             textStyle: {
                 fontSize: 50,
                 color: '#666'
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
                     color: '#fff'
                 }
             }
         },
         yAxis: [{
             offset: '37',
             'type': 'category',
             data: '',
             nameTextStyle: {
                 color: '#fff'
             },
             axisLabel: {
                 //rotate:45,
                 textStyle: {
                     fontSize: 12,
                     color: '#333',
                 },
                 interval: 0
             },
             axisLine: {

                 lineStyle: {
                     color: '#333'
                 },
             },
             splitLine: {
                 show: false,
                 lineStyle: {
                     color: '#333'
                 }
             },

         }],
         xAxis: [{
             'type': 'value',
             'name': '',

             splitNumber: 8,
             nameTextStyle: {
                 color: '#333'
             },
             axisLine: {
                 lineStyle: {
                     color: '#333'
                 }
             },
             axisLabel: {
                 formatter: '{value} '
             },
             splitLine: {
                 show: true,
                 lineStyle: {
                     color: '#ccc'
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
             barWidth: '50%',
             label: {
                 normal: {
                     show: true,
                     position: 'inside',
                     formatter: '{c}'
                 }
             },
             itemStyle: {
                 normal: {
                     color: function(params) {
                         // build a color map as your need.
                         var colorList = [
                             '#bcd3bb', '#e88f70', '#9dc5c8', '#e1e8c8',
                             '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8',
                             '#bda29a', '#376956', '#c3bed4', '#495a80',
                             '#9966cc', '#bdb76a', '#eee8ab', '#a35015',
                             '#04dd98', '#d9b3e6', '#b6c3fc', '#315dbc',
                         ];
                         return colorList[params.dataIndex]
                     },

                 }
             },
         }],
         animationDurationUpdate: 2000,
         animationEasingUpdate: 'quinticInOut'
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
     console.log(res1);
     console.log("----------------");
     console.log(jdData[n]);
     option.options.push({
         title: {
             text: years[n] + '年'
         },
         yAxis: {
             data: res1,
         },
         series: [{
             data: res2
         }]
     });
 }