var uploadedDataURL = "/asset/get/s/data-1509086574767-r1wOrIlC-.json";

function showProvince1() {
    var name = 'bj';
    $.get(uploadedDataURL, function(geoJson) {
        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            backgroundColor: '#ffffff',
            title: {
                text: "四川省",
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
                        show: false,
                    },
                    emphasis: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    }
                },
                itemStyle: {

                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1,
                        areaColor: '#000',
                    },
                    emphasis: {
                        areaColor: '#7AC6F9',
                        borderColor: 'rgb(255,222,254)',
                        borderWidth: 1,
                    }
                },
                animation: false,
                data: [{
                        name: '雅安市',
                        value: 0.279793634,
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    }, {
                        name: '凉山彝族自治州',
                        value: 0.591205703,
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    }, {
                        name: '甘孜藏族自治州',
                        value: 0.27882565,
                    }, {
                        name: '阿坝藏族羌族自治州',
                        value: 0.197609541,
                    }, {
                        name: '绵阳市',
                        value: 0.329343175,
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    }, {
                        name: '广元市',
                        value: 0.32721764,
                    }, {
                        name: '巴中市',
                        value: 0.375643401,
                    }, {
                        name: '达州市',
                        value: 0.283649436,
                    }, {
                        name: '广安市',
                        value: 0.252030972,
                    }, {
                        name: '南充市',
                        value: 0.408042745,
                    }, {
                        name: '遂宁市',
                        value: 0.328954631,
                    }, {
                        name: '资阳市',
                        value: 0.369641162,
                    }, {
                        name: '德阳市',
                        value: 0.418785311,
                    }, {
                        name: '成都市',
                        value: 0.322265696,
                    }, {
                        name: '眉山市',
                        value: 0.391762345,
                    }, {
                        name: '乐山市',
                        value: 0.390673495,
                    }, {
                        name: '内江市',
                        value: 0.328954631,
                    }, {
                        name: '宜宾市',
                        value: 0.369641162,
                    }, {
                        name: '泸州市',
                        value: 0.418785311,
                    }, {
                        name: '自贡市',
                        value: 0.322265696,
                    }, {
                        name: '攀枝花市',
                        value: 0.391762345,
                    }]
                    // animationDurationUpdate: 1000,
                    // animationEasingUpdate: 'quinticInOut'
            }]
        });
    });
}

var currentIdx = 0;

showProvince1();

