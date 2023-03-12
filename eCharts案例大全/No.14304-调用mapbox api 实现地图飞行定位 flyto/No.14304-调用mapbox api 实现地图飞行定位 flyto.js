var uploadedDataURL1 = "/asset/get/s/data-1514531213518-SJL5tvmmG.hdr";

var uploadedDataURL2 = "/asset/get/s/data-1514531203136-rysKFPQ7M.json";
mapboxgl.accessToken = mapboxglToken;
$.getJSON(uploadedDataURL2, function(data) {

    data = data.filter(function(dataItem) {
        return dataItem[2] > 0;
    }).map(function(dataItem) {
        return [dataItem[0], dataItem[1], dataItem[2]];
    });

    myChart.setOption({
        title: {
            text: '空格键启动飞行',
            left: 'center'
        },
        visualMap: {
            show: false,
            max: 1000,
            calculable: true,
            realtime: false,
            inRange: {
                color: ['#23074d', '#cc5333']
            },
            outOfRange: {
                colorAlpha: 0
            }
        },
        mapbox: {
            center: [104.114129, 37.550339],
            zoom: 3,
            pitch: 50,
            bearing: -10,
            style: 'mapbox://styles/mapbox/light-v9',
            boxHeight: 20,
            // altitudeScale: 3e2,
            postEffect: {
                enable: false,
                SSAO: {
                    enable: true,
                    radius: 2
                }
            },
            light: {
                main: {
                    intensity: 2,
                    shadow: true,
                    shadowQuality: 'high'
                },
                ambient: {
                    intensity: 1.0
                },
                ambientCubemap: {
                    texture: uploadedDataURL1,
                    exposure: 2,
                    diffuseIntensity: 0.5
                }
            }
        },
        series: [{
            type: 'bar3D',
            coordinateSystem: 'mapbox',
            shading: 'lambert',
            minHeight: 0.1,
            barSize: 0.3,
            data: data,
            silent: true
        }]
    });

    var isPerspective = true;


    //飞行目的地 可以点击地图获取，坐标会输出到控制台
    var locations = [{
        "camera": {
            center: [112.53778846748253, 41.60655252782351],
            zoom: 8,
            pitch: 30
        }
    }, {
        "camera": {
            center: [107.79175922308059, 30.00052304525201],
            zoom: 8,
            pitch: 40
        }
    }, {
        "camera": {
            center: [118.94102201550334, 28.165606490352943],
            zoom: 8,
            pitch: 50
        }
    }, {
        "camera": {
            center: [123.95740624281103, 37.27393230192344],
            zoom: 8,
            pitch: 60
        }
    }];

    //获取mapbox地图对象
    var map = myChart.getModel().getComponent('mapbox').getMapbox();

    //监听点击地图事件 获取地图坐标 加入飞行目的地数组
    map.on('click', function(e) {
        console.log('center: [' + e.lngLat.lng + ', ' + e.lngLat.lat + ']');
    });

    function playback(index) {
        //其他飞行参数参考：https://www.mapbox.com/mapbox-gl-js/api#map#flyto
        map.flyTo(locations[index].camera);
        map.once('moveend', function() {
            // Duration the slide is on screen after interaction
            window.setTimeout(function() {
                index = index + 1;
                if (index + 1 <= locations.length) {
                    playback(index);
                }
                // Increment index
                // index = (index + 1 === locations.length) ? 0 : index + 1;

            }, 3000); // After callback, show the location for 3 seconds.
        });
    }
    //空格键启动飞行
    window.addEventListener('keydown', function(e) {
        playback(0);
    });

});