option = {
        backgroundColor: '#0c1e55',

   color: ['#ef1e5f', '#f26315', '#ffd200', '#00fd9b', '#fff333', '#2566ff', '#842af0'],

    tooltip: {
      trigger: 'axis'
    },
    legend: {
      // icon:'rect',
      // itemWidth: 5,
      itemHeight: 8,

      shadowColor: 'rgba(0, 0, 0, 0.5)',
      shadowBlur: 10,
        height:60,
        width: '100%',
      data: ['煤炭加工1', '煤炭加工2', '煤炭加工3', '煤炭加工4'],
      textStyle: {
        color: '#7cb4d8',
        padding: 10,
        fontSize: 14,
      }
    },
    grid: {
      left: '4%',
      right: '3%',
      bottom: '11%',
      top:'21%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#19347b'

        }
      },
      data: ['2014.01', '2014.02', '2014.03', '2014.04', '2014.05', '2014.06'
        //   , {
        //     value: '',
        //     textStyle: {
        //       align: 'left'
        //     }
        //   }
      ],
      axisLabel: {
        color: '#7cb4d8',
        margin: 0,
        padding:0,
        textStyle: {
          fontSize: 14
        }
      },
      axisPointer: {
        show: true
      },

      axisTick: {
        show: false
      },
      position: 'bottom',
      offset: 20,
      splitLine: {
        show: true,
        lineStyle: {
          color: '#102459'
        }
      }
    }],
    yAxis: [{
      type: 'value',
      name: '',
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#19347b'

        }
      },
      axisLabel: {
        margin: 20,
        textStyle: {
          fontSize: 14,
          color: '#7cb4d8'

        }
      },

      splitLine: {
        show: true,
        lineStyle: {
          color: '#102459'
        }
      }
    }],
    // '#ef1e5f', '#f26315', '#01c8e9', '#00fd9b',
    series: [
      {
        name: '煤炭加工1',
        showSymbol: false,
        type: 'line',
        data: [20, 40, 21, 33, 51, 32],
        itemStyle: {
          color: '#ef1e5f',
          borderType: 'solid',
          shadowColor: '#ef1e5f',
          shadowBlur: 5
        },
        lineStyle: {
          color: '#ef1e5f',
          width: 2,
                              shadowColor: 'rgba(13,25,70, 0.7)',
                    shadowBlur: 5,
                    shadowOffsetY: 40,
                     borderWidth: 5,
        },
                    smooth: true


      }
]
};
