var uploadedDataURL = "/asset/get/s/data-1584433656656-A-4hB7RV.json";

function showProvince() {
    var name = 'bj';

    // myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            backgroundColor: '#099999',
            title: {
                text: "莱州市各镇街葡萄产量",
            
                left: 'center',
                textStyle: {
                    color: '#ffffff'
                }
            },
            visualMap: {
                min: 0,
                max: 15699,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                inRange:{
                   color: ['plum','dark violet', 'purple']
                },
                textStyle: {
                    color: '#ffffff'
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
                        borderColor: '#389BB7',
                        areaColor: '#fff',
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                },
                animation: false,
                roam:true,
                data: [{
                            name: '永安路街道',
                            value: 30
                        }, {
                            name: '文昌路街道',
                            value: 20             
                        }, {
                            name: '三山岛街道',
                            value: 589
                        }, {
                            name: '城港路街道',
                            value: 582
                        }, {
                            name: '文峰路街道',
                            value: 111,
                            label: {
                                normal: {
                                    show: true
                                }
                            }                            
                        }, {
                            name: '金仓街道',
                            value: 0,
                        }, {
                            name: '沙河镇',
                            value: 8,
                        }, {
                            name: '朱桥镇',
                            value: 15699
                        }, {
                            name: '郭家店镇',
                            value: 4668,
                        }, {
                            name: '金城镇',
                            value: 796
                        },{
                            name: '平里店镇',
                            value: 172
                        },{
                            name: '驿道镇',
                            value: 248
                        },{
                            name: '程郭镇',
                            value: 1454
                        },{
                            name: '虎头崖镇',
                            value: 3362
                        },{
                            name: '柞村镇',
                            value: 880
                        },{
                            name: '夏邱镇',
                            value: 309
                        },{
                            name: '土山镇',
                            value: 87
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