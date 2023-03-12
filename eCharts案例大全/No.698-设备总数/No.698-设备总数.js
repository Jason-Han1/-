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
 let colorPie = ['#173852', '#0b2036', '#002e49'];
 let colorWrap = ['#3087d6', '#f6ce54', '#4be1ff'];
 let baseDataPie = [],
     baseDataWrap = [];
 let total = 0;
 dataPie.forEach(function(val, idx, arr) {
     total += val.value;
 })
 for (let i = 0; i < dataPie.length; i++) {
     baseDataPie.push({
         value: dataPie[i].value,
         name: dataPie[i].name,
         itemStyle: {
             normal: {
                 borderWidth: 20,
                 borderColor: colorPie[i],
             }
         }
     });
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
         value: 20,
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
         text: '设备总数',
         subtext: '10,225',
         textStyle: {
             color: '#00b5f3',
             fontSize: 14,

         },
         subtextStyle: {
             align: 'center',
             fontSize: 20,
             color: ['#85c7e3'],
             fontWeight: 800
         },
         x: '33%',
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
     legend: {
         data: ['企业', '政府', '个人'],
         icon: 'vertical',
         right: '5%',
         top: 'center',
         orient: 'vertical',
         itemGap: 20,
         itemWidth: 15,
         itemHeight: 8,
         formatter: function(name) {


             let target,percent;
             for (let i = 0; i < dataPie.length; i++) {
                 if (dataPie[i].name === name) {
                     target = dataPie[i].value;
                     percent = ((target/total)*100).toFixed(2);
                 }
             }
             let arr = [ percent+'% '+' {yellow|' + target + '}', ' {blue|' + name + '}' ];
             return arr.join("\n")

         },
         textStyle: {

             lineHeight: 20,
             color: '#f0f4f6',
             align: 'right',
             rich: {
                 yellow: {
                     color: '#f6ce54',
                    

                 },
                 blue: {
                     color: '#4be1ff',
                      align: 'right',

                 },
             }

         },
     },

     series: [{
             name: '',
             type: 'pie',
             clockWise: false, //顺时加载
             hoverAnimation: false, //鼠标移入变大
             center: ['40%', '50%'],
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
         {
             name: '报警',
             type: 'pie',
             color: colorPie,
             selectedMode: 'single',
             radius: ['55%', '58%'],
             center: ['40%', '50%'],
             hoverAnimation: false,
             label: {
                 normal: {
                     show: false,
                 }
             },
             data: baseDataPie
         },

     ]
 };