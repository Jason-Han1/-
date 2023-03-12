 function rankData(type) {
     var valueBar = [],
         max, min;
     switch (type) {
         case 'v':
             max = 1450;
             min = 1000;
             break;
         case 't':
             max = 3850;
             min = 2000;
             break;
         default:
             max = 1850;
             min = 1000;
             break;
     }
     for (var i = 1; i < 24 + 1; i++) {
         var value = Math.floor(Math.random() * (max - min + 1) + min) / 100;
         var color = "#85f585";
         if (type == "v") {
             if (value <= 12 || value >= 13.5) {
                 color = '#ff9900';
             }
             valueBar.push({
                 value: value,
                 itemStyle: {
                     color: color,
                 },
             })
         } else {
             valueBar.push({
                 value: value,
             })
         }


     }
     return valueBar;
 }

 function xData(index) {
     var names = []
     for (var i = 1; i < 24 + 1; i++) {
         names.push("v" + (i + index * 24))
     }
     return names;
 }

 option = {
     "timeline": {
         "axisType": "category",
         "data": [1, 2, 3],
         "label": {
             "color": "#3dbaff",
             formatter: function(s) {
                 return "第" + s + "页";
             }
         },
         "lineStyle": {
             "color": "#3dbaff"
         },
         "itemStyle": {
             "color": "#3dbaff"
         },
         "controlStyle": {
             "color": "#3dbaff",
             "borderColor": "#3dbaff"
         },
         "autoPlay": false,
         "playInterval": 3000,
         tooltip: {
             formatter: function(s) {
                 return "第" + (s.value - 1) + "页";
             }
         }
     },
     "options": [{
         "tooltip": {
             "trigger": "axis",
             "axisPointer": {
                 "type": "shadow"
             },
         },
         "legend": {
             "data": ["电压", '内阻', '温度'],
         },
         "calculable": true,
         "grid": {
             "y2": 80,
             "left": "40",
             "right": "30",
             "top": "30"
         },
         "xAxis": [{
             "data": xData(0),
             "axisLine": {
                 "show": false
             },
             "axisTick": {
                 "show": false
             },
             "splitLine": {
                 "show": false
             },
             "axisLabel": {
                 "interval": 0,
                 "rotate": 45,
                 "padding": [20, 0, 5, 0],
                 "color": "#3dbaff"
             }
         }],
         "yAxis": [{
             "type": "value",
             "axisTick": {
                 "show": false
             },
             "splitLine": {
                 "show": false
             },
             "axisLine": {
                 "onZero": false,
                 "lineStyle": {
                     "color": "#3dbaff"
                 }
             },
             //  "scale": true
             // 数值最小值-1
             min: function(value) {
                 return value.min - 1;
             },
         }],
         /*visualMap: {
             show: false,
             pieces: [{
                 gte: 20,
                 lt: 35,
                 color: '#85f585'
             }, {
                 gte: 35,
                 color: '#ffff00'
             }]
         },*/
         "series": [{
                 "name": "电压",
                 "type": "bar",
                 "barGap": "10%",
                 "itemStyle": {
                     "normal": {
                         "color": "rgba(255,144,128,1)",
                     }
                 },
                 label: {
                     normal: {
                         show: true,
                         position: 'top',
                         padding: [0, 0, -5, 40],
                         rotate: 60,
                         color: '#3dbaff'
                     }
                 },
                 "data": rankData("v"),
             },
             {
                 "name": "内阻",
                 "type": "line",
                 smooth: false,
                 "itemStyle": {
                     "normal": {
                         "color": "#BF18FE",
                         "barBorderRadius": 0,
                         "label": {
                             "show": true,
                             padding: [0, 0, -5, 40],
                             rotate: 60,
                             //  color: '#BF18FE',
                             "position": "top",
                             formatter: function(p) {
                                 return p.value > 0 ? (p.value) : '';
                             }
                         }
                     }
                 },
                 "data": rankData("i"),
             },
             {
                 "name": "温度",
                 "type": "line",
                 symbolSize: 10,
                 symbol: 'circle',
                 smooth: false,
                 "itemStyle": {
                     "normal": {
                         "color": function(params) {
                             if (params.value < 35) {
                                 return '#0096F3'
                             } else {
                                 return '#ffff00'
                             }
                         },
                         "barBorderRadius": 0,
                         "label": {
                             "show": true,
                             padding: [0, 0, -5, 40],
                             rotate: 60,
                             color: '#3dbaff',
                             "position": "top",
                             formatter: function(p) {
                                 return p.value > 0 ? (p.value) : '';
                             }
                         }
                     }
                 },
                 markLine: {
                     data: [{
                         type: 'average',
                         name: '平均值'
                     }]
                 },
                 "data": rankData("t"),
             }
         ]
     }]
 }

 for (var i = 1; i < 3; i++) {
     var seriesObj = {
         series: [{
                 'data': rankData("v")
             },
             {
                 'data': rankData("i")
             },
             {
                 'data': rankData("t")
             }
         ],
         xAxis: [{
             'data': xData(i)
         }]
     };
     option.options.push(seriesObj);
 }