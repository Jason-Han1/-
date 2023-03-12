  option= {
        color: ['#F7760D', '#1F66CC'],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        grid: {
          left: 0,
          top: 0
        },
        legend: {
          orient: 'vertical',
          right: '0',
          bottom: '100',
          data: ['男', '女'],
          itemWidth: 25,
          itemHeight: 25,
          textStyle: {
            color: '#BFC6CA',
            fontSize: '20'
          }
        },
        series: [
          {
            name: '出租人群',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [{ value: 335, name: '男' }, { value: 310, name: '女' }],
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        ]
      }