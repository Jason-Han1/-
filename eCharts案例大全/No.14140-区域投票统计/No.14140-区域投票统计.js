 var nameColor = " rgb(255, 215, 0)"
 var name_fontFamily = '宋体'
 var name_fontSize = 35
 var mapName = 'china'
 var data = [
     {
         name: "陕西",
         value: 145
     },
     {
         name: "甘肃",
         value: 66
     },
     {
         name: "青海",
         value: 24
     },
    
     {
         name: "宁夏回族自治区",
         value: 1
     },
     {
         name: "新疆",
         value: 10006
     },
    
 ];
 var geoCoordMap = {};
 //  var toolTipData = [];


 /*获取地图数据*/
 var mapFeatures = echarts.getMap(mapName).geoJson.features;
 //  console.log(mapFeatures)
 mapFeatures.forEach(function(v) {
     console.info(v)
     // 地区名称
     var name = v.properties.name;
     // 地区经纬度
     geoCoordMap[name] = v.properties.cp;
    
 });
 var max = 480,
     min = 9; // todo 
 var maxSize4Pin = 150,
     minSize4Pin = 20;

 var convertData = function(data) {
     var res = [];
     for (var i = 0; i < data.length; i++) {
         var geoCoord = geoCoordMap[data[i].name];
         if (geoCoord) {
             res.push({
                 name: data[i].name,
                 value: geoCoord.concat(data[i].value),
             });
         }
     }
     return res;
 };
 option = {
     tooltip: {
         trigger: 'item',
         formatter: function(params) {
             // console.log(params)
             if (typeof(params.value)[2] == "undefined") {
                 return params.name + ' : ' + params.value;
             } else {
                 return params.name + ' : ' + params.value[2];
             }
         }
     },
   
     legend: {
         orient: 'vertical',
         y: 'bottom',
         x: 'right',
         data: ['credit_pm2.5'],
         textStyle: {
             color: '#fff'
         }
     },
     visualMap: {
         show: true,
         min: 0,
         max: 500,
         left: 'left',
         top: 'bottom',
         text: ['高', '低'], // 文本，默认为数值文本
         calculable: true,
         seriesIndex: [1],
         inRange: {
             // color: ['#3B5077', '#031525'] // 蓝黑
             //   color: ['#ffc0cb', '#800080'] // 红紫
             // color: ['#3C3B3F', '#605C3C'] // 黑绿
             //   color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
             // color: ['#23074d', '#cc5333'] // 紫红
              color: ['#00467F', '#A5CC82'] // 蓝绿
             //   color: ['#1488CC', '#2B32B2'] // 浅蓝
            //  color: ['#00467F', '#A5CC82', '#ffc0cb'] // 蓝绿红
             // color: ['#00467F', '#A5CC82'] // 蓝绿
             // color: ['#00467F', '#A5CC82'] // 蓝绿
             // color: ['#00467F', '#A5CC82'] // 蓝绿

         }
     },
   
     geo: {
         show: true,
         map: mapName,
         label: {
             normal: {
                 show: false
             },
             emphasis: {
                 show: false,
             }
         },
         roam: true,
         itemStyle: {
             normal: {
                 areaColor: '#031525',
                 borderColor: '#097bba',
             },
             emphasis: {
                 areaColor: 'red',
             }
         }
     },
     series: [
         //散点
         {
             name: '散点',
             type: 'effectScatter',
             coordinateSystem: 'geo',
             data: convertData(data),
             symbolSize: function(val) {
                 return 10;
             },
             label: {
                 normal: {
                     formatter: '{b}',
                     position: 'right',
                     show: true
                 },
                 emphasis: {
                     show: true
                 }
             },
             itemStyle: {
                 normal: {
                     color: '#05C3F9'
                 }
             }
         },
         //区域颜色
         {
             type: 'map',
             map: mapName,
             geoIndex: 0,
             aspectScale: 0.75, //长宽比
             showLegendSymbol: false, // 存在legend时显示
             label: {
                 normal: {
                     show: false
                 },
                 emphasis: {
                     show: false,
                     textStyle: {
                         color: '#fff'
                     }
                 }
             },
             roam: true,
             itemStyle: {
                 normal: {
                     areaColor: '#031525',
                     borderColor: '#3B5077',
                 },
                 emphasis: {
                     areaColor: '#2B91B7'
                 }
             },
             animation: false,
             data: data
         },
         
         {
             name: 'Top 5',
             type: 'effectScatter',
             coordinateSystem: 'geo',
             data: convertData(data.sort(function(a, b) {
                 return b.value - a.value;
             }).slice(0, 5)),
             symbolSize: function(val) {
                 return 20;
             },
             showEffectOn: 'render',
             rippleEffect: {
                 brushType: 'stroke'
             },
             hoverAnimation: true,
             label: {
                 normal: {
                     formatter: '{b}',
                     position: 'right',
                     show: false //bug：设置为true造成top5的省份名称重影
                 }
             },
             itemStyle: {
                 normal: {
                     color: 'blue',
                     shadowBlur: 10,
                     shadowColor: 'black'
                 }
             },
             zlevel: 1
         },

     ]
 };
 //  myChart.setOption(option);
 //取代传统设置，加入自动适应屏幕代码
 myChart.setOption(option);
 //假设实例的名字是myChart,在echats配置完实例以后,配置下面几行代码即可
 window.onresize = function() {
     myChart.resize();
 }