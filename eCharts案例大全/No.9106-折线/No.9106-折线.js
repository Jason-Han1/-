option = {
    backgroundColor:"#fff",
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        color: ["#F58080", "#47D8BE", "#F9A589","#F29362"],
        data: ['实时水质数据', '日水质合格率', '总合格率',"今日报警数量"],
        left: 'center',
        textStyle:{
            color:"#333"
        }
       
    },
    grid: {
       // top: 'middle',
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:"10%",
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['1日','2日','3日','4日','5日','6日','7日'],
        axisLine: {
            lineStyle: {
                color: "#27C2BC"
            }
        },
        
        axisLabel: {
            show: true,
            textStyle: {
                color: "#333" ,//X轴文字颜色
                fontSize:18
            }
        },
    },
    yAxis: [{
        type: 'value',
       name:'m³',
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#27C2BC'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#27C2BC"
            },
        },
        
        
        axisLabel: {
            show: true,
            textStyle: {
                color: "#333" ,//X轴文字颜色
                fontSize:18
            }
        },
        nameTextStyle: {
            color: "#999"
        },
        splitArea: {
            show: false
        },
         
    },
        {
        name:'同比',
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#27C2BC',
            }
        },
        axisLabel:{
            formatter:'{value} ',
        }
    }
    ],
    series: [{
            name: '实时水质数据',
            type: 'line',
            data: [185,185,190,230,250,360,425],
            color: "#F58080",
            lineStyle: {
                normal: {
                    width: 5,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#FFCAD4' // 0% 处的颜色
                        }, {
                            offset: 0.4,
                            color: '#F58080' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: '#F58080' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(245,128,128, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 7
                }
            },
            itemStyle: {
                normal: {
                    color: '#F58080',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#F58080"
                }
            },
            smooth: true
        },
        {
            name: '日水质合格率',
            type: 'line',
            data: [480,350,460,590,485,550,580],
            lineStyle: {
                normal: {
                    width: 5,
                    color: {
                        type: 'linear',

                        colorStops: [{
                                offset: 0,
                                color: '#AAF487' // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#47D8BE' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#47D8BE' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(71,216,190, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 7
                }
            },
            itemStyle: {
                normal: {
                    color: '#AAF487',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#AAF487"
                }
            },
            smooth: true
        },
        {
            name: '总合格率',
            type: 'line',
            data: [770,750,880,910,865,789,930],
            lineStyle: {
                normal: {
                    width: 5,
                    color: {
                        type: 'linear',

                        colorStops: [{
                                offset: 0,
                                color: '#7ED1FA' // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#316FD8' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#3FA7DC' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(249,165,137, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 7
                }
            },
            itemStyle: {
                normal: {
                    color: '#4083DF',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#76BFFA"
                }
            },
            smooth: true
        },
        {
            name: '今日报警数量',
            type: 'line',
            data: [630,650,600,760,740,786,890],
            lineStyle: {
                normal: {
                    width: 5,
                    color: {
                        type: 'linear',

                        colorStops: [{
                                offset: 0,
                                color: '#F7B26F' // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#F7AD27' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#F2A243' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(249,165,137, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 7
                }
            },
            itemStyle: {
                normal: {
                    color: '#F6D06F',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#F6D06F"
                }
            },
            smooth: true
        }
    ]
};