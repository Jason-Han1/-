  option = {
      color: ['#60ABFC',],
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      legend: {
          orient: 'horizontal',
          data: [443, 445, 139, 22, 3389, 80, 5357, 135, 3306, 8080],
          textStyle: {
              color: '#858FA6',
              fontFamily: 'Microsoft YAHei,serf'
          }
      },
      grid: {
          top: 20,
          left: 20,
          right: 20,
          bottom: 10,
          containLabel: true
      },
      xAxis: {
          data: [443, 445, 139, 22, 3389, 80, 5357, 135, 3306, 8080],
          axisLabel: {
              show: true,
              color: '#858fa6'
          },
          axisTick: {
              show: false
          },
          splitLine: {
              lineStyle: {
                  width: 1,
                  color: '#E2E2E2'
              }
          },
          axisLine: {
              lineStyle: {
                  width: 1,
                  color: '#E2E2E2'
              }
          }
      },
      yAxis: {
          data: [],
          axisTick: {
              show: false
          },
          splitLine: {
              lineStyle: {
                  width: 1,
                  color: '#E2E2E2'
              }
          },
          axisLabel: {
              color: '#858fa6'
          },
          axisLine: {
              lineStyle: {
                  width: 0,
                  color: '#E2E2E2',
                  show: false
              }
          }
      },
      series: [{
          name: '数量',
          type: 'bar',
          data: [139, 132, 126, 118, 85, 84, 74, 69, 52, 50],
          barGap: 0,
          barWidth: '60%'
      }]
  }