 var data = [{
     "name": "央广网",
     "value": 10
 }, {
     "name": "新华网",
     "value": 10
 }, {
     "name": "中国经济网",
     "value": 10
 }, {
     "name": "光明网",
     "value": 10
 }, {
     "name": "中国广播网",
     "value": 10
 }, {
     "name": "中国广播网02",
     "value": 10
 }, {
     "name": "中国工商报网",
     "value": 10
 }, {
     "name": "中国工商报网02",
     "value": 10
 }, {
     "name": "澎湃新闻01",
     "value": 10
 }, {
     "name": "澎湃新闻02",
     "value": 10
 }]


 option = {

     color: ['#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85', "3ef", '#234', '#666'],
     backgroundColor: '#fff',
     title: {
         text: '总数',
         subtext: '7789条',
         textStyle: {
             color: '#ccc',
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
     /*legend: {
         orient: 'vertical',
         top: "middle",
         right: "5%",
         textStyle: {
             color: '#f2f2f2',
             fontSize: 25,

         },
         icon: 'roundRect',
         data: data,
     },*/
     series: [
         // 主要展示层的
         {
             radius: ['30%', '40%'],
             center: ['50%', '50%'],
             type: 'pie',
             label: {
                 normal: {
                     show: true,
                     formatter: function(params) {
                         console.log(params)
                         return params.data.name + ':' + params.data.value + '条' + params.data.value + '%'
                     },
                     textStyle: {
                         fontSize: 20,

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
                     length: 10,
                     length2: 5
                 },
                 emphasis: {
                     show: true
                 }
             },
             name: "媒体参与度",
             data: data,

         },
         // 边框的设置
         /*{
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
         }*/
     ]
 };