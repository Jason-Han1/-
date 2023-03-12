var option = {
    backgroundColor: '#000',
    tooltip: {
        show: true,
        padding: 15,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    grid: {
        left: 100,
        top: 120,
        width: 300
    },
    xAxis: [{
        gridIndex: 0,
        type: 'value',
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        show: false
    }],
    yAxis: [{
            gridIndex: 0,
            splitLine: '',
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                verticalAlign: 'bottom',
                align: 'left',
                padding: [0, 8, 10, 10],
                textStyle: {
                    color: '#ffffff',
                    fontSize: '16',
                }
            },
            data: [{
                value: '1 区域1',
            }, {
                value: '2 区域2'
            }],
            interval: 1
        }, {
            gridIndex: 0,
            splitLine: '',
            axisTick: 'none',
            axisLine: 'none',
            data: [800, 220],
            axisLabel: {
                show: true,
                verticalAlign: 'bottom',
                align: 'right',
                padding: [0, 8, 10, 10],
                textStyle: {
                    color: '#fff',
                    fontSize: '16',
                },
                formatter: '{y|{value}} {x|m2}',
                rich: {
                    y: {
                        color: '#fffa6f',
                        fontSize: 16
                    },
                    x: {
                        fontSize: 12
                    }
                }
            },
            interval: 1
        },

    ],
    series: [{
            name: "barSer",
            type: "bar",
            roam: false,
            zlevel: 2,
            silent: true,
            barWidth: 4,
            barGap: "100%",
            barMinHeight: 2,
            label: {
                normal: {
                    show: false,
                    position: 'left',
                    fontSize: 16,
                    color: "rgba(128,245,255)",
                    align: "left",

                    offset: [8, -18],
                    rich: {
                        b: {
                            fontSize: 16,
                            fontStyle: "italic",
                            color: "rgba(128,245,255)",
                        },
                        c: {
                            fontSize: 16,
                            fontStyle: "italic",
                            color: "rgba(128,245,255)",
                        },
                        d: {
                            fontSize: 16,
                            color: 'rgba(128,245,255,0.5)',
                            padding: [-2, 0, 0, 0]
                        },
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#80F5FF'
                }
            },
            data: [{
                "name": "浙江省",
                "regionCode": 330000,
                "level": "province",
                "value": '820',
                "saleArea": 1850520.62,
                "saleAmount": 4728884.83,
                "regionName": "浙江省"
            }, {
                "name": "四川省",
                "regionCode": 510000,
                "level": "province",
                "value": '200',
                "saleArea": 48366.83,
                "saleAmount": 105052.38,
                "regionName": "四川省"
            }]
        },
        {
            name: "bar",
            type: "bar",
            barGap: "-100%",
            barWidth: 4,
            zlevel: 2,
            silent: true,
            animation: false,
            xAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: 'rgba(128,245,255,0.5)'
                }
            },
            data: [{
                "value": "1000"
            }, {
                "value": "1000"
            }]
            // barCategoryGap: "15%"
        }
    ]
};