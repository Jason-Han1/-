var uploadedDataURL = "/asset/get/s/data-1483664927969-r1dX0P2Sl.json";

function randomData() {
    return Math.round(Math.random() * 10000);
}


function showProvince() {
    var name = 'hn';

    // myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {

            title: {
                text: "2017年9月份河南省城市环境空气质量情况分布",
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },

            visualMap: {
                min: 0,
                max: 10,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true
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
                    name: '郑州市',
                    value: 5.856
                }, {
                    name: '洛阳市',
                    value: 5.519
                }, {
                    name: '开封市',
                    value: 5.236
                }, {
                    name: '信阳市',
                    value: 3.532
                }, {
                    name: '驻马店市',
                    value: 3.878
                }, {
                    name: '南阳市',
                    value: 3.996
                }, {
                    name: '周口市',
                    value: 4.211
                }, {
                    name: '许昌市',
                    value: 4.831
                }, {
                    name: '平顶山市',
                    value: 5.076
                }, {
                    name: '新乡市',
                    value: 6.028
                }, {
                    name: '漯河市',
                    value: 4.076
                }, {
                    name: '商丘市',
                    value: 4.484
                }, {
                    name: '三门峡市',
                    value: 4.731
                }, {
                    name: '济源市',
                    value: 6.070
                }, {
                    name: '焦作市',
                    value: 6.326
                }, {
                    name: '安阳市',
                    value: 6.896
                }, {
                    name: '鹤壁市',
                    value: 5.963
                }, {
                    name: '濮阳市',
                    value: 5.163
                }, ]

            }],

        });
    });
}

var currentIdx = 0;

showProvince();