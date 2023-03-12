 var ldata = [{}];
 var w = new Array("日", "一", "二", "三", "四", "五", "六");

 function roundDatas(num) {
     var datas = [];
     for (var i = 0; i < num; i++) {
         var x = Math.cos(30 * i * Math.PI / 180);
         var y = Math.sin(30 * i * Math.PI / 180);
         datas.push({
             name: i,
             x: y,
             y: -x
         });
     }
     return datas;
 }


 function roundDatas1(num) {
     var datas = [];
     for (var i = 0; i < num; i++) {
         var x = Math.cos(6 * i * Math.PI / 180);
         var y = Math.sin(6 * i * Math.PI / 180);
         datas.push({
             name: i,
             x: y,
             y: -x
         });
     }
     return datas;
 }

 function linkDatas(num) {
     var ldatas = [];
     for (var i = 0; i < num; i++) {
         ldatas.push({
             source: i,
             target: i + 1
         });
     }
     ldatas.push({
         source: (i - 1),
         target: 0
     });
     return ldatas;
 }


 option = {
     title: {
         text: '',
         subtext: '',
         left:500,
         top: 100,
         backgroundColor: '#FFFAFA',
         borderRadius: 8,
         textStyle: {
             color: '#102b6a',
         },
         subtextStyle: {
             color: '#102b6a',
         }
     },

     legend: {
         x: '280',
         top: '10%',
         itemGap: 20,
         borderColor: '#6495ED',
         borderRadius: [5, 5, 5, 5],
         shadowColor: 'rgba(0, 245, 255, 0.8)',
         shadowBlur: 10,
         shadowOffsetX: 8,
         shadowOffsetY: -6,
         borderWidth: 1,
         selectedMode: false,
         textStyle: {
             color: '#102b6a',
         },
         data: ['时', '分', '秒']
     },
     series: [

         {
             name: '时',
             type: 'graph',
             roam: true,
             draggable: true,
             itemStyle: {
                 normal: {
                     color: '#694d9f'
                 }
             },
             lineStyle: {
                 normal: {
                     color: '#694d9f',
                     curveness: 1,
                     opacity: 0.2
                 }
             },

             symbol: 'circle',
             symbolSize: 8,
             top: '225',
             left: '300',
             width: '100',
             height: '100',
             data: roundDatas(12),
             //links: linkDatas(12)
         },

         {
             name: '分',
             type: 'graph',
             roam: true,
             itemStyle: {
                 normal: {
                     color: '#2585a6'
                 }
             },
             lineStyle: {
                 normal: {
                     color: '#2585a6',
                     curveness: 1,
                     opacity: 0.2
                 }
             },

             symbol: 'circle',
             symbolSize: 5,
             top: '168',
             left: '250',
             width: '200',
             height: '200',
             data: roundDatas1(60),
             //links: linkDatas(60)
         }, {
             name: '秒',
             type: 'graph',
             roam: true,
             itemStyle: {
                 normal: {
                     color: '#f173ac'
                 }
             },
             lineStyle: {
                 normal: {
                     color: '#f173ac',
                     curveness: 1,
                     opacity: 0.2
                 }
             },

             symbol: 'circle',
             symbolSize: 3,
             top: '120',
             left: '200',
             width: '300',
             height: '300',
             data: roundDatas1(60),
             //links: linkDatas(60)
         },


     ]
 };


 function start() {
     myChart.setOption(option);
     var dt = new Date();
     var year = dt.getFullYear();
     var month = dt.getMonth() + 1;
     var week = dt.getDay();
     var day = dt.getDate();
     var h = dt.getHours();
     var m = dt.getMinutes();
     var s = dt.getSeconds();
     var xs = Math.cos(6 * s * Math.PI / 180);
     var ys = Math.sin(6 * s * Math.PI / 180);
     var xm = Math.cos(6 * m * Math.PI / 180);
     var ym = Math.sin(6 * m * Math.PI / 180);
     if (h > 12) {
         h = h - 12;
     }
     var xh = Math.cos(30 * h * Math.PI / 180);
     var yh = Math.sin(30 * h * Math.PI / 180);


     for (var j = 0; j < s; j++) {
         var x1 = Math.cos(6 * j * Math.PI / 180);
         var y1 = Math.sin(6 * j * Math.PI / 180);
         option.series[2].data[j] = {
             name: j,
             symbolSize: 3,
             x: y1,
             y: -x1
         };
     }
     for (var j = 59; j > s; j--) {
         var x1 = Math.cos(6 * j * Math.PI / 180);
         var y1 = Math.sin(6 * j * Math.PI / 180);
         option.series[2].data[j] = {
             name: j,
             symbolSize: 3,
             x: y1,
             y: -x1
         };
     }
     //秒


     for (var j = 0; j < m; j++) {
         var x1 = Math.cos(6 * j * Math.PI / 180);
         var y1 = Math.sin(6 * j * Math.PI / 180);
         option.series[1].data[j] = {
             name: j,
             symbolSize: 5,
             x: y1,
             y: -x1
         };
     }
     for (var j = 59; j > m; j--) {
         var x1 = Math.cos(6 * j * Math.PI / 180);
         var y1 = Math.sin(6 * j * Math.PI / 180);
         option.series[1].data[j] = {
             name: j,
             symbolSize: 5,
             x: y1,
             y: -x1
         };
     } //分


     for (var j = 0; j < h; j++) {
         var x1 = Math.cos(30 * j * Math.PI / 180);
         var y1 = Math.sin(30 * j * Math.PI / 180);
         option.series[0].data[j] = {
             name: j,
             symbolSize: 8,
             x: y1,
             y: -x1
         };
     }
     for (var j = 12; j > h; j--) {
         var x1 = Math.cos(30 * j * Math.PI / 180);
         var y1 = Math.sin(30 * j * Math.PI / 180);
         option.series[0].data[j] = {
             name: j,
             symbolSize: 8,
             x: y1,
             y: -x1
         };
     } //时


     /////////////////////////////////////////////////////////////

     option.series[2].data[s] = {
         name: s,
         symbolSize: 20,
         x: ys,
         y: -xs,
         itemStyle: {
             normal: {
                 color: '#f173ac'
             }
         },
         label: {
             normal: {
                 show: true,
                 formatter: '{b}',

             }
         }
     };
     if (s == 0) {
         option.series[2].data[0] = {
             name: '0',
             symbolSize: 20,
             x: ys,
             y: -xs,
             label: {
                 normal: {
                     show: true,
                     formatter: '0',

                 }
             }
         }
     }; //秒

     option.series[1].data[m] = {
         name: m,
         symbolSize: 25,
         x: ym,
         y: -xm,
         itemStyle: {
             normal: {
                 color: '#2585a6'
             }
         },
         label: {
             normal: {
                 show: true,
                 formatter: '{b}',

             }
         }
     };
     if (m == 0) {
         option.series[1].data[0] = {
             name: '0',
             symbolSize: 25,
             x: ym,
             y: -xm,
             label: {
                 normal: {
                     show: true,
                     formatter: '0',

                 }
             }
         }
     } //分

     option.series[0].data[h] = {
         name: h,
         symbolSize: 30,
         x: yh,
         y: -xh,
         itemStyle: {
             normal: {
                 color: '#694d9f'
             }
         },
         label: {
             normal: {
                 show: true,
                 formatter: '{b}',

             }
         }
     };
     if (h == 0) {
         option.series[0].data[0] = {
             name: '0',
             symbolSize: 30,
             x: yh,
             y: -xh,
             label: {
                 normal: {
                     show: true,
                     formatter: '0',

                 }
             }
         }
     } //时
     option.title.text = year + '年' + month + '月' + day + '日';
     option.title.subtext = '星期' + w[week];

     setTimeout(start, 100);

 }

 start();