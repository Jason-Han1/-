 var reslult = [{
         name: "电力热力",
         value: 130,
         color: "#20F397",
         position: [0, 60],
         fontSize: "12",
         number: "2",
     },
     {
         name: "水利环境",
         value: 150,
         color: "#FEF009",
         position: [20, 30],
         fontSize: "14",
         number: "4",
     },
     {
         name: "批发零售",
         value: 130,
         color: "#02DDDF",
         position: [20, 70],
         number: "2",
         fontSize: "12",
     },
     {
         name: "制造业",
         value: 170,
         color: "#FF0000",
         position: [45, 50],
         number: "4",
         fontSize: "18",
     },
     {
         name: "房地产",
         value: 140,
         color: "#00FFFF",
         position: [46, 90],
         fontSize: "13",
         number: "3",
     },
     {
         name: "交通运输",
         value: 70,
         color: "#FF7E00",
         position: [65, 75],
         fontSize: "18",
         number: "2",
     },
     {
         name: "居民服务",
         value: 140,
         color: "#00FFFF",
         position: [80, 33],
         number: "4",
         fontSize: "11",
     },
     {
         name: "教育",
         value: 130,
         color: "#601986",
         position: [90, 53],
         fontSize: "11",
         number: "2",
     },
 ];
 var data = [];
 // 渲染数据，并写入chart
 reslult.map((item) => {
     data.push({
         name: item.name,
         value: item.position,
         symbolSize: item.value,
         label: {
             normal: {
                 formatter: function(param) {
                     var newParamsName = ""; //返回文字格式
                     var paramsNameNumber = param.name.length; //获取显示文字长度
                     var number = parseInt(item.number); //超过多少字换行
                     var rowNumber = Math.ceil(paramsNameNumber / number); //最多能显示几行
                     if (paramsNameNumber > number) {
                         //如果长度大于每行最多显示的字数
                         for (var p = 0; p < rowNumber; p++) {
                             //循环次数就是行数
                             var tempStr = ""; //每次截取的字符
                             var start = p * number; //截取的起点
                             var end = start + number; //截取的终点
                             if (p == rowNumber - 1) {
                                 //最后一行就不换行了
                                 tempStr = param.name.substring(start);
                             } else {
                                 tempStr = param.name.substring(start, end) + "\n";
                             }
                             newParamsName += tempStr; //拼接字符串
                         }
                     } else {
                         newParamsName = param.name; //如果小于每行最多显示的字数就返回原来的字符串
                     }
                     return newParamsName;
                 },
                 show: true,
                 textStyle: {
                     fontSize: item.fontSize,
                     fontFamily: "Microsoft YaHei",
                     color: "#FFFFFF",
                     fontWeight: "bold",
                     opacity: 1,
                 },
             },
         },
         itemStyle: {
             normal: {
                 color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
                         offset: 0.2,
                         color: "rgba(27, 54, 72, 0.3)",
                     },
                     {
                         offset: 1,
                         color: item.color,
                     },
                 ]),
                 opacity: 1,
                 borderWidth: 1,
                 borderColor: item.color,
             },
         },
     });
 });
 option = {
     backgroundColor:'rgba(36, 130, 160, 1)',
     grid: {
         show: false,
         top: 10,
         bottom: 10,
     },
     xAxis: [{
         gridIndex: 0,
         type: "value",
         show: false,
         min: 0,
         max: 100,
         nameLocation: "middle",
         nameGap: 5,
     }, ],
     yAxis: [{
         gridIndex: 0,
         min: 0,
         show: false,
         max: 100,
         nameLocation: "middle",
         nameGap: 30,
     }, ],

     series: [{
         type: "scatter",
         symbol: "circle",
         symbolSize: 120,
         label: {
             normal: {
                 show: true,
                 formatter: "{b}",
                 color: "#fff",
                 textStyle: {
                     fontSize: "20",
                 },
             },
         },
         animationDurationUpdate: 500,
         animationEasingUpdate: 500,
         animationDelay: function(idx) {
             // 越往后的数据延迟越大
             return idx * 100;
         },
         data: data,
     }, ],
 }