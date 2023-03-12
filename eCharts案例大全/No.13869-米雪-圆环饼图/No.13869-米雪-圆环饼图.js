option = {
    tooltip: {
        trigger: 'item',
    },
    series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['0%', '32%'],
            hoverAnimation: false,
            tooltip: {
                show: false
            },
            data: [{
                    value: 335,
                    name: ''
                },
                {
                    value: 679,
                    name: ''
                },
                {
                    value: 1548,
                    name: ''
                }

            ],
            itemStyle: {
                normal: {
                    color: 'rgba(25,40,69,0.5)',
                    borderColor: 'rgba(255,255,255,0.5)',
                    borderWidth: 2
                }

            }

        },
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            color: ['#86D560', '#AF89D6', '#59ADF3'],
            radius: ['32%', '45%'],
            hoverOffset: 0,
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 335,
                    name: ''
                },
                {
                    value: 679,
                    name: ''
                },
                {
                    value: 1548,
                    name: ''
                }
            ],
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['54%', '55%'],
            tooltip: {
                show: false
            },
            hoverAnimation: false,
            data: [{
                    value: 335,
                    name: ''
                },
                {
                    value: 679,
                    name: ''
                },
                {
                    value: 1548,
                    name: ''
                }

            ],
            labelLine: {
                normal: {
                    show: false
                }

            },
            itemStyle: {
                "normal": {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(134,231,96,0.5)',
                    }, {
                        offset: 1,
                        color: 'rgba(134,231,96,0.5)',
                    }]),
                    // color: function(params) {
                    //     // build a color map as your need.
                    //     var colorList = ['#86D560', '#AF89D6', '#59ADF3'];
                    //     return colorList[params.dataIndex]
                    // },
                    // "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //     offset: 0,
                    //     color: '#86D560'
                    // }, {
                    //     offset: 1,
                    //     color: '#AF89D6'
                    // }]),
                    "borderWidth": 1
                },

            }

        },
    ]
};