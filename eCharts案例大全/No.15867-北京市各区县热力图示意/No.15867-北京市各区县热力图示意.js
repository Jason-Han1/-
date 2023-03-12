var uploadedDataURL = "/asset/get/s/data-1478337888470-rkOvrXoll.json";

function randomData() {
    return Math.round(Math.random() * 10000);
}


function showProvince() {
    var name = 'bj';

    // myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            backgroundColor: '#404a59',
            title: {
                text: "北京市各区县热力图示意",
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            visualMap: {
                min: 0,
                max: 10000,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true
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
                            name: '东城区',
                            value: randomData()
                        }, {
                            name: '西城区',
                            value: randomData()
                        }, {
                            name: '海淀区',
                            value: randomData()
                        }, {
                            name: '朝阳区',
                            value: randomData()
                        }, {
                            name: '石景山区',
                            value: randomData()
                        }, {
                            name: '大兴区',
                            value: randomData()
                        }, {
                            name: '门头沟区',
                            value: randomData()
                        }, {
                            name: '昌平区',
                            value: randomData()
                        }, {
                            name: '通州区',
                            value: randomData()
                        }, {
                            name: '房山区',
                            value: randomData()
                        }, {
                            name: '丰台区',
                            value: randomData()
                        }, {
                            name: '顺义区',
                            value: randomData()
                        }, {
                            name: '怀柔区',
                            value: randomData()
                        }, {
                            name: '密云县',
                            value: randomData()
                        }, {
                            name: '延庆县',
                            value: randomData()
                        }, {
                            name: '平谷区',
                            value: randomData()
                        },


                    ]
                    // animationDurationUpdate: 1000,
                    // animationEasingUpdate: 'quinticInOut'
            }]
        });
    });
}

var currentIdx = 0;

showProvince();