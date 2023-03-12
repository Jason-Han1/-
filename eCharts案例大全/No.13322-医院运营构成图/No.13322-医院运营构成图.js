 var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
 var bgColor = '#FFF';

 var itemStyle = {
     star5: {
         color: colors[0]
     },
     star4: {
         color: colors[1]
     },
     star3: {
         color: colors[2]
     },
     star2: {
         color: colors[3]
     }
 };

 var data = [{
     name: '门诊',
     itemStyle: {
         normal: {
             color: colors[1]
         }
     },
     children: [{
         name: '五官科',
         children: [{
             name: '5☆',
             children: [{
                 name: '眼科'
             }, {
                 name: '鼻科'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: '耳科'
             }]
         }, {
             name: '3☆',
             children: [{
                 name: '口腔科'
             }]
         }]
     }, {
         name: '内科',
         children: [{
             name: '5☆',
             children: [{
                 name: '心脏内科'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: '肺科'
             }, {
                 name: '肝科'
             }]
         }, {
             name: '3☆',
             children: [{
                 name: '肠胃科'
             }]
         }]
     }]
 }, {
     name: '住院',
     itemStyle: {
         color: colors[2]
     },
     children: [{
         name: '骨科',
         children: [{
             name: '5☆',
             children: [{
                 name: '骨折'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: '骨质酥松'
             }, {
                 name: '粉碎性骨折'
             }]
         }, {
             name: '3☆',
             children: [{
                 name: '截肢'
             }]
         }]
     }, {
         name: '外科',
         children: [{
             name: '5☆',
             children: [{
                 name: '金创处理'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: '断指再造'
             }, {
                 name: '外部肿瘤处理'
             }, {
                 name: '感染处理',
             }]
         }, {
             name: '3☆',
             children: [{
                 name: '断指缝合处理'
             }]
         }]
     }, {
         name: '心内科',
         children: [{
             name: '5☆',
             children: [{
                 name: '冠心病'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: '中风'
             }, {
                 name: '脑血栓'
             }]
         }, {
             name: '3☆',
         }, {
             name: '2☆',
             children: [{
                 name: '动脉粥样硬化'
             }]
         }]
     }, {
         name: '胸外科',
         children: [{
             name: '4☆',
             children: [{
                 name: '胸板结'
             }, {
                 name: '胸腔手术'
             }, {
                 name: '开胸术'
             }]
         }]
     }, {
         name: '肛肠科',
         children: [{
             name: '5☆',
             children: [{
                 name: '痔疮'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: '肛瘘'
             }, {
                 name: '脱肛'
             }]
         }, {
             name: '3☆',
             children: [{
                 name: '肛裂'
             }]
         }]
     }, {
         name: '牙科',
         children: [{
             name: '4☆',
             children: [{
                 name: '拔智齿'
             }]
         }]
     }, {
         name: '美容科',
         children: [{
             name: '5☆',
             children: [{
                 name: '整形'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: '祛痘'
             }]
         }]
     }]
 }];

 for (var j = 0; j < data.length; ++j) {
     var level1 = data[j].children;
     for (var i = 0; i < level1.length; ++i) {
         var block = level1[i].children;
         var bookScore = [];
         var bookScoreId;
         for (var star = 0; star < block.length; ++star) {
             var style = (function(name) {
                 switch (name) {
                     case '5☆':
                         bookScoreId = 0;
                         return itemStyle.star5;
                     case '4☆':
                         bookScoreId = 1;
                         return itemStyle.star4;
                     case '3☆':
                         bookScoreId = 2;
                         return itemStyle.star3;
                     case '2☆':
                         bookScoreId = 3;
                         return itemStyle.star2;
                 }
             })(block[star].name);

             block[star].label = {
                 color: style.color,
                 downplay: {
                     opacity: 0.5
                 }
             };

             if (block[star].children) {
                 style = {
                     opacity: 1,
                     color: style.color
                 };
                 block[star].children.forEach(function(book) {
                     book.value = 1;
                     book.itemStyle = style;

                     book.label = {
                         color: style.color
                     };

                     var value = 1;
                     if (bookScoreId === 0 || bookScoreId === 3) {
                         value = 5;
                     }

                     if (bookScore[bookScoreId]) {
                         bookScore[bookScoreId].value += value;
                     } else {
                         bookScore[bookScoreId] = {
                             color: colors[bookScoreId],
                             value: value
                         };
                     }
                 });
             }
         }

         level1[i].itemStyle = {
             color: data[j].itemStyle.color
         };
     }
 }

 option = {
     backgroundColor: bgColor,
     color: colors,
     series: [{
         type: 'sunburst',
         center: ['50%', '48%'],
         data: data,
         sort: function(a, b) {
             if (a.depth === 1) {
                 return b.getValue() - a.getValue();
             } else {
                 return a.dataIndex - b.dataIndex;
             }
         },
         label: {
             rotate: 'radial',
             color: bgColor
         },
         itemStyle: {
             borderColor: bgColor,
             borderWidth: 2
         },
         levels: [{}, {
             r0: 0,
             r: 40,
             label: {
                 rotate: 0
             }
         }, {
             r0: 40,
             r: 105
         }, {
             r0: 115,
             r: 140,
             itemStyle: {
                 shadowBlur: 2,
                 shadowColor: colors[2],
                 color: 'transparent'
             },
             label: {
                 rotate: 'tangential',
                 fontSize: 10,
                 color: colors[0]
             }
         }, {
             r0: 140,
             r: 145,
             itemStyle: {
                 //     shadowBlur: 80,
                 shadowColor: colors[0]
             },
             label: {
                 position: 'outside',
                 //        textShadowBlur: 5,
                 textShadowColor: '#333',
             },
             downplay: {
                 label: {
                     opacity: 1
                 }
             }
         }]
     }]
 };