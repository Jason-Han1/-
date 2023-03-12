 var data = {
     nodes: [{
             name: '1.点击搜索栏'
         },

         {
             name: '2.支付订单详情'
         },
         {
             name: '2.支付订单'
         },
         {
             name: '2.取消订单'
         },
         {
             name: '2.提交订单'
         },

         {
             name: '3.支付订单'
         },
         {
             name: '3.支付订单详情'
         },
         {
             name: '3.选择地址'
         },

         {
             name: '4.浏览商品详情页'
         },
         {
             name: '4.加入购物车'
         },
         {
             name: '4.支付订单详情'
         },
         {
             name: '4.选择地址'
         },
         {
             name: '4.点击搜索栏'
         },
         {
             name: '4.取消订单'
         },
         {
             name: '4.更多'
         }
     ],
     links: [{
             source: '1.点击搜索栏',
             target: '2.支付订单详情',
             value: 7
         },
         {
             source: '1.点击搜索栏',
             target: '2.支付订单',
             value: 1
         },
         {
             source: '1.点击搜索栏',
             target: '2.取消订单',
             value: 1
         },
         {
             source: '1.点击搜索栏',
             target: '2.提交订单',
             value: 1
         },

         {
             source: '2.支付订单详情',
             target: '3.支付订单',
             value: 7
         },
         {
             source: '2.支付订单',
             target: '3.支付订单详情',
             value: 1
         },
         {
             source: '2.取消订单',
             target: '3.支付订单详情',
             value: 1
         },
         {
             source: '2.提交订单',
             target: '3.选择地址',
             value: 1
         },

         {
             source: '3.支付订单',
             target: '4.浏览商品详情页',
             value: 1
         },
         {
             source: '3.支付订单',
             target: '4.加入购物车',
             value: 1
         },
         {
             source: '3.支付订单',
             target: '4.支付订单详情',
             value: 1
         },
         {
             source: '3.支付订单',
             target: '4.选择地址',
             value: 1
         },
         {
             source: '3.支付订单',
             target: '4.点击搜索栏',
             value: 1
         },
         {
             source: '3.支付订单',
             target: '4.取消订单',
             value: 1
         },
         {
             source: '3.支付订单',
             target: '4.更多',
             value: 1
         },
         {
             source: '3.支付订单详情',
             target: '4.更多',
             value: 1
         },
         {
             source: '3.选择地址',
             target: '4.点击搜索栏',
             value: 1
         }
     ]
 }

 option = {
     title: {
         text: '桑基图'
     },
     tooltip: {
         trigger: 'item',
         triggerOn: 'mousemove'
     },
     series: [{
         type: 'sankey',
         layout: 'none',
         data: data.nodes,
         links: data.links,
         nodeGap: 20, // 桑基图中每一列任意两个矩形节点之间的间隔。
         right: '2%',
         left: '2%',
         // focusNodeAdjacency: 'allEdges',
         // 如果希望图中节点的顺序是按照原始 data 中的顺序排列的，可设 layoutIterations值为 0。
         layoutIterations: 0,
         nodeWidth: 80,
         draggable: false,
         levels: [{
                 depth: 0,
                 itemStyle: {
                     color: '#b1d1f8'
                 },
                 lineStyle: {
                     color: '#ccc',
                     opacity: 0.4
                 }
             },
             {
                 depth: 1,
                 itemStyle: {
                     color: '#b1d1f8'
                 },
                 lineStyle: {
                     color: '#ccc',
                     opacity: 0.4
                 }
             },
             {
                 depth: 2,
                 itemStyle: {
                     color: '#b1d1f8'
                 },
                 lineStyle: {
                     color: '#ccc',
                     opacity: 0.4
                 }
             },
             {
                 depth: 3,
                 itemStyle: {
                     color: '#b1d1f8'
                 },
                 lineStyle: {
                     color: '#ccc',
                     opacity: 0.4
                 }
             }
         ],
         itemStyle: {
             normal: {
                 borderWidth: 1,
                 borderColor: '#aaa'
             }
         },
         label: {
             normal: {
                 align: 'center',
                 verticalAlign: 'middle',
                 position: ['50%', '50%'],
                 fontSize: '12',
                 color: '#333'
             }
         }
     }]
 };