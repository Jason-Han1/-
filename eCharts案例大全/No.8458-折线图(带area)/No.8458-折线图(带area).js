option = {
      grid: {
        bottom: '20%',
        top: '20%',
        width: '100%',
        left: '0%',
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          color: '#fff',
          fontSize: 30
        },
        data: ['2019-07','2019-08','2019-09','2019-10','2019-11','2019-12']
      },
      yAxis: {
        show: false
      },
      series: [{
        data: [22,12,16,18,24,32],
        showSymbol: true,
        symbolSize: 20,
        type: 'line',
        smooth: true,
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0, color: 'rgb(52, 253, 250)'
            }, {
              offset: 1, color: 'rgb(231, 255, 255)'
            }],
            global: false
          },
          width: 6
        },
        label: {
          show: true,
          position: 'top',
          textStyle: {
            color: '#fff',
            fontSize: 30
          },
        //   formatter: '{c}%'
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: 'rgb(7, 178, 195)'
            }, {
              offset: 1, color: 'rgb(16, 28, 40)'
            }],
            global: false
          }
        }
      }]
    }