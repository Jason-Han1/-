option = {
    backgroundColor:"#ffff",
    grid: {
        containLabel: true,
        left: "10%",
        right: "15%",
        top: "25%",
        bottom:"15%",
    },
            tooltip: {
                trigger: 'axis',
                axisPointer: {type: 'cross'}
            },

            legend: {
                textStyle:{
                    color:'#080808'
                },
                top:490,
                data:['2018年当月累计税收收入','2018年增幅']
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
                    data:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
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
                            color: '#080808'
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
                        color: '#080808', //百分比颜色
                    },
                   position: 'insideTop',
                rotate:'-90',
                offset :[5, -30],
                    //百分比格式
                    formatter:"{c}"
                }
            },
                    name:'2018年当月累计税收收入',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#e292ff'
                            }, {
                                offset: 1,
                                color: '#4318a8'
                            }]),
                            opacity: 1,
                        }
                    },
                    data:[112510,66848,78771,129306,128786,70052,83306,40635,33248,42073],
                },
                {
                    name:'2018年增幅',
                    type:'line',
                    yAxisIndex: 1,
                    itemStyle:{normal:{color:'#fffa66'}},
                    data:[8.3,5.3,11.9,2.2,-8.4,-31.9,16.4,23.1,29.8,5.7]

                },
            ]
        };