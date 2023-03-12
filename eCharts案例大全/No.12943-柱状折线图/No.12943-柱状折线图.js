option = {
    backgroundColor:"#ffff",
     grid: {
        containLabel: true,
        left: "10%",
        right: "10%",
        top: "21%",
        bottom:"21%",
    },
            tooltip: {
                trigger: 'axis',
                axisPointer: {type: 'cross'}
            },

            legend: {
                textStyle:{
                    color:'#080808'
                },
                top:445,
                data:['','']
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
                    data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月']
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
                            width: 1,
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
                { label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#080808', //百分比颜色
                    },
                   position: 'insideTop',
                rotate:'-90',
                offset :[7, -31],
                    //百分比格式
                    formatter:"{c}"
                }
            },
                    name:'累计',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#4318a8'
                            }, {
                                offset: 1,
                                color: '#46f3ff'
                            }]),
                            opacity: 1,
                        }
                    },
                    data:[112510,66848,78771,129306,128786,70052,83306,40635,33248,42073],
                },
              
                {
                    name:'累计同比',
                    type:'line',
                    yAxisIndex: 1,
                    itemStyle:{normal:{color:'#26f6a8'}},
                    data:[7.2,2.6,16.1,-3.3,1.9,6.6,9.2,-0.2,17.7,0.7],
                    markPoint : {
                        color:'blue',
                        data : [
                            {type : 'max', name : '最大值'},
                            {type : 'min', name : '最小值'}
                        ]
                    },
                }
            ]
        };