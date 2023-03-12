option = {
    backgroundColor: '#013954',
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        show:false,
                        data:['车辆设备','电围设备','人脸设备', '门禁设备'],
                        textStyle: {
                            color: 'rgba(55,255,249,1)'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        top:'15%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['周一','周二','周三','周四','周五','周六','周日'],
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: 'rgb(0,253,255,0.6)'
                                }
                            },
                            axisLabel: {
                                interval:0,//横轴信息全部显示
                                rotate:-30,//-15度角倾斜显示
                                color: '#CFEFFF'
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: 'rgb(0,253,255,0.6)'
                                }
                            }
                        }
                    ],
                    series : [
                        {
                            name:'车辆设备',
                            type:'bar',
                            stack:"设备数量",
                            barWidth: 20,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: "rgba(0,191,255,0.8)"
                                },
                                    {
                                        offset: 1,
                                        color: "rgba(0,191,255,0.7)"
                                    }
                                ])
                            },
                            data:[235,356,354,344,356,897.456]
                        },
                        {
                            name:'电围设备',
                            type:'bar',
                            stack:"设备数量",
                            barWidth: 20,
                            barGap: '-100%',
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: "rgba(0,191,255,0.7)"
                                },
                                    {
                                        offset: 1,
                                        color: "rgba(0,191,255,0.6)"
                                    }
                                ])
                            },
                            data:[235,356,354,344,356,897.456]
                        },
                        {
                            name:'人脸设备',
                            type:'bar',
                            barWidth: 20,
                            barGap: '-100%',
                            stack: '设备数量',
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: "rgba(0,191,255,0.6)"
                                },
                                    {
                                        offset: 1,
                                        color: "rgba(0,191,255,0.5)"
                                    }
                                ])
                            },
                            data: [235,356,354,344,356,897.456]
                        },
                        {
                            name:'门禁设备',
                            type:'bar',
                            barWidth: 20,
                            barGap: '-100%',
                            stack: '设备数量',
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: "rgba(0,191,255,0.5)"
                                },
                                    {
                                        offset: 1,
                                        color: "rgba(0,191,255,0.4)"
                                    }
                                ])
                            },
                            data:[235,356,354,344,356,897.456]
                        }


                    ]
                };