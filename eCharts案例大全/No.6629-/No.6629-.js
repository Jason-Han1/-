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
         bottom: "5px",
         itemWidth: 10,
         itemHeight: 10,
         textStyle: {
             lineHeight: 20,
             color: '#fff',



         },
         data: ['服务器', '虚拟机', 'IPRN设备', 'PTN设备', '5G基站', '交换机', '5G核心设备', '防火墙']
     },
     color: ['#0be9f0', '#f6665e', '#1fc3ff', '#675fff', '#1dedbb', '#f19316', '#4598fd', '#cf4bfd'],
     series: [{
             name: '5G平台接入数据',
             type: 'pie',
             center: ['50%', '35%'],
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
             data: [{
                     value: 210,
                     name: '服务器',

                 },
                 {
                     value: 160,
                     name: '虚拟机'
                 },
                 {
                     value: 80,
                     name: 'IPRN设备'
                 },
                 {
                     value: 60,
                     name: 'PTN设备'
                 },
                 {
                     value: 150,
                     name: '5G基站'
                 },
                 {
                     value: 80,
                     name: '交换机'
                 },
                 {
                     value: 200,
                     name: '5G核心设备'
                 },
                 {
                     value: 100,
                     name: '防火墙'
                 }
             ]
         },
         {
             name: '',
             type: 'pie',
             center: ['50%', '35%'],
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