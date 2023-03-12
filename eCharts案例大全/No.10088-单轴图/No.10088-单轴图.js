option = {
  backgroundColor: '#00051c',
            tooltip: {
                trigger: 'item'
            },
            legend: {
                data: ['测试'],
                show: 'true',
                top: '40',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: '18',
                    color: ['#01a2e9'],
                }
            },
            singleAxis: {
                top: '60%',
                bottom: '50%',
                axisLabel: {
                    interval: 1
                },
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: 'white',
                    }
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                boundaryGap: false,
                data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
                    "16", "17", "18"
                ],
            },
            series: [{
                name: '测试',
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        color: 'rgb(21,162,233,0.8)',
                        fontSize: '14'
                    }
                },
                coordinateSystem: 'singleAxis',
                type: 'scatter',
                markPoint: {

                    data: [{
                            coord: [1, 29],
                            label: {
                                normal: {
                                    padding: [5, 10, 10, 10],
                                    fontSize: 14,
                                    color: "white",
                                    formatter: ['1'].join(""),
                                }
                            },
                            itemStyle: {
                                color: '#c03636',
                            },
                        },
                        {
                            label: {
                                normal: {
                                    padding: [5, 10, 10, 10],
                                    fontSize: 14,
                                    color: "white",
                                    formatter: ['2'].join(""),
                                }
                            },
                            itemStyle: {
                                color: '#c03636',
                            },
                            coord: [2, 24],
                        },
                        {
                            label: {
                                normal: {
                                    padding: [5, 10, 10, 10],
                                    fontSize: 14,
                                    color: "white",
                                    formatter: ['3'].join(""),
                                }
                            },
                            itemStyle: {
                                color: '#c03636',
                            },
                            coord: [4, 24],
                        },



                        {
                            coord: [7, 21],
                            label: {
                                normal: {
                                    padding: [5, 10, 10, 10],
                                    fontSize: 14,
                                    color: "white",
                                    formatter: ['14'].join(""),
                                }
                            },
                            itemStyle: {
                                color: '#344b5b',
                            },
                        },
                        {
                            label: {
                                normal: {
                                    padding: [5, 10, 10, 10],
                                    fontSize: 14,
                                    color: "white",
                                    formatter: ['15'].join(""),
                                }
                            },
                            itemStyle: {
                                color: '#344b5b',
                            },
                            coord: [6, 21],
                        },
                        {
                            label: {
                                normal: {
                                    padding: [5, 10, 10, 10],
                                    fontSize: 14,
                                    color: "white",
                                    formatter: ['16'].join(""),
                                }
                            },
                            itemStyle: {
                                color: '#344b5b',
                            },
                            coord: [15, 21],
                        },
                        // {type : 'max',
                        //     formatter: ['1'].join(""),
                        //     name: '最大值',symbolOffset:[0,'-20%'],
                        //     itemStyle:{
                        //         color:'#c03636',
                        //     },},
                        // {type : 'min', name: '最小值',symbolOffset:[0,'-20%'],
                        //     itemStyle:{
                        //         color:'#344b5b',
                        //     }}
                    ]
                },
                symbolSize: function (data) {
                    return Math.floor(Math.random() * data + 20);
                },
                data: ['20', '50', '29', '27', '25', '22', '4', '5', '25', '22', '21', '22', '24', '25.5',
                    '26', '2'
                ],

                itemStyle: {
                    normal: {
                        color: 'rgb(21,162,233,0.9)',

                    }
                }
            }, ]
};