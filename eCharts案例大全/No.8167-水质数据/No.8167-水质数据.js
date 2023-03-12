option = {
  backgroundColor:'#fff',
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    grid: {
       // top: 'middle',
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'10%',
        containLabel: true
    },
    legend: {
        data:['实时水质数据','今日报警数量','日水质合格率','总合格率'],
       textStyle:{
          color:"#333",
          fontSize:14
          }
      
    },
    xAxis : [
        {
            type : 'category',
            data : ['1日','2日','3日','4日','5日','6日','7日'],
          axisLabel: {
              show: true,
              textStyle: {
                  color: "#333", //X轴文字颜色
                  fontSize:16
              }
          },
          axisLine: {
                    lineStyle: {
                        color: '#01FCE3'
                        }
                },
        }
    ],
    yAxis : [
        {
            type : 'value',
            name : '',
            axisLabel : {
                formatter: '{value} ',
               textStyle: {
                color: "#333" ,//X轴文字颜色
                 fontSize:16
               }
            },
          axisLine: {
                    lineStyle: {
                        color: '#01FCE3'
                        }
                },
        },
        {
            type : 'value',
            name : '百分比',
            axisLabel : {
                formatter: '{value} %',
               textStyle: {
                color: "#333" //X轴文字颜色
               }
            },
             axisLine: {
                    lineStyle: {
                        color: '#01FCE3'
                        }
                },
        }
    ],
    series : [

        {
            name:'实时水质数据',
            type:'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#00FFE3"
                        },
                        {
                            offset: 1,
                            color: "#4693EC"
                        }
                    ])
                }
            },
            data:[20, 49, 70, 58, 58, 76.7, 135.6, ]
        },
        {
            name:'今日报警数量',
            type:'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#03FA90"
                        },
                        {
                            offset: 1,
                            color: "#059055"
                        }
                    ])
                }
            },
            data:[26, 59, 90, 60, 66, 80.7, 145.6,]
        },
        {
            name:'日水质合格率',
            type:'line',
            yAxisIndex: 1,
            data:[50.0, 50.2, 60.3, 80.5, 90.3, 96.2,98.5],
             lineStyle: {
                normal: {
                    width: 5,
                    color: {
                        type: 'linear',

                        colorStops: [{
                                offset: 0,
                                color: '#04F9E4' // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#0DA5C9' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#125DDE' // 100% 处的颜色
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
                    borderColor: "#04F9E4"
                }
            },
            smooth: true,
        },
        
        {
            name:'总合格率',
            type:'line',
            yAxisIndex: 1,
            data:[35.0, 46.2, 55.3, 68.5, 54.3, 78.2, 89.3,],
             lineStyle: {
                normal: {
                    width: 5,
                    color: {
                        type: 'linear',

                        colorStops: [{
                                offset: 0,
                                color: '#F9D74D' // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#EFB94A' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#FFA700' // 100% 处的颜色
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
                    color: '#F7AD3E',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#F7AD3E"
                }
            },
            smooth: true,
        }
    ]
};
                    