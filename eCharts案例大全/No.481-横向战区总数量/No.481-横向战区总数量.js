 var data = [{
     "name": "小猪料：3200吨",
     "value": 20
 }, {
     "name": "大猪料：2876吨",
     "value": 18
 }, {
     "name": "鸡料：2500吨",
     "value": 15
 }, {
     "name": "鸭料：1800吨",
     "value": 10
 }, {
     "name": "乳猪料：1200吨",
     "value": 10
 }, {
     "name": "鱼料：800吨",
     "value": 20
 },  ]


 option = {

     color: ['#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', "rgba(250,250,250,0.3)"],
     backgroundColor: '#081736',
     title: {
         text: '总数量',
         subtext: '13000吨',
         
         textStyle: {
             color: '#f2f2f2',
             fontSize: 40,
             
         },
         subtextStyle: {
             fontSize: 30,

             color: ['#ff9d19']
         },
         
         x: '33%',
         y: '44%',
     },
    
     grid: {
         bottom: 150,
         left: 100,
         right: '10%'
     },
     legend: {
         orient: 'vertical',
         top: "35%",
         left: "74%",
         textStyle: {
             color: '#f2f2f2',
             fontSize: 25,

         },
         icon: 'roundRect',
         data: data,
     },
     series: [
         // 主要展示层的
         {
             radius: ['30%', '61%'],
             center: ['39%', '50%'],
             type: 'pie',
             label: {
                 normal: {
                     show: true,
                     formatter: "{c}%",
                     textStyle: {
                         fontSize: 30,

                     },
                     position: 'outside'
                 },
                 emphasis: {
                     show: true
                 }
             },
             labelLine: {
                 normal: {
                     show: true,
                     length: 30,
                     length2: 55
                 },
                 emphasis: {
                     show: true
                 }
             },
             name: "民警训练总量",
             data: data,

         },
         // 边框的设置
         {
             radius: ['30%', '34%'],
             center: ['39%', '50%'],
             type: 'pie',
             label: {
                 normal: {
                     show: false
                 },
                 emphasis: {
                     show: false
                 }
             },
             labelLine: {
                 normal: {
                     show: false
                 },
                 emphasis: {
                     show: false
                 }
             },
             animation: false,
             tooltip: {
                 show: false
             },
             data: [{
                 value: 1,
                 itemStyle: {
                     color: "rgba(250,250,250,0.3)",
                 },
             }],
         }, {
             name: '外边框',
             type: 'pie',
             clockWise: false, //顺时加载
             hoverAnimation: false, //鼠标移入变大
             center: ['39%', '50%'],
             radius: ['65%', '65%'],
             label: {
                 normal: {
                     show: false
                 }
             },
             data: [{
                 value: 9,
                 name: '',
                 itemStyle: {
                     normal: {
                         borderWidth: 2,
                         borderColor: '#0b5263'
                     }
                 }
             }]
         },
     ]
 };