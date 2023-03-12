 var uploadedDataURL = "https://geo.datav.aliyun.com/areas_v2/bound/511000_full.json";

 //如果想要修改，请点击上方克隆，然后在自己的版本上修改，不要在lz的版本上改！！



 var colors = [
     ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
     ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
     ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
 ];
 var colorIndex = 0;
 $(function() {
     var geoCoordMap = {
         '资中县': [104.85212, 29.76416],
         '东兴区': [105.17157, 29.69684],
         '市中区': [104.94698, 29.56942],
         "威远县": [104.66885, 29.52742],
         '隆昌市': [105.28773, 29.33948]

     };
     var year = ["2014", "2015", "2016", "2017", "2018","2019"];
     var mapData = [
         [{
             "year": '2014',
             "name": "资中县",
             "value": 1056
         }, {
             "year": '2014',
             "name": "东兴区",
             "value": 48
         }, {
             "year": '2014',
             "name": "市中区",
             "value": 3594
         }, {
             "year": '2014',
             "name": "威远县",
             "value": 108
         }, {
             "year": '2014',
             "name": "隆昌市",
             "value": 8542
         }],
         [{
             "year": '2015',
             "name": "资中县",
             "value": 402
         }, {
             "year": '2015',
             "name": "东兴区",
             "value": 402
         }, {
             "year": '2015',
             "name": "市中区",
             "value": 402
         }, {
             "year": '2015',
             "name": "威远县",
             "value": 402
         }, {
             "year": '2015',
             "name": "隆昌市",
             "value": 402
         }],
         [{
             "year": '2016',
             "name": "资中县",
             "value": 402
         }, {
             "year": '2016',
             "name": "东兴区",
             "value": 402
         }, {
             "year": '2016',
             "name": "市中区",
             "value": 402
         }, {
             "year": '2016',
             "name": "威远县",
             "value": 402
         }, {
             "year": '2016',
             "name": "隆昌市",
             "value": 402
         }],
         [{
             "year": '2017',
             "name": "资中县",
             "value": 402
         }, {
             "year": '2017',
             "name": "东兴区",
             "value": 402
         }, {
             "year": '2017',
             "name": "市中区",
             "value": 402
         }, {
             "year": '2017',
             "name": "威远县",
             "value": 402
         }, {
             "year": '2017',
             "name": "隆昌市",
             "value": 402
         }],
         [{
             "year": '2018',
             "name": "资中县",
             "value": 402
         }, {
             "year": '2018',
             "name": "东兴区",
             "value": 402
         }, {
             "year": '2018',
             "name": "市中区",
             "value": 402
         }, {
             "year": '2018',
             "name": "威远县",
             "value": 402
         }, {
             "year": '2018',
             "name": "隆昌市",
             "value": 402
         }],
         [{
             "year": '2019',
             "name": "资中县",
             "value": 402
         }, {
             "year": '2019',
             "name": "东兴区",
             "value": 402
         }, {
             "year": '2019',
             "name": "市中区",
             "value": 402
         }, {
             "year": '2019',
             "name": "威远县",
             "value": 402
         }, {
             "year": '2019',
             "name": "隆昌市",
             "value": 402
         }]
     ];

     /*柱子Y名称*/
     var categoryData = [];
     var barData = [];
     
     for (var i = 0; i < mapData.length; i++) {
         barData.push([]);
         for (var j = 0; j < mapData[i].length; j++) {
             barData[i].push(mapData[i][j].value)
         }
     }
     $.getJSON(uploadedDataURL, function(geoJson) {

         echarts.registerMap('china', geoJson);
         var convertData = function(data) {
             var res = [];
             for (var i = 0; i < data.length; i++) {
                 var geoCoord = geoCoordMap[data[i].name];
                 if (geoCoord) {
                     res.push({
                         name: data[i].name,
                         value: geoCoord.concat(data[i].value)
                     });
                 }
             }
             return res;
         };

         var convertToLineData = function(data, gps) {
             var res = [];
             for (var i = 0; i < data.length; i++) {
                 var dataItem = data[i];
                 var fromCoord = geoCoordMap[dataItem.name];
                 debugger;
                 var toCoord = gps; //郑州
                 //  var toCoord = geoGps[Math.random()*3]; 
                 if (fromCoord && toCoord) {
                     res.push([{
                         coord: fromCoord,
                         value: dataItem.value
                     }, {
                         coord: toCoord,
                     }]);
                 }
             }
             return res;
         };

         optionXyMap01 = {
             timeline: {
                 data: year,
                 axisType: 'category',
                 autoPlay: true,
                 playInterval: 3000,
                 left: '10%',
                 right: '10%',
                 bottom: '3%',
                 width: '80%',
                 //  height: null,
                 label: {
                     normal: {
                         textStyle: {
                             color: '#ddd'
                         }
                     },
                     emphasis: {
                         textStyle: {
                             color: '#fff'
                         }
                     }
                 },
                 symbolSize: 10,
                 lineStyle: {
                     color: '#555'
                 },
                 checkpointStyle: {
                     borderColor: '#777',
                     borderWidth: 2
                 },
                 controlStyle: {
                     showNextBtn: true,
                     showPrevBtn: true,
                     normal: {
                         color: '#666',
                         borderColor: '#666'
                     },
                     emphasis: {
                         color: '#aaa',
                         borderColor: '#aaa'
                     }
                 },

             },
             baseOption: {
                 animation: true,
                 animationDuration: 1000,
                 animationEasing: 'cubicInOut',
                 animationDurationUpdate: 1000,
                 animationEasingUpdate: 'cubicInOut',
                 grid: {
                     right: '1%',
                     top: '15%',
                     bottom: '10%',
                     width: '20%'
                 },
                 tooltip: {
                     trigger: 'axis', // hover触发器
                     axisPointer: { // 坐标轴指示器，坐标轴触发有效
                         type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                         shadowStyle: {
                             color: 'rgba(150,150,150,0.1)' //hover颜色
                         }
                     }
                 },
                 geo: {
                     show: true,
                     map: 'china',
                     roam: true,
                     zoom: 1,
                     center: [105.06776, 29.58698],
                     label: {
                         emphasis: {
                             show: false
                         }
                     },
                     itemStyle: {
                         normal: {
                             borderColor: 'rgba(147, 235, 248, 1)',
                             borderWidth: 1,
                             areaColor: {
                                 type: 'radial',
                                 x: 0.5,
                                 y: 0.5,
                                 r: 0.8,
                                 colorStops: [{
                                     offset: 0,
                                     color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                                 }, {
                                     offset: 1,
                                     color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                                 }],
                                 globalCoord: false // 缺省为 false
                             },
                             shadowColor: 'rgba(128, 217, 248, 1)',
                             // shadowColor: 'rgba(255, 255, 255, 1)',
                             shadowOffsetX: -2,
                             shadowOffsetY: 2,
                             shadowBlur: 10
                         },
                         emphasis: {
                             areaColor: '#389BB7',
                             borderWidth: 0
                         }
                     }
                 },
             },
             options: []

         };
         for (var n = 0; n < year.length; n++) {
             optionXyMap01.options.push({
                 backgroundColor: '#051b4a',
                 title: [{
                         /* text: '地图',
                          subtext: '内部数据请勿外传',
                          left: 'center',
                          textStyle: {
                              color: '#fff'
                          }*/
                     },
                     {
                         id: 'statistic',
                         text: year[n] + "年数据统计情况",
                         left: '75%',
                         top: '8%',
                         textStyle: {
                             color: '#fff',
                             fontSize: 30
                         }
                     }
                 ],
                 xAxis: {
                     type: 'value',
                     scale: true,
                     position: 'top',
                     min: 0,
                     boundaryGap: false,
                     splitLine: {
                         show: false
                     },
                     axisLine: {
                         show: false
                     },
                     axisTick: {
                         show: false
                     },
                     axisLabel: {
                         margin: 2,
                         textStyle: {
                             color: '#aaa'
                         }
                     },
                 },
                 yAxis: {
                     type: 'category',
                     //  name: 'TOP 20',
                     nameGap: 16,
                     axisLine: {
                         show: true,
                         lineStyle: {
                             color: '#ddd'
                         }
                     },
                     axisTick: {
                         show: false,
                         lineStyle: {
                             color: '#ddd'
                         }
                     },
                     axisLabel: {
                         interval: 0,
                         textStyle: {
                             color: '#ddd'
                         }
                     },
                     data: categoryData
                 },
                 series: [
                     //未知作用
                     {
                         //文字和标志
                         name: 'light',
                         type: 'scatter',
                         coordinateSystem: 'geo',
                         data: convertData(mapData[n]),
                         symbolSize: function(val) {
                             return val[2] / 10;
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
                                 color: colors[colorIndex][n]
                             }
                         }
                     },
                     //地图？
                     {
                         type: 'map',
                         map: '内江市',
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
                                 borderColor: '#FFFFFF',
                             },
                             emphasis: {
                                 areaColor: '#2B91B7'
                             }
                         },
                         animation: false,
                         data: mapData
                     },

                     //柱状图
                     {
                         zlevel: 1.5,
                         type: 'bar',
                         symbol: 'none',
                         itemStyle: {
                             normal: {
                                 color: colors[colorIndex][n]
                             }
                         },
                         data: barData[n]
                     }
                 ]
             })
         }
         myChart.setOption(optionXyMap01);
     });
 });

