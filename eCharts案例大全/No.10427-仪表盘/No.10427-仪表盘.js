option = {
    tooltip: {},
    toolbox: {
      show: false,
    },
    series: [
      {
        name: '一级槽位',
        type: 'gauge',
        min: 0,
        max: 100,
        splitNumber: 5,
        center: ['70%', '50%'],
        radius: '80%',

        title: {
          fontWeight: 'bolder',
          fontSize: 16,
          color: 'rgba(0,0,0,0.85)',
          offsetCenter: [0, '70%'],
        },
        itemStyle: {
          normal: {
            color: '#595959',
          },
        },
        axisLine: {
          lineStyle: {
            color: [
              [0.2, '#19CDAB'],
              [0.4, '#22A8E9'],
              [0.6, '#2E78E7'],
              [0.8, '#624AE3'],
              [1, '#F95986'],
            ],
            width: 15,
          },
        },
        axisTick: {
          length: 8,
        },
        splitLine: {
          length: 15,
        },
        pointer: {
          length: 70,
          width: 7,
        },
        detail: {
          fontSize: 36,
          color: 'rgba(0,0,0,0.85)',
          formatter: '{value}%',
          offsetCenter: [0, '50%'],
        },
        data: [
          {
            value: 40,
            name: '一级槽位',
          },
        ],
      },
      {
        name: '二级槽位',
        type: 'gauge',
        center: ['20%', '60%'],
        radius: '53%',
        min: 0,
        max: 100,
        splitNumber: 5,
        title: {
          fontWeight: 'bolder',
          fontSize: 14,
          color: 'rgba(0,0,0,0.85)',
          offsetCenter: [0, '70%'],
        },
        axisLine: {
          lineStyle: {
            color: [
              [0.2, '#19CDAB'],
              [0.4, '#22A8E9'],
              [0.6, '#2E78E7'],
              [0.8, '#624AE3'],
              [1, '#F95986'],
            ],
            width: 10,
          },
        },
        axisTick: {
          length: 4,
        },
        splitLine: {
          length: 10,
        },
        itemStyle: {
          normal: {
            color: '#595959',
          },
        },
        pointer: {
          length: 40,
          width: 4,
        },
        detail: {
          fontSize: 24,
          color: 'rgba(0,0,0,0.85)',
          formatter: '{value}%',
          offsetCenter: [0, '45%'],
        },
        data: [
          {
            value: 12,
            name: '二级槽位',
          },
        ],
      },
    ],
  };