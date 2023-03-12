var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    },
    emphasis: {
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    }
};

var data = 30; //数值大小
var max = 111; //满刻度大小


option = {
    backgroundColor: '#142058',
    series: [{
            type: 'pie',
            zlevel: 2,
            hoverAnimation: false,
            radius: ['93%', '94%'],
            center: ['50%', '50%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: data,
                    label: {
                        normal: {
                            rich: {
                                a: {
                                    color: '#fff',
                                    align: 'center',
                                    fontSize: 14,
                                    fontWeight: "bold"
                                }
                            },
                            formatter: function(params) {
                                return "{a|昆明}\n\n" + "{a|" + Math.round((params.value / max) * 100) + "%}" + "";
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(0, 0, 0, 0)',
                            borderWidth: 5,
                            borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                offset: 0,
                                color: '#00c6fb'
                            }, {
                                offset: 1,
                                color: '#005bea'
                            }]),
                        }
                    },
                }, {
                    value: max-data,
                    itemStyle: placeHolderStyle
                },

            ]
        },
        {
            type: 'pie',
            zlevel: 1,
            hoverAnimation: false,
            radius: ['94%', '95%'],
            center: ['50%', '50%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: '#5c7394'
                    }
                },
            }]
        },
    ]
};