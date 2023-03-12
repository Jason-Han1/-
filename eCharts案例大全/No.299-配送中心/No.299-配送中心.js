option = {
  title: {
    text: '配送中心',
    subtext: 'Data from: Yuzi 2021'
  },
  grid: {
    left: '3%',
    right: '7%',
    bottom: '7%',
    containLabel: true
  },
  tooltip: {
    // trigger: 'axis',
    showDelay: 0,
    formatter: function (params) {
      if (params.value.length > 1) {
        return (
          params.seriesName +
          ' :<br/>' +
          params.value[0] +
          '万 ' +
          params.value[1] +
          '万 '
        );
      } else {
        return (
          params.seriesName +
          ' :<br/>' +
          params.name +
          ' : ' +
          params.value +
          '万 '
        );
      }
    },
    axisPointer: {
      show: true,
      type: 'cross',
      lineStyle: {
        type: 'dashed',
        width: 1
      }
    }
  },
  toolbox: {
    feature: {
      dataZoom: {},
      brush: {
        type: ['rect', 'polygon', 'clear']
      }
    }
  },
  brush: {},
  legend: {
    data: ['Female', 'Male'],
    left: 'center',
    bottom: 10
  },
  xAxis: [
    {
      type: 'value',
      scale: true,
      axisLabel: {
        formatter: '{value} 万'
      },
      splitLine: {
        show: true
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#f00',
          width: 1,
          join: 'round'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          type: 'dotted',
          color: '#000',
          width: 1,
          cap: 'square'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      scale: true,
      axisLabel: {
        formatter: '{value} 万'
      },
      splitLine: {
        show: true
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#f00',
          width: 1,
          join: 'round'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          type: 'dotted',
          color: '#000',
          width: 1,
          cap: 'square'
        }
      }
    }
  ],
  series: [
    {
      name: 'Female',
      type: 'scatter',
      emphasis: {
        focus: 'series'
      },
      label: {
        normal: {
          show: true,
          position: 'top',
          textStyle: {
            color: '#000',
            fontSize: 12
          },
          formatter: function(params) {
            return params.value[2]
          }
        }
      },
      // prettier-ignore
      data: [
        [60, 15, '中山配送中心'],
        [-167.5, 59.0, '深圳配送中心'],
        [100.5, 49.2, '北京配送中心'],
        [50.0, -10.0, '武汉配送中心'],
        [155.8, 53.6, '佛山配送中心'],
        [100.0, 159.0, '白云分公司'],
        [159.1, -20.6, '上海食材配送中心'],
        [-166.0, -69.8, '黄埔配送中心'],
        [160.2, -175.2, '番禺配送中心']
      ]
    }
  ]
};