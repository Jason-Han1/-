option = {
   backgroundColor: '#00051c',
            title: {
                left: 20,
                top: '5',
                textStyle: {

                    fontWeight: 'bold',
                    fontSize: '16',
                    color: 'white',

                },
                text: '测试',
            },
            legend: {
                // data:['本网格(元)','本地网同类网格均值(万元)'],
                data: ['概率'],
                show: 'true',
                top: '10',
                // left:'2',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: '14',
                    color: ['#855de6'],
                }
                // textStyle: {
                //     fontWeight: 'bold',
                //     fontSize: '12',
                //     color:['#3472c3','#60d3d9'],
                // }
            },
            xAxis: {
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'white',
                    }
                },

                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: 12 //更改坐标轴文字大小
                    },
                    interval: 0, //强制显示所有标签
                    rotate: 45, //代表逆时针旋转45度
                },
                data: ["二区", "三区", "四区", "五区", "七区", "八区", "九️区", "十区", "十一区", "十二区", "十三区", "14", "15", "16", "17",
                    "18", "19", "20"
                ],
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 100,
                interval: 25,
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    formatter: '{value}% '
                },
                axisLine: {
                    lineStyle: {
                        color: 'white',
                    }
                },
            },
            series: [{ // For shadow
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: 'rgba(41,29,96,0.5)'
                        }
                    },
                    barGap: '-100%',
                    barCategoryGap: '40%',
                    data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                        100
                    ],
                    animation: false
                }, {
                    name: '概率',
                    type: 'bar',
                    //  barWidth: 50,
                    barGap: '-100%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [{
                                        offset: 0,
                                        color: '#514ddd'
                                    }, //柱图渐变色
                                    {
                                        offset: 0.5,
                                        color: '#855de6'
                                    }, //柱图渐变色
                                    {
                                        offset: 1,
                                        color: '#9e65ea'
                                    }, //柱图渐变色
                                ]
                            )
                        },
                    },
                    data: [50, 60, 70, 80, 80, 60, 55, 59, 78, 65, 48, 38, 65, 48, 38, 65, 48, 38],
                }

            ]
};