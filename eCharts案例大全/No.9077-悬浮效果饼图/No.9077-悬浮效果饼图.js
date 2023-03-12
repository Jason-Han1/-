option = {
    title: {
         text: '公布批次',
         textStyle: {
             color: '#000000',
             fontSize: 40,
             align: 'center'
         },
         x: 'center',
         y: 'center',
     },
     tooltip: {
         trigger: 'item',
         formatter: "{a} <br/>{b}: {c} ({d}%)",
     },
     legend: {
         orient: 'horizontal',
         x: 'center',
         itemWidth: 20,
         itemHeight: 20,
         align: 'left',
         data:['第一批','第二批','第三批','第四批'],
         textStyle: {
             color: 'blue'
         }
     },
     series: [
         {
             animation: false,
             type:'pie',
             radius: ['42%', '51%'],
             data:[1],
             color: ["gray"],
             itemStyle : {
               normal : {
                 label : {
                   show : false
                 },
                 labelLine : {
                   show : false
                 }
               },
     
             },
         },
         {
             name:'访问来源',
             type:'pie',
             radius: ['38%', '55%'],
             label: {
                 normal: {
                     formatter: '{c}',
                     padding: [0, -80],
                     height: 60,
                     fontSize:30,
                     rich:{
                         c: {
                             lineHeight: 50,
                         },                        
                     }
                 },
             },
             data:[
                 {value:48, name:'第一批'},
                                 {value:2.5, name:'border'},
                 {value:7, name:'第二批'},
                                 {value:2.5, name:'border'},
                 {value:48, name:'第三批'},
                                 {value:2.5, name:'border'},
                 {value:35, name:'第四批'},
                                 {value:2.5, name:'border'},
             ],
             itemStyle:{
                 normal:{
                     color: function(params){
                         var colorList = ['#ffa300','#01b9ff','#01ff2b','#ff75d4'];
                         return (params.dataIndex % 2)? 'rgba(0,0,0,0)' : colorList[params.dataIndex/2];
                     },
                     labelLine:{
                         length: 80,
                         length2: 120,
                     }
                 },
             }
         },
         {
             animation: false,
             type:'pie',
             radius: ['38%', '40%'],
             data:[
                 {value:48, name:'第一批'},
                                 {value:2.5, name:'border'},
                 {value:7, name:'第二批'},
                                 {value:2.5, name:'border'},
                 {value:48, name:'第三批'},
                                 {value:2.5, name:'border'},
                 {value:35, name:'第四批'},
                                 {value:2.5, name:'border'},
             ],
             itemStyle : {
               normal : {
                     color: function(params){
                         var colorList = ['#ffa300','#01b9ff','#01ff2b','#ff75d4'];
                         return (params.dataIndex % 2)? 'rgba(0,0,0,0)' : "rgba(0,0,0,0.3)";
                     },
                 label : {
                   show : false
                 },
                 labelLine : {
                   show : false
                 }
               },
             },
         },
         {
             animation: false,
             type:'pie',
             radius: ['40%', '42%'],
             data:[
                 {value:48, name:'第一批'},
                                 {value:2.5, name:'border'},
                 {value:7, name:'第二批'},
                                 {value:2.5, name:'border'},
                 {value:48, name:'第三批'},
                                 {value:2.5, name:'border'},
                 {value:35, name:'第四批'},
                                 {value:2.5, name:'border'},
             ],
             itemStyle : {
               normal : {
                     color: function(params){
                         var colorList = ['#ffa300','#01b9ff','#01ff2b','#ff75d4'];
                         return (params.dataIndex % 2)? 'rgba(0,0,0,0)' : "rgba(0,0,0,0.1)";
                     },
                 label : {
                   show : false
                 },
                 labelLine : {
                   show : false
                 }
               },
     
             },
         },
     ]
 };