 var option = {
     tooltip: {
         trigger: 'axis',
         backgroundColor: "rgba(255,255,255,0.1)",
         axisPointer: {
             type: 'shadow',
             lineStyle: {
                 color: 'rgba(255,255,255,0.1)'
             }
         },
         textStyle: {
             fontSize: '10',
         },
         formatter: "{b}: {c}"
     },
     grid: {
         bottom: '4%',
     },
     series: [{
             name: '访问来源',
             type: 'pie',
             selectedMode: 'single',
             // radius: ['0', '61%'],  
             radius: ['0', '64%'],

             label: {
                 normal: {
                     position: 'inner'
                 }
             },
             labelLine: {
                 normal: {
                     show: false
                 }
             },
             data: [{
                     value: 2053,
                     name: '固网链接',
                     itemStyle: {
                         color: "#188f91"
                     },
                     label: {
                         color: "rgba(255,255,255,.45)",
                         fontSize: 16,
                         formatter: [
                             '{a|固网链接}',
                             '{b|  2053万}',
                         ].join('\n'),
                         rich: {
                             a: {
                                 color: "#fef1e8",
                                 fontSize: 10,
                                 lineHeight: 12
                             },
                             b: {
                                 color: "#fdf9f1",
                                 fontSize: 20,
                                 lineHeight: 30,
                                 align: 'right',

                                 //   fontWeight:'bold',
                             },
                         }
                     }
                 },
                 {
                     value: 9380,
                     name: 'LTE链接',
                     label: {
                         color: "rgba(255,255,255,.45)",
                         fontSize: 16,
                         formatter: [
                             '{a|LTE 链接}',
                             '{b|9380万}',
                         ].join('\n'),
                         rich: {
                             a: {
                                 color: "#fef1e8",
                                 fontSize: 10,
                                 lineHeight: 30
                             },
                             b: {
                                 color: "#fdf9f1",
                                 fontSize: 20,
                                 lineHeight: 10,
                                 align: 'center'
                                 //   fontWeight:'bold',
                             },
                         }
                     },
                     itemStyle: {
                         normal: {
                             color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
                                     offset: 0,
                                     color: '#25d3d7'
                                 },
                                 {
                                     offset: .5,
                                     color: '#23c5ca'
                                 },
                                 {
                                     offset: 1,
                                     color: '#1db1b2'
                                 }
                             ], false),
                             label: {
                                 show: false,

                             },
                             labelLine: {
                                 show: false
                             }
                         },
                     },
                 },
             ]
         },
         {
             // name:'访问来源',
             type: 'pie',
             //  radius: ['61%', '76%'],
             radius: ['64%', '79%'],
             label: {
                 normal: {
                     formatter: '{b|{b}}\n{hr|}\n {c}万/{d}%',
                     rich: {

                         b: {
                             fontSize: 14,
                             lineHeight: 20,
                             color: '#ccc',

                         },

                         c: {
                             fontSize: 80,
                             color: '#fff',
                         },


                     }
                 }
             },
             labelLine: {
                 // lineStyle: {
                 //     color: 'rgba(255, 255, 255, 0.2)'
                 //             },
                 normal: {
                     smooth: 0.2,
                     length: 30,
                     length2: 30
                 }
             },
             data: [{
                     value: 382,
                     name: '固网IPv6活跃链接数/占比',
                     itemStyle: {
                         color: "#1fafb3"
                     },
                     label: {
                         color: "rgba(255,255,255,.45)",
                         fontSize: 16,

                         formatter: [
                             '{a|固网IPv6活跃链接数/占比}',
                             '{b|382万 / }{c|18.6%}'
                         ].join('\n'),
                         rich: {
                             a: {
                                 color: "#999999",
                                 fontSize: 12,
                                 lineHeight: 30
                             },
                             b: {
                                 color: "#fdf9f1",
                                 fontSize: 20,
                                 lineHeight: 15,
                                 align: 'center'
                                 //   fontWeight:'bold',
                             },
                             c: {
                                 color: "#fdf9f1",
                                 fontSize: 20,
                                 lineHeight: 0,
                                 align: 'center'
                                 //   fontWeight:'bold',
                             },

                         }

                     },
                     labelLine: {
                         normal: {
                             smooth: 0.2,
                             length: 20,
                             length2: 20,
                         }
                     },
                 },
                 {
                     value: 1671,
                     name: '',
                     itemStyle: {
                         color: "transparent"
                     }
                 },
                 {
                     value: 4095,
                     name: 'LTE IPv6活跃链接数/占比',
                     itemStyle: {
                         color: "#26d4d8"
                     },
                     label: {
                         color: "rgba(255,255,255,.45)",
                         fontSize: 16,
                         formatter: [
                             '{a|LTE IPv6活跃链接数/占比}',
                             '{b|4095万 / }{c|43.7%}'
                         ].join('\n'),
                         rich: {
                             a: {
                                 color: "#999999",
                                 fontSize: 12,
                                 lineHeight: 40
                             },
                             b: {
                                 color: "#fdf9f1",
                                 fontSize: 20,
                                 lineHeight: 5,
                                 align: 'center'
                                 //   fontWeight:'bold',
                             },
                             c: {
                                 color: "#fdf9f1",
                                 fontSize: 20,
                                 lineHeight: 5,
                                 align: 'center'
                                 //   fontWeight:'bold',
                             },
                         }
                     }
                 },
                 {
                     value: 5285,
                     name: '',
                     itemStyle: {
                         color: "transparent"
                     }
                 },
             ]
         }
     ]
 };