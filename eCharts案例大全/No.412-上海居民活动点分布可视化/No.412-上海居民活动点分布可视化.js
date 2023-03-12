//关于这个图表我做的视频简介：https://www.bilibili.com/video/BV1pD4y127tW
//各位观众老爷们一键三连，下次一定！

var MapboxStyleDataURL = "/asset/get/s/data-1522488401196-HJYUN03qz.json";//自定义mapbox的style，使其标签为中文

var uploadedDataURL = "/asset/get/s/data-1521463392670-HkYvx4TtG.json";//原始数据为栅格数据，需将栅格转化为经纬度后可视化

//mapboxgl.accessToken = mapboxglToken;

myChart.showLoading();

function coltowgs(LONCOL, LATCOL) {//定义栅格转换经纬度的函数
    var lat1 = 30.6666667;
    var lat2 = 31.8833333;
    var lon1 = 120.866667;
    var lon2 = 122.2;
    var accuracy = 500;
    var latStart = Math.min(lat1, lat2);
    var lonStart = Math.min(lon1, lon2);
    var deltaLon = accuracy * 360 / (2 * Math.PI * 6371004 * Math.cos((lat1 + lat2) * Math.PI / 360));
    var deltaLat = accuracy * 360 / (2 * Math.PI * 6371004);
    var HBLON = LONCOL * deltaLon + (lonStart - deltaLon / 2)
    var HBLAT = LATCOL * deltaLat + (latStart - deltaLat / 2)
    return [HBLON, HBLAT]
}
$.getJSON(MapboxStyleDataURL, function(MapboxStyle) {//读取MapboxStyle数据
var option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval: 1000,
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
            text: "上海居民活动点分布可视化",
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


            maptalks3D: {
                  center: [121.4693, 31.213070],
                zoom: 10,
                pitch: 40,
                urlTemplate: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
                // altitudeScale: 1,
                postEffect: {
                    enable: true,
                    FXAA: {
                        enable: true
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
                        texture: '/asset/get/s/data-1491838644249-ry33I7YTe.hdr',
                        exposure: 1,
                        diffuseIntensity: 0.5,
                        specularIntensity: 2
                    }
                }
            },
        series: [{
            type: 'bar3D',
            shading: 'realistic',
            coordinateSystem: 'maptalks3D',
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
            coor = coltowgs(loncol, latcol)
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
    }

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
});
});