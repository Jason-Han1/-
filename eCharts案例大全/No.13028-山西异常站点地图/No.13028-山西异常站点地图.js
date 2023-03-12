var uploadedDataURL = "/asset/get/s/data-1534760935441-SJJlOzOL7.json";


//function randomData() {
//    return Math.round(Math.random() * 10000);
//}


function showProvince() {
    var name = 'bj';

    // myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            backgroundColor: '#ffffff',
            title: {
                text: "山西异常站点地图",
                subtext: "生成时间：2018.11.08 10时",
                left: 'center',
                textStyle: {
                    color: '#000'
                }
            },
            visualMap: {
                min: 0,
                max: 1200,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                inRange: {
                    color: ['yellow', 'lightskyblue', 'orangered']
                }
            },
            series: [{
                type: 'map',
                mapType: name,
                label: {
                    normal: {
                        show: true,
                        formatter: function(params) {
                            if (params.value) {
                                return params.name + '\n' + params.value;
                            }
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
                        borderColor: '#389BB7',
                        areaColor: '#fff',
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                },
                animation: false,
                data: [{
                    "name": "阳泉市",
                    "value": 351
                }, {
                    "name": "太原市",
                    "value": 1000
                }, {
                    "name": "朔州市",
                    "value": 68
                }, {
                    "name": "晋城市",
                    "value": 563
                }, {
                    "name": "大同市",
                    "value": 91
                }, {
                    "name": "晋中市",
                    "value": 947
                }, {
                    "name": "长治市",
                    "value": 228
                }, {
                    "name": "吕梁市",
                    "value": 989
                }, {
                    "name": "运城市",
                    "value": 801
                }, {
                    "name": "忻州市",
                    "value": 182
                }, {
                    "name": "临汾市",
                    "value": 428
                }]
                // animationDurationUpdate: 1000,
                // animationEasingUpdate: 'quinticInOut'
            }]
        });
    });
}

var currentIdx = 0;

showProvince();