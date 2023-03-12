option = {
        backgroundColor: 'RGB(0,10,16)',
        angleAxis: {
            max: 100,
            startAngle: 90,
            show: false,
            // handle: {
            //     size: 50,
            //     show: false
            // },
            splitLine: {
                show: false
            }
        },

        grid: {
            top: '16%',
            bottom: '54%',
            left: "50%",
            containLabel: false
        },
        radiusAxis: {
            type: 'category',
            show: false,
            splitLine: {
                show: false
            },
            name: '111',
            // data: ['50%', '40%', 'x', 'y', 'z'],

        },
        polar: {
            tooltip: {
                show: true
            },
            radius: ['10%', '75%']
        },
        series: [{
                type: 'bar',
                stack: 'one',
                label: {
                    position: 'inside',
                    color: 'rgba(176,240,255,1)',
                    formatter: "{d}%"
                },
                animation:true,
                animationDuration:5000,
                data: [{
                    value: 50,
                        itemStyle: {
                            // color:"RGB(15,204,152)",
                            color: {
                                type: 'liner',
                                x: 0.5,
                                y: 0.5,
                                x2:1,
                                y2:1,
                                colorStops: [{
                                        offset: 0,
                                        color: 'RGBA(15,204,152,0.2)'

                                    },
                                    {
                                        offset: 1,
                                        color: 'RGBA(15,204,152,1)'
                                    }
                                ],
                            }
                        },
                }, {
                    value: 75,
                        itemStyle: {
                            // color:"RGB(15,204,152)",
                            color: {
                                type: 'liner',
                                x: 0.5,
                                y: 0.5,
                                x2:0,
                                y2:1,
                                colorStops: [{
                                        offset: 0,
                                        color: 'RGBA(15,204,152,0.2)'

                                    },
                                    {
                                        offset: 1,
                                        color: 'RGBA(15,204,152,1)'
                                    }
                                ],
                            }
                        },
                }, {
                    value: 25,
                        itemStyle: {
                            // color:"RGB(15,204,152)",
                            color: {
                                type: 'liner',
                                x: 0.5,
                                y: 0.5,
                                x2:1,
                                y2:0,
                                colorStops: [{
                                        offset: 0,
                                        color: 'RGBA(15,204,152,0.2)'

                                    },
                                    {
                                        offset: 1,
                                        color: 'RGBA(15,204,152,1)'
                                    }
                                ],
                            }
                        },
                }, 80, 65, {
                        value: 90,
                        itemStyle: {
                            // color:"RGB(15,204,152)",
                            color: {
                                type: 'liner',
                                x: 0.5,
                                y: 0.5,
                                x2:0,
                                y2:0,
                                colorStops: [{
                                        offset: 0,
                                        color: 'RGBA(15,204,152,0.2)'

                                    },
                                    {
                                        offset: 1,
                                        color: 'RGBA(15,204,152,1)'
                                    }
                                ],
                            }
                        },
                }],
                    roundCap: true,
                    zlevel: 2,
                    coordinateSystem: 'polar',
                    name: 'a',
                    barWidth: 10,
                    // color:'rgba(7,108,118,1)',

                    itemStyle: {
                        borderColor: 'red',
                        borderWidth: 0,
                        label: {
                            formatter: '{b}: {@score}',
                            show: true,
                            position: 'inside',
                            color: 'black',
                            backgroundColor: 'black'
                        },

                    }
                },
                {
                    type: 'bar',
                    stack: 'one',
                    roundCap: true,
                    zlevel: 1,
                    data: [100, 100, 100, 100, 100, 100],
                    coordinateSystem: 'polar',
                    name: 'b',
                    barWidth: 10,
                    color: 'RGB(13,46,49)',
                    // barWidth:10,
                    itemStyle: {
                        borderColor: 'rgba(7,108,118,1)',
                        borderWidth: 0
                    }
                }],
            legend: {
                show: false,
                x: 'right',

                data: ['a', 'b']
            }
        };