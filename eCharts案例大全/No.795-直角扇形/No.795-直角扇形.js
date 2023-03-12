let roseData = [
    { value: 40, name: '烟火' },
    { value: 33, name: '水雾' },
    { value: 28, name: '雨天' },
    { value: 22, name: '晴天' },
    { value: 20, name: '阴天' },
];
const nameVal =['烟火','水雾','雨天','晴天','阴天']
const colors = ['#D05613', '#D06E3C', '#D08C59', '#D09F80', '#D0A835']
      for (let index = 0; index < roseData.length; index++) {
        roseData[index].itemStyle = {
          color: colors[index]
        }
      }

      const originDataLen = roseData.length
      const spanAngle = 90 // 需要显示的角度
      const repeatedMultiple = 360 / spanAngle
      // 这里根据要显示的角度 计算了需要插入的数据量
      const addDataLen = parseInt((repeatedMultiple - 1) * originDataLen)
      for (let index = 0; index < addDataLen; index++) {
        roseData.push({
          name: null,
          // 这里给数据置零，即在视觉上不显示
          value: 0,
          // 这里保证了异常情况下(数据都为0时)作为占位的数据在视觉上仍为不可见状态。
          itemStyle: {
            color: 'rgba(0,0,0,0)'
          },
          tooltip: {
            show: false,
            formatter: null
          }
        })
      }

option = {
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow',
            textStyle: {
              color: 'rgba(255, 255, 255, 0.65)'
            }
          }
        },
        legend: {
          data: nameVal,
          selectedMode: false, //图例禁止点击
          orient: 'vertical',
          x: '75%',
          y: '45%',
          itemWidth: 18,
          itemHeight: 10,
          textStyle: {
            color: '#B3B5B7',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12
          }
        },
        series: [
          {
            name: '报警占比分析',
            type: 'pie',
            roseType: 'area',
            radius: '120%',
            center: ['54%', '90%'],
            startAngle: 180,
            label: {
              show: false
            },
            data: roseData
          },
          {
            type: 'gauge',
            radius: '150%',
            center: ['54%', '90%'],
            startAngle: 180,
            endAngle: 90,
            min: 0,
            max: 1,
            splitNumber: 5,
            axisLine: {
              lineStyle: {
                width: 1,
                color: [[1, '#343A40']]
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
                length: '100%',
              lineStyle: {
                color: '#343A40',
                width: 1
              }
            },
            axisLabel: {
              show: false
            },
            title: {
              show: false
            },
            detail: {
              fontSize: 0,
              offsetCenter: [0, '0%'],
              valueAnimation: true,
              formatter: function() {
                return ''
              },
              color: 'auto'
            },
            data: []
          },
          {
            type: 'gauge',
            radius: '130%',
            center: ['54%', '90%'],
            startAngle: 180,
            endAngle: 90,
            min: 0,
            max: 1,
            splitNumber: 5,
            axisLine: {
              lineStyle: {
                width: 1,
                color: [[1, '#343A40']]
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              length: '100%',
              lineStyle: {
                color: '#343A40',
                width: 1
              }
            },
            axisLabel: {
              show: false
            },
            data: []
          },
          {
            type: 'gauge',
            radius: '110%',
            center: ['54%', '90%'],
            startAngle: 180,
            endAngle: 90,
            min: 0,
            max: 1,
            splitNumber: 5,
            axisLine: {
              lineStyle: {
                width: 1,
                color: [[1, '#343A40']]
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              length: '80%',
              lineStyle: {
                color: '#343A40',
                width: 1
              }
            },
            axisLabel: {
              show: false
            },
            title: {
              show: false,
              offsetCenter: [0, '-20%'],
              fontSize: 30
            },
            detail: {
              fontSize: 0,
              offsetCenter: [0, '0%'],
              valueAnimation: true,
              formatter: function() {
                return ''
              },
              color: 'auto'
            },
            data: []
          },
          {
            type: 'gauge',
            radius: '90%',
            center: ['54%', '90%'],
            startAngle: 180,
            endAngle: 90,
            min: 0,
            max: 1,
            splitNumber: 5,
            axisLine: {
              lineStyle: {
                width: 1,
                color: [[1, '#343A40']]
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              length: '80%',
              lineStyle: {
                color: '#343A40',
                width: 1
              }
            },
            axisLabel: {
              show: false
            },
            detail: {
              fontSize: 0,
              offsetCenter: [0, '0%'],
              valueAnimation: true,
              formatter: function() {
                return ''
              },
              color: 'auto'
            },
            data: []
          },
          {
            type: 'gauge',
            radius: '70%',
            center: ['54%', '90%'],
            startAngle: 180,
            endAngle: 90,
            min: 0,
            max: 1,
            splitNumber: 5,
            axisLine: {
              lineStyle: {
                width: 1,
                color: [[1, '#343A40']]
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              length: '80%',
              lineStyle: {
                color: '#343A40',
                width: 1
              }
            },
            axisLabel: {
              show: false
            },
            detail: {
              show: false,
              fontSize: 0,
              offsetCenter: [0, '0%'],
              valueAnimation: true,
              formatter: function() {
                return ''
              },
              color: 'auto'
            },
            data: []
          },
          {
            type: 'gauge',
            radius: '50%',
            center: ['54%', '90%'],
            startAngle: 180,
            endAngle: 90,
            min: 0,
            max: 1,
            splitNumber: 5,
            axisLine: {
              lineStyle: {
                width: 1,
                color: [[1, '#343A40']]
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              length: '80%',
              lineStyle: {
                color: '#343A40',
                width: 1
              }
            },
            axisLabel: {
              show: false
            },
            detail: {
              fontSize: 0,
              offsetCenter: [0, '0%'],
              valueAnimation: true,
              formatter: function() {
                return ''
              },
              color: 'auto'
            },
            data: []
          }
        ]
      }