 let pieData = [{
     'name': '总数量',
     'value': 89
 }]

function getDataArr(num){
     let dataArr = [];
     for (var i = 0; i < num; i++) {
         if (i % 2 === 0) {
             dataArr.push({
                 name: (i + 1).toString(),
                 value: 1,
                 itemStyle: {
                     normal: {
                         color: "#676a6c",
                         borderWidth: 1,
                         borderColor: "#676a6c"
                     }
                 }
             })
         } else {
             dataArr.push({
                 name: (i + 1).toString(),
                 value: 2,
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
 var seriesArr = [];

 option = {
     grid: {
         left: '5%',
         right: '2%',
         bottom: '0%',
         top: '0%',
         containLabel: true
     },
     backgroundColor:'black',
     title: {
         text: pieData[0].name,
         left: '50%',
         top: '68%',
         textAlign: 'center',
         textStyle: {
             fontWeight: 'normal',
             fontSize: '20',
             color: 'white',
             textAlign: 'center',
         },
     },
     series: [
         {
         type: 'pie',
         name: '外层细圆环',
         radius: ['40%', '42%'],
         center: ['50%', '45%'],
         hoverAnimation: false,
         clockWise: false,
         itemStyle: {
             normal: {
                 color: '#6e7175'
             }
         },
         label: {
             show: false
         },
         data: [100]
     },
     {
         type: 'pie',
         zlevel: 3,
         silent: true,
         radius: ['17.5%', '18%'],
         center: ['50%', '45%'],
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
         data: getDataArr(70)
     },
     {
         type: 'pie',
         zlevel: 3,
         silent: true,
         radius: ['25.5%', '26%'],
         center: ['50%', '45%'],
         clockWise: false,
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
         data: getDataArr(100)
     },
     {
         type: 'pie',
         zlevel: 3,
         silent: true,
         radius: ['33.5%', '34%'],
         center: ['50%', '45%'],
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
         data: getDataArr(150)
     },
     ],
 }


option.series[5] = {
    name: pieData[0].name,
    type: 'pie',
    clockWise: false,
    radius: ['39%', '43%'],
     itemStyle: {
         normal: {
             color: new echarts.graphic.LinearGradient(
                 0, 0, 0, 1,
                 [{
                         offset: 0,
                         color: '#0ff'
                     },
                     {
                         offset: 1,
                         color: '#5467df'
                     }
                 ]
             ),
             label: {
                 show: false
             },
             labelLine: {
                 show: false
             },
         }
     },
     hoverAnimation: false,
     center: ['50%', '45%'],
     data: [{
         value: pieData[0].value,
         label: {
             normal: {
                 formatter: function(params) {
                     return params.value;
                 },
                 position: 'center',
                 show: true,
                 textStyle: {
                     fontSize: '25',
                     // fontWeight: 'bold',
                     color: '#1cc7ff'
                 }
             }
         },
     },{
        value: 100 - pieData[0].value,
        name: 'invisible',
        itemStyle: {
            normal: {
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        }
    }]
 }





