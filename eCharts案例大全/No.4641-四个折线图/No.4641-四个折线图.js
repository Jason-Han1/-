
   var cw = document.body.clientHeight / 70;

    var textStyle = {
        fontSize : 1.2*cw,
        color: "rgba(255,255,255,1)",
    }
    var  axisLabel = {
        show: true,
        textStyle: {
            fontSize:cw,
            color: "rgba(255,255,255,0.6)"
        }
    }
    var axisLine = {
        lineStyle: {
            color:"rgba(169,213,255,0.15)",
        }
    }

    var lineStyle = {
        color: "rgba(169,213,255,0.15)",
    }
 
 var timeData = [
            '2009/6/12 2:00',
            '2009/6/12 3:00',
            '2009/6/12 4:00',
            '2009/6/12 5:00',
            '2009/6/12 6:00',
            '2009/6/12 7:00',
            '2009/6/12 8:00',
            '2009/6/12 9:00',
            '2009/6/12 10:00',
        ]

        timeData = timeData.map(function (str) {
            return str.replace('2009/', '');
        });

        // 指定图表的配置项和数据
        var option = {
            backgroundColor:'#03143A',
            title: {
                text: '默认模板一的',
                textStyle:textStyle ,
                show:true,
                top:0,
                left:0
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: false
                }
            },
            legend: {
                data: ['流量', '降雨量','风量','雪亮'],
                right: 30,
                top:0,
                textStyle: {
                    color: 'rgba(213,241,255,1)'
                },
            },
            toolbox: {

            },
            axisPointer: {
                link: {xAxisIndex: 'all'}
            },
            // dataZoom: [
            //     {
            //         show: true,
            //         realtime: true,
            //         start: 30,
            //         end: 70,
            //         xAxisIndex: [0, 1]
            //     },
            //     {
            //         type: 'inside',
            //         realtime: true,
            //         start: 30,
            //         end: 70,
            //         xAxisIndex: [0, 1]
            //     }
            // ],
            grid: [{
                left: 50,
                right: 50,
                height: '15%'
            }, {
                left: 50,
                right: 50,
                top: '33%',
                height: '15%'
            }, {
                left: 50,
                right: 50,
                top: '56%',
                height: '15%'
            }, {
                left: 50,
                right: 50,
                top: '79%',
                height: '15%'
            }
            ],
            xAxis: [
                {
                    gridIndex: 0,
                    type: 'category',
                    boundaryGap: false,
                    data: timeData,
                    axisLabel:axisLabel,
                    axisLine:axisLine,
                },
                {
                    gridIndex: 1,
                    type: 'category',
                    boundaryGap: false,
                    axisLabel:axisLabel,
                    axisLine:axisLine,
                    data: timeData,
                }, {
                    gridIndex: 2,
                    type: 'category',
                    boundaryGap: false,
                    axisLabel:axisLabel,
                    axisLine:axisLine,
                    data: timeData,
                },
                {
                    gridIndex: 3,
                    type: 'category',
                    boundaryGap: false,
                    axisLabel:axisLabel,
                    axisLine:axisLine,
                    data: timeData,
                },

            ],
            yAxis: [
                {
                    gridIndex: 0,
                    name: '流量(m^3/s)',
                    // nameLocation:'end',
                    nameTextStyle:{
                        color:"rgba(255,255,255,0.8)",
                        fontSize:cw,
                        padding:[0, 0, -5, 0]
                    },
                    type: 'value',
                    axisLabel:axisLabel,
                    axisLine:axisLine,
                    splitLine:{
                        show: true,
                        lineStyle: lineStyle,
                    },
                    axisTick:{ //y轴刻度线
                        show:false
                    },
                },
                {
                    gridIndex: 1,
                    name: '降雨量(mm)',
                    nameTextStyle:{
                        color:"rgba(255,255,255,0.8)",
                        fontSize:cw,
                        padding:[0, 0, -5, 0]
                    },
                    type: 'value',
                    axisLabel:axisLabel,
                    axisLine:axisLine,
                    splitLine:{
                        show: true,
                        lineStyle: lineStyle,
                    },
                    axisTick:{ //y轴刻度线
                        show:false
                    },
                }, {
                    gridIndex: 2,
                    name: '风量(m/s)',
                    nameTextStyle:{
                        color:"rgba(255,255,255,0.8)",
                        fontSize:cw,
                        padding:[0, 0, -5, 0]
                    },
                    type: 'value',
                    axisLabel:axisLabel,
                    axisLine:axisLine,
                    splitLine:{
                        show: true,
                        lineStyle: lineStyle,
                    },
                    axisTick:{ //y轴刻度线
                        show:false
                    },
                }, {
                    gridIndex: 3,
                    name: '雪亮(m/s2)',
                    nameTextStyle:{
                        color:"rgba(255,255,255,0.8)",
                        fontSize:cw,
                        padding:[0, 0, -5, 0]
                    },
                    type: 'value',
                    axisLabel:axisLabel,
                    axisLine:axisLine,
                    splitLine:{
                        show: true,
                        lineStyle: lineStyle,
                    },
                    axisTick:{ //y轴刻度线
                        show:false
                    },
                }
            ],
            series: [
                {
                    name: '流量',
                    type: 'line',
                    symbolSize: 0,
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    smooth: 0.5,
                    hoverAnimation: false,
                    color:"rgba(0,255,182,1)",
                    areaStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgba(0,255,182,0.8)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(0,255,182,0)' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            },
                        }},
                    data: [
                        3,2,3,4,5,6,7,7,10
                    ]
                },
                {
                    name: '降雨量',
                    type: 'line',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    symbolSize: 0,
                    smooth: 0.5,
                    hoverAnimation: false,
                    color:"rgba(0,255,182,1)",
                    areaStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgba(0,255,182,0.8)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(0,255,182,0)' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            },
                        }},
                    data: [
                        1,2,3,4,5,6,7,11,10
                    ]
                },{
                    name: '风量',
                    type: 'line',
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    symbolSize: 0,
                    smooth: 0.5,
                    hoverAnimation: false,
                    color:"rgba(0,255,182,1)",
                    areaStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgba(0,255,182,0.8)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(0,255,182,0)' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            },
                        }},
                    data: [
                        3,2,3,4,5,6,7,7,10
                    ]
                },{
                    name: '雪亮',
                    type: 'line',
                    xAxisIndex: 3,
                    yAxisIndex: 3,
                    symbolSize: 0,
                    smooth: 0.5,
                    hoverAnimation: false,
                    color:"rgba(0,255,182,1)",
                    areaStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgba(0,255,182,0.8)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(0,255,182,0)' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            },
                        }},
                    data: [
                        3,4,3,4,5,6,7,8,10
                    ]
                },
            ]
        };