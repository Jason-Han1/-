 var dataLine = [1500, 200, 100];
 var myColor = ["#CC0000", "#FF9900", "#33CC00"];
 option = {
     backgroundColor: '#101E40',
     grid: [{
         left: '5%',
         top: '5%',
         right: '8%',
         bottom: '1%',
         containLabel: true
     }],
     //  设置最大容量
     xAxis: [{
         max: 2000,
         show: false
     }],
     yAxis: [{
             axisTick: {
                 show: false
             },
             axisLine: {
                 show: false,
             },
             axisLabel: {
                 textStyle: {
                     color: "#fff",
                     fontSize: 16
                 },
                 // yAxis 栏标题
                 formatter:function(data){
                     return data + " :单位"
                 }
             },
             data: ["紧急", "严重", "一般"]
         },
         {
             axisTick: "none",
             axisLine: "none",
             show: false,
             axisLabel: {
                 textStyle: {
                     color: "#fff",
                     fontSize: 0
                 },
                 formatter:function(data){
                     return 222
                 }
             },
             data: [1, 1, 1]
         },
         {
             axisLine: {
                 lineStyle: {
                     color: "rgba(0,0,0,0)"
                 }
             },
             data: []
         },
     ],
     series: [{
             name: "条",
             type: "bar",
             stack: "b",
             yAxisIndex: 0,
             data: dataLine,
             barWidth: 20,
             itemStyle: {
                 normal: {
                     color: function(params) {
                         return myColor[params.dataIndex];
                     }
                 }
             },
             z: 2
         },
         {
             name: "框",
             type: "bar",
             yAxisIndex: 1,
             barGap: "-100%",
             data: [10000, 10000, 100000],
             barWidth: 20,
             itemStyle: {
                 normal: {
                     color: "#2F6781"
                 }
             },
             z: 1,
             label: {
                 normal: {
                     show: true,
                     position: "right",
                     distance: 10,
                     formatter: function(data) {
                         return dataLine[data.dataIndex]+'次';
                     },
                     textStyle: {
                         color: "#fff",
                         fontSize: 16
                     }
                 }
             }
         }
     ]
 }