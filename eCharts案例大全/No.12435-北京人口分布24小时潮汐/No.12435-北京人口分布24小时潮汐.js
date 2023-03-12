var uploadedDataURL = "/asset/get/s/data-1546499666218-RE8mF8aP8.json";

var MapboxStyleDataURL = "/asset/get/s/data-1546500855305-wBxWgJRZc.json";


myChart.showLoading();

var option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval: 300,
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
            text: "北京人口分布24小时潮汐",
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
            center: [116.368655, 39.917726],
            zoom: 9,
            pitch: 40,
            urlTemplate: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
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
            silent: true,
            barSize: 1.5,
            silent: true
        }]
    },
    options: [] //timeline所用的多个option存放处，读取数据后添加
}

$.getJSON(uploadedDataURL, function(linedata) { //读取24小时数据
    myChart.hideLoading();
    var timeline = [];
    for (var n = 0; n < linedata.features.length; n++) { //对数据中每天数据整理后添加到options中，以便timeline使用
        timedata = linedata.features[n].gridChart_list;
        var data = []
        var max = linedata.features[n].max;
        for (var i = 0; i < timedata.length; i += 1) {
            var _pheight = 1000;
            loncol = timedata[i].lon //经度
            latcol = timedata[i].lat //纬度
            var _v = JSON.parse(timedata[i].values);
            var value;
            var value = _v[0] + _v[1] + _v[2]; //数组中值相加
            count = value / 2;
            data.push({
                'value': [loncol, latcol, count]
            })

        }
        timeline.push(linedata.features[n].time); //时间(0时到24时)

        option.options.push({

            visualMap: {
                max: max / 2
            },
            series: [{
                data: data
            }]
        });
    }
    option.baseOption.timeline.data = timeline; //时间轴

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
});