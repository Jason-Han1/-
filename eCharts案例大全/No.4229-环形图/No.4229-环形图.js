option = {
    backgroundColor:"rgb)3,31,94)",
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c}天 ({d}%)'
      },
      color: ['#02e500', '#ffff00', '#fca660', '#fb0103', '#9a024b', '#7c0024'],
      legend: {
        orient: 'vertical',
        right: 10,
        top: 'center',
        data: ['优', '良', '轻度', '中度', '重度', '严重'],
        textStyle: {
          color: '#eee',
          fontSize: '20'
        },
        itemWidth: 15,
        itemHeight: 15,
        itemGrap: 0
      },
      series: [
        {
          name: '空气质量等级',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          zlevel: 1,
          label: {
            normal: {
              padding: [5, 10, 5, 10],
              // backgroundColor: 'rgba(6,33,79)',
              show: false,
              position: 'center',
              formatter: [
                // '{value|{b}:{c}}天',
                // '{name|{b}}'
                '{value|{b}}',
                '{d}%'
                // '{name|{d}%}'
              ].join('\n'),
              rich: {
                value: {
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 'bold',
                  lineHeight: 28,
                },
                name: {
                  color: '#fff',
                  lineHeight: 28
                },
              },
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '20',
                fontWeight: 'bold'
              }
            }
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '15',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
           data: [
             {value: 335, name: '优'},
             {value: 310, name: '良'},
             {value: 234, name: '轻度'},
             {value: 135, name: '中度'},
             {value: 548, name: '重度'},
             {value: 150, name: '严重'}
           ]
        }
      ]
    };