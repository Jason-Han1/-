 //安排出运
 var trafficWay1 = [{
     name: '2小时未安排总单',
     value: 40
 }, {
     name: '4小时未安排总单',
     value: 20
 }, {
     name: '6小时未安排总单',
     value: 15
 }, {
     name: '12小时未安排总单',
     value: 10
 }, {
     name: '24小时未安排总单',
     value: 5
 }];

 var data = [];
 var color = ['#006ced', '#00cfff', '#ffe000', '#ff5b00', '#ff3000', '#660000'];
 for (var i = 0; i < trafficWay1.length; i++) {
     data.push({
         value: trafficWay1[i].value,
         name: trafficWay1[i].name,
         itemStyle: {
             normal: {
                 borderWidth: 5,
                 shadowBlur: 20,
                 borderColor: color[i],
                 shadowColor: color[i]
             }
         }
     }, {
         value: 2,
         name: '',
         itemStyle: {
             normal: {
                 label: {
                     show: false
                 },
                 labelLine: {
                     show: false
                 },
                 color: 'rgba(0, 0, 0, 0)',
                 borderColor: 'rgba(0, 0, 0, 0)',
                 borderWidth: 0
             }
         }
     });
 }

 option = {
     backgroundColor: '#04033a',
     color: color,
     title: [{
         text: '安排出运',
         top: '47.5%',
         left: '49%',
         textAlign: "center",
         textStyle: {
             color: '#c1cadf',
             fontSize: 25,
             fontWeight: '800'
         }
     },
     {
         text: '新杰物流',
         top: '40.5%',
         left: '49%',
         textAlign: "center",
         textStyle: {
             color: '#c1cadf',
             fontSize: 13,
             fontWeight: '800'
         }
     }],
     series: [
         //安排出运
         {
             name: '',
             type: 'pie',
             clockWise: false,
             radius: [108, 128],
             hoverAnimation: false,
             itemStyle: {
                 normal: {
                     label: {
                         show: true,
                         position: 'outside',
                         color: '#c1cadf',
                         formatter: function(params) {
                             var percent = 0;
                             var total = 0;
                             for (var i = 0; i < trafficWay1.length; i++) {
                                 total += trafficWay1[i].value;
                             }
                             percent = ((params.value / total) * 100).toFixed(0);
                             if (params.name !== '') {
                                 return params.name + '\n' + '\n' + '占百分比：' + percent + '%';
                             } else {
                                 return '';
                             }
                         },
                     },
                     labelLine: {
                         length: 30,
                         length2: 40,
                         show: true,
                         color: '#00ffff'
                     }
                 }
             },
             data: data
         }, {
             type: 'pie',
             radius: ['30%', '30.3%'],
             hoverAnimation: false,
             clockWise: false,
             itemStyle: {
                 normal: {
                     color: '#00cfff'
                 }
             },
             label: {
                 show: false
             },
             data: _dashed()
         }
     ]
 }

 function _dashed() {
     let dataArr = [];
     for (var i = 0; i < 10; i++) {
         if (i % 2 === 0) {
             dataArr.push({
                 name: (i + 1).toString(),
                 value: 10,
                 itemStyle: {
                     normal: {
                         color: 'rgb(0,0,0,0)',
                     }
                 }
             })
         } else {
             dataArr.push({
                 name: (i + 1).toString(),
                 value: 20,
                 itemStyle: {
                     normal: {
                         color: 'rgb(0,0,0,0)',
                         borderWidth: 2,
                         borderColor: "rgba(255,215,0,1)"
                     }
                 }
             })
         }

     }
     return dataArr
 }

 function doing() {
     let option1 = myChart.getOption();
     option1.series[1].startAngle = option1.series[1].startAngle - 1;
     myChart.setOption(option1);
 }

 function startTimer() {
     timer = setInterval(doing, 100);
 }
 setTimeout(startTimer, 0);