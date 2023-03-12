option = {
    backgroundColor: '#010e22',
    grid: {
      left: '8%',
      right:'4%',
      top: '10%',
      bottom: '22%',
    },
    xAxis: {
      data:  [
        '数控装置1#',
        '数控装置2#',
        '数控装置3#',
        '数控装置4#',
        '数控装置5#',
        '数控装置6#',
        '数控装置7#',
        '数控装置8#',
        '数控装置9#',
      ],
      axisLabel: {
        interval: 0,
        rotate: 30,
        color: '#ffffff',
        fontSize: 16,
      },
      axisLine: {
        lineStyle: {
          color: '#ffffff'
        }
      }           
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      data: [0, 20, 40, 60, 80, 100],
      axisLabel: {
        color: '#ffffff',
        fontSize: 16,
      }         
    },
    series: [
      {
        type: 'bar',
        data: [92, 82, 81, 70, 60, 56, 55, 50, 40],
        barWidth: 20,
        itemStyle: {
          color: '#59ebe8'
        }
      },
    ],
  }
