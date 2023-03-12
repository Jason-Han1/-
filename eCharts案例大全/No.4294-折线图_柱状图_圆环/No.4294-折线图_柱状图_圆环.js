 let numColor = "rgba(228,244,255,1)";
 let circleColor = "rgba(168,200,255,1)";
 let centerCircleColr = "rgba(255,153,51,1)"
 let list = [{
         TIME: "2011",
         COUNT: 402,
     },
     {
         TIME: "2012",
         COUNT: 213,
     },
     {
         TIME: "2013",
         COUNT: 146,
     },
     {
         TIME: "2014",
         COUNT: 232,
     },
     {
         TIME: "2015",
         COUNT: 203,
     },
     {
         TIME: "2016",
         COUNT: 298,
     },
     {
         TIME: "2017",
         COUNT: 586,
     },
     {
         TIME: "2018",
         COUNT: 622,
     },
     {
         TIME: "2019",
         COUNT: 225,
     },
     {
         TIME: "2020",
         COUNT: 239,
     },
     {
         TIME: "2021",
         COUNT: 139,
     },
 ];
 let xAxisData = [];
 let seriesData = [];
 let maxList = [];
 list.map((item, index) => {
     xAxisData.push(item.TIME);
     seriesData.push(item.COUNT);
 });
 let max = Math.max(...seriesData) + 5;
 list.map((item, index) => {
     maxList.push(max);
 });
 option = {
     backgroundColor: "#000",
     tooltip: {
         trigger: "axis",
         axisPointer: {
             lineStyle: {
                 color: {
                     type: "linear",
                     x: 0,
                     y: 0,
                     x2: 0,
                     y2: 1,
                     colorStops: [{
                             offset: 0,
                             color: "rgba(0, 255, 233,0)",
                         },
                         {
                             offset: 0.5,
                             color: "rgba(255, 255, 255,1)",
                         },
                         {
                             offset: 1,
                             color: "rgba(0, 255, 233,0)",
                         },
                     ],
                     global: false,
                 },
             },
         },
         formatter: (params) => {
             // let obj = this.listAry[params[0].dataIndex];
             // // console.log("obj",obj)
             // let str = `${params[2].name}月<br/>总数${params[2].value}个
             // <br/>核心区 ${obj.HXQCOUNT} 个
             // <br/>控制区 ${obj.KZQCOUNT} 个
             //  <br/>协调区 ${obj.XTQCOUNT} 个
             // `;
             // return str;
         },
     },
     grid: {
         top: 50,
         left: 30,
         right: 40,
         bottom: 60,
     },
     xAxis: {
         name: "月",
         data: xAxisData,
         axisLine: {
             lineStyle: {
                 color: "rgba(16,85,120,1)",
                 width: "2",
             },
         },
         axisTick: {
             alignWithLabel: true,
         },
         splitLine: {
             show: false,
             lineStyle: {
                 color: "#ccc",
             },
         },
         axisLabel: {
             // rotate: 30,
             margin: 20,
             textStyle: {
                 fontWeight: "600",
                 color: "rgba(215,234,245,1)",
                 fontSize: "12px",
             },
         },
     },
     yAxis: {
         name: "单位（个）",
         nameTextStyle: {
             color: "rgba(53,107,144,1)",
         },
         splitLine: {
             lineStyle: {
                 color: "rgba(86,122,147,0.08)",
             },
         },
         axisTick: {
             show: false,
             lineStyle: {
                 color: "rgba(16,85,120,1)",
             },
         },
         axisLine: {
             show: false,
             lineStyle: {},
         },
         axisLabel: {
             show: true,
             textStyle: {
                 color: "rgba(86,122,147,1)",
                 fontSize: "14px",
             },
         },
     },
     series: [{
             type: "bar",
             z: 1,
             itemStyle: {
                 normal: {
                     color: {
                         type: "linear",
                         x: 0,
                         y: 0,
                         x2: 0,
                         y2: 1,
                         colorStops: [{
                                 offset: 0,
                                 color: "rgba(49, 80, 99, 0.5)",
                             },
                             {
                                 offset: 0.2,
                                 color: "rgba(49, 80, 99, 0.5)",
                             },
                             {
                                 offset: 1,
                                 color: "rgba(49, 80, 99, 0.1)",
                             },
                         ],
                         globalCoord: false,
                     },
                 },
             },
             barWidth: 24,
             barGap: 10,
             data: maxList,
         },
         {
             data: seriesData,
             type: "line",
             symbol: "circle", //设定为实心点
             symbolSize: 20, //圆点大小
             smooth: true,
             showSymbol: true,
             hoverAnimation: true,
             animation: true,
             label: {
                 show: true,
                 position: "top",
                 textStyle: {
                     color: "rgba(215,234,245,1)",
                     fontSize: 14,
                 },
             },
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.RadialGradient(0.5, 0.5, 1.0, [{
                             offset: 0,
                             color: centerCircleColr,
                         },
                         {
                             offset: 0.2,
                             color: centerCircleColr,
                         },
                         {
                             offset: 0.21,
                             color: "rgba(255,153,51,0)",
                         },
                         {
                             offset: 1,
                             color: "rgba(255,153,51,0)",
                         },
                     ]), //圆点颜色
                     borderColor: circleColor,
                     borderWidth: 2,
                     lineStyle: {
                         //折线颜色大小
                         type: "solid", //'dotted'虚线 'solid'实线
                         color: numColor,
                         width: 1,
                         borderColor: "transparent", //拐点边框颜色
                     },
                 },
             },
         },
         {
             name: "A",
             type: "line",
             smooth: true,
             z: 1,
             // symbol: 'roundRect',
             lineStyle: {
                 normal: {
                     width: 2,
                     color: "rgba(53,107,144,1)",
                 },
             },
             symbolSize: [0, 0],
             data: seriesData,
         },
     ],
 }