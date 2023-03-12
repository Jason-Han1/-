var uploadedDataURL = "/asset/get/s/data-1642241119281-NNl4uPhUf.geojson";

var uploadedDataURL = "/asset/get/s/data-1642242404799-kZRbc7BGP.geojson";





function show() {
    var name = 'dy';

    myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            backgroundColor: '#044060',
            title: {
                text: "德阳地图",
            
                left: 'center',
                textStyle: {
                    color: '#ffffff'
                }
            },
           
            series: [{
                type: 'map',
                roam:true,
                mapType: name,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {

                    normal: {
                        borderColor: '#389BB7',
                        areaColor: '#fff',
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                },
            }]
        });
    });
}


show();
