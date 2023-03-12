 var dataAll = [389, 259, 262, 324];
 var yAxisData = ["自主采购", "公开招标", "邀请招标", "低价采购"];
 var rich = {
     white: {
         color: "#fff",
         fontSize: 16,
         lineHeight: 30
     }
 };
 var option = {
     backgroundColor: '#06163a',
     color: ["#00c2ff", "#ff2d55", "#ffe000", "#07ca7e", "#ff9000"],
     title: [{
             text: "采购分类统计(万元)",
             top: "top",
             left: "left",
             textStyle: {
                 color: "#fff",
                 fontSize: "16"
             }
         },
         {
             text: "采购方式统计(万元)",
             x: "50%",
             top: "top",
             textStyle: {
                 color: "#fff",
                 fontSize: "16"
             }
         },
         {
             text: "采购组织形式统计(万元)",
             left: "left",
             y: "55%",
             textStyle: {
                 color: "#fff",
                 fontSize: "16"
             }
         }
     ],
     grid: [{
         x: "60%",
         y: "7%",
         width: "35%",
         height: "90%"
     }],
     tooltip: {
         formatter: "{b} ({c})"
     },
     xAxis: [{
         gridIndex: 0,
         axisTick: {
             show: false
         },
         axisLabel: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisLine: {
             show: false
         }
     }],
     yAxis: [{
         gridIndex: 0,
         interval: 0,
         data: yAxisData.reverse(),
         axisTick: {
             show: false
         },
         axisLabel: {
             show: true
         },
         splitLine: {
             show: false
         },
         axisLine: {
             show: false,
             lineStyle: {
                 color: "#fff"
             }
         }
     }],
     series: [{
             name: "采购分类统计",
             type: "pie",
             radius: "30%",
             center: ["25%", "25%"],
             data: [{
                     value: 335,
                     name: "货物"
                 },
                 {
                     value: 310,
                     name: "方式"
                 },
                 {
                     value: 234,
                     name: "服务"
                 }
             ],
             labelLine: {
                 length: 5,
                 length2: 5
             },
             itemStyle: {
                 normal: {
                     label: {
                         show: true,
                         formatter: "{b}:{white|{c}} \n ({d}%)",
                         textStyle: {
                             color: "#fff"
                         },
                         rich: rich
                     }
                 }
             }
         },
         {
             name: "采购方式统计",
             type: "pie",
             radius: "30%",
             center: ["25%", "80%"],
             labelLine: {
                 length: 5,
                 length2: 5
             },
             data: [{
                     value: 335,
                     name: "集中"
                 },
                 {
                     value: 310,
                     name: "分散"
                 }
             ],
             itemStyle: {
                 normal: {
                     label: {
                         show: true,
                         formatter: "{b}:{white|{c}} \n ({d}%)",
                         textStyle: {
                             color: "#fff"
                         },
                         rich: rich
                     }
                 }
             }
         },
         {
             name: "采购组织形式统计",
             type: "bar",
             xAxisIndex: 0,
             yAxisIndex: 0,
             barWidth: "25%",
             itemStyle: {
                 normal: {
                     color: "#00d8ff"
                 }
             },
             label: {
                 normal: {
                     show: true,
                     position: "right",
                     textStyle: {
                         color: "#fff"
                     },
                     fontSize: 16
                 }
             },
             data: dataAll.sort()
         }
     ]
 };