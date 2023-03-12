var uploadedDataURL1 = "/asset/get/s/data-1595928174135-NOQXJ43nY.png";

var uploadedDataURL2 = "/asset/get/s/data-1595928165200-Ym-8hV619.png";

option = {
    backgroundColor: '#010f1c',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            },
        }
    },
    legend: {
        itemWidth: 62,
         itemHeight: 24,

         data: [
                    {name:'上月', icon:'image://'+uploadedDataURL1},
                    {name:'本月', icon:'image://'+uploadedDataURL2}
                ],
        textStyle: {
            fontSize: 12, //字体大小
            color: '#a4dafe', //字体颜色
        },
        right: '3%' //距离右侧
    },
    grid: {
        left: '3%',
        top: '10%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {

            lineStyle: {
                color: '#273f55'
            }
        },
        axisLabel: {
            interval: 0, //设置x轴的标签显示可自适应
            show: true,
            textStyle: {
                color: '#8fd5f3'
            }
        },
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']

    }],
    yAxis: [{
        type: 'value',
        name: '单位/kwh',
        nameTextStyle: { //y轴上方单位的颜色
            color: '#8fd5f3'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false, //y轴线
            lineStyle: {
                show: false,

            }
        },
        axisLabel: {
            // margin: 10,
            textStyle: {
                fontSize: 12,
                color: '#8fd5f3',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#56859d'],
                width: 1,
                type: 'solid'
            }
        },


    }],
    series: [{
            name: '本月',
            type: 'line',
            symbol: 'circle',
            symbolSize: 2,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#1ee0e4',
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,192,255,0.4)'
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(0,192,255,0.4)'
                        },
                        {
                            offset: 0.8,
                            color: 'transparent'
                        }
                    ], false),
                    // shadowColor: 'rgba(232,246,254,0.2)',
                    shadowBlur: 30
                }
            },
            itemStyle: {
                normal: {
                    color: '#1ee0e4',
                    borderColor: '#1ee0e4',
                    borderWidth: 0

                }
            },
            markPoint: {
                label: {
                    color: "#fff",
                    formatter: "{b}\n{c}"
                },
                data: [{
                        type: 'max',
                        name: '最大值',
                        symbol: "pin",
                        symbolSize: 80,
                        itemStyle: {
                            color: "#0192b9"
                        },


                    },

                ]
            },
            data: [1000, 1600, 1100, 2000, 2000, 2200, 1900, 2450, 2350, 2400, 2550, 1500, 2000, 2000, 2200, 1900, 2450, 2450, 2350, 2400, 2550, 2450, 2450, 2350, 2400, 2550, 2300, 2330, 2300, 2630],
        },
        {
            name: '上月',
            type: 'line',
            symbol: 'circle',
            symbolSize: 2,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#eeda48',
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(238,218,72,0.4)'
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(238,218,72,0.4)'
                        },
                        {
                            offset: 0.8,
                            color: 'transparent'
                        }
                    ], false),
                    // shadowColor: 'rgba(232,246,254,0.2)',
                    shadowBlur: 30
                }
            },
            itemStyle: {
                normal: {
                    color: '#eeda48',
                    borderColor: '#eeda48',
                    borderWidth: 0

                }
            },
            markPoint: {
                label: {
                    color: "#fff",
                    formatter: "{b}\n{c}"
                },
                data: [{
                        type: 'max',
                        name: '最大值',
                        symbol: "pin",
                        symbolSize: 80,
                        itemStyle: {
                            color: "#bcaf3f"
                        },


                    },

                ]
            },
             data: [1000, 1400, 1300, 1800, 2200, 1950, 2200, 2400, 2300, 2250, 1950, 2400, 2300, 2250, 1950, 1800, 2200, 1950, 2200, 2300, 2250, 2400, 2300, 2600, 2250, 2400, 2300, 2250, 2500, 2400],
        },

    ]
}