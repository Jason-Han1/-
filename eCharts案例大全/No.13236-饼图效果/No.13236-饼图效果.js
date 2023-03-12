            var titleList = ""
            var dataList = [10,7,2];
            var nameList = ['2015','2016','2017'];
            var max = 10;
            
            var radiuslist = [
                [150, 170],
                [120, 140],
                [90, 110]
            ];
            var dataStyle = {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    shadowBlur: 40,
                    shadowColor: 'rgba(40, 40, 40, 0.5)',
                }
            };
            var placeHolderStyle = {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            };
            var bgpie = [
                {
                    value: max,
                    name: '03',
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,166,255,0.20)',
                        }
                    }
                },
                {
                    value: max/3,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }

            ];
            var labelStyle = {
                normal: {
                    show: false,
                    position: 'inside', //center
                    formatter: '{d}%', //{d}
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 22
                    }
                },
                emphasis: {
                    show:false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            };

            //环形echart图

            var option = {
//				tooltip: {
//					show: true,
//					formatter: "{a} <br/>{b} : {c} ({d}%)"
//				},
                legend: {
                    itemGap: 14,
                    orient: 'vertical',
                    right: '4%',
                    top: '4%',
                    data: nameList,
                    textStyle: {
                        color: 'white',
                        fontSize: 22
                    }

                },
                series: [
                    {
                        name:titleList,
                        type: 'pie',
                        animationDuration: 3000,
                        clockWise: false,
                        radius: radiuslist[0],
                        itemStyle: dataStyle,
                        hoverAnimation: false,
                        data: bgpie
                    },
                    {
                        name:titleList,
                        type: 'pie',
                        animationDuration: 3000,
                        clockWise: false,
                        radius: radiuslist[0],
                        hoverAnimation: false,
                        label: labelStyle,
                        data: [{
                            value: dataList[0],
                            name: nameList[0],
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#019CFF'
                                    }, {
                                        offset: 1,
                                        color: '#02CCFF'
                                    }])
                                }
                            }
                        },
                            {
                                value: (max/3)*4 - dataList[0],
                                name: 'invisible',
                                itemStyle: placeHolderStyle
                            }

                        ]
                    },

                    {
                        name: titleList,
                        type: 'pie',
                        animationDuration: 3500,
                        clockWise: false,
                        radius: radiuslist[1],
                        itemStyle: dataStyle,
                        hoverAnimation: false,
                        data: bgpie
                    },
                    {
                        name:titleList,
                        type: 'pie',
                        animationDuration: 4000,
                        clockWise: false,
                        radius: radiuslist[1],
                        hoverAnimation: false,
                        label: labelStyle,
                        data: [{
                            value:dataList[1],
                            name: nameList[1],
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#7ED321'
                                    }, {
                                        offset: 1,
                                        color: '#B5EC45'
                                    }])
                                }
                            }
                        },
                            {
                                value: (max/3)*4 - dataList[1],
                                name: 'invisible',
                                animationDuration: 4500,
                                itemStyle: placeHolderStyle
                            }

                        ]
                    },

                    {
                        name: titleList,
                        type: 'pie',
                        clockWise: false,
                        animationDuration: 5000,
                        radius: radiuslist[2],
                        itemStyle: dataStyle,
                        hoverAnimation: false,
                        data: bgpie
                    },
                    {
                        name: titleList,
                        type: 'pie',
                        clockWise: false,
                        animationDuration: 5000,
                        radius: radiuslist[2],
                        hoverAnimation: false,
                        label: labelStyle,
                        data: [{
                            value: dataList[2],
                            name:nameList[2],
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#FF9F00'
                                    }, {
                                        offset: 1,
                                        color: '#FFCD00 '
                                    }])
                                }
                            }
                        },
                            {
                                value: (max/3)*4 - dataList[2],
                                name: 'invisible',
                                itemStyle: placeHolderStyle
                            }

                        ]
                    }

                ]
            };
