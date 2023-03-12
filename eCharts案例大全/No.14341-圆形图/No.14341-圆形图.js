option = {
          title: {
            text: '30%',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'normal',
              color: '#0580f2',
              fontSize: '90'
            }
          },
          color: ['rgba(176, 212, 251, 1)'],
        
       
          series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['50%', '56%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [{
              value: 30,
              name: '01',
              itemStyle: {
                normal: {
                  color: {  // 完成的圆环的颜色
                    colorStops: [{
                      offset: 0, color: '#00cefc' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#367bec' // 100% 处的颜色
                    }]
                  },
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                },
               
              }
            }, {
              value: 70,
              name: 'invisible'
            }]
          }
          ]
        }