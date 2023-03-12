var uploadedDataURL = "/asset/get/s/data-1589284831081-RBq4RuXFw.json";

function shenzhenMapChartLoad() {

    var data = [{
            name: '南山区',
            value: [113.96, 22.55, 280]
        },
        {
            name: '福田区',
            value: [114.05454, 22.55, 270]
        },
        {
            name: '宝安区',
            value: [113.88, 22.65, 260]
        },
        {
            name: '龙岗区',
            value: [114.25, 22.72, 250]
        },
        {
            name: '罗湖区',
            value: [114.13, 22.58, 200]
        },
        {
            name: '龙华区',
            value: [114.03, 22.68, 190]
        },
        {
            name: '光明区',
            value: [113.93588, 22.75, 120]
        },
        {
            name: '盐田区',
            value: [114.26, 22.59, 80]
        },
        {
            name: '坪山区',
            value: [114.34632, 22.69, 360]
        },
        {
            name: '大鹏新区',
            value: [114.48, 22.59, 120]
        }
    ];



    let index = -1;
    // var timer = setInterval(function() {
    //     // 隐藏提示框
    //     myChart.dispatchAction({
    //         type: 'hideTip',
    //         seriesIndex: 0,
    //         dataIndex: index
    //     });
    //     // 显示提示框
    //     myChart.dispatchAction({
    //         type: 'showTip',
    //         seriesIndex: 0,
    //         dataIndex: index + 1
    //     });
    //     // 取消高亮指定的数据图形
    //     myChart.dispatchAction({
    //         type: 'downplay',
    //         seriesIndex: 0,
    //         dataIndex: index
    //     });
    //     // 高亮指定的数据图形
    //     myChart.dispatchAction({
    //         type: 'highlight',
    //         seriesIndex: 0,
    //         dataIndex: index + 1
    //     });
    //     index++;
    //     if (index > 13) {
    //         index = -1;
    //     }
    // }, 2000);


    $.get(uploadedDataURL, function(geoJson) {
        echarts.registerMap('shenzhen', geoJson);
        myChart.setOption(
            option = {

                backgroundColor: '#012248',
                title: [{
                    show: true,
                    text: '深圳市参与企业标准制修订的情况分析--各区企业数量分布',
                    textStyle: {
                        color: '#ccc',
                        fontSize: 25
                    },
                    x: 'center',
                    top: 40
                }],

                grid: {
                    right: 10,
                    top: 10,
                    bottom: 0,
                },
                tooltip: {
                    show: true,
                    formatter: function(params) {
                        return params.name + '：' + params.data['value'][2] + ''
                    },
                },
                dataRange: {
                    min: 0,
                    max: 1000,
                    right: 40,
                    top: 100,
                    seriesIndex: 1,
                    type: 'piecewise',
                    bottom: 500,
                    textStyle: {
                        color: '#FFFF'
                    },
                    splitList: [{
                            gt: 300,
                            color: '#F5222D',
                            label: '大于300'
                        }, //大于5万人
                        {
                            gte: 200,
                            lte: 300,
                            color: '#FA541C ',
                            label: '200-300'
                        }, //3-5万人
                        {
                            gte: 100,
                            lte: 200,
                            color: '#FA8C16',
                            label: '100-200'
                        }, //1-3万人
                        {
                            lte: 100,
                            color: '#fbe1d6',
                            label: '小于100'
                        }
                    ]

                },
                geo: {
                    map: 'shenzhen',
                    zoom: 1.1,
                    roam: false,
                    itemStyle: {
                        normal: {
                            areaColor: '#013C62',
                            shadowColor: '#182f68',
                            shadowOffsetX: 0,
                            shadowOffsetY: 25
                        },
                        emphasis: {
                            areaColor: '#2AB8FF',
                            borderWidth: 0,
                            color: 'green',
                            label: {
                                show: false
                            }
                        }
                    }
                },

                series: [{
                        type: 'map',
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 16
                                }
                            },
                            emphasis: {
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },

                        itemStyle: {
                            normal: {
                                borderColor: '#2ab8ff',
                                borderWidth: 1.5,
                                areaColor: '#12235c'
                            },
                            emphasis: {
                                areaColor: '#2AB8FF',
                                borderWidth: 0,
                                color: 'green'
                            }
                        },
                        zoom: 1.1,
                        roam: false,
                        map: 'shenzhen', //使用

                        data: data,
                        nameMap: {
                            'nanshan': '南山区',
                            'yantian': '盐田区',
                            'baoan': '宝安区',
                            'futian': '福田区',
                            'luohu': '罗湖区',
                            'dapeng': '大鹏新区',
                            'pingshan': '坪山区',
                            'guangming': '光明区',
                            'longhua': '龙华区',
                            'longgang': '龙岗区'
                        },

                    },
                    {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        showEffectOn: 'render',
                        rippleEffect: {
                            period: 15,
                            scale: 4,
                            brushType: 'fill'
                        },
                        hoverAnimation: true,
                        itemStyle: {
                            normal: {
                                color: '#ffff',
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        data: data
                    }

                ]
            });


    })
}
shenzhenMapChartLoad();