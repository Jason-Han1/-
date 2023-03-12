option = {
        backgroundColor: '#042522',
        color: ['#b1b200', '#2d6300', '#97e355', '#69a535', '#e8e900'],
        title: {
          text: '',
          subtext: '',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          show: true,
          x: 'left',
          y: 'top',
          top: 15,
          itemWidth: 20,
          itemHeight: 10,
          textStyle: {
            color: '#b7fffb',
            fontSize: 12
          },
          data: ['用水', '智能预警', '充电桩', '用电', '远程监控']
        },
        grid: {
            containLabel: true
        },
        calculable: true,
        series: [
          {
            name: '监控点位',
            type: 'pie',
            radius: [25, 70],
            center: ['50%', '62%'],
            roseType: 'area',
            label: {
                formatter: '{d}%'
            },
            labelLine: {
                show: true,
                length: 3,
                length2: 5
            },
            data: [
              { value: 10, name: '用水' },
              { value: 5, name: '智能预警' },
              { value: 15, name: '充电桩' },
              { value: 25, name: '用电' },
              { value: 20, name: '远程监控' }
            ]
          }
        ]
      };