var uploadedDataURL = "/asset/get/s/data-1580126600192-fX91zSXp.json";

function showProvince() {
    var name = 'shandong';

    myChart.showLoading();
    $.get(uploadedDataURL, function(geoJson) {
        myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            title: {
                text: '2021年上半年山东省各市GDP地图',
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
                min: 500,
                max: 7000,
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
                        value: 5574.34
                    },
                    {
                        name: '青岛市',
                        value: 6539.21
                    },
                    {
                        name: '淄博市',
                        value: 2003.92
                    },
                    {
                        name: '枣庄市',
                        value: 1246.54
                    },
                    {
                        name: '烟台市',
                        value: 3918.38
                    },
                    {
                        name: '潍坊市',
                        value: 3269.3
                    },
                    {
                        name: '济宁市',
                        value: 2379.66
                    },
                    {
                        name: '威海市',
                        value: 1516.02
                    },
                    {
                        name: '日照市',
                        value: 1037.35
                    },
                    {
                        name: '临沂市',
                        value: 2645.98
                    },
                    {
                        name: '德州市',
                        value: 1663.27
                    },
                    {
                        name: '聊城市',
                        value: 1257.97
                    },
                    {
                        name: '滨州市',
                        value: 1328.25
                    },
                    {
                        name: '菏泽市',
                        value: 1927.21
                    },

                    {
                        name: '泰安市',
                        value: 1474.5
                    },
                    {
                        name: '莱芜市',
                        value: 956.24
                    },
                    {
                        name: '东营市',
                        value: 1343.18
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
