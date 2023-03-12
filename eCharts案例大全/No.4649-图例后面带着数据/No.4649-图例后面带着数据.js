 var chartName = ['体温超过37.3摄氏度：', '中高风险地区旅行史：', '中高风险地区旅行史，且体温超过37.3摄氏度：'];
 var chartData = [7001, 5490.32, 1092.53]
 var legendName = []
 var data = []
 for (var i = 0; i < chartData.length; i++) {
     var c = {
         value: chartData[i],
         name: chartName[i] + chartData[i] + '人'
     }
     data[i] = c;
     legendName[i] = chartName[i] + chartData[i] + '人';
 }
 rich = {
     white: {
         //百分数样式
         color: "#252525",
         fontSize: 12,
         align: "center",
         padding: [5, 0],
     },
     yt: {
         color: "#252525",
         fontSize: 12,
     },
 };
 var seriesObj = [{
     name: "",
     type: "pie",
     clockWise: false,
     radius: [45, 65],
     center: ["50%", "45%"], //这个属性调整图像的位置
     hoverAnimation: true,
     itemStyle: {
         normal: {
             label: {
                 show: true,
                 position: "outside",
                 color: "#252525",
                 fontSize: 12,
                 formatter: function(params) {
                     var percent = 0;
                     var total = 0;
                     for (var i = 0; i < data.length; i++) {
                         total += data[i].value;
                     }
                     percent = ((params.value / total) * 100).toFixed(2);
                     if (params.name !== "") {
                         return (
                             percent +
                             "%\n"
                         );
                     } else {
                         return "";
                     }
                 },
                 rich: rich,
             },
             labelLine: {
                 show: true,
                 normal: {
                     length: 5,
                     length2: 30,
                     lineStyle: {
                         color: '#707070' //设置指向线的颜色，不设置会根据每一项去对应颜色
                     }
                 }
             },
         },
     },
     data: data,
 }, ];
 var option = {
     color: [
         "#3AA1FF",
         "#36CBCB",
         "#F9A842",
         "#efa8e4",
         "#79d70f",
         "#4AE2B9",
     ],
     tooltip: {
         trigger: "item",
         position: ["20%", "40%"], //设置提示位置
         formatter: "{b}({d}%)",
     },
     legend: {
         orient: 'vertical', //纵向排序
         type: 'scroll',
         icon: "circle", //设置为圆形图例
         itemGap: 20,
         x: 'center', //调整图例距离左右的位置
         y: '60%', //调整图例距离上下的位置
         itemWidth: 10,
         itemHeight: 10,
         align: 'left',
         textStyle: {
             fontSize: 12,
             color: 'rgba(0, 0, 0, 0.75)',
         },
         data: legendName
     },
     series: seriesObj,
 };