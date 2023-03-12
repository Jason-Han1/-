 let _series = [{
                     value: 210,
                     name: '消防',

                 },
                 {
                     value: 160,
                     name: '红外'
                 },
                 {
                     value: 80,
                     name: '空调'
                 },
                 {
                     value: 60,
                     name: '温湿度'
                 },
                 {
                     value: 150,
                     name: '漏水'
                 },
                 {
                     value: 80,
                     name: '恒湿机'
                 },
             ]
 
 
 option = {
     backgroundColor: '#02102b',
     grid: {
         left: '5px', // 与容器左侧的距离
         right: '5px', // 与容器右侧的距离
         top: '5px', // 与容器顶部的距离
         bottom: '5px', // 与容器底部的距离
     },
     tooltip: {
         trigger: 'item',
         formatter: "{a} <br/>{b}: {c} ({d}%)"
     },
     legend: {
         icon: "circle",
         right: "10%",
         top: 'center',
         orient: 'vertical',
         itemWidth: 10,
         itemHeight: 10,
         textStyle: {
             lineHeight: 20,
             color: '#fff',

         },
         data: ['消防', '红外', '空调', '温湿度', '漏水', '恒湿机'],
         formatter: function(name) {
             console.log(name)
             let _arr = ''
             for (var i = 0; i < _series.length; i++) {
                 if (_series[i].name == name) {
                     _arr = name +' '+' {white|' + _series[i].value + '}'
                 }
                 
             }
             return _arr
             
         },
         textStyle: {
             lineHeight: 20,
             color: '#868f96',
             align: 'left',
             rich: {
                 white: {
                     color: '#fff',
                     align: 'right',

                 },
                 
             }

         },
         
     },
     color: ['#0be9f0', '#f6665e', '#1fc3ff', '#675fff', '#1dedbb', '#f19316'],
     series: [{
             name: '5G平台接入数据',
             type: 'pie',
             center: ['30%', '50%'],
             radius: ['40%', '55%'],
             avoidLabelOverlap: false, //防止标签重叠关闭
             label: {

                 normal: {
                     show: false,
                     position: 'center'
                 },
                 emphasis: {
                     formatter: " {white| {d}% } \n {b}",
                     show: true,
                     textStyle: {
                         fontSize: 12,
                         fontWeight: 'bold',
                         rich: {
                             white: {
                                 fontSize: 16,
                                 color: '#fff',
                                 fontWeight: "bold",
                                 lineHeight: 30,

                             },

                         }
                     }
                 }
             },
             labelLine: {
                 normal: {
                     show: false
                 }
             },
             data: _series
         },
         {
             name: '',
             type: 'pie',
             center: ['30%', '50%'],
             radius: ['35%', '35.5%'],
             hoverAnimation: false,
             color: ['#33a7c0'],
             label: {
                 normal: {
                     show: false,
                     position: 'center'
                 },

             },
             labelLine: {
                 normal: {
                     show: false
                 }
             },
             data: [{
                     value: 1,
                     name: '',
                     borderWidth: 2,
                     borderColor: '#33a7c0'
                 },

             ]
         }
     ]
 }



 myChart.dispatchAction({ //高亮
     type: 'highlight',

     dataIndex: 1
 });

 let index = 0;
 myChart.on('mouseover', (params) => {
     myChart.dispatchAction({
         type: 'downplay',
         dataIndex: 1
     });
     myChart.dispatchAction({
         type: 'downplay',
         dataIndex: index
     });
     index = params.dataIndex;

     myChart.dispatchAction({
         type: 'highlight',
         dataIndex: params.dataIndex
     })
 });