option = {
                    grid: {
                        z: 1, //grid作为柱状图的坐标系，其层级要和仪表图层级不同，同时隐藏
                        show: false,
                        left: '0%',
                        right: '0%',
                        top: '0%',
                        containLabel: true,
                        splitLine: {
                            show: true //隐藏分割线
                        },
                    },
                    xAxis: [ //这里有很多的show，必须都设置成不显
                        {
                            type: 'category',
                            data: [],
                            axisLine: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            },
                            splitArea: {
                                interval: 'auto',
                                show: false
                            }
                        }
                    ],
                    yAxis: [ //这里有很多的show，必须都设置成不显示
                        {
                            type: 'value',
                            axisLine: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            },
                        }
                    ],
                    toolbox: {
                        show: false,
                    },
                    series: [{
                            name: "白色圈",
                            type: "gauge",
                            radius: "80%",
                            center: ["50%", "65%"],
                            startAngle: 0,
                            endAngle: 180,
                            splitNumber: 30,
                            z: 4,
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                length: 35,
                                lineStyle: {
                                    width: 3,
                                    color: "#fff"
                                }
                            }, 
                            axisLabel: {
                                show: false
                            },
                            pointer: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    opacity: 0
                                }
                            },
                            detail: {
                                show: false
                            },
                            data: [{
                                value: 0,
                                name: ""
                            }]
                        },{
                            name: '刻度盘',
                            type: 'gauge',
                            startAngle: 180,
                            endAngle: 90,
                            center: ["50%", "65%"], //整体的位置设置
                            z: 3,
                            min: 0,
                            max: 20000,
                            splitNumber: 12,
                            radius: '80%',
                            axisLine: {
                                show: false, // 坐标轴线
                                lineStyle: { // 属性lineStyle控制线条样式
                                    width: 35,
                                    color: [
                                        [20000, '#33bbff']
                                    ],
                                }

                            },
                            splitLine: {
                                show: false
                            },
                            data: [{
                                show: false,
                                value:20000,
                            }],
                            axisLabel: {
                                show: false
                            },
                            axisTick: {
                                show: false,
                            },
                            pointer: {
                                width:8,
                                z: 5,
                                itemStyle: {
                                    color: "#0096ff"
                                },
                            },
                            itemStyle: {
                                color: "#0096ff",
                                fontSize: 12,
                            },
                            detail: {
                                color: '#33bbff'
                            }

                        },
                        {
                            name: '灰色内圈',
                            type: 'gauge',
                            z: 2,
                            min:0,
                            max:20000,
                            radius: '80%',
                            startAngle: 180,
                            endAngle: 0,
                            center: ["50%", "65%"], //整体的位置设置
                            splitNumber: 4,
                            axisLine: { // 坐标轴线
                                lineStyle: { // 属性lineStyle控制线条样式
                                    color: [
                                        [1, '#e0e0e0']
                                    ],
                                    width: 35,
                                    opacity: 1,
                                }
                            },
                            splitLine: { //分隔线样式
                                show: false,
                            },
                            axisLabel: { //刻度标签
                                distance: 18,
                                color: '#0096ff',
                                fontSize: 14,
                            },
                            axisTick: { //刻度样式
                                show: false,
                            },
                            detail: {
                                show: false,
                                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 10
                                }
                            },
                        }
                    ]
                }