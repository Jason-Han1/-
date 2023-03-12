 let dataPie = [

     { 
          
         value: 252,
         name: '特级'
     },
     {  
        
         value: 168,
         name: '一级'
     },
     {  
        
         value: 134,
         name: '二级'
     },
     {
       
         value: 118,
         name: '三级'
     },
     { 
          
         value: 101,
         name: '自带'
     },
     
 ];
 let colorPie = ['#173852', '#0b2036', '#002e49'];
 let colorWrap = ['#3087d6', '#4be1ff', "#b6e9ff", "#18edc9", "#6ac5fa", '#f6ce54'];
 let baseDataPie = [],
     baseDataWrap = [];
 let total = 0,legenddata1=[],legenddata2=[];
 dataPie.forEach(function(val, idx, arr) {
     total += val.value;
     if(idx <3){
         legenddata1.push(dataPie[idx].name)
     }else{
         legenddata2.push(dataPie[idx].name)
     }
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
         value: 5,
         name: '',
         itemStyle: {
             normal: {
                 color: 'transparent',
                 borderWidth: 5,
                 borderColor: 'transparent',

             }
         },
         tooltip: {
             show: false
         },
     });

     if (i < 3) {
         baseDataPie.push({
             value: 33,
             name: '',
             itemStyle: {
                 normal: {
                     borderWidth: 20,
                     borderColor: colorPie[i],
                 }
             }
         });
     }
 }


 option = {
     backgroundColor: "#031223",
     title: [{
        text: '人员总数',
        subtext: '842',
        textAlign: 'center',
        textStyle: {
            color: '#00b5f3',
            fontSize: 12,
            lineHeight: 12
        },
        subtextStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight:800
        },
         x: '25%',
        y: 'center',
    }],
     grid: {
         left: '1%', // 与容器左侧的距离
         right: '1%', // 与容器右侧的距离
         top: '1%', // 与容器顶部的距离
         bottom: '1%', // 与容器底部的距离

     },
     tooltip: {
         show: true,
         trigger: 'item',
         formatter: "{a}：{b} <br/>数量：{c}"
     },
     legend: [{
             data: legenddata1,
             icon: 'vertical',
             right: '100px',
             top: 'center',
             orient: 'vertical',
             itemGap: 20,
             itemWidth: 15,
             itemHeight: 8,
             formatter: function(name) {

                 let target, percent;
                 for (let i = 0; i < dataPie.length; i++) {
                     if (dataPie[i].name === name) {
                         target = dataPie[i].value;
                         percent = ((target / total) * 100).toFixed(1);
                     }
                 }
                 let arr = [percent + '% ' + ' {yellow|' + target + '}', ' {white|' + name + '}'];
                 return arr.join("\n")

             },
             textStyle: {
                 lineHeight: 20,
                 color: '#f0f4f6',
                 align: 'right',
                 rich: {
                     yellow: {
                         color: '#00b5f3',
                         fontWeight: "bold"

                     },
                      white: {
                         color: '#cdcdcd',
                         align: 'right',

                     },
                 }

             },
         },
         {
             data: legenddata2,
             icon: 'vertical',
             right: '5px',
             top: 'center',
             orient: 'vertical',
             itemGap: 20,
             itemWidth: 15,
             itemHeight: 8,
             formatter: function(name) {

                 let target, percent;
                 for (let i = 0; i < dataPie.length; i++) {
                     if (dataPie[i].name === name) {
                         target = dataPie[i].value;
                         percent = ((target / total) * 100).toFixed(1);
                     }
                 }
                 let arr = [percent + '% ' + ' {yellow|' + target + '}', ' {white|' + name + '}'];
                 return arr.join("\n")

             },
             textStyle: {

                 lineHeight: 20,
                 color: '#f0f4f6',
                 align: 'right',
                 rich: {
                     yellow: {
                         color: '#00b5f3',
                         fontWeight: "bold"


                     },
                     white: {
                         color: '#cdcdcd',
                         align: 'right',

                     },
                 }

             },
         }
     ],

     series: [{
             name: '人员总数',
             type: 'pie',
             clockWise: false, //顺时加载
             hoverAnimation: false, //鼠标移入变大
             center: ['30%', '50%'],
             radius: ['80%', '81%'],
             label: {
                 normal: {
                     show: false
                 }
             },
             data: baseDataWrap
         },
         {
             name: '',
             type: 'pie',
             color: colorPie,
             selectedMode: 'single',
             radius: ['55%', '58%'],
             center: ['30%', '50%'],
             hoverAnimation: false,
             label: {
                 normal: {
                     show: false,
                 }
             },
             tooltip: {
                 show: false
             },
             data: baseDataPie
         },

     ]
 };