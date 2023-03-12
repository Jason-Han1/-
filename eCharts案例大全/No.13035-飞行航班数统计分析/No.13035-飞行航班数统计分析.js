 var dataInfo = [{
         "name": "real",
         "count": [{
                 "name": "real",
                 "point": "4-5",
                 "total": 1
             },
             {
                 "name": "real",
                 "point": "5-6",
                 "total": 9
             },
             {
                 "name": "real",
                 "point": "6-7",
                 "total": 35
             },
             {
                 "name": "real",
                 "point": "7-8",
                 "total": 39
             },
             {
                 "name": "real",
                 "point": "8-9",
                 "total": 38
             },
             {
                 "name": "real",
                 "point": "9-10",
                 "total": 29
             },
             {
                 "name": "real",
                 "point": "10-11",
                 "total": 22
             },
             {
                 "name": "real",
                 "point": "11-12",
                 "total": 23
             },
             {
                 "name": "real",
                 "point": "12-13",
                 "total": 29
             },
             {
                 "name": "real",
                 "point": "13-14",
                 "total": 25
             },
             {
                 "name": "real",
                 "point": "14-15",
                 "total": 24
             },
             {
                 "name": "real",
                 "point": "15-16",
                 "total": 22
             },
             {
                 "name": "real",
                 "point": "16-17",
                 "total": 16
             },
             {
                 "name": "real",
                 "point": "17-18",
                 "total": 0
             },
             {
                 "name": "real",
                 "point": "18-19",
                 "total": 0
             },
             {
                 "name": "real",
                 "point": "19-20",
                 "total": 0
             },
             {
                 "name": "real",
                 "point": "20-21",
                 "total": 0
             },
             {
                 "name": "real",
                 "point": "21-22",
                 "total": 0
             },
             {
                 "name": "real",
                 "point": "22-23",
                 "total": 0
             },
             {
                 "name": "real",
                 "point": "23-0",
                 "total": 0
             },
             {
                 "name": "real",
                 "point": "0-1",
                 "total": 0
             },
             {
                 "name": "real",
                 "point": "1-2",
                 "total": 0
             },
             {
                 "name": "real",
                 "point": "2-3",
                 "total": 0
             },
             {
                 "name": "real",
                 "point": "3-4",
                 "total": 0
             }
         ]
     },
     {
         "name": "plan",
         "count": [{
                 "name": "plan",
                 "point": "4-5",
                 "total": 1
             },
             {
                 "name": "plan",
                 "point": "5-6",
                 "total": 16
             },
             {
                 "name": "plan",
                 "point": "6-7",
                 "total": 34
             },
             {
                 "name": "plan",
                 "point": "7-8",
                 "total": 38
             },
             {
                 "name": "plan",
                 "point": "8-9",
                 "total": 37
             },
             {
                 "name": "plan",
                 "point": "9-10",
                 "total": 32
             },
             {
                 "name": "plan",
                 "point": "10-11",
                 "total": 20
             },
             {
                 "name": "plan",
                 "point": "11-12",
                 "total": 31
             },
             {
                 "name": "plan",
                 "point": "12-13",
                 "total": 21
             },
             {
                 "name": "plan",
                 "point": "13-14",
                 "total": 29
             },
             {
                 "name": "plan",
                 "point": "14-15",
                 "total": 21
             },
             {
                 "name": "plan",
                 "point": "15-16",
                 "total": 26
             },
             {
                 "name": "plan",
                 "point": "16-17",
                 "total": 24
             },
             {
                 "name": "plan",
                 "point": "17-18",
                 "total": 30
             },
             {
                 "name": "plan",
                 "point": "18-19",
                 "total": 26
             },
             {
                 "name": "plan",
                 "point": "19-20",
                 "total": 18
             },
             {
                 "name": "plan",
                 "point": "20-21",
                 "total": 20
             },
             {
                 "name": "plan",
                 "point": "21-22",
                 "total": 22
             },
             {
                 "name": "plan",
                 "point": "22-23",
                 "total": 18
             },
             {
                 "name": "plan",
                 "point": "23-0",
                 "total": 7
             },
             {
                 "name": "plan",
                 "point": "0-1",
                 "total": 3
             },
             {
                 "name": "plan",
                 "point": "1-2",
                 "total": 5
             },
             {
                 "name": "plan",
                 "point": "2-3",
                 "total": 8
             },
             {
                 "name": "plan",
                 "point": "3-4",
                 "total": 0
             }
         ]
     }
 ];
 var legendData = [];
 var barData = [];
 var lineData = [];
 var xAxisData = [];
 var bgMaxData = [];
 for (let i = 0; i < dataInfo.length; i++) {
     if (dataInfo[i].name == "real") {
         dataInfo[i].name = "实际";
         legendData.push(dataInfo[i].name);
         for (let j = 0; j < dataInfo[i].count.length; j++) {
             lineData.push(dataInfo[i].count[j].total);
             xAxisData.push(dataInfo[i].count[j].point);
         }
     } else {
         dataInfo[i].name = "计划";
         legendData.push(dataInfo[i].name);
         for (let j = 0; j < dataInfo[i].count.length; j++) {
             barData.push(dataInfo[i].count[j].total);
         }
     }
 }
 var maxpoint = Math.max.apply(null, barData);
 if (maxpoint < 50) {
     maxpoint = 50;
 } else if (maxpoint < 100) {
     maxpoint = 100;
 } else if (maxpoint < 150) {
     maxpoint = 150;
 } else if (maxpoint < 300) {
     maxpoint = 300;
 } else if (maxpoint < 500) {
     maxpoint = 500;
 } else if (maxpoint < 700) {
     maxpoint = 700;
 } else if (maxpoint < 1000) {
     maxpoint = 1000;
 }
 for (var j = 0; j < dataInfo[0].count.length; j++) {
     dataInfo[0].count[j].maxpoint = maxpoint
     bgMaxData.push(dataInfo[0].count[j].maxpoint)
 }
 var option = {
     backgroundColor: "#0e2a43",
     color: ["#3398DB", "#ff733f"],
     tooltip: {
         trigger: "axis", //鼠标经过提示
         formatter: function(params) {
             var rest = params[0].name + "<br />";
             var unit = params[0].name.substring(
                 params[0].name.indexOf("(") + 1,
                 params[0].name.indexOf(")")
             );
             for (var i = 0; i < params.length - 1; i++) {
                 rest +=
                     params[i].seriesName + "：" + params[i].data + unit + "<br />";
             }
             return rest;
         }
     },
     grid: {
         left: "1%",
         right: "5%",
         top: "15%",
         bottom: "10%",
         containLabel: true
     },
     legend: {
         data: legendData,
         icon: "rect",
         top: "-5",
         right: "45",
         itemWidth: 20,
         itemHeight: 20,
         textStyle: {
             color: "#fff",
             fontSize: 16
         }
     },
     xAxis: {
         type: "category",
         axisLabel: {
             //坐标轴刻度标签的相关设置。
             interval: 1, //设置为 1，表示『隔一个标签显示一个标签』
             textStyle: {
                 color: "#9fa49b"
             }
         },
         axisLine: {
             //坐标轴轴线相关设置
             lineStyle: {
                 color: "#9fa49b",
                 opacity: 1
             }
         },
         splitLine: {
             //坐标轴在 grid 区域中的分隔线。
             show: false
         },
         axisTick: {
             show: false
         },
         data: xAxisData
     },
     yAxis: [{
             name: "实际（架）",
             type: "value",
             min: 0,
             max: maxpoint,
             axisLabel: {
                 //坐标轴刻度标签的相关设置。
                 // interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                 textStyle: {
                     color: "#9fa49b"
                 }
             },
             axisLine: {
                 //坐标轴轴线相关设置
                 onZero: false,
                 lineStyle: {
                     color: "#9fa49b",
                     opacity: 1
                 }
             },
             splitLine: {
                 //坐标轴在 grid 区域中的分隔线。
                 show: false
             },
             axisTick: {
                 show: false
             }
         },
         {
             name: "计划（架）",
             type: "value",
             position: "right",
             min: 0,
             max: maxpoint,
             axisLabel: {
                 textStyle: {
                     color: "#9fa49b"
                 }
             },
             axisLine: {
                 onZero: false,
                 lineStyle: {
                     color: "#9fa49b"
                 }
             },
             axisTick: {
                 show: false
             },
             splitLine: {
                 show: false
             }
         }
     ],
     series: [{
             name: "计划",
             type: "bar",
             barWidth: 20,
             label: {
                 normal: {
                     show: true,
                     position: "top",
                     textStyle: {
                         color: "#ffffff",
                         fontSize: 12
                     }
                 }
             },
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: "#343cff"
                         },
                         {
                             offset: 1,
                             color: "#458efe"
                         }
                     ])
                 }
             },
             data: barData
         },
         {
             name: "实际",
             yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
             smooth: true,
             type: "line",
             symbol: "circle",
             label: {
                 show: true,
                 position: 'top',
                 textStyle: {
                     color: '#ed00c1',
                     fontSize: 14,
                 }
             },
             itemStyle: {
                 normal: {
                     color: "#ed00c1"
                 }
             }, //拐点样式
             lineStyle: {
                 // 系列级个性化折线样式
                 width: 2,
                 type: "solid",
                 color: "#ed00c1"
             },
             data: lineData
         },
         {
             name: "",
             type: "bar",
             barWidth: 20,
             xAxisIndex: 0,
             // yAxisIndex: 1,
             // barGap: '-135%',
             barGap: "-100%",
             // data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
             data: bgMaxData,
             itemStyle: {
                 normal: {
                     color: "#2e3c50"
                 }
             },
             zlevel: -1
         }
     ]
 };