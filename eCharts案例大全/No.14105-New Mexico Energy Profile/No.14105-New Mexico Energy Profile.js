var yAxisData = ['Total energy','Renewable energy','Biomass', 'Fuel ethanol', 'Geothermal energy', 'Hydroelectricity ', 'Natural gas', 'Photovoltaic and solar', 'Wood and waste', 'Aviation gasoline', 'Coal', 'Distillate fuel oil', 'Jet fuel', 'LPG', 'Motor gasoline'];
var option = {
    toolbox: {
        show: true,
        　　feature: {
            saveAsImage: {
                show: true,
                　　　　excludeComponents: ['toolbox'],
                　　　　pixelRatio: 2
            }
        }
    },
    title: [{
            text: "Energy Consumption by Sector",
            x: '2%',
            y: '1%',
            textStyle: {
                fontSize: "14"
            }
        },
        {
            text: "Energy Consumption Estimates",
            subtext:"Billion Btu",
            x: '40%',
            y: '1%',
            textStyle: {
                fontSize: "14"
            }
        },
        {
            text: "Energy Consumption Structure",
            x: '2%',
            y: '33%',
            textStyle: {
                fontSize: "14"
            }
        },
        {
            text: "Energy Production Structure",
            x: '2%',
            y: '66%',
            textStyle: {
                fontSize: "14"
            }
        },
    ],
    grid: [{
        x: '50%',
        y: '7%',
        width: '45%',
        height: '90%'
    }, ],
    tooltip: {
        formatter: '{b} ({c})'
    },
    xAxis: [{
        gridIndex: 0,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        }
    }, ],
    yAxis: [{
        gridIndex: 0,
        interval: 0,
        data: yAxisData,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#6173a3"
            }
        },
    }],
    series: [{
            name: 'Energy Consumption by Sector',
            type: 'pie',
            radius: '25%',
            center: ['22%', '19%'],
            data: [{
                    value: 227361,
                    name: 'Industrial'
                },
                {
                    value: 122394.7,
                    name: 'Commercial'
                },
                {
                    value: 117954.1,
                    name: 'Residential'
                },
                {
                    value: 202385.2,
                    name: 'Transportation'
                },
                {
                    value: 395143.7,
                    name: 'Electric Power'
                }
            ],
            labelLine: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{b} \n ({d}%)'
                    }
                },
            },
        },
        {
            name: 'Energy Consumption Structure',
            type: 'pie',
            radius: '25%',
            center: ['22%', '52.5%'],
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [{
                    value: 634459.12269,
                    name: 'Non-renewable Energy'
                },
                {
                    value: 35635.38371,
                    name: 'Renewable Energy'
                }
            ],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{b} \n ({d}%)'
                    }
                },
            },
        },
        {
            name: 'Energy Production Structure',
            type: 'pie',
            radius: '25%',
            center: ['22%', '86%'],
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [{
                    value: 2378433.87465,
                    name: 'Non-renewable Energy'
                },
                {
                    value: 33785.17435,
                    name: 'Renewable Energy'
                }
            ],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{b} \n ({d}%)'
                    }
                },
            },
        },
        {
            name: 'Energy Consumption Estimates',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: '45%',
            label: {
                normal: {
                    show: true,
                    position: "right"
                }
            },
            data: [670094.5064,35635.38371,17295.22312,4114.76916,317.06702,2644.59888,247119.5569,282.52701,11633.20739,437.22152,306161.5315,74505.87153,
7587.28226,22673.02944,120780.5242],
        },

    ]
};