var uploadedDataURL = "/asset/get/s/data-1500512551181-H114-t6BZ.json";


function showProvince() {

    //myChart 在实际项目需定义,如var myChart = echarts.init(document.getElementById('map'));
    var name = 'jiujiang';

    //加载数据前显示的动画效果
    myChart.showLoading();
    //读取JSON数据
    $.get(uploadedDataURL, function(geoJson) {
        //加载数据完成后隐藏动画
        myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {

            title: {
                text: "九江市",
                left: 'center',
                textStyle: {},
                padding: [30, 10, 10, 10],
            },
            tooltip: {
                trigger: 'item'
            },

            series: [{
                type: 'map',
                mapType: name,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        textStyle: {
                            color: '#000'
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
                animation: false,

            }],

        });
    });
}
showProvince();