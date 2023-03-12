 var data = [{
     "name": "动力用电",
     "value": 545519
 }, {
     "name": "空调用电",
     "value": 579321
 }, {
     "name": "特殊用电",
     "value": 479961
 }, {
     "name": "照明用电",
     "value": 1130678
 } ]


 option = {

     color: ['#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85', "rgba(250,250,250,0.3)"],
     backgroundColor: '#000',
     title: {
        //  text: '总数',
        //  subtext: 7789,
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
         bottom: '5%',
         textStyle: {
            color: '#fff',
        },
        itemGap: 12,
        data:data
     },
     series: [
         // 主要展示层的
         {
             radius: ['30%', '61%'],
             center: ['50%', '50%'],
             type: 'pie',
             roseType: true,
             label: {
                 normal: {
                     show: true,
                     formatter:  "{c}kw.h \n {d}%",
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
             name: "总量",
             data: data,

         },
         // 边框的设置
         {
             radius: ['25%', '24%'],
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