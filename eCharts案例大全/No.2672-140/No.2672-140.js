 let dataPie = [

     {
         value: 410,
         name: '企业'
     },
     {
         value: 380,
         name: '政府'
     },
     {
         value: 501,
         name: '个人'
     },
 ];

 let colorWrap = ['#3087d6', '#f6ce54', '#4be1ff'];
 let baseDataWrap = [];
 let total = 0;
 dataPie.forEach(function(val, idx, arr) {
     total += val.value;
 })
 for (let i = 0; i < dataPie.length; i++) {
     baseDataWrap.push({
         value: dataPie[i].value,
         name: dataPie[i].name,
         itemStyle: {
             normal: {
                 color: colorWrap[i],
                 borderWidth: 5,
                 borderColor: colorWrap[i],
                 shadowBlur: 50,
                 shadowColor: 'rgba(7, 132, 250, 0.8)',
             }
         }
     }, {
         value: total*0.02,
         name: '',
         itemStyle: {
             normal: {
                 color: 'transparent',
                 borderWidth: 5,
                 borderColor: 'transparent',

             }
         }
     });
 }

 option = {
     backgroundColor: "#031223",
     title: {
         text: '140',
         subtext: '总人数',
         textStyle: {
             color: '#ffffff',
             fontSize: 20,
             fontFamily:"",

         },
         subtextStyle: {
             align: 'center',
             fontSize: 14,
             color: ['#8b9094'],
             fontFamily:""
         },
         x: 'center',
         y: 'center',
     },
     grid: {
         left: '1%', // 与容器左侧的距离
         right: '1%', // 与容器右侧的距离
         top: '1%', // 与容器顶部的距离
         bottom: '1%', // 与容器底部的距离

     },
     tooltip: {
         show: true,
         trigger: 'item',
         formatter: "{a}：{b} <br/>占比：{d}%"
     },
     

     series: [{
             name: '',
             type: 'pie',
             clockWise: false, //顺时加载
             hoverAnimation: false, //鼠标移入变大
             center: ['50%', '50%'],
             radius: ['80%', '81%'],
             tooltip: {
                 show: false
             },
             label: {
                 normal: {
                     show: false
                 }
             },
             data: baseDataWrap
         },
         

     ]
 };