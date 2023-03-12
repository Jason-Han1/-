option = {
  backgroundColor:'#01004C',
    title : {
  
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['黄冈调压站','裕兴调压站','济西调压站','无影山调压站',],
      textStyle:{
        color:'#fff'
      }
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['0:00','4:00','8:00','12:00','16:00','20:00'],
        axisLabel: {
            show: true,
            textStyle: {
                color: "#ebf8ac", //X轴文字颜色
                fontSize:16
            }
        },
          
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} ',
                color:'#ccc',
                 textStyle: {
                   fontSize:16
                }
            },
           axisLine: {
            show: true,
            lineStyle: {
                color: "#ccc"
            },
        },
               
           
        }
    ],
    series : [
        {
            name:'黄冈调压站',
            type:'line',
            data:[0.22, 0.23, 0.36, 0.30, 0.29, 0.35, 0.2],
             lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',
    
                        colorStops: [{
                            offset: 0,
                            color: '#62B7F7' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#0092f6' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
                 itemStyle: {
			          normal: {
                    color: '#0092f6',
                    borderWidth: 10,
                    borderColor: "#0092f6"
                }
             },
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'裕兴调压站',
            type:'line',
            data:[0, -0.1, 0.08, 0.06, 0.11, 0.07, 0],
             lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',
    
                        colorStops: [{
                            offset: 0,
                            color: '#F7715D' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#E3463B' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
                 itemStyle: {
			          normal: {
                    color: '#E3463B',
                    borderWidth: 10,
                    borderColor: "#ED8371"
                }
             },
            markPoint : {
                data : [
                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                ],
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        },
       {
            name:'济西调压站',
            type:'line',
            data:[0.08, 0, 0.15, 0.14, 0.16, 0.13, 0],
            lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',
    
                        colorStops: [{
                            offset: 0,
                            color: '#D1DB40' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#CED627' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
                 itemStyle: {
			          normal: {
                    color: '#CED627',
                    borderWidth: 10,
                    borderColor: "#EDFA67"
                }
             },
            markPoint : {
                data : [
                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        },
       {
            name:'无影山调压站',
            type:'line',
            lineStyle: {
            normal: {
                width: 8,
                color: {
                    type: 'linear',

                    colorStops: [{
                        offset: 0,
                        color: '#A9F387' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#48D8BF' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(72,216,191, 0.3)',
                shadowBlur: 6,
                shadowOffsetY: 10
            }
        },
            data:[0.12, 0.13, 0.22, 0.17, 0.2, 0.23, 0],
            itemStyle: {
    			       normal: {
                    color: '#48D8BF',
                    borderWidth: 10,
                    borderColor: "#A9F387"
                }
             },
             //smooth: true,
            markPoint : {
                data : [
                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};
                    