 var charts = { // 按顺序排列从大到小
     cityList: ['南山区','福田区','宝安区','罗湖区','龙岗区','盐田区','坪山区',],
     cityData: [51,29,38,45,66,78,32]
 }
 var top10CityList = charts.cityList
 var top10CityData = charts.cityData
 var color = ['#ff9500', '#02d8f9', '#027fff']
 var color1 = ['#ffb349', '#70e9fc', '#4aa4ff']

 let lineY = []
 let lineT = []
 for (var i = 0; i < charts.cityList.length; i++) {
     var x = i
     if (x > 1) {
         x = 2
     }
     var data = {
         name: charts.cityList[i],
         color: color[x],
         value: top10CityData[i],
         barGap: '-100%',
         itemStyle: {
             normal: {
                 show: true,
                 color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                     offset: 0,
                     color: color[x]
                 }, {
                     offset: 1,
                     color: color1[x]
                 }], false),
                 barBorderRadius: 10
             },
             emphasis: {
                 shadowBlur: 15,
                 shadowColor: 'rgba(0, 0, 0, 0.1)'
             }
         }
     }
     var data1 = {
         value: top10CityData[0],
         itemStyle: {
             color: '#001235',
             barBorderRadius: 10
         }
     }
     lineY.push(data)
     lineT.push(data1)
 }
 var backTop = []
 for (var i = top10CityData.length - 1; i >= 0; i--) {
     backTop.push((top10CityData[i]))
 }
 option = {
     backgroundColor: '#474747',
     title: {
         show: false
     },
     tooltip: {
         trigger: 'item',
         formatter: function(p) {
             if (p.seriesName === 'total') {
                 return ''
             }
             return p.name + "<br/>" + (p.value) + '起'
         },
         textStyle: {
             fontSize: 24,
             color: '#fff'
         }
     },
     grid: {
         borderWidth: 0,
         top: '2%',
         left: '5%',
         right: '15%',
         bottom: '0%'
     },
     color: color,
     yAxis: [{
         type: 'category',
         inverse: true,
         axisTick: {
             show: false
         },
         axisLine: {
             show: false
         },
         axisLabel: {
             show: false,
             inside: false
         },
         data: top10CityList
     }, {
         type: 'category',
         axisLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             interval: 0,
             color: '#e3c478',
             align: 'right',
             margin: 60,
             fontSize: 18,
             formatter: function(val) {
                 return val + '起'
             },
         },
         splitArea: {
             show: false
         },
         splitLine: {
             show: false
         },
         data: backTop
     }],
     xAxis: {
         type: 'value',
         axisTick: {
             show: false
         },
         axisLine: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisLabel: {
             show: false
         }
     },
     series: [{
         name: 'total',
         type: 'bar',
         zlevel: 1,
         barGap: '-100%',
         barWidth: '10px',
         data: lineT,
         legendHoverLink: false
     }, {
         name: 'bar',
         type: 'bar',
         zlevel: 2,
         barWidth: '10px',
         data: lineY,
         label: {
             normal: {
                 color: '#b3ccf8',
                 show: true,
                 position: [0, '-24px'],
                 textStyle: {
                     fontSize: 16
                 },
                 formatter: function(a) {
                     var num = ''
                     var str = ''
                     num = 'NO.' + (a.dataIndex + 1);
                     if (a.dataIndex === 0) {
                         str = '{color1|' + num + '} {color4|' + a.name + '}'
                     } else if (a.dataIndex === 1) {
                         str = '{color2|' + num + '} {color4|' + a.name + '}'
                     } else {
                         str = '{color3|' + num + '} {color4|' + a.name + '}'
                     }
                     return str;
                 },
                 rich: {
                     color1: {
                         color: '#ff9500',
                         fontWeight: 700,
                         fontSize: 18
                     },
                     color2: {
                         color: '#02d8f9',
                         fontWeight: 700,
                         fontSize: 18
                     },
                     color3: {
                         color: '#027fff',
                         fontWeight: 700,
                         fontSize: 18
                     },
                     color4: {
                         color: '#e5eaff',
                         fontSize: 18
                     }
                 }
             }
         }
     }],
 }