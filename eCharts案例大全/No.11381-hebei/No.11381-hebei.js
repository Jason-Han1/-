var uploadedDataURL = "/asset/get/s/data-1558439287622-nC1iqmUfc.json";








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
            toolbox: {
                feature: {
                    saveAsImage: {
                        show: true
                    }
                }
            },
            visualMap: {
                show: false,
                min: 0,
                max: 2,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                inRange: {
                    color: ['yellow', 'orange','red']
                }
            },
            series: [{
                type: 'map',
                mapType: name,
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
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                },
                animation: false,
                data: [{
                    name: '邯郸市',
                    value: 2
                }, {
                    name: '邢台市',
                    value: 1
                }, {
                    name: '衡水市',
                    value: 2
                }, {
                    name: '石家庄市',
                    value: 2
                }, {
                    name: '保定市',
                    value: 2
                }, {
                    name: '沧州市',
                    value: 1
                }, {
                    name: '廊坊市',
                    value: 1,
                }, {
                    name: '张家口市',
                    value: 1
                }, {
                    name: '承德市',
                    value: 1,
                }, {
                    name: '唐山市',
                    value: 2
                },  {
                    name: '定州市',
                    value: 0
                },  {
                    name: '燕郊镇',
                    value: 0
                },  {
                    name: '一营',
                    value: 0
                },  {
                    name: '二营',
                    value: 0
                },  {
                    name: '雄安',
                    value: 0
                },  {
                    name: '辛集市',
                    value: 0
                },  {
                    name: '曹妃甸',
                    value: 0
                },{
                    name: '秦皇岛市',
                    value: 1
                }]
                // animationDurationUpdate: 1000,
                // animationEasingUpdate: 'quinticInOut'
            }]
        });
    });
}

var currentIdx = 0;

showProvince();