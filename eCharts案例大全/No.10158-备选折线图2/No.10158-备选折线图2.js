option = {
    backgroundColor: '#333',
    legend: {
        data: ['网点数'],
        textStyle: {
            color: '#ffffff',
            fontSize: 14,
            fontFamily: 'PingFangSC',
            fontWeight: 300
        }
            
    },
    grid: {
        width: 504,
        height: 340
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['', '2019/01', '2019/02', '2019/03', '2019/04', '2019/05', '2019/06', '2019/07', '2019/08', '2019/09', '2019/10', '2019/11', '2019/12'],
        interval: 0,
        axisTick: {
          inside: true,
          lineStyle: {
              color: '#10899A'
          }
        },
        axisLine: {
          lineStyle: {
              color: '#06D3CD'
          }  
        },
        axisLabel: {
            rotate: 28,
            color: '#06D3CD',
            fontFamily: 'PingFangSC',
            fontSize: 14,
            fontWeight: 300
        }
    },
    yAxis: {
        type: 'value',
        name: '个',
        max: 370,
        splitNumber: 6,
        splitLine: {
            show: false
        },
        axisLine: {
          lineStyle: {
              color: '#06D3CD'
          }  
        },
        axisTick: {
          lineStyle: {
              color: '#10899A'
          },
        },
        axisLabel: {
            showMaxLabel: false,
            color: '#06D3CD',
            fontFamily: 'PingFangSC',
            fontSize: 14,
            fontWeight: 300
        }
    },
    series: [{
        name: '网点数',
        data: [0, 186, 261, 191, 249, 201, 262, 210, 361, 218, 302, 252, 46],
        type: 'line',
        smooth: 0.4,
        symbolSize: 6,
        lineStyle: {
          color: 'transparent'  
        },
        itemStyle: {
            borderWidth: 1,
            borderColor: '#FF5624'
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FF5624'
                  },
                  {
                    offset: 1,
                    color: 'rgba(8,228,222,0.3)'
                  }
                ])
            }
        }
    }]
};
