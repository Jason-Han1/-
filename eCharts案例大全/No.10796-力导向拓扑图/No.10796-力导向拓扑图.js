 var nodes = [{
         name: '服务器',
         relation: '3'

     },
     {
         name: '存储设备1',
         relation: '1'
     },
     {
         name: '存储设备2',
         relation: '1'
     },
     {
         name: '防火墙',
         relation: '2'
     }
 ]
 var links = [{
         source: '存储设备2',
         target: '服务器',
         name: '数据传输',
         relation: '1'

     }, {
         source: '存储设备1',
         target: '服务器',
         name: '数据传输',
         relation: '1'
     },
     {
         source: '防火墙',
         target: '服务器',
         name: '数据传输',
         relation: '2'
     },

 ]
 var charts = {
     nodes: [],
     links: []
 }
 for (var j = 0; j < nodes.length; j++) {
     if (nodes[j].relation == '1') {
         var node = {
             name: nodes[j].name,
             alarm: nodes[j].alarm,
             itemStyle: {
                 normal: {
                     color: '#12b5d0',
                 }
             }
         }
     } else if (nodes[j].relation == '2') {
         node = {
             name: nodes[j].name,
             alarm: nodes[j].alarm,
             itemStyle: {
                 normal: {
                     color: 'red',
                 }
             }
         }
     } else {
         node = {
             name: nodes[j].name,
             alarm: nodes[j].alarm,
             itemStyle: {
                 normal: {
                     color: 'green',
                 }
             }
         }
     }



     charts.nodes.push(node)
 }
 for (var i = 0; i < links.length; i++) {
     if (links[i].relation == "1") {
         var link = {
             source: links[i].source,
             target: links[i].target,
             label: {
                 normal: {
                     show: true,
                     formatter: links[i].name
                 }
             },
             lineStyle: {
                 normal: {
                     color: '#17FFF3'
                 }
             }
         }
     } else {
         var link = {
             source: links[i].source,
             target: links[i].target,
             label: {
                 normal: {
                     show: true,
                     formatter: links[i].name
                 }
             },
             lineStyle: {
                 normal: {
                     color: 'red'
                 }
             }
         }
     }

     charts.links.push(link)
 }
 option = {
     backgroundColor: '#000033',
     series: [{
         type: 'graph',
         layout: 'force',
         symbolSize: 50,
         edgeSymbol: ['circle', 'arrow'],
         force: {
             repulsion: 1000,
             edgeLength: [150, 200],
             layoutAnimation: false
         },
         draggable: true,
         edgeLabel: {
             normal: {
                 show: true,
                 formatter: function(x) {
                     return x.data.name;
                 }
             }
         },
         label: {
             normal: {
                 show: true,
                 position: 'bottom',
                 color: '#17FFF3'
             }
         },
         lineStyle: {
             normal: {
                 width: 2,
                 shadowColor: 'none'
             }
         },
         data: charts.nodes,
         links: charts.links,
         itemStyle: {
             normal: {
                 label: {
                     show: true,
                     formatter: function(item) {
                         return item.data.name
                     }
                 }
             }
         }
     }]
 };