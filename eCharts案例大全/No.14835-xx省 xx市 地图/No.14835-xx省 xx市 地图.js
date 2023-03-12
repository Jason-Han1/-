var uploadedDataURL = "/asset/get/s/data-1506668798943-SJvbW_so-.json"; //广西

// var uploadedDataURL = "/asset/get/s/data-1499156198404-H1AJkAOEZ.json";//北京

var name = '';

$.get(uploadedDataURL, function(geoJson) {
    
    echarts.registerMap(name, geoJson);//注册 地图
    
    myChart.setOption(option = {
        title: {
            // text: "xx省 xx市 地图",
            left: 'center',
            textStyle: {
                color: '#000'
            }
        },
        series: [{
            type: 'map',
            mapType: name,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show:false,
                    textStyle: {
                        color: '#000'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(0,168,255,.6)',
                    borderWidth:2,
                    areaColor: 'rgba(0,81,138,.3)',
                },
                emphasis: {
                    borderColor: 'rgba(0,168,255,.6)',
                    borderWidth:2,
                    areaColor: 'rgba(0,81,138,.3)',
                }
            },
            animation: false,
            data: []
        }]
    });
});
