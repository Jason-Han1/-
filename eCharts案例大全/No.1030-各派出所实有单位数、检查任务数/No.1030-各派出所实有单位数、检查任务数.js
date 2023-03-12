   let XData = ['张浦','锦溪','巴城','陆家','千灯','淀山湖','花桥','曹安','石浦','中华园']
   let valueData = {
       sydw: [300,390,290,285,290,288,790,795,795,760],
       jcrw: [805,860,400,400,400,400,990,985,990,850]
   }
   var option = {
                tooltip: {
                    trigger: 'item',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '2%',
                    right: '4%',
                    bottom: '14%',
                    top:'16%',
                    containLabel: true
                },
                legend: {
                    right: '2%',
                    top:'5%',
                    textStyle: {
                        color: "#666666"
                    },
                    itemWidth: 12,
                    itemHeight: 12,
                    itemGap: 25
                },
                xAxis: {
                    type: 'category',
                    data: XData,
                    axisLine: {
                        lineStyle: {
                            color: '#cdd5e2'

                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#666666"
                        }
                    },
                },
                yAxis: [{
                    type: 'value',
                    axisLabel: {                
                        textStyle: {
                            color: "#666666"
                        }}    ,
                    axisLine: {
                        lineStyle: {
                            color: '#cdd5e2'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(193, 207, 220, 1)'
                        }
                    },
                }
                ],
                "dataZoom": [{
                    "show": true,
                    "height": 8,
                    "xAxisIndex": [
                        0
                    ],
                    bottom: 30,
                    "start": 10,
                    "end": 90,
                    handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                    handleSize: '180%',
                    handleStyle:{
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fff',
                            },
                            {
                                offset: 1,
                                color: '#F0F5FA',
                            },
                        ]),
                        borderColor: '#D1DCED'
                    },
                   textStyle:{
                    color:"#333",
                    fontSize: 14,
                    zlevel: 10
                   },
                   borderColor: 'RGBA(221, 233, 242, 1)',
                   backgroundColor: 'RGBA(221, 233, 242, 1)'
                }, {
                    "type": "inside",
                    "show": true,
                    "height": 5,
                    "start": 1,
                    "end": 35
                }],
                series: [{
                    name: '实有单位数',
                    type: 'bar',
                    barWidth: '12px',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(171, 218, 83, 1)'
                            }, {
                                offset: 1,
                                color: 'rgba(132, 186, 27, 1)'
                            }]),
                            barBorderRadius: 6,
                        },
                    },
                    data: valueData.sydw
                },
                    {
                        name: '检查任务数',
                        type: 'bar',
                        barWidth: '12px',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(123, 200, 255, 1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(53, 157, 245, 1)'
                                }]),
                                barBorderRadius: 6,
                            }

                        },
                        data: valueData.jcrw
                    }
                ]
            };