var tsiDataURL = "/asset/get/s/data-1589533736008-WZ3EgDUbv.json";
var osmDataURL = "/asset/get/s/data-1589533720302-oCMku6fij.json";
$.getJSON(osmDataURL, function(osmroad) {
    $.getJSON(tsiDataURL, function(data_1) {
myChart.showLoading();
var option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            realtime: false,
            // loop: false,
                orient: 'vertical',
                autoPlay: true,
                inverse: true,
            playInterval: 200,
            symbolSize: 12,
                left: null,
                right: 0,
                top: null,
                bottom: 0,
                width: 55,
                height: null,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [],
            tooltip: {
                formatter: 1
            },
        },
        animation: false,
        
        visualMap: {
            min: 0,
            max: 80,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            seriesIndex: 0,
            inRange: {
                color: ['#9DCC42', '#FFFE03', '#F7941D', '#E9420E', '#FF0000']
            }
        },
        //bmap组件是百度地图的参数
        bmap: {
            center: [121.501206, 31.203083],
            zoom: 12,
            roam: true,
            //地图个性化设置
            mapStyle: {
                styleJson: [{
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'land',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#f3f3f3'
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#fdfdfd'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'poi',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'green',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'subway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'manmade',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'local',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'boundary',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'building',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'label',
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        'color': '#999999'
                    }
                }]
            }
        },
        series: []
    },
    animationDurationUpdate: 3000,
    animationEasingUpdate: 'quinticInOut',
    options: []
};



function matchdata(osmroad, data_1) { 
    var data = []
    for (var i = 0; i < data_1.length; i += 1) {
        var value = data_1[i]
        var v = {}
        v.coords = osmroad[i].coords
        v.value = value
        data.push(v)
    }
    return data
}
//读取数据

        var option1 = {
            options: []
        }
        var times = []
        for (var k = 0; k < data_1.length; k += 1) {
                        if (k % 2==1){
                a='30'
            }else{a='00'}
            times.push((Math.floor(k / 2) + 6).toString()+':'+a)
            var datak = data_1[k]
            var data = matchdata(osmroad, datak)

            var opt1 = {
                title: {
                    text: "路网交通指数时变 " + (Math.floor(k / 2) + 6).toString()+':'+a,
                    left: 10,
                    top: 10,
                    textStyle: {
                        color: 'rgba(18,89,147,1)',
                        fontSize: 40
                    }
                },
                series: [{
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    silent: true,
                    lineStyle: {
                        color: 'rgb(200,200,200)',
                        opacity: 1,
                        width: 2
                    },
                    progressiveThreshold: 0,
                    progressive: 0,
                    data: {},
                }]
            }
            opt1.series[0].data=data
            option1.options.push(opt1)

        }

        option.baseOption.timeline.data = times
        option.baseOption.timeline.tooltip.formatter = times
        myChart.setOption(option)
        if (!app.inNode) {
    // 添加百度地图插件
    var bmap = myChart.getModel().getComponent('bmap').getBMap();
    bmap.addControl(new BMap.MapTypeControl());
}

        myChart.setOption(option1)
        myChart.hideLoading();
    })



})