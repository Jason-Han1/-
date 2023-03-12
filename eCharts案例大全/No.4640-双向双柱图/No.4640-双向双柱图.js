 var xData = [
     "A高速公路建设项目",
     "B高速公路建设项目",
     "C高速公路建设项目",
 ];

 var lineData = [100, 100, 100];

 var lastYearData = [57, 18, 32];
 var thisYearData = [40, 25, 32];
 var timeLineData = [1];
 var Y = thisYearData.map((item) => {
     return 100 - item;
 });

 var a = [45, 36, 25];
 var b = [72, 31, 32];
 var t = lastYearData.map((item) => {
     return 100 - item;
 });
 var z = a.map((item) => {
     return 100 - item;
 });
 var h = b.map((item) => {
     return 100 - item;
 });

 let colors = [{
         borderColor: "#1BCC98",
         start: "#1BCC98",
         end: "#1BCC98",
     },
     {
         borderColor: "#3185FF",
         start: "#3185FF",
         end: "#3185FF",
     },
 ];
 let borderData = [];
 let scale = 2;
 borderData = xData.map((item) => {
     return scale;
 });
 option = {

     baseOption: {
         backgroundColor: '#000E1A',
         timeline: {
             show: false,
             top: 0,
             data: [],
         },
         //  tooltip: {
         //      show: true,
         //      trigger: "axis",
         //      axisPointer: {
         //          type: "shadow",
         //      },
         //  },
         tooltip: {
             formatter: function(parms) {
                 var str;
                 if (parms.color != "#171D71") {
                     console.log(parms.marker);
                     str =

                         parms.name +
                         "</br>" +
                         "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:" +
                         parms.color.colorStops[0].color +
                         ";'></span>" +
                         "" +
                         parms.seriesName +
                         " : " +
                         parms.value +
                         "%";

                 }
                 return str;
             },
         },
         legend: [{
                 top: "5%",
                 //   bottom: "5%",
                 left: "18%",
                 itemWidth: 20,
                 itemHeight: 10,

                 // icon: "horizontal",
                 textStyle: {
                     color: "#c9c9c9",
                     fontSize: 12,
                 },
                 data: ["安全风险完工率", "污染源工点完工率"],
             },
             {
                 top: "5%",
                 //   bottom: "5%",
                 right: "16%",
                 itemWidth: 20,
                 itemHeight: 10,

                 // icon: "horizontal",
                 textStyle: {
                     color: "#c9c9c9",
                     fontSize: 12,
                 },
                 data: ["安全风险源开工率", "污染源工点开工率"],
             },
         ],
         grid: [{
                 show: false,
                 left: "5%",
                 right: "10%",
                 top: "15%",
                 bottom: "5%",
                 containLabel: true,
                 width: "37%",
             },
             {
                 show: false,
                 left: "52%",
                 top: "15%",
                 bottom: "5%",
                 width: "0%",
             },
             {
                 show: false,
                 right: "4%",
                 top: "15%",
                 bottom: "5%",
                 containLabel: true,
                 width: "37%",
             },
         ],
         xAxis: [{
                 type: "value",
                 inverse: true,
                 min: 0,
                 max: 100,
                 axisLine: {
                     show: false,
                 },
                 axisTick: {
                     show: false,
                 },
                 position: "top",
                 axisLabel: {
                     show: true,
                     color: "#c9c9c9",
                 },
                 splitLine: {
                     show: true,
                     lineStyle: {
                         color: "#324785",
                     },
                 },
                 axisLabel: {
                     formatter: "{value}%",
                     textStyle: {
                         color: "#c9c9c9",
                         fontSize: 12,
                     },
                 },
             },
             {
                 gridIndex: 1,
                 show: false,
             },
             {
                 min: 0,
                 max: 100,
                 gridIndex: 2,
                 axisLine: {
                     show: false,
                 },
                 axisTick: {
                     show: false,
                 },
                 position: "top",
                 axisLabel: {
                     show: true,
                     color: "#c9c9c9",
                 },
                 splitLine: {
                     show: true,
                     lineStyle: {
                         color: "#324785",
                     },
                 },
                 axisLabel: {
                     formatter: "{value}%",
                     textStyle: {
                         color: "#c9c9c9",
                         fontSize: 12,
                     },
                 },
             },
         ],
         yAxis: [{
                 type: "category",
                 inverse: true,
                 position: "right",
                 axisLine: {
                     show: true,
                     lineStyle: {
                         color: "#324785",
                         fontSize: 12,
                     },
                 },

                 axisTick: {
                     show: false,
                 },
                 axisLabel: {
                     show: false,
                 },
                 data: xData,
             },
             {
                 gridIndex: 1,
                 type: "category",
                 inverse: true,
                 position: "left",
                 axisLine: {
                     show: false,
                 },
                 axisTick: {
                     show: false,
                 },
                 axisLabel: {
                     show: true,
                     padding: [30, 0, 0, 0],
                     textStyle: {
                         color: "#ffffff",
                         fontSize: 12,
                     },
                     align: "center",
                 },
                 data: xData.map(function(value) {
                     return {
                         value: value,
                         textStyle: {
                             align: "center",
                         },
                     };
                 }),
             },
             {
                 gridIndex: 2,
                 type: "category",
                 inverse: true,
                 position: "left",
                 axisLine: {
                     show: true,
                     lineStyle: {
                         color: "#324785",
                     },
                 },
                 axisTick: {
                     show: false,
                 },
                 axisLabel: {
                     show: false,
                 },
                 data: xData,
             },
         ],
         series: [],
     },
     options: [],
 };

 option.baseOption.timeline.data.push(timeLineData[0]);
 option.options.push({
     series: [{
             name: "安全风险完工率",
             type: "bar",
             barWidth: 40,
             stack: "1",
             itemStyle: {
                 normal: {
                     fontSize: 12,
                     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                             offset: 0,
                             color: colors[0].start,
                         },
                         {
                             offset: 1,
                             color: colors[0].end,
                         },
                     ]),
                 },
             },
             label: {
                 normal: {
                     show: false,
                 },
             },
             data: lastYearData,
             animationEasing: "elasticOut",
         },

         {
             name: "安全风险完工率",
             type: "bar",
             barWidth: 40,
             stack: "1",
             itemStyle: {
                 normal: {
                     color: "#171D71",
                     fontSize: 12,
                 },
             },
             data: t,
         },
         {
             name: "污染源工点完工率",
             type: "bar",
             barWidth: 40,
             stack: "3",
             itemStyle: {
                 normal: {
                     fontSize: 12,
                     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                             offset: 0,
                             color: "#76CF5B",
                         },
                         {
                             offset: 1,
                             color: "#76CF5B",
                         },
                     ]),
                 },
             },
             label: {
                 normal: {
                     show: false,
                 },
             },
             data: a,
             animationEasing: "elasticOut",
         },
         {
             name: "污染源工点完工率",
             type: "bar",
             barWidth: 40,
             stack: "3",
             itemStyle: {
                 normal: {
                     color: "#171D71",
                     fontSize: 12,
                 },
             },
             data: z,
         },
         {
             name: "安全风险源开工率",
             type: "bar",
             stack: "2",
             barWidth: 40,
             xAxisIndex: 2,
             yAxisIndex: 2,
             itemStyle: {
                 normal: {
                     fontSize: 12,
                     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                             offset: 0,
                             color: colors[1].start,
                         },
                         {
                             offset: 1,
                             color: colors[1].end,
                         },
                     ]),
                 },
             },
             label: {
                 normal: {
                     show: false,
                 },
             },
             data: thisYearData,
             animationEasing: "elasticOut",
         },
         {
             name: "安全风险源开工率",
             type: "bar",
             xAxisIndex: 2,
             yAxisIndex: 2,
             barWidth: 40,
             stack: "2",
             itemStyle: {
                 normal: {
                     color: "#171D71",
                     fontSize: 12,
                 },
             },
             data: Y,
         },
         {
             name: "污染源工点开工率",
             type: "bar",
             barWidth: 40,
             xAxisIndex: 2,
             yAxisIndex: 2,
             stack: "4",
             itemStyle: {
                 normal: {
                     fontSize: 12,
                     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                             offset: 0,
                             color: "#60DDF9",
                         },
                         {
                             offset: 1,
                             color: "#60DDF9",
                         },
                     ]),
                 },
             },
             label: {
                 normal: {
                     show: false,
                 },
             },
             data: b,
             animationEasing: "elasticOut",
         },
         {
             name: "污染源工点开工率",
             type: "bar",
             barWidth: 40,
             xAxisIndex: 2,
             yAxisIndex: 2,
             stack: "4",
             itemStyle: {
                 normal: {
                     color: "#171D71",
                     fontSize: 12,
                 },
             },
             data: h,
         },
     ],
 });