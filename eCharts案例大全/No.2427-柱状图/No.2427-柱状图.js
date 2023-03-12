const realVal = 0.56
  // 状态的分区
  const splitCopies = [0, 0.2, 0.4, 0.6, 0.8, 1]
  // 状态的名称
  const splitTextArr = ['壹', '贰', '叁', '肆', '伍']
  // 最终拿到的数据对应的状态
  let realText = ''
  for (let i = 0; i < splitCopies.length; i++) {
    if (realVal === splitCopies[0]) {
      realText = splitTextArr[0]
      break;
    } else {
      if ((realVal > splitCopies[i]) && (realVal <= splitCopies[i + 1])) {
        realText = splitTextArr[i]
        break;
      }
    }
  }

option = {
    grid: {
      top: 50
    },
    title: {
      text: '柱状图',
      top: 50,
      right: 40,
      textStyle: {
        color: '#666',
        fontSize: 36,
        fontWeight: 400
      }
    },
    series: [{
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 1,
      center: ['50%', '75%'],
      splitNumber: 8,
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 12,
          color: [[1, '#f5f5f5']]
        }
      },
      itemStyle: {
        color: '#d0021b',
        shadowColor: 'rgba(208,2,27,0.5)',
        shadowBlur: 6,
        shadowOffsetX: 0,
        shadowOffsetY: 3
      },
      pointer: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      progress: {
        show: true,
        roundCap: true,
        width: 12
      },
      axisLabel: {
        color: '#999',
        fontSize: 18,
        distance: -60,
        formatter: function(value) {
          if (value === 1) {
            return realText === '壹' ? '{c|壹}' : '壹'
          } else if (value === 0.75) {
            return realText === '贰' ? '{c|贰}' : '贰'
          } else if (value === 0.5) {
            return realText === '叁' ? '{c|叁}' : '叁'
          } else if (value === 0.25) {
            return realText === '肆' ? '{c|肆}' : '肆'
          } else if (value === 0) {
            return realText === '伍' ? '{c|伍}' : '伍'
          }
        },
        rich: {
          c: {
            color: '#d0021b',
            fontSize: 24,
          }
        }
      },
      title: {
        offsetCenter: [0, 0],
        fontSize: 36,
        color: '#333',
        fontWeight: 600
      },
      detail: {
        fontSize: 72,
        offsetCenter: [0, -50],
        valueAnimation: true,
        color: '#d0021b'
      },
      data: [{
        value: realVal,
        name: '展示的名称'
      }]
    }]
  }
