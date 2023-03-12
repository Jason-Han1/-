option = {
    backgroundColor: '#000',
    legend: {
      data: [{
          name: '订单数量',
          icon: 'circle'
      }],
      textStyle: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'PingFangSC',
            fontWeight: 300
      }
    },
    grid: [
        {
            height: 378,
            top: 78,
            width: 478
        },
        {
            height: 378,
            width: 500,
            top: 65
        }
    ],
    xAxis: [
        {
            max: 500,
            splitNumber: 8,
            axisLine: {
                lineStyle: {
                    color: '#10899A'
                }
            },
            axisTick: {
                show: true,
                inside: true,
                lineStyle: {
                    color: '#10899A',
                    fontSize: 14,
                    fontFamily: 'PingFangSC',
                    fontWeight: 300
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                formatter: (params)=>{
                    return '{marginTop|'+params+'}';
                },
                rich: {
                    marginTop: {
                        padding: [0, 0, 0, 0],
                        color: '#06D3CD',
                        fontSize: 14,
                        fontFamily: 'PingFangSC',
                        fontWeight: 300
                        
                    }
                }
            },
        },
        {
            gridIndex: 1,
            show: true,
            offset: 13,
            axisLine: {
                lineStyle: {
                    color: '#10899A'
                }
            }
        }
    ],
    yAxis: [{
        name: '年/月',
        data: ['2019/01', '2019/02', '2019/03', '2019/04', '2019/05', '2019/06', '2019/07', '2019/08', '2019/09', '2019/10', '2019/11', '2019/12'],
        axisLabel: {
            show: false
        },
        nameTextStyle: {
            color: '#06D3CD',
            fontSize: 14,
            fontFamily: 'PingFangSC',
            fontWeight: 300,
            padding: [0, 0, 8, 0]
        },
        axisLine: {
            lineStyle: {
                color: '#10899A'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#10899A',
                fontSize: 14,
                fontFamily: 'PingFangSC',
                fontWeight: 300
            }
        }
        
    },{
        gridIndex: 1,
        data: ['2019/01', '2019/02', '2019/03', '2019/04', '2019/05', '2019/06', '2019/07', '2019/08', '2019/09', '2019/10', '2019/11', '2019/12'],
        position: 'left',
        nameTextStyle: {
            color: '#06D3CD',
            padding: [0, 0, 0,8],
            fontSize: 14,
            fontFamily: 'PingFangSC',
            fontWeight: 300
        },
        axisLabel: {
            formatter: (params)=>{
                return '{marginTop|'+params+'}';
            },
            rich: {
                marginTop: {
                    padding: [0, 0, 0, 0],
                    color: '#06D3CD',
                    fontSize: 14,
                    fontFamily: 'PingFangSC',
                    fontWeight: 300
                    
                }
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#10899A'
            }
        },
        splitLine: {
            show: false,
        }
    }],
    series: [{
        name: '订单数量',
        type: 'bar',
        itemStyle: {
            barBorderRadius: 10,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgba(0,222,215,0.2)'
                },
                {
                    offset: 1,
                    color: '#FFFC00'
                }
            ])
        },
        barWidth: 10,
        data: [482, 378, 446, 518, 238, 358, 312, 378, 220, 452, 302, 372]
    }]
};