 var dataMax = [{
         name: '易用性',
         max: 100
     },
     {
         name: '功能',
         max: 100
     },
     {
         name: '拍照',
         max: 100
     },
     {
         name: '跑分',
         max: 100
     },
     {
         name: '续航',
         max: 100
     }
 ]
 var option = {

     color: ["#3BB8FF", "#7460EE"],
     tooltip: {
         show: true,
     },
     radar: {
         splitNumber: 15, // 圈数
         radius: '70%',
         center: ["50%", "50%"], // 中心点

         indicator: dataMax, // 配置各个维度的最大值
         shape: 'polygon', // 配置雷达图最外层的图形 circle polygon
         //  axisLine: {
         //     lineStyle: {
         //       color: "transparent",
         //     },
         //   },
         splitLine: {
             lineStyle: {
                 color: "#ccc",
                 width: 1,
                 type: "dotted",
             },
         },
         splitArea: {
             areaStyle: {
                 color: "transparent",
             },
         },
     },
     series: [{
         type: 'radar', // radar 此图表时一个雷达图
         //  symbolSize: 20,
         label: { // 设置标签的样式
             show: true // 显示数值
         },
         lineStyle: {

             width: 2
         },
         areaStyle: {
             normal: {
                 shadowBlur: 13,
                 shadowColor: 'rgba(0,0,0,.2)',
                 shadowOffsetX: 0,
                 shadowOffsetY: 10,
                 opacity: '0.2'
             }
         }, // 将每一个产品的雷达图形成阴影的面积
         data: [{
                 name: '华为手机1',
                 value: [80, 90, 80, 82, 90]
             },
             {
                 name: '中兴手机1',
                 value: [70, 82, 75, 70, 78]
             }
         ]
     }]
 }