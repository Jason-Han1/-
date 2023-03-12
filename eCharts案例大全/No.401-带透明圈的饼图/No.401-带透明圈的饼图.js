 var data = [{
     "name": "1",
     "value": 10
 }, {
     "name": "2",
     "value": 10
 }, {
     "name": "3",
     "value": 10
 }, {
     "name": "4",
     "value": 10
 }, {
     "name": "5",
     "value": 10
 }, {
     "name": "6",
     "value": 20
 }, {
     "name": "7",
     "value": 30
 }, ]


 option = {

     color: ['#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85', "rgba(250,250,250,0.3)"],
     backgroundColor: '#000',
     title: {
         text: '总数',
         subtext: 7789,
         textStyle: {
             color: '#f2f2f2',
             fontSize: 40,
             // align: 'center'
         },
         subtextStyle: {
             fontSize: 30,
             color: ['#ff9d19']
         },
         x: 'center',
         y: 'center',
     },
     grid: {
         bottom: 150,
         left: 100,
         right: '10%'
     },
     legend: {
         orient: 'vertical',
         top: "middle",
         right: "5%",
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
             center: ['50%', '50%'],
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
             center: ['50%', '50%'],
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
             center: ['50%', '50%'],
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