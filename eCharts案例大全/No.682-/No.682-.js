var fontColor = '#30eee9';
option = {
    backgroundColor: '#fff',
    grid: {
        left: '5%',
        right: '10%',
        top: '20%',
        bottom: '15%',
        containLabel: true
    },
    tooltip: {
        show: true,
        trigger: 'axis',
    },
    legend: {
        show: true,
        x: '75%',
        y: '35',
        icon: 'stack',
        itemWidth: 15,
        itemHeight: 10,
        textStyle: {
            color: '#646464'
        },
        data: ['昨日', '今日']
    },
    xAxis: [{
        type: 'category',
        boundaryGap: 1,
         axisLine: {
        show: false
      },
      axisLabel: {
        color: '#A1A7B3'
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
            type: 'value',
            name: '次数',
            padding:5,
            // max: 1000,
           splitLine: {
        show: true,
        lineStyle: {
          color: '#A1A7B3',
          type: 'dashed'
        }
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        margin: 10,
        textStyle: {
          color: '#A1A7B3'

        }
      },
      axisTick: {
        show: false
      }
        },

    ],
    series: [{
            name: '昨日',
            type: 'line',
            smooth:true,
            stack: '总量',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color:'#4293FD',
                    lineStyle: {
                        color: "#4293FD",
                        width: 2
                    },
                }
            },
             areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(19, 95, 172, 1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(112, 154, 195, 0.4)'
                        }
                    ], false),
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
        },
        {
            name: '今日',
            type: 'line',
            smooth:true,
            stack: '总量',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#23D0C4',
                    lineStyle: {
                        color: "#23D0C4",
                        width: 2
                    },
                }
            },
             areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(50, 216, 205, 1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(35, 208, 196, 0.4)'
                        }
                    ], false),
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410]
        },

    ]
};