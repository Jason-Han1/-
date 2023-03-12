var uploadedDataURL = "/asset/get/s/data-1600245425326-WX1iJ9mRR.json";

//var uploadedDataURL = "/asset/get/s/data-1499156198404-H1AJkAOEZ.json";


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
            backgroundColor: '#FFFFFF',
            title: {
                text: "北京市新能源汽车地图",
                subtext: "时间周期：2017.01.01——2019.12.30",
                left: 'center',
                textStyle: {
                    color: '#ffffff'
                }
            },
            visualMap: {
                min: 0,
                max: 45000,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                inRange:{
                   color: ['#5FB2DE','#FFEB3B','#FEA000', '#DE4D48']
                },
                textStyle: {
                    color: '#ffffff'
                }
            },
            series: [{
                type: 'map',
                mapType: name,
                label: {
                    normal: {color: 'white',
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
                            name: '湖州市',
                            value: 18163,
                            label: {
                                normal: {
                                    color: 'white'
                                }
                            }
                        }, {
                            name: '杭州市',
                            value: 27000,
                            label: {
                                normal: {
                                }
                            }                            
                        }, {
                            name: '绍兴市',
                            value: 39825
                        }, {
                            name: '嘉兴市',
                            value: 48405
                        }, {
                            name: '宁波市',
                            value: 15212,
                            label: {
                                normal: {
                         
                                }
                            }                            
                        }, {
                            name: '衢州市',
                            value: 15000
                        }, {
                            name: '金华市',
                            value: 11161,
                        }, {
                            name: '丽水市',
                            value: 500
                        }, {
                            name: '温州市',
                            value: 51488,
                        }, {
                            name: '台州市',
                            value: 23053
                        }, {
                            name: '舟山市',
                            value: 26504
                        }, {
                            name: '顺义区',
                            value: 17247
                        }, {
                            name: '怀柔区',
                            value: 21812
                        }, {
                            name: '密云区',
                            value: 18589
                        }, {
                            name: '延庆区',
                            value: 22211
                        }, {
                            name: '平谷区',
                            value: 16729
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