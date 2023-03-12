 option = {
     backgroundColor: 'lightseagreen',
     tooltip: {},
     animationDurationUpdate: 1500,
     animationEasingUpdate: 'quinticInOut',
     series: [{
         type: 'graph',
         layout: 'none',
         symbol: 'rect',
         symbolSize: [80, 40],
         roam: false,
         label: {
             show: true
         },
         itemStyle: {
             color: 'rgb(18,27,79)',
             borderColor: '#306BE6',
             barBorderRadius: '14'
         },
         tooltip: {
             show: true,
             backgroundColor: '#fff',
             formatter: params => {
                 return `
                            <span style="font-size:16px;color:#333">${params.name}</span><br/>
                            上级：${params.name}<br/>
                            技术：${params.name}<br/>
                            下级：${params.name}
                            `

             },
             textStyle: {
                 color: '#666'
             }
         },
         select: {
             itemStyle: {
                 color: 'pink',
                 borderColor: 'pink'
             }
         },
         // edgeSymbol: ['rect', 'arrow'],
         edgeSymbolSize: [4, 10],
         edgeLabel: {
             normal: {
                 show: true,
                 color: '#fff',
                 textStyle: {
                     fontSize: 12,
                 },
                 formatter: params => {
                     return params.value || ''
                     // return params.value ? params.value.split("").join('\n') : ""
                 }
             }
         },
         data: [{
             name: '上级1',
             x: 300,
             y: 0,
             itemStyle: {
                 normal: {
                     borderColor: '#F9A825',
                 }
             }
         }, {
             name: '中级1',
             x: 300,
             y: 70,
             symbolSize: 0
         }, {
             name: '中下1',
             x: 300,
             y: 230,
             symbolSize: 0

         }, {
             name: '下1',
             x: 300,
             y: 300,

         }, {
             name: '上级2',
             x: 400,
             y: 0,
             itemStyle: {
                 normal: {
                     borderColor: '#F9A825',
                 }
             }
         }, {
             name: '中级2',
             symbolSize: 0,
             x: 400,
             y: 70
         }, {
             name: '中下2',
             x: 400,
             y: 230,
             symbolSize: 0

         }, {
             name: '下2',
             x: 400,
             y: 300

         }, {
             name: '上级3',
             x: 500,
             y: 0,
             itemStyle: {
                 normal: {
                     borderColor: '#F9A825',
                 }
             }
         }, {
             name: '中级3',
             x: 500,
             y: 70,
             symbolSize: 0
         }, {
             name: '核心',
             x: 700,
             y: 150,
             itemStyle: {
                 normal: {
                     color: '#306BE6',
                 }
             }
         }, {
             name: '中下3',
             x: 500,
             y: 230,
             symbolSize: 0
         }, {
             name: '下3',
             x: 500,
             y: 300

         }, {
             name: '上级4',
             x: 600,
             y: 0
         }, {
             name: '中级4',
             x: 600,
             y: 70,
             symbolSize: 0
         }, {
             name: '中下4',
             x: 600,
             y: 230,
             symbolSize: 0
         }, {
             name: '下4',
             x: 600,
             y: 300

         }, {
             name: '上级5',
             x: 700,
             y: 0
         }, {
             name: '中级5',
             x: 700,
             y: 70,
             symbolSize: 0
         }, {
             name: '中下5',
             x: 700,
             y: 230,
             symbolSize: 0
         }, {
             name: '下5',
             x: 700,
             y: 300

         }, {
             name: '上级6',
             x: 800,
             y: 0
         }, {
             name: '中级6',
             x: 800,
             y: 70,
             symbolSize: 0
         }, {
             name: '中下6',
             x: 800,
             y: 230,
             symbolSize: 0
         }, {
             name: '下6',
             x: 800,
             y: 300

         }, {
             name: '上级7',
             x: 900,
             y: 0
         }, {
             name: '中级7',
             x: 900,
             y: 70,
             symbolSize: 0
         }, {
             name: '中下7',
             x: 900,
             y: 230,
             symbolSize: 0
         }, {
             name: '下7',
             x: 900,
             y: 300,
             itemStyle: {
                 normal: {
                     borderColor: '#F9A825',
                 }
             }

         }, {
             name: '上级8',
             x: 1000,
             y: 0
         }, {
             name: '中级8',
             x: 1000,
             y: 70,
             symbolSize: 0
         }, {
             name: '中下8',
             x: 1000,
             y: 230,
             symbolSize: 0
         }, {
             name: '下8',
             x: 1000,
             y: 300,
             itemStyle: {
                 normal: {
                     borderColor: '#F9A825',
                 }
             }

         }, {
             name: '上级9',
             x: 1100,
             y: 0
         }, {
             name: '中级9',
             x: 1100,
             y: 70,
             symbolSize: 0
         }, {
             name: '中下9',
             x: 1100,
             y: 230,
             symbolSize: 0
         }, {
             name: '下9',
             x: 1100,
             y: 300,
             itemStyle: {
                 normal: {
                     borderColor: '#F9A825',
                 }
             }

         }, ],
         // links: [],
         links: [{
             source: '上级1',
             target: '中级1',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '上级2',
             target: '中级2',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '上级3',
             target: '中级3',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '上级4',
             target: '中级4',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '上级5',
             target: '中级5',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '上级6',
             target: '中级6',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '上级7',
             target: '中级7',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '上级8',
             target: '中级8',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '上级9',
             target: '中级9',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '中级1',
             target: '中级5',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '中级5',
             target: '中级9',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '中级5',
             target: '核心',
             symbol: 'none',
             value: '供应商',
             tooltip: {
                 show: false
             },
         }, {
             source: '核心',
             target: '中下5',
             symbol: 'none',
             value: '采购商',
             tooltip: {
                 show: false
             },
         }, {
             source: '中下1',
             target: '中下5',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '中下5',
             target: '中下9',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '中下1',
             target: '下1',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '中下2',
             target: '下2',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '中下3',
             target: '下3',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '中下4',
             target: '下4',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '中下5',
             target: '下5',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '中下6',
             target: '下6',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '中下7',
             target: '下7',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '中下8',
             target: '下8',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }, {
             source: '中下9',
             target: '下9',
             symbol: 'none',
             tooltip: {
                 show: false
             },
         }],
         lineStyle: {
             color: '#306BE6',
             opacity: 3.9,
             width: 2,
             curveness: 0
         }
     }]
 };