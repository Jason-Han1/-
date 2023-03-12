option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
          backgroundColor: '#999999'
        },
        color: ['#D4A8EC', '#8259F7'],
        legend: {
            orient :'vertical',
          icon: 'roundRect',
          top: '40%',
          left: '55%',
          itemGap: 120,
          itemWidth: 16
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['30%', '50%'],
               center: ['30%', '48%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '18',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: 'a' },
              { value: 335, name: '3' }
            ]
          }
        ]
      }