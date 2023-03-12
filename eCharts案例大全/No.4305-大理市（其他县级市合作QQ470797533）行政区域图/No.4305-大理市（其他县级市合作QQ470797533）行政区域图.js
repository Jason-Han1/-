var uploadedDataURL = "/asset/get/s/data-1610266581688-xhgO3Gdzu.geojson";


var center = {}
var option = null;
$.get(uploadedDataURL, function(json) {
    echarts.registerMap('js', json);
    option = {
        title: {
            show: true,
            x: "center",
            y: "top",
            text: "云南省大理市行政区域图（其他县级市合作QQ470797533）",
            textStyle: {
                color: "#2980b9",
                fontSize: 16
            }
        },
        series: [
            //地图
            {
                type: 'map',
                mapType: 'js',
                geoIndex: -1,
                zoom: 1.1, //默认显示级别
                label: {
                    show: true,
                    color: '#999',
                    emphasis: {
                        color: 'white',
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#2980b9',
                        borderWidth: 1,
                        areaColor: '#12235c'
                    },
                },

            }
        ]
    };
    myChart.setOption(option);
});