 var echartData = [{
         name: "已完成",
         data: [36]
     },
     {
         name: "目标",
         data: [80]
     },

 ];

 var option = {
     backgroundColor: '#fff',
     grid: {
         containLabel: true,
         //  left: 20,
         //  right: -20,
         //  top: 0,
         //  bottom: 40,
     },
     tooltip: { //提示
         trigger: "item",
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: "line", // 默认为直线，可选为：'line' | 'shadow'
             label: {
                 show: false
             }
         }
     },
     xAxis: {
         axisLine: {
             show: false,
         },
         axisTick: {
             show: false,
         },
         splitLine: {
             show: false,
         },
         axisLabel: {
             show: false,
         },
     },
     yAxis: {
         data: ["学位建设情况"],
         axisLabel: {
             show: false,
         },
         axisLine: {
             show: false,
         },
         axisTick: {
             show: false,
         },
         splitLine: {
             show: false,
         },
     },
     series: [],
 }

 echartData.forEach((item, index) => {
     option.series.push({
         type: "bar",
         stack: 'sum',
         barWidth: 20,
         name: item.name,
         data: item.data,
         label: {
             normal: {
                 show: true,
                 position: [5, 5],
                 formatter: '{a|' + item.name + '} {b|' + item.data + '} {c|' + "万座" + '}',
                 align: "left",
                 textStyle: {
                     color: "#fff",
                     rich: {
                         a: {
                             fontSize: "12",
                             fontWeight: 500,
                             color: "#fff",
                         },
                         b: {
                             fontSize: "14",
                             fontWeight: 500,
                             color: "#fff",
                         },
                         c: {
                             fontSize: "12",
                             fontWeight: 500,
                             color: "#fff",
                         },
                     },
                 },
             },
         },

     });
     if (index === 0) {
         option.series[index].itemStyle = {
             normal: {
                 barBorderRadius: [0, 10, 10, 0],
                 color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                         offset: 0,
                         color: '#2D8DED'
                     },
                     {
                         offset: 1,
                         color: "#5ED8FB"
                     }
                 ])
             }
         }
     } else if (index === echartData.length - 1) {
         option.series[index].itemStyle = {
             normal: {
                 barBorderRadius: [0, 10, 10, 0],
                 color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                         offset: 0,
                         color: "#8971EC"
                     },
                     {
                         offset: 1,
                         color: "#8971EC"
                     }
                 ])
             }
         }
     } else {
         return;
     }
 });