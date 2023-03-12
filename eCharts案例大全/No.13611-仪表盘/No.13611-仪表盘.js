option = {
    tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} %'
        },
    series: [
      {
        name: '仪表盘',
        type: 'gauge',
        data: [{value: '29', name: '数据总量'}],
        radius: '80%',
        center: ['50%', '50%'],
        min: 0,
        max: 100,
        splitNumber: 5,
        axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
                width: 10,
                color: [[0.2, '#62c87f'], [0.8, '#5d9cec'], [1, '#f15755']]
            }
        },
        axisTick: {            // 坐标轴小标记
            length: 13,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto'
            }
        },
        splitLine: {           // 分隔线
            length: 18,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
            }
        },
        axisLabel: {
            color: '#666',
        },
        detail: {
          formatter:'{value}%',
          fontSize: 24,
          offsetCenter: [0, '85%']
        },
        title: {
          fontSize: 12,
          color: '#999',
          offsetCenter: [0, '55%']
        },
        pointer: {
            width: 3            // 指针大小
        }
      }
    ]
};