      const minLng = 120.9337719797137;
      const minLat = 30.85610622801201;
      const maxLat = 31.452846278953274;
      const maxLng = 121.69631352726838;

      const scale = 8000;

      const averageLng = (maxLng - minLng) / 50;
      const averageLat = (maxLat - minLat) / 50;


      var UPDATE_DURATION = 100;

      window.AudioContext = window.AudioContext || window.webkitAudioContext;

      var audioContext = new AudioContext();

      var oReq = new XMLHttpRequest();
      oReq.open('GET', '/asset/get/s/data-1493350085456-S1p6LNlyZ.mp3', true);
      oReq.responseType = 'arraybuffer';

      oReq.onload = function(e) {
          audioContext.decodeAudioData(oReq.response, initVisualizer);
      };
      oReq.send();

      function initVisualizer(audioBuffer) {
          inited = true;

          var source = audioContext.createBufferSource();
          source.buffer = audioBuffer;

          // Must invoked right after click event
          if (source.noteOn) {
              source.noteOn(0);
          } else {
              source.start(0);
          }

          var analyzer = audioContext.createAnalyser();
          var gainNode = audioContext.createGain();
          analyzer.fftSize = 4096;

          gainNode.gain.value = 1;
          source.connect(gainNode);
          gainNode.connect(analyzer);
          analyzer.connect(audioContext.destination);

          var frequencyBinCount = analyzer.frequencyBinCount;
          var dataArray = new Uint8Array(frequencyBinCount);


          var beta = 0;
          // copy   from http://echarts.baidu.com/examples/editor.html?c=bar3d-music-visualization&gl=1
          function update() {
              analyzer.getByteFrequencyData(dataArray);

              var item = [];
              var size = 50;
              var dataProvider = [];

              for (var i = 0; i < size * size; i++) {
                  var x = i % size;
                  var y = Math.floor(i / size);
                  var dx = x - size / 2;
                  var dy = y - size / 2;

                  var angle = Math.atan2(dy, dx);
                  if (angle < 0) {
                      angle = Math.PI * 2 + angle;
                  }
                  var dist = Math.sqrt(dx * dx + dy * dy);
                  var idx = Math.min(
                      frequencyBinCount - 1, Math.round(angle / Math.PI / 2 * 60 + dist * 60) + 100
                  );

                  var val = Math.pow(dataArray[idx] / 100, 3);
                  dataProvider.push([x, y, Math.max(val, 0.1)]);
              }
              let musdata = [];
              for (let i = 0; i < dataProvider.length; i++) {
                  let d = dataProvider[i];
                  let x = d[0],
                      y = d[1],
                      z = d[2];
                  let lng = minLng + x * averageLng;
                  let lat = minLat + y * averageLat;
                  let height = z * scale;
                  if (height < 2000) continue;
                  musdata.push({
                      name: Math.random() * 10000,
                      value: [lng, lat, height]
                  })
              }

              myChart.setOption({
                  series: [{
                      data: musdata
                  }]
              });
              beta += 2;

              setTimeout(update, UPDATE_DURATION);
          };

          update();
      }

      option = {
          tooltip: {},
          visualMap: {
              show: false,
              min: 0.1 * scale,
              max: 4 * scale,
              inRange: {
                  color: ['#010103', '#2f490c', '#b0b70f', '#fdff44', '#fff']
              }
          },
          maptalks3D: {
              urlTemplate: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
              center: [121.4693, 31.123070],
              zoom: 11,
              pitch: 60,
              // boxHeight: 30,
              environment: '#000',
              viewControl: {
                  distance: 100
              },
              postEffect: {
                  enable: true,
                  FXAA: {
                      enable: true
                  }
              },
              light: {
                  main: {
                      shadow: true,
                      intensity: 10,
                      quality: 'high'
                  },
                  ambientCubemap: {
                      texture: '/asset/get/s/data-1530248984324-SyeXJSmM7.hdr',
                      exposure: 0,
                      diffuseIntensity: 0.2
                  }
              }
          },
          series: [{
              type: 'bar3D',
              silent: true,
              shading: 'lambert',
              coordinateSystem: 'maptalks3D',
              data: [],
              barSize: 1,
              lineStyle: {
                  width: 4
              },
              animationDurationUpdate: UPDATE_DURATION
          }]
      }
      myChart.setOption(option);
      var map = myChart.getModel().getComponent('maptalks3D').getMaptalks();
      console.log(map);