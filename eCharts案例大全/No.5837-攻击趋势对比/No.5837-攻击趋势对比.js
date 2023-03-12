option = {
  backgroundColor:'#fff',
    title : {
        text: '未来一周气温变化',
        textStyle:{
            color:"#ccc"
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
      data:['攻击次数','对比次数'],
      textStyle:{
        color:"#fff"
      }
    },
    grid: {
        top: 'middle',
        left: '3%',
        right: '4%',
        bottom: '3%',
        height: '80%',
        containLabel: true
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
            data : ['5月10号','5月11日','5月12日','5月13日','5月14日','5月15日','5月16日'],
          axisTick: {
            show: true //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#ebf8ac" //X轴文字颜色
            }
        },
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:"℃'",
            nameTextStyle: {
                color: "#ebf8ac"
               },           
               axisLabel : {
                formatter: '{value}℃'
            },
           axisLabel: {
                show: true,
                textStyle: {
                    color: "#ebf8ac"
                }
            },
            splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#DDD'
            }
        },
        }
    ],
    series : [
        {
            name:'攻击次数',
            type:'line',
            min:10,
            max:40,
            data:[32, 34, 39, 35, 38, 36, 34],
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
                    borderColor: "#AAF487"
                }
            },
            smooth: true,
        },
        {
            name:'对比次数',
            type:'line',
             min:10,
            max:40,
            data:[25, 22, 26, 28, 27, 26, 23],
            lineStyle: {
                normal: {
                    width: 5,
                    color: {
                        type: 'linear',

                        colorStops: [{
                                offset: 0,
                                color: '#F6D06F' // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#F9A589' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#F9A589' // 100% 处的颜色
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
             smooth: true,
        }
    ]
};
                    