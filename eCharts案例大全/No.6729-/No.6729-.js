var uploadedDataURLgy = "/asset/get/s/data-1596091465916-oHcnJPMfb.png";

var uploadedDataURLbl = "/asset/get/s/data-1596091439783-ZEiPOPGHH.png";


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
                    itemWidth: 16,
                    itemHeight: 16,

                    data: [{
                        name: '进入',
                        icon: 'image://' + uploadedDataURLbl
                    },
                        {
                            name: '外出',
                            icon: 'image://' + uploadedDataURLgy
                        }
                    ],
                    textStyle: {
                        fontSize: 12, //字体大小
                        color: '#a4dafe', //字体颜色
                    },
                    left: '20%' //距离右侧
                },
                grid: {
                    left: '0',
                    top: '30px',
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
                        // interval: 0, //设置x轴的标签显示可自适应
                        show: true,
                        textStyle: {
                            color: '#8fd5f3'
                        }
                    },
                    data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']

                }],
                yAxis: [{
                    type: 'value',
                    name: '次',
                    nameTextStyle: { //y轴上方单位的颜色
                        color: '#8fd5f3'
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true, //y轴线
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
                        show: false,
                        lineStyle: {
                            color: ['#56859d'],
                            width: 1,
                            type: 'solid'
                        }
                    },


                }],
                series: [{
                    name: '外出',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 2,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: '#777779',
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(119,119,121,0.8)'
                            },
                                {
                                    offset: 0.5,
                                    color: 'rgba(119,119,121,0.4)'
                                },
                                {
                                    offset: 0.8,
                                    color: 'rgba(119,119,121,0.2)'
                                },
                                {
                                    offset: 1,
                                    color: 'transparent'
                                }
                            ], false),
                            // shadowColor: 'rgba(232,246,254,0.2)',
                            shadowBlur: 30
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#777779',
                            borderColor: '#777779',
                            borderWidth: 0

                        }
                    },

                    data: [0, 0, 0, 0, 0, 0, 2, 5, 8, 20, 50, 55, 100, 20, 30, 25, 33, 21, 125, 60, 50, 24, 30, 20,12],
                },
                    {
                        name: '进入',
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 2,
                        showSymbol: false,
                        lineStyle: {
                            normal: {
                                width: 2,
                                color: '#32e8f5',
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(50,232,245,0.7)'
                                },
                                    {
                                        offset: 0.5,
                                        color: 'rgba(50,232,245,0.4)'
                                    },
                                    {
                                        offset: 0.8,
                                        color: 'rgba(50,232,245,0.2)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'transparent'
                                    }
                                ], false),
                                // shadowColor: 'rgba(232,246,254,0.2)',
                                shadowBlur: 30
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#32e8f5',
                                borderColor: '#32e8f5',
                                borderWidth: 0

                            }
                        },

                        data: [0, 0, 0, 0, 0, 2, 5, 20, 50, 120, 50, 40, 50, 155, 60, 40, 55, 30, 66, 60, 50, 22, 10, 0,0],
                    },

                ]
            }