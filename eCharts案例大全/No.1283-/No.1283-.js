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
        trigger: 'axis'
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
        data: ['已采纳', '已发布']
    },
    xAxis: [{
        type: 'category',
        boundaryGap: 1,
         axisLine: {
        show: false
      },
      axisLabel: {
        color: '#646464'
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
            name: '',
            min: 0,
            max: 1000,
           splitLine: {
        show: true,
        lineStyle: {
          color: '#EEEFEF',
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
          color: '#646464'

        }
      },
      axisTick: {
        show: false
      }
        },

    ],
    series: [{
            name: '已采纳',
            type: 'line',
            stack: '总量',
            symbolSize: 6,
            itemStyle: {
                normal: {
                    color:'#F66119',
                    lineStyle: {
                        color: "#F66119",
                        width: 1
                    },
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
        },
        {
            name: '已发布',
            type: 'line',
            stack: '总量',
            symbolSize: 6,
            itemStyle: {
                normal: {
                    color: '#20B2CA',
                    lineStyle: {
                        color: "#20B2CA",
                        width: 1
                    },
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410]
        },

    ]
};