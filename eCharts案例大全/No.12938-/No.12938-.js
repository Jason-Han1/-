option = {
    backgroundColor:"#fff",
    grid: {
        containLabel: true,
        left: "10%",
        right: "15%",
        top: "15%",
        bottom:"18%",
    },
            tooltip: {
                trigger: 'axis',
                axisPointer: {type: 'cross'}
            },

            legend: {
                textStyle:{
                    color:'#080808'
                },
                top:360,
                data:['2018年税收收入','2018年增幅','市局增幅']
            },
            xAxis: [
                {
                    type: 'category',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 1,
                            color: '#080808'
                        }
                    },
                    splitLine: { //坐标轴在 grid 区域中的分隔线。
                        show: false,
                    },
                    axisLabel: {
                        color:'#080808',
                        rotate: 45,
                    },
                    data:['1月', '1-2月', '1-3月', '1-4月', '1-5月', '1-6月', '1-7月', '1-8月', '1-9月', '1-10月'],
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '税收（亿元）',
                    nameTextStyle: {
                        color: '#080808',
                    },
                    min: 0,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 1,
                            color: '#080808'
                        }
                    },
                    splitLine: { //坐标轴在 grid 区域中的分隔线。
                        show: false,
                    },
                    axisLabel: {
                        color:'#080808',
                        formatter: '{value}'
                    }
                },
                {
                    type: 'value',
                    name: '增长（%）',
                    nameTextStyle: {
                        color: '#080808',
                    },
                    position: 'right',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#080808"
                        }
                    },
                    splitLine: { //坐标轴在 grid 区域中的分隔线。
                        show: false,
                    },
                    axisLabel: {
                        color:'#080808',
                        formatter: '{value}',
                    }
                }
            ],
            series: [
              
                {
                      label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff', //百分比颜色
                    },
                   position: 'insideTop',
                rotate:'-90',
                offset :[7, 12],
                    //百分比格式
                    formatter:"{c}"
                }
            },
                    name:'2018年税收收入',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#f06cfc'
                            }, {
                                offset: 1,
                                color: '#4318a8'
                            }]),
                            opacity: 1,
                        }
                    },
                    data:[2194,1162,1083,1671,1488,1197,1487,1387,1355,1176],
                },
                {
                    name:'2018年增幅',
                    type:'line',
                    yAxisIndex: 1,
                    itemStyle:{normal:{color:'#fffb6f'}},
                    data:[6.6,7.7,6.9,35.2,3.4,3.0,6.7,8.2,4.5,8.2]

                },
                  {
                    name:'市局增幅',
                    type:'line',
                    yAxisIndex: 1,
                    itemStyle:{normal:{color:'#3ffa66'}},
                    data:[12.0,11.7,12.2,10.6,9.3,8.7,8.4,8.3,8.0,7.2]

                },
            ]
        };