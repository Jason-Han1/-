var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
 var bgColor = '#2E2733';

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
     name: '动物',
     itemStyle: {
         normal: {
             color: colors[1]
         }
     },
     children: [{
         name: '部分入药',
         children: [{
             name: '5☆',
             children: [{
                 name: '鹿角'
             }, {
                 name: '蟾酥'
             }, {
                 name: '麝香'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: '牛黄'
             }, {
                 name: '蚕沙'
             }, {
                 name: '五灵脂'
             }]
         }, {
             name: '3☆',
             children: [{
                 name: '阿胶'
             }]
         }]
     }, {
         name: '全体入药',
         children: [{
             name: '5☆',
             children: [{
                 name: '全蝎'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: '地龙'
             }, {
                 name: '蜈蚣'
             }]
         }, {
             name: '3☆',
             children: [{
                 name: '水蛭'
             }]
         }]
     }]
 }, {
     name: '植物',
     itemStyle: {
         color: colors[2]
     },
     children: [{
         name: '清热药',
         children: [{
             name: '5☆',
             children: [{
                 name: '淡竹叶'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: '决明子'
             }, {
                 name: '天花粉'
             }]
         }, {
             name: '3☆',
             children: [{
                 name: '栀子'
             }]
         }]
     }, {
         name: '温里药',
         children: [{
             name: '5☆',
             children: [{
                 name: '干姜'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: '肉桂'
             }, {
                 name: '小茴香'
             }, {
                 name: '丁香',
             }]
         }, {
             name: '3☆',
             children: [{
                 name: '花椒'
             }]
         }]
     }, {
         name: '消食药',
         children: [{
             name: '5☆',
             children: [{
                 name: '山楂'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: '鸡内金'
             }, {
                 name: '麦芽'
             }]
         }, {
             name: '3☆',
         }, {
             name: '2☆',
             children: [{
                 name: '菜藤子'
             }]
         }]
     }, {
         name: '驱虫药',
         children: [{
             name: '4☆',
             children: [{
                 name: '使君子'
             }, {
                 name: '南瓜子'
             }, {
                 name: '苦赖皮'
             }]
         }]
     }, {
         name: '止血药',
         children: [{
             name: '5☆',
             children: [{
                 name: '地榆'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: '侧柏叶'
             }, {
                 name: '槐花'
             }]
         }, {
             name: '3☆',
             children: [{
                 name: '大蓟小蓟'
             }]
         }]
     }, {
         name: '安神药',
         children: [{
             name: '4☆',
             children: [{
                 name: '朱砂'
             }]
         }]
     }, {
         name: '补气药',
         children: [{
             name: '3☆',
             children: [{
                 name: '人参'
             }]
         }, {
             name: '2☆',
             children: [{
                 name: '西洋参'
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
                 shadowBlur: 80,
                 shadowColor: colors[0]
             },
             label: {
                 position: 'outside',
                 textShadowBlur: 5,
                 textShadowColor: '#333',
             },
             downplay: {
                 label: {
                     opacity: 0.5
                 }
             }
         }]
     }]
 };