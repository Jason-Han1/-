option = {
                    backgroundColor:'#fff',
                    grid: {
                        top:'25%',
                        left: '7%',
                        right: '15%',
                        bottom: '7%',
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis',
                        textStyle: {
                            color: '#FFF',
                            fontSize:12,
                            // fontFamily: "PingFangSc-Regular, sans-serif",
                            background: 'rgba(255,255,255,0.1)',
                            lineHeight:20
                        },
                        axisPointer: {
                            type: 'shadow',
                            background: 'rgba(255,255,255,0.1)',
                        },
                        position: 'inside',
                    },
                    legend: {
                        top: 0,
                        left:'center',
                        itemWidth: 6, //矩形宽度
                        itemHeight: 6, //矩形宽度
                        data:[
                        {name: '首客订单率目标',icon: 'line'},
                        {name: '客流目标达成'},
                        {name: '客流目标未达成'}
                    ],
                    },
                    xAxis: {
                        axisLine: { //  改变x轴颜色
                            show:true,
                            lineStyle: {
                                color: '#F0EFEF',
                                type:'solid'
                            }
                        },
                    axisTick: {
                            show: false
                        },
                        axisLabel: { //  改变x轴字体颜色和大小
                            textStyle: {
                                color: "#A3A9AF",
                                fontSize: 12
                            },
                        },
                        splitLine: {
                            show:false
                        },
                    },
                    yAxis: {
                        // name:'%',
                        typpe:'dashed',
                        nameTextStyle: {
                            color: '#A3A9AF',
                            padding: [0, 25, 0, 0]
                        },
                        axisLine: { //  改变y轴颜色
                            lineStyle: {
                                color: '#F0EFEF'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: { //  改变y轴字体颜色和大小
                            //formatter: '{value} m³ ', //  给y轴添加单位
                            textStyle: {
                                color: "#A3A9AF",
                                fontSize: 12
                            },
                        },
                        splitLine: {
                            show:true,
                            lineStyle: {
                                color: "#E9E9E9",
                                type:'dashed'
                            }
                        },
                    },
                    series: [
                        {
                        name: '首客订单率目标',
                        type: 'line',
                        color:"#52AED0",
                        symbol: "none",
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#52AED0'
                                }
                            }
                        },
                        markLine: {
                            animation: false,
                            label: {
                                formatter: '23.5%',
                                align: 'right',
                                color:"#252525",
                                distance: 15,
                            },
                            lineStyle: {
                                type: 'solid',
                                color:"#52AED0"
                            },
                            tooltip: {
                                formatter: '23.5%',
                            },
                            data: [[{
                                coord: [0, 0],
                                symbol: 'none'
                            }, {
                                coord: [14,14],
                                symbol: 'none'
                            }]]
                        }
                    },{
                        name: '客流目标达成',
                        type: 'scatter',
                        itemStyle: {
                            color: "#77C620",
                        },
                        symbolSize: 6,
                        data: [[10.0, 8.04],
                        [8.0, 6.95],
                        [13.0, 7.58],
                        [9.0, 8.81],
                        [11.0, 8.33],
                        [14.0, 9.96],
                        [6.0, 7.24],
                        [4.0, 4.26],
                        [12.0, 10.84],
                        [7.0, 4.82],
                        [5.0, 5.68]
],
                    },
                    {
                        name: '客流目标未达成',
                        type: 'scatter',
                        itemStyle: {
                            color: "#F03024",
                        },
                        symbolSize: 6,
                        data: [
                        [9.0, 5.04],
                        [11.0, 7.95],
                        [12.0, 8.58],
                        [5.0, 11.81],
                        [7.0, 12.33],
                        [11.0, 7.96],
                        [7.0, 9.24],
                        [6.0, 8.26],
                        [10.0, 11.84],
                        [7.0, 3.82],
                        [6.0, 4.68]
                    ]
                    },
                    {
                        name: '',
                        type: 'line',
                            markLine: {
                                symbol: 'none',
                                silent: true,
                                lineStyle: {
                                    type: 'solid',
                                    width: 1,
                                    color: '#F03024',
                                },
                                label: {
                                    // show: false
                                    color:'#A3A9AF',
                                    distance: [-25,8,0,0],
                                    padding:[-15,2,2,3],
                                    formatter: function(params) {
                                        return params.name;
                                    }
                                },
                                data:[{name:'日均累客流量',yAxis:5},{name:'日均累订单量',xAxis:5}]
                            }
                        }
                    ]
                }