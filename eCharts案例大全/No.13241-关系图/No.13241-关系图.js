function roundDatas(num) {
     var datas = [];
     for (var i = 0; i < num; i++) {
         datas.push({
             name: 'circle' + i
         });
     }
     return datas;
 }

 option = {
     title: {
         text: '961',
         subtext: '上网场所',
         top: "center",
         left: "center",
         textStyle: {
             fontSize: 24,
             color: '#3e4956',
             fontWeight: 'normal'
         },
         subtextStyle: {
             fontSize: 14,
             color: 'rbga(62,73,86,0.6)',
             fontWeight: 'normal'
         }
     },
     series: [{
         name: '',
         type: 'pie',
         startAngle: 0,
         hoverAnimation: false,
         radius: ['60%', '60%'],
         center: ['50%', '50%'],
         data: [{
             name: '博山',
             value: 23
         }, {
             name: '周村',
             value: 87
         }, {
             name: '临淄',
             value: 64
         }, {
             name: '桓台',
             value: 93
         }, {
             name: '沂源',
             value: 68
         }, {
             name: '高青',
             value: 32
         }, {
             name: '张店',
             value: 124
         }],
         itemStyle: {
             normal: {
                 color: '#3e4956',
                 borderWidth: 5,
                 borderColor: 'rgba(0,0,0,0)',
                 label: {
                     show: true,
                     formatter: '{c}\n{b}',
                 },
                 labelLine: {
                     show: true,
                     length: 40,
                     lineStyle: {
                         color: '#007be8'
                     }
                 }
             }
         }
     }, {
         type: 'graph',
         tooltip: {},
         ribbonType: true,
         layout: 'circular',
         hoverAnimation: false,
         width: '60%',
         height: '60%',
         circular: {
             rotateLabel: true
         },
         symbolSize: 1,
         data: roundDatas(300),
         itemStyle: {
             normal: {
                 label: {
                     show: false
                 },
                 color: '#58446C',
             },
             emphasis: {
                 label: {
                     show: false,
                 }
             }
         },
     }, {
         type: 'graph',
         tooltip: {},
         ribbonType: true,
         layout: 'circular',
         width: '60%',
         height: '60%',
         color:['#007be8'],
         circular: {
             rotateLabel: true
         },
         symbolSize: 30,
         label: {
             normal: {
                 position: 'center',
                 formatter: '{b}\n开票：{c}万',
                 normal: {
                     textStyle: {
                         fontFamily: '宋体'
                     }
                 }
             }
         },

         edgeSymbol: ['circle'],
         edgeSymbolSize: [8, 10],
         edgeLabel: {
             normal: {
                 textStyle: {
                     fontSize: 13,
                     fontWeight: 'bold',
                     fontFamily: '宋体'
                 }
             }
         },

         itemStyle: {
             normal: {
                 label: {
                     rotate: true,
                     show: false,
                 },
             },
             emphasis: {
                 label: {
                     show: false,
                 }
             }
         },

         data: [{
             name: '博山',
             value: 23,
             "symbolSize": 10,
         }, {
             name: '周村',
             value: 87,
             "symbolSize": 15,
         }, {
             name: '临淄',
             value: 64,
             "symbolSize": 20,
         }, {
             name: '桓台',
             value: 93,
             "symbolSize": 25,
         }, {
            name: '沂源',
             value: 68,
             "symbolSize": 30,
         }, {
             name: '高青',
             value: 32,
             "symbolSize": 35,
         }, {
             name: '张店',
             value: 124,
             "symbolSize": 40,
         },],
     }]
 };