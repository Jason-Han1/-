var uploadedDataURL = "/asset/get/s/data-1580126600192-fX91zSXp.json";

function showProvince() {
    var name = 'shandong';

    myChart.showLoading();
    $.get(uploadedDataURL, function(geoJson) {
        myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            title: {
                text: '2020年山东省各市平均房价地图',
                left: 'center', //标题位置
                textStyle: {
                    fontSize: 32,
                    fontWeight: 'bolder',
                    color: 'black' // 主标题文字颜色
                }
            },
            color: ['orange'],
            legend: {
                orient: 'vertical',
                left: 'left',
                textStyle: {
                    fontSize: 20,
                    color: 'black' // 图例文字颜色
                },
                //data: ['地市']
                // 图例位置
            },

            visualMap: {
                min: 5000,
                max: 20000,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                //color: ['blue', 'blue']
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {
                        readOnly: false
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [{
                name: '地市',
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

                data: [{
                        name: '济南市',
                        value: 15297
                    },
                    {
                        name: '青岛市',
                        value: 16642
                    },
                    {
                        name: '淄博市',
                        value: 8731
                    },
                    {
                        name: '枣庄市',
                        value: 7899
                    },
                    {
                        name: '烟台市',
                        value: 10098
                    },
                    {
                        name: '潍坊市',
                        value: 6980
                    },
                    {
                        name: '济宁市',
                        value: 8309
                    },
                    {
                        name: '威海市',
                        value: 9638
                    },
                    {
                        name: '日照市',
                        value: 10055
                    },
                    {
                        name: '临沂市',
                        value: 8653
                    },
                    {
                        name: '德州市',
                        value: 8920
                    },
                    {
                        name: '聊城市',
                        value: 10481
                    },
                    {
                        name: '滨州市',
                        value: 7799
                    },
                    {
                        name: '菏泽市',
                        value: 5879
                    },

                    {
                        name: '泰安市',
                        value: 10905
                    },
                    {
                        name: '莱芜市',
                        value: 8209
                    },
                    {
                        name: '东营市',
                        value: 8175
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