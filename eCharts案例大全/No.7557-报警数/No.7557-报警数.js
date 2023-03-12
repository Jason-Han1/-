 option = {
     color: ['#e062ae', "#67e0e3", "#37a2da",'#d5ea80', "#abbb5c", "#ff9f7f"],
     title: {
         text: '报警数',

         textStyle: {
             color: '#4effff',
             fontSize: 14,
             align: 'center'
         },
         x: 'center',
         y: 'center',
     },
     tooltip: {
         trigger: 'item',
         formatter: "{a} <br/>{b} : {c}"
     },
     grid: {
         left: '5px', // 与容器左侧的距离
         right: '5px', // 与容器右侧的距离
         top: '5px', // 与容器顶部的距离
         bottom: '5px', // 与容器底部的距离
     },
     
     series: [{
         name: '报警设备统计',
         type: 'pie',
         radius: ['40%', '60%'],
         center: ['50%', '50%'],
         label: {
             show: true,
             position: 'outside',
             formatter: '{b}: ( {c} )'
         },
         labelLine: {    //引导线设置
                 normal: {
                      show: true,   //引导线显示
                      length:5,
                      length2:10,
                 }
           },
         itemStyle: {
             emphasis: {
                 shadowBlur: 10,
                 shadowOffsetX: 0,
                 shadowColor: 'rgba(0, 0, 0, 0.5)'
             }
         },
         data: [{
                 value: 46,
                 name: '空调'
             },
             {
                 value: 4,
                 name: '温湿度'
             },
             {
                 value: 11,
                 name: '漏水'
             },
             {
                 value: 3,
                 name: '恒湿机'
             },
             {
                 value: 25,
                 name: '红外'
             },
             {
                 value: 45,
                 name: '消防'
             },
             

         ],

     }]
 };