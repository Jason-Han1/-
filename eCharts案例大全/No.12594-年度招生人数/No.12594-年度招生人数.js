// showp0();

// function showp0(sdata) {
//     var ech0 = echarts.init($("#ech0")[0]);

//     // 指定图表的配置项和数据
//     var scaleData = [{
//             'name': '博士后',
//             'value': 306
//         },
//         {
//             'name': '博士后',
//             'value': 1426
//         },
//         {
//             'name': '硕士研究生',
//             'value': 6120
//         },
//         {
//             'name': '本科生',
//             'value': 9320
//         },
//         {
//             'name': '其他',
//             'value': 5060
//         }

//     ];
//     var rich = {
//         white: {
//             color: GAME.bm,
//             align: 'center',
//             fontSize: 16,
//             padding: [3, 0]
//         }
//     };
//     var placeHolderStyle = {
//         normal: {
//             label: {
//                 show: false
//             },
//             labelLine: {
//                 show: false
//             },
//             color: 'rgba(0, 0, 0, 0)',
//             borderColor: 'rgba(0, 0, 0, 0)',
//             borderWidth: 0
//         }
//     };
//     var data = [];
//     var color = ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000']
//     for (var i = 0; i < scaleData.length; i++) {
//         data.push({
//             value: scaleData[i].value,
//             name: scaleData[i].name,
//             itemStyle: {
//                 normal: {
//                     borderWidth: 5,
//                     shadowBlur: 20,
//                     borderColor: color[i],
//                     shadowColor: color[i]
//                 }
//             }
//         }, {
//             value: 400,
//             name: '',
//             itemStyle: placeHolderStyle
//         });
//     }
//     var seriesObj = [{
//         name: '',
//         type: 'pie',
//         clockWise: false,
//         radius: ['50%', '51%'],
//         hoverAnimation: false,
//         itemStyle: {
//             normal: {
//                 label: {
//                     show: true,
//                     position: 'outside',
//                     color: GAME.bm,
//                     fontSize: 22,
//                     formatter: function(params) {
//                         var percent = 0;
//                         var total = 0;
//                         for (var i = 0; i < scaleData.length; i++) {
//                             total += scaleData[i].value;
//                         }

//                         percent = ((params.value / total) * 100).toFixed(0);
//                         if (params.name !== '') {
//                             return params.name + '\n{white|' + '占比' + percent + '%}';
//                         } else {
//                             return '';
//                         }
//                     },
//                     rich: rich
//                 },
//                 labelLine: {
//                     length: 15,
//                     length2: 80,
//                     show: true,
//                     color: '#00ffff'
//                 }
//             }
//         },
//         data: data
//     }];
//     option = {
//         title: {
//             text: '年度招生人数',
//             textStyle: {
//                 color: GAME.title,
//             },
//         },
//         // backgroundColor: 'rgba(0,0,0,.2)',
//         //			  backgroundColor: '#04243E',
//         tooltip: {
//             show: false
//         },
//         legend: {
//             show: false
//         },
//         toolbox: {
//             show: false
//         },
//         series: seriesObj
//     }
//     ech0.setOption(option);
// }