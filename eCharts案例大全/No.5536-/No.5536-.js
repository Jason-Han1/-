 
 const  xList= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
 const  yList= [220, 182, 191, 234, 290, 330, 310]
        const yListFull = []
        
        const maxNum =330;
        yList.forEach(e => {
            yListFull.push(maxNum)
        })

 option = {
                backgroundColor: 'black',
                tooltip: {

                },
                xAxis: {

                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: true
                    },

                    axisLine: {
                        lineStyle: {

                            color: '#00D2FF'
                        },
                    },

                    axisLabel: {
                        show: true,
                        fontSize: 12,
                        color: '#FFFFFF',
                        // rotate:45
                    },
                    data: xList,

                },
                yAxis: [
                    {
                        type: "value",
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },

                        axisLabel: {
                            show: true,
                            fontSize: 12,
                            color: '#FFFFFF'

                        },
                        splitLine: {
                            show: false
                        },
                        max: maxNum,
                    },
                ],
                grid: {
                    top: 20,
                    left: 20,
                    right: 20,
                    bottom: 20,
                    containLabel: true,
                },
                series: [



                    {
                        // current data
                        type: 'pictorialBar',
                        symbol: 'rect',
                        symbolRepeat: true,
                        symbolMargin: '20%',
                        symbolClip: true,
                        symbolSize: [16, 5],

                        label: {
                            normal: {
                                show: false,
                                position: 'right',
                                offset: [-60, 30],
                                textStyle: {
                                    color: 'darkorange',
                                    fontSize: 18
                                }
                            }
                        },

                        "itemStyle": {
                            "normal": {
                                "color": "rgb(95,172,235)"
                            }
                        },
                        data: yList,
                        z: 22,

                    }, {
                        // full data
                        type: 'pictorialBar',
                        itemStyle: {
                            normal: {
                                color: '#355F69'
                            }
                        },

                        symbolRepeat: true,
                        symbolMargin: '20%',
                        symbol: 'rect',
                        silent: true,
                        symbolSize: [16, 5],
                        data: yListFull,


                    }
                ]
            };