option = {
    backgroundColor: "#ffffff",
    tooltip: {
        trigger: 'axis',
        formatter: "占比 : {c}%",
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: [{
        type: 'category',
        show: true,
        data: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
    }],
    yAxis: [{
            type: 'value',

            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value}%'
            },
            axisTick: {
                show: false
            }
        },

    ],
    series: [{
            type: 'bar',
            barWidth: '70%',
            data: [{
                value: 30,
                itemStyle: {
                    normal: {
                        color: '#0DAFF4'
                    }
                }
            }, {
                value: 20,
                itemStyle: {
                    normal: {
                        color: '#0DAFF4'
                    }
                }
            }, {
                value: 65,
                itemStyle: {
                    normal: {
                        color: '#0DAFF4'
                    }
                }
            }, {
                value: 80,
                itemStyle: {
                    normal: {
                        color: '#0DAFF4'
                    }
                }
            }, {
                value: 92,
                itemStyle: {
                    normal: {
                        color: '#FFDB5C'
                    }
                }
            }, {
                value: 71,
                itemStyle: {
                    normal: {
                        color: '#0DAFF4'
                    }
                }
            }, {
                value: 56,
                itemStyle: {
                    normal: {
                        color: '#0DAFF4'
                    }
                }
            }, {
                value: 36,
                itemStyle: {
                    normal: {
                        color: '#0DAFF4'
                    }
                }
            }, {
                value: 18,
                itemStyle: {
                    normal: {
                        color: '##0DAFF4'
                    }
                }
            }, {
                value: 43,
                itemStyle: {
                    normal: {
                        color: '#0DAFF4'
                    }
                }
            }, {
                value: 60,
                itemStyle: {
                    normal: {
                        color: '#0DAFF4'
                    }
                }
            }, {
                value: 64,
                itemStyle: {
                    normal: {
                        color: '##0DAFF4'
                    }
                }
            }, {
                value: 37,
                itemStyle: {
                    normal: {
                        color: '#0DAFF4'
                    }
                }
            }]
        },


    ]
};