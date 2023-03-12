option = {
            radar: {
              // shape: 'circle',
              name: {
                textStyle: {
                  color: '#999999',
                }
              },
              splitArea: {
                areaStyle: {
                  color: ['#fff', '#fff', '#fff', '#fff'],
                  shadowColor: 'rgba(0, 100, 0, 0.3)'
                }
              },
              indicator: [
                {name: '负面', max: 100},
                {name: '正面', max: 100},
                {name: '中立', max: 100}
              ]
            },
            series: [{
              type: 'radar',
              data: [
                {
                  value: [68.9, 18.1, 13],
                  name: '数据',
                  itemStyle: {
                    normal: {
                      color: 'rgba(5, 128, 242, 0.8)'
                    }
                  },
                  areaStyle: {
                    normal: {
                      color: '#0580f2'
                    }
                  }
                }
              ]
            }]
          }