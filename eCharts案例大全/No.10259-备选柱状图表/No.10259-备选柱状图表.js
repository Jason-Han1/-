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
    grid: [{
      height: 310,
      width: 498
    },{
        height: 310,
        width: 520
    }],
    xAxis: [{
        name: '年/月',
        data: ['2019/01', '2019/02', '2019/03', '2019/04', '2019/05', '2019/06', '2019/07', '2019/08', '2019/09', '2019/10', '2019/11', '2019/12'],
        nameTextStyle: {
            color: '#06D3CD',
            padding: [0, 0, 0,8],
            fontSize: 14,
            fontFamily: 'PingFangSC',
            fontWeight: 300
        },
        axisLabel: {
            rotate: 36,
            formatter: (params)=>{
                return '{marginLeft|'+params+'}';
            },
            rich: {
                marginLeft: {
                    padding: [0, -20, 32, 0],
                    color: '#06D3CD',
                    fontSize: 14,
                    fontFamily: 'PingFangSC',
                    fontWeight: 300
                    
                }
            }
        },
        axisTick: {
            inside: true,
            lineStyle: {
                color: '#10899A',
                fontSize: 14,
                fontFamily: 'PingFangSC',
                fontWeight: 300
            }
        },
        axisLine: {
            lineStyle: {
                color: '#10899A'
            }
        },
        splitLine: {
            show: false
        }
        
        
    }, {
        show: true,
        data: [],
        position: 'bottom',
        gridIndex: 1,
        axisLine: {
            lineStyle: {
                color: '#10899A'
            }
        },
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        max: 250,
        axisLabel: {
            color: '#06D3CD',
            fontSize: 14,
            fontFamily: 'PingFangSC',
            fontWeight: 300
        },
        axisTick: {
            lineStyle: {
                color: '#10899A'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#10899A'
            }
        },
        splitLine: {
            show: false
        }
    },{
        show: false,
        gridIndex: 1
    }],
    series: [{
        name: '订单数量',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            barBorderRadius: 10,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#DE5127"
                },
                {
                    offset: 1,
                    color: "#00DED7"
                }
            ])
        },
        data:[232, 158, 202, 112, 152, 258, 192, 268, 150, 252, 168, 212]
    }]
};