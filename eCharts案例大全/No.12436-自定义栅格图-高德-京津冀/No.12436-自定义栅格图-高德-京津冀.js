     var map = new AMap.Map('chart-panel', {
         mapStyle: "amap://styles/3217e099bb7b1bb4a8e063ce169bbb5b",
         pitch: 52,
         zoom: 7,
         center: [116.472804, 39.995725],
         viewMode: '3D', //开启3D视图,默认为关闭
         buildingAnimation: true, //楼块出现是否带动画                
         cursor: 'pointer',
         features: ['road', 'building', 'point']
     });


     map.on('complete', function() {
         map.plugin(['AMap.ControlBar'], function() {
             var controlBar = new AMap.ControlBar({
                 position: {
                     right: '0',
                     bottom: '-173px'
                 }
             });
             map.addControl(controlBar);
         });
         map.plugin(['AMap.MapType'], function() {
             var mapType = new AMap.MapType({
                 liteStyle: true
             });
             map.addControl(mapType);
         });
         map.plugin(['AMap.Scale'], function() {
             var scale = new AMap.Scale();
             map.addControl(scale);
         });
         map.plugin(['AMap.ToolBar'], function() {
             var toolBar = new AMap.ToolBar();
             map.addControl(toolBar);
         });
         map.plugin(['AMap.DistrictLayer'], function() {
             var disCountry = new AMap.DistrictLayer.Country({
                 SOC: 'CHN',
                 depth: 2,
                 styles: {
                     'province-stroke': 'cornflowerblue',
                     'city-stroke': 'white', //中国地级市边界
                     'county-stroke': 'white', //'#3c648780', //中国区县边界
                     'fill': 'rgba(0,0,0,0)',
                 }
             });
             disCountry.setMap(map);
         });

         var layer = new AMap.TileLayer({
             zIndex: -1,
             getTileUrl: 'https://t{0,1,2,3,4,5,6,7}.tianditu.gov.cn/DataServer?tk=95f31e3625a164fbdc09ef6ba9b971ad&T=ter_w&x=[x]&y=[y]&l=[z]'
         });
         layer.setMap(map);
         map.on('dblclick', function() {
             map.remove(layer);
             layer = new AMap.TileLayer({
                 zIndex: -1,
                 getTileUrl: 'http://106.38.83.13/ArcGIS/rest/services/JJJSlope/MapServer/tile/[z]/[y]/[x]'
             });
             layer.setMap(map);
         });

         function drawvisualLayer() {
             $.getJSON("/asset/get/s/data-1544592880173-tRoZbKmvl.json", function(data) {
                 var loca = Loca.create(map);

                 var Player = Loca.visualLayer({
                     container: loca,
                     type: 'point',
                     shape: 'circle',
                 });
                 Player.setData(data)
                 Player.setOptions({
                     lnglat: function(res) {
                         var data = res.value;
                         var center = [data.longitude, data.latitude];
                         return center;
                     },
                     style: {
                         unit: 'meter',
                         opacity: 0.521,
                         radius: 2,
                         fill: function(res) {
                             var aqi = res.value.aqi;
                             var color = 'gray';
                             if (aqi <= 50) {
                                 color = '#43ce17';
                             } else if (aqi <= 100) {
                                 color = '#efdc31';
                             } else if (aqi <= 150) {
                                 color = '#fa0';
                             } else if (aqi <= 200) {
                                 color = '#ff401a';
                             } else if (aqi <= 300) {
                                 color = '#d20040';
                             } else {
                                 color = '#9c0a4e';
                             }
                             return color;
                         }
                     }
                 });
                 Player.render();




             });
         }
         drawvisualLayer();

         const area = ['河北省', '北京市', '天津市']
         //area = area.concat($option.prop('value').split(','));
         map.plugin(['AMap.DistrictSearch'], function() {
             const district = new AMap.DistrictSearch({
                 subdistrict: 0, //返回下一级行政区
                 extensions: 'all', //返回行政区边界坐标组等具体信息
             });
             let bounds = [];
             search();

             function search(index) {
                 if (!index) {
                     index = 0;
                 }
                 let province = area[index]
                 if (province) {
                     district.search(province, function(status, result) {
                         bounds = bounds.concat(result.districtList[0].boundaries);
                         index++;
                         search(index);
                     });
                 } else {
                     function run(bounds) {
                         var prism = new AMap.Object3D.Wall({
                             path: bounds,
                             height: 5000,
                             color: '#0088ffcc'
                         });
                         prism.transparent = true;
                         var object3Dlayer = new AMap.Object3DLayer({
                             zIndex: 1
                         });
                         object3Dlayer.add(prism)
                         object3Dlayer.setMap(map);

                         var mask = bounds.map(function(item) {
                             return [item]
                         });
                         map.setMask(mask);
                     }
                     run(bounds);

                 }
             }
         });

     });