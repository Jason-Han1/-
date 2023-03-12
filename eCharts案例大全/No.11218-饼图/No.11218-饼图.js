 var data = [{
     "name": "空闲",
     "value": 100
 }, {
     "name": "已使用",
     "value": 10
 }]





 option = {

     color: ['#F5A547', '#00C1DE', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85', "rgba(250,250,250,0.3)"],

     tooltip: {
         trigger: 'item',
         formatter: function(data) {
             return data.name + "" + data.value + "， 占比" + " (" + data.percent.toFixed(0) + "%)";
         }
     },
     title: {
         text: '总数',
         subtext: 7789,
         textStyle: {
             color: '#FFFFFF',
             fontSize: 12,
         },
         subtextStyle: {
             fontSize: 24,
             color: ['#FFFFFF'],

         },
         left: 'center',
         top: '46%'

     },
     legend: {
         top: "bottom",
         width: 300,
         right: "center",
         textStyle: {
             color: 'rgba(0,0,0,0.65)',
             fontSize: 14,
             rich: {
                 style: {
                     fontSize: 14,
                     color: 'rgba(0,0,0,0.45)',
                 }
             },


         },
         icon: 'circle',
         data: data,
         formatter: function(name) {
             let initdata = option.series[0].data;
             let total = 0;
             initdata.forEach((item, index) => {
                 total += item.value;
             });
             for (let i = 0; i < initdata.length; i++) {
                 if (name == initdata[i].name) {
                     return name + '' + '   |   {style|' + (initdata[i].value / total * 100).toFixed(0) + '%' + "}  " + initdata[i].value;
                 }
             }
         },
     },
     series: [
         // 主要展示层的
         {
             radius: ['32%', '60%'],
             center: ['50%', '50%'],
             type: 'pie',
             hoverAnimation: false,
             label: {
                 normal: {
                     //formatter: '{b|空闲 {c}}\n{d|占比 {d}%}',
                     // formatter: '{b|{b}}\n{hr|}\n{d|{c}  ({d}%)}',
                     formatter: function(data) {
                         return '{b|' + data.name + data.value + '}\n{d|占比 ' + data.percent.toFixed(0) + '%}'


                     },
                     rich: {
                         b: {
                             fontSize: 12,
                             color: 'rgba(0,0,0,0.85)',
                             lineHeight: 17,
                             align: 'left'
                         },
                         d: {
                             fontSize: 12,
                             color: 'rgba(0,0,0,0.65)',
                             lineHeight: 17,
                             align: 'left'
                         }
                     }
                 }
             },
             labelLine: {
                 normal: {
                     show: true,
                     length: 30,
                     length2: 45
                 },
                 emphasis: {
                     show: true
                 }
             },
             data: data,

         },
         // 边框的设置
         {
             radius: ['30%', '32%'],
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
                     color: "rgba(250,250,250)",
                 },
             }],
         },
         // 内圆设置
         {
             radius: ['0%', '30%'],
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
                     color: "#6F7AF8",
                 },
             }],
         }
     ]
 };