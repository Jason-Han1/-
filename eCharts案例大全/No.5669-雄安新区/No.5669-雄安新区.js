var uploadedDataURL = "/asset/get/s/data-1602484713213-e4tTlplj-.json";





var option = {
    backgroundColor: '#000',
    //地理坐标

    series: [{
            map: 'tjbh', //使用
            type: 'map',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },

            itemStyle: {
                normal: {
                    borderColor: '#45ebff',
                    borderWidth: 3,
                    areaColor: '#023148'
                },
                emphasis: {
                    areaColor: '#023148',
                    borderWidth: 1,
                    borderColor: '#45ebff',
                }
            },
            zoom: 1.1,
            roam: true,

        },


    ]
};

var getData = function() {
    $.get(uploadedDataURL, function(geojson) {
        echarts.registerMap('tjbh', geojson);
        myChart.setOption(option);
    })
}

getData()