 let pieData = [{
     'name': '总数量',
     'value': 89
 }]

 var titleArr = [],
     seriesArr = [];

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
     series: [{
         type: 'pie',
         name: '外层细圆环',
         radius: ['36%', '37%'],
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
     }, {
         type: 'pie',
         name: '内层层细圆环',
         radius: ['24%', '25%'],
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
     }],
 }


option.series[2] = 
    // name: pieData[0].name,
    // type: 'pie',
    // clockWise: false,
    // radius: ['28%', '33%'],
    //  itemStyle: {
    //      normal: {
    //          color: new echarts.graphic.LinearGradient(
    //              0, 0, 0, 1,
    //              [{
    //                      offset: 0,
    //                      color: '#0ff'
    //                  },
    //                  {
    //                      offset: 1,
    //                      color: '#5467df'
    //                  }
    //              ]
    //          ),
    //          label: {
    //              show: false
    //          },
    //          labelLine: {
    //              show: false
    //          },
    //      }
    //  },
    //  hoverAnimation: false,
    //  center: ['50%', '45%'],
    //  data: [{
    //      value: pieData[0].value,
    //      label: {
    //          normal: {
    //              formatter: function(params) {
    //                  return params.value;
    //              },
    //              position: 'center',
    //              show: true,
    //              textStyle: {
    //                  fontSize: '25',
    //                  // fontWeight: 'bold',
    //                  color: '#1cc7ff'
    //              }
    //          }
    //      },
    //  }]
    {
         type: 'pie',
         zlevel: 3,
         silent: true,
         radius: ['28%', '33%'],
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
         data: (function(){
             let dataArr = [];
             let total = 100;
             let datevalue = Math.round(pieData[0].value / total);
             for (var i = 0; i < 36; i++) {
                 if (i % 2 === 0) {
                    //  带颜色的圈
                     if (i>20){
                         dataArr.push({
                             name: (i + 1).toString(),
                             value: 2.5,
                             itemStyle: {
                                 normal: {
                                     color: "#676a6c",
                                     borderWidth: 6,
                                     borderColor: "#676a6c",
                                     borderRadius:[12,12,12,12]
                                 },
                             }
                         })
                     }else{
                         dataArr.push({
                             name: (i + 1).toString(),
                             value: 2.5,
                             itemStyle: {
                                 normal: {
                                     color: "red",
                                     borderWidth: 6,
                                     borderColor: "red",
                                     borderRadius:[12,12,12,12]
                                 },
                                //  barBorderRadius:[1,1,1,1]
                             }
                         })
                     }
                 } else {
                     dataArr.push({
                         name: (i + 1).toString(),
                         value: 3,
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
         })()
     }




