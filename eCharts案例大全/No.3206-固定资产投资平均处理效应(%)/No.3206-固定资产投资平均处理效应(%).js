var uploadedDataURL = "/asset/get/s/data-1622348915324-_DE4Jo6B6.geoJson";

function showProvince() {
    var name = 'huibei';

    myChart.showLoading();
    $.get(uploadedDataURL, function(geoJson) {
        myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
                  title: {
            text: '固定资产投资平均处理效应(%)'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c}'
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },

            visualMap: {
                min: 3.3,
                max: -0.7,
                left: 'left',
                top: 'bottom',
                text: ['辐射效应', '虹吸效应'], // 文本，默认为数值文本
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
                        name: '武汉市',
                        value: 0.9687453
                    },
                    {
                        name: '黄石市',
                        value: 3.263561
                    },
                    {
                        name: '十堰市',
                        value:0.2134922
                    },
                    {
                        name: '宜昌市',
                       value: 0.7488681
                    },
                    {
                        name: '襄阳市',
                        value: 0.4803524
                    },
                    {
                        name: '鄂州市',
                        value: 0.2606949
                    },
                    {
                        name: '荆门市',
                        value: 0.317964
                    },
                    {
                        name: '孝感市',
                        value: -0.1658955
                    },
                    {
                        name: '荆州市',
                        value: 0.05700045
                    },
                    {
                        name: '黄冈市',
                        value: 0.2945263
                    },
                    {
                        name: '咸宁市',
                        value: -0.6877701
                    },
                    {
                        name: '随州市',
                        value: 0.7391486
                    },
                    {
                        name: '恩施土家族苗族自治州',
                        value: 0.4914024
                    },
                    {
                        name: '仙桃市',
                        value: 0.6318546
                    },

                    {
                        name: '潜江市',
                        value: -0.6660678
                    },
                    {
                        name: '天门市',
                        value: 0.2944385
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