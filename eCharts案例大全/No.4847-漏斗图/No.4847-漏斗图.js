 var buildData = [{
         value: 20,
         name: "滨江区",
         name2: "区",
         type: '杭州天虹物业',
         type2: '杭州滨江联合广场',
         label: {
             normal: {
                 position: 'left',
                 padding: [32, -44, 10, 0],
                 fontSize: 14,
                 formatter: function(params) {
                     if (params.data.type) {
                         return params.data.name + '\n' + '{white|' + params.data.type + '}' + '\n' + '{distance|' + params.data.type2 + '}' + '{center|' + params.data.name2 + '}'
                     }
                 },
                 rich: {
                     white: {
                         color: '#34D160',
                         fontSize: 14,
                         padding: [-8, -45, 0, 0]
                     },
                     distance: {
                         color: '#34D160',
                         fontSize: 14,
                         padding: [8, 88, 0, 0]
                     },
                     center: {
                         color: '#ffffff',
                         fontSize: 14,
                         padding: [10, -175, 0, 0]
                     }
                 },

                 lineHeight: 25,
             },
         },
     },
     {
         value: 40,
         name: '长河街道',
         name2: "街道",
         type: '物业共建联盟会',
         label: {
             normal: {
                 position: 'right',
                 padding: [10, 10, 10, -60],
                 fontSize: 14,
                 formatter: function(params) {
                     if (params.data.type) {
                         return params.data.name + '\n' + '{white|' + params.data.type + '}' + '{center|' + params.data.name2 + '}'
                     }
                 },
                 rich: {
                     white: {
                         color: '#34D160',
                         fontSize: 14,
                         padding: [-8, 0, 0, -40]
                     },
                     center: {
                         color: '#ffffff',
                         fontSize: 14,
                         padding: [20, 0, 0, -280]
                     }
                 },
                 lineHeight: 22,
             },
         },
     },
     {
         value: 60,
         name: '社区',
         name2: "社区",
         type: '小区联合的盟会',
         label: {
             normal: {
                 position: 'left',
                 padding: [10, -32, 10, 50],
                 fontSize: 14,
                 formatter: function(params) {
                     if (params.data.type) {
                         return params.data.name + '\n' + '{white|' + params.data.type + '}' + '{center|' + params.data.name2 + '}'
                     }
                 },
                 rich: {
                     white: {
                         color: '#34D160',
                         fontSize: 14,
                         padding: [-8, 210, 0, 0]
                     },
                     center: {
                         color: '#ffffff',
                         fontSize: 14,
                         padding: [16, -306, 0, 0]
                     }
                 },
                 lineHeight: 22,
             },
         },
     },
     {
         value: 80,
         name: '小区',
         name2: "小区",
         type: '垃圾回收',
         label: {
             normal: {
                 position: 'right',
                 padding: [10, -30, 10, -33],
                 fontSize: 14,
                 formatter: function(params) {
                     if (params.data.type) {
                         return params.data.name + '\n' + '{white|' + params.data.type + '}' + '{center|' + params.data.name2 + '}'
                     }
                 },
                 rich: {
                     white: {
                         color: '#34D160',
                         fontSize: 14,
                         padding: [-8, 0, 0, -23]
                     },
                     center: {
                         color: '#ffffff',
                         fontSize: 14,
                         padding: [20, 0, 0, -396]
                     }
                 },
                 lineHeight: 22,
             },
         },
     },

 ];
 var colorList = ['#F1D90B', '#F3B50B', '#F3730B', '#F3370B'];
 option = {
     color: colorList,
     series: [{
         min: 0,
         max: 100,
         sort: 'ascending', //金字塔形:'ascending', 漏斗图形:'descending'
         type: 'funnel',
         left: '25%',
         top: 40,
         width: '50%',
         height: '80%',
         gap: -1,
         labelLine: {
             show: true,
             normal: {
                 length: 180,
                 // 指示线的属性
                 lineStyle: {
                     width: 1,
                     color: '#394B97',
                     type: 'solid'
                 },
             }
         },
         itemStyle: {
             normal: {
                 opacity: 0.9,
                 borderColor: '#394B97', // 图形边框颜色
                 borderWidth: 0 // 图形边框宽度大小
             }
         },
         data: buildData
     }]
 };