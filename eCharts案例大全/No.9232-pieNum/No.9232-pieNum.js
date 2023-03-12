var num = 40;
    option= {
      title: {
        text: num + '%',
        x: 'center',
        y: 'center',
        textStyle: {
          fontSize: 100,
          fontWeight: 'normal',
          color: '#fff',
          fontFamily: 'Century Gothic'
        },
        subtextStyle: {
          color: '#000000',
          fontSize: 25,
          fontWeight: 'normal'
        }
      },

      series: [
        {
          type: 'pie',
          radius: ['80%', '60%'],
          // silent: true,
          labelLine: {
            show: false
          },
          data: [
            {
              hoverOffset: 1,
              value: num,
              itemStyle: {
                color: '#99f'
              },
              label: {
                show: false
              }
            },
            {
              markArea: {
                silent: true
              },
              value: 100 - num,
              itemStyle: {
                color: '#9f9'
              },
              label: {
                show: false
              }
            }
          ]
        }
      ]
    
  }