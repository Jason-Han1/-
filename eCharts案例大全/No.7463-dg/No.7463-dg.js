var uploadedDataURL = "/asset/get/s/data-1591154217186-dFD40qE-3.json";


function show() {
    $.get(uploadedDataURL, function(gdMap) {
        echarts.registerMap('东莞', gdMap);
        myChart.setOption(option = {
            title: {
                text: '全国数据请求量',
                subtext: 'Show Data',
                left: 'center',
                top: 'top',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {},
            legend: {
                left: 'left',
                data: ['强', '中', '弱'],
                textStyle: {
                    color: '#ccc'
                }
            },
            backgroundColor: '#064066',
            geo: {
                map: '东莞',
                show: true,
                roam: true,
                label: {
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#091632',
                        borderColor: '#1773c3',
                        shadowColor: '#1773c3',
                        shadowBlur: 20
                    }
                }
            },
            series: [{
                    type: 'map',
                    map: '东莞',
                    geoIndex: 1,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: true, // 存在legend时显示
                    label: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#3B5077',
                            borderWidth: 1
                        },
                        emphasis: {
                            areaColor: '#0f2c70'
                        }
                    },
                    data: [{
                        name: '北京',
                        value: 21300
                    }]
                }

            ]
        });

    });

}
show()