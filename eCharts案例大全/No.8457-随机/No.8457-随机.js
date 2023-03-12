var uploadedDataURL = "/asset/get/s/data-1583825931850-cu3pioSF.json";


$.getJSON(uploadedDataURL, function(zhejiangJson) {
    echarts.registerMap('zhejiang', zhejiangJson);
    var data = [];
    for (var x = 0;x<zhejiangJson.features.length;x++) {
        var lnglat = zhejiangJson.features[x].properties.center;
        for(var i=1;i<20;i++){
            var lng = lnglat[0]-(Math.random())
            var lat = lnglat[1]-(Math.random())
            data.push({
            name: x+''+i,
            toname: '水利局',
            coords: [[lng,lat], [120.182281,30.2486]]
        })
        }
        
    }
    
    console.log(data)
    option = {
        geo: {
            show: true,
            roam: true,
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: [{
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 1,
            data: data,
            //线上面的动态特效
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 4
            },
            lineStyle: {
                normal: {
                    width: '',
                    color: '#a6c84c',
                    curveness: 0.2
                }
            }
        }, {
            type: 'effectScatter',
            mapType: 'china',
            coordinateSystem: 'geo',
            zlevel: 3,
            data: [{
                name: '水利局',
                value: [120.18,30.24,200]
            }, ],
            rippleEffect: {
                period: 10,
                scale: 5,
                brushType: 'fill'
            },
        }]
    };

    myChart.setOption(option);
});