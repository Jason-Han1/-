 var option = {
     tooltip: {
         trigger: "axis",
         axisPointer: {
             // 坐标轴指示器，坐标轴触发有效
             type: "line", // 默认为直线，可选为：'line' | 'shadow'
         },
         textStyle: {
             align: "left",
         },
         formatter: "{b} : {c}人"
         //  formatter: function(item) {
         //      return (
         //          item[0].name + "：" + that.formatNumberRgx(item[0].value) + "人"
         //      );
         //  },
     },

     grid: {
         top: "15%",
         left: "3%",
         right: "4%",
         bottom: "3%",
         containLabel: true,
     },
     xAxis: [{
         // type: "category",s
         axisTick: {
             //x轴刻度线
             show: false,
         },
         axisLine: {
             lineStyle: {
                 color: "#E2E2E2", // 颜色
             },
         },
         interval: 0,
         axisLabel: {
             textStyle: {
                 color: "#737373",
                 fontSize: 12,
             },
             //  rotate: 40,
         },
         data: [2014, 2015, 2016, 2017, 2018, 2019],
     }, ],
     yAxis: [{
         type: "value",
         name: "个",
         axisTick: {
             //y轴刻度线
             show: false,
         },
         nameTextStyle: {
             color: "#252525",
             fontSize: 12,
             padding: [0, 0, 0, -50],
         },
         axisLine: {
             lineStyle: {
                 color: "#E2E2E2", // 颜色
             },
         },
         axisLabel: {
             interval: 0,
             textStyle: {
                 color: "#737373",
                 fontSize: 12,
             },
         },
     }, ],
     series: [{
         type: "bar",
         barWidth: 12,
         itemStyle: {
             label: {
                 textStyle: {
                     color: "#800080",
                 },
             },
             normal: {
                 //柱形图圆角，初始化效果
                 barBorderRadius: [10, 10, 0, 0],
                 color: "#62AAFD",
             },
         },
         data: [545, 545, 989, 549, 98, 568, 666, 784, 556],
     }, ],
 };