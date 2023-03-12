 var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
 var PI = 3.1415926535897932384626;
 var a = 6378245.0;
 var ee = 0.00669342162296594323;

 function bd09Togcj02(bd_lng, bd_lat) {
     var x = bd_lng - 0.0065;
     var y = bd_lat - 0.006;
     var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_PI);
     var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_PI);
     var gg_lng = z * Math.cos(theta);
     var gg_lat = z * Math.sin(theta);
     return [gg_lng, gg_lat];
 }
 var uploadedDataURL = "/asset/get/s/data-1523960589613-BJ8Gjrm2M.json";

 myChart.setOption({
     amap: {
         maxPitch: 60,
         pitch: 45,
         viewMode: '3D',
         zoom: 17,
         expandZoomRange: true,
         zooms: [3, 20],
         mapStyle: 'amap://styles/6bd7d0c78736ef803efcbda2d85f89a5',
         center: bd09Togcj02(125.331257, 43.89264),
         // rotation: 100
     },
     animation: false,
     tooltip: {
         trigger: 'item',
     },
     brush: {
         toolbox: ['rect', 'polygon', 'clear'],
         ouyOfBrush: {
             color: '#ffff00'
         },
         brushStyle: {
             borderWidth: 2,
             color: 'rgba(0,0,0,0.2)',
             borderColor: 'rgba(0,0,0,0.5)',
         },
         seriesIndex: [0, 1],
         throttleType: 'debounce',
         throttleDelay: 300,
         geoIndex: 'all',
     },
     series: [{
         type: 'lines',
         coordinateSystem: 'amap',
         polyline: true,
         data: [],
         silent: true,
         lineStyle: {
             normal: {
                 opacity: 0.2,
                 width: 2
             }
         },
         progressiveThreshold: 500,
         progressive: 100,
         zlevel: 2,
     }, {
         type: 'lines',
         coordinateSystem: 'amap',
         polyline: true,
         data: [],
         lineStyle: {
             normal: {
                 width: 0.04
             }
         },
         effect: {
             constantSpeed: 40,
             show: true,
             trailLength: 0.04,
             symbolSize: 2
         },
         zlevel: 1
     }]
 });

 var map = myChart.getModel().getComponent('amap').getAMap();
 var layer = myChart.getModel().getComponent('amap').getLayer();

 AMap.plugin(["AMap.ControlBar"], function() {
     var bar = new AMap.ControlBar();
     map.addControl(bar);
 });
 $.getJSON(uploadedDataURL, function(result) {
     data = result.map(val => {
         return {
             coords: val.coords.map(coords => {
                 return bd09Togcj02(coords[0], coords[1]);
             }),
             "lineStyle": val.lineStyle
         };
     });
     myChart.setOption({
         series: [{
             data: data
         }, {
             data: data
         }]
     })
 });
 layer.render = function() {
     let series = myChart.getOption().series;
     myChart.setOption({
         series: []
     });
     myChart.setOption({
         series: series
     });
 }