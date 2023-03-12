   var link = document.createElement('link');
   link.href = 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.43.0/mapbox-gl.css';
   link.rel = 'stylesheet';
   document.body.appendChild(link);

   mapboxgl.accessToken = 'pk.eyJ1IjoicmFzYWd5IiwiYSI6Ilk2ay1VMEEifQ.CJfn_CxDfwyN5xaVfx4jaw';

   option = {
       visualMap: {
           show: false,
           max: 1000,
           calculable: true,
           realtime: false,
           inRange: {
               color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf',
                   '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'
               ]
           },
           outOfRange: {
               colorAlpha: 0
           }
       },
       tooltip: {},
       mapbox3D: {
           center: [104.114129, 37.550339],
           zoom: 3,
           pitch: 50,
           bearing: -10,
           style: 'mapbox://styles/mapbox/light-v9',
           altitudeScale: 1e5,
           postEffect: {
               enable: true,
               screenSpaceAmbientOcclusion: {
                   enable: true,
                   intensity: 1,
                   radius: 3,
                   quality: 'high'
               }
           },
           light: {
               main: {
                   intensity: 1,
                   shadow: true,
                   shadowQuality: 'high'
               },
               ambient: {
                   intensity: 0.
               },
               ambientCubemap: {
                   texture: '/asset/get/s/data-1491896094618-H1DmP-5px.hdr',
                   exposure: 2,
                   diffuseIntensity: 0.5
               }
           }
       },
       series: [{
           type: 'map3D',
           coordinateSystem: 'mapbox3D',
           map: 'china',
           regionHeight: 0.5,
           shading: 'lambert',
       }]
   };
   myChart.setOption(option);