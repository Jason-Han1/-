   var mapName = "china";
   var chinaJson = echarts.getMap(mapName).geoJson;

   //注册地图 -- 包含下一级
   function registerAllMap(mapName, mapJson) {
       echarts.registerMap(mapName, mapJson);
       $.each(mapJson.features, function() {
           echarts.registerMap(this.properties.name, {
               "type": "FeatureCollection",
               "features": [this]
           })
       })
   }
   registerAllMap(mapName, chinaJson);
   //地图 配置项
   function getMapOption(mapName) {
       var geoCoordsMap = {};
       var mapData = echarts.getMap(mapName).geoJson;
       $.each(mapData.features, function() {
           geoCoordsMap[this.properties.name] = this.properties.cp;
       });
       //地图数据 - 模拟数据

       var seriesData = [];
       $.each(mapData.features, function() {
           seriesData.push({
               name: this.properties.name,
               value: 1
           });
       });

       var convertData = function(data) {
           var scatterData = [];
           for (var i = 0; i < data.length; i++) {
               var geoCoords = geoCoordsMap[data[i].name];
               if (geoCoords) {
                   var obj = {
                       name: data[i].name,
                       value: geoCoords.concat(data[i].value)
                   };
                   scatterData.push(obj);
               }
           }
           return scatterData;
       };
       var aspectScale = 0.85;

       var zoom = 0.6;
       return {

           title: {
               text: mapName,
               left: 'center'
           },
           toolbox: {
               feature: {
                   myBack: {
                       show: false,
                       title: '返回',
                       icon: 'path://M473.2 276.9v-133c-4-18.4-11.7-27-20.2-30.3-17.2-6.7-37.8 8.5-37.8 8.5L95.9 395.4c-70.1 48.4-4.8 84.7-4.8 84.7L405.5 751c62.9 46 67.7-24.2 67.7-24.2V603.4c319.3-99.2 449.9 297.5 449.9 297.5 12.1 21.8 19.3 0 19.3 0 123.4-595-469.2-624-469.2-624z m0 0',
                       iconStyle: {
                           color: "#1aaef6",
                           borderColor: "#1aaef6"
                       },
                       onclick: function() {
                           var opt = getMapOption(mapName);
                           opt.toolbox.feature.myBack.show = false;
                           myChart.setOption(opt);
                       }
                   }
               }
           },
           geo: {
               map: mapName,
               top: 0,
               bottom: 0,
               aspectScale: aspectScale,
               zoom: zoom,
               itemStyle: { //地图区域的多边形 图形样式
                   normal: { //是图形在默认状态下的样式
                       borderWidth: 1,
                       borderColor: '#75cef9',
                       shadowColor: '#5daee2',
                       shadowOffsetY: 10,
                       shadowOffsetX: 8
                   }

               }
           },

           series: [{
                   type: 'map',
                   top: 0,
                   z: 2,
                   bottom: 0,
                   mapType: mapName,
                   selectedMode: 'single',
                   aspectScale: aspectScale,
                   zoom: zoom,
                   roam: false, //是否开启鼠标缩放和平移漫游
                   label: {
                       show: false
                   },
                   itemStyle: {
                       borderWidth: 1,
                       borderColor: '#75cef9',
                       areaColor: {
                           type: 'linear',
                           x: 0,
                           y: 0,
                           x2: 0,
                           y2: 800,
                           colorStops: [{
                               offset: 0,
                               color: '#0770d5' // 0% 处的颜色
                           }, {
                               offset: 1,
                               color: '#43bef6' // 100% 处的颜色
                           }],
                           global: true
                       }

                   },
                   emphasis: {
                       label: {
                           show: false
                       },
                       itemStyle: {
                           areaColor: '#ff9a2c'
                       }
                   },
                   data: seriesData
               },
               {
                   name: 'Top 3',
                   type: 'effectScatter',
                   coordinateSystem: 'geo',
                   symbolSize: 4,
                   z: 3,
                   label: {
                       show: true,
                       position: "right",
                       color: '#abfffc',
                       fontSize: 14,
                       formatter: '{b}',
                       offset: [5, 0]
                   },
                   rippleEffect: {
                       brushType: 'fill',
                       scale: 8
                   },
                   itemStyle: {
                       color: '#01fafe'
                   },
                   emphasis: {
                       label: {
                           color: '#092550'
                       }
                   },
                   silent: 1,
                   data: convertData(seriesData)
               }
           ]
       };
   }

   option = getMapOption(mapName);

   //地图切换事件
   myChart.on("mapselectchanged", function(e) {
       var name = e.batch[0].name;
       if (e.batch[0].selected[name]) {
           var opt = getMapOption(name);
           opt.toolbox.feature.myBack.show = true;
           myChart.setOption(opt);

       }
   });