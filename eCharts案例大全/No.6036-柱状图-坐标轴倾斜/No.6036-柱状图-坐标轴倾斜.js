option= {
    backgroundColor: '#232f62',
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          x: '9%',
          y: '15%',
          x2: '3%',
          y2: '25%'
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          data: ['兰州', '嘉峪关', '金昌', '天水', '武威', '张掖', '清泉', '庆阳', '定西', '白银', '陇南', '临夏', '甘南'],
          axisLine: {
            show: true,
            lineStyle: {
              color: '#727ea8',
              width: 1
            }
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: '#3a70c3',
              width: 2
            }
          },
          axisLabel: {
            rotate: 45,
            show: true,
            interval: 0,
            textStyle: {
              color: '#fff',
              fontSize: 12
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#E6E6E6'
            }
          }
        }],
        yAxis: [
          {
            type: 'value',
            position: 'left',
            min: 0,
            max: 100,
            interval: 20,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#727ea8',
                width: 1
              }
            },
            axisLabel: {
              show: true,
              // margin: 15,
              // formatter: '{value}件',
              textStyle: {
                color: '#fff',
                fontSize: 12
              }
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: '#3a70c3',
                width: 2
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#1c2a60',
                type: 'solid'
              }
            }
          }
        ],
        series: [
          {
            name: '',
            type: 'bar',
            barWidth: '15%',
            data: [70, 50, 60, 40, 70, 50, 60, 40, 70, 50, 60, 40, 34],
            itemStyle: {
              normal: {
                color: '#00ff54'
              }
            }
          }
        ]
      }