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
      height: 60,
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
      top: '21%',
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
      data: ['2014', '2015', '2016', '2017', '2018', '2019'
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
        padding: 0,
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
        data: [440, 320, 450, 250, 470, 550],
        itemStyle: {
          color: '#ef1e5f',
          borderColor: 0,
          borderWidth: 0,
          borderType: 'solid',
          shadowColor: '#ef1e5f',
          shadowBlur: 5
        },
        lineStyle: {
          color: '#ef1e5f',
          width: 2,
        },

      },
      {
        name: '煤炭加工2',
        showSymbol: false,

        type: 'line',
        data: [310, 420, 330, 210, 445, 530],
        itemStyle: {
          color: '#ffd200',
          borderColor: 0,
          borderWidth: 0,
          borderType: 'solid',
          shadowColor: '#ffd200',
          shadowBlur: 5
        },
        lineStyle: {
          color: '#ffd200',
          width: 2,

        }
      },
      {
        name: '煤炭加工3',
        showSymbol: false,

        type: 'line',
        data: [210, 370, 280, 380, 330, 155],
        itemStyle: {
          color: '#01c8e9',
          borderColor: 0,
          borderWidth: 0,
          borderType: 'solid',
          shadowColor: '#01c8e9',
          shadowBlur: 5
        },
        lineStyle: {
          color: '#01c8e9',
          width: 2,

        }
      },
      {
        name: '煤炭加工4',
        type: 'line',
        showSymbol: false,

        data: [170, 120, 300, 280, 520, 330],
        itemStyle: {
          color: '#00fd9b',
          borderColor: 0,
          borderWidth: 0,
          borderType: 'solid',
          shadowColor: '#00fd9b',
          shadowBlur: 5
        },
        lineStyle: {
          color: '#00fd9b',
          width: 2,

        }
      }
    ]
};
