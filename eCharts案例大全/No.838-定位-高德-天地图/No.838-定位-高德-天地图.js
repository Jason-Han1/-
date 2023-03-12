 AMap.plugin(["AMap.Geolocation", 'AMap.DistrictSearch'], function() {
     new AMap.Geolocation().getCurrentPosition(function(status, r) {
         var marker = new AMap.Marker({
             position: new AMap.LngLat(r.position.lng, r.position.lat),
             title: r.formattedAddress,
             /*label:{
                 content:r.addressComponent.township
             }*/
         });
         var district = new AMap.DistrictSearch({
             subdistrict: 0, //返回下一级行政区
             level: 'province',
             extensions: 'all', //返回行政区边界坐标组等具体信息
         }).search(r.addressComponent.province, function(status, result) {
             result = result.districtList[0];
             var bounds = result.boundaries;

             var map = new AMap.Map('chart-panel', {
                 mapStyle: "amap://styles/3217e099bb7b1bb4a8e063ce169bbb5b",
                 mask: bounds.map(function(item) {
                     return [item]
                 }),
                 center: result.center,
                 pitch: 52,
                 viewMode: '3D', //开启3D视图,默认为关闭
                 buildingAnimation: true, //楼块出现是否带动画                
                 labelzIndex: 130,
                 cursor: 'pointer',
                 features: ['road', 'building', 'point']
             });

             map.on('complete', function() {
                 marker.setMap(this);
                 this.setCity(r.addressComponent.adcode);
                 map.plugin(['AMap.ControlBar'], function() {
                     var controlBar = new AMap.ControlBar({
                         position: {
                             right: '0',
                             bottom: '-173px'
                         }
                     });
                     map.addControl(controlBar);
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
                         zIndex: 1,
                         depth: 2,
                         styles: {
                             'province-stroke': 'cornflowerblue',
                             'city-stroke': 'white', //中国地级市边界
                             'county-stroke': '#3c648780', //中国区县边界
                             'fill': 'rgba(0,0,0,0)',
                         }
                     })

                     disCountry.setMap(map);
                 });
                 var prism = new AMap.Object3D.Wall({
                     path: bounds,
                     height: 5000,
                     color: '#0088ffcc'
                 });
                 prism.transparent = true;
                 var object3Dlayer = new AMap.Object3DLayer({});
                 object3Dlayer.add(prism)
                 object3Dlayer.setMap(map);

                 var tianditu = new AMap.TileLayer({
                     zIndex: -1,
                     getTileUrl: 'http://t{1,2,3,4}.tianditu.gov.cn/DataServer?tk=2ce94f67e58faa24beb7cb8a09780552&T=ter_w&x=[x]&y=[y]&l=[z]'
                 })
                 tianditu.setMap(map);
             });
         });
     });
 });