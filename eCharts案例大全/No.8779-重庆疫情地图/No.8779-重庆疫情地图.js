var uploadedDataURL = "/asset/get/s/data-1580442096425-8Kw3KUeo.json";
function showProvince() {
    var name = 'bj';

    // myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            backgroundColor: '#ffffff',
            title: {
                text: "重庆疫情地图",
            
                left: 'center',
                textStyle: {
                    color: '#000000'
                }
            },
            visualMap: {
                min: 0,
                max: 60,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                inRange:{
                   color: ['orange','orangered', 'red']
                },
                textStyle: {
                    color: '#000000'
                }
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
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {

                    normal: {
                        borderColor: '#000000',
                        areaColor: '#fff',
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                },
                animation: false,
                data: [{
                            name: '万州区',
                            value: 56
                        }, {
                            name: '开州区',
                            value: 18               
                        }, {
                            name: '忠县',
                            value: 15
                        }, {
                            name: '云阳县',
                            value: 18
                        }, {
                            name: '两江新区',
                            value: 13
                        }, {
                            name: '长寿区',
                            value: 12
                        }, {
                            name: '石柱土家族自治县',
                            value: 12
                        }, {
                            name: '大渡口区',
                            value: 7
                        }, {
                            name: '渝北区',
                            value: 12
                        }, {
                            name: '江北区',
                            value: 18
                        }, {
                            name: '九龙坡区',
                            value: 15
                        }, {
                            name: '合川区',
                            value: 9
                        }, {
                            name: '垫江县',
                            value: 13
                        }, {
                            name: '巫山县',
                            value: 7
                        }, {
                            name: '巫溪县',
                            value: 11
                        }, {
                            name: '綦江区',
                            value: 10
                        }, {
                            name: '璧山区',
                            value: 8
                        }, {
                            name: '奉节县',
                            value: 9
                        }, {
                            name: '永川区',
                            value: 3
                        }, {
                            name: '丰都县',
                            value: 6
                        }, {
                            name: '江津区',
                            value: 3
                        }, {
                            name: '铜梁区',
                            value: 7
                        }, {
                            name: '潼南区',
                            value: 4
                        }, {
                            name: '涪陵区',
                            value: 2
                        }, {
                            name: '巴南区',
                            value: 3
                        }, {
                            name: '大足区',
                            value: 7
                        }, {
                            name: '梁平区',
                            value: 3
                        }, {
                            name: '城口县',
                            value: 2
                        }, {
                            name: '秀山土家族苗族自治县',
                            value: 1
                        }, {
                            name: '黔江区',
                            value: 2
                        }, {
                            name: '南岸区',
                            value: 7
                        }, {
                            name: '武隆区',
                            value: 1
                        }, {
                            name: '渝中区',
                            value: 13
                        }, {
                            name: '荣昌区',
                            value: 7
                        }, {
                            name: '沙坪坝区',
                            value: 2
                        }, {
                            name: '彭水苗族土家族自治县',
                            value: 2
                        }
                    ]
                    // animationDurationUpdate: 1000,
                    // animationEasingUpdate: 'quinticInOut'
            }]
        });
    });
}

var currentIdx = 0;

showProvince();