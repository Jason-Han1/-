
 option = {
     backgroundColor: '#041F34',
     series: [{
             type: 'pie',
             zlevel: 1,
             silent: true,
             radius: ['90%', '90%'],
             hoverAnimation: false,
             // animation:false,    //charts3 no
             label: {
                 normal: {
                     show: false
                 },
             },
             labelLine: {
                 normal: {
                     show: false
                 }
             },
             data: _pie1()
         },
         {
             type: 'pie',
             zlevel: 2,
             silent: true,
             radius: ['95%', '98%'],
             startAngle: -65,
             label: {
                 normal: {
                     show: false
                 },
             },
             labelLine: {
                 normal: {
                     show: false
                 }
             },
             data: _pie2()
         },
         {
             name: "",
             type: 'gauge',
             splitNumber: 10, //刻度数量
             min: 0,
             max: 100,
             radius: '80%', //图表尺寸
             center: ['50%', '50%'],
             axisLine: {
                 show: true,
                 lineStyle: {
                     width: 0,
                     shadowBlur: 0,
                     color: [
                         [1, '#fff']
                     ]
                 }
             },
             axisTick: {
                 show: true,
                 lineStyle: {
                     color: 'auto',
                     width: 2
                 },
                 length: 20,
                 splitNumber: 5
             },
             splitLine: {
                 show: true,
                 length: 22,
                 lineStyle: {
                     color: 'auto',
                 }
             },
             axisLabel: {
                 show: false
             },
             pointer: { //仪表盘指针
                 show: 0,
             },
             detail: {
                 show: 0,
             },
         },
         {
             name: '统计',
             type: 'gauge',
             splitNumber: 10, //刻度数量
             min: 0,
             max: 100,
             radius: '80%', //图表尺寸
             center: ['50%', '50%'],
             axisLine: {
                 show: true,
                 lineStyle: {
                     width: 0,
                     shadowBlur: 0,
                     color: [
                         [0.05, '#cf3'],
                         [0.10, '#9f3'],
                         [0.15, '#6f3'],
                         [0.20, '#3f3'],
                         [0.25, '#3f6'],
                         [0.30, '#3f9'],
                         [0.35, '#3fc'],
                         [0.40, '#3ff'],
                         [0.45, '#3cf'],
                         [0.50, '#39f'],
                         [0.55, '#36f'],
                         [0.60, '#33f'],
                         [0.65, '#63f'],
                         [0.70, '#93f'],
                         [0.75, '#c3f'],
                         [0.80, '#f3f'],
                         [0.85, '#f3c'],
                         [0.90, '#f39'],
                         [0.95, '#f36'],
                         [1, '#fff']
                     ]
                 }
             },
             axisTick: {
                 show: true,
                 lineStyle: {
                     color: 'auto',
                     width: 2
                 },
                 length: 20,
                 splitNumber: 5
             },
             splitLine: {
                 show: true,
                 length: 22,
                 lineStyle: {
                     color: 'auto',
                 }
             },
             axisLabel: {
                 show: false
             },
             pointer: { //仪表盘指针
                 show: 0,
                 length: '70%',
                 width: 2
             },
             detail: {
                 borderColor: '#fff',
                 shadowColor: '#fff', //默认透明
                 shadowBlur: 2,
                 offsetCenter: [0, '0%'], // x, y，单位px
                 textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                     color: '#fff',
                     fontSize: 30,
                 },
                 formatter: '{value}'
             },
             data: [{
                 name: "",
                 value: 14
             }]
         },
         {
             name: '中间环形图',
             type: 'pie',
             radius: ['25%', '40%'],
             avoidLabelOverlap: false,
             hoverAnimation: false,
             itemStyle: {
                 normal: {
                     color: '#80ADD2',
                     borderColor: '#3D4268',
                 }
             },
             label: {
                 normal: {
                     show: false,
                     position: 'center',

                 },
                 emphasis: {
                     show: true,
                     textStyle: {
                         fontSize: '30',
                         fontWeight: 'bold'
                     }
                 }
             },
             labelLine: {
                 normal: {
                     show: false
                 }
             },
             data: [
                 25, 25, 25, 25, 25, 25
             ]
         },
         {
             type: 'pie',
             zlevel: 2,
             silent: true,
             radius: ['0%', '65%'],
             hoverAnimation: false,
             // animation:false,
             label: {
                 normal: {
                     show: false
                 },
             },
             labelLine: {
                 normal: {
                     show: false
                 }
             },
             data: []
         },
     ]
 };

 function _pie1() {
     let dataArr = [];
     for (var i = 0; i < 8; i++) {

         dataArr.push({
             name: (i + 1).toString(),
             value: 20,
             itemStyle: {
                 normal: {
                     color: "rgba(88,142,197,0.4)",
                     borderWidth: 0,
                     borderColor: "rgba(0,0,0,0)"
                 }
             }
         })

     }
     return dataArr

 }

 function _pie2() {
     let dataArr = [];
     for (var i = 0; i < 8; i++) {
         if (i % 2 === 0) {
             dataArr.push({
                 name: (i + 1).toString(),
                 value: 25,
                 itemStyle: {
                     normal: {
                         color: "rgba(88,142,197,0.5)",
                         borderWidth: 0,
                         borderColor: "rgba(0,0,0,0)"
                     }
                 }
             })
         } else {
             dataArr.push({
                 name: (i + 1).toString(),
                 value: 20,
                 itemStyle: {
                     normal: {
                         color: "rgba(0,0,0,0)",
                         borderWidth: 0,
                         borderColor: "rgba(0,0,0,0)"
                     }
                 }
             })
         }

     }
     return dataArr

 }

 function _pieData(data) {
     let _data = data;
     let dataArr = [];
     for (var i = 0; i < 5; i++) {
         if (i === 2) {
             let dt = (data[0].unit) ? 25 : (Number(data[0].value));
             dataArr.push({
                 name: (i + 1).toString(),
                 value: dt,
                 itemStyle: {
                     normal: {

                         color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                             offset: 0,
                             color: 'rgb(147,187,216)'
                         }, {
                             offset: 1,
                             color: '#588ec5'
                         }]),
                         borderWidth: 0,
                         borderColor: "rgba(0,0,0,0.4)"

                     }
                 }
             })
         } else {
             let dta = (data[0].unit) ? 25 : (1 - Number(data[0].value)) / 4;
             dataArr.push({
                 name: (i + 1).toString(),
                 value: dta,
                 itemStyle: {
                     normal: {
                         color: "rgba(0,0,0,0)",
                         borderWidth: 0,
                         borderColor: "rgba(0,0,0,0)"
                     }
                 }
             })
         }

     }
     //console.log(dataArr)
     return dataArr
 }