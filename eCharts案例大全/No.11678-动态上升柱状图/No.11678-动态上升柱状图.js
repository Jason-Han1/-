 var data = [{
         product: '111',
         "今年": 800,
         "去年": 158
     },
     {
         product: '222',
         "今年": 200,
         "去年": 951
     },
     {
         product: '333',
         "今年": 600,
         "去年": 528
     },
     {
         product: '444',
         "今年": 500,
         "去年": 561
     },
     {
         product: '555',
         "今年": 400,
         "去年": 111
     },
 ]
 option = {
     color: ['#3398DB'],
     tooltip: {
         trigger: 'axis',
         textStyle: {
             color: "white",
         },
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
         },
         formatter: function(params) {
             var name = params[0].name;
             var info = []
             params.forEach(element => {
                 info.push({
                     seriesName: element.seriesName,
                     value: element.value,
                     marker: element.marker
                 })
             });
             return `
                                ${name}</br>
                                ${info[1].marker}${info[0].seriesName}:${info[0].value + info[1].value}</br>
                                ${info[3].marker}${info[2].seriesName}:${info[2].value + info[3].value}
                            `;
         },
     },
     grid: {
         left: '0%',
         right: '0%',
         bottom: '0%',
         containLabel: true
     },
     xAxis: {
         type: 'category',
         axisLabel: { // 文字样式
             color: 'black',
         },
         data: data.map((element) => {
             return element.product
         })
     },
     yAxis: {
         type: 'value',
         axisLabel: {
             color: 'black',
         },
         splitLine: { //分隔线颜色
             lineStyle: {
                 color: ['#162b5f']
             }
         }
     },
     series: [{
             name: '今年',
             type: 'bar',
             stack: 'this',
             barWidth: 30,
             itemStyle: {
                 color: new echarts.graphic.LinearGradient(
                     0, 0, 0, 1,
                     [{
                             offset: 0,
                             color: '#44f0ff'
                         },
                         {
                             offset: 1,
                             color: '#3487da'
                         }
                     ]
                 )
             },
             animationDelay: 0, //动画延迟时间
             animationDuration: 0, //动画时长
             animationDurationUpdate: 0
         },
         {
             name: '今年Bg',
             type: 'bar',
             stack: 'this',
             barWidth: 30,
             itemStyle: {
                 color: '#44f0ff',
                 opacity: 0.5
             },
             animationDelay: 0, //动画延迟时间
             animationDuration: 0, //动画时长
             animationDurationUpdate: 0
         },
         {
             name: '去年',
             type: 'bar',
             stack: 'last',
             barWidth: 30,
             itemStyle: {
                 color: new echarts.graphic.LinearGradient(
                     0, 0, 0, 1,
                     [{
                             offset: 0,
                             color: '#fb387e'
                         },
                         {
                             offset: 1,
                             color: '#3586da'
                         }
                     ]
                 )
             },
             animationDelay: 0, //动画延迟时间
             animationDuration: 0, //动画时长
             animationDurationUpdate: 0
         },
         {
             name: '去年Bg',
             type: 'bar',
             stack: 'last',
             barWidth: 30,
             itemStyle: {
                 color: '#fb387e',
                 opacity: 0.5
             },
             animationDelay: 0, //动画延迟时间
             animationDuration: 0, //动画时长
             animationDurationUpdate: 0
         },

     ]
 };
 
 riseAnimation(data, myChart, option, 5, 50)

 function riseAnimation(data, chart, option, time, speed) {
     var thisYearData = {
         norm: data.map((e) => {
             return e["今年"]
         }),
         data1: new Array(5).fill(0),
         data2: [],
     }
     var lastYearData = {
         norm: data.map((e) => {
             return e["去年"]
         }),
         data1: new Array(5).fill(0),
         data2: [],
     }
     chart.myOption = option
     chart.thisYearData = thisYearData
     chart.lastYearData = lastYearData

     function formData(data) {
         var norm = data.norm
         var data1 = data.data1
         var data2 = data.data2
         data2 = norm.map((e, index) => {
             var item = e / ((time * 1000) / speed)
             data1[index] += item
             if (data1[index] >= e) {
                 data1[index] = 0
             }
             return e - data1[index]
         })
         return [data1, data2]
     }
     setInterval(function() {
         var thisYear = formData(this.thisYearData)
         var lastYear = formData(this.lastYearData)
         this.myOption.series[0].data = thisYear[0]
         this.myOption.series[1].data = thisYear[1]
         this.myOption.series[2].data = lastYear[0]
         this.myOption.series[3].data = lastYear[1]
         this.setOption(this.myOption)
     }.bind(chart), speed)
 }