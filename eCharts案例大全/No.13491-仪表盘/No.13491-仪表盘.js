let inputValue = ~~(Math.random() * 100)

option = {
  backgroundColor: '#fff',
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%"
  },
  toolbox: {
    feature: {
      restore: {},
      saveAsImage: {}
    }
  },
  series: [
    {
      startAngle: 200,
      endAngle: -20,
      type: 'gauge',
      radius: '80%',
      min: 0,
      max: 100,
      splitNumber: 10,
      axisLine: {
        lineStyle: {
          color: [
            [1, '#3E789F']
          ],
          width: 2
        }
      },
      axisTick: {
        show: false
      },
      detail: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      }
    },
    {
      name: '',
      type: 'gauge',
      startAngle: 200,
      endAngle: -20,
      detail: {formatter: '{value}'},
      data: [{value: inputValue, name: ''}],
      axisLine: {
        lineStyle: {
          color: [[0.25, '#439B26'], [0.5, '#1196C6'], [0.75, '#E48439'], [1, '#D62F66']]
        }
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      detail: {
        offsetCenter: [0, 30],
        color: '#000'
      }
    },
    {
      startAngle: 200,
      endAngle: -20,
      type: 'gauge',
      radius: '63%',
      min: 0,
      max: 100,
      splitNumber: 10,
      axisLine: {
        lineStyle: {
          color: [
            [1, '#3E789F']
          ],
          width: 2
        }
      },
      axisTick: {
        show: true,
        length: 16,
        lineStyle: {
          color: '#3E789F'
        }
      },
      detail: {
        show: false
      },
      splitLine: {
        show: true,
        length: 20,
        lineStyle: {
          color: '#3E789F'
        }
      },
      axisLabel: {
        show: true,
        color: '#000',
        fontSize: 24
      }
    }
  ]
}
