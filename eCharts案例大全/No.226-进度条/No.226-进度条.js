 var myColor = ['#81E7ED'];
 var dataLine = [40, 56, 23, 15, 15];
 var positionLeft = 10,
     max = 100 + positionLeft;

 var g_cellBar0_y = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAoCAYAAAAhf6DEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAA6SURBVEhLY2x8/vY/A4mg3zwcTDOBSTLBqGYSwahmEsGoZhLBqGYSwahmEsGoZhLBqGYSwZDUzMAAAJldBMF2UASmAAAAAElFTkSuQmCC';
 var g_cellBarImg0_y = new Image();
 g_cellBarImg0_y.src = g_cellBar0_y;

 var option = {
     backgroundColor: '#101E44',
     grid: [{
             left: '8%',
             top: '12%',
             right: '5%',
             bottom: '8%',
             containLabel: true
         },
         {
             left: '10%',
             top: '12%',
             right: '5%',
             bottom: '8%',
             containLabel: true
         }
     ],
     xAxis: [{
         //   max:max,
         show: false
     }],
     yAxis: [{
         axisTick: 'none',
         axisLine: 'none',
         axisLabel: {
             inside: true,
             align: 'left',
             textStyle: {
                 color: '#81E7ED',
                 fontSize: '16'
             }
         },
         z: 10,
         data: ['CCA', 'CHH', 'ABC', 'CBC', 'SCH']
     }, {
         axisTick: 'none',
         axisLine: 'none',
         show: true,
         axisLabel: {
             inside: true,
             align: 'right',
             textStyle: {
                 color: '#ffffff',
                 fontSize: '16'
             }
         },
         z: 10,
         data: [40, 56, 23, 15, 15]
     }, {

         axisLine: {
             lineStyle: {
                 color: 'rgba(0,0,0,0)'
             }
         },
         data: []
     }],
     series: [

         { //间距
             type: 'bar',
             barWidth: 30,
             stack: 'b',
             legendHoverLink: false,
             itemStyle: {
                 normal: {
                     color: 'rgba(0,0,0,0)'
                 }
             },
             z: 3,
             data: [positionLeft, positionLeft, positionLeft, positionLeft, positionLeft]
         }, {
             name: '条',
             type: 'bar',
             stack: 'b',
             yAxisIndex: 0,
             data: dataLine,
             label: {
                 normal: {
                     show: false,
                     position: 'right',
                     distance: 10,
                     formatter: function(param) {
                         return param.value + '%'
                     },
                     textStyle: {
                         color: '#ffffff',
                         fontSize: '16'
                     }
                 }
             },
             barWidth: 30,
             itemStyle: {
                 color: {
                     image: g_cellBarImg0_y,
                     repeat: 'repeat'
                 }
                 /*normal: {
                     color: function(params) {
                         var num = myColor.length
                         return myColor[params.dataIndex % num]
                     }
                 }*/
             },
             z: 2
         }, {
             name: '白框',
             type: 'bar',
             yAxisIndex: 1,
             barGap: '-100%',
             data: [99.8, 99.9, 99.9, 99.9, 99.9],
             barWidth: 57,
             itemStyle: {
                 normal: {
                     color: '#0e2147',
                     barBorderRadius: 2
                 }
             },
             z: 1
         },
         {
             name: '外框',
             type: 'bar',
             yAxisIndex: 2,
             barGap: '-100%',
             data: [100, 100, 100, 100, 100],
             barWidth: 59,
             label: {
                 normal: {
                     show: false,
                     position: 'right',
                     distance: 10,
                     formatter: function(data) {
                         return dataLine[data.dataIndex] + "%";
                     },
                     textStyle: {
                         color: '#ffffff',
                         fontSize: '16'
                     }
                 }
             },
             itemStyle: {
                 normal: {
                     color: function(params) {
                         var num = myColor.length
                         return myColor[params.dataIndex % num]
                     },
                     barBorderRadius: [0, 7, 0, 7]
                 }
             },
             z: 0
         },
     ]
 }