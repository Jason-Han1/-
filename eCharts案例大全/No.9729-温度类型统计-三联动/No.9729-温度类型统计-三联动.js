 var t1 = rankData("温度", 16),
     t2 = rankData("冷通道温度", 13),
     t3 = rankData("热通道温度", 18);
 var obj = {
     "温度": {
         name: '温度',
         visualMap: false,
         value: 16,
         soName: t1.name,
         soValue: t1.value,
         lineData: lineData(t1.name)
     },
     "冷通道温度": {
         name: '冷通道温度',
         visualMap: false,
         value: 13,
         soName: t2.name,
         soValue: t2.value,
         lineData: lineData(t2.name)
     },
     "热通道温度": {
         name: '热通道温度',
         visualMap: false,
         value: 18,
         soName: t3.name,
         soValue: t3.value,
         lineData: lineData(t3.name)
     }
 }


 /**
  * 设备数据对象
  **/
 function rankData(soName, count) {
     var nameBar = [],
         valueBar = [];
     var max = 38;
     var min = 15;
     for (var i = 1; i < count + 1; i++) {
         var value = Math.floor(Math.random() * (max - min + 1) + min);
         var color = "#85f585";
         if (value <= -10 || value >= 35) {
             color = '#ffff00';
         } else if (value >= 30 && value < 35) {
             color = '#648afa';
         } else if (value > -10 && value < 30) {
             color = '#85f585';
         }
         valueBar.push({
             value: value,
             name: soName + i,
             visualMap: false,
             itemStyle: {
                 color: color,
             },
         })
     }
     valueBar.sort(function(a, b) {
         return b.value - a.value
     })
     var values = valueBar.slice(0, 10)
     $.each(values, function(key, value) {
         nameBar.push(value.name)
     })
     return {
         name: nameBar.reverse(),
         value: values.reverse()
     }
 }

 /**
  * 曲线图数据对象
  **/
 function lineData(names) {
     var lines = new Object();
     for (var i = 0; i < names.length; i++) {
         lines[names[i]] = new Object();
         lines[names[i]]["seriesData"] = randomData();
     }
     return lines;
 }

 /**
  * 曲线图数据源
  **/
 function randomData() {
     var data = [];
     var max = 40;
     var min = -20;
     for (var i = 0; i < 24; i++) {
         data.push(Math.floor(Math.random() * (max - min + 1) + min))
     }
     return data;
 }

 function setCurOption(barName, lineName) {
     return {
         title: [{
             text: "温度类型数量统计",
             x: '25%',
             y: '3%',
             textAlign: 'center',
             textBaseline: 'middle',
             textStyle: {
                 fontSize: 20
             }
         }, {
             text: barName + "Top10",
             x: '75%',
             y: '2%',
             textAlign: 'center',
             textBaseline: 'middle',
             textStyle: {
                 fontSize: 20
             }
         }, {
             text: lineName,
             x: '45%',
             y: '43%',
             textAlign: 'center',
             textBaseline: 'middle',
             textStyle: {
                 fontSize: 20
             }
         }],
         tooltip: {
             trigger: 'axis',
             axisPointer: {
                 type: 'shadow'
             }
         },
         legend: [{
             data: ['温度', '冷通道温度', '热通道温度'],
             x: 'left',
             orient: 'vertical'
         }],
         grid: [{
                 left: '48%',
                 right: '5%',
                 top: '5%',
                 bottom: '65%',
                 containLabel: true
             },
             {
                 gridindex: 1,
                 left: '0%',
                 right: '5%',
                 top: '50%',
                 bottom: '5%',
                 containLabel: true
             }
         ],
         visualMap: {
             show: false,
             pieces: [{
                 lte: -10,
                 color: '#ffff00'
             }, {
                 gt: -10,
                 lt: 30,
                 color: '#85f585'
             }, {
                 gte: 30,
                 lt: 35,
                 color: '#648afa'
             }, {
                 gte: 35,
                 color: '#ffff00'
             }]
         },
         xAxis: [{
                 type: 'value',
                 boundaryGap: [0, 0.01]
             },
             {
                 gridIndex: 1,
                 type: 'category',
                 boundaryGap: false,
                 data: ['0时', '1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时']
             }
         ],
         yAxis: [{
                 type: 'category',
                 data: obj[barName].soName,
                 axisLabel: {
                     interval: 0
                 }
             },
             {
                 gridIndex: 1,
                 type: 'value',
             }
         ],
         series: [{
             name: '数量',
             type: 'pie',
             center: ['25%', '18%'],
             radius: ['15%', '20%'],
             label: {
                 normal: {
                     formatter: '{b} :{c} ({d}%)'
                 }
             },
             data: [obj['温度'], obj['冷通道温度'], obj['热通道温度']]
         }, {
             name: 'top10',
             type: 'bar',
             label: {
                 normal: {
                     show: true,
                     position: 'right',
                     color: "#00cfff"
                 }
             },
             data: obj[barName].soValue
         }, {
             xAxisIndex: 1,
             yAxisIndex: 1,
             name: lineName,
             type: 'line',
             data: obj[barName]["lineData"][lineName].seriesData,
             markPoint: {
                 data: [{
                         type: 'max',
                         name: '最大值',
                         symbolSize: 55
                     },
                     {
                         type: 'min',
                         name: '最小值',
                         symbolSize: 50
                     }
                 ],
             },
             markLine: {
                 data: [{
                     type: 'average',
                     name: '平均值'
                 }]
             }
         }]
     }
 }
 var selName = "冷通道温度";
 option = setCurOption(selName, obj[selName].soName[9])

 myChart.on('click', function(params) {
     console.log(params)
     if (params.seriesType === "pie") {
         selName = params.name;
         myChart.clear();
         var option = setCurOption(params.name, obj[params.name].soName[9]);
         myChart.setOption(option);
     }

     if (params.seriesType === "bar") {
         myChart.setOption(setCurOption(selName, params.name));
     }
 })