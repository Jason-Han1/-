option = {
    backgroundColor: "#333",
    xAxis: [{
        type: 'category',
        show: true,
        "axisLine": {
            lineStyle: {
                color: '#999'
            }
        },
        data: ['2013', '2014', '2015', '2016', '2017'],
        axisPointer: {
            type: 'shadow'
        },
    }],

    yAxis: [{
            type: 'value',
            "axisLine": {
            lineStyle: {
                color: '#999'
            }
        },
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value}'
            },
        },

    ],
    series: [{

            type: 'bar',
            barWidth: '68%',
            data: [{
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: '#37A2DA'

                        }
                    }
                },
                {
                    value: 60,
                    itemStyle: {
                        normal: {
                            color: '#67E0E3'

                        }
                    }
                },
                {
                    value: 70,
                    itemStyle: {
                        normal: {
                            color: '#9FE6B8'

                        }
                    }
                }, {
                    value: 80,
                    itemStyle: {
                        normal: {
                            color: '#FFDB5C'

                        }
                    }
                }, {
                    value: 20,
                    itemStyle: {
                        normal: {
                            color: '#ff9f7f'

                        }
                    }
                }

            ]
        },


    ]
};