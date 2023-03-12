  option = {
    backgroundColor: '',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    color: ['#22b8ed', '#ffd54f', '#fb8f8e'],
    legend: {
      data: ['全部', '客车', '专用车'],
      align: 'right',
      x: 'center', // 'center' | 'left' | {number},
      y: 'bottom', // 'center' | 'bottom' | {number}
      //   right: 320,
      //   top: 380,
      textStyle: {
        color: '#000'
      },
      itemWidth: 15,
      itemHeight: 10,
      itemGap: 35
    },
    grid: {
      left: '1%',
      right: '8%',
      bottom: '8%',
      backgroundColor: '#333',
      containLabel: true
    },
    yAxis: [{
      type: 'category',
      triggerEvent: true,
      axisTick: {
        alignWithLabel: true // 坐标值是否在刻度中间
      },
      data: ['第一批', '第二批', '第三批', '第四批', '第五批', '第六批', '第七批', '第八批', '第九批', '第十批', '第十一批', '第十二批']
    }],
    xAxis: [{
      type: 'value',
      name: '上榜车辆',
      axisLabel: {
        formatter: '{value}'
      }
    }],
    series: [{
      name: '全部',
      type: 'bar',
      data: [2031, 1793, 3640, 2593, 4377, 3201, 2275, 3289, 3356, 2859, 4244, 3945],
      barGap: '5%', // 柱图间距
      itemStyle: {
        normal: {
          barBorderRadius: [0, 3, 3, 0]
        }
      },
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      }
    }, {
      name: '客车',
      type: 'bar',
      data: [1043, 1456, 1900, 1200, 2100, 1870, 980, 1569, 1130, 1490, 2300, 2210],
      barGap: '5%', // 柱图间距
      itemStyle: {
        normal: {
          barBorderRadius: [0, 3, 3, 0]
          // color: '#000'
        }
      },
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      }
    }, {
      name: '专用车',
      type: 'bar',
      data: [787, 571, 999, 341, 231, 812, 735, 231, 322, 712, 1230, 870],
      barGap: '5%', // 柱图间距
      itemStyle: {
        normal: {
          barBorderRadius: [0, 3, 3, 0]
        }
      },
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      }
    }]
  };
  myChart.setOption(option);
  myChart.on('click', function(params) {
    console.log('clickclickclickclick111', params);
  });