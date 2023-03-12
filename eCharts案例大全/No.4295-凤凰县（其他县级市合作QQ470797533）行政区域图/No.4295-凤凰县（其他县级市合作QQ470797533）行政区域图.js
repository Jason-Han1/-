var uploadedDataURL = "/asset/get/s/data-1610354742423-MrhSQAkdn.geojson";



var center = {}
var option = null;
$.get(uploadedDataURL, function(json) {
    echarts.registerMap('js', json);
    option = {
        title: {
            show: true,
            x: "center",
            y: "top",
            text: "湖南省湘西土家族苗族自治州凤凰县行政区域图（其他县级市合作QQ470797533）",
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
                       areaColor: '#C9E6FF',
                       borderColor: '#fff',
                       borderWidth: 2,
                       shadowColor: '#5AB2FE',
                       shadowBlur: 20
                   }
                },

            }
        ]
    };
    myChart.setOption(option);
});