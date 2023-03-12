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
     name: '电视剧',
     itemStyle: {
         normal: {
             color: colors[1]
         }
     },
     children: [{
         name: '现代',
         children: [{
             name: '5☆',
             children: [{
                 name: '大江大河'
             }, {
                 name: '疯人院'
             }, {
                 name: '天坑鹰猎'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: 'SCI谜案集'
             }, {
                 name: '古董局中局'
             }, {
                 name: '乡村爱情协奏曲'
             }]
         }, {
             name: '3☆',
             children: [{
                 name: '上海女子图鉴'
             }]
         }]
     }, {
         name: '古装',
         children: [{
             name: '5☆',
             children: [{
                 name: '天盛长歌'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: '小戏骨：水浒传'
             }, {
                 name: '香蜜沉沉烬如霜'
             }]
         }, {
             name: '3☆',
             children: [{
                 name: '知否知否应是绿肥红瘦'
             }]
         }]
     }]
 }, {
     name: '电影',
     itemStyle: {
         color: colors[2]
     },
     children: [{
         name: '喜剧',
         children: [{
             name: '5☆',
             children: [{
                 name: '我不是药神'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: '无名之辈'
             }, {
                 name: '阿浪的远方'
             }]
         }, {
             name: '3☆',
             children: [{
                 name: '一出好戏'
             }]
         }]
     }, {
         name: '剧情',
         children: [{
             name: '5☆',
             children: [{
                 name: '无双'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: '大象席地而坐'
             }, {
                 name: '风中有朵雨做的云'
             }, {
                 name: '过春天',
             }]
         }, {
             name: '3☆',
             children: [{
                 name: '无问西东'
             }]
         }]
     }, {
         name: '爱情',
         children: [{
             name: '5☆',
             children: [{
                 name: '江湖儿女'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: '地球最后的夜晚'
             }, {
                 name: '你好之华'
             }]
         }, {
             name: '3☆',
         }, {
             name: '2☆',
             children: [{
                 name: '后来的我们'
             }]
         }]
     }, {
         name: '动作',
         children: [{
             name: '4☆',
             children: [{
                 name: '红海行动'
             }, {
                 name: '影'
             }, {
                 name: '动物世界'
             }]
         }]
     }, {
         name: '动画',
         children: [{
             name: '5☆',
             children: [{
                 name: '夜思'
             }]
         }, {
             name: '4☆',
             children: [{
                 name: '切尔诺贝利之春'
             }, {
                 name: '女他'
             }]
         }, {
             name: '3☆',
             children: [{
                 name: '风雨咒'
             }]
         }]
     }, {
         name: '惊悚',
         children: [{
             name: '4☆',
             children: [{
                 name: '灵魂摆渡·黄泉'
             }]
         }]
     }, {
         name: '武侠',
         children: [{
             name: '3☆',
             children: [{
                 name: '夺命剑之风云再起'
             }]
         }, {
             name: '2☆',
             children: [{
                 name: '狄仁杰之四大天王'
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