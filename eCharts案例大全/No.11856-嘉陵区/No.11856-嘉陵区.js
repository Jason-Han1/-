var uploadedDataURL = "/asset/get/s/data-1553602548454-zgyrICCD2.json";

function showProvince() {
    var name = 'jialingqu';

    // myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            title: {
                text: "人口流入地分析",
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            series: [{
                type: 'map',
                mapType: name,
                // 缩放、拖动
                roam: true,
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
                    // hover
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                },
                animation: true,
            }],
            
        });
    });
}

var currentIdx = 0;

showProvince();