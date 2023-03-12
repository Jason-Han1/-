 var presents = ['食品安全', '宗教活动', '油烟污染', '再就业培训', '家庭暴力', ]

 var data = [];
 for (var i = 0; i < presents.length; ++i) {
     data.push({
         name: presents[i],
         value: (presents.length - i) * 20,
         textStyle: {
             normal: {},
             emphasis: {}
         }
     });
 }

 myChart.setOption({
     series: [{
         type: 'wordCloud',
        //  gridSize: 1,
        //  sizeRange: [12, 40], //最小文字——最大文字
        //  rotationRange: [0, 90], //旋转角度区间
        //  rotationStep: 90, //旋转角度间隔
         //  maskImage: maskImage, //遮罩图片
        //  width: 500, //遮罩图片宽度
        //  height: 500, //遮罩图片高度
         left: 'center',
         top: 'center',
         data: data,
        //  gridSize: 10, //字符间距
         textStyle: {
             normal: {
                 // Color can be a callback function or a color string
                 color: function() {
                     // Random color
                     return 'rgb(' + [
                         Math.round(Math.random() * 160),
                         Math.round(Math.random() * 160),
                         Math.round(Math.random() * 160)
                     ].join(',') + ')';
                 }
             },
             emphasis: {
                 shadowBlur: 10,
                 shadowColor: '#333'
             }
         },
     }],
 });

 /*http://data-visual.cn/datav/src/js/echarts/extension/echarts-wordcloud.min.js 使用这个脚本才可定义字符颜色*/
 /*http://echarts.baidu.com/christmas/echarts-wordcloud.min.js 无法定义字符颜色*/