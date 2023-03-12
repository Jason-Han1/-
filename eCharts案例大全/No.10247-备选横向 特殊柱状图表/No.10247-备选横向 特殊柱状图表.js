option = {
    grid: [{
      height: 400,
      width: 500,
      left: 78,
      top: 78
    },{
        height: 420,
        width: 520,
        left: 78,
        top: 58
    }],
    xAxis: [{
        max: 500,
        splitNumber: 8,
        splitLine: {
            show: false
        },
        axisTick: {
            inside: true,
            lineStyle: {
                color: '#10899A'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#10899A'
            }
        },
        axisLabel: {
            color: '#06D3CD',
            fontSize: 14,
            fontWeight: 300,
            fontFamily: 'PingFangSC'
        }
    },{
        show: true,
        position: 'bottom',
        gridIndex: 1,
        axisLine: {
            lineStyle: {
                color: '#10899A'
            }
        }
    }],
    yAxis: [{
        name: '年/月',
        data: ['2019/01', '2019/02', '2019/03', '2019/04', '2019/05', '2019/06', '2019/07', '2019/08', '2019/09', '2019/10', '2019/11', '2019/12'],
        nameTextStyle: {
          color: '#06D3CD',
          fontSize: 14,
          fontWeight: 300,
          fontFamily: 'PingFangSC',
          padding: [0, 0, 8, 0]
        },
        splitLine: {
            show: false
        },
        axisLine: {
          lineStyle: {
              color: '#10899A'
          }  
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#10899A'
            }
        },
        axisLabel: {
            show: true,
            formatter: (params)=>{
                return '{marginTop| '+params+'}'
            },
            rich: {
                marginTop: {
                    padding: [0, 0, -30, 0], // 这里需要用负值 去往上调整 否则会不显示
                    fontSize: 14,
                    color: '#06D3CD',
                    fontWeight: 300,
                    fontFamily: 'PingFangSC'
                }
            }
        },
       },{
        gridIndex: 1,
        axisLine: {
          lineStyle: {
              color: '#10899A'
          }  
        },
        axisTick: {
            show: false  
        },
        axisLabel: {
          show: false  
        },
    }],
    series: [{
        type: 'pictorialBar',
        symbol: 'circle',
        symbolSize: 12,
        symbolRepeat: true,
        itemStyle: {
            color: 'orange'
        },
        data:[{
            name: '',
            value: 20,
            symbolSize: 18,
            itemStyle: {
                color: 'skyblue'
            }
        }, 182, 191, 234, 290, 330, 310]
    }]
};