var uploadedDataURL = "/asset/get/s/data-1508307412468-Hy20ZuV6b.json";

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
                text: "青岛市小微市场D类集团拓展数量分布",
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },

            visualMap: {
                min: 0,
                max: 100,
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
                            color: '#000000'
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
                        name: '平度市',
                        value: 100
                    }, {
                        name: '莱西市',
                        value: 10
                    }, {
                        name: '即墨市',
                        value: 20
                    }, {
                        name: '胶州市',
                        value: 30
                    }, {
                        name: '城阳区',
                        value: 40
                    }, {
                        name: '胶南市',
                        value: 41
                    }, {
                        name: '黄岛区',
                        value: 15
                    }, {
                        name: '四方区',
                        value: 25
                    }, {
                        name: '市南区',
                        value: 35
                    }, {
                        name: '市北区',
                        value: 35
                    }, {
                        name: '李沧区',
                        value: 35
                    }, {
                        name: '崂山区',
                        value: 35
                    }

                ]

            }],

        });
    });
}

var currentIdx = 0;

showProvince();