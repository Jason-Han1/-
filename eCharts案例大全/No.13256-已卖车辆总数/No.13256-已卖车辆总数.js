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
         text: '已卖车辆总数',
         subtext: '开票：200万',
         top: "center",
         left: "center",
         textStyle: {
             fontSize: 20,
             color: '#9474B4',
             fontWeight: 'normal'
         },
         subtextStyle: {
             fontSize: 14,
             color: '#9474B4',
             fontWeight: 'normal'
         }
     },
     animationDurationUpdate: 1500,
     animationEasingUpdate: 'quinticInOut',
     roam: false, //鼠标缩放及平移
     focusNodeAdjacency: false, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
     dataRange: {
         min: 0,
         max: 60,
         y: '70%',
         calculable: true,
         show: true,
         color: ['#59446B', '#D69BFF']
     },
     series: [{
         name: '',
         type: 'pie',
         startAngle: 0,
         hoverAnimation: false,
         radius: ['60%', '60%'],
         center: ['50%', '50%'],
         data: [{
             name: 'NL-3A',
             value: 84067
         }, {
             name: 'FE-5A',
             value: 78477
         }, {
             name: 'FE-3AC',
             value: 45723
         }, {
             name: 'GX6',
             value: 40794
         }, {
             name: 'FE-S1',
             value:33043
         }, {
             name: 'FE-7A',
             value: 7690
         }, {
             name: 'KC-1B',
             value: 3367
         }, {
             name: 'KC-2HB(15TD)',
             value: 553
         }, {
             name: 'KC-2(15TD)',
             value: 489
         }, {
             name: 'FE-7',
             value: 176
         }, {
             name: 'FE-3AD',
             value: 42
         }, {
             name: 'KC-2HB',
             value: 16
         }, {
             name: 'FE-4KACK-2',
             value: 11
         }, {
             name: 'NL-3',
             value: 5
         }, {
             name: 'FE-6',
             value: 4
         }, {
             name: 'unknown',
             value: 4
         }],
         itemStyle: {
             normal: {
                 color: '#000',
                 borderWidth: 5,
                 borderColor: 'rgba(0,0,0,0)',
                 label: {
                     show: true,
                     formatter: '{b}：{c}',
                 },
                 labelLine: {
                     show: true,
                     length: 40,
                     lineStyle: {
                         color: '#7C9ECD'
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
         circular: {
             rotateLabel: true
         },
         symbolSize: 30,
         label: {
             normal: {
                 position: 'center',
                 formatter: '{b}：{a}万',
                 normal: {
                     textStyle: {
                      
                         fontFamily: '宋体'
                     }
                 }
             }
         },

         edgeSymbol: ['circle'],
         edgeSymbolSize: [8, 30],
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
                     textStyle: {
                         color: '#9474B4',
                     }
                 },
                 borderColor: '#7C9ECD',
                 borderWidth: 3,

             },
             emphasis: {
                 label: {
                     show: false,
                 }
             }
         },

         data: [{
            name: 'NL-3A',
             "symbolSize": 80,
            value: 84067
         }, {
             name: 'FE-5A',
             "symbolSize": 75,
             value: 78477
         }, {
               name: 'FE-3AC',
             "symbolSize": 70,
             value: 45723
         }, {
             name: 'GX6',
             "symbolSize": 65,
             value: 40794
         }, {
             name: 'FE-S1',
             "symbolSize":60,
             value:33043
         }, {
               name: 'FE-7A',
             "symbolSize": 55,
             value: 7690
         }, {
            name: 'KC-1B',
             "symbolSize": 50,
             value: 3367
         }, {
              name: 'KC-2HB(15TD)',
             "symbolSize":45,
              value: 553
         }, {
             name: 'KC-2(15TD)',
             "symbolSize": 40,
             value: 489
         }, {
              name: 'FE-7',
             "symbolSize": 35,
            value: 176
         }, {
             name: 'FE-3AD',
             "symbolSize": 30,
             value: 42
         }, {
              name: 'KC-2HB',
             "symbolSize":25,
            value: 16
         }, {
             name: 'FE-4KACK-2',
             "symbolSize": 20,
             value: 11
         }, {
              name: 'NL-3',
             "symbolSize": 15,
             value: 5
         }, {
            name: 'FE-6',
             "symbolSize": 10,
           value: 4
         }, {
             name: 'unknown',
             "symbolSize": 5,
            value: 4
         }],
     }]
 };