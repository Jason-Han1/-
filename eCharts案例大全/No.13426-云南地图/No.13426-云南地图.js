var uploadedDataURL = "/asset/get/s/data-1528613427522-B1349S5xQ.json";

function showProvince1() {
    var name = 'bj';
    $.get(uploadedDataURL, function(geoJson) {
        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            backgroundColor: '#ffffff',
            title: {
                text: "云南省",
                left: 'center',
                textStyle: {
                    color: '#000'
                }
            },
            visualMap: {
                min: 0,
                max: 0.5,
                dimension:0,
                left: 'left',
                top: 'bottom',
                text: ['HIGH', 'LOW'], // 文本，默认为数值文本
                calculable: true,
                inRange: {
                    color: ['#7AC6F9', '#C9E0F0']
                }
            },
            series: [{
                type: 'map',
                mapType: name,
                label: {
                    normal: {
                        show: true,
                    },
                    emphasis: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    }
                },
                animation: false
            }]
        });
    });
}

var currentIdx = 0;

showProvince1();

