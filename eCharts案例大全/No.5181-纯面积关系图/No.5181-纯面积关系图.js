         let data = [{
                 name: "工程维修",
                 itemStyle: {
                     color: {
                         type: 'linear',
                         x: 0,
                         y: 1,
                         x2: 1,
                         y2: 0,
                         colorStops: [{
                             offset: 0,
                             color: '#245547' // 0% 处的颜色
                         }, {
                             offset: 1,
                             color: '#3BD3A8' // 100% 处的颜色
                         }],
                         globalCoord: false // 缺省为 false
                     }
                 },
                 value: 25,

             },
             {
                 name: "垃圾分类",
                 value: 15,
                 itemStyle: {
                     color: {
                         type: 'linear',
                         x: 0,
                         y: 1,
                         x2: 1,
                         y2: 0,
                         colorStops: [{
                             offset: 0,
                             color: '#515B37' // 0% 处的颜色
                         }, {
                             offset: 1,
                             color: '#B4D16A' // 100% 处的颜色
                         }],
                         globalCoord: false // 缺省为 false
                     }
                 },
             }, {
                 name: "环境卫生",
                 value: 15,
                 itemStyle: {
                     color: {
                         type: 'linear',
                         x: 0,
                         y: 1,
                         x2: 1,
                         y2: 0,
                         colorStops: [{
                             offset: 0,
                             color: '#254C5A' // 0% 处的颜色
                         }, {
                             offset: 1,
                             color: '#3AACD2' // 100% 处的颜色
                         }],
                         globalCoord: false // 缺省为 false
                     }
                 },
             }, {
                 name: "资产维护",
                 value: 10,
                 itemStyle: {
                     color: {
                         type: 'linear',
                         x: 0,
                         y: 1,
                         x2: 1,
                         y2: 0,
                         colorStops: [{
                             offset: 0,
                             color: '#346041' // 0% 处的颜色
                         }, {
                             offset: 1,
                             color: '#67D171' // 100% 处的颜色
                         }],
                         globalCoord: false // 缺省为 false
                     }
                 },
             },
             {
                 name: "长三角联动",
                 value: 10,
                 itemStyle: {
                     color: {
                         type: 'linear',
                         x: 0,
                         y: 1,
                         x2: 1,
                         y2: 0,
                         colorStops: [{
                             offset: 0,
                             color: '#584732' // 0% 处的颜色
                         }, {
                             offset: 1,
                             color: '#C5914D' // 100% 处的颜色
                         }],
                         globalCoord: false // 缺省为 false
                     }
                 },
             },
             {
                 name: "纠纷调解",
                 value: 15,
                 itemStyle: {
                     color: {
                         type: 'linear',
                         x: 0,
                         y: 1,
                         x2: 1,
                         y2: 0,
                         colorStops: [{
                             offset: 0,
                             color: '#2F545F' // 0% 处的颜色
                         }, {
                             offset: 1,
                             color: '#68CED3' // 100% 处的颜色
                         }],
                         globalCoord: false // 缺省为 false
                     }
                 },
             },
             {
                 name: "河道保洁",
                 value: 5,
                 itemStyle: {
                     color: {
                         type: 'linear',
                         x: 0,
                         y: 1,
                         x2: 1,
                         y2: 0,
                         colorStops: [{
                             offset: 0,
                             color: '#2F3F5E' // 0% 处的颜色
                         }, {
                             offset: 1,
                             color: '#688DD3' // 100% 处的颜色
                         }],
                         globalCoord: false // 缺省为 false
                     }
                 },
             },
             {
                 name: "信访调解",
                 value: 5,
                 itemStyle: {
                     color: {
                         type: 'linear',
                         x: 0,
                         y: 1,
                         x2: 1,
                         y2: 0,
                         colorStops: [{
                             offset: 0,
                             color: '#30325F' // 0% 处的颜色
                         }, {
                             offset: 1,
                             color: '#6C68D3' // 100% 处的颜色
                         }],
                         globalCoord: false // 缺省为 false
                     }
                 },
             },
         ]
         option = {
             calculable: false,
             tooltip: {
                 show: true,
                 trigger: 'item'
             },
             series: [{
                 type: 'treemap',
                 left: '0',
                 right: '0',
                 top: '0',
                 bottom: '0',
                 label: {
                     show: true,
                     formatter: (params) => {
                         return params.value + '%' + '\n' + params.name
                         // let str = `<div>
                         //             <div style="display: flex">
                         //                 <div style="font-size: 26px">${params.value}</div>
                         //                 <div style="font-size: 18px">%</div>
                         //             </div>
                         //             <div>${params.name}</div>
                         //         </div>`;
                         // return str
                     },
                     fontSize: 20,
                     fontWeight: 'bold',
                     ellipsis: true
                 },
                 breadcrumb: {
                     show: false
                 },
                 data: data,
                 roam: false,
                 nodeClick: false,

             }]
         }