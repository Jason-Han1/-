 option = {
     tooltip: {
         trigger: "axis",
         axisPointer: {
             type: "shadow"
         },
         formatter: function(params) {
             console.log("params====", params)
             return `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#5FF1FF;"></span>` + params[0].seriesName + '：' + params[0].data + '</br>' +
                 `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#FF4F78;"></span>` + params[1].seriesName + '：' + params[1].data
         }
     },
     grid: {
         left: "3%",
         right: "4%",
         bottom: "10%",
         containLabel: true
     },
     legend: {
         show: false
     },
     xAxis: [{
         type: "category",
         data: [
             "线上预约处理情况",
             "现场扫码处理情况",
             "完结处理情况",
             "过号处理情况"
         ],
         axisLine: {
             show: false
         },
         axisTick: {
             show: false
         }
     }],
     yAxis: [{
         type: "value",
         axisLine: {
             show: false
         },
         axisTick: {
             show: false
         }
     }],
     series: [{
             name: "线上预约总数",
             type: "bar",
             data: [40, 55, 70, 50],
             itemStyle: {
                 normal: {
                     show: true,
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: "#60F5FF"
                         },
                         {
                             offset: 1,
                             color: "#3FA4FF"
                         }
                     ]),
                     barBorderRadius: 6,
                     borderWidth: 0
                 }
             },
             barWidth: 20
         },
         {
             name: "线上完结总数",
             type: "bar",
             data: [40, 65, 85, 45],
             itemStyle: {
                 normal: {
                     show: true,
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: "#FF72A6"
                         },
                         {
                             offset: 1,
                             color: "#FF3657"
                         }
                     ]),
                     barBorderRadius: 6,
                     borderWidth: 0
                 }
             },
             barWidth: 20
         }
     ]
 };