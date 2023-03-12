        let data = [{
                name: '病床使用',
                value: 120,
                color: ['rgba(47,204,255,1)', 'rgba(47,204,255,0.5)', 'rgba(47,204,255,0.01)', 'rgba(0,0,0,0)']
            },
            {
                name: '病床未用',
                value: 50,
                color: ['rgba(253,42,52,1)', 'rgba(253,42,52,0.5)', 'rgba(253,42,52,0.01)', 'rgba(0,0,0,0)']
            },
        ];

        let PERCENT_data = [50, 66, 33, 5];
        let titleArr = [],
            legendArr = [],
            lineseriesArr = [{
                    name: '条',
                    type: 'bar',
                    stack: 'b',
                    yAxisIndex: 0,
                    data: PERCENT_data,
                    label: {
                        normal: {
                            show: false,
                            position: 'right',
                            distance: 10,
                            formatter: function(param) {
                                return param.value + '%'
                            },
                            textStyle: {
                                color: '#ffffff',
                                fontSize: '12'
                            }
                        }
                    },
                    barWidth: 6,
                    itemStyle: {
                        normal: {
                            color: '#2fbdff'
                        }
                    },
                    z: 2
                },
                {
                    name: '白框',
                    type: 'bar',
                    yAxisIndex: 1,
                    barGap: '-100%',
                    data: [100, 100, 100, 100],
                    barWidth: 6,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideBottomRight',
                            distance: 10,
                            formatter: function(data) {
                                return PERCENT_data[data.dataIndex];
                            },
                            textStyle: {
                                color: '#d9d9d9',
                                fontSize: 14,
                                fontWeight: 800
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#031a32',
                            barBorderRadius: 2
                        }
                    },
                    z: 1
                },
            ],
            pieseriesArr = [],
            seriesArr = [],
            total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].value
        }

        for (let i = 0; i < data.length; i++) {

            titleArr.push({
                text: ((data[i].value / total) * 100).toFixed(0) + '%',
                subtext: data[i].name,
                top: (i) * 45 + 20 + '%',
                left: '10.5%',
                textAlign: 'center',
                textStyle: {

                    fontSize: 14,
                    color: '#f7fcff',
                    fontWeight: 800

                },
                subtextStyle: {

                    fontSize: 12,
                    color: ['#f7fcff'],

                },
            });

            pieseriesArr.push({
                name: data[i].name,
                type: 'pie',
                clockWise: true,
                startAngle: 90,
                center: ['12%', (i) * 45 + 30 + '%'],
                radius: ['35%', '40%'],

                itemStyle: {
                    normal: {

                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                    }
                },
                hoverAnimation: false,

                data: [{
                    value: data[i].value,
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 1,
                                y: 0,
                                x2: 1,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: data[i].color[0] // 0% 处的颜色
                                }, {
                                    offset: 0.5,
                                    color: data[i].color[1] // 100% 处的颜色
                                }, {
                                    offset: 0.8,
                                    color: data[i].color[2] // 100% 处的颜色
                                }, {
                                    offset: 1,
                                    color: data[i].color[3] // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            },


                            shadowColor: data[i].color[0],
                            shadowBlur: 0,


                        }
                    },
                    label: {
                        show: false,

                    },
                }, {
                    value: total - data[i].value,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,0,0,0)'
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)'
                        }
                    }
                }]
            })

        }



        seriesArr = lineseriesArr.concat(pieseriesArr);


        option = {
            backgroundColor: '#000f1e',
            title: titleArr,
            grid: [{
                    x: '30%',
                    y: '20%',
                    bottom: '10px',
                    width: '65%',

                },

            ],
            xAxis: [{
                show: true,
                gridIndex: 0,
                position: 'top',
                name: '房间类型',
                nameLocation: 'middle',
                nameTextStyle: {
                    color: ' #0fc2e7',
                    fontSize: 14,
                    fontWeight: 800
                },
                splitLine: {
                    show: false,


                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },

            }],
            yAxis: [

                {
                    axisTick: 'none',
                    axisLine: 'none',
                    offset: -10,
                    axisLabel: {
                        textStyle: {
                            color: '#d9d9d9',
                            fontSize: '12',
                            align: 'left',
                            verticalAlign: 'bottom',
                            lineHeight: 30,
                        }
                    },
                    data: ['标准单人间', '标准双人间', '套房A', '套房B']
                },

                {


                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0,0,0,0)'
                        }
                    },
                    data: []
                }
            ],
            series: seriesArr
        };