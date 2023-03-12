 var data = [{
     value: 20,
     name: "未分析患者",
     itemStyle: {
         //柱形图圆角，初始化效果
         barBorderRadius: [50, 50, 0, 0],
         //color: "#66a0ee"
         shadowColor: '#00A0FF', //阴影颜色
         shadowBlur: 10 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
     }
 }, {
     value: 10,
     name: "已分析患者",
     itemStyle: {
         //柱形图圆角，初始化效果
         barBorderRadius: [50, 50, 0, 0],
         //color: "#66a0ee"
         shadowColor: '#0046B9', //阴影颜色
         shadowBlur: 10 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
     }
 }];
 option = {
     backgroundColor: "#22252D",
     legend: {
         show: true,
         orient: 'vertical',
         x: '70%',
         y: 'center',
         align: 'left',
         icon: "circle",
         borderRadius: 9,
         padding: [0, 0, 0, 0],
         itemWidth: 18,
         itemHeight: 18,
         selectedMode:false,
         textStyle: {
             color: '#666666',
             fontWeight: 'normal',
             rich: {
                 name: {
                     fontSize: 14,
                     padding: [0, 0, 35, 0]
                 },
                 number: {
                     fontSize: 24,
                     padding: [0, 0, 10, 0]
                 }

             }
         },
         formatter: function(name) {
             var resObj = {};
             for (var i = 0; i < data.length; i++) {
                 resObj[data[i].name] = data[i];
             }

             return `{name|${name}}\n{number|${resObj[name].value}名}`;
         }

     },
     title: {
         textAlign: 'center',
         text: "共添加\n{number|800000}\n名",
         x: '35%',
         top: 'center', //top待调整
         textStyle: {
             color: '#999999',
             fontSize: 16,
             rich: {
                 number: {

                     height: 60,
                     fontSize: 26,
                     fontWeight: "bold"
                 }

             }
         },
         itemGap: -4 //主副标题间距
     },
     series: [{
         type: 'pie',
         selectedMode: false,
         radius: ['60%', '70%'],
         center: ['35%', '50%'],
         label: {
             normal: {
                 show: false,
                 position: 'outside',
                 textStyle: {
                     fontSize: '18',
                     color: '#999999'
                 },
             },
             emphasis: {
                 show: true
             }
         },
         labelLine: {
             normal: {
                 show: false,
                 length: 5
             }
         },
         data: data,
         color: ['#00A0FF', '#0046B9'],
         silent: true
     }]
 };