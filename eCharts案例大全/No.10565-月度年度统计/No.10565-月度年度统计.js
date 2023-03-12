 builderJson = {

     // "all": 10887,
     "charts": {
         "一月": 123,
         "二月": 334,
         "三月": 342,
         "四月": 321,
         "五月": 322,
         "六月": 254,
         "七月": 564,
         "八月": 466
     },
     "components": {
         "一月": 133,
         "二月": 344,
         "三月": 442,
         "四月": 521,
         "五月": 322,
         "六月": 554,
         "七月": 664,
         "八月": 466
     },
     "ie": 9743
 };

 var downloadJson = {
     "部门1": 123,
     "部门2": 135,
     "部门3": 135,
     "部门4": 234
 };

 var themeJson = {
     "部门1": 133,
     "部门2": 342,
     "部门3": 235,
     "部门4": 334
 };


 var waterMarkText = '测试';

 var canvas = document.createElement('canvas');
 var ctx = canvas.getContext('2d');
 canvas.width = canvas.height = 100;
 ctx.textAlign = 'center';
 ctx.textBaseline = 'middle';
 ctx.globalAlpha = 0.08;
 ctx.font = '20px Microsoft Yahei';
 ctx.translate(50, 50);
 ctx.rotate(-Math.PI / 4);
 ctx.fillText(waterMarkText, 0, 0);

 option = {
     legend: {
         textStyle: {
             color: '#fff'
         },
         x: 'left',
         selected: {
             '是部': false,
             '测试': false
         }
     },
     textStyle: {
         color: '#000',
         fontSize: 16

     },
     color: ['#C10000', '#0000F0', '#FF5706', '#00BDBD', '#C28585', '#00B55A', '#804000'],
     backgroundColor: {
         type: 'pattern',
         image: canvas,
         repeat: 'repeat'
     },
     tooltip: {},
     title: [{
         text: '',
         // subtext: '总计 ' + builderJson.all,
         color: '#000',
         x: '25%',
         textAlign: 'center'
     }, {

         textStyle: {
             color: '#000'
         },
         text: '_2018年 总计 ' + Object.keys(downloadJson).reduce(function(all, key) {
             return all + downloadJson[key];
         }, 0),
         subtextStyle: {
             color: '#000'
         },
         subtext: '',


         x: '72%',
         textAlign: 'center'
     }, {
         color: '#000',
         textStyle: {
             color: '#000'
         },
         text: '_2019年 总计 ' + Object.keys(themeJson).reduce(function(all, key) {
             return all + themeJson[key];
         }, 0),
         subtextStyle: {
             color: '#000'
         },
         subtext: '',
         x: '72%',
         y: '50%',
         textAlign: 'center'
     }],
     grid: [{
         top: 50,
         width: '50%',
         bottom: '45%',
         left: 10,
         containLabel: true
     }, {
         top: '55%',
         width: '50%',
         bottom: 0,
         left: 10,
         containLabel: true
     }],
     xAxis: [{
         axisLine: {
             lineStyle: {
                 color: '#000'
             }
         },
         type: 'value',
         max: builderJson.all,
         splitLine: {
             show: false
         }
     }, {
         axisLine: {
             lineStyle: {
                 color: '#000'
             }
         },
         type: 'value',
         max: builderJson.all,
         gridIndex: 1,
         splitLine: {
             show: false
         }
     }],
     yAxis: [{
         type: 'category',
         data: Object.keys(builderJson.charts),
         axisLabel: {
             interval: 0,
             rotate: 5
         },
         splitLine: {
             lineStyle: {
                 // 使用深浅的间隔色
                 color: ['#fff']
             }
         },
         nameTextStyle: {
             color: ['#fff']
         },
         axisLine: {
             lineStyle: {
                 color: '#fff',
                 width: 1, //这里是为了突出显示加上的
             }

         }
     }, {
         gridIndex: 1,
         type: 'category',
         data: Object.keys(builderJson.components),
         axisLabel: {
             interval: 0,
             rotate: 5
         },
         splitLine: {
             lineStyle: {
                 // 使用深浅的间隔色
                 color: ['#000']
             }
         },
         nameTextStyle: {
             color: ['#000']
         },
         axisLine: {
             lineStyle: {
                 color: '#000',
                 width: 1, //这里是为了突出显示加上的
             }

         }
     }],
     series: [{
         type: 'bar',
         stack: 'chart',
         z: 3,
         label: {
             normal: {
                 position: 'right',
                 show: true
             }
         },
         data: Object.keys(builderJson.charts).map(function(key) {
             return builderJson.charts[key];
         })
     }, {
         type: 'bar',
         stack: 'chart',
         silent: true,
         itemStyle: {
             normal: {
                 color: '#eee'
             }
         },
         data: Object.keys(builderJson.charts).map(function(key) {
             return builderJson.all - builderJson.charts[key];
         })
     }, {
         type: 'bar',
         stack: 'component',
         xAxisIndex: 1,
         yAxisIndex: 1,
         z: 3,
         label: {
             normal: {
                 position: 'right',
                 show: true
             }
         },
         data: Object.keys(builderJson.components).map(function(key) {
             return builderJson.components[key];
         })
     }, {
         type: 'bar',
         stack: 'component',
         silent: true,
         xAxisIndex: 1,
         yAxisIndex: 1,
         itemStyle: {
             normal: {
                 color: '#eee'
             }
         },
         data: Object.keys(builderJson.components).map(function(key) {
             return builderJson.all - builderJson.components[key];
         })
     }, {
         type: 'pie',
         radius: [0, '30%'],
         center: ['75%', '25%'],
         data: Object.keys(downloadJson).map(function(key) {
             return {
                 name: key.replace('.js', ''),
                 value: downloadJson[key]
             }
         })
     }, {
         type: 'pie',
         radius: [0, '30%'],
         center: ['75%', '75%'],
         data: Object.keys(themeJson).map(function(key) {
             return {
                 name: key.replace('.js', ''),
                 value: themeJson[key]
             }
         })
     }]
 };