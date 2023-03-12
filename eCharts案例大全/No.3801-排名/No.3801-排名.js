option = {
        backgroundColor: '#0C1B52',
        tooltip: {
          trigger: 'axis',
          formatter: '{c} 个 ',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          name: 'name',
          splitLine: {
            lineStyle: {
              color: 'gray'
            }
          },
          axisLine: {
            lineStyle: {
              color: 'white'
            }
          },
          axisLabel: {
            fontSize: 10
          },
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          axisLabel: {
            fontSize: 10
          },
          axisLine: {
            lineStyle: {
              color: 'white'
            }
          },
          data: ['1','2','3','4','5','6']
        },
        series: [
          {
            type: 'bar',
            color: '#1465BE',
            data: ['1','2','3','4','5','6']
          }
        ]
      }