 //var ldata = [{}];
 var w = new Array("日", "一", "二", "三", "四", "五", "六");
 var shiChen = new Array("【子时】夜半", "【丑时】鸡鸣", "【丑时】鸡鸣", "【寅时】平旦", "【寅时】平旦", "【卯时】日出", "【卯时】日出", "【辰时】食时", "【辰时】食时", "【巳时】隅中", "【巳时】隅中", "【午时】日中", "【午时】日中", "【未时】日昳", "【未时】日昳", "【申时】哺时", "【申时】哺时", "【酉时】日入", "【酉时】日入", "【戌时】黄昏", "【戌时】黄昏", "【亥时】人定", "【亥时】人定", "【子时】夜半");
 var sc = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
 var tianGan = ['癸', '甲', '乙', '丙', '丁', '戊', '已', '庚', '辛', '壬'];
 var diZhi = ['亥', '子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌'];
 var shengXiao = ['猪', '鼠 ', '牛 ', '虎 ', '兔 ', '龙 ', '蛇 ', '马 ', '羊 ', '猴 ', '鸡 ', '狗 '];
// 引入农历
 lunarInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, //1900-1909
     0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, //1910-1919
     0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, //1920-1929
     0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, //1930-1939
     0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, //1940-1949
     0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, //1950-1959
     0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, //1960-1969
     0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, //1970-1979
     0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, //1980-1989
     0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, //1990-1999
     0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, //2000-2009
     0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, //2010-2019
     0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, //2020-2029
     0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, //2030-2039
     0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, //2040-2049
     0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, //2050-2059
     0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, //2060-2069
     0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, //2070-2079
     0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, //2080-2089
     0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, //2090-2099
     0x0d520
 ];


 function lYearDays(y) {
     var i, sum = 348;
     for (i = 0x8000; i > 0x8; i >>= 1) {
         sum += (lunarInfo[y - 1900] & i) ? 1 : 0;
     }
     return (sum + leapDays(y));
 };

 function leapMonth(y) {
     return (lunarInfo[y - 1900] & 0xf);
 };

 function leapDays(y) {
     if (leapMonth(y)) {
         return ((lunarInfo[y - 1900] & 0x10000) ? 30 : 29);
     }
     return (0);
 };

 function monthDays(y, m) {
     if (m > 12 || m < 1) {
         return -1
     }
     return ((lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
 };


 function solar2lunar(y, m, d) {
     //年份限定、上限
     if (y < 1900 || y > 2100) {
         return -1; // undefined转换为数字变为NaN
     }
     //公历传参最下限
     if (y == 1900 && m == 1 && d < 31) {
         return -1;
     }
     //未传参  获得当天
     if (!y) {
         var objDate = new Date();
     } else {
         var objDate = new Date(y, parseInt(m) - 1, d)
     }
     var i, leap = 0,
         temp = 0;
     //修正ymd参数
     var y = objDate.getFullYear(),
         m = objDate.getMonth() + 1,
         d = objDate.getDate();
     var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
     for (i = 1900; i < 2101 && offset > 0; i++) {
         temp = lYearDays(i);
         offset -= temp;
     }
     if (offset < 0) {
         offset += temp;
         i--;
     }

     //是否今天
     var isTodayObj = new Date(),
         isToday = false;
     if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
         isToday = true;
     }

     //农历年
     var year = i;
     var leap = leapMonth(i); //闰哪个月
     var isLeap = false;

     //效验闰月
     for (i = 1; i < 13 && offset > 0; i++) {
         //闰月
         if (leap > 0 && i == (leap + 1) && isLeap == false) {
             --i;
             isLeap = true;
             temp = leapDays(year); //计算农历闰月天数
         } else {
             temp = monthDays(year, i); //计算农历普通月天数
         }
         //解除闰月
         if (isLeap == true && i == (leap + 1)) {
             isLeap = false;
         }
         offset -= temp;
     }
     // 闰月导致数组下标重叠取反
     if (offset == 0 && leap > 0 && i == leap + 1) {
         if (isLeap) {
             isLeap = false;
         } else {
             isLeap = true;
             --i;
         }
     }
     if (offset < 0) {
         offset += temp;
         --i;
     }
     //农历月
     var month = i;
     //农历日
     var day = offset + 1;


     return {
         'lYear': year,
         'lMonth': month,
         'lDay': day
     };
 };
//  农历引入end

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

 function roundDatas2(num) {
     var datas = [];
     for (var i = 0; i < num; i++) {
         var x = Math.cos(30 * i * Math.PI / 180);
         var y = Math.sin(30 * i * Math.PI / 180);
         datas.push({
             name: sc[i],
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

 function arrIndex(arr, a) {
     for (var l = 0; l < arr.length; l++) {
         if (arr[l] == a.charAt(1)) {
             return l;
         }
     }
 }

 option = {
     backgroundColor: '#000000',
     title: {
         text: '',
         subtext: '',
         left: 50,
         top: 10,
         backgroundColor: '#ECECFF',
         borderRadius: 8,
         textStyle: {
             color: '#2828FF',
         },
         subtextStyle: {
             color: '#2894FF',
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
             //color: '#102b6a',
             color: '#00CACA'
         },
         data: ['时', '分', '秒', '时辰']
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
                     opacity: 0.1
                 }
             },

             symbol: 'circle',
             symbolSize: 2,
             top: '225',
             left: '300',
             width: '100',
             height: '100',
             data: roundDatas(12),
             links: linkDatas(12)
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
                     opacity: 0.1
                 }
             },

             symbol: 'circle',
             symbolSize: 2,
             top: '168',
             left: '250',
             width: '200',
             height: '200',
             data: roundDatas1(60),
             links: linkDatas(60)
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
                     opacity: 0.1
                 }
             },

             symbol: 'circle',
             symbolSize: 2,
             top: '120',
             left: '200',
             width: '300',
             height: '300',
             data: roundDatas1(60),
             links: linkDatas(60)
         },


         {
             name: '时辰',
             type: 'graph',
             roam: true,
             draggable: true,
             itemStyle: {
                 normal: {
                     color: '#94d6da'
                 }
             },
             label: {
                 normal: {
                     show: true,
                     formatter: '{b}',
                     fontSize: 15,
                     textBorderColor: '#94d6da',
                     textBorderWidth: 1

                 }
             },
             lineStyle: {
                 normal: {
                     color: '#694d9f',
                     curveness: 1,
                     opacity: 0.1
                 }
             },

             symbol: 'circle',
             symbolSize: 2,
             top: '200',
             left: '540',
             width: '100',
             height: '100',
             data: roundDatas2(12),
             links: linkDatas(12)
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
     var en = h;
     if (h > 12) {
         h = h - 12;
     }
     var xh = Math.cos(30 * h * Math.PI / 180);
     var yh = Math.sin(30 * h * Math.PI / 180);
     var en1 = arrIndex(sc, shiChen[en]);
     var lunar = solar2lunar(year, month, day)
     var tG = tianGan[(lunar.lYear - 3) % 10];
     var dZ = diZhi[(lunar.lYear - 3) % 12];
     var sX = shengXiao[(lunar.lYear - 3) % 12];


     for (var j = 0; j < s; j++) {
         var x1 = Math.cos(6 * j * Math.PI / 180);
         var y1 = Math.sin(6 * j * Math.PI / 180);
         option.series[2].data[j] = {
             name: j,
             symbol: 'arrow',
             symbolSize: 1,
             x: y1,
             y: -x1
         };
     }
     for (var j = 59; j > s; j--) {
         var x1 = Math.cos(6 * j * Math.PI / 180);
         var y1 = Math.sin(6 * j * Math.PI / 180);
         option.series[2].data[j] = {
             name: j,
             symbol: 'arrow',
             symbolSize: 5,
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
             symbol: 'arrow',
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
             symbol: 'arrow',
             symbolSize: 1,
             x: y1,
             y: -x1
         };
     } //分


     for (var j = 0; j < h; j++) {
         var x1 = Math.cos(30 * j * Math.PI / 180);
         var y1 = Math.sin(30 * j * Math.PI / 180);
         option.series[0].data[j] = {
             name: j,
             symbol: 'arrow',
             symbolSize: 5,
             x: y1,
             y: -x1
         };
     }
     for (var j = 12; j > h; j--) {
         var x1 = Math.cos(30 * j * Math.PI / 180);
         var y1 = Math.sin(30 * j * Math.PI / 180);
         option.series[0].data[j] = {
             name: j,
             symbol: 'arrow',
             symbolSize: 1,
             x: y1,
             y: -x1
         };
     } //时

     for (var j = 0; j < en1; j++) {
         option.series[3].data[j] = {
             name: sc[j],
             x: Math.sin(30 * j * Math.PI / 180),
             y: -Math.cos(30 * j * Math.PI / 180),
             label: {
                 normal: {
                     show: true,
                     formatter: '{b}',
                     fontSize: 15,
                     textBorderColor: '#94d6da',
                     textBorderWidth: 1

                 }
             }
         }
     } //时辰

     /////////////////////////////////////////////////////////////

     option.series[2].data[s] = {
         name: s,
         //symbolSize: 20,
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
                 fontSize: 18,
                 textBorderColor: '#f173ac',
                 textBorderWidth: 3

             }
         }
     };
     if (s == 0) {
         option.series[2].data[0] = {
             name: '0',
             //symbolSize: 20,
             x: ys,
             y: -xs,
             label: {
                 normal: {
                     show: true,
                     formatter: '0',
                     fontSize: 18,
                     textBorderColor: '#f173ac',
                     textBorderWidth: 3

                 }
             }
         }
     }; //秒

     option.series[1].data[m] = {
         name: m,
         //symbolSize: 25,
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
                 fontSize: 20,
                 textBorderColor: '#2585a6',
                 textBorderWidth: 3

             }
         }
     };
     if (m == 0) {
         option.series[1].data[0] = {
             name: '0',
             //symbolSize: 25,
             x: ym,
             y: -xm,
             label: {
                 normal: {
                     show: true,
                     formatter: '0',
                     fontSize: 20,
                     textBorderColor: '#2585a6',
                     textBorderWidth: 3

                 }
             }
         }
     } //分

     option.series[0].data[h] = {
         name: h,
         //symbolSize: 30,
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
                 fontSize: 28,
                 textBorderColor: '#694d9f',
                 textBorderWidth: 5

             }
         }
     };
     if (h == 0) {
         option.series[0].data[0] = {
             name: '0',
             //symbolSize: 30,
             x: yh,
             y: -xh,
             label: {
                 normal: {
                     show: true,
                     formatter: '0',
                     fontSize: 28,
                     textBorderColor: '#694d9f',
                     textBorderWidth: 5

                 }
             }
         }
     } //时


     option.series[3].data[en1] = {
         name: sc[en1],
         x: Math.sin(30 * en1 * Math.PI / 180),
         y: -Math.cos(30 * en1 * Math.PI / 180),
         label: {
             normal: {
                 show: true,
                 formatter: '{b}',
                 fontSize: 15,
                 textBorderColor: '#f58220',
                 textBorderWidth: 2

             }
         }
     } //时辰

     option.title.text = year + '年' + month + '月' + day + '日';
     option.title.subtext = `农历：${lunar.lYear}、${lunar.lMonth}、 ${lunar.lDay}` + '\n' + '星期' + w[week] + ' ' + shiChen[en] + '\n' + tG + dZ + '年' + '【' + sX + '年】';
     //
     setTimeout(start, 100);

 }

 start();