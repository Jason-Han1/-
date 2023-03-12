var uploadedDataURL = "/asset/get/s/data-1621434622795-G0d8lGfZz.json";

var center = {}
var option = null;
$.get(uploadedDataURL, function(json) {
    echarts.registerMap('js', json);
    option = {
        title: {
            show: true,
            x: "center",
            y: "top",
            text: "吴兴区地图",
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
                    color: '#ffffff',
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