var uploadedDataURL = "/asset/get/s/data-1545905089674-xD7xKxAku.json";

var MapboxStyleDataURL = "/asset/get/s/data-1522488401196-HJYUN03qz.json";//自定义mapbox的style，使其标签为中文


mapboxgl.accessToken = mapboxglToken;

myChart.showLoading();

// function coltowgs(LONCOL, LATCOL) {//定义栅格转换经纬度的函数
//     var lat1 = 30.6666667;
//     var lat2 = 31.8833333;
//     var lon1 = 120.866667;
//     var lon2 = 122.2;
//     var accuracy = 500;
//     var latStart = Math.min(lat1, lat2);
//     var lonStart = Math.min(lon1, lon2);
//     var deltaLon = accuracy * 360 / (2 * Math.PI * 6371004 * Math.cos((lat1 + lat2) * Math.PI / 360));
//     var deltaLat = accuracy * 360 / (2 * Math.PI * 6371004);
//     var HBLON = LONCOL * deltaLon + (lonStart - deltaLon / 2)
//     var HBLAT = LATCOL * deltaLat + (latStart - deltaLat / 2)
//     return [HBLON, HBLAT]
// }
$.getJSON(MapboxStyleDataURL, function(MapboxStyle) {//读取MapboxStyle数据
var option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval: 600,
            left: null,
            right: 0,
            top: null,
            bottom: 50,
            width: 55,
            height: null,
            label: {
                normal: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#aaa'
                    }
                }
            },
            symbol: 'circle',
            lineStyle: {
                color: '#555'
            },
            checkpointStyle: {
                color: '#bbb',
                borderColor: '#777',
                borderWidth: 2
            },
            controlStyle: {
                normal: {
                    color: '#666',
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            data: []
        },
        title: {
            text: "杭州居民活动点分布可视化",
            textStyle: {
                color: '#fff',
                fontSize: 30
            },
            right: '5%'
        },

        visualMap: {
            show: false,
            calculable: true,
            realtime: false,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            outOfRange: {
                colorAlpha: 0
            }

        },

        mapbox: {

            center: [120.207365,30.269041],
            zoom: 10,
            pitch: 40,
            bearing: -0,
            //style:MapboxStyle,
            style: 'mapbox://styles/mapbox/dark-v9',
            boxHeight: 25,
            //altitudeScale: 1,
            postEffect: {
                enable: true,
                SSAO: {
                    enable: true,
                    radius: 2,
                    intensity: 1.5
                }
            },
            light: {
                main: {
                    intensity: 1,
                    shadow: false,
                    shadowQuality: 'high'
                },
                ambient: {
                    intensity: 0.
                },
                ambientCubemap: {
                    texture: '/asset/get/s/data-1491896094618-H1DmP-5px.hdr',
                    exposure: 1,
                    diffuseIntensity: 0.5
                }
            }
        },
        series: [{
            type: 'bar3D',
            shading: 'realistic',
            coordinateSystem: 'mapbox',
            
            barSize: 0.5,
            silent: true
        }]
    },
    options: []//timeline所用的多个option存放处，读取数据后添加
}

$.getJSON(uploadedDataURL, function(linedata) {//读取可视化数据
    myChart.hideLoading();
    
    for (var n = 0; n < linedata[0].length; n++) {//对数据中每天数据整理后添加到options中，以便timeline使用
        option.baseOption.timeline.data.push(linedata[2][n]);
        timedata = linedata[0][n]
        var data = []
        for (var i = 0; i < timedata.length; i += 1) {
            loncol = linedata[0][n][i][0]
            latcol = linedata[0][n][i][1]
            count = linedata[0][n][i][2]
            coor = [loncol, latcol]
            data.push({
                'value': [coor[0], coor[1], count]
            })
        }
        data.push({
            'value': [120, 30, linedata[1]]
        })
        option.options.push({

            visualMap: {
                max: linedata[1]
            },
            series: [{
                data: data
            }]
        });
        // setTimeOut(1);
    }

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
});
});